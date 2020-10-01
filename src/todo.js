class TodoItem {
  constructor(title,
    description,
    dueDate,
    priority = 'low',
    project = projects[0]) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
  }
}

const toDoPage = () => {
  const displayToDo = (name, value) => {
    const toDoDiv = document.createElement('div');
    toDoDiv.setAttribute('class', 'main-div');

    document.querySelector('.content').appendChild(toDoDiv);

    const toDoProjectTitle = document.createElement('h1');
    toDoProjectTitle.innerHTML = name;

    const addToDoButton = document.createElement('button');
    addToDoButton.innerHTML = 'Add Task';
    addToDoButton.setAttribute('class', 'btn btn-primary todo-button');
    
    toDoDiv.appendChild(toDoProjectTitle);
    toDoDiv.appendChild(addToDoButton);

    const 




    
  } 
}