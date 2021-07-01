// Про добавление тегов через js
// Использование шаблонизатора и спец кавычек

const createLink = ({path, name}) => `<a target="_blank" href="${path}">${name}</a>`

const ul = document.querySelector('ul')

const google = `<li>${createLink({path: 'https://www.google.ru/', name: 'Google'})}</li>`

const yandex = `<li>${createLink({path: 'https://ya.ru/', name: 'Yandex'})}</li>`

ul.insertAdjacentHTML('afterbegin', google)
ul.insertAdjacentHTML('afterbegin', yandex)

