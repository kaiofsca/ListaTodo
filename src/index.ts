
type Task = {
    id: string, 
    title: string, 
    completed: boolean, 
    createdAt: Date
}

// Selecionando os elementos e tipando o HTML.
const input = document.querySelector<HTMLInputElement>('.textInsert')
const headerButtonCheck = document.querySelector<HTMLDivElement>('.checkAllSelected')
const headerButtonRemove = document.querySelector<HTMLDivElement>('.removeAllSelected')
const form = document.querySelector<HTMLFormElement>('.new-task-container')
const list = document.querySelector<HTMLUListElement>('.list')

form?.addEventListener('submit', e => {
    e.preventDefault()

    if(input?.value === '' || input?.value === null) {
        input.classList.add("error")
        alert('Preencha o campo corretamente!')
    } else {
        input.classList.remove("error")
        const newTask: Task = {
            id: crypto.randomUUID(),
            title: input?.value,
            completed: false,
            createdAt: new Date()
        }
    
        addListItem(newTask)
        input?.value = ""
    }

})

function addListItem(task: Task) {
    const item = document.createElement("li")
    const label = document.createElement("label")
    const checkbox = document.createElement("input")
    const button = document.createElement("button")
    const span = document.createElement("span")
    checkbox.type = "checkbox"
    checkbox.checked = task.completed
    span.append(task.title)
    label.append(checkbox, span, button)
    item.append(label)
    list?.append(item)
}