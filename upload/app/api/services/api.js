import axios from 'axios';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;


export const fetchListings = async (page = 1, limit = 12) => {
    try {
        const { data } = await axios.get(`${BASE_URL}?api_key=${API_KEY}&page=${page}&limit=${limit}`);
        console.log(JSON.stringify(data, null, 2));
        return data;
    } catch (error) {
        console.error('Error fetching listings:', error);
        throw error;
    }
};


// For Property Details Page
// export const fetchPropertyDetails = async (slug) => {
//     try {
//         const { data } = await axios.get(`${BASE_URL}/${slug}?api_key=${API_KEY}`);
//         console.log({data} + "testing data for single");
//         return data;
//     } catch (error) {
//         console.error('Error fetching property details:', error);
//         throw error;
//     }
// };

