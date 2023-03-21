import './Workers_block.css'
import Workers_list from 'components/WorkersList/WorkersList'

type Props = {}
const Workers_block = (props: Props) => {
    return (
        <div className="Workers_block">
            <h2 className="Workers_block_title">Our team</h2>
            <div className="workers_list_div">
                <Workers_list />
            </div>
        </div>
    )
}
export default Workers_block
