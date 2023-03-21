import PlacesLogo from 'components/PlacesLogo/PlacesLogo'
import './Places_block.scss'
import ArticleList from 'components/ArticleList/ArticleList'

type Props = {}
const Places_block = (props: Props) => {
    return (
        <div className="Places_block">
            <div className="container">
                <PlacesLogo />
                <h6 className="little_title">Places</h6>
                <h2 className="title">
                    Lorem ipsum dolor sit amet tetur adipis icing elit
                </h2>

                <ArticleList />
            </div>
        </div>
    )
}
export default Places_block
