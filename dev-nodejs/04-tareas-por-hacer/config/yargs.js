const colors = require('colors');

const descripcion = {
  demand: true,
  alias: 'd',
  desc: 'Descripción de la tarea por hacer'.green
};

const completado = {
  default: true,
  alias: 'c',
  desc: 'Marca como completado o pendiente la tarea'.green
};

const argv = require('yargs')
  .command('listar','Listar Tareas')
  .command('crear','Crear Lista de Tarea',{descripcion})
  .command('actualizar','Actualizar Lista de Tarea',{descripcion, completado})
  .command('borrar','Borrar Lista de Tarea',{descripcion})
  .help()
  .argv;

module.exports = {
  argv
}
