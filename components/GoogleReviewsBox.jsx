import React from 'react'
import RatingStarts from './icons/RatingStarts'
import Link from 'next/link'
import Image from 'next/image'
const GoogleReviewsBox = ({src, width, height, name, designation, description, readmorelink, customerName}) => {
    return (
        <div className='shadow-[0px_0px_10px_#e7e7e7] p-4 rounded-xl'>
            <div className='flex items-center gap-4 mb-4'>
                <div className='rounded-full overflow-hidden'>
                    <Image 
                    src={src} 
                    alt="shabir.webp" 
                    width={width} 
                    height={height} 
                />
                </div>
                <div className=''>
                    <h3 className='font-bold text-[15px]'>{name}</h3>
                    <span className='font-light text-sm'>{designation}</span>
                </div>
            </div>
            <p className='mb-2 text-sm'>
                {description} 
            </p>
            <Link
                className='font-semibold text-sm'
                href={readmorelink}>
                Read More
            </Link>
            <div className='flex items-center justify-between mt-5'>
                <h4 className='font-medium pr-1'>- {customerName}</h4>
                <div className='flex gap-1'>
                    <RatingStarts
                        svgWidth="15"
                        svgHeight=""
                        svgColor="#ffb802"
                    />
                    <RatingStarts
                        svgWidth="15"
                        svgHeight=""
                        svgColor="#ffb802"
                    />
                    <RatingStarts
                        svgWidth="15"
                        svgHeight=""
                        svgColor="#ffb802"
                    />
                    <RatingStarts
                        svgWidth="15"
                        svgHeight=""
                        svgColor="#ffb802"
                    />
                    <RatingStarts
                        svgWidth="15"
                        svgHeight=""
                        svgColor="#ffb802"
                    />
                </div>
            </div>
        </div>
    )
}

export default GoogleReviewsBox