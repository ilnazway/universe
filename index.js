var $start = document.getElementById('start')
var $game = document.getElementById('game')

$start.addEventListener('click', startGame)
$game.addEventListener('click', handleBoxClick)

var score = 0

function startGame() {
  // console.log(getRandom(100, 30))
  // console.log('Zapusk')
  $game.style.background = '#ffffff'
  $start.classList.add('hide')

  renderBox()
}

function handleBoxClick(event) {
  if (event.target.dataset.box) {
    score++
    renderBox()
  }
}

function renderBox() {
  $game.innerHTML = '' // удаляет внутренние теги у родительского

  var box = document.createElement('div') // создаем новый тег
  var boxSize = getRandom(30, 100)
  var gameSize = $game.getBoundingClientRect() // узнаем размер поля
  var maxTop = gameSize.height - boxSize
  var maxLeft = gameSize.width - boxSize

  box.style.width = box.style.height = boxSize + 'px'
  box.style.position = 'absolute'
  box.style.top = getRandom(0, maxTop) + 'px' // случайное расположение по высоте
  box.style.left = getRandom(0, maxLeft) + 'px' // случайное расположение по левому краю
  box.style.backgroundColor = 'red'
  box.style.cursor = 'pointer'
  box.setAttribute('data-box', 'true')

  $game.insertAdjacentElement('afterbegin', box) // вставляем созданный тег


}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

