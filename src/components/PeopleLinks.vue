<template>
  <section v-if="peopleUrls.length">
    <p class="title">{{ title || 'People' }}: </p>
    <Loader v-if="loading"
            isSmall="true"/>
    <ErrorHandler v-else-if="error"
                  :err="error">
    </ErrorHandler>
    <div v-else-if="peopleIds.length"
         class="links">
      <router-link v-for="id in peopleIds"
                   :key="id"
                   :to="{name: 'Person', params: { id }}">
        {{ getPerson(id).name.charAt(0).toUpperCase() + getPerson(id).name.substring(1) }}
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
  name: 'PeopleLinks',
  data() {
    return {
      loading: false,
      error: ''
    };
  },
  props: ['peopleUrls', 'title'],
  components: {
    Loader,
    ErrorHandler
  },
  computed: {
    ...mapGetters(['getPerson']),
    peopleIds() {
      return this.peopleUrls.map((url) => stripIdFromUrl(url));
    }
  },
  methods: {
    ...mapActions(['fetchMultiple']),
    fetchData() {
      this.loading = true;
      this.fetchMultiple({
        ids: this.peopleIds,
        functionName: 'Person'
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
