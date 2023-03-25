import "./index.css";
import React from "react";
import Button from "../button/Button";
import { useForm } from "react-hook-form";

function FormHook() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
    
       return (
        <form className="inputs" onSubmit={handleSubmit(onSubmit)}>

            <label htmlFor="name">Name</label>
            <input  className={`inputAll ${errors.name? "invalid" : ""}`}
                name="name"
                id="name"
                {...register("name", {
                    required: true,
                    minLength: 2,
                    pattern: /[^\d]$/,
                })}
            />
            <div>
                {errors.name?.type === "required" && "Name is required"}
                {errors.name?.type === "pattern" &&
                    "Invalid name, please, enter you name without numbers"}
                    {errors.name?.type === "minLength" &&
                    "Entered name is more than 2 characters"}
            </div>

            <label htmlFor="email">Email</label>
            <input  type="email" className={`inputAll ${errors.email? "invalid" : ""}`}
                name="email"
                id="email"
                {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,4}$/i,
                })}
            />
            <div>
                {errors.email?.type === "required" && "Email is required"}
                {errors.email?.type === "pattern" &&
                    "Invalid email address"}
            </div>

            <label htmlFor="password">Password</label>
            <input  className={`inputAll ${errors.password? "invalid" : ""}`}
                 name="password"
                 id="password"
                {...register("password", {
                    required: true,
                    minLength: 8,
                })}
            />
            <div>
                {errors.password?.type === "required" && "Password is required"}
                {errors.password?.type === "minLength" &&
                    "Entered password is more than 8 characters"}
            </div>
            <Button color="black" type="submit">Create Account</Button>
        </form>)
}
export default FormHook;