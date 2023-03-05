import ArticleITEM from './ArticleITEM'
import './ArticleList.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import ArticleArrey from 'Utils/ArticleArrey'

type Props = {
    addPlacesToCart: (countFinal: number, priceFinal: number) => void
}

function ArticleList({ addPlacesToCart }: Props) {
    return (
        <div className="Article_list">
            {ArticleArrey.map(
                ({ id, image, knopka, title, author, month, date }) => (
                    <div className="loc" key={id}>
                        <ArticleITEM
                            id={id}
                            image={image}
                            knopka={knopka}
                            title={title}
                            author={author}
                            month={month}
                            date={date}
                            addPlacesToCart={addPlacesToCart}
                        />
                    </div>
                )
            )}
        </div>
    )
}
export default ArticleList
