import axios from 'axios';
import { stringify } from 'postcss';
// api
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://aquaproperties.com/api/load_properties";

// const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const fetchListings = async (type = "sale", page = 1, limit = 12) => {
    try {
        const queryParams = new URLSearchParams({
            page,
            limit,
            for: type
        });

        const { data } = await axios.get(`${BASE_URL}?${queryParams.toString()}`);
        return data;
    } catch (error) {
        console.error('Error fetching listings:', error);
        throw error;
    }
};

export const propertyListing = async (filters = {}, type = "sale", page = 1, limit = 12) => {
    try {
        const queryParams = new URLSearchParams({ page, limit, for: type, ...filters});
        const { data } = await axios.get(`${BASE_URL}?${queryParams.toString()}`);
        return data;
    } catch (error) {
        console.error('Error fetching listings:', error);
        throw error;
    }
};

