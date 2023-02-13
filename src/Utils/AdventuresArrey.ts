type Adventures = {
    id: number
    image: string
    knopka: string
    title: string
    paragraph: string
    author: string
    month: string
}

const AdventuresArrey: Adventures[] = [
    {
        id: 1,
        image: '/images/blogger-blog-adventure2.jpg',
        knopka: 'Adventures',
        title: 'Donec tempor pur',
        paragraph:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquum.',
        author: 'Muffin Group',
        month: 'October 23, 2019',
    },
    {
        id: 2,
        image: '/images/blogger-blog-adventure1.jpg',
        knopka: 'Adventures',
        title: 'Fusce nec orcio',
        paragraph:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquum.',
        author: 'Muffin Group',
        month: 'November 23, 2019',
    },
]

export default AdventuresArrey
