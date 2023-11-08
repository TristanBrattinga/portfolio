import React from 'react'
import { IconProps } from '../types/icon'

const ChevronIcon: React.FC<IconProps> = ({ ...props }) => (
    <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            d="M11.0605 16.293L3.76749 9.00003L11.0605 1.70703L9.64649 0.29303L0.939487 9.00003L9.64649 17.707L11.0605 16.293Z"
            fill="white"
        />
    </svg>
)

export default ChevronIcon
