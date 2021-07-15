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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AnimationStyles, {
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
          lineNumber: 58,
          columnNumber: 21
        }, this)
      }, count, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 9
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJ0Q291bnQuanMiXSwibmFtZXMiOlsiQW5pbWF0aW9uU3R5bGVzIiwic3R5bGVkIiwic3BhbiIsIkRvdCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJvcmFuZ2UiLCJDYXJ0Q291bnQiLCJjb3VudCIsImVudGVyIiwiZXhpdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxlQUFlLEdBQUdDLHlEQUFNLENBQUNDLElBQVY7QUFBQTtBQUFBO0FBQUEsK1RBQXJCO0tBQU1GLGU7QUF5Qk4sSUFBTUcsR0FBRyxHQUFHRix5REFBTSxDQUFDRyxHQUFWO0FBQUE7QUFBQTtBQUFBLHFQQUNNLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBaEI7QUFBQSxDQURYLENBQVQ7TUFBTUosRztBQWlCUyxTQUFTSyxTQUFULE9BQThCO0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTO0FBQ3pDLHNCQUNJLHFFQUFDLGVBQUQ7QUFBQSwyQkFDSSxxRUFBQyxzRUFBRDtBQUFBLDZCQUNJLHFFQUFDLG9FQUFEO0FBQ0kscUJBQWEsTUFEakI7QUFFSSxpQkFBUyxFQUFDLE9BRmQ7QUFHSSxrQkFBVSxFQUFDLE9BSGY7QUFLSSxlQUFPLEVBQUU7QUFBRUMsZUFBSyxFQUFFLEdBQVQ7QUFBY0MsY0FBSSxFQUFFO0FBQXBCLFNBTGI7QUFBQSwrQkFPSSxxRUFBQyxHQUFEO0FBQUEsb0JBQU1GO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBKLFNBSVNBLEtBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFlSDtNQWhCdUJELFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC44YmZhNTE4YjY5ZTA3YzlhMjliNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IFRyYW5zaXRpb25Hcm91cCwgQ1NTVHJhbnNpdGlvbiB9IGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnO1xyXG5cclxuY29uc3QgQW5pbWF0aW9uU3R5bGVzID0gc3R5bGVkLnNwYW5gXHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdC5jb3VudHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcblx0XHRiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IFxyXG5cdH1cclxuXHQvKiBJbml0aWFsIFN0YXRlIG9mIHRoZSBlbnRlcmVkIERvdCAqL1xyXG5cdC5jb3VudC1lbnRlciB7XHJcblx0XHR0cmFuc2Zvcm06IHNjYWxlKDQpIHJvdGF0ZVgoMC41dHVybik7XHJcblx0fVxyXG5cdC5jb3VudC1lbnRlci1hY3RpdmUge1xyXG5cdFx0dHJhbnNmb3JtOiByb3RhdGVYKDApO1xyXG5cdH1cclxuXHQuY291bnQtZXhpdCB7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZVgoMCk7XHJcblx0fVxyXG5cdC5jb3VudC1leGl0LWFjdGl2ZSB7XHJcblx0XHR0cmFuc2Zvcm06IHNjYWxlKDQpIHJvdGF0ZVgoMC41dHVybik7XHJcblx0fVxyXG5gO1xyXG5cclxuY29uc3QgRG90ID0gc3R5bGVkLmRpdmBcclxuXHRiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm9yYW5nZX07XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdGJvcmRlci1yYWRpdXM6IDIwJTtcclxuXHRwYWRkaW5nOiAwLjJyZW07XHJcblx0bGluZS1oZWlnaHQ6IDFyZW07XHJcblx0bWluLXdpZHRoOiBhdXRvO1xyXG4gICAgbWluLWhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgbWFyZ2luLXRvcDogLTIuN3JlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6ICd0bnVtJztcclxuICAgIGZvbnQtdmFyaWFudC1udW1lcmljOiB0YWJ1bGFyLW51bXM7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbmA7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FydENvdW50KHsgY291bnQgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QW5pbWF0aW9uU3R5bGVzPlxyXG4gICAgICAgICAgICA8VHJhbnNpdGlvbkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPENTU1RyYW5zaXRpb24gXHJcbiAgICAgICAgICAgICAgICAgICAgdW5tb3VudE9uRXhpdFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvdW50XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lcz1cImNvdW50XCIgXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtjb3VudH0gXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dD17eyBlbnRlcjogNDAwLCBleGl0OiA0MDAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8RG90Pntjb3VudH08L0RvdD5cclxuICAgICAgICAgICAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cclxuICAgICAgICAgICAgPC9UcmFuc2l0aW9uR3JvdXA+XHJcbiAgICAgICAgPC9BbmltYXRpb25TdHlsZXM+XHJcbiAgICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==