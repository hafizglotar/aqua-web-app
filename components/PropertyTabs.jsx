'use client'
// src/components/PropertyTabs.jsx
import React, { useState } from 'react';
import Slider from 'react-slick';
import PropertyBox from './PropertyBox';

const PropertyTabs = () => {
    const [activeTab, setActiveTab] = useState('forSale'); // State to manage active tab

    // Slick Slider settings
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
        <div>
        {/* Tab Navigation */}
            <div className="flex justify-center items-center gap-6 mb-4">
                <button 
                    onClick={() => setActiveTab('forSale')}
                    className={`px-9 py-2.5 text-sm border border-[#54bcf1] rounded-lg transition-colors duration-300 ${activeTab === 'forSale' ? 'bg-gradient-to-r from-[#54bbf0] to-[#65d5f1] text-white' : 'bg-transparent'}`}
                >
                    For Sale
                </button>
                <button 
                    onClick={() => setActiveTab('forRent')}
                    className={`px-9 py-2.5 text-sm border border-[#54bcf1]  rounded-lg transition-colors duration-300 ${activeTab === 'forRent' ? 'bg-gradient-to-r from-[#54bbf0] to-[#65d5f1] text-white' : 'bg-transparent'}`}
                >
                    For Rent
                </button>
                <button 
                    onClick={() => setActiveTab('forOffPlan')}
                    className={`px-9 py-2.5 text-sm border border-[#54bcf1] rounded-lg transition-colors duration-300 ${activeTab === 'forOffPlan' ? 'bg-gradient-to-r from-[#54bbf0] to-[#65d5f1] text-white' : 'bg-transparent'}`}
                >
                    For Off Plan
                </button>
            </div>

            {/* Tab Content */}
            <div className="mt-8">
                {activeTab === 'forSale' && (
                    <Slider {...sliderSettings} className="serviceBoxCarousel">
                        <div>
                            <PropertyBox 
                                PropertyImage="/images/property-1.webp"
                                Feeature="Featured"
                                Location="Meydan"
                                Type="Villas"
                                Bed="3"
                                Bathrooms="3"
                                Area="7651"
                                Price="19,880,000"
                                PropertyLink="#"
                            />
                        </div>
                        <div>
                            <PropertyBox 
                                PropertyImage="/images/property-2.webp"
                                Feeature="Featured"
                                Location="Business Bay"
                                Type="Apartments"
                                Bed="4"
                                Bathrooms="4"
                                Area="7651"
                                Price="19,770,000"
                                PropertyLink="#"
                            />
                        </div>
                        <div>
                            <PropertyBox 
                                PropertyImage="/images/property-3.webp"
                                Feeature="Featured"
                                Location="Jumeirah"
                                Type="Penthous"
                                Bed="5"
                                Bathrooms="6"
                                Area="7651"
                                Price="19,990,000"
                                PropertyLink="#"
                            />
                        </div>
                    </Slider>
                )}
                {activeTab === 'forRent' && (
                    <Slider {...sliderSettings} className="serviceBoxCarousel">
                        <div>
                            <PropertyBox 
                                PropertyImage="/images/property-3.webp"
                                Feeature="Featured"
                                Location="Jumeirah"
                                Type="Penthous"
                                Bed="5"
                                Bathrooms="6"
                                Area="7651"
                                Price="19,990,000"
                                PropertyLink="#"
                            />
                        </div>
                        <div>
                            <PropertyBox 
                                PropertyImage="/images/property-1.webp"
                                Feeature="Featured"
                                Location="Meydan"
                                Type="Villas"
                                Bed="3"
                                Bathrooms="3"
                                Area="7651"
                                Price="19,880,000"
                                PropertyLink="#"
                            />
                        </div>
                        <div>
                            <PropertyBox 
                                PropertyImage="/images/property-2.webp"
                                Feeature="Featured"
                                Location="Business Bay"
                                Type="Apartments"
                                Bed="4"
                                Bathrooms="4"
                                Area="7651"
                                Price="19,770,000"
                                PropertyLink="#"
                            />
                        </div>
                    </Slider>
                )}
                {activeTab === 'forOffPlan' && (
                    <Slider {...sliderSettings} className="serviceBoxCarousel">
                        <div>
                            <PropertyBox
                                PropertyImage="/images/property-2.webp"
                                Feeature="Featured"
                                Location="Business Bay"
                                Type="Apartments"
                                Bed="4"
                                Bathrooms="4"
                                Area="7651"
                                Price="19,770,000"
                                PropertyLink="#"
                            />
                        </div>
                        <div>
                            <PropertyBox 
                                PropertyImage="/images/property-3.webp"
                                Feeature="Featured"
                                Location="Jumeirah"
                                Type="Penthous"
                                Bed="5"
                                Bathrooms="6"
                                Area="7651"
                                Price="19,990,000"
                                PropertyLink="#"
                            />
                        </div>
                        <div>
                            <PropertyBox
                                PropertyImage="/images/property-1.webp"
                                Feeature="Featured"
                                Location="Meydan"
                                Type="Villas"
                                Bed="3"
                                Bathrooms="3"
                                Area="7651"
                                Price="19,880,000"
                                PropertyLink="#"
                            />
                        </div>
                    </Slider>
                )}
            </div>
        </div>
    );
};

export default PropertyTabs;
