import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'
import Checkbox from './Checkbox'

import { TITLE_PRICE } from '../constants'

const mainNav = [
    {
        display_name: 'Trang chủ',
        path: '/',
    },
    {
        display_name: 'keyboard',
        path: '/keyboard',
    },
    {
        display_name: 'keycap',
        path: '/keycap',
    },
    {
        display_name: 'switch',
        path: '/switch',
    },
    {
        display_name: 'Liên hệ',
        path: '/contact',
    },
]

const TYPE_PRICE = [
    'Giá dưới 100.000đ',
    '100.000đ - 200.000đ',
    '200.000đ - 300.000đ',
    '300.000đ - 500.000đ',
    '500.000đ - 1.000.000đ',
    'Giá trên 1.000.000đ',
]

const Filter = (props) => {
    const { data, selectFilter, filter } = props

    // console.log({ filter })
    // console.log(selectFilter, data)

    return (
        <div className="filter">
            <div className="filter__categories">
                <h3 className="filter__categories__heading filter__heading">DANH MỤC</h3>
                <div className="filter__categories__info">
                    {mainNav.map((item) => (
                        <Link to={item.path} key={item.path}>
                            <div className="filter__categories__info__item">
                                {item.display_name}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="filter__container">
                <h3 className="filter__container__heading filter__heading">TÌM THEO</h3>

                {data.map((item) => (
                    <div key={item.title} className="filter__widget">
                        <div className="filter__widget__title">{item.title}</div>
                        <div className="filter__widget__content">
                            {item.types.map((e) => (
                                <div key={e} className="filter__widget__content__item">
                                    <Checkbox
                                        label={e}
                                        value={e}
                                        checked={filter[item.name].includes(e)}
                                        onChange={(input) =>
                                            selectFilter(item.title, input.checked, e)
                                        }
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {/* TYPE PRICE */}
                <div className="filter__widget">
                    <div className="filter__widget__title">Giá sản phẩm</div>
                    <div className="filter__widget__content">
                        {TYPE_PRICE.map((item) => (
                            <div key={item} className="filter__widget__content__item">
                                <Checkbox
                                    label={item}
                                    value={item}
                                    checked={filter.price.includes(item)}
                                    onChange={(input) =>
                                        selectFilter(TITLE_PRICE, input.checked, item)
                                    }
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

Filter.propTypes = {
    data: PropTypes.array.isRequired,
    selectFilter: PropTypes.func,
    filter: PropTypes.object,
}

export default Filter
