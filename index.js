var $start = document.getElementById('start')
var $game = document.getElementById('game')

$start.addEventListener('click', startGame)
$game.addEventListener('click', handleBoxClick)

var score = 0

function startGame() {
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
  $game.innerHTML = ''

  var box = document.createElement('div')

  box.style.width = box.style.height = '50px'
  box.style.position = 'absolute'
  box.style.top = '50px'
  box.style.left = '60px'
  box.style.backgroundColor = 'red'
  box.style.cursor = 'pointer'
  box.setAttribute('data-box', 'true')

  $game.insertAdjacentElement('afterbegin', box)


}
