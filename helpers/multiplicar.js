const fs = require('fs');

const crearArchivo = async(base = 5, length = 10) => {

    try {
        console.log('===== Tabla de:',base, '======');

        let salida ='';

        for (let i = 1; i <=length; i++){
            salida += `${base} x ${i} = ${base * i}\n`;
        }
        
        console.log(salida);  
        
        fs.writeFileSync(`./salidas/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;

        // fs.writeFile(`tabla-${base}.txt`, salida, (err)=>{
        //     if(err) throw err;
        //     console.log(`tabla-${base}.txt`);
        // })
    } catch (err) {
        throw err
    }    
}

// ############ esta es una forma de volverla promesa al metodo ############ 

//  const crearArchivo = (base = 5) => {

//     return new Promise((resolve,reject)=>{

//         console.log('===== Tabla de:',base, '======');

//     let salida ='';

//     for (let i = 1; i <=10; i++){
//         salida += `${base} x ${i} = ${base * i}\n`;
//     }
    
//     console.log(salida);  
    
//     fs.writeFileSync(`tabla-${base}.txt`, salida);

//     resolve(`tabla-${base}.txt`);

//     // fs.writeFile(`tabla-${base}.txt`, salida, (err)=>{
//     //     if(err) throw err;
//     //     console.log(`tabla-${base}.txt`);
//     // })
//     })
// }


module.exports = {
    // crearArchivo: crearArchivo   //redundancia
    crearArchivo
}
