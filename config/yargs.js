const config = {
    descripcion: {
        alias: 'd',
        demand: true,
        desc: 'Descripcion de tareas por hacer'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Estado de la tarea'
    }
}

const argv = require("yargs")
    .command('crear', 'Crea tareas', config)
    .command('editar', 'Edita las tareas ya creadas', config)
    .command('borrar', 'borra la tareas', {
        remover: {
            alias: 'rm',
            demand: true
        }
    })
    .command('listar', 'Lista las tareas').help().argv;

module.exports = {
    argv
}