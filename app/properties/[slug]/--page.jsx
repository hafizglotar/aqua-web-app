"use client"
import React, { use } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchPropertyDetails } from '@/app/api/services/api'

const PropertyDetailPage = (props) => {
    // Unwrap params using React.use()
    const params = use(props.params);

    // Log params to verify its contents
    console.log('Params:', params);

    // Safely extract slug, providing a fallback
    const slug = params?.slug || params?.id;

    // If no slug is found, show an error
    if (!slug) {
        return (
            <div className="container mx-auto px-4 pt-20">
                <div className="text-center text-red-500">
                    No property identifier found
                </div>
            </div>
        );
    }

    const { 
        data, 
        isLoading, 
        isError, 
        error 
    } = useQuery({
        // Use the slug in the query key
        queryKey: ['propertyDetails', slug],
        
        // Pass slug to the fetch function
        queryFn: () => fetchPropertyDetails(slug),
        
        // Only enable query if slug exists
        enabled: !!slug,
        
        // Caching options
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 60,
    });

    // Loading state
    if (isLoading) return (
        <div className="container mx-auto px-4 pt-20">
            <div className="text-center text-xl">Loading property details...</div>
        </div>
    );

    // Error state
    if (isError) return (
        <div className="container mx-auto px-4 pt-20">
            <div className="text-center text-red-500">
                Error loading property details: {error.message}
            </div>
        </div>
    );

    // No data state
    if (!data) return (
        <div className="container mx-auto px-4 pt-20">
            No property details found.
        </div>
    );

    // Render property details
    return (
        <div className='max-w-7xl mx-auto p-4'>
            <h1 className="text-2xl font-bold mb-4">
                {data.name || 'Property Details'}
            </h1>
            <div className="grid md:grid-cols-2 gap-4">
                <div>
                    <h2 className="text-xl font-semibold">Property Information</h2>
                    <div className="space-y-2 mt-2">
                        <p><strong>ID:</strong> {data.id}</p>
                        <p><strong>Description:</strong> {data.description}</p>
                    </div>
                </div>
            </div>

            {/* Debug option to see full data */}
            <details className="mt-8 bg-gray-100 p-4 rounded">
                <summary>Full Property Details (JSON)</summary>
                <pre className="text-sm overflow-x-auto">
                    {JSON.stringify(data, null, 2)}
                </pre>
            </details>
        </div>
    )
}

export default PropertyDetailPage