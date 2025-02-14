import React from 'react'
import Link from 'next/link'
import LinkButton from './LinkButton'
const LocationSliderText = ({title, address, openingTime, phoneNumber, locationLink}) => {
    return (
        <div>
            <h2 className="text-[30px] font-semibold mb-3 text-white">Find us</h2>
            <span className='font-semibold block mb-2'>{title}</span>
            <div className='leading-relaxed mb-3'>
                <p className='w-8/12'> {address} </p>
                <p>{openingTime}</p>
                <span className="font-bold block">
                    Phone: 
                    <Link href={`tel:${phoneNumber}`} target='_blank' tabIndex="0">
                        {phoneNumber}
                    </Link>
                </span>
            </div>
            <LinkButton
                href={locationLink}
                textColor="#767676"
                bgColor="#fff"
                borderColor="#fff"
            >
                Learn more
            </LinkButton>            
        </div>
    )
}

export default LocationSliderText