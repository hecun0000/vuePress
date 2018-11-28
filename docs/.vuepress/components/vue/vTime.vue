<template>
  <div>
      <span class="label">
        现在的时间： {{nowDate}}
      </span>
   
    <br>
     <span class="label">
          三秒前： {{someSecsOgo}}
      </span>
     格式化后：{{formatSomeSecsOgo}}
    <br>
     <span class="label">
          四分钟前： {{someMinsOgo}}
      </span>
     格式化后：{{formatSomeMinsOgo}}
    <br>
     <span class="label">
          3小时前： {{someHourOgo}}
      </span>
     格式化后：{{formatSomeHourOgo}}
    <br>
     <span class="label">
          六天前： {{someDaysOgo}}
      </span>
     格式化后：{{formatSomeDaysOgo}}
    <br>
     <span class="label">
           很多天以前： {{longOgo}} 
      </span>
   格式化后：{{formatLongOgo}}
    <br>
  </div>
</template>
<script>
import Time from "../../public/utils/vue/time.js";
export default {
  data() {
    return {
      nowDate: "",
      someSecsOgo: "",
      someMinsOgo: "",
      someHourOgo:"",
      someDaysOgo: "",
      longOgo: "",
      formatSomeSecsOgo: "",
      formatSomeMinsOgo: "",
      formatSomeHourOgo:"",
      formatSomeDaysOgo: "",
      formatLongOgo: ""
    };
  },
  mounted() {
    this.initTime();
  },
  methods: {
    initTime() {
      let now = new Date().getTime();
      this.nowDate = this.nsToText(now);
      let someSec = now - 3000;
      let someMins = now - 1000 * 60 * 4;
      let someHour = now - 1000 * 60 * 60 *3;
      let someDays =  now - 1000 * 60 * 60 * 24 * 6;
      let long =  now - 1000 * 60 * 60 * 24 * 40;
      this.someSecsOgo = this.nsToText(someSec);
      this.someMinsOgo = this.nsToText(someMins);
      this.someHourOgo = this.nsToText(someHour);
      this.someDaysOgo = this.nsToText(someDays);
      this.longOgo = this.nsToText(long);
     
      
      //   格式化
      this.formatSomeSecsOgo = new Time().getFormatTime(someSec);
      this.formatSomeMinsOgo = new Time().getFormatTime(someMins);
      this.formatSomeHourOgo = new Time().getFormatTime(someHour);
      this.formatSomeDaysOgo = new Time().getFormatTime(someDays);
      this.formatLongOgo = new Time().getFormatTime(long);
     
    },
    nsToText(ns) {
      let date = new Date(ns);
      let y = date.getFullYear();
      let m = date.getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      let h = date.getHours();
      h = h < 10 ? "0" + h : h;
      let minute = date.getMinutes();
      let second = date.getSeconds();
      minute = minute < 10 ? "0" + minute : minute;
      second = second < 10 ? "0" + second : second;
      return y + "-" + m + "-" + d + " " + h + ":" + minute + ":" + second;
    }
  }
};
</script>

<style lang="scss" scoped>
.label {
    width: 300px;
    display: inline-block
}
</style>


