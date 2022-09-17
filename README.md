## perspective-element
- perspectiveElementMove: 将图片元素加上跟随鼠标的平移视差效果
- perspectiveElementRotate: 将图片元素加上跟随鼠标的旋转视差效果

## :rocket: 安装 
```bash
npm i -g perspective-element
```


## 特点
- 事件会自动销毁，不需要手动销毁
- 也可以手动销毁事件,返回一个销毁函数

## :eyes: 使用 
```bash
import { perspectiveElementMove, perspectiveElementRotate } from 'perspective-element'
# 可以直接调用传入父容器和子容器的配置class和speed
const stop = perspectiveElementMove(".parent", [
  {
    image: ".a-img1",
    speed: 0.5,
  },
  {
    image: ".a-img2",
    speed: 0.3,
  },
  {
    image: ".a-img3",
    speed: 0.9,
  },
]);

## 传入imageClass和speed
const stop = perspectiveElementRotate('.a-img1', 0.5)

```


## :warning: 注意
- 图片元素需要设置pointer-events-none 和 absolute
- 容器元素需要relative


## :tea: 
[请我喝一杯咖啡](https://github.com/Simon-He95/sponsor)



## :question: 问题
[issues](https://github.com/Simon-He95/perspective-element/issues)

## 依赖
- [simon-js-tool](https://github.com/Simon-He95/simon-js-tool)
