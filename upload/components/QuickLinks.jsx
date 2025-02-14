import React from 'react'
import Link from 'next/link'
const QuickLinks = () => {
    return (
        <ul className='leading-relaxed w-full'>
           <li>
                <Link
                    className='text-[13px]' 
                    href="#">Properties
                </Link>
            </li>
            <li>
                <Link 
                    className='text-[13px]' 
                    href="#">Offplan
                </Link>
            </li>
            <li>
                <Link 
                    className='text-[13px]' 
                    href="#">Communities
                </Link>
            </li>
            <li>
                <Link 
                    className='text-[13px]' 
                    href="#">Services
                </Link>
            </li>
            <li>
                <Link 
                    className='text-[13px]' 
                    href="#">Careers
                </Link>
            </li>
            <li>
                <Link 
                    className='text-[13px]' 
                    href="#">About
                </Link>
            </li>
            <li>
                <Link 
                    className='text-[13px]' 
                    href="#">Blog
                </Link>
            </li>
            <li>
                <Link 
                    className='text-[13px]' 
                    href="#">Contact us
                </Link>
            </li>
        </ul>
    )
}

export default QuickLinks