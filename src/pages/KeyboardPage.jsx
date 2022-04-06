import React, { useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import Helmet from '../components/Helmet'
import Filter from '../components/Filter'
import ProductList from '../components/ProductList'

import {
    getAllKeyboardSelector,
    getFilterKeyboardSelector,
    keyboardRemaningSelector,
} from '../redux/selectors'

import { priceFilterChange, keyboardFilterChange } from '../redux/keyboard/keyboardSlice'

import { TITLE_LAYOUT, TITLE_KEYCAP, TITLE_SWITCH, TITLE_PRICE } from '../constants'

const TYPE_KEYCAP = ['PBT Double-Shot', 'PBT Dye-Subbed']

const TYPE_KEYCAP_PROFILE = ['OEM Profile', 'JDA Profile', 'ASA Profile', 'Cherry Profile']

const TYPE_SWITCH = ['AKKO CS Switch', 'AKKO Switch v2', 'Cherry Switch', 'TTC Switch']

const TYPE_LAYOUT = ['61', '75', '84', '87', '98', '104', '108']

const data = [
    {
        title: TITLE_LAYOUT,
        types: TYPE_LAYOUT,
        name: 'layout',
    },
    {
        title: TITLE_KEYCAP,
        types: [...TYPE_KEYCAP, ...TYPE_KEYCAP_PROFILE],
        name: 'keycap',
    },
    {
        title: TITLE_SWITCH,
        types: TYPE_SWITCH,
        name: 'switch',
    },
]

const KeyboardPage = () => {
    const dispatch = useDispatch()
    // const products = useSelector(getAllKeyboardSelector)
    const products = useSelector(keyboardRemaningSelector)
    const initFilter = useSelector(getFilterKeyboardSelector)

    const [filter, setFilter] = useState({ layout: [], keycap: [], switch: [], price: [] })

    useEffect(() => {
        setFilter(initFilter)
    }, [initFilter])

    // console.log({ filter })

    const selectFilter = (type, checked, item) => {
        switch (type) {
            case TITLE_LAYOUT:
                dispatch(keyboardFilterChange({ item: item, checked: checked, type: 'layout' }))
                break
            case TITLE_KEYCAP:
                dispatch(keyboardFilterChange({ item: item, checked: checked, type: 'keycap' }))
                break
            case TITLE_SWITCH:
                dispatch(keyboardFilterChange({ item: item, checked: checked, type: 'switch' }))
                break
            case TITLE_PRICE:
                dispatch(keyboardFilterChange({ item: item, checked: checked, type: 'price' }))
                break
            default:
                throw new Error(`invalid type: ${type}`)
        }
    }

    return (
        <Helmet title="Keyboard">
            <div className="catalog">
                <div className="catalog__filter">
                    <Filter data={data} selectFilter={selectFilter} filter={filter} />
                </div>
                <div className="catalog__content">
                    <div className="catalog__content__sort">Sort</div>
                    <div className="catalog__content__list">
                        <ProductList products={products} />
                    </div>
                </div>
            </div>
        </Helmet>
    )
}

export default KeyboardPage
