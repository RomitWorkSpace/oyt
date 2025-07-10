import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../home/Home'
import Navbar from './Navbar'


function Layout() {
    return (
        <>
        <Navbar />
        <Routes>
            <Route path="/" exact element={<Home />} />
        </Routes>
        </>
    )
}

export default Layout
