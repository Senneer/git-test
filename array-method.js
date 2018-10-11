let allClassName = {
    className: 'open menu',
};

function addClass(obj, cls) {
    let objChange = obj.className ? obj.className.split(' ') : [];

    for (let i = 0; i < objChange.length; i++) {
        if (objChange[i] == cls) return; 
    }

  objChange.push(cls); 
  obj.className = objChange.join(' '); 
}

addClass(allClassName, 'name');
addClass(allClassName, 'new');
addClass(allClassName, 'open');
addClass(allClassName, 'me');

console.log(allClassName.className);

//
function camelize(str) {
    let arr = str.split('-');


    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() +  arr[i].substr(1);
    }

    console.log(arr.join(''));  

}

camelize("background-color");
camelize("list-style-image");

//
let allClass = {
    className: 'open menu menu',
};

function removeClass(obj, cls) {
    let objChange = obj.className.split(' ');

    for (let i = 0; i < objChange.length; i++) {
        if (objChange[i] == cls) {
            objChange.splice([i], 1);
            i--;
        }    
    }
    
    console.log(objChange.join(' ')); ;
}

removeClass(allClass, 'menu');

//
let arr = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i--, 1);
        }
    }

    console.log(arr);
}

filterRangeInPlace(arr, 1, 4);

//
let arr2 = [5, 2, 1, -10, 8];

function reversArr(a, b) {
    return b - a;
}

arr2.sort(reversArr);
console.log(arr2); 

//
let arr3 = ["HTML", "JavaScript", "CSS"];
let sortArr = arr3.slice().sort();
console.log(sortArr);

//
let arr4 = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", "8-()"
];

function unique(arr) {
    let obj = {};

    for (let i = 0; i < arr.length; i++) {
        let str = arr[i];
        obj[str] = true; // запомнить строку в виде свойства объекта. я тоже сначала не поняла что нужно так написать
    }

    console.log(Object.keys(obj));
}

unique(arr4);

//
let arr5 = [1, 2, 3, 4, 5];

function randomArr(arr){
    function randValue(a, b) {
       return Math.random() - 0.5;
    }

    arr.sort(randValue);
    console.log(arr);    
}

randomArr(arr5);
