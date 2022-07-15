<template>
  <div>
    <button @click="removeCookie('notHttpOnly')">쿠키 삭제</button>
    <input :value="changeCookieValueData">
    <button @click="changeCookie('notHttpOnly')">쿠키 변경</button>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({$axios}) {
    const test = await $axios.$get('http://localhost:3000/server-middleware');
  },

  data() {
    return {
      changeCookieValueData: '변경',
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
