import { useState } from "react"

const useBlur=()=>{
   const [isBlur,setIsBlur]=useState(false);

   const handleBlur=(status)=>{
    setIsBlur(status)
   }
   return {isBlur,handleBlur};
}
export default useBlur;