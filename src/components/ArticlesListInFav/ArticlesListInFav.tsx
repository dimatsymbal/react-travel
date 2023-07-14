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
                {Object.keys(articlesInFav).length === 0 ? (
                    <p
                        style={{
                            textAlign: 'center',
                            fontSize: '25px',
                            marginTop: '35px',
                        }}
                        className="empty_list"
                    >
                        The list is empty
                    </p>
                ) : (
                    Object.keys(articlesInFav).map((articleId) => (
                        <ArticlesItemInFavList
                            key={articleId}
                            article={articleObject[parseInt(articleId)]}
                        />
                    ))
                )}
            </div>
        </>
    )
}

export default ArticlesInFav
