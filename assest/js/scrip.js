const button = document.querySelector('button');

const multDosNumeros = () => {
    let amount = document.querySelector('#number').value;
    let total = +amount * 1199990;
    let inputColor = document.querySelector('#color').value;

    if (isNaN(amount)) {
        let total=0;
        document.querySelector('#preciofinal').textContent = total;
        document.querySelector('cantidadtotal').textContent = amount
        
    }
}