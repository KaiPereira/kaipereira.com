import Nav from "../components/Nav"
import HomeMain from "../components/HomeMain"
import CustomCursor from "../components/CustomCursor"
import React from "react"
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Footer from "../components/Footer";
import { motion } from "framer-motion"

export default function Home({ posts, isFirstMount }) {
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


  const pageChangeTransition = {
    initial: {
      height: "100vh",
      top: 0
    },
    animate: {
      height: 0,
      transition: {
        duration: 0.85,
        ease: [0.87, 0, 0.13, 1],
      },
    }
  }

  const animationConfiguration = {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
  };

  return (
    <motion.div variants={!isFirstMount && animationConfiguration} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5 }} className="opacityPageTransition">
      { isFirstMount &&
      <div className="pageTransitionContainer">
        <motion.div 
          className="pageTransition"
          initial="initial"
          animate="animate"
          variants={pageChangeTransition}
        />
      </div>
      }
      <Nav 
        cursorEnter={cursorEnter}
        cursorLeave={cursorLeave}
        cursorEnterBlob={cursorEnterBlob}
      />
      <HomeMain 
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
  const client = new ApolloClient({
      uri: 'https://api.hashnode.com/',
      cache: new InMemoryCache(),
  })

  const { data } = await client.query({
      query: gql`
        query GetPosts {
          user(username: "kaip") {
            publication {
              posts(page: 0) {
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

  return {
      props: {
          posts: data.user.publication.posts
      } 
  }
}