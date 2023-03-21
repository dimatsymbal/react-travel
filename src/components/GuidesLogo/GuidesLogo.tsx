import guides_logo from 'assets/guides_logo.jpg'
import './guides_logo.css'

type Props = {}
const GuidesLogo = (props: Props) => {
    return <img className="guides_logo" src={guides_logo} alt="fake shop" />
}
export default GuidesLogo
