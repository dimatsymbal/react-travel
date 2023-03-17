import './ArticleITEM2.scss'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { addLike, removeLike } from 'redux/likeReducer'
import { addAricleToFav, removeArticleFromFav } from 'redux/articleReducer'

type Props = {
    id: number
    image: string
    knopka: string
    title: string
    author: string
    month: string
    date: number
    addAricleToFav?: (id: number) => void
}
const ArticleITEM2 = ({
    id,
    image,
    knopka,
    title,
    author,
    month,
    date,
}: // addAricleToFav,
Props) => {
    const isLiked = useAppSelector((state) => state.productsLikeState[id])
    const dispatch = useAppDispatch()

    return (
        <div className="cart">
            <button
                className="like_btn"
                onClick={() => {
                    isLiked ? dispatch(removeLike(id)) : dispatch(addLike(id))
                    isLiked
                        ? dispatch(removeArticleFromFav(id))
                        : dispatch(addAricleToFav({ id }))
                }}
            >
                {isLiked ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        className="bi bi-suit-heart-fill"
                        viewBox="0 0 16 16"
                    >
                        <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        className="bi bi-suit-heart"
                        viewBox="0 0 16 16"
                    >
                        <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                    </svg>
                )}{' '}
            </button>

            <div className="photo_of_card_div">
                <img className="photo_of_card" src={image} alt="image" />
            </div>

            <div className="card_body">
                <a href="#">
                    <button className="btn_places">{knopka}</button>
                </a>
                <a className="title_in_card" href="#">
                    {title}
                </a>
                <div className="hr"></div>
                <img
                    src="https://secure.gravatar.com/avatar/057e2eb392b95a2ecfc9d32d554e3917?s=24&d=mm&r=g"
                    alt="person"
                />
                <a href="#" className="author">
                    {author}
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
                    {month}
                </p>
                <p className="date">{date}</p>
            </div>
        </div>
    )
}
export default ArticleITEM2
