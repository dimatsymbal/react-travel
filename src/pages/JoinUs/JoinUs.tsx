import FirstPart from './FirstPart/FirstPart'
import Registration from './Registration/Registration'
import UnderReg from './UnderReg/UnderReg'

type Props = {}
const JoinUs = (props: Props) => {
    return (
        <div className="JoinUs">
            <FirstPart />
            <Registration />
            <UnderReg />
        </div>
    )
}
export default JoinUs
