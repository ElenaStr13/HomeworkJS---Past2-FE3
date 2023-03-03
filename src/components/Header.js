import React from 'react';
import './Header.css';

function Header() {
    return <div className="wrapper">
        <div className="hello-text">Hello React</div>
        <div>
        <button onClick={() => console.log('Click on button')}>Button</button>
        </div>
    </div>
}

export default Header;