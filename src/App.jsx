import React, { useState, useEffect } from 'react';
import './App.css';
import Task from './components/task/Task';
import Input from './components/input/Input';

function App() {
    const [task, setTask] = useState([]);    

    const handleSubmit = (event) => {
        event.preventDefault();
        setTask((prevState) => {
            const data = [...prevState];
            data.unshift(event.target.inputTask.value);
            return data;            
        })
        //event.target.inputTask.value = '';
    }
      

    const removeSubmit = (el) => {
        //  console.log(el.key)         
        setTask((prevState) => {
            const data = [...prevState];
            const filterTask = data.filter(filterForTask)//data.filter(element => element !== el.el);           
            return filterTask;
        })
        function filterForTask(element, index) {
            if (index !== el.key) {
                return element;
            }
        }
    }

    return <>
        <div className='wrapper'>
            <section className='note'>
                <h1 className='title'>ToDo List</h1>
                <form className='input-btn' onSubmit={handleSubmit} >
                    <Input />
                    <button type='submit'>+</button>
                </form>
                <ul>
                <Task task={task} remove={removeSubmit} />
                </ul>
            </section>
        </div>
    </>
}

export default App;


