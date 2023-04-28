"use strict";
// Selecionando os elementos e tipando o HTML.
const input = document.querySelector('.textInsert');
const headerButtonCheck = document.querySelector('.checkAllSelected');
const headerButtonRemove = document.querySelector('.removeAllSelected');
const form = document.querySelector('.new-task-container');
const list = document.querySelector('.list');
form === null || form === void 0 ? void 0 : form.addEventListener('submit', e => {
    e.preventDefault();
    if ((input === null || input === void 0 ? void 0 : input.value) === '' || (input === null || input === void 0 ? void 0 : input.value) === null) {
        input.classList.add("error");
        alert('Preencha o campo corretamente!');
    }
    else {
        input.classList.remove("error");
        const newTask = {
            id: crypto.randomUUID(),
            title: input === null || input === void 0 ? void 0 : input.value,
            completed: false,
            createdAt: new Date()
        };
        addListItem(newTask);
        input === null || input === void 0 ? void 0 : input.value = "";
    }
});
function addListItem(task) {
    const item = document.createElement("li");
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    const button = document.createElement("button");
    const span = document.createElement("span");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    span.append(task.title);
    label.append(checkbox, span, button);
    item.append(label);
    list === null || list === void 0 ? void 0 : list.append(item);
}
