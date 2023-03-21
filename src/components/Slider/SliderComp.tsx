import './Slider_Comp.css'
import Carousel from 'react-bootstrap/Carousel'

type Props = {}
const Slider_Comp = (props: Props) => {
    return (
        <Carousel className="carusel">
            <Carousel.Item className="carusel_item" interval={13000}>
                <img
                    className="carusel_img"
                    src="/images/carusel_slide1.jpg"
                    alt="First img"
                />
                <Carousel.Caption className="carusel_caption">
                    <h3 className="caption_title">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqu enim ad minim veniam.
                    </h3>
                    <img
                        className="caption_img"
                        src="/images/carusel_author_img.jpg"
                        alt="carusel_author_img"
                    />
                    <p className="caption_author">Jenny Penny</p>
                    <p className="caption_text_under_author">CEO @ Pandolum</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="carusel_item" interval={13000}>
                <img
                    className="carusel_img"
                    src="/images/carusel_slide2.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption className="carusel_caption">
                    <h3 className="caption_title">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqu enim ad minim veniam.
                    </h3>
                    <img
                        className="caption_img"
                        src="/images/carusel_author_img2.jpg"
                        alt="carusel_author_img"
                    />
                    <p className="caption_author">Ben Hogges</p>
                    <p className="caption_text_under_author">CEO @ Pandolum</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="carusel_item" interval={13000}>
                <img
                    className="carusel_img"
                    src="/images/carusel_slide3.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption className="carusel_caption">
                    <h3 className="caption_title">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqu enim ad minim veniam.
                    </h3>
                    <img
                        className="caption_img"
                        src="/images/carusel_author_img3.jpg"
                        alt="carusel_author_img"
                    />
                    <p className="caption_author">Amanda Vitoro</p>
                    <p className="caption_text_under_author">CEO @ Pandolum</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
export default Slider_Comp
