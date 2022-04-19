import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
    name: 'product',
    initialState: {
        slug: '',
        textSearch: '',
    },
    reducers: {
        setProductSlug: (state, action) => {
            state.slug = action.payload
        },
        setFilterTextSearch: (state, action) => {
            state.textSearch = action.payload
        },
    },
})

export const { setProductSlug, setFilterTextSearch } = productSlice.actions

export default productSlice.reducer
