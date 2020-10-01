import { addListeners, projectListNav, projectOptions } from './dom-change';
import Projects from './Projects';
import './styles.css';

let importedProject = Projects();

window.onload = () => {
  let projects = importedProject.getList();
  projectOptions(projects);
  projectListNav(projects);
  importedProject.addProject();
  addListeners();

}
