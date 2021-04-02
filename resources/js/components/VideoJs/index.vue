<template>
    <div>
        <h1>videojs</h1>

        <player
            ref="player"
            @updateVideo="updateVideo"
            @update="updatePlayer"
        ></player>

        <!-- v-for="(video, i) in videos" :key="i" :video="video"  -->
        <h3>playlist</h3>
        <div>
            <div
                class="media mb-3"
                v-for="(item, i) in playlists"
                :key="i"
                :class="item.isPlay && 'is-play'"
            >
                <div
                    @click="active(item.id, i)"
                    class="video-thumbnail-wrap mr-3"
                >
                    <div class="video-thumbnail">
                        <img :src="item.thumbnail" alt="" />
                    </div>

                    <div class="video-thumbnail-control">
                        <button
                            type="button"
                            class="video-thumbnail-control--play"
                        ></button>
                    </div>
                </div>
                <div class="media-body">
                    <h5 class="mt-0">{{ item.title }}</h5>
                    <p class="mt-0">{{ item.disc }}</p>

                    <div class="d-flex align-items-center">
                        <button
                            type="button"
                            class="btn btn-sm btn-secondary"
                            @click="active(item.id, i)"
                        >
                            <span v-if="item.isPlay">stop</span>
                            <span v-else>play</span>
                        </button>

                        <div class="ml-2">
                            timerstamp: {{ item.timerstamp }}
                        </div>
                        <div class="ml-2">duration: {{ item.duration }}</div>
                        <div class="ml-2">
                            currentTime: {{ item.currentTime }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import "video.js/dist/video-js.css";

import Player from "./Player";

export default {
    components: {
        Player,
    },
    data() {
        return {
            playlists: [],

            videos: [],

            player: null,
            video: null,
        };
    },

    mounted() {
        // console.log('this is current player instance object', this.player)
        // setTimeout(() => {
        //     console.log("dynamic change options", this.player);
        //     this.player.muted(false);
        // }, 2000);

        this.getVideo();

        setTimeout(() => {

            this.active( 1,  0)
        }, 800);
    },

    methods: {
        getVideo() {
            const vm = this;

            vm.loading = true;

            axios
                .get(`/apis/videos`)
                .then((response) => {
                    vm.loading = false;

                    vm.setVideo(response.data);
                })
                .catch((error) => {
                    vm.loading = false;
                });
        },

        setVideo(data) {
            this.playlists = [];

            data.forEach((video) => {
                let cogs = $.extend(
                    {},
                    {
                        startTime: 0,
                        duration: 0,
                        currentTime: 0,
                        timerstamp: "00:00",
                        isActive: false,
                        player: null,
                        isPlay: false,
                    },
                    video
                );

                // console.log(cogs);

                this.playlists.push(cogs);
            });

            // //
            // let startId = this.playlists[0].id
            // this.active( startId, 0 )
        },

        playerOptions(video) {
            return {
                // height: "360",
                // autoplay: true,
                // muted: true,

                // language: "en",
                // playbackRates: [0.7, 1.0, 1.5, 2.0],
                sources: [
                    {
                        // type: "video/mp4",
                        // mp4
                        src: video.src,
                        // webm
                        // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
                    },
                ],
                // poster: video.thumbnail,
            };
        },

        active(id, index) {
            console.log("Playlist Active..", id, index, this.player);

            let video = this.playlists.find((n) => n.id == id);

            this.$refs.player.updateVideo(video);

            this.video = video;
            // if( this.player ){

            //     console.log( 'playlist destroy..', this.$refs.player );
            // }

            // this.videos.push( video )
        },

        updatePlayer(player) {
            this.player = player;
        },
        updateVideo(video) {
            this.video = video;
        },
    },
};
</script>

<style lang="scss">
.video-js {
    .vjs-big-play-button {
        border-width: 0;
        width: 96px;
        height: 96px;
        // display: flex;
        border-radius: 50px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        .vjs-icon-placeholder {
            line-height: 96px;
            font-size: 60px;
        }
    }
}

.vjs-skin-hotdog-stand { color: #FF0000; }
</style>
