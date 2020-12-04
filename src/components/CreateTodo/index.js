import React, {useState} from 'react';
import './styles.css';
import todoRepository from './../../infrastructure/todosRepository';

const CreateTodo = () => {
  const initialState = {
    name: '',
    description: '',
    completed: false,
    completion_date: '',
    status: 'to_do',
    owner: ''
  };

  const [todo, setTodo] = useState(initialState);

  const handleChange = (key, value) => {
    setTodo({...todo, [key]: value});
  }

  const createTodo = async () => {
    await todoRepository.createTodo(todo).then((response) => response);
    setTodo(initialState);
  }

  return (
      <div className="form-container">
        <div className="form-row">
          <input
              placeholder="Name"
              value={todo.name}
              onChange={
                (e) => handleChange("name", e.target.value)
              }
          />
          <input
              placeholder="Owner"
              value={todo.owner}
              onChange={
                (e) => handleChange("owner", e.target.value)
              }
          />
        </div>
        <textarea
            placeholder="Description"
            rows="4"
            value={todo.description}
            onChange={
              (e) => handleChange("description", e.target.value)
            }
        />
        <button onClick={createTodo}>Crear</button>
      </div>
  );
}

export default CreateTodo;
