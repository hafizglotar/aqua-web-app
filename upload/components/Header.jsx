import React from 'react'
import Link from 'next/link'
import Navigation from './Navigation'
import Image from 'next/image'
import LinkButton from './LinkButton'
const header = () => {
    return (
        <div className="headerOuter fixed w-full pt-5 pb-5 z-50">
            <div className="flex items-center gap-5 justify-between ml-20 mr-20 m-auto">
                <div className="siteLogo">
                    <Link href="/#">
                        <Image
                            src="/images/aqua-logo.png" 
                            alt="aqua-logo.png" 
                            width={170}
                            height={40}
                            className='filter brightness-[100]'
                        />
                    </Link>
                </div>
                <Navigation />
                <div className="headerRight">
                    <LinkButton 
                        href="/page2" 
                        color="linear-gradient(to right, #54bbf0, #65d5f1)" 
                    >
                        Expert Consultation
                    </LinkButton>
                </div>
            </div>
        </div>
    )
}
export default header