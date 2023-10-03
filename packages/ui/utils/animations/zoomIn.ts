const zoomIn = (inView: boolean) => ({
    "ease-out duration-700 transition-all transform-gpu": true,
    "opacity-0 scale-0": !inView,
    "opacity-100 scale-1": inView,
});

export default zoomIn;
