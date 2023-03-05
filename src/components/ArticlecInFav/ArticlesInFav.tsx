import ArticleArrey, { getProductsObject, Article } from 'Utils/ArticleArrey'
import ArticleArrey2, {
    getProductsObject2,
    Article2,
} from 'Utils/ArticleArrey2'
import Card from 'react-bootstrap/Card'
import './ArticlesInFav.css'
type Props = {
    productsInFav: {
        [id: number]: number
    }
    productsInFav2: {
        [id: number]: number
    }
    articleObject?: {
        [id: number]: Article
    }
    articleObject2?: {
        [id: number]: Article2
    }
}

const ArticlesInFav = ({
    productsInFav,
    productsInFav2,
    articleObject = getProductsObject(ArticleArrey),
    articleObject2 = getProductsObject2(ArticleArrey2),
}: Props) => {
    return (
        <div>
            {Object.keys(productsInFav).map((articleId) => (
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
            {Object.keys(productsInFav2).map((articleId2) => (
                <div key={articleId2}>
                    <Card className="cards_in_favorites">
                        {articleObject2[parseInt(articleId2)].id}
                        {articleObject2[parseInt(articleId2)].title}
                        {articleObject2[parseInt(articleId2)].author}
                        {articleObject2[parseInt(articleId2)].month}
                        {articleObject2[parseInt(articleId2)].date}
                    </Card>
                </div>
            ))}
        </div>
    )
}
export default ArticlesInFav
