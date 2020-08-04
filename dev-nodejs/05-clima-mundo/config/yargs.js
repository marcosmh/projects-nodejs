

const argv = require('yargs')
  .options({
      direccion: {
        demand: true,
        alias: 'd',
        desc: 'Dirección  de la ciudad  para obtener el clima'
      }
  })
  .argv;



module.exports = {
    argv
}
