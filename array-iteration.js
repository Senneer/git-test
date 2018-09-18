function getArrLength() {
    let arr = ["Есть", "жизнь", "на", "Марсе"];

    let arrLength = arr.map(function(value) {
        return value.length;
    });
    console.log(arrLength);
}

getArrLength();

//

function getSum() {
    let arr = [1, 2, 3, 4, 5];
    let result = [];

    arr.reduce(function(sum, el, index) {
        return result[index] = sum + el; 
    }, 0);

    console.log(result);
}

getSum();
