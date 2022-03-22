// global varible
const api = 'https://jsonplaceholder.typicode.com';
const todoList = document.getElementById('todo-list');

let todos = [];
let users = [];

// attach event
document.addEventListener('DOMContentLoaded', initApp);

// basic logic
function getUserName(userId) {
  const user =  users.find(u => u.id === userId);
  return user.name;
}

function printTodo({id, userId, title, completed}) {
  const li = document.createElement('li');
  li.className = 'todo-item';
  li.dataset.id = id;
  li.innerHTML = `<span>${title} <i>by</i> <b>${getUserName(userId)}</b></span>`

  const status = document.createElement('input');
  status.type = 'checkbox';
  status.checked = completed;

  const close = document.createElement('span');
  close.innerHTML = '&times;'; // x
  close.className = 'close';

  li.prepend(status);
  li.append(close);

  todoList.prepend(li);
}

// event logic
function initApp() {
  Promise.all([getAllTodos(), getAllUsers()]).then(values => {
    [todos, users] = values;

    // send data to markup
  todos.forEach(todo => {
    printTodo(todo)
    });
  })
}

// async logic

async function getAllTodos() {
 try {
  const response = await fetch(`${api}/todos`)
  const data = await response.json();
  // console.log(data);
  
  return data;
 } catch (error) {
   console.error;
 }
}
 
async function getAllUsers() {
  const response = await fetch(`${api}/users`);
  const data = await response.json();
  // console.log(data);
  
  return data;
}

