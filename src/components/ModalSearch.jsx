import React, { useEffect, useState } from 'react'
import { Modal, Input } from 'antd'
import _ from 'lodash'

import { useDispatch, useSelector } from 'react-redux'

import { setFilterTextSearch } from '../redux/product/productSlice'
import { getTextSearchSelector } from '../redux/selectors'

import Button from './Button'

const Search = (props) => {
    const dispatch = useDispatch()
    const [textSearch, setTextSearch] = useState('')

    const handleTextSearchChange = (e) => {
        setTextSearch(e.target.value)
    }

    const text = useSelector(getTextSearchSelector)

    useEffect(() => {
        setTextSearch(text)
    }, [text])

    const handleOnClick = () => {
        props.handleOk()

        const handleDispatch = () => {
            dispatch(setFilterTextSearch(textSearch))
        }

        handleDispatch()
    }

    return (
        <Modal
            visible={props.visible}
            title="Tìm kiếm sản phẩm"
            onCancel={props.handleCancel}
            // onOk={handleOnClick}
            footer={[
                <Button key="back" size="sm" onClick={handleOnClick}>
                    Search
                </Button>,
            ]}
        >
            <Input
                placeholder="Bạn cần tìm gì hôm nay"
                onChange={handleTextSearchChange}
                value={textSearch}
                style={{ padding: '0.75rem 1.5rem' }}
                onPressEnter={handleOnClick}
            />
        </Modal>
    )
}

export default Search
