<template>

    <div class="player-plyr--container" :class="current!=video.id && 'd-none'">
        <div class="player-plyr">

            <div class="player-plyr--error" v-if="isError">

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

            <div class="player-plyr--player" :class="isError && 'd-none'">
                <vue-plyr ref="plyr" :options="options">
                    <video

                        ref="video"
                        @ready="playerReady"
                        @playing="playerPlaying"
                        @pause="playerPause"
                        @timeupdate="videoTimeUpdated"
                        @ended="playerEnded"
                        @progress="playerProgress"

                        :data-poster="video.thumbnail"
                    >
                        <!-- controls crossorigin playsinline -->

                        <source
                            size="1080"
                            :src="video.src"
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

    <div class="my-3 alert alert-danger">
            <h3>Debug:</h3>
            <div>timerstamp: {{ video.timerstamp }} </div>
            <div>duration: {{ video.duration }} </div>
            <div>currentTime: {{ video.currentTime }} </div>
            <div>isPlay: {{ video.isPlay }} </div>
            <div>isActive: {{ video.isActive }} </div>
        </div>
    </div>
</template>

<script>

import VuePlyr from "vue-plyr";
import "vue-plyr/dist/vue-plyr.css";

export default {
    props: ['video', 'current'],
    components: {
        VuePlyr,
    },

    data(){
        return{
            // videoLoaded: true,

            // videoOptions: {
            //     autoplay: false,
            //     controls: true,

            //     sources: [
            //         {
            //             src: `/video/episode/${this.episode.path}/fetch`,
            //             // type: "application/x-mpegURL"
            //         }
            //     ]
            // },

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

                autoplay: true,
                // forward: 10,
            },

            player: null,
            plyr: null,
            duration: null,

            status: 'loading',
            isError: false,

            startTime: null,
            timer: null,
            // timerstamp: '00:00',
            taketime: 0,

            countTimestamp: 0,
            updateTimestamp: 5,

            runTimeupdate: false,

            // video: {}
        }
    },

    created(){
        console.log(this.video.index, this.current);

    },

    mounted(){
        const vm = this;

        this.player = this.$refs.plyr.player;
        this.plyr = this.$refs.plyr;

        // this.player.on('progress', () => console.log('..progress..') );
        // this.player.on('playing', () => console.log('..playing..') );
        // this.player.on('play', () => {

        //     if( this.timer ){
        //         clearInterval( this.timer )
        //     }
        //     this.startTimer();

        //     this.isPlay = true

        //     console.log('..play..')
        // } );
        // this.player.on('pause', () => {

        //     if( this.timer ){
        //         clearInterval( this.timer )
        //     }

        //     this.isPlay = false

        //     console.log('..pause..')
        // });

        // this.runTimeupdate;
        // this.player.on('timeupdate', evt => {

        //     const instance = evt.detail.plyr;

        //     vm.duration = instance.duration;
        //     vm.currentTime = instance.currentTime;

        //     // vm.startTimer();
        //     // vm.runTimeupdate = true;

        //     clearTimeout(runTimeupdate)
        //     runTimeupdate = setTimeout(() => {
        //         // vm.runTimeupdate = false;
        //         if( this.timer ){
        //             clearInterval( this.timer )
        //         }

        //         this.isPlay = false

        //     }, 1000);
        //     console.log('..timeupdate..' )
        // } );
        // this.player.on('volumechange', () => console.log('..volumechange..') );
        // this.player.on('seeking', () => console.log('..seeking..') );
        // this.player.on('seeked', () => console.log('..seeked..') );
        // this.player.on('ratechange', () => console.log('..ratechange..') );
        // this.player.on('ended', () => console.log('..ended..') );
        // this.player.on('enterfullscreen', () => console.log('..enterfullscreen..') );
        // this.player.on('exitfullscreen', () => console.log('..exitfullscreen..') );
        // this.player.on('captionsenabled', () => console.log('..captionsenabled..') );
        // this.player.on('captionsdisabled', () => console.log('..captionsdisabled..') );
        // this.player.on('languagechange', () => console.log('..languagechange..') );
        // this.player.on('controlshidden', () => console.log('..controlshidden..') );
        // this.player.on('controlsshown', () => console.log('..controlsshown..') );


        // this.player.on('ready', event => {
        //     const instance = event.detail.plyr;

        //     // console.log( 'ready...', this.player);

        //     this.player.play()
        // });

        // this.video.player = this.player
        this.updatePlayer()
    },

    beforeDestroy() {

        console.log('beforeDestroy');
        // if (this.player) {
        //     this.player.dispose()
        // }
    },

    methods: {

        // update( data ){


        //     if( this.player ){

        //         this.player.pause()
        //         // this.player.destroy()
        //     }

        //     this.video = data
        //     console.log( 'update', data );
        // },

        active(){

            console.log('active...', this.player.seeking);

            if( this.player ){

                ;
                this.player.play();
            }
            // this.video.isActive = true;
            this.updatePlayer()
        },

        updatePlayer(){

            this.$emit('update', this.player)
        },
        startTimer(){

            const vm = this


            // let sec_num = 0
            // let ms_num = 0

            this.timer = setInterval(function () {

                // var elapsedTime = Date.now() - vm.startTime;

                // var dift = (elapsedTime / 1000).toFixed(2)
                // var ms = parseInt(dift.split('.')[1])
                // sec_num = dift.split('.')[0]

                vm.countTimestamp ++;
                vm.taketime  ++;

                // // var sec_num = parseInt(this, 10); // don't forget the second param
                var hours   = Math.floor(vm.taketime / 3600);
                var minutes = Math.floor((vm.taketime - (hours * 3600)) / 60);
                var seconds = vm.taketime - (hours * 3600) - (minutes * 60);

                // var ms = ms_num;

                if (minutes < 10) {minutes = "0"+minutes;}
                if (seconds < 10) {seconds = "0"+seconds;}
                // if (ms < 10) {ms = "0"+ms;} +'.'+ ms

                if( hours > 0 ){

                    if (hours   < 10) {hours   = "0"+hours;}
                    vm.video.timerstamp = hours+':'+minutes+':'+seconds
                }
                else{
                    vm.video.timerstamp = minutes+':'+seconds
                }

                if( vm.countTimestamp == vm.updateTimestamp ){
                    vm.update_timestamp()
                }


                if( !vm.runTimeupdate ){
                    clearInterval(this.timer)
                }

                // vm.taketime = dift

            }, 1000);
        },


        update_timestamp(){
            const vm = this

            console.log( '--- timestamp to database ---' );
            vm.countTimestamp = 0;
        },


        onError(){

            this.status = '404'
            this.isError = true
            console.log('onError..');
        },

        playerReady( evt ){

            const vm = this;
            const instance = event.detail.plyr;
            const player = instance.player

            console.log('--- ready ---', instance, player);
            console.log('--- ready loading ---', instance.loading);
            console.log('--- ready source ---', instance.source);
            console.log('--- ready failed ---', instance.failed);
            console.log('--- ready id ---', instance.id);

            // autoplay

            // player.seeking( 10 )

            // if( this.player ){
            //
            // }

            // this.$refs.plyr.play();
        },
        playerPlaying(){

            if( this.timer ){
                clearInterval( this.timer )
            }
            this.startTimer();

            this.video.isPlay = true

            console.log('..play..')
        },
        playerPause(){
            if( this.timer ){
                clearInterval( this.timer )
            }

            this.video.isPlay = false

            console.log('..pause..')
        },
        videoTimeUpdated(evt){

            console.log('..timeupdate..', this.video.id, this.player.duration, this.player.currentTime )

            // const instance = evt;
            this.video.duration = this.player.duration;
            this.video.currentTime = this.player.currentTime;

            // vm.startTimer();
            // vm.runTimeupdate = true;

            clearTimeout(this.runTimeupdate)
            this.runTimeupdate = setTimeout(() => {
                // vm.runTimeupdate = false;
                if( this.timer ){
                    clearInterval( this.timer )
                }

                this.video.isPlay = false

            }, 1000);

            this.updateVideo()

        },
        playerEnded(){

            this.$emit('endedVideo' )

            console.log('..ended..')
        },
        playerProgress(){
            console.log('..playerProgress..', this.video.isPlay)

            // if( !this.video.isPlay && this.player ){
            //     this.player.play();
            // }

        },

        updateVideo(){
            this.$emit('updateVideo',  this.video )
        }
    }
}
</script>
