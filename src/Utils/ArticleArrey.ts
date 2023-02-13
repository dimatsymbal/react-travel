type Article = {
    id: number
    image: string
    knopka: string
    title: string
    author: string
    month: string
    date: number
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
    },
    {
        id: 2,
        image: '/images/blogger-blog-places-2.jpg',
        knopka: 'Places',
        title: 'Fusce sagittis risus a urna',
        author: 'Muffin Group',
        month: 'November',
        date: 29,
    },
    {
        id: 3,
        image: '/images/blogger-blog-places-3.jpg',
        knopka: 'Places',
        title: 'Vestibulum sollicitudin est',
        author: 'Muffin Group',
        month: 'December',
        date: 28,
    },
]

export default ArticleArrey
