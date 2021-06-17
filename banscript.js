
// banner.addEventListener('click', function() {
//   banner.style.backgroundColor = 'red'
// })

var xInterval

function flickeringColor() {
  xInterval = setInterval(flashBanner, 100)
}

function flashBanner() {
  var banner = document.querySelector('.banner')
  if (banner.style.backgroundColor === 'red') {
    banner.style.backgroundColor = 'yellow'
  } else {
    banner.style.backgroundColor = 'red'
  }
  // banner.style.backgroundColor = banner.style.backgroundColor == 'blue' ? 'green' : 'blue'
}

function stopFlickeringColor() {
  clearInterval(xInterval)
}

