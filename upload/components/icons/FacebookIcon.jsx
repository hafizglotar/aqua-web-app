import React from 'react'

const FacebookIcon = ({svgWidth, svgHeight, svgColor}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width={svgWidth}
            height={svgHeight}
            fill={svgColor}
            viewBox="0 0 30.88 30.69"
        >
        <defs>
            <style>
            {`.cls-1 {
                strokeWidth: 0px;
            }`}
            </style>
        </defs>
        <path
            className="cls-1"
            d="M15.44,0C6.91,0,0,6.91,0,15.44c0,7.71,5.65,14.1,13.02,15.25v-10.79h-3.92v-4.46h3.92v-3.4c0-3.87,2.3-6.01,5.83-6.01,1.69,0,3.47.3,3.47.3v3.81h-1.96c-1.91,0-2.51,1.19-2.51,2.41v2.9h4.29l-.69,4.46h-3.6v10.79c7.38-1.15,13.03-7.54,13.03-15.25C30.88,6.91,23.97,0,15.44,0Z"
        />
        </svg>
    )
}

export default FacebookIcon