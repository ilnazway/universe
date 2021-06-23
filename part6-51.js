var person = {
  name: 'Max',
  age: 23,
  job: 'frontend'
}

// for (var key in person) {
//   if (person.hasOwnProperty(key)) {
//     console.log(person[key])
//   }
// }

var keys = Object.keys(person)

console.log(keys)

keys.forEach(function(key) {
  console.log(person[key])
})