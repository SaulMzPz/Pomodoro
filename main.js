const tasks = [];//Para almacenar las tareas nuevas
let tme = 0;//Cuenta regresiva
let timer = null;//
let timerBreak = null;//timer para los 5 min de descanso
let current = null;//Tarea actual

const bAdd = document.querySelector("#bAdd");//Boton de agregar
const itTask = document.querySelector("#itTask");//Caja de texto
const form = document.querySelector("#form");//Formulario

form.addEventListener("submit", (e) =>{
    e.preventDefault(); //Evita que el evento submit haga lo q hace por defecto
    if(itTask.value != ""){ //si la caja de texto no esta vacia
        createTask(itTask.value);//se manda llamar a la funcion createTask y se le entrega lo que hay en la caja de texto
        itTask.value = ""; //la caja de texto queda vacia
        renderTasks();
    }
});

function createTask(value){//Constructor de la funcion createTask recibe value
    const newTask = {//crea una nueva tarea con los siguientes atributos
        id:(Math.random() * 100).toString(36).slice(3),//genera un id aleatorio
        title:value,//titulo de la tarea sera value 
        completed:false,//no esta completada
    };

    tasks.unshift(newTask);//lo agregamos al arreglo tasks
}

function renderTasks(){//toma las tareas y genera html
    const html = tasks.map(tasks => { //mapea el arreglo tasks y crea una funcion
        return `
            <div class="task">
                <div class="completed">
                    ${tasks.completed ? 
                        `<span class="done">Done</span>` :
                        `<button class="start-button" data-id="${tasks.id}">Start</button>`
                    }</div>
                <div class="title">${tasks.title}</div>
            </div>
        `;//Esta funcion genera este html
    });

    const tasksContainer = document.querySelector("#task");
    tasksContainer.innerHTML = html.join('');
}