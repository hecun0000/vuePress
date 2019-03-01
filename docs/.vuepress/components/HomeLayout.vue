<template>
    <div class="index">
        <div class="content-box">
            <h2 class="title">hecun</h2>

            <img src="http://static.hecun.site/hecun.321c947a.jpg" alt="" class="logo">
            <p class="info">生命不息   奋斗不止</p>
            <div class="btn-list">
                <a href="/js/">JavaScript</a>
            <a href="/css/">Css</a>
            <a href="/vue/">Vue</a>
            </div>
            
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
    /* .index {
        position: relative;
    } */

    .content-box {
        position: absolute;
        width: 300px;
        height: 350px;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        z-index: 7;
        background: #ffffffcc;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items:center; 
        border-radius: 10px;
        padding: 15px 0;
    }

    .content-box .title {
        width: 80%;
    }
    .logo  {
        width: 150px;
        height: 150px;
        display: block;
        border-radius: 50%;
    }
    .btn-list {
        width: 60%;
        display: flex;
        justify-content: space-between;
    }
</style>
