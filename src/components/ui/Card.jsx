
const Card = ({children,onClick}) => {
  return (
    <div onClick={onClick}  className="px-6 py-2  border-2 border-red-700 rounded-md hover:scale-105 cursor-pointer " >
      {children}
    </div>
  )
}

export default Card
