import axios from "axios"
import { useEffect, useState } from "react"
import { fetchAllProjects } from "../Api/projectApi"
import Button from "../components/ui/Button";
import { fromatTime } from "../utils/formatter";
import { useNavigate } from "react-router";

const AllProjects = () => {

 const navigateTo=useNavigate();

  const[projects,setProjects]=useState([]);
  useEffect(()=>{
    const fetchProjects=async()=>{
         const response= await axios.get(fetchAllProjects);
         console.log(response)
         if(!response.status===200){
          throw new Error("Something Went Wrong")
        }
        setProjects(response.data)

    }
    fetchProjects()
  },[])

  const viewProjectHandlder=(projectId)=>{
      navigateTo('/project/'+projectId)
  }
  return (
    <div>
      
        <h2 className="text-center">  All Projects</h2>
       <div className="flex gap-2 flex-wrap  justify-center">
       {projects.map(project=>{
         return<div key={project._id} className="flex  flex-col items-center gap-2 px-4 py-2 border-2 border-black rounded-md mt-2 ">
          <p>Title:{project.title}</p>
          <p>Created At:{fromatTime(project.createdAt)}</p>
          <Button variantType="rounded" onClick={()=>{viewProjectHandlder(project._id)}} >View More</Button>
          </div>
        })}
       </div>
    </div>
  )
}

export default AllProjects
