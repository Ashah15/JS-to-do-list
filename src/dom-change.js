const ldb = require('./local-storage').default;

const domChanges = {
  projectListNav: (projects) => {
    let project = '';
    projects.forEach((val) => {
      project += `
    <li class="project" data-info="${val}"><h4>${val}</h4><span class="project-nav-options">&raquo;</span></li>
    `;
    });
    project += `
    <li class="all-project project" data-info="all-projects"><h4>View All Projects</h4></li>
    `;
    document.querySelector('.projects').innerHTML = project;
  },
  projectOptions: (projects) => {
    const formProject = document.forms.todoForm.project;
    let projectOptions = '';
    projects.forEach((val) => {
      projectOptions += `<option value="${val}">${val}</option>`;
    });
    formProject.innerHTML = projectOptions;
  },
  projectListRightInfo: (projectList) => {
    const rightSection = document.querySelector('.right-info .right-section:first-child');
    let projectDOM = '';
    projectList.forEach((project) => {
      projectDOM += `
        <h4>${project}</h4>
      `;
    });
    rightSection.innerHTML = projectDOM;
  },
  changeNavCurrentActive: (node) => {
    const currentActive = document.querySelector('li.project[active]');
    if (currentActive) {
      currentActive.removeAttribute('active');
      node.setAttribute('active', '');
    } else {
      node.setAttribute('active', '');
    }
  },
  invokeListeners: () => {
    domChanges.addListeners();
  },
  navListeners: () => {
    const allProjects = document.querySelectorAll('.projects .project');
    allProjects.forEach((project) => {
      project.addEventListener('click', (e) => {
        const li = e.target.classList.length === 0 ? e.target.parentNode : e.target;
        if (li.getAttribute('data-info') === 'all-projects') {
          const projectList = ldb().getAr('projectList');
          console.log('click');
          domChanges.projectListRightInfo(projectList);
        }
        domChanges.changeNavCurrentActive(li);
      });
    });
  },
  addListeners: () => {
    document.getElementById('formToggle').addEventListener('click', () => {
      document.querySelector('.form-container').classList.remove('d-none');
    });
    document.querySelector('.form-container').addEventListener('click', (e) => {
      if (e.target.classList[0] === 'form-container') {
        document.querySelector('.form-container').classList.add('d-none');
      }
    });

    document.getElementById('projectToggle').addEventListener('click', () => {
      document.querySelector('.project-module').classList.remove('d-none');
    });
    document.querySelector('.project-module').addEventListener('click', (e) => {
      if (e.target.classList[0] === 'project-module') {
        document.querySelector('.project-module').classList.add('d-none');
      }
    });
    domChanges.navListeners();
  },
};


export default domChanges;