module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Cart.js":
/*!****************************!*\
  !*** ./components/Cart.js ***!
  \****************************/
/*! exports provided: default, LOCAL_STATE_QUERY, TOGGLE_CART_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCAL_STATE_QUERY", function() { return LOCAL_STATE_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_CART_MUTATION", function() { return TOGGLE_CART_MUTATION; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_adopt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-adopt */ "react-adopt");
/* harmony import */ var react_adopt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_adopt__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_CartStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/CartStyles */ "./components/styles/CartStyles.js");
/* harmony import */ var _styles_CartTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/CartTitle */ "./components/styles/CartTitle.js");
/* harmony import */ var _styles_CloseButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/CloseButton */ "./components/styles/CloseButton.js");
/* harmony import */ var _CartItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CartItem */ "./components/CartItem.js");
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _lib_calcTotalPrice__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lib/calcTotalPrice */ "./lib/calcTotalPrice.js");
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _TakeMyMoney__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./TakeMyMoney */ "./components/TakeMyMoney.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\Michael\\Documents\\reactJS\\stax-of-stories\\stax-shop\\Advanced-React\\stax\\frontend\\components\\Cart.js";

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tmutation {\n\t\ttoggleCart @client\n\t}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tquery {\n\t\tcartOpen @client\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

 // import { useQuery, useApolloClient, useState } from '@apollo/react-hooks';












 // import calcTotalDeliveryPrice from '../lib/calcTotalDeliveryPrice';






var LOCAL_STATE_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());
var TOGGLE_CART_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject2());
/* eslint-disable */

/* eslint-disable */

var Composed = Object(react_adopt__WEBPACK_IMPORTED_MODULE_4__["adopt"])({
  user: function user(_ref) {
    var render = _ref.render;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 24
      }
    }, render);
  },
  toggleCart: function toggleCart(_ref2) {
    var render = _ref2.render;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
      mutation: TOGGLE_CART_MUTATION,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 30
      }
    }, render);
  },
  localState: function localState(_ref3) {
    var render = _ref3.render;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
      query: LOCAL_STATE_QUERY,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 30
      }
    }, render);
  }
});
/* eslint-enable */
// const international = 1100;
// const royalmail = 500;

var Cart = function Cart(_ref4) {
  var cartItem = _ref4.cartItem;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Composed, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 2
    }
  }, function (_ref5) {
    var user = _ref5.user,
        toggleCart = _ref5.toggleCart,
        localState = _ref5.localState;
    var me = user.data.me;
    if (!me) return null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_CartStyles__WEBPACK_IMPORTED_MODULE_7__["default"], {
      open: localState.data.cartOpen,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 6
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_CloseButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
      onClick: toggleCart,
      title: "close",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__["faTimes"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 55
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_CartTitle__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 7
      }
    }, me.email, "'s Cart"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 7
      }
    }, "You have ", me.cart.length, " Item", me.cart.length === 1 ? '' : 's', " in your cart")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 6
      }
    }, me.cart.map(function (cartItem) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CartItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
        key: cartItem.id,
        cartItem: cartItem,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 8
        }
      });
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 6
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 8
      }
    }, "Total: ", Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_lib_calcTotalPrice__WEBPACK_IMPORTED_MODULE_12__["default"])(me.cart)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 7
      }
    }, me.cart.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TakeMyMoney__WEBPACK_IMPORTED_MODULE_16__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      id: "buyIt",
      className: "btn btn-success checkout",
      type: "submit",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 10
      }
    }, "Checkout ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__["faChevronRight"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 89
      }
    }))))));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Cart);


/***/ }),

/***/ "./components/CartCount.js":
/*!*********************************!*\
  !*** ./components/CartCount.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-transition-group */ "react-transition-group");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Michael\\Documents\\reactJS\\stax-of-stories\\stax-shop\\Advanced-React\\stax\\frontend\\components\\CartCount.js";





var AnimationStyles = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span.withConfig({
  displayName: "CartCount__AnimationStyles",
  componentId: "dj6wya-0"
})(["position:relative;.count{display:block;position:absolute;transition:all 0.4s;backface-visibility:hidden;}.count-enter{transform:scale(4) rotateX(0.5turn);}.count-enter-active{transform:rotateX(0);}.count-exit{top:0;position:absolute;transform:rotateX(0);}.count-exit-active{transform:scale(4) rotateX(0.5turn);}"]);
var Dot = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "CartCount__Dot",
  componentId: "dj6wya-1"
})(["background:", ";color:white;border-radius:20%;padding:0.2rem;line-height:1rem;min-width:auto;min-height:auto;margin-left:1rem;margin-top:-2.7rem;font-weight:100;font-feature-settings:'tnum';font-variant-numeric:tabular-nums;float:right;"], function (props) {
  return props.theme.orange;
});

var CartCount = function CartCount(_ref) {
  var count = _ref.count;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AnimationStyles, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_3__["TransitionGroup"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_3__["CSSTransition"], {
    unmountOnExit: true,
    className: "count",
    classNames: "count",
    key: count,
    timeout: {
      enter: 400,
      exit: 400
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Dot, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }, count))));
};

/* harmony default export */ __webpack_exports__["default"] = (CartCount);

/***/ }),

/***/ "./components/CartItem.js":
/*!********************************!*\
  !*** ./components/CartItem.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
/* harmony import */ var _styles_PriceTag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/PriceTag */ "./components/styles/PriceTag.js");
/* harmony import */ var _PlusToCart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PlusToCart */ "./components/PlusToCart.js");
/* harmony import */ var _MinusFromCart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MinusFromCart */ "./components/MinusFromCart.js");
/* harmony import */ var _RemoveFromCart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RemoveFromCart */ "./components/RemoveFromCart.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Michael\\Documents\\reactJS\\stax-of-stories\\stax-shop\\Advanced-React\\stax\\frontend\\components\\CartItem.js";









var CartItemStyles = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li.withConfig({
  displayName: "CartItem__CartItemStyles",
  componentId: "sc-1o9zb9g-0"
})(["padding:1rem 0;border-bottom:0.5px solid ", ";display:grid;align-items:center;grid-template-columns:auto 1fr auto;img{margin-right:10px;}h3,p{margin:0;}@media (max-width:1214px){grid-template-columns:1fr;}"], function (props) {
  return props.theme.grey;
});

var CartItem = function CartItem(_ref) {
  var cartItem = _ref.cartItem;
  // First Check if that item exists
  if (!cartItem.item) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CartItemStyles, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 4
    }
  }, "This item is currently out of stock"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RemoveFromCart__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: cartItem.id,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 4
    }
  }));

  if (cartItem.item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CartItemStyles, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 4
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      width: "100",
      src: cartItem.item.image,
      alt: cartItem.item.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 5
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "cart-item-details",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 6
      }
    }, cartItem.item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 6
      }
    }, Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_3__["default"])(cartItem.quantity * cartItem.item.price), ' - ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 7
      }
    }, cartItem.quantity, "\xD7 ", Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_3__["default"])(cartItem.item.price), " each"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PlusToCart__WEBPACK_IMPORTED_MODULE_5__["default"], {
      id: cartItem.item.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 6
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_PriceTag__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 6
      }
    }, cartItem.quantity), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MinusFromCart__WEBPACK_IMPORTED_MODULE_6__["default"], {
      prefetch: true,
      id: cartItem.item.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 6
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RemoveFromCart__WEBPACK_IMPORTED_MODULE_7__["default"], {
      prefetch: true,
      id: cartItem.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 6
      }
    })));
  }
};

CartItem.propTypes = {
  cartItem: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CartItem);

/***/ }),

/***/ "./components/ErrorMessage.js":
/*!************************************!*\
  !*** ./components/ErrorMessage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Michael\\Documents\\reactJS\\stax-of-stories\\stax-shop\\Advanced-React\\stax\\frontend\\components\\ErrorMessage.js";




var ErrorStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ErrorMessage__ErrorStyles",
  componentId: "sc-8gkyxc-0"
})(["padding:2rem;background:", ";margin:2rem 0;border:1px solid rgba(0,0,0,0.05);border-left:5px solid ", ";p{margin:0;font-weight:100;}strong{margin-right:0.5rem;}"], function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.orange;
});

var DisplayError = function DisplayError(_ref) {
  var error = _ref.error;
  if (!error || !error.message) return null;

  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map(function (error, i) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorStyles, {
        key: i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        "data-test": "graphql-error",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }
      }, "Oops!"), error.message.replace('GraphQL error: ', '')));
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorStyles, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    "data-test": "graphql-error",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, "Oops!"), error.message.replace('GraphQL error: ', '')));
};

DisplayError.defaultProps = {
  error: {}
};
DisplayError.propTypes = {
  error: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (DisplayError);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_scroll_to__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scroll-to */ "react-scroll-to");
/* harmony import */ var react_scroll_to__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scroll_to__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "@fortawesome/free-brands-svg-icons");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Michael\\Documents\\reactJS\\stax-of-stories\\stax-shop\\Advanced-React\\stax\\frontend\\components\\Footer.js";







var StyledFooter = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.footer.withConfig({
  displayName: "Footer__StyledFooter",
  componentId: "sc-1ikfh8x-0"
})([".multi-border li:nth-child(1){background:", ";}.multi-border li:nth-child(2){background:", ";}.multi-border li:nth-child(3){background:", ";}.multi-border li:nth-child(4){background:", ";}.multi-border li:nth-child(5){background:", ";}ul.multi-border{list-style:none;width:100%;font-size:0;padding:0;}.multi-border li{display:inline-block;width:20%;height:7px;}#footer{background:", ";}.multi-border-wrapper-footer .multi-border{margin:0;}section{padding:60px 0;}section .section-title{text-align:center;color:#007b5e;margin-bottom:50px;text-transform:uppercase;}#footer h5{padding-left:0px;padding-bottom:6px;margin-bottom:20px;color:#ffffff;}#footer a{color:#ffffff;text-decoration:none !important;background-color:transparent;-webkit-text-decoration-skip:objects;}#footer .svg-inline--fa{font-size:40px;}#footer ul.social li{padding:3px 0;}#footer ul.social li a i{margin-right:5px;font-size:25px;-webkit-transition:.5s all ease;-moz-transition:.5s all ease;transition:.5s all ease;}#footer ul.social li:hover a i{font-size:30px;margin-top:-10px;}#footer ul.social li a,#footer ul.quick-links li a{color:", ";cursor:pointer;}#footer ul.social li a:hover{color:#eeeeee;}#footer ul.quick-links li{padding:3px 0;-webkit-transition:.5s all ease;-moz-transition:.5s all ease;transition:.5s all ease;}#footer ul.quick-links li:hover{padding:3px 0;margin-left:5px;font-weight:700;}#footer ul.quick-links li a i{margin-right:5px;}#footer ul.quick-links li:hover a i{font-weight:700;}@media (max-width:767px){#footer h5{padding-left:0;border-left:transparent;padding-bottom:0px;margin-top:20px;margin-bottom:10px;}.footer-logo{text-align:", ";}}"], function (props) {
  return props.theme.mainBlue;
}, function (props) {
  return props.theme.lightBlue;
}, function (props) {
  return props.theme.turquoise;
}, function (props) {
  return props.theme.yellow;
}, function (props) {
  return props.theme.orange;
}, function (props) {
  return props.theme.grey;
}, function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.footerLogoResponsive;
});

var Footer = function Footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledFooter, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "multi-border-wrapper-footer col-lg-12 px-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "multi-border",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 8
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 8
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 8
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 8
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 8
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    id: "footer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-logo my-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "stax-logo",
    src: "/static/logo-white.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 6
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row text-center text-xs-center text-sm-left text-md-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-12 col-sm-4 col-md-4 site-map-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 7
    }
  }, "Site Information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-unstyled quick-links",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 8
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    activeClassName: "active",
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 10
    }
  }, "Home"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 8
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    activeClassName: "active",
    prefetch: "true",
    href: "/AboutUs",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 10
    }
  }, "About Us"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 8
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    activeClassName: "active",
    prefetch: "true",
    href: "/ContactUs",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 10
    }
  }, "Contact Us"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 8
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    activeClassName: "active",
    prefetch: "true",
    href: "/signin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 10
    }
  }, "Sign in/Join"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-12 col-sm-4 col-md-4 site-map-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 7
    }
  }, "Quick links"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-unstyled quick-links",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 8
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    activeClassName: "active",
    prefetch: "true",
    href: "https://www.instagram.com/staxofstories/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 10
    }
  }, "Insta Feed"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 8
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    activeClassName: "active",
    prefetch: "true",
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 10
    }
  }, "Shop"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-12 col-sm-4 col-md-4 site-map-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 7
    }
  }, "Other"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-unstyled quick-links",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 8
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    activeClassName: "active",
    prefetch: "true",
    href: "/privacyPolicy",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 10
    }
  }, "Privacy/Policy"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 8
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    activeClassName: "active",
    prefetch: "true",
    href: "/termsConditions",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 10
    }
  }, "Terms & Conditions"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 8
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    activeClassName: "active",
    prefetch: "true",
    href: "/shippingReturns",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 10
    }
  }, "Shipping & Returns")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-unstyled list-inline social text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-inline-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 8
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.facebook.com/staxofstories/",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 41
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faFacebook"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 107
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-inline-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 8
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.instagram.com/staxofstories/",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 41
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faInstagram"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 108
    }
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "h6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 7
    }
  }, "All rights Reserved.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 45
    }
  }, " \xA9 Stax Of Stories")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "h6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 25
    }
  }, "Designed & Developed By Michael Sokan")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Nav */ "./components/Nav.js");
/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Cart */ "./components/Cart.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Michael\\Documents\\reactJS\\stax-of-stories\\stax-shop\\Advanced-React\\stax\\frontend\\components\\Header.js";









next_router__WEBPACK_IMPORTED_MODULE_4___default.a.onRouteChangeStart = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.start();
};

next_router__WEBPACK_IMPORTED_MODULE_4___default.a.onRouteChangeComplete = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.done();
};

next_router__WEBPACK_IMPORTED_MODULE_4___default.a.onRouteChangeError = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.done();
};

var Header = function Header() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 3
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Cart__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 3
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Link.js":
/*!****************************!*\
  !*** ./components/Link.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);



var _this = undefined,
    _jsxFileName = "C:\\Users\\Michael\\Documents\\reactJS\\stax-of-stories\\stax-shop\\Advanced-React\\stax\\frontend\\components\\Link.js";





var ActiveLink = function ActiveLink(_ref) {
  var router = _ref.router,
      children = _ref.children,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["router", "children"]);

  var child = react__WEBPACK_IMPORTED_MODULE_4__["Children"].only(children);
  var className = child.props.className || null;

  if (router.pathname === props.href && props.activeClassName) {
    className = "".concat(className !== null ? className : '', " ").concat(props.activeClassName).trim();
  }

  delete props.activeClassName;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 10
    }
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.cloneElement(child, {
    className: className
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(ActiveLink));

/***/ }),

/***/ "./components/Meta.js":
/*!****************************!*\
  !*** ./components/Meta.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Michael\\Documents\\reactJS\\stax-of-stories\\stax-shop\\Advanced-React\\stax\\frontend\\components\\Meta.js";




var Meta = function Meta() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "utf-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: "Discover diverse books for children of all ages and ignite their passion for reading.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "keywords",
    content: "Stax Of Stories, kids reading books, reading for kids, story ideas for kids, best books for kindergarten, online reading for children, stories for preschoolers, ethnic children books, reading english story, stories for toddlers online, short stories for nursery kids, diverse online books for children, asian children, african children, black children, ethnic children, indian children, kids of all ages, very short stories for kids in english",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "author",
    content: "Stax Productions",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "shortcut icon",
    href: "/static/favicon.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://use.fontawesome.com/releases/v5.8.2/css/svg-with-js.css",
    rel: "stylesheet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Questrial",
    rel: "stylesheet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/static/nprogress.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",
    integrity: "sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo",
    crossorigin: "anonymous",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",
    integrity: "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",
    crossorigin: "anonymous",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js",
    integrity: "sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6",
    crossorigin: "anonymous",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "https://code.jquery.com/jquery-3.4.1.slim.min.js",
    integrity: "sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n",
    crossorigin: "anonymous",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, "Stax Of Stories"));
};

/* harmony default export */ __webpack_exports__["default"] = (Meta);

/***/ }),

/***/ "./components/MinusFromCart.js":
/*!*************************************!*\
  !*** ./components/MinusFromCart.js ***!
  \*************************************/
/*! exports provided: default, MINUS_FROM_CART_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MINUS_FROM_CART_MUTATION", function() { return MINUS_FROM_CART_MUTATION; });
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__);







var _jsxFileName = "C:\\Users\\Michael\\Documents\\reactJS\\stax-of-stories\\stax-shop\\Advanced-React\\stax\\frontend\\components\\MinusFromCart.js";

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n\tmutation minusFromCart($id: ID!) {\n\t\tminusFromCart(id: $id) {\n\t\t\tid\n\t\t\tquantity\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var MINUS_FROM_CART_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_10___default()(_templateObject());
var IconButton = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.button.withConfig({
  displayName: "MinusFromCart__IconButton",
  componentId: "sc-2rhnxm-0"
})(["font-size:1.5rem;background:none;border:0;color:", ";&:hover{color:", ";cursor:pointer;}"], function (props) {
  return props.theme.grey;
}, function (props) {
  return props.theme.red;
});

var MinusFromCart = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MinusFromCart, _React$Component);

  var _super = _createSuper(MinusFromCart);

  function MinusFromCart() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MinusFromCart);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MinusFromCart, [{
    key: "render",
    value: function render() {
      var _this = this;

      var id = this.props.id;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_8__["Mutation"], {
        mutation: MINUS_FROM_CART_MUTATION,
        variables: {
          id: id
        },
        refetchQueries: [{
          query: _User__WEBPACK_IMPORTED_MODULE_11__["CURRENT_USER_QUERY"]
        }],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 4
        }
      }, function (minusFromCart, _ref) {
        var loading = _ref.loading;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 6
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(IconButton, {
          disabled: loading,
          onClick: minusFromCart,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 7
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faMinus"],
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 62
          }
        })));
      });
    }
  }]);

  return MinusFromCart;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (MinusFromCart);


/***/ }),

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Link */ "./components/Link.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Cart */ "./components/Cart.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _Signout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Signout */ "./components/Signout.js");
/* harmony import */ var _CartCount__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CartCount */ "./components/CartCount.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\Michael\\Documents\\reactJS\\stax-of-stories\\stax-shop\\Advanced-React\\stax\\frontend\\components\\Nav.js";




 // import { TOGGLE_CART_GUEST_MUTATION } from './CartGuest'







var StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.header.withConfig({
  displayName: "Nav__StyledHeader",
  componentId: "sc-33q90q-0"
})([".multi-border li:nth-child(1){background:", ";}.multi-border li:nth-child(2){background:", ";}.multi-border li:nth-child(3){background:", ";}.multi-border li:nth-child(4){background:", ";}.multi-border li:nth-child(5){background:", ";}.navy-blue{color:", ";}.blue{color:", ";}.navbar .svg-inline--fa{font-size:", ";}.stax-logo{max-width:", ";}.multi-border-wrapper{top:92px !important;padding:0;}ul.multi-border{list-style:none;width:100%;font-size:0;padding:0;}.multi-border li{display:inline-block;width:20%;height:7px;}button:focus{outline:none !important}.active:after{content:'';}.navbar-light .navbar-nav .nav-link{text-decoration:none;padding:10px !important;display:block;color:", ";}.nav-link.active{color:", " !important;}.nav-link.user.active{color:", " !important;}a{cursor:pointer;}"], function (props) {
  return props.theme.mainBlue;
}, function (props) {
  return props.theme.lightBlue;
}, function (props) {
  return props.theme.turquoise;
}, function (props) {
  return props.theme.yellow;
}, function (props) {
  return props.theme.orange;
}, function (props) {
  return props.theme.navyBlue;
}, function (props) {
  return props.theme.mainBlue;
}, function (props) {
  return props.theme.fontSize;
}, function (props) {
  return props.theme.logoStaxWidth;
}, function (props) {
  return props.theme.navyBlue;
}, function (props) {
  return props.theme.lightBlue;
}, function (props) {
  return props.theme.navyBlue;
});

var Nav = function Nav() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledHeader, {
    "data-test": "nav",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "navbar navbar-expand-lg navbar-light bg-light fixed-top col-lg-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container col-lg-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    prefetch: "true",
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "navbar-brand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "stax-logo",
    src: "/static/logo.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 10
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 5
    }
  }, function (_ref) {
    var data = _ref.data;
    var me = data ? data.me : null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "navbar-toggler collapsed",
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#navbarSupportedContent",
      "aria-controls": "navbarSupportedContent",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 6
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "navbar-toggler-icon",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 10
      }
    }), me && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CartCount__WEBPACK_IMPORTED_MODULE_8__["default"], {
      count: me.cart.reduce(function (tally, cartItem) {
        return tally + cartItem.quantity;
      }, 0),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 10
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "collapse navbar-collapse",
      id: "navbarSupportedContent",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 6
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      className: "navbar-nav ml-auto mt-4 mt-lg-0",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "nav-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
      activeClassName: "active",
      prefetch: "true",
      href: "/items",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 14
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "nav-link",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 16
      }
    }, "Home"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "nav-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
      activeClassName: "active",
      prefetch: "true",
      href: "/AboutUs",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 14
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "nav-link",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 16
      }
    }, "About Us"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "nav-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
      activeClassName: "active",
      prefetch: "true",
      href: "/ContactUs",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 14
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "nav-link",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 16
      }
    }, "Contact Us"))), me && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, me.permissions.includes("ADMIN") && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "nav-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
      activeClassName: "active",
      prefetch: "true",
      href: "/Sell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 16
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "nav-link",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 18
      }
    }, "Sell a Book")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "nav-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 14
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
      activeClassName: "active",
      href: "/orders",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "nav-link",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 17
      }
    }, "Orders"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "nav-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
      activeClassName: "active",
      prefetch: "true",
      href: "/account",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "nav-link",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 17
      }
    }, "My Account"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["Mutation"], {
      mutation: _Cart__WEBPACK_IMPORTED_MODULE_4__["TOGGLE_CART_MUTATION"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 14
      }
    }, function (toggleCart) {
      var _React$createElement;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "nav-item",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 15
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 16
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", (_React$createElement = {
        className: "cart-icon",
        onClick: toggleCart
      }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "className", "nav-link"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "__self", _this), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "__source", {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 18
      }), _React$createElement), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faShoppingCart"],
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 85
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CartCount__WEBPACK_IMPORTED_MODULE_8__["default"], {
        count: me.cart.reduce(function (tally, cartItem) {
          return tally + cartItem.quantity;
        }, 0),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 18
        }
      }))));
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "nav-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 14
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
      activeClassName: "active",
      prefetch: "true",
      href: "/items",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "nav-link",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Signout__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 41
      }
    }))))), !me && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "nav-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 14
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
      activeClassName: "active",
      prefetch: "true",
      href: "/signin",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "nav-link",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 17
      }
    }, "Sign In/Sign Up")))))));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "multi-border-wrapper col-lg-12 px-0 fixed-top",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "multi-border",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 9
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Meta */ "./components/Meta.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_SubHeader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/SubHeader */ "./components/SubHeader.js");







var _jsxFileName = "C:\\Users\\Michael\\Documents\\reactJS\\stax-of-stories\\stax-shop\\Advanced-React\\stax\\frontend\\components\\Page.js";

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n\t@font-face{\n\t\tfont-family: 'Questrial';\n\t\tsrc: url('/static/questrial-v8-latin-regular.woff2')\n\t\tformat('woff2')\n\t\tfont-weight normal;\n\t\tfont-style: normal;\n\t}\n\n\t@font-face {\n\t\tfont-family: 'ScunthorpeSans';\n\t\tsrc: local('ScunthorpeSans'), url('/src/fonts/scunthorpe-sans.woff') format('woff');\n\t}\n\n\thtml {\n\t\tbox-sizing: border-box;\n\t}\n\t*, *:before, *:after {\n\t\tbox-sizing: inherit;\n\t}\n\tbody {\n\t\tpadding: 0;\n\t\tmargin: 95px 0 0 0;\n\t\tline-height: 2;\n\t\tfont-family: 'Questrial';\n\t}\n\n\tbutton {\n    \tborder-radius: ", " !important;\n    \tpadding: 5px;\n    \tborder: 0;\n  \t}\n\n\tbutton:focus {\n    \toutline: 0px;\n\t}\n\n\t.active a.blue {\n\t\ttext-decoration: none;\n    \tcolor: ", ";\n\t}\n\n\t.carousel img {\n    \twidth: 100%;\n    \t@media (max-width: 767px) {\n  \t\t\twidth: ", ";\n  \t\t\tposition: ", ";\n  \t\t\tleft: ", ";\n\t\t}\n\n\t\t@media (max-width: 500px) {\n\t\t    width: 220%;\n\t\t    position: absolute;\n\t\t    left: -61%;\n\t\t}\n\t}\n\n\t.text-content {\n    \twhite-space: pre-wrap;\n\t}\n\n\t.ellipsis {\n    \theight: auto;\n    \ttext-overflow: ellipsis;\n    \twhite-space: nowrap;\n    \twidth: 350px;\n    \toverflow: hidden;\n\t}\n\n\t.carousel-item {\n\t  height: 70vh;\n\t  min-height: 400px;\n\t  background: no-repeat center center scroll;\n\t  -webkit-background-size: ", ";\n\t  -moz-background-size: ", ";\n\t  -o-background-size: ", ";\n\t  background-size: ", ";\n\t  max-height: 800px !important;\n\t}\n\n\t.carousel-item:after {\n\t  content:\"\";\n\t  display:block;\n\t  position:", " !important;\n\t  top:0;\n\t  bottom:0;\n\t  left:0;\n\t  right:0;\n\t  background: rgba(96, 96, 96, 0.61);\n\t  @media (max-width: 767px) {\n  \t\t\twidth: ", " !important;\n  \t\t\tposition: ", " !important;\n  \t\t\tleft: ", " !important;\n\t\t}\n\t}\n\t.carousel-caption {\n\t    position: ", " !important;\n\t    right: 15%;\n\t    bottom: 20px;\n\t    left: 15%;\n\t    z-index: 10;\n\t    padding-top: 2%;\n\t    padding-bottom: 10%;\n\t    color: #fff;\n\t    text-align: center;\n\t}\n\n\t.social-button-main {\n\t    position: ", ";\n\t    z-index: 1000;\n\t    top: 30px;\n\t\tright: 2px;\n\t}\n\n\t.social-button-main .svg-inline--fa {\n\t    font-size: 40px;\n\t    color: #fff;\n\t\t@media (max-width: 767px) {\n  \t\t\tfont-size: 30px;\n\t\t}\n\t}\n\n\t.heading .display-4 {\n\t\t@media (max-width: 767px) {\n  \t\t\tfont-size: 35px;\n\t\t}\n\t}\n\n\t.heading .display-5 {\n\t\t@media (max-width: 767px) {\n  \t\t\tfont-size: 20px;\n\t\t}\n\t}\n\n\t.site-map-title {\n\t\t@media (max-width: 767px) {\n\t\t    border-top: 0.1px solid #fff;\n\t\t    padding-bottom: 0px;\n\t\t    width: 260px;\n\t\t    margin: 0 auto;\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




 // import Carousel from '../components/Carousel';



var theme = {
  navyBlue: '#1b1464',
  mainBlue: '#0071bc',
  lightBlue: '#29abe2',
  turquoise: '#00a99d',
  yellow: '#fcee21',
  orange: '#f15a24',
  lightOrange: '#f7931e',
  lightPink: '#ed1e79',
  pink: '#d4145a',
  lightgrey: '#bcbcbc',
  grey: '#606060',
  green: '#218838',
  white: '#ffffff',
  maxWidth: '1200px',
  fontSize: '20px',
  logoStaxWidth: '160px',
  carouselResponsiveWidth: '170%',
  carouselPosition: 'absolute',
  carouselLeft: '-36%',
  carouselBg: 'cover',
  footerLogoResponsive: 'center',
  roundedCorner: '3.25rem'
};
var StyledPage = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div.withConfig({
  displayName: "Page__StyledPage",
  componentId: "p4avcf-0"
})(["background:", ";color:", ";margin-top:150px;"], function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.grey;
});
Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["injectGlobal"])(_templateObject(), function (props) {
  return props.theme.roundedCorner;
}, theme.mainBlue, function (props) {
  return props.theme.carouselResponsiveWidth;
}, function (props) {
  return props.theme.carouselPosition;
}, function (props) {
  return props.theme.carouselLeft;
}, function (props) {
  return props.theme.carouselBg;
}, function (props) {
  return props.theme.carouselBg;
}, function (props) {
  return props.theme.carouselBg;
}, function (props) {
  return props.theme.carouselBg;
}, function (props) {
  return props.theme.carouselPosition;
}, function (props) {
  return props.theme.carouselResponsiveWidth;
}, function (props) {
  return props.theme.carouselPosition;
}, function (props) {
  return props.theme.carouselLeft;
}, function (props) {
  return props.theme.carouselPosition;
}, function (props) {
  return props.theme.carouselPosition;
});

var Page = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Page, _Component);

  var _super = _createSuper(Page);

  function Page() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Page);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Page, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_8__["ThemeProvider"], {
        theme: theme,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 4
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(StyledPage, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 4
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Meta__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_SubHeader__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 5
        }
      }), this.props.children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 5
        }
      })));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./components/PlusToCart.js":
/*!**********************************!*\
  !*** ./components/PlusToCart.js ***!
  \**********************************/
/*! exports provided: default, PLUS_TO_CART_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLUS_TO_CART_MUTATION", function() { return PLUS_TO_CART_MUTATION; });
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__);







var _jsxFileName = "C:\\Users\\Michael\\Documents\\reactJS\\stax-of-stories\\stax-shop\\Advanced-React\\stax\\frontend\\components\\PlusToCart.js";

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n\tmutation plusToCart($id: ID!) {\n\t\tplusToCart(id: $id) {\n\t\t\tid\n\t\t\tquantity\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var PLUS_TO_CART_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_10___default()(_templateObject());
var IconButton = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.button.withConfig({
  displayName: "PlusToCart__IconButton",
  componentId: "sc-1319hce-0"
})(["font-size:1.5rem;background:none;border:0;color:", ";&:hover{color:", ";cursor:pointer;}"], function (props) {
  return props.theme.grey;
}, function (props) {
  return props.theme.red;
});

var PlusToCart = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PlusToCart, _React$Component);

  var _super = _createSuper(PlusToCart);

  function PlusToCart() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PlusToCart);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(PlusToCart, [{
    key: "render",
    value: function render() {
      var _this = this;

      var id = this.props.id;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_8__["Mutation"], {
        mutation: PLUS_TO_CART_MUTATION,
        variables: {
          id: id
        },
        refetchQueries: [{
          query: _User__WEBPACK_IMPORTED_MODULE_11__["CURRENT_USER_QUERY"]
        }],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 4
        }
      }, function (plusToCart, _ref) {
        var loading = _ref.loading;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 6
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(IconButton, {
          disabled: loading,
          onClick: plusToCart,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 7
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faPlus"],
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 59
          }
        })));
      });
    }
  }]);

  return PlusToCart;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PlusToCart);


/***/ }),

/***/ "./components/RemoveFromCart.js":
/*!**************************************!*\
  !*** ./components/RemoveFromCart.js ***!
  \**************************************/
/*! exports provided: default, REMOVE_FROM_CART_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FROM_CART_MUTATION", function() { return REMOVE_FROM_CART_MUTATION; });
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__);









var _jsxFileName = "C:\\Users\\Michael\\Documents\\reactJS\\stax-of-stories\\stax-shop\\Advanced-React\\stax\\frontend\\components\\RemoveFromCart.js";

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n\tmutation removeFromCart($id: ID!) {\n\t\tremoveFromCart(id: $id) {\n\t\t\tid\n\t\t\tquantity\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var REMOVE_FROM_CART_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_11___default()(_templateObject());
var RemoveButton = styled_components__WEBPACK_IMPORTED_MODULE_12___default.a.button.withConfig({
  displayName: "RemoveFromCart__RemoveButton",
  componentId: "oab7xi-0"
})(["font-size:1.5rem;background:none;border:0;color:", ";&:hover{color:", ";cursor:pointer;}"], function (props) {
  return props.theme.grey;
}, function (props) {
  return props.theme.red;
});

var RemoveFromCart = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(RemoveFromCart, _React$Component);

  var _super = _createSuper(RemoveFromCart);

  function RemoveFromCart() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RemoveFromCart);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "update", function (cache, payload) {
      // 1. first read the cache
      var data = cache.readQuery({
        query: _User__WEBPACK_IMPORTED_MODULE_14__["CURRENT_USER_QUERY"]
      }); // 2. remove that item from the cart

      var cartItemId = payload.data.removeFromCart.id;
      data.me.cart = data.me.cart.filter(function (cartItem) {
        return cartItem.id !== cartItemId;
      }); // 3. write it back to the cache

      cache.writeQuery({
        query: _User__WEBPACK_IMPORTED_MODULE_14__["CURRENT_USER_QUERY"],
        data: data
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(RemoveFromCart, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_10__["Mutation"], {
        mutation: REMOVE_FROM_CART_MUTATION,
        variables: {
          id: this.props.id
        },
        update: this.update,
        optimisticResponse: {
          __typename: 'Mutation',
          removeFromCart: {
            __typename: 'CartItem',
            id: this.props.id
          }
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 7
        }
      }, function (removeFromCart, _ref) {
        var loading = _ref.loading,
            error = _ref.error;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(RemoveButton, {
          disabled: loading,
          onClick: function onClick() {
            removeFromCart()["catch"](function (err) {
              return alert(err.message);
            });
          },
          title: "Delete Item",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 11
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faTimes"],
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 11
          }
        }));
      });
    }
  }]);

  return RemoveFromCart;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(RemoveFromCart, "propTypes", {
  id: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.string.isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (RemoveFromCart);


/***/ }),

/***/ "./components/Signout.js":
/*!*******************************!*\
  !*** ./components/Signout.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./User */ "./components/User.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\Michael\\Documents\\reactJS\\stax-of-stories\\stax-shop\\Advanced-React\\stax\\frontend\\components\\Signout.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tmutation SIGN_OUT_MUTATION {\n\t\tsignout {\n\t\t\tmessage\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var SignoutBtn = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Signout__SignoutBtn",
  componentId: "sc-1r7kt7z-0"
})(["button{width:auto;color:white;background-color:", ";border:0;border-radius:", " !important;font-size:1rem;padding:0.1rem 1.2rem;}"], function (props) {
  return props.theme.orange;
}, function (props) {
  return props.theme.roundedCorner;
});
var SIGN_OUT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

var Signout = function Signout(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SignoutBtn, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_4__["Mutation"], {
    mutation: SIGN_OUT_MUTATION,
    refetchQueries: [{
      query: _User__WEBPACK_IMPORTED_MODULE_5__["CURRENT_USER_QUERY"]
    }],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 3
    }
  }, function (signout, _ref) {
    var loading = _ref.loading;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      onClick: signout,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 5
      }
    }, "Sign", loading && 'ing', " Out");
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Signout);

/***/ }),

/***/ "./components/SubHeader.js":
/*!*********************************!*\
  !*** ./components/SubHeader.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SubInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SubInfo */ "./components/SubInfo.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Michael\\Documents\\reactJS\\stax-of-stories\\stax-shop\\Advanced-React\\stax\\frontend\\components\\SubHeader.js";




var SubHeader = function SubHeader() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SubInfo__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SubHeader);

/***/ }),

/***/ "./components/SubInfo.js":
/*!*******************************!*\
  !*** ./components/SubInfo.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Link */ "./components/Link.js");
/* harmony import */ var _styles_SubHeaderStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/SubHeaderStyles */ "./components/styles/SubHeaderStyles.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Michael\\Documents\\reactJS\\stax-of-stories\\stax-shop\\Advanced-React\\stax\\frontend\\components\\SubInfo.js";








var SubInfo = function SubInfo() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_SubHeaderStyles__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "subheader-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "subheader-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, function (_ref) {
    var me = _ref.data.me;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "navbar-nav ml-auto mt-lg-0",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }
    }, me && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 14
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
      prefetch: "true",
      href: "/account",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 14
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "float-left",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 16
      }
    }, "Hi, ", me.email))))), !me && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 14
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
      activeClassName: "active",
      prefetch: "true",
      href: "/signup",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 14
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/signup",
      className: "float-left",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 16
      }
    }, "Sign in/Sign up for FREE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "float-right",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 16
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTruck"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 46
      }
    }), " FREE UK Delivery"))))));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (SubInfo);

/***/ }),

/***/ "./components/TakeMyMoney.js":
/*!***********************************!*\
  !*** ./components/TakeMyMoney.js ***!
  \***********************************/
/*! exports provided: default, CREATE_ORDER_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_ORDER_MUTATION", function() { return CREATE_ORDER_MUTATION; });
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_stripe_checkout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-stripe-checkout */ "react-stripe-checkout");
/* harmony import */ var react_stripe_checkout__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_stripe_checkout__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @stripe/react-stripe-js */ "@stripe/react-stripe-js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @stripe/stripe-js */ "@stripe/stripe-js");
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _styles_CartStyles__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./styles/CartStyles */ "./components/styles/CartStyles.js");
/* harmony import */ var _lib_calcTotalPrice__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../lib/calcTotalPrice */ "./lib/calcTotalPrice.js");
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./User */ "./components/User.js");











var _jsxFileName = "C:\\Users\\Michael\\Documents\\reactJS\\stax-of-stories\\stax-shop\\Advanced-React\\stax\\frontend\\components\\TakeMyMoney.js";

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_10__["default"])(["\n\tmutation createOrder($token: String!) {\n\t\tcreateOrder(token: $token) {\n\t\t\tid\n\t\t\tcharge\n\t\t\ttotal\n\t\t\titems {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t}\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}















var CREATE_ORDER_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_19___default()(_templateObject()); // function totalItems(cart) {
// 	return cart.reduce((tally, cartItem) => tally + cartItem.quantity * cartItem.item.price + cartItem.item.deliveryCost, 0);
// }

function totalItems(cart) {
  return cart.reduce(function (tally, cartItem) {
    return tally + cartItem.quantity * cartItem.item.price;
  }, 0);
}

var TakeMymoney = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(TakeMymoney, _React$Component);

  var _super = _createSuper(TakeMymoney);

  function TakeMymoney() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, TakeMymoney);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onToken", /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(res, createOrder) {
        var order;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                nprogress__WEBPACK_IMPORTED_MODULE_17___default.a.start(); // manually call the mutation once we have the stripe token

                _context.next = 3;
                return createOrder({
                  variables: {
                    token: res.id
                  }
                })["catch"](function (err) {
                  alert(err.message);
                });

              case 3:
                order = _context.sent;
                console.log(createOrder);
                next_router__WEBPACK_IMPORTED_MODULE_16___default.a.push({
                  pathname: '/order',
                  query: {
                    id: order.data.createOrder.id
                  }
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(TakeMymoney, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_24__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 4
        }
      }, function (_ref2) {
        var me = _ref2.data.me,
            loading = _ref2.loading;
        if (loading) return null;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_15__["Mutation"], {
          mutation: CREATE_ORDER_MUTATION,
          refetchQueries: [{
            query: _User__WEBPACK_IMPORTED_MODULE_24__["CURRENT_USER_QUERY"]
          }],
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 6
          }
        }, function (createOrder) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_stripe_checkout__WEBPACK_IMPORTED_MODULE_12___default.a, {
            amount: Object(_lib_calcTotalPrice__WEBPACK_IMPORTED_MODULE_21__["default"])(me.cart),
            description: "Order of ".concat(Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_22__["default"])(totalItems(me.cart)), " items!"),
            image: me.cart.length && me.cart[0].item && me.cart[0].item.image,
            stripeKey: "pk_live_5LZMQxzqkd7Oz7MOQJCV5fqx00C6nInitL" // stripeKey="pk_test_lJw4vC96fbQWPRUPZ7pTrsd100KKkQ0fKR"
            ,
            shippingAddress: true,
            billingAddress: true,
            shippingMethods: true,
            panelLabel: "Total",
            currency: "GBP",
            name: me.name,
            email: me.email,
            locale: "auto",
            receipt_email: me.email,
            token: function token(res) {
              return _this2.onToken(res, createOrder);
            },
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 7
            }
          }, _this2.props.children);
        });
      });
    }
  }]);

  return TakeMymoney;
}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TakeMymoney);


/***/ }),

/***/ "./components/User.js":
/*!****************************!*\
  !*** ./components/User.js ***!
  \****************************/
/*! exports provided: default, CURRENT_USER_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENT_USER_QUERY", function() { return CURRENT_USER_QUERY; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);



var _this = undefined,
    _jsxFileName = "C:\\Users\\Michael\\Documents\\reactJS\\stax-of-stories\\stax-shop\\Advanced-React\\stax\\frontend\\components\\User.js";



function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\tquery {\n\t\tme {\n\t\t\tid\n\t\t\temail\n\t\t\tname\n\t\t\tpermissions\n\t\t\tcart {\n\t\t\t\tid\n\t\t\t\tquantity\n\t\t\t\titem {\n\t\t\t\t\tid\n\t\t\t\t\tprice\n\t\t\t\t\timage\n\t\t\t\t\ttitle\n\t\t\t\t\tdescription\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var CURRENT_USER_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());

var User = function User(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["Query"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    query: CURRENT_USER_QUERY,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 2
    }
  }), function (payload) {
    return props.children(payload);
  });
};

User.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (User);


/***/ }),

/***/ "./components/styles/CartStyles.js":
/*!*****************************************!*\
  !*** ./components/styles/CartStyles.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var CartStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "CartStyles",
  componentId: "sc-1yh8mfq-0"
})(["padding:20px;position:relative;background:white;position:fixed;height:100%;top:0;right:0;width:40%;min-width:320px;bottom:0;transform:translateX(100%);transition:all 0.3s;box-shadow:0 0 10px 3px rgba(0,0,0,0.2);z-index:2000;display:grid;grid-template-rows:auto 1fr auto;@media (max-width:768px){width:60%;}", ";header{border-bottom:1px solid ", ";margin-bottom:2rem;padding-bottom:2rem;}footer{border-top:1px double ", ";margin-top:2rem;padding-top:2rem;display:flex;justify-content:space-between;align-items:end;font-size:2rem;font-weight:900;@media (max-width:500px){display:block;}p{margin:0;@media (max-width:500px){font-size:32px;}}select{font-size:22px;max-width:214px;}.sub-text{font-size:22px;}@media (max-width:1146px){grid-template-columns:1fr 1fr;width:100%;}}ul{margin:0;padding:0;list-style:none;overflow-y:scroll;@media (max-width:500px){width:100%;overflow-y:scroll;}}button{border-radius:", " !important;padding:10px;border:0;}.checkout{width:100%}"], function (props) {
  return props.open && "transform: translateX(0);";
}, function (props) {
  return props.theme.grey;
}, function (props) {
  return props.theme.grey;
}, function (props) {
  return props.theme.roundedCorner;
});
/* harmony default export */ __webpack_exports__["default"] = (CartStyles);

/***/ }),

/***/ "./components/styles/CartTitle.js":
/*!****************************************!*\
  !*** ./components/styles/CartTitle.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var CartTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h3.withConfig({
  displayName: "CartTitle",
  componentId: "sc-12yod0o-0"
})(["color:", ";display:inline-block;padding:0px 0px;margin:0;font-size:1.5rem;font-weight:bold;@media (max-width:500px){font-size:1.2rem;}"], function (props) {
  return props.theme.grey;
});
/* harmony default export */ __webpack_exports__["default"] = (CartTitle);

/***/ }),

/***/ "./components/styles/CloseButton.js":
/*!******************************************!*\
  !*** ./components/styles/CloseButton.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "CloseButton",
  componentId: "sc-1nv9yyp-0"
})(["background:", ";color:", ";font-size:2rem;border:0;position:absolute;z-index:2;right:0;top:0;"], function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.grey;
});
/* harmony default export */ __webpack_exports__["default"] = (CloseButton);

/***/ }),

/***/ "./components/styles/Form.js":
/*!***********************************!*\
  !*** ./components/styles/Form.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var loading = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{background-position:0 0;}to{background-position:100% 100%;}"]);
var Form = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form.withConfig({
  displayName: "Form",
  componentId: "gqvsr0-0"
})(["box-shadow:0 0 5px 3px rgba(0,0,0,0.05);background:rgba(0,0,0,0.02);border:5px solid white;padding:20px;font-size:1.5rem;line-height:1.5;font-weight:600;max-width:700px;margin:40px auto;label{display:block;margin-bottom:1rem;}input,textarea,select{width:100%;padding:0.5rem;font-size:1rem;border-top:0;border-left:0;border-right:0;border-bottom:1px solid ", ";&:focus{outline:0;border-color:", ";}}button,input[type='submit']{width:auto;color:white;background-color:", ";border:0;border-radius:", " !important;font-size:20px;padding:0.5rem 1.2rem;}a{width:auto;color:white;border:0;font-size:20px;text-decoration:none;font-weight:normal;}.member-link{color:", ";}fieldset{max-width:", ";margin:0 auto;border:0;padding:0;&[disabled]{opacity:0.5;}&::before{height:3px;margin-bottom:10px;content:'';display:block;background-image:linear-gradient(to right,", " 0%,", " 50%,", " 100% );}&[aria-busy='true']::before{background-size:50% auto;animation:", " 0.5s linear infinite;}}"], function (props) {
  return props.theme.grey;
}, function (props) {
  return props.theme.mainBlue;
}, function (props) {
  return props.theme.lightBlue;
}, function (props) {
  return props.theme.roundedCorner;
}, function (props) {
  return props.theme.mainBlue;
}, function (props) {
  return props.theme.maxWidth;
}, function (props) {
  return props.theme.orange;
}, function (props) {
  return props.theme.yellow;
}, function (props) {
  return props.theme.orange;
}, loading);
/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./components/styles/PriceTag.js":
/*!***************************************!*\
  !*** ./components/styles/PriceTag.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var PriceTag = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "PriceTag",
  componentId: "sc-7j6mkx-0"
})(["background:;color:", ";font-weight:600;padding:5px;border-radius:50px;line-height:1;font-size:1.5rem;display:inline-block;"], function (props) {
  return props.theme.green;
});
/* harmony default export */ __webpack_exports__["default"] = (PriceTag);

/***/ }),

/***/ "./components/styles/SubHeaderStyles.js":
/*!**********************************************!*\
  !*** ./components/styles/SubHeaderStyles.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var StyledSubHeader = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "SubHeaderStyles__StyledSubHeader",
  componentId: "sc-15zs120-0"
})([".subheader-wrapper{position:fixed;top:99px;right:0;left:0;z-index:1030;background:", ";padding:10px;a{color:", ";cursor:pointer;:hover{color:", ";}}span{color:", ";}}.subheader-inner{margin:auto 27px;}@media (max-width:700px){.subheader-inner{margin:auto 10px;}}"], function (props) {
  return props.theme.navyBlue;
}, function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.white;
});
/* harmony default export */ __webpack_exports__["default"] = (StyledSubHeader);

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: endpoint, prodEndpoint, perPage, perPageReviews */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endpoint", function() { return endpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prodEndpoint", function() { return prodEndpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perPage", function() { return perPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perPageReviews", function() { return perPageReviews; });
// This is client side config only - don't put anything in here that shouldn't be public!
var endpoint = "http://localhost:4444";
var prodEndpoint = "https://api.staxofstories.com";
var perPage = 20;
var perPageReviews = 500;

/***/ }),

/***/ "./lib/calcTotalPrice.js":
/*!*******************************!*\
  !*** ./lib/calcTotalPrice.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return calcTotalPrice; });
function calcTotalPrice(cart) {
  return cart.reduce(function (tally, cartItem) {
    if (!cartItem.item) return tally;
    return tally + cartItem.quantity * cartItem.item.price; //---with delivery cost
    // return tally + cartItem.quantity * cartItem.item.price + cartItem.item.deliveryCost;
    //---with delivery cost
  }, 0);
}

/***/ }),

/***/ "./lib/formatMoney.js":
/*!****************************!*\
  !*** ./lib/formatMoney.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (amount) {
  var options = {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 2
  }; // if its a whole, dollar amount, leave off the .00

  if (amount % 100 === 0) options.minimumFractionDigits = 0;
  var formatter = new Intl.NumberFormat('en-GB', options);
  return formatter.format(amount / 100);
});

/***/ }),

/***/ "./lib/withData.js":
/*!*************************!*\
  !*** ./lib/withData.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-with-apollo */ "next-with-apollo");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _components_Cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Cart */ "./components/Cart.js");






function createClient(_ref) {
  var headers = _ref.headers;
  return new apollo_boost__WEBPACK_IMPORTED_MODULE_1___default.a({
    uri:  true ? _config__WEBPACK_IMPORTED_MODULE_2__["endpoint"] : undefined,
    request: function request(operation) {
      operation.setContext({
        fetchOptions: {
          credentials: 'include'
        },
        headers: headers
      });
    },
    //local data
    clientState: {
      resolvers: {
        Mutation: {
          toggleCart: function toggleCart(_, variables, _ref2) {
            var cache = _ref2.cache;

            // read the cartOpen value from the cache
            var _cache$readQuery = cache.readQuery({
              query: _components_Cart__WEBPACK_IMPORTED_MODULE_3__["LOCAL_STATE_QUERY"]
            }),
                cartOpen = _cache$readQuery.cartOpen; // Write the cart State to the opposite


            var data = {
              data: {
                cartOpen: !cartOpen
              }
            };
            cache.writeData(data);
            return data;
          }
        }
      },
      defaults: {
        cartOpen: false
      }
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (next_with_apollo__WEBPACK_IMPORTED_MODULE_0___default()(createClient));

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "core-js/library/fn/array/from");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/freeze */ "core-js/library/fn/object/freeze");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/reflect/construct */ "core-js/library/fn/reflect/construct");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__(/*! ../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/construct.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/construct.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _construct; });
/* harmony import */ var _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");



function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false;
  if (_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/freeze */ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js");
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__);


function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default()(strings, {
    raw: {
      value: _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(raw)
    }
  }));
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _construct = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js"));

var _classCallCheck2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js"));

var _createClass2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = (0, _construct["default"])(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_construct["default"]) return false; if (_construct["default"].sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call((0, _construct["default"])(Date, [], function () {})); return true; } catch (e) { return false; } }

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
/* global __NEXT_DATA__ */


function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map["default"]();
var IntersectionObserver =  false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners["delete"](entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = function listenToIntersections(el, cb) {
  var observer = getObserver();

  if (!observer) {
    return function () {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return function () {
    observer.unobserve(el);
    listeners["delete"](el);
  };
};

var Link = /*#__PURE__*/function (_react$Component) {
  (0, _inherits2["default"])(Link, _react$Component);

  var _super = _createSuper(Link);

  function Link() {
    var _this;

    (0, _classCallCheck2["default"])(this, Link);
    _this = _super.apply(this, arguments);

    _this.cleanUpListeners = function () {};

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      // @ts-ignore target exists on currentTarget
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router["default"][_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      })["catch"](function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2["default"])(Link, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanUpListeners();
    }
  }, {
    key: "handleRef",
    value: function handleRef(ref) {
      var _this2 = this;

      if (this.props.prefetch && IntersectionObserver && ref && ref.tagName) {
        this.cleanUpListeners();
        this.cleanUpListeners = listenToIntersections(ref, function () {
          _this2.prefetch();
        });
      }
    } // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch || "undefined" === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = (0, _url.resolve)(pathname, parsedHref);

      _router["default"].prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = _react["default"].createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = _react.Children.only(children);

      var props = {
        ref: function ref(el) {
          return _this3.handleRef(el);
        },
        onMouseEnter: function onMouseEnter(e) {
          if (child.props && typeof child.props.onMouseEnter === 'function') {
            child.props.onMouseEnter(e);
          }

          _this3.prefetch();
        },
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this3.linkClicked(e);
          }
        } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
        // defined, we specify the current 'href', so that repetition is not needed by the user

      };

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (false) {}

      return _react["default"].cloneElement(child, props);
    }
  }]);
  return Link;
}(_react.Component);

Link.propTypes = void 0;
Link.defaultProps = {
  prefetch: true
};

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]).isRequired,
    as: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
    prefetch: _propTypes["default"].bool,
    replace: _propTypes["default"].bool,
    shallow: _propTypes["default"].bool,
    passHref: _propTypes["default"].bool,
    scroll: _propTypes["default"].bool,
    children: _propTypes["default"].oneOfType([_propTypes["default"].element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _getIterator2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js"));

var _isArray = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js"));

var _iterator2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js"));

var _symbol = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js"));

var _from = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js"));

var _construct2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/construct */ "./node_modules/@babel/runtime-corejs2/helpers/esm/construct.js"));

function _createForOfIteratorHelper(o) { if (typeof _symbol["default"] === "undefined" || o[_iterator2["default"]] == null) { if ((0, _isArray["default"])(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = (0, _getIterator2["default"])(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return (0, _from["default"])(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.useRequest = useRequest;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _requestContext = __webpack_require__(/*! next-server/dist/lib/request-context */ "next-server/dist/lib/request-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
var propertyFields = ['components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty["default"])(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
propertyFields.concat(urlPropertyFields).forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty["default"])(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  return _react["default"].useContext(_routerContext.RouterContext);
}

function useRequest() {
  return _react["default"].useContext(_requestContext.RequestContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = (0, _construct2["default"])(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  var _iterator = _createForOfIteratorHelper(urlPropertyFields),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var property = _step.value;

      if (typeof _router[property] === 'object') {
        instance[property] = (0, _extends2["default"])({}, _router[property]); // makes sure query is not stateful

        continue;
      }

      instance[property] = _router[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  instance.events = _router2["default"].events;
  propertyFields.forEach(function (field) {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty["default"])(instance, field, {
      get: function get() {
        return _router[field];
      }
    });
  });
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _construct = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js"));

var _classCallCheck2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js"));

var _createClass2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = (0, _construct["default"])(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_construct["default"]) return false; if (_construct["default"].sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call((0, _construct["default"])(Date, [], function () {})); return true; } catch (e) { return false; } }

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  var WithRouteWrapper = /*#__PURE__*/function (_react$default$Compon) {
    (0, _inherits2["default"])(WithRouteWrapper, _react$default$Compon);

    var _super = _createSuper(WithRouteWrapper);

    function WithRouteWrapper() {
      var _this;

      (0, _classCallCheck2["default"])(this, WithRouteWrapper);
      _this = _super.apply(this, arguments);
      _this.context = void 0;
      return _this;
    }

    (0, _createClass2["default"])(WithRouteWrapper, [{
      key: "render",
      value: function render() {
        return _react["default"].createElement(ComposedComponent, (0, _extends2["default"])({
          router: this.context.router
        }, this.props));
      }
    }]);
    return WithRouteWrapper;
  }(_react["default"].Component);

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes["default"].object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _construct = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js"));

var _classCallCheck2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js"));

var _createClass2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js"));

var _regenerator = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = (0, _construct["default"])(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_construct["default"]) return false; if (_construct["default"].sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call((0, _construct["default"])(Date, [], function () {})); return true; } catch (e) { return false; } }

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;

var _router = __webpack_require__(/*! ../client/router */ "./node_modules/next/dist/client/router.js");
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/


function appGetInitialProps(_x) {
  return _appGetInitialProps.apply(this, arguments);
}

function _appGetInitialProps() {
  _appGetInitialProps = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var Component, ctx, pageProps;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            Component = _ref.Component, ctx = _ref.ctx;
            _context.next = 3;
            return (0, _utils.loadGetInitialProps)(Component, ctx);

          case 3:
            pageProps = _context.sent;
            return _context.abrupt("return", {
              pageProps: pageProps
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _appGetInitialProps.apply(this, arguments);
}

var App = /*#__PURE__*/function (_react$default$Compon) {
  (0, _inherits2["default"])(App, _react$default$Compon);

  var _super = _createSuper(App);

  function App() {
    (0, _classCallCheck2["default"])(this, App);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(App, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        router: (0, _router.makePublicRouterInstance)(this.props.router)
      };
    } // Kept here for backwards compatibility.
    // When someone ended App they could call `super.componentDidCatch`.
    // @deprecated This method is no longer needed. Errors are caught at the top level

  }, {
    key: "componentDidCatch",
    value: function componentDidCatch(error, _errorInfo) {
      throw error;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          router = _this$props.router,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      var url = createUrl(router);
      return _react["default"].createElement(Container, null, _react["default"].createElement(Component, (0, _extends2["default"])({}, pageProps, {
        url: url
      })));
    }
  }]);
  return App;
}(_react["default"].Component); // @deprecated noop for now until removal


exports["default"] = App;
App.childContextTypes = {
  router: _propTypes["default"].object
};
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;

function Container(p) {
  return p.children;
}

var warnUrl = (0, _utils.execOnce)(function () {
  if (true) {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  }
});

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var pathname = router.pathname,
      asPath = router.asPath,
      query = router.query;
  return {
    get query() {
      warnUrl();
      return query;
    },

    get pathname() {
      warnUrl();
      return pathname;
    },

    get asPath() {
      warnUrl();
      return asPath;
    },

    back: function back() {
      warnUrl();
      router.back();
    },
    push: function push(url, as) {
      warnUrl();
      return router.push(url, as);
    },
    pushTo: function pushTo(href, as) {
      warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: function replace(url, as) {
      warnUrl();
      return router.replace(url, as);
    },
    replaceTo: function replaceTo(href, as) {
      warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_scroll_to__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-scroll-to */ "react-scroll-to");
/* harmony import */ var react_scroll_to__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_scroll_to__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "@fortawesome/free-brands-svg-icons");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Page */ "./components/Page.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _lib_withData__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../lib/withData */ "./lib/withData.js");
/* harmony import */ var react_https_redirect__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-https-redirect */ "react-https-redirect");
/* harmony import */ var react_https_redirect__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_https_redirect__WEBPACK_IMPORTED_MODULE_18__);









var _jsxFileName = "C:\\Users\\Michael\\Documents\\reactJS\\stax-of-stories\\stax-shop\\Advanced-React\\stax\\frontend\\pages\\_app.js";


function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Date, [], function () {})); return true; } catch (e) { return false; } }











var MyApp = /*#__PURE__*/function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(MyApp, _App);

  var _super = _createSuper(MyApp);

  function MyApp() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MyApp);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          apollo = _this$props.apollo,
          pageProps = _this$props.pageProps;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_10__["Container"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_16__["ApolloProvider"], {
        client: apollo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_https_redirect__WEBPACK_IMPORTED_MODULE_18___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Page__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 15
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, pageProps, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 17
        }
      }))))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(_ref) {
        var Component, ctx, pageProps;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps(ctx);

              case 5:
                pageProps = _context.sent;

              case 6:
                //this exposes the query to the user
                pageProps.query = ctx.query;
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_10___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_withData__WEBPACK_IMPORTED_MODULE_17__["default"])(MyApp));

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@fortawesome/free-brands-svg-icons":
/*!*****************************************************!*\
  !*** external "@fortawesome/free-brands-svg-icons" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "@stripe/react-stripe-js":
/*!******************************************!*\
  !*** external "@stripe/react-stripe-js" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@stripe/react-stripe-js");

/***/ }),

/***/ "@stripe/stripe-js":
/*!************************************!*\
  !*** external "@stripe/stripe-js" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@stripe/stripe-js");

/***/ }),

/***/ "apollo-boost":
/*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "core-js/library/fn/array/from":
/*!************************************************!*\
  !*** external "core-js/library/fn/array/from" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/freeze":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/freeze" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/reflect/construct":
/*!*******************************************************!*\
  !*** external "core-js/library/fn/reflect/construct" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/reflect/construct");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "next-server/dist/lib/request-context":
/*!*******************************************************!*\
  !*** external "next-server/dist/lib/request-context" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/request-context");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next-with-apollo":
/*!***********************************!*\
  !*** external "next-with-apollo" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-with-apollo");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-adopt":
/*!******************************!*\
  !*** external "react-adopt" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-adopt");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react-https-redirect":
/*!***************************************!*\
  !*** external "react-https-redirect" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-https-redirect");

/***/ }),

/***/ "react-scroll-to":
/*!**********************************!*\
  !*** external "react-scroll-to" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scroll-to");

/***/ }),

/***/ "react-stripe-checkout":
/*!****************************************!*\
  !*** external "react-stripe-checkout" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-stripe-checkout");

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map