import React from 'react';
import './styles.css';
import Todo from "../Todo";

const ListOfTodos = (props) => {

  const changedState = () => {
    props.changedState();
  }

  return (
      <div className="todo-container">
        <h2>{props.title} ({props.todos.length})</h2>
        { props.todos.map((todo) => <Todo todo={todo} changedState={changedState} />) }
      </div>
  )
}

export default ListOfTodos;
