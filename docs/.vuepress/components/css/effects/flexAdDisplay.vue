<template>
    <div class="contianer">
        <div class="item" v-for="(item,index) in flexData" :key='index' @click='toggleOpen(index)' :class="{'open':item.open,'open-active':!item.open}">
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
      this.flexData.map(item => {
        item.open = false;
      });
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
      flex 0.7s cubic-bezier(0.61, -0.19, 0.7, -0.11), background 0.2s;

    @for $i from 1 through length($bgColors) {
      &:nth-child(#{$i}) {
        background: nth($bgColors, $i);
      }
    }

    div {
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
    .open-active {
      &:first-child {
        transform: translateY(0);
      }

      &:last-child {
        transform: translateY(0);
      }
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

