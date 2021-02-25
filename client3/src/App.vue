<template>
  <div id="app">
    <myNav />    
    <div class="container">
      <router-view/>

    </div>


  </div>
</template>

<script>
import myNav from "./components/Nav";

export default {
  components: {
    myNav
  }


}
</script>
<style lang="scss">

</style>
