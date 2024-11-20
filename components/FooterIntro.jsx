import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import GraySocial from './GraySocial'

const FooterIntro = () => {
    return (
        <div>
            <div className='mb-6'>
                <Link href="#">
                    <Image 
                        src="/images/footer-logo.png" 
                        alt="alt" 
                        width={160} 
                        height={1000} 
                    />
                </Link>
            </div>
            <p className='mb-6 text-sm'>Founded in 2005, AQUA Properties established its position on the market as a renowned, award-winning real estate company. Read more</p>
            <p className='mb-3'>
                Follow us on: 
                <span className='text-[#1bb9ed] inline-block ml-2'>@aquaproperties</span>
            </p>
            <GraySocial />
        </div>
    )
}

export default FooterIntro