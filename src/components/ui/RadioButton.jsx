
const RadioButton = ({label,name,id,onChange}) => {
  return (
    <div className="flex justify-center gap-1 ">
      <input type="radio" name={name} onChange={onChange} value={label}/>
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default RadioButton
