document.querySelector('button.send').addEventListener('click', function(event) {

  var value = document.querySelector('input').value

  var obj = {
    text: value
  }


  console.log(JSON.stringify(obj))
  localStorage.setItem('message', JSON.stringify(obj))


})

document.addEventListener('DOMContentLoaded', function() {

  var obj
  
  try {
    obj = JSON.parse(localStorage.getItem('message'))
  } catch(e) {
    obj = {}
  }
  

  if (obj && obj.text && obj.text.trim()) {
    document.querySelector('.standard-text').textContent = obj.text
  } 
})

