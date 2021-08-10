//helpers
function esPar(number) {
    return (number % 2 === 0);
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

//Calculadora de mediana
function medianaSalariesCol(list) {
    const mitad = parseInt(list.length / 2);

    if (esPar(mitad)) {
        const personaMitad1 = list[ mitad - 1 ];
        const personaMitad2 = list[ mitad ]; 
        const mediana = calculaMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;
    } else {
        const personaMitad = list[mitad];
        return personaMitad;
    }
}


// Mediana general
const salarioCol = colombia.map(
    function (person) {
        return person.salary;
    } 
);

const salaryColSorted = salarioCol.sort(
    function(salaryA , salaryB) {
        return salaryA - salaryB;
    }
);

const medianaGeneralCol = medianaSalariesCol(salaryColSorted);

//Mediana del top 10%
const splicesStart = (salaryColSorted.length * 90) / 100;
const splicesCount = salaryColSorted.length - splicesStart;

const salariosColTop10 = salaryColSorted.splice(splicesStart, splicesCount);

const medianaTop10Col = medianaSalariesCol(salariosColTop10)

console.log({
    medianaGeneralCol,
    medianaTop10Col,
});