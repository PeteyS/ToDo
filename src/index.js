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
let old;
let swtch1=0;
let swtch2=0;

function todo(name,message,date){
    if (message == null){
        message = "";
    }
    if (date == null || date == ""){
        date = 'n/a';
    }
    todo.name = name;
    todo.message = message;
    todo.date = date;
    todo.identifier = identifier;
    identifier++;
    return {name,message,date,identifier};
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

function changeProjectNameAll(projectList,projectSet,todoList,newName,oldName){

    if(newName == oldName){
        return projectList,projectSet,todoList;
    }
    if(projectSet.has(newName)){
        projectSet.delete(oldName);
    }
    else{
        projectSet.add(newName);
        projectSet.delete(oldName);
    }
    for(let i=0;i<projectList.length;i++){
        if(projectList[i] == oldName){
            projectList[i] = newName;
        }
    }
    for(let i=0;i<todoList.length;i++){
        if(todoList[i].name == oldName){
            todoList[i].name = newName;
        }
    }
    return projectList,projectSet,todoList,newName;
}

function setList(list){ 
    let set = new Set(list);
    let newArr = Array.from(set);
    return newArr;
}


function todoDiv(obj){
    const todoContainer = document.createElement('div');
    const todoMessage = document.createElement('div');
    const todoDelete = document.createElement('div');
    const todoDate = document.createElement('div');
    const todoName = document.createElement('div');
    const todoIdentify = document.createElement('div');
    const todoEdit = document.createElement('div');


    todoContainer.classList.add('todoContainer');
    todoMessage.classList.add('todoMessage');
    todoDelete.classList.add('todoDelete');
    todoDate.classList.add('todoDate');
    todoName.classList.add("todoName");
    todoIdentify.classList.add('todoIdentify');
    todoEdit.classList.add('todoEdit');
    todoName.textContent = obj.name;
    todoIdentify.textContent = obj.identifier;
    todoMessage.textContent = obj.message;
    todoDate.textContent = obj.date;
    todoContainer.append(todoName,todoMessage,todoDate,todoIdentify,todoDelete,todoEdit);
    todoDelete.addEventListener('click',()=>{
        todoList = deleteTodo(obj,todoList);
        redrawTodo(todoList);
    })
    todoEdit.addEventListener('click',()=>{
        todoForm.style.display = 'block';
        todoChangeName.value = obj.name;
        old = obj.name;
        todoChangeText.value = obj.message;
        todoChangeDate.value = obj.date;
        console.log(obj.identifier);
    });
    todoForm.onsubmit = function(){
        /*for(let i=0;i<todoList.length;i++){
            if(obj.identifier == todoList[i].identifier){
                todoList[i].name = todoChangeName.value;
                todoList[i].message = todoChangeText.value;
                todoList[i].date = todoChangeDate.value;
                if(obj.name != old){
                    if(projectSet.has(obj.name) == false){
                        for(let i=0;i<todoList.length;i++){
                            if(todoList[i].name == old){
                                swtch1 = 1;
                                break;
                            }
                        }
                        if(swtch1 == 1){
                            projectSet.add(obj.name);
                            if(projectList.length>0){
                                projectList.unshift(obj.name);
                            }
                            else{
                                projectList.push(obj.name);
                            }  
                        }
                        else{
                            deleteProject(old,projectList,projectSet);
                            projectSet.add(obj.name);
                            if(projectList.length>0){
                                projectList.unshift(obj.name);
                            }
                            else{
                                projectList.push(obj.name);
                            }  
                        }
                    }
                    else if(projectSet.has(obj.name)){
                        for(let i=0;i<todoList.length;i++){
                            if(todoList[i].name == old){
                                swtch2 = 1;
                                break;
                            }
                        }
                        if(swtch2 == 1){
                            deleteProject(old,projectList,projectSet);
                        }
                    }
                }
            }
        }
        
        redrawTodo(todoList);
        redrawProject(projectList);

        todoForm.style.display = 'none';
        return false;
    */}
    todoSubmit.addEventListener('click',()=>{
        return false;
    });
    todoCancel.addEventListener('click',()=>{
        todoForm.style.display = 'block';
    });
    return todoContainer;
}

function projectDiv(name){ //should probably add list and set as parameters for reusability
    const projectContainer = document.createElement('div');
    const projectTitle = document.createElement('h1');
    const projectDelete = document.createElement('div');
    const projectEdit = document.createElement('div');
    projectContainer.classList.add('projectContainer');
    projectTitle.classList.add('projectTitle');
    projectDelete.classList.add('projectDelete');
    projectEdit.classList.add('projectEdit');
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
    });
    projectForm.onsubmit = function(){
        return false;
    }
    proSubmit.addEventListener('click',()=>{
        projectList,projectSet,todoList,name = changeProjectNameAll(projectList,projectSet,todoList,proChangeName.value,name);
        projectList = setList(projectList);
        redrawProject(projectList);
        redrawTodo(todoList)
        proChangeName.value = name;
        projectForm.style.display = 'none';
        return false;
    });
    projectCancel.addEventListener("click", ()=>{
        projectForm.style.dispaly = 'none';
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
    projectName.value = "";
    projectMessage.value = "";
    projectDate.value = "";
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

projectButton.addEventListener('click', ()=>{

})