import { useState } from "react"
import Button from "../components/ui/Button"
import Input from "../components/ui/Input"
import Container from "../components/ui/Container"
import axios from "axios"
import { registerUser } from "../Api/userApi"
import useBlur from "../hooks/useBlur"
import bcrypt from "bcryptjs";
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router"

const Register = () => {
  const[userInputFields,setInputValues]=useState({userMail:'',userPassword:''});

  const navigateTo=useNavigate()

 const{isBlur:isMailBlur,handleBlur:handleMailBlur}= useBlur();
 const{isBlur:isPasswordBlur,handleBlur:handlePasswordBlur}= useBlur();


//  const {error,setError}=useState({})

  const inputValueHandler=(inputField,e)=>{
    setInputValues((prevState)=>{
      return {...prevState,[inputField]:e.target.value}
    })
    inputField==='userMail'?handleMailBlur(false):handlePasswordBlur(false)
  }

  const regsiterHandler=async()=>{
    // Hashing of Password Using Bcyrpt Js
    const userField={...userInputFields}
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    userField.userPassword= bcrypt.hashSync(userField.userPassword, salt);
    try{
      const resposne= await axios.post(registerUser,userField)
      toast(resposne.data.message)
       navigateTo('/')

    } catch(error){
        toast(error.response.data.message)
        console.log(error.response.data.message)
    }
  }
  return (
    <Container>
        <div className="flex flex-col gap-6 items-center w-1/4 bg-primary-400 shadow-md rounded-lg p-2">
            <h1>Register</h1>
             <Input  className="rounded-md" placeholder="Enter Your Email-Id" name="userMail" value={userInputFields.userMail} onChange={(e)=>{inputValueHandler('userMail',e)}} onBlur={()=>handleMailBlur(true)}/>
             {isMailBlur&&<p>User Focus Lost</p>}
             <Input  className="rounded-md" placeholder="Enter Your Password" name="userPassword" value={userInputFields.userPassword} onChange={(e)=>{inputValueHandler('userPassword',e)}} onBlur={()=>handlePasswordBlur(true)}/>
             {isPasswordBlur&&<p>User Focus Lost</p>}
             <Button variantType="rounded" onClick={regsiterHandler}>Register</Button>
        </div>
        <ToastContainer/>

    </Container>
  )
}

export default Register
