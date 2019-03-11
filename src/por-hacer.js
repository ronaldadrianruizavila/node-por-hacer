const filesystem = require('fs');

let listadoPorHacer = [];

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = []
    }
}

const crear = (descripcion, completado) => {
    let porHacer = {
        descripcion,
        completado
    }

    cargarDB();
    listadoPorHacer.push(porHacer)
    guardarDB();

    return porHacer;
}

const listar = () => {
    cargarDB()
    return listadoPorHacer;
}

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    filesystem.writeFile('db/data.json', data, (error) => {
        if (error) throw error
    })
}

const editar = (descripcion, completado) => {
    cargarDB();

    let index = listadoPorHacer.findIndex((tarea) => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
    }
}

const borrar = (descripcion) => {
    cargarDB();

    let index = listadoPorHacer.findIndex((tarea) => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
    }
}


module.exports = {
    crear,
    listar,
    editar,
    borrar
}