import First_part from './FirstPart/FirstPart'
import Registration from './Registration/Registration'
import Under_reg from './UnderReg/UnderReg'

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
