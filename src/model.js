import image from './assets/Bird.png'
import {
  ColumnsBlock,
  ImageBlock,
  TextBlock,
  TitleBlock,
} from './classes/blocks'

const text = `
Это учебный сайт-конструктор, написанный на чистом JavaScript. Короткий образовательный проект от этого крутого чувака: <a href="https://youtube.com/c/VladilenMinin" target="_blank">Владилен Минин</a>. 
`

export const model = {
  title: new TitleBlock('Конструктор сайтов на JS', {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(to right, #ff0099, #493240)',
      color: '#fff',
      'padding-left': '1.5rem',
      'text-align': 'center',
    },
  }),
  columns: new ColumnsBlock(
    [
      'Приложение на чистом JavaScript, без использования библиотек',
      'SOLID и ООП в JavaScript на практике',
      'Собран с помощью Parcel',
    ],
    {
      styles: {
        background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
        padding: '2rem',
        color: '#fff',
        'font-weight': 'bold',
      },
    }
  ),
  image: new ImageBlock(image, {
    styles: {
      padding: '2rem 0',
      display: 'flex',
      'justify-content': 'center',
    },
    imageStyles: {
      width: '200px',
      height: 'auto',
    },
    alt: 'Это изображение',
  }),
  text: new TextBlock(text, {
    styles: {
      background: 'linear-gradient(to left, #f2994a, #f2c94c)',
      padding: '1rem',
      'font-weight': 'bold',
      'text-align': 'center',
    },
  }),
}
