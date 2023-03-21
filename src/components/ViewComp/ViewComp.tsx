import { Link } from 'react-router-dom'
import './View_Comp.scss'

type Props = {}

const ViewComp = (props: Props) => {
    return (
        <div className="View_Comp">
            <img src="/images/view_comp_little_img.png" alt="img_view_comp" />
            <h2>Lorem ipsum dolor sit amet tetur adipis icing elit</h2>{' '}
            <Link className="link" to="/joinus">
                <button> Join us today </button>
            </Link>{' '}
        </div>
    )
}
export default ViewComp
