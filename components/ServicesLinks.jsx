import React from 'react'
import Link from 'next/link'
const ServicesLinks = () => {
    return (
        <ul className='leading-relaxed w-full'>
           <li>
                <Link
                    className='text-[13px]' 
                    href="#">Buy, Sell or Rent Your Property
                </Link>
            </li>
            <li>
                <Link 
                    className='text-[13px]' 
                    href="#">Project Marketing
                </Link>
            </li>
            <li>
                <Link 
                    className='text-[13px]' 
                    href="#">Handover Services
                </Link>
            </li>
            <li>
                <Link 
                    className='text-[13px]' 
                    href="#">Property Management
                </Link>
            </li>
            <li>
                <Link 
                    className='text-[13px]' 
                    href="#">Asset Management
                </Link>
            </li>
            <li>
                <Link 
                    className='text-[13px]' 
                    href="#">Development Management
                </Link>
            </li>
        </ul>
    )
}

export default ServicesLinks