'use client'

import { useState, useEffect, ChangeEvent, KeyboardEvent } from 'react'

const Terminal = () => {
    const [output, setOutput] = useState<string[]>([''])
    const [inputValue, setInputValue] = useState<string>('')

    useEffect(() => {
        const welcomeMessage = 'Welcome to My Portfolio'
        let i = 0
        const timer = setInterval(() => {
            if (i < welcomeMessage.length) {
                setOutput(prevOutput => {
                    const lastLine = prevOutput[prevOutput.length - 1] || ''
                    const updatedLastLine = lastLine.substring(0, lastLine.length - 9) + welcomeMessage[i]

                    console.log(updatedLastLine)

                    return [...prevOutput.slice(0, prevOutput.length - 1), updatedLastLine]
                })
                i++
            } else {
                clearInterval(timer)
            }
        }, 100)

        return () => clearInterval(timer)
    }, [])

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const handleEnterPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setOutput(prevOutput => [...prevOutput, '$ ' + inputValue])
            // Handle user input here, e.g., display response or execute commands.
            // For now, let's just clear the input field.
            setInputValue('')
        }
    }

    return (
        <div className="container mx-auto bg-black/25 text-white font-mono p-4 h-20 overflow-auto">
            {output.map((line, index) => (
                <p key={index}>{line}</p>
            ))}
            <div className="input flex items-center">
                <span className="text-green-400">$</span>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleEnterPress}
                    className="flex-grow ml-2 bg-transparent border-none focus:outline-none text-white"
                    autoFocus
                />
            </div>
        </div>
    )
}

export default Terminal
