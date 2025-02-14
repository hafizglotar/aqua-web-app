import axios from 'axios';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://aquaproperties.com/api/load_properties";
// const API_KEY = process.env.NEXT_PUBLIC_API_KEY;


export const fetchListingsSale = async (page = 1, limit = 12) => {
    try {
        const { data } = await axios.get(`${BASE_URL}?page=${page}&for=sale&limit=${limit}`);
        // console.log(JSON.stringify(data, null, 2));
        return data;
    } catch (error) {
        console.error('Error fetching listings:', error);
        throw error;
    }
};

export const fetchListingsRent = async (page = 1, limit = 9) => {
    try {
        const { data } = await axios.get(`${BASE_URL}?page=${page}&for=rent&limit=${limit}`);
        // console.log(JSON.stringify(data, null, 2));
        return data;
    } catch (error) {
        console.error('Error fetching listings for Rent:', error);
        throw error;
    }
};