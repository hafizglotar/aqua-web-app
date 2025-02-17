'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchListingsSale } from '../api/services/api';
import Pagination from '@/components/Pagination';
import PropertyBox from '@/components/PropertyBox';
export default function ListingsPage() {
    const [page, setPage] = useState(1);

    const { data, isLoading, isError } = useQuery({
        queryKey: ['listings', page],
        queryFn: () => fetchListingsSale(page),
        keepPreviousData: true, 
        staleTime: 1000 * 60,
    });
    // Prefetch next page
    useQuery({
        queryKey: ['listings', page + 1],
        queryFn: () => fetchListingsSale(page + 1),
        enabled: page < (data?.last_page || 1),
    });


    if (isLoading) return  <div className="max-w-7xl mx-auto px-4 pt-20">Loading...</div>;
    if (isError) return <div className="max-w-7xl mx-auto px-4 pt-20">Error loading listings.</div>;
    return (
        <div className="max-w-7xl mx-auto px-4 pt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
                {data.data.map((property) => {
                    const priceFormatted = new Intl.NumberFormat().format(property.price);
                    return (
                        <PropertyBox 
                            key={property.id}
                            PropertyImage={property.first_image}
                            // PropertyImage={`https://s3.amazonaws.com/rexcrm/${item.images_path.split("|")[0]}`}
                            Featured="Featured"
                            Location={property.loc_area_name.replace(/-/g, ' ')}
                            Type={property.category_name}
                            Bed={property.beds === 0 ? 'Studio' : property.beds}
                            Bathrooms={property.baths}
                            Area={property.build_up_area}
                            Price={priceFormatted}
                            PropertyLink={property.detail_url}
                        />
                    );
                })}
            </div>
            <div className="mb-14">
                <Pagination
                    currentPage={page}
                    lastPage={data.last_page}
                    onPageChange={(newPage) => setPage(newPage)}
                />
            </div>
        </div>
    );
}
