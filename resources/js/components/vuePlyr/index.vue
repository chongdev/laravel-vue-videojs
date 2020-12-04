<template>
    <div>
        <h1>VuePlyr</h1>

        <div class="player-plyr">

            <div class="player-plyr--error" v-if="status=='error'">

                <div class="h-100 d-flex flex-column justify-content-center align-items-center">

                    <h1>ขออภัยวีดีโอ</h1>
                    <div class="error-code">Error Code 404</div>
                </div>
            </div>
            <div class="player-plyr--player" :class="status=='error' && 'd-none'">
                <vue-plyr ref="plyr" :options="options">
                    <video controls crossorigin playsinline data-poster="https://is5-ssl.mzstatic.com/image/thumb/Video128/v4/d5/c8/da/d5c8da3d-ead5-e1f2-f3ed-cd280529ff4e/Jobb6e9148e-e9ce-4873-8235-ec9f90a80dda-98861165-PreviewImage_preview_image_video_sdr-Time1516913295918.png/313x177mv.webp">

                        <source
                            size="1080"
                            src="https://video-ssl.itunes.apple.com/itunes-assets/Video118/v4/0d/90/b5/0d90b5c4-3ada-858e-3640-b4c7372a8573/mzvf_8117403962437200200.640x480.h264lc.U.p.m4v"
                            @error="onError"
                        />

                        <!-- <track
                            default
                            kind="captions"
                            label="English captions"
                            src="/path/to/english.vtt"
                            srclang="en"
                        /> -->
                    </video>
                </vue-plyr>
            </div>

        </div>


        <div class="d-flex">
            <div>timerstamp: {{ timerstamp }} </div>
        </div>
    </div>
</template>

<script>
import VuePlyr from "vue-plyr";
import "vue-plyr/dist/vue-plyr.css";

export default {
    components: {
        VuePlyr,
    },
    data() {
        return {
            options: {
                controls: [

                    "play-large",

                    // "play",
                    "current-time", // The current time of playback
                    "progress", // The progress bar and scrubber for playback and buffering
                    'duration', // The full duration of the

                    "mute", // Toggle mute
                    "volume", // Volume control

                    "fullscreen", // Toggle fullscreen
                ],

                // autoplay: true,
            },

            player: null,
            duration: null,

            running: false,
            status: 'loading',

            startTime: null,
            timer: null,
            timerstamp: '00:00',
            taketime: 0,

            countTimestamp: 0,
            updateTimestamp: 5,
        };
    },

    mounted(){

        this.player = this.$refs.plyr.player;

        this.player.on('enterfullscreen', () => console.log('..enterfullscreen..') );
        this.player.on('progress', () => console.log('..progress..') );
        this.player.on('playing', () => console.log('..playing..') );
        this.player.on('play', () => {


            if( this.timer ){
                clearInterval( this.timer )
            }
            this.startTimer();

            console.log('..play..')
        } );
        this.player.on('pause', () => {

            if( this.timer ){
                clearInterval( this.timer )
            }

            console.log('..pause..')
        });
        this.player.on('timeupdate', () => console.log('..timeupdate..') );
        this.player.on('volumechange', () => console.log('..volumechange..') );
        this.player.on('seeking', () => console.log('..seeking..') );
        this.player.on('seeked', () => console.log('..seeked..') );
        this.player.on('ratechange', () => console.log('..ratechange..') );
        this.player.on('ended', () => console.log('..ended..') );
        this.player.on('enterfullscreen', () => console.log('..enterfullscreen..') );
        this.player.on('exitfullscreen', () => console.log('..exitfullscreen..') );
        this.player.on('captionsenabled', () => console.log('..captionsenabled..') );
        this.player.on('captionsdisabled', () => console.log('..captionsdisabled..') );
        this.player.on('languagechange', () => console.log('..languagechange..') );
        this.player.on('controlshidden', () => console.log('..controlshidden..') );
        this.player.on('controlsshown', () => console.log('..controlsshown..') );
        this.player.on('ready', event => {
            const instance = event.detail.plyr;

            console.log( 'ready...', instance );
        });

    },

    methods: {
        startTimer(){

            const vm = this

            if( !vm.startTime ){
                vm.startTime = new Date();
            }

            let sec_num = 0
            let ms_num = 0


            this.timer = setInterval(function () {

                var elapsedTime = Date.now() - vm.startTime;

                var dift = (elapsedTime / 1000).toFixed(2)
                var ms = parseInt(dift.split('.')[1])
                sec_num = dift.split('.')[0]

                // // var sec_num = parseInt(this, 10); // don't forget the second param
                var hours   = Math.floor(sec_num / 3600);
                var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
                var seconds = sec_num - (hours * 3600) - (minutes * 60);

                // var ms = ms_num;


                if (minutes < 10) {minutes = "0"+minutes;}
                if (seconds < 10) {seconds = "0"+seconds;}
                if (ms < 10) {ms = "0"+ms;}

                if( hours > 0 ){

                    if (hours   < 10) {hours   = "0"+hours;}
                    vm.timerstamp = hours+':'+minutes+':'+seconds +'.'+ ms
                }
                else{
                    vm.timerstamp = minutes+':'+seconds
                }

                if( vm.countTimestamp == vm.updateTimestamp ){
                    vm.update_timestamp()
                }

                vm.taketime = dift

            }, 1000);
        },


        update_timestamp(){
            const vm = this

            console.log( 'update timestamp' );
            vm.countTimestamp = 0;
        },


        onError(){

            this.status = 'error'
            console.log('onError..');
        }
    }
};
</script>

<style lang="scss" scoped>

    .player-plyr{
        width: 100%;
        height: 0;
        background-color: #000;
        color: #fff;
        overflow: hidden;
        position: relative;
        padding-top: 56.25%;
    }

    .player-plyr--player,
    .player-plyr--error{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>
