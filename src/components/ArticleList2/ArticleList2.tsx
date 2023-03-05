import ArticleArrey2 from 'Utils/ArticleArrey2'
import ArticleITEM2 from './ArticleITEM2'
import './AricleList2.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

type Props = {
    addGuidesToCart: (id: number) => void
}

const ArticleList2 = ({ addGuidesToCart }: Props) => {
    return (
        <div className="Article_list__2">
            {ArticleArrey2.map(
                ({ id, image, knopka, title, author, month, date }) => (
                    <div className="loc" key={id}>
                        <ArticleITEM2
                            id={id}
                            image={image}
                            knopka={knopka}
                            title={title}
                            author={author}
                            month={month}
                            date={date}
                            addGuidesToCart={addGuidesToCart}
                        />
                    </div>
                )
            )}
        </div>
    )
}
export default ArticleList2
