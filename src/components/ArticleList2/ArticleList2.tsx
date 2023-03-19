import ArticleArrey from 'Utils/ArticleArrey'
import ArticleITEM2 from './ArticleITEM2'
import './AricleList2.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

type Props = {}

const ArticleList2 = (props: Props) => {
    return (
        <div className="Article_list__2">
            {ArticleArrey.filter(
                (article) => article.category === '/guides'
            ).map(({ id, image, knopka, title, author, month, date }) => (
                <div className="loc" key={id}>
                    <ArticleITEM2
                        id={id}
                        image={image}
                        knopka={knopka}
                        title={title}
                        author={author}
                        month={month}
                        date={date}
                    />
                </div>
            ))}
        </div>
    )
}
export default ArticleList2
