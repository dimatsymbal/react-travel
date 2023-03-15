import './Favorites.scss'
import ArticlesListInFav from 'components/ArticlesListInFav/ArticlesListInFav'
type Props = {
    articlesInFav: {
        [id: number]: number
    }
    removeArticleFromFav: (id: number) => void
    removeAllArticlesFromFav: (id: number) => void
}
const Favorites = ({
    articlesInFav,
    removeArticleFromFav,
    removeAllArticlesFromFav,
}: Props) => {
    return (
        <div className="favorites_page">
            <div className="introduc_block">
                <h2>Favorites</h2>
            </div>

            <div className="favorite_cards">
                <div className="container">
                    <ArticlesListInFav
                        articlesInFav={articlesInFav}
                        removeArticleFromFav={removeArticleFromFav}
                        removeAllArticlesFromFav={removeAllArticlesFromFav}
                    />
                </div>
            </div>
        </div>
    )
}
export default Favorites
