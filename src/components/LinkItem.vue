<template>
  <router-link :to="route"
               class="linkItem">
    <p class="title">{{ title.charAt(0).toUpperCase() + title.substring(1) }}</p>
    <p class="subtitle">{{ subtitle.charAt(0).toUpperCase() + subtitle.substring(1) }}</p>
  </router-link>
</template>

<script>
export default {
  name: 'LinkItem',
  props: [
    'routeName',
    'title',
    'subtitle',
    'id'
  ],
  computed: {
    route() {
      return `/${this.routeName}/${this.id}`;
    }
  }
};
</script>

<style lang="scss">
@import '../css/_variables.scss';

.linkItem {
  width: 100%;
  padding: 5px 10px;
  border-radius: 6px;
  margin-bottom: 10px;
  background-color: $star-wars-gray;
  font-weight: bold;

  .title {
    padding-bottom: 2px;
    font-size: 20px;
    color: $star-wars-yellow;
  }

  .subtitle {
    padding-left: 4px;
    font-size: 16px;
  }

  &:hover {
    background-color: $star-wars-gray-opacity;
  }
}
</style>
