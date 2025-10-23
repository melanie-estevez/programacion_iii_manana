console.log("Funciones");

console.log("Forma Clásica");
function saludar(){
    console.log("Hola desde la función clásica");
}
saludar();

console.log("Forma con parametros y retorno");
function sumar(a, b){
    return a+b
}
let resultado=sumar(4,9);
console.log("La suma es", resultado);

console.log("Funcion flecha");
const resta = (a,b)=>{
    return a-b
}
let resultadoResta = resta(9,5);
console.log("La resta es", resultadoResta);



console.log("Funcion retorno direct");
const cuadrado = x =>x*x;
console.log("cuadrado de 5: ", cuadrado(5));

console.log("Funcion con parametros por defecto");
function saludar(nombre, saludo="Hola "){
    return saludo +""+nombre;
}
let saludo1=saludar("Daniela");
let saludo2=saludar("Daniela", "Buenos dias ");
console.log(saludo1);
console.log(saludo2);

