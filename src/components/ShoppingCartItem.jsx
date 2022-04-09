import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Button from './Button'

import { updateItem, deleteItem } from '../redux/shopping-cart/shoppingCartSlice'

import numberWithCommas from '../utils/numberWithCommas'

const ShoppingCartItem = (props) => {
    const dispatch = useDispatch()

    const [item, setItem] = useState(props.item)
    const [quantity, setQuantity] = useState(props.item.quantity)

    useEffect(() => {
        setItem(props.item)
        setQuantity(props.item.quantity)
    }, [props.item])

    const updateQuantity = (type) => {
        if (type === 'minus') {
            setQuantity(quantity - 1 === 0 ? 1 : quantity - 1)
            dispatch(
                updateItem({
                    ...item,
                    quantity: quantity - 1 === 0 ? 1 : quantity - 1,
                }),
            )
        } else if (type === 'plus') {
            setQuantity(quantity + 1)
            dispatch(updateItem({ ...item, quantity: quantity + 1 }))
        }
    }

    const handleDeleteItem = () => {
        dispatch(deleteItem(item))
        console.log('removeItem')
    }

    return (
        <div className="shopping-cart-item">
            <div className="shopping-cart-item__image">
                <Link to={`/catalog/${item.slug}`} target="_blank">
                    <img src={item.image} alt="" />
                </Link>
            </div>
            <div className="shopping-cart-item__info">
                <div className="shopping-cart-item__info__name">
                    <Link to={`/catalog/${item.slug}`} target="_blank">
                        {item.name}
                    </Link>
                </div>
                <div className="shopping-cart-item__info__price">
                    {numberWithCommas(item.price)}
                    <span>₫</span>
                </div>
                <div className="shopping-cart-item__info__quantity">
                    <div className="shopping-cart-item__info__quantity__wrapper">
                        <div
                            className="shopping-cart-item__info__quantity__wrapper__btn"
                            onClick={() => updateQuantity('minus')}
                        >
                            <i className="bx bx-minus"></i>
                        </div>
                        <div className="shopping-cart-item__info__quantity__wrapper__index">
                            {quantity}
                        </div>
                        <div
                            className="shopping-cart-item__info__quantity__wrapper__btn"
                            onClick={() => updateQuantity('plus')}
                        >
                            <i className="bx bx-plus"></i>
                        </div>
                    </div>
                </div>
                <div className="shopping-cart-item__info__remove">
                    <Button size="sm" onClick={handleDeleteItem}>
                        Xóa
                        {/* <i className="bx bx-trash"></i> */}
                    </Button>
                </div>
            </div>
        </div>
    )
}

ShoppingCartItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default ShoppingCartItem
