import React, { useState } from 'react';
import './index.css';
import Checkbox from '@mui/joy/Checkbox';

function Task({ task, remove }) {

    const [checked, setChecked] = useState([]);

    const handleCheckbox = (e) => {        
        let upDateTask = [...checked];
        if (e.target.checked) {
            upDateTask = [...checked, e.target.value];
            task.map((element) => {
                if (element == e.target.value) {
                    task.splice(task.indexOf(element), 1);
                    task.push(element);

                }
            })
        } else {
            upDateTask.splice(checked.indexOf(e.target.value), 1);
        }
        setChecked(upDateTask);
    }

    let isChecked = (el) => checked.includes(el) ? "completed" : "newTask";
    let issChecked = (el) => checked.includes(el) ? true : false;

    return (<>
        {task.map((el, key) => {
            return (
                <li name='li' className="task" key={key}>
                    <div className='taskChbx'>
                        <Checkbox
                            value={el}
                            size="lg"
                            variant="outlined"
                            name='checbox'
                            className='checkbox'
                            id={`${el}`}
                            checked={issChecked(el)}
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