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

    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;

    li.appendChild(p);
    ul.appendChild(li);

    input.value = "";
})