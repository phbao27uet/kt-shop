import React, { useState } from 'react'
import { Radio } from 'antd'

import { useDispatch } from 'react-redux'
import { sortFilterChange } from '../redux/sort-filter/sortFilterSlice'

const Sort = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState('')

    const onChange = (e) => {
        setValue(e.target.value)
        dispatch(sortFilterChange(e.target.value))
    }

    return (
        <div className="sort">
            <span className="sort__title">Xếp theo:</span>
            <Radio.Group value={value} onChange={onChange}>
                <Radio value="alpha-asc">Tên A-Z</Radio>
                <Radio value="alpha-des">Tên Z-A</Radio>
                <Radio value="price-asc">Giá thấp đến cao</Radio>
                <Radio value="price-des">Giá cao đến thấp</Radio>
            </Radio.Group>
        </div>
    )
}

export default Sort
