

function perimetroCuadrado(lado){
    const per = lado * 4;
    return per ;
}

function areaCuadrado(lado) {
    const are = lado * lado;
    return are;
}

function alturaTriangulo(lado1, lado2, base){
    if(lado1 === lado2 && lado1 != base){
        alert('isoceles')
        const altura = Math.sqrt(lado1**2 - base**2/ 4)
        return altura;
    }
    else{
        alert('no lo se')
        return 0;
    }
}

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base
}

function areaTriangulo(lado, altura){
    return (lado * altura) /2;
}


function diametroCirculo(radio){
    return  radio * 2
}

function perimetroCirculo(radio){
    return Math.PI * diametroCirculo(radio);
} 

function areaCirculo(radio){
    return Math.PI * Math.pow(radio,2);
}


//funciones expuestas a la vista
function pCuadrado(){
    const lado = document.getElementById('InputCuadrado').value;
    const result = `El perimetro del cuadrado es: ${perimetroCuadrado(lado)} cm`;
    alert(result);
    return  result; 
}

function aCuadrado(){
    const lado = document.getElementById('InputCuadrado').value;
    const result=  `El área del cuadrado es: ${areaCuadrado(lado)} cm` ; 
    alert(result);
    return  result; 
}

function pTriangulo(){
    const lado1 = document.getElementById('InputTrianguloLado1').value;
    const lado2 = document.getElementById('InputTrianguloLado2').value;
    const base = document.getElementById('InputTrianguloBase').value;
    const result = `El perimetro del triangulo es ${perimetroTriangulo(lado1, lado2, base)}`
    alert(result);
    return result;
}

function aTriangulo(){
    const lado1 = document.getElementById('InputTrianguloLado1').value;
    const lado2 = document.getElementById('InputTrianguloLado2').value;
    const base = document.getElementById('InputTrianguloBase').value;
    const result = `El area del triangulo es ${areaTriangulo(lado1,alturaTriangulo(lado1, lado2, base))}`
    alert(result);
    return result;
}

function pCirculo(){
    const radio = document.getElementById('InputCirculo').value;
    const result = `El perimetro del circulo es ${perimetroCirculo(radio)}`;
    alert(result);
    return result;
}

function aCirculo(){
    const radio = document.getElementById('InputCirculo').value;
    const result = `El area del circulo es ${areaCirculo(radio)}`;
    alert(result);
    return result;
}