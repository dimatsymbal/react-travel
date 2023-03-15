import './Reviews.scss'
import Card from 'react-bootstrap/esm/Card'
import { useState } from 'react'
// import  from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import { text } from 'stream/consumers'
type Props = {}

type Review = {
    name: string
    text: string
}
const Reviews = (props: Props) => {
    const arrReviews: Review[] = [
        {
            name: 'Ольга',
            text: 'Брали телефон чоловіку. Дуже задоволений!! Варто брати, якщо ви хочете обновити свій наприклад 8й чи 11й айфон ',
        },
        {
            name: 'Макс',
            text: 'В характеристиках указано, что в телефоне есть вспышка и стерозвук (как будто 2002 год на дворе), но очередной раз эпплы забыли упомянуть объём батарей.',
        },
    ]

    const [reviews, setReviews] = useState<Review[]>(arrReviews)
    const [newReview, setNewReview] = useState<Review>({
        name: '',
        text: '',
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
            alert('SUKA nahuy')
        } else {
            setNewReview({
                name: '',
                text: '',
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
                    <h6 className="little_title">Reviews</h6>
                    <h2 className="title">
                        Lorem ipsum dolor sit amet tetur adipis icing elit
                    </h2>

                    <div className="reviews_content">
                        {reviews.map((item, i) => (
                            <Card className="reviws_card" key={i}>
                                <h4>{item.name}</h4>
                                <p>{item.text}</p>
                            </Card>
                        ))}
                    </div>

                    <Form onSubmit={onSend}>
                        <h2>Please leave a review</h2>

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
                            <InputGroup.Text>Textarea</InputGroup.Text>
                            <Form.Control
                                value={newReview.text}
                                onChange={hendleText}
                                as="textarea"
                                aria-label="With textarea"
                            />
                        </InputGroup>

                        <Button variant="success" type="submit">
                            Success
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    )
}
export default Reviews
