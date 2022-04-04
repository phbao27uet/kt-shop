import React from 'react'

import CreateRoutes from '../router/CreateRoutes'
import Header from './Header'
import Footer from './Footer'
const Layout = () => {
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
