<template>
    <page class="konr">
        <div class="flex-grid">
            <div class="box basic">
                <h1>Hi,</h1>
                <p>my name is Daniel Lesiewicz I`m Web Developer. </p>
                <p>I live in Bełchatów, Poland.</p>
                <div class="inspire mt-2">
                    <p>My <span class="accent">favorite</span> tools are :</p>
                    <p 
                    style='max-width: 100%'
                    class="mt-2">JavaScript , Html5 , SCSS , Vue ,Vuex , Nuxt , Angular,RestApi,Google Firebase,Wordpress.
                    </p>
                    <p class="mt-2"><span class="accent">I know little bit</span> tools like :</p>
                    <p class="mt-2">
                        PHP ,Python, Laravel , React ,lumen , SlimPhp.
                    </p>
                </div>
                <p></p>
                <p class="mt-2"></p>
            </div>
            <div class="box me">
                <img src="../assets/ja.jpg" alt="">
            </div>
        </div>
    </page>
  </template>
<script>
import page from '@/layouts/page'
import Web from '@/components/Web'
export default {
  components: {
    page,
    Web
  },
  computed :{
    lang(){
          return  this.$store.state.lang
        },
    ContactTxt(){
      return (this.lang)?'contact':'Kontakt'
    },
    mobTxt(){
            return (this.lang)?'mob':'tel'
    }
  }
}
</script>
<style lang="scss" scoped>
    .konr{
        background: #1c1c1c;
        margin-bottom: 50px;
        position: absolute;
        transform: translateX(-50%);
        left: 50%;
        top: 100px;
        padding: 20px;
        color: white;
        border-radius: 5px;
        letter-spacing: 3px;
        display: flex;
        flex-direction: column;
        text-align: center;
        h1{
            margin-bottom: 20px;
            color: #008f5f;
        }
        
}
.flex-grid{
    display: flex;
    flex-wrap: wrap;
        .box{
            margin-left: auto;
            margin-right: auto;
            width: 500px;
            max-width: 90%;
                img{
                    max-width: 100%
                }
        }
    .basic{
        padding: 20px;
    }
}
.inspire{
    
    display: flex;
    flex-direction: column;
        .accent{
            color: #008f5f;
            
        }
}
</style>


