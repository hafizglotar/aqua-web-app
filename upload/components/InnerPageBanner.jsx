import React from 'react'
import Image from 'next/image'
const InnerPageBanner = ({PageTitle}) => {
    return (
        <div className='innerPageBanner h-[400px] relative'>
            <div className="h-full">
                <Image 
                    className='objectCover'
                    src="/images/default-aqua-header-banner.webp" 
                    alt="alt" 
                    width={1920} 
                    height={1000} 
                />
            </div>
            <div className="absolute bottom-12 z-10 w-full">
                <div className="max-w-7xl m-auto">
                    <h1 className='text-white text-4xl font-semibold'>{PageTitle}</h1>
                </div>
            </div>
        </div>
    )
}
export default InnerPageBanner