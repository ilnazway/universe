var $start = document.getElementById('start')
var $game = document.getElementById('game')
var $time = document.querySelector('#time')

$start.addEventListener('click', startGame)
$game.addEventListener('click', handleBoxClick)

var score = 0
var isGameStarted = false

function startGame() {
  // console.log(getRandom(100, 30))
  // console.log('Zapusk')
  isGameStarted = true
  $game.style.background = '#ffffff'
  $start.classList.add('hide')

  var interval = setInterval(function() {
    var time = parseFloat($time.textContent) // спарсивает указанное время

    if (time <= 0 ) {
      clearInterval(interval)
      endGame()
    } else {
      $time.textContent = (time - 0.1).toFixed(1)
    }

  }, 100)

  renderBox()
}

function endGame() {
  isGameStarted = false
}

function handleBoxClick(event) {
  if (!isGameStarted) {
    return
  }

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

