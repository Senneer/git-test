//задача о поднятии переменных и присвоении им значений, выведет  "Vanya, undefined"
say('Vanya');

var pharse = 'Hello';

function say(name) {
    alert(name + " , " + pharse);
}

//аналогичная задача, обратились к переменной до присваивания ей значения

function test() {
    alert(window);
    var window = ":D";
    alert(window);
}

test();

//cчетчик с глобальной переменной

let count = 1;

function counter() {
    return function() {
        return count++;
    };
}

let a = counter();
let b = counter();

alert( a() );
alert( a() );
alert( b() );
alert( b() );

//если переменную засунуть в функцию

function counter2() {
    let count = 1;

    return function() {
        return count++;
    };
}

let c = counter2();
let d = counter2();

alert( c() );
alert( c() );
alert( d() );
alert( d() );


