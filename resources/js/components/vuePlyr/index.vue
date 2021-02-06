<template>
    <div>
        <h1>VuePlyr</h1>


        <player
            ref="player"
            v-for="video in videos"
            :key="video.id"
            :video="video"
            :current="current"
            @update="updatePlayer"
            @updateVideo="updateVideo"
            @ended="endedVideo"
        ></player>

        <!-- การเชื่อมต่อของคุณขัดข้อง -->

        <h3>playlist</h3>
        <div>

            <div class="media mb-3" v-for="(item, i) in playlists" :key="i" :class="item.isPlay && 'is-play'">
                <div @click="active( item.id, i )" class="video-thumbnail-wrap mr-3">
                    <div class="video-thumbnail">
                        <img :src="item.thumbnail" alt="">
                    </div>

                    <div class="video-thumbnail-control">
                        <button type="button" class="video-thumbnail-control--play"></button>
                    </div>
                </div>
                <div class="media-body">
                    <h5 class="mt-0">{{ item.title }}</h5>
                    <p class="mt-0">{{ item.disc }}</p>


                    <div class="d-flex align-items-center">

                        <button type="button" class="btn btn-sm btn-secondary" @click="active( item.id, i )">
                            <span v-if="item.isPlay">stop</span>
                            <span v-else>play</span>
                        </button>

                        <div class="ml-2">
                            timerstamp: {{ item.timerstamp }}
                        </div>
                        <div class="ml-2">
                            duration: {{ item.duration }}
                        </div>
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

import Player from "./Player";

export default {
    components: {
        Player,
    },
    data() {
        return {
            loading: false,

            playlists: [],

            videos: [],
            current: null,

            player: null,
        };
    },

    mounted(){


        this.getVideo()

        // if( !this.current  ){

        //     let startId = this.playlists[0].id
        //     this.active( startId, 0 )
        // }

    },

    methods: {
        getVideo(){
            const vm = this;

            vm.loading = true;

            axios
                .get(`/apis/videos`)
                .then(response => {
                    vm.loading = false;

                    vm.setVideo( response.data );
                })
                .catch(error => {
                    vm.loading = false;

                });

        },
        setVideo( data ){

            this.playlists = [];

            data.forEach(video => {

                let cogs = $.extend( {}, {
                    startTime: 0,
                    duration: 0,
                    currentTime: 0,
                    timerstamp: '00:00',
                    isActive: false,
                    player: null,
                    isPlay: false,
                }, video );

                // console.log(cogs);

                this.playlists.push( cogs )

            });

            //
            let startId = this.playlists[0].id
            this.active( startId, 0 )
        },
        active( id, index ){

            if (this.current == id){

                let video = this.videos.find(n=>n.id==id)

                if( this.player && video ){
                    // console.log( '....', video.isPlay );
                    if( video.isPlay ){
                        this.player.pause()
                    }else{
                        this.player.play()
                    }
                }

                return false;
            }
            this.current = id;

            if( this.player ){
                // this.video.isActive = false
                this.player.pause()
                // console.log( 2555, this.player );
            }

            const player = this.playlists.find(n=>n.id==id)
            // video = videos
            let video = this.videos.find(n=>n.id==id)

            if( !video ){

                player.index = index
                this.videos.push( player )
            }
            else{

                this.$refs.player[index].active();
            }

            // if( typeof this.$refs.player[index] === Object ){

            //     console.log( 2555 );
            // }
            // video.active = true

            // console.log( 'refs...', this.$refs.player  );
            // this.$refs.player.update( player )
        },

        updatePlayer( player ){
            this.player = player;

            // player.play();
            // console.log( this.player );
        },

        updateVideo( data ){

            // console.log( 'updateVideo...' );
            // const index = this.playlists.findIndex( n=>n.id==data.id )
            // this.playlists[index].timerstamp = data.timerstamp
            // console.log( 'updateVideo..', index );
        },

        endedVideo(){

            let video = this.videos.find(n=>n.id==this.current)

            console.log( 'endedVideo', video );
        },


    }
};
</script>

<style lang="scss" scoped>


</style>
