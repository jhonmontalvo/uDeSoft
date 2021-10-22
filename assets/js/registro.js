
// Se inicializa el arreglo que contiene los datos de registro

let registros=[];

function agregarRegistro(){

//Constructor
//function Persona(usuario, correo, clave){
//    this.user = usuario;
//    this.email = correo;
//    this.pwd = clave;
//}

// Guardar los datos de los campos del formulario en variables para luego agregarlas al arreglo
var user = document.getElementById("username").value;    
var email = document.getElementById("correo").value;
var pwd = document.getElementById("contrasena").value;

//Agregar los datos del nuevo arreglo al arreglo global

//nuevoRegistro = new Persona(usuario, correo, clave);

//registros.push(nuevoRegistro);
nuevoRegistro = {user, email, pwd};
registros.push(nuevoRegistro);
//document.getElementById("tabla").innerHTML +='<tbody><td>'+nuevoRegistro.user+'</td><td>'+nuevoRegistro.email+'</td><td>'+nuevoRegistro.pwd+'</td></tbody>';

//alert("El registro se ha completado");


// imprimir solo el nombre de usuario en pantalla
//for (let index = 0; index < arreglo.length; index++) {
    
//    document.write(arreglo[index][0]);  
//}
console.log(registros);

}


function filtrarCorreo(registros){
        
    let resultado = registros.filter (     
        usuario => usuario.email !== "")
        console.log(resultado);
        
        let Arrayfiltro = [];
        for (let i = 0; i < resultado.length; i++) {
       
            Arrayfiltro.push(resultado[i].email);
            
        //filtro.push(resultado[i].correo);
        }
    
        //console.log(Arrayfiltro);

        var filtroHotmail = Arrayfiltro.filter(word => word.includes("hotmail.com"));
        filtroHotmail.forEach(emails => {
        
             
        }); 
        
        console.log(filtroHotmail);
        return  filtroHotmail; 
        
}

function obtenerUsername(registros){

let arrayResultado = registros.filter(
    usuario => usuario.user.match(/[0-9]/))
console.log(arrayResultado);

let arrayFiltro = [];

for (let i = 0; i < arrayResultado.length; i++) {

    arrayFiltro.push(arrayResultado[i].user);
}
console.log(arrayFiltro);
return arrayFiltro;

}


module.exports.registros = registros;
module.exports.agregarRegistro = agregarRegistro;
module.exports.obtenerUsername = obtenerUsername;
module.exports.filtrarCorreo   = filtrarCorreo;

