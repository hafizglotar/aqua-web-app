import React from 'react'
import Image from 'next/image'
import LinkButton from './LinkButton'
const TheCommunityBox = () => {
  return (
    <div className='flex gap-9 items-center rounded-2xl overflow-hidden bg-gradient-to-r from-[#54bbf0] to-[#65d5f1]'>
      <div className='w-1/3'>
        <Image 
          src="/images/dubai-community.png" 
          alt="dubai-community.png" 
          width={1000} 
          height={1000} 
        />
      </div>
      <div className='w-8/12 pr-7'>
        <h2 className='text-white text-4xl font-bold mb-5'>Dubai Community</h2>
        <p className='mb-5 text-white'>Are you looking for the perfect neighborhood in Dubai? Discover the unique characteristics of diverse communities, catering to various preferences from luxury to family-friendly environments. Here's your guide to top residential areas, highlighting amenities and housing options.</p>
        <LinkButton
          href="#"
          textColor="#767676"
          bgColor="#fff"
          borderColor="#fff"
        >
          Learn more
        </LinkButton>
      </div>
    </div>
  )
}

export default TheCommunityBox