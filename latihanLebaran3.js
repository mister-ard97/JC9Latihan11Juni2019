var domainName = function (param) {
    param = param.replace('http://', '').replace('www.', '').replace('.com', '').split('/');
    return param[0];
}

console.log(domainName('http://github.com/carbonfive/raygun'));
console.log(domainName('http://www.zombie-bites.com'));
console.log(domainName('http://www.cnet.com'));