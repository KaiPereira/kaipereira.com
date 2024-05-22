import React from "react"
import Nav from "../components/Nav"
import CustomCursor from "../components/CustomCursor"
import Footer from "../components/Footer";
import BlogMain from "../components/BlogMain";
import { motion } from "framer-motion"
import { getAllPosts } from "../lib/posts.ts";


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
    
    const allPosts = getAllPosts()
    
    return {
        props: {
            posts: allPosts
        } 
    }
}