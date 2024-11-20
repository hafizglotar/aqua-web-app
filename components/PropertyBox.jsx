import React from 'react'
import Image from 'next/image'
import LinkButton from './LinkButton'
import BedIcon from './icons/BedIcon'
import BathIcon from './icons/BathIcon'
import AreaIcon from './icons/AreaIcon'
const PropertyBox = ({PropertyImage, Feeature, Type, Location, Bed, Bathrooms, Area, Price, PropertyLink}) => {
    return (
        <div className='propertyBox border border-[#cccccc73] rounded-lg p-5'>
            <div className='relative mb-4'>
                <Image
                    className='rounded-lg'
                    src={PropertyImage} 
                    alt="property-1.webp" 
                    width={1000} 
                    height={1000}
                />
                <span className='absolute top-2 left-2 px-4 py-2 block rounded-lg text-sm leading-4 bg-white'>
                    {Feeature}
                </span>
            </div>
            <div className="relative">
                <h2 className='font-bold text-lg mb-2'>{Location}</h2>
                <span className='block mb-2'>{Type}</span>
                <ul className='flex gap-6 mb-2'>
                    <li className='flex gap-2 items-center'>
                        <BedIcon 
                            svgWidth="18px" 
                            svgHeight="18px"
                            svgColor="#767676"
                        />
                        <span>{Bed}</span>
                    </li>
                    <li className='flex gap-2 items-center'>
                        <BathIcon
                            svgWidth="18px" 
                            svgHeight="18px"
                            svgColor="#767676"
                        />
                        <span>{Bathrooms}</span>
                    </li>
                    <li className='flex gap-2 items-center'>
                        <AreaIcon 
                            svgWidth="18px" 
                            svgHeight="18px"
                            svgColor="#767676"
                        />
                        <span>{Area} Sqft</span>
                    </li>
                </ul>
                <span className='text-[#1bb9ed] block font-bold mb-5'>AED {Price}</span>
                <div>
                    <LinkButton
                        href={PropertyLink}
                        textColor="#000"
                        bgColor="#fff"
                        borderColor="#54bcf1"
                    >
                        View Details
                    </LinkButton>
                </div>
            </div>
        </div>
    )
}

export default PropertyBox