import React from "react"
import Link from "next/link"

export default function BlogArticleCard(props) {    
    const [fullDate, changeFullDate] = React.useState()

    React.useEffect(() => {
        const date = new Date(props.date.substring(0, 10))
        changeFullDate(`${date.toString().split(" ")[1]} ${date.toString().split(" ")[2]}, ${date.toString().split(" ")[3]}`)
    })

    return (
        <a href={`https://kai-pereira.hashnode.dev/${props.link}`} target="_blank" rel="noreferrer">
            <div className="blogArticleCardHover">
                <div className="blogArticleCard">
                    <img src={props.thumbnail} className="articleCardThumbnail" alt="Blog Article Card Thumbnail" />
                    <p className="articleCardHeader">{props.header}</p>
                    <div className="blogArticleCardInfo">
                        <p className="articleCardDate">{fullDate}</p>
                        <p className="articleCardTime">{props.time}</p>
                    </div>
                </div>
            </div>
        </a>
    )
}