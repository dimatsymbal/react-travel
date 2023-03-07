import ArticleArrey, { getProductsObject, Article } from 'Utils/ArticleArrey'
import Card from 'react-bootstrap/Card'
import './ArticlesInFav.css'
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
        <div>
            {Object.keys(articlesInFav).map((articleId) => (
                <div key={articleId}>
                    <Card className="cards_in_favorites">
                        {articleObject[parseInt(articleId)].id}
                        {articleObject[parseInt(articleId)].title}
                        {articleObject[parseInt(articleId)].author}
                        {articleObject[parseInt(articleId)].month}
                        {articleObject[parseInt(articleId)].date}
                    </Card>
                </div>
            ))}
        </div>
    )
}
export default ArticlesInFav
