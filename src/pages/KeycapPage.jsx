import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Helmet from '../components/Helmet'
import Filter from '../components/Filter'
import ProductList from '../components/ProductList'
import Sort from '../components/Sort'

import { getFilterKeycapSelector, keyboardRemaningSelector } from '../redux/selectors'
import { keycapFilterChange } from '../redux/keycap/keycapSlice'

import { TITLE_TRADEMARK, TITLE_KEYCAP, TITLE_PRICE } from '../constants'

const TYPE_TRADEMARK = ['Aifei SA', 'DAGK', 'Titan Nation', 'Gmk Clone', 'Yiwu']

const data = [
    {
        title: TITLE_TRADEMARK,
        types: TYPE_TRADEMARK,
        name: 'trademark',
    },
]

const KeycapPage = () => {
    const dispatch = useDispatch()

    // const products = useSelector(keyboardRemaningSelector)
    const initFilter = useSelector(getFilterKeycapSelector)

    const [filter, setFilter] = useState({ trademark: [], keycap: [], price: [] })

    useEffect(() => {
        setFilter(initFilter)
    }, [initFilter])

    const selectFilter = (type, checked, item) => {
        switch (type) {
            case TITLE_TRADEMARK:
                dispatch(keycapFilterChange({ item: item, checked: checked, type: 'trademark' }))
                break
            case TITLE_KEYCAP:
                dispatch(keycapFilterChange({ item: item, checked: checked, type: 'keycap' }))
                break
            case TITLE_PRICE:
                dispatch(keycapFilterChange({ item: item, checked: checked, type: 'price' }))
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
                        <ProductList products={[]} page='keycap'/>
                        Updating ...
                    </div>
                </div>
            </div>
        </Helmet>
    )
}

export default KeycapPage
