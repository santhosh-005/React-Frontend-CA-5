import React, { useState } from 'react';
import {useForm} from "react-hook-form";
import { useNavigate } from 'react-router-dom';


function SignUp() {

const [submit,setSubmit]=useState(false)

    const {register,handleSubmit,formState: { errors, isValid },watch} = useForm();
    const navigate=useNavigate()

    const password = watch('password');

    submit && isValid ? (localStorage.setItem(watch("name")),setTimeout(()=> navigate("/"),3000)): null

    const onSubmit=(data)=>{
        setSubmit(true)
    }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
      {submit && isValid ? <div id="success-msg-div">
   <h1>Registered Successfully</h1>
       </div> : null}

        <input type="text" placeholder='your name' {...register("name",{required:"firstname is required",minLength:{
            value:3,
            message:"name must be greater than 3 characters"
        },
        maxLength:{
            value:30,
            message:"name must be less than 30 characters"
        }})} />
          <p>{errors.name?.message}</p>
        <input type="email" placeholder='your email' {...register("email",{required:"email is required"})} />
          <p>{errors.email?.message}</p>
        <input type="text" placeholder='password'  {...register("password",{required : "password is required",minLength:{
            value:10,
            message:"password must be greater than 10 characters"
        }, pattern: {
            value: /.*[!@#$%^&*(),.?":{}|<>\[\]\\\/].*/,
            message: "Password must contain at least one special character",
          }})}/>
          <p>{errors.password?.message}</p>
        <input type="text" placeholder='repeat password' {...register("repeatPassword",{required:"Please repeat the password",validate:(value)=>  value === password || "Password does not match",
    })} />
        <p>{errors.repeatPassword?.message}</p>
        <button type='submit'>Register Now</button>
      </form>
    </div>
  )
}

export default SignUp
