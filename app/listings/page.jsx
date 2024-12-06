'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchListings } from '../api/services/api';
import Pagination from '@/components/Pagination';
import PropertyBox from '@/components/PropertyBox';
import Image from 'next/image';
export default function ListingsPage() {
    const [page, setPage] = useState(1);

    const { data, isLoading, isError } = useQuery({
        queryKey: ['listings', page],
        queryFn: () => fetchListings(page),
        keepPreviousData: true, // Retain previous page data during fetch
        staleTime: 1000 * 60,   // Cache data for 1 minute
    });

      // Prefetch next page
    useQuery({
        queryKey: ['listings', page + 1],
        queryFn: () => fetchListings(page + 1),
        enabled: page < (data?.last_page || 1), // Only fetch if there's a next page
    });


    if (isLoading) return  <div className="container mx-auto px-4 pt-20">Loading...</div>;
    if (isError) return <div className="container mx-auto px-4 pt-20">Error loading listings.</div>;
    return (
        <div className="max-w-7xl mx-auto px-4 pt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.data.map((item) => {
                    const priceFormatted = new Intl.NumberFormat().format(item.price);
                    return (
                        <PropertyBox 
                            key={item.id}
                            PropertyImage={`https://s3.amazonaws.com/rexcrm/${item.images_path.split("|")[0]}`}
                            // PropertyImage={generateImageUrl}
                            Featured="Featured"
                            Location={item.loc_area_name}
                            Type={item.category_name}
                            Bed={item.beds === 0 ? 'Studio' : item.beds}
                            Bathrooms={item.baths}
                            Area={item.build_up_area}
                            Price={`${priceFormatted} / ${item.frequency}`}
                            PropertyLink={`${item.property_for.toLowerCase()}/${item.slug}`}
                        />
                    );
                })}
            </div>
            <Pagination
                currentPage={page}
                lastPage={data.last_page}
                onPageChange={(newPage) => setPage(newPage)}
            />
        </div>
    );
}
