<template>
  <article>
    <LinkItem v-for="item in items"
              :key="item.id"
              :routeName="routeName"
              :id="item.id"
              :title="item[titleProperty]"
              :subtitle="item[subtitleProperty]">
    </LinkItem>
    <p v-if="!items.length"
       class="noResults">
      No results found
    </p>
  </article>
</template>

<script setup>
import LinkItem from '@/components/LinkItem.vue';

const props = defineProps([
  'items',
  'routeName',
  'titleProperty',
  'subtitleProperty'
]);
</script>

<style lang="scss">
.noResults {
  padding-left: 5px;
  font-size: 20px;
}
</style>
