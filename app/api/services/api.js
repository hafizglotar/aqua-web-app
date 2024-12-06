import axios from 'axios';

const BASE_URL = 'https://api.rexcrm.com/listings/feed/siteListing';
const API_KEY = 'AYAQALUIAMAPDAMH';

export const fetchListings = async (page = 1, limit = 12) => {
    const { data } = await axios.get(`${BASE_URL}?api_key=${API_KEY}&page=${page}&limit=${limit}`);
    return data;
};