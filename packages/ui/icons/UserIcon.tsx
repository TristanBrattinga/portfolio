import React from "react"

const UserIcon: React.FC<React.SVGAttributes<SVGElement>> = ({ ...props }) => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            d="M29.2976 26.25C27.5838 23.2421 24.9077 20.8984 21.7001 19.5962C23.2952 18.3999 24.4734 16.732 25.0679 14.8288C25.6624 12.9256 25.6431 10.8836 25.0125 8.99205C24.382 7.10049 23.1723 5.45526 21.5548 4.28942C19.9373 3.12357 17.9939 2.49622 16.0001 2.49622C14.0062 2.49622 12.0628 3.12357 10.4453 4.28942C8.82779 5.45526 7.61809 7.10049 6.98756 8.99205C6.35704 10.8836 6.33767 12.9256 6.93218 14.8288C7.52669 16.732 8.70495 18.3999 10.3001 19.5962C7.09246 20.8984 4.41636 23.2421 2.70256 26.25C2.59636 26.4207 2.52558 26.6111 2.49443 26.8097C2.46328 27.0084 2.47238 27.2113 2.52121 27.4063C2.57003 27.6014 2.65758 27.7847 2.77864 27.9452C2.8997 28.1058 3.05181 28.2403 3.22592 28.3409C3.40003 28.4415 3.59259 28.5061 3.79215 28.5308C3.99171 28.5555 4.1942 28.5398 4.38758 28.4847C4.58096 28.4295 4.76127 28.3361 4.91781 28.2099C5.07435 28.0836 5.20392 27.9273 5.29881 27.75C7.56381 23.835 11.5638 21.5 16.0001 21.5C20.4363 21.5 24.4363 23.8362 26.7013 27.75C26.9069 28.0806 27.2331 28.3184 27.6109 28.4129C27.9886 28.5075 28.3883 28.4514 28.7255 28.2566C29.0626 28.0618 29.3108 27.7435 29.4176 27.3691C29.5244 26.9946 29.4813 26.5933 29.2976 26.25ZM9.50006 12C9.50006 10.7144 9.88127 9.45768 10.5955 8.38876C11.3097 7.31984 12.3249 6.48672 13.5126 5.99475C14.7003 5.50278 16.0073 5.37406 17.2681 5.62486C18.529 5.87567 19.6872 6.49473 20.5962 7.40377C21.5053 8.31281 22.1244 9.471 22.3752 10.7319C22.626 11.9928 22.4972 13.2997 22.0053 14.4874C21.5133 15.6751 20.6802 16.6903 19.6113 17.4045C18.5423 18.1187 17.2856 18.5 16.0001 18.5C14.2768 18.498 12.6246 17.8125 11.4061 16.594C10.1875 15.3754 9.50204 13.7233 9.50006 12Z"
            fill="white"
        />
    </svg>
)

export default UserIcon
