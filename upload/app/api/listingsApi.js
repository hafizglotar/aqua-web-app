import axios from 'axios';

const BASE_URL = 'https://api.rexcrm.com/listings/feed/siteListing';
const API_KEY = 'AYAQALUIAMAPDAMH';

// // Fetch listings for a specific page
export const fetchListingData = async (page = 1, limit = 10) => {
    try {
      const response = await axios.get(BASE_URL, {
        params: {
          api_key: API_KEY,
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