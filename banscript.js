
// banner.addEventListener('click', function() {
//   banner.style.backgroundColor = 'red'
// })

var xInterval

function flickeringColor() {
  xInterval = setInterval(flashBanner, 200)
}

function flashBanner() {
  var banners = document.querySelectorAll('.banner')
  for (var x = 0; x < banners.length; x++) {
    if (banners[x].style.backgroundColor == 'black') {
      banners[x].style.backgroundColor = 'yellow'
      banners[x].style.color = 'black'
    } else {
      banners[x].style.backgroundColor = 'black'
      banners[x].style.color = 'white'
    }


    // banners[x].style.backgroundColor = banners[x].style.backgroundColor == 'blue' 
    // ? 'pink'
    // : 'blue'
  }

  // if (div.style.backgroundColor === 'red') {
  //   div.style.backgroundColor = 'yellow'
  // } else {
  //   div.style.backgroundColor = 'red'
  // }
  // banner.style.backgroundColor = banner.style.backgroundColor == 'blue' ? 'green' : 'blue'
}

function stopFlickeringColor() {
  clearInterval(xInterval)
}

