import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router'
import { Navbar } from '../components/Navbar/Navbar'
import { Footer } from '../components/Footer/Footer'
import { FullScreenLoader } from '../components/ui/LoadingSpinner'


export const HomeLayout = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    if (loading) {
        return <FullScreenLoader />
    }

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
