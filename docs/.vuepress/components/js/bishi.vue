<template>
    <div>
        斐波那契数列计算
        {{result}}
    </div>
</template>

<script>
export default {
    data(){
        return {
            result:12
        }
    },

    methods:{
        shulie(i){
            if(i==1||i==2)return 1;
            if(i>2) return this.shulie(i-1)+this.shulie(i-2);
        }
    },
    mounted(){
        this.result  = this.shulie(20)
    }
}
</script>

