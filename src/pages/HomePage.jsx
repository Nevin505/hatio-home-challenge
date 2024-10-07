import { Outlet, useNavigate } from "react-router"
import Card from "../components/ui/Card"

const HomePage = () => {
   const navigateTo= useNavigate();

    const handleNavigateTo=(navigationPath)=>{
        navigateTo(navigationPath)
    }
  return (
    <div className=" flex flex-col gap-4  items-center py-4 border-2 border-blue-300">
      <h1 className="text-center py-4 ">Home Page</h1>
      {/* Container for three buttons to navigate to three different Pages */}
       <div className="flex gap-4 justify-center">
       <Card onClick={()=>{handleNavigateTo('new-project')}}>New Project</Card>
        <Card onClick={()=>{handleNavigateTo('all-project')}}>View All Projects</Card>
        <Card onClick={()=>{handleNavigateTo('new-project')}}>View A Project</Card>
       </div>
       {/* Outlet for Renderng the childrens */}
        <Outlet/>

    </div>
  )
}

export default HomePage
