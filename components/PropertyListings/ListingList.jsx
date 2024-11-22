import React from 'react';
import ListingItem from './ListingItem';

const ListingList = ({ listings }) => {
    return (        
        <ol className='list-decimal'>
            {/* {listings.map((listing, index) => (
                <ListingItem key={index} listing={listing} />
            ))} */}
            {data.map((item, index) => (
            <div key={index}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <img src={item.assigned_to_profile_picture_url} alt={item.assigned_to_full_name} />
                <p>Price: {item.price}</p>
                <p>Beds: {item.beds} | Baths: {item.baths}</p>
                <p>Location: {item.property_location}</p>
            </div>
            ))}
        </ol>
    );
};

export default ListingList;