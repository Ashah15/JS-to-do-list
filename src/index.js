import { addListeners, projectListNav, projectOptions } from './dom-change';
import Projects from './Projects';
import './styles.css';

let importedProject = Projects();
let projects = importedProject.getList();

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

window.onload = () => {
  if(importedProject.getList().length == 0){
    importedProject.insertProject('Default');
  }else {
    console.log(importedProject.getList())
  }

  projectOptions(projects);
  projectListNav(projects);
  importedProject.addProject();
  addListeners();

}
