var printObject = function(objName, additionalName) {
  console.log('Printing object:', objName)
  console.log('Additional argument:', additionalName)
  for (var key in this) {
    debugger
    if (this.hasOwnProperty(key)) {
      console.log('[' + key + ']: ' + this[key])
    }
  }
}

var person = {
  name: 'Max',
  age: 23,
  job: 'frontend',
  friend: ['Max', 'Zold']
}

var car = {
  name: 'Kia',
  model: 'Sportage',
  year: 2018
}


var printPerson = printObject.bind(person)
printPerson('person')

printObject.call(car, 'Mashina-pushka', 'тестовая строка')

printObject.apply(person, ['Персонаж', 'arg2'])

