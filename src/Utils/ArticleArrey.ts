export type Article = {
    id: number
    image: string
    knopka: string
    title: string
    author: string
    month: string
    date: number
    category: string
    paragraph: string
}

const ArticleArrey: Article[] = [
    {
        id: 1,
        image: '/images/blogger-blog-places-1.jpg',
        knopka: 'Places',
        title: 'Nam tincidunt metus',
        author: 'Muffin Group',
        month: 'October',
        date: 22,
        paragraph: '.',
        category: 'places',
    },
    {
        id: 2,
        image: '/images/blogger-blog-places-2.jpg',
        knopka: 'Places',
        title: 'Fusce sagittis risus a urna',
        author: 'Muffin Group',
        month: 'November',
        date: 29,
        paragraph: '.',
        category: 'places',
    },
    {
        id: 3,
        image: '/images/blogger-blog-places-3.jpg',
        knopka: 'Places',
        title: 'Vestibulum sollicitudin est',
        author: 'Muffin Group',
        month: 'December',
        date: 28,
        paragraph: '.',
        category: 'places',
    },
    {
        id: 4,
        image: '/images/blogger-blog-guides-1.jpg',
        knopka: 'Guides',
        title: 'Ut sodales nunc eu',
        author: 'Muffin Group',
        month: 'June',
        date: 11,
        paragraph: '.',
        category: 'guides',
    },
    {
        id: 5,
        image: '/images/blogger-blog-guides-2.jpg',
        knopka: 'Guides',
        title: 'Maecenas congue augue',
        author: 'Muffin Group',
        month: 'July',
        date: 14,
        paragraph: '.',
        category: 'guides',
    },
    {
        id: 6,
        image: '/images/blogger-blog-guides-3.jpg',
        knopka: 'Guides',
        title: 'Aliquam mollis purus',
        author: 'Muffin Group',
        month: 'August',
        date: 22,
        paragraph: '.',
        category: 'guides',
    },
    {
        id: 7,
        image: '/images/blogger-blog-adventure2.jpg',
        knopka: 'Adventures',
        title: 'Donec tempor pur',
        paragraph:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquum.',
        author: 'Muffin Group',
        month: 'October',
        date: 7,
        category: 'adventures',
    },
    {
        id: 8,
        image: '/images/blogger-blog-adventure1.jpg',
        knopka: 'Adventures',
        title: 'Fusce nec orcio',
        paragraph:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquum.',
        author: 'Muffin Group',
        month: 'February',
        date: 23,
        category: 'adventures',
    },
]

export const getProductsObject = (array: Article[]) =>
    array.reduce(
        (object, product) => ({
            ...object,
            [product.id]: product,
        }),
        {}
    )

export default ArticleArrey
