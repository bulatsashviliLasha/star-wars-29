<template>
  <div class="errorHandler">
    {{ err }}
  </div>
</template>

<script setup>
const props = defineProps(['err']);
</script>

<style lang="scss">
.errorHandler {
  color: #f00;
  font-size: 16px;
}
</style>
