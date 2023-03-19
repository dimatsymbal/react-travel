import ArticleList2 from 'components/ArticleList2/ArticleList2'
import './Guides_Page.scss'

type Props = {}
const Guides_Page = (props: Props) => {
    return (
        <div className="Guides_Page">
            <div className="introduc_block">
                <h2>Guides</h2>
            </div>

            <div className="guides_page_cards">
                <div className="container">
                    <ArticleList2 />
                </div>
            </div>
        </div>
    )
}
export default Guides_Page
