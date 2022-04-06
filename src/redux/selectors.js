import { createSelector } from '@reduxjs/toolkit'

export const getAllKeyboardSelector = (state) => state.keyboard.data

export const getFilterKeyboardSelector = (state) => state.keyboard.filter

// export const getPriceFilterSelector = (state) => state.keyboard.filter

export const getNewKeyboardsSelector = createSelector(getAllKeyboardSelector, (keyboard) => {
    return [keyboard[2], keyboard[6], keyboard[8], keyboard[15]]
})

export const getKeyboardsSelector = createSelector(getAllKeyboardSelector, (keyboard) => {
    const count = 4
    const max = keyboard.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return keyboard.slice(start, start + count)
})

export const keyboardRemaningSelector = createSelector(
    getAllKeyboardSelector,
    getFilterKeyboardSelector,
    (keyboard, filter) => {
        let newState = [...keyboard]

        if (filter.layout.length > 0) {
            newState = keyboard.filter((item) => {
                const check = filter.layout.find((_layout) => _layout === item.type_layout)
                return check
            })
        }

        if (filter.keycap.length > 0) {
            newState = newState.filter((item) => {
                const check = filter.keycap.find((_keycap) => item.type_keycap.includes(_keycap))
                return check
            })
        }

        if (filter.switch.length > 0) {
            newState = newState.filter((item) => {
                const check = filter.switch.find((_switch) => _switch === item.type_switch)
                return check
            })
        }

        if (filter.price.length > 0) {
            newState = newState.filter((item) => {
                const check = filter.price.find((_price) => {
                    switch (_price) {
                        case 'Giá dưới 100.000đ':
                            return item.price < 100000
                        case '100.000đ - 200.000đ':
                            return 100000 <= item.price && item.price <= 200000
                        case '300.000đ - 500.000đ':
                            return 300.0 <= item.price && item.price <= 500000
                        case '500.000đ - 1.000.000đ':
                            return 500000 <= item.price && item.price <= 1000000
                        case 'Giá trên 1.000.000đ':
                            return item.price > 1000000
                    }
                })

                return check
            })
        }

        console.log({ newState })
        return newState
    },
)
