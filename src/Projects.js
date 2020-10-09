import domchange from './dom-change';
import localDB from './local-storage';

const ldb = localDB();

class TodoProject {
  constructor(name = 'Default') {
    this.name = name;
    const projectList = ldb.getAr('projectList');
    projectList.push(name);
    ldb.setAr('projectList', projectList);
  }
}
const Projects = () => {
  const getList = () => {
    if (ldb.getAr('projectList') == null) {
      ldb.setAr('projectList', ['Default']);
    }
    return ldb.getAr('projectList');
  };
  const insertProject = (projectName) => {
    const newProject = new TodoProject(projectName);
    const projectList = ldb.getAr('projectList');
    domchange.projectListNav(projectList);
    domchange.projectOptions(projectList);
  };
  const addToProjectList = (e) => {
    e.preventDefault();
    if (document.forms.projectForm.reportValidity()) {
      const newProjectName = document.querySelector('#addproject').value;
      const dataUpdate = e.target.getAttribute('data-update');
      const projectList = ldb.getAr('projectList');
      if (dataUpdate) {
        projectList[dataUpdate] = newProjectName;
        e.target.removeAttribute('data-update');
        ldb.setAr('projectList', projectList);
        domchange.projectListNav(projectList);
        domchange.projectOptions(projectList);
        e.target.innerHTML = 'save';
        document.forms.projectForm.querySelector('h2').innerHTML = 'Enter the Project Name:';
        domchange.projectSecondRightInfo(projectList[dataUpdate], dataUpdate);
      } else {
        insertProject(newProjectName);
      }
      domchange.projectListRightInfo(projectList);
      document.querySelector('.project-module').classList.add('d-none');
      document.forms.projectForm.reset();
    }
    domchange.navListeners();
  };

  const addProject = () => {
    const projectCard = document.createElement('div');
    projectCard.setAttribute('class', 'project-module card d-none');
    const projectForm = document.createElement('form');
    projectForm.id = 'projectForm';
    const projectFormH2 = document.createElement('h2');
    const projectFormTitle = document.createTextNode('Enter the Project Name:');
    projectFormH2.appendChild(projectFormTitle);
    projectForm.appendChild(projectFormH2);
    const projectLabel = document.createElement('label');
    const projectInput = document.createElement('input');
    projectInput.type = 'text';
    projectInput.setAttribute('placeholder', 'Add new project');
    projectInput.setAttribute('id', 'addproject');
    projectInput.setAttribute('minlength', '3');
    projectInput.required = true;
    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('project-form-buttons', 'cta-btns');
    const submitProjectButton = document.createElement('button');
    submitProjectButton.setAttribute('class', 'btn btn-success save-btn');
    submitProjectButton.innerHTML = 'Submit';

    const cancelProjectButton = document.createElement('button');
    cancelProjectButton.setAttribute('class', 'btn btn-success cancel-btn');
    cancelProjectButton.innerHTML = 'Cancel';

    submitProjectButton.addEventListener('click', addToProjectList);
    cancelProjectButton.addEventListener('click', (e) => {
      e.preventDefault();
      document.forms.projectForm.querySelector('h2').innerHTML = 'Enter the Project Name:';
      submitProjectButton.innerHTML = 'Submit';
      submitProjectButton.removeAttribute('data-update');
      document.querySelector('.project-module').classList.add('d-none');
    });
    projectLabel.appendChild(projectInput);
    projectForm.appendChild(projectLabel);
    buttonDiv.appendChild(submitProjectButton);
    buttonDiv.appendChild(cancelProjectButton);
    projectForm.appendChild(buttonDiv);
    projectCard.appendChild(projectForm);
    document.querySelector('#content').appendChild(projectCard);
  };

  return {
    getList, insertProject, addProject,
  };
};

export default Projects;