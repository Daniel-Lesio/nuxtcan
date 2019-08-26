<template>
    <page class="konr">
        <h1></h1>
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
</style>


