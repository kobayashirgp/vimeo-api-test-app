<template>
  <v-content>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-row>
            <v-card v-for="video in videos" :key="video.name" class="mx-auto ma-3" max-width="400" outlined tile>
              <v-img class="white--text align-end" height="200px" :src="video | getImage">
                <v-row class="ma-2 d-flex justify-space-between">
                  <v-card-title class="float-left">{{ video.name }}</v-card-title>
                  <v-btn class=" float-right" color="teal" fab large dark link :to="`/player/${getVideoId(video)}`">
                    <v-icon>mdi-play</v-icon>
                  </v-btn>
                </v-row>
              </v-img>
              <v-card-text>
                <v-list flat>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon> mdi-chart-timeline-variant</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>{{ video.stats.plays }} </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon> mdi-clock </v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>{{ video.duration | getTime }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon> mdi-monitor-screenshot </v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>{{ video.width }} x {{ video.height }} </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import { getAllVideosByFolderId } from "../api/api";
import moment from "../plugins/moment";

export default {
  name: "Videos",
  data: () => ({
    videos: []
  }),
  filters: {
    getImage({ pictures: { sizes } }) {
      const image = sizes.find(size => size.width >= 1280);
      return image.link;
    },
    getTime(duration) {
      return moment.duration(duration, "seconds").format("HH:mm:ss", { forceLength: true, trim: false });
    }
  },
  created() {
    this.getVideosByProject();
  },
  methods: {
    getVideoId({ uri }) {
      return uri.split("/videos/")[1];
    },

    async getVideosByProject() {
      const { projectId } = this.$route.params;
      const {
        data: { data }
      } = await getAllVideosByFolderId(projectId);
      this.videos = data;
    }
  }
};
</script>

<style></style>
