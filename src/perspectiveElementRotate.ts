import { addEventListener } from 'simon-js-tool'
export function perspectiveElementRotate(container: HTMLImageElement | string, frequency = 0.5): () => void {
  const stopMove = addEventListener(container, 'mousemove', (e) => {
    const el = e.target as HTMLElement
    const left = el.getBoundingClientRect().left
    const top = el.getBoundingClientRect().top
    const w = el.getBoundingClientRect().width
    const h = el.getBoundingClientRect().height
    const scrollTop = document.documentElement.scrollTop + document.body.scrollTop
    const mouseX = e.pageX - left
    const mouseY = e.pageY - scrollTop - top

    const X = (mouseX - w / 2) / w / 100
    const Y = (h / 2 - mouseY) / h / 100
    el.style.transform = `perspective(300px) rotateY(${X * frequency}deg) rotateX(${Y * frequency}deg)`
  })

  const stopLeave = addEventListener(container, 'mouseleave', (e) => {
    const el = e.target as HTMLElement
    el.style.transform = 'perspective(300px) rotateY(0deg) rotateX(0deg)'
  })
  return () => {
    stopMove()
    stopLeave()
  }
}
