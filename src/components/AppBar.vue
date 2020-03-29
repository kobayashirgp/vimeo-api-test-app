<template>
  <v-app-bar app color="teal" dark>
    <v-app-bar-nav-icon v-on:click.stop="TOGGLE_HOME_NAVIGATION_DRAWER" />
    <v-img src="../assets/logo-agro.png" width="125" height="50" contain></v-img>
  </v-app-bar>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { TOGGLE_HOME_NAVIGATION_DRAWER } from "../utils/actions";

export default {
  name: "AppBar",
  computed: { ...mapState(["drawer"]) },
  methods: {
    ...mapActions({ TOGGLE_HOME_NAVIGATION_DRAWER })
  },
  data: () => ({})
};
</script>
