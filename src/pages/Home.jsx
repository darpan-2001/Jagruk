import React, {useEffect, useState} from "react";
import axios from "axios";
import NewsItem from "../components/NewsItem";

const Home = () => {
    const[articles, setArticles] = useState([])

    useEffect(() => {
        const getNews = async () => {
            const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}`)
            setArticles(res.data.articles)
        }
        getNews()
    }, [])

    return(
        <div>
            {articles.map( article => {
                return (
                    <NewsItem
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        urlToImage={article.urlToImage} 
                    />
                )
            } )}
        </div>
    )
}

export default Home