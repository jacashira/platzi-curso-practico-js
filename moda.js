const lista = [
  1,
  2,
  3,
  1,
  2,
  3,
  4,
  2,
  2,
  2,
  1,  
];

function encuentraModa(list) {
    const listCount = {};

    lista.map(
        function(element){
            if( listCount[element]) {
                listCount[element] += 1; 
            } else {
                listCount[element] = 1; 
            }
        }
    );
    
    const listArrayCount = Object.entries(listCount).sort(
        function (valorAcumulado, nuevoValor) {
            return valorAcumulado[1] - nuevoValor[1];
        }
    );

    return listArrayCount[listArrayCount.length - 1];
    
}


console.log(encuentraModa(lista));