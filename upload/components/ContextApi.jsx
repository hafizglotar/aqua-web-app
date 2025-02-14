'use client';
import React, { useContext } from 'react';
import { ContextData } from '@/app/about/page';
const ContextApi = () => {
    const data = useContext(ContextData);
    return (
        <ul className='mb-10'>
            <li>
                <strong className='mr-2'>Name:</strong>
                <span>{data.name}</span>
            </li>
            <li>
                <strong className='mr-2'>University:</strong>
                <span>{data.university}</span>
            </li>
            <li>
                <strong className='mr-2'>Country:</strong>
                <span>{data.country}</span>
            </li>
        </ul>
    );
};

export default ContextApi;
