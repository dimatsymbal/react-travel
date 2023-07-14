import { useState } from 'react'
import './Registration.scss'
import axios from 'axios'

type Props = {}

type RegistrationProps = {
    name: string
    email: string
    subject: string
    details: string
    textarea: string
}

const Registration = (props: Props) => {
    const [isSend, setIsSend] = useState<boolean>(false)

    const [registration, setRegistration] = useState<RegistrationProps>({
        name: '',
        email: '',
        subject: '',
        details: '',
        textarea: '',
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegistration((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegistration((prevState) => ({
            ...prevState,
            email: e.target.value,
        }))
    }

    const handleSubject = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegistration((prevState) => ({
            ...prevState,
            subject: e.target.value,
        }))
    }

    const handleDetails = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegistration((prevState) => ({
            ...prevState,
            details: e.target.value,
        }))
    }

    const handleTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setRegistration((prevState) => ({
            ...prevState,
            textarea: e.target.value,
        }))
    }

    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        axios
            .post(
                'https://my-json-server.typicode.com/kznkv-skillup/server/orders',
                {
                    name: registration.name,
                    email: registration.email,
                    subject: registration.subject,
                    details: registration.details,
                    textarea: registration.textarea,
                }
            )
            .then((res) => res.data)
            .then(({ name, email, subject, details, textarea }) => {
                setRegistration({
                    name,
                    email,
                    subject,
                    details,
                    textarea,
                })
                setIsSend(true)
            })
    }
    const renderForm = () => {
        return (
            <form onSubmit={onSend}>
                <input
                    className="name"
                    type="text"
                    placeholder="Name"
                    value={registration.name}
                    onChange={handleName}
                />
                <input
                    className="email"
                    type="email"
                    placeholder="Email"
                    value={registration.email}
                    onChange={handleEmail}
                />
                <input
                    className="subject"
                    type="text"
                    placeholder="Subject"
                    value={registration.subject}
                    onChange={handleSubject}
                />
                <input
                    className="details"
                    type="text"
                    placeholder="Details"
                    value={registration.details}
                    onChange={handleDetails}
                />
                <textarea
                    id="textarea"
                    cols={30}
                    rows={5}
                    placeholder="Your message"
                    value={registration.textarea}
                    onChange={handleTextarea}
                ></textarea>

                <button type="submit">Send</button>
            </form>
        )
    }

    const renderModal = () => {
        return (
            <div style={{ color: 'black', width: '100%', textAlign: 'center' }}>
                <h3>Thanks for your idea</h3>
                <img
                    src="https://www.freeiconspng.com/thumbs/checkmark-png/black-checkmark-png-4.png"
                    alt=""
                />
            </div>
        )
    }

    return (
        <div className="Registration">
            <div className="container_Registration">
                <div className="row">
                    <div className="col-4">
                        <h3>Lorem ipsum dolor sit amet tetur</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labor
                        </p>
                    </div>
                    <div className="col-8">
                        <div className="registration_block">
                            {isSend ? renderModal() : renderForm()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Registration
