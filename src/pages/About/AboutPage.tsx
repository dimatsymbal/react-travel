import ViewBlock from 'pages/Home/View Block/ViewBlock'
import AllLogos from 'components/AllLogos/AllLogos'
import ReadingBlock from './Reading Block/ReadingBlock'
import { Link } from 'react-router-dom'
import './About_Page.scss'
import WorkersBlock from './Workers Block/WorkersBlock'
type Props = {}
const AboutPage = (props: Props) => {
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
                        <AllLogos />
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

            <WorkersBlock />
            <ReadingBlock />
            <ViewBlock />
        </div>
    )
}
export default AboutPage
