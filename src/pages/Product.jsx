import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'

import Helmet from '../components/Helmet'
import Section, { SectionTitle, SectionBody } from '../components/Section'
import ProductView from '../components/ProductView'
import Breadcrumb from '../components/Breadcrumb'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'

import { setProductSlug } from '../redux/product/productSlice'
import { getProductBySlugSelector, getKeyboardsSelector } from '../redux/selectors'

const Product = () => {
    const dispatch = useDispatch()

    const params = useParams()

    const product = useSelector(getProductBySlugSelector)
    const relatedProduct = useSelector(getKeyboardsSelector)

    // console.log(product)
    // console.log(relatedProduct)

    const [breadcrumbLv2, setBreadcrumbLv2] = useState('')

    useEffect(() => {
        dispatch(setProductSlug(params.slug))
    }, [params.slug])

    // TODO: Xác định loại sản phẩm
    useEffect(() => {
        let value = ''
        if (product.display_name) {
            const string = product.display_name.toLowerCase()

            const isKeyboard = _.includes(string, 'bàn phím') ? 'keyboard' : ''

            const isKeycap = _.includes(string, 'keycap') ? 'keycap' : ''

            const isSwitch = _.includes(string, 'switch') ? 'switch' : ''

            // console.log({ isKeyboard, isKeycap, isSwitch })

            value = isKeyboard || isKeycap || isSwitch

            console.log({ value })
        }
        setBreadcrumbLv2(value)
    }, [params.slug, product])

    return (
        <Helmet title={product.display_name ? product.display_name : 'Sản phẩm'} option="1">
            <Section>
                <SectionBody>
                    <Breadcrumb
                        breadcrumb_lv2={breadcrumbLv2}
                        breadcrumb_lv3={product.display_name ? product.display_name : ''}
                    />
                </SectionBody>
            </Section>

            <Section>
                <SectionBody>
                    <ProductView product={product} />
                </SectionBody>
            </Section>

            <Section>
                <SectionTitle>
                    khám phá <strong>thêm</strong>
                </SectionTitle>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={1} gap={20}>
                        {relatedProduct.map((item, index) => (
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
                </SectionBody>
            </Section>
        </Helmet>
    )
}

export default Product
