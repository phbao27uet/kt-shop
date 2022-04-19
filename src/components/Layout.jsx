import React, { useState, useEffect } from 'react'

import { getKeyboard } from '../redux/keyboard/keyboardSlice'
import { useDispatch, useSelector } from 'react-redux'

import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'

import CreateRoutes from '../router/CreateRoutes'
import Header from './Header'
import Footer from './Footer'

import 'antd/dist/antd.css'

const Layout = () => {
    const [isLoading, setLoading] = useState(true)

    const loading = useSelector((state) => state.keyboard.loading)

    const dispatch = useDispatch()

    useEffect(async () => {
        dispatch(getKeyboard())
    }, [])

    useEffect(() => {
        let timerId
        if (!loading) {
            timerId = setTimeout(() => setLoading(loading), 1500)
        }

        return () => clearTimeout(timerId)
    }, [loading])

    const antIcon = <LoadingOutlined style={{ fontSize: 40 }} spin />

    return (
        <div>
            {isLoading ? (
                <div className="loading">
                    <div>
                        <Spin indicator={antIcon} />
                    </div>
                    <div className="loading__txt">Sắp xong rùi!!!</div>
                </div>
            ) : (
                <>
                    <Header />
                    <div className="container">
                        <div className="main">
                            <CreateRoutes />
                        </div>
                    </div>
                    <Footer />
                </>
            )}
        </div>
    )
}

export default Layout
