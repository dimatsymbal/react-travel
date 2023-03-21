import './Workers_block.css'
import WorkersList from 'components/WorkersList/WorkersList'

type Props = {}
const WorkersBlock = (props: Props) => {
    return (
        <div className="Workers_block">
            <h2 className="Workers_block_title">Our team</h2>
            <div className="workers_list_div">
                <WorkersList />
            </div>
        </div>
    )
}
export default WorkersBlock
