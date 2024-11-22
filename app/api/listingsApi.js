// // import axios from 'axios';

// // const API_URL = 'https://api.rexcrm.com/listings/feed/siteListing';

// // export const fetchListings = async (page = 1) => {
// //     const response = await axios.get(`${API_URL}?api_key=AYAQALUIAMAPDAMH&page=${page}`);
// //     return response.data; // API response including pagination metadata
// // };

// export const getServerSideProps = async () => {
//     try {
//         const response = await axios.get('https://api.rexcrm.com/listings/feed/siteListing', {
//         params: {
//             api_key: 'AYAQALUIAMAPDAMH',
//             page: 1,
//             limit: 10,
//         },
//         });

//         const totalPages = Math.ceil(response.data.total / 10); // Assuming 'total' is the total number of listings

//         return {
//         props: {
//             initialListings: response.data.data || [], // Ensure listings data is an array
//             totalPages, // Total number of pages
//         },
//         };
//     } catch (error) {
//         console.error('Error fetching initial listings:', error);
//         return {
//         props: {
//             initialListings: [], // Fallback to empty array if there's an error
//             totalPages: 0, // No pages if the fetch failed
//         },
//         };
//     }
// };


import axios from 'axios';

const BASE_URL = 'https://api.rexcrm.com/listings/feed/siteListing';
const API_KEY = 'AYAQALUIAMAPDAMH';

// Fetch listings for a specific page
export const fetchListings = async (page = 1, limit = 10) => {
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