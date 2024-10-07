import { useState } from 'react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { isValueTruthy } from '../utils/validation';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { createProjectApi } from '../Api/projectApi';
import { useNavigate } from 'react-router';

const Inputypes=[
  {placeholder:"Project Name", name:"title",type:'text'},
  {placeholder:"Project Name", name:"createdAt",type:'date'} ]

const NewProject = () => {

  const[projectDetails,setProjectDetails]=useState({
    title:'',
    createdAt:''
  })

  const[error,setError]=useState();

  const[isLoading,setIsLoading]=useState(false);

 const navigateTo= useNavigate();

  // Handler to make api call to the backend for creating New Projects
  const formSubmissionHandler=async(e)=>{
      e.preventDefault();
     const value= validateInputValues(projectDetails);
      if(value){
          try{
            console.log(projectDetails)
            setIsLoading(true)
            const response=await axios.post(createProjectApi,projectDetails);
             console.log(response)
             if(response.data.id){
              localStorage.setItem('ProjectID',response.data.id)
              navigateTo('/add-to')
             }
          }
          catch(error){
            console.log(error)
            toast('Some Unexcepted Error Ocuurred.try Again After SomeTimes')
          }
          finally{
            setIsLoading(false)
          }
      }
      else{
          toast('Please Fill the Input Boxes')
      }
  }

  // Fuction to Validate the Input Value and Check if the value is truthy or falsy
  const validateInputValues=(projectDetails)=>{
    let errors={}
      const keys= Object.keys(projectDetails) ;
      keys.forEach(key=>{
        const value=isValueTruthy(projectDetails[key]);
        if(!value){
        errors[key]=key[0].toUpperCase()+key.substring(1)+' Cannot be Empty';
        }
       
      })
      if(Object.keys(errors).length>0){
          setError(errors)
          return false;
      }else{
        setError({})
        return true;
      }
  }
// Handler Inorder to get the Value from the Input Box When The User Types
  const handleInputChange=(e)=>{
    e.preventDefault();
    const{name,value}=e.target;
    setProjectDetails(prevState=>{
      return {...prevState,[name]:value}
    })
  }

  return (
    <div className='flex flex-col items-center py-2 w-1/2 border-2 border-slate-500  gap-4  rounded-lg mt-4'>
        <p className='text-primary-500 text-xl underline p-2'>Add New Project</p>
      <form onSubmit={formSubmissionHandler} className='w-1/2 flex flex-col gap-6 items-center py-4 border-2 border-slate-400 rounded-lg'>
      {Inputypes.map(inputype=>{
        return <Input key={inputype.name} placeholder={inputype.placeholder} className="text-center border-b-2 focus:outline-0" name={inputype.name} type={inputype.type} value={projectDetails?.[inputype.name]} error={error?.[inputype.name]} onChange={handleInputChange}/>
      })}
          <Button variantType="rounded"  disabled={isLoading} > {!isLoading?'Add Project':'Adding Project'}</Button>
      </form>
      <ToastContainer/>
    </div>
  )
}

export default NewProject
