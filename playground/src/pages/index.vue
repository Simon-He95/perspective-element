<script setup lang="ts">
import { preload } from 'lazy-js-utils'
import { perspectiveElementMove, perspectiveElementRotate } from '../../../src'
preload(
  ['https://images.pexels.com/photos/1097491/pexels-photo-1097491.jpeg'],
  '',
)
perspectiveElementMove('.parent', [
  {
    image: '.a-img1',
    speed: 0.3,
  },
  {
    image: '.image-1',
    speed: 0.6,
  },
])
perspectiveElementRotate('.image-2')
</script>

<template>
  <div class="parent" relative overflow="hidden">
    <div class="a-img1" absolute left-0 top-0 w-full pointer-events-none />
    <!-- <div class="a-img2" absolute left-50 top-0 z-2 w-100 pointer-events-none>
      4
    </div>
    <div class="a-img3" absolute left-100 top-0 z-1 w-100 pointer-events-none>
      6
    </div> -->
    <img
      src="/1.png"
      class="image-1"
      absolute
      left-50
      bottom-10
      z-2
      w-100
      alt=""
    >
    <img
      src="/2.png"
      class="image-2"
      absolute
      left-200
      bottom-10
      z-1
      w-50
      alt=""
    >
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
