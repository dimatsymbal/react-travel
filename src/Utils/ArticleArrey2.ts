export type Article2 = {
    id: number
    image: string
    knopka: string
    title: string
    author: string
    month: string
    date: number
}

const ArticleArrey2: Article2[] = [
    {
        id: 4,
        image: '/images/blogger-blog-guides-1.jpg',
        knopka: 'Guides',
        title: 'Ut sodales nunc eu',
        author: 'Muffin Group',
        month: 'June',
        date: 11,
    },
    {
        id: 5,
        image: '/images/blogger-blog-guides-2.jpg',
        knopka: 'Guides',
        title: 'Maecenas congue augue',
        author: 'Muffin Group',
        month: 'July',
        date: 14,
    },
    {
        id: 6,
        image: '/images/blogger-blog-guides-3.jpg',
        knopka: 'Guides',
        title: 'Aliquam mollis purus',
        author: 'Muffin Group',
        month: 'August',
        date: 22,
    },
]

export const getProductsObject2 = (array2: Article2[]) =>
    array2.reduce(
        (object2, product2) => ({
            ...object2,
            [product2.id]: product2,
        }),
        {}
    )

export default ArticleArrey2
