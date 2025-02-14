// src/components/ServiceSlider.jsx
import React from 'react';
import Slider from 'react-slick';
import ServiceBox from './ServiceBox';

const ServiceBoxSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        prevNextButtons: false,
    };

    return (
        <Slider {...settings} className="serviceBoxCarousel">
            <div className="carouselCell">
                <ServiceBox 
                serviceTitle="Assets Management" 
                serviceLink="https://www.google.com"
                serviceBoxImage="/images/assets-management.png"
                altText="assets-management.png"
                serviceBoxDescription="Having your dedicated property manager can turn your investment into a lucrative cash flow opportunity. Leveraging our expert knowledge of the market will ensure your property can be rented quickly, ensuring you high rental yields."
                />
            </div>
            <div className="carouselCell">
                <ServiceBox 
                serviceTitle="Sale & Marketing" 
                serviceLink="https://www.google.com"
                serviceBoxImage="/images/project-sales-marketing.png"
                altText="project-sales-marketing.png"
                serviceBoxDescription="Having your dedicated property manager can turn your investment into a lucrative cash flow opportunity. Leveraging our expert knowledge of the market will ensure your property can be rented quickly, ensuring you high rental yields."
                />
            </div>
            <div className="carouselCell">
                <ServiceBox 
                serviceTitle="Property Management" 
                serviceLink="https://www.google.com"
                serviceBoxImage="/images/property-management.png"
                altText="property-management.png"
                serviceBoxDescription="Having your dedicated property manager can turn your investment into a lucrative cash flow opportunity. Leveraging our expert knowledge of the market will ensure your property can be rented quickly, ensuring you high rental yields."
                />
            </div>
            <div className="carouselCell">
                <ServiceBox 
                serviceTitle="Handover Services" 
                serviceLink="https://www.google.com"
                serviceBoxImage="/images/handover-services.png"
                altText="handover-services.png"
                serviceBoxDescription="Having your dedicated property manager can turn your investment into a lucrative cash flow opportunity. Leveraging our expert knowledge of the market will ensure your property can be rented quickly, ensuring you high rental yields."
                />
            </div>
        </Slider>
    );
};

export default ServiceBoxSlider;
