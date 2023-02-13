import Adventures_logo from 'components/adventures_logo/adventures_logo'
import Adventures_Comp from 'components/AdvenuresList/Adventures_Comp'
import './Adventures_block.scss'
type Props = {}
const Adventures_block = (props: Props) => {
    return (
        <div className="Adventures_block">
            <div className="container">
                <Adventures_logo />
                <h6 className="little_title">Adventures</h6>
                <h2 className="title">
                    Lorem ipsum dolor sit amet tetur adipis icing elit
                </h2>

                <Adventures_Comp />

                <a className="discover_more" href="#">
                    Discover more
                </a>
            </div>
        </div>
    )
}
export default Adventures_block
