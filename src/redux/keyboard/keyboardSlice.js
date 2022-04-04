import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import apis from '../../apis'

export const getKeyboard = createAsyncThunk(
    'keyboard/getKeyboard',
    async (params, thunkAPI) => {
        const res = await apis.getKeyboard()
        return res.data
    },
)

export const keyboardSlice = createSlice({
    name: 'keyboard',
    initialState: {
        data: [],
        loading: false,
        error: '',
    },
    reducer: {},
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

export const {} = keyboardSlice.actions

export default keyboardSlice.reducer
