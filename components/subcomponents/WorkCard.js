import React from "react"
import Link from "next/link"

export default function WorkCard(props) {
    const tagElements = props.tags.map(tag => {
        return (
            <div className="tagContainer">
                <p>{tag}</p>
            </div>
        )
    })
    return (
        <a href={props.link} target="_blank" rel="noreferrer">
            <div className="workCard" style={{backgroundColor: props.backgroundColor}} onMouseEnter={() => props.cursorEnterBlob(props.backgroundColor)} onMouseLeave={props.cursorLeave}>
                <div>
                    <p className="workCardHeader">{props.header}</p>
                    <p className="workCardDescription">{props.shortDescription}</p>
                    <div className="workCardTags">
                        {tagElements}
                    </div>
                </div>
                <img src={props.mockup} alt={`${props.header} Mockup`} />
            </div>
        </a>
    )
}