import { useParams } from 'react-router-dom'
import ArticleArrey, { Article, getProductsObject } from 'Utils/ArticleArrey'
import './ArticlePage.scss'
type Props = {
    articleObject?: {
        [id: number]: Article
    }
}
const ArticlePage = ({
    articleObject = getProductsObject(ArticleArrey),
}: Props) => {
    const { id } = useParams()

    const articleItemPage = articleObject[parseInt(id!)]

    return (
        <div className="article_page">
            <div className="article_item">
                <div className="article_item_upper">
                    <img
                        className="article_item_img"
                        src={articleItemPage.image}
                        alt="articleItemPageImage"
                    />
                    <h2 className="article_item_title">
                        {articleItemPage.title}
                    </h2>
                </div>
                <div className="article_item_middle">
                    <p
                        dangerouslySetInnerHTML={{
                            __html: articleItemPage.page_fullDesc,
                        }}
                    ></p>
                </div>
                <div className="article_item_lower">
                    <p
                        className="paragraph_title"
                        dangerouslySetInnerHTML={{
                            __html: articleItemPage.page_paragraph_sub_title,
                        }}
                    ></p>
                    <p
                        className="paragraph_content"
                        dangerouslySetInnerHTML={{
                            __html: articleItemPage.page_paragraph_content,
                        }}
                    ></p>
                </div>
                <div className="article_item_lower2">
                    <p
                        className="paragraph_title2"
                        dangerouslySetInnerHTML={{
                            __html: articleItemPage.page_paragraph_sub_title,
                        }}
                    ></p>
                    <p
                        className="paragraph_content2"
                        dangerouslySetInnerHTML={{
                            __html: articleItemPage.page_paragraph_content,
                        }}
                    ></p>

                    <img
                        className="page_img"
                        src={articleItemPage.page_img}
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}
export default ArticlePage
