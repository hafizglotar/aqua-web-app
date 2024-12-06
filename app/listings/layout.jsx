// import { Children } from '@/public/images/Create Next App_files/node_modules_next_dist_compiled_107ce8._'
import InnerPageBanner from '@/components/InnerPageBanner'
import React from 'react'

const layout = ({children}) => {
    return (
        <div className='listingPage'>
            <div className='listingHeader'>
                <InnerPageBanner PageTitle="Best Apartments for Rent in Dubai" />
            </div>
            {children}
        </div>
    )
}

export default layout