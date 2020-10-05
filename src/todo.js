// import domchange from './dom-change';
import localDB from './local-storage';

const ldb = localDB();
const projects = ldb.getAr('projectList');
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
const toDoList = ldb.getAr('toDoList') == null ? ldb.setAr('toDoList', []) : ldb.getAr('toDoList');

const toDoPage = () => {
  const getTodo = () => {
    if (ldb.getAr('toDoList') == null) {
      ldb.setAr('toDoList', []);
    }
    return ldb.getAr('toDoList');
  };
  const updatetoDoList = (todo) => {
    toDoList.push(todo);
    ldb.setAr('toDoList', toDoList);
  }
  const displayToDo = (name, value, x) => {
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

        // const toDoObject = toDoList[i];

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
      // displayToDoForm(name, value);
    });
  };

  const addTodoLogic = () => {
    const submitToDoButton = document.querySelector('.todoFormButtons .save-btn');
    submitToDoButton.addEventListener('click', (e) => {
      e.preventDefault();
      if (document.forms.todoForm.reportValidity()) {
        const newtoDoTitle = document.getElementById('title-id').value;
        const newtoDoDescription = document.getElementById('description-id').value;
        const newtoDoDueDate = document.getElementById('dueDate-id').value;
        const newtoDoPriority = document.getElementById('priority-id');
        const newtoDoProject = document.getElementById('project-id');
        const newUserProject = newtoDoProject.options[newtoDoProject.selectedIndex].value;
        const newUserPriority = newtoDoPriority.options[newtoDoPriority.selectedIndex].value;

        if (newtoDoTitle && newtoDoDescription && newtoDoDueDate) {
          // toDoList[x].title = newtoDoTitle;
          // toDoList[x].description = newtoDoDescription;
          // toDoList[x].duedate = newtoDoDueDate;
          // toDoList[x].priority = newUserPriority;
          const newToDo = new TodoItem(
            newtoDoTitle,
            newtoDoDescription,
            newtoDoDueDate,
            newUserPriority,
            newUserProject,
          );
          updatetoDoList(newToDo);
          // ldb.getAr('taDoList', getTodo());
        }
      }
    });
  };
  return { displayToDo, addTodoLogic };
};


export default toDoPage;
