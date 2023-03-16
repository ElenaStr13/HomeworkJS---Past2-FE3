import "./index.css";
import React from "react";

class Photo extends React.Component {
    render() {
        return (
            <div className="for-photo">
                <div className="up-text text-photo">abc.com</div>
                <div className="middle-text text-photo">abc.com is the best place to find<br></br>
                     remote talent. We've been super<br></br>
                     impress by the quality of applicants.</div>
                     <div className="down-text text-photo">Madhushan sasanka</div>
                     <div className="last-text text-photo">CEO, abc.com</div>
            </div>
        )
    }
}

export default Photo;
