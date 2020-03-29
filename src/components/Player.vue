<template>
  <v-content>
    <v-card class="_1815e5py">
      <div class="text-center ma-12">
        <v-progress-circular
          class="loading"
          v-if="!playerReady"
          indeterminate
          :size="160"
          color="teal"
          :width="2"
        ></v-progress-circular>
      </div>
      <v-container v-bind:class="[!playerReady ? 'hide' : '_181mdnk8']" fluid align="center">
        <vimeo-player
          class="player"
          ref="player"
          :video-id="videoId"
          @ready="onReady"
          :player-height="height"
          @play="onPlay"
          @pause="onPause"
          @ended="onFinish"
          @error="onError"
          @loaded="onLoad"
          @volumechange="onVolumeChange"
        ></vimeo-player>
      </v-container>
      <v-card-text class="text--primary">
        <div>Vídeo</div>

        <div>Um teste para o Vimeo Player</div>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn icon :href="`https://vimeo.com/${videoId}`" target="_blank">
          <v-icon>mdi-share-variant</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-content>
</template>
<script>
const DEFAULT_VIDEO_ID = "401716306";
export default {
  name: "Video",
  data() {
    return {
      videoId: null,
      height: 500,
      options: {
        responsive: true
      },
      playerReady: false
    };
  },
  created() {
    const { videoId } = this.$route.params;
    this.videoId = videoId ? videoId : DEFAULT_VIDEO_ID;
  },
  methods: {
    onVolumeChange() {
      console.log("volume changed");
    },
    onLoad() {
      console.log("OnLoad");
      this.playerReady = true;
    },
    onError() {
      console.log("Error");
    },
    onFinish() {
      console.log("Finish");
    },
    onPause() {
      console.log("Pause");
    },
    onPlay() {
      console.log("Play");
    },
    onReady(player) {
      player.element.setAttribute("style", "width: 100%; height: 100%;");
      console.log("Ready");
    },
    play() {
      this.$refs.player.play();
    },
    pause() {
      this.$refs.player.pause();
    }
  }
};
</script>
<style scoped>
.loading {
  margin-top: 30px;
}
.hide {
  visibility: hidden;
}
.player {
  display: block;
  height: 100% !important;
  left: 0 !important;
  position: absolute !important;
  top: 0 !important;
  width: 100% !important;
  margin: auto !important;
  max-width: none !important;
}
._181mdnk8 {
  padding-bottom: 56.25% !important;
  position: relative !important;
  width: 100% !important;
  display: block !important;
  margin: auto !important;
  max-width: none !important;
}
._1815e5py {
  margin: auto !important;
  max-width: 100% !important;
  position: relative !important;
  width: 106.66666666666666vh !important;
  outline: 0 !important;
}
</style>
