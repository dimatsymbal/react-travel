import './ArticleITEM2.scss'
import React, { useState } from 'react'

type Props = {
    id: number
    image: string
    knopka: string
    title: string
    author: string
    month: string
    date: number
    addAricleToFav: (countFinal: number, priceFinal: number) => void
}
const ArticleITEM2 = ({
    id,
    image,
    knopka,
    title,
    author,
    month,
    date,
    addAricleToFav,
}: Props) => {
    const [count, setCount] = useState<number>(1)
    const [active, setActive] = useState(false)
    const handleClick = () => {
        setActive(!active)
    }

    return (
        <div className="cart">
            <button
                className="favorite_btn"
                onClick={() => addAricleToFav(id, count)}
                style={{
                    backgroundImage: active
                        ? `url("https://www.citypng.com/public/uploads/small/51611909014v8cbncefiunsjgxz6zahofjyedbx1jz20yngjomjktdobtraht1wrrocbcmo16t9rnxlax9js2pla6ssdoaz0zgn8ydjzrk15vbn.png")`
                        : `url("https://www.citypng.com/public/uploads/preview/-51611915675wmb5cgaf3d.png")`,
                }}
            ></button>

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
