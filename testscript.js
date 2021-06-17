var $start = document.querySelector('#start')
var $stop = document.querySelector('#stop')
var $time = document.querySelector('#time')


$start.addEventListener('click', startTime)
$stop.addEventListener('click', stopTime)

function startTime() {

  var stopwatch = setInterval(function() {
    var time = parseFloat($time.textContent)
    if (time <= 0) {
      stopTime()
    } else {
      $time.textContent = (time - 0.1).toFixed(3)
    }
  }, 100)
}

function stopTime() {
  clearInterval(stopwatch)
}