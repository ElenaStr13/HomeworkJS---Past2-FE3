import React, { useState, useEffect } from 'react';
import './App.css';
//import Card from './components/card/Card';
//import axios from 'axios';
import Contacts from './components/contacts/Contacts';
import About from './components/about/About';
import Blog from './components/blog/Blog';
import Article from './components/article/Article';
import Footer from './components/footer/Footer';
import {BrowserRouter, 
    Routes, 
    Route,    
    NavLink,   
  } from 'react-router-dom';

  function NotFound () {
    return <div>404 - Not Found</div>
  } 

  function App() {

    return <>
    <BrowserRouter>
        <header className='header'>        
          <NavLink className={({isActive}) => isActive ? "menu-active" : "nav"} to="/">Home</NavLink>
          <NavLink className={({isActive}) => isActive ? "menu-active" : "nav"} to="/about">About</NavLink>
          <NavLink className={({isActive}) => isActive ? "menu-active" : "nav"} to="/blog">Blogs</NavLink>
          <NavLink className={({isActive}) => isActive ? "menu-active" : "nav"} to="/contacts">Contact Us</NavLink>          
                  </header>
        <Routes>
        <Route path='/' element={<Blog />} />
        <Route path='/about' element={<About />} />        
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/article/:id' element={<Article />} />
        <Route path='*' element={<Blog />}/>
        <Route path='/404' element={<NotFound />} />
      </Routes>        
        <Footer/>
        </BrowserRouter>
    </>
}
export default App;


//         <Route path='*' element={<Blog />} />

//         <Route path='/404' element={<NotFound />} />

