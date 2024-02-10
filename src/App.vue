<template>
 <Header></Header>
 <router-view class="view"/>
 <FooterStore></FooterStore>

</template>


<script>
import Header from "../src/components/global/Header.vue";
import FooterStore from "@/components/global/FooterStore.vue";

export default {
  name: "App",
  components: {
    Header,
    FooterStore
  },
  // computed: {
  //   getDarkMode() {
  //     return this.$store.state.darkMode;
  //   },
  // },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.view{
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
