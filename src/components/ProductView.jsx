import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import ProductImageSlider from './ProductImageSlider'
import Button from './Button'

import { addItem } from '../redux/shopping-cart/shoppingCartSlice'

import numberWithCommas from '../utils/numberWithCommas'

const ProductView = (props) => {
    const dispatch = useDispatch()

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

    const updateQuantity = (type) => {
        if (type === 'minus') {
            const index = quantity > 1 ? quantity - 1 : quantity
            setQuantity(index)
        } else if (type === 'plus') {
            setQuantity(quantity + 1)
        }
    }

    const addToCart = () => {
        dispatch(
            addItem({
                id: product.id,
                name: product.display_name,
                slug: product.path,
                price: product.price,
                quantity: quantity,
                image: product.url_thumbs[0],
            }),
        )

        alert(
            `Successfully added to cart: ${product.display_name} Số lượng: ${quantity} ID: ${product.id}`,
        )
    }

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
                    <span className="product-view__info__item__status product-view__info__item__title">
                        Tình trạng: <span>Còn hàng</span>
                    </span>
                </div>
                <div className="product-view__info__item">
                    <span className="product-view__info__item__quantity">
                        <span className="product-view__info__item__title">Số lượng:</span>
                        <div className="product-view__info__item__quantity__wrapper">
                            <div
                                className="product-view__info__item__quantity__wrapper__btn"
                                onClick={() => updateQuantity('minus')}
                            >
                                <i className="bx bx-minus"></i>
                            </div>
                            <div className="product-view__info__item__quantity__wrapper__index">
                                {quantity}
                            </div>
                            <div
                                className="product-view__info__item__quantity__wrapper__btn"
                                onClick={() => updateQuantity('plus')}
                            >
                                <i className="bx bx-plus"></i>
                            </div>
                        </div>
                    </span>
                </div>
                <div className="product-view__info__item">
                    <Button size="btn-cart" onClick={addToCart}>
                        <div className="product-view__info__item__btn">
                            <span>Mua ngay</span>
                            <span className="product-view__info__item__btn__txt">
                                đặt hàng giao tận nơi
                            </span>
                        </div>
                    </Button>
                </div>
                <div className="product-view__info__item">
                    <div className="product-view__info__item__hotline product-view__info__item__title">
                        Gọi đặt mua:{' '}
                        <strong className="product-view__info__item__hotline__highlight">
                            0123456789
                        </strong>{' '}
                        (miễn phí 8:30 - 21:30).
                    </div>
                </div>
                <div className="product-view__info__item">
                    <div className="product-view__info__item__service">
                        <div className="product-view__info__item__service__item">
                            <img
                                src="https://bizweb.dktcdn.net/100/436/596/themes/834446/assets/policy_images_2.svg?1649002650564"
                                alt=""
                            />
                            <span>
                                VOUCHER <span className="txt-highlight">FREESHIP</span> VỚI ĐƠN HÀNG
                                TỪ <span className="txt-highlight">800.000Đ</span>
                            </span>
                        </div>
                        <div className="product-view__info__item__service__item">
                            <img
                                src="https://bizweb.dktcdn.net/100/436/596/themes/834446/assets/policy_images_3.svg?1649002650564"
                                alt=""
                            />
                            <span>
                                BẢO HÀNH <span className="txt-highlight">1 NĂM</span> DO LỖI NHÀ SẢN
                                XUẤT
                            </span>
                        </div>
                        <div className="product-view__info__item__service__item">
                            <img
                                src="https://bizweb.dktcdn.net/100/436/596/themes/834446/assets/policy_images_4.svg?1649002650564"
                                alt=""
                            />
                            <span>
                                CAM KẾT <span className="txt-highlight">100% CHÍNH HÃNG</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

ProductView.propTypes = {
    product: PropTypes.object.isRequired,
}

export default ProductView
