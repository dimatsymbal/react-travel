import ArticleITEM from './ArticleITEM'
import './ArticleList.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ArticleArrey from 'Utils/ArticleArrey'

type Props = {}

function ArticleList({}: Props) {
    return (
        <div className="Article_list">
            <Row className="wor" fluid="md">
                {ArticleArrey.map(
                    ({ id, image, knopka, title, author, month, date }) => (
                        <Col className="loc" key={id}>
                            <ArticleITEM
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
export default ArticleList
