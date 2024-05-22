import React from "react"
import Link from "next/link"

export default function BlogArticleCard(props) {    
    return (
        <a href={`/blog/${props.link}`} target="_blank" rel="noreferrer">
            <div className="blogArticleCardHover">
                <div className="blogArticleCard">
                    <img src={props.thumbnail} className="articleCardThumbnail" alt="Blog Article Card Thumbnail" />
                    <p className="articleCardHeader">{props.header}</p>
                    <div className="blogArticleCardInfo">
                        <p className="articleCardDate">{props.date}</p>
                        <p className="articleCardTime">{props.time}</p>
                    </div>
                </div>
            </div>
        </a>
    )
}