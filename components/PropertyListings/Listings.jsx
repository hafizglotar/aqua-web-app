'use client';
import { useState, useEffect } from 'react';
import { fetchListingData } from '@/app/api/listingsApi'; // Adjust the path

const Listings = ({ initialListings, totalPages }) => {
    const [listings, setListings] = useState(initialListings || []);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Function to fetch listings for the current page
    const fetchPageListings = async (page) => {
        try {
            setLoading(true);
            setError(null);
        const data = await fetchListingData(page, 12);
            console.log('fetched data', data);
            setListings(data.data || []);
        } catch (err) {
        console.error('Error fetching listings:', err);
            setError('Failed to load listings. Please try again.');
        } finally {
        setLoading(false);
        }
    };

  // Fetch data when currentPage changes, excluding the initial load (page 1)
    useEffect(() => {
        console.log('Initial Listings:', initialListings);
        console.log('Total Pages:', totalPages);
        if (currentPage === 1) return; // Skip the first page as it’s already loaded
        fetchPageListings(currentPage);
    }, [currentPage]);
    return (
        <div>
        <h1>Real Estate Listings</h1>

        {error && <p className="text-red-500">{error}</p>}

        <div className="listing-cards">
            {loading ? (
            <p>Loading properties...</p>
            ) : listings.length > 0 ? (
            listings.map((listing) => (
                <div key={listing.id} className="listing-card">
                <h3>{listing.title}</h3>
                {/* Render additional listing details */}
                </div>
            ))
            ) : (
            <p>No listings available.</p>
            )}
        </div>

        <div className="pagination">
            <button
                disabled={currentPage === 1 || loading}
                onClick={() => setCurrentPage((prev) => prev - 1)}
            >
            Previous
            </button>
            <span>
                Page {currentPage} of {totalPages}
            </span>
            <button
                disabled={currentPage === totalPages || loading}
                onClick={() => setCurrentPage((prev) => prev + 1)}
            >
            Next
            </button>
        </div>
        </div>
    );
};

export default Listings;