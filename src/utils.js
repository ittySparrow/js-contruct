export function row(content, styles) {
  return `<div class="row" style="${styles}">${content}</div>`
}
export function col(content) {
  return `<div class="col-sm">${content}</div>`
}
export function css(styles = {}) {
  if (typeof styles === 'string') return styles
  const toString = (key) => `${key}: ${styles[key]}`
  return Object.keys(styles).map(toString).join(';')
}
export function block(type) {
  const placeholder =
    type === 'image'
      ? 'image url'
      : type === 'columns'
      ? 'text1;text2;text3'
      : 'text'
  return `
  <form name="${type}">
    <h5>${type}</h5>
    <div class="form-group">
      <input class="form-control form-control-sm" name="value" placeholder="${placeholder}">
    </div>
    <div class="form-group">
      <input class="form-control form-control-sm" name="styles" placeholder="styles">
    </div>
    <button type="submit" class="btn btn-primary btn-sm">Изменить</button>
  </form>
  <hr />`
}
