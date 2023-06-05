<template>
  <div>
    <Lottie
      :path="test"
    ></Lottie>
    <!-- <Lottie path="https://stagestatic11.samsungcard.com/wcms/home/scard/image/personal/Lottie_AAP1762.json"></Lottie>
    <Lottie path="https://stagestatic11.samsungcard.com/wcms/home/scard/image/personal/Lottie_AAP1762.json"></Lottie>
    <Lottie path="https://stagestatic11.samsungcard.com/wcms/home/scard/image/personal/Lottie_AAP1762.json"></Lottie>
    <Lottie path="https://stagestatic11.samsungcard.com/wcms/home/scard/image/personal/Lottie_AAP1762.json"></Lottie>
    <Lottie path="https://stagestatic11.samsungcard.com/wcms/home/scard/image/personal/Lottie_AAP1762.json"></Lottie>
    <Lottie path="https://stagestatic11.samsungcard.com/wcms/home/scard/image/personal/Lottie_AAP1762.json"></Lottie> -->
    <nuxt-link to="/indexa">변경a</nuxt-link>
  </div>
</template>

<script>
import Lottie from "@/components/Lottie";
export default {
  name: "IndexPage",
  components: {
    Lottie,
  },
  data() {
    return {
      path: "https://stagestatic11.samsungcard.com/wcms/home/scard/image/personal/Lottie_AAP1762.json",
      test: "",
    };
  },
  mounted() {
    setTimeout(()=>{
      this.test = this.path
    },1000);
  },

  methods: {},
};
</script>
