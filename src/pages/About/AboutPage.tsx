import View_Block from 'pages/Home/View Block/ViewBlock'
import All_logos from 'components/AllLogos/AllLogos'
import Reading_block from './Reading Block/ReadingBlock'
import { Link } from 'react-router-dom'
import './About_Page.scss'
import Workers_block from './Workers Block/WorkersBlock'
type Props = {}
const About_Page = (props: Props) => {
    return (
        <div className="About_Page">
            <div className="introduc_block">
                <h2 className="about_page_intr_block_h2">
                    Lorem ipsum dolor sit amet tetur adipis icing elit
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur lorem adipisicing
                    elit, sed dolor sit amet
                </p>
            </div>

            <div className="under_introduce">
                <div className="left">
                    <div className="left_content">
                        <All_logos />
                        <h2>
                            Lorem ipsum dolor sit amet tetur adipis icing elit
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labor
                        </p>
                        <Link className="discover_more" to="/adventures">
                            Discover more
                        </Link>
                    </div>
                </div>
                <div className="right"></div>
            </div>

            <Workers_block />
            <Reading_block />
            <View_Block />
        </div>
    )
}
export default About_Page
