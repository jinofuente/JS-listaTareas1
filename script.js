// todo los elementos que vamos a usar lo vamos a seleccionar
const input = document.querySelector('input');
const addBtn = document.querySelector('.btn-add');
const ul = document.querySelector('ul');
const empty = document.querySelector('.empty');

addBtn.addEventListener("click", (e) => {
    // se actualiza la pagina al hacer clic . es porque el btn esta dentro del form
    //la continuacion del comentario de abajo: para q no se recarge se utiliza preventDefault()
    e.preventDefault();    

    const text = input.value; // cuando se pique en el botn va agarrar el valor que este dentro del imput

    //INICIO DE AGREGANDO ELEMENTOS AL HTML
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);
    //FIN DE AGREGANDO ELEMENTOS AL HTML

    input.value = "";
})

// creando funcion para crear boton de eliminar y eliminar el item
function addDeleteBtn(){
    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "X";   // agregand contenido al btn
    deleteBtn.className = "btn-delete";   // agregando stilo

    deleteBtn.addEventListener("click", (e) =>{
        //target = se refiere al boton
        //parentElement = elimina  el elemento de arriba el li
        const item = e.target.parentElement;
        //removeChild = del padre elimina al hijo
        ul.removeChild(item);
    });
    return deleteBtn;
}