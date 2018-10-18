# 来一个效果

::: tip 
该效果是之前在codeopen上面看到的，就想了然后用vue来实现。
:::


## 效果展示

<css-effects-flexAdDisplay/>


## 思路

1. 先利用flex写好里面布局
2. 当点击相应的某一项的时候，去改变该项的flex-grow的值，并加上相应的动画
3. 当每项中的动画完成后，添加上下部分的动画

```VUE
<template>
    <div class="contianer">
        <div class="item" v-for="(item,index) in flexData"
         :key='index' @click='toggleOpen(index)' 
         :class="{'open':item.open,'open-active':item.open}">
            <div class="top">{{item.top}}</div>
            <div class="mid">{{item.mid}}</div>
            <div class="bottom">{{item.bottom}}</div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      flexData: [
        {
          top: "hecun",
          mid: "禾寸",
          bottom: "HECUN",
          open: false,
          active: false
        },

        {
          top: "hecun",
          mid: "禾寸",
          bottom: "HECUN",
          open: false,
          active: false
        },

        {
          top: "hecun",
          mid: "禾寸",
          bottom: "HECUN",
          open: false,
          active: false
        },

        {
          top: "hecun",
          mid: "禾寸",
          bottom: "HECUN",
          open: false,
          active: false
        },

        {
          top: "hecun",
          mid: "禾寸",
          bottom: "HECUN",
          open: false,
          active: false
        }
      ]
    };
  },
  methods: {
    toggleOpen(index) {
      this.flexData[index].open = !this.flexData[index].open;
    }
  },
  mouted() {}
};
</script>
<style lang='scss' scoped>
.contianer {
  display: flex;
  overflow: hidden;
  min-height: 300px;

  $bgColors: #b03532 #33a8a5 #30997a #6a478f #da6f2b;
  .item {
    color: #fff;
    flex: 1;
    text-align: center;
    align-items: center;
    flex-direction: column;
    display: flex;
    justify-content: center;
    font-size: 20px;
    transition: font-size 0.7s cubic-bezier(0.61, -0.19, 0.7, -0.11),
      flex 0.7s cubic-bezier(0.61, -0.19, 0.7, -0.11);
    cursor: pointer;

    @for $i from 1 through length($bgColors) {
      &:nth-child(#{$i}) {
        background: nth($bgColors, $i);
      }
    }

    > * {
      margin: 0;
      width: 100%;
      transition: transform 0.5s linear 0.7s;
      flex: 1 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;

      &:first-child {
        transform: translateY(-100%);
      }

      &:last-child {
        transform: translateY(100%);
      }
    }

    &.open-active > *:first-child {
      transform: translateY(0);
    }

    &.open-active > *:last-child {
      transform: translateY(0);
    }

    div {
      font-size: 0.8em;
      opacity: 0.8;
    }

    &.open {
      flex: 5;
      font-size: 40px;
    }
  }
}
</style>


```
