import { Outlet, useNavigate } from "react-router"
import Card from "../components/ui/Card"

const HomePage = () => {
   const navigateTo= useNavigate();

    const handleNavigateTo=(navigationPath)=>{
        navigateTo(navigationPath)
    }
  return (
    <div className=" flex flex-col gap-4">
      <h1 className="text-center">Home Page</h1>
      {/* Container for three buttons to navigate to three different Pages */}
       <div className="flex gap-4 border-2 border-green-700 justify-center">
       <Card onClick={()=>{handleNavigateTo()}}>New Project</Card>
        <Card>View All Projects</Card>
        <Card>View A Project</Card>
       </div>
        <Outlet/>

    </div>
  )
}

export default HomePage
