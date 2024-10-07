import { useState } from "react"
import Button from "../components/ui/Button"
import Input from "../components/ui/Input"
import Container from "../components/ui/Container"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { loginUser } from "../Api/userApi"
import { toast, ToastContainer } from "react-toastify"
import { isValueTruthy, patternMatching } from "../utils/validation"

const mailRegexPattern=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d{2,})(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d{2,})(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;


const Login = () => {
  const[inputValues,setInputValues]=useState({UserMail:'',UserPassword:''})

  const[error,setError]=useState();

  const[isLoading,setIsLoading]=useState(false)

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
        const result=validateInputs(inputValues);
        if(!result){
          toast("Invalid Data")
        }
        else{
          setIsLoading(true)
          const response=await axios.post(loginUser,inputValues);
          if(response.status===200){
            console.log(response)
            navigateTo('/home') ;
          }

        }
    }
    catch(error){
      console.log(error)
          toast(error.response.data.message)
    }
    finally{
      setIsLoading(false)
    }
  }

  // Function To validate inputs
  const validateInputs=(inputData={})=>{
        let errorState={}
        const inputObjectKeys=Object.keys(inputData);
        inputObjectKeys.forEach((inputObjectKey=>{
            const  result=isValueTruthy(inputData[inputObjectKey]);
            if(!result){
              errorState[inputObjectKey]=inputObjectKey+" Cannot Be Empty";
            }
        }))

        console.log(errorState)

        if(Object.keys(errorState).length>0){
          setError(errorState);
          return false
        }
        else{
          setError({});
          return true
        }
  }

  return (
    <Container>
      <div className="flex flex-col items-center w-1/2 gap-6 bg-primary-300 py-4 px-2 rounded-md shadow-lg  md:w-1/4 ">
        <h1>Login</h1>

        <Input placeholder="Enter Email" className="rounded-md" name="UserMail"onChange={(e)=>{inputValueHandler('UserMail',e)}} value={inputValues.UserMail} error={error?.UserMail}/>
        <Input placeholder="Enter Password" className="rounded-md" name="UserPassword" onChange={(e)=>{inputValueHandler('UserPassword',e)}} value={inputValues.UserPassword} error={error?.UserPassword}/>
          <Button className="rounded-md" onClick={loginHandler} disabled={isLoading}> {!isLoading?'Login':'Loading'}  </Button>
          <p>New Here?<Link className="underline" to={'/regsiter'}>Register Here</Link></p>
    </div>
    <ToastContainer/>
    </Container>
  )
}

export default Login
