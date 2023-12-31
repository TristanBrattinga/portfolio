const slideInRight = (inView: boolean) => ({
  "ease-out duration-500 transition-all transform-gpu": true,
  "opacity-0 translate-x-[40px]": !inView,
  "opacity-100 translate-x-0": inView,
});

export default slideInRight;
