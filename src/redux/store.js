import { configureStore } from '@reduxjs/toolkit'

import keyboardReducer from './keyboard/keyboardSlice'
import sortFilterReducer from './sort-filter/sortFilterSlice'

const store = configureStore({
    reducer: {
        keyboard: keyboardReducer,
        sortFilter: sortFilterReducer,
    },
})

export default store
