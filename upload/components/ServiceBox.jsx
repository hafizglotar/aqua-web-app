'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ServiceBox = ({ serviceTitle, serviceLink, serviceBoxImage, altText, serviceBoxDescription }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative rounded-2xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={serviceLink}>
        <Image
          className="object-cover h-[450px] w-full"
          src={serviceBoxImage}
          alt={altText}
          width={1000}
          height={1000}
        />
        {/* Title Animation */}
        <div className={`rounded-l-2xl rounded-b-2xl absolute bottom-0 w-full p-6 bg-gradient-to-t from-[#000] to-transparent transition-all duration-500 ${isHovered ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
          <h1 className="text-white">{serviceTitle}</h1>
        </div>
        {/* Description Animation */}
        <div className={`serviceBoxDescription text-white absolute bottom-0 z-10 w-full p-6 bg-black/60 transition-all duration-500 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
            {serviceBoxDescription}  
        </div>
      </Link>
    </div>
  );
};

export default ServiceBox;
