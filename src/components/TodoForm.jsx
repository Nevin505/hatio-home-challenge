import Button from "./ui/Button"
import Input from "./ui/Input"
import axios from "axios"
import { addToDo } from "../Api/toDoApi"
import { useState } from "react"
import { isValueTruthy } from "../utils/validation"
import RadioButton from "./ui/RadioButton"
import { toast, ToastContainer } from "react-toastify"

const RadioButtonTypes=[{id:'completed',label:'Completed',name:'status'},{id:'Pending',label:'Pending',name:'status'}]

const TodoForm = () => {

    const[toDoDetails,setToDoDetails]=useState({description:'',status:''});

    const[error,setError]=useState();

    const onChangeHandler=(e)=>{
        const {name,value}=e.target
        setToDoDetails(prevState=>{
            return {...prevState,[name]:value}
        })
    }

    const toDoHandler=async()=>{
      // if the validation is Not Successfull 
        if(!isValueTruthy(toDoDetails.description)){
             setError("Description  Cannot Be Empty")
        }
      // if the validation is  Successfull 
        else{
            setError("")
             const projectId= localStorage.getItem('ProjectID')
           try{
            const response= await  axios.post(addToDo,{...toDoDetails,projectId:projectId});
           if(response.status==201){
            toast("Todo Successfully Added");
            setToDoDetails({description:'',status:''})
           }
          }
           catch(error){
            console.log(error)
              toast("Something Went Wrong.Please Try Agin After SomeTime")
           }

        }

    }
    
  return (
    <div className="w-1/2 flex flex-col items-center border-2 border-slate-400 gap-6 py-6 mt-6 rounded-md shadow-md">
        <h1>Add ToDo</h1>
                <Input placeholder="Enter description" className="border-b-2"  value={toDoDetails.description}  onChange={onChangeHandler} name="description" error={error}/>
                   <div className="flex gap-4">
                   {RadioButtonTypes.map(radioButtonType=>{
                   return <RadioButton key={radioButtonType.id} value={toDoDetails.status} label={radioButtonType.label} onChange={onChangeHandler} id={radioButtonType.id} name={radioButtonType.name}/>
                })}
                   </div>
                <Button variantType="rounded" onClick={toDoHandler}>Add Todo</Button>
                <ToastContainer/>
    </div>
  )
}

export default TodoForm
