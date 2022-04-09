import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import KeyboardPage from '../pages/KeyboardPage'
import KeycapPage from '../pages/KeycapPage'
import SwitchPage from '../pages/SwitchPage'
import Product from '../pages/Product'
import Cart from '../pages/Cart'
import Contact from '../pages/Contact'

const CreateRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="catalog/:slug" element={<Product />} />
            <Route path="keyboard" element={<KeyboardPage />} />
            <Route path="keycap" element={<KeycapPage />} />
            <Route path="switch" element={<SwitchPage />} />
            <Route path="cart" element={<Cart />} />
            <Route path="contact" element={<Contact />} />
        </Routes>
    )
}

export default CreateRoutes
