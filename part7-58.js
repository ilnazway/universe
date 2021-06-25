const createPost = (title, content = 'Defaul content', date = new Date().toLocaleTimeString()) => {
  return {title,content,date}
}

const animePost = createPost('Сатана на подработке', 'Парень с согромной силой и прислужником')

console.log(animePost)


