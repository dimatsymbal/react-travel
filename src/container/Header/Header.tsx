import './header-style.scss'
import { Link } from 'react-router-dom'
;<style>
    @import
    url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,700;1,200;1,300&display=swap');
</style>

type Props = {}
const Header = (props: Props) => {
    return (
        <header>
            <div className="navbar">
                <div className="leftside_navbar">
                    <img
                        className="navbar_photo"
                        src="https://themes.muffingroup.com/be/blogger3/wp-content/uploads/2019/10/blogger3-logo-retina.png"
                        alt="navbar"
                    />
                </div>
                <div className="rightside_navbar">
                    <a className="links_navbar" href="#">
                        <Link className="link" to="/">
                            Home
                        </Link>
                    </a>
                    <a className="links_navbar" href="#">
                        <Link className="link" to="/about">
                            About
                        </Link>
                    </a>
                    <a className="links_navbar" href="#">
                        <Link className="link" to="/favorites">
                            Favorites
                        </Link>
                    </a>
                    <a className="links_navbar" href="#">
                        <Link className="link" to="/adventures">
                            Adventures
                        </Link>
                    </a>
                    <a className="links_navbar" href="#">
                        <Link className="link" to="/places">
                            Places
                        </Link>
                    </a>
                    <a className="links_navbar" href="#">
                        <Link className="link" to="/guides">
                            Guides
                        </Link>
                    </a>

                    <div className="links_in_adaptive">
                        <button className="burger_btn_header">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="26"
                                fill="currentColor"
                                className="bi bi-list"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                                />
                            </svg>
                        </button>
                    </div>

                    <button className="navbar_btn">Join Us</button>
                </div>
            </div>
        </header>
    )
}
export default Header
