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
    page_fullDesc: string
    page_paragraph_sub_title: string
    page_paragraph_content: string
    page_img: string
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
        category: '/places',
        page_fullDesc:
            'Lorem modi tempora incidunt ut labore et dolore magnam moditeora incidunt ut labore et dolore magnam.',
        page_paragraph_sub_title:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do dolore magna aliqua. Ut enim ad minim',
        page_paragraph_content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu forum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.',

        page_img: '/images/free1.jpg',
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
        category: '/places',
        page_fullDesc:
            'Lorem modi tempora incidunt ut labore et dolore magnam moditeora incidunt ut labore et dolore magnam.',
        page_paragraph_sub_title:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do dolore magna aliqua. Ut enim ad minim',
        page_paragraph_content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu forum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.',
        page_img: '/images/free2.jpg',
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
        category: '/places',
        page_fullDesc:
            'Lorem modi tempora incidunt ut labore et dolore magnam moditeora incidunt ut labore et dolore magnam.',
        page_paragraph_sub_title:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do dolore magna aliqua. Ut enim ad minim',
        page_img: '/images/free3.jpg',
        page_paragraph_content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu forum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.',
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
        category: '/guides',
        page_img: '/images/free4.jpg',
        page_fullDesc:
            'Lorem modi tempora incidunt ut labore et dolore magnam moditeora incidunt ut labore et dolore magnam.',
        page_paragraph_sub_title:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do dolore magna aliqua. Ut enim ad minim',
        page_paragraph_content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu forum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.',
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
        category: '/guides',
        page_img: '/images/free5.jpg',
        page_fullDesc:
            'Lorem modi tempora incidunt ut labore et dolore magnam moditeora incidunt ut labore et dolore magnam.',
        page_paragraph_sub_title:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do dolore magna aliqua. Ut enim ad minim',
        page_paragraph_content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu forum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.',
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
        category: '/guides',
        page_img: '/images/free6.jpg',
        page_fullDesc:
            'Lorem modi tempora incidunt ut labore et dolore magnam moditeora incidunt ut labore et dolore magnam.',
        page_paragraph_sub_title:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do dolore magna aliqua. Ut enim ad minim',
        page_paragraph_content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu forum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.',
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
        category: '/adventures',
        page_img: '/images/free7.jpg',
        page_fullDesc:
            'Lorem modi tempora incidunt ut labore et dolore magnam moditeora incidunt ut labore et dolore magnam.',
        page_paragraph_sub_title:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do dolore magna aliqua. Ut enim ad minim',
        page_paragraph_content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu forum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.',
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
        category: '/adventures',
        page_img: '/images/free8.jpg',
        page_fullDesc:
            'Lorem modi tempora incidunt ut labore et dolore magnam moditeora incidunt ut labore et dolore magnam.',
        page_paragraph_sub_title:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do dolore magna aliqua. Ut enim ad minim',
        page_paragraph_content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu forum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.',
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
