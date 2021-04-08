<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1> Hi this is new awesome code</h1>
  </div>
</template>

<script>
import { api } from "../models/myFetch";

( async ()=>{
  const actualItem = await api("posts");
  console.log({actualItem});
})()

// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    
  }
}
</script>
