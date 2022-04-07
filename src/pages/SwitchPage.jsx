import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Helmet from '../components/Helmet'
import Filter from '../components/Filter'
import ProductList from '../components/ProductList'
import Sort from '../components/Sort'

import { getFilterSwitchSelector } from '../redux/selectors'
import { switchFilterChange } from '../redux/switch/switchSlice'

import { TITLE_CATEGORY, TITLE_PRICE } from '../constants'

const TYPE_SWITCH = [
    'AKKO CS Switch',
    'AKKO Switch v2',
    'Cherry Switch',
    'TTC Switch',
    'GATERON switch',
]

const data = [
    {
        title: TITLE_CATEGORY,
        types: TYPE_SWITCH,
        name: 'category',
    },
]

const SwitchPage = () => {
    const dispatch = useDispatch()

    // const products = useSelector(keyboardRemaningSelector)
    const initFilter = useSelector(getFilterSwitchSelector)

    const [filter, setFilter] = useState({ category: [], price: [] })

    useEffect(() => {
        setFilter(initFilter)
    }, [initFilter])

    const selectFilter = (type, checked, item) => {
        switch (type) {
            case TITLE_CATEGORY:
                dispatch(switchFilterChange({ item: item, checked: checked, type: 'category' }))
                break
            case TITLE_PRICE:
                dispatch(switchFilterChange({ item: item, checked: checked, type: 'price' }))
                break
            default:
                throw new Error(`invalid type: ${type}`)
        }
    }

    return (
        <Helmet title="Keycap">
            <div className="catalog">
                <div className="catalog__filter">
                    <Filter data={data} selectFilter={selectFilter} filter={filter} />
                </div>
                <div className="catalog__content">
                    <div className="catalog__content__sort">
                        <Sort />
                    </div>
                    <div className="catalog__content__list">
                        <ProductList products={[]} page="switch" />
                        Updating ...
                    </div>
                </div>
            </div>
        </Helmet>
    )
}

export default SwitchPage
