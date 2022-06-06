export const addTodo = (todoObject) => {
  return {
    type: 'todo/add',
    payload: todoObject
  };
}

export const deleteTodo = (id) => {
  return {
    type: 'todo/delete',
    payload: id
  };
}