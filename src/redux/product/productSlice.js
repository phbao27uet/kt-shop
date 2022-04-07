import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
    name: 'product',
    initialState: {
        slug: '',
    },
    reducers: {
        setProductSlug: (state, action) => {
            state.slug = action.payload
        },
    },
})

export const { setProductSlug } = productSlice.actions

export default productSlice.reducer
