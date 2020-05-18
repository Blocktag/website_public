webpackHotUpdate("cms",{

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

module.exports = {
  siteTitle: 'Blocktag - Provably Authentic',
  // Site title.
  siteTitleAlt: 'Blocktag',
  // Alternative site title for SEO.
  siteLogo: '/icons/icon-512x512.png',
  // Logo used for SEO and manifest.
  siteUrl: 'https://www.blocktag.com',
  // Domain of your website without pathPrefix.
  pathPrefix: '/website',
  // Prefixes all links. For cases when deployed to example.github.io/gatsby-starter-business/.
  siteDescription: 'The last mile in authenticity.',
  // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml',
  siteFBAppID: '',
  // FB Application ID for using app insights
  googleTagManagerID: '',
  // GTM tracking ID.
  userName: '',
  userTwitter: '',
  userLocation: '',
  userDescription: '',
  telegram: 'blocktag',
  email: 'hello@blocktag.com',
  phone: '',
  address: '13636 Ventura Blvd, \n\
	#610\n\
	Sherman Oaks, CA 91423',
  mapPlaceId: 'Ei8xMzYzNiBWZW50dXJhIEJsdmQsIFNoZXJtYW4gT2FrcywgQ0EgOTE0MjMsIFVTQSIxEi8KFAoSCQuqAd8olsKAEUKnmmBV67GREMRqKhQKEgn1hOJxjZfCgBFTutXK8wd_sw',
  copyright: '© 2020 Blocktag Inc. All rights reserved.',
  // Copyright string for the footer of the website and RSS feed.
  themeColor: '#00d1b2',
  // Used for setting manifest and progress theme colors.
  backgroundColor: '#ffffff',
  // Used for setting manifest background color.
  googleCloudApiKey: 'AIzaSyCp2dwYakrG5CuN5HX3ShYxL5HkuVm7lVM'
};

/***/ }),

/***/ "./node_modules/gatsby/node_modules/core-js/modules/_string-html.js":
false,

/***/ "./node_modules/gatsby/node_modules/core-js/modules/es6.string.link.js":
false,

/***/ "./src/components/Carousel/index.js":
/*!******************************************!*\
  !*** ./src/components/Carousel/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Carousel; });
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "/Users/allie/src/blocktag/website/src/components/Carousel/index.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



var Carousel = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Carousel, _Component);

  function Carousel(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      activeEl: null
    };
    _this.onMouseEnter = _this.onMouseEnter.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this));
    _this.onMouseLeave = _this.onMouseLeave.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this));
    return _this;
  }

  var _proto = Carousel.prototype;

  _proto.onMouseEnter = function onMouseEnter(i) {
    var _this2 = this;

    return function (event) {
      _this2.setState({
        activeEl: i
      });
    };
  };

  _proto.onMouseLeave = function onMouseLeave(event) {
    this.setState({
      activeEl: null
    });
  };

  _proto.render = function render() {
    var _this3 = this;

    var activeEl = this.state.activeEl;
    var data = this.props.data;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "flex flex-wrap items-end py-12 mt-32",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }
    }, this.props.data.map(function (c, i) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        key: "carousel_" + i,
        className: (activeEl !== null ? 'hover:opacity-100 opacity-50' : 'first:opacity-50 last:opacity-50') + ' w-1/5 text-center transition ease-out duration-700 transform hover:scale-125',
        onMouseEnter: _this3.onMouseEnter(i),
        onMouseLeave: _this3.onMouseLeave,
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
        className: "inline",
        style: {
          maxWidth: '100px',
          maxHeight: '300px'
        },
        src: c.img,
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 15
        }
      }));
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "justify-center w-full my-24 text-sm text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "max-w-lg mx-auto",
      style: {
        height: '4rem'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 11
      }
    }, activeEl !== null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: data[activeEl].description
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }
    }, this.props.defaultDescription))));
  };

  // @ts-ignore
  _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return Carousel;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

Carousel.defaultProps = {
  defaultDescription: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __self: Carousel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, "Blocktag tags are available in multiple form factors, materials, and security levels. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    __self: Carousel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 95
    }
  }), "Custom configurations welcome.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "block italic text-gray-500",
    __self: Carousel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, "< hover on tags for info >")),
  data: []
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

/***/ }),

/***/ "./src/components/HomePageTemplate/index.js":
/*!**************************************************!*\
  !*** ./src/components/HomePageTemplate/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/gatsby/node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config */ "./config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _forms_ContactForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../forms/ContactForm */ "./src/components/forms/ContactForm/index.js");
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Carousel */ "./src/components/Carousel/index.js");
/* harmony import */ var _Showcase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Showcase */ "./src/components/Showcase/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");


var _this = undefined,
    _jsxFileName = "/Users/allie/src/blocktag/website/src/components/HomePageTemplate/index.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// NOTE: check TODO's when additional content, demos, etc are ready.










_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_9__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faLink"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faFileInvoiceDollar"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faShieldAlt"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faChartLine"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faCheckCircle"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faArrowCircleRight"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faChevronLeft"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faChevronRight"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faBackward"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faMobileAlt"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faHammer"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faWifi"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faKey"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faWallet"]);

var HomePageTemplate = function HomePageTemplate(_ref) {
  var heading = _ref.heading,
      description = _ref.description,
      meta_title = _ref.meta_title,
      meta_description = _ref.meta_description,
      usecases = _ref.usecases,
      carousel = _ref.carousel,
      datafeed = _ref.datafeed,
      consumerfeatures = _ref.consumerfeatures,
      consumerfeaturesimg = _ref.consumerfeaturesimg,
      enterprisefeatures = _ref.enterprisefeatures,
      features = _ref.features,
      cta = _ref.cta;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, meta_title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "description",
    content: meta_description,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex flex-col font-sans bg-indigo-800 bg-top bg-no-repeat bg-cover",
    style: {
      backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,0) 30%, rgba(0,0,0,1) 90%), url(\"/img/earth.jpg\")",
      marginTop: '-80px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container px-8 mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
    className: "flex flex-wrap items-center pt-48 my-12 text-center text-white lg:px-24",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "w-full whitespace-pre-line md:w-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "text-4xl font-light tracking-tight lg:text-6xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, heading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "my-4 text-base font-light text-gray-500",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    className: "w-full my-24",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex flex-wrap items-center py-2 border-teal-500 sm:border-b-2 sm:border-b sm:mx-24 sm:flex-no-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    className: "w-full px-2 py-1 my-1 mr-3 text-gray-200 bg-transparent border-b border-b-2 border-teal-500 appearance-none sm:my-0 sm:leading-tight sm:border-none focus:outline-none",
    type: "text",
    placeholder: "Full Name",
    "aria-label": "Full name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    className: "w-full px-2 py-1 my-1 mr-3 text-gray-200 bg-transparent border-b border-b-2 border-teal-500 appearance-none sm:my-0 sm:leading-tight sm:border-none focus:outline-none",
    type: "text",
    placeholder: "Email Address",
    "aria-label": "Email Address",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "flex-grow px-8 py-1 my-4 text-sm text-white bg-teal-500 border-4 border-teal-500 rounded sm:my-0 hover:bg-teal-700 hover:border-teal-700",
    type: "button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, "Inquire"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
    className: "border-gray-700",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex flex-wrap items-center pb-12 my-4 overflow-hidden text-center text-gray-500",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, usecases.map(function (u) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: "feature_" + u.heading,
      className: "w-full py-4 whitespace-pre-line sm:w-1/2 lg:w-1/4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
      icon: u.icon,
      className: "mb-4 text-4xl text-teal-500",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 15
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "pb-2 text-lg text-gray-100 font-base",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 15
      }
    }, u.heading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      className: "text-base font-light",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 15
      }
    }, u.description));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "products",
    className: "flex flex-col bg-white",
    style: {
      backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,1) 50%, #f2f2f2 100%), url(\"/img/earth.jpg\")"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container px-8 mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Carousel__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: carousel,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex flex-col bg-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container px-8 mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex flex-wrap items-center my-12 overflow-hidden text-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "w-full text-3xl text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }, "Data Feed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Showcase__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: datafeed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex flex-col bg-blue-900",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container px-8 mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex flex-wrap items-center pt-12 mt-12 overflow-hidden text-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "w-full mb-16 text-3xl font-light text-center text-gray-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 11
    }
  }, "Consumer Simplicity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "w-full sm:w-1/3 sm:order-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "mx-auto",
    src: consumerfeaturesimg,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "w-full px-12 text-center text-gray-100 sm:pb-8 lg:pl-24 sm:pl-0 md:pr-12 sm:pr-4 sm:text-right sm:w-1/3 sm:order-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 11
    }
  }, consumerfeatures.slice(0, consumerfeatures.length / 2).map(function (f, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: "consumer_" + i,
      className: "h-32 my-8 sm:h-40",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
      icon: f.icon,
      className: "mb-4 text-3xl text-teal-500",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      className: "text-base font-base",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 17
      }
    }, f.heading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "text-sm",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 17
      }
    }, f.description));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "w-full px-12 pb-8 text-center text-gray-100 lg:pr-24 sm:pr-0 md:pl-12 sm:pl-4 sm:text-left sm:w-1/3 sm:order-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 11
    }
  }, consumerfeatures.slice(consumerfeatures.length / 2, consumerfeatures.length).map(function (f, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: "consumer_" + (3 + i),
      className: "h-32 my-8 sm:h-40",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
      icon: f.icon,
      className: "mb-4 text-3xl text-teal-500",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      className: "text-base font-base",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 17
      }
    }, f.heading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "text-sm",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 17
      }
    }, f.description));
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex flex-col bg-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container px-8 mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex flex-wrap items-center pt-16 pb-4 overflow-hidden text-left md:py-12 md:my-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "w-full mb-16 text-3xl font-light text-center text-gray-800",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 11
    }
  }, "Enterprise Efficiency"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "w-full pb-12 md:w-1/2 md:pb-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "max-w-sm mx-auto md:max-w-full md:mx-0",
    src: "/img/laptop.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "w-full px-6 sm:px-20 md:pr-0 md:w-1/2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 13
    }
  }, enterprisefeatures.map(function (f, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: "enterprise_" + i,
      className: "mb-12",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      className: "text-lg font-medium leading-loose",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 19
      }
    }, f.heading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "text-base font-light",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 19
      }
    }, f.description));
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex flex-col bg-gray-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container px-8 mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex flex-wrap items-start py-12 my-12 overflow-hidden text-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "w-full mb-12 text-3xl font-light text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 11
    }
  }, "Features"), features.map(function (f, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: "feature_" + i,
      className: "flex w-full p-4 text-gray-800 md:w-1/2 lg:w-1/4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faCheckCircle"],
      className: "flex-shrink mx-4 text-3xl text-teal-500",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 15
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "flex-grow",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      className: "text-base font-base",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 17
      }
    }, f.heading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "text-sm font-light",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 17
      }
    }, f.description)));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex flex-col text-white bg-blue-900",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container px-8 mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "w-full my-6 mt-24 text-4xl font-light text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 9
    }
  }, "Get in Touch"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "w-full my-6 text-xl font-light text-center whitespace-pre-line",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "mailto:" + _config__WEBPACK_IMPORTED_MODULE_4___default.a.email,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 11
    }
  }, _config__WEBPACK_IMPORTED_MODULE_4___default.a.email), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "tel:+" + _config__WEBPACK_IMPORTED_MODULE_4___default.a.phone.replace(/\D/g, ''),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 11
    }
  }, _config__WEBPACK_IMPORTED_MODULE_4___default.a.phone)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex flex-wrap items-stretch py-12 my-12 overflow-hidden text-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex flex-1 w-full md:px-8 sm:w-1/2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("iframe", {
    className: "w-full h-full border-none",
    frameBorder: "0",
    src: "https://www.google.com/maps/embed/v1/place?q=place_id:" + _config__WEBPACK_IMPORTED_MODULE_4___default.a.mapPlaceId + "&key=" + _config__WEBPACK_IMPORTED_MODULE_4___default.a.googleCloudApiKey,
    allowFullScreen: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "w-full px-8 sm:w-1/2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_forms_ContactForm__WEBPACK_IMPORTED_MODULE_5__["ContactForm"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 13
    }
  }))))));
};

HomePageTemplate.propTypes = {
  meta_title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  meta_description: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  heading: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  description: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  usecases: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array,
  features: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array,
  carousel: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array,
  datafeed: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array,
  consumerfeatures: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array,
  consumerfeaturesimg: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  enterprisefeatures: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array,
  cta: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array
};
var _default = HomePageTemplate;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(HomePageTemplate, "HomePageTemplate", "/Users/allie/src/blocktag/website/src/components/HomePageTemplate/index.js");
  reactHotLoader.register(_default, "default", "/Users/allie/src/blocktag/website/src/components/HomePageTemplate/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Showcase/index.js":
/*!******************************************!*\
  !*** ./src/components/Showcase/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Showcase; });
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");


var _jsxFileName = "/Users/allie/src/blocktag/website/src/components/Showcase/index.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};





var Showcase = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Showcase, _Component);

  function Showcase(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      activeEl: 0
    };
    _this.onLeft = _this.onLeft.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this));
    _this.onRight = _this.onRight.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this));
    return _this;
  }

  var _proto = Showcase.prototype;

  _proto.onLeft = function onLeft() {
    this.setState({
      activeEl: Math.max(0, this.state.activeEl - 1)
    });
  };

  _proto.onRight = function onRight() {
    this.setState({
      activeEl: Math.min(this.props.data.length - 1, this.state.activeEl + 1)
    });
  };

  _proto.render = function render() {
    var _this2 = this;

    var activeEl = this.state.activeEl;
    var data = this.props.data;
    var item = this.props.data[activeEl];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "flex items-center w-full md:w-1/2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronLeft"],
      className: (activeEl === 0 ? 'text-gray-400' : 'text-teal-500 hover:text-teal-600') + ' text-2xl lg:text-3xl m-4 lg:m-16 flex-shrink transition ease-out duration-500',
      onClick: this.onLeft,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "relative flex-grow",
      style: {
        paddingBottom: '100%'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      className: "absolute object-scale-down w-full h-full",
      src: item.img,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
      className: (activeEl === data.length - 1 ? 'text-gray-400' : 'text-teal-500 hover:text-teal-600') + ' text-2xl lg:text-3xl m-4 lg:m-16 flex-shrink transition ease-out duration-500',
      onClick: this.onRight,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 11
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "w-full p-4 lg:p-12 md:w-1/2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
      className: "mb-4 text-2xl",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 11
      }
    }, item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
      className: "mb-4 overflow-y-scroll font-light whitespace-pre-wrap",
      style: {
        height: '20rem'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 11
      }
    }, item.info.map(function (li, i) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
        key: "info_" + i,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 15
        }
      }, li);
    }), item.origin ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 28
      }
    }) : '', item.origin, item.certs ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 27
      }
    }) : '', item.certs)));
  };

  // @ts-ignore
  _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return Showcase;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

Showcase.defaultProps = {
  defaultDescription: 'asdfasdf default description',
  data: []
};

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Showcase, "Showcase", "/Users/allie/src/blocktag/website/src/components/Showcase/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.ef214478254787efe3f7.hot-update.js.map