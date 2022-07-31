<template>
  <div>
    <nuxt-link to="/"> 인덱스로 </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
   async fetch() {
    this.testValue = await this.$axios.$get('http://localhost:3000/server-middleware');
  },

  fetchKey: 'site-sidebar',
 activated() {
  console.log(this.$fetchState.timestamp);
    // Call fetch again if last fetch more than 30 sec ago
    if (this.$fetchState.timestamp <= (Date.now() - 30000)) {
      this.$fetch()
    }
  },
}
</script>
