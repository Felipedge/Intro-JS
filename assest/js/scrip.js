const button = document.querySelector("button");

const multTotal = () => {
    
    const cantidad = document.querySelector("#cantidad").value;
    const precio = 1199990
    const color = document.querySelector('#color');

    if (isNaN(cantidad)) {
        resultado = "Es necesario introducir un numero válidos";
    } 
    else {
        const cantidadTotal = +cantidad * precio;
        resultado = cantidadTotal;
    }
    document.querySelector("#precioFinal").textContent = resultado;
    document.querySelector('#cantidadFinal').textContent = cantidad;
    document.querySelector('#colorFinal').textContent = color;
    color.style.backgroundColor = colorImput.value;
}
    
document.querySelector('#color').style.backgroundColor = color;


button.addEventListener("click", multTotal);
