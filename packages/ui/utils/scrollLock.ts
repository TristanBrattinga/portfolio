const body = typeof document !== "undefined" ? document.querySelector("body") : null

let scrollPosition = 0

export const scrollLock = {
    enable() {
        if (body) {
            scrollPosition = window.scrollY
            body.style.overflow = 'hidden'
        }
    },
    disable() {
        if (body) {
            body.style.removeProperty('overflow')
        }
    }
}
