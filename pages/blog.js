import React from "react"
import Nav from "../components/Nav"
import CustomCursor from "../components/CustomCursor"
import Footer from "../components/Footer";
import BlogMain from "../components/BlogMain";
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { motion } from "framer-motion"


export default function Blog({ posts }) {
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
        <motion.div variants={animationConfiguration} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.75 }}>
            <Nav 
                cursorEnter={cursorEnter}
                cursorLeave={cursorLeave}
                cursorEnterBlob={cursorEnterBlob}
            />
            <BlogMain 
                cursorEnter={cursorEnter}
                cursorLeave={cursorLeave}
                cursorEnterBlob={cursorEnterBlob}
                posts={posts}
            />
            <Footer 
                cursorEnter={cursorEnter}
                cursorLeave={cursorLeave}
            />
            <CustomCursor 
                cursorVariant={cursorVariant}
                cursorColor={cursorColor}
            />
        </motion.div>
    )
}

export async function getStaticProps(context) {
    let allArticlesFetched = false
    let allArticles = []
    let page = 0

    const client = new ApolloClient({
        uri: 'https://api.hashnode.com/',
        cache: new InMemoryCache(),
    })


    while (!allArticlesFetched) {
        var { data } = await client.query({
            query: gql`
              query GetPosts {
                user(username: "kaip") {
                  publication {
                    posts(page: ${page}) {
                      _id
                      coverImage
                      slug
                      title
                      brief
                      dateAdded
                    }
                  }
                }
              }
            `,
          })

          page = page + 1
          allArticles.push(data.user.publication.posts)

          if (data.user.publication.posts.length == 0) {
            allArticlesFetched = true
          }
    }

  
    return {
        props: {
            posts: allArticles
        } 
    }
}