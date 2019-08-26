<template>
    <div class="lang">
        <h2>
            <span 
            v-bind:class="{'active-lang':lang}"
            v-on:click="changeLang(true)"
            style='cursor:pointer'
            >
            EN
            </span>
            /
            <span
            style='cursor:pointer'
            v-bind:class="{'active-lang':!lang}"
            v-on:click="changeLang(false)"
            >PL</span>
        </h2>
    </div>
</template>
<script>
export default {
    computed : {
        lang(){
            return this.$store.state.lang
        }
    },
    methods :{
        changeLang(bool){
            this.$store.commit('CHANGE_LANG',bool)
        }
    }
}
</script>
<style lang='scss' >
.lang{
    position: fixed;
    right: 30px;
    bottom: 10px;
    color: rgba(255, 255, 255, 0.377);
    
}
.active-lang{
    color: white
}
</style>
