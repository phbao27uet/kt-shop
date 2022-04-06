import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import apis from '../../apis'

export const getKeyboard = createAsyncThunk('keyboard/getKeyboard', async (params, thunkAPI) => {
    const res = await apis.getKeyboard()
    return res.data
})

export const keyboardSlice = createSlice({
    name: 'keyboard',
    initialState: {
        data: [],
        loading: false,
        error: '',
        filter: {
            layout: [],
            keycap: [],
            switch: [],
            price: [],
        },
    },
    reducers: {
        keyboardFilterChange: (state, action) => {
            if (action.payload.checked) {
                state.filter[action.payload.type].push(action.payload.item)
            } else {
                const newState = state.filter[action.payload.type].filter(
                    (e) => e !== action.payload.item,
                )
                state.filter[action.payload.type] = newState
            }
        },
        priceFilterChange: (state, action) => {
            if (action.payload.checked) {
                state.filter.price.push(action.payload.item)
            } else {
                const newState = state.filter.price.filter((e) => e !== action.payload.item)
                state.filter.price = newState
            }
        },
    },
    extraReducers: {
        [getKeyboard.pending]: (state) => {
            state.loading = true
        },
        [getKeyboard.rejected]: (state, action) => {
            state.loading = false
            state.error = action.error
        },
        [getKeyboard.fulfilled]: (state, action) => {
            state.data = action.payload
            state.loading = false
        },
    },
})

export const { priceFilterChange, keyboardFilterChange } = keyboardSlice.actions

export default keyboardSlice.reducer
