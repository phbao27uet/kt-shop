import React from 'react'

import Helmet from '../components/Helmet'
import Filter from '../components/Filter'
import ProductList from '../components/ProductList'

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
    return (
        <Helmet title="Keyboard">
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

export default KeyboardPage
