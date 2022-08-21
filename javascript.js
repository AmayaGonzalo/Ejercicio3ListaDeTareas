let btnAgregar = document.querySelector("#btnAgregar");
let listaTareas = document.querySelector("#listaTareas");
let ingresar = document.getElementById("ingresar");

function agregarElemento() {
  let elem = document.createElement("li");
  listaTareas.appendChild(elem);
  elem.innerHTML = String(ingresar.value);
  ingresar.value = "";
}
btnAgregar.addEventListener("click", agregarElemento);
