import { projectListNav, projectOptions } from './dom-change';


/// function projects(name, value) {
//   this.name = name;
//   this.value = value;
// }
let projectList = []
class TodoProject {
  constructor(name = 'Default') {
    this.name = name;
    projectList.push(name);
  }
}
const Projects = () => {
  const getList = () => {
    return projectList;
  }
  const insertProject = (projectName) => {
    new TodoProject(projectName)
    projectListNav(projectList);
    projectOptions(projectList);
  }
  const createFunction = () => {
    const ProjectsDiv = document.createElement('div');
    projectsDiv.setAttribute('class', 'projects mr-3');

    for (let i = 0; i < projectList.length; i += 1) {
      const projectSection = document.createElement('div');
      projectSection.setAttribute('class', 'card p-3 mt-2');
      const projectName = document.createElement('p');
      projectName.setAttribute('class', 'project-text');
      projectName.innerHTML = projectList[i].name;
      const projectValue = document.createElement('p');
      projectValue.innerHTML = projectList[i].value;

      projectSection.appendChild(projectName);
      projectSection.appendChild(projectValue);
      ProjectsDiv.appendChild(projectSection);

      const detailsProjectButton = document.createElement('button');
      detailsProjectButton.innerHTML = 'View Details';
      detailsProjectButton.setAttribute('class', 'btn btn-primary project-button');

      projectSection.appendChild(detailsProjectButton);

      detailsProjectButton.addEventListener('click', () => {
        const toDoPageInstance = toDoPage();
        toDoPageInstance.displayToDo(projectList[i].name, projectList[i].value);
        document.querySelector('.projects').classList.add('hide-project');
      });
    }

    document.querySelector('.all-content').appendChild(ProjectsDiv);
  };

  const addProject = () => {
    const projectCard = document.createElement('div');
    projectCard.setAttribute('class', 'project-module card d-none');
    const projectForm = document.createElement('form');
    projectForm.id = 'projectForm';
    const projectFormH2 = document.createElement('h2');
    const projectFormTitle = document.createTextNode('Enter the Project Name:');
    projectFormH2.appendChild(projectFormTitle)
    projectForm.appendChild(projectFormH2);
    const projectLabel = document.createElement('label');
    const projectInput = document.createElement('input');
    projectInput.type = 'text';
    projectInput.setAttribute('placeholder', 'Add new project');
    projectInput.setAttribute('id', 'addproject');

    const submitProjectButton = document.createElement('button');
    submitProjectButton.setAttribute('class', 'btn btn-success save-btn');
    submitProjectButton.innerHTML = 'Submit';

    const cancelProjectButton = document.createElement('button');
    cancelProjectButton.setAttribute('class', 'btn btn-success cancel-btn');
    cancelProjectButton.innerHTML = 'Cancel';

    submitProjectButton.addEventListener('click', addToProjectList);
    cancelProjectButton.addEventListener('click', () => {document.querySelector('.project-module').classList.add('d-none');})
    projectLabel.appendChild(projectInput);
    projectForm.appendChild(projectLabel);
    projectForm.appendChild(submitProjectButton);
    projectForm.appendChild(cancelProjectButton);
    projectCard.appendChild(projectForm);
    document.querySelector('#content').appendChild(projectCard);
  };

  const addToProjectList = (e) => {
    e.preventDefault();
    const newProjectName = document.querySelector('#addproject').value;
    insertProject(newProjectName);
    document.querySelector('.project-module').classList.add('d-none');
    document.forms.projectForm.reset();
  };

  return { getList, insertProject, addProject, createFunction };
};

export default Projects;