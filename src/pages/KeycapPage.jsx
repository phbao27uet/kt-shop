import React from 'react'

import Helmet from '../components/Helmet'
import Filter from '../components/Filter'
import ProductList from '../components/ProductList'

const TYPE_TRADEMARK = ['Aifei SA', 'DAGK', 'Titan Nation', 'Gmk Clone', 'Yiwu']

const data = [
    {
        title: 'Thương hiệu',
        types: TYPE_TRADEMARK,
    },
]

const KeycapPage = () => {
    return (
        <Helmet title="Keycap">
            <div className="catalog">
                <div className="catalog__filter">
                    <Filter data={data} />
                </div>
                <div className="catalog__content">
                    <ProductList products={[]} />
                </div>
            </div>
        </Helmet>
    )
}

export default KeycapPage
