import ArticleArrey, { getProductsObject, Article } from 'Utils/ArticleArrey'
import ArticlesItemInFavList from './ArticlesItemInFavList'

type Props = {
    articlesInFav: {
        [id: number]: number
    }

    articleObject?: {
        [id: number]: Article
    }
}

const ArticlesInFav = ({
    articlesInFav,
    articleObject = getProductsObject(ArticleArrey),
}: Props) => {
    return (
        <>
            <div>
                {Object.keys(articlesInFav).map((articleId) => (
                    <ArticlesItemInFavList
                        key={articleId}
                        article={articleObject[parseInt(articleId)]}
                    />
                ))}
            </div>
        </>
    )
}
export default ArticlesInFav
