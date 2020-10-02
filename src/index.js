import domchange from './dom-change';
import Projects from './Projects';
import './styles.css';
import toDoPage from './todo.js';

const importedProject = Projects();
const importedtoDoPage = toDoPage();

window.onload = () => {
  const projects = importedProject.getList();
  domchange.projectOptions(projects);
  domchange.projectListNav(projects);
  importedProject.addProject();
  domchange.addListeners();
  importedtoDoPage.displayToDo();
};
