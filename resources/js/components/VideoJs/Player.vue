<template>

    <div class="player--container">
        <div class="player--wrap">

            <div v-if="!options">
                not video: show thumbnail
            </div>

            <div class="player--error" v-else-if="errors">

                <div class="h-100 d-flex flex-column justify-content-center align-items-center">

                    <h1>ขออภัยคุณไม่สามารถดูวิดีโอได้</h1>
                    <p>การเชื่อมต่อของคุณขัดข้อง โปรดลองใหม่อีกครั้ง</p>
                    <!-- มีปัญหาในการเล่นวิดีโอ  -->

                    <div class="mt-4 d-flex justify-content-center"><button type="button" class="btn btn-white w-min-120">ยกเลิก</button> <button type="button" class="btn btn-secondary ml-3 w-min-120">ลองใหม่</button></div>

                    <div class="d-flex justify-content-center mt-5">
                        <div class="border-left border-danger px-3">รหัสข้อผิดผลาด 404</div>
                    </div>
                </div>
            </div>

            <div class="player--player" v-else>
                <video-player
                    class="video--player-box"
                    ref="videoPlayer"
                    :options="options"

                    :playsinline="true"
                    customEventName="customstatechangedeventname"
                    @play="onPlayerPlay($event)"
                    @pause="onPlayerPause($event)"
                    @ended="onPlayerEnded($event)"
                    @waiting="onPlayerWaiting($event)"
                    @playing="onPlayerPlaying($event)"
                    @loadeddata="onPlayerLoadeddata($event)"
                    @timeupdate="onPlayerTimeupdate($event)"
                    @canplay="onPlayerCanplay($event)"
                    @canplaythrough="onPlayerCanplaythrough($event)"
                    @statechanged="playerStateChanged($event)"
                    @ready="playerReadied"
                >
                </video-player>
            </div>

        </div>

    <div class="my-3 alert alert-danger" v-if="debug">
            <h3>Debug:</h3>
            <div>timerstamp: {{ videoData.timerstamp }} </div>
            <div>duration: {{ videoData.duration }} </div>
            <div>currentTime: {{ videoData.currentTime }} </div>
            <div>isPlay: {{ videoData.isPlay }} </div>
            <div>isActive: {{ videoData.isActive }} </div>
        </div>
    </div>
</template>

<script>

import { videoPlayer } from "vue-video-player";

export default {
    // props: ['video', 'current', 'options'],
    components: {
        videoPlayer,
    },

    data(){
        return{
            debug: true,
            errors: null,

            videoData: {

            },

            options: null
        }
    },

    created(){
        console.log( 'created.. player' );
    },

    mounted(){
        const vm = this;

        
        // console.log('this is current player instance object', this.player)

        // this.$emit('update', this.player)
        // this.$emit('updateVideo', this.video)
    },
    computed: {
        // player() {
        //     return this.$refs.videoPlayer.player
        // }
    },

    beforeDestroy() {

        console.log('player beforeDestroy...');
        // if (this.player) {
        //     this.player.dispose()
        // }
    },

    methods: {

        updateVideo( video ){
            console.log('updateVideo', video);

            this.options = this.setOptions(video)
        },

        setOptions( video ){
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

        // listen event
        onPlayerPlay(player) {
            // console.log('player play!', player)
        },
        onPlayerPause(player) {
            // console.log('player pause!', player)
        },
        onPlayerEnded(player) {
            // console.log('player ended!', player)
        },
        onPlayerLoadeddata(player) {
            // console.log('player Loadeddata!', player)
        },
        onPlayerWaiting(player) {
            // console.log('player Waiting!', player)
        },
        onPlayerPlaying(player) {
            // console.log('player Playing!', player)
        },
        onPlayerTimeupdate(player) {
            // console.log('player Timeupdate!', player.currentTime())
        },
        onPlayerCanplay(player) {
            // console.log('player Canplay!', player)
        },
        onPlayerCanplaythrough(player) {
            // console.log('player Canplaythrough!', player)
        },
        // or listen state event
        playerStateChanged(playerCurrentState) {
            // console.log('player current update state', playerCurrentState)
        },
        // player is ready
        playerReadied(player) {

            // seek to 10s
            // console.log("example player 1 readied", player);
            player.currentTime(10);
            // console.log('example 01: the player is readied', player)
        },


        // custom data

    }
}
</script>

<style lang="scss">

    .player--container{
        // background: #000;

        .player--player{
            width: 100%;
            height: 0;
            background-color: #000;
            color: #fff;
            overflow: hidden;
            position: relative;
            padding-top: 56.25%;

            .video-js,
            .video-player-box{
                position: absolute;
                top: 0;
                left: 0;

                width: 100%;
                height: 100%;
            }
        }
    }
</style>
