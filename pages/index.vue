<template>
  <page class="home page">
    <h1><strong>Daniel</strong> Lesiewicz</h1>
    <p> <Web></Web> Developer</p>
    <div class="social">
      <img src="..//assets/social/github.svg" alt="">
      <img src="..//assets/social/facebook.svg" alt="">
      <img src="..//assets/social/email.svg" alt="">
    </div>
    <div class="btn">{{ btnTxt }}</div>
  </page>
  </template>

<script>
import page from '@/layouts/page'
import Header from '@/components/Header'
import Web from '@/components/Web'

export default {
  components: {
    Header,
    page,
    Web
  },
  computed : {
    lang(){
          return this.$store.state.lang
        },
    btnTxt(){
            if(this.lang == true ){
                return 'more'
            }
            else{
              return 'więcej'
            }
        },
  }
}
</script>

<style lang="scss" scoped>
.home{
  width: 499px;
  height: 499px;

  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: center;
  flex-direction: column;
    h1{
      text-align: center;
      font-size: 50px;
      color: white;
      background: #1c1c1c;
      line-height: 70px;
      padding: 10px;
      strong{
        font-weight: 900;
      }
      font-weight: 400
    }
    p{
      margin-top: 5px;
      letter-spacing: 7px;
      position: relative;
    }
}
.social{
  display: flex;
  padding: 10px;
    img{
      width: 40px;
      margin: 10px;
      cursor : pointer;
    }
}
.page{
    margin-bottom: 50px;
    position: absolute;
    transform: translate(-50%,-50%);
    left: 50%;
    top: 50%;
    padding: 20px;
    
   
    border-radius: 5px;
    letter-spacing: 3px;
}
.btn{
  overflow: hidden;
  border: #1c1c1c solid 1px;
  padding: 10px 20px;
  border-radius: 2px;
  margin-top: 3px;
  cursor: pointer;
  position: relative;
  transition: all ease-in 0.5s;
  &::after{
    
    content: '';
    position: absolute;
    transform: translate(-50%,-50%);
    left: 50%;
    top: 50%;
    width: 100%;
    height: 0px;
    background: rgba(#1c1c1c,0.4);
    transition: all ease-in-out 1s;
  }
  &:hover{
  color: white;
  border: white solid 1px;
  &::after{
    height: 100%;
    transition: all ease-in-out 1s;
  }
    
  }
}
</style>

