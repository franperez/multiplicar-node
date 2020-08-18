// haciendo el require
//const multiplicar = require('./multiplicar/multiplicar')

// tambien se puede hacer de esta forma con destructurin
const { crearArchivo } = require("./multiplicar/multiplicar");
const { listarTabla } = require("./multiplicar/multiplicar");
const argv = require ('./config/yargs').argv;
const colors = require('colors');


let cmd = argv._[0];

//console.log(argv);
//console.log(cmd);

switch (cmd) {
  case "listar":
    console.log('Listando Archivo'.green);
    console.log(listarTabla(argv.base, argv.limite));
    break;
  case "crear":
    console.log("Creando Archivo");
    crearArchivo(argv.base, argv.limite)
      .then((result) => console.log(`Archivo Creado : ${result}`.green))
      .catch((err) => console.log(err.message));

    break;

  default:
    console.log("Comando no reconocido".red);

    break;
}

//let argv= process.argv[2];
//let base= argv.split('=')[1]
//console.log(base)

/*  crearArchivo(base)
  .then(result => console.log(`Archivo Creado : ${result}`))
  .catch(err => console.log(err.message)) */

//console.log(process.argv)
