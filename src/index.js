import removeIcon from './remove.png';
import editIcon from './edit.png'; 
import './style.css';



let today = new Date();
let dd = String(today.getDate()).padStart(2,'0');
let mm = String(today.getMonth()+1).padStart(2,"0");
let yyyy = today.getFullYear();
today = yyyy+ '-' + mm + '-' + dd;
let identifier = 0;
const projectName = document.querySelector('#projectName');
const projectMessage = document.querySelector("#projectMessage");
const projectDate = document.querySelector('#projectDate');
const submit = document.querySelector("#submit");
const form = document.querySelector('#form');
const show = document.querySelector('.show');
let todoList = [];
let projectSet = new Set();
let projectList = [];
const todayButton = document.querySelector('#today');
const inboxButton = document.querySelector('#inbox');
const projectButton = document.querySelector('#project');
const projectShow = document.querySelector(".projectShow");
const todoForm = document.querySelector('#todoForm');
const projectForm = document.querySelector('#projectForm');
const proChangeName = document.querySelector('#projectChangeName');
const proSubmit = document.querySelector('#projectSubmit');
const projectCancel = document.querySelector('#projectCancel');
const todoSubmit = document.querySelector('#todoSubmit');
const todoCancel =document.querySelector('#todoCancel');
const todoChangeName = document.querySelector("#todoChangeName");
const todoChangeText = document.querySelector('#todoChangeText');
const todoChangeDate = document.querySelector("#todoChangeDate");
let objRefresh = {name:"",message:"",date:"",identifier:""};
let name2;
let swtch1=0;
let swtch2=0;
const add = document.querySelector('.add');
const blackout = document.querySelector('#blackout');
const fromCancel = document.querySelector('#formCancel');
const menuButton = document.querySelector('#menuButton');
const sideBar = document.querySelector('#sideBar');
const mainTitle = document.querySelector('#mainTitle');
const menuButtonIcon = document.querySelector('#menuButtonIcon');
let currentChoice = ''; //this will be used to default that todo project name or date, depending on tab clicked
const sideBarIcons = document.querySelectorAll('.sideBarIcon');
const sideBarItems = document.querySelectorAll('.sideBarItems');

sideBarItems.forEach(element => {
    element.addEventListener('mouseover',(event)=>{
        element.getElementsByTagName('img')[0].style.background = 'lightblue';
        element.getElementsByTagName('img')[0].style.borderRadius = '20%';
        element.getElementsByTagName('div')[0].style.background = 'antiquewhite';
        element.getElementsByTagName('div')[0].style.borderRadius = '15px';
    })
    element.addEventListener('mouseout',()=>{
        element.getElementsByTagName('img')[0].style.background = 'rgb(230, 182, 124)';
        element.getElementsByTagName('img')[0].style.borderRadius = '0%';
        element.getElementsByTagName('div')[0].style.background = 'rgb(230, 182, 124)';
    })
});


menuButton.addEventListener('click',()=>{
    console.log(sideBar.style.flex);
    if(sideBar.style.flex == '1 1 0%' || sideBar.style.flex == ""){
        sideBar.style.flex = '0 1 0%';
        sideBar.style.minWidth = '0px';
        mainTitle.style.marginLeft = '0px';
        menuButtonIcon.style.background = 'rgb(241, 224, 202)';
        console.log(sideBar.style.flex);
    }
    else{
        sideBar.style.minWidth = '250px';
        sideBar.style.flex = '1 1 0%';
        mainTitle.style.marginLeft = '250px';
        menuButtonIcon.style.background = 'lightblue';
    }
})

function showForm(){
form.style.display = 'block';
blackout.style.display = 'block';
}

function hideForm(){
    clearForm();
    form.style.display = 'none';
    blackout.style.display = 'none';
}

function clearForm(){
    projectName.value = "";
    projectMessage.value = "";
    projectDate.value = "";
}

function todo(name,message,date){
    if (message == null){
        message = "";
    }
    if (date == null || date == ""){
        date = 'n/a';
    }
    identifier : identifier;
    identifier++;
    return {
        name:name,
        message:message,
        date:date,
        identifier};
}

function redrawTodo(list){
    show.innerHTML = "";
    for(let i=0;i<list.length;i++){
        show.append(todoDiv(list[i]));
    } 
}

function redrawProject(proList){
    projectShow.innerHTML = "";
    for(let i=0;i<proList.length;i++){
        projectShow.append(projectDiv(proList[i]));
    }
}

function deleteProject(objName,proList,proSet){
    for(let i=0;i<proList.length;i++){
        if(objName == proList[i]){
            proList.splice(i,1);
            if(proSet.has(objName)){
                proSet.delete(objName)
            }
        }
    }
    return proList,proSet;
}

function deleteTodo(item,todoList){
    for(let i=0;i<todoList.length;i++){
        if(item.identifier == todoList[i].identifier){
            todoList.splice(i,1);
        }
    }
    return todoList;
}

function deleteWholeProject(objName,todoList,proList,proSet){
    for(let i=0;i<todoList.length;i++){
        if(todoList[i].name == objName){
            deleteTodo(todoList[i],todoList,proSet);
            i--;
        }
    }
    proList = deleteProject(objName,proList,proSet);
    return todoList,proList,proSet;
}


function setList(list){ 
    let set = new Set(list);
    let newArr = Array.from(set);
    return newArr;
}

function addProject(name,projectList,projectSet){
    if(!name == ""){
        if(projectList.length == 0){
            projectList.push(name);
        }
        else{
            projectList.unshift(name);
            projectList = setList(projectList);
        }
        projectSet.add(name);
    }
}


function todoDiv(obj){

    const todoContainer = document.createElement('div');
    const todoMessage = document.createElement('div');
    const todoDelete = document.createElement('div');
    const todoDate = document.createElement('div');
    const todoName = document.createElement('div');
    const todoIdentify = document.createElement('div');
    const todoEdit = document.createElement('div');
    const rIcon = new Image();
    const eIcon = new Image();
    rIcon.src = removeIcon;
    eIcon.src = editIcon;
    rIcon.classList.add('deleteIcon');
    eIcon.classList.add('editIcon');

    todoContainer.classList.add('todoContainer');
    todoMessage.classList.add('todoMessage');
    todoDelete.classList.add('todoDelete');
    todoDelete.appendChild(rIcon);
    todoDate.classList.add('todoDate');
    todoName.classList.add("todoName");
    todoIdentify.classList.add('todoIdentify');
    todoEdit.classList.add('todoEdit');
    todoEdit.appendChild(eIcon);
    todoName.textContent = obj.name;
    todoIdentify.textContent = obj.identifier;
    todoMessage.textContent = obj.message;
    todoDate.textContent = obj.date;
    todoContainer.append(todoName,todoMessage,todoDate,todoDelete,todoEdit);
    todoDelete.addEventListener('click',()=>{
        todoList = deleteTodo(obj,todoList);
        redrawTodo(todoList);
    })
    todoEdit.addEventListener('click',()=>{

        objRefresh.name = obj.name;
        objRefresh.date = obj.date;
        objRefresh.message = obj.message;
        objRefresh.identifier = obj.identifier;

        todoChangeName.value = obj.name;
        todoChangeText.value = obj.message;
        todoChangeDate.value = obj.date;

        todoForm.style.display = 'block';

    });
    todoForm.onsubmit = function(){
        objRefresh.message = todoChangeText.value;
        objRefresh.date = todoChangeDate.value;
        objRefresh.name = todoChangeName.value;
        for(let i=0;i<todoList.length;i++){
            if(todoList[i].identifier == objRefresh.identifier){
                todoList[i].name = objRefresh.name;
                todoList[i].message = objRefresh.message;
                todoList[i].date = objRefresh.date;
            }
        }
        if(!projectSet.has(objRefresh.name)){
            if(objRefresh.name != ""){
                projectSet.add(objRefresh.name);
                projectList.unshift(objRefresh.name);
            }
        }
        redrawProject(projectList);
        redrawTodo(todoList);
        todoForm.style.display = 'none';
        return false;
    }
    todoSubmit.addEventListener('click',()=>{
        todoForm.style.display = 'none';
        return false;
    });
    todoCancel.addEventListener('click',()=>{
        todoForm.style.display = 'none';
    });
    return todoContainer;
}

function projectNameEdit(projectList,projectSet,todoList,newName,oldName){
    if(newName == oldName){
        return projectList,projectSet,todoList,newName;
    }
    else if(projectSet.has(newName)){
        for(let i=0;i<todoList.length;i++){
            if(todoList[i].name == oldName){
                todoList[i].name = newName;
            }
        }
        deleteProject(oldName,projectList,projectSet);
        return projectList,projectSet,todoList,newName;
    }
    else if(projectSet.has(newName) == false){
        if(newName != ""){
            addProject(newName,projectList,projectSet)
            for(let i=0;i<todoList.length;i++){
                if(todoList[i].name == oldName){
                    todoList[i].name = newName;
                }
            }
        }
        deleteProject(oldName,projectList,projectSet);
        return projectList,projectSet,todoList,newName;
    }
    else{
        return projectList,projectSet,todoList,newName;
    }
}

function projectDiv(name){ //should probably add list and set as parameters for reusability
    const rIcon = new Image();
    const eIcon = new Image();
    rIcon.src = removeIcon;
    eIcon.src = editIcon;
    rIcon.classList.add('deleteIcon');
    eIcon.classList.add('editIcon');

    const projectContainer = document.createElement('div');
    const projectTitle = document.createElement('h1');
    const projectDelete = document.createElement('div');
    const projectEdit = document.createElement('div');
    projectContainer.classList.add('projectContainer');
    projectTitle.classList.add('projectTitle');
    projectDelete.classList.add('projectDelete');
    projectDelete.append(rIcon);
    projectEdit.classList.add('projectEdit');
    projectEdit.appendChild(eIcon);
    projectTitle.textContent = name;
    projectContainer.append(projectTitle,projectDelete,projectEdit);
    projectContainer.addEventListener('click',()=>{
        redrawTodo(todoList);
    });
    projectDelete.addEventListener('click',()=>{
        todoList,projectList,projectSet = deleteWholeProject(name,todoList,projectList,projectSet);
        redrawTodo(todoList);
        redrawProject(projectList);
    });
    projectEdit.addEventListener('click',()=>{
        projectForm.style.display = 'block';
        proChangeName.value = name;
        name2 = name;
    });
    projectForm.onsubmit = function(){
        if(name2 != proChangeName.value){
            if(projectSet.has(proChangeName.value)){
                for(let i=0;i<todoList.length;i++){
                    if(todoList[i].name == name2){
                        todoList[i].name = proChangeName.value;
                    }
                }
                projectList,projectSet = deleteProject(name2,projectList,projectSet);
            }
            else{
                projectList.unshift(proChangeName.value);
                for(let i=0;i<todoList.length;i++){
                    if(todoList[i].name == name2){
                        todoList[i].name = proChangeName.value;
                    }
                }
                projectList,projectSet = deleteProject(name2,projectList,projectSet);
            }
        }
        redrawProject(projectList);
        redrawTodo(todoList);
        projectForm.style.display = 'none';
        return false;
    }
    proSubmit.addEventListener('click',()=>{
        return false;
    });
    projectCancel.addEventListener("click", ()=>{
        projectForm.style.display = 'none';
    });
    return projectContainer;
}

form.onsubmit = function(){
    const object = todo(projectName.value, projectMessage.value, projectDate.value);
    todoList.unshift(object);
    if(!object.name == ""){
        if(projectList.length == 0){
            projectList.push(object.name);
        }
        else{
            projectList.unshift(object.name);
            projectList = setList(projectList);
        }
        if(projectSet.has(object.name) == false){
            if(projectShow.firstChild){
                projectShow.insertBefore(projectDiv(object.name),projectShow.firstChild);
            }
            else{
                projectShow.append(projectDiv(object.name));
            }
        }
        projectSet.add(object.name);
    }

    if(show.firstChild){
        show.insertBefore(todoDiv(object),show.firstChild)
    }
    else{
        show.append(todoDiv(object));
    }
    hideForm();
    return false;
}

submit.addEventListener('click',()=>{
    return false;
});

inboxButton.addEventListener('click', ()=>{
    redrawTodo(todoList);
});

todayButton.addEventListener('click', ()=>{
    show.innerHTML = "";
    for(let i=0;i<todoList.length;i++){
        if(todoList[i].date == today){
            show.append(todoDiv(todoList[i]));
        }
    } 
});

add.addEventListener('click',()=>{
    showForm();
});

fromCancel.addEventListener('click',()=>{
    hideForm();
});

blackout.addEventListener('click',()=>{
    hideForm();
});

projectButton.addEventListener('click', ()=>{
    show.innerHTML = "";
    for(let i=0;i<projectList.length;i++){
        show.append(projectDiv(projectList[i]));
    }
})