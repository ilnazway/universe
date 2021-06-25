const form = document.querySelector('form')

form.addEventListener('submit', event => {
  event.preventDefault()

  const title = form.title.value
  const tags = form.tags.value
  const description = form.description.value

  saveForm(title, tags, description)
})

// Usuall
// function saveForm({title, tags, description}) {
//   const formData = {
//     date: new Date().toLocaleDateString(),
//     title,tags,description
//   }

//   console.log('Form data', formData)
// }


// Spread - разворачивать объекты
// function saveForm(data) {
//   const formData = {
//     date: new Date().toLocaleDateString(),
//     ...data
//   }
  
//   console.log('Form data', formData)
// }


// Rest - сбор всех параметров
function saveForm(...args) {

  console.log(args)

  const [title, tags, description] = args
  const formData = {
    date: new Date().toLocaleDateString(),
    title, tags, description
  }
  
  console.log('Form data', formData)
}



