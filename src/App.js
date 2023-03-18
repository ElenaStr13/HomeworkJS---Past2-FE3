import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/card/Card';
import axios from 'axios';


function App() {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        axios.get(`/categories.json`).then((response) => {            
            setMenu(response.data);
            //console.log(response.data);            
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    return <div className='blog'>
        <h1>Popular topics</h1>
        <div className='menu'>
            <span>All</span>
            {menu.map((el, index) => {
                return <div key={index}>{el.title}</div>
            })}
        </div>
        <div className='cards'>
        <Card />
        </div>
    </div>
}
export default App;

