import React, { useState, useEffect } from 'react'
import { Input } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { productRemainingSelector, getTextSearchSelector } from '../redux/selectors'
import { setFilterTextSearch } from '../redux/product/productSlice'

import Helmet from '../components/Helmet'
import Breadcrumb from '../components/Breadcrumb'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'

import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'

const antIcon = <LoadingOutlined style={{ fontSize: 40 }} spin />

const SearchPage = () => {
    const dispatch = useDispatch()
    const [isLoading, setLoading] = useState(false)

    const products = useSelector(productRemainingSelector)
    const textSearch = useSelector(getTextSearchSelector)

    // console.log(products)

    useEffect(() => {
        setLoading(true)

        setTimeout(() => setLoading(false), 1500)
    }, [textSearch])

    const [searchInput, setSearchInput] = useState(textSearch)

    useEffect(() => {
        setSearchInput(textSearch)
    }, [textSearch])

    const handleTextSearchChange = (e) => {
        setSearchInput(e.target.value)
    }

    const handleOnClick = () => {
        const handleDispatch = () => {
            dispatch(setFilterTextSearch(searchInput))
        }

        handleDispatch()
    }

    return (
        <Helmet title={textSearch ? textSearch : 'Tìm kiếm'}>
            <Breadcrumb breadcrumb_lv3="Kết quả tìm kiếm" />
            <div className="search-page">
                {isLoading ? (
                    <Spin indicator={antIcon} />
                ) : products.length === 0 ? (
                    <>
                        <h2 className="search-page__title">
                            {textSearch === ''
                                ? 'NHẬP TỪ KHÓA ĐỂ TÌM KIẾM SẢN PHẨM'
                                : 'KHÔNG TÌM THẤY BẤT KỲ KẾT QUẢ NÀO VỚI TỪ KHÓA TRÊN.'}
                        </h2>

                        {textSearch === '' ? (
                            <p className="search-page__desc">Vui lòng nhập từ khóa tìm kiếm khác</p>
                        ) : null}
                        <Input.Search
                            value={searchInput}
                            onChange={handleTextSearchChange}
                            placeholder="Bạn cần tìm gì hôm nay"
                            className="search-page__input"
                            size="large"
                            onSearch={handleOnClick}
                        />
                    </>
                ) : (
                    <>
                        <h2>
                            CÓ <strong>{products.length}</strong> KẾT QUẢ TÌM KIẾM PHÙ HỢP
                        </h2>
                        <Grid col={5} mdCol={3} smCol={2} gap={20}>
                            {products.map((item, index) => (
                                <ProductCard
                                    key={index}
                                    id={item.id}
                                    img1={item.url_ava}
                                    img2={item.url_thumbs[1]}
                                    name={item.display_name}
                                    price={item.price}
                                    slug={item.path}
                                />
                            ))}
                        </Grid>
                    </>
                )}
            </div>
        </Helmet>
    )
}

export default SearchPage
