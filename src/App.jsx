import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import HomePage from './pages/HomePage'

const browserRoutes=createBrowserRouter([
  {path:'',element:<Login/>},
  {path:'/regsiter',element:<Register/>},
  {path:'/home',element:<HomePage/>}

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
