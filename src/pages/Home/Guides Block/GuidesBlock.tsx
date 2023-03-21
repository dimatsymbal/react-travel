import GuidesLogo from 'components/GuidesLogo/GuidesLogo'
import ArticleList2 from 'components/ArticleList2/ArticleList2'
import './Guides_block.scss'

type Props = {}
const Guides_block = (props: Props) => {
    return (
        <div className="Guides_block">
            <div className="container">
                <GuidesLogo />
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
