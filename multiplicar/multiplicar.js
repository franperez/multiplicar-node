const fs = require("fs");


let listarTabla = (base , limite) =>{
   let data='';
   data += ` TABLA DE ${base}`;
   for (let i = 1; i <= limite; i++) {
      data += `
      ${base} * ${i}  =  ${base*i}`
     
   }

   return data;
}

let crearArchivo = async (base, limite) => {
  console.log(base)
  if(!Number(base)){
      throw new Error('El valor introducido no es numero')
  }
  let data = "";
  for (let i = 1; i <= limite; i++) {
    data += ` ${base} * ${i} = ${base * i} \n`;
  }

  fs.writeFile(`./tabla/tabla_${base}.txt`, data, (err) => {
    if (err) throw err;
    else return `${base}.txt`;
  });
};

module.exports = {
  crearArchivo,
  listarTabla
};
