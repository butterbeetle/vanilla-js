const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos(){
    localStorage.setItem( TODOS_KEY ,JSON.stringify(toDos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter( toDo => toDo.id !== parseInt(li.id) );
    saveToDos();
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;

    const span = document.createElement("span");
    span.innerText = newTodo.text;

    const i = document.createElement(`i`);
    i.className=`fas fa-times fa-2x`;
    i.addEventListener("click", deleteTodo);

    li.appendChild(i);
    li.appendChild(span);

    toDoList.appendChild(li);
}

function handleTodoSubmit( event ){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value ="";
    const newTodoObj ={
        text:newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintTodo( newTodoObj );
    saveToDos();
}

toDoForm.addEventListener("submit",handleTodoSubmit);

const savedTodos = localStorage.getItem( TODOS_KEY);

if(savedTodos){
    const parsedToDos = JSON.parse(savedTodos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}