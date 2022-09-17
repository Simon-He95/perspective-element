## perspective-element
将图片元素加上跟随鼠标的视差效果

## :rocket: 安装 
```bash
npm i -g perspective-element
```



## :eyes: 使用 
```bash
import { perspectiveElement } from 'perspective-element'
const img1 = ref<HTMLImageElement>(null)
const img2 = ref<HTMLImageElement>(null)
const img3 = ref<HTMLImageElement>(null)
const mousemove = (e: MouseEvent) => {
  if (img1.value)
    perspectiveElement(e, img1.value, 0.5)
}

## template
  <div class="parent" relative overflow="hidden" @mousemove="mousemove">
    <img
      ref="img1"
      class="a-img1"
      src="xxxx"
      absolute
      left-0
      top-0
      w-full
      pointer-events-none
    >
    </div>
  </div>
```


## :warning: 注意
- 图片元素需要设置pointer-events-none 和 absolute
- 容器元素需要relative


## :tea: 
[请我喝一杯咖啡](https://github.com/Simon-He95/sponsor)



## :question: 问题
[issues](https://github.com/Simon-He95/perspective-element/issues)
