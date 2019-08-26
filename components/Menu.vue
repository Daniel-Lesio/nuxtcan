<template>
    <transition name="menu" >
    <div id="menu" v-if="menuOpenx" >
            <div v-on:click="menuClose" >
                <nuxt-link class="menu-link" to="/info">{{ aboutTxt }}</nuxt-link>
            </div>
            <div v-on:click="menuClose" >
                <nuxt-link class="menu-link" to="/portfolio">Portfolio</nuxt-link>
            </div>
            <div v-on:click="menuClose" >
                <nuxt-link class="menu-link" to="/kontakt">{{ ContactTxt }}</nuxt-link>
            </div>
            
    </div>
    </transition>
    
</template>
<script>
export default {
    data(){
        return{

        }
    },
    
    computed : {
        menuOpenx(){
            return this.$store.state.menuOpen
        },
        lang(){
          return  this.$store.state.lang
        },
        aboutTxt(){
            if(this.lang){
                return 'about me'
            }
            else{
                return 'o mnie'
            }
        },
        ContactTxt(){
            if(this.lang){
                return 'Contact'
            }
            else{
                return 'Kontakt'
            }
        },

    },
    methods : {
        menuClose(){
            this.$store.commit("MENU_OPEN",false)
        }
    }
}
</script>
<style lang="scss" scoped>
    #menu {
        overflow-y: scroll;
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        min-height: 100vh;
        background: #1c1c1c;
        z-index: 3;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color : #008f5f;
    }
    .menu-enter-active{
        animation-name: anim;
        animation-duration: 1s;
    }
    .menu-leave-active{
       animation-name: anim;
        animation-duration: 2s;
    animation-direction: reverse;
    }
    @keyframes anim {
        0%{
            transform: translateY(100vh)
        }
        100%{
            transform: translateY(000px)
        }
    }
    .menu-link{
        font-weight: 900;
        font-size: 40px;
        letter-spacing: 2px;
        transition: ease-in-out 0.7s all;
        line-height: 2em;
         &:hover{
             letter-spacing: 5px;
             color: #00E597;
         }
    }
</style>
