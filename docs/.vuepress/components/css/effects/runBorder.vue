<template>
    <div  class="running">
        <div class="container">
            hecun
        </div>
    </div>
</template>
<style lang="scss" scoped>
.running {
  width: 100%;
  height: 250px;
  font-size: 60px;
  line-height: 250px;
  text-align: center;
  color: #fff;
  background: repeating-linear-gradient(
    158.78deg,
    transparent,
    transparent 15px,
    #999 0px,
    #999 30px
  );
  animation: shine 3s infinite linear;
  padding: 1px;
  .container {
    background-image: linear-gradient(to right, #74ebd5 0%, #9face6 100%);
  }
}
@keyframes shine {
  0% {
    background-position: -1px -1px;
  }

  100% {
    background-position: -120px -120px;
  }
}
</style>
