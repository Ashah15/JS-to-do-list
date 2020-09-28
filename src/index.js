import './styles.css';
class TodoProject {
  constructor(name = 'Default') {
    this.name = name;
  }
}
class TodoItem {
  constructor(title,
    description,
    dueDate = 'default',
    priority = '5',
    notes = '',
    checklist = '',
    project = new TodoProject()) {
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
let itemOne = new TodoItem('My work', 'na', new Date('2020-10-25T21:00'), '1', 'na', 'na');
console.log(itemOne)