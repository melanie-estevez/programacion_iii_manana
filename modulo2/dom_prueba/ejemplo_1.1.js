function calcularArea(){
    const ancho= parseFloat(document.getElementById('Ancho').value);
    const alto = parseFloat(document.getElementById('Alto').value);
    const resultado = (document.getElementById('resultado'));

    if (isNaN(ancho) || isNaN(alto)){
        resultado.textContent= 'Ingrese ambos valores por favor';
        resultado.style.color='red';
    } else {
        const area = (ancho*alto);
        resultado.textContent = `Area: ${area} unidades cuadradas`;
        resultado.style.color='green';
    }
}