<template>
     <div class="jd">
        <button class='buy-now'>
            立即购买
        </button>
    </div>
</template>
<style scoped>
.jd .buy-now {
  background: #29a5f8;
  color: #fff;
  text-align: center;
  display: block;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  width: 132px;
  border-radius: 4px;
  transition: all 0.5s ease 0s;
  border: 0;
  outline: 0;
  transition: all 0.5s ease 0s;
  margin-top: 
}

.jd .buy-now::before {
  content: " ";
  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0)
  );
  width: 85px;
  height: 35px;
  position: absolute;
  left: -30px;
  animation: user_MyHjf8SpWr 2s 0s infinite normal linear;
}

.jd .buy-now:after {
  content: " >";
  font-family: simsun;
  font-weight: bold;
  font-size: 12px;
}

@keyframes user_MyHjf8SpWr {
  0% {
    transform: translateX(0) skewX(-30deg);
  }
  100% {
    transform: translateX(650px) skewX(-30deg);
  }
}
</style>
