import React, { useState, useEffect } from 'react';
import './index.css';
import Checkbox from '@mui/joy/Checkbox';

function Task({ task, remove }) {

const [checked, setChecked] = useState([]);
//const [issChecked, setissChecked] = useState(false);

const handleCheckbox = (e) => { 
        console.log(e.target)
       let upDateTask = [...checked];             
        if (e.target.checked) {            
            upDateTask = [...checked, e.target.value];
            task.map((element) => {
                if (element == e.target.value) { 
                  task.splice(task.indexOf(element), 1);            
                  task.push(element);                      
                 }})          
                 } else {
                 upDateTask.splice(checked.indexOf(e.target.value), 1); 
                 // setissChecked(!issChecked);               
                 // console.log(checked)        
                }
                  //setissChecked(!issChecked);
                  setChecked(upDateTask);  
         } 
         
        // useEffect(() => {
        //      task.map((el) => {
        //      if (checked.includes(el)) {
        //         setissChecked(false);
        //      } else {
        //         setissChecked(true);
        //      }//console.log(el.checkbox.checked)             
        // })         
        //  }, checked) 
     
let  isChecked = (el) => checked.includes(el) ? "completed" : "newTask";
     
    return (<>
        {task.map((el, key) => {
            return (
            <li name='li'className="task" key = {key}>              
                    <div className='taskChbx'>
                        <Checkbox  
                            value={el} 
                            size="lg"
                            variant="outlined" 
                            name='checbox'                           
                            className='checkbox'
                            id = {`${el}`}
                            //checked={issChecked}
                            onChange={handleCheckbox} />
                        <span className={isChecked(el)}>{el}</span>
                    </div>
                    <button key={key} type="submit" onClick={() => remove({ el, key })}>-</button>
                </li>
            )
        }
        )}
    </>
    )
}

export default Task;

// const handleCheck = (e) => {
//     let upList = [...checked];
//     let check;
//    // console.log(e.target.checked);
//     if (e.target.checked) {
//         console.log(e)
//         //upList = [...checked, e.target.checked];
//        // check = true;
        
//     } else {
//         //upList.splice(checked.indexOf(e.target.checked), 1);
//         //check = false
//     }
//     setChecked(upList);
    
// }

// useEffect(() => {
//     task.map((el) => {
     // if (el.checkbox.checked) {
     //     setChecked(true);
     // } else {
     //     setChecked(false);
     // }
//      console.log(el.checkbox.checked)
//  })         
//  }, checked) 

 //const isChecked = (el) => el? console.log("comleted") : console.log("task");




//  const handleCheck = (e) => {
//     console.log(e.target.id)
//     if (e.target.checked) {
//         setChecked(true);
//         task.map((element, key) => {
//         if (key == e.target.id) {
//            // console.log(element)
//             task.splice(task.indexOf(element), 1);
//             task.push(element);
//             } else {
//             setChecked(false);
//             }             
//             console.log ("done");
//         })           
//     } else {
//         console.log("not done");
//         setChecked(false);
//     }        
// } 