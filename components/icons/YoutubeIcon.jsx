import React from 'react'

const YoutubeIcon = ({svgWidth, svgHeight, svgColor}) => {
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
            <path className="cls-1" d="M17.96,15.34l-4.08-2.22c-.17-.1-.73.03-.73.22v4.31c0,.19.57.31.73.23l4.25-2.1c.17-.1,0-.34-.17-.44Z"/>
            <path className="cls-1" d="M15.44,0C6.91,0,0,6.91,0,15.44s6.91,15.44,15.44,15.44,15.44-6.91,15.44-15.44S23.97,0,15.44,0ZM23.71,17.65c0,2.04-1.66,3.7-3.71,3.7h-9.48c-2.05,0-3.71-1.66-3.71-3.7v-4.42c0-2.05,1.66-3.71,3.71-3.71h9.48c2.05,0,3.71,1.66,3.71,3.71v4.42Z"/>
        </svg>
    )
}

export default YoutubeIcon