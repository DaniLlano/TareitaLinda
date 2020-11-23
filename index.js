const personitas = [];

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let edad = document.getElementById("edad");

const cargar = document.getElementById("submit")

cargar.addEventListener("click", sub)

function personitasPiolas(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

function sub(e){
    e.preventDefault();
    let personas = new personitasPiolas (nombre.value, apellido.value, edad.value); 
    personitas.push(personas);
    console.log(personitas)
}