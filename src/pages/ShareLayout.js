import React from 'react'
import { Outlet } from 'react-router-dom'


// import file 
import Navbar from '../components/Navbar'
const ShareLayout = () => {
    return (
        <div className="container">
            <Navbar />
            <Outlet />
        </div>
    )
}

export default ShareLayout