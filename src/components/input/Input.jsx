import './index.css';

function Input({proops}) {

    return (<>
        <input type="text" name='inputTask' {...proops} placeholder='Add new task'/>        
        </>
    )
}
export default Input;