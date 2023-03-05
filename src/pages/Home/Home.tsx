import Places_block from './Places Block/Places_block'
import Guides_block from './Guides Block/Guides_block'
import View_Block from './View Block/View_Block'
import Guest_Block from './Guest Block/Guest_Block'
import Adventures_block from './Adventures Block/Adventures_block'
import Slider_Block from './Slider Block/Slider_Block'
type Props = {
    addPlacesToCart: (id: number) => void
    addGuidesToCart: (id: number) => void
}
const Home = ({ addPlacesToCart, addGuidesToCart }: Props) => {
    return (
        <>
            <Guest_Block />
            <Adventures_block />
            <Slider_Block />
            <Places_block addPlacesToCart={addPlacesToCart} />
            <Guides_block addGuidesToCart={addGuidesToCart} />
            <View_Block />
        </>
    )
}
export default Home
