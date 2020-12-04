<template>
  <div>
      <h1>myVideo</h1>
      <my-video :sources="video.sources" :options="video.options"></my-video>
  </div>
</template>

<script>
import myVideo from 'vue-video'

export default {
    data () {
        return {
            video: {
                sources: [{
                    src: 'https://video-ssl.itunes.apple.com/itunes-assets/Video118/v4/0d/90/b5/0d90b5c4-3ada-858e-3640-b4c7372a8573/mzvf_8117403962437200200.640x480.h264lc.U.p.m4v',
                    // type: 'video/mp4'
                }],
                options: {
                    autoplay: true,
                    volume: 0.6,
                    poster: 'http://covteam.u.qiniudn.com/poster.png'
                }
            }
        }
    },
    components: {
        myVideo
    }
}
</script>
