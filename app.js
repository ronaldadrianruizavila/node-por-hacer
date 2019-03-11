const argv = require("./config/yargs").argv
const color = require('colors');
const { crear, listar, editar, borrar } = require('./src/por-hacer')


let comando = argv._[0];

switch (comando) {
    case "crear":
        console.log(crear(argv.descripcion, argv.completado));
        break;
    case "listar":
        let listadoPorhacer = listar();
        listadoPorhacer.forEach((tarea) => {
            console.log('=======Tarea========='.green);
            console.log(`descripcion: ${tarea.descripcion}`.green);
            console.log(`completado: ${tarea.completado}`.green);
            console.log('=====================\n'.green);
        });
        break;
    case "editar":
        editar(argv.descripcion, argv.completado)
        break;
    case "borrar":
        borrar(argv.remover)
        break;
    default:
        console.log('Comando no reconocido'.red)
        break;
}