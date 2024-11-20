import React from 'react'
import Image from 'next/image'
const OffPlanBanner = ({imgSrc, imgAlt, imgWidth, imgHeight}) => {
  return (
        <Image
            className='imgHeight' 
            src={imgSrc}
            alt={imgAlt}
            width={imgWidth} 
            height={imgHeight} 
        />
    )
}

export default OffPlanBanner