import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Total_logo from 'components/total_logo/total_logo'
import Lapki_logo from 'components/lapki_logo/lapki_logo'
import './Reading_block.css'
type Props = {}
const Reading_block = (props: Props) => {
    return (
        <div className="Reading_block">
            <div className="reading_block_content">
                <Container className="container">
                    <Row>
                        <Col className="left">
                            <Total_logo />
                            <h2 className="h2_reading_block">
                                Lorem ipsum dolor sit amet tetur adipis icing
                                elit
                            </h2>

                            <p className="paragraph_reading_block">
                                blogger-about-betheme-logo Lorem ipsum dolor sit
                                amet tetur adipis icing elit Lorem ipsum dolor
                                sit amet, consectetur adipisicing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore
                                magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. <br></br>{' '}
                                <br></br> Duis aute irure dolor in reprehenderit
                                in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui
                                officia deserunt mollit anim id est laborum. Sed
                                ut perspiciatis unde omnis iste natus error sit
                                voluptatem accusantium doloremque laudantium,
                                totam rem aperiam, eaque ipsa quae ab illo
                                inventore veritatis et quasi architecto beatae
                                vitae dicta sunt explicabo. Nemo enim ipsam
                                voluptatem quia voluptas sit aspernatur aut odit
                                aut fugit, sed quia consequuntur magni dolores
                                eos qui ratione voluptatem sequi nesciunt. Neque
                                porro quisquam est, qui dolorem ipsum quia dolor
                                sit amet, consectetur, adipisci velit, sed quia
                                non numquam eius modi tempora incidunt ut labore
                                et dolore magnam aliquam quaerat voluptatem.
                            </p>
                        </Col>
                        <Col className="right">
                            <div className="photo_of_card_reading_block">
                                <img
                                    className="photo_of_reading_block"
                                    src="https://themes.muffingroup.com/be/blogger3/wp-content/uploads/2019/10/blogger-about-lady.jpg"
                                    alt="image"
                                />
                            </div>
                            <Lapki_logo />

                            <h3 className="h3_reading_block">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqu enim
                                ad minim veniam.
                            </h3>

                            <div className="divdivdiv">
                                <img
                                    className="caption_img_reading_block"
                                    src="/images/carusel_author_img.jpg"
                                    alt="carusel_author_img"
                                />
                                <p className="caption_author_reading_block">
                                    Jenny Penny
                                </p>
                                <p className="caption_text_under_author_reading_block">
                                    CEO @ Pandolum
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
export default Reading_block
