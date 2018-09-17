function f(x) {
    return arguments.length ? 1 : 0;
}

console.log(f(undefined));
console.log(f());

//

function sum() {
    let sum = 0;

    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }

    return sum;
}

console.log(sum(1, 2, 3, 4));
