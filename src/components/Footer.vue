<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>AgroAcademy</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState({
    ano: state => state.ano
  }),
  data: () => ({})
};
</script>

<style></style>
