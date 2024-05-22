import React from "react"
import Nav from "../../components/Nav"
import CustomCursor from "../../components/CustomCursor"
import Footer from "../../components/Footer";
import BlogArticleMain from "../../components/BlogArticle";
import { motion } from "framer-motion"
import { getPost } from "../../lib/posts.ts";
import Head from "next/head";
import Link from "next/link";


export default function BlogArticle({ post }) {
    const [cursorVariant, changeCursorVariant] = React.useState("default")
    const [cursorColor, changeCursorColor] = React.useState("blue")

    function cursorEnter() {
        changeCursorVariant("text")
    }
    
    function cursorEnterBlob(cursorColorParam) {
        changeCursorVariant("blob")
        changeCursorColor(cursorColorParam)
    }

    function cursorLeave() {
        changeCursorVariant("default")
    }

    const animationConfiguration = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    };
    
    return (
        <>
            <Head>
                <title>{post.title}</title>
                <meta name="description" content={post.description} />
            </Head>
            <motion.div variants={animationConfiguration} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.75 }}>
                <Nav />
                <div className="post-layout">
                    <div className="post-inner-layout">
                        <img src={post.thumbnail} className="post-thumbnail" />
                        <h1>{post.title}</h1>
                        <div className="post-markdown" dangerouslySetInnerHTML={{ __html: post.html }}></div>
                        <a href="https://x.com/KaiPereira_" target="_blank" rel="noreferrer">
                            <button className="featuredWorkButton post-button" onMouseEnter={cursorEnter} onMouseLeave={cursorLeave}>
                                <p>Catch me on Twitter <i class="fa-solid fa-arrow-up-right-from-square"></i></p>
                            </button>
                        </a>
                    </div>
                </div>
                <Footer 
                    cursorEnter={cursorEnter}
                    cursorLeave={cursorLeave}
                />
                <CustomCursor 
                    cursorVariant={cursorVariant}
                    cursorColor={cursorColor}
                />
            </motion.div>
        </>
    )
}

export async function getServerSideProps({ req, res, resolvedUrl }) {
    
    const post = await getPost(resolvedUrl.replace("/blog/", ""))
    
    return {
        props: {
            post: post
        } 
    }
}