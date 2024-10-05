export const patternMatching=(value,regexPattern)=>{
   return regexPattern.test(value)
}

export const isValueTruthy=(value)=>{
   return value?true:false
}