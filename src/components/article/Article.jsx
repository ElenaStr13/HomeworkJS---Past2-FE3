import './index.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

 function Article() {

  const { id } = useParams();
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();
  

  useEffect(() => {
    axios.get('/article.json').then(({ data }) => {    
      setArticles(data)
    // }).then(({ data })  => {
    //     if (!data) {
    //         navigate ('/Blog');
    //         return
    //     }
    })
  }, [id, navigate])
  
  return <div className='article' key={id}>

    {articles.map((article) =>       
      (+article.id === +id) && <>
      <div className='article-card'>{article.title}</div>
      <div className="article__wrapper">
        <span className='date'key={+article.id+article.title}><span> {new Date(article.published_at).toLocaleDateString()} </span>  -  <span>{article.reading_time} minutes</span></span>      
        <div className='text-article'>{article.text }</div>      
        </div>
        <div>
        <div className='author-article'>
        <img src={article.author.avatar} className='avatar' />            
            <div>
                <div>{article.author.position}</div>
                <div>{article.author.name}</div>
            </div>
            </div>
        </div>
      </>
    )} 
  </div>
};

export default Article;