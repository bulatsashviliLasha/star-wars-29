<template>
  <div id="app"
       class="app">
    <Navigation/>
    <router-view></router-view>
  </div>
</template>

<script setup>
import Navigation from '@/components/Navigation.vue';
</script>

<style lang="scss">
  @import "@/css/_style.scss";
  @import "@/css/_main.scss";
</style>
