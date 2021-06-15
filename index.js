var $start = document.getElementById('start')
var $game = document.getElementById('game')

$start.addEventListener('click', startGame)

function startGame() {
  // console.log('Zapusk')
  $game.style.background = '#ffffff'
  $start.classList.add('hide')

  renderBox()
}

function renderBox() {
  
}
