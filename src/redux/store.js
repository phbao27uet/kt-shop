import { configureStore } from '@reduxjs/toolkit'

import keyboardReducer from './keyboard/keyboardSlice'

const store = configureStore({
    reducer: {
        keyboard: keyboardReducer,
    },
})

export default store
