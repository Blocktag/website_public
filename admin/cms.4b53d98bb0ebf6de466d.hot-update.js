webpackHotUpdate("cms",{

/***/ "./src/components/Carousel/index.js":
/*!******************************************!*\
  !*** ./src/components/Carousel/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Carousel; });
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/gatsby/node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "/Users/allie/src/blocktag/website/src/components/Carousel/index.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



var Carousel = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(Carousel, _Component);

  function Carousel(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {};
    _this.onHover = _this.onHover.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this));
    return _this;
  }

  var _proto = Carousel.prototype;

  _proto.onHover = function onHover(event) {
    var _this$setState;

    var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;
    this.setState((_this$setState = {}, _this$setState[name] = value, _this$setState));
  };

  _proto.render = function render() {
    var _this2 = this;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "flex flex-wrap py-12 mt-32 items-center  first:opacity-50 last:opacity-50",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }
    }, this.props.data.map(function (c) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
        className: "w-1/5 transform -rotate-90",
        style: {
          maxHeight: "100px",
          width: "auto"
        },
        src: _this2.props.data[0].img,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }
      });
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "w-full my-24 text-center justify-center text-sm",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
      className: "max-w-md mx-auto",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }
    }, "Stuff about each tag as you hover over diff tags. upon hover, show overlay with features")));
  };

  // @ts-ignore
  _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return Carousel;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);


Carousel.defaultProps = {
  inputPlaceholder1: "Sign up for the upcoming beta!",
  inputPlaceholder2: "Sign up for the beta!",
  className: "w-full sm:max-w-sm flex items-center pb-2",
  inputClass1: "hidden sm:block rounded-none w-full px-4 py-2 mr-0 appearance-none bg-indigo-100 focus:outline-none focus:bg-white border-indigo-500 text-gray-900 border-2 box-border border-indigo-100 placeholder-gray-600 text-sm",
  inputClass2: "sm:hidden rounded-none w-full px-4 py-2 mr-0 appearance-none bg-indigo-100 focus:outline-none focus:bg-white border-indigo-500 text-gray-900 border-2 box-border border-indigo-100 placeholder-gray-600 text-sm",
  buttonClass: "transition duration-150 ease-in-out rounded-none p-2 px-8 appearance-none bg-indigo-500 text-white border-2 box-border border-indigo-500 hover:bg-indigo-400 text-sm font-bold focus:outline-none focus:bg-indigo-700",
  errorClass: "w-full sm:max-w-sm flex items-center text-xs whitespace-pre-line"
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Carousel, "Carousel", "/Users/allie/src/blocktag/website/src/components/Carousel/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.4b53d98bb0ebf6de466d.hot-update.js.map