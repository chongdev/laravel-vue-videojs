<template>
  <div>
      <h1>videojs</h1>
      <video ref="videoPlayer" class="video-media-controller">
          <source src="https://video-ssl.itunes.apple.com/itunes-assets/Video118/v4/0d/90/b5/0d90b5c4-3ada-858e-3640-b4c7372a8573/mzvf_8117403962437200200.640x480.h264lc.U.p.m4v">
      </video>
  </div>
</template>

<script>
import videojs from 'video.js';


export default {

    props: {
        options: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    data() {
        return {
            player: null
        }
    },

    mounted(){

        // this.player = videojs(this.$refs.videoPlayer, this.options, function onPlayerReady() {


        //     console.log('onPlayerReady', this);
        // })
    },
    beforeDestroy() {
        if (this.player) {
            this.player.dispose()
        }
    },

    methods: {

    }
}
</script>
