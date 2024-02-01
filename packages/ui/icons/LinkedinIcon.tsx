import React from "react"

const LinkedinIcon: React.FC<React.SVGAttributes<SVGElement>> = ({ ...props }) => (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g clipPath="url(#clip0_14_8)">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.33333 30H26.6667C28.5076 30 30 28.5076 30 26.6667V3.33333C30 1.49238 28.5076 0 26.6667 0H3.33333C1.49238 0 0 1.49238 0 3.33333V26.6667C0 28.5076 1.49238 30 3.33333 30Z"
                fill="#202124"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25.8333 25.8334H21.3815V18.2509C21.3815 16.172 20.5916 15.0102 18.9461 15.0102C17.1561 15.0102 16.2209 16.2192 16.2209 18.2509V25.8334H11.9305V11.3889H16.2209V13.3346C16.2209 13.3346 17.5108 10.9476 20.5761 10.9476C23.6399 10.9476 25.8333 12.8185 25.8333 16.688V25.8334ZM6.81222 9.49753C5.35085 9.49753 4.16666 8.30404 4.16666 6.83211C4.16666 5.36017 5.35085 4.16669 6.81222 4.16669C8.27359 4.16669 9.45707 5.36017 9.45707 6.83211C9.45707 8.30404 8.27359 9.49753 6.81222 9.49753ZM4.59689 25.8334H9.07057V11.3889H4.59689V25.8334Z"
                fill="white"
            />
        </g>
        <defs>
            <clipPath id="clip0_14_8">
                <rect width="30" height="30" fill="white" />
            </clipPath>
        </defs>
    </svg>
)

export default LinkedinIcon
