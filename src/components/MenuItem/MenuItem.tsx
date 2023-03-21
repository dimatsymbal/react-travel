import { NavLink } from 'react-router-dom'
import './Menu_item.scss'

type Props = {
    to: string
    children: React.ReactNode
}
const Menu_item = ({ to, children }: Props) => {
    return (
        <a className="links_navbar" href="/">
            <NavLink
                to={to}
                className={({ isActive }) =>
                    isActive ? 'menu_item_active' : 'menu_item'
                }
            >
                {children}
            </NavLink>
        </a>
    )
}
export default Menu_item
