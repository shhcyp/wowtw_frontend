export const hideScrollBar = () => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    document.body.style.paddingRight = scrollbarWidth + 'px'
    document.body.style.overflow = 'hidden'
}
export const showScrollBar = () => {
    document.body.style.paddingRight = ''
    document.body.style.overflow = 'auto'
}