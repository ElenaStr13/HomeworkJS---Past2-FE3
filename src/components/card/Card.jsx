import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';



function Card() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`/article.json`).then((response) => {
            //console.log(response)
            setData(response.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [])
    
    return (<>
        {data.map((el, index) => {
            return <div key={index} className='card'>
                <div className='category'>{el.category.title}</div>
                <img src={el.image}></img>
                <div className='date'>{new Date(`${el.published_at}`).toLocaleDateString()}</div>
                <div className='title-card'>{el.title}</div>
                <div className='text-card'>{el.description}</div>
                <div className='author'>
                    <img src={el.author.avatar} className='avatar' />
                    <div className='name-position'>
                        <div className='name'>{el.author.name}</div>
                        <div className='position'>{el.author.position}</div>
                    </div>

                </div>
            </div>
        })}
    </>)
}
export default Card;