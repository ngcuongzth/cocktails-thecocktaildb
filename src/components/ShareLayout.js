import React from 'react'
import { Outlet } from 'react-router-dom'


// import file
import Navbar from './Navbar';
import Sidebar from './Sidebar';
const ShareLayout = () => {
    return (
        <div className="container">
            <Navbar />
            <Sidebar/>
            <Outlet />
        </div>
    )
}

export default ShareLayout