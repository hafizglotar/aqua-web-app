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
        category_name: null,
        loc_area_name: null,
        beds: "",
        baths: "",
    });
    const [page, setPage] = useState(1);

    const perPage = 12;

    useEffect(() => {
        setIsMounted(true); // Fix hydration issue
        setFilteredData(propertyListing);
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

    // Handle regular input/select changes
    const handleChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    // Perform filtering
    const handleSearch = () => {
        const filteredResults = propertyListing.filter(item =>
            (!filters.category_name || item.category_name?.toLowerCase().includes(filters.category_name.value.toLowerCase())) &&
            (!filters.loc_area_name || item.loc_area_name?.toLowerCase().includes(filters.loc_area_name.value.toLowerCase())) &&
            (!filters.beds || (item.beds ?? "").toString() === filters.beds) &&
            (!filters.baths || (item.baths ?? "").toString() === filters.baths)
        );

        setFilteredData(filteredResults);
        setPage(1); // Reset pagination
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
            {/* Filters */}
            <div className="searchOuter flex flex-wrap gap-4 justify-between mb-8">
                {/* Category Name Select */}
                <Select
                    options={categoryOptions}
                    value={filters.category_name}
                    onChange={(selectedOption) => handleSelectChange(selectedOption, "category_name")}
                    placeholder="Search Category"
                    isClearable
                    className="w-[300px]"
                />

                {/* Location Select */}
                <Select
                    options={locationOptions}
                    value={filters.loc_area_name}
                    onChange={(selectedOption) => handleSelectChange(selectedOption, "loc_area_name")}
                    placeholder="Search Location"
                    isClearable
                    className="w-[300px]"
                />

                {/* Beds Select */}
                <select name="beds" value={filters.beds} onChange={handleChange} className="border border-slate-200 rounded-lg py-3 px-5 outline-none bg-transparent">
                    <option value="">Beds</option>
                    {[...Array(maxBeds + 1)].map((_, i) => (
                        <option key={i} value={i}>{i === 0 ? "Studio" : i}</option>
                    ))}
                </select>

                {/* Baths Select */}
                <select name="baths" value={filters.baths} onChange={handleChange} className="border border-slate-200 rounded-lg py-3 px-5 outline-none bg-transparent">
                    <option value="">Baths</option>
                    {[...Array(maxBaths + 1)].map((_, i) => (
                        <option key={i} value={i}>{i}</option>
                    ))}
                </select>

                {/* Search Button */}
                <button className="aquaButton" type="button" onClick={handleSearch}>
                    Search
                </button>
            </div>

            {/* Listings Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
                {paginatedData.length > 0 ? (
                    paginatedData.map((property) => {
                        const priceFormatted = new Intl.NumberFormat().format(property.price);
                        return (
                            <PropertyBox 
                                key={property.id}
                                PropertyImage={`https://s3.amazonaws.com/rexcrm/${property.images_path.split("|")[0]}`} // Get the first image
                                Featured="Featured"
                                Location={property.loc_area_name.replace(/-/g, ' ')}
                                Type={property.category_name}
                                Bed={property.beds === 0 ? "Studio" : property.beds}
                                Bathrooms={property.baths}
                                Area={property.build_up_area}
                                Price={`${priceFormatted} / ${property.frequency}`}
                                PropertyLink={property.detail_url || "/"}
                            />
                        );
                    })
                ) : (
                    <div className="col-span-3 text-center text-gray-500">No results found</div>
                )}
            </div>

            {/* Pagination Controls */}
            {lastPage > 1 && (
                <div className="mb-14">
                    <Pagination
                        currentPage={page}
                        lastPage={lastPage}
                        onPageChange={(newPage) => setPage(newPage)}
                    />
                </div>
            )}
        </div>
    );
}
