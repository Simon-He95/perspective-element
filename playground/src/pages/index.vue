<script setup lang="ts">
import { perspectiveElement } from '../../../src'
const img1 = ref<HTMLImageElement>(null)
const img2 = ref<HTMLImageElement>(null)
const img3 = ref<HTMLImageElement>(null)
const mousemove = (e: MouseEvent) => {
  if (img1.value)
    perspectiveElement(e, img1.value, 0.5)
  if (img2.value)
    perspectiveElement(e, img2.value, 0.3)
  if (img3.value)
    perspectiveElement(e, img3.value, 0.9)
}
</script>

<template>
  <div class="parent" relative overflow="hidden" @mousemove="mousemove">
    <div
      ref="img1"
      class="a-img1"
      absolute
      left-0
      top-0
      w-full
      pointer-events-none
    >
      2
    </div>
    <div
      ref="img2"
      class="a-img2"
      absolute
      left-50
      top-0
      z-2
      w-100
      pointer-events-none
    >
      4
    </div>
    <div
      ref="img3"
      class="a-img3"
      absolute
      left-100
      top-0
      z-1
      w-100
      pointer-events-none
    >
      6
    </div>
  </div>
</template>

<style>
div {
  height: 100vh;
  color: #fff;
  line-height: 100vh;
  text-align: center;
  font-size: 20vh;
}
.parent {
  perspective: 1px;
  transform-style: preserve-3d;
}

.a-img1 {
  background-image: url(https://images.pexels.com/photos/1097491/pexels-photo-1097491.jpeg);
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
}

.a-img2 {
  background-image: url(https://images.pexels.com/photos/2437299/pexels-photo-2437299.jpeg);
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
  transform: translateZ(-2px);
}

.a-img3 {
  background-image: url(https://images.pexels.com/photos/1005417/pexels-photo-1005417.jpeg);
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
  transform: translateZ(-3px);
}
</style>
