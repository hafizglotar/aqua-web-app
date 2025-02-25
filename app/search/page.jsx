"use client";

import { useState, useEffect } from "react";
import Select from "react-select";
import propertyListing from "../../property.json"; // Import property data
import Pagination from "@/components/Pagination";
import PropertyBox from "@/components/PropertyBox";

export default function ListingsPage() {
    const [isMounted, setIsMounted] = useState(false); // Fix hydration issue
    const [filteredData, setFilteredData] = useState([]);
    const [filters, setFilters] = useState({
        property_type: "Residential",  // Default to Residential
        property_for: "",
        project_status: "",
        category_name: null,
        loc_area_name: null,
        beds: "",
        baths: ""
    });
    const [page, setPage] = useState(1);
    const perPage = 12;

    useEffect(() => {
        setIsMounted(true);
        filterProperties("Residential"); // Load residential properties initially
    }, []);

    // Generate category & location options for react-select
    const categoryOptions = [...new Set(propertyListing.map(item => item.category_name))]
        .map(category => ({ value: category, label: category }));

    const locationOptions = [...new Set(propertyListing.map(item => item.loc_area_name))]
        .map(location => ({ value: location, label: location }));

    // Handle react-select changes
    const handleSelectChange = (selectedOption, field) => {
        setFilters({ ...filters, [field]: selectedOption });
    };

    // Handle input changes
    const handleChange = (e) => {
        const { name, value, dataset } = e.target;
    
        if (dataset.filter === "project_status") {
            setFilters((prevFilters) => ({
                ...prevFilters,
                project_status: value,
                property_for: "",
            }));
        } else if (dataset.filter === "property_for") {
            setFilters((prevFilters) => ({
                ...prevFilters,
                property_for: value,
                project_status: "",
            }));
        } else {
            setFilters((prevFilters) => ({
                ...prevFilters,
                [name]: value,
            }));
        }
    };

    // Function to filter properties based on property type
    const filterProperties = (type) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            property_type: type
        }));

        const filteredResults = propertyListing.filter(
            (item) => item.property_type === type
        );

        setFilteredData(filteredResults);
        console.log(setFilteredData(filteredResults))
        setPage(1);
    };


    // Perform filtering
    const handleSearch = () => {
        const filteredResults = propertyListing.filter(item =>
            (!filters.property_type || item.property_type === filters.property_type) &&
            (!filters.category_name || item.category_name?.toLowerCase().includes(filters.category_name.value.toLowerCase())) &&
            (!filters.loc_area_name || item.loc_area_name?.toLowerCase().includes(filters.loc_area_name.value.toLowerCase())) &&
            (!filters.beds || (item.beds ?? "").toString() === filters.beds) &&
            (!filters.baths || (item.baths ?? "").toString() === filters.baths) &&
            (!filters.property_for || item.property_for === filters.property_for) &&
            (!filters.project_status || item.project_status === filters.project_status)
        );

        setFilteredData(filteredResults);
        setPage(1);
    };

    // Paginate filtered results
    const startIndex = (page - 1) * perPage;
    const paginatedData = filteredData.slice(startIndex, startIndex + perPage);
    const lastPage = Math.ceil(filteredData.length / perPage);

    // Find max beds & baths
    const maxBeds = Math.max(...propertyListing.map(item => item.beds || 0));
    const maxBaths = Math.max(...propertyListing.map(item => item.baths || 0));

    if (!isMounted) return null; // Prevent hydration mismatch

    return (
        <div className="max-w-7xl mx-auto px-4 pt-20">

            {/* Property Type Tabs */}
            <div className="flex justify-center gap-2 mb-5">
                <button 
                    className={`tagButton ${filters.property_type === "Residential" ? "aquaButton" : "aquaButtonHover"}`} 
                    onClick={() => filterProperties("Residential")}
                >
                    Residential
                </button>
                <button 
                    className={`tagButton ${filters.property_type === "Commercial" ? "aquaButton" : "aquaButtonHover"}`} 
                    onClick={() => filterProperties("Commercial")}
                >
                    Commercial
                </button>
            </div>

            {/* Filters */}
            <div className="searchOuter flex items-center flex-wrap gap-2 justify-between mb-8 bg-[#f4f4f4] p-5 rounded-lg">
                {/* Property For Filter (Rent/Sale/Offplan) */}
                <div className="radioFilter flex items-center bg-white px-1 py-3 rounded-lg">
                    <label className="cursor-pointer">
                        <input
                            type="radio"
                            name="property_radio"
                            value="Rental"
                            data-filter="property_for"
                            checked={filters.property_for === "Rental"}
                            onChange={handleChange}
                            className="hidden"
                        />
                        <span className={`px-4 py-2 transition-colors ${filters.property_for === "Rental" ? "bg-[#c1c1c1] text-white rounded-lg" : "text-black"}`}>
                            Rent
                        </span>
                    </label>

                    <label className="cursor-pointer">
                        <input
                            type="radio"
                            name="property_radio"
                            value="Sale"
                            data-filter="property_for"
                            checked={filters.property_for === "Sale"}
                            onChange={handleChange}
                            className="hidden"
                        />
                        <span className={`px-4 py-2 transition-colors ${filters.property_for === "Sale" ? "bg-[#c1c1c1] text-white rounded-lg" : "text-black"}`}>
                            Sale
                        </span>
                    </label>

                    <label className="cursor-pointer">
                        <input
                            type="radio"
                            name="property_radio"
                            value="Off Plan"
                            data-filter="project_status"
                            checked={filters.project_status === "Off Plan"}
                            onChange={handleChange}
                            className="hidden"
                        />
                        <span className={`px-4 py-2 transition-colors ${filters.project_status === "Off Plan" ? "bg-[#c1c1c1] text-white rounded-lg" : "text-black"}`}>
                            Offplan
                        </span>
                    </label>
                </div>

                {/* Category Select */}
                <Select
                    options={categoryOptions}
                    value={filters.category_name}
                    onChange={(selectedOption) => handleSelectChange(selectedOption, "category_name")}
                    placeholder="Search Category"
                    isClearable
                    className="w-[200px]"
                />

                {/* Location Select */}
                <Select
                    options={locationOptions}
                    value={filters.loc_area_name}
                    onChange={(selectedOption) => handleSelectChange(selectedOption, "loc_area_name")}
                    placeholder="Search Location"
                    isClearable
                    className="w-[400px]"
                />

                {/* Beds Select */}
                <select name="beds" value={filters.beds} onChange={handleChange} className="border border-slate-200 rounded-lg py-1.5 px-3 outline-none bg-transparent bg-white">
                    <option value="">Beds</option>
                    {[...Array(maxBeds + 1)].map((_, i) => (
                        <option key={i} value={i}>{i === 0 ? "Studio" : i}</option>
                    ))}
                </select>

                {/* Baths Select */}
                <select name="baths" value={filters.baths} onChange={handleChange} className="border border-slate-200 rounded-lg py-1.5 px-3 outline-none bg-transparent bg-white">
                    <option value="">Baths</option>
                    {[...Array(maxBaths + 1)].map((_, i) => (
                        <option key={i} value={i}>{i}</option>
                    ))}
                </select>

                {/* Search Button */}


                {/* Search Button */}
                <button className="aquaButton" type="button" onClick={handleSearch}>
                    Search
                </button>
            </div>

            {/* Listings Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
                {paginatedData.length > 0 ? (
                    paginatedData.map((property) => (
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

            {/* Pagination */}
            {lastPage > 1 && 
                <div className="mb-14">
                    <Pagination currentPage={page} lastPage={lastPage} onPageChange={setPage} />
                </div>
            }
        </div>
    );
}
