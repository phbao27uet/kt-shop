import React from 'react'
import PropTypes from 'prop-types'

import Grid from './Grid'
import ProductCard from './ProductCard'

const ProductList = (props) => {
    const products = props.products
    // console.log(props.products)
    console.log('Product List', products)

    return (
        <div className="product-list">
            <Grid col={3} mdCol={2} smCol={1} gap={20}>
                {products.map((item, index) => (
                    <ProductCard
                        key={index}
                        img1={item?.url_ava}
                        img2={item?.url_thumbs[1]}
                        name={item?.display_name}
                        price={item?.price}
                        slug={item?.path}
                    />
                ))}
            </Grid>
        </div>
    )
}

ProductList.propTypes = {
    products: PropTypes.array.isRequired,
}

export default ProductList
