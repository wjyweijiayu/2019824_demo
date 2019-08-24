<template>
<div>
  <router-view></router-view>
   <Footguide></Footguide>
</div>
</template>
<script>
import Footguide from './components/Footguide/Footguide'
export default {
    components:{
       Footguide
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" >

</style>