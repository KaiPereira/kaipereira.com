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
                    thumbnail="https://images.unsplash.com/photo-1514125669375-59ee3985d08b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    header={post.title}
                    date="Feb 2023"
                    time="3 min read"
                    link="/"
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