import axios from 'axios';

const BASE_URL = 'https://aquaproperties.com/api/load_properties';

// Fetch listings for a specific page
export const fetchListingData = async (page = 1, limit = 10) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                page,
                limit,
            },
        });

        console.log('API Response:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching listings:', error);
        throw new Error('Failed to fetch listings');
    }
};