<template>
  <div>    
    <Back/>
    <div class="menu-btn" v-on:click="openMenu" v-bind:class="{ menuBtn : menuState  }"   >
      <svg width="34" height="34" viewBox="0 0 24 24"><path fill='#1c1c1c' d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/><path d="M0 0h24v24H0z" fill="none"/></svg> 
    </div>
    <nuxt/>
    <Menu></Menu>
    <Lang></Lang>
  </div>
</template>
<script>
import Back from '@/components/Back.vue'
import Menu from '@/components/Menu.vue'
import Lang from '@/components/Lang.vue'

export default {
  components:{
    Lang,
    Menu,
    Back

  },
  data(){
    return {
      menuOpen :false
    }
  },
  computed:  {
    menuState(){
      return this.$store.state.menuOpen
    }
  },
  methods : {
    openMenu(){
      if(this.menuState === false){
        this.$store.commit('MENU_OPEN',true)
      }
      else{
           this.$store.commit('MENU_OPEN',false)
        
      }
    }
  }
}
</script>
<style lang='scss'>
@import url('https://fonts.googleapis.com/css?family=Poppins:400,600,700');
*{  line-height: 1.4;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
*::after,*::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;

}
a{
  color: inherit;
  text-decoration: none;
}
h1{
  letter-spacing: 2px;
  color: #008f5f;      
}
.menu-btn{
        cursor: pointer;
        position: fixed;
        width: 50px;
        height: 50px;
        background: white;
        top: 10px;
        left: 5px;
        z-index: 44444;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all ease-in-out .7s;
        position: relative;
          &:hover{
            border-radius: 50%;
          }
          &::after{
            content: 'Menu';
            position: absolute;
            right: -100%;
            transform: translateY(-50%);
            top: 50%;
            color: white;

          }

    }
    .menuBtn{
      transform: rotate(180deg)
    }
    .shadow {
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

.shadow:hover {
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}
.mt-2{
  margin-top: 20px;
}
</style>
