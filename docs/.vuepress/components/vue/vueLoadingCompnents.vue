<template>
    <div class='box'>
        <div class="container">
            <div class="item" v-for="(item,index) in 14" :key="index">
                <span></span>
            </div>
        
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
@import 'node_modules/sass-math/math';
$loadingSize: 200px; // Loading容器的大小
$dotRadius: 24px; // 圆点半径
$dotNums: 14; // 圆点个数(需要和div.loading中子元素div个数对应起来)
$dotColor: #025fbc; // 圆点颜色著作权归作者所有。

.box {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  width: $loadingSize;
  height: $loadingSize;
  color: $dotColor;
  transform-origin: center;
  position: relative;

  div {
    color: $dotColor;
    width: $dotRadius;
    height: $dotRadius;
    margin-top: $dotRadius / 2;
    margin-left: $dotRadius / 2;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 100%;

    span {
      width: $dotRadius;
      height: $dotRadius;
      animation: ball-spin 1s infinite ease-in-out;
      background-color: currentColor;
      border: 0 solid currentColor;
      display: inline-block;
      border-radius: 100%;
    }
    @for $i from 1 through 14 {
      &:nth-child(#{$i}) {
        transform: translate(
          cos(($i - 1) * 360deg / $dotNums) * $loadingSize / 2,
          sin(($i - 1) * 360deg / $dotNums) * $loadingSize / 2
        );
        & > span {
          animation-delay: -(1 + $i * 1 / $dotNums) * 1s;
        }
      }
    }
  }
}

@keyframes ball-spin {
    0%,
    100% {
      opacity: 1;
      transform: scale(1);
    }
    20% {
      opacity: 1;
    }
    80% {
      opacity: 0;
      transform: scale(0);
    }
}

</style>

