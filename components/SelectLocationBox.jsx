import React, { useState } from 'react'
import Image from 'next/image'
import WhiteRoundArrow from './icons/WhiteRoundArrow'
import Link from 'next/link'
const SelectLocationBox = ({boxThumbail, boxLogo, boxText}) => {
    const [ isHovered, setIsHovered ] = useState(false);
    return (
        <div className='w-1/2 bg-[#efefef] rounded-xl overflow-hidden'>
            <div className="flex">
                <div className="w-4/12">
                    <Link href="#">
                        <div className="relative">
                            <Image 
                                src={boxThumbail} 
                                alt="selection-thumbnail.webp" 
                                width={1000}
                                height={1000}
                            />
                            <div className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'>
                                <WhiteRoundArrow
                                    svgWidth={46}
                                    svgHegiht={46}
                                    svgColor="#ffffffde"
                                />
                            </div>
                        </div>
                    </Link>
                </div>
                <div 
                    className="w-8/12 relative"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}            
                >
                    <div className='relative flex items-center justify-center h-full overflow-hidden'>
                        <Image 
                            src={boxLogo} 
                            alt="selection-logo.svg" 
                            width={240} 
                            height={1000}
                        />
                        <div 
                            className={`absolute left-0 px-5 py-3 w-full h-full text-center flex items-center justify-center bg-[#000000e3] text-white transition-all duration-500 ${isHovered ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0' } `}
                        >
                            <p className='text-sm'>
                                {boxText}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectLocationBox