import React, { useEffect } from 'react'

import { getKeyboard } from '../redux/keyboard/keyboardSlice'
import { useDispatch } from 'react-redux'

import CreateRoutes from '../router/CreateRoutes'
import Header from './Header'
import Footer from './Footer'

import 'antd/dist/antd.css'

const Layout = () => {
    const dispatch = useDispatch()

    useEffect(async () => {
        dispatch(getKeyboard())
    }, [])

    return (
        <div>
            <Header />
            <div className="container">
                <div className="main">
                    <CreateRoutes />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Layout
