// получил переменные, на кнопку вешаю слушателя
document.querySelector('.btn-add').addEventListener('click', addTodo);
document.querySelector('.field');
// DOMContentLoaded - событие, которое проверит загружен ли полностью контент
document.addEventListener('DOMContentLoaded', loadTodos);
const todoList = document.getElementById('todo-list');
// получил переменные

function addTodo() {
  // получаю от инпута содержимое
  const newTodo = this.previousElementSibling.value.trim();
  // получаю от инпута содержимое

  // addTodo: createEl | removeEl
  if (newTodo) {
    createElement(newTodo);
    saveToStorage(newTodo);
    // clean field after addTodo
    this.previousElementSibling.value = '';
    // clean field after addTodo

   } else {
    alert('Input field is empty.')
  }

 
}
function createElement(text) {
  // создали li
  const li = document.createElement('li');
  li.innerText = text;
  li.className = 'todo-item';
  // добавляем слушателя для удаления item'a
  li.addEventListener('click', removeElement);
  // добавляем слушателя для удаления item'a
  // создали li
  
  // и приклеились к todoList
  todoList.append(li);
  // и приклеились к todoList

}


function removeElement () {
  this.removeEventListener('click', removeElement);
  this.remove();
  removeFromStorage(this.innerText);
}


function saveToStorage(todo) {
  const todos = JSON.parse(localStorage.getItem('tasks')) || [];
  localStorage.setItem('tasks', JSON.stringify([...todos, todo]))
}

function loadTodos() {
  const todos = JSON.parse(localStorage.getItem('tasks'));
  if (todos) {
    todos.forEach(todo => {
      createElement(todo);
    });
  }
}

function removeFromStorage(removedTodo) {
  const todos = JSON.parse(localStorage.getItem('tasks')) || [];

  localStorage.setItem(
    'tasks',
    JSON.stringify(todos.filter((todo) => todo !== removedTodo))
  );
}

// .prepend - добавить вначало
// .append - добавить вконец

