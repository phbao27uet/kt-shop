import React from 'react'
import { useSelector } from 'react-redux'

import {
    getKeyboardsSelector,
    getNewKeyboardsSelector,
} from '../redux/selectors'

import Helmet from '../components/Helmet'
import Slider from '../components/Slider'
import Grid from '../components/Grid'
import Section, { SectionTitle, SectionBody } from '../components/Section'
import ProductCard from '../components/ProductCard'
import CategoryCard from '../components/CategoryCard'

import imgKeyboard from '../assets/category-img/ant_index_banner_1.jpg'
import imgKeycap from '../assets/category-img/ant_index_banner_3.jpg'

const categories = [
    {
        id: 1,
        title: 'keyboard',
        img: imgKeyboard,
        slug: 'keyboard',
    },
    {
        id: 2,
        title: 'keycap',
        img: imgKeycap,
        slug: 'keycap',
    },
    {
        id: 3,
        title: 'switch',
        img: imgKeycap,
        slug: 'switch',
    },
]

const Home = () => {
    const newKeyboardData = useSelector(getNewKeyboardsSelector)
    const keyboardData = useSelector(getKeyboardsSelector)

    // console.log(newKeyboardData)
    // console.log({ keyboardData })

    return (
        <Helmet title="More inspirational" option="1">
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

            <Section>
                <SectionTitle>
                    khuyến mãi <strong>tháng 4</strong>
                </SectionTitle>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={1} gap={20}>
                        {keyboardData.length > 0
                            ? keyboardData.map((item, index) => (
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

            <Section>
                <SectionBody>
                    <Grid col={3} mdCol={3} smCol={1} gap={20}>
                        {categories.map((item) => (
                            <CategoryCard
                                key={item.id}
                                img={item.img}
                                title={item.title}
                                slug={item.slug}
                            />
                        ))}
                    </Grid>
                </SectionBody>
            </Section>
        </Helmet>
    )
}

export default Home
