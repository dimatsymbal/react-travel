import PlacesBlock from './Places Block/PlacesBlock'
import GuidesBlock from './Guides Block/GuidesBlock'
import ViewBlock from './View Block/ViewBlock'
import GuestBlock from './Guest Block/GuestBlock'
import AdventuresBlock from './Adventures Block/AdventuresBlock'
import SliderBlock from './Slider Block/SliderBlock'
import Reviews from 'components/Rewievs/Reviews'
type Props = {}
const Home = (props: Props) => {
    return (
        <>
            <GuestBlock />
            <AdventuresBlock />
            <SliderBlock />
            <PlacesBlock />
            <GuidesBlock />
            <ViewBlock />
            <Reviews />
        </>
    )
}
export default Home
