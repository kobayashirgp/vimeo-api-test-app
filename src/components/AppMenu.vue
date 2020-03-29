<template>
  <v-navigation-drawer :value="drawer" @input="TOGGLE_HOME_NAVIGATION_DRAWER" app>
    <v-list-item dark class="drawer">
      <v-list-item-content>
        <v-list-item-title class="title">
          Vimeo API Test
        </v-list-item-title>
        <v-list-item-subtitle>
          v0.1
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-list dense>
      <v-list-item-group>
        <v-list-item link to="/home">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/player">
          <v-list-item-action>
            <v-icon>mdi-play-box-multiple</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Player</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { TOGGLE_HOME_NAVIGATION_DRAWER } from "../utils/actions";

export default {
  computed: { ...mapState(["drawer"]) },
  methods: {
    ...mapActions({ TOGGLE_HOME_NAVIGATION_DRAWER })
  },
  data: () => ({})
};
</script>

<style>
.drawer {
  background-color: #009688;
}
</style>
