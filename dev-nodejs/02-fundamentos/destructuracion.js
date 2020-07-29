let deadpool = {
  nombre: 'Wade',
  apellido: 'Winston',
  poder: 'Regeneracion',
  getNombre: function() {
    return `${this.nombre} ${this.apellido} -  poder: ${this.poder}`;
  }
}

console.log(deadpool.getNombre());

let nombre1 = deadpool.nombre;
let apellido1 = deadpool.apellido;
let poder1 = deadpool.poder;

console.log(nombre1, apellido1, poder1);


let{ nombre: primerNombre, apellido, poder } = deadpool;

console.log(primerNombre, apellido, poder);
