import ArticleArrey2 from 'Utils/ArticleArrey2'
import ArticleITEM2 from './ArticleITEM2'
import './AricleList2.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

type Props = {}

const ArticleList2 = (props: Props) => {
    return (
        <div className="Article_list__2">
            <Row className="wor" fluid="md">
                {ArticleArrey2.map(
                    ({ id, image, knopka, title, author, month, date }) => (
                        <Col className="loc" key={id}>
                            <ArticleITEM2
                                image={image}
                                knopka={knopka}
                                title={title}
                                author={author}
                                month={month}
                                date={date}
                            />
                        </Col>
                    )
                )}
            </Row>
        </div>
    )
}
export default ArticleList2
