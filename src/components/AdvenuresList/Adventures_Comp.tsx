import AdventureITEM from './AdventureITEM'
import ArticleArrey from 'Utils/ArticleArrey'
import './AdventureComp.scss'
type Props = {
    addAricleToFav: (id: number) => void
}

const Adventures_Comp = ({ addAricleToFav }: Props) => {
    return (
        <div className="Adventures_Comp">
            {ArticleArrey.filter(
                (article) => article.category === 'adventures'
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
                        addAricleToFav={addAricleToFav}
                    />
                </div>
            ))}
        </div>
    )
}
export default Adventures_Comp
