import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import apis from '../../apis'

// export const getKeycap = createAsyncThunk('keycap/getKeycap', async (params, thunkAPI) => {
//     const res = await apis.getKeyboard()
//     return res.data
// })

export const keycapSlice = createSlice({
    name: 'keycap',
    initialState: {
        data: [],
        loading: false,
        error: '',
        filter: {
            trademark: [],
            keycap: [],
            price: [],
        },
    },
    reducers: {
        keycapFilterChange: (state, action) => {
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
})

export const { keycapFilterChange } = keycapSlice.actions

export default keycapSlice.reducer
