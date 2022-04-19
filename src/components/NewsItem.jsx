import React from "react"
import './newsitem.css'

const NewsItem = ({title, description, url, urlToImage}) => {
    return(
        <div className="news-app">
            <div className="news-item">
                <img className="news-img" src={urlToImage} alt="Article Icon" />
                <h3><a target='_blank' rel="noreferrer" href={url}>{title}</a></h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default NewsItem