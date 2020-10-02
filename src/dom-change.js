const ldb = require('./local-storage').default;

let self = module.exports = {
  projectListNav: (projects) => {
    let project = '';
    projects.forEach((val) => {
      project += `
    <li class="project"><h4 data-info="${val}">${val}</h4><span class="project-nav-options">&raquo;</span></li>
    `
    });
    project += `
    <li class="all-project project"><h4 data-info="all-projects">View All Projects</h4></li>
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
  projectListRightInfo: (projectList) => {
    let rightSection = document.querySelector('.right-info .right-section:first-child');
    let projectDOM = '';
    projectList.forEach((project)=>{
      projectDOM += `
        <h4>${project}</h4>
      `
    });
    rightSection.innerHTML = projectDOM;
  },
  changeNavCurrentActive: (node)=> {
    let currentActive = document.querySelector('li.project[active]')
    if(currentActive){
      currentActive.removeAttribute('active');
      node.setAttribute('active', '');
    }else {
      console.log(node)
      node.setAttribute('active', '');
    }
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

  let allProjects = document.querySelectorAll('.projects .project h4');
  allProjects.forEach((project)=> {
    project.addEventListener('click',(e)=> {
      if(e.target.getAttribute('data-info') === 'all-projects'){
        let projectList = ldb().getAr('projectList')
        self.projectListRightInfo(projectList);
      }
      self.changeNavCurrentActive(e.target);
    })
  });
  },
}