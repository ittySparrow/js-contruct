import { block } from '../utils'
import { ColumnsBlock, ImageBlock, TextBlock, TitleBlock } from './blocks'

export class Sidebar {
  constructor(selector, updateCallback) {
    this.$el = document.querySelector(selector)
    this.init()
    this.update = updateCallback
  }

  get template() {
    return [
      block('title'),
      block('columns'),
      block('image'),
      block('text'),
    ].join('')
  }

  init() {
    this.$el.insertAdjacentHTML('afterbegin', this.template)
    this.$el.addEventListener('submit', this.add.bind(this))
  }

  add(e) {
    e.preventDefault()
    const type = e.target.name
    const styles = e.target.styles.value
    const text = e.target.value.value

    const Block = {
      text: TextBlock,
      title: TitleBlock,
      image: ImageBlock,
      columns: ColumnsBlock,
    }

    this.update(new Block[type](text, { styles }), type)

    e.target.value.value = ''
    e.target.styles.value = ''
  }
}
