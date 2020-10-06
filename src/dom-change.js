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
    let projectDOM = '';
    projectList.forEach((project) => {
      projectDOM += `
        <h4>${project}</h4>
      `;
    });
    rightSection.innerHTML = projectDOM;
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
        const todoSection = document.createElement('div');
        todoSection.setAttribute('class', 'todo-section');
        const toDoParagraph = document.createElement('p');
        toDoParagraph.setAttribute('class', 'p-title');
        toDoParagraph.innerHTML = toDoList[i].title;
        const toDoDate = document.createElement('p');
        toDoDate.setAttribute('class', 'p-date');
        toDoDate.innerHTML = toDoList[i].dueDate;

        todoSection.appendChild(toDoParagraph);
        todoSection.appendChild(toDoDate);

        if (toDoList[i].priority === 'high') {
          const toDoSectionPriority = document.createElement('p');
          toDoSectionPriority.setAttribute('class', 'high-priority');
          toDoSectionPriority.innerHTML = toDoList[i].priority;
          todoSection.appendChild(toDoSectionPriority);
        } else if (toDoList[i].priority === 'hedium') {
          const toDoSectionPriority = document.createElement('p');
          toDoSectionPriority.setAttribute('class', 'medium-priority');
          toDoSectionPriority.innerHTML = toDoList[i].priority;
          todoSection.appendChild(toDoSectionPriority);
        } else if (toDoList[i].priority === 'low') {
          const toDoSectionPriority = document.createElement('p');
          toDoSectionPriority.setAttribute('class', 'low-priority');
          toDoSectionPriority.innerHTML = toDoList[i].priority;
          todoSection.appendChild(toDoSectionPriority);
        }

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
        const li = e.target.classList.length === 0 ? e.target.parentNode : e.target;
        const liAttribute = li.getAttribute('data-info');
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
        if (liAttribute === 'all-projects') {
          const projectList = ldb().getAr('projectList');
          domChanges.projectListRightInfo(projectList);
        } else {
          const customProjectList = ldb().getAr('projectToDoList');
          // domChanges.projectListRightInfo();
          domChanges.displayToDo(customProjectList[liAttribute], liAttribute);
        }
        domChanges.changeNavCurrentActive(li);
      });
    });
  },

  addListeners: () => {
    flatpickr(document.querySelector('#dueDate-id'), {
      enableTime: true,
      altInput: true,
      altFormat: 'F j, Y h:iK',
      dateFormat: 'Y-m-dTh:i',
    });
    document.getElementById('formToggle').addEventListener('click', () => {
      document.querySelector('.form-container').classList.remove('d-none');
    });
    document.querySelector('.form-container').addEventListener('click', (e) => {
      if (e.target.classList[0] === 'form-container') {
        document.querySelector('.form-container').classList.add('d-none');
      }
    });

    document.getElementById('projectToggle').addEventListener('click', () => {
      document.querySelector('.project-module').classList.remove('d-none');
    });
    document.querySelector('.project-module').addEventListener('click', (e) => {
      if (e.target.classList[0] === 'project-module') {
        document.querySelector('.project-module').classList.add('d-none');
      }
    });
    domChanges.navListeners();
  },
};


export default domChanges;