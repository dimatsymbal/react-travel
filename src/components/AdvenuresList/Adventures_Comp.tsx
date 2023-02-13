import AdventureITEM from './AdventureITEM'
import AdventuresArrey from 'Utils/AdventuresArrey'
import './AdventureComp.scss'
type Props = {}

const Adventures_Comp = ({}: Props) => {
    return (
        <div className="Adventures_Comp">
            {AdventuresArrey.map(
                ({ id, image, knopka, title, paragraph, author, month }) => (
                    <div className="loc" key={id}>
                        <AdventureITEM
                            image={image}
                            knopka={knopka}
                            title={title}
                            paragraph={paragraph}
                            author={author}
                            month={month}
                            id={0}
                        />
                    </div>
                )
            )}
        </div>
    )
}
export default Adventures_Comp
