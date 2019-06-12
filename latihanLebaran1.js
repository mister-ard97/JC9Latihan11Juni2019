function getSquare(param) {
    let angka = param.toString();
    angka = angka.split('');
    for(let x = 0; x < angka.length; x++) {
        angka[x] *= angka[x];
    }

    angka = angka.join('');
    return parseInt(angka);
}

console.log(getSquare(121))
console.log(getSquare(553))
console.log(getSquare(44991))
