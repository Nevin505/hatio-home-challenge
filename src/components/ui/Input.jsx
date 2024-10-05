import PropTypes from "prop-types";

const Input = ({ startIcon, placeholder,className,onChange,name,value ,onBlur}) => {
  const defaultStyles='p-2 w-full'
  const customStyles=className?className+" "+defaultStyles:defaultStyles
  return (
    <div className="w-full px-4 py-2 relative">
      {startIcon && startIcon}
      <input type="text" className={customStyles} placeholder={placeholder} onChange={onChange} name={name} value={value}
      onBlur={onBlur}/>
      <p className="absolute left-1/4 pb-1 text-red-600">*This is a Sample Text</p>
    </div>
  );
};

Input.propTypes = {
  startIcon: PropTypes.string,
  placeholder: PropTypes.string,
  className:PropTypes.string,
  onChange:PropTypes.func,
  name:PropTypes.string,
  value:PropTypes.string.isRequired,
  onBlur:PropTypes.func
};

export default Input;
