console.log("Operadores Aritméticos - Alquiler de Vehículos");

auto1 = 25; 
auto2 = 40; 

console.log("Suma de precios de dos autos");
suma = auto1 + auto2;
console.log("Resultado:", suma);

console.log("Diferencia de precios");
resta = auto2 - auto1;
console.log("Resultado:", resta);

console.log("Precio por dias de alquiler");
diasAlquiler = 3;
multiplicacion = auto1 * diasAlquiler;
console.log("Resultado:", multiplicacion);

console.log("Precio por personas compartiendo");
personas = 2;
division = auto2 / personas;
console.log("Resultado:", division);

console.log("Precio restante despues de dividir");
modulo = auto2 % personas;
console.log("Resultado:", modulo);

console.log("Precio elevado de auto1");
potencia = auto1 ** 2;
console.log("Resultado:", potencia);

console.log("Operadores de Comparación");
console.log("auto1 igual a auto2", auto1 == auto2);
console.log("auto1 estrictamente igual a auto2", auto1 === auto2);
console.log("auto1 diferente a auto2", auto1 != auto2);
console.log("auto1 estrictamente diferente a auto2", auto1 !== auto2);
console.log("auto2 más caro que auto1", auto2 > auto1);
console.log("auto1 más barato que auto2", auto1 < auto2);
console.log("auto2 más caro o igual que auto1", auto2 >= auto1);
console.log("auto1 más barato o igual que auto2", auto1 <= auto2);

console.log("Operadores Lógicos");
console.log("y and &&", "40"<=40 && "40">=40);
console.log("o Or ||", "40"<=40 || "25">=40);
console.log("Negacion !", !(40==40));