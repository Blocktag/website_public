webpackHotUpdate("cms",{

/***/ "./src/components/forms/ContactForm/index.js":
/*!***************************************************!*\
  !*** ./src/components/forms/ContactForm/index.js ***!
  \***************************************************/
/*! exports provided: ContactForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactForm", function() { return ContactForm; });
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/gatsby/node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/gatsby/node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/gatsby/node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/gatsby/node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/gatsby/node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.object.keys */ "./node_modules/gatsby/node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _validationSchema__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./validationSchema */ "./src/components/forms/ContactForm/validationSchema.js");







var _this = undefined,
    _jsxFileName = "/Users/allie/src/blocktag/website/src/components/forms/ContactForm/index.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};






var encode = function encode(data) {
  return Object.keys(data).map(function (key) {
    return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
  }).join('&');
};

var ContactForm = function ContactForm() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_7__["Formik"], {
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validationSchema: _validationSchema__WEBPACK_IMPORTED_MODULE_9__["default"],
    onSubmit: function onSubmit(values, _ref) {
      var setSubmitting = _ref.setSubmitting;
      fetch("/?no-cache=1", {
        //eslint-disable-line
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: encode(Object.assign({
          'form-name': 'contact'
        }, values))
      }).then(function () {
        Object(gatsby_link__WEBPACK_IMPORTED_MODULE_8__["navigate"])('/contact/success');
        setSubmitting(false);
      }).catch(function (error) {
        console.log(error);
        alert("Error: Please Try Again!"); //eslint-disable-line

        setSubmitting(false);
      });
    },
    render: function render(_ref2) {
      var errors = _ref2.errors,
          touched = _ref2.touched,
          isSubmitting = _ref2.isSubmitting,
          handleSubmit = _ref2.handleSubmit,
          handleReset = _ref2.handleReset;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        name: "contact",
        onSubmit: handleSubmit,
        onReset: handleReset,
        "data-netlify": "true",
        "data-netlify-honeypot": "bot-field",
        className: "w-full max-w-md",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "flex items-center border-b border-b-1 border-gray-400 py-2",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_7__["Field"], {
        className: "appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none",
        type: "text",
        placeholder: "Full Name",
        name: "name",
        id: "name",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 13
        }
      }), touched.name && errors.name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("small", {
        className: "text-red-600",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 45
        }
      }, errors.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "flex items-center border-b border-b-1 border-gray-400 py-2",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_7__["Field"], {
        className: "appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none",
        type: "email",
        placeholder: "Email",
        name: "email",
        id: "email",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 13
        }
      }), touched.email && errors.email && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("small", {
        className: "text-red-600",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 47
        }
      }, errors.email)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "flex items-center border-b border-b-1 border-gray-400 py-2",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_7__["Field"], {
        className: "appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none",
        component: "textarea",
        placeholder: "Message",
        name: "message",
        id: "message",
        rows: "6",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 13
        }
      }), touched.message && errors.message && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("small", {
        className: "text-red-600",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 51
        }
      }, errors.message)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "mx-2 my-4 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded",
        type: "submit",
        disabled: isSubmitting,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }
      }, "Submit"));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  });
};


;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(encode, "encode", "/Users/allie/src/blocktag/website/src/components/forms/ContactForm/index.js");
  reactHotLoader.register(ContactForm, "ContactForm", "/Users/allie/src/blocktag/website/src/components/forms/ContactForm/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.324890ef027e5b0f9fe4.hot-update.js.map