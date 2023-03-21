import './Workers_list.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
type Props = {}
const WorkersList = (props: Props) => {
    return (
        <div className="Workers_list">
            <Container>
                <Row className="row">
                    <Col className="col">
                        <Card className="card">
                            <img
                                className="img_of_card"
                                src="https://themes.muffingroup.com/be/blogger3/wp-content/uploads/2019/10/blogger-about-staff3.jpg"
                                alt="img_of_card"
                            />
                            <h3 className="name_of_worker">Victoria Morant</h3>
                            <h6 className="subtitle">Designer</h6>
                            <div className="hr"></div>
                            <p className="paragraph_in_card">
                                Vitae adipiscing turpis. Aenean ligula nibh,
                                molest ie id viverra a, quivalente dapibus at
                                dolor.
                            </p>
                            <ButtonGroup className="btn_group" size="sm">
                                <Button variant="light">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="19"
                                        height="19"
                                        fill="currentColor"
                                        className="bi bi-facebook"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                    </svg>
                                </Button>
                                <Button variant="light">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="19"
                                        height="19"
                                        fill="currentColor"
                                        className="bi bi-instagram"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                    </svg>
                                </Button>
                                <Button variant="light">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="19"
                                        height="19"
                                        fill="currentColor"
                                        className="bi bi-twitter"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                    </svg>
                                </Button>
                            </ButtonGroup>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="card">
                            <img
                                className="img_of_card"
                                src="data:image/jpeg;base64,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"
                                alt="img_of_card"
                            />
                            <h3 className="name_of_worker">Marta Komo</h3>
                            <h6 className="subtitle">CEO</h6>
                            <div className="hr"></div>
                            <p className="paragraph_in_card">
                                Vitae adipiscing turpis. Aenean ligula nibh,
                                molest ie id viverra a, quivalente dapibus at
                                dolor.
                            </p>
                            <ButtonGroup className="btn_group" size="sm">
                                <Button variant="light">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="19"
                                        height="19"
                                        fill="currentColor"
                                        className="bi bi-facebook"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                    </svg>
                                </Button>
                                <Button variant="light">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="19"
                                        height="19"
                                        fill="currentColor"
                                        className="bi bi-instagram"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                    </svg>
                                </Button>
                                <Button variant="light">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="19"
                                        height="19"
                                        fill="currentColor"
                                        className="bi bi-twitter"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                    </svg>
                                </Button>
                            </ButtonGroup>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="card">
                            <img
                                className="img_of_card"
                                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVFRUYGBgYGBgYGBgYGBgYGBgYGBgaGRoZGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHj8nJCs0NDQ0NDQ2NDQ0NTQ2QDQ0NDQ0NDQ0NDQ0NDQ0NjQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBQYEBwj/xABIEAACAQIEAwQHBAYIAwkAAAABAgADEQQSITEFQVEGImFxEzJCUoGRoQdiscFygpKi0fAUIySys8Lh8TNTYxUWNENkc6PS4v/EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACYRAAMAAgIBBAEFAQAAAAAAAAABAgMREiExBDJBURMiM2FxgbH/2gAMAwEAAhEDEQA/APUhARAYsAWF4kWALAxLxYACESEAUmF4RIAsLxLxRACLEiwBYTNcU7Z4bDoWdiWVzTZF1dSCRcrva1jpe4InmPa77QHrsBQd6QUOjBXazq1tSthqNd7b7aSNk6PXv+8uD1H9Jpd02PfXQ5slv2tPMjrLRWBFwbjwnyqlRiRl31ml4N2mx+HIKVWZVCjI3eGS9yNdRvv5RsnR9C3iTyfgv2g4nOPSqHX2luAbE2uvQjTwN+W83w42KlMVMPZwQSL23GmU94FSDodDGyNMuIs4OD430tMOy5W1V1PJhv8ACd8kgS0BCLAEgYsSAJEMdEIgDYkIQBpjDJDI2EAiYSJxJzI3EkHPkhJLQgFiI6IIokAWLEiiAELwiQBYQhACESEAWEIQAEpe0XaClhka9WmKgXMEdhmI09kG/MS7E+dO3HFmr4mp7qsbaa2236Wtpt+MhkpFZxjGrVqu6KEzEnKpNt9x0HhtG4PCoe85AHU318gJy4a2YDfX+TNVwzsu+I7xay7KPCVqkjSZdeCsqYmmo7qqwHmrfgJG3EV3UHN9f4Td4X7PEtqzX8NJ1j7NaVjdz4SnJGn42eaVcfm1UZTbTof5vLjh3aCrSUhGtmKFri/eve4HvTWD7OlF8xv0A0MyvaTsycMVYaqTbnofOFa3oh43rZ6P2G7QNUdqFRAHZfSKwFs21wRyI0m5vPGOw3EBTxNNqhORgUBPsFuvhmtPZxNUzGlphFiRbSSoQhFgCRCI6IYAy0QiPMaRAGmRtJDGmARGMaPaMMAZaLFtEgHeItogjhAEMWEWAJCBiwBIRYkAIQgYAkURDC8AUz5j7Sf+KxAvf+vq3I5tnbMR8bz6cBnzF2holcZiEN7jEVQb7m1RrE+Y1+Mhko6uA8CeoQx2I003B5z17g2HCqABtMj2esqC9gABe81+A4hSuF9Il/MTlqm2d8SpnovqIE6bzjoVVPMfOTs4G5tJRRrsdUmb7T8PFWg6W1sSPMbS6r46ku7qP1hf5TirYhXBysDy0PWQyUjxOu5W3hv8Nx5ie9dk8W9bB0Kj+u1MZj1YaE/G1/jPCu0SlKjAcmOluY/jPeOzFMLg8Oo2FGnb9gGdEHJfT0WsWAhLlBYQhAAQMWFoAyIY8iNMAYY0x5Ea0AiaRmStIWgCWiRbxIB3iPEjEfeALC8SEADAQMQQBYRIsAIQiQAMIGJeALPCftRwqJxJintqjuB75Fj5GwU28b857sJ479qWBVccjg+uqMw6EXS/xCLK0+i8LbK5KLHc2RQLi9rmPC4eoLKlXNyZc5uR10t9ZoeA00dLOoPnNDh+DIuqs4HQZfxIv9Zypnc5MjwSpVpVEQh8pbLc3t9Rr57eM2fHUbIMgJJGw+crMSi+lUDkfPXxJ5zRPplv0kh9aPMqSJ6XNWp1mLarlDlN7d7Ke78RLzCqGs9EFLHvKb6j42PWax+GU2OYXF+h0kgoKgsJDTG0eP8AbLCE4vKNC5S19B3gFNzPdMDhxTpoi7IiILdFUD8p5jxrhor46ipGmUlrdEJZb+F9PjPU0Gg8hOjG9o5M06ex0WEJoYixREhAHRIQgCGEIQBrSJpKZG0AjaRNJWkTQBsIsIB1gx95Gpj4A6EQRYAsSEIAQhCAESLEgAY0x0baAKJ519rXDwVpVwNRdCetjnUf356KJw8c4amJoPTdcwKkrqQQ4U5SCOesiltForT2eX8CxmXL0M01fjChbZreP5CeecKxuUJmFsrgMDuAe7Y/zyk/aGlVbEOiaiwZNbAobEW+Nx8Jy8e9Heq2h2O7QOlQlHLANcaD5X3lwvbKo1rlVy2zd0ufqRKvgXBqTMDWd1NwSqo3UX9kjb8Jo8d2dwx7wetmYteyLY2sF7oX3R01NpbSI3W+/wDhb0+LoEFRHzr7S8x42neuNDqCNiNJ59xLglemjOjXpqAbFcrnXlY7DTWX3p/Q06aE9/KWb+HzMq+iX/J1cLPpMcw17qKv7bgn6LPQJgvs6pZ3xFdlv3lRWJ6A3t895vZ0Y50jjy1yYQhFEuZBCF4QBYQhAC8bHRCIAwxjR5jGgEbSJpK0jMAjhHWiQDqWPEiQx94A+KIy8UGAPiRIsAWIYQgBC8LxIAsQRYkAcIQEIB4R294a2FxbixFOraohG2+o8wR9RDhvGw7KH17ipfoASfzm6+1ukj4amhI9J6TMgv3soRg5/R7yA+YnjNKoUax0tf8A016TOpT6NpqpSZ6GeKNTOmUjlfz01E7MN2qdzkQC5tbQtfymM4fxNb3bU7AHW1xYfnLSnxBUBYACwW1t7X/3+cy4tHSrT+TT9qeJ5KGS92e2bwHwmNr8Qd3IFyz2RANTrsAPlODH8QZz3mub9dLTa/ZlwxFqivXKqxUiirkAliR3hf2rXsPGWmUvJjVN70ehdmOFf0bDJSNswGZyObtqfO2g+Etrx0aRNzmCKDEtFgBFhAQAEIsSAESBMaTAEaRtHMYxjAGGRtHsZGxgDYQvCATIZKDIEkywBwiiIIogDoQEW0ASLCIYAsIghAFiRRIsRikQXdwvmdT5DcwSlvwSyDH45KFN6tVsqILsd/AADmSbADmTM5xDtdfMMMqtk9Z3vlGtrKBufjp0mE7Q8TxFfuVHZhldguirmVCQcoAF7C3xMryW9Gs4Ka5a6OXjWPqYnFtUcnVLIvsomY2UfK5PMkyi4pwwkkjQzSPSVglRSM1rkc8p1F/iTOgYYOJg6e9nU4nWl4PPThHHK9uk7cPgKr2AVteu2/jNqOG+Es8FhNpLtlFiRTcA7KgHO4zHlfYeP4S47Q8PZvQZBqtVNtNCbTR4aiAIlSmGdeiHOfOxAH1P0lNtvZeUl0i/4PizUQhvXRij/DVW8bgg+d5YTzvhuOcVi6Egszj7pWykZgf0Rr5zUU+NlVzOlwBcldwOZyn4c508l4Zy1hrXJLovLQnNhMfTqC6OGv46/KdUsZNNeRIWhFAggIkUxpgCGNYxxjGgDTGGOMYYAxjGNFaRkwAvCMvCAdCyVZEslEAeIoiCKIAsURsWAOiWhI8RXVFLuwVV3J2EAkErsdxmlT0zZm91SND4nYTGcb7UvXqJQo9ymx1c6Fha+xPPS3h15cuIpKpzOSbHQbADbQEC3LZT5ylNo6MOJU+/g0WJ7Qu9xdUAuTZrm3i2/MbZZjf6bnDu9YNfMNzzAU6c7K77+6JZ1RTWlUYadxuY3+IHTrM9RWn6K/8ADmtbkdOS8xy1kyt9stkfCtT4LfBBEwwOYEPU5esQNDOXixphg+a6o4D2H/luAG168viZPhlREoAa3N9rcr8nv+HnI+NMio67Z2C3uptqxvbKOnUecrr9Rsrr8LODgVXLnR1uysFA1tZr78zZlb6XvpL/AAuGDAMtiD0II031G8yVNmszWIGUI2XX1XVXIAJ2TMCedmOt5qezWJHpkpoc9FgFC62F2sNb7ga+S2lblN9FMd7nT8ou6WDBGoj0wljpNKnDk2t8j/GSpw5B1+cj8TK/mRQVHyLfnsB1MouJ8RejTOpc1TYDwJsSCPlcHe06+1dUhlaipZUJBRRdnuRdlO+YcuXle8oHxRrVS1iaaqctgwY2Hf21V7KRtuBcGWiVvsnJtSv5LXhJQnMGACoTqdRf+IOYeBEuadam2mdbG4sdN5nuDlHFVj76g2AtbKSAO+BbUgeAHkLFVS3l+h+TL+Jk1K5GuKm40VGErojVKRqWZGNiL+yGcHMPuhh+vL/gHH3ysrVkcoQDc30Olr+YMzWIRFxrr75T3fayJ0bx5jyjez1emajC3rUw243yqf8Al29qXc9bRy822uR6ZhuLo2h08Qcw+mssVYEXBBB2I2M87tTzdD1BN/yH4Sww3GWwzJnJek5KNbdW3DW+nj47ys0y2XCktybQxDEpVAwDKQQRcERxlzmG2jGjzI3gDGjGjiYwmARvImMlcyBoAkIl4QDrEesjUx6wCUGKI1YoMAcI6NEW8AWYT7QsW9RlwyC6hfSVOYuBdcw8Ba3i4PszdEzzHD430jVK+/p8QFX/ANtGFh8NvnK1XE0xY3daRS0qTl6Lk5VGQEnS3dRDYbDvK+gtNRj8HTVHN2JGvhrqOmmspeO0rZwugUtYdL99bfE1T+rLjF1s9Cm49sID8WW/0MpdbSaO30+LjbmibjaUxh3OTcoLA2G/l4ygejS9FbIR5Hbu0v8A7t8pcdoG/s4HV/wF/wApTYn1AOv456g/AJJhvRGTHLp9FtgsKiPQCgmyX73lbYGR9p8LTFNnybOhIvprcH8Z201/rre4gHz/ANoztGmbDVP1R8b/AOsoqfI2rFKw618Io14WhxCLnfLUWoqKbWRgSdLDW/XfQSbs/UXDYlRXNk1K1ADkLH3xbuN1I3/BucumHcGzKQ1+hao4/wAsv6ZAd1IFiSwB8dSv1lqpoyw4ZraNpSa4DBrggEEagg7GTZtJV8Ia1NRyAIHkCR+UswJqntHFa4019GD9PWBeiFIdPbNicl9CvWUWJ4dUWqwpvkLozOGs2Z76P3tQxAIJG4Gs2nG2AqAjQ5Tc7G15ncS5bErf3EXXfvM2n7wma0q0dfB1jVN+RnZjh6ZaoZ2Y51JIA++JergqVrWbzvr+Mp+zL61B1CH6/wD6l4plLp7N8OKeJQcTo00xStkvdFe5+7c6fIReD0qaYrJkUesl9/VJXe33I/tEn9ZQbqCp8rqP4zmRyMRSf3rH4uMx+rzRU3JzvFK30XwCFiCig2sbDXfcSm7Q0WT0YQ5lzl2HMDba3825y3dv64jwt+9aU+Jq58SbaqtkHiACWHjoH+NpSG9m/qITlJdGh7FYogNTIIUm69M6qM6j4hz+qZrCZixXakFbmjZ2sLXObNUNvEF/nNkGBFxsdfhNFXI4M2NxS39CkyJjHExrSxiRsZExj2kbGAMaROZI5kTGAJeEZeEA7hHiQqZKpgEqmOkYMeDAFBheAhAKftbjDSwddx62Qov6TkILftX+EwZT0aYen7pUnzPeP1P0mi+0iufRUKQOtTEJfxVLsb/ErMzxDGk1EDra7DvfGZ32dvo2pptnfxVAWPVlFh1yhmNvGwK/rnrObhlUDD01c3NOuyWG9hmYf5ZJxskPQtqbOwsdyLFR8bAfGU3CUy1nRidHU3OU37jqCM5F9EQ6dZEzuey95H+VOfstOPcTpn0aEPzb677dGnMcUhqolmJzrfb2FUN+8jyHiLo+ICHYKiaGmPXOToffHyj+FVEfE5/dVn9ZPaOfkn32milKTmqqdPv5L6hxFfSuwS63C6+A/wBZHxriVP0LAhhmcD8D49DIcBWXvHqx9pwem4GX92cnaF09Gg6vfekdlI5gTOZWzpzVSjpkOErUwVTNa5TKTt6znoLamX+Pwzue46WtY6kEHKAHGhuRrp47zK8QpqGpsOvuN/zK1tUY9BNDiaKq7aixPvoOXQi/zEtklMp6e65NP6NfwYj0KC98pKk/G/5iXJNhMz2cAFI5SCPS8mDbqo3HlNJVOglp8HPl97MfxBGetn9kMRl11yg2Pjr+MqaiH+lAmw/4Z18Gv+UmfEuGbvgd5rbdfKZ/iqsa4djfub3RV0VzoWI+kpM7o68uRzjSS+i44DURKzozi/oxt4BD+UuW4hSHvH+fKZThtFVxZW473pF0zPszjdBb2Rzl6Ag/2Rf7xZpNytkYLpp9nP2m4hTCI4Vjlcj5gt1HQSrr8WTuWTVSoXU7h6ij2vuJO/jbIaDHXusp9dOZA5J4GVDYhMtM66MPb+9Tb3P+qZaUtGGR1za2aPEcVTO5CkMAcvTMLkc9tpUUqhphWN751vfe1w7H9xR5h5JXqK2e29mtc0yL5fIH5Tkx2IRaK5nzsARpubZHudNz6YnYbysz9HRkvjpV9GpxAzFgfa0P6wI/OX/ZjGekwyE+soyN5r/paZKpxJyxyKALJr+qOc7+w2Ob0lai3vOy/qPY/R1/ZkQtbM/U1ylPXwbQxjGKxjGmhxkbGRsY9pGxgETyMx7RhgDYQvCATI8mVpxo8nRoB0q0kBnOryRWgEt4sZeKIB5x9oWKP9OwqW0RS52tdyeR02Vd+spONVFshtbY6d3n01X5WkvaLFFuJu3JXCC+3dGT/L9Z3cbw6OgJWxtuJlVHoemhuXoqeIVXGJpEN3VyLroNdMw5H2ToZB2eqCriSH7pVMrb3IU9w635OfkJFgsQyVXDXyizX3ByLn7ym6n1ANRzj+zbXxL90DKgUWFgQMq7cj3TLt/p2YYp3lUv7O56FNcS5JbuWYfqDP1HuTr7PYales1icqhR8Lr1ldjm/tFb9B/8CpO3gj9yser2+ZkOnxNVinml/Jd4ChSyC6ddb+Mr+0ODpf1K3YAs3963Xxndg37onF2gbv0B0N/myTOafI6PUYp4r+yu4jw1WyZX5Idfi3h780VbB1CdHBBVfaPuiUOJf/hfo0/8On/GaSsbH5fUCWumZYMK5PT+C37O0WSm4Y3OdSNSeQ/hNBWOqjxmf7PPdX/SX8DLt3u6jwvLy9yc3qJ1kaMHUrvmbR929p9r+dpR8Sw1V6qkDdctzqdbjUm55zSenILajc8h9NJUcXe9Sjc9P7y8pSa/UdWbE+C7+Uc4wLf0lHZxq4539ezcyPfmj/7NRSbsT5TL4+oRkYHW1M//AA0/4TUGqbnXp9VBH4xdMenxLk1sjx+ApGjUFmPdv+zf70oqWFpFEsp9dRufaamOv/TmgD37p2busOoJF/KZTEYgoKmWwCOcmlyCpupvz1Y/yJMU2tDNhmb2/kt8dw+nZ8pYEh99tVNuszbUkFC9wdeWu60h6xAX2Btmmrd2K6k3y6+dunKZengkFC7vmN00XX2anO/3OsnFXnZX1eNLjxXku6WLU6gA3VbGwY7dXB/CLwriHo8cGOgNdEOi7VlKe6OZB+EXgbqKQKqBci19TYACcvE8QVq1msLpkcaDdQtvrE1+pmeTHXCT1powxwcEBhsQCPI6xrS5xkLSImSNIjAI2jCY9zIjACEZeEAYjSVGhCATK8mRoQgEitHhoQgHiXFal8VVb/1R/vtNPiTmpr8vwhCYX8Hr+j8Myoq2r1QOhAvzBRl+eonX2bGfE1iABop8O8WMSEu/aYT+5sk4gn9pcZhrSbrzouOnjJeD2yVBca1RyPS8SEh+0ym3+Rf2XuGAy+sN+hnFxxSatMAg5UU8+XmPCEJWPJv6jJXRy4vDsHpqRoCg3GwSkv8AlMsuI+lLDIRYEBgSRcZbA6dIQjIX9N23v6NL2XpkI1zc3Ck9Sqi5+suKb3qHwFoQmse1HH6j91mEqLdgRoQxBtudr6+RJ+Albxlzno38foywhMp9x6Gf9tf4cmOe6IPuU/8ADSaitTIK97dVG19QPOJCTfgzwe//AARC2cKTryPW0zOGo52dSfWrC/PQs5I/cEIRHhlvU++f6L6vSsrEtrlJO/IeUzKufQNytbbwWsf8whCJ8EZaba2XnCVy0KY+6D8/95x8SN6tcdUT8L/lCET7mM/sR6hwSrmw1ButKnfzyC862hCbHlMgcyImEIII2kTQhAI80IQgH//Z"
                                alt="img_of_card"
                            />
                            <h3 className="name_of_worker">Kevin Wills</h3>
                            <h6 className="subtitle">Manager</h6>
                            <div className="hr"></div>
                            <p className="paragraph_in_card">
                                Vitae adipiscing turpis. Aenean ligula nibh,
                                molest ie id viverra a, quivalente dapibus at
                                dolor.
                            </p>
                            <ButtonGroup className="btn_group" size="sm">
                                <Button variant="light">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="19"
                                        height="19"
                                        fill="currentColor"
                                        className="bi bi-facebook"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                    </svg>
                                </Button>
                                <Button variant="light">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="19"
                                        height="19"
                                        fill="currentColor"
                                        className="bi bi-instagram"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                    </svg>
                                </Button>
                                <Button variant="light">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="19"
                                        height="19"
                                        fill="currentColor"
                                        className="bi bi-twitter"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                    </svg>
                                </Button>
                            </ButtonGroup>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default WorkersList
