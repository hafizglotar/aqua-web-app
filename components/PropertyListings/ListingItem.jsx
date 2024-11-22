import React from 'react';

const ListingItem = ({ listing }) => {
    return( 
        <li className='mb-5'>
            <span className='block'>{listing.title}</span>
            <span className='block'>{listing.assigned_to_email}</span>
        </li>
    );
};

export default ListingItem;
