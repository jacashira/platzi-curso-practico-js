const { area } = require("./cuadrado");

//codigo del circulo
console.group('Circulos');

const radioCirculo = 4;
console.log(`El radio del circulo es: ${radioCirculo} cm`);

const diametroCirculo = radioCirculo * 2;
console.log(`El diametro del circulo es: ${diametroCirculo} cm`);

const PI = Math.PI;
const perimetroCirculo = PI * diametroCirculo;

console.log(`El perimetro del circulo es : ${perimetroCirculo} cm`);

const areaCirculo = PI * Math.pow(radioCirculo,2);
console.log(`El area del circulo es : ${areaCirculo} cm2`)
console.groupEnd();

function diametro(radio){
    return  radio * 2
}

function perimetro(radio){
    return Math.PI * diametro(radio);
} 

function area(radio){
    return Math.PI * Math.pow(radio,2);
}

module.exports = {
    perimetro,
    area,
}