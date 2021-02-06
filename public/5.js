(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VideoJs/Player.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/VideoJs/Player.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_video_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-video-player */ "./node_modules/vue-video-player/dist/vue-video-player.js");
/* harmony import */ var vue_video_player__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_video_player__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  // props: ['video', 'current', 'options'],
  components: {
    videoPlayer: vue_video_player__WEBPACK_IMPORTED_MODULE_0__["videoPlayer"]
  },
  data: function data() {
    return {
      debug: true,
      errors: null,
      videoData: {},
      options: null
    };
  },
  created: function created() {
    console.log('created.. player');
  },
  mounted: function mounted() {
    var vm = this; // console.log('this is current player instance object', this.player)
    // this.$emit('update', this.player)
    // this.$emit('updateVideo', this.video)
  },
  computed: {// player() {
    //     return this.$refs.videoPlayer.player
    // }
  },
  beforeDestroy: function beforeDestroy() {
    console.log('player beforeDestroy...'); // if (this.player) {
    //     this.player.dispose()
    // }
  },
  methods: {
    updateVideo: function updateVideo(video) {
      console.log('updateVideo', video);
      this.options = this.setOptions(video);
    },
    setOptions: function setOptions(video) {
      return {
        // height: "360",
        // autoplay: true,
        // muted: true,
        // language: "en",
        // playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          // type: "video/mp4",
          // mp4
          src: video.src // webm
          // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"

        }] // poster: video.thumbnail,

      };
    },
    // listen event
    onPlayerPlay: function onPlayerPlay(player) {// console.log('player play!', player)
    },
    onPlayerPause: function onPlayerPause(player) {// console.log('player pause!', player)
    },
    onPlayerEnded: function onPlayerEnded(player) {// console.log('player ended!', player)
    },
    onPlayerLoadeddata: function onPlayerLoadeddata(player) {// console.log('player Loadeddata!', player)
    },
    onPlayerWaiting: function onPlayerWaiting(player) {// console.log('player Waiting!', player)
    },
    onPlayerPlaying: function onPlayerPlaying(player) {// console.log('player Playing!', player)
    },
    onPlayerTimeupdate: function onPlayerTimeupdate(player) {// console.log('player Timeupdate!', player.currentTime())
    },
    onPlayerCanplay: function onPlayerCanplay(player) {// console.log('player Canplay!', player)
    },
    onPlayerCanplaythrough: function onPlayerCanplaythrough(player) {// console.log('player Canplaythrough!', player)
    },
    // or listen state event
    playerStateChanged: function playerStateChanged(playerCurrentState) {// console.log('player current update state', playerCurrentState)
    },
    // player is ready
    playerReadied: function playerReadied(player) {
      // seek to 10s
      // console.log("example player 1 readied", player);
      player.currentTime(10); // console.log('example 01: the player is readied', player)
    } // custom data

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VideoJs/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/VideoJs/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var video_js_dist_video_js_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! video.js/dist/video-js.css */ "./node_modules/video.js/dist/video-js.css");
/* harmony import */ var video_js_dist_video_js_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(video_js_dist_video_js_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player */ "./resources/js/components/VideoJs/Player.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Player: _Player__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      playlists: [],
      videos: [],
      player: null,
      video: null
    };
  },
  mounted: function mounted() {
    // console.log('this is current player instance object', this.player)
    // setTimeout(() => {
    //     console.log("dynamic change options", this.player);
    //     this.player.muted(false);
    // }, 2000);
    this.getVideo();
  },
  methods: {
    getVideo: function getVideo() {
      var vm = this;
      vm.loading = true;
      axios.get("/apis/videos").then(function (response) {
        vm.loading = false;
        vm.setVideo(response.data);
      })["catch"](function (error) {
        vm.loading = false;
      });
    },
    setVideo: function setVideo(data) {
      var _this = this;

      this.playlists = [];
      data.forEach(function (video) {
        var cogs = $.extend({}, {
          startTime: 0,
          duration: 0,
          currentTime: 0,
          timerstamp: '00:00',
          isActive: false,
          player: null,
          isPlay: false
        }, video); // console.log(cogs);

        _this.playlists.push(cogs);
      }); // //
      // let startId = this.playlists[0].id
      // this.active( startId, 0 )
    },
    playerOptions: function playerOptions(video) {
      return {
        // height: "360",
        // autoplay: true,
        // muted: true,
        // language: "en",
        // playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          // type: "video/mp4",
          // mp4
          src: video.src // webm
          // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"

        }] // poster: video.thumbnail,

      };
    },
    active: function active(id, index) {
      console.log('Playlist Active..', id, index, this.player);
      var video = this.playlists.find(function (n) {
        return n.id == id;
      });
      this.$refs.player.updateVideo(video);
      this.video = video; // if( this.player ){
      //     console.log( 'playlist destroy..', this.$refs.player );
      // }
      // this.videos.push( video )
    },
    updatePlayer: function updatePlayer(player) {
      this.player = player;
    },
    updateVideo: function updateVideo(video) {
      this.video = video;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VideoJs/Player.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/VideoJs/Player.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".player--container .player--player {\n  width: 100%;\n  height: 0;\n  background-color: #000;\n  color: #fff;\n  overflow: hidden;\n  position: relative;\n  padding-top: 56.25%;\n}\n.player--container .player--player .video-js,\n.player--container .player--player .video-player-box {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VideoJs/Player.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/VideoJs/Player.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Player.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VideoJs/Player.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VideoJs/Player.vue?vue&type=template&id=07a8d177&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/VideoJs/Player.vue?vue&type=template&id=07a8d177& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "player--container" }, [
    _c("div", { staticClass: "player--wrap" }, [
      !_vm.options
        ? _c("div", [
            _vm._v("\n            not video: show thumbnail\n        ")
          ])
        : _vm.errors
        ? _c("div", { staticClass: "player--error" }, [_vm._m(0)])
        : _c(
            "div",
            { staticClass: "player--player" },
            [
              _c("video-player", {
                ref: "videoPlayer",
                staticClass: "video--player-box",
                attrs: {
                  options: _vm.options,
                  playsinline: true,
                  customEventName: "customstatechangedeventname"
                },
                on: {
                  play: function($event) {
                    return _vm.onPlayerPlay($event)
                  },
                  pause: function($event) {
                    return _vm.onPlayerPause($event)
                  },
                  ended: function($event) {
                    return _vm.onPlayerEnded($event)
                  },
                  waiting: function($event) {
                    return _vm.onPlayerWaiting($event)
                  },
                  playing: function($event) {
                    return _vm.onPlayerPlaying($event)
                  },
                  loadeddata: function($event) {
                    return _vm.onPlayerLoadeddata($event)
                  },
                  timeupdate: function($event) {
                    return _vm.onPlayerTimeupdate($event)
                  },
                  canplay: function($event) {
                    return _vm.onPlayerCanplay($event)
                  },
                  canplaythrough: function($event) {
                    return _vm.onPlayerCanplaythrough($event)
                  },
                  statechanged: function($event) {
                    return _vm.playerStateChanged($event)
                  },
                  ready: _vm.playerReadied
                }
              })
            ],
            1
          )
    ]),
    _vm._v(" "),
    _vm.debug
      ? _c("div", { staticClass: "my-3 alert alert-danger" }, [
          _c("h3", [_vm._v("Debug:")]),
          _vm._v(" "),
          _c("div", [
            _vm._v("timerstamp: " + _vm._s(_vm.videoData.timerstamp) + " ")
          ]),
          _vm._v(" "),
          _c("div", [
            _vm._v("duration: " + _vm._s(_vm.videoData.duration) + " ")
          ]),
          _vm._v(" "),
          _c("div", [
            _vm._v("currentTime: " + _vm._s(_vm.videoData.currentTime) + " ")
          ]),
          _vm._v(" "),
          _c("div", [_vm._v("isPlay: " + _vm._s(_vm.videoData.isPlay) + " ")]),
          _vm._v(" "),
          _c("div", [
            _vm._v("isActive: " + _vm._s(_vm.videoData.isActive) + " ")
          ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "h-100 d-flex flex-column justify-content-center align-items-center"
      },
      [
        _c("h1", [_vm._v("ขออภัยคุณไม่สามารถดูวิดีโอได้")]),
        _vm._v(" "),
        _c("p", [_vm._v("การเชื่อมต่อของคุณขัดข้อง โปรดลองใหม่อีกครั้ง")]),
        _vm._v(" "),
        _c("div", { staticClass: "mt-4 d-flex justify-content-center" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-white w-min-120",
              attrs: { type: "button" }
            },
            [_vm._v("ยกเลิก")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-secondary ml-3 w-min-120",
              attrs: { type: "button" }
            },
            [_vm._v("ลองใหม่")]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "d-flex justify-content-center mt-5" }, [
          _c("div", { staticClass: "border-left border-danger px-3" }, [
            _vm._v("รหัสข้อผิดผลาด 404")
          ])
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VideoJs/index.vue?vue&type=template&id=0a409e4c&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/VideoJs/index.vue?vue&type=template&id=0a409e4c& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("h1", [_vm._v("videojs")]),
      _vm._v(" "),
      _c("player", {
        ref: "player",
        on: { updateVideo: _vm.updateVideo, update: _vm.updatePlayer }
      }),
      _vm._v(" "),
      _c("h3", [_vm._v("playlist")]),
      _vm._v(" "),
      _c(
        "div",
        _vm._l(_vm.playlists, function(item, i) {
          return _c(
            "div",
            {
              key: i,
              staticClass: "media mb-3",
              class: item.isPlay && "is-play"
            },
            [
              _c(
                "div",
                {
                  staticClass: "video-thumbnail-wrap mr-3",
                  on: {
                    click: function($event) {
                      return _vm.active(item.id, i)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "video-thumbnail" }, [
                    _c("img", { attrs: { src: item.thumbnail, alt: "" } })
                  ]),
                  _vm._v(" "),
                  _vm._m(0, true)
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "media-body" }, [
                _c("h5", { staticClass: "mt-0" }, [_vm._v(_vm._s(item.title))]),
                _vm._v(" "),
                _c("p", { staticClass: "mt-0" }, [_vm._v(_vm._s(item.disc))]),
                _vm._v(" "),
                _c("div", { staticClass: "d-flex align-items-center" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-sm btn-secondary",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.active(item.id, i)
                        }
                      }
                    },
                    [
                      item.isPlay
                        ? _c("span", [_vm._v("stop")])
                        : _c("span", [_vm._v("play")])
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "ml-2" }, [
                    _vm._v(
                      "\n                        timerstamp: " +
                        _vm._s(item.timerstamp) +
                        "\n                    "
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "ml-2" }, [
                    _vm._v(
                      "\n                        duration: " +
                        _vm._s(item.duration) +
                        "\n                    "
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "ml-2" }, [
                    _vm._v(
                      "\n                        currentTime: " +
                        _vm._s(item.currentTime) +
                        "\n                    "
                    )
                  ])
                ])
              ])
            ]
          )
        }),
        0
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "video-thumbnail-control" }, [
      _c("button", {
        staticClass: "video-thumbnail-control--play",
        attrs: { type: "button" }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/VideoJs/Player.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/VideoJs/Player.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Player_vue_vue_type_template_id_07a8d177___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player.vue?vue&type=template&id=07a8d177& */ "./resources/js/components/VideoJs/Player.vue?vue&type=template&id=07a8d177&");
/* harmony import */ var _Player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player.vue?vue&type=script&lang=js& */ "./resources/js/components/VideoJs/Player.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Player_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Player.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/components/VideoJs/Player.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Player_vue_vue_type_template_id_07a8d177___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Player_vue_vue_type_template_id_07a8d177___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/VideoJs/Player.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/VideoJs/Player.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/VideoJs/Player.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Player.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VideoJs/Player.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/VideoJs/Player.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/VideoJs/Player.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Player_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Player.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VideoJs/Player.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Player_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Player_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Player_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Player_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/VideoJs/Player.vue?vue&type=template&id=07a8d177&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/VideoJs/Player.vue?vue&type=template&id=07a8d177& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Player_vue_vue_type_template_id_07a8d177___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Player.vue?vue&type=template&id=07a8d177& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VideoJs/Player.vue?vue&type=template&id=07a8d177&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Player_vue_vue_type_template_id_07a8d177___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Player_vue_vue_type_template_id_07a8d177___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/VideoJs/index.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/VideoJs/index.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_0a409e4c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=0a409e4c& */ "./resources/js/components/VideoJs/index.vue?vue&type=template&id=0a409e4c&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/VideoJs/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_0a409e4c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_0a409e4c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/VideoJs/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/VideoJs/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/VideoJs/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VideoJs/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/VideoJs/index.vue?vue&type=template&id=0a409e4c&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/VideoJs/index.vue?vue&type=template&id=0a409e4c& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0a409e4c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=0a409e4c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VideoJs/index.vue?vue&type=template&id=0a409e4c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0a409e4c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0a409e4c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 1:
/*!******************************!*\
  !*** min-document (ignored) ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);