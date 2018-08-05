<template>
    <div class="index">
        <div class="content">
            <h2>hecun</h2>
            <a href="/js/">JavaScript</a>
        </div>

        <waves></waves>   
    </div>
</template>
<script>
import waves from './main/index_bg_waves'
export default {
    components:{
        waves
    }
}
</script>

<style scoped>
    .index {
        position: relative;
    }

    .content {
        position: absolute;
        width: 300px;
        height: 300px;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        z-index: 10;
        background: #ffffffcc;
        text-align: center;
    }

</style>
