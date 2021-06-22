var yamaha = Object.create({
  calculateDistancePerYear: function() {
    Object.defineProperty(this, 'distancePerYear', {
      value: Math.ceil(this.distance / this.age),
      enumerable: true,
      writable: false,
      configurable: false
    })
  }
}, {
  name: {
    value: 'Yamaha',
    enumerable: true,
    writable: false,
    configurable: false
  },
  model: {
    value: 'YFZ650',
    enumerable: true,
    writable: false,
    configurable: false
  },
  year: {
    value: 2005,
    enumerable: true,
    writable: false,
    configurable: false
  },
  distance: {
    value: 127000,
    enumerable: true,
    writable: true,
    configurable: false
  },
  age: {
    enumerable: true,
    get: function() {
      console.log('Получаем возраст')
      return new Date().getFullYear() - this.year
    },
    set: function() {
      console.log('Устанавливаем возраст')
    }
  },
  modification: {
    value: 'pens',
    enumerable: true,
    writable: true,
    configurable: true
  }
})

console.log(yamaha)

yamaha.calculateDistancePerYear()

for (var key in yamaha) {
  if (yamaha.hasOwnProperty(key)) {
    console.log(key, yamaha[key])
  }
}



var bunker = Object.create({
  color: 'hidden',
  calculateAge: function() {
    var nowYear = new Date().getFullYear()
    Object.defineProperty(this, 'age', {
      value: nowYear - this.year,
      enumerable: true,
      writable: false,
      configurable: false
    })
  }
}, {
  name: {
    value: 'Northon',
    enumerable: true,
    writable: false,
    configurable: false
  },
  model: {
    value: 'XR-CTi96',
    enumerable: true,
    writable: false,
    configurable: false
  },
  fortification: {
    value: 6,
    enumerable: true,
    writable: true,
    configurable: false
  },
  commissioned: {
    value: 1974,
    enumerable: true,
    writable: false,
    configurable: false
  },
  termonuclear: {
    value: 'NO',
    enumerable: true,
    writable: true,
    configurable: false
  },
  location: {
    value: 'Uganda',
    enumerable: false,
    writable: false,
    configurable: true
  }
})


// console.log(bunker)


