(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/vuePlyr/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/vuePlyr/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VuePlyr: vue_plyr__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      options: {
        controls: ["play-large", // "play",
        "current-time", // The current time of playback
        "progress", // The progress bar and scrubber for playback and buffering
        'duration', // The full duration of the
        "mute", // Toggle mute
        "volume", // Volume control
        "fullscreen" // Toggle fullscreen
        ] // autoplay: true,

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
      updateTimestamp: 5
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.player = this.$refs.plyr.player;
    this.player.on('enterfullscreen', function () {
      return console.log('..enterfullscreen..');
    });
    this.player.on('progress', function () {
      return console.log('..progress..');
    });
    this.player.on('playing', function () {
      return console.log('..playing..');
    });
    this.player.on('play', function () {
      if (_this.timer) {
        clearInterval(_this.timer);
      }

      _this.startTimer();

      console.log('..play..');
    });
    this.player.on('pause', function () {
      if (_this.timer) {
        clearInterval(_this.timer);
      }

      console.log('..pause..');
    });
    this.player.on('timeupdate', function () {
      return console.log('..timeupdate..');
    });
    this.player.on('volumechange', function () {
      return console.log('..volumechange..');
    });
    this.player.on('seeking', function () {
      return console.log('..seeking..');
    });
    this.player.on('seeked', function () {
      return console.log('..seeked..');
    });
    this.player.on('ratechange', function () {
      return console.log('..ratechange..');
    });
    this.player.on('ended', function () {
      return console.log('..ended..');
    });
    this.player.on('enterfullscreen', function () {
      return console.log('..enterfullscreen..');
    });
    this.player.on('exitfullscreen', function () {
      return console.log('..exitfullscreen..');
    });
    this.player.on('captionsenabled', function () {
      return console.log('..captionsenabled..');
    });
    this.player.on('captionsdisabled', function () {
      return console.log('..captionsdisabled..');
    });
    this.player.on('languagechange', function () {
      return console.log('..languagechange..');
    });
    this.player.on('controlshidden', function () {
      return console.log('..controlshidden..');
    });
    this.player.on('controlsshown', function () {
      return console.log('..controlsshown..');
    });
    this.player.on('ready', function (event) {
      var instance = event.detail.plyr;
      console.log('ready...', instance);
    });
  },
  methods: {
    startTimer: function startTimer() {
      var vm = this;

      if (!vm.startTime) {
        vm.startTime = new Date();
      }

      var sec_num = 0;
      var ms_num = 0;
      this.timer = setInterval(function () {
        var elapsedTime = Date.now() - vm.startTime;
        var dift = (elapsedTime / 1000).toFixed(2);
        var ms = parseInt(dift.split('.')[1]);
        sec_num = dift.split('.')[0]; // // var sec_num = parseInt(this, 10); // don't forget the second param

        var hours = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - hours * 3600) / 60);
        var seconds = sec_num - hours * 3600 - minutes * 60; // var ms = ms_num;

        if (minutes < 10) {
          minutes = "0" + minutes;
        }

        if (seconds < 10) {
          seconds = "0" + seconds;
        }

        if (ms < 10) {
          ms = "0" + ms;
        }

        if (hours > 0) {
          if (hours < 10) {
            hours = "0" + hours;
          }

          vm.timerstamp = hours + ':' + minutes + ':' + seconds + '.' + ms;
        } else {
          vm.timerstamp = minutes + ':' + seconds;
        }

        if (vm.countTimestamp == vm.updateTimestamp) {
          vm.update_timestamp();
        }

        vm.taketime = dift;
      }, 1000);
    },
    update_timestamp: function update_timestamp() {
      var vm = this;
      console.log('update timestamp');
      vm.countTimestamp = 0;
    },
    onError: function onError() {
      this.status = 'error';
      console.log('onError..');
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/vuePlyr/index.vue?vue&type=style&index=0&id=e3a7897a&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/vuePlyr/index.vue?vue&type=style&index=0&id=e3a7897a&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".player-plyr[data-v-e3a7897a] {\n  width: 100%;\n  height: 0;\n  background-color: #000;\n  color: #fff;\n  overflow: hidden;\n  position: relative;\n  padding-top: 56.25%;\n}\n.player-plyr--player[data-v-e3a7897a],\n.player-plyr--error[data-v-e3a7897a] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/vuePlyr/index.vue?vue&type=style&index=0&id=e3a7897a&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/vuePlyr/index.vue?vue&type=style&index=0&id=e3a7897a&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=e3a7897a&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/vuePlyr/index.vue?vue&type=style&index=0&id=e3a7897a&lang=scss&scoped=true&");

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
  return _c("div", [
    _c("h1", [_vm._v("VuePlyr")]),
    _vm._v(" "),
    _c("div", { staticClass: "player-plyr" }, [
      _vm.status == "error"
        ? _c("div", { staticClass: "player-plyr--error" }, [_vm._m(0)])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "player-plyr--player",
          class: _vm.status == "error" && "d-none"
        },
        [
          _c("vue-plyr", { ref: "plyr", attrs: { options: _vm.options } }, [
            _c(
              "video",
              {
                attrs: {
                  controls: "",
                  crossorigin: "",
                  playsinline: "",
                  "data-poster":
                    "https://is5-ssl.mzstatic.com/image/thumb/Video128/v4/d5/c8/da/d5c8da3d-ead5-e1f2-f3ed-cd280529ff4e/Jobb6e9148e-e9ce-4873-8235-ec9f90a80dda-98861165-PreviewImage_preview_image_video_sdr-Time1516913295918.png/313x177mv.webp"
                }
              },
              [
                _c("source", {
                  attrs: {
                    size: "1080",
                    src:
                      "https://video-ssl.itunes.apple.com/itunes-assets/Video118/v4/0d/90/b5/0d90b5c4-3ada-858e-3640-b4c7372a8573/mzvf_8117403962437200200.640x480.h264lc.U.p.m4v"
                  },
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
    _c("div", { staticClass: "d-flex" }, [
      _c("div", [_vm._v("timerstamp: " + _vm._s(_vm.timerstamp) + " ")])
    ])
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
        _c("h1", [_vm._v("ขออภัยวีดีโอ")]),
        _vm._v(" "),
        _c("div", { staticClass: "error-code" }, [_vm._v("Error Code 404")])
      ]
    )
  }
]
render._withStripped = true



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
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_e3a7897a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=e3a7897a&lang=scss&scoped=true& */ "./resources/js/components/vuePlyr/index.vue?vue&type=style&index=0&id=e3a7897a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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

/***/ "./resources/js/components/vuePlyr/index.vue?vue&type=style&index=0&id=e3a7897a&lang=scss&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/vuePlyr/index.vue?vue&type=style&index=0&id=e3a7897a&lang=scss&scoped=true& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e3a7897a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=e3a7897a&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/vuePlyr/index.vue?vue&type=style&index=0&id=e3a7897a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e3a7897a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e3a7897a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e3a7897a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e3a7897a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


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