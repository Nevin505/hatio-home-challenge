import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { fetchProject } from "../Api/projectApi";
import Button from "../components/ui/Button";
import TodoList from "../components/TodoList";
import IconButton from "../components/ui/IconButton";

import editImage from '../../public/editIcon.svg';
import addIcon from '../../public/addIcon.svg';
import Input from "../components/ui/Input";


const Project = () => {
  const { projectId } = useParams();

  // To add the project data
  const [projectData, setProjectData] = useState([]);

  // To set the loading state 
  const [isLoading, setIsLoading] = useState(false);

  // const [isEditing, setIsEditing] = useState(false);

  const [isEditing, setIsEditing] = useState({
    title: false,
    summary: false,
  });
  const [updatedData, setUpdatedData] = useState({
    title: "",
    summary: "",
  });

  const navigateTo=useNavigate();

  let pendingTodos=(projectData?.Pending?.length || 0)

  let totalTodos=pendingTodos+ (projectData?.Completed?.length||0);

  const addToDoHandler=()=>[
    navigateTo('/add-to')
  ]

// To fetch the the Projects and the related toDo's
  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        setIsLoading(true)
        const response = await axios.get(fetchProject + projectId);
        setProjectData(response.data.result);
        setUpdatedData({
          title: response.data.result.title,
          summary: `${pendingTodos}/${totalTodos} todo's Completed`,
        });
        console.log(response.data.result)
      } catch (error) {
        console.log("Error");
        console.log(error);
      }
      finally{
        setIsLoading(false)
      }
    };
    fetchProjectDetails();
  }, [projectId,pendingTodos,totalTodos]);


  const toggleEditMode = useCallback((field) => {
    setIsEditing((prev) => {
      console.log("The Previous Field");
      console.log(prev);
      
      return{...prev,
      [field]: !prev[field],
    }});
  }, []);

  console.log("The isEditing Field");
  console.log(isEditing);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prevData) => ({ ...prevData, [name]: value }));
  };
  

  const handleSave = async () => {
    try {
      // const response = await axios.put(updateProject + projectId, updatedData); // assuming update API exists
      // console.log("Updated successfully", response.data);
      // setProjectData(response.data.result); // Update projectData with new values
      // setIsEditing({ title: false, summary: false }); // Exit edit mode
    } catch (error) {
      console.log("Error saving project details", error);
    }
  };

  const handleTitleEdit = useCallback(() => {
    toggleEditMode("title");
  }, [toggleEditMode]);
  
  // console.log(isEditing.title)
  return <div className="flex flex-col items-center pt-6 gap-4 border-2 "> 
         <div className="flex border-2 w-1/2 justify-between items-center ">
        {isEditing.title ? (
          <>
          <Input
            value={updatedData.title}
            name="title"
            className="border-b-2 text-primary-400 text-5xl p-0"
            onChange={handleInputChange}
          />
          <Button variantType="rounded">Save</Button>
          </>
        ) : (
         <>
          <h1 className="text-primary-400 text-5xl border-b-2">
            {projectData?.title}
          </h1>
        <IconButton
          src={editImage}
          altText="Edit-Icon-Button"
          iconType="small"
          title="edit"
          onClick={handleTitleEdit}
        />
         </>
        )}
      </div>
      <div className="flex  px-4  justify-between md:w-1/2">
         <p className="text-lg"><span className="font-bold">Summary : </span>{pendingTodos}/{totalTodos}  todo's Completed</p>
        <IconButton src={addIcon} iconType="small" onClick={addToDoHandler} title="add Todo" >Add ToDo</IconButton>
        </div> 
      <TodoList 
        title="Pending Todo's" 
        todos={projectData?.Pending} 
        statusMessage="No Pending Tasks Are There" 
      />

      <TodoList 
        title="Completed ToDo's" 
        todos={projectData?.Completed} 
        statusMessage="No Completed Tasks Are There" 
        checked={true}
      />

  </div>
};
export default Project;