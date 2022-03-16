// получил переменные, на кнопку вешаю слушателя
document.querySelector('.btn-add').addEventListener('click', addTodo);
document.querySelector('.field');

const todoList = document.getElementById('todo-list');
// получил переменные

function addTodo() {
  // получаю от инпута содержимое
  const newTodo = this.previousElementSibling.value.trim();
  // получаю от инпута содержимое

  // addTodo: createEl | removeEl
  if (newTodo) {
    createElement(newTodo);
    // clean field after addTodo
    this.previousElementSibling.value = '';
    // clean field after addTodo

   } else {
    alert('Input field is empty.')
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
    // console.log(this);
  }
}


// .prepend - добавить вначало
// .append - добавить вконец