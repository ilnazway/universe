var a = document.querySelector('a')
var oldHref = a.getAttribute('href')

a.setAttribute('href', 'https://shikimori.one/animes/z488-ichigo-mashimaro')
a.setAttribute('title', 'Go Shikikomori!')
a.textContent = 'Перейди на Шикикомори'
// a.setAttribute('class', 'initial-cover__link--active')

// console.log(a.attributes)


var d = document
var h1 = d.querySelector('h1')
h1.textContent = 'Тперь главный заголовок будет таким!'

document.querySelector('p').textContent = 'бла бал бал...'

var link = a.attributes[1].nodeValue
console.log(link)


var img = document.querySelector('.initial-cover__img')
img.setAttribute('width', '200')

// 

var box1 = document.querySelector('#box1')
var box2 = document.querySelector('#box2')

// box1.classList.add('box-cover--black')
box2.classList.add('box-cover--orange')

var hasClass = box1.classList.contains('box-cover--black')
console.log(hasClass);

if (hasClass) {
  box1.classList.remove('box-cover--black')
} else {
  box1.classList.add('box-cover--black')
}

// 

var button = document.querySelector('button')
var input = document.querySelector('input')

function buttonHandler() {
  console.log('Clicked!')
  h1.textContent = input.value
}

button.addEventListener('click', buttonHandler)

h1.addEventListener('mouseenter', function() {
  console.log('Навел на заголовок')
  if (h1.classList.contains('title-purpe')) {
    h1.classList.remove('title-purpe')
  }
  h1.classList.add('title-red')
})

h1.addEventListener('mouseleave', function() {
  console.log('Курсор вне заголовка')
  h1.classList.add('title-purpe')
})

// 

var title = document.querySelector('.initial-cover__title')

title.addEventListener('mouseenter', function() {
  console.log(this)
  this.style.color = 'green'
  this.style.backgroundColor = 'red'
  this.textContent = 'ПРивет'
})

title.addEventListener('mouseleave', function() {
  console.log(this)
  this.style.color = 'yellow'
  this.style.backgroundColor = 'transparent'
})

// 

var magicBox = document.querySelector('.magic-box')

magicBox.addEventListener('click', function() {
  console.log('Успех!')
  this.style.backgroundColor = '#e9967a'
})



