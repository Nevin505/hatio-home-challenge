import PropTypes from "prop-types";

const Button = ({startIcon,children,className,variantType,onClick}) => {
  const defaultStyles='px-4 py-2  bg-primary-500 hover:bg-primary-600';
  let buttonStyles;
  if(variantType==='rounded'){
    buttonStyles=className ?className+" "+defaultStyles:defaultStyles+" rounded-md"
  }
  else{
    buttonStyles=className ?className+" "+defaultStyles:defaultStyles
  }

  return (
    <div>
        {startIcon && startIcon}
        <button className={buttonStyles} onClick={onClick}>{children}</button>
    </div>
  )
}
Button.propTypes={
    startIcon:PropTypes.string,
    children:PropTypes.string.isRequired,
    className:PropTypes.string,
    variantType:PropTypes.string,
    onClick:PropTypes.func
};
export default Button
