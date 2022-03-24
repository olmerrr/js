(function () {
  // global varible
  const api = "https://jsonplaceholder.typicode.com";
  const todoList = document.getElementById("todo-list");
  const userSelect = document.getElementById("user-todo");
  const form = document.getElementById("form");

  let todos = [];
  let users = [];

  // attach event
  document.addEventListener("DOMContentLoaded", initApp);
  document.addEventListener("submit", handleSubmit);
  // basic logic

  function getUserName(userId) {
    const user = users.find((u) => u.id === userId);
    return user.name;
  }

  function printTodo({ id, userId, title, completed }) {
    const li = document.createElement("li");
    li.className = "todo-item";
    li.dataset.id = id;
    li.innerHTML = `<span>${title} <i>by</i> <b>${getUserName(
      userId
    )}</b></span>`;

    const status = document.createElement("input");
    status.type = "checkbox";
    status.checked = completed;
    status.addEventListener("change", handleTodoChange);
    li.prepend(status);

    const close = document.createElement("span");
    close.innerHTML = "&times;"; // x
    close.className = "close";
    li.append(close);
    close.addEventListener("click", handleClose);

    todoList.prepend(li);
  }

  function createUserOptions(user) {
    const option = document.createElement("option");
    option.value = user.id;
    option.innerText = user.name;

    userSelect.append(option);
  }
  // filter говорит: больше там не будет такого todo
  function removeTodo(todoId) {
    todos.filter((todo) => todo.id !== todoId);
    // console.log(todos)
    const todo = todoList.querySelector(`[data-id="${todoId}"]`);
    todo.querySelector("input").removeEventListener("change", handleTodoChange);
    todo.querySelector(".close").removeEventListener("click", handleClose);

    todo.remove();
  }

  function alertError(error) {
    alert(error.message);
  }
  // event logic

  function initApp() {
    Promise.all([getAllTodos(), getAllUsers()]).then((values) => {
      [todos, users] = values;

      // send data to markup
      todos.forEach((todo) => {
        printTodo(todo);
      });

      users.forEach((user) => {
        createUserOptions(user);
      });
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    // console.log(form.todo);
    // console.log(form.user);
    createTodo({
      userId: Number(form.user.value),
      title: form.todo.value,
      completed: false,
    });
  }
  function handleClose() {
    const todoId = this.parentElement.dataset.id;
    removeTodo(todoId);
  }
  function handleTodoChange() {
    const todoId = this.parentElement.dataset.id;
    const completed = this.checked;
    toggleTodoComplete(todoId, completed);
  }

  // async logic

  async function getAllTodos() {
    try {
      const response = await fetch(`${api}/todos?_limit=25`);
      const data = await response.json();
      // console.log(data);

      return data;
    } catch (error) {
      alertError(error);
    }
  }

  async function getAllUsers() {
    try {
      const response = await fetch(`${api}/users`);
      const data = await response.json();
      // console.log(data);

      return data;
    } catch (error) {
      alertError(error);
    }
  }

  async function createTodo(todo) {
    try {
      const response = await fetch(`${api}/todos`, {
        method: "POST",
        body: JSON.stringify(todo),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const newTodo = await response.json();
      // console.log(newTodo);
      printTodo(newTodo);
    } catch (error) {
      alertError(error);
    }
  }
  // patch reques, меняю чтото одно точечно
  async function toggleTodoComplete(todoId, completed) {
    try {
      const response = await fetch(`${api}/todos/${todoId}`, {
        method: "PATCH",
        body: JSON.stringify({ completed: completed }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
      } else {
        // alertError(new Error('Error!'))
        throw new Error("Failed to connect server.");
      }
    } catch (error) {
      alertError(error);
    }
  }

  async function deleteTodo(todoId) {
    try {
      const response = await fetch(`${api}/todos/${todoId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        removeTodo(todoId);
      }
    } catch (error) {
      alertError(error);
    }
  }
})();
