<template>
  <section v-if="starshipsUrls.length">
    <p class="title">Starships: </p>
    <Loader v-if="loading"
            isSmall="true"/>
    <ErrorHandler v-else-if="error"
                  :err="error">
    </ErrorHandler>
    <div v-else-if="starshipsIds.length"
         class="links">
      <router-link v-for="id in starshipsIds"
                   :key="id"
                   :to="{name: 'Starship', params: { id }}">
        {{ getStarship(id).name.charAt(0).toUpperCase() + getStarship(id).name.substring(1) }}
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
  name: 'StarshipsLinks',
  data() {
    return {
      loading: false,
      error: ''
    };
  },
  props: ['starshipsUrls'],
  components: {
    Loader,
    ErrorHandler
  },
  computed: {
    ...mapGetters(['getStarship']),
    starshipsIds() {
      return this.starshipsUrls.map((url) => stripIdFromUrl(url));
    }
  },
  methods: {
    ...mapActions(['fetchMultiple']),
    fetchData() {
      this.loading = true;
      this.fetchMultiple({
        ids: this.starshipsIds,
        functionName: 'Starship'
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
