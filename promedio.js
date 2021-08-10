const list1 = [
    100,
    200,
    300,
    500,
];

function calculaMediaAritmetica(lista) {
    
    const sum = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

/*    console.log(sum);

    let sumList1 = 0;
    for(let i = 0 ; i < lista.length ; i++){
        sumList1 += lista[i];
    }
*/    
    const avgList1 = sum / lista.length;
    return avgList1;
}

console.log(`Promedio Lista 1 - ${calculaMediaAritmetica(list1)}`);
