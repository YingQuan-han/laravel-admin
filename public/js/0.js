webpackJsonp([0,1,2,3,4],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./views/admin/administrators/administrators": 110,
	"./views/admin/administrators/administrators.vue": 110,
	"./views/admin/administrators/components/edit/edit": 111,
	"./views/admin/administrators/components/edit/edit.vue": 111,
	"./views/admin/article/article": 112,
	"./views/admin/article/article.vue": 112,
	"./views/admin/essay/essay": 113,
	"./views/admin/essay/essay.vue": 113,
	"./views/admin/essay/write-essay": 114,
	"./views/admin/essay/write-essay.vue": 114,
	"./views/admin/home": 97,
	"./views/admin/home/": 97,
	"./views/admin/home/index": 97,
	"./views/admin/home/index.vue": 97,
	"./views/admin/login/login": 32,
	"./views/admin/login/login.vue": 32,
	"./views/admin/main": 16,
	"./views/admin/main.vue": 16,
	"./views/admin/module/components/edit/edit": 115,
	"./views/admin/module/components/edit/edit.vue": 115,
	"./views/admin/module/module": 116,
	"./views/admin/module/module.vue": 116,
	"./views/admin/role/components/auth-tree": 96,
	"./views/admin/role/components/auth-tree/": 96,
	"./views/admin/role/components/auth-tree/auth-tree": 103,
	"./views/admin/role/components/auth-tree/auth-tree-node": 98,
	"./views/admin/role/components/auth-tree/auth-tree-node.vue": 98,
	"./views/admin/role/components/auth-tree/auth-tree.vue": 103,
	"./views/admin/role/components/auth-tree/index": 96,
	"./views/admin/role/components/auth-tree/index.js": 96,
	"./views/admin/role/components/auth-tree/index.scss": 117,
	"./views/admin/role/components/edit/edit": 118,
	"./views/admin/role/components/edit/edit.vue": 118,
	"./views/admin/role/components/permission/permission": 119,
	"./views/admin/role/components/permission/permission.vue": 119,
	"./views/admin/role/role": 120,
	"./views/admin/role/role.vue": 120,
	"./views/admin/user/user": 121,
	"./views/admin/user/user.vue": 121,
	"./views/app": 34,
	"./views/app.vue": 34,
	"./views/errors/404": 92,
	"./views/errors/404.vue": 92,
	"./views/errors/419": 93,
	"./views/errors/419.vue": 93,
	"./views/errors/500": 94,
	"./views/errors/500.vue": 94
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 7;

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(99)
}
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = __webpack_require__(101)
/* template */
var __vue_template__ = __webpack_require__(102)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/admin/login/login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-83191bd8", Component.options)
  } else {
    hotAPI.reload("data-v-83191bd8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = __webpack_require__(104)
/* template */
var __vue_template__ = __webpack_require__(105)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/errors/404.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3a5c70d3", Component.options)
  } else {
    hotAPI.reload("data-v-3a5c70d3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = __webpack_require__(106)
/* template */
var __vue_template__ = __webpack_require__(107)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/errors/419.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3c57bef7", Component.options)
  } else {
    hotAPI.reload("data-v-3c57bef7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = __webpack_require__(108)
/* template */
var __vue_template__ = __webpack_require__(109)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/errors/500.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6f0a4e10", Component.options)
  } else {
    hotAPI.reload("data-v-6f0a4e10", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 95 */,
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_tree_vue__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_tree_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__auth_tree_vue__);

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__auth_tree_vue___default.a);

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(140)
}
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = __webpack_require__(142)
/* template */
var __vue_template__ = __webpack_require__(143)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/admin/home/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0749ce61", Component.options)
  } else {
    hotAPI.reload("data-v-0749ce61", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(149)
}
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = __webpack_require__(151)
/* template */
var __vue_template__ = __webpack_require__(153)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/admin/role/components/auth-tree/auth-tree-node.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-64072517", Component.options)
  } else {
    hotAPI.reload("data-v-64072517", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(100);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(15)("796ba4d3", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-83191bd8\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./login.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-83191bd8\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./login.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "\n.refresh-verify-code { \n    position: absolute; \n    width: 144px; \n    height: 32px;\n    top: 1px; \n    right: -3px; \n    background: transparent!important;\n}\n.verify-code {\n    width: 110px;\n    margin-right: 0!important;\n}\n.switch-login-reset {\n    /* position: absolute;\n    top: 32px;\n    right: 0px; */\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    line-height: 24px;\n}\n", ""]);

// exports


/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_api_login_js__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_api_system_js__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_libs_util_js__ = __webpack_require__(1);
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
    data: function data() {
        return {
            title: '欢迎登录LaravelAdmin',
            loading: false,
            loginReset: '忘记密码？',
            isLoginOrReset: true,
            t: 60,
            isSend: false,
            isCheck: false,
            form: {
                userName: '',
                password: '',
                verifyCode: ''
            },
            rules: {
                userName: [{ required: true, whitespace: true, message: '请输入用户名或手机号或邮箱', trigger: 'blur' }],
                password: [{ required: true, whitespace: true, message: '请输入登录密码', trigger: 'blur' }],
                verifyCode: [{ required: true, whitespace: true, message: '请输入验证码', trigger: 'blur' }]
            },
            resetForm: {
                account: '',
                password: '',
                verifyCode: '',
                remoteVerifyCode: ''
            },
            resetRules: {
                account: [{ required: true, whitespace: true, message: '请输入手机号或邮箱', trigger: 'blur' }, { type: 'string', validator: function validator(rule, value, callback) {
                        if (!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value) && !/^1\d{10}$/.test(value)) {
                            callback('无效的手机号或邮箱');
                        } else {
                            callback();
                        }
                    }, trigger: 'blur' }],
                password: [{ required: true, whitespace: true, message: '请输入登录密码', trigger: 'blur' }],
                verifyCode: [{ required: true, whitespace: true, message: '请输入验证码', trigger: 'blur' }],
                remoteVerifyCode: [{ required: true, whitespace: true, message: '请输入短信验证码或邮箱验证码', trigger: 'blur' }]
            }
        };
    },

    computed: {
        verifyCodeImage: function verifyCodeImage() {
            return this.$store.getters.getVerifyCode;
        }
    },
    watch: {
        'resetForm.account': function resetFormAccount(curVal) {
            this.isCheck = true;
        }
    },
    methods: {
        /**
         * Switch login or reset password.
         */
        switchLoginReset: function switchLoginReset() {
            this.isLoginOrReset = !this.isLoginOrReset;
            this.loginReset = this.isLoginOrReset ? '忘记密码？' : '立即登录';
            this.title = this.isLoginOrReset ? '欢迎登录LaravelAdmin' : '重置密码';
            this.handleRefreshVerifyCode();
        },

        /**
         * Send verification code countdown timer.
         */
        countDown: function countDown() {
            var that = this;
            setTimeout(function () {
                if (that.t) {
                    that.countDown();
                    that.t = that.t - 1;
                } else {
                    that.isSend = false;
                    that.t = 60;
                }
            }, 1000);
        },

        /**
         * Send SMS or email verification code.
         */
        sendVerifyCode: function sendVerifyCode() {
            var that = this;
            that.$refs.resetForm.validateField('account', function (valid) {
                if (!valid) {
                    that.$refs.resetForm.validateField('verifyCode', function (error) {
                        if (!error) {
                            __WEBPACK_IMPORTED_MODULE_1__js_api_system_js__["a" /* default */].sendVerifyCode({ account: that.resetForm.account, verify_code: that.resetForm.verifyCode }).then(function (res) {
                                if (res.data.code) {
                                    that.$Notice.error({
                                        title: '系统提示',
                                        desc: res.data.msg,
                                        duration: 3
                                    });
                                    that.handleRefreshVerifyCode(); //刷新验证码
                                } else {
                                    that.$Notice.success({
                                        title: '系统提示',
                                        desc: res.data.msg,
                                        duration: 3
                                    });
                                    that.isSend = true;
                                    that.countDown();
                                }
                            }).catch(function (err) {
                                that.$Message.info('系统繁忙，请稍后再试!');
                                that.handleRefreshVerifyCode(); //刷新验证码
                            });
                        }
                    });
                }
            });
        },

        /**
         * Submit login data.
         */
        handleLoginSubmit: function handleLoginSubmit() {
            var _this = this;

            this.$refs.loginForm.validate(function (valid) {
                if (valid) {
                    var that = _this;
                    that.loading = true; //设置登录按钮提交状态
                    __WEBPACK_IMPORTED_MODULE_0__js_api_login_js__["a" /* default */].postAccessToken({ username: _this.form.userName, password: _this.form.password, verify_code: _this.form.verifyCode }).then(function (response) {
                        //console.log(response.data);
                        var res = response.data;
                        if (res.code) {
                            that.$Notice.error({
                                title: '登录失败',
                                desc: res.msg,
                                duration: 3
                            });
                            that.loading = false; //修改为可提交状态
                            that.handleRefreshVerifyCode(); //刷新验证码
                        } else {
                            that.$Notice.success({
                                title: '登录成功',
                                desc: res.msg,
                                duration: 3
                            });
                            Object(__WEBPACK_IMPORTED_MODULE_2__js_libs_util_js__["e" /* setToken */])(res.data);
                            //移除所有本地存储信息
                            localStorage.clear();
                            that.loading = false; //修改为可提交状态
                            //跳转到后台首页
                            /* that.$router.push({
                                name: 'admin'
                            }); */
                            that.$router.push({
                                path: '/admin/home'
                            });
                        }
                    }).catch(function (e) {
                        that.$Message.info('系统繁忙，请稍后再试!');
                        that.loading = false; //修改为可提交状态
                        that.handleRefreshVerifyCode(); //刷新验证码
                    });
                }
            });
        },

        /**
         * Submit reset password data.
         */
        handleResetSubmit: function handleResetSubmit() {
            var that = this;
            that.loading = true;
            __WEBPACK_IMPORTED_MODULE_0__js_api_login_js__["a" /* default */].forgetPassword({
                account: that.resetForm.account,
                verify_code: that.resetForm.remoteVerifyCode,
                password: that.resetForm.password
            }).then(function (res) {
                if (res.data.code) {
                    that.$Notice.error({
                        title: '系统提示',
                        desc: res.data.msg,
                        duration: 3
                    });
                    that.loading = false;
                    that.handleRefreshVerifyCode();
                } else {
                    that.$Notice.success({
                        title: '系统提示',
                        desc: res.data.msg,
                        duration: 3
                    });
                    that.loading = false;
                }
            }).catch(function (err) {
                that.$Message.info('系统繁忙，请稍后再试!');
                that.loading = false;
                that.handleRefreshVerifyCode();
            });
        },

        /**
         * Refresh verify code.
         */
        handleRefreshVerifyCode: function handleRefreshVerifyCode() {
            this.$store.dispatch('loadVerifyCode', { t: Date.now() });
        }
    },
    created: function created() {
        this.$store.dispatch('loadVerifyCode', { t: Date.now() });
    }
});

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "login" }, [
    _c(
      "div",
      { staticClass: "login-con" },
      [
        _c("Card", { attrs: { bordered: false } }, [
          _c(
            "p",
            { attrs: { slot: "title" }, slot: "title" },
            [
              _c("Icon", { attrs: { type: "log-in" } }),
              _vm._v(
                "\n                " + _vm._s(_vm.title) + "\n            "
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "form-con" },
            [
              _c(
                "Form",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.isLoginOrReset,
                      expression: "isLoginOrReset"
                    }
                  ],
                  ref: "loginForm",
                  attrs: { model: _vm.form, rules: _vm.rules }
                },
                [
                  _c(
                    "FormItem",
                    { attrs: { prop: "userName" } },
                    [
                      _c("Input", {
                        attrs: {
                          clearable: "",
                          placeholder: "用户名/手机号/邮箱"
                        },
                        on: { "on-enter": _vm.handleLoginSubmit },
                        model: {
                          value: _vm.form.userName,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "userName", $$v)
                          },
                          expression: "form.userName"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "FormItem",
                    { attrs: { prop: "password" } },
                    [
                      _c("Input", {
                        attrs: {
                          type: "password",
                          clearable: "",
                          placeholder: "登录密码"
                        },
                        on: { "on-enter": _vm.handleLoginSubmit },
                        model: {
                          value: _vm.form.password,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "password", $$v)
                          },
                          expression: "form.password"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "FormItem",
                    { attrs: { prop: "verifyCode" } },
                    [
                      _c("Input", {
                        staticStyle: { width: "120px" },
                        attrs: { clearable: "", placeholder: "验证码" },
                        on: { "on-enter": _vm.handleLoginSubmit },
                        model: {
                          value: _vm.form.verifyCode,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "verifyCode", $$v)
                          },
                          expression: "form.verifyCode"
                        }
                      }),
                      _vm._v(" "),
                      _c("Avatar", {
                        staticStyle: { width: "144px" },
                        attrs: { shape: "square", src: _vm.verifyCodeImage }
                      }),
                      _vm._v(" "),
                      _c("Button", {
                        staticClass: "refresh-verify-code",
                        attrs: { type: "text" },
                        on: { click: _vm.handleRefreshVerifyCode }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "FormItem",
                    [
                      _c(
                        "Button",
                        {
                          attrs: {
                            loading: _vm.loading,
                            type: "primary",
                            long: ""
                          },
                          on: { click: _vm.handleLoginSubmit }
                        },
                        [
                          !_vm.loading
                            ? _c("span", [_vm._v("登录")])
                            : _c("span", [_vm._v("登录中")])
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "Form",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !_vm.isLoginOrReset,
                      expression: "!isLoginOrReset"
                    }
                  ],
                  ref: "resetForm",
                  attrs: { model: _vm.resetForm, rules: _vm.resetRules }
                },
                [
                  _c(
                    "FormItem",
                    { attrs: { prop: "account" } },
                    [
                      _c("Input", {
                        attrs: { placeholder: "手机号或邮箱" },
                        on: { "on-enter": _vm.handleResetSubmit },
                        model: {
                          value: _vm.resetForm.account,
                          callback: function($$v) {
                            _vm.$set(_vm.resetForm, "account", $$v)
                          },
                          expression: "resetForm.account"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "FormItem",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.isCheck,
                          expression: "isCheck"
                        }
                      ],
                      attrs: { prop: "verifyCode" }
                    },
                    [
                      _c("Input", {
                        staticStyle: { width: "120px" },
                        attrs: { placeholder: "验证码" },
                        on: { "on-enter": _vm.handleResetSubmit },
                        model: {
                          value: _vm.resetForm.verifyCode,
                          callback: function($$v) {
                            _vm.$set(_vm.resetForm, "verifyCode", $$v)
                          },
                          expression: "resetForm.verifyCode"
                        }
                      }),
                      _vm._v(" "),
                      _c("Avatar", {
                        staticStyle: { width: "144px" },
                        attrs: { shape: "square", src: _vm.verifyCodeImage }
                      }),
                      _vm._v(" "),
                      _c("Button", {
                        staticClass: "refresh-verify-code",
                        attrs: { type: "text" },
                        on: { click: _vm.handleRefreshVerifyCode }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "FormItem",
                    { attrs: { prop: "remoteVerifyCode" } },
                    [
                      _c("Input", {
                        staticStyle: { width: "150px" },
                        attrs: { placeholder: "短信验证码/邮箱验证码" },
                        on: { "on-enter": _vm.handleResetSubmit },
                        model: {
                          value: _vm.resetForm.remoteVerifyCode,
                          callback: function($$v) {
                            _vm.$set(_vm.resetForm, "remoteVerifyCode", $$v)
                          },
                          expression: "resetForm.remoteVerifyCode"
                        }
                      }),
                      _vm._v(" "),
                      _vm.isSend
                        ? _c(
                            "Button",
                            {
                              staticClass: "verify-code",
                              attrs: { type: "default", disabled: "" }
                            },
                            [_vm._v(_vm._s(_vm.t) + " 秒后可重发")]
                          )
                        : _c(
                            "Button",
                            {
                              staticClass: "verify-code",
                              attrs: { type: "default" },
                              on: { click: _vm.sendVerifyCode }
                            },
                            [_vm._v("获取验证码")]
                          )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "FormItem",
                    { attrs: { prop: "password" } },
                    [
                      _c("Input", {
                        attrs: { type: "password", placeholder: "登录密码" },
                        on: { "on-enter": _vm.handleResetSubmit },
                        model: {
                          value: _vm.resetForm.password,
                          callback: function($$v) {
                            _vm.$set(_vm.resetForm, "password", $$v)
                          },
                          expression: "resetForm.password"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "FormItem",
                    [
                      _c(
                        "Button",
                        {
                          attrs: {
                            loading: _vm.loading,
                            type: "primary",
                            long: ""
                          },
                          on: { click: _vm.handleResetSubmit }
                        },
                        [
                          !_vm.loading
                            ? _c("span", [_vm._v("重置密码")])
                            : _c("span", [_vm._v("重置密码中")])
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticStyle: {
                    "text-align": "right",
                    "margin-bottom": "20px"
                  }
                },
                [
                  _c(
                    "a",
                    {
                      staticStyle: { "user-select": "none" },
                      on: { click: _vm.switchLoginReset }
                    },
                    [_vm._v(_vm._s(_vm.loginReset))]
                  )
                ]
              ),
              _vm._v(" "),
              _c("p", { staticClass: "login-tip" }, [
                _vm._v("\n                    输入任意用户名和密码即可"),
                _c("br"),
                _vm._v("\n                    ©版权所有：xxx\n                ")
              ])
            ],
            1
          )
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-83191bd8", module.exports)
  }
}

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = __webpack_require__(148)
/* template */
var __vue_template__ = __webpack_require__(155)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/admin/role/components/auth-tree/auth-tree.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cfaf2370", Component.options)
  } else {
    hotAPI.reload("data-v-cfaf2370", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
    data: function data() {
        return {};
    },

    methods: {
        backHome: function backHome() {
            this.$router.replace({
                name: 'admin'
            });
        },
        backPrev: function backPrev() {
            this.$router.go(-1);
        }
    }
});

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "error-page" }, [
    _c("div", { staticClass: "container" }, [
      _c("img", { attrs: { src: "/svg/error-404.svg" } }),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "back-btn-group" },
        [
          _c(
            "Button",
            {
              attrs: { type: "text", size: "large" },
              on: { click: _vm.backHome }
            },
            [_vm._v("返回首页")]
          ),
          _vm._v(" "),
          _c(
            "Button",
            {
              attrs: { type: "text", size: "large" },
              on: { click: _vm.backPrev }
            },
            [_vm._v("返回上一页")]
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-con" }, [
      _c("h4", [_vm._v("404")]),
      _vm._v(" "),
      _c("h5", [_vm._v("Oh~~您的页面好像飞走了~")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3a5c70d3", module.exports)
  }
}

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
    data: function data() {
        return {};
    },

    methods: {
        backHome: function backHome() {
            this.$router.replace({
                name: 'admin'
            });
        },
        backPrev: function backPrev() {
            this.$router.go(-1);
        }
    }
});

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "error-page" }, [
    _c("div", { staticClass: "container" }, [
      _c("img", { attrs: { src: "/svg/error-401.svg" } }),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "back-btn-group" },
        [
          _c(
            "Button",
            {
              attrs: { type: "text", size: "large" },
              on: { click: _vm.backHome }
            },
            [_vm._v("返回首页")]
          ),
          _vm._v(" "),
          _c(
            "Button",
            {
              attrs: { type: "text", size: "large" },
              on: { click: _vm.backPrev }
            },
            [_vm._v("返回上一页")]
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-con" }, [
      _c("h4", [_vm._v("404")]),
      _vm._v(" "),
      _c("h5", [_vm._v("Oh~~您没有浏览这个页面的权限~")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3c57bef7", module.exports)
  }
}

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
    data: function data() {
        return {};
    },

    methods: {
        backHome: function backHome() {
            this.$router.replace({
                name: 'admin'
            });
        },
        backPrev: function backPrev() {
            this.$router.go(-1);
        }
    }
});

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "error-page" }, [
    _c("div", { staticClass: "container" }, [
      _c("img", { attrs: { src: "/svg/error-500.svg" } }),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "back-btn-group" },
        [
          _c(
            "Button",
            {
              attrs: { type: "text", size: "large" },
              on: { click: _vm.backHome }
            },
            [_vm._v("返回首页")]
          ),
          _vm._v(" "),
          _c(
            "Button",
            {
              attrs: { type: "text", size: "large" },
              on: { click: _vm.backPrev }
            },
            [_vm._v("返回上一页")]
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-con" }, [
      _c("h4", [_vm._v("404")]),
      _vm._v(" "),
      _c("h5", [_vm._v("Oh~~鬼知道服务器经历了什么~")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6f0a4e10", module.exports)
  }
}

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = __webpack_require__(122)
/* template */
var __vue_template__ = __webpack_require__(123)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/admin/administrators/administrators.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3fac1bc0", Component.options)
  } else {
    hotAPI.reload("data-v-3fac1bc0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = __webpack_require__(124)
/* template */
var __vue_template__ = __webpack_require__(125)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/admin/administrators/components/edit/edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-348e73a0", Component.options)
  } else {
    hotAPI.reload("data-v-348e73a0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(126)
}
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = __webpack_require__(128)
/* template */
var __vue_template__ = __webpack_require__(129)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/admin/article/article.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2f52602e", Component.options)
  } else {
    hotAPI.reload("data-v-2f52602e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = __webpack_require__(130)
/* template */
var __vue_template__ = __webpack_require__(131)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/admin/essay/essay.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-26ba313c", Component.options)
  } else {
    hotAPI.reload("data-v-26ba313c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = __webpack_require__(132)
/* template */
var __vue_template__ = __webpack_require__(139)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/admin/essay/write-essay.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2d90078e", Component.options)
  } else {
    hotAPI.reload("data-v-2d90078e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = __webpack_require__(144)
/* template */
var __vue_template__ = __webpack_require__(145)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/admin/module/components/edit/edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3610926c", Component.options)
  } else {
    hotAPI.reload("data-v-3610926c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = __webpack_require__(146)
/* template */
var __vue_template__ = __webpack_require__(147)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/admin/module/module.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c3f86000", Component.options)
  } else {
    hotAPI.reload("data-v-c3f86000", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(154);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(95)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
			var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/sass-loader/lib/loader.js!./index.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = __webpack_require__(156)
/* template */
var __vue_template__ = __webpack_require__(157)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/admin/role/components/edit/edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6f9f1380", Component.options)
  } else {
    hotAPI.reload("data-v-6f9f1380", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = __webpack_require__(158)
/* template */
var __vue_template__ = __webpack_require__(159)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/admin/role/components/permission/permission.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6c0d3be0", Component.options)
  } else {
    hotAPI.reload("data-v-6c0d3be0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = __webpack_require__(160)
/* template */
var __vue_template__ = __webpack_require__(161)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/admin/role/role.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-61d1e100", Component.options)
  } else {
    hotAPI.reload("data-v-61d1e100", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = __webpack_require__(162)
/* template */
var __vue_template__ = __webpack_require__(163)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/admin/user/user.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0ee24ca0", Component.options)
  } else {
    hotAPI.reload("data-v-0ee24ca0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_api_admin_js__ = __webpack_require__(17);
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
    name: 'administrators',
    data: function data() {
        var _this = this;

        return {
            loading: false,
            searchDateTime: '',
            adminInfo: {},
            adminListData: [],
            total: 0,
            formSearchData: {
                keyword: '',
                datetime: '',
                page: 1,
                limit: 10
            },
            tableColumns: [{
                type: 'index',
                width: 60,
                align: 'center'
            }, {
                title: '头像',
                width: 80,
                align: 'center',
                render: function render(h, params) {
                    return h('Avatar', {
                        props: {
                            shape: 'square',
                            size: 'large',
                            src: params.row.avatar,
                            icon: 'ios-person'
                        }
                    });
                }
            }, {
                title: '账户',
                key: 'name',
                minWidth: 120,
                align: 'center'
            }, {
                title: '手机号码',
                key: 'mobile',
                minWidth: 120,
                align: 'center'
            }, {
                title: '电子邮箱',
                key: 'email',
                minWidth: 180
            }, {
                title: '状态',
                width: 100,
                align: 'center',
                render: function render(h, params) {
                    return h('i-switch', {
                        props: {
                            value: params.row.status,
                            size: 'large',
                            trueValue: 1,
                            falseValue: 0,
                            loading: params.row.loading,
                            disabled: !_this.hasPermit('updateAdministratorStatus') || params.row.id == 1 ? true : false
                        },
                        on: {
                            'on-change': function onChange(value) {
                                _this.changeAccountStatus(params.index, params.row.id, value);
                            }
                        }
                    }, [h('span', {
                        slot: 'open'
                    }, '激活'), h('span', {
                        slot: 'close'
                    }, '禁用')]);
                }
            }, {
                title: '最近登录时间',
                key: 'last_login_datetime',
                minWidth: 150,
                align: 'center'
            }, {
                title: '注册时间',
                key: 'created_at',
                minWidth: 150,
                align: 'center'
            }, {
                title: '操作',
                key: 'action',
                width: 140,
                align: 'center',
                render: function render(h, params) {
                    return h('div', [h('Button', {
                        props: {
                            type: 'info',
                            size: 'small',
                            icon: 'ios-create-outline',
                            disabled: (!_this.hasPermit('editAdministrator') || params.row.id == 1) && _this.adminInfo.id != 1 ? true : false
                        },
                        attrs: {
                            title: '编辑'
                        },
                        on: {
                            click: function click() {
                                _this.$router.push({
                                    name: 'editAdministrators',
                                    params: {
                                        id: params.row.id
                                    }
                                });
                            }
                        }
                    }), h('Poptip', {
                        props: {
                            trigger: 'click',
                            title: '您确认删除这条记录吗？',
                            placement: 'top-end',
                            confirm: true,
                            okText: '确定',
                            cancelText: '取消',
                            wordWrap: true
                        },
                        on: {
                            'on-ok': function onOk() {
                                _this.deleteAccountInfo(params.row.id);
                            }
                        }
                    }, [h('Button', {
                        props: {
                            type: 'error',
                            size: 'small',
                            icon: 'md-trash',
                            disabled: !_this.hasPermit('delAdministrator') || params.row.id == 1 ? true : false
                        },
                        attrs: {
                            title: '删除成员'
                        }
                    })])]);
                }
            }],
            options2: {
                shortcuts: [{
                    text: '最近一周',
                    value: function value() {
                        var end = new Date();
                        var start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                        return [start, end];
                    }
                }, {
                    text: '最近一个月',
                    value: function value() {
                        var end = new Date();
                        var start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                        return [start, end];
                    }
                }, {
                    text: '最近三个月',
                    value: function value() {
                        var end = new Date();
                        var start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                        return [start, end];
                    }
                }]
            }
        };
    },

    computed: {
        adminList: function adminList() {
            this.loading = false;
            return this.$store.getters.getAdminList;
        }
    },
    watch: {
        adminList: function adminList(curVal, oldVal) {
            this.adminListData = curVal.data;
            this.total = curVal.total;
        }
    },
    methods: {
        /**
         * 查询筛选
         */
        handleSubmit: function handleSubmit() {
            this.formSearchData.page = 1;
            this.$store.dispatch('loadAdminList', this.formSearchData);
        },

        /**
         * 重置筛选条件
         */
        handleReset: function handleReset() {
            this.$refs['formSearchData'].resetFields();
            //重置时清除时间组件数据
            this.searchDateTime = '';
            this.formSearchData.page = 1;
            this.$store.dispatch('loadAdminList', this.formSearchData);
        },

        /**
         * 切换时间范围选择
         */
        changeDateTime: function changeDateTime(datetime) {
            datetime = datetime.filter(Boolean); // 剔除空元素
            if (datetime.length) {
                this.$set(this.formSearchData, 'datetime', datetime.join(','));
            } else {
                this.$set(this.formSearchData, 'datetime', '');
            }
        },

        /**
         * 切换页码
         */
        changePage: function changePage(offset) {
            this.formSearchData.page = offset;
            this.$store.dispatch('loadAdminList', this.formSearchData);
        },

        /**
         * 切换每页条数
         */
        changePageSize: function changePageSize(limit) {
            this.formSearchData.page = 1;
            this.formSearchData.limit = limit;
            this.$store.dispatch('loadAdminList', this.formSearchData);
        },

        /**
         * 切换账号状态
         */
        changeAccountStatus: function changeAccountStatus(index, id, status) {
            var that = this;
            that.adminListData[index].loading = true; // 切换加载状态
            __WEBPACK_IMPORTED_MODULE_0__js_api_admin_js__["a" /* default */].updateAccountStatus({ id: id, status: status }).then(function (res) {
                if (res.data.code) {
                    that.$Message.error(res.data.msg);
                } else {
                    that.$Message.success(res.data.msg);
                }
                that.adminListData[index].loading = false;
                that.adminListData[index].status = status;
            }).catch(function (err) {
                that.$Message.info('系统繁忙，请稍后再试!');
                that.adminListData[index].loading = false;
            });
        },

        /**
         * 删除账号信息
         */
        deleteAccountInfo: function deleteAccountInfo(id) {
            var _this2 = this;

            var that = this;
            that.$Message.loading({
                content: '删除中...',
                duration: 0
            });
            __WEBPACK_IMPORTED_MODULE_0__js_api_admin_js__["a" /* default */].deleteAdminInfo({ id: id }).then(function (res) {
                that.$Message.destroy(); // 销毁加载中提示
                if (res.data.code) {
                    that.$Message.error(res.data.msg);
                } else {
                    that.$Message.success(res.data.msg);
                    that.$store.dispatch('loadAdminList', _this2.formSearchData);
                }
            }).catch(function (err) {
                that.$Message.destroy(); // 销毁加载中提示
                that.$Message.info('系统繁忙，请稍后再试!');
            });
        }
    },
    created: function created() {
        if (!Object.keys(this.adminList).length) {
            this.loading = true;
        }
    },
    mounted: function mounted() {
        // Initialize table data.
        this.$store.dispatch('loadAdminList', this.formSearchData);
        this.adminInfo = this.$store.state.admin.adminInfo;
    }
});

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "laradmin-main" },
    [
      _c("Breadcrumb", [_c("BreadcrumbItem", [_vm._v("成员信息")])], 1),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "content-header",
          on: {
            keydown: function($event) {
              if (
                !("button" in $event) &&
                _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
              ) {
                return null
              }
              return _vm.handleSubmit($event)
            }
          }
        },
        [
          _c(
            "div",
            { staticClass: "header-action" },
            [
              _c(
                "Button",
                {
                  directives: [
                    {
                      name: "has-permit",
                      rawName: "v-has-permit:createAdministrator",
                      arg: "createAdministrator"
                    }
                  ],
                  attrs: {
                    type: "success",
                    icon: "md-add",
                    shape: "circle",
                    to: { name: "createAdministrators" }
                  }
                },
                [_vm._v("新增成员")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "Form",
            {
              ref: "formSearchData",
              attrs: { model: _vm.formSearchData, inline: "" }
            },
            [
              _c(
                "FormItem",
                {
                  attrs: { prop: "keyword", label: "关键字", "label-width": 75 }
                },
                [
                  _c("Input", {
                    staticClass: "header-form-search",
                    attrs: {
                      type: "text",
                      clearable: "",
                      placeholder: "请输入账户/手机号码/邮箱"
                    },
                    model: {
                      value: _vm.formSearchData.keyword,
                      callback: function($$v) {
                        _vm.$set(_vm.formSearchData, "keyword", $$v)
                      },
                      expression: "formSearchData.keyword"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "FormItem",
                {
                  attrs: {
                    prop: "datetime",
                    label: "注册时间",
                    "label-width": 75
                  }
                },
                [
                  _c("DatePicker", {
                    staticClass: "header-form-search",
                    attrs: {
                      type: "daterange",
                      format: "yyyy-MM-dd",
                      options: _vm.options2,
                      placement: "bottom-end",
                      placeholder: "请选择日期"
                    },
                    on: { "on-change": _vm.changeDateTime },
                    model: {
                      value: _vm.searchDateTime,
                      callback: function($$v) {
                        _vm.searchDateTime = $$v
                      },
                      expression: "searchDateTime"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "FormItem",
                [
                  _c(
                    "Button",
                    {
                      attrs: { type: "primary", icon: "ios-search" },
                      on: { click: _vm.handleSubmit }
                    },
                    [_vm._v("搜索")]
                  ),
                  _vm._v(" "),
                  _c(
                    "Button",
                    {
                      attrs: { type: "default" },
                      on: { click: _vm.handleReset }
                    },
                    [_vm._v("重置")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticStyle: { "margin-bottom": "20px" } },
        [
          _c("Table", {
            ref: "selection",
            attrs: {
              columns: _vm.tableColumns,
              data: _vm.adminListData,
              loading: _vm.loading
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.total,
              expression: "total"
            }
          ]
        },
        [
          _c("Page", {
            attrs: {
              total: _vm.total,
              "show-elevator": "",
              "show-total": "",
              "show-sizer": ""
            },
            on: {
              "on-change": _vm.changePage,
              "on-page-size-change": _vm.changePageSize
            }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3fac1bc0", module.exports)
  }
}

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_api_admin_js__ = __webpack_require__(17);
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
    name: 'editAdministrators',
    data: function data() {
        var _this = this;

        return {
            spinShow: false,
            loading: false,
            activeStatus: '新增',
            isDisabled: false,
            labelPassword: '初始密码',
            isRequired: true,
            inputType: 'password',
            lookPassword: 'ios-eye',
            adminsForm: {
                id: '',
                name: '',
                mobile: '',
                email: '',
                password: ''
            },
            ruleValidate: {
                name: [{ required: true, message: '请输入登录账号', trigger: 'blur' }],
                mobile: [{ type: 'string', validator: function validator(rule, value, callback) {
                        if (value != '' && !/^1\d{10}$/.test(value)) {
                            callback('无效的手机号码');
                        } else {
                            callback();
                        }
                    }, trigger: 'change' }],
                email: [{ required: true, message: '请输入电子邮箱', trigger: 'blur' }, { type: 'string', validator: function validator(rule, value, callback) {
                        if (!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)) {
                            callback('无效的电子邮箱');
                        } else {
                            callback();
                        }
                    } }],
                password: [{ type: 'string', validator: function validator(rule, value, callback) {
                        if (_this.isRequired && value == '') {
                            callback('请输入初始密码');
                        } else {
                            callback();
                        }
                    }, trigger: 'blur' }]
            }
        };
    },

    computed: {
        adminInfo: function adminInfo() {
            this.spinShow = false;
            return this.$store.getters.getAdminFirst;
        }
    },
    watch: {
        adminInfo: function adminInfo(curVal, oldVal) {
            this.adminsForm = curVal;
        }
    },
    methods: {
        handleInfoSave: function handleInfoSave() {
            var that = this;
            that.$refs['adminsForm'].validate(function (valid) {
                if (valid) {
                    that.loading = true;
                    that.postAdminInfo(that.adminsForm).then(function (res) {
                        that.loading = false;
                        if (res.data.code) {
                            that.$Message.error(res.data.msg);
                        } else {
                            that.$Message.success(res.data.msg);
                            that.$router.go(-1);
                        }
                    }).catch(function (err) {
                        that.$Message.info('系统繁忙，请稍后再试!');
                        that.loading = false;
                    });
                }
            });
        },
        handleInfoCancel: function handleInfoCancel() {
            this.$refs['adminsForm'].resetFields();
        },

        /**
         * Toggle account password look or not look.
         */
        toggleInputType: function toggleInputType() {
            if (this.inputType == 'password') {
                this.inputType = 'text';
                this.lookPassword = 'ios-eye-off';
            } else {
                this.inputType = 'password';
                this.lookPassword = 'ios-eye';
            }
        },
        postAdminInfo: function postAdminInfo(data) {
            if (data.id == '') {
                return __WEBPACK_IMPORTED_MODULE_0__js_api_admin_js__["a" /* default */].createAdminInfo(data);
            } else {
                return __WEBPACK_IMPORTED_MODULE_0__js_api_admin_js__["a" /* default */].editAdminInfo(data);
            }
        }
    },
    created: function created() {
        // 编辑模式
        var params = this.$route.params;
        var query = this.$route.query;
        if ('id' in params || 'id' in query) {
            this.activeStatus = '编辑';
            this.labelPassword = '重置密码';
            this.isRequired = false;
            this.spinShow = true;
            this.isDisabled = true;
            if ('id' in params) {
                this.$store.dispatch('findAdminList', { id: params.id });
            } else if ('id' in query) {
                this.$store.dispatch('findAdminList', { id: query.id });
            }
        }
    },
    mounted: function mounted() {}
});

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "laradmin-main laradmin-form" },
    [
      _c(
        "Breadcrumb",
        { attrs: { separator: ">" } },
        [
          _c("BreadcrumbItem", { attrs: { to: { name: "administrators" } } }, [
            _vm._v("成员信息")
          ]),
          _vm._v(" "),
          _c("BreadcrumbItem", [_vm._v(_vm._s(_vm.activeStatus) + "成员信息")])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "laradmin-form-element" },
        [
          _vm.spinShow
            ? _c(
                "Spin",
                { attrs: { fix: "" } },
                [
                  _c("Icon", {
                    staticClass: "demo-spin-icon-load",
                    attrs: { type: "ios-loading", size: "50" }
                  })
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "Form",
            {
              ref: "adminsForm",
              staticStyle: { width: "420px" },
              attrs: {
                model: _vm.adminsForm,
                rules: _vm.ruleValidate,
                "label-width": 100
              }
            },
            [
              _c(
                "FormItem",
                { attrs: { label: "账户", prop: "name" } },
                [
                  _c("Input", {
                    staticClass: "modal-form-item",
                    attrs: {
                      clearable: !_vm.isDisabled,
                      disabled: _vm.isDisabled,
                      placeholder: "请输入成员账户"
                    },
                    model: {
                      value: _vm.adminsForm.name,
                      callback: function($$v) {
                        _vm.$set(_vm.adminsForm, "name", $$v)
                      },
                      expression: "adminsForm.name"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "FormItem",
                { attrs: { label: "手机号码", prop: "mobile" } },
                [
                  _c("Input", {
                    staticClass: "modal-form-item",
                    attrs: { clearable: "", placeholder: "请输入成员手机号码" },
                    model: {
                      value: _vm.adminsForm.mobile,
                      callback: function($$v) {
                        _vm.$set(_vm.adminsForm, "mobile", $$v)
                      },
                      expression: "adminsForm.mobile"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "FormItem",
                { attrs: { label: "电子邮箱", prop: "email" } },
                [
                  _c("Input", {
                    staticClass: "modal-form-item",
                    attrs: { clearable: "", placeholder: "请输入成员电子邮箱" },
                    model: {
                      value: _vm.adminsForm.email,
                      callback: function($$v) {
                        _vm.$set(_vm.adminsForm, "email", $$v)
                      },
                      expression: "adminsForm.email"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "FormItem",
                {
                  attrs: {
                    label: _vm.labelPassword,
                    prop: "password",
                    required: _vm.isRequired
                  }
                },
                [
                  _c("Input", {
                    staticClass: "modal-form-item",
                    attrs: {
                      type: _vm.inputType,
                      icon: _vm.lookPassword,
                      placeholder: "请输入账户密码"
                    },
                    on: { "on-click": _vm.toggleInputType },
                    model: {
                      value: _vm.adminsForm.password,
                      callback: function($$v) {
                        _vm.$set(_vm.adminsForm, "password", $$v)
                      },
                      expression: "adminsForm.password"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "FormItem",
                [
                  _c(
                    "Button",
                    {
                      attrs: { type: "primary", loading: _vm.loading },
                      on: { click: _vm.handleInfoSave }
                    },
                    [_vm._v("保存")]
                  ),
                  _vm._v(" "),
                  _c(
                    "Button",
                    {
                      staticStyle: { "margin-left": "8px" },
                      on: { click: _vm.handleInfoCancel }
                    },
                    [_vm._v("重置")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-348e73a0", module.exports)
  }
}

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(127);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(15)("2ac9a70a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2f52602e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./article.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2f52602e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./article.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "\n.ivu-layout-pages .ivu-layout-sider::after {\r\n    content: '';\r\n    display: block;\r\n    width: 1px;\r\n    height: 100%;\r\n    background: #dcdee2;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    z-index: 1;\n}\r\n", ""]);

// exports


/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_components_tags_nav__ = __webpack_require__(39);
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
        TagsNav: __WEBPACK_IMPORTED_MODULE_0__js_components_tags_nav__["a" /* default */]
    },
    data: function data() {
        return {};
    },

    computed: {},
    watch: {},
    methods: {},
    created: function created() {}
});

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "ivu-layout-pages" },
    [_c("Layout", [_c("Content", [_c("router-view")], 1)], 1)],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2f52602e", module.exports)
  }
}

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_api_essay_js__ = __webpack_require__(35);
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
    data: function data() {
        var _this = this;

        return {
            searchDateTime: '',
            formSearchParams: {
                keyword: '',
                typeid: '',
                datetime: [],
                limit: 10,
                page: 1
            },
            columns4: [{
                type: 'selection',
                width: 60,
                align: 'center'
            }, {
                title: '标题',
                align: 'center',
                key: 'title'
            }, {
                title: '分类',
                align: 'center',
                render: function render(h, params) {
                    return h('span', params.row.belongs_to_category.title);
                }
            }, {
                title: '标签',
                align: 'center',
                render: function render(h, params) {
                    var rows = [],
                        tags = params.row.belongs_to_many_tag;
                    if (tags.length) {
                        $.each(tags, function (key, val) {
                            rows.push(h('Tag', {
                                props: {
                                    color: 'orange'
                                }
                            }, val.title));
                        });
                    }
                    return h('div', {
                        style: {
                            textAlign: 'left'
                        }
                    }, rows);
                }
            }, {
                title: '状态',
                align: 'center',
                render: function render(h, params) {
                    switch (params.row.status) {
                        case 0:
                            return h('Tag', {
                                props: {
                                    color: 'primary'
                                }
                            }, '仅保存');
                            break;
                        case 1:
                            return h('Tag', {
                                props: {
                                    color: 'success'
                                }
                            }, '上线');
                            break;
                    }
                }
            }, {
                title: '发布时间',
                key: 'created_at'
            }, {
                title: '操作',
                key: 'action',
                width: 180,
                align: 'center',
                render: function render(h, params) {
                    return h('div', [h('Button', {
                        props: {
                            type: 'info',
                            size: 'small',
                            icon: 'md-eye',
                            to: '/essay/detail/' + params.row.id,
                            replace: true,
                            target: '_blank'
                        },
                        attrs: {
                            title: '预览'
                        }
                    }), h('Button', {
                        props: {
                            type: 'info',
                            size: 'small',
                            icon: 'ios-create-outline',
                            to: '/admin/article/essays/write/' + params.row.id
                        },
                        attrs: {
                            title: '编辑'
                        }
                    }), h('Poptip', {
                        props: {
                            trigger: 'click',
                            title: '您确认删除这条记录吗？',
                            placement: 'top-end',
                            confirm: true,
                            okText: '确定',
                            cancelText: '取消',
                            wordWrap: true
                        },
                        on: {
                            'on-ok': function onOk() {
                                _this.deleteEssay(params.row.id);
                            }
                        }
                    }, [h('Button', {
                        props: {
                            type: 'error',
                            size: 'small',
                            icon: 'md-trash'
                        },
                        attrs: {
                            title: '删除'
                        }
                    })])]);
                }
            }],
            options2: {
                shortcuts: [{
                    text: '最近一周',
                    value: function value() {
                        var end = new Date();
                        var start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                        return [start, end];
                    }
                }, {
                    text: '最近一个月',
                    value: function value() {
                        var end = new Date();
                        var start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                        return [start, end];
                    }
                }, {
                    text: '最近三个月',
                    value: function value() {
                        var end = new Date();
                        var start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                        return [start, end];
                    }
                }]
            }
        };
    },

    computed: {
        essayList: function essayList() {
            return this.$store.getters.getEssayList;
        },
        pageTotal: function pageTotal() {
            return this.$store.getters.getPageTotal;
        },
        categorys: function categorys() {
            return this.$store.getters.getCategoryList.data;
        }
    },
    methods: {
        /**
         * 提交筛选
         */
        handleSubmit: function handleSubmit(name) {
            this.$store.dispatch('loadEssayList', this.formSearchParams);
        },
        handleSelectAll: function handleSelectAll(name) {
            this.$refs.selection.selectAll(status);
        },

        /**
         * 重置筛选条件
         */
        handleReset: function handleReset(name) {
            this.$refs[name].resetFields();
        },

        selectedSecond: function selectedSecond(index) {

            this.$router.push({ path: index });
        },
        /**
         * 日期选择器发生改变时将model绑定的值格式化
         */
        changeFormatDateTime: function changeFormatDateTime(datetime) {
            this.formSearchParams.datetime = datetime;
        },
        /**
         * 当页数发生改变时，重新请求数据
         */
        changePage: function changePage(size) {
            this.params.page = size;
            this.$store.dispatch('loadEssayList', this.formSearchParams);
        },
        /**
         * 当每页条数发生改变时，重新请求数据
         */
        changePageLimit: function changePageLimit(limit) {
            this.params.limit = limit;
            this.$store.dispatch('loadEssayList', this.formSearchParams);
        },
        /**
         * 删除文章
         */
        deleteEssay: function deleteEssay(id) {
            var that = this;
            __WEBPACK_IMPORTED_MODULE_0__js_api_essay_js__["a" /* default */].deleteEssayInfo({ id: id }).then(function (response) {
                if (response.data.code) {
                    that.$Message.error(response.data.msg);
                } else {
                    that.$Message.success(response.data.msg);
                    that.$store.dispatch('loadEssayList');
                }
            }).catch(function () {
                that.$Message.info('系统繁忙，请稍后再试!');
            });
        }
    },
    created: function created() {
        this.$store.dispatch('loadEssayList', this.params);
        this.$store.dispatch('loadCategoryList');
    }
});

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "content-header" },
      [
        _c(
          "Form",
          {
            ref: "formSearchData",
            attrs: { model: _vm.formSearchParams, inline: "" }
          },
          [
            _c(
              "FormItem",
              {
                attrs: { prop: "keyword", label: "关键字", "label-width": 60 }
              },
              [
                _c("Input", {
                  staticClass: "header-form-search",
                  attrs: { type: "text", clearable: "", placeholder: "请输入" },
                  model: {
                    value: _vm.formSearchParams.keyword,
                    callback: function($$v) {
                      _vm.$set(_vm.formSearchParams, "keyword", $$v)
                    },
                    expression: "formSearchParams.keyword"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "FormItem",
              {
                attrs: { prop: "typeid", label: "文章分类", "label-width": 60 }
              },
              [
                _c(
                  "Select",
                  {
                    staticClass: "header-form-search",
                    attrs: { clearable: "" },
                    model: {
                      value: _vm.formSearchParams.typeid,
                      callback: function($$v) {
                        _vm.$set(_vm.formSearchParams, "typeid", $$v)
                      },
                      expression: "formSearchParams.typeid"
                    }
                  },
                  _vm._l(_vm.categorys, function(item) {
                    return _c(
                      "Option",
                      { key: item.id, attrs: { value: item.id } },
                      [_vm._v(_vm._s(item.title))]
                    )
                  }),
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "FormItem",
              {
                attrs: {
                  prop: "datetime",
                  label: "发布时间",
                  "label-width": 60
                }
              },
              [
                _c("DatePicker", {
                  staticClass: "header-form-search",
                  attrs: {
                    type: "daterange",
                    format: "yyyy-MM-dd",
                    options: _vm.options2,
                    placement: "bottom-end",
                    placeholder: "请选择日期"
                  },
                  on: { "on-change": _vm.changeFormatDateTime },
                  model: {
                    value: _vm.formSearchParams.datetime,
                    callback: function($$v) {
                      _vm.$set(_vm.formSearchParams, "datetime", $$v)
                    },
                    expression: "formSearchParams.datetime"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "FormItem",
              [
                _c(
                  "Button",
                  {
                    attrs: { type: "primary", icon: "ios-search" },
                    on: {
                      click: function($event) {
                        _vm.handleSubmit("formSearchData")
                      }
                    }
                  },
                  [_vm._v("搜索")]
                ),
                _vm._v(" "),
                _c(
                  "Button",
                  {
                    attrs: { type: "default" },
                    on: {
                      click: function($event) {
                        _vm.handleReset("formSearchData")
                      }
                    }
                  },
                  [_vm._v("重置")]
                )
              ],
              1
            )
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticStyle: { "margin-bottom": "20px" } },
      [
        _c("Table", {
          ref: "selection",
          attrs: { columns: _vm.columns4, data: _vm.essayList, border: true }
        })
      ],
      1
    ),
    _vm._v(" "),
    _vm.pageTotal
      ? _c(
          "div",
          [
            _c("Page", {
              attrs: {
                total: _vm.pageTotal,
                "show-elevator": "",
                "show-total": "",
                "show-sizer": ""
              },
              on: {
                "on-change": _vm.changePage,
                "on-page-size-change": _vm.changePageLimit
              }
            })
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-26ba313c", module.exports)
  }
}

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_api_essay_js__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_components_upload_picture__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_config_js__ = __webpack_require__(18);
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
        UploadPicture: __WEBPACK_IMPORTED_MODULE_1__js_components_upload_picture__["a" /* default */]
    },
    data: function data() {
        return {
            trueValue: 1,
            falseValue: 0,
            isModal: false,
            title: '发布文章',
            essayData: {
                title: '',
                picture: '',
                abstract: '',
                content: '',
                category_id: '',
                tags: [],
                is_private: 0,
                status: 0
            },
            essayValidate: {
                title: [{ required: true, message: '请输入文章标题', trigger: 'blur' }]
            }
        };
    },

    computed: {
        categorys: function categorys() {
            return this.$store.state.essay.categoryList.data;
        },
        tags: function tags() {
            return this.$store.getters.getTagList.data;
        },
        action: function action() {
            return __WEBPACK_IMPORTED_MODULE_2__js_config_js__["a" /* APP_CONFIG */].API_URL + '/upload';
        }
    },
    methods: {
        handleSubmit: function handleSubmit(status) {
            var _this = this;

            this.essayData.status = status;
            this.$refs.essayData.validate(function (valid) {
                if (valid) {
                    var that = _this;
                    __WEBPACK_IMPORTED_MODULE_0__js_api_essay_js__["a" /* default */].postEssayInfo(that.essayData).then(function (response) {
                        if (response.data.code) {
                            that.$Message.error(response.data.msg);
                        } else {
                            that.$Message.success(response.data.msg);
                            that.isModal = false;
                            that.$refs.essayData.resetFields();
                        }
                    }).catch(function () {
                        that.$Message.info('系统繁忙，请稍后再试!');
                    });
                } else {}
            });
        },
        releaseEssay: function releaseEssay() {
            if (this.essayData.title) {
                this.isModal = true;
            } else {
                this.$Message.warning('请输入文章标题');
            }
        },
        modalCancel: function modalCancel() {
            //隐藏弹框
            this.isModal = false;
        },
        editChange: function editChange(d_value, d_render) {
            this.essayData.abstract = d_render;
        },

        /**
         * 编辑文章
         */
        editEssay: function editEssay() {
            var id = this.$route.params.id,
                that = this;
            if (id != undefined) {
                that.$Message.loading({
                    content: 'Loading...',
                    duration: 0
                });
                __WEBPACK_IMPORTED_MODULE_0__js_api_essay_js__["a" /* default */].getEssayInfo({ id: id }).then(function (response) {
                    that.$Message.destroy();
                    that.essayData = response.data.data;
                }).catch(function () {
                    that.$Message.info('系统繁忙，请稍后再试!');
                    that.$router.go(-1);
                });
            }
        },
        $imgAdd: function $imgAdd(pos, $file) {
            var that = this;
            var formdata = new FormData();
            formdata.append('picture', $file);
            axios({
                url: __WEBPACK_IMPORTED_MODULE_2__js_config_js__["a" /* APP_CONFIG */].API_URL + '/upload',
                method: 'post',
                data: formdata,
                headers: { 'Content-Type': 'multipart/form-data' }
            }).then(function (res) {
                that.$refs.md.$img2Url(pos, res.data.url);
            });
        }
    },
    created: function created() {
        this.$store.dispatch('loadCategoryList');
        this.$store.dispatch('loadTagList');
        this.editEssay();
    }
});

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__upload_picture_vue__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__upload_picture_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__upload_picture_vue__);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__upload_picture_vue___default.a);

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(135)
}
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = __webpack_require__(137)
/* template */
var __vue_template__ = __webpack_require__(138)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/upload-picture/upload-picture.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-01daa9f4", Component.options)
  } else {
    hotAPI.reload("data-v-01daa9f4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(136);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(15)("20ff98c0", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-01daa9f4\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./upload-picture.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-01daa9f4\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./upload-picture.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "\n.upload-picture {\n    margin: 12px auto;\n}\n.upload-picture .ivu-upload .ivu-chart-circle {\n    width: 178px;\n    height: 178px;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n}\n.demo-upload-list{\n    display: inline-block;\n    width: 60px;\n    height: 60px;\n    text-align: center;\n    line-height: 60px;\n    border: 1px solid transparent;\n    border-radius: 4px;\n    overflow: hidden;\n    background: #fff;\n    position: relative;\n    -webkit-box-shadow: 0 1px 1px rgba(0,0,0,.2);\n            box-shadow: 0 1px 1px rgba(0,0,0,.2);\n    margin-right: 4px;\n}\n.demo-upload-list img{\n    width: 100%;\n    height: 100%;\n}\n.demo-upload-list-cover{\n    display: none;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: rgba(0,0,0,.6);\n}\n.demo-upload-list:hover .demo-upload-list-cover{\n    display: block;\n}\n.demo-upload-list-cover i{\n    color: #fff;\n    font-size: 20px;\n    cursor: pointer;\n    margin: 0 2px;\n}\n", ""]);

// exports


/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
    name: 'upload-picture',
    props: {
        value: {
            type: String,
            default: ''
        },
        action: {
            type: String,
            default: ''
        },
        headers: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        fileData: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        name: {
            type: String,
            default: 'file'
        },
        format: {
            type: Array,
            default: function _default() {
                return ['jpg', 'jpeg', 'png'];
            }
        },
        maxSize: {
            type: Number,
            default: 2048
        },
        width: {
            type: Number,
            default: 200
        },
        height: {
            type: Number,
            default: 200
        }
    },
    data: function data() {
        return {
            pictureUrl: '',
            oldPictureUrl: '',
            uploadStatus: false,
            uploadProgress: 0

        };
    },

    watch: {
        value: function value(curVal, oldVal) {
            this.pictureUrl = curVal;
        },
        pictureUrl: function pictureUrl(curVal, oldVal) {
            this.$emit('input', curVal);
        }
    },
    methods: {
        handleBeforeUpload: function handleBeforeUpload() {
            this.uploadStatus = true;
            this.oldPictureUrl = this.pictureUrl;
            this.pictureUrl = '';
        },
        handleProgress: function handleProgress(event, file) {
            this.uploadProgress = parseInt(event.percent);
            if (event.percent == 100) {
                this.uploadStatus = false;
                this.uploadProgress = 0;
            }
        },
        handleSuccess: function handleSuccess(res, file) {
            if (res.code) {
                this.$Notice.error({
                    title: '图片上传',
                    desc: res.msg
                });
            } else {
                this.pictureUrl = res.url;
            }
        },
        handleError: function handleError(err, file) {
            this.pictureUrl = this.oldPictureUrl;
        },
        handleFormatError: function handleFormatError(file) {
            this.$Notice.warning({
                title: 'The file format is incorrect',
                desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
            });
        },
        handleMaxSize: function handleMaxSize(file) {
            this.$Notice.warning({
                title: 'Exceeding file size limit',
                desc: 'File  ' + file.name + ' is too large, no more than 2M.'
            });
        },
        handleRemove: function handleRemove(file) {
            var fileList = this.$refs.upload.fileList;
            this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
        }
    },
    mounted: function mounted() {
        if (this.value) {
            this.pictureUrl = this.value;
        }
    }
});

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "upload-picture", attrs: { value: _vm.value } },
    [
      _c(
        "Upload",
        {
          ref: "upload",
          style: { display: "inline-block", width: _vm.width + "px" },
          attrs: {
            action: _vm.action,
            headers: _vm.headers,
            data: _vm.fileData,
            name: _vm.name,
            "show-upload-list": false,
            type: "drag",
            accept: "image/*",
            format: _vm.format,
            "max-size": _vm.maxSize,
            "before-upload": _vm.handleBeforeUpload,
            "on-progress": _vm.handleProgress,
            "on-success": _vm.handleSuccess,
            "on-error": _vm.handleError,
            "on-format-error": _vm.handleFormatError,
            "on-exceeded-size": _vm.handleMaxSize
          }
        },
        [
          _c(
            "div",
            {
              style: {
                width: _vm.width + "px",
                height: _vm.height + "px",
                lineHeight: _vm.height + "px"
              }
            },
            [
              _vm.uploadStatus
                ? _c("i-circle", { attrs: { percent: _vm.uploadProgress } }, [
                    _c(
                      "span",
                      {
                        staticClass: "demo-Circle-inner",
                        staticStyle: { "font-size": "24px" }
                      },
                      [_vm._v(_vm._s(_vm.uploadProgress) + "%")]
                    )
                  ])
                : !_vm.pictureUrl
                ? _c("Icon", { attrs: { type: "ios-camera", size: "20" } })
                : _c("img", {
                    staticStyle: { width: "100%", height: "100%" },
                    attrs: { src: _vm.pictureUrl }
                  })
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-01daa9f4", module.exports)
  }
}

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "div",
        { staticClass: "essay-header-title" },
        [
          _c("Input", {
            attrs: { type: "text", size: "large", placeholder: "文章标题" },
            model: {
              value: _vm.essayData.title,
              callback: function($$v) {
                _vm.$set(_vm.essayData, "title", $$v)
              },
              expression: "essayData.title"
            }
          }),
          _vm._v(" "),
          _c(
            "Button",
            {
              attrs: { type: "primary", size: "large" },
              on: { click: _vm.releaseEssay }
            },
            [_vm._v("发布")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "essay-content" }),
      _vm._v(" "),
      _c(
        "Modal",
        {
          attrs: { title: _vm.title },
          model: {
            value: _vm.isModal,
            callback: function($$v) {
              _vm.isModal = $$v
            },
            expression: "isModal"
          }
        },
        [
          _c(
            "div",
            [
              _c(
                "Form",
                { ref: "essayData", attrs: { model: _vm.essayData } },
                [
                  _c(
                    "FormItem",
                    { attrs: { label: "文章封面" } },
                    [
                      _c("upload-picture", {
                        attrs: {
                          action: _vm.action,
                          name: "picture",
                          width: 400,
                          height: 200
                        },
                        model: {
                          value: _vm.essayData.picture,
                          callback: function($$v) {
                            _vm.$set(_vm.essayData, "picture", $$v)
                          },
                          expression: "essayData.picture"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "FormItem",
                    { attrs: { label: "文章分类" } },
                    [
                      _c(
                        "RadioGroup",
                        {
                          model: {
                            value: _vm.essayData.category_id,
                            callback: function($$v) {
                              _vm.$set(_vm.essayData, "category_id", $$v)
                            },
                            expression: "essayData.category_id"
                          }
                        },
                        _vm._l(_vm.categorys, function(item) {
                          return _c(
                            "Radio",
                            { key: item.id, attrs: { label: item.id } },
                            [_vm._v(_vm._s(item.title))]
                          )
                        }),
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "FormItem",
                    { attrs: { label: "文章标签" } },
                    [
                      _c(
                        "CheckboxGroup",
                        {
                          model: {
                            value: _vm.essayData.tags,
                            callback: function($$v) {
                              _vm.$set(_vm.essayData, "tags", $$v)
                            },
                            expression: "essayData.tags"
                          }
                        },
                        _vm._l(_vm.tags, function(item) {
                          return _c(
                            "Checkbox",
                            { key: item.id, attrs: { label: item.id } },
                            [_vm._v(_vm._s(item.title))]
                          )
                        }),
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "FormItem",
                    { attrs: { label: "私密文章", prop: "isPrivate" } },
                    [
                      _c("i-switch", {
                        attrs: {
                          "true-value": _vm.trueValue,
                          "false-value": _vm.falseValue
                        },
                        model: {
                          value: _vm.essayData.is_private,
                          callback: function($$v) {
                            _vm.$set(_vm.essayData, "is_private", $$v)
                          },
                          expression: "essayData.is_private"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { attrs: { slot: "footer" }, slot: "footer" },
            [
              _c(
                "Button",
                { attrs: { type: "default" }, on: { click: _vm.modalCancel } },
                [_vm._v("取消")]
              ),
              _vm._v(" "),
              _c(
                "Button",
                {
                  attrs: { type: "default" },
                  on: {
                    click: function($event) {
                      _vm.handleSubmit(0)
                    }
                  }
                },
                [_vm._v("保存为草稿")]
              ),
              _vm._v(" "),
              _c(
                "Button",
                {
                  attrs: { type: "primary" },
                  on: {
                    click: function($event) {
                      _vm.handleSubmit(1)
                    }
                  }
                },
                [_vm._v("发布文章")]
              )
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2d90078e", module.exports)
  }
}

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(141);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(15)("41b6ea12", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0749ce61\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0749ce61\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "\n.admin-avatar {\n    width: 100px;\n    height: 100px;\n    line-height: 100px;\n    border-radius: 50px;\n}\n", ""]);

// exports


/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
    name: 'Home',
    data: function data() {
        return {};
    },

    computed: {
        admins: function admins() {
            return this.$store.getters.getAdminInfo;
        }
    },
    watch: {},
    methods: {},
    created: function created() {}
});

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "laradmin-main" },
    [
      _c("Card", { staticStyle: { width: "320px" } }, [
        _c("p", { attrs: { slot: "title" }, slot: "title" }, [
          _vm._v("欢迎登录")
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticStyle: { "text-align": "center" } },
          [
            _c("Avatar", {
              staticClass: "admin-avatar",
              attrs: {
                icon: "ios-person",
                size: "large",
                src: _vm.admins.avatar
              }
            }),
            _vm._v(" "),
            _c("h3", [_vm._v(_vm._s(_vm.admins.name))]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "最近一次登录时间：" + _vm._s(_vm.admins.last_login_datetime)
              )
            ])
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0749ce61", module.exports)
  }
}

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_api_module_js__ = __webpack_require__(38);
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
    name: 'editModule',
    data: function data() {
        return {
            spinShow: false,
            loading: false,
            activeStatus: '新增',
            trueValue: 1,
            falseValue: 0,
            moduleData: {
                id: '',
                parent_id: -1,
                title: '',
                vue_router_path: '',
                vue_router_name: '',
                vue_file_path: '',
                laravel_router_path: '',
                is_menu: 0,
                icon: '',
                sort: 1,
                status: 1
            },
            ruleValidate: {
                parent_id: [{ required: true, type: 'number', min: 0, message: '请选择上级菜单', trigger: 'change' }],
                title: [{ required: true, message: '请输入菜单名称', trigger: 'blur' }]
            }
        };
    },

    computed: {
        menuModules: function menuModules() {
            return this.$store.getters.getMenuModule.data;
        },
        moduleInfo: function moduleInfo() {
            return this.$store.getters.getModuleInfo.data;
        }
    },
    watch: {
        moduleInfo: function moduleInfo(curVal, oldVal) {
            this.moduleData = curVal;
            this.spinShow = false;
        }
    },
    methods: {
        /**
         * 设置顶级菜单 select 组件元素列表展示样式
         */
        selectPaddingLeft: function selectPaddingLeft(child) {
            return child * 16 + 16;
        },

        /** 
         * Module cancel event.
         */
        handleInfoCancel: function handleInfoCancel() {
            // reset from
            this.$refs['moduleData'].resetFields();
        },

        /** 
         * Save module info event.
         */
        handleInfoSave: function handleInfoSave() {
            var _this = this;

            this.$refs['moduleData'].validate(function (valid) {
                if (valid) {
                    var that = _this;
                    that.loading = true;
                    _this.postModuleInfo(_this.moduleData).then(function (response) {
                        that.loading = false;
                        if (response.data.code) {
                            that.$Message.error(response.data.msg);
                        } else {
                            that.$Message.success(response.data.msg);
                            that.$router.go(-1);
                        }
                    }).catch(function () {
                        that.$Message.info('系统繁忙，请稍后再试!');
                        that.loading = false;
                    });
                }
            });
        },

        /**
         * Submit system module information.
         */
        postModuleInfo: function postModuleInfo(data) {
            if (data.id == '') {
                return __WEBPACK_IMPORTED_MODULE_0__js_api_module_js__["a" /* default */].createModuleInfo(data);
            } else {
                return __WEBPACK_IMPORTED_MODULE_0__js_api_module_js__["a" /* default */].editModuleInfo(data);
            }
        }
    },
    created: function created() {
        // 编辑模式
        var params = this.$route.params;
        var query = this.$route.query;
        if ('id' in params) {
            this.activeStatus = '编辑';
            this.spinShow = true;
            this.$store.dispatch('loadModuleInfo', params.id);
        } else if ('id' in query) {
            this.activeStatus = '编辑';
            this.spinShow = true;
            this.$store.dispatch('loadModuleInfo', query.id);
        }
    },
    mounted: function mounted() {
        // Initialize parent menu list.
        this.$store.dispatch('loadIsMenuModule');
    }
});

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "laradmin-main laradmin-form" },
    [
      _c(
        "Breadcrumb",
        { attrs: { separator: ">" } },
        [
          _c("BreadcrumbItem", { attrs: { to: { name: "module" } } }, [
            _vm._v("模块配置")
          ]),
          _vm._v(" "),
          _c("BreadcrumbItem", [_vm._v(_vm._s(_vm.activeStatus) + "模块配置")])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "laradmin-form-element" },
        [
          _vm.spinShow
            ? _c(
                "Spin",
                { attrs: { fix: "" } },
                [
                  _c("Icon", {
                    staticClass: "demo-spin-icon-load",
                    attrs: { type: "ios-loading", size: "50" }
                  })
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "Form",
            {
              ref: "moduleData",
              staticStyle: { width: "420px" },
              attrs: {
                model: _vm.moduleData,
                rules: _vm.ruleValidate,
                "label-width": 100
              }
            },
            [
              _c(
                "FormItem",
                { attrs: { label: "上级菜单", prop: "parent_id" } },
                [
                  _c(
                    "Select",
                    {
                      staticClass: "modal-form-item",
                      model: {
                        value: _vm.moduleData.parent_id,
                        callback: function($$v) {
                          _vm.$set(_vm.moduleData, "parent_id", $$v)
                        },
                        expression: "moduleData.parent_id"
                      }
                    },
                    [
                      _c("Option", { attrs: { value: 0 } }, [
                        _vm._v("顶级菜单")
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.menuModules, function(item) {
                        return _c(
                          "Option",
                          {
                            key: item.id,
                            style: {
                              paddingLeft:
                                _vm.selectPaddingLeft(item.index) + "px"
                            },
                            attrs: { value: item.id }
                          },
                          [_vm._v(_vm._s(item.title))]
                        )
                      })
                    ],
                    2
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "FormItem",
                { attrs: { label: "菜单名称", prop: "title" } },
                [
                  _c("Input", {
                    staticClass: "modal-form-item",
                    attrs: { placeholder: "请输入菜单名称" },
                    model: {
                      value: _vm.moduleData.title,
                      callback: function($$v) {
                        _vm.$set(_vm.moduleData, "title", $$v)
                      },
                      expression: "moduleData.title"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "FormItem",
                { attrs: { label: "Vue路由地址", prop: "vue_router_path" } },
                [
                  _c("Input", {
                    staticClass: "modal-form-item",
                    attrs: { placeholder: "请输入Vue路由地址" },
                    model: {
                      value: _vm.moduleData.vue_router_path,
                      callback: function($$v) {
                        _vm.$set(_vm.moduleData, "vue_router_path", $$v)
                      },
                      expression: "moduleData.vue_router_path"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "FormItem",
                { attrs: { label: "Vue路由名称", prop: "vue_router_name" } },
                [
                  _c("Input", {
                    staticClass: "modal-form-item",
                    attrs: { placeholder: "请输入Vue路由名称" },
                    model: {
                      value: _vm.moduleData.vue_router_name,
                      callback: function($$v) {
                        _vm.$set(_vm.moduleData, "vue_router_name", $$v)
                      },
                      expression: "moduleData.vue_router_name"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "FormItem",
                { attrs: { label: "Vue文件地址", prop: "vue_file_path" } },
                [
                  _c("Input", {
                    staticClass: "modal-form-item",
                    attrs: { placeholder: "请输入Vue文件地址" },
                    model: {
                      value: _vm.moduleData.vue_file_path,
                      callback: function($$v) {
                        _vm.$set(_vm.moduleData, "vue_file_path", $$v)
                      },
                      expression: "moduleData.vue_file_path"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "FormItem",
                {
                  attrs: { label: "Laravel路由", prop: "laravel_router_path" }
                },
                [
                  _c("Input", {
                    staticClass: "modal-form-item",
                    attrs: { placeholder: "请输入Laravel路由" },
                    model: {
                      value: _vm.moduleData.laravel_router_path,
                      callback: function($$v) {
                        _vm.$set(_vm.moduleData, "laravel_router_path", $$v)
                      },
                      expression: "moduleData.laravel_router_path"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "FormItem",
                { attrs: { label: "导航菜单", prop: "is_menu" } },
                [
                  _c(
                    "i-switch",
                    {
                      attrs: {
                        size: "large",
                        "true-value": _vm.trueValue,
                        "false-value": _vm.falseValue
                      },
                      model: {
                        value: _vm.moduleData.is_menu,
                        callback: function($$v) {
                          _vm.$set(_vm.moduleData, "is_menu", $$v)
                        },
                        expression: "moduleData.is_menu"
                      }
                    },
                    [
                      _c("span", { attrs: { slot: "open" }, slot: "open" }, [
                        _vm._v("是")
                      ]),
                      _vm._v(" "),
                      _c("span", { attrs: { slot: "close" }, slot: "close" }, [
                        _vm._v("否")
                      ])
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "FormItem",
                { attrs: { label: "icon", prop: "icon" } },
                [
                  _c("Input", {
                    staticClass: "modal-form-item",
                    attrs: { placeholder: "请输入icon" },
                    model: {
                      value: _vm.moduleData.icon,
                      callback: function($$v) {
                        _vm.$set(_vm.moduleData, "icon", $$v)
                      },
                      expression: "moduleData.icon"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "FormItem",
                { attrs: { label: "排序", prop: "sort" } },
                [
                  _c("InputNumber", {
                    staticClass: "modal-form-item",
                    attrs: { min: 1 },
                    model: {
                      value: _vm.moduleData.sort,
                      callback: function($$v) {
                        _vm.$set(_vm.moduleData, "sort", $$v)
                      },
                      expression: "moduleData.sort"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "FormItem",
                { attrs: { label: "状态", prop: "status" } },
                [
                  _c(
                    "i-switch",
                    {
                      attrs: {
                        size: "large",
                        "true-value": _vm.trueValue,
                        "false-value": _vm.falseValue
                      },
                      model: {
                        value: _vm.moduleData.status,
                        callback: function($$v) {
                          _vm.$set(_vm.moduleData, "status", $$v)
                        },
                        expression: "moduleData.status"
                      }
                    },
                    [
                      _c("span", { attrs: { slot: "open" }, slot: "open" }, [
                        _vm._v("开启")
                      ]),
                      _vm._v(" "),
                      _c("span", { attrs: { slot: "close" }, slot: "close" }, [
                        _vm._v("关闭")
                      ])
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "FormItem",
                [
                  _c(
                    "Button",
                    {
                      attrs: { type: "primary", loading: _vm.loading },
                      on: { click: _vm.handleInfoSave }
                    },
                    [_vm._v("保存")]
                  ),
                  _vm._v(" "),
                  _c(
                    "Button",
                    {
                      staticStyle: { "margin-left": "8px" },
                      on: { click: _vm.handleInfoCancel }
                    },
                    [_vm._v("重置")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3610926c", module.exports)
  }
}

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_api_module_js__ = __webpack_require__(38);
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
    data: function data() {
        var _this = this;

        return {
            loading: false,
            tableColumns: [{
                title: '菜单名称',
                align: 'left',
                minWidth: 180,
                render: function render(h, params) {
                    return h("div", {
                        style: {
                            paddingLeft: params.row.index * 30 + 'px'
                        }
                    }, params.row.title);
                }
            }, {
                title: 'Vue路由地址',
                key: 'vue_router_path',
                align: 'left',
                minWidth: 120
            }, {
                title: 'Vue路由名称',
                key: 'vue_router_name',
                align: 'left',
                minWidth: 120
            }, {
                title: 'Vue文件地址',
                key: 'vue_file_path',
                align: 'left',
                minWidth: 120
            }, {
                title: 'Laravel路由地址',
                key: 'laravel_router_path',
                align: 'left',
                minWidth: 140
            }, {
                title: '导航菜单',
                key: 'is_menu',
                align: 'center',
                minWidth: 100,
                render: function render(h, params) {
                    return h("Tag", {
                        props: {
                            color: params.row.is_menu ? 'success' : '#999'
                        }
                    }, params.row.is_menu ? '是' : '否');
                }
            }, {
                title: 'icon',
                key: 'icon',
                align: 'center',
                minWidth: 80,
                render: function render(h, params) {
                    return h("Icon", {
                        props: {
                            type: params.row.icon
                        }
                    });
                }
            }, {
                title: '排序',
                key: 'sort',
                align: 'center',
                minWidth: 80
            }, {
                title: '状态',
                align: 'center',
                width: 100,
                render: function render(h, params) {
                    return h('i-switch', {
                        props: {
                            value: params.row.status,
                            size: 'large',
                            trueValue: 1,
                            falseValue: 0,
                            loading: params.row.loading,
                            disabled: !_this.hasPermit('upModuleStatus') ? true : false
                        },
                        on: {
                            'on-change': function onChange(value) {
                                //开关状态更改事件
                                _this.updateModuleStatus(params.index, params.row.id, value);
                            }
                        }
                    }, [h('span', {
                        slot: 'open'
                    }, '开启'), h('span', {
                        slot: 'close'
                    }, '关闭')]);
                }
            }, {
                title: '操作',
                key: 'action',
                width: 140,
                align: 'center',
                render: function render(h, params) {
                    return h('div', [h('Button', {
                        props: {
                            type: 'primary',
                            size: 'small',
                            icon: 'ios-create-outline',
                            disabled: !_this.hasPermit('editModule') ? true : false
                        },
                        attrs: {
                            title: '编辑模块'
                        },
                        on: {
                            click: function click() {
                                _this.$router.push({
                                    name: 'editModule',
                                    params: {
                                        id: params.row.id
                                    }
                                });
                            }
                        }
                    }), h('Poptip', {
                        props: {
                            trigger: 'click',
                            title: '您确认删除这条记录吗？',
                            placement: 'top-end',
                            confirm: true,
                            okText: '确定',
                            cancelText: '取消',
                            wordWrap: true
                        },
                        on: {
                            'on-ok': function onOk() {
                                _this.deleteModule(params.row.id);
                            }
                        }
                    }, [h('Button', {
                        props: {
                            type: 'error',
                            size: 'small',
                            icon: 'md-trash',
                            disabled: !_this.hasPermit('delModule') ? true : false
                        },
                        attrs: {
                            title: '删除模块'
                        }
                    })])]);
                }
            }]
        };
    },

    computed: {
        modules: function modules() {
            this.loading = false;
            return this.$store.getters.getModuleList.data;
        }
    },
    methods: {
        /** 
         * Create module info.
         */
        createModuleInfo: function createModuleInfo() {
            this.isModal = true;
            this.modalTitle = '新增';
            this.$store.dispatch('loadIsMenuModule');
        },

        /** 
         * Delete menu record.
         */
        deleteModule: function deleteModule(id) {
            var that = this;
            __WEBPACK_IMPORTED_MODULE_0__js_api_module_js__["a" /* default */].deleteModule({ id: id }).then(function (response) {
                if (response.data.code) {
                    that.$Message.error(response.data.msg);
                } else {
                    that.$Message.success(response.data.msg);
                }
                that.$store.dispatch('loadModule');
            }).catch(function () {
                that.$Message.info('系统繁忙，请稍后再试!');
            });
        },
        /** 
         * Update module status.
         */
        updateModuleStatus: function updateModuleStatus(index, id, status) {
            var that = this;
            that.modules[index].loading = true;
            __WEBPACK_IMPORTED_MODULE_0__js_api_module_js__["a" /* default */].updateModuleStatus({ id: id, status: status }).then(function (response) {
                if (response.data.code) {
                    that.$Message.error(response.data.msg);
                } else {
                    that.$Message.success(response.data.msg);
                }
                that.$store.dispatch('loadModule');
                that.modules[index].loading = false;
            }).catch(function () {
                that.$Message.info('系统繁忙，请稍后再试!');
                that.modules[index].loading = false;
            });
        }
    },
    created: function created() {
        if (this.modules == undefined) {
            this.loading = true;
        }
    },
    mounted: function mounted() {
        // Initialize table data.
        this.$store.dispatch('loadModule');
    }
});

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "laradmin-main" },
    [
      _c("Breadcrumb", [_c("BreadcrumbItem", [_vm._v("模块配置")])], 1),
      _vm._v(" "),
      _c("div", { staticClass: "content-header" }, [
        _c(
          "div",
          { staticClass: "header-action" },
          [
            _c(
              "Button",
              {
                directives: [
                  {
                    name: "has-permit",
                    rawName: "v-has-permit:createModule",
                    arg: "createModule"
                  }
                ],
                attrs: {
                  type: "success",
                  shape: "circle",
                  icon: "md-add",
                  to: { name: "createModule" }
                }
              },
              [_vm._v("新增配置")]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticStyle: { "margin-bottom": "20px" } },
        [
          _c("Table", {
            ref: "expand",
            attrs: {
              columns: _vm.tableColumns,
              data: _vm.modules,
              border: true,
              loading: _vm.loading
            }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c3f86000", module.exports)
  }
}

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_tree_node_vue__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_tree_node_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__auth_tree_node_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_scss__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_scss__);
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'auth-tree',
    components: { AuthTreeNode: __WEBPACK_IMPORTED_MODULE_0__auth_tree_node_vue___default.a },
    model: {
        prop: 'treeData',
        event: 'change'
    },
    props: {
        treeData: {
            type: Array,
            default: function _default() {
                return [];
            }
        }
    },
    data: function data() {
        return {
            authTree: [],
            flatAuth: []
        };
    },

    computed: {},
    watch: {
        treeData: function treeData(newVal) {
            this.authTree = newVal;
            this.flatAuth = this.compileFlatAuth();
            this.rebuildTree();
        },
        authTree: function authTree(newVal) {
            this.$emit('change', newVal);
        }
    },
    methods: {
        /** Screening permissions for role groups. */
        compileFlatAuth: function compileFlatAuth() {
            var keyCounter = 0;
            var flatTree = [];
            function flattenChildren(node, parent) {
                node.nodeKey = keyCounter++;
                flatTree[node.nodeKey] = { node: node, nodeKey: node.nodeKey };
                if (typeof parent != 'undefined') {
                    flatTree[node.nodeKey].parent = parent.nodeKey;
                    flatTree[parent.nodeKey]['children'].push(node.nodeKey);
                }

                if (node['children']) {
                    flatTree[node.nodeKey]['children'] = [];
                    node['children'].forEach(function (child) {
                        return flattenChildren(child, node);
                    });
                }
            }

            this.authTree.forEach(function (rootNode) {
                flattenChildren(rootNode);
            });

            return flatTree;
        },
        refreshTreeUp: function refreshTreeUp(nodeKey) {
            //向上刷新树节点数据
            var parentKey = this.flatAuth[nodeKey].parent;
            if (typeof parentKey == 'undefined') return;

            var nullCount = 0;
            var fullCount = 0;
            var node = this.flatAuth[nodeKey].node;
            var parentNode = this.flatAuth[parentKey].node;

            for (var key in parentNode['children']) {
                if (parentNode['children'][key].isChecked === 0) {
                    nullCount++;
                } else if (parentNode['children'][key].isChecked === 1 && !parentNode['children'][key].indeterminate) {
                    fullCount++;
                }
            }

            if (parentNode['children'].length === nullCount) {
                this.$set(parentNode, 'isChecked', 0);
                this.$set(parentNode, 'indeterminate', false);
            } else if (parentNode['children'].length === fullCount) {
                this.$set(parentNode, 'isChecked', 1);
                this.$set(parentNode, 'indeterminate', false);
            } else {
                this.$set(parentNode, 'isChecked', 1);
                this.$set(parentNode, 'indeterminate', true);
            }

            this.refreshTreeUp(parentKey);
        },
        refreshTreeDown: function refreshTreeDown(node) {
            var _this = this;

            var changes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            //向下刷新树节点数据

            for (var key in changes) {
                this.$set(node, key, changes[key]);
            }
            if (node['children']) {
                node['children'].forEach(function (child) {
                    _this.refreshTreeDown(child, changes);
                });
            }
        },
        rebuildTree: function rebuildTree() {
            for (var key in this.flatAuth) {
                if (this.flatAuth[key].node.isChecked) {
                    this.refreshTreeUp(this.flatAuth[key].nodeKey);
                }
            }
        },
        handleCheck: function handleCheck(_ref) {
            var checked = _ref.checked,
                nodeKey = _ref.nodeKey;

            var node = this.flatAuth[nodeKey].node;
            this.$set(node, 'isChecked', checked);
            this.$set(node, 'indeterminate', false);

            this.refreshTreeUp(nodeKey);
            this.refreshTreeDown(node, { isChecked: checked, indeterminate: false });
        }
    },
    mounted: function mounted() {
        this.$on('on-check', this.handleCheck);
    }
});

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(150);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(15)("c208612a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-64072517\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./auth-tree-node.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-64072517\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./auth-tree-node.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_tree_node_vue__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_tree_node_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__auth_tree_node_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_iview_src_mixins_emitter_js__ = __webpack_require__(152);
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
    name: 'auth-tree-node',
    mixins: [__WEBPACK_IMPORTED_MODULE_1_iview_src_mixins_emitter_js__["a" /* default */]],
    components: { AuthTreeNode: __WEBPACK_IMPORTED_MODULE_0__auth_tree_node_vue___default.a },
    props: ['model'],
    data: function data() {
        return {};
    },

    computed: {
        isFolder: function isFolder() {
            return this.model.children && this.model.children.length;
        },
        isChildren: function isChildren() {
            return !this.model.children || !this.model.children.length ? 'active-children' : '';
        }
    },
    methods: {
        onChangeAuth: function onChangeAuth(isCheck) {
            //Vue2.x已移除dispatch方法，该方法使用的是iview-UI自定义的方法，用于事件分发，源码：iview/src/mixins/emitter.js
            this.dispatch('auth-tree', 'on-check', { checked: isCheck, nodeKey: this.model.nodeKey });
        }
    }
});

/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function broadcast(componentName, eventName, params) {
    this.$children.forEach(child => {
        const name = child.$options.name;

        if (name === componentName) {
            child.$emit.apply(child, [eventName].concat(params));
        } else {
            // todo 如果 params 是空数组，接收到的会是 undefined
            broadcast.apply(child, [componentName, eventName].concat([params]));
        }
    });
}
/* harmony default export */ __webpack_exports__["a"] = ({
    methods: {
        dispatch(componentName, eventName, params) {
            let parent = this.$parent || this.$root;
            let name = parent.$options.name;

            while (parent && (!name || name !== componentName)) {
                parent = parent.$parent;

                if (parent) {
                    name = parent.$options.name;
                }
            }
            if (parent) {
                parent.$emit.apply(parent, [eventName].concat(params));
            }
        },
        broadcast(componentName, eventName, params) {
            broadcast.call(this, componentName, eventName, params);
        }
    }
});

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    { class: _vm.isChildren },
    [
      _c(
        "Checkbox",
        {
          attrs: {
            "true-value": 1,
            "false-value": 0,
            indeterminate: _vm.model.indeterminate
          },
          on: { "on-change": _vm.onChangeAuth },
          model: {
            value: _vm.model.isChecked,
            callback: function($$v) {
              _vm.$set(_vm.model, "isChecked", $$v)
            },
            expression: "model.isChecked"
          }
        },
        [_c("span", [_vm._v(_vm._s(_vm.model.title))])]
      ),
      _vm._v(" "),
      _vm.isFolder
        ? _c(
            "ul",
            { staticClass: "auth-tree-node" },
            _vm._l(_vm.model.children, function(model, key, index) {
              return _c("auth-tree-node", {
                key: index,
                attrs: { index: key, model: model }
              })
            }),
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-64072517", module.exports)
  }
}

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, ".role-author-tree ul {\n  list-style-type: none; }\n\n.role-author-tree .auth-tree > li {\n  padding: 15px;\n  border: 1px solid #eee;\n  border-radius: 6px;\n  margin-bottom: 14px;\n  box-shadow: 0 2px 2px 0 #ddd; }\n\n.role-author-tree .auth-tree .auth-tree-node {\n  display: inline-block;\n  vertical-align: middle; }\n\n.role-author-tree .auth-tree .auth-tree-node .active-children {\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 4px; }\n\n.role-author-tree .auth-tree li .ivu-checkbox-wrapper {\n  width: 100px; }\n\n.role-author-tree li {\n  line-height: 32px; }\n", ""]);

// exports


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "role-author-tree" }, [
    _c(
      "ul",
      { staticClass: "auth-tree" },
      _vm._l(_vm.authTree, function(model, key, index) {
        return _c("auth-tree-node", {
          key: index,
          attrs: { index: key, model: model }
        })
      }),
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-cfaf2370", module.exports)
  }
}

/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_api_role_js__ = __webpack_require__(33);
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
    name: 'editRole',
    data: function data() {
        return {
            spinShow: false,
            loading: false,
            activeStatus: '新增',
            roleGroupForm: {
                id: '',
                title: '',
                remarks: ''
            },
            ruleValidate: {
                title: [{ required: true, message: '请输入分组名称', trigger: 'blur' }]
            }
        };
    },

    computed: {
        roleInfo: function roleInfo() {
            return this.$store.getters.getRoleInfo.data;
        }
    },
    watch: {
        roleInfo: function roleInfo(curVal, oldVal) {
            this.spinShow = false;
            this.roleGroupForm = curVal;
        }
    },
    methods: {
        /** 
         * Admin group modal cancel event.
         */
        handleInfoCancel: function handleInfoCancel() {
            this.$refs['roleGroupForm'].resetFields(); // Reset from
        },

        /** 
         * Administrator group form submission event.
         */
        handleInfoSave: function handleInfoSave() {
            var _this = this;

            this.$refs.roleGroupForm.validate(function (valid) {
                if (valid) {
                    var that = _this;
                    that.loading = true;
                    _this.postRoleInfo(that.roleGroupForm).then(function (response) {
                        that.loading = false;
                        if (response.data.code) {
                            that.$Message.error(response.data.msg);
                        } else {
                            that.$Message.success(response.data.msg);
                            that.$router.go(-1);
                        }
                    }).catch(function () {
                        that.$Message.info('系统繁忙，请稍后再试!');
                        that.loading = false;
                    });
                }
            });
        },

        /**
         * Submit user group information.
         */
        postRoleInfo: function postRoleInfo(data) {
            if (data.id == '') {
                return __WEBPACK_IMPORTED_MODULE_0__js_api_role_js__["a" /* default */].createRoleInfo(data);
            } else {
                return __WEBPACK_IMPORTED_MODULE_0__js_api_role_js__["a" /* default */].editRoleInfo(data);
            }
        }
    },
    created: function created() {
        // 编辑模式
        var params = this.$route.params;
        var query = this.$route.query;
        if ('id' in params) {
            this.activeStatus = '编辑';
            this.spinShow = true;
            this.$store.dispatch('loadRoleInfo', params.id);
        } else if ('id' in query) {
            this.activeStatus = '编辑';
            this.spinShow = true;
            this.$store.dispatch('loadRoleInfo', query.id);
        }
    },
    mounted: function mounted() {}
});

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "laradmin-main laradmin-form" },
    [
      _c(
        "Breadcrumb",
        { attrs: { separator: ">" } },
        [
          _c("BreadcrumbItem", { attrs: { to: { name: "role" } } }, [
            _vm._v("角色配置")
          ]),
          _vm._v(" "),
          _c("BreadcrumbItem", [_vm._v(_vm._s(_vm.activeStatus) + "角色分组")])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "laradmin-form-element" },
        [
          _vm.spinShow
            ? _c(
                "Spin",
                { attrs: { fix: "" } },
                [
                  _c("Icon", {
                    staticClass: "demo-spin-icon-load",
                    attrs: { type: "ios-loading", size: "50" }
                  })
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "Form",
            {
              ref: "roleGroupForm",
              staticStyle: { width: "420px" },
              attrs: {
                model: _vm.roleGroupForm,
                rules: _vm.ruleValidate,
                "label-width": 100
              }
            },
            [
              _c(
                "FormItem",
                { attrs: { label: "分组名称", prop: "title" } },
                [
                  _c("Input", {
                    staticClass: "modal-form-item",
                    attrs: { placeholder: "请输入分组名称" },
                    model: {
                      value: _vm.roleGroupForm.title,
                      callback: function($$v) {
                        _vm.$set(_vm.roleGroupForm, "title", $$v)
                      },
                      expression: "roleGroupForm.title"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "FormItem",
                { attrs: { label: "分组描述", prop: "remarks" } },
                [
                  _c("Input", {
                    staticClass: "modal-form-item",
                    attrs: {
                      type: "textarea",
                      rows: 4,
                      placeholder: "请输入分组描述"
                    },
                    model: {
                      value: _vm.roleGroupForm.remarks,
                      callback: function($$v) {
                        _vm.$set(_vm.roleGroupForm, "remarks", $$v)
                      },
                      expression: "roleGroupForm.remarks"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "FormItem",
                [
                  _c(
                    "Button",
                    {
                      attrs: { type: "primary", loading: _vm.loading },
                      on: { click: _vm.handleInfoSave }
                    },
                    [_vm._v("保存")]
                  ),
                  _vm._v(" "),
                  _c(
                    "Button",
                    {
                      staticStyle: { "margin-left": "8px" },
                      on: { click: _vm.handleInfoCancel }
                    },
                    [_vm._v("重置")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6f9f1380", module.exports)
  }
}

/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_tree__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_api_role_js__ = __webpack_require__(33);
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
    name: 'permission',
    components: {
        AuthTree: __WEBPACK_IMPORTED_MODULE_0__auth_tree__["default"]
    },
    data: function data() {
        return {
            spinShow: false,
            loading: false,
            roleId: '',
            roleGroupAuthList: []
        };
    },

    computed: {
        roleAuth: function roleAuth() {
            return this.$store.getters.getRoleAuth;
        }
    },
    watch: {
        roleAuth: function roleAuth(curVal, oldVal) {
            this.spinShow = false;
            this.roleGroupAuthList = curVal;
        }
    },
    methods: {
        /** 
         * Cancel assigning role group permissions.
         */
        handleCancel: function handleCancel() {
            this.backMainPage();
        },

        /** 
         * Save role group permission information.
         */
        handleSave: function handleSave() {
            var that = this;
            that.loading = true;
            __WEBPACK_IMPORTED_MODULE_1__js_api_role_js__["a" /* default */].postRoleAuth({ id: this.roleId, authority: this.roleGroupAuthList }).then(function (response) {
                that.loading = false;
                if (response.data.code) {
                    that.$Message.error(response.data.msg);
                } else {
                    that.$Message.success(response.data.msg);
                    that.backMainPage();
                }
            }).catch(function () {
                that.$Message.info('系统繁忙，请稍后再试!');
                that.loading = false;
            });
        },

        /**
         * Back module main page.
         */
        backMainPage: function backMainPage() {
            this.$router.push({
                name: 'role'
            });
        }
    },
    created: function created() {
        var params = this.$route.params;
        var query = this.$route.query;
        if ('id' in params) {
            this.spinShow = true;
            this.roleId = params.id;
            this.$store.dispatch('loadRoleAuth', { id: params.id });
        } else if ('id' in query) {
            this.spinShow = true;
            this.roleId = params.id;
            this.$store.dispatch('loadRoleAuth', { id: query.id });
        } else {
            this.backMainPage();
        }
    },
    mounted: function mounted() {}
});

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "laradmin-main laradmin-form" },
    [
      _c(
        "Breadcrumb",
        { attrs: { separator: ">" } },
        [
          _c("BreadcrumbItem", { attrs: { to: { name: "role" } } }, [
            _vm._v("角色配置")
          ]),
          _vm._v(" "),
          _c("BreadcrumbItem", [_vm._v("权限分配")])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "laradmin-form-element" },
        [
          _vm.spinShow
            ? _c(
                "Spin",
                { attrs: { fix: "" } },
                [
                  _c("Icon", {
                    staticClass: "demo-spin-icon-load",
                    attrs: { type: "ios-loading", size: "50" }
                  })
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c("auth-tree", {
            model: {
              value: _vm.roleGroupAuthList,
              callback: function($$v) {
                _vm.roleGroupAuthList = $$v
              },
              expression: "roleGroupAuthList"
            }
          }),
          _vm._v(" "),
          _c(
            "Button",
            {
              staticStyle: { "margin-left": "8px" },
              on: { click: _vm.handleCancel }
            },
            [_vm._v("取消")]
          ),
          _vm._v(" "),
          _c(
            "Button",
            {
              attrs: { type: "primary", loading: _vm.loading },
              on: { click: _vm.handleSave }
            },
            [_vm._v("保存")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6c0d3be0", module.exports)
  }
}

/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_api_role_js__ = __webpack_require__(33);
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
    data: function data() {
        var _this = this;

        return {
            roleId: '',
            loading: false,
            spinShow: false,
            isMemberModal: false,
            adminInfo: {},
            memberList: [],
            allotMemberList: [],
            transferTitle: ['未分配成员', '已分配成员'],
            tableColumns: [{
                type: 'index',
                title: '编号',
                width: 60,
                align: 'center'
            }, {
                title: '分组名称',
                key: 'title',
                minWidth: 120
            }, {
                title: '分组描述',
                key: 'remarks',
                minWidth: 120
            }, {
                title: '用户列表',
                minWidth: 320,
                render: function render(h, params) {
                    var rows = [];
                    var admins = params.row.belongs_to_many_admin;
                    if (admins.length) {
                        $.each(admins, function (key, val) {
                            rows.push(h('Tag', {
                                props: {
                                    color: 'cyan'
                                }
                            }, val.name));
                        });
                    }
                    return h('div', {
                        style: {
                            textAlign: 'left'
                        }
                    }, rows);
                }
            }, {
                title: '操作',
                key: 'action',
                width: 215,
                align: 'center',
                render: function render(h, params) {
                    return h('div', [h('Button', {
                        props: {
                            type: 'info',
                            size: 'small',
                            icon: 'md-lock',
                            disabled: (!_this.hasPermit('allotAuth') || params.row.id == 1) && _this.adminInfo.id != 1 ? true : false
                        },
                        on: {
                            click: function click() {
                                _this.$router.push({
                                    name: 'permission',
                                    params: {
                                        id: params.row.id
                                    }
                                });
                            }
                        },
                        attrs: {
                            title: '权限分配'
                        }
                    }), h('Button', {
                        props: {
                            type: 'success',
                            size: 'small',
                            icon: 'md-person-add',
                            disabled: (!_this.hasPermit('allotMember') || params.row.id == 1) && _this.adminInfo.id != 1 ? true : false
                        },
                        attrs: {
                            title: '成员分配'
                        },
                        on: {
                            click: function click() {
                                _this.handleAllotMembers(params.row.id);
                            }
                        }
                    }), h('Button', {
                        props: {
                            type: 'primary',
                            size: 'small',
                            icon: 'ios-create-outline',
                            disabled: !_this.hasPermit('editRole') || params.row.id == 1 ? true : false
                        },
                        attrs: {
                            title: '编辑分组'
                        },
                        on: {
                            click: function click() {
                                _this.$router.push({
                                    name: 'createRole',
                                    params: {
                                        id: params.row.id
                                    }
                                });
                            }
                        }
                    }), h('Poptip', {
                        props: {
                            trigger: 'click',
                            title: '您确认删除这条记录吗？',
                            placement: 'top-end',
                            confirm: true,
                            okText: '确定',
                            cancelText: '取消',
                            wordWrap: true
                        },
                        on: {
                            'on-ok': function onOk() {
                                _this.deleteRole(params.index, params.row.id);
                            }
                        }
                    }, [h('Button', {
                        props: {
                            type: 'error',
                            size: 'small',
                            icon: 'md-trash',
                            disabled: !_this.hasPermit('delRole') || params.row.id == 1 ? true : false
                        },
                        attrs: {
                            title: '删除分组'
                        }
                    })])]);
                }
            }]
        };
    },

    computed: {
        roleList: function roleList() {
            this.loading = false;
            return this.$store.getters.getRoleList.data;
        }
    },
    watch: {},
    methods: {
        /** 
         * Delete user group information.
         */
        deleteRole: function deleteRole(index, id) {
            var that = this;
            __WEBPACK_IMPORTED_MODULE_0__js_api_role_js__["a" /* default */].delRoleInfo({ id: id }).then(function (response) {
                if (response.data.code) {
                    that.$Message.error(response.data.msg);
                } else {
                    that.$Message.success(response.data.msg);
                    that.roleList.splice(index, 1);
                }
            }).catch(function () {
                that.$Message.info('系统繁忙，请稍后再试！');
            });
        },

        /** 
         * Allot member to role.
         */
        handleAllotMembers: function handleAllotMembers(id) {
            var that = this;
            that.roleId = id;
            that.isMemberModal = true;
            that.spinShow = true;
            __WEBPACK_IMPORTED_MODULE_0__js_api_role_js__["a" /* default */].findRoleByMember({ id: id }).then(function (response) {
                if (response.data.code) {
                    that.isMemberModal = false;
                    that.$Message.error(response.data.msg);
                } else {
                    that.memberList = response.data.adminList;
                    that.allotMemberList = response.data.roleMembers;
                }
                that.spinShow = false;
            }).catch(function (error) {
                that.$Message.info('系统繁忙，请稍后再试！');
                that.isMemberModal = false;
                that.spinShow = false;
            });
        },

        /** 
         * Allocation member.
         */
        handleAllotMemberChange: function handleAllotMemberChange(newTargetKeys) {
            this.allotMemberList = newTargetKeys;
        },

        /** 
         * Cancel member assignment operation.
         */
        handleMemberCancel: function handleMemberCancel() {
            this.isMemberModal = false;
        },

        /** 
         * Save member assignment information.
         */
        handleMemberSave: function handleMemberSave() {
            var that = this;
            that.loading = true;
            __WEBPACK_IMPORTED_MODULE_0__js_api_role_js__["a" /* default */].postAllotMember({ id: that.roleId, member: that.allotMemberList }).then(function (response) {
                if (response.data.code) {
                    that.$Message.error(response.data.msg);
                } else {
                    that.$Message.success(response.data.msg);
                    that.isMemberModal = false;
                    that.$store.dispatch('loadRoleList');
                }
                that.loading = false;
            }).catch(function (error) {
                that.$Message.info('系统繁忙，请稍后再试！');
                that.loading = false;
            });
        },

        /** 
         * Allocate role group permissions.
         */
        handleRoleGroupAuth: function handleRoleGroupAuth(id) {
            var that = this;
            that.isAuthModal = true;
            that.spinShow = true;
            __WEBPACK_IMPORTED_MODULE_0__js_api_role_js__["a" /* default */].getRoleAuth({ id: id }).then(function (response) {
                if (response.data.code) {
                    that.$Message.error(response.data.msg);
                    that.isAuthModal = false;
                } else {
                    that.roleGroupAuthList = response.data.authTree;
                }
                that.spinShow = false;
            }).catch(function () {
                that.$Message.info('系统繁忙，请稍后再试!');
                that.isAuthModal = false;
                that.spinShow = false;
            });
        }
    },
    created: function created() {
        if (this.roleList == undefined) {
            this.loading = true;
        }
    },
    mounted: function mounted() {
        // Initialize table data.
        this.$store.dispatch('loadRoleList');
        this.adminInfo = this.$store.state.admin.adminInfo;
    }
});

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "laradmin-main" },
    [
      _c("Breadcrumb", [_c("BreadcrumbItem", [_vm._v("角色配置")])], 1),
      _vm._v(" "),
      _c("div", { staticClass: "content-header" }, [
        _c(
          "div",
          { staticClass: "header-action" },
          [
            _c(
              "Button",
              {
                directives: [
                  {
                    name: "has-permit",
                    rawName: "v-has-permit:createRole",
                    arg: "createRole"
                  }
                ],
                attrs: {
                  type: "success",
                  icon: "md-add",
                  shape: "circle",
                  to: { name: "createRole" }
                }
              },
              [_vm._v("新增角色分组")]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticStyle: { "margin-bottom": "20px" } },
        [
          _c("Table", {
            ref: "table",
            attrs: {
              columns: _vm.tableColumns,
              data: _vm.roleList,
              border: false,
              loading: _vm.loading
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "Modal",
        {
          attrs: { title: "成员分配" },
          model: {
            value: _vm.isMemberModal,
            callback: function($$v) {
              _vm.isMemberModal = $$v
            },
            expression: "isMemberModal"
          }
        },
        [
          _vm.spinShow
            ? _c(
                "Spin",
                { attrs: { fix: "" } },
                [
                  _c("Icon", {
                    staticClass: "demo-spin-icon-load",
                    attrs: { type: "ios-loading", size: "50" }
                  })
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c("Transfer", {
            attrs: {
              data: _vm.memberList,
              targetKeys: _vm.allotMemberList,
              titles: _vm.transferTitle,
              "list-style": { width: "210px" },
              filterable: "",
              "filter-placeholder": "请输入成员名称"
            },
            on: { "on-change": _vm.handleAllotMemberChange }
          }),
          _vm._v(" "),
          _c(
            "div",
            { attrs: { slot: "footer" }, slot: "footer" },
            [
              _c(
                "Button",
                {
                  attrs: { type: "text", size: "large" },
                  on: { click: _vm.handleMemberCancel }
                },
                [_vm._v("取消")]
              ),
              _vm._v(" "),
              _c(
                "Button",
                {
                  attrs: {
                    type: "primary",
                    size: "large",
                    loading: _vm.loading
                  },
                  on: { click: _vm.handleMemberSave }
                },
                [_vm._v("保存")]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-61d1e100", module.exports)
  }
}

/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
    data: function data() {
        var _this = this;

        return {
            searchDateTime: '',
            formSearchData: {
                keyword: '',
                typeid: '',
                datetime: ''
            },
            columns4: [{
                type: 'index',
                width: 60,
                align: 'center'
            }, {
                title: '头像',
                align: 'center',
                render: function render(h, params) {
                    return h('Avatar', {
                        props: {
                            shape: 'square',
                            size: 'large',
                            src: params.row.avatar,
                            icon: 'ios-person'
                        }
                    });
                }
            }, {
                title: '昵称',
                key: 'nickname'
            }, {
                title: 'Email',
                key: 'email'
            }, {
                title: '状态',
                width: 100,
                align: 'center',
                render: function render(h, params) {
                    return h('i-switch', {
                        props: {
                            value: params.row.status,
                            size: 'large',
                            trueValue: 1,
                            falseValue: 0
                        },
                        on: {
                            'on-change': function onChange(value) {
                                console.log(value);
                                //开关状态更改事件
                                console.log(params);
                            }
                        }
                    }, [h('span', {
                        slot: 'open'
                    }, '开启'), h('span', {
                        slot: 'close'
                    }, '关闭')]);
                }
            }, {
                title: '注册时间',
                key: 'created_at'
            }, {
                title: '操作',
                key: 'action',
                fixed: 'right',
                width: 180,
                align: 'center',
                render: function render(h, params) {
                    return h('div', [h('Button', {
                        props: {
                            type: 'info',
                            size: 'small',
                            icon: 'md-eye'
                        },
                        attrs: {
                            title: '预览'
                        },
                        on: {
                            click: function click() {
                                console.log(params.row);
                                _this.selectedSecond("/form");
                            }
                        }
                    }), h('Button', {
                        props: {
                            type: 'info',
                            size: 'small',
                            icon: 'ios-create-outline'
                        },
                        attrs: {
                            title: '编辑'
                        }
                    }), h('Button', {
                        props: {
                            type: 'error',
                            size: 'small',
                            icon: 'md-trash'
                        },
                        attrs: {
                            title: '删除'
                        }
                    })]);
                }
            }],
            data1: [{
                nickname: 'John Brown',
                email: '123@163.com',
                status: 1,
                created_at: '2016-10-03'
            }, {
                nickname: 'Jim Green',
                email: '10001@qq.com',
                status: 1,
                created_at: '2016-10-01'
            }, {
                nickname: 'Joe Black',
                email: '12345@qq.com',
                status: 0,
                created_at: '2016-10-02'
            }, {
                nickname: 'Jon Snow',
                email: '12345@163.com',
                status: 1,
                created_at: '2016-10-04'
            }],
            cityList: [{
                value: 'New York',
                label: 'New York'
            }, {
                value: 'London',
                label: 'London'
            }, {
                value: 'Sydney',
                label: 'Sydney'
            }, {
                value: 'Ottawa',
                label: 'Ottawa'
            }, {
                value: 'Paris',
                label: 'Paris'
            }, {
                value: 'Canberra',
                label: 'Canberra'
            }],
            model1: '',
            options2: {
                shortcuts: [{
                    text: '最近一周',
                    value: function value() {
                        var end = new Date();
                        var start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                        return [start, end];
                    }
                }, {
                    text: '最近一个月',
                    value: function value() {
                        var end = new Date();
                        var start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                        return [start, end];
                    }
                }, {
                    text: '最近三个月',
                    value: function value() {
                        var end = new Date();
                        var start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                        return [start, end];
                    }
                }]
            }
        };
    },

    methods: {
        handleSubmit: function handleSubmit(name) {
            console.log(this.formSearchData);
        },
        handleSelectAll: function handleSelectAll(name) {
            this.$refs.selection.selectAll(status);
        },
        handleReset: function handleReset(name) {
            this.$refs[name].resetFields();
            //重置时清除时间组件数据
            this.searchDateTime = '';
        },

        selectedSecond: function selectedSecond(index) {

            this.$router.push({ path: index });
        },
        changeDateTime: function changeDateTime(datetime) {
            this.$set(this.formSearchData, 'datetime', datetime.join(','));
        }
    }
});

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "laradmin-main" },
    [
      _c("Breadcrumb", [_c("BreadcrumbItem", [_vm._v("成员信息")])], 1),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "content-header" },
        [
          _c(
            "Form",
            {
              ref: "formSearchData",
              attrs: { model: _vm.formSearchData, inline: "" }
            },
            [
              _c(
                "FormItem",
                {
                  attrs: { prop: "keyword", label: "关键字", "label-width": 60 }
                },
                [
                  _c("Input", {
                    staticClass: "header-form-search",
                    attrs: {
                      type: "text",
                      clearable: "",
                      placeholder: "请输入"
                    },
                    model: {
                      value: _vm.formSearchData.keyword,
                      callback: function($$v) {
                        _vm.$set(_vm.formSearchData, "keyword", $$v)
                      },
                      expression: "formSearchData.keyword"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "FormItem",
                {
                  attrs: {
                    prop: "typeid",
                    label: "文章分类",
                    "label-width": 60
                  }
                },
                [
                  _c(
                    "Select",
                    {
                      staticClass: "header-form-search",
                      attrs: { clearable: "" },
                      model: {
                        value: _vm.formSearchData.typeid,
                        callback: function($$v) {
                          _vm.$set(_vm.formSearchData, "typeid", $$v)
                        },
                        expression: "formSearchData.typeid"
                      }
                    },
                    _vm._l(_vm.cityList, function(item) {
                      return _c(
                        "Option",
                        { key: item.value, attrs: { value: item.value } },
                        [_vm._v(_vm._s(item.label))]
                      )
                    }),
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "FormItem",
                {
                  attrs: {
                    prop: "datetime",
                    label: "注册时间",
                    "label-width": 60
                  }
                },
                [
                  _c("DatePicker", {
                    staticClass: "header-form-search",
                    attrs: {
                      type: "daterange",
                      format: "yyyy-MM-dd",
                      options: _vm.options2,
                      placement: "bottom-end",
                      placeholder: "请选择日期"
                    },
                    on: { "on-change": _vm.changeDateTime },
                    model: {
                      value: _vm.searchDateTime,
                      callback: function($$v) {
                        _vm.searchDateTime = $$v
                      },
                      expression: "searchDateTime"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "FormItem",
                [
                  _c(
                    "Button",
                    {
                      attrs: { type: "primary", icon: "ios-search" },
                      on: {
                        click: function($event) {
                          _vm.handleSubmit("formSearchData")
                        }
                      }
                    },
                    [_vm._v("搜索")]
                  ),
                  _vm._v(" "),
                  _c(
                    "Button",
                    {
                      attrs: { type: "default" },
                      on: {
                        click: function($event) {
                          _vm.handleReset("formSearchData")
                        }
                      }
                    },
                    [_vm._v("重置")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticStyle: { "margin-bottom": "20px" } },
        [
          _c("Table", {
            ref: "selection",
            attrs: { columns: _vm.columns4, data: _vm.data1 }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        [
          _c("Page", {
            attrs: {
              total: 100,
              "show-elevator": "",
              "show-total": "",
              "show-sizer": ""
            }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0ee24ca0", module.exports)
  }
}

/***/ })
]);