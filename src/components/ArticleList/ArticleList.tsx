import ArticleITEM from './ArticleITEM'
import './ArticleList.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import ArticleArrey from 'Utils/ArticleArrey'

type Props = {
    addAricleToFav: (id: number) => void
}

function ArticleList({ addAricleToFav }: Props) {
    return (
        <div className="Article_list">
            {ArticleArrey.filter(
                (article) => article.category === '/places'
            ).map(({ id, image, knopka, title, author, month, date }) => (
                <div className="loc" key={id}>
                    <ArticleITEM
                        id={id}
                        image={image}
                        knopka={knopka}
                        title={title}
                        author={author}
                        month={month}
                        date={date}
                        addAricleToFav={addAricleToFav}
                    />
                </div>
            ))}
        </div>
    )
}
export default ArticleList
