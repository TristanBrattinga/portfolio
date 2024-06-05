import { ProjectType } from '../../src/types/Project'

export interface Projects {
    [key: string]: ProjectType[]
}

export const projects: Projects = {
    school: [
        {
            image: { src: '/images/cssttr-thumbnail.png', alt: '' },
            projectLink: 'https://tristanbrattinga.github.io/cssttr/',
            title: 'Rubiks Cube',
            courseName: 'CSS to the Rescue',
            date: new Date(),
            description: 'Build a Rubiks Cube with just CSS!',
            size: 'large',
        },
        {
            image: { src: '/images/stock.jpg', alt: '' },
            projectLink: '',
            title: 'Dutch Tax Form',
            courseName: 'Browser Technologies',
            date: new Date(),
            description: 'This is the project description',
            size: 'small',
        },
        {
            image: { src: '/images/stock.jpg', alt: '' },
            projectLink: '',
            title: 'NFT Generator',
            courseName: 'Introduction to Programming',
            date: new Date(),
            description: 'This is the project description',
            size: 'medium',
        },
        {
            image: { src: '/images/stock.jpg', alt: '' },
            projectLink: '',
            title: 'Anno Amsterdam',
            courseName: 'Master test',
            date: new Date(),
            description: 'This is the project description',
            size: 'medium',
        },
    ],
    professional: [
        {
            image: { src: '/images/stock.jpg', alt: '' },
            projectLink: '',
            title: 'Webbers Agency',
            date: new Date(),
            description: 'This is the project description',
            size: 'large',
        },
        {
            image: { src: '/images/stock.jpg', alt: '' },
            projectLink: '',
            title: 'Lekarnar',
            date: new Date(),
            description: 'This is the project description',
            size: 'small',
        },
        {
            image: { src: '/images/stock.jpg', alt: '' },
            projectLink: '',
            title: 'Project',
            date: new Date(),
            description: 'This is the project description',
            size: 'medium',
        },
        {
            image: { src: '/images/stock.jpg', alt: '' },
            projectLink: '',
            title: 'Project',
            date: new Date(),
            description: 'This is the project description',
            size: 'medium',
        },
        {
            image: { src: '/images/stock.jpg', alt: '' },
            projectLink: '',
            title: 'Project',
            date: new Date(),
            description: 'This is the project description',
            size: 'small',
        },
        {
            image: { src: '/images/stock.jpg', alt: '' },
            projectLink: '',
            title: 'Project',
            date: new Date(),
            description: 'This is the project description',
            size: 'small',
        },
        {
            image: { src: '/images/stock.jpg', alt: '' },
            projectLink: '',
            title: 'Project',
            date: new Date(),
            description: 'This is the project description',
            size: 'small',
        },
    ],
    photography: [],
}
