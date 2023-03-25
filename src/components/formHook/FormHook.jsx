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

// constructor(props) {
//     super(props);
//     this.state = {
//         loading: false
//     //    errors: {} ,
//     //    register,
//     }
//     //this.onSubmit = this.onSubmit.bind(this);
//      this.handleChange = this.handleChange.bind(this);
//     // this.handleSubmit = this.handleSubmit.bind(this);
// }

// // const { register, handleSubmit, errors } = useForm();
// // const onSubmit = data => console.log(data);
// // console.log(errors);

// // onSubmit(data) {
// //     console.log(data);
// //   }

// //const onSubmit = (data) => console.log(data);

// render() {
//     const { register,  errors, handleSubmit } = this.props;
//     return (<>
//         <form className="inputs" onSubmit={this.handleSubmit(this.onSubmit)}>

//             {/* <label htmlFor="name">Name</label>
//             <input
//                 type="text" className={`inputAll`}
//                 name="name"
//                 {...register("name",
//                     {
//                         required: "Name is required",
//                         pattern: {
//                             value: /[0-9]/,
//                             message: 'Not a numbers for Name'
//                         }
//                     })}
//                 id="name" aria-invalid={errors.name ? "true" : "false"} />
//             {errors.name && <p role="alert">{errors.name?.message}</p>} */}

//             {/* {this.state.errors.name?.type === 'required' && <p role="alert">Name is required</p>} */}

//             <label htmlFor="email">Email</label>
//             <input type="email" className={`inputAll`}
//             name="email"
//             ref={register({ required: true, value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}
//             />
//             {errors.email && <p>This field is required</p>}
//                   {/* {...register("email",
//                     {
//                      required: "Email Address is required",
//                         pattern: {
//                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
//                              message: 'invalid Email Address'
//                          }
//                      })}
//                id="email" aria-invalid={errors.email ? "true" : "false"} />
//            {errors.mail && <p role="alert">{errors.mail?.message}</p>} */}

// {/*
//             <label htmlFor="password">Password</label>
//             <input type="password" className={`inputAll`}
//             name = "password"
//                 {...register("password",
//                     {
//                         required: "Password is required",
//                         pattern: {
//                             value: !/[0-9A-Z]{8,}/i,
//                             message: 'password is short, it must be more than 8 characters'
//                         }
//                     })}
//                 id="email" aria-invalid={errors.email ? "true" : "false"} />
//             {errors.mail && <p role="alert">{errors.mail?.message}</p>} */}
//             <Button color="black" type="submit">Create Account</Button>
//         </form>
//     </>)
// }
// }
