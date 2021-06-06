var a = document.querySelector('.initial-cover__link')
var oldHref = a.getAttribute('href')

a.setAttribute('href', 'https://shikimori.one/animes/z488-ichigo-mashimaro')
a.setAttribute('title', 'Go Shikikomori!')
a.textContent = 'Перейди на Шикикомори'
// a.setAttribute('class', 'initial-cover__link--active')

// console.log(a.attributes)


var d = document
var h1 = d.querySelector('h1')
h1.textContent = 'Тперь главный заголовок будет таким!'

// document.querySelector('p').textContent = 'бла бал бал...'

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


// 

var lotteryBox = document.querySelectorAll('.lottery__lottery-box')
console.log(lotteryBox)

for (i = 0; i < lotteryBox.length; i++) {
  lotteryBox[i].addEventListener('click', function() {
    this.style.backgroundColor = 'rgba(66,170,255, 0.2)' 
  })
}

lotteryBox[3].addEventListener('click', function() {
  this.classList.add('lottery-box__prize')
})

lotteryBox[5].addEventListener('click', function() {
  this.classList.add('lottery-box__prize')
})

lotteryBox[12].addEventListener('click', function() {
  this.classList.add('lottery-box__prize')
})

// lotteryBox[0].addEventListener('click', function() {
//   this.style.backgroundColor = 'transparent'
// })

// var lotteryBox1 = document.querySelector('.lottery-box1')
// var lotteryBox2 = document.querySelector('.lottery-box2')
// var lotteryBox3 = document.querySelector('.lottery-box3')
// var lotteryBox4 = document.querySelector('.lottery-box4')
// var lotteryBox5 = document.querySelector('.lottery-box5')

// lotteryBox1.addEventListener('click', function() {
//   this.style.backgroundColor = 'transparent'
// })
// lotteryBox2.addEventListener('click', function() {
//   this.style.backgroundColor = 'transparent'
// })
// lotteryBox3.addEventListener('click', function() {
//   this.style.backgroundColor = 'transparent'
// })
// lotteryBox4.addEventListener('click', function() {
//   this.style.backgroundColor = 'transparent'
//   this.classList.add('lottery-box__prize')
// })
// lotteryBox5.addEventListener('click', function() {
//   this.style.backgroundColor = 'transparent'
// })


var divs = document.querySelectorAll('.content-boxs div')
console.log(divs)

for (var i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', function(event) {
    event.stopPropagation()
    console.log(this.getAttribute('id'))
  })
}


// 

var linkOpen = document.querySelector('.characters > a')
var listCharacters = document.querySelector('.list-characters')

linkOpen.addEventListener('click', handleLinkClick)

function handleLinkClick(event) {
  event.preventDefault()

  listCharacters.style.display = listCharacters.style.display === 'none'
  ? 'block'
  : 'none'

}

// 

var secretList = ['Наведи', 'Наведи сюда', 'Еще раз', 'Так вот', 'Ты', 'Шлапоблок']
var secret = document.querySelector('.secret-message')

for (var x = 0; x < secretList.length; x++) {
  secret.addEventListener('mouseenter', function() {
    console.log(secretList[0])
  })
}

// secret.addEventListener('mouseenter', function() {
//   this.textContent = 'Ты'
// })

// secret.addEventListener('mouseleave', function() {
//   this.textContent = 'Шлапоблок'
// })

// secret.addEventListener('mouseenter', function() {
//   this.textContent = 'Шлапоблок'
// })

// 


var contentTexts = document.querySelectorAll('.content-texts p')
console.log(contentTexts)

for (y = 0; y < contentTexts.length; y++) {
  contentTexts[y].addEventListener('click', function(event) {
    event.target.style.color = 'blue'
  })
}

var wrapper = document.getElementById('wrapper')

wrapper.addEventListener('click', function(event) {
  var tagName = event.target.tagName.toLowerCase()
  console.log(tagName)

  if (tagName === 'p') {
    event.target.style.color = 'red'
  }

  if (event.target.classList.contains('color')) {
    event.target.style.color = 'purple'
  }

  if (event.target.classList.contains('content-reset')) {
    
  }
})

// var reset = document.querySelector('.content-reset')

// reset.addEventListener('click', function() {
//   wrapper.style.color = 'black'
// })




