import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import FooterIntro from './FooterIntro'
import BlogsWithThumbnail from './BlogsWithThumbnail'
import QuickLinks from './QuickLinks'
import ServicesLinks from './ServicesLinks'
import NewsletterSubs from './NewsletterSubs'
const footer = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto -mb-12 z-10 relative'>
                <NewsletterSubs />
            </div>
            {/* End Subscription */}
            <div className='bg-[#f4f4f4] px-4 pt-20 pb-14'>
                <div className="max-w-7xl m-auto flex gap-8">
                    <div className="w-4/12">
                        <FooterIntro />
                    </div>
                    <div className='w-4/12'>
                        <h2 className='blueColor font-bold text-xl mb-2'>Blogs</h2>
                        <BlogsWithThumbnail />
                    </div>
                    <div className="w-4/12">
                        <div className="flex justify-between gap-9 mb-4">
                            <div className="w-1/2">
                                <h2 className='blueColor font-bold text-xl mb-2'>Quick Links</h2>
                                <QuickLinks />                    
                            </div>
                            <div className="w-1/2">
                                <h2 className='blueColor font-bold text-xl mb-2'>Services</h2>
                                <ServicesLinks />
                            </div>
                        </div>
                        <div className="w-full">
                            <h2 className='blueColor font-bold text-xl mb-2'>Contact Us</h2>
                            <div className="flex justify-between gap-9">
                                <ul className='leading-relaxed w-1/2'>
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
                                </ul>
                                <ul className='leading-relaxed w-1/2'>
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
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Footer Top */}
            <div className="bg-white text-center p-4 text-sm">
                <div className="max-w-7xl m-auto">
                    <p>© 2024 
                        <Link className='inline-block ml-1' href="#">AQUA Properties</Link>. All rights reserved | 
                        <Link className='inline-block ml-1' href="#">Privacy Policy</Link>
                    </p>
                </div>
            </div>
            {/* End Footer Bottom */}
        </div>
    )
}

export default footer