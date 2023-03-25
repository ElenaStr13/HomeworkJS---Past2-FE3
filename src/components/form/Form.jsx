import "./index.css";
import React from "react";
import Button from "../button/Button";
import FormMy from "../formMy/FormMy";
import FormFormik from "../formFormik/formFormik";
import FormHook from "../formHook/FormHook";


class Form extends React.Component {
   
    render() {
        return (<>

            <div className="form">
                <div className="name-form">Create an account</div>
                <div className="name-text">Let's get started with your 30 days free trial</div>               
                <FormHook></FormHook>
                 {/* <FormMy></FormMy>  */}
                {/* <FormFormik></FormFormik> */}
                <Button color="white">
                    <img src="/Vector.png" alt="G" />   Sign up with Google</Button>
                <div className="text-form">Already have an account?  <span> Sign in</span></div>
            </div>
        </>)
    }
}

export default Form;

