'use client'

import { useEffect, useState } from 'react'
import { languages } from '../../data/hello'
import * as Tooltip from '@radix-ui/react-tooltip'

const LanguageSwitcher = () => {
    const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentLanguageIndex(prevIndex => (prevIndex + 1) % languages.length)
        }, 5000)

        return () => clearInterval(intervalId)
    }, [])

    const getTitleForCurrentLanguage = () => {
        return languages[currentLanguageIndex]
    }

    return (
        <div className="my-20">
            <Tooltip.Provider>
                <Tooltip.Root>
                    <h1 className="text-5xl pointer-default text-center">
                        <Tooltip.Trigger className="w-60">
                            {getTitleForCurrentLanguage().hello.toString()}
                        </Tooltip.Trigger>
                        , welcome to my world!
                    </h1>
                    <Tooltip.Portal>
                        <Tooltip.Content className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]">
                            {getTitleForCurrentLanguage().language}
                            <Tooltip.Arrow className="fill-white" />
                        </Tooltip.Content>
                    </Tooltip.Portal>
                </Tooltip.Root>
            </Tooltip.Provider>
        </div>
    )
}

export default LanguageSwitcher
