import { createSlice } from '@reduxjs/toolkit'

import _ from 'lodash'

const items =
    localStorage.getItem('cart-items') !== null
        ? JSON.parse(localStorage.getItem('cart-items'))
        : []

const initialState = {
    value: items,
}

export const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload
            const duplicate = findItem(state.value, newItem)

            if (duplicate.length > 0) {
                state.value = removeItem(state.value, newItem)

                state.value.push({
                    ...newItem,
                    idCart: duplicate[0].idCart,
                    quantity: newItem.quantity + duplicate[0].quantity,
                })
            } else {
                state.value.push({
                    ...newItem,
                    idCart:
                        state.value.length > 0 ? state.value[state.value.length - 1].idCart + 1 : 1,
                })
            }

            state.value = _.sortBy(state.value, ['idCart'])
            setLocalStorage('cart-items', state.value)
        },
        updateItem: (state, action) => {
            const newItem = action.payload
            const duplicate = findItem(state.value, newItem)

            if (duplicate.length > 0) {
                state.value = removeItem(state.value, newItem)
                console.log({ duplicate })
                state.value.push({
                    idCart: duplicate[0].idCart,
                    ...newItem,
                })
            }
            state.value = _.sortBy(state.value, ['idCart'])
            setLocalStorage('cart-items', state.value)
        },
        deleteItem: (state, action) => {
            const itemDelete = action.payload
            state.value = removeItem(state.value, itemDelete)

            state.value = _.sortBy(state.value, ['idCart'])

            setLocalStorage('cart-items', state.value)
        },
    },
})

const findItem = (arr, item) => {
    return arr.filter((e) => e.id === item.id && e.slug === item.slug)
}

const removeItem = (arr, item) => {
    return arr.filter((e) => e.id !== item.id || e.slug !== item.slug)
}

const setLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data))
}

export const { addItem, updateItem, deleteItem } = shoppingCartSlice.actions

export default shoppingCartSlice.reducer
