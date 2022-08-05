import React from "react"
import BlogArticleCard from "./subcomponents/BlogArticleCard"
import Newsletter from "./subcomponents/Newsletter"

export default function BlogMain(props) {
    const [blogArticles, changeBlogArticles] = React.useState()

    // Blog Articles
    React.useEffect(() => {

        changeBlogArticles([].concat(...props.posts).map(post => {
            return (
                <BlogArticleCard 
                    thumbnail={post.coverImage}
                    header={post.title}
                    date={post.dateAdded}
                    time="3 min read"
                    link={post.slug}
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