import React from "react"
import Link from "next/link"

export default function Footer(props) {
    return (
        <footer style={{padding: props.contactNotActive && "45px 116px"}}>
            { !props.contactNotActive &&
                <div className="footerContact">
                    <p className="footerContactHeader">Interested In Working With Me?</p>
                    <Link href="/contact">
                        <button className="footerContactButton" onMouseEnter={props.cursorEnter} onMouseLeave={props.cursorLeave}>
                            <p>Get In Touch</p>
                        </button>
                    </Link>
                </div>   
            }
            <div className="footerElements" style={{margin: props.contactNotActive && "0px"}}>
                <div>
                    <p className="footerElementsContactHeader">Tell Us About Your Project</p>
                    <p className="footerElementsContactEmail">kaipereira2020@gmail.com</p>
                </div>
                <div className="footerElementsSocials">
                    <a href="https://www.linkedin.com/in/kai-pereira-ba5632237/" target="_blank" rel="noopener noreferrer" className="footerElementsSocial" onMouseEnter={props.cursorEnter} onMouseLeave={props.cursorLeave}>
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href="https://www.behance.net/kai-pereira" target="_blank" rel="noopener noreferrer" className="footerElementsSocial" onMouseEnter={props.cursorEnter} onMouseLeave={props.cursorLeave}>
                        <i className="fa-brands fa-behance"></i>
                    </a>
                    <a href="https://kai-pereira.hashnode.dev/" target="_blank" rel="noopener noreferrer" className="footerElementsSocial" onMouseEnter={props.cursorEnter} onMouseLeave={props.cursorLeave}>
                        <i className="fa-brands fa-hashnode"></i>
                    </a>
                    <a href="https://github.com/KaiPereira" target="_blank" rel="noopener noreferrer" className="footerElementsSocial" onMouseEnter={props.cursorEnter} onMouseLeave={props.cursorLeave}>
                        <i className="fa-brands fa-github"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}