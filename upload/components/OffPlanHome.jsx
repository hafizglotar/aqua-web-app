import React from 'react'
import LinkButton from './LinkButton'
import OffPlanBanner from './OffPlanBanner'
import Link from 'next/link'
const OffPlanHome = () => {
    return (
        <div className='flex items-center bg-[#f5f5f5]'>
            <div className='w-5/12 pl-48 pr-24 py-36'>
                <span className="text-xm">Off-Plan</span>
                <h2 className="text-[30px] font-semibold mb-6">Residential Properties in Dubai</h2>
                <p className='mb-6'>The worth of land in the UAE is increasing steadily. The city presents great investment opportunities. Apart from the ready-to-move-in property for sale, we also provide off-plan property for those looking to invest in Dubai real estate. The return on investment you can make with rental income is also very high in this region. Every local real estate developer, Emaar or Damac, is busy introducing new developments. When you buy a real estate property under construction, you can make amazing profits when you sell it later. If you also want to invest in the United Arab Emirates, contact Aqua properties.</p>
                <LinkButton
                        href="#"
                        textColor="#fff"
                        borderColor="#54bbf0"
                    >
                    Explore more
                </LinkButton>

            </div>
            <div className="w-7/12 flex h-[700px]">
                <div className='w-1/4 relative'>
                    <Link href="#" className='h-full block'>
                        <OffPlanBanner 
                            className="h-full w-full"
                            imgSrc="/images/tcd.jpg"
                            imgAlt="tcd.jpg"
                            imgWidth={1000}
                            imgHeight={1000}
                        />
                    </Link>
                </div>
                <div className='w-1/4 relative'>
                    <Link href="#" className='h-full block'>
                        <OffPlanBanner 
                            className="h-full w-full"
                            imgSrc="/images/bugatti.webp"
                            imgAlt="bugatti.jpg"
                            imgWidth={1000}
                            imgHeight={1000}
                        />
                    </Link>
                </div>
                <div className='w-1/4 relative'>
                    <Link href="#" className='h-full block'>
                        <OffPlanBanner 
                            className="h-full w-full "
                            imgSrc="/images/helvetia.webp"
                            imgAlt="helvetia.jpg"
                            imgWidth={1000}
                            imgHeight={1000}
                        />
                    </Link>
                </div>
                <div className='w-1/4 relative'>
                    <Link href="#" className='h-full block'>
                        <OffPlanBanner 
                            className="h-full w-full"
                            imgSrc="/images/parklane.webp"
                            imgAlt="parklane.jpg"
                            imgWidth={1000}
                            imgHeight={1000}
                        />
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default OffPlanHome