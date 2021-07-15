webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/CartCount.js":
/*!*********************************!*\
  !*** ./components/CartCount.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CartCount; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");

var _jsxFileName = "C:\\Users\\Michael\\Documents\\reactJS\\stax-of-stories-2\\stax2\\frontend\\components\\CartCount.js";



var AnimationStyles = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
  displayName: "CartCount__AnimationStyles",
  componentId: "xxvp4g-0"
})(["position:relative;.count{display:block;position:absolute;transition:all 0.4s;backface-visibility:hidden;}.count-enter{transform:scale(4) rotateX(0.5turn);}.count-enter-active{transform:rotateX(0);}.count-exit{top:0;position:absolute;transform:rotateX(0);}.count-exit-active{transform:scale(4) rotateX(0.5turn);}"]);
_c = AnimationStyles;
var Dot = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "CartCount__Dot",
  componentId: "xxvp4g-1"
})(["background:", ";color:white;border-radius:20%;padding:0.2rem;line-height:1rem;min-width:auto;min-height:auto;margin-left:1rem;margin-top:-2.7rem;font-weight:100;font-feature-settings:'tnum';font-variant-numeric:tabular-nums;float:right;"], function (props) {
  return props.theme.orange;
});
_c2 = Dot;
function CartCount(_ref) {
  var count = _ref.count;

  /*#__PURE__*/
  Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AnimationStyles, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_transition_group__WEBPACK_IMPORTED_MODULE_3__["TransitionGroup"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_transition_group__WEBPACK_IMPORTED_MODULE_3__["CSSTransition"], {
        unmountOnExit: true,
        className: "count",
        classNames: "count",
        timeout: {
          enter: 400,
          exit: 400
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Dot, {
          children: count
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 5
        }, this)
      }, count, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 4
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 3
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }, this);
}
_c3 = CartCount;

var _c, _c2, _c3;

$RefreshReg$(_c, "AnimationStyles");
$RefreshReg$(_c2, "Dot");
$RefreshReg$(_c3, "CartCount");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJ0Q291bnQuanMiXSwibmFtZXMiOlsiQW5pbWF0aW9uU3R5bGVzIiwic3R5bGVkIiwic3BhbiIsIkRvdCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJvcmFuZ2UiLCJDYXJ0Q291bnQiLCJjb3VudCIsImVudGVyIiwiZXhpdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxlQUFlLEdBQUdDLHlEQUFNLENBQUNDLElBQVY7QUFBQTtBQUFBO0FBQUEsK1RBQXJCO0tBQU1GLGU7QUF5Qk4sSUFBTUcsR0FBRyxHQUFHRix5REFBTSxDQUFDRyxHQUFWO0FBQUE7QUFBQTtBQUFBLHFQQUNNLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBaEI7QUFBQSxDQURYLENBQVQ7TUFBTUosRztBQWlCUyxTQUFTSyxTQUFULE9BQThCO0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTOztBQUN6QztBQUFBLHVFQUFDLGVBQUQ7QUFBQSwyQkFDRixxRUFBQyxzRUFBRDtBQUFBLDZCQUNDLHFFQUFDLG9FQUFEO0FBQ0MscUJBQWEsTUFEZDtBQUVDLGlCQUFTLEVBQUMsT0FGWDtBQUdDLGtCQUFVLEVBQUMsT0FIWjtBQUtDLGVBQU8sRUFBRTtBQUFFQyxlQUFLLEVBQUUsR0FBVDtBQUFjQyxjQUFJLEVBQUU7QUFBcEIsU0FMVjtBQUFBLCtCQU9DLHFFQUFDLEdBQUQ7QUFBQSxvQkFBTUY7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEQsU0FJTUEsS0FKTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFhSDtNQWR1QkQsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjhjNTRmMjFkMTlmYWMyZGVkMGRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgVHJhbnNpdGlvbkdyb3VwLCBDU1NUcmFuc2l0aW9uIH0gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCc7XHJcblxyXG5jb25zdCBBbmltYXRpb25TdHlsZXMgPSBzdHlsZWQuc3BhbmBcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0LmNvdW50e1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0cmFuc2l0aW9uOiBhbGwgMC40cztcclxuXHRcdGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsgXHJcblx0fVxyXG5cdC8qIEluaXRpYWwgU3RhdGUgb2YgdGhlIGVudGVyZWQgRG90ICovXHJcblx0LmNvdW50LWVudGVyIHtcclxuXHRcdHRyYW5zZm9ybTogc2NhbGUoNCkgcm90YXRlWCgwLjV0dXJuKTtcclxuXHR9XHJcblx0LmNvdW50LWVudGVyLWFjdGl2ZSB7XHJcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZVgoMCk7XHJcblx0fVxyXG5cdC5jb3VudC1leGl0IHtcclxuXHRcdHRvcDogMDtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRyYW5zZm9ybTogcm90YXRlWCgwKTtcclxuXHR9XHJcblx0LmNvdW50LWV4aXQtYWN0aXZlIHtcclxuXHRcdHRyYW5zZm9ybTogc2NhbGUoNCkgcm90YXRlWCgwLjV0dXJuKTtcclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBEb3QgPSBzdHlsZWQuZGl2YFxyXG5cdGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUub3JhbmdlfTtcclxuXHRjb2xvcjogd2hpdGU7XHJcblx0Ym9yZGVyLXJhZGl1czogMjAlO1xyXG5cdHBhZGRpbmc6IDAuMnJlbTtcclxuXHRsaW5lLWhlaWdodDogMXJlbTtcclxuXHRtaW4td2lkdGg6IGF1dG87XHJcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAtMi43cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogJ3RudW0nO1xyXG4gICAgZm9udC12YXJpYW50LW51bWVyaWM6IHRhYnVsYXItbnVtcztcclxuICAgIGZsb2F0OiByaWdodDtcclxuYDtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJ0Q291bnQoeyBjb3VudCB9KSB7XHJcbiAgICA8QW5pbWF0aW9uU3R5bGVzPlxyXG5cdFx0PFRyYW5zaXRpb25Hcm91cD5cclxuXHRcdFx0PENTU1RyYW5zaXRpb24gXHJcblx0XHRcdFx0dW5tb3VudE9uRXhpdFxyXG5cdFx0XHRcdGNsYXNzTmFtZT1cImNvdW50XCIgXHJcblx0XHRcdFx0Y2xhc3NOYW1lcz1cImNvdW50XCIgXHJcblx0XHRcdFx0a2V5PXtjb3VudH0gXHJcblx0XHRcdFx0dGltZW91dD17eyBlbnRlcjogNDAwLCBleGl0OiA0MDAgfX1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxEb3Q+e2NvdW50fTwvRG90PlxyXG5cdFx0XHQ8L0NTU1RyYW5zaXRpb24+XHJcblx0XHQ8L1RyYW5zaXRpb25Hcm91cD5cclxuXHQ8L0FuaW1hdGlvblN0eWxlcz5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=