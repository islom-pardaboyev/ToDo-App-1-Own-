const elForm = document.querySelector("#form");
const elInput = document.querySelector("#input-box");
const elList = document.querySelector("#list-container");

const localData = JSON.parse(window.localStorage.getItem("todos"));

const todos = localData || [];

elForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = elInput.value;

    const todoObj = {
        title: inputValue,
        Id: todos.length,
    };

    elInput.value = null;

    todos.push(todoObj);
    elList.innerHTML = null;
    renderTodos();

    window.localStorage.setItem("todos", JSON.stringify(todos));
});

const renderTodos = () => {
    for (let item of todos) {
        const newItem = document.createElement("li");

        newItem.textContent = item.title;

        newItem.addEventListener("click", () => {
            newItem.classList.toggle('checked');
        });

        elList.appendChild(newItem);
    }
    window.localStorage.setItem("todos", JSON.stringify(todos));
};

renderTodos();
