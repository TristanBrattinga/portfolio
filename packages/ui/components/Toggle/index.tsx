import React, { useState } from 'react'
import { ToggleProps } from './types'
import clsx from 'clsx'

const Toggle = ({}: ToggleProps) => {
    const [click, setClick] = useState(false)

    return (
        <button
            onClick={() => setClick(!click)}
            className={clsx('bg-[#D9D9D9] w-12 h-6 rounded-full  p-1 transition-all duration-300 relative', {})}
        >
            <span
                className={clsx(
                    'size-4 bg-black rounded-full transition-all duration-300 absolute top-1/2 -translate-y-1/2',
                    {
                        'right-1': click,
                        'left-1': !click,
                    },
                )}
            ></span>
        </button>
    )
}

export default Toggle
