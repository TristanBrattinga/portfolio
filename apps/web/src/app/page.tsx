"use client"

import CardGrid from "ui/components/CardGrid"
import Modal from "ui/components/Modal"
import SettingsIcon2 from "ui/icons/SettingsIcon2"
import { useState } from "react"

export default function Page() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    return (
        <>
            <div className={"mt-12"}>
                <CardGrid />
            </div>
            <div className="relative">
                <button className="fixed bottom-4 left-4 bg-gray-500 p-2 rounded-full" onClick={handleModal}>
                    <SettingsIcon2 />
                </button>

                <Modal isOpen={isModalOpen} onClose={handleModal} />
            </div>
        </>
    )
}
