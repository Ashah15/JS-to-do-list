import { projectList, projectOptions } from './dom-change';
import Projects from './Projects';
import './styles.css';

let projects = [];
class TodoProject {
  constructor(name = 'Default') {
    this.name = name;
    projects.push(name);
  }
}
class TodoItem {
  constructor(title,
    description,
    dueDate = 'default',
    priority = '5',
    notes = '',
    checklist = '',
    project = projects[0]) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist;
    this.project = project;
  }
}

let itemOne = new TodoItem('My work', 'na', new Date('2020-10-25T21:00'), '1', 'na', 'na');
console.log(itemOne);

window.onload = () => {
  const defaultProject = new TodoProject();
  new TodoProject('Yay')
  projectOptions(projects);
  projectList(projects);
  document.getElementById('formToggle').addEventListener('click', (e)=> {
    document.querySelector('.form-container').classList.remove('d-none');
  });
  document.querySelector('.form-container').addEventListener('click',(e)=>{
    if(e.path[0].classList[0] == 'form-container'){
      document.querySelector('.form-container').classList.add('d-none');
    }
  });
  let p = Projects();
  p.addProject();
  document.getElementById('projectToggle').addEventListener('click', (e)=> {
    document.querySelector('.project-module').classList.remove('d-none');
  });
  document.querySelector('.project-module').addEventListener('click',(e)=>{
    if(e.path[0].classList[0] == 'project-module'){
      document.querySelector('.project-module').classList.add('d-none');
    }
  });

}
