'use client'

import React from 'react'
import { usePathname } from 'next/navigation';


const page = () => {
    const pathname = usePathname();
    const splitingPathname = pathname.split("/").filter(Boolean);
    return (
        <div className='max-w-7xl mx-auto py-24'>
            <h1 className='text-3xl mb-4'>Page name: property details page</h1>
            <code>{splitingPathname[1]}</code>
        </div>
    )
}

export default page