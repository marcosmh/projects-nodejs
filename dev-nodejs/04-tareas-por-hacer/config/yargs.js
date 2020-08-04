const colors = require('colors');

const opts = {
  descripcion: {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'.green
  },
  completado: {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'.green
  }
}


const argv = require('yargs')
  .command('listar','Listar Tareas')
  .command('crear','Crear Lista de Tarea',opts)
  .command('actualizar','Actualizar Lista de Tarea',opts)
  .command('borrar','Borrar Lista de Tarea',opts)
  .help()
  .argv;

module.exports = {
  argv
}
