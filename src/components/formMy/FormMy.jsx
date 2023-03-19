import "./index.css";
import React from "react";
import Button from "../button/Button";

class FormMy extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            input: {},
            errors: {},
            disabled: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleChange(event) {
        let input = this.state.input;
        input[event.target.name] = event.target.value;
        this.setState({
            input
        })
    }

    handleBlur(event) {
        let input = this.state.input;
        input[event.target.name] = event.target.value;
        this.setState({ input })
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.Validate()) {
            console.log(JSON.stringify(this.state.input, null, 2));
            let input = {};
            input["name"] = "";
            input["email"] = "";
            input["password"] = "";
            this.setState({ input: input });
        }
    }

    Validate() {

        let input = this.state.input;
        let errors = {};
        let isValid = true;
        let inputName = document.getElementById("name");
        let inputEmail = document.getElementById("email");
        let inputPassword = document.getElementById("password");

        if (!input["name"] || input["name"].length < 2) {
            isValid = false;
            errors["name"] = 'Required';
        } else if (/[0-9]/.test(input.name)) {
            inputName.classList.add('invalid');
            isValid = false;
            errors["name"] = 'Invalid name, please, enter you name';
        }

        if (!input["email"]) {
            isValid = false;
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(input.email)) {
            inputEmail.classList.add('invalid');
            isValid = false;
            errors.email = 'Invalid email address';
        }
        if (!input["password"]) {
            isValid = false;
            errors.password = 'Required';
        } else if (
            !/[0-9A-Z]{8,}/i.test(input.password)
        ) {
            inputPassword.classList.add('invalid');
            isValid = false;
            errors.password = 'password is short, it must be more than 8 characters';
        }

        this.setState({
            errors: errors
        });
        errors = {};
        return isValid;
    }

    render() {
        return (
            <form className="inputs" onSubmit={this.handleSubmit}>

                <label htmlFor="name" className="inputAll">Name</label>
                <input type="text"
                    name="name"
                    id="name"
                    value={this.state.input.name}
                    onChange={this.handleChange}
                    onBlur={() => this.Validate()}
                />
                <div>{this.state.errors.name}</div>

                <label htmlFor="email" className="inputAll">Email</label>
                <input type="text"
                    name="email"
                    id="email"
                    value={this.state.input.email}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur} />
                <div>{this.state.errors.email}</div>

                <label htmlFor="password" className="inputAll">Password</label>
                <input type="text"
                    name="password"
                    id="password"
                    value={this.state.input.password}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur} />
                <div>{this.state.errors.password}</div>
                <Button color="black" type="submit">Create Account</Button>
            </form>
        )
    }
}

export default FormMy;