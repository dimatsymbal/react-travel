import AdventureITEM from './AdventureITEM'
import ArticleArrey from 'Utils/ArticleArrey'
import './AdventureComp.scss'
type Props = {}

const AdventuresComp = (props: Props) => {
    return (
        <div className="Adventures_Comp">
            {ArticleArrey.filter(
                (article) => article.category === '/adventures'
            ).map(({ id, image, knopka, title, paragraph, author, month }) => (
                <div className="loc" key={id}>
                    <AdventureITEM
                        image={image}
                        knopka={knopka}
                        title={title}
                        paragraph={paragraph}
                        author={author}
                        month={month}
                        id={id}
                    />
                </div>
            ))}
        </div>
    )
}
export default AdventuresComp
