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
    const fs = require("fs")
    const path = require("path")

    // Get all posts
    const posts = path.join(process.cwd(), 'content', 'posts');

    // Grab all files inside
    const files = fs.readdirSync(posts);

    // Loop over all the files and put them into an array
    let fileContents = []

    files.forEach((file) => {
        // Get the full file path
        const filePath = path.join(posts, file);

        // Read the content of the file
        const content = fs.readFileSync(filePath, 'utf-8');
        const splitContent = content.split('\n')
        const title = splitContent[1].replace("title: ", "")
        const body = splitContent.slice(4)


        fileContents.push({
            title: title,
            body: body
        })
    });

    
    return {
        props: {
            posts: fileContents
        } 
    }
}