import './Reviews.scss'
import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

import ReviewsItem from './ReviewsItem'

type Props = {}

type Review = {
    id: number
    name: string
    text: string
    count: number
}
const Reviews = (props: Props) => {
    const arrReviews: Review[] = [
        {
            id: 1,
            name: 'Ольга',
            text: 'Брали телефон чоловіку. Дуже задоволений!! Варто брати, якщо ви хочете обновити свій наприклад 8й чи 11й айфон ',
            count: 738,
        },
        {
            id: 2,
            name: 'Макс',
            text: 'В характеристиках указано, что в телефоне есть вспышка и стерозвук (как будто 2002 год на дворе), но очередной раз эпплы забыли упомянуть объём батарей.',
            count: 316,
        },
        {
            id: 3,
            name: 'Віктор',
            text: 'Замовив телефон 30.11 по оплаті частинами доставку вибрав укрпоштою, 02.12 відправили , 03.12 телефон був в проміжному пункті до мене так і не доіхав , 09.12 телефон відправили назад "за закінченням встановленого терміну зберігання" , хоча мені не приходило повідомлення і на відділенні сказали що відправлення до них не надходило. 13.12 розетка відповіла мені що перевізним повернув не Ваш товар. Кредит мені не закрили , поставили статус замовлення виконано , і ніхто більше нічого не повідомляє. Зателефонувати в розетку не можливо.',
            count: 941,
        },
    ]

    const [reviews, setReviews] = useState<Review[]>(arrReviews)
    const [newReview, setNewReview] = useState<Review>({
        id: 0,
        name: '',
        text: '',
        count: 0,
    })

    const hendleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }

    const hendleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            text: e.target.value,
        }))
    }

    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newReview.name === '' || newReview.text === '') {
            alert('Please enter the fields')
        } else {
            setNewReview({
                id: 90,
                name: '',
                text: '',
                count: 0,
            })

            setReviews((prevState) => {
                return [...prevState, newReview]
            })
        }
    }

    return (
        <>
            <div className="reviews_block">
                <div className="reviews_block_container">
                    <h6 className="little_title">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="19"
                            height="19"
                            fill="currentColor"
                            className="bi bi-pencil-fill"
                            viewBox="0 0 16 16"
                        >
                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                        </svg>
                        Reviews
                    </h6>
                    <h2 className="title">
                        Lorem ipsum dolor sit amet tetur adipis icing elit
                    </h2>

                    <div className="reviews_content">
                        {reviews.map(({ id, name, text, count }: Review) => (
                            <div className="object_review" key={id}>
                                <ReviewsItem
                                    id={id}
                                    name={name}
                                    text={text}
                                    count={count}
                                />
                            </div>
                        ))}
                    </div>

                    <Form onSubmit={onSend}>
                        <h2 className="form_title">Please leave a review</h2>

                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">
                                Name
                            </InputGroup.Text>
                            <Form.Control
                                value={newReview.name}
                                onChange={hendleName}
                                aria-label="Name"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>

                        <InputGroup>
                            <InputGroup.Text>Your message</InputGroup.Text>
                            <Form.Control
                                value={newReview.text}
                                onChange={hendleText}
                                as="textarea"
                                aria-label="With textarea"
                            />
                        </InputGroup>

                        <button className="send_btn" type="submit">
                            Send
                        </button>
                    </Form>
                </div>
            </div>
        </>
    )
}
export default Reviews
