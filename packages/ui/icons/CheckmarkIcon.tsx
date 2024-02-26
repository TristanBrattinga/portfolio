import React from "react"

const CheckmarkIcon: React.FC<React.SVGAttributes<SVGElement>> = ({ ...props }) => (
    <svg width="12" height="12" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M1 4.9375L3.94737 8L9 1" stroke="#FFFFFF" />
    </svg>
)

export default CheckmarkIcon
