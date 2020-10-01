module.exports = {
  projectListNav: (projects) => {
    let project = '';
    projects.forEach((val) => {
      project += `
    <li class="project"><h4>${val}</h4><span class="project-nav-options">&raquo;</span></li>
    `
    });
    project += `
    <li class="all-project project" data-info="all-projects"><h4>View All Projects</h4></li>
    `
    document.querySelector('.projects').innerHTML = project;
  },
  projectOptions: (projects)=> {
    let formProject = document.forms.todoForm.project;
    let projectOptions = '';
    projects.forEach((val, i) => {
      projectOptions += `<option value="${val}">${val}</option>`;
    })
    formProject.innerHTML = projectOptions;
  },
  addListeners: () => {
    document.getElementById('formToggle').addEventListener('click', (e)=> {
    document.querySelector('.form-container').classList.remove('d-none');
  });
  document.querySelector('.form-container').addEventListener('click',(e)=>{
    if(e.target.classList[0] == 'form-container'){
      document.querySelector('.form-container').classList.add('d-none');
    }
  });
 
  document.getElementById('projectToggle').addEventListener('click', (e)=> {
    document.querySelector('.project-module').classList.remove('d-none');
  });
  document.querySelector('.project-module').addEventListener('click',(e)=>{
    if(e.target.classList[0] == 'project-module'){
      document.querySelector('.project-module').classList.add('d-none');
    }
  });
  },
}