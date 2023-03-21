import places_logo from 'assets/places_logo.jpg'
import './places_logo.css'
type Props = {}
const PlacesLogo = (props: Props) => {
    return <img className="places_logo" src={places_logo} alt="fake shop" />
}
export default PlacesLogo
