import React from 'react'

const HomeBanner = () => {
    return (
        <div 
            className='bannerOuter min-h-lvh bg-cover bg-no-repeat flex items-center'
            style={{
                backgroundImage: 'url(/images/home-banner.webp)' // Corrected URL path
            }}
        >
            <div className="bannerText w-full max-w-7xl m-auto">
                <h1 className='text-[36px] text-white font-bold mb-3'>Leading Real Estate Company in Dubai</h1>
                <p className='text-xl text-white'>Your trusted partner to buy, sell or rent a property in Dubai</p>
            </div>
        </div>
    )
}

export default HomeBanner