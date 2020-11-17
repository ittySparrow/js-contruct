export class Site {
  constructor(selector) {
    this.$el = document.querySelector(selector)
  }

  render(model) {
    this.$el.innerHTML = ''
    Object.keys(model).forEach((key) =>
      site.insertAdjacentHTML('beforeend', model[key].toHTML())
    )
  }
}
