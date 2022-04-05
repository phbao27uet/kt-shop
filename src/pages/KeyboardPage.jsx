import React from 'react'

import { useSelector } from 'react-redux'

import Helmet from '../components/Helmet'
import Filter from '../components/Filter'
import ProductList from '../components/ProductList'

import { getAllKeyboardSelector } from '../redux/selectors'

const TYPE_KEYCAP = ['PBT Double-Shot', 'PBT Dye-Subbed']

const TYPE_KEYCAP_PROFILE = [
    'OEM Profile',
    'JDA Profile',
    'ASA Profile',
    'Cherry Profile',
]

const TYPE_SWITCH = [
    'AKKO CS Switch',
    'AKKO Switch v2',
    'Cherry Switch',
    'TTC Switch',
]

const TYPE_LAYOUT = ['61', '75', '84', '87', '98', '104', '108']

const data = [
    {
        title: 'Phân loại Layout',
        types: TYPE_LAYOUT,
    },
    {
        title: 'Phân loại Keycap',
        types: [...TYPE_KEYCAP, ...TYPE_KEYCAP_PROFILE],
    },
    {
        title: 'Phân loại Switch',
        types: TYPE_SWITCH,
    },
]

const KeyboardPage = () => {
    const products = useSelector(getAllKeyboardSelector)

    console.log({ products })

    return (
        <Helmet title="Keyboard">
            <div className="catalog">
                <div className="catalog__filter">
                    <Filter data={data} />
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
