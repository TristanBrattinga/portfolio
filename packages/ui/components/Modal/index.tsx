// Modal.js
import { motion } from "framer-motion"
import CloseIcon from "../../icons/CloseIcon"
import Toggle from "../Toggle"

type ModalProps = {
    isOpen: boolean
    onClose: () => void
}

const Modal = ({ isOpen, onClose }: ModalProps) => {
    const modalVariants = {
        hidden: { opacity: 0, scale: 0, x: "-50%", y: "50%" },
        visible: { opacity: 1, scale: 1, x: "8%", y: "-20%" },
    }

    return (
        <motion.div
            className="fixed bottom-4 left-4 px-4 py-6 bg-white rounded-md shadow-md"
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            variants={modalVariants}
        >
            <div className={"flex items-center justify-between gap-16"}>
                <p>Settings</p>
                <button onClick={onClose}>
                    <CloseIcon />
                </button>
            </div>
            <div>
                <ul>
                    <li>
                        <Toggle label={"Darkmode"} />
                    </li>
                    <li>
                        <Toggle label={"Reduced motion"} />
                    </li>
                </ul>
            </div>
        </motion.div>
    )
}

export default Modal
