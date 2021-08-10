<template>
  <div id="app">
    <div id="wrapper">
          <app-leftside />
          <app-page />
     </div>
   </div>
</template>

<script>
import leftsideVue from './components/leftside.vue'
import PagesVue from './components/Pages.vue'


// import HelloWorld from './components/HelloWorld.vue'


export default {
  name: 'App',
  components: {
    // HelloWorld
  'app-leftside':leftsideVue,
 'app-page':PagesVue


  }
}
</script>

<style>
*{

box-sizing: border-box !important;
}
</style>
