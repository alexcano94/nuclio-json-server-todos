import React, {useEffect, useState} from "react";
import './App.css';
import ListOfTodos from "./components/ListOfTodos";

import todosRepository from "./infrastructure/todosRepository";
import CreateTodo from "./components/CreateTodo";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

function App() {

  const [listOfTodos, setListOfTodos] = useState([]);

  useEffect(() => {
    todosRepository.getTodos().then((response) => {
      setListOfTodos(response);
    });
  }, []);

  const changedState = async () => {
    await todosRepository.getTodos().then((response) => {
      setListOfTodos(response);
    });
  }
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <CreateTodo />
        <ListOfTodos changedState={changedState} todos={listOfTodos.filter((todo) => todo.status === 'to_do')} title={"TO DO"}/>
        <ListOfTodos changedState={changedState} todos={listOfTodos.filter((todo) => todo.status === 'doing')} title={"DOING"}/>
        <ListOfTodos changedState={changedState} todos={listOfTodos.filter((todo) => todo.status === 'finished')} title={"FINISHED"}/>
      </DndProvider>
    </div>
  );
}

export default App;
