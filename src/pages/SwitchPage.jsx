import React from 'react'

import Helmet from '../components/Helmet'
import Filter from '../components/Filter'
import ProductList from '../components/ProductList'

const TYPE_SWITCH = [
    'AKKO CS Switch',
    'AKKO Switch v2',
    'Cherry Switch',
    'TTC Switch',
]

const data = [
    {
        title: 'Loại',
        types: TYPE_SWITCH,
    },
]

const SwitchPage = () => {
    return (
        <Helmet title="Keycap">
            <div className="catalog">
                <div className="catalog__filter">
                    <Filter data={data} />
                </div>
                <div className="catalog__content">
                    <ProductList products={{}} />
                </div>
            </div>
        </Helmet>
    )
}

export default SwitchPage
