const initialState = [{
  id: 1,
  todo: 'Todo 1',
  done: false
}];

const todoReducer = (state = initialState, action) => {
  if (action?.type === 'add') {
    return [...state, action.payload];
  }
  return state;
};

let todos = todoReducer();


const newTodo = {
  id: 2,
  todo: 'Todo 2',
  done: false
};

const addTodoAction = {
  type: 'add',
  payload: newTodo // lo que quieres enviar
};


todos = todoReducer(todos, addTodoAction);
console.log(todos);