import React from 'react'
import RatingStarts from './icons/RatingStarts'
import GoogleReviewsBox from './GoogleReviewsBox'
import Slider from 'react-slick';

const GoogleReviews = () => {
    const sliderSettings = {
        dots: false,
        infinite: true,
        arrow: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 2,
            },
        },
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 2,
            },
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 1,
            },
        },
        ],
    };
    return (
        <div className='flex gap-10'>
            <div className='w-3/12'>
                <h2 className="text-[30px] font-semibold mb-3">Google Reviews</h2>
                <p className='mb-4'>We take pride in our community of satisfied clients who trust our team and the quality of our services. Read on to see what our clients have to say about us.</p>                
                <div className='googleReviews'>
                    <span className='text-[#ffb802] text-[38px] font-semibold'>4.1</span>
                    <div className='flex'>
                        <RatingStarts
                            svgWidth="15"
                            svgHeight=""
                            svgColor="#ffb802"
                        />
                        <RatingStarts
                            svgWidth="15"
                            svgHeight=""
                            svgColor="#ffb802"
                        />
                        <RatingStarts
                            svgWidth="15"
                            svgHeight=""
                            svgColor="#ffb802"
                        />
                        <RatingStarts
                            svgWidth="15"
                            svgHeight=""
                            svgColor="#ffb802"
                        />
                    </div>
                </div>
            </div>
            <div className='w-9/12 flex gap-5'>
                <Slider {...sliderSettings} className='sliderTrack'>
                    <div className='googleReviewBoxOuter'>
                        <GoogleReviewsBox
                            src="/images/shabir.webp"
                            width="50"
                            height="55"
                            name="Muhammad Shabir"
                            designation="Property Consultant"
                            description="I have been very happy working with AQUA Properties. Glykeria has been an exceptional real estate agent, exceeding our expectations with her professional yet very..."
                            readmorelink="#"
                            customerName="Ziad Mousa"
                        />
                    </div>
                    <div className='googleReviewBoxOuter'>
                        <GoogleReviewsBox
                            src="/images/harshit.webp"
                            width="50"
                            height="55"
                            name="Muhammad Shabir"
                            designation="Property Consultant"
                            description="I have been very happy working with AQUA Properties. Glykeria has been an exceptional real estate agent, exceeding our expectations with her professional yet very..."
                            readmorelink="#"
                            customerName="Ziad Mousa"
                        />
                    </div>
                    <div className='googleReviewBoxOuter'>
                        <GoogleReviewsBox
                            src="/images/rabie.webp"
                            width="50"
                            height="55"
                            name="Muhammad Shabir"
                            designation="Property Consultant"
                            description="I have been very happy working with AQUA Properties. Glykeria has been an exceptional real estate agent, exceeding our expectations with her professional yet very..."
                            readmorelink="#"
                            customerName="Ziad Mousa"
                        />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default GoogleReviews