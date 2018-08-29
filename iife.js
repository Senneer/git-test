let counter = (function (){
	let count = 0;
	return function(){
		return count++;
	}
}());

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());


(function(a, b){
	return console.log(a+b);
})(4, 3)