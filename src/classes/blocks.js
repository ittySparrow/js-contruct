import { col, css, row } from '../utils'

class Block {
  constructor(value, options) {
    this.value = value
    this.options = options
  }

  toHTML() {
    throw new Error('Метод toHTML должен быть реализован')
  }
}
export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    const { tag = 'h1', styles } = this.options
    return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
  }
}
export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    const { styles } = this.options
    return row(col(`<p>${this.value}</p>`), css(styles))
  }
}
export class ColumnsBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    const { styles } = this.options
    const values =
      typeof this.value === 'string' ? this.value.split(';') : this.value

    const html = values.map(col).join('')
    return row(html, css(styles))
  }
}
export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    const { styles, imageStyles: s, alt } = this.options
    return row(
      `<img src='${this.value}' alt='${alt}' style=${css(s)}/>`,
      css(styles)
    )
  }
}
