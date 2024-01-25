import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
const Layout = () => {
    return (
        <>
            <Navbar />
            <div className='row'>
                <Sidebar className='col-lg-2 sidebar'/>
                <div className='col-lg-10'>
                    <Outlet />
                </div>  
            </div>
        </>
    )
}

export default Layout