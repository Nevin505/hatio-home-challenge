import PropTypes from "prop-types"

const IconButton = ({src,altText,onClick,iconType,title}) => {
  console.log("Running  Icon Button");
  
    let dimensions;
    if(iconType==='small'){
        dimensions=24;
    }
    if(iconType==='large'){
        dimensions=28;

    }
  return (
    <div onClick={onClick} title={title}>
      <button ><img src={src} alt={altText} width={dimensions} height={dimensions} /></button>
    </div>
  )
}
IconButton.propTypes={
    src:PropTypes.string,
    altText:PropTypes.string,
    onClick:PropTypes.func,
    iconType:PropTypes.string,
    title:PropTypes.string
}

export default IconButton
