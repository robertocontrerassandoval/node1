const fs = require ('fs');

// CRUD = create, read, upload, delete

// CREATE

const registrar = (Nombre_Animal, Edad, Tipo_de_Animal, Color_del_Animal, Enfermedad ) => {
    const citas = JSON.parse(fs.readFileSync('citas.json','utf8'));  //json.parse lo convierte en un objeto js
    const id = Math.floor(Math.random() * 100) .toString() // tostring para que sea un strig "57"y no un numero 57
    if(!Nombre_Animal || !Edad || !Tipo_de_Animal || !Color_del_Animal || !Enfermedad) {
        console.log('faltan datos por ingresar')
        return; // si no valida los datos aqui retorna al inicio del codigo
    }

    citas.push({id, Nombre_Animal, Tipo_de_Animal, Color_del_Animal, Enfermedad}); //se cargar un array con los datos con el metodo push
    fs.writeFileSync('citas.json', JSON.stringify(citas)) //JSON.stringify para que lo convierta en un string de json
    console.log('datos ingresados exitosamente');

};

// READ

const leer = () => {
    const citas = JSON.parse(fs.readFileSync('citas.json','utf8'));  //json.parse lo convierte en un objeto js
    console.log(citas);


}

module.exports = {registrar, leer}; //con esto se puede exportar a cualquier parte y utilizar