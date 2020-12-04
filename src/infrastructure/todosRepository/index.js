const url = "http://127.0.0.1:3005/todos";

const createTodo = async (data) => {
  try {
    return await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((response) => response.json());
  } catch (e) {
    console.log(e);
  }
}

const getTodos = async () => {
  try {
    return await fetch(url, {method: 'GET'}).then((response)=> response.json());
  } catch (e) {
    console.log(e);
  }
}

const patchTodo = async (id, data) => {
  try {
    return await fetch(url + `/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }).then((response) => response.json());
  } catch (e) {
    console.log(e);
  }
}


export default {
  createTodo,
  getTodos,
  patchTodo,
}
