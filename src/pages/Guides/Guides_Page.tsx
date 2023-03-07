import ArticleList2 from 'components/ArticleList2/ArticleList2'
import './Guides_Page.scss'

type Props = {
    addAricleToFav: (id: number) => void
}
const Guides_Page = ({ addAricleToFav }: Props) => {
    return (
        <div className="Guides_Page">
            <div className="introduc_block">
                <h2>Guides</h2>
            </div>

            <div className="guides_page_cards">
                <div className="container">
                    <ArticleList2 addAricleToFav={addAricleToFav} />
                </div>
            </div>
        </div>
    )
}
export default Guides_Page
