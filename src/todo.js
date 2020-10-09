import domchange from './dom-change';
import localDB from './local-storage';

const ldb = localDB();
const domChanges = domchange;
const projects = ldb.getAr('projectList');

class TodoItem {
  constructor(title,
    description,
    dueDate,
    dueDateText,
    priority = 'low',
    project = projects[0]) {
    this.id = ldb.getAr('toDoList').length;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.dueDateText = dueDateText;
    this.priority = priority;
    this.project = project;
  }
}

const toDoPage = () => {
  const getTodo = () => {
    if (ldb.getAr('toDoList') == null) {
      ldb.setAr('toDoList', []);
    }
    return ldb.getAr('toDoList');
  };
  const updatetoDoList = (todo) => {
    const toDoList = ldb.getAr('toDoList');
    toDoList.push(todo);
    ldb.setAr('toDoList', toDoList);
    domChanges.updateProjectToDoList();
    const customProjectList = ldb.getAr('projectToDoList');
    domChanges.displayToDo(customProjectList[todo.project], todo.project);
    domChanges.secondRightSection(todo, todo.id);
    document.forms.todoForm.reset();
  };

  const addTodoLogic = () => {
    const submitToDoButton = document.querySelector('.todoFormButtons .save-btn');
    submitToDoButton.addEventListener('click', (e) => {
      e.preventDefault();
      if (document.forms.todoForm.reportValidity()) {
        const newtoDoTitle = document.getElementById('title-id').value;
        const newtoDoDescription = document.getElementById('description-id').value;
        const newtoDoDueDate = document.getElementById('dueDate-id').value;
        const newtoDoDueDateText = document.querySelector('.form-control.input').value;
        const newtoDoPriority = document.getElementById('priority-id');
        const newtoDoProject = document.getElementById('project-id');
        const newUserProject = newtoDoProject.options[newtoDoProject.selectedIndex].value;
        const newUserPriority = newtoDoPriority.options[newtoDoPriority.selectedIndex].value;

        if (newtoDoTitle && newtoDoDescription && newtoDoDueDate) {
          const newToDo = new TodoItem(
            newtoDoTitle,
            newtoDoDescription,
            newtoDoDueDate,
            newtoDoDueDateText,
            newUserPriority,
            newUserProject,
          );
          if (e.target.getAttribute('data-id')) {
            const toDoList = ldb.getAr('toDoList');
            newToDo.id = e.target.getAttribute('data-id');
            toDoList[newToDo.id] = newToDo;
            ldb.setAr('toDoList', toDoList);
            domChanges.updateProjectToDoList();

            const customProjectList = ldb.getAr('projectToDoList');
            domChanges.displayToDo(customProjectList[newToDo.project], newToDo.project);
            domChanges.secondRightSection(newToDo, e.target.getAttribute('data-task-id'));
            document.forms.todoForm.reset();
          } else {
            updatetoDoList(newToDo);
          }
          document.querySelector('.form-container').classList.add('d-none');
          document.forms.todoForm.reset();
        }
      }
    });
    const cancelToDoButton = document.querySelector('.todoFormButtons .cancel-btn');
    cancelToDoButton.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('.form-container').classList.add('d-none');
    });
  };
  return { getTodo, addTodoLogic };
};


export default toDoPage;
