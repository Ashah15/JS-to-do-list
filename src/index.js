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
// document.getElementById('tw-b').addEventListener('click', (e) => {
//   var formEl = document.forms.tw;
//   var formData = new FormData(formEl);
//   var date = formData.get('date');
//   console.log(date)
//   // e.
// })
new TodoProject('Yay')

let itemOne = new TodoItem('My work', 'na', new Date('2020-10-25T21:00'), '1', 'na', 'na');
console.log(itemOne);

window.onload = () => {
  const defaultProject = new TodoProject();
  let formProject = document.forms.todoForm.project;
  formProject.innerHTML = `<option value=${projects[0]}>${projects[0]}</option>`;
   
  let project = '';
  projects.forEach((val) => {
    project += `
    <div class="project"><a href="#">${val}</a></div>
    `
  });
  document.querySelector('.projects').innerHTML += project
  console.log(project)
}
