import './AdventuresPage.scss'
import AdventuresComp from 'components/AdvenuresList/AdventuresComp'
type Props = {}
const AdventuresPage = (props: Props) => {
    return (
        <div className="Adventures_Page">
            <div className="introduc_block">
                <h2>Adventures</h2>
            </div>

            <div className="adventure_page_cards">
                <div className="container">
                    <AdventuresComp />
                </div>
            </div>
        </div>
    )
}
export default AdventuresPage
