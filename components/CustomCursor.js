import React from "react"
import { motion } from "framer-motion"

export default function CustomCursor(props) {
    const [mousePosition, changeMousePosition] = React.useState({
        x: 0,
        y: 0
    })
    const [showCursor, changeShowCursor] = React.useState(false)

    React.useEffect(() => {
        // If the mouse moves, change mousePosition state values to where it usually is
        function mouseMove(e) {
            changeMousePosition({
                x: e.clientX,
                y: e.clientY
            })

            clearTimeout(showCursorTimeout)

            var showCursorTimeout = window.setTimeout(() => {
                changeShowCursor(true)
            }, 350)

        }

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove)
        }
    }, [])


    

    const variants = {
        // Set the x/y to mouseposition state minus half the mouse width
        default: {
            width: 24,
            height: 24,
            x: mousePosition.x - 12,
            y: mousePosition.y - 12,
            transition: {
                type: "spring", mass: 0.01
            }
        },
        text: {
            height: 75,
            width: 75,
            x: mousePosition.x - 32.5,
            y: mousePosition.y - 32.5,
            transition: {
                type: "spring", mass: 0.01
            },
            backgroundColor: "#fff",
            mixBlendMode: "difference",
        },
        blob: {
            height: 75,
            width: 75,
            x: mousePosition.x - 32.5,
            y: mousePosition.y - 32.5,
            transition: {
                type: "spring", mass: 0.01
            },
            backgroundColor: props.cursorColor,
            filter: "brightness(140%)"
        }
    }

    return (
        <>
        { mousePosition.x !== 0 &&
            <motion.div 
                className={props.cursorVariant == "blob" ? "customCursor customCursorAnimated" : "customCursor" }
                variants={variants}
                animate={props.cursorVariant}
                style={{opacity: !showCursor && "0"}}
            >
                {
                    // If the shape is a blob add view into it
                    props.cursorVariant == "blob" && <p>View</p>
                }
            </motion.div>
        }
        </>
    )
}