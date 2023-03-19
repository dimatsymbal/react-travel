import { Article } from 'Utils/ArticleArrey'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import './ArticlesItemInFavList.scss'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { removeArticleFromFav } from 'redux/articleReducer'
import { addLike, removeLike } from 'redux/likeReducer'
type Props = {
    article: Article
    removeArticleFromFav?: (id: number) => void
}
const ArticlesItemInFavList = ({ article }: Props) => {
    const isDeleted = useAppSelector(
        (state) => state.productsLikeState[article.id]
    )
    const dispatch = useAppDispatch()

    return (
        <div>
            <Card className="card_in_favorites">
                <img className="card_img" src={article.image} alt="image" />
                <a href="#">
                    <Link
                        className="title_in_card"
                        to={`/articles/${article.id}`}
                    >
                        {article.title}
                    </Link>
                </a>
                <Link className="btn_text" to={article.category}>
                    {article.knopka}
                </Link>

                <div className="hr"></div>

                <img
                    className="person_img"
                    src="https://secure.gravatar.com/avatar/057e2eb392b95a2ecfc9d32d554e3917?s=24&d=mm&r=g"
                    alt="person"
                />
                <a href="#" className="author">
                    {article.author}
                </a>
                <p className="month">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-clock"
                        viewBox="0 0 16 16"
                    >
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                    </svg>{' '}
                    {article.month}
                </p>
                <p className="date">{article.date}</p>

                <button
                    className="trash_btn"
                    onClick={() => {
                        isDeleted
                            ? dispatch(removeLike(article.id))
                            : dispatch(addLike(article.id))
                        dispatch(removeArticleFromFav(article.id))
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-trash-fill"
                        viewBox="0 0 16 16"
                    >
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                    </svg>
                </button>
            </Card>
        </div>
    )
}
export default ArticlesItemInFavList
