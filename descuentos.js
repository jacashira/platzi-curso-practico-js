

function calcularPrecioDescuento(precio, descuento) {
    const porcentajePrecioDescuento = 100 - descuento; 
    const precioDescuento = (precio * porcentajePrecioDescuento) / 100;

    return precioDescuento;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const priceDiscount = calcularPrecioDescuento(priceValue,discountValue);

    const resultP = document.getElementById("ResultPriceP");
    resultP.innerText = `El precio con descuento es ${priceDiscount}`;
}

/*
console.log(`El precio original ${precioOriginal} y el precio con descuento ${precioDescuento}`);
console.log({precioOriginal,
            descuento,
            porcentajePrecioDescuento,
            precioDescuento});
*/

console.log(calcularPrecioDescuento(300,30));
console.log(calcularPrecioDescuento(3000,12));