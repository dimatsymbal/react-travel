import ArticleArrey, { getProductsObject, Article } from 'Utils/ArticleArrey'
import ArticlesItemInFavList from './ArticlesItemInFavList'

type Props = {
    articlesInFav: {
        [id: number]: number
    }

    articleObject?: {
        [id: number]: Article
    }
    removeArticleFromFav: (id: number) => void
}

const ArticlesInFav = ({
    articlesInFav,
    articleObject = getProductsObject(ArticleArrey),
    removeArticleFromFav,
}: Props) => {
    return (
        <div>
            {Object.keys(articlesInFav).map((articleId) => (
                <ArticlesItemInFavList
                    removeArticleFromFav={removeArticleFromFav}
                    key={articleId}
                    article={articleObject[parseInt(articleId)]}
                />
            ))}
        </div>
    )
}
export default ArticlesInFav
