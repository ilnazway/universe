var square = document.querySelectorAll('.square')
var button = document.querySelector('.btn')

button.addEventListener('click', function() {
  console.log('random(255)')
})

for (var x = 0; x < square.length; x++) {
  if (x % 2) {
    square[x].addEventListener('mouseenter', function(event) {
      event.target.style.backgroundColor = 'red'
    })
  } else {
    square[x].addEventListener('mouseenter', function(event) {
      event.target.style.backgroundColor = 'blue'
    })
  }
  

  // square[x].addEventListener('mouseleave', function(event) {
  //   event.target.style.backgroundColor = 'transparent'
  // })
}
