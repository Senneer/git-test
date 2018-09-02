//Задание 1

let user = {}

user.name = "Вася";
user.surname = "Петов"; 
user.name = "Сергей";
delete user.name;

console.log("Задание объекты1", user);

//Задание 2

let schedule = {};

function isEmpty(obj) {
	for (let key in obj) {
		return false;
	}
		return true;
};

console.log("Задание объекты2, пустой массив",isEmpty(schedule)); 

schedule["8:30"] = "подъём";

console.log("Задание объекты2, есть поле", isEmpty(schedule));

//Задание 3

let salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

function sumValue(obj) {
	let rez = 0 
	for (let key in obj) {
		rez += obj[key];
	}	
	return rez;
}

console.log("Задание объекты3", sumValue(salaries));

//Задание 4

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj) {
	for (let key in obj) {
		if (isNumeric(obj[key])){
			obj[key] *= 2;
		}
	}
	return obj;
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}


console.log("Задание объекты4", multiplyNumeric(menu));
