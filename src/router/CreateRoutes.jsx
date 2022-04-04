import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import KeyboardPage from '../pages/KeyboardPage'
import KeycapPage from '../pages/KeycapPage'
import SwitchPage from '../pages/SwitchPage'
import Product from '../pages/Product'

const CreateRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog/:slug" element={<Product />} />
            <Route path="keyboard" element={<KeyboardPage />} />
            <Route path="keycap" element={<KeycapPage />} />
            <Route path="switch" element={<SwitchPage />} />
        </Routes>
    )
}

export default CreateRoutes
