'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { propertyListing } from '../api/services/api';
import Pagination from '@/components/Pagination';
import PropertyBox from '@/components/PropertyBox';
export default function ListingsPage() {
    const [page, setPage] = useState(1);

    const { data, isLoading, isError } = useQuery({
        queryKey: ['listings', page],
        queryFn: () => propertyListing({}, "sale", page, 12),
        keepPreviousData: true, 
        staleTime: 1000 * 60,
    });
    // Prefetch next page
    useQuery({
        queryKey: ['listings', page + 1],
        queryFn: () => propertyListing({}, "sale", page + 1, 12),
        enabled: !!data && page < data.last_page,
    });

    if (isLoading) return  <div className="max-w-7xl mx-auto px-4 pt-20">Loading...</div>;
    if (isError) return <div className="max-w-7xl mx-auto px-4 pt-20">Error loading listings.</div>;
    return (
        <div className="max-w-7xl mx-auto px-4 pt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
                {data.data.map((item) => {
                    const priceFormatted = new Intl.NumberFormat().format(item.price);
                    return (
                        <PropertyBox 
                            key={item.id}
                            PropertyImage={item.first_image}
                            // PropertyImage={`https://s3.amazonaws.com/rexcrm/${item.images_path.split("|")[0]}`}
                            Featured="Featured"
                            Location={item.loc_area_name.replace(/-/g, ' ')}
                            Type={item.category_name}
                            Bed={item.beds === 0 ? 'Studio' : item.beds}
                            Bathrooms={item.baths}
                            Area={item.build_up_area}
                            Price={`${priceFormatted} / ${item.frequency}`}
                            PropertyLink={item.detail_url}
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
