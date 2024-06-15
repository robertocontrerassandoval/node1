const { registrar, leer } = require ('./operaciones'); // aqui llamo a la funcion add de operaciones

const [accion, id, Nombre_Animal, Edad, Tipo_de_Animal, Color_del_Animal, Enfermedad] = process.argv.slice(2)
//[ node, index.js, accion, id, Nombre_Animal, Edad, Tipo_de_Animal, Color_del_Animal, Enfermedad] al agregar slice(2)
// quita del listado "node y index,js".

if (accion === 'registrar') {
    registrar( id, Nombre_Animal, Edad, Tipo_de_Animal, Color_del_Animal, Enfermedad );
}

if(accion === 'leer') {
    leer(); //se se le coloca nada por que en la funcion no hay nada
}