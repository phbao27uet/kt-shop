import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

const CategoryCard = (props) => {
    return (
        <div className="category-card">
            <div className="category-card__img">
                <img src={props.img} />
            </div>
            <div className="category-card__info">
                <div className="category-card__info__title">{props.title}</div>
                <Link to={`/${props.slug}`}>
                    <div className="category-card__info__btn allsides-8">
                        <p>Xem thêm</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

CategoryCard.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default CategoryCard
