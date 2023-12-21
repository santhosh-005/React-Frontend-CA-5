import React, { useState } from 'react';
import {useForm} from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import '../App.css'


function SignUp() {

const [submit,setSubmit]=useState(false)

    const {register,handleSubmit,formState: { errors, isValid },watch} = useForm();
    const navigate=useNavigate()

    const password = watch('password');

    submit && isValid ? (sessionStorage.setItem("userName",watch("name")),setTimeout(()=> navigate("/"),2000)): null

    const onSubmit=(data)=>{
        setSubmit(true)
    }

  return (
    <div className='form-page'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="form-title">REGISTRATION FORM</h1>
      {submit && isValid ?
      <div className="success-msg-div"> <h1>Registered Successfully!</h1>
      <div>Please wait...you will be redirected</div></div>
  
     : null}

        <input type="text" placeholder='your name' {...register("name",{required:"name is required",minLength:{
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
        <button type='submit' className='registerBtn'>Register Now</button>
      </form>
    </div>
  )
}

export default SignUp
