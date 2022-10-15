function loadTodos() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => displayTodos(data));
}
function displayTodos(todos) {
  const todoContainer = document.getElementById("todo-container");
  for (const todo of todos) {
    const todoDiv = document.createElement("div");
    todoDiv.innerHTML = `
    <h3>Title: ${todo.title}</h3>
    <h4>Id:${todo.id}</h4>
    <p>user Id: ${todo.userId}</p>

    `;
    todoContainer.appendChild(todoDiv);
  }
}
loadTodos();


