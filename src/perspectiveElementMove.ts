import { addEventListener, isStr } from 'simon-js-tool'
interface PerspectiveMoveOption {
  image: HTMLImageElement | string
  speed: number
}
export function perspectiveElementMove(container: string | HTMLElement, options: PerspectiveMoveOption[] = []): () => void {
  return addEventListener(container, 'mousemove', (e) => {
    const el = (isStr(container) ? document.querySelector(container) : container) as HTMLElement
    const x = el.offsetLeft
    const y = el.offsetTop
    const mousex = e.clientX - x
    const mousey = e.clientY - y
    const slowX = 20 * (1 + Math.abs(mousex - el.clientWidth / 2) / (el.clientWidth / 2))
    const slowY = 20 * (1 + Math.abs(mousex - el.clientHeight / 2) / (el.clientHeight / 2))
    const speedX = (mousex - el.clientWidth / 2) / slowX
    const speedY = (mousey - el.clientHeight / 2) / slowY
    options.forEach((option) => {
      const { image: _image, speed } = option
      let image = _image
      if (isStr(image))
        image = document.querySelector(image) as HTMLImageElement
      if (!image)
        throw new Error(`${image} element is not found`)
      image.style.transform = `translate3d(${speedX * speed}px, ${speedY * speed}px,0px)`
    })
  })
}
