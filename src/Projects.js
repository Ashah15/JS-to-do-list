


function projects(name, value) {
  this.name = name;
  this.value = value;
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
      allProjectsDiv.appendChild(projectSection);

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

  const addTask = () => {
    const taskCard = document.createElement('div');
    taskCard.setAttribute('class', 'card task-module');

    const taskInput = document.createElement('input');
    taskInput.type = 'text';
    taskInput.setAttribute('placeholder', 'Add new task');
    taskInput.setAttribute('id', 'addtask');

    const submitTaskButton = document.createElement('button');
    submitTaskButton.setAttribute('class', 'btn btn-success');
    submitTaskButton.innerHTML = 'Submit';

    submitTaskButton.addEventListener('click', addToProjectList);

    taskCard.appendChild(taskInput);
    taskCard.appendChild(submitTaskButton);
    document.body.appendChild(taskCard);
  };

  const addToProjectList = () => {
    const newProjectName = document.querySelector('#addProject').value;
    const lastElement = projectList.length + 1;
    const projectInstance = new Projects(newProjectName, lastElement);

    projectList.push(projectInstance);
  };

  return { addTask, createFunction };
};

export default Projects;