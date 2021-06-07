var alertBut = document.querySelector('#alert')

alertBut.addEventListener('click', function() {
  alert('Информативное сообщение для учеников 5 класса')
})

var confirmBut = document.querySelector('#confirm')

confirmBut.addEventListener('click', function() {
  var succes = confirm('Вы подтверждаете регистрацию?')

  if (succes) {
    alert('Вы успешно зарегестрировались!')
  } else {
    alert('Попробуйте снова зарегестрироваться!')
  }
})

var promptBut = document.querySelector('#prompt')

promptBut.addEventListener('click', function() {
  var quantity = prompt('Укажите необходимое количество! От 1 до 15')
  confirm('Вы подтверждаете?')

  // console.log(quantity)
  
  if (quantity == 0) {
    alert('Попробуйте ввести количество больше 0')
  } else if (quantity <= 5) {
    var price = 10
    var total = quantity * price
    alert('Стоимость заказа ' + total + ' руб.')
  } else if (quantity <= 10) {
    var price = 8
    var total = quantity * price
    alert('Стоимость заказа ' + total + ' руб.')
  } else if (quantity <= 15) {
    var price = 6
    var total = quantity * price
    alert('Стоимость заказа ' + total + ' руб.')
  } else if (quantity > 15) {
    alert('На складе не хватает бананов! Введите количество заново')
  } else {
    alert('Покупка не удалась!')
  }
})

var nameBut = document.querySelector('#name')
var nameTitle = document.querySelector('.title-name')
 
nameBut.addEventListener('click', function() {
  var myName = prompt('Введите свое имя')

  if (myName) {
    nameTitle.textContent = myName
    alert('Успешно!')
  } else {
    alert('Не получилось! Попробуйте снова!')
  }
})


console.warn('Предупреждения всякие')
console.error('Ошибка')
console.info('Информативное сообщение')
console.log('Проверка')

 new Error('Error. Ошибка. Паника')
