import './AdventureITEM-style.scss'

type Props = {
    id: number
    image: string
    knopka: string
    title: string
    paragraph: string
    author: string
    month: string
}
const AdventureITEM = (props: Props) => {
    return (
        <div className="AdventureITEM">
            <button className="favorite_butttttton">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    fill="currentColor"
                    className="bi bi-heart"
                    viewBox="0 0 16 16"
                >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>
            </button>
            <div className="photo_of_card_div">
                <img className="photo_of_card" src={props.image} alt="image" />
            </div>
            <div className="card_body">
                <a href="#">
                    <button>{props.knopka}</button>
                </a>
                <a className="title_in_card" href="#">
                    {props.title}
                </a>
                <p>{props.paragraph}</p>

                <div className="hr"></div>

                <img
                    src="https://secure.gravatar.com/avatar/057e2eb392b95a2ecfc9d32d554e3917?s=24&d=mm&r=g"
                    alt="person"
                />
                <a href="#" className="author">
                    {props.author}
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
                    {props.month}
                </p>
            </div>
        </div>
    )
}
export default AdventureITEM
