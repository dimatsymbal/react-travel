import AdventuresLogo from 'components/AdventuresLogo/AdventuresLogo'
import AdventuresComp from 'components/AdvenuresList/AdventuresComp'
import './Adventures_block.scss'
import { Link } from 'react-router-dom'
type Props = {}
const Adventures_block = (props: Props) => {
    return (
        <div className="Adventures_block">
            <div className="container">
                <AdventuresLogo />
                <h6 className="little_title">Adventures</h6>
                <h2 className="title">
                    Lorem ipsum dolor sit amet tetur adipis icing elit
                </h2>

                <AdventuresComp />

                <Link className="discover_more" to="/adventures">
                    Discover more
                </Link>
            </div>
        </div>
    )
}
export default Adventures_block
