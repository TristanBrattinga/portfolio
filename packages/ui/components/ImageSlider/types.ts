export type ImageSliderProps = {
    images: ImageType[]
}

type ImageType = {
    src: string
    alt: string
    width?: number
    height?: number
}
