import TemporaryDrawer from 'components/AdaptiveMenu/AdaptiveMenu'
import './header-style.scss'
import MenuItem from 'components/MenuItem/MenuItem'
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
                    <MenuItem to="/">Home</MenuItem>
                    <MenuItem to="/about">About</MenuItem>
                    <MenuItem to="/favorites">Favorites</MenuItem>
                    <MenuItem to="/adventures">Adventures</MenuItem>
                    <MenuItem to="/places">Places</MenuItem>
                    <MenuItem to="/guides">Guides</MenuItem>

                    <div className="links_in_adaptive">
                        {/* <div className="dropdown">
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
                        </div> */}

                        <TemporaryDrawer />
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
