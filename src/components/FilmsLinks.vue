<template>
  <section v-if="filmsUrls.length">
    <p class="title">Films: </p>
    <Loader v-if="loading"
            isSmall="true"/>
    <ErrorHandler v-else-if="error"
                  :err="error">
    </ErrorHandler>
    <div v-else-if="filmsIds.length"
         class="links">
      <router-link v-for="id in filmsIds"
                   :key="id"
                   :to="{name: 'Film', params: { id }}">
        {{ getFilm(id).title.charAt(0).toUpperCase() + getFilm(id).title.substring(1) }}
      </router-link>
    </div>
  </section>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import Loader from '@/components/Loader.vue';
import ErrorHandler from '@/components/ErrorHandler.vue';
import {stripIdFromUrl, transformErrorsToString} from "@/helpers/helpers";

export default {
  name: 'FilmsLinks',
  data() {
    return {
      loading: false,
      error: ''
    };
  },
  props: ['filmsUrls'],
  components: {
    Loader,
    ErrorHandler
  },
  computed: {
    ...mapGetters(['getFilm']),
    filmsIds() {
      return this.filmsUrls.map((url) => stripIdFromUrl(url));
    }
  },
  methods: {
    ...mapActions(['fetchMultiple']),
    fetchData() {
      this.loading = true;
      this.fetchMultiple({
        ids: this.filmsIds,
        functionName: 'Film'
      }).then((errors) => {
        this.loading = false;
        this.error = transformErrorsToString(errors);
      });
    }
  },
  created() {
    this.fetchData();
  }
};
</script>
