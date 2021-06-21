// function Moto(name, year) {
//   this.name = name
//   this.year = year
// }

// var bmw = new Moto('BMW', 2015)


var moto = {
  model: 'Yamaha',
  year: 2019
}

moto.hasOwnProperty('model') // определяет, есть метод(ключ) или нет
// console.log(moto)


function Moto(model, year) { // создание класса
  this.model = model
  this.year = year
}

Moto.prototype.getAge = function() {
  return new Date().getFullYear() - this.year
}

Moto.prototype.color = 'black'
Moto.prototype.power = 250


var geon = new Moto('GEON', 2013)
var kawasaki = new Moto('Kawasaki', 2015)

geon.power = 248
kawasaki.color = 'white'

console.log(geon)
console.log(kawasaki)

