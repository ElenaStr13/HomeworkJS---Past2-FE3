import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const LogOut = () => {

  const dispatchFunc = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const logOut = () => {
    dispatchFunc({ type: 'logOut' })
  }
  
  return (
    isLoggedIn && <div className='save'>          
          <button onClick={logOut}>log Out</button>          
      </div>
  )
}

export default  LogOut;
