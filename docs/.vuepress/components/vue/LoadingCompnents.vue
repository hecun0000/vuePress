<template>
    <div class='ball-box'>
        <div class="container" :style="setContainerStyle">
            <div class="item" v-for="(item,index) in dotNums" :key="index" :style="setBallState(index)">
                <span :style="setBallRun(index)"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    loadingSize: {
      type: Number,
      default: 200 
    },
    dotSize: {
      type: Number,
      default: 10
    },
    dotNums: {
      type: Number,
      default: 20
    },
    dotColor: {
      type: String,
      default: "#025fbc"
    }
  },
  computed:{
    setContainerStyle(){
      return {
        'width': this.loadingSize+'px',
        'height': this.loadingSize+'px',
        'color': this.dotColor
      }
    }
  },
  methods: {
    setBallState(index) {
      // 计算弧度
    let rad = 2 * Math.PI / this.dotNums * index; 
      // 计算x轴的位置
      let dotX = Math.cos(rad) * this.loadingSize / 2; 
      // 计算y轴的位置
      let dotY = Math.sin(rad) * this.loadingSize / 2;
      return {
        transform: `translate(
          ${dotX}px,
          ${dotY}px
        )`,
        'width': this.dotSize+'px',
        'height': this.dotSize+'px',
        'color': this.dotColor
      };
    },
    setBallRun(index) {
      return {
        "animation-delay": -(1 + (index * 1) / this.dotNums) * 1 + "s"
      };
    }
  }
};
</script>
<style lang="scss" scoped>
.ball-box {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  transform-origin: center;
  position: relative;

  div {
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 100%;

    span {
      width: 100%;
      height: 100%;
      animation: ball-spin 1s infinite ease-in-out;
      background-color: currentColor;
      border: 0 solid currentColor;
      display: inline-block;
      border-radius: 100%;
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

