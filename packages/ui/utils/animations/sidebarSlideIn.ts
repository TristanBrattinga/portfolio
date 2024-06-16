const sidebarSlideIn = (inView: boolean) => ({
    'ease-out duration-700 transition-all transform-gpu': true,
    'translate-x-[100%]': !inView,
    'translate-x-[0%]': inView,
})

export default sidebarSlideIn
