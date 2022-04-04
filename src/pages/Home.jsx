import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getKeyboard } from '../redux/keyboard/keyboardSlice'

import { getKeyboardsSelector } from '../redux/selectors'

import Helmet from '../components/Helmet'
import Slider from '../components/Slider'
import Grid from '../components/Grid'
import Section, { SectionTitle, SectionBody } from '../components/Section'
import ProductCard from '../components/ProductCard'

const Home = () => {
    const dispatch = useDispatch()

    useEffect(async () => {
        dispatch(getKeyboard())
    }, [])

    const newKeyboardData = useSelector(getKeyboardsSelector)

    console.log(newKeyboardData)

    return (
        <Helmet title="Trang chủ">
            <Slider />
            <Section>
                <SectionTitle>
                    Sản phẩm <strong>mới</strong>
                </SectionTitle>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={1} gap={20}>
                        {newKeyboardData[0] !== undefined
                            ? newKeyboardData.map((item, index) => (
                                  <ProductCard
                                      key={index}
                                      img1={item?.url_ava}
                                      img2={item?.url_thumbs[1]}
                                      name={item?.display_name}
                                      price={item?.price}
                                      slug={item?.path}
                                  />
                              ))
                            : null}
                    </Grid>
                </SectionBody>
            </Section>
        </Helmet>
    )
}

export default Home
