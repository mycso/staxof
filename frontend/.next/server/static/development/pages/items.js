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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AddToCart.js":
/*!*********************************!*\
  !*** ./components/AddToCart.js ***!
  \*********************************/
/*! exports provided: default, ADD_TO_CART_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_CART_MUTATION", function() { return ADD_TO_CART_MUTATION; });
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
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__);







var _jsxFileName = "C:\\Users\\Michael\\Documents\\reactJS\\stax-of-stories\\stax-shop\\Advanced-React\\stax\\frontend\\components\\AddToCart.js";

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n\tmutation addToCart($id: ID!) {\n\t\taddToCart(id: $id) {\n\t\t\tid\n\t\t\tquantity\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var ADD_TO_CART_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_9___default()(_templateObject());

var AddToCart = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AddToCart, _React$Component);

  var _super = _createSuper(AddToCart);

  function AddToCart() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AddToCart);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(AddToCart, [{
    key: "render",
    value: function render() {
      var _this = this;

      var id = this.props.id;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_8__["Mutation"], {
        mutation: ADD_TO_CART_MUTATION,
        variables: {
          id: id
        },
        refetchQueries: [{
          query: _User__WEBPACK_IMPORTED_MODULE_10__["CURRENT_USER_QUERY"]
        }],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 4
        }
      }, function (addToCart, _ref) {
        var loading = _ref.loading;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 6
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
          disabled: loading,
          onClick: addToCart,
          className: "cart-btn",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 7
          }
        }, "Buy", loading && 'ing', " Item ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faShoppingCart"],
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 102
          }
        })));
      });
    }
  }]);

  return AddToCart;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AddToCart);


/***/ }),

/***/ "./components/DeleteItem.js":
/*!**********************************!*\
  !*** ./components/DeleteItem.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony import */ var _styles_ItemStyles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/ItemStyles */ "./components/styles/ItemStyles.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Items__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Items */ "./components/Items.js");









var _jsxFileName = "C:\\Users\\Michael\\Documents\\reactJS\\stax-of-stories\\stax-shop\\Advanced-React\\stax\\frontend\\components\\DeleteItem.js";

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n\tmutation DELETE_ITEM_MUTATION($id: ID!) {\n\t\tdeleteItem(id: $id) {\n\t\t\tid\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var DELETE_ITEM_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_12___default()(_templateObject());

var DeleteItem = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(DeleteItem, _Component);

  var _super = _createSuper(DeleteItem);

  function DeleteItem() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, DeleteItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "update", function (cache, payload) {
      // manually update the cache on the client, so it matches the server
      // 1. Read the cahe for the items we want
      var data = cache.readQuery({
        query: _Items__WEBPACK_IMPORTED_MODULE_13__["ALL_ITEMS_QUERY"]
      });
      console.log(data, payload); // 2. Filter the deleted itemout of the page

      var filteredItems = data.items.filter(function (item) {
        return item.id !== payload.data.deleteItem.id;
      }); // 3. Put the items back!

      cache.writeQuery({
        query: _Items__WEBPACK_IMPORTED_MODULE_13__["ALL_ITEMS_QUERY"],
        data: {
          items: filteredItems
        }
      });
      Router.back();
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(DeleteItem, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_11__["Mutation"], {
        mutation: DELETE_ITEM_MUTATION,
        variables: {
          id: this.props.id
        },
        update: this.update,
        refetchQueries: [{
          query: _Items__WEBPACK_IMPORTED_MODULE_13__["ALL_ITEMS_QUERY"]
        }],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 4
        }
      }, function (deleteItem, _ref) {
        var error = _ref.error;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
          onClick: function onClick() {
            if (confirm('Are you sure you want to delete this item?')) {
              deleteItem()["catch"](function (err) {
                alert(err.message);
              });
            }
          },
          className: "btn btn-warning",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 6
          }
        }, _this2.props.children);
      });
    }
  }]);

  return DeleteItem;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DeleteItem);

/***/ }),

/***/ "./components/HomeCarousel.js":
/*!************************************!*\
  !*** ./components/HomeCarousel.js ***!
  \************************************/
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
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "@fortawesome/free-brands-svg-icons");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Michael\\Documents\\reactJS\\stax-of-stories\\stax-shop\\Advanced-React\\stax\\frontend\\components\\HomeCarousel.js";








var StyledCarousel = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "HomeCarousel__StyledCarousel",
  componentId: "atsfgr-0"
})([".carousel img{width:100%;@media (max-width:767px){width:", ";position:", ";left:", ";}@media (max-width:500px){width:260%;position:absolute;left:-81%;}}.carousel-item{height:auto;min-height:500px;background:no-repeat center center scroll;-webkit-background-size:", ";-moz-background-size:", ";-o-background-size:", ";background-size:", ";max-height:900px;}.carousel-item:after{content:\"\";display:block;position:", " !important;top:0;bottom:0;left:0;right:0;{}background:rgba(96,96,96,0.61);@media (max-width:767px){width:", " !important;position:", " !important;left:", " !important;}}.carousel-caption{position:", " !important;right:15%;bottom:0px;left:15%;z-index:10;padding-top:2%;padding-bottom:10%;color:#fff;text-align:center;}.social-button-main{position:", ";z-index:1000;top:30px;right:2px;}.social-button-main .svg-inline--fa{font-size:40px;color:#fff;@media (max-width:767px){font-size:30px;}}.heading .display-4{@media (max-width:767px){font-size:35px;}}.heading .display-5{@media (max-width:767px){font-size:20px;}}.site-map-title{@media (max-width:767px){border-top:1px solid #fff;padding-bottom:0px;width:260px;margin:0 auto;}}.rounded-corner{border-radius:", " !important;}button{width:auto;color:white;background-color:", ";border:0;border-radius:", " !important;font-size:1rem;padding:0.7rem 1.2rem;}"], function (props) {
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
}, function (props) {
  return props.theme.roundedCorner;
}, function (props) {
  return props.theme.orange;
}, function (props) {
  return props.theme.roundedCorner;
});

var Carousel = function Carousel() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledCarousel, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "carouselExampleIndicators",
    className: "carousel slide",
    "data-ride": "carousel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
    className: "carousel-indicators d-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    "data-target": "#carouselExampleIndicators",
    "data-slide-to": "0",
    className: "active",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    "data-target": "#carouselExampleIndicators",
    "data-slide-to": "1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    "data-target": "#carouselExampleIndicators",
    "data-slide-to": "2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "social-button-main",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-12 col-sm-12 col-md-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-unstyled list-inline social text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-inline-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.facebook.com/staxofstories/",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 46
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faFacebook"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 112
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-inline-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.instagram.com/staxofstories/",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 46
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faInstagram"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 113
    }
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "carousel-inner",
    role: "listbox",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "carousel-item active",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/landing-pic.jpeg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 10
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "carousel-caption heading d-md-block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "display-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }
  }, "Welcome to Stax Of Stories!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "display-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 13
    }
  }, "Diverse book activity packs carefully created with budding young readers in mind!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scroll_to__WEBPACK_IMPORTED_MODULE_3__["ScrollTo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 18
    }
  }, function (_ref) {
    var scrollTo = _ref.scrollTo;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      onClick: function onClick() {
        return scrollTo({
          x: 20,
          y: 830,
          smooth: true
        });
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn btn-outline-light rounded-corner",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 82
      }
    }, "Shop Now"));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 14
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faArrowDown"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 13
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "carousel-control-prev d-none",
    href: "#carouselExampleIndicators",
    role: "button",
    "data-slide": "prev",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "carousel-control-prev-icon",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "sr-only",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 9
    }
  }, "Previous")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "carousel-control-next d-none",
    href: "#carouselExampleIndicators",
    role: "button",
    "data-slide": "next",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "carousel-control-next-icon",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "sr-only",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 9
    }
  }, "Next")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Carousel);

/***/ }),

/***/ "./components/Item.js":
/*!****************************!*\
  !*** ./components/Item.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Item; });
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_Title__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/Title */ "./components/styles/Title.js");
/* harmony import */ var _styles_ItemStyles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles/ItemStyles */ "./components/styles/ItemStyles.js");
/* harmony import */ var _styles_PriceTag__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./styles/PriceTag */ "./components/styles/PriceTag.js");
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
/* harmony import */ var _DeleteItem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./DeleteItem */ "./components/DeleteItem.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _AddToCart__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./AddToCart */ "./components/AddToCart.js");
/* harmony import */ var _MinusFromCart__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./MinusFromCart */ "./components/MinusFromCart.js");







var _jsxFileName = "C:\\Users\\Michael\\Documents\\reactJS\\stax-of-stories\\stax-shop\\Advanced-React\\stax\\frontend\\components\\Item.js";

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Date, [], function () {})); return true; } catch (e) { return false; } }













var Item = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Item, _Component);

  var _super = _createSuper(Item);

  function Item() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Item);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Item, [{
    key: "render",
    value: function render() {
      var _this = this;

      var item = this.props.item;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styles_ItemStyles__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 4
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: {
          pathname: '/item',
          query: {
            id: item.id
          }
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 5
        }
      }, item.image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: item.image,
        alt: item.title,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 20
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styles_Title__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: {
          pathname: '/item',
          query: {
            id: item.id
          }
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 6
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 7
        }
      }, item.title))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 5
        }
      }, "By ", item.author), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 5
        }
      }, "Age ", item.ageRange), item.inStock < 6 && item.inStock > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "font-weight-bold",
        style: {
          color: item.inStock < 6 && item.inStock > 0 ? "red" : "#8dc63f"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 45
        }
      }, "Low stock") : '', item.inStock < 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "font-weight-bold",
        style: {
          color: item.inStock < 1 ? "red" : "#8dc63f"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 25
        }
      }, "Back in stock soon!") : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styles_PriceTag__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 5
        }
      }, Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_13__["default"])(item.price)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 5
        }
      }, function (_ref) {
        var me = _ref.data.me;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 7
          }
        }, !me && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "buttonList",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 10
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          href: "/signup",
          prefetch: "true",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 11
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
          className: "cart-btn",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 45
          }
        }, "Buy Item")))), me && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, item.inStock > 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "buttonList",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 10
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_AddToCart__WEBPACK_IMPORTED_MODULE_16__["default"], {
          id: item.id,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 11
          }
        })) : '', me.permissions.includes("ADMIN") && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "buttonList",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 10
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: {
            pathname: 'update',
            query: {
              id: item.id
            }
          },
          prefetch: "true",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 11
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 12
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
          className: "btn btn-success",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 15
          }
        }, "Edit"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 11
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_DeleteItem__WEBPACK_IMPORTED_MODULE_14__["default"], {
          id: item.id,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 14
          }
        }, "Delete This Item")))));
      }));
    }
  }]);

  return Item;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Item, "propTypes", {
  item: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired
});



/***/ }),

/***/ "./components/Items.js":
/*!*****************************!*\
  !*** ./components/Items.js ***!
  \*****************************/
/*! exports provided: default, ALL_ITEMS_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_ITEMS_QUERY", function() { return ALL_ITEMS_QUERY; });
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
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Item */ "./components/Item.js");
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Pagination */ "./components/Pagination.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_scroll_to__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-scroll-to */ "react-scroll-to");
/* harmony import */ var react_scroll_to__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_scroll_to__WEBPACK_IMPORTED_MODULE_16__);







var _jsxFileName = "C:\\Users\\Michael\\Documents\\reactJS\\stax-of-stories\\stax-shop\\Advanced-React\\stax\\frontend\\components\\Items.js";

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n\tquery ALL_ITEMS_QUERY($skip: Int = 0, $first: Int = ", ") {\n    \titems(first: $first, skip: $skip, orderBy: createdAt_DESC) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tprice\n\t\t\tdescription\n\t\t\timage\n\t\t\tlargeImage\n\t\t\tauthor\n\t\t\tageRange\n\t\t\tinStock\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}











var ALL_ITEMS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_9___default()(_templateObject(), _config__WEBPACK_IMPORTED_MODULE_13__["perPage"]);
var Center = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.div.withConfig({
  displayName: "Items__Center",
  componentId: "sc-17x8muk-0"
})(["text-align:center;.buttonup{width:auto;color:white;background-color:", ";border:0;border-radius:", " !important;font-size:1rem;padding:0.9rem 1.2rem;}"], function (props) {
  return props.theme.orange;
}, function (props) {
  return props.theme.roundedCorner;
});
var ItemsList = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.div.withConfig({
  displayName: "Items__ItemsList",
  componentId: "sc-17x8muk-1"
})(["display:grid;grid-template-columns:auto auto auto auto;grid-gap:60px;max-width:", ";margin:0 auto;@media (max-width:830px){grid-template-columns:1fr 1fr;grid-gap:0%;a{font-size:1.2rem;}}@media (max-width:500px){grid-template-columns:1fr;grid-gap:0%;}"], function (props) {
  return props.theme.maxWidth;
});

var Items = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Items, _Component);

  var _super = _createSuper(Items);

  function Items() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Items);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Items, [{
    key: "render",
    value: function render() {
      var _this = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Center, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 4
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_8__["Query"], {
        query: ALL_ITEMS_QUERY,
        variables: {
          skip: this.props.page * _config__WEBPACK_IMPORTED_MODULE_13__["perPage"] - _config__WEBPACK_IMPORTED_MODULE_13__["perPage"]
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 5
        }
      }, function (_ref) {
        var data = _ref.data,
            error = _ref.error,
            loading = _ref.loading;
        if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 26
          }
        }, "loading...");
        if (error) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 24
          }
        }, "Error: ", error.message);
        if (!data) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 25
          }
        }, "No Items Found!");
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(ItemsList, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 8
          }
        }, data.items.map(function (item) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Item__WEBPACK_IMPORTED_MODULE_11__["default"], {
            item: item,
            key: item.id,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 43
            }
          });
        }));
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Pagination__WEBPACK_IMPORTED_MODULE_12__["default"], {
        page: this.props.page,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_scroll_to__WEBPACK_IMPORTED_MODULE_16__["ScrollTo"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 14
        }
      }, function (_ref2) {
        var scrollTo = _ref2.scrollTo;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          onClick: function onClick() {
            return scrollTo({
              x: 20,
              y: 0,
              smooth: true
            });
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 17
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
          className: "buttonup btn btn-outline-light rounded-corner",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 76
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__["faArrowUp"],
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 142
          }
        })));
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 10
        }
      }));
    }
  }]);

  return Items;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Items);


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

/***/ "./components/Pagination.js":
/*!**********************************!*\
  !*** ./components/Pagination.js ***!
  \**********************************/
/*! exports provided: default, PAGINATION_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGINATION_QUERY", function() { return PAGINATION_QUERY; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_PaginationStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/PaginationStyles */ "./components/styles/PaginationStyles.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./User */ "./components/User.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\Michael\\Documents\\reactJS\\stax-of-stories\\stax-shop\\Advanced-React\\stax\\frontend\\components\\Pagination.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tquery PAGINATION_QUERY {\n\t\titemsConnection {\n\t\t\taggregate {\n\t\t\t\tcount\n\t\t\t}\n\t\t}\n\t}\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var PAGINATION_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

var Pagination = function Pagination(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["Query"], {
    query: PAGINATION_QUERY,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 3
    }
  }, function (_ref) {
    var data = _ref.data,
        loading = _ref.loading,
        error = _ref.error;
    if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 24
      }
    }, "Loading...");
    var count = data.itemsConnection.aggregate.count;
    var pages = Math.ceil(count / _config__WEBPACK_IMPORTED_MODULE_7__["perPage"]);
    var page = props.page;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_PaginationStyles__WEBPACK_IMPORTED_MODULE_6__["default"], {
      "data-test": "pagination",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 6
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 7
      }
    }, function (_ref2) {
      var me = _ref2.data.me;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("head", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 10
        }
      }, "Stax Of Stories - ", page, " of ", pages)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        prefetch: true,
        href: {
          pathname: 'items',
          query: {
            page: page - 1
          }
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "prev",
        "aria-disabled": page <= 1,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 10
        }
      }, "\u2190 Prev")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 9
        }
      }, props.page, " of", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "totalPages",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 10
        }
      }, " ", pages)), me && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, me.permissions.includes("ADMIN") && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }
      }, count, " Items Total")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        prefetch: true,
        href: {
          pathname: 'items',
          query: {
            page: page + 1
          }
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "next",
        "aria-disabled": page >= pages,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 10
        }
      }, "Next \u2192")));
    }));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Pagination);


/***/ }),

/***/ "./components/Search.js":
/*!******************************!*\
  !*** ./components/Search.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var downshift__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! downshift */ "downshift");
/* harmony import */ var downshift__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(downshift__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! lodash.debounce */ "lodash.debounce");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _styles_DropDown__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./styles/DropDown */ "./components/styles/DropDown.js");












var _jsxFileName = "C:\\Users\\Michael\\Documents\\reactJS\\stax-of-stories\\stax-shop\\Advanced-React\\stax\\frontend\\components\\Search.js";

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_11__["default"])(["\n\tquery SEARCH_ITEMS_QUERY($searchTerm: String!) {\n\t\titems(where: { OR: [{ title_contains: $searchTerm }, { ageRange_contains: $searchTerm }] }) {\n\t\t\tid\n\t\t\timage\n\t\t\ttitle\n\t\t\tageRange\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var SEARCH_ITEMS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_17___default()(_templateObject());

function routeToItem(item) {
  next_router__WEBPACK_IMPORTED_MODULE_15___default.a.push({
    pathname: '/item',
    query: {
      id: item.id
    }
  });
}

var AutoComplete = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(AutoComplete, _React$Component);

  var _super = _createSuper(AutoComplete);

  function AutoComplete() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, AutoComplete);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      items: [],
      loading: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onChange", lodash_debounce__WEBPACK_IMPORTED_MODULE_18___default()( /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(e, client) {
        var res;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // turn loading on
                _this.setState({
                  loading: true
                }); // Manually query apollo client


                _context.next = 3;
                return client.query({
                  query: SEARCH_ITEMS_QUERY,
                  variables: {
                    searchTerm: e.target.value
                  }
                });

              case 3:
                res = _context.sent;

                _this.setState({
                  items: res.data.items,
                  loading: false
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }(), 350));

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(AutoComplete, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      Object(downshift__WEBPACK_IMPORTED_MODULE_14__["resetIdCounter"])();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_styles_DropDown__WEBPACK_IMPORTED_MODULE_19__["SearchStyles"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 4
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(downshift__WEBPACK_IMPORTED_MODULE_14___default.a, {
        onChange: routeToItem,
        itemToString: function itemToString(item) {
          return item === null ? '' : item.title;
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 5
        }
      }, function (_ref2) {
        var getInputProps = _ref2.getInputProps,
            getItemProps = _ref2.getItemProps,
            isOpen = _ref2.isOpen,
            inputValue = _ref2.inputValue,
            highlightedIndex = _ref2.highlightedIndex;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 5
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_16__["ApolloConsumer"], {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 6
          }
        }, function (client) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, getInputProps({
            type: 'search',
            placeholder: "Search for a book title or age...",
            id: 'search',
            className: _this2.state.loading ? 'loading' : '',
            onChange: function onChange(e) {
              e.persist();

              _this2.onChange(e, client);
            }
          }), {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 8
            }
          }));
        }), isOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_styles_DropDown__WEBPACK_IMPORTED_MODULE_19__["DropDown"], {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 7
          }
        }, _this2.state.items.map(function (item, index) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_styles_DropDown__WEBPACK_IMPORTED_MODULE_19__["DropDownItem"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, getItemProps({
            item: item
          }), {
            key: item.id,
            highlighted: index === highlightedIndex,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 9
            }
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("img", {
            width: "50",
            src: item.image,
            alt: item.title,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 10
            }
          }), item.title, " - Age ", item.ageRange);
        }), !_this2.state.items.length && !_this2.state.loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_styles_DropDown__WEBPACK_IMPORTED_MODULE_19__["DropDownItem"], {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 32
          }
        }, "Nothing Found ", inputValue)));
      }));
    }
  }]);

  return AutoComplete;
}(react__WEBPACK_IMPORTED_MODULE_12___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AutoComplete);

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

/***/ "./components/styles/DropDown.js":
/*!***************************************!*\
  !*** ./components/styles/DropDown.js ***!
  \***************************************/
/*! exports provided: DropDown, DropDownItem, SearchStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDown", function() { return DropDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDownItem", function() { return DropDownItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchStyles", function() { return SearchStyles; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var DropDown = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "DropDown",
  componentId: "lz05t9-0"
})(["position:absolute;width:100%;z-index:2;border:1px solid ", ";"], function (props) {
  return props.theme.lightgrey;
});
var DropDownItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "DropDown__DropDownItem",
  componentId: "lz05t9-1"
})(["border-bottom:1px solid ", ";background:", ";padding:1rem;transition:all 0.2s;", ";display:flex;align-items:center;border-left:10px solid ", ";img{margin-right:10px;}cursor:pointer;"], function (props) {
  return props.theme.lightgrey;
}, function (props) {
  return props.highlighted ? '#f7f7f7' : 'white';
}, function (props) {
  return props.highlighted ? 'padding-left: 2rem;' : null;
}, function (props) {
  return props.highlighted ? props.theme.lightgrey : 'white';
});
var glow = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{box-shadow:0 0 0px yellow;}to{box-shadow:0 0 10px 1px yellow;}"]);
var SearchStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "DropDown__SearchStyles",
  componentId: "lz05t9-2"
})(["position:relative;input{width:100%;padding:10px;border:0;border-bottom:1px solid ", ";font-size:1.45rem;&.loading{animation:", " 0.5s ease-in-out infinite alternate;}}"], function (props) {
  return props.theme.lightgrey;
}, glow);


/***/ }),

/***/ "./components/styles/ItemStyles.js":
/*!*****************************************!*\
  !*** ./components/styles/ItemStyles.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var Item = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ItemStyles__Item",
  componentId: "jciu5t-0"
})(["background:;border:0.4px solid ", ";position:relative;display:flex;flex-direction:column;padding:25px 5px;img{width:100%;height:320px;object-fit:contain;cursor:pointer;}a{padding:0.5rem 0 !important;}p{font-size:12px;line-height:2;font-weight:300;flex-grow:1;font-size:0.9rem;margin-bottom:0px;}.orange-text{color:", ";font-weight:bold;}.buttonList{display:grid;width:100%;grid-template-columns:1fr;grid-gap:1px;background:", ";& > *{background:;border:0;font-size:1rem;padding:1rem;}}button{border-radius:", " !important;padding:5px;width:150px;border:0;}.cart-btn{background-color:", ";color:", ";max-width:160px !important;min-width:130px !important;:focus{box-shadow:0 0 0 0.2rem rgba(241,90,36,0.36);}:hover{background-color:#db5322;}@media (max-width:500px){width:155px;}}"], function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.orange;
}, function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.roundedCorner;
}, function (props) {
  return props.theme.orange;
}, function (props) {
  return props.theme.white;
});
/* harmony default export */ __webpack_exports__["default"] = (Item);

/***/ }),

/***/ "./components/styles/PaginationStyles.js":
/*!***********************************************!*\
  !*** ./components/styles/PaginationStyles.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var PaginationStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "PaginationStyles",
  componentId: "sc-1mvatsc-0"
})(["text-align:center;display:inline-grid;grid-template-columns:repeat(4,auto);align-items:stretch;justify-content:center;align-content:center;margin:2rem 0;color:", ";border:0;border-radius:10px;background:", ";& > *{margin:0;padding:5px 30px;border-right:1px solid ", ";&:last-child{border-right:0;}}a[aria-disabled='false']{color:", ";}a[aria-disabled='true']{color:", ";pointer-events:none;}@media (max-width:700px){font-size:18px;}@media (max-width:500px){a{padding:18px 5px !important;}p{padding:18px 5px !important;}}"], function (props) {
  return props.theme.navyBlue;
}, function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.navyBlue;
}, function (props) {
  return props.theme.lightBlue;
}, function (props) {
  return props.theme.navyBlue;
});
/* harmony default export */ __webpack_exports__["default"] = (PaginationStyles);

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

/***/ "./components/styles/Title.js":
/*!************************************!*\
  !*** ./components/styles/Title.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h3.withConfig({
  displayName: "Title",
  componentId: "sc-1speq3f-0"
})(["margin:0 1rem;text-align:center;margin-top:1rem;a{display:inline;line-height:1.3;font-size:1.3rem;text-align:center;color:", ";font-weight:bold;padding:0 1rem;}"], function (props) {
  return props.theme.navyBlue;
});
/* harmony default export */ __webpack_exports__["default"] = (Title);

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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-float.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-float */ "core-js/library/fn/parse-float");

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

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_HomeCarousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/HomeCarousel */ "./components/HomeCarousel.js");
/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Search */ "./components/Search.js");
/* harmony import */ var _components_Items__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Items */ "./components/Items.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\Michael\\Documents\\reactJS\\stax-of-stories\\stax-shop\\Advanced-React\\stax\\frontend\\pages\\index.js";






var Inner = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "pages__Inner",
  componentId: "fawx0s-0"
})(["max-width:", ";margin:0 auto;padding:2rem;font-size:20px;"], function (props) {
  return props.theme.maxWidth;
});

var Home = function Home(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_HomeCarousel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Inner, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Search__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 6
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Items__WEBPACK_IMPORTED_MODULE_5__["default"], {
    page: _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default()(props.query.page) || 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 6
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./pages/items.js":
/*!************************!*\
  !*** ./pages/items.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./pages/index.js");

/* harmony default export */ __webpack_exports__["default"] = (_index__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/items.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Michael\Documents\reactJS\stax-of-stories\stax-shop\Advanced-React\stax\frontend\pages\items.js */"./pages/items.js");


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

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/parse-float":
/*!*************************************************!*\
  !*** external "core-js/library/fn/parse-float" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-float");

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

/***/ "downshift":
/*!****************************!*\
  !*** external "downshift" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("downshift");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "lodash.debounce":
/*!**********************************!*\
  !*** external "lodash.debounce" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash.debounce");

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

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react-scroll-to":
/*!**********************************!*\
  !*** external "react-scroll-to" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scroll-to");

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
//# sourceMappingURL=items.js.map