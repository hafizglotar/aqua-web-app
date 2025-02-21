'use client';

import React, { useState } from 'react';
import Slider from 'react-slick';
import PropertyBox from './PropertyBox';
import { useQuery } from '@tanstack/react-query';
import { fetchListings } from '@/app/api/services/api';

const PropertyTabs = () => {
    const [activeTab, setActiveTab] = useState('sale'); // Default to 'sale'
    const [page, setPage] = useState(1);

    // Fetch data dynamically based on activeTab
    const { data, isLoading, isError } = useQuery({
        queryKey: ['listings', activeTab, page],
        queryFn: async () => {
            const response = await fetchListings(activeTab, page);
    
            if (!response) {
                throw new Error("Invalid API response: No data received.");
            }

            return response.results ?? response.data ?? response ?? [];
        },
        keepPreviousData: true,
        staleTime: 60000,
    });

    console.log("Data received in useQuery:", data);

    if (isLoading) {
        return <div className="max-w-7xl mx-auto px-4 pt-20">Loading...</div>;
    }

    if (isError) {
        return <div className="max-w-7xl mx-auto px-4 pt-20">Error loading listings.</div>;
    }

    if (!data || data.length === 0) {
        return <div className="max-w-7xl mx-auto px-4 pt-20">No properties available</div>;
    }

    // Slider settings
    const sliderSettings = {
        dots: false,
        infinite: true,
        arrow: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 600, settings: { slidesToShow: 1 } }
        ],
    };

    return (
        <div>
            {/* Tab Navigation */}
            <div className="flex justify-center items-center gap-6 mb-4">
                {['sale', 'rent'].map((tab) => (
                    <button 
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-9 py-2.5 text-sm border border-[#54bcf1] rounded-lg transition-colors duration-300 ${activeTab === tab ? 'bg-gradient-to-r from-[#54bbf0] to-[#65d5f1] text-white' : 'bg-transparent'}`}
                    >
                        {tab === 'sale' ? 'For Sale' : 'For Rent'}
                    </button>
                ))}
            </div>

            {/* Slider */}
            <div className="mt-8">
                <Slider 
                    {...sliderSettings} 
                    key={activeTab}
                    className="serviceBoxCarousel"
                >
                    {data.map((property) => {
                        const priceFormatted = new Intl.NumberFormat().format(property.price);
                        return (
                            <div key={property.id}>
                                <PropertyBox
                                    PropertyImage={property.first_image}
                                    Location={property.loc_area_name.replace(/-/g, ' ')}
                                    Type={property.type}
                                    Bed={property.beds}
                                    Bathrooms={property.bathrooms}
                                    Area={property.build_up_area}
                                    Price={priceFormatted}
                                    PropertyLink={property.detail_url}
                                />
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default PropertyTabs;
