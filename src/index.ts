
// Selecionando os elementos e tipando o HTML.
const input = document.querySelector<HTMLInputElement>('.textInsert')
const headerButtonCheck = document.querySelector<HTMLDivElement>('.checkAllSelected')
const headerButtonRemove = document.querySelector<HTMLDivElement>('.removeAllSelected')
const addTaskButton = document.querySelector<HTMLDivElement>('.newTaskButton')
const list = document.querySelector<HTMLUListElement>('.list')

addTaskButton?.addEventListener('click', e => {
    e.preventDefault()

    if(input?.value === '' || input?.value === null) return

    const task = {
        id: crypto.randomUUID(),
        title: input?.value,
        completed: false,
        createdAt: new Date()

    }
})