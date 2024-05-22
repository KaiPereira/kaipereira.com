import React from "react"
import BlogArticleCard from "./subcomponents/BlogArticleCard"
import Newsletter from "./subcomponents/Newsletter"

export default function BlogMain(props) {
    const [blogArticles, changeBlogArticles] = React.useState()

    // Blog Articles
    React.useEffect(() => {
        changeBlogArticles(props.posts.map((post, index) => {
            return (
                <BlogArticleCard 
                    thumbnail={post.thumbnail}
                    header={post.title}
                    date={post.date}
                    time={post.time}
                    link={post.url}
                    key={index}
                />
            )
        }))

    }, [])

    return (
        <main>
            <section className="blogAlign">
                <div className="blog">
                    <Newsletter />
                    <div className="blogArticles">
                        {blogArticles}
                    </div>
                </div>
            </section>
        </main>
    )
}