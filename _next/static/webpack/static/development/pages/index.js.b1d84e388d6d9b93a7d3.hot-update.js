webpackHotUpdate("static/development/pages/index.js",{

/***/ "./styles/animations.jsx":
/*!*******************************!*\
  !*** ./styles/animations.jsx ***!
  \*******************************/
/*! exports provided: UpDown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpDown", function() { return UpDown; });
/* harmony import */ var tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tailwind.macro/utils.umd.js */ "./node_modules/tailwind.macro/utils.umd.js");
/* harmony import */ var tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tailwind_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../tailwind.config.js */ "./tailwind.config.js");
/* harmony import */ var _tailwind_config_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tailwind_config_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");



var _tailwindConfig = tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveConfig(_tailwind_config_js__WEBPACK_IMPORTED_MODULE_1___default.a);



var upDown = function upDown(drop) {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(["from{transform:translateY(-", "px);}to{transform:translateY(", "px);}"], drop, drop);
};

var upDownAnimation = function upDownAnimation(delay, duration, drop) {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["animation:", " ", "s ease-in-out ", "ms infinite alternate;"], upDown(drop), duration, delay);
};

var UpDown = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
  displayName: "animations__UpDown",
  componentId: "sc-1s9yqh-0"
})(["", " ", ";"], function (props) {
  return props.drop ? upDownAnimation(props.delay || 10, props.duration || 6, 12) : upDownAnimation(props.delay || 10, props.duration || 6, 4);
}, {
  "top": _tailwindConfig.theme.inset["0"],
  "right": _tailwindConfig.theme.inset["0"],
  "bottom": _tailwindConfig.theme.inset["0"],
  "left": _tailwindConfig.theme.inset["0"],
  "display": "inline-block"
});

/***/ })

})
//# sourceMappingURL=index.js.b1d84e388d6d9b93a7d3.hot-update.js.map