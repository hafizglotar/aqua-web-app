import React from 'react'

const LinkedinIcon = ({svgWidth, svgHeight, svgColor}) => {
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
            <path className="cls-1" d="M25.88,4.43C23.14,1.7,19.35,0,15.17,0S7.19,1.7,4.44,4.43C1.7,7.18,0,10.96,0,15.16c0,8.38,6.79,15.17,15.17,15.17,4.18,0,7.97-1.7,10.71-4.44,2.74-2.74,4.44-6.53,4.44-10.72s-1.7-7.98-4.44-10.72ZM11.42,21.92h-3.14v-10.14h3.14v10.14ZM9.84,10.45c-1.02,0-1.85-.83-1.85-1.87s.82-1.88,1.85-1.88,1.86.85,1.86,1.88-.82,1.87-1.86,1.87ZM23.19,21.92h-3.13v-5.32c0-1.46-.55-2.27-1.7-2.27-1.26,0-1.92.85-1.92,2.27v5.32h-3v-10.14h3v1.37s.91-1.67,3.06-1.67,3.69,1.3,3.69,4.03v6.42Z"/>
        </svg>
    )
}

export default LinkedinIcon