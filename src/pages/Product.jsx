import React from 'react'
import { useParams } from 'react-router-dom'

import Helmet from '../components/Helmet'
const Product = () => {
    const params = useParams()
    const { slug } = params
    console.log(params)

    return (
        <Helmet title={slug} option="1">
            Product
        </Helmet>
    )
}

export default Product
