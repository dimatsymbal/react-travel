import './Favorites.scss'
import ArticlesListInFav from 'components/ArticlesListInFav/ArticlesListInFav'
type Props = {
    articlesInFav: {
        [id: number]: number
    }
}
const Favorites = ({ articlesInFav }: Props) => {
    return (
        <div className="favorites_page">
            <div className="introduc_block">
                <h2>Favorites</h2>
            </div>

            <div className="favorite_cards">
                <div className="container">
                    <ArticlesListInFav articlesInFav={articlesInFav} />
                </div>
            </div>
        </div>
    )
}
export default Favorites
