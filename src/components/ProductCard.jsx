import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'
import Button from './Button'
const ProductCard = (props) => {
    return (
        <div className="product-card">
            <Link to={`/catalog/${props.slug}`}>
                <div className="product-card__img">
                    <img src={props.img1} alt="" />
                    <img src={props.img2} alt="" />
                </div>
                <h3 className="product-card__name">{props.name}</h3>
                <div className="product-card__price">
                    <strong>{props.price}</strong>
                    <span className="product-card__price__old">
                        <del>{props.price}</del>
                    </span>
                </div>
            </Link>
            <div className="product-card__btn">
                <Button size="block">Chọn mua</Button>
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    name: PropTypes.string.isRequired,
    img1: PropTypes.string.isRequired,
    img2: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
}

export default ProductCard
