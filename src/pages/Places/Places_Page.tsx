import './Places_Page.scss'
import ArticleList from 'components/ArticleList/ArticleList'

type Props = {
    addAricleToFav: (id: number) => void
}
const Places_Page = ({ addAricleToFav }: Props) => {
    return (
        <div className="Places_Page">
            <div className="introduc_block">
                <h2>places</h2>
            </div>

            <div className="places_page_cards">
                <div className="container">
                    <ArticleList addAricleToFav={addAricleToFav} />
                </div>
            </div>
        </div>
    )
}
export default Places_Page
