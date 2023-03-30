import {    
    Link,    
    useParams,
    useNavigate
  } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';



function Card({ categoryId }) {

    const [data, setData] = useState([]);
    const [currentData, setcurrentData] = useState([]);    
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`/article.json`)
        .then((response) => {
            setData(response.data);
            setcurrentData(response.data);                       
        }).then(data  => {
            if (!data) {
                navigate ('/Blog');
                return
            }
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    useEffect(() => {
        setcurrentData(data.filter((el) => el.category_id == categoryId));
        if (categoryId == 0) {
            setcurrentData(data);
        }
    }, [categoryId])

    return (<>
        {currentData.map((el, index) => {
            return (
                
             <div key={index} className='card'>
                <div className='category'>{el.category.title}</div>
                <img src={el.image}></img>
                <div className='date'>{new Date(`${el.published_at}`).toLocaleDateString()}</div>
                <Link key={el.id} to={`/article/${el.id}`}>
                <div className='title-card'>{el.title}</div>
                </Link>
                <div className='text-card'>{el.description}</div>
                <div className='author'>
                    <img src={el.author.avatar} className='avatar' />
                    <div className='name-position'>
                        <div className='name'>{el.author.name}</div>
                        <div className='position'>{el.author.position}</div>
                    </div>

                </div>
            </div>
           
            )
        })}
    </>)
}
export default Card;

