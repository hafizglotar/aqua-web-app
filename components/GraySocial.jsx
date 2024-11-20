import React from 'react'
import FacebookIcon from './icons/FacebookIcon'
import LinkedinIcon from './icons/LinkedinIcon'
import TwitterIcon from './icons/TwitterIcon'
import InstagramIcon from './icons/InstagramIcon'
import YoutubeIcon from './icons/YoutubeIcon'
import TiktokIcon from './icons/TiktokIcon'
import Link from 'next/link'

const GraySocial = () => {
    return (
        <ul className='flex gap-3'>
            <li>
                <Link href="#">
                    <FacebookIcon 
                        svgWidth={30}
                        svgHeight={30}
                        svgColor="#8a8a8a"
                    />
                </Link>
            </li>
            <li>
                <Link href="#">
                    <LinkedinIcon 
                        svgWidth={30}
                        svgHeight={30}
                        svgColor="#8a8a8a"
                    />
                </Link>
            </li>
            <li>
                <Link href="#">
                    <TwitterIcon 
                        svgWidth={30}
                        svgHeight={30}
                        svgColor="#8a8a8a"
                    />
                </Link>
            </li>
            <li>
                <Link href="#">
                    <InstagramIcon 
                        svgWidth={30}
                        svgHeight={30}
                        svgColor="#8a8a8a"
                    />
                </Link>
            </li>
            <li>
                <Link href="#">
                    <YoutubeIcon 
                        svgWidth={30}
                        svgHeight={30}
                        svgColor="#8a8a8a"
                    />
                </Link>
            </li>
            <li>
                <Link href="#">
                    <TiktokIcon 
                        svgWidth={30}
                        svgHeight={30}
                        svgColor="#8a8a8a"
                    />
                </Link>
            </li>
        </ul>
    )
}

export default GraySocial