function esPrimo(numero) {
    if (numero === 0) {
        return false;
    }
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

function listaPrimosHasta(n) {

    let lista = [];
    for (let a = 2; a < n; a++) {
        if (esPrimo(a) == true) {
            lista.push(a);
        }
    }
    return lista;
}

function conjeturaGoldbach(number) {

    let arreglo = listaPrimosHasta(number);
  

    for (let element of arreglo) {
        let dif = number - element;
        if (element + dif == number) {
            return myElement;
        }
    }
    return myElement
}

//console.log(esPrimo(457))
console.log(conjeturaGoldbach(462))
