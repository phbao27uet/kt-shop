import _ from 'lodash'
import { createSelector } from '@reduxjs/toolkit'
export const getAllKeyboardSelector = (state) => state.keyboard.data

export const getFilterKeyboardSelector = (state) => state.keyboard.filter

export const getFilterKeycapSelector = (state) => state.keycap.filter

export const getFilterSwitchSelector = (state) => state.switch.filter

// export const getPriceFilterSelector = (state) => state.keyboard.filter

export const getSortFilterSelector = (state) => state.sortFilter.value

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
    getSortFilterSelector,
    (keyboard, filter, sortFilter) => {
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

        // console.log({ sortFilter })
        // newState = sortBy(newState, sortFilter)
        // console.log({ newState })

        return sortBy(newState, sortFilter)
    },
)

const sortBy = (data, type) => {
    switch (type) {
        case 'alpha-asc':
            return _.orderBy(data, ['display_name'], ['asc'])

        case 'alpha-des':
            return _.orderBy(data, ['display_name'], ['desc'])

        case 'price-asc':
            return _.orderBy(data, ['price'], ['asc'])

        case 'price-des':
            return _.orderBy(data, ['price'], ['desc'])

        default:
            return data
    }
}
