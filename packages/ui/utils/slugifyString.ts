export const slugifyString = (text: string) => {
    return text.split(' ').join('-').toLowerCase()
}
