"use strict";
// Selecionando os elementos e tipando o HTML.
const input = document.querySelector('.textInsert');
const headerButtonCheck = document.querySelector('.checkAllSelected');
const headerButtonRemove = document.querySelector('.removeAllSelected');
const addTaskButton = document.querySelector('.newTaskButton');
const list = document.querySelector('.list');
addTaskButton === null || addTaskButton === void 0 ? void 0 : addTaskButton.addEventListener('click', e => {
    e.preventDefault();
    if ((input === null || input === void 0 ? void 0 : input.value) === '' || (input === null || input === void 0 ? void 0 : input.value) === null)
        return;
    const task = {
        id: crypto.randomUUID(),
        title: input === null || input === void 0 ? void 0 : input.value,
        completed: false,
        createdAt: new Date()
    };
});
