import { IconProps } from '../types/icon'
import { FC } from 'react'

const CheckmarkIcon: FC<IconProps> = ({ size = '20', color = 'white', ...props }) => (
    <svg width={size} height={size} viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M1 4.9375L3.94737 8L9 1" stroke={color} />
    </svg>
)

export default CheckmarkIcon
