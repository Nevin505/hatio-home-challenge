import { useState } from "react"
import Button from "../components/ui/Button"
import Input from "../components/ui/Input"
import Container from "../components/ui/Container"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { loginUser } from "../Api/userApi"
import { toast, ToastContainer } from "react-toastify"

const Login = () => {
  const[inputValues,setInputValues]=useState({userMail:'',userPassword:''})

  const navigateTo=useNavigate();

  // To Get the User Value from the Input Boxes
  const inputValueHandler=(inputField,e)=>{
    setInputValues((prevState)=>{
      return {...prevState,[inputField]:e.target.value}
    })
  }
  // Api for login gandler
  const loginHandler=async()=>{
    try{
      const response=await axios.post(loginUser,inputValues);
      if(response.status===200){
        console.log(response)
        navigateTo('/home') ;
        return;
      }
    }
    catch(error){
          toast(error.response.data.message)
      console.log(error)
    }
  }
  return (
    <Container>
    <div className="flex flex-col items-center w-1/4 gap-4 bg-primary-300 py-4 px-2 rounded-md shadow-lg">
        <h1>Login</h1>

        <Input placeholder="Enter Email" className="rounded-md" name="userMail"onChange={(e)=>{inputValueHandler('userMail',e)}}/>
        <Input placeholder="Enter Password" className="rounded-md" name="userPassword" onChange={(e)=>{inputValueHandler('userPassword',e)}}/>
          <Button className="rounded-md" onClick={loginHandler}> Login  </Button>
          <p>New Here?<Link className="underline" to={'/regsiter'}>Register Here</Link></p>
    </div>
    <ToastContainer/>
    </Container>
  )
}

export default Login
