

function sumar(a, b) {
  return a + b;
}
console.log(sumar(10,20));

let sumando = (a,b) => a + b;

console.log(sumando(40,20));


function hola() {
  return 'Hola Mundo';
}


console.log(hola());

let holaMundo = () => 'Hola Mundox';

console.log(holaMundo());

function getNombre(nombre) {
  return `Hola ${nombre}`;
}

console.log(getNombre('Marcos'));


let getNom = (nombre) => `Hola ${nombre}`;

console.log(getNom('Marcosxxx'));



let deadpool = {
  nombre: 'Wade',
  apellido: 'Winston',
  poder: 'Regeneracion',
  getNombres() {
    return `${this.nombre} ${this.apellido} -  poder: ${this.poder}`;
  }
}


console.log(deadpool.getNombres());
