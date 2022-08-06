import React from "react"
import Nav from "../components/Nav"
import CustomCursor from "../components/CustomCursor"
import Footer from "../components/Footer";
import AboutMain from "../components/AboutMain";
import { motion } from "framer-motion"

export default function About() {
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
        <motion.div variants={animationConfiguration} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5 }}>
            <Nav 
                cursorEnter={cursorEnter}
                cursorLeave={cursorLeave}
                cursorEnterBlob={cursorEnterBlob}
            />
            <AboutMain 
                cursorEnter={cursorEnter}
                cursorLeave={cursorLeave}
                cursorEnterBlob={cursorEnterBlob}
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