import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Button from '../components/Button'
import ShoppingCartItem from '../components/ShoppingCartItem'
import Breadcrumb from '../components/Breadcrumb'
import Helmet from '../components/Helmet'

import numberWithCommas from '../utils/numberWithCommas'
import { getProductCartSelector } from '../redux/selectors'

const Cart = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const cartItems = useSelector(getProductCartSelector)

    const [cartProducts, setCartProducts] = useState([])

    const [totalProducts, setTotalProducts] = useState(0)

    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        setCartProducts(cartItems)

        setTotalProducts(
            cartItems.reduce((totalProducts, item) => {
                return totalProducts + item.quantity
            }, 0),
        )

        setTotalPrice(
            cartItems.reduce((totalPrice, item) => {
                return totalPrice + item.quantity * item.price
            }, 0),
        )
    }, [cartItems])

    useEffect(() => {
        console.log({ cartProducts, totalProducts, totalPrice })
    })

    return (
        <Helmet title="Giỏ hàng">
            <div className="cart">
                <Breadcrumb breadcrumb_lv3="Giỏ hàng" />
                <h1 className="cart__heading">
                    Giỏ hàng
                    <span className="cart__heading__count">{`( ${totalProducts} sản phẩm )`}</span>
                </h1>
                <div className="cart__body">
                    {cartProducts.length > 0 ? (
                        <div className="cart__body__not-empty">
                            <div className="cart__body__not-empty__list">
                                {cartProducts.map((item) => (
                                    <ShoppingCartItem key={item.id} item={item} />
                                ))}
                            </div>
                            <div className="cart__body__not-empty__info">
                                <div className="cart__body__not-empty__info__total">
                                    <p>Thành tiền:</p>
                                    <p className="cart__body__not-empty__info__total__highlight">
                                        {numberWithCommas(totalPrice)}
                                        <span>₫</span>
                                    </p>
                                </div>
                                <div className="cart__body__not-empty__info__btn">
                                    <Button
                                        size="block"
                                        onClick={() => alert('Chức năng sắp được mở')}
                                    >
                                        Thanh toán ngay
                                    </Button>
                                    <Button size="block" onClick={() => navigate('/')}>
                                        Tiếp tục mua hàng
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="cart__body__empty">
                            <img
                                src="https://bizweb.dktcdn.net/100/436/596/themes/834446/assets/empty-cart.png?1649002650564"
                                alt=""
                            />
                            <Button>
                                <Link to="/">Tiếp tục mua hàng</Link>
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </Helmet>
    )
}

export default Cart
