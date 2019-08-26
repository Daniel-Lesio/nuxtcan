<template>
  <page class="">
    

  </page>
  </template>

<script>
import page from '@/layouts/page'
import Header from '@/components/Header'

export default {
  components: {
    Header,
    page
  }
}
</script>

<style lang="scss" scoped>
.grid{
  display: grid;
  grid-gap: 20px 20px;
  @media screen and(min-width: 769px) {
  grid-template-columns: repeat(3,1fr);
    }
    .grid-box{
      padding: 20px;      
      background: rgba(rgb(189, 149, 149), 0.719);
    }
    .two{
     @media screen and(min-width: 769px) {
       grid-column: 1 /  3;
    } 
    }
    .five{
     @media screen and(min-width: 769px) {
       grid-column: 2 /  4;
    } 
    }
}
@media only screen and (max-width: 600px)  {
  .grid{
    grid-template-columns: repeat(1,1fr);
  
  }
}

</style>

