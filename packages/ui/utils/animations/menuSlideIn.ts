const menuSlideIn = (inView: boolean) => ({
    "ease duration-700 transition-all transform-gpu": true,
    "translate-y-[100%]": !inView,
    "translate-y-0": inView,
});

export default menuSlideIn;
