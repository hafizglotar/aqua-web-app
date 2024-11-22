'use client'
import React, { useEffect, useState } from 'react';
import PropertyListings from '@/components/PropertyListings';
import axios from 'axios';

const page = () => {
    return (
        <div className='max-w-7xl pt-28 pb-3 mx-auto'>
            <PropertyListings />
        </div>
    );
};

export default page;