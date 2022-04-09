import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { addItem } from '../redux/shopping-cart/shoppingCartSlice'

import Button from './Button'

import numberWithCommas from '../utils/numberWithCommas'

const ProductCard = (props) => {
    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(
            addItem({
                id: props.id,
                name: props.name,
                slug: props.slug,
                price: props.price,
                quantity: 1,
                image: props.img2,
            }),
        )
        alert(`Successfully added to cart: ${props.name} Số lượng: ${1} ID: ${props.id}`)
    }

    return (
        <div className="product-card">
            <Link to={`/catalog/${props.slug}`}>
                <div className="product-card__img">
                    <img src={props.img1} alt="" />
                    <img src={props.img2} alt="" />
                </div>
                <h3 className="product-card__name">{props.name}</h3>
                <div className="product-card__price">
                    <strong>{numberWithCommas(props.price)} ₫</strong>
                    <span className="product-card__price__old">
                        <del>{numberWithCommas(props.price + 150000)} ₫</del>
                    </span>
                </div>
            </Link>
            <div className="product-card__btn">
                <Button size="block" onClick={addToCart}>
                    Chọn mua
                </Button>
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    name: PropTypes.string.isRequired,
    img1: PropTypes.string.isRequired,
    img2: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
}

export default ProductCard
