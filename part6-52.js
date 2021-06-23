var createCounter = function(counterName) {
  var counter = 0
  
  return {
    increment: function() {
      ++counter
      return 'Успех'
    },
    discrement: function() {
      --counter
      console.log('Успех!')
    },
    getCounter: function() {
      return counter
    }
  }

  // return function() {
  //   console.log(counterName, ++counter)
  // }
}

var counterA = createCounter('Counter A')
var counterB = createCounter('Counter B')


counterA.increment()
counterA.increment()
counterA.increment()

counterB.discrement()




