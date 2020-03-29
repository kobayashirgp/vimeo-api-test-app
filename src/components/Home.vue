<template>
  <v-content>
    <v-container>
      <v-card>
        <v-card-title>
          Pastas
        </v-card-title>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Nome</th>
                <th class="text-left">Data de criação</th>
                <th class="text-left">Vídeos</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in folders" :key="item.name">
                <td>{{ item.created_time | moment }}</td>
                <td>{{ item.name }}</td>
                <td>
                  <v-btn icon link :to="`/home/${getProjectId(item)}/videos`"><v-icon>mdi-play</v-icon></v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card>
    </v-container>
  </v-content>
</template>

<script>
import { getAllFolder } from "../api/api";
import moment from "moment";

export default {
  name: "Home",
  data: () => ({
    info: null,
    folders: [],
    videos: []
  }),
  methods: {
    getProjectId({ uri }) {
      return uri.split("/projects/")[1];
    }
  },
  filters: {
    moment(date) {
      return moment(date).format("DD/MM/YYYY HH:mm:ss");
    }
  },
  async created() {
    const {
      data: { data }
    } = await getAllFolder();
    this.folders = data;
  }
};
</script>
