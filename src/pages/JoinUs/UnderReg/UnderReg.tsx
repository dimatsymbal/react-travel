import './Under_reg.scss'

type Props = {}
const UnderReg = (props: Props) => {
    return (
        <div className="Under_reg">
            <div className="container_Under_reg">
                <div className="row">
                    <div className="col">
                        <h2>Useful info</h2>
                        <p>
                            Poster pentolum quantum pored dolor sit aisicing
                            elit
                        </p>
                        <p>Lorem ipsum dolor sit amet tetur adipisicing</p>
                        <p>
                            {' '}
                            Estrop pner valanti osteromus elit via modore
                            erondero patern
                        </p>
                    </div>
                    <div className="col">
                        <h2>Contact us</h2>

                        <p className="white_p">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labor
                        </p>
                        <h6>
                            {' '}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="25"
                                fill="currentColor"
                                className="bi bi-telephone-fill"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                                />
                            </svg>{' '}
                            +01 203 4040 3333
                        </h6>
                        <h6>
                            {' '}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="25"
                                fill="currentColor"
                                className="bi bi-envelope-fill"
                                viewBox="0 0 16 16"
                            >
                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                            </svg>{' '}
                            noreply@envato.com
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UnderReg
