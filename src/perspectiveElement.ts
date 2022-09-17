export function perspectiveElement(e: MouseEvent, image: HTMLImageElement, speed = 0.5) {
  const x = (e.target as HTMLElement).offsetLeft
  const y = (e.target as HTMLElement).offsetTop
  const mousex = e.clientX - x
  const mousey = e.clientY - y
  const slowX = 20 * (1 + Math.abs(mousex - (e.target as HTMLElement).clientWidth / 2) / ((e.target as HTMLElement).clientWidth / 2))
  const slowY = 20 * (1 + Math.abs(mousex - (e.target as HTMLElement).clientHeight / 2) / ((e.target as HTMLElement).clientHeight / 2))
  const speedX = (mousex - (e.target as HTMLElement).clientWidth / 2) / slowX
  const speedY = (mousey - (e.target as HTMLElement).clientHeight / 2) / slowY
  image.style.transform = `translate(${speedX * speed}px, ${speedY * speed}px)`
}
