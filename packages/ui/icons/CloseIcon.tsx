import React from "react"

const closeIcon: React.FC<React.SVGAttributes<SVGElement>> = ({ ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
        <g clipPath="url(#clip0_398_9394)">
            <path
                d="M15.8516 4.19336L4.60156 15.4434"
                stroke="#FFFFFF"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M15.8516 15.4434L4.60156 4.19336"
                stroke="#FFFFFF"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </g>
        <defs>
            <clipPath id="clip0_398_9394">
                <rect width="20" height="20" fill="white" />
            </clipPath>
        </defs>
    </svg>
)

export default closeIcon
