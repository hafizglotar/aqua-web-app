// src/components/LinkButton.jsx

import Link from 'next/link';
import React from 'react';

const LinkButton = ({ href, children, bgColor, textColor, borderColor, hoverColor, hoverTextColor }) => {
    const buttonStyle = {
        textAlign: 'center',
        background: bgColor ? bgColor : 'linear-gradient(to right, #54bbf0, #65d5f1)',
        padding: '8px 36px',
        color: textColor || '#fff', // Default text color
        fontSize: '14px',
        fontWeight: '400',
        borderRadius: '7px',
        display: 'inline-block',
        border: `1px solid ${borderColor || 'transparent'}`, // Dynamically applies the border color or defaults to transparent
        outline: 'none',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        textDecoration: 'none',
        position: 'relative',
        transition: 'all 0.3s ease', // Smooth transition for hover effect
    };
    return (
        <Link href={href} style={buttonStyle}>
            {children}
        </Link>
    );
};

export default LinkButton;