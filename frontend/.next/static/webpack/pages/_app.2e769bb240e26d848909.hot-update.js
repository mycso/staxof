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

;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJ0Q291bnQuanMiXSwibmFtZXMiOlsiQW5pbWF0aW9uU3R5bGVzIiwic3R5bGVkIiwic3BhbiIsIkRvdCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJvcmFuZ2UiLCJDYXJ0Q291bnQiLCJjb3VudCIsImVudGVyIiwiZXhpdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUMxQjtBQUNBO0FBRUEsSUFBTUEsZUFBZSxHQUFHQyx5REFBTSxDQUFDQyxJQUFWO0FBQUE7QUFBQTtBQUFBLCtUQUFyQjtLQUFNRixlO0FBeUJOLElBQU1HLEdBQUcsR0FBR0YseURBQU0sQ0FBQ0csR0FBVjtBQUFBO0FBQUE7QUFBQSxxUEFDTSxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQWhCO0FBQUEsQ0FEWCxDQUFUO01BQU1KLEc7QUFpQlMsU0FBU0ssU0FBVCxPQUE4QjtBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUzs7QUFDekM7QUFBQSx1RUFBQyxlQUFEO0FBQUEsMkJBQ0YscUVBQUMsc0VBQUQ7QUFBQSw2QkFDQyxxRUFBQyxvRUFBRDtBQUNDLHFCQUFhLE1BRGQ7QUFFQyxpQkFBUyxFQUFDLE9BRlg7QUFHQyxrQkFBVSxFQUFDLE9BSFo7QUFLQyxlQUFPLEVBQUU7QUFBRUMsZUFBSyxFQUFFLEdBQVQ7QUFBY0MsY0FBSSxFQUFFO0FBQXBCLFNBTFY7QUFBQSwrQkFPQyxxRUFBQyxHQUFEO0FBQUEsb0JBQU1GO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBELFNBSU1BLEtBSk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYUg7TUFkdUJELFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4yZTc2OWJiMjQwZTI2ZDg0ODkwOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0Jzs7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBUcmFuc2l0aW9uR3JvdXAsIENTU1RyYW5zaXRpb24gfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJztcclxuXHJcbmNvbnN0IEFuaW1hdGlvblN0eWxlcyA9IHN0eWxlZC5zcGFuYFxyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHQuY291bnR7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG5cdFx0YmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOyBcclxuXHR9XHJcblx0LyogSW5pdGlhbCBTdGF0ZSBvZiB0aGUgZW50ZXJlZCBEb3QgKi9cclxuXHQuY291bnQtZW50ZXIge1xyXG5cdFx0dHJhbnNmb3JtOiBzY2FsZSg0KSByb3RhdGVYKDAuNXR1cm4pO1xyXG5cdH1cclxuXHQuY291bnQtZW50ZXItYWN0aXZlIHtcclxuXHRcdHRyYW5zZm9ybTogcm90YXRlWCgwKTtcclxuXHR9XHJcblx0LmNvdW50LWV4aXQge1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dHJhbnNmb3JtOiByb3RhdGVYKDApO1xyXG5cdH1cclxuXHQuY291bnQtZXhpdC1hY3RpdmUge1xyXG5cdFx0dHJhbnNmb3JtOiBzY2FsZSg0KSByb3RhdGVYKDAuNXR1cm4pO1xyXG5cdH1cclxuYDtcclxuXHJcbmNvbnN0IERvdCA9IHN0eWxlZC5kaXZgXHJcblx0YmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5vcmFuZ2V9O1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxuXHRib3JkZXItcmFkaXVzOiAyMCU7XHJcblx0cGFkZGluZzogMC4ycmVtO1xyXG5cdGxpbmUtaGVpZ2h0OiAxcmVtO1xyXG5cdG1pbi13aWR0aDogYXV0bztcclxuICAgIG1pbi1oZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgIG1hcmdpbi10b3A6IC0yLjdyZW07XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiAndG51bSc7XHJcbiAgICBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG5gO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcnRDb3VudCh7IGNvdW50IH0pIHtcclxuICAgIDxBbmltYXRpb25TdHlsZXM+XHJcblx0XHQ8VHJhbnNpdGlvbkdyb3VwPlxyXG5cdFx0XHQ8Q1NTVHJhbnNpdGlvbiBcclxuXHRcdFx0XHR1bm1vdW50T25FeGl0XHJcblx0XHRcdFx0Y2xhc3NOYW1lPVwiY291bnRcIiBcclxuXHRcdFx0XHRjbGFzc05hbWVzPVwiY291bnRcIiBcclxuXHRcdFx0XHRrZXk9e2NvdW50fSBcclxuXHRcdFx0XHR0aW1lb3V0PXt7IGVudGVyOiA0MDAsIGV4aXQ6IDQwMCB9fVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PERvdD57Y291bnR9PC9Eb3Q+XHJcblx0XHRcdDwvQ1NTVHJhbnNpdGlvbj5cclxuXHRcdDwvVHJhbnNpdGlvbkdyb3VwPlxyXG5cdDwvQW5pbWF0aW9uU3R5bGVzPlxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==