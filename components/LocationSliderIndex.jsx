import React from 'react'
import LocationSliderBanner from './LocationSliderBanner'
import LocationSliderText from './LocationSliderText'
import Slider from 'react-slick'
const LocationSliderIndex = () => {
    const sliderSettings = {
        dots: false,
        infinite: true,
        arrow: false,
        speed: 500,
        autoplay: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className='rounded-2xl overflow-hidden'>
            <Slider {...sliderSettings}>
                <div className="boxSliderOuter">
                    <div className='w-1/2 px-12 py-16 text-white bg-gradient-to-r from-[#54bbf0] to-[#65d5f1]'>
                        <LocationSliderText 
                            title="Head Office"
                            address="1st Floor, IST Plaza, Umm Al Sheif, Sheikh Zayed Road, Dubai, United Arab Emirates"
                            openingTime="Open: Mon - Sat | 9am - 6pm"
                            phoneNumber="+971 56 501 7690"
                            locationLink="https://maps.app.goo.gl/PbE7tbLYt7APgBL18"
                        />
                    </div>
                    <div className='w-1/2 relative'>
                        <LocationSliderBanner 
                            src="/images/aqua-sheikh-zayad.webp"
                            width={1000}
                            height={1000}
                        />
                    </div>
                </div>
                <div className="boxSliderOuter">
                    <div className='w-1/2 px-12 py-16 text-white bg-gradient-to-r from-[#54bbf0] to-[#65d5f1]'>
                        <LocationSliderText 
                            title="Head Office"
                            address="1st Floor, IST Plaza, Umm Al Sheif, Sheikh Zayed Road, Dubai, United Arab Emirates"
                            openingTime="Open: Mon - Sat | 9am - 6pm"
                            phoneNumber="+971 56 501 7690"
                            locationLink="https://maps.app.goo.gl/PbE7tbLYt7APgBL18"
                        />
                    </div>
                    <div className='w-1/2 relative'>
                        <LocationSliderBanner 
                            src="/images/aqua-serena.webp"
                            width={1000}
                            height={1000}
                        />
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default LocationSliderIndex