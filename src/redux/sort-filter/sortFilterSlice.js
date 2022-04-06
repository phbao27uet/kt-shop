import { createSlice } from '@reduxjs/toolkit'

export const sortFilterSlice = createSlice({
    name: 'sortFilter',
    initialState: {
        value: '',
    },
    reducers: {
        sortFilterChange: (state, action) => {
            state.value = action.payload
        },
    },
})

export const { sortFilterChange } = sortFilterSlice.actions

export default sortFilterSlice.reducer
