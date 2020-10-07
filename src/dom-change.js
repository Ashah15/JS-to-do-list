import flatpickr from 'flatpickr';

const ldb = require('./local-storage').default;

const domChanges = {

  projectListNav: (projects) => {
    let project = '';
    projects.forEach((val) => {
      project += `
    <li class="project" data-info="${val}"><h4>${val}</h4><span class="project-nav-options">&raquo;</span></li>
    `;
    });
    project += `
    <li class="all-project project" data-info="all-projects"><h4>View All Projects</h4></li>
    `;
    document.querySelector('.projects').innerHTML = project;
  },

  projectOptions: (projects) => {
    const formProject = document.forms.todoForm.project;
    let projectOptions = '';
    projects.forEach((val) => {
      projectOptions += `<option value="${val}">${val}</option>`;
    });
    formProject.innerHTML = projectOptions;
  },

  projectListRightInfo: (projectList) => {
    const rightSection = document.querySelector('.right-info .right-section:first-child');
    rightSection.innerHTML = '';
    const projectsTitle = rightSection.appendChild(document.createElement('h2'));
    projectsTitle.innerHTML = 'Projects';
    projectList.forEach((project) => {
      const projectTitle = rightSection.appendChild(document.createElement('h4'));
      projectTitle.innerHTML = project;
      projectTitle.addEventListener('click', () => {
        const rightSection = document.querySelector('.right-info .right-section:last-child');
        rightSection.classList.remove('v-hidden');
      });
    });
  },

  secondRightSection: (todo, i, ...display) => {
    const rightSection = document.querySelector('.right-info .right-section:last-child');
    rightSection.classList.remove('v-hidden');
    const todoContainer = document.createElement('div');
    todoContainer.classList.add('todo-container');
    const todoTitle = document.createElement('h2');
    todoTitle.innerHTML = todo.title;

    const todoDesc = document.createElement('p');
    todoDesc.innerHTML = todo.description;

    const todoDatePriorityDiv = document.createElement('div');
    todoDatePriorityDiv.classList.add('todo-item-meta');
    const todoDueDateText = document.createElement('h4');
    todoDueDateText.innerHTML = todo.dueDateText;
    todoDatePriorityDiv.appendChild(todoDueDateText);
    const todoPriority = document.createElement('h4');
    todoPriority.innerHTML = todo.priority;
    todoPriority.classList.add(`${todo.priority}-priority`);
    todoDatePriorityDiv.appendChild(todoPriority);


    const editIcon = document.createElement('button');
    editIcon.innerHTML = 'edit';
    editIcon.setAttribute('class', 'btn btn-primary fas fa-edit');

    const deleteIcon = document.createElement('button');
    deleteIcon.innerHTML = 'delete';
    deleteIcon.setAttribute('class', 'btn btn-danger fas fa-trash-alt');

    rightSection.innerHTML = '';
    todoContainer.appendChild(todoTitle);
    todoContainer.appendChild(todoDesc);
    todoContainer.appendChild(todoDatePriorityDiv);
    todoContainer.appendChild(editIcon);
    todoContainer.appendChild(deleteIcon);
    rightSection.appendChild(todoContainer);

    editIcon.addEventListener('click', () => {
      const todoForm = document.querySelector('.form-container');
      todoForm.classList.remove('d-none');
      const formTitle = todoForm.querySelector('#todoForm h2');
      formTitle.innerHTML = 'Edit this task';
      const taskTitle = todoForm.querySelector('#title-id');
      taskTitle.value = todo.title;
      const taskDesc = todoForm.querySelector('#description-id');
      taskDesc.value = todo.description;
      const taskDate = todoForm.querySelector('#dueDate-id');
      flatpickr(taskDate, {
        enableTime: true,
        altInput: true,
        altFormat: 'M j, Y h:iK',
        dateFormat: 'Y-m-dTh:i',
        defaultDate: todo.dueDate,
      });
      const taskPriority = todoForm.querySelector('#priority-id');
      taskPriority.value = todo.priority;
      const taskProject = todoForm.querySelector('#project-id');
      taskProject.value = todo.project;
      const taskSaveButton = todoForm.querySelector('.save-btn');
      taskSaveButton.innerHTML = 'update';
      taskSaveButton.setAttribute('data-id', i);
    });

    deleteIcon.addEventListener('click', () => {
      if (confirm('are you sure you want to delete this task?')) {
        const toDoList = ldb().getAr('toDoList');
        const index = toDoList.findIndex((task) => task.title === todo.title
            && task.description === todo.description
            && task.dueDate === todo.dueDate);
        toDoList.splice(index, 1);
        ldb().setAr('toDoList', toDoList);
        domChanges.updateProjectToDoList();
        if (ldb().getAr('projectToDoList')[todo.project][i - 1]) {
          todo = ldb().getAr('projectToDoList')[todo.project][i - 1];
          display[0](toDoList, todo.project);
          domChanges.secondRightSection(todo, i - 1);
        } else {
          rightSection.classList.add('v-hidden');
        }
      }
    });
  },

  displayToDo: (toDoList, title) => {
    const toDoDiv = document.createElement('div');
    toDoDiv.setAttribute('class', 'main-div');

    document.querySelector('.right-info .right-section:first-child').innerHTML = '';
    document.querySelector('.right-info .right-section:first-child').appendChild(toDoDiv);

    const toDoProjectTitle = document.createElement('h1');
    toDoProjectTitle.innerHTML = title;

    const addToDoButton = document.createElement('button');
    addToDoButton.innerHTML = 'Add New Task';
    addToDoButton.setAttribute('class', 'btn btn-primary todo-button');

    toDoDiv.appendChild(toDoProjectTitle);
    toDoDiv.appendChild(addToDoButton);

    const toDoSectionMainDiv = document.createElement('div');
    toDoSectionMainDiv.setAttribute('class', 'todo-section-div ');

    toDoDiv.appendChild(toDoSectionMainDiv);
    if (toDoList) {
      for (let i = 0; i < toDoList.length; i += 1) {
        domChanges.updateProjectToDoList();
        const todo = ldb().getAr('projectToDoList')[title][i];
        const todoSection = document.createElement('div');
        todoSection.setAttribute('class', 'todo-section');
        todoSection.setAttribute('data-project', title);
        todoSection.setAttribute('data-item', i);
        const toDoParagraph = document.createElement('p');
        toDoParagraph.setAttribute('class', 'p-title');
        toDoParagraph.innerHTML = toDoList[i].title;
        const toDoDate = document.createElement('p');
        toDoDate.setAttribute('class', 'p-date');
        toDoDate.innerHTML = toDoList[i].dueDateText
          ? toDoList[i].dueDateText : toDoList[i].dueDate;
        todoSection.appendChild(toDoParagraph);
        todoSection.appendChild(toDoDate);

        const todoMetaDiv = document.createElement('div');
        todoMetaDiv.classList.add('todo-item-meta');
        todoMetaDiv.appendChild(toDoDate);

        const toDoSectionPriority = document.createElement('p');
        toDoSectionPriority.setAttribute('class', `${toDoList[i].priority}-priority`);
        toDoSectionPriority.innerHTML = toDoList[i].priority;
        todoMetaDiv.appendChild(toDoSectionPriority);

        todoSection.appendChild(todoMetaDiv);

        toDoDiv.appendChild(todoSection);

        toDoSectionMainDiv.appendChild(todoSection);
        todoSection.addEventListener('click', () => {
          domChanges.secondRightSection(todo, i, domChanges.displayToDo);
        });
      }
    }

    addToDoButton.addEventListener('click', () => {
      document.querySelector('.form-container').classList.remove('d-none');
      const projectList = ldb().getAr('projectList');
      document.getElementById('project-id').options[projectList.indexOf(title)].setAttribute('selected', '');
    });
  },

  changeNavCurrentActive: (node) => {
    const currentActive = document.querySelector('li.project[active]');
    if (currentActive) {
      currentActive.removeAttribute('active');
      node.setAttribute('active', '');
    } else {
      node.setAttribute('active', '');
    }
  },

  invokeListeners: () => {
    domChanges.addListeners();
  },

  updateProjectToDoList: () => {
    const projectToDoList = {};
    const todos = ldb().getAr('toDoList');
    todos.forEach((obj) => {
      if (projectToDoList[obj.project]) {
        projectToDoList[obj.project].push(obj);
      } else {
        projectToDoList[obj.project] = [obj];
      }
    });
    ldb().setAr('projectToDoList', projectToDoList);
  },

  navListeners: () => {
    const allProjects = document.querySelectorAll('.projects .project');
    allProjects.forEach((project) => {
      project.addEventListener('click', (e) => {
        const li = [...e.target.classList].includes('project') ? e.target : e.target.parentNode;
        const liAttribute = li.getAttribute('data-info');
        domChanges.updateProjectToDoList();
        if (liAttribute === 'all-projects') {
          const projectList = ldb().getAr('projectList');
          domChanges.projectListRightInfo(projectList);
        } else {
          const customProjectList = ldb().getAr('projectToDoList');
          domChanges.displayToDo(customProjectList[liAttribute], liAttribute);
        }
        if (![...document.querySelector('.right-info .right-section:last-child').classList].includes('v-hidden')) {
          document.querySelector('.right-info .right-section:last-child').classList.add('v-hidden');
        }
        domChanges.changeNavCurrentActive(li);
      });
    });
  },

  addListeners: () => {
    flatpickr(document.querySelector('#dueDate-id'), {
      enableTime: true,
      altInput: true,
      altFormat: 'M j, Y h:iK',
      dateFormat: 'Y-m-dTh:i',
    });
    document.getElementById('formToggle').addEventListener('click', () => {
      document.querySelector('.form-container').classList.remove('d-none');
      const { todoForm } = document.forms;
      todoForm.reset();
      const formTitle = todoForm.querySelector('#todoForm h2');
      formTitle.innerHTML = 'Add new Task';
      const taskSaveButton = todoForm.querySelector('.save-btn');
      taskSaveButton.innerHTML = 'save';
      if (taskSaveButton.getAttribute('data-id')) {
        taskSaveButton.removeAttribute('data-id');
      }
    });

    document.getElementById('projectToggle').addEventListener('click', () => {
      document.querySelector('.project-module').classList.remove('d-none');
      document.forms.projectForm.reset();
    });
    domChanges.navListeners();
  },
};


export default domChanges;