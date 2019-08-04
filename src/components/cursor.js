// Mosne custom cursor
import React from "react"



const Mosnecursor = () => {

  if (typeof window !== 'undefined') {

    const initMosnecursor = () =>  {
      const currHtml = document.createElement('div')
      const currstr = `<div class="custom-cursor"><div class="cursor"></div></div><div class="custom-cursor custom-cursor-too"><div class="cursor"></div></div>`
      currHtml.innerHTML = currstr;
      const mainwrapper = window.document.getElementById(`___gatsby`)
      mainwrapper.appendChild(currHtml)
    }

    const mcurr = window.document.getElementsByClassName(`custom-cursor`)

    if (mcurr.length === 2){
      console.log('total cursor',mcurr.length)
    }else{
      initMosnecursor()
    }

    window.addEventListener(`mousemove`, (e) => {
      window.requestAnimationFrame(() => {
        let x = e.clientX
        let y = e.clientY
        mcurr[0].setAttribute(
          `style`,
          `transform : matrix(1, 0, 0, 1, ${x},${y});`
        )
        mcurr[1].setAttribute(
          `style`,
          `transform : matrix(1, 0, 0, 1, ${x},${y});`
        )
      })
    })

    const alinks = window.document.querySelectorAll("a")
    alinks.forEach(element => {

        element.addEventListener(`mouseenter`, () => {
          mcurr[0].classList.add("custom-cursor-active")
          mcurr[1].classList.add("custom-cursor-active")
          // console.log(mcurr[0],mcurr[1],'hover')
        })

        element.addEventListener(`mouseleave`, () => {
          mcurr[0].classList.remove("custom-cursor-active")
          mcurr[1].classList.remove("custom-cursor-active")
          // console.log('out')
        })

      })

      const imgitems = window.document.querySelectorAll(".featured-image")
      imgitems.forEach(element => {

          element.addEventListener(`mouseenter`, () => {
            mcurr[0].classList.add("custom-cursor-active-img")
            mcurr[1].classList.add("custom-cursor-active-img")
            // console.log(mcurr[0],mcurr[1],'hover')
          })

          element.addEventListener(`mouseleave`, () => {
            mcurr[0].classList.remove("custom-cursor-active-img")
            mcurr[1].classList.remove("custom-cursor-active-img")
            // console.log('out')
          })

        })
      }
        return null;
    }


    export default Mosnecursor