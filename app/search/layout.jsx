'use client'
import React from 'react'
import InnerPageBanner from '@/components/InnerPageBanner'

const Layout = ({children}) => {

    return (
        <div className='listingPage'>
            <div className='listingHeader'>
                <InnerPageBanner PageTitle="Best Apartments for Rent & Sale in Dubai" />
            </div>
            {children}
        </div>
    )
}

export default Layout
