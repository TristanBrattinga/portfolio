const shiftToWhite = (showMenu: boolean) => ({
    "ease-out duration-500 transition-all transform-gpu": true,
    "text-blue900new": !showMenu,
    "text-white": showMenu,
});

export default shiftToWhite;
