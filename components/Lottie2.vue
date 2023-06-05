<template>
  <div style="width:200px; height:300px" ref="lottieContainer" data-id="test"></div>
</template>
<script>
import Lottie from "lottie-web";
export default {
  props: {
    path: {
      type: String,
    },
  },
  data() {
    return {
      localLottie : null
    }
  },
  mounted() {this.init()},

  destroyed(){
    this.localLottie.destroy()
  },
  methods: {
    init() {
      const container = document.querySelector('[data-id=test]');
      this.localLottie = Lottie.loadAnimation({
        container: this.$refs.lottieContainer,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path : this.path,
      });
    },
  },
};
</script>

<style>
.nuxt-logo {
  height: 180px;
}
</style>
