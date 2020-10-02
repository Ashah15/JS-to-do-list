import domchange from './dom-change';
import Projects from './Projects';
import './styles.css';

const importedProject = Projects();

window.onload = () => {
  const projects = importedProject.getList();
  domchange.projectOptions(projects);
  domchange.projectListNav(projects);
  importedProject.addProject();
  domchange.addListeners();
};
