import Places_block from './Places Block/Places_block'
import Guides_block from './Guides Block/Guides_block'
import View_Block from './View Block/View_Block'
import Guest_Block from './Guest Block/Guest_Block'
import Adventures_block from './Adventures Block/Adventures_block'
import Slider_Block from './Slider Block/Slider_Block'
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
