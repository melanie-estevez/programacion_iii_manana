function mostrarSaludo(){
    const nombre = document.getElementById('nombre').value.trim();
    const saludo = document.getElementById('saludo');

    if (nombre===''){
        saludo.textContent='Por favor escribe tu nombre';
        saludo.style.color = 'red'; 
    } else {
        saludo.innerHTML = `Hola ${nombre} Bienvenido al taller`;
        saludo.style.color='green';
    }
}