'use client'
import React from 'react'
import InnerPageBanner from '@/components/InnerPageBanner'

const Layout = ({children}) => {

    return (
        <div className='listingPage'>
            <div className='listingHeader'>
                <InnerPageBanner PageTitle="Best Apartments for Rent in Dubai" />
            </div>
            <div className='max-w-7xl mx-auto px-4 pt-20 pb-20'>
                {children}
            </div>
        </div>
    )
}

export default Layout
