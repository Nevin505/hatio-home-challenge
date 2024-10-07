import PropTypes from "prop-types"

const RadioButton = ({label,name,id,onChange,checked}) => {
  return (
    <div className="flex justify-center gap-1 ">
      <input type="radio" name={name} onChange={onChange} value={label} checked={checked}/>
      <label htmlFor={id}>{label}</label>
    </div>
  )
}
RadioButton.propTypes={
  label:PropTypes.string,
  name:PropTypes.string,
  id:PropTypes.string.isRequired,
  onChange:PropTypes.func,
  checked:PropTypes.bool
}

export default RadioButton
