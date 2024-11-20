const fetchListings = async () => {
    const response = await fetch(
        `https://api.rexcrm.com/listings/feed/siteListing?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    );
  
    if (!response.ok) {
        throw new Error('Failed to fetch listings');
    }
    return response.json();
};

export default fetchListings;