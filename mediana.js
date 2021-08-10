const lista = [
    200,
    600,
    500,
    100,
    900,
    400,
    300,
    1000,
];

function esPar(number){
    const type = number % 2;
    if ( type == 0) {
        console.log(`es par`);
        return true;
    } else {
        console.log(`es impar`);
        return false;
    }
}


function calculaMediaAritmetica(lista) {
    
    const sum = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const avgList = sum / lista.length;
    return avgList;
}

function calcularMediana(list) {
    console.log(list);
    list.sort(
        function(a,b) {
            return a-b;
        });
    console.log(list);
    const mitad = parseInt(list.length / 2);
    let mediana = 0;
    if( esPar(list.length) ) {
        const num1 = list[mitad -1];
        const num2 = list[mitad];
        mediana = calculaMediaAritmetica([num1, num2]);
    } else {
        mediana = list[mitad];
    }
    return mediana;
}



console.log(`La mediana es - ${calcularMediana(lista)}`);