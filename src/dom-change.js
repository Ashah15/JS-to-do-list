module.exports = {
  projectListNav: (projects) => {
    let project = '';
    projects.forEach((val) => {
      project += `
    <div class="project"><a href="#">${val}</a></div>
    `
    });
    document.querySelector('.projects').innerHTML = project
  },
  projectOptions: (projects)=> {
    let formProject = document.forms.todoForm.project;
    let projectOptions = '';
    projects.forEach((val, i) => {
      projectOptions += `<option value="${val}">${val}</option>`;
    })
    formProject.innerHTML = projectOptions;
  }
}