


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
    projectCard.setAttribute('class', 'card project-module');

    const projectInput = document.createElement('input');
    projectInput.type = 'text';
    projectInput.setAttribute('placeholder', 'Add new project');
    projectInput.setAttribute('id', 'addproject');

    const submitProjectButton = document.createElement('button');
    submitProjectButton.setAttribute('class', 'btn btn-success save-btn');
    submitProjectButton.innerHTML = 'Submit';

    submitProjectButton.addEventListener('click', addToProjectList);

    projectCard.appendChild(projectInput);
    projectCard.appendChild(submitProjectButton);
    document.body.appendChild(projectCard);
  };

  const addToProjectList = () => {
    const newProjectName = document.querySelector('#addproject').value;
    const projectInstance = new TodoProject(newProjectName);
    console.log (projectInstance);
  };

  return { addProject, createFunction };
};

export default Projects;