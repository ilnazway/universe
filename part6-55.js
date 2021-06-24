var x = [2, 3, 4, 5]
var i = [10, 'spange', 'trrrr', 6, 13, 41]

// Array.prototype.square = function() {
//   var newArray = this.map(function(item) {
//     if (typeof item === 'number') {
//       return Math.pow(item, 2)
//     }
//     if (typeof item === 'string') {
//       return item += item
//     }
//   })
//   return newArray
// }

Array.prototype.power = function() {
  var resultPower = this.map(function(elem) {
    if (typeof elem === 'number') {
      return Math.pow(elem, 3)
    }
    if (typeof elem === 'string') {
      return elem + elem
    }
  })
  return resultPower
}

var coolX = x.power()
var coolI = i.power()

console.log(coolX)
console.log(coolI)


