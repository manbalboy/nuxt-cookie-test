<template>
  <div>
    <nuxt-link to="/"> 인덱스로 </nuxt-link>
     <button @click="changeCookie">fetch</button>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  fetchKey: 'site-sidebar',

   methods : {
   

    async changeCookie() {
      console.log(1);
      await this.$axios.$get('http://localhost:3000/server-middleware');
      // this.$cookiz.set(name, this.changeCookieValueData);
    }
  }
 
}
</script>
