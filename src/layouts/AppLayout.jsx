import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from '@/components/ScrollToTop'
import WhatsAppButton from '@/components/WhatsAppButton'

function AppLayout() {
    return (
        <div>
            <ScrollToTop />
            <Header />
            <Outlet />
            <WhatsAppButton />
            <Footer />
        </div>
    )
}

export default AppLayout
