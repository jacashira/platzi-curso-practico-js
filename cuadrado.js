//codigo del cuadrado

console.group('Cuadrados');
const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perímetro de del cuadrado es: ${perimetroCuadrado} cm`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El area de del cuadrado es: ${areaCuadrado} cm2`);
console.groupEnd();

function perimetro(lado){
    return ladoCuadrado * 4 ;
}

function area(lado) {
    return lado * lado;
}

module.exports = {
    perimetro,
    area
}