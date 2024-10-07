import PropTypes from "prop-types";
import { fromatTime } from "../utils/formatter";
import RadioButton from "./ui/RadioButton";

const TodoList = ({ title, todos, statusMessage,checked }) => {
    return (
      <div className="text-center px-2 flex flex-col gap-4 border-2 py-2 rounded-md md:w-1/4">
        <h2>{title}</h2>
        {todos && todos.length > 0 ? (
          todos.map((todo) => (
            <div className="flex gap-4 w-full border-2 justify-between p-2 rounded-md" key={todo._id}>
              <RadioButton label={todo.description} name={todo.description} value={todo.description} checked={checked}/>
              <p>Created At: {fromatTime(todo.createdAt)}</p>
            </div>
          ))
        ) : (
          <p>{statusMessage}</p>
        )}
      </div>
    );
  };

  export default TodoList;

  TodoList.propTypes={
    title:PropTypes.string,
     todos:PropTypes.array,
      statusMessage:PropTypes.string,
      checked:PropTypes.bool
  }