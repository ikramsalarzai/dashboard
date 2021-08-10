<template>
  <div id="page-wrapper" class="gray-bg dashbard-1">
      <app-top />
    <app-footer />      
    <router-view />
  </div>
</template>

<script>
// import Dashboard1Vue from './Dashboard1.vue'
import topVue from './top.vue'
import footer from './footer.vue'
export default {
components:{
    'app-top':topVue,
    // 'app-dash1':Dashboard1Vue,
    'app-footer':footer

}

}
</script>

<style>

</style>