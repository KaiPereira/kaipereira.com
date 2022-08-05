import React from "react"
import ReactMarkdown from "react-markdown"
import Newsletter from "./subcomponents/Newsletter"

export default function BlogArticleMain(props) {
    return (
        <main>
            <section className="blogArticleAlign">
                <div className="blogArticle">
                    <div className="blogArticleHeaders">
                        <h1>{props.post.props.post.title}</h1>
                        <div className="blogArticleSubHeaders">
                            <p>Jun 4, 2022</p>
                            <p>3 min read</p>
                        </div>
                    </div>
                    <img src={props.post.props.post.coverImage} alt="article thumbnail" className="blogArticleThumbnail"/>
                    <div className="blogArticleContent">
                        <ReactMarkdown>{props.post.props.post.contentMarkdown.replaceAll('align="left"', "").replaceAll('align="center"', "").replaceAll('align="right"', "")}</ReactMarkdown>
                    </div>
                    <div className="blogArticleNewsletterAlign">
                        <Newsletter />
                    </div>
                </div>
            </section>
        </main>
    )
}