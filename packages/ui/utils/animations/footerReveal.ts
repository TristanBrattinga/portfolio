const footerReveal = (inView: boolean) => ({
    "after:w-full after:ease-out after:duration-[1500ms] after:transition-all after:transform-gpu after:bg-white after:dark:bg-black after:absolute after:inset-0":
        true,
    "after:h-screen": !inView,
    "after:h-0": inView,
});

export default footerReveal;
