<template>
  <div id="app">
    <v-app id="Agroacademy">
      <AppBar />
      <AppMenu />
      <router-view />
      <Footer />
    </v-app>
  </div>
</template>

<script>
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";
import AppMenu from "./components/AppMenu";

export default {
  name: "App",
  components: {
    AppBar: AppBar,
    AppMenu: AppMenu,
    Footer: Footer
  }
};
</script>

<style>
#app {
}
</style>
