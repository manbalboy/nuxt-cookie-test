<template>
  <div v-if="true">
    <div style="width:200px; height:300px" ref="lottieContainer"></div>
  </div>
  <div v-else>
    <div style="width:200px; height:300px" ref="lottieContainer"></div>
  </div>
 
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
  watch: {
      path() {
        this.init()
      }
  },
  mounted() {
    this.init()
  },

  beforeDestroy() {
    this.localLottie.destroy();
  },
  
  destroyed(){
  },
  methods: {
    init() {
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
