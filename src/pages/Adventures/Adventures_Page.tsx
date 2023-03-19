import './Adventures_Page.scss'
import Adventures_Comp from 'components/AdvenuresList/Adventures_Comp'
type Props = {}
const Adventures_Page = (props: Props) => {
    return (
        <div className="Adventures_Page">
            <div className="introduc_block">
                <h2>Adventures</h2>
            </div>

            <div className="adventure_page_cards">
                <div className="container">
                    <Adventures_Comp />
                </div>
            </div>
        </div>
    )
}
export default Adventures_Page
