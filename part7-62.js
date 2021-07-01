// RootElement <= Box <= instances
// Создание классов
// Класс на прототипе родительского с передачей данных


class RootElement {
  constructor(tagName = 'div') {
    this.$el = document.createElement(tagName)
    this.$el.style.marginBottom = '10px'
  }

  hide() {
    this.$el.style.opacity = 0
  }

  show() {
    this.$el.style.opacity = 1
  }

  append() {
    document.querySelector('.wrapper').insertAdjacentElement('afterbegin', this.$el)
  }
}

class Box extends RootElement {
  constructor(color, size = 150, tagName) {
    super(tagName)
    this.color = color
    this.size = size
  }

  create() {
    this.$el.style.background = this.color
    this.$el.style.width = this.$el.style.height = `${this.size}px`

    this.append()
    return this
  }
}

class Circle extends RootElement {
  constructor(color, size) {
    super()

    this.color = color
    this.size = size
  }

  create() {
    this.$el.style.borderRadius = '50%'
    this.$el.style.background = this.color
    this.$el.style.width = this.$el.style.height = `${this.size}px`

    this.append()
    return this
  }
}

const redBox = new Box('red', 100, 'div').create()
const greenBox = new Box('green').create()

const circle = new Circle('black', 120).create()

circle.$el.addEventListener('mouseenter', () => {
  circle.hide()
})

circle.$el.addEventListener('mouseleave', () => {
  circle.show()
})




