import { createSelector } from '@reduxjs/toolkit'

export const getAllKeyboardSelector = (state) => state.keyboard.data

export const getKeyboardsSelector = createSelector(
    getAllKeyboardSelector,
    (keyboard) => {
        // const count = 4
        // const max = keyboard.length - count
        // const min = 0
        // const start = Math.floor(Math.random() * (max - min) + min)
        // return keyboard.slice(start, start + count)

        return [keyboard[2], keyboard[6], keyboard[8], keyboard[15]]
    },
)
