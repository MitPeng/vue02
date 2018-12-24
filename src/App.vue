<template>
  <div id="app">
    <Mynavbar/>
    <router-view/>
  </div>
</template>

<script>
import Mynavbar from './components/Mynavbar.vue'

export default {
  name: 'App',
  components:{
    Mynavbar
  }
}
</script>


