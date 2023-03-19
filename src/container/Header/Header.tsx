import './header-style.scss'
import Menu_item from 'components/Menu_item/Menu_item'
import { Link } from 'react-router-dom'

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
                    <Menu_item to="/">Home</Menu_item>
                    <Menu_item to="/about">About</Menu_item>
                    <Menu_item to="/favorites">Favorites</Menu_item>
                    <Menu_item to="/adventures">Adventures</Menu_item>
                    <Menu_item to="/places">Places</Menu_item>
                    <Menu_item to="/guides">Guides</Menu_item>

                    <div className="links_in_adaptive">
                        <div className="dropdown">
                            <button
                                className="btn_dropdown dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
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
                            <ul className="dropdown-menu">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/favorites">Favorites</Link>
                                </li>
                                <li>
                                    <Link to="/adventures">Adventures</Link>
                                </li>
                                <li>
                                    <Link to="/places">Places</Link>
                                </li>
                                <li>
                                    <Link to="/guides">Guides</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <Link className="btn_join_us" to="/joinus">
                        Join Us
                    </Link>
                </div>
            </div>
        </header>
    )
}
export default Header
