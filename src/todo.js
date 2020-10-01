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

    document.querySelector('.all-content').appendChild(toDoDiv);

    const toDoProjectTitle = document.createElement('h1');
    toDoProjectTitle.innerHTML = name;

    const addToDoButton = document.createElement('button');
    addToDoButton.innerHTML = 'Add New Task';
    addToDoButton.setAttribute('class', 'btn btn-primary todo-button');
    
    toDoDiv.appendChild(toDoProjectTitle);
    toDoDiv.appendChild(addToDoButton);

    const toDoSectionMainDiv = document.createElement('div');
    toDoSectionMainDiv.setAttribute('class', 'todo-section-div ');

    toDoDiv.appendChild(toDoSectionMainDiv);

    for (let i = 0; i < toDoList.length; i += 1) {
      if (value === toDoList[i].project) {
        const todoSection = document.createElement('div');
        todoSection.setAttribute('class', 'todo-section');
        const toDoParagraph = document.createElement('p');
        toDoParagraph.setAttribute('class', 'p-title');
        toDoParagraph.innerHTML = toDoList[i].title;
        const toDoDate = document.createElement('p');
        toDoDate.setAttribute('class', 'p-date');
        toDoDate.innerHTML = toDoList[i].duedate;

        todoSection.appendChild(toDoParagraph);
        todoSection.appendChild(toDoDate);

        if (toDoList[i].priority === 'High') {
          const toDoSectionPrority = document.createElement('p');
          toDoSectionPrority.setAttribute('class', 'high-priority');
          toDoSectionPrority.innerHTML = toDoList[i].priority;
          todoSection.appendChild(toDoSectionPrority);
        } else if (toDoList[i].priority === 'Medium') {
          const toDoSectionPrority = document.createElement('p');
          toDoSectionPrority.setAttribute('class', 'medium-priority');
          toDoSectionPrority.innerHTML = toDoList[i].priority;
          todoSection.appendChild(toDoSectionPrority);
        } else if (toDoList[i].priority === 'Low') {
          const toDoSectionPrority = document.createElement('p');
          toDoSectionPrority.setAttribute('class', 'low-priority');
          toDoSectionPrority.innerHTML = toDoList[i].priority;
          todoSection.appendChild(toDoSectionPrority);
        }





    
  } 
}