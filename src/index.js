import { addListeners, projectListNav, projectOptions } from './dom-change';
import Projects from './Projects';
import './styles.css';

let importedProject = Projects();

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
  let projects = importedProject.getList();
  projectOptions(projects);
  projectListNav(projects);
  importedProject.addProject();
  addListeners();

}
