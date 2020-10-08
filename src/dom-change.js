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

  projectOptions: (projects) => {
    const formProject = document.forms.todoForm.project;
    let projectOptions = '';
    projects.forEach((val) => {
      projectOptions += `<option value="${val}">${val}</option>`;
    });
    formProject.innerHTML = projectOptions;
  },

  projectSecondRightInfo: (project, i) => {
    const secondRightSection = document.querySelector('.right-info .right-section:last-child');
    secondRightSection.innerHTML = '';
    secondRightSection.classList.remove('v-hidden');
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('todo-container');
    const projectTitle = document.createElement('h2');
    projectTitle.innerHTML = project;
    projectContainer.appendChild(projectTitle);
    secondRightSection.appendChild(projectContainer);
    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('confirm-dialogue-buttons', 'cta-btns');
    const editIcon = document.createElement('button');
    editIcon.innerHTML = 'edit';
    editIcon.setAttribute('class', 'btn btn-primary fas fa-edit');

    const deleteIcon = document.createElement('button');
    deleteIcon.innerHTML = 'delete';
    deleteIcon.setAttribute('class', 'btn btn-danger fas fa-trash-alt');

    editIcon.addEventListener('click', () => {
      document.querySelector('.project-module').classList.remove('d-none');
      document.forms.projectForm.reset();
      document.forms.projectForm.querySelector('h2').innerHTML = 'Update Project:';
      const updateProjectName = document.querySelector('#addproject');
      updateProjectName.value = project;
      const updateButton = document.forms.projectForm.querySelector('.btn.btn-success.save-btn');
      updateButton.innerHTML = 'update';
      updateButton.setAttribute('data-update', i);
    });

    deleteIcon.addEventListener('click', () => {
      let editContainer;
      if (document.querySelector('.window-container')) {
        editContainer = document.querySelector('.window-container');
        editContainer.innerHTML = '';
        if ([...editContainer.classList].includes('d-none')) {
          editContainer.classList.remove('d-none');
        }
      } else {
        editContainer = document.createElement('div');
        editContainer.classList.add('window-container');
      }
      const confirmForm = document.createElement('div');
      confirmForm.className = 'confirm-dialogue';
      const confirmFormH2 = document.createElement('h2');
      const confirmFormTitle = document.createTextNode('Are you sure you want to delete this Project?');
      confirmFormH2.appendChild(confirmFormTitle);
      confirmForm.appendChild(confirmFormH2);

      const buttonDiv = document.createElement('div');
      buttonDiv.classList.add('confirm-dialogue-buttons', 'cta-btns');
      const deleteButton = document.createElement('button');
      deleteButton.setAttribute('class', 'btn btn-danger save-btn');
      deleteButton.innerHTML = 'Delete';

      const cancelButton = document.createElement('button');
      cancelButton.setAttribute('class', 'btn btn-success cancel-btn');
      cancelButton.innerHTML = 'Cancel';
      cancelButton.addEventListener('click', () => {
        editContainer.classList.add('d-none');
      });

      deleteButton.addEventListener('click', () => {
        const projectList = ldb().getAr('projectList');
        projectList.splice(i, 1);
        ldb().setAr('projectList', projectList);
        domChanges.updateProjectToDoList();
        domChanges.projectListRightInfo(projectList);
        domChanges.projectListNav(projectList);
        domChanges.navListeners();
        const lastDiv = document.querySelector('.right-info .right-section:last-child');
        lastDiv.classList.add('v-hidden');
        lastDiv.innerHTML = '';
        editContainer.classList.add('d-none');
      });

      buttonDiv.appendChild(deleteButton);
      buttonDiv.appendChild(cancelButton);
      confirmForm.appendChild(buttonDiv);
      editContainer.appendChild(confirmForm);
      document.getElementById('content').appendChild(editContainer);
    });
    buttonDiv.appendChild(editIcon);
    buttonDiv.appendChild(deleteIcon);
    secondRightSection.appendChild(buttonDiv);
  },

  projectListRightInfo: (projectList) => {
    const rightSection = document.querySelector('.right-info .right-section:first-child');
    rightSection.innerHTML = '';
    const projectsTitle = rightSection.appendChild(document.createElement('h2'));
    projectsTitle.innerHTML = 'Projects';
    projectList.forEach((project, i) => {
      const projectTitle = document.createElement('h4');
      rightSection.appendChild(projectTitle);
      projectTitle.innerHTML = project;
      projectTitle.addEventListener('click', () => {
        domChanges.projectSecondRightInfo(project, i);
      });
    });
  },

  secondRightSection: (todo, i) => {
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
      let containerDiv;
      if (document.querySelector('.window-container')) {
        containerDiv = document.querySelector('.window-container');
        containerDiv.innerHTML = '';
        if ([...containerDiv.classList].includes('d-none')) {
          containerDiv.classList.remove('d-none');
        }
      } else {
        containerDiv = document.createElement('div');
        containerDiv.classList.add('window-container');
      }
      const confirmForm = document.createElement('div');
      confirmForm.className = 'confirm-dialogue';
      const confirmFormH2 = document.createElement('h2');
      const confirmFormTitle = document.createTextNode('Are you sure you want to delete this Task?');
      confirmFormH2.appendChild(confirmFormTitle);
      confirmForm.appendChild(confirmFormH2);

      const buttonDiv = document.createElement('div');
      buttonDiv.classList.add('confirm-dialogue-buttons', 'cta-btns');
      const deleteButton = document.createElement('button');
      deleteButton.setAttribute('class', 'btn btn-danger save-btn');
      deleteButton.innerHTML = 'Delete';

      const cancelButton = document.createElement('button');
      cancelButton.setAttribute('class', 'btn btn-success cancel-btn a');
      cancelButton.innerHTML = 'Cancel';

      buttonDiv.appendChild(deleteButton);
      buttonDiv.appendChild(cancelButton);
      confirmForm.appendChild(buttonDiv);
      containerDiv.appendChild(confirmForm);

      deleteButton.addEventListener('click', () => {
        const toDoList = ldb().getAr('toDoList');
        const index = toDoList.findIndex((task) => task.title === todo.title
          && task.description === todo.description
          && task.dueDate === todo.dueDate);
        toDoList.splice(index, 1);
        ldb().setAr('toDoList', toDoList);
        domChanges.updateProjectToDoList();
        rightSection.innerHTML = '';
        rightSection.classList.add('v-hidden');
        containerDiv.classList.add('d-none');
        domChanges.displayToDo(toDoList, todo.project);
      });

      cancelButton.addEventListener('click', () => {
        containerDiv.classList.add('d-none');
      });
      document.getElementById('content').appendChild(containerDiv);
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
        const rightSection = document.querySelector('.right-info .right-section:last-child');
        if (![...rightSection.classList].includes('v-hidden')) {
          document.querySelector('.right-info .right-section:last-child').classList.add('v-hidden');
          rightSection.innerHTML = '';
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