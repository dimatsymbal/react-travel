import './Registration.scss'

type Props = {}
const Registration = (props: Props) => {
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
                            <form>
                                <input
                                    className="name"
                                    type="text"
                                    placeholder="Name"
                                />
                                <input
                                    className="email"
                                    type="email"
                                    placeholder="Email"
                                />
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Subject"
                                />
                                <input
                                    className="details"
                                    type="text"
                                    placeholder="Details"
                                />
                                <textarea
                                    id="textarea"
                                    cols={30}
                                    rows={5}
                                    placeholder="Your message"
                                ></textarea>

                                <button type="submit">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Registration
