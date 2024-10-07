import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import HomePage from './pages/HomePage'
import NewProject from './pages/NewProject'
import AllProjects from './pages/AllProjects'
import AddToDo from './pages/AddToDo'
import Project from './pages/Project'

const browserRoutes=createBrowserRouter([
  {path:'',element:<Login/>},
  {path:'/regsiter',element:<Register/>},
  {path:'/home',element:<HomePage/>,children:[
    {index:true,element:<p>Please Select a Option</p>},
    {path:'new-project',element:<NewProject/>},
    {path:'all-project',element:<AllProjects/>},
    
  ]},
  {path:'/add-to',element:<AddToDo/>},
  {path:'/project/:projectId',element:<Project/>}

])
function App() {

  return (
    <>
        {/* <div className='flex flex-col justify-center items-center border-2 border-red-200 m-auto '> */}
         <RouterProvider router={browserRoutes}>
         </RouterProvider>
        {/* </div> */}
    </>
  )
}

export default App
