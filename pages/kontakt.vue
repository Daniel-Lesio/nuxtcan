<template>
    <page class="konr">
        <div class="box box-1">
          <h1>{{ ContactTxt }}</h1>
          <a href='#' class="name">daniel lesiewicz</a>
          <a href='tel:+48667221779' class="info">{{ mobTxt }}.: (0048) 667 221 779 </a>
          <a href='mailto:lesiewicz@gmail.com' class="info">email: lesiewiczsales@gmail.com </a>  
        </div>
        <div class="box box-2">
        <form name="contact" method="POST" data-netlify="true">
  
    <label class="label">Your Name: <input type="text" name="name" /></label>   
  
  
    <label class="label">Your Email: <input type="email" name="email" /></label>
  
  
    <label class="msg mt-2 label">Message: <textarea name="message"></textarea></label>
  
    
<div class="btn mt-2" type="submit">Wyślij</div>  
</form>
        </div>
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
    text-align: center;
    display: flex;
    flex-direction: column;
      .box{
        min-height: 100px;
      }
      .box-2{
      }
        h1{
            margin-bottom: 20px;
            color: #008f5f;
        }
        
}
    form{
          display: flex;
          flex-direction: column;
          .label{
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            margin-top: 20px;
            input{
              background: inherit;
              border : inherit;
              border-bottom: #008f5f 1px solid;
              width: 50%;

            }
            textarea{
              line-height: 40px;
              background: inherit;
              border : inherit;
              border: #008f5f 1px solid;
              width: 50%;
     
            }
           
          }
        }
    textarea, input {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.btn{
  border: solid 2px #008f5f;
  align-self: center;
  padding: 10px 20px;
  margin-top: 50px;
  position: relative;
  transition: .3s all ease;
  cursor: pointer;
  &:hover{
    background: white;
    color: #008f5f;
  }
}
</style>


