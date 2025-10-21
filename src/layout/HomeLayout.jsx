import React from 'react'
import { Outlet } from 'react-router'
import { Navbar } from '../components/Navbar/Navbar'
import { Footer } from '../components/Footer/Footer'

export const HomeLayout = () => {
    return (
        <div>
            <Navbar />
            <div className='min-h-[calc(100vh-401px)]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
