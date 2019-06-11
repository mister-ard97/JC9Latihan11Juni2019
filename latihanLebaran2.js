var input = ['Ryan', 'Kieran', 'Jason', 'Yous'];
var friends = function (param) {
    let arr = param;
    let result = [];
    for(let x = 0; x < arr.length; x++) {
        if(arr[x].length == 4) {
            result.push(arr[x])
        }
    }
    return result;
}

console.log(friends(input))