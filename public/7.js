(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/vuePlyr/Player.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/vuePlyr/Player.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_plyr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-plyr */ "./node_modules/vue-plyr/dist/vue-plyr.esm.js");
/* harmony import */ var vue_plyr_dist_vue_plyr_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-plyr/dist/vue-plyr.css */ "./node_modules/vue-plyr/dist/vue-plyr.css");
/* harmony import */ var vue_plyr_dist_vue_plyr_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_plyr_dist_vue_plyr_css__WEBPACK_IMPORTED_MODULE_1__);
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
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['video', 'current'],
  components: {
    VuePlyr: vue_plyr__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
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
        controls: ["play-large", // "play",
        "current-time", // The current time of playback
        "progress", // The progress bar and scrubber for playback and buffering
        'duration', // The full duration of the
        "mute", // Toggle mute
        "volume", // Volume control
        "fullscreen" // Toggle fullscreen
        ],
        autoplay: true // forward: 10,

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
      runTimeupdate: false // video: {}

    };
  },
  created: function created() {
    console.log(this.video.index, this.current);
  },
  mounted: function mounted() {
    var vm = this;
    this.player = this.$refs.plyr.player;
    this.plyr = this.$refs.plyr; // this.player.on('progress', () => console.log('..progress..') );
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

    this.updatePlayer();
  },
  beforeDestroy: function beforeDestroy() {
    console.log('beforeDestroy'); // if (this.player) {
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
    active: function active() {
      console.log('active...', this.player.seeking);

      if (this.player) {
        ;
        this.player.play();
      } // this.video.isActive = true;


      this.updatePlayer();
    },
    updatePlayer: function updatePlayer() {
      this.$emit('update', this.player);
    },
    startTimer: function startTimer() {
      var vm = this; // let sec_num = 0
      // let ms_num = 0

      this.timer = setInterval(function () {
        // var elapsedTime = Date.now() - vm.startTime;
        // var dift = (elapsedTime / 1000).toFixed(2)
        // var ms = parseInt(dift.split('.')[1])
        // sec_num = dift.split('.')[0]
        vm.countTimestamp++;
        vm.taketime++; // // var sec_num = parseInt(this, 10); // don't forget the second param

        var hours = Math.floor(vm.taketime / 3600);
        var minutes = Math.floor((vm.taketime - hours * 3600) / 60);
        var seconds = vm.taketime - hours * 3600 - minutes * 60; // var ms = ms_num;

        if (minutes < 10) {
          minutes = "0" + minutes;
        }

        if (seconds < 10) {
          seconds = "0" + seconds;
        } // if (ms < 10) {ms = "0"+ms;} +'.'+ ms


        if (hours > 0) {
          if (hours < 10) {
            hours = "0" + hours;
          }

          vm.video.timerstamp = hours + ':' + minutes + ':' + seconds;
        } else {
          vm.video.timerstamp = minutes + ':' + seconds;
        }

        if (vm.countTimestamp == vm.updateTimestamp) {
          vm.update_timestamp();
        }

        if (!vm.runTimeupdate) {
          clearInterval(this.timer);
        } // vm.taketime = dift

      }, 1000);
    },
    update_timestamp: function update_timestamp() {
      var vm = this;
      console.log('--- timestamp to database ---');
      vm.countTimestamp = 0;
    },
    onError: function onError() {
      this.status = '404';
      this.isError = true;
      console.log('onError..');
    },
    playerReady: function playerReady(evt) {
      var vm = this;
      var instance = event.detail.plyr;
      var player = instance.player;
      console.log('--- ready ---', instance, player);
      console.log('--- ready loading ---', instance.loading);
      console.log('--- ready source ---', instance.source);
      console.log('--- ready failed ---', instance.failed);
      console.log('--- ready id ---', instance.id); // autoplay
      // player.seeking( 10 )
      // if( this.player ){
      //
      // }
      // this.$refs.plyr.play();
    },
    playerPlaying: function playerPlaying() {
      if (this.timer) {
        clearInterval(this.timer);
      }

      this.startTimer();
      this.video.isPlay = true;
      console.log('..play..');
    },
    playerPause: function playerPause() {
      if (this.timer) {
        clearInterval(this.timer);
      }

      this.video.isPlay = false;
      console.log('..pause..');
    },
    videoTimeUpdated: function videoTimeUpdated(evt) {
      var _this = this;

      console.log('..timeupdate..', this.video.id, this.player.duration, this.player.currentTime); // const instance = evt;

      this.video.duration = this.player.duration;
      this.video.currentTime = this.player.currentTime; // vm.startTimer();
      // vm.runTimeupdate = true;

      clearTimeout(this.runTimeupdate);
      this.runTimeupdate = setTimeout(function () {
        // vm.runTimeupdate = false;
        if (_this.timer) {
          clearInterval(_this.timer);
        }

        _this.video.isPlay = false;
      }, 1000);
      this.updateVideo();
    },
    playerEnded: function playerEnded() {
      this.$emit('endedVideo');
      console.log('..ended..');
    },
    playerProgress: function playerProgress() {
      console.log('..playerProgress..', this.video.isPlay); // if( !this.video.isPlay && this.player ){
      //     this.player.play();
      // }
    },
    updateVideo: function updateVideo() {
      this.$emit('updateVideo', this.video);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/vuePlyr/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/vuePlyr/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ "./resources/js/components/vuePlyr/Player.vue");
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
  components: {
    Player: _Player__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      loading: false,
      playlists: [],
      videos: [],
      current: null,
      player: null
    };
  },
  mounted: function mounted() {
    this.getVideo(); // if( !this.current  ){
    //     let startId = this.playlists[0].id
    //     this.active( startId, 0 )
    // }
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
      }); //

      var startId = this.playlists[0].id;
      this.active(startId, 0);
    },
    active: function active(id, index) {
      if (this.current == id) {
        var _video = this.videos.find(function (n) {
          return n.id == id;
        });

        if (this.player && _video) {
          // console.log( '....', video.isPlay );
          if (_video.isPlay) {
            this.player.pause();
          } else {
            this.player.play();
          }
        }

        return false;
      }

      this.current = id;

      if (this.player) {
        // this.video.isActive = false
        this.player.pause(); // console.log( 2555, this.player );
      }

      var player = this.playlists.find(function (n) {
        return n.id == id;
      }); // video = videos

      var video = this.videos.find(function (n) {
        return n.id == id;
      });

      if (!video) {
        player.index = index;
        this.videos.push(player);
      } else {
        this.$refs.player[index].active();
      } // if( typeof this.$refs.player[index] === Object ){
      //     console.log( 2555 );
      // }
      // video.active = true
      // console.log( 'refs...', this.$refs.player  );
      // this.$refs.player.update( player )

    },
    updatePlayer: function updatePlayer(player) {
      this.player = player; // player.play();
      // console.log( this.player );
    },
    updateVideo: function updateVideo(data) {// console.log( 'updateVideo...' );
      // const index = this.playlists.findIndex( n=>n.id==data.id )
      // this.playlists[index].timerstamp = data.timerstamp
      // console.log( 'updateVideo..', index );
    },
    endedVideo: function endedVideo() {
      var _this2 = this;

      var video = this.videos.find(function (n) {
        return n.id == _this2.current;
      });
      console.log('endedVideo', video);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/vuePlyr/Player.vue?vue&type=template&id=0130d360&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/vuePlyr/Player.vue?vue&type=template&id=0130d360& ***!
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
  return _c(
    "div",
    {
      staticClass: "player-plyr--container",
      class: _vm.current != _vm.video.id && "d-none"
    },
    [
      _c("div", { staticClass: "player-plyr" }, [
        _vm.isError
          ? _c("div", { staticClass: "player-plyr--error" }, [_vm._m(0)])
          : _vm._e(),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "player-plyr--player",
            class: _vm.isError && "d-none"
          },
          [
            _c("vue-plyr", { ref: "plyr", attrs: { options: _vm.options } }, [
              _c(
                "video",
                {
                  ref: "video",
                  attrs: { "data-poster": _vm.video.thumbnail },
                  on: {
                    ready: _vm.playerReady,
                    playing: _vm.playerPlaying,
                    pause: _vm.playerPause,
                    timeupdate: _vm.videoTimeUpdated,
                    ended: _vm.playerEnded,
                    progress: _vm.playerProgress
                  }
                },
                [
                  _c("source", {
                    attrs: { size: "1080", src: _vm.video.src },
                    on: { error: _vm.onError }
                  })
                ]
              )
            ])
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "my-3 alert alert-danger" }, [
        _c("h3", [_vm._v("Debug:")]),
        _vm._v(" "),
        _c("div", [
          _vm._v("timerstamp: " + _vm._s(_vm.video.timerstamp) + " ")
        ]),
        _vm._v(" "),
        _c("div", [_vm._v("duration: " + _vm._s(_vm.video.duration) + " ")]),
        _vm._v(" "),
        _c("div", [
          _vm._v("currentTime: " + _vm._s(_vm.video.currentTime) + " ")
        ]),
        _vm._v(" "),
        _c("div", [_vm._v("isPlay: " + _vm._s(_vm.video.isPlay) + " ")]),
        _vm._v(" "),
        _c("div", [_vm._v("isActive: " + _vm._s(_vm.video.isActive) + " ")])
      ])
    ]
  )
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/vuePlyr/index.vue?vue&type=template&id=e3a7897a&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/vuePlyr/index.vue?vue&type=template&id=e3a7897a&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
      _c("h1", [_vm._v("VuePlyr")]),
      _vm._v(" "),
      _vm._l(_vm.videos, function(video) {
        return _c("player", {
          key: video.id,
          ref: "player",
          refInFor: true,
          attrs: { video: video, current: _vm.current },
          on: {
            update: _vm.updatePlayer,
            updateVideo: _vm.updateVideo,
            ended: _vm.endedVideo
          }
        })
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
    2
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

/***/ "./resources/js/components/vuePlyr/Player.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/vuePlyr/Player.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Player_vue_vue_type_template_id_0130d360___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player.vue?vue&type=template&id=0130d360& */ "./resources/js/components/vuePlyr/Player.vue?vue&type=template&id=0130d360&");
/* harmony import */ var _Player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player.vue?vue&type=script&lang=js& */ "./resources/js/components/vuePlyr/Player.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Player_vue_vue_type_template_id_0130d360___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Player_vue_vue_type_template_id_0130d360___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/vuePlyr/Player.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/vuePlyr/Player.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/vuePlyr/Player.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Player.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/vuePlyr/Player.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/vuePlyr/Player.vue?vue&type=template&id=0130d360&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/vuePlyr/Player.vue?vue&type=template&id=0130d360& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Player_vue_vue_type_template_id_0130d360___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Player.vue?vue&type=template&id=0130d360& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/vuePlyr/Player.vue?vue&type=template&id=0130d360&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Player_vue_vue_type_template_id_0130d360___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Player_vue_vue_type_template_id_0130d360___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/vuePlyr/index.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/vuePlyr/index.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_e3a7897a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=e3a7897a&scoped=true& */ "./resources/js/components/vuePlyr/index.vue?vue&type=template&id=e3a7897a&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/vuePlyr/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_e3a7897a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_e3a7897a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e3a7897a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/vuePlyr/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/vuePlyr/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/vuePlyr/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/vuePlyr/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/vuePlyr/index.vue?vue&type=template&id=e3a7897a&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/vuePlyr/index.vue?vue&type=template&id=e3a7897a&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_e3a7897a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=e3a7897a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/vuePlyr/index.vue?vue&type=template&id=e3a7897a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_e3a7897a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_e3a7897a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);