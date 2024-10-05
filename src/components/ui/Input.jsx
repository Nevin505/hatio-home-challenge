import PropTypes from "prop-types";

const Input = ({ startIcon, placeholder,className,onChange,name,value ,onBlur,type='text',error}) => {
  const defaultStyles='p-2 w-full'
  const customStyles=className?className+" "+defaultStyles:defaultStyles
  return (
    <div className="w-full px-4 py-2 relative">
      {startIcon && startIcon}
      <input className={customStyles} placeholder={placeholder} onChange={onChange} name={name} value={value}
      onBlur={onBlur} type={type}/>
      {error && <p className="absolute left-1/4 pb-1 text-red-600">{error}</p>}
    </div>
  );
};

Input.propTypes = {
  startIcon: PropTypes.string,
  placeholder: PropTypes.string,
  className:PropTypes.string,
  onChange:PropTypes.func,
  name:PropTypes.string,
  type:PropTypes.string,
  value:PropTypes.string.isRequired,
  onBlur:PropTypes.func,
  error:PropTypes.string,
};

export default Input;
