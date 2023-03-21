import Places_block from './Places Block/PlacesBlock'
import Guides_block from './Guides Block/GuidesBlock'
import View_Block from './View Block/ViewBlock'
import Guest_Block from './Guest Block/GuestBlock'
import Adventures_block from './Adventures Block/AdventuresBlock'
import Slider_Block from './Slider Block/SliderBlock'
import Reviews from 'components/Rewievs/Reviews'
type Props = {}
const Home = (props: Props) => {
    return (
        <>
            <Guest_Block />
            <Adventures_block />
            <Slider_Block />
            <Places_block />
            <Guides_block />
            <View_Block />
            <Reviews />
        </>
    )
}
export default Home
