export const handleEscKeyPress = (e: KeyboardEvent, onClose: any) => {
    if (e.key === "Escape") {
        onClose();
    }
};
