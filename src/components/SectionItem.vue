<template>
  <section>
    <span class="title">{{ title }}: </span>
    <span>{{ data }}</span>
  </section>
</template>

<script setup>
const props = defineProps(['title', 'data']);
</script>
