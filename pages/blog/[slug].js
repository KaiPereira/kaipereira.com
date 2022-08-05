import React from "react"
import Nav from "../../components/Nav"
import CustomCursor from "../../components/CustomCursor"
import Footer from "../../components/Footer";
import BlogArticleMain from "../../components/BlogArticle";
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';


export default function BlogArticle(post) {
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


    return (
        <>
            <Nav 
                cursorEnter={cursorEnter}
                cursorLeave={cursorLeave}
                cursorEnterBlob={cursorEnterBlob}
            />
            <BlogArticleMain 
                cursorEnter={cursorEnter}
                cursorLeave={cursorLeave}
                cursorEnterBlob={cursorEnterBlob}
                post={post}
            />
            <Footer 
                cursorEnter={cursorEnter}
                cursorLeave={cursorLeave}
            />
            <CustomCursor 
                cursorVariant={cursorVariant}
                cursorColor={cursorColor}
            />
        </>
    )
}



BlogArticle.getInitialProps = async (context) => {
    const client = new ApolloClient({
        uri: 'https://api.hashnode.com/',
        cache: new InMemoryCache(),
    })
  
    const { data } = await client.query({
        query: gql`
          query GetPosts {
            post(
              slug: "${context.query.slug}",
              hostname: "https://kai-pereira.hashnode.dev/"
            ) {
              title
              contentMarkdown
              coverImage
            }
          }
        `,
    })
  
    return {
        props: {
            post: data.post
        } 
    }
  }