import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import ProductImageSlider from './ProductImageSlider'

import numberWithCommas from '../utils/numberWithCommas'

const ProductView = (props) => {
    const { product } = props
    const [images, setImages] = useState([])
    const [quantity, setQuantity] = useState(1)

    // console.log(product)

    useEffect(() => {
        if (product.url_thumbs && product.url_ava) {
            setImages([product.url_ava, ...product.url_thumbs])
        }
    }, [product])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [product])

    return (
        <div className="product-view">
            <div className="product-view__images">
                <ProductImageSlider images={images} />
            </div>
            <div className="product-view__info">
                <h3 className="product-view__info__heading">{product.display_name}</h3>
                <div className="product-view__info__item">
                    <span className="product-view__info__item__price">
                        {numberWithCommas(product.price ? product.price : '')} ₫
                    </span>
                </div>
                <div className="product-view__info__item">
                    <span className="product-view__info__item__status">
                        Tình trạng: <span>Còn hàng</span>
                    </span>
                </div>
                <div className="product-view__info__item">
                    <span className="product-view__info__item__quantity">
                        <div
                            className="product-view__info__item__quantity__btn"
                            // onClick={() => updateQuantity('minus')}
                        >
                            <i className="bx bx-minus"></i>
                        </div>
                        <div className="product-view__info__item__quantity__index">{quantity}</div>
                        <div
                            className="product-view__info__item__quantity__btn"
                            // onClick={() => updateQuantity('plus')}
                        >
                            <i className="bx bx-plus"></i>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    )
}

ProductView.propTypes = {
    product: PropTypes.object.isRequired,
}

export default ProductView
