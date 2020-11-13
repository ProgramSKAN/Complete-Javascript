class DOMHelper {
  static clearEventListeners(element) {
    const clonedElement = element.cloneNode(true);
    element.replaceWith(clonedElement);
    return clonedElement;
  }

  static moveElement(elementId, newDestinationSelector) {
    const element = document.getElementById(elementId);
    const destinationElement = document.querySelector(newDestinationSelector);
    destinationElement.append(element);
  }
}

class Component {
  constructor(hostElementId, insertBefore = false) {
    if (hostElementId) {
      this.hostElement = document.getElementById(hostElementId);
    } else {
      this.hostElement = document.body;
    }
    this.insertBefore = insertBefore;
  }

  detach() {
    if (this.element) {
      this.element.remove();
      // this.element.parentElement.removeChild(this.element);
    }
  }

  attach() {
    this.hostElement.insertAdjacentElement(
      this.insertBefore ? 'afterbegin' : 'beforeend',
      this.element
    );
  }
}

class Tooltip extends Component {
  constructor(closeNotifierFunction, text) {
    super();
    this.closeNotifier = closeNotifierFunction;
    this.text = text;
    this.create();
  }

  closeTooltip = () => {
    this.detach();
    this.closeNotifier();
  };

  create() {
    const tooltipElement = document.createElement('div');
    tooltipElement.className = 'card';
    tooltipElement.textContent = this.text;
    tooltipElement.addEventListener('click', this.closeTooltip);
    this.element = tooltipElement;
  }
}

class ProjectItem {
  hasActiveTooltip = false;

  constructor(id, updateProjectListsFunction, type) {
    this.id = id;
    this.updateProjectListsHandler = updateProjectListsFunction;
    this.connectMoreInfoButton();
    this.connectSwitchButton(type);
  }

  showMoreInfoHandler() {
    if (this.hasActiveTooltip) {
      return;
    }
    const projectElement = document.getElementById(this.id);
    const tooltipText = projectElement.dataset.extraInfo;
    const tooltip = new Tooltip(() => {
      this.hasActiveTooltip = false;
    }, tooltipText);
    tooltip.attach();
    this.hasActiveTooltip = true;
  }

  connectMoreInfoButton() {
    const projectItemElement = document.getElementById(this.id);
    const moreInfoBtn = projectItemElement.querySelector(
      'button:first-of-type'
    );
    moreInfoBtn.addEventListener('click', this.showMoreInfoHandler.bind(this));
  }

  connectSwitchButton(type) {
    const projectItemElement = document.getElementById(this.id);
    let switchBtn = projectItemElement.querySelector('button:last-of-type');
    switchBtn = DOMHelper.clearEventListeners(switchBtn);
    switchBtn.textContent = type === 'active' ? 'Finish' : 'Activate';
    switchBtn.addEventListener(
      'click',
      this.updateProjectListsHandler.bind(null, this.id)
    );
  }

  update(updateProjectListsFn, type) {
    this.updateProjectListsHandler = updateProjectListsFn;
    this.connectSwitchButton(type);
  }
}

class ProjectList {
  projects = [];

  constructor(type) {
    this.type = type;
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    for (const prjItem of prjItems) {
      this.projects.push(
        new ProjectItem(prjItem.id, this.switchProject.bind(this), this.type)
      );
    }
    console.log(this.projects);
  }

  setSwitchHandlerFunction(switchHandlerFunction) {
    this.switchHandler = switchHandlerFunction;
  }

  addProject(project) {
    this.projects.push(project);
    DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
    project.update(this.switchProject.bind(this), this.type);
  }

  switchProject(projectId) {
    // const projectIndex = this.projects.findIndex(p => p.id === projectId);
    // this.projects.splice(projectIndex, 1);
    this.switchHandler(this.projects.find(p => p.id === projectId));
    this.projects = this.projects.filter(p => p.id !== projectId);
  }
}

class App {
  static init() {
    const activeProjectsList = new ProjectList('active');
    const finishedProjectsList = new ProjectList('finished');
    activeProjectsList.setSwitchHandlerFunction(
      finishedProjectsList.addProject.bind(finishedProjectsList)
    );
    finishedProjectsList.setSwitchHandlerFunction(
      activeProjectsList.addProject.bind(activeProjectsList)
    );
  }
}

App.init();



//---------------------LOCATION  OBJECT---------------------------------------
// window.location;//gives url of the page
// location.href='https://www.google.com';//page redirects to google. clicking back button goes to before page
// location.replace('https://www.google.com');//back button wont work
// location.assign('https://www.google.com');//same as location.href='https://www.google.com';
// location.host;//host on which page is running. ex:google.com
// location.origin;//https://www.google.com    full domain including protocal
// location.pathname;//"/images"  if url is https://www.google.com/images 


// //---------------------HISTORY  OBJECT---------------------------------------
// window.history;//LOCATION allows to edit browser history by navigation or replacing, whereas HISTORY allows to interact with that HISTORY
// history.back();//previous page. ie. to go back to the page where it came from
// history.forward();//next page
// history.length;//number of steps of back forth
// history.go(5);//to go back 5 steps


// //-------------NAVIGATOR OBJECT----------------------
// window.navigator;//to access browser and os
// navigator.userAgent;//browser name
// navigator.clipboard;//to add someting to clipboard
// navigator.geolocation.getCurrentPosition((data)=>{console.log(data)});//GPS

//------------DATES-----------------------
const date=new Date();//current date and time.  mon sept 24 2020 10:19:50 (central european summer time)
date.getDate();//24
date.getDay();//1
date.getTime();//ms past from JAN 1st 1970

const date1=new Date('07/11/19');
date-date1;//diff in msec
(date-date1)/1000;//diff in sec
(date-date1)/1000/60;//diff in min
(date-date1)/1000/60/60;//diff in hours
(date-date1)/1000/60/60/24;//diff in days


//-------------ERROR OBJECT--------------------important of custom error handling----------
throw 'an error'//only message
throw {error:'message'}
throw new Error('something went wrong............')//message with stack trace like line no
const customeError=new Error('something went wrong............');
customeError.message//'something went wrong............'
customeError.stack//stack trace if there else undefined
customeError.name//"Error"
customeError.code=404;
customeError.code;//404
console.dir(customeError);




