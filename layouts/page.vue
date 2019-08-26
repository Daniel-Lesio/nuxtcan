<template>
    <div class="page container" >
        <slot></slot>
    </div>
</template>
<script>
export default {


}
</script>
<style lang="scss" >


.container{
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  @media (min-width: 768px) {
    .container{
      width: 750px;
    }
  }
  @media (max-width: 768px) {
    .container{
      width: 750px;
      max-width: 95%;
    }
  }
  @media (min-width: 992px) {
    .container{
      width: 970px;
    }
  }
  @media (min-width: 1200px) {
    .container{
      width: 1170px;
    }
  }

</style>
