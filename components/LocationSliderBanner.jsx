import React from 'react'
import Image from 'next/image'
const LocationSliderBanner = ({src, width, height}) => {
    return (
        <div className="relative w-full min-h-full">
            <Image 
                src={src} 
                alt="aqua-sheikh-zayad.webp" 
                width={width} 
                height={height}
                className='absolute w-full h-full object-cover'
            />
        </div>
    )
}

export default LocationSliderBanner