import PropTypes from "prop-types"

const Container = ({children}) => {
  return (
    <div className="flex flex-col items-center justify-center border-2 border-red-600 min-h-screen bg-gradient-to-r from-primary-500">
      {children}
    </div>
  )
}
Container.propTypes={
    children:PropTypes.node
}

export default Container
