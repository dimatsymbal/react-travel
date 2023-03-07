import './Adventures_Page.scss'
import Adventures_Comp from 'components/AdvenuresList/Adventures_Comp'
type Props = {
    addAricleToFav: (id: number) => void
}
const Adventures_Page = ({ addAricleToFav }: Props) => {
    return (
        <div className="Adventures_Page">
            <div className="introduc_block">
                <h2>Adventures</h2>
            </div>

            <div className="adventure_page_cards">
                <div className="container">
                    <Adventures_Comp addAricleToFav={addAricleToFav} />
                </div>
            </div>
        </div>
    )
}
export default Adventures_Page
