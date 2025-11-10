function calcularPromedio(){
    const n1 = parseFloat(document.getElementById('nota1').value );
    const n2 = parseFloat(document.getElementById('nota2').value);
    const n3 =parseFloat(document.getElementById('nota3').value);
    const resultado = (document.getElementById('resultado'));

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)){
        resultado.textContent='Por favor ingresa las tres notas';
        resultado.style.color='red';
    } else {
        const promedio=(n1+n2+n3)/3;
        resultado.textContent=`Tu promedio es: ${promedio.toFixed(2)}`;
        resultado.style.color='green';
    }
} 





















