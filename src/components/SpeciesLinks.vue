<template>
  <section v-if="speciesUrls.length">
    <p class="title">Species: </p>
    <Loader v-if="loading"
            isSmall="true"/>
    <ErrorHandler v-else-if="error"
                  :err="error">
    </ErrorHandler>
    <div v-else-if="speciesIds.length"
         class="links">
      <router-link v-for="id in speciesIds"
                   :key="id"
                   :to="{name: 'Specie', params: { id }}">
        {{ getSpecie(id).name.charAt(0).toUpperCase() + getSpecie(id).name.substring(1) }}
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
  name: 'SpeciesLinks',
  data() {
    return {
      loading: false,
      error: ''
    };
  },
  props: ['speciesUrls'],
  components: {
    Loader,
    ErrorHandler
  },
  computed: {
    ...mapGetters(['getSpecie']),
    speciesIds() {
      return this.speciesUrls.map((url) => stripIdFromUrl(url));
    }
  },
  methods: {
    ...mapActions(['fetchMultiple']),
    fetchData() {
      this.loading = true;
      this.fetchMultiple({
        ids: this.speciesIds,
        functionName: 'Specie'
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
