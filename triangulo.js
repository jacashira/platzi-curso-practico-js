//codigo del triangulo
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladobase = 4;
const alturaTriangulo = 5.5;

console.group('Triangulos')
console.log(`Los lados del triangulo miden lado1: ${ladoTriangulo1} cm - lado2: ${ladoTriangulo2} cm - y la base: ${ladobase} cm`);
console.log(`La altura del triangulo mide: ${alturaTriangulo} cm`);


const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladobase;
console.log(`El perímetro de del triangulo es: ${perimetroTriangulo} cm`);

const areaTriangulo = (ladobase * alturaTriangulo) /2;
console.log(`El area de del triangulo es: ${areaTriangulo} cm2`);
console.groupEnd();

function perimetro(lado1, lado2, base){
    return lado1 + lado2 + base
}

function area(lado, altura){
    return (lado * altura) /2;
}

module.exports = {
    perimetro,
    area,
} 