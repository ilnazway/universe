// for (let i = 0; i < 5; i++) {
//   setTimeout(function() {
//     console.log(i)
//   }, 2000)
// }

//const // не изменять; опр тип



// Стрелочные функции
const person = {
  name: 'Vladislav',
  age: 30,
  logNameWithTimeout() {
    window.setTimeout(() => {
      console.log(this.name)
    }, 1000)
  }
}


