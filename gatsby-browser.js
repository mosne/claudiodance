// custom typefaces
import './static/webfonts/fonts.css'

// sacss styles
import './src/scss/style.scss'

// custom cursor init
if (typeof window !== 'undefined') {

  const currHtml = document.createElement('div')
  const currstr = `<div class="custom-cursor"><div class="cursor"></div></div><div class="custom-cursor custom-cursor-too"><div class="cursor"></div></div>`
  currHtml.innerHTML = currstr;
  document.body.appendChild(currHtml)
  const mCurr = window.document.getElementsByClassName(`custom-cursor`)

  window.addEventListener(`mousemove`, (e) => {
    window.requestAnimationFrame(() => {
      let x = e.clientX
      let y = e.clientY
      mCurr[0].setAttribute(
        `style`,
        `transform : matrix(1, 0, 0, 1, ${x},${y});`
      )
      mCurr[1].setAttribute(
        `style`,
        `transform : matrix(1, 0, 0, 1, ${x},${y});`
      )
    })
  })
}