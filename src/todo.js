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
          const toDoSectionPriority = document.createElement('p');
          toDoSectionPriority.setAttribute('class', 'high-priority');
          toDoSectionPriority.innerHTML = toDoList[i].priority;
          todoSection.appendChild(toDoSectionPriority);
        } else if (toDoList[i].priority === 'Medium') {
          const toDoSectionPriority = document.createElement('p');
          toDoSectionPriority.setAttribute('class', 'medium-priority');
          toDoSectionPriority.innerHTML = toDoList[i].priority;
          todoSection.appendChild(toDoSectionPriority);
        } else if (toDoList[i].priority === 'Low') {
          const toDoSectionPriority = document.createElement('p');
          toDoSectionPriority.setAttribute('class', 'low-priority');
          toDoSectionPriority.innerHTML = toDoList[i].priority;
          todoSection.appendChild(toDoSectionPriority);
        }

        const toDoObject = toDoList[i];

        const editIcon = document.createElement('i');
        editIcon.setAttribute('class', 'fas fa-edit');

        const deleteIcon = document.createElement('i');
        deleteIcon.setAttribute('class', 'fas fa-trash-alt');

        todoSection.appendChild(editIcon);
        todoSection.appendChild(deleteIcon);

        toDoDiv.appendChild(todoSection);

        toDoSectionMainDiv.appendChild(todoSection);
      }
    }

    addToDoButton.addEventListener('click', () => {
      displayToDoForm(name, value);
    });
  };

  const displayToDoForm = (name, value, x) => {
    const toDoForm = document.createElement('div');
    toDoForm.setAttribute('class', 'card project-module');
    toDoForm.setAttribute('id', 'todoForm');

    const title = document.createElement('label');
    title.setAttribute('class', 'nameTxt');
    toDoForm.appendChild(title);
    title.innerHTML = 'Title';

    const titleInput = document.createElement('input');
    titleInput.setAttribute('id', 'title-id');
    titleInput.type = 'text';

    toDoForm.appendChild(titleInput);

    const description = document.createElement('label');
    description.setAttribute('class', 'nameTxt');
    description.innerHTML = 'Description';
    toDoForm.appendChild(description);

    const descriptionInput = document.createElement('input');
    descriptionInput.setAttribute('class', 'description-class');
    descriptionInput.setAttribute('id', 'description-id');
    descriptionInput.type = 'text';
    toDoForm.appendChild(descriptionInput);

    const dueDate = document.createElement('label');
    dueDate.setAttribute('class', 'nameTxt');
    dueDate.innerHTML = 'Due Date';
    const dueDateInput = document.createElement('input');
    dueDateInput.setAttribute('class', 'description-class');
    dueDateInput.setAttribute('id', 'dueDate-id');
    dueDateInput.type = 'date';
    toDoForm.appendChild(dueDate);
    toDoForm.appendChild(dueDateInput);

    const priorityTitle = document.createElement('label');
    priorityTitle.setAttribute('class', 'nameTxt');
    priorityTitle.innerHTML = 'Priority';

    const priority = document.createElement('select');
    priority.setAttribute('class', 'description-class');
    priority.setAttribute('id', 'priority-id');

    const priorityOptions = document.createElement('option-1');
    priorityOptions.setAttribute('value', '1');
    priority.appendChild(priorityOptions);
    priorityOptions.innerHTML = 'High';

    const priorityOptionTwo = document.createElement('option-2');
    priorityOptionTwo.setAttribute('value', '2');
    priority.appendChild(priorityOptionTwo);
    priorityOptionTwo.innerHTML = 'Medium';

    const priorityOptionThree = document.createElement('option-3');
    priorityOptionThree.setAttribute('value', '3');
    priority.appendChild(priorityOptionThree);
    priorityOptionThree.innerHTML = 'Low';

    toDoForm.appendChild(priorityTitle);
    toDoForm.appendChild(priority);

    const submitToDoButton = document.createElement('button');
    submitToDoButton.setAttribute('class', 'btn btn-success todo-project-button hide-submit-button mt-2');
    submitToDoButton.innerHTML = 'Submit';

    toDoForm.appendChild(submitToDoButton);

    document.querySelector('.all-content').appendChild(toDoForm);

    submitToDoButton.addEventListener('click', () => {
      if (toDoList.indexOf(toDoList[x]) !== -1) {
        const newtoDoTitle = document.getElementById('title-id').value;
        const newtoDoDescription = document.getElementById('description-id').value;
        const newtoDoDueDate = document.getElementById('dueDate-id').value;
        const newtoDoPriority = document.getElementById('priority-id');

        const newUserPriority = newtoDoPriority.options[newtoDoPriority.selectedIndex].text;

        if (newtoDoTitle && newtoDoDescription && newtoDoDueDate) {
          toDoList[x].title = newtoDoTitle;
          toDoList[x].description = newtoDoDescription;
          toDoList[x].duedate = newtoDoDueDate;
          toDoList[x].priority = newUserPriority;
        }

      } else {
        document.getElementById('todoDoForm').classList.add('hide-toDo-form-first');
        document.querySelector('.main-todo-div').classList.add('hide-toDo-form-first');
      }
    });
  };


  return { displayToDo, displayToDoForm };
};


export {
  toDoPage, TodoItem,
};








    
} 
