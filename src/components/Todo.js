import React from "react";

const Todo = ({ todos, setTodos, todo }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
    console.log(todo);
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !todo.completed,
          };
        } else {
          return item;
        }
      })
    );
  };
  return (
    <div className="todo">
      <li className="todo-item">{todo.text}</li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
