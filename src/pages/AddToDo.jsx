import { useState } from "react";
import TodoForm from "../components/TodoForm"
import axios from "axios";
import { toast } from "react-toastify";
import { isValueTruthy } from "../utils/validation";

const AddToDo = () => {

  // const[toDoDetails,setToDoDetails]=useState({description:'',status:''});

  // const[error,setError]=useState();

  // const onChangeHandler=(e)=>{
  //     const {name,value}=e.target
  //     setToDoDetails(prevState=>{
  //         return {...prevState,[name]:value}
  //     })
  // }

  // const toDoHandler=async()=>{
  //   // if the validation is Not Successfull 
  //     if(!isValueTruthy(toDoDetails.description)){
  //          setError("Description  Cannot Be Empty")
  //     }
  //   // if the validation is  Successfull 
  //     else{
  //         setError("")
  //          const projectId= localStorage.getItem('ProjectID')
  //        try{
  //         const response= await  axios.post(addToDo,{...toDoDetails,projectId:projectId});
  //        if(response.status==201){
  //         toast("Todo Successfully Added");
  //         setToDoDetails({description:'',status:''})
  //        }
  //       }
  //        catch(error){
  //         console.log(error)
  //           toast("Something Went Wrong.Please Try Agin After SomeTime")
  //        }

  //     }

  // }
  
  return (
    <div className="flex justify-center">
      {/* <div className="w-1/2 flex flex-col items-center  border-2 border-black "> */}
      <TodoForm  />
      {/* </div> */}
    </div>
  )
}

export default AddToDo
