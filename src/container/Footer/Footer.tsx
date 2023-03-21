import './Footer.scss'
import Footer_logo from 'components/footer_logo/FooterLogo'
type Props = {}
const Footer = (props: Props) => {
    return (
        <div className="footer">
            <div className="container">
                <Footer_logo />
                <p id="paragraph_in_footer">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliquum. Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo s et quasi
                </p>

                <h6>
                    © 2023 Betheme by <a href="/">Muffin group</a> | All Rights
                    Reserved | Powered by <a href="/">WordPress</a>
                </h6>
                <a href="/">
                    <button>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            fill="currentColor"
                            className="bi bi-chevron-up"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                            />
                        </svg>
                    </button>
                </a>
            </div>
        </div>
    )
}
export default Footer
