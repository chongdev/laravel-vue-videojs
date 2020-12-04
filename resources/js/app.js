require('./bootstrap');

window.Vue = require('vue');

const VideoJs = () => import('./components/VideoJs/index.vue')
const myVideo = () => import('./components/myVideo/index.vue')
const vuePlyr = () => import('./components/vuePlyr/index.vue')

const app = new Vue({
    el: '#app',

    components: {
        VideoJs,
        myVideo,
        vuePlyr,
    }
});
