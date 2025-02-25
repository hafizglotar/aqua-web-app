"use client"
import React, { useEffect, useState } from 'react'
import propertyListing from '../../property.json'; 
import PropertyBox from '@/components/PropertyBox';

const Page = () => {
    const [filteredData, setFilteredData] = useState([]);
    const [activeType, setActiveType] = useState("Residential"); // Track active type

    // Function to filter properties
    const filterType = (type) => {
        setActiveType(type); // Update active type
        setFilteredData(propertyListing.filter((item) => item.property_type === type));
    };

    useEffect(() => {
        filterType("Residential"); // Set initial data to Residential
    }, []);

    return (
        <div>
            {/* Property Type Tabs */}
            <div className="flex justify-center gap-2 mb-5">
                <button 
                    className={activeType === "Residential" ? "aquaButton" : "aquaButtonHover"}
                    onClick={() => filterType("Residential")}
                >
                    Residential
                </button>
                <button 
                    className={activeType === "Commercial" ? "aquaButton" : "aquaButtonHover"}
                    onClick={() => filterType("Commercial")}
                >
                    Commercial
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
                {filteredData.length > 0 ? (
                    filteredData.map((property) => (
                        <PropertyBox 
                            key={property.id}
                            PropertyImage={`https://s3.amazonaws.com/rexcrm/${property.images_path.split("|")[0]}`}
                            Featured="Featured"
                            Location={property.loc_area_name.replace(/-/g, ' ')}
                            Type={property.category_name}
                            Bed={property.beds === 0 ? "Studio" : property.beds}
                            Bathrooms={property.baths}
                            Area={property.build_up_area}
                            Price={`${new Intl.NumberFormat().format(property.price)}${property.property_for === "Sale" ? "" : ` / ${property.frequency}`}`}
                            PropertyLink={property.detail_url || "/"}
                        />
                    ))
                ) : (
                    <div className="col-span-3 text-center text-gray-500">No results found</div>
                )}
            </div>
        </div>
    )
}

export default Page;
