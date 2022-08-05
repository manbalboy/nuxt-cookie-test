<template>
  <div>
    <input :value="testValue">
    <button @click="removeCookie('notHttpOnly')">쿠키 삭제</button>
    <input :value="changeCookieValueData">
    <button @click="changeCookie('notHttpOnly')">쿠키 변경</button>
    <button @click="$fetch()">fetch</button>
    <nuxt-link to="/a">변경</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  // activated() {
  //   if (this.$fetchState.timestamp <= Date.now() - 3000) {
  //     this.$fetch();
  //   }
  // },
  async fetch() {
    console.log("server!!!!!!!!","server");
    this.testValue = await this.$axios.$get('http://localhost:3000/server-middleware');
    this.testValue = await this.$axios.$get('http://localhost:3000/server-middleware');
    this.testValue = await this.$axios.$get('http://localhost:3000/server-middleware');
    this.testValue = await this.$axios.$get('http://localhost:3000/server-middleware');
    this.testValue = await this.$axios.$get('http://localhost:3000/server-middleware');
    this.testValue = await this.$axios.$get('http://localhost:3000/server-middleware');
    this.testValue = await this.$axios.$get('http://localhost:3000/server-middleware');
    this.testValue = await this.$axios.$get('http://localhost:3000/server-middleware');
    this.testValue = await this.$axios.$get('http://localhost:3000/server-middleware');
    this.testValue = await this.$axios.$get('http://localhost:3000/server-middleware');
    this.testValue = await this.$axios.$get('http://localhost:3000/server-middleware');
    this.testValue = await this.$axios.$get('http://localhost:3000/server-middleware');
  },
  fetchKey: 'site-sidebar',
  data() {
    return {
      changeCookieValueData: '변경',
      testValue  : '',
    }
  },
      
  methods : {
    removeCookie(name) {
      this.$cookiz.remove(name);
    },

    changeCookie(name) {
      this.$cookiz.set(name, this.changeCookieValueData);
    }
  }
}
</script>
