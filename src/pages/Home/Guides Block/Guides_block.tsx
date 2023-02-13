import Guides_logo from 'components/guides_logo/guides_logo'
import ArticleList2 from 'components/ArticleList2/ArticleList2'
import './Guides_block.scss'

type Props = {}
const Guides_block = (props: Props) => {
    return (
        <div className="Guides_block">
            <div className="container">
                <Guides_logo />
                <h6 className="little_title">Guides</h6>
                <h2 className="title">
                    Lorem ipsum dolor sit amet tetur adipis icing elit
                </h2>

                <ArticleList2 />
            </div>
        </div>
    )
}
export default Guides_block
