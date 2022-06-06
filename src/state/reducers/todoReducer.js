
const intialState = { 
  extra: "extra", 
  todos: [
    {id: 0, task: "Do laundry", description: "Next 30 minutes"}
]};

let maxId = 0;

const todoReducer = (state=intialState, action) => {
  switch(action.type) {
    case 'todo/add':  
      maxId++;
      return { ...state, todos: [...state.todos, { id: maxId, ...action.payload }] };
    case 'todo/delete':
      return { ...state, todos: [...state.todos.filter(todo =>  (todo.id !== action.payload))] };
    default:
      return state; 
  }
}

export default todoReducer;