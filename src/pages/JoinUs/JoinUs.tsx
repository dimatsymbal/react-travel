import First_part from './First_part/First_part'
import Registration from './Registration/Registration'
import Under_reg from './Under_reg/Under_reg'

type Props = {}
const JoinUs = (props: Props) => {
    return (
        <div className="JoinUs">
            <First_part />
            <Registration />
            <Under_reg />
        </div>
    )
}
export default JoinUs
