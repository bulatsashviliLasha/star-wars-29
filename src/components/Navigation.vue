<template>
  <aside>
    <router-link to="/" title="Home">
      <img src="@/assets/logo.png" alt="logo">
    </router-link>
    <nav>
      <template v-for="(link, index) in links" :key="link.name + index">
        <router-link :to="link.to">{{ link.name }}</router-link>
      </template>
    </nav>
  </aside>
</template>

<style lang="scss">
@import '../css/_variables.scss';

aside {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  padding: 6px;
  background-color: $star-wars-yellow;

  img {
    width: 64px;
    height: 64px;
    filter: invert(1);
    transform: rotate(35deg);
  }

  nav {
    margin-top: 75px;

    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2px;
      border-radius: 5px;
      margin-bottom: 30px;

      &.router-link-active, &:hover {
        background-color: rgba(0, 0, 0, 0.15);
        color: white;
      }
    }
  }

  @media only screen and (min-width: 640px) {
    nav {
      margin-top: 50px;

      a {
        padding: 2px 4px;

      }
    }
  }
}
</style>

<script setup>
const links = [
  {
    to: '/people?page=1',
    name: 'People',
  }, {
    to: '/planets?page=1',
    name: 'Planets'
  }, {
    to: '/species?page=1',
    name: 'Species'
  }, {
    to: '/starships?page=1',
    name: 'Starships'
  }, {
    to: '/vehicles?page=1',
    name: 'Vehicles'
  }, {
    to: '/films',
    name: 'Films'
  },
]
</script>
