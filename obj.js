const Animal = {
  type: 'mammals',
  skinCovering: function() { 
    console.log('hairy');
  }
};

const animal1 = Object.create(Animal);
console.log(animal1.type);
animal1.skinCovering(); 

const fish = Object.create(Animal);
fish.type = 'Fishes';
console.log(fish.type);
console.log(Animal.type);

const obj = {
  b : 6,
  a : 5
}

function obj(obj, key){
  return obj[key] * 3;
}

console.log(obj(obj, 'b'));

function myObject(id, name){
  this._id = id;
  this._name = name;
} 

var MyFirstObjectInstance = new MyObject(5, "Sample");
var MySecondObjectInstace = new MyObject(12, "Othe Sample"); 

console.log(MySecondObjectInstace);
