let calculator = {
	read: function() {
		this.a = parseFloat(prompt('Введите первое число', ''));
		this.b = parseFloat(prompt('Введите второе число', ''));
	},
	sum: function() {
		return this.a + this.b;
	},
	mul: function(){
		return this.a * this.b;
	}
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );