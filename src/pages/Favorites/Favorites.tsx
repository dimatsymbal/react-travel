import './Favorites.scss'
import ArticlesInFav from 'components/ArticlecInFav/ArticlesInFav'
type Props = {
    productsInFav: {
        [id: number]: number
    }
    productsInFav2: {
        [id: number]: number
    }
}
const Favorites = ({ productsInFav, productsInFav2 }: Props) => {
    return (
        <div className="favorites_page">
            <div className="introduc_block">
                <h2>Favorites</h2>
            </div>

            <div className="favorite_cards">
                <div className="container">
                    <ArticlesInFav
                        productsInFav={productsInFav}
                        productsInFav2={productsInFav2}
                    />
                </div>
            </div>
        </div>
    )
}
export default Favorites
