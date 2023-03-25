import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/card/Card';
import axios from 'axios';


function App() {

    const [menu, setMenu] = useState([]);
    const [categoryId, setCategoryId] = useState([]);

    useEffect(() => {
        axios.get(`/categories.json`).then((response) => {
            setMenu(response.data);            
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    return <div className='blog'>
        <h1>Popular topics</h1>
        <div className="menu" >
            {menu.map((el, index) => {
                
                return <div key={index} 
                value={el.title}                
                onClick={() => setCategoryId(el.id)}
                className={categoryId === el.id? "active": ""}>
                    {el.title}
                    </div>
                
            })}
       </div>
        <div className='cards'>
            <Card categoryId={categoryId} />
        </div>
    </div>
}
export default App;
