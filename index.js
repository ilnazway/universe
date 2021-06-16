var $start = document.getElementById('start')
var $game = document.getElementById('game')
var $time = document.querySelector('#time')
var $result = document.querySelector('#result')
var $timeHeader = document.querySelector('#time-header')
var $resultHeader = document.querySelector('#result-header')
var $gameTime = document.querySelector('#game-time')

$start.addEventListener('click', startGame)
$game.addEventListener('click', handleBoxClick)
$gameTime.addEventListener('input', setGameTime)

function show($el) {
  $el.classList.remove('hide')
}

function hide($el) {
  $el.classList.add('hide')
}

var score = 0
var isGameStarted = false
var colors = ['#FFD200', '#34e89e', '#A7BFE8', '#B06AB3', '#43C6AC', '#FFAFBD', '#ffc3a0', '#f85032']

function startGame() {
  score = 0
  setGameTime()
  $gameTime.setAttribute('disabled', 'true')

  isGameStarted = true
  $game.style.background = '#ffffff'
  hide($start)

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

function scoreResult() {
  $result.textContent = score.toString()
}

function setGameTime() {
  var time = +$gameTime.value
  $time.textContent = time.toFixed(1)
  show($timeHeader)
  hide($resultHeader)
}

function endGame() {
  isGameStarted = false
  scoreResult()
  show($start)
  $game.innerHTML = ''
  $game.style.backgroundColor = '#ccc'
  hide($timeHeader)
  show($resultHeader)
  $gameTime.removeAttribute('disabled')
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

  // var rndCol = 'rgb(' + getRandomColor() + ',' + getRandomColor() + ',' + getRandomColor() + ')'

  var randomColorIndex = getRandom(0, colors.length)
  box.style.backgroundColor = colors[randomColorIndex]
  box.style.cursor = 'pointer'
  box.setAttribute('data-box', 'true')

  $game.insertAdjacentElement('afterbegin', box) // вставляем созданный тег


}

// function getRandomColor() {
//   return Math.floor(Math.random() * 255)
// }

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

