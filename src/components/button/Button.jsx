import "./index.css";
import React from "react";


class Button extends React.Component {
    render() {
        return (           
            <button className={`${this.props.color}`} type={`${this.props.submit}`}>{this.props.children}</button>            
        )
    }
}

export default Button;