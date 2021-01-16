module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "lamavue.common." + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = (typeof self !== 'undefined' ? self : this)["webpackJsonplamavue"] = (typeof self !== 'undefined' ? self : this)["webpackJsonplamavue"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fae3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00ee":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "034f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3ebb");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "0366":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("1c0b");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "057f":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var nativeGetOwnPropertyNames = __webpack_require__("241c").f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createPropertyDescriptor = __webpack_require__("5c6c");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var has = __webpack_require__("5135");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "0828":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".overlay{bottom:0;opacity:.6;-webkit-transition:opacity .3s;transition:opacity .3s;background:#000;bottom:100%;opacity:0;right:0;-webkit-transition:opacity .3s,bottom 0s .3s;transition:opacity .3s,bottom 0s .3s;z-index:310}.modal-mask,.overlay{left:0;position:fixed;top:0}.modal-mask{z-index:9998;width:100%;height:100%;background-color:rgba(0,0,0,.5);display:table;-webkit-transition:opacity .3s ease;transition:opacity .3s ease}.editor{position:relative;background-color:#fff;z-index:9999;border:5px solid #fff;border-radius:5px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "0ee6":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*!\n * Cropper.js v1.5.6\n * https://fengyuanchen.github.io/cropperjs\n *\n * Copyright 2015-present Chen Fengyuan\n * Released under the MIT license\n *\n * Date: 2019-10-04T04:33:44.164Z\n */.cropper-container{direction:ltr;font-size:0;line-height:0;position:relative;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.cropper-container img{display:block;height:100%;image-orientation:0deg;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;width:100%}.cropper-canvas,.cropper-crop-box,.cropper-drag-box,.cropper-modal,.cropper-wrap-box{bottom:0;left:0;position:absolute;right:0;top:0}.cropper-canvas,.cropper-wrap-box{overflow:hidden}.cropper-drag-box{background-color:#fff;opacity:0}.cropper-modal{background-color:#000;opacity:.5}.cropper-view-box{display:block;height:100%;outline:1px solid #39f;outline-color:rgba(51,153,255,.75);overflow:hidden;width:100%}.cropper-dashed{border:0 dashed #eee;display:block;opacity:.5;position:absolute}.cropper-dashed.dashed-h{border-bottom-width:1px;border-top-width:1px;height:33.33333%;left:0;top:33.33333%;width:100%}.cropper-dashed.dashed-v{border-left-width:1px;border-right-width:1px;height:100%;left:33.33333%;top:0;width:33.33333%}.cropper-center{display:block;height:0;left:50%;opacity:.75;position:absolute;top:50%;width:0}.cropper-center:after,.cropper-center:before{background-color:#eee;content:\" \";display:block;position:absolute}.cropper-center:before{height:1px;left:-3px;top:0;width:7px}.cropper-center:after{height:7px;left:0;top:-3px;width:1px}.cropper-face,.cropper-line,.cropper-point{display:block;height:100%;opacity:.1;position:absolute;width:100%}.cropper-face{background-color:#fff;left:0;top:0}.cropper-line{background-color:#39f}.cropper-line.line-e{cursor:ew-resize;right:-3px;top:0;width:5px}.cropper-line.line-n{cursor:ns-resize;height:5px;left:0;top:-3px}.cropper-line.line-w{cursor:ew-resize;left:-3px;top:0;width:5px}.cropper-line.line-s{bottom:-3px;cursor:ns-resize;height:5px;left:0}.cropper-point{background-color:#39f;height:5px;opacity:.75;width:5px}.cropper-point.point-e{cursor:ew-resize;margin-top:-3px;right:-3px;top:50%}.cropper-point.point-n{cursor:ns-resize;left:50%;margin-left:-3px;top:-3px}.cropper-point.point-w{cursor:ew-resize;left:-3px;margin-top:-3px;top:50%}.cropper-point.point-s{bottom:-3px;cursor:s-resize;left:50%;margin-left:-3px}.cropper-point.point-ne{cursor:nesw-resize;right:-3px;top:-3px}.cropper-point.point-nw{cursor:nwse-resize;left:-3px;top:-3px}.cropper-point.point-sw{bottom:-3px;cursor:nesw-resize;left:-3px}.cropper-point.point-se{bottom:-3px;cursor:nwse-resize;height:20px;opacity:1;right:-3px;width:20px}@media (min-width:768px){.cropper-point.point-se{height:15px;width:15px}}@media (min-width:992px){.cropper-point.point-se{height:10px;width:10px}}@media (min-width:1200px){.cropper-point.point-se{height:5px;opacity:.75;width:5px}}.cropper-point.point-se:before{background-color:#39f;bottom:-50%;content:\" \";display:block;height:200%;opacity:0;position:absolute;right:-50%;width:200%}.cropper-invisible{opacity:0}.cropper-bg{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC\")}.cropper-hide{display:block;height:0;position:absolute;width:0}.cropper-hidden{display:none!important}.cropper-move{cursor:move}.cropper-crop{cursor:crosshair}.cropper-disabled .cropper-drag-box,.cropper-disabled .cropper-face,.cropper-disabled .cropper-line,.cropper-disabled .cropper-point{cursor:not-allowed}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "14c3":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");
var regexpExec = __webpack_require__("9263");

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "19aa":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),

/***/ "1be4":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "1c0b":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "1c7e":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "1cdc":
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__("342f");

module.exports = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent);


/***/ }),

/***/ "1d80":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "1dde":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "2266":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var isArrayIteratorMethod = __webpack_require__("e95a");
var toLength = __webpack_require__("50c4");
var bind = __webpack_require__("0366");
var getIteratorMethod = __webpack_require__("35a1");
var callWithSafeIterationClosing = __webpack_require__("9bdd");

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
  var boundFunction = bind(fn, that, AS_ENTRIES ? 2 : 1);
  var iterator, iterFn, index, length, result, next, step;

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = AS_ENTRIES
          ? boundFunction(anObject(step = iterable[index])[0], step[1])
          : boundFunction(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};

iterate.stop = function (result) {
  return new Result(true, result);
};


/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var setGlobal = __webpack_require__("ce4e");
var copyConstructorProperties = __webpack_require__("e893");
var isForced = __webpack_require__("94ca");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "24fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "25ae":
/***/ (function(module, exports, __webpack_require__) {

/*!*
* @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
* For licensing, see LICENSE.md.
*/
!function(t,e){ true?module.exports=e():undefined}(window,(function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){function n(t,e){t.onload=function(){this.onerror=this.onload=null,e(null,t)},t.onerror=function(){this.onerror=this.onload=null,e(new Error("Failed to load "+this.src),t)}}function o(t,e){t.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,e(null,t))}}t.exports=function(t,e,r){var i=document.head||document.getElementsByTagName("head")[0],a=document.createElement("script");"function"==typeof e&&(r=e,e={}),e=e||{},r=r||function(){},a.type=e.type||"text/javascript",a.charset=e.charset||"utf8",a.async=!("async"in e)||!!e.async,a.src=t,e.attrs&&function(t,e){for(var n in e)t.setAttribute(n,e[n])}(a,e.attrs),e.text&&(a.text=""+e.text),("onload"in a?n:o)(a,r),a.onload||n(a,r),i.appendChild(a)}},function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o);let i;function a(t){if("CKEDITOR"in window)return Promise.resolve(CKEDITOR);if(t.length<1)throw new TypeError("CKEditor URL must be a non-empty string.");return i||(i=a.scriptLoader(t).then(t=>(i=void 0,t))),i}a.scriptLoader=t=>new Promise((e,n)=>{r()(t,t=>t?n(t):window.CKEDITOR?void e(CKEDITOR):n(new Error("Script loaded from editorUrl doesn't provide CKEDITOR namespace.")))});var s={name:"ckeditor",render(t){return t("div",{},[t(this.tagName)])},props:{value:{type:String,default:""},type:{type:String,default:"classic",validator:t=>["classic","inline"].includes(t)},editorUrl:{type:String,default:"https://cdn.ckeditor.com/4.14.0/standard-all/ckeditor.js"},config:{type:Object,default:()=>{}},tagName:{type:String,default:"textarea"},readOnly:{type:Boolean,default:null}},mounted(){a(this.editorUrl).then(()=>{if(this.$_destroyed)return;const t=this.config||{};null!==this.readOnly&&(t.readOnly=this.readOnly);const e="inline"===this.type?"inline":"replace",n=this.$el.firstElementChild,o=this.instance=CKEDITOR[e](n,t);o.on("instanceReady",()=>{const t=this.value;o.fire("lockSnapshot"),o.setData(t,{callback:()=>{this.$_setUpEditorEvents();const e=o.getData();t!==e?(this.$once("input",()=>{this.$emit("ready",o)}),this.$emit("input",e)):this.$emit("ready",o),o.fire("unlockSnapshot")}})})})},beforeDestroy(){this.instance&&this.instance.destroy(),this.$_destroyed=!0},watch:{value(t){this.instance.getData()!==t&&this.instance.setData(t)},readOnly(t){this.instance.setReadOnly(t)}},methods:{$_setUpEditorEvents(){const t=this.instance;t.on("change",e=>{const n=t.getData();this.value!==n&&this.$emit("input",n,e,t)}),t.on("focus",e=>{this.$emit("focus",e,t)}),t.on("blur",e=>{this.$emit("blur",e,t)})}}};const c={install(t){t.component("ckeditor",s)},component:s};e.default=c}]).default}));
//# sourceMappingURL=ckeditor.js.map

/***/ }),

/***/ "25f0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__("6eeb");
var anObject = __webpack_require__("825a");
var fails = __webpack_require__("d039");
var flags = __webpack_require__("ad6d");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),

/***/ "2626":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("d066");
var definePropertyModule = __webpack_require__("9bf2");
var wellKnownSymbol = __webpack_require__("b622");
var DESCRIPTORS = __webpack_require__("83ab");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "2cf4":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");
var bind = __webpack_require__("0366");
var html = __webpack_require__("1be4");
var createElement = __webpack_require__("cc12");
var IS_IOS = __webpack_require__("1cdc");

var location = global.location;
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(id + '', location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (classof(process) == 'process') {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts && !fails(post)) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),

/***/ "2d00":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var userAgent = __webpack_require__("342f");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "342f":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "35a1":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("f5df");
var Iterators = __webpack_require__("3f8c");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "37e8":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var anObject = __webpack_require__("825a");
var objectKeys = __webpack_require__("df75");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "3bbe":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "3ca3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("7dd0");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "3ebb":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("e31a");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("517436b3", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "3f8c":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "428f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global;


/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "44d2":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var create = __webpack_require__("7c73");
var definePropertyModule = __webpack_require__("9bf2");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "44de":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),

/***/ "44e7":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var classof = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "4840":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var aFunction = __webpack_require__("1c0b");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),

/***/ "4930":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "4a7a":
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}("undefined"!=typeof self?self:this,(function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=8)}([function(t,e,n){var o=n(4),i=n(5),s=n(6);t.exports=function(t){return o(t)||i(t)||s()}},function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},function(t,e,n){},function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(t,e,n){"use strict";var o=n(2);n.n(o).a},function(t,e,n){"use strict";n.r(e);var o=n(0),i=n.n(o),s=n(1),r=n.n(s),a=n(3),l=n.n(a),c={props:{autoscroll:{type:Boolean,default:!0}},watch:{typeAheadPointer:function(){this.autoscroll&&this.maybeAdjustScroll()}},methods:{maybeAdjustScroll:function(){var t,e=(null===(t=this.$refs.dropdownMenu)||void 0===t?void 0:t.children[this.typeAheadPointer])||!1;if(e){var n=this.getDropdownViewport(),o=e.getBoundingClientRect(),i=o.top,s=o.bottom,r=o.height;if(i<n.top)return this.$refs.dropdownMenu.scrollTop=e.offsetTop;if(s>n.bottom)return this.$refs.dropdownMenu.scrollTop=e.offsetTop-(n.height-r)}},getDropdownViewport:function(){return this.$refs.dropdownMenu?this.$refs.dropdownMenu.getBoundingClientRect():{height:0,top:0,bottom:0}}}},u={data:function(){return{typeAheadPointer:-1}},watch:{filteredOptions:function(){for(var t=0;t<this.filteredOptions.length;t++)if(this.selectable(this.filteredOptions[t])){this.typeAheadPointer=t;break}}},methods:{typeAheadUp:function(){for(var t=this.typeAheadPointer-1;t>=0;t--)this.selectable(this.filteredOptions[t])&&(this.typeAheadPointer=t)},typeAheadDown:function(){for(var t=this.typeAheadPointer+1;t<this.filteredOptions.length;t++)this.selectable(this.filteredOptions[t])&&(this.typeAheadPointer=t)},typeAheadSelect:function(){var t=this.filteredOptions[this.typeAheadPointer];t&&this.select(t)}}},p={props:{loading:{type:Boolean,default:!1}},data:function(){return{mutableLoading:!1}},watch:{search:function(){this.$emit("search",this.search,this.toggleLoading)},loading:function(t){this.mutableLoading=t}},methods:{toggleLoading:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return this.mutableLoading=null==t?!this.mutableLoading:t}}};function h(t,e,n,o,i,s,r,a){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),o&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),r?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},c._ssrRegister=l):i&&(l=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,l):[l]}return{exports:t,options:c}}var d={Deselect:h({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10"}},[e("path",{attrs:{d:"M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"}})])}),[],!1,null,null,null).exports,OpenIndicator:h({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"10"}},[e("path",{attrs:{d:"M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"}})])}),[],!1,null,null,null).exports},f={inserted:function(t,e,n){var o=n.context;if(o.appendToBody){var i=o.$refs.toggle.getBoundingClientRect(),s=i.height,r=i.top,a=i.left,l=i.width;t.unbindPosition=o.calculatePosition(t,o,{width:l+"px",top:window.scrollY+r+s+"px",left:window.scrollX+a+"px"}),document.body.appendChild(t)}},unbind:function(t,e,n){n.context.appendToBody&&(t.unbindPosition&&"function"==typeof t.unbindPosition&&t.unbindPosition(),t.parentNode&&t.parentNode.removeChild(t))}};var y=function(t){var e={};return Object.keys(t).sort().forEach((function(n){e[n]=t[n]})),JSON.stringify(e)},b=0;var g=function(){return++b};function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){l()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var _={components:m({},d),mixins:[c,u,p],directives:{appendToBody:f},props:{value:{},components:{type:Object,default:function(){return{}}},options:{type:Array,default:function(){return[]}},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0},searchable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},placeholder:{type:String,default:""},transition:{type:String,default:"vs__fade"},clearSearchOnSelect:{type:Boolean,default:!0},closeOnSelect:{type:Boolean,default:!0},label:{type:String,default:"label"},autocomplete:{type:String,default:"off"},reduce:{type:Function,default:function(t){return t}},selectable:{type:Function,default:function(t){return!0}},getOptionLabel:{type:Function,default:function(t){return"object"===r()(t)?t.hasOwnProperty(this.label)?t[this.label]:console.warn('[vue-select warn]: Label key "option.'.concat(this.label,'" does not')+" exist in options object ".concat(JSON.stringify(t),".\n")+"https://vue-select.org/api/props.html#getoptionlabel"):t}},getOptionKey:{type:Function,default:function(t){if("object"!==r()(t))return t;try{return t.hasOwnProperty("id")?t.id:y(t)}catch(e){return console.warn("[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.\nhttps://vue-select.org/api/props.html#getoptionkey",t,e)}}},onTab:{type:Function,default:function(){this.selectOnTab&&!this.isComposing&&this.typeAheadSelect()}},taggable:{type:Boolean,default:!1},tabindex:{type:Number,default:null},pushTags:{type:Boolean,default:!1},filterable:{type:Boolean,default:!0},filterBy:{type:Function,default:function(t,e,n){return(e||"").toLowerCase().indexOf(n.toLowerCase())>-1}},filter:{type:Function,default:function(t,e){var n=this;return t.filter((function(t){var o=n.getOptionLabel(t);return"number"==typeof o&&(o=o.toString()),n.filterBy(t,o,e)}))}},createOption:{type:Function,default:function(t){return"object"===r()(this.optionList[0])?l()({},this.label,t):t}},resetOnOptionsChange:{default:!1,validator:function(t){return["function","boolean"].includes(r()(t))}},clearSearchOnBlur:{type:Function,default:function(t){var e=t.clearSearchOnSelect,n=t.multiple;return e&&!n}},noDrop:{type:Boolean,default:!1},inputId:{type:String},dir:{type:String,default:"auto"},selectOnTab:{type:Boolean,default:!1},selectOnKeyCodes:{type:Array,default:function(){return[13]}},searchInputQuerySelector:{type:String,default:"[type=search]"},mapKeydown:{type:Function,default:function(t,e){return t}},appendToBody:{type:Boolean,default:!1},calculatePosition:{type:Function,default:function(t,e,n){var o=n.width,i=n.top,s=n.left;t.style.top=i,t.style.left=s,t.style.width=o}}},data:function(){return{uid:g(),search:"",open:!1,isComposing:!1,pushedTags:[],_value:[]}},watch:{options:function(t,e){var n=this;!this.taggable&&("function"==typeof n.resetOnOptionsChange?n.resetOnOptionsChange(t,e,n.selectedValue):n.resetOnOptionsChange)&&this.clearSelection(),this.value&&this.isTrackingValues&&this.setInternalValueFromOptions(this.value)},value:function(t){this.isTrackingValues&&this.setInternalValueFromOptions(t)},multiple:function(){this.clearSelection()},open:function(t){this.$emit(t?"open":"close")}},created:function(){this.mutableLoading=this.loading,void 0!==this.value&&this.isTrackingValues&&this.setInternalValueFromOptions(this.value),this.$on("option:created",this.pushTag)},methods:{setInternalValueFromOptions:function(t){var e=this;Array.isArray(t)?this.$data._value=t.map((function(t){return e.findOptionFromReducedValue(t)})):this.$data._value=this.findOptionFromReducedValue(t)},select:function(t){this.isOptionSelected(t)||(this.taggable&&!this.optionExists(t)&&this.$emit("option:created",t),this.multiple&&(t=this.selectedValue.concat(t)),this.updateValue(t)),this.onAfterSelect(t)},deselect:function(t){var e=this;this.updateValue(this.selectedValue.filter((function(n){return!e.optionComparator(n,t)})))},clearSelection:function(){this.updateValue(this.multiple?[]:null)},onAfterSelect:function(t){this.closeOnSelect&&(this.open=!this.open,this.searchEl.blur()),this.clearSearchOnSelect&&(this.search="")},updateValue:function(t){var e=this;this.isTrackingValues&&(this.$data._value=t),null!==t&&(t=Array.isArray(t)?t.map((function(t){return e.reduce(t)})):this.reduce(t)),this.$emit("input",t)},toggleDropdown:function(t){var e=t.target;[].concat(i()(this.$refs.deselectButtons||[]),i()([this.$refs.clearButton]||false)).some((function(t){return t.contains(e)||t===e}))||(this.open?this.searchEl.blur():this.disabled||(this.open=!0,this.searchEl.focus()))},isOptionSelected:function(t){var e=this;return this.selectedValue.some((function(n){return e.optionComparator(n,t)}))},optionComparator:function(t,e){return this.getOptionKey(t)===this.getOptionKey(e)},findOptionFromReducedValue:function(t){var e=this,n=[].concat(i()(this.options),i()(this.pushedTags)).filter((function(n){return JSON.stringify(e.reduce(n))===JSON.stringify(t)}));return 1===n.length?n[0]:n.find((function(t){return e.optionComparator(t,e.$data._value)}))||t},closeSearchOptions:function(){this.open=!1,this.$emit("search:blur")},maybeDeleteValue:function(){if(!this.searchEl.value.length&&this.selectedValue&&this.selectedValue.length&&this.clearable){var t=null;this.multiple&&(t=i()(this.selectedValue.slice(0,this.selectedValue.length-1))),this.updateValue(t)}},optionExists:function(t){var e=this;return this.optionList.some((function(n){return e.optionComparator(n,t)}))},normalizeOptionForSlot:function(t){return"object"===r()(t)?t:l()({},this.label,t)},pushTag:function(t){this.pushedTags.push(t)},onEscape:function(){this.search.length?this.search="":this.searchEl.blur()},onSearchBlur:function(){if(!this.mousedown||this.searching){var t=this.clearSearchOnSelect,e=this.multiple;return this.clearSearchOnBlur({clearSearchOnSelect:t,multiple:e})&&(this.search=""),void this.closeSearchOptions()}this.mousedown=!1,0!==this.search.length||0!==this.options.length||this.closeSearchOptions()},onSearchFocus:function(){this.open=!0,this.$emit("search:focus")},onMousedown:function(){this.mousedown=!0},onMouseUp:function(){this.mousedown=!1},onSearchKeyDown:function(t){var e=this,n=function(t){return t.preventDefault(),!e.isComposing&&e.typeAheadSelect()},o={8:function(t){return e.maybeDeleteValue()},9:function(t){return e.onTab()},27:function(t){return e.onEscape()},38:function(t){return t.preventDefault(),e.typeAheadUp()},40:function(t){return t.preventDefault(),e.typeAheadDown()}};this.selectOnKeyCodes.forEach((function(t){return o[t]=n}));var i=this.mapKeydown(o,this);if("function"==typeof i[t.keyCode])return i[t.keyCode](t)}},computed:{isTrackingValues:function(){return void 0===this.value||this.$options.propsData.hasOwnProperty("reduce")},selectedValue:function(){var t=this.value;return this.isTrackingValues&&(t=this.$data._value),t?[].concat(t):[]},optionList:function(){return this.options.concat(this.pushTags?this.pushedTags:[])},searchEl:function(){return this.$scopedSlots.search?this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector):this.$refs.search},scope:function(){var t=this,e={search:this.search,loading:this.loading,searching:this.searching,filteredOptions:this.filteredOptions};return{search:{attributes:m({disabled:this.disabled,placeholder:this.searchPlaceholder,tabindex:this.tabindex,readonly:!this.searchable,id:this.inputId,"aria-autocomplete":"list","aria-labelledby":"vs".concat(this.uid,"__combobox"),"aria-controls":"vs".concat(this.uid,"__listbox"),ref:"search",type:"search",autocomplete:this.autocomplete,value:this.search},this.dropdownOpen&&this.filteredOptions[this.typeAheadPointer]?{"aria-activedescendant":"vs".concat(this.uid,"__option-").concat(this.typeAheadPointer)}:{}),events:{compositionstart:function(){return t.isComposing=!0},compositionend:function(){return t.isComposing=!1},keydown:this.onSearchKeyDown,blur:this.onSearchBlur,focus:this.onSearchFocus,input:function(e){return t.search=e.target.value}}},spinner:{loading:this.mutableLoading},noOptions:{search:this.search,loading:this.loading,searching:this.searching},openIndicator:{attributes:{ref:"openIndicator",role:"presentation",class:"vs__open-indicator"}},listHeader:e,listFooter:e,header:m({},e,{deselect:this.deselect}),footer:m({},e,{deselect:this.deselect})}},childComponents:function(){return m({},d,{},this.components)},stateClasses:function(){return{"vs--open":this.dropdownOpen,"vs--single":!this.multiple,"vs--searching":this.searching&&!this.noDrop,"vs--searchable":this.searchable&&!this.noDrop,"vs--unsearchable":!this.searchable,"vs--loading":this.mutableLoading,"vs--disabled":this.disabled}},searching:function(){return!!this.search},dropdownOpen:function(){return!this.noDrop&&(this.open&&!this.mutableLoading)},searchPlaceholder:function(){if(this.isValueEmpty&&this.placeholder)return this.placeholder},filteredOptions:function(){var t=[].concat(this.optionList);if(!this.filterable&&!this.taggable)return t;var e=this.search.length?this.filter(t,this.search,this):t;if(this.taggable&&this.search.length){var n=this.createOption(this.search);this.optionExists(n)||e.unshift(n)}return e},isValueEmpty:function(){return 0===this.selectedValue.length},showClearButton:function(){return!this.multiple&&this.clearable&&!this.open&&!this.isValueEmpty}}},O=(n(7),h(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-select",class:t.stateClasses,attrs:{dir:t.dir}},[t._t("header",null,null,t.scope.header),t._v(" "),n("div",{ref:"toggle",staticClass:"vs__dropdown-toggle",attrs:{id:"vs"+t.uid+"__combobox",role:"combobox","aria-expanded":t.dropdownOpen.toString(),"aria-owns":"vs"+t.uid+"__listbox","aria-label":"Search for option"},on:{mousedown:function(e){return e.preventDefault(),t.toggleDropdown(e)}}},[n("div",{ref:"selectedOptions",staticClass:"vs__selected-options"},[t._l(t.selectedValue,(function(e){return t._t("selected-option-container",[n("span",{key:t.getOptionKey(e),staticClass:"vs__selected"},[t._t("selected-option",[t._v("\n            "+t._s(t.getOptionLabel(e))+"\n          ")],null,t.normalizeOptionForSlot(e)),t._v(" "),t.multiple?n("button",{ref:"deselectButtons",refInFor:!0,staticClass:"vs__deselect",attrs:{disabled:t.disabled,type:"button",title:"Deselect "+t.getOptionLabel(e),"aria-label":"Deselect "+t.getOptionLabel(e)},on:{click:function(n){return t.deselect(e)}}},[n(t.childComponents.Deselect,{tag:"component"})],1):t._e()],2)],{option:t.normalizeOptionForSlot(e),deselect:t.deselect,multiple:t.multiple,disabled:t.disabled})})),t._v(" "),t._t("search",[n("input",t._g(t._b({staticClass:"vs__search"},"input",t.scope.search.attributes,!1),t.scope.search.events))],null,t.scope.search)],2),t._v(" "),n("div",{ref:"actions",staticClass:"vs__actions"},[n("button",{directives:[{name:"show",rawName:"v-show",value:t.showClearButton,expression:"showClearButton"}],ref:"clearButton",staticClass:"vs__clear",attrs:{disabled:t.disabled,type:"button",title:"Clear Selected","aria-label":"Clear Selected"},on:{click:t.clearSelection}},[n(t.childComponents.Deselect,{tag:"component"})],1),t._v(" "),t._t("open-indicator",[t.noDrop?t._e():n(t.childComponents.OpenIndicator,t._b({tag:"component"},"component",t.scope.openIndicator.attributes,!1))],null,t.scope.openIndicator),t._v(" "),t._t("spinner",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.mutableLoading,expression:"mutableLoading"}],staticClass:"vs__spinner"},[t._v("Loading...")])],null,t.scope.spinner)],2)]),t._v(" "),n("transition",{attrs:{name:t.transition}},[t.dropdownOpen?n("ul",{directives:[{name:"append-to-body",rawName:"v-append-to-body"}],ref:"dropdownMenu",staticClass:"vs__dropdown-menu",attrs:{id:"vs"+t.uid+"__listbox",role:"listbox"},on:{mousedown:function(e){return e.preventDefault(),t.onMousedown(e)},mouseup:t.onMouseUp}},[t._t("list-header",null,null,t.scope.listHeader),t._v(" "),t._l(t.filteredOptions,(function(e,o){return n("li",{key:t.getOptionKey(e),staticClass:"vs__dropdown-option",class:{"vs__dropdown-option--selected":t.isOptionSelected(e),"vs__dropdown-option--highlight":o===t.typeAheadPointer,"vs__dropdown-option--disabled":!t.selectable(e)},attrs:{role:"option",id:"vs"+t.uid+"__option-"+o,"aria-selected":o===t.typeAheadPointer||null},on:{mouseover:function(n){t.selectable(e)&&(t.typeAheadPointer=o)},mousedown:function(n){n.preventDefault(),n.stopPropagation(),t.selectable(e)&&t.select(e)}}},[t._t("option",[t._v("\n          "+t._s(t.getOptionLabel(e))+"\n        ")],null,t.normalizeOptionForSlot(e))],2)})),t._v(" "),0===t.filteredOptions.length?n("li",{staticClass:"vs__no-options"},[t._t("no-options",[t._v("Sorry, no matching options.")],null,t.scope.noOptions)],2):t._e(),t._v(" "),t._t("list-footer",null,null,t.scope.listFooter)],2):n("ul",{staticStyle:{display:"none",visibility:"hidden"},attrs:{id:"vs"+t.uid+"__listbox",role:"listbox"}})]),t._v(" "),t._t("footer",null,null,t.scope.footer)],2)}),[],!1,null,null,null).exports),w={ajax:p,pointer:u,pointerScroll:c};n.d(e,"VueSelect",(function(){return O})),n.d(e,"mixins",(function(){return w}));e.default=O}])}));
//# sourceMappingURL=vue-select.js.map

/***/ }),

/***/ "4d63":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var isForced = __webpack_require__("94ca");
var inheritIfRequired = __webpack_require__("7156");
var defineProperty = __webpack_require__("9bf2").f;
var getOwnPropertyNames = __webpack_require__("241c").f;
var isRegExp = __webpack_require__("44e7");
var getFlags = __webpack_require__("ad6d");
var stickyHelpers = __webpack_require__("9f7f");
var redefine = __webpack_require__("6eeb");
var fails = __webpack_require__("d039");
var setInternalState = __webpack_require__("69f3").set;
var setSpecies = __webpack_require__("2626");
var wellKnownSymbol = __webpack_require__("b622");

var MATCH = wellKnownSymbol('match');
var NativeRegExp = global.RegExp;
var RegExpPrototype = NativeRegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;

// "new" should create a new object, old webkit bug
var CORRECT_NEW = new NativeRegExp(re1) !== re1;

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;

var FORCED = DESCRIPTORS && isForced('RegExp', (!CORRECT_NEW || UNSUPPORTED_Y || fails(function () {
  re2[MATCH] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
})));

// `RegExp` constructor
// https://tc39.github.io/ecma262/#sec-regexp-constructor
if (FORCED) {
  var RegExpWrapper = function RegExp(pattern, flags) {
    var thisIsRegExp = this instanceof RegExpWrapper;
    var patternIsRegExp = isRegExp(pattern);
    var flagsAreUndefined = flags === undefined;
    var sticky;

    if (!thisIsRegExp && patternIsRegExp && pattern.constructor === RegExpWrapper && flagsAreUndefined) {
      return pattern;
    }

    if (CORRECT_NEW) {
      if (patternIsRegExp && !flagsAreUndefined) pattern = pattern.source;
    } else if (pattern instanceof RegExpWrapper) {
      if (flagsAreUndefined) flags = getFlags.call(pattern);
      pattern = pattern.source;
    }

    if (UNSUPPORTED_Y) {
      sticky = !!flags && flags.indexOf('y') > -1;
      if (sticky) flags = flags.replace(/y/g, '');
    }

    var result = inheritIfRequired(
      CORRECT_NEW ? new NativeRegExp(pattern, flags) : NativeRegExp(pattern, flags),
      thisIsRegExp ? this : RegExpPrototype,
      RegExpWrapper
    );

    if (UNSUPPORTED_Y && sticky) setInternalState(result, { sticky: sticky });

    return result;
  };
  var proxy = function (key) {
    key in RegExpWrapper || defineProperty(RegExpWrapper, key, {
      configurable: true,
      get: function () { return NativeRegExp[key]; },
      set: function (it) { NativeRegExp[key] = it; }
    });
  };
  var keys = getOwnPropertyNames(NativeRegExp);
  var index = 0;
  while (keys.length > index) proxy(keys[index++]);
  RegExpPrototype.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype;
  redefine(global, 'RegExp', RegExpWrapper);
}

// https://tc39.github.io/ecma262/#sec-get-regexp-@@species
setSpecies('RegExp');


/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var toLength = __webpack_require__("50c4");
var toAbsoluteIndex = __webpack_require__("23cb");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "4de4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $filter = __webpack_require__("b727").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "5135":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "5319":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var anObject = __webpack_require__("825a");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");
var advanceStringIndex = __webpack_require__("8aa5");
var regExpExec = __webpack_require__("14c3");

var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (
        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
      ) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

  // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return nativeReplace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "5692":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("c430");
var store = __webpack_require__("c6cd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.4',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var anObject = __webpack_require__("825a");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "5899":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "58a8":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");
var whitespaces = __webpack_require__("5899");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "5c6c":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "6107":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("0ee6");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("408b81c9", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "6547":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "65d0":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".custom-button[data-v-651b7c9a]{padding:0 20px;position:relative;background-color:#fff;border:1px solid transparent;border-radius:4px;height:30px;font-size:13px;outline:none;cursor:pointer;-webkit-transition:all .25s cubic-bezier(.645,.045,.355,1);color:#fff;font-weight:500}.custom-button-content[data-v-651b7c9a]{position:relative}.custom-button svg[data-v-651b7c9a]{position:relative;fill:#1e90ff}.custom-button .custom-button-effect[data-v-651b7c9a],.custom-button svg[data-v-651b7c9a]{-webkit-transition:all .45s cubic-bezier(.23,1,.32,1) 0ms;transition:all .45s cubic-bezier(.23,1,.32,1) 0ms}.custom-button .custom-button-effect[data-v-651b7c9a]{position:absolute;background:#1e90ff;top:0;left:0;bottom:0;right:0;height:30px;border-radius:4px;width:100%;-webkit-transform:scale(0);transform:scale(0)}.custom-button.with-border[data-v-651b7c9a]{border:1px solid #eaeaea}.custom-button.is-hover[data-v-651b7c9a],.custom-button[data-v-651b7c9a]:hover{border:1px solid transparent!important}.custom-button.is-hover .custom-button-effect[data-v-651b7c9a],.custom-button:hover .custom-button-effect[data-v-651b7c9a]{-webkit-transform:scale(1);transform:scale(1);opacity:.6}.custom-button.is-hover svg[data-v-651b7c9a],.custom-button:hover svg[data-v-651b7c9a]{fill:#fff!important}.custom-button.is-hover .custom-button-content[data-v-651b7c9a],.custom-button:hover .custom-button-content[data-v-651b7c9a]{color:#fff!important}.custom-button.is-selected[data-v-651b7c9a]{border:1px solid transparent!important}.custom-button.is-selected .custom-button-effect[data-v-651b7c9a]{-webkit-transform:scale(1);transform:scale(1);opacity:1}.custom-button.is-selected svg[data-v-651b7c9a]{fill:#fff!important}.custom-button.is-selected .custom-button-content[data-v-651b7c9a]{color:#fff!important}.custom-button.is-dark[data-v-651b7c9a]{background-color:#424242}.custom-button.is-dark.with-border[data-v-651b7c9a]{border-color:#757575}.custom-button.is-dark svg[data-v-651b7c9a]{fill:#fff!important}.custom-button.round[data-v-651b7c9a]{padding:0;width:24px;height:24px;border-radius:50%}.custom-button.round .custom-button-effect[data-v-651b7c9a]{border-radius:50%;height:24px}.field[data-v-74507c40]{position:relative}.field.is-dark .field-label[data-v-74507c40]{color:hsla(0,0%,100%,.7)}.field.is-dark .field-input[data-v-74507c40]{background-color:#424242;border-color:hsla(0,0%,100%,.7);color:hsla(0,0%,100%,.7)}.field.is-dark.is-disabled .field-input[data-v-74507c40],.field.is-dark.is-disabled .field-label[data-v-74507c40]{color:#000}.field-label[data-v-74507c40]{position:absolute;top:5px;cursor:pointer;left:13px;-webkit-transform:translateY(25%);transform:translateY(25%);opacity:0;-webkit-transition:all .25s cubic-bezier(.645,.045,.355,1);transition:all .25s cubic-bezier(.645,.045,.355,1);font-size:11px;color:rgba(0,0,0,.54)}.field-input[data-v-74507c40]{cursor:pointer;background-color:#fff;-webkit-transition-duration:.3s;transition-duration:.3s;position:relative;width:100%;height:42px;min-height:42px;padding-left:12px;padding-right:44px;font-weight:400;-webkit-appearance:none;outline:none;border:1px solid rgba(0,0,0,.2);border-radius:4px;font-size:14px;z-index:0}.field-input.no-clear-button[data-v-74507c40]{padding:0 12px}.field-clear-button[data-v-74507c40]{position:absolute;right:12px}.field.has-error .field-input[data-v-74507c40]{border-color:#ff4500}.field.has-error .field-label[data-v-74507c40]{opacity:1;-webkit-transform:translateY(0);transform:translateY(0);font-size:11px}.field.has-error .field-input[data-v-74507c40]{padding-top:14px}.field.has-value .field-label[data-v-74507c40]{opacity:1;-webkit-transform:translateY(0);transform:translateY(0);font-size:11px}.field.has-value:not(.no-label) .field-input[data-v-74507c40]{padding-top:14px}.field.is-focused .field-input[data-v-74507c40]{border-color:#1e90ff}.field.is-focused .field-label[data-v-74507c40]{color:#1e90ff}.field.is-disabled .field-input[data-v-74507c40]{border-color:#ccc;background:#f2f2f2}.field.is-disabled .field-input[data-v-74507c40],.field.is-disabled .field-label[data-v-74507c40]{cursor:default}.field .text-danger[data-v-74507c40]{color:#ff4500}.field.is-dark[data-v-74507c40] ::-webkit-input-placeholder{color:hsla(0,0%,100%,.7)}.field.is-dark[data-v-74507c40] :-ms-input-placeholder{color:hsla(0,0%,100%,.7)}.field.is-dark[data-v-74507c40] ::-ms-input-placeholder{color:hsla(0,0%,100%,.7)}.field.is-dark[data-v-74507c40] ::-moz-placeholder{color:hsla(0,0%,100%,.7)}.field.is-dark[data-v-74507c40] ::placeholder{color:hsla(0,0%,100%,.7)}.field.is-dark.is-disabled[data-v-74507c40] ::-webkit-input-placeholder{color:#424242}.field.is-dark.is-disabled[data-v-74507c40] :-ms-input-placeholder{color:#424242}.field.is-dark.is-disabled[data-v-74507c40] ::-ms-input-placeholder{color:#424242}.field.is-dark.is-disabled[data-v-74507c40] ::-moz-placeholder{color:#424242}.field.is-dark.is-disabled[data-v-74507c40] ::placeholder{color:#424242}.field.sm .field-input[data-v-74507c40]{height:36px;min-height:36px;font-size:12px}.field.sm .field-label[data-v-74507c40]{font-size:10px}.field.sm.has-value:not(.no-label) .field-input[data-v-74507c40]{padding-top:12px}.field.lg .field-input[data-v-74507c40]{height:48px;min-height:48px;font-size:16px}.field.lg .field-label[data-v-74507c40]{font-size:14px}.field.lg.has-value:not(.no-label) .field-input[data-v-74507c40]{padding-top:16px}.shortcuts-container[data-v-9b117170]{width:140px;max-width:140px;min-width:140px;padding:10px 5px;border-right:1px solid #eaeaea;overflow:auto}.shortcuts-container button.shortcut-button[data-v-9b117170]{margin-bottom:10px;width:100%}.shortcuts-container.is-dark[data-v-9b117170]{border-color:#757575}@media screen and (max-width:415px){.shortcuts-container[data-v-9b117170]:not(.inline){width:100%;max-width:100%;min-width:100%;max-width:100vw;min-width:100vw;border-right:0;border-bottom:1px solid #eaeaea;height:52px!important;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;display:-webkit-box;display:-ms-flexbox;display:flex;white-space:nowrap}.shortcuts-container:not(.inline) .shortcut-button[data-v-9b117170]{margin-bottom:0}.shortcuts-container:not(.inline) .shortcut-button[data-v-9b117170]:not(:last-child){margin-right:10px}.shortcuts-container.is-dark[data-v-9b117170]{border-color:#757575}}.year-month-selector[data-v-4a0f7afa]{position:absolute;background-color:#fff;top:0;bottom:0;left:0;right:0;color:#424242;padding:10px}.year-month-selector.dark[data-v-4a0f7afa]{color:#fff;background-color:#424242}.year-month-selector .month-button[data-v-4a0f7afa]{text-transform:capitalize}.week-days[data-v-a5a27e8c]{height:41px;text-transform:capitalize}.week-days.is-dark .week-days-container[data-v-a5a27e8c]{color:#a8a8a8!important}@media screen and (max-width:415px){:not(.inline) .datepicker-week[data-v-a5a27e8c]{height:21px!important}}.datepicker-container[data-v-628b1b6b]{width:260px;padding:0 5px;position:relative}.datepicker-container.range.has-shortcuts[data-v-628b1b6b]{width:400px}.datepicker-container.p-0[data-v-628b1b6b]{padding:0}.datepicker-container .padding-button[data-v-628b1b6b]{padding:5px 3px!important}.datepicker-container .calendar[data-v-628b1b6b]{position:relative}.datepicker-container .datepicker-controls[data-v-628b1b6b]{height:56px}.datepicker-container .datepicker-controls .arrow-month[data-v-628b1b6b]{-webkit-box-flex:0;-ms-flex:0 0 40px;flex:0 0 40px}.datepicker-container .datepicker-controls .datepicker-button[data-v-628b1b6b]{background:transparent;cursor:pointer;padding:0 10px;border:none;outline:none}.datepicker-container .datepicker-controls .datepicker-button svg[data-v-628b1b6b]{height:17px;width:17px;fill:#2c3e50}.datepicker-container .datepicker-controls .datepicker-button.datepicker-prev[data-v-628b1b6b]{text-align:left!important}.datepicker-container .datepicker-controls .datepicker-button.datepicker-next[data-v-628b1b6b]{text-align:right!important}.datepicker-container .datepicker-controls .datepicker-container-label[data-v-628b1b6b]{text-transform:capitalize;font-size:16px;position:relative;height:56px;overflow:hidden}.datepicker-container .datepicker-controls .date-buttons[data-v-628b1b6b]{text-transform:capitalize;font-weight:400}.datepicker-container .month-container[data-v-628b1b6b]{position:relative;overflow:hidden}.datepicker-container .datepicker-days[data-v-628b1b6b]{display:-webkit-box;display:flex;display:-ms-flexbox;overflow:hidden;flex-wrap:wrap;-ms-flex-wrap:wrap}.datepicker-container .datepicker-days .datepicker-day[data-v-628b1b6b]{height:41px;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;width:14.28571%;position:relative;border:none;background:transparent;font-size:13px;outline:none}.datepicker-container .datepicker-days .datepicker-day.enable[data-v-628b1b6b]{cursor:pointer}.datepicker-container .datepicker-days .datepicker-day-effect[data-v-628b1b6b],.datepicker-container .datepicker-days .datepicker-day .datepicker-today[data-v-628b1b6b]{position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;height:30px;width:30px;border-radius:4px;-webkit-transition:all .45s cubic-bezier(.23,1,.32,1) 0ms;transition:all .45s cubic-bezier(.23,1,.32,1) 0ms}.datepicker-container .datepicker-days .datepicker-day .datepicker-day-effect[data-v-628b1b6b]{margin:auto;opacity:.6;background:#1e90ff;-webkit-transform:scale(0);transform:scale(0)}.datepicker-container .datepicker-days .datepicker-day .datepicker-today[data-v-628b1b6b]{background-color:#eaeaea}.datepicker-container .datepicker-days .datepicker-day .datepicker-day-text[data-v-628b1b6b]{position:relative;color:#000}.datepicker-container .datepicker-days .datepicker-day .datepicker-day-keyboard-selected[data-v-628b1b6b]{position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;height:26px;width:26px;opacity:.7;border-radius:50%;-webkit-transition:all .45s cubic-bezier(.23,1,.32,1) 0ms;transition:all .45s cubic-bezier(.23,1,.32,1) 0ms;background-color:#afafaf}.datepicker-container .datepicker-days .datepicker-day:hover .datepicker-day-text[data-v-628b1b6b]{color:#fff}.datepicker-container .datepicker-days .datepicker-day:hover .datepicker-day-effect[data-v-628b1b6b]{-webkit-transform:scale(1);transform:scale(1);opacity:.6}.datepicker-container .datepicker-days .datepicker-day.between .datepicker-day-text[data-v-628b1b6b]{color:#fff}.datepicker-container .datepicker-days .datepicker-day.between .datepicker-day-effect[data-v-628b1b6b]{-webkit-transform:scale(1);transform:scale(1);opacity:.5;border-radius:0;width:100%}.datepicker-container .datepicker-days .datepicker-day.between.first .datepicker-day-effect[data-v-628b1b6b]{border-top-left-radius:4px;border-bottom-left-radius:4px}.datepicker-container .datepicker-days .datepicker-day.between.last .datepicker-day-effect[data-v-628b1b6b]{border-top-right-radius:4px;border-bottom-right-radius:4px}.datepicker-container .datepicker-days .datepicker-day.between .datepicker-day-keyboard-selected[data-v-628b1b6b],.datepicker-container .datepicker-days .datepicker-day.between.first .datepicker-day-keyboard-selected[data-v-628b1b6b],.datepicker-container .datepicker-days .datepicker-day.between.last .datepicker-day-keyboard-selected[data-v-628b1b6b]{background-color:rgba(0,0,0,.66)}.datepicker-container .datepicker-days .datepicker-day.selected .datepicker-day-text[data-v-628b1b6b]{color:#fff;font-weight:700}.datepicker-container .datepicker-days .datepicker-day.selected .datepicker-day-effect[data-v-628b1b6b]{-webkit-transform:scale(1);transform:scale(1);opacity:1}.datepicker-container .datepicker-days .datepicker-day.selected .datepicker-day-keyboard-selected[data-v-628b1b6b]{background-color:rgba(0,0,0,.66)}.datepicker-container .datepicker-days .datepicker-day.disabled .datepicker-day-text[data-v-628b1b6b]{color:#ccc}.datepicker-container .datepicker-days .datepicker-day.disabled.selected[data-v-628b1b6b]{color:#fff}.datepicker-container .datepicker-days .datepicker-day.disabled .datepicker-day-effect[data-v-628b1b6b]{-webkit-transform:scale(0);transform:scale(0);opacity:0}.datepicker-container.is-dark .datepicker-days .datepicker-day:not(.between):not(.selected) .datepicker-day-text[data-v-628b1b6b]{color:#fff}.datepicker-container.is-dark .datepicker-days .datepicker-day:not(.between):not(.selected).disabled .datepicker-day-text[data-v-628b1b6b]{color:#757575}.datepicker-container.is-dark .datepicker-label[data-v-628b1b6b]{color:#fff}.datepicker-container.is-dark .text-muted[data-v-628b1b6b]{color:#a8a8a8!important}.datepicker-container.is-dark .datepicker-button svg[data-v-628b1b6b]{fill:#fff}.datepicker-container.is-dark .datepicker-today[data-v-628b1b6b]{background-color:#292929!important}@media screen and (max-width:415px){.datepicker-container[data-v-628b1b6b]{width:100%;-ms-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-ms-flex-flow:column;flex-flow:column;-moz-flex-direction:column}.datepicker-container:not(.inline) .datepicker-controls[data-v-628b1b6b]{height:36px!important}.datepicker-container.range.has-shortcuts[data-v-628b1b6b]{width:100%}}.time-picker-column[data-v-683a4ef0]::-webkit-scrollbar{display:none}.time-picker[data-v-683a4ef0]{width:160px;max-width:160px;position:relative;z-index:1}.time-picker.inline[data-v-683a4ef0]{width:100%;max-width:100%}.time-picker[data-v-683a4ef0]:after,.time-picker[data-v-683a4ef0]:before{content:\"\";top:50%;position:absolute;margin:0 auto;margin-top:-14px;height:30px;z-index:-1;width:85%;left:0;right:0;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:left;border-top:1px solid #ccc;border-bottom:1px solid #ccc}.time-picker-column[data-v-683a4ef0]{position:relative;overflow-y:auto}.time-picker-column-item[data-v-683a4ef0]{height:28px;min-height:28px;padding:0;color:#252525;cursor:pointer;position:relative;border:none;background:transparent;font-size:13px;width:100%;outline:none}.time-picker-column-item-effect[data-v-683a4ef0]{position:absolute;opacity:.6;background:#1e90ff;height:24px;width:70%;top:2px;left:15%;-webkit-transition:all .45s cubic-bezier(.23,1,.32,1) 0ms;transition:all .45s cubic-bezier(.23,1,.32,1) 0ms;-webkit-transform:scale(0);transform:scale(0);border-radius:4px}.time-picker-column-item-effect[data-v-683a4ef0]:hover{-webkit-transform:scale(1);transform:scale(1)}.time-picker-column-item-text[data-v-683a4ef0]{position:relative}.time-picker-column-item:hover .time-picker-column-item-text[data-v-683a4ef0]{color:#fff;-webkit-transition:all .45s cubic-bezier(.23,1,.32,1) 0ms;transition:all .45s cubic-bezier(.23,1,.32,1) 0ms}.time-picker-column-item:hover .time-picker-column-item-effect[data-v-683a4ef0]{-webkit-transform:scale(1);transform:scale(1)}.time-picker-column-item.active[data-v-683a4ef0]{color:#fff;font-weight:700}.time-picker-column-item.active .time-picker-column-item-effect[data-v-683a4ef0]{-webkit-transform:scale(1);transform:scale(1);opacity:1}.time-picker-column-item.disabled .time-picker-column-item-text[data-v-683a4ef0]{color:#ccc}.time-picker-column-item.disabled .time-picker-column-item-text[data-v-683a4ef0]:hover{color:#ccc!important}.time-picker-column-item.disabled .time-picker-column-item-effect[data-v-683a4ef0]{-webkit-transform:scale(0)!important;transform:scale(0)!important;opacity:0!important}.time-picker-column-item.disabled.active .time-picker-column-item-effect[data-v-683a4ef0]{background-color:#eaeaea!important;-webkit-transform:scale(1)!important;transform:scale(1)!important;opacity:1!important}.time-picker.with-border[data-v-683a4ef0]{border-left:1px solid #eaeaea}.time-picker.with-border.is-dark[data-v-683a4ef0]{border-left:1px solid #757575}.time-picker.is-dark .time-picker-column-item-text[data-v-683a4ef0]{color:#fff}@media screen and (max-width:415px){.time-picker.inline[data-v-683a4ef0]{-webkit-box-flex:1;-ms-flex:auto;flex:auto;border-left:none}.time-picker[data-v-683a4ef0]:not(.inline){border:0;border-top:1px solid #eaeaea;width:100%;max-width:100%;height:unset!important;overflow:hidden}.time-picker:not(.inline).dark[data-v-683a4ef0]{border-top:1px solid #757575}.timepicker-container.is-dark[data-v-683a4ef0]{border-color:#757575}}.header-picker[data-v-6d49f11d]{background:#fff;border-bottom:1px solid #eaeaea;color:#fff;position:relative}.header-picker-year[data-v-6d49f11d]{opacity:.7;margin-bottom:5px;font-size:14px;line-height:14px;position:relative;height:14px}.header-picker-date[data-v-6d49f11d],.header-picker-hour[data-v-6d49f11d],.header-picker-minute[data-v-6d49f11d],.header-picker-range[data-v-6d49f11d],.header-picker-time[data-v-6d49f11d]{font-size:18px;line-height:18px;position:relative;height:18px}.header-picker-date[data-v-6d49f11d]{text-transform:capitalize}.header-picker-hour.twelve[data-v-6d49f11d]{min-width:74px}.header-picker .pl-10[data-v-6d49f11d]{padding-left:10px}.header-picker .time-number[data-v-6d49f11d]{width:22px}.header-picker.is-dark[data-v-6d49f11d]{border:0;color:#fff!important}.datepicker-buttons-container[data-v-601c6e79]{padding:5px;border-top:1px solid #eaeaea;background-color:#fff;z-index:1;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}.datepicker-buttons-container .datepicker-button[data-v-601c6e79]{padding:0 20px;position:relative;background-color:#fff;border:1px solid transparent;border-radius:4px;height:30px;font-size:14px;outline:none;cursor:pointer;-webkit-transition:all .25s cubic-bezier(.645,.045,.355,1);color:#fff;font-weight:500}.datepicker-buttons-container .datepicker-button-content[data-v-601c6e79]{position:relative}.datepicker-buttons-container .datepicker-button svg[data-v-601c6e79]{position:relative;-webkit-transition:all .45s cubic-bezier(.23,1,.32,1) 0ms;transition:all .45s cubic-bezier(.23,1,.32,1) 0ms;fill:#00c853}.datepicker-buttons-container .datepicker-button .datepicker-button-effect[data-v-601c6e79]{position:absolute;background:#00c853;top:0;left:0;bottom:0;right:0;height:30px;border-radius:4px;width:100%;-webkit-transition:all .45s cubic-bezier(.23,1,.32,1) 0ms;transition:all .45s cubic-bezier(.23,1,.32,1) 0ms;-webkit-transform:scale(0);transform:scale(0)}.datepicker-buttons-container .datepicker-button[data-v-601c6e79]:hover{border:1px solid transparent}.datepicker-buttons-container .datepicker-button:hover .datepicker-button-effect[data-v-601c6e79]{-webkit-transform:scale(1);transform:scale(1)}.datepicker-buttons-container .datepicker-button:hover svg[data-v-601c6e79]{fill:#fff!important}.datepicker-buttons-container .datepicker-button:hover .datepicker-button-content[data-v-601c6e79]{color:#fff!important}.datepicker-buttons-container .datepicker-button.now.right-margin[data-v-601c6e79]{margin-right:10px}.datepicker-buttons-container .datepicker-button.now .datepicker-button-content[data-v-601c6e79]{color:#1e90ff}.datepicker-buttons-container .datepicker-button.now .datepicker-button-effect[data-v-601c6e79]{background:#1e90ff}.datepicker-buttons-container .datepicker-button.validate[data-v-601c6e79]{border:1px solid #eaeaea}.datepicker-buttons-container.is-dark .datepicker-button[data-v-601c6e79],.datepicker-buttons-container.is-dark[data-v-601c6e79]{background-color:#424242}.datepicker-buttons-container.is-dark .datepicker-button[data-v-601c6e79]:not(.now),.datepicker-buttons-container.is-dark[data-v-601c6e79]:not(.now){border-color:#757575}.datepicker-buttons-container.is-dark .datepicker-button svg[data-v-601c6e79],.datepicker-buttons-container.is-dark svg[data-v-601c6e79]{fill:#fff!important}.datetimepicker[data-v-6e81f291]{position:absolute;z-index:9;width:100%}.datetimepicker.visible[data-v-6e81f291]{z-index:999}.datetimepicker .datepicker[data-v-6e81f291]{position:absolute;z-index:5;border-radius:4px;overflow:hidden;background:#fff;-webkit-box-shadow:0 2px 12px 0 rgba(0,0,0,.1);box-shadow:0 2px 12px 0 rgba(0,0,0,.1);max-width:400px}.datetimepicker .datepicker .pickers-container[data-v-6e81f291]{background:#fff;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.datetimepicker .datepicker.right[data-v-6e81f291]{right:0}.datetimepicker.is-dark .datepicker[data-v-6e81f291],.datetimepicker.is-dark .pickers-container[data-v-6e81f291]{background:#424242;border:0}.inline .datepicker[data-v-6e81f291],.inline.datetimepicker[data-v-6e81f291]{position:relative}.inline .datepicker[data-v-6e81f291]{margin-bottom:0!important;box-shadow:none;-webkit-box-shadow:none;width:100%;max-width:100%;background-color:#fff}@media screen and (max-width:415px){.pickers-container[data-v-6e81f291]{-ms-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-ms-flex-flow:column;flex-flow:column;-moz-flex-direction:column;height:100%}.datepicker-container[data-v-6e81f291]{width:100%}.datepicker-container.has-shortcuts[data-v-6e81f291]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.datetimepicker[data-v-6e81f291]:not(.inline){margin:0!important;position:absolute;top:0!important;bottom:0;right:0;left:0}.datetimepicker:not(.inline) .datepicker[data-v-6e81f291]{border-radius:0!important;bottom:0!important;top:0!important;left:0!important;right:0!important;width:100%!important;max-width:inherit!important;min-width:inherit!important;position:fixed;height:100%;margin:0!important}}.date-time-picker{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#2c3e50}.date-time-picker,.date-time-picker input,.date-time-picker label,.date-time-picker p,.date-time-picker span{font-family:Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif}.date-time-picker .fluid{width:100%}.date-time-picker .fill-height{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;height:100%;-webkit-box-flex:1;-ms-flex:1 1 100%;flex:1 1 100%}.date-time-picker .spacer{-webkit-box-flex:1!important;-ms-flex-positive:1!important;flex-grow:1!important}.date-time-picker .align-center{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.date-time-picker .flex{display:-webkit-box;display:-ms-flexbox;display:flex}.date-time-picker .flex-start{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;justify-content:flex-start;-ms-flex-pack:start;-moz-box-align:start;-moz-box-pack:start;-webkit-box-pack:start;-webkit-justify-content:flex-start}.date-time-picker .flex-end{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;justify-content:flex-end;-ms-flex-pack:end;-moz-box-align:end;-moz-box-pack:end;-webkit-box-pack:end;-webkit-justify-content:flex-end}.date-time-picker .flex-direction-column{-ms-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-ms-flex-flow:column;flex-flow:column;-moz-flex-direction:column}.date-time-picker .flex-direction-column-reverse{-ms-flex-direction:column-reverse;-webkit-box-orient:vertical;-webkit-box-direction:reverse;flex-direction:column-reverse;-ms-flex-flow:column-reverse;flex-flow:column-reverse;-moz-flex-direction:column-reverse}.date-time-picker .flex-direction-row{-ms-flex-direction:row;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-ms-flex-flow:row;flex-flow:row;-moz-flex-direction:row}.date-time-picker .justify-content-end,.date-time-picker .justify-content-right{justify-content:flex-end;-ms-flex-pack:end;-moz-box-align:end;-moz-box-pack:end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-webkit-box-align:end}.date-time-picker .justify-content-center{justify-content:center;-ms-flex-pack:center;-moz-box-align:center;-moz-box-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-webkit-box-align:center}.date-time-picker .justify-content-between{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.date-time-picker .justify-content-around,.date-time-picker .justify-content-between{-ms-flex-pack:justify;-moz-box-align:stretch;-moz-box-pack:justify;-webkit-box-pack:justify;-webkit-justify-content:space-between;-webkit-box-align:stretch}.date-time-picker .justify-content-around{-ms-flex-pack:distribute;justify-content:space-around}.date-time-picker .flex-fill{-moz-flex:0 1 auto;-ms-flex:0 1 auto;-webkit-box-flex:0;flex:0 1 auto}.date-time-picker .flex-fixed{-moz-flex:0 0 auto;-ms-flex:0 0 auto;-webkit-box-flex:0;flex:0 0 auto}.date-time-picker .flex-1{-webkit-box-flex:1;-moz-flex:1;-ms-flex:1;flex:1}.date-time-picker .flex-wrap{-ms-flex-wrap:wrap;flex-wrap:wrap}.date-time-picker .flex-grow{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.date-time-picker .lm-fs-12{font-size:12px!important}.date-time-picker .lm-fs-14{font-size:14px!important}.date-time-picker .lm-fs-16{font-size:16px!important}.date-time-picker .lm-fs-18{font-size:18px!important}.date-time-picker .lm-fw-300{font-weight:300}.date-time-picker .lm-fw-400{font-weight:400}.date-time-picker .lm-fw-500{font-weight:500}.date-time-picker .container{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:576px){.date-time-picker .container{max-width:540px}}@media (min-width:768px){.date-time-picker .container{max-width:720px}}@media (min-width:992px){.date-time-picker .container{max-width:960px}}@media (min-width:1200px){.date-time-picker .container{max-width:1140px}}.date-time-picker .lm-pr-1{padding-right:.25rem!important}.date-time-picker .lm-pt-1{padding-top:.25rem!important}.date-time-picker .lm-pb-1{padding-bottom:.25rem!important}.date-time-picker .lm-pl-1,.date-time-picker .lm-px-1{padding-left:.25rem!important}.date-time-picker .lm-px-1{padding-right:.25rem!important}.date-time-picker .lm-py-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.date-time-picker .lm-p-1{padding:.25rem!important}.date-time-picker .lm-pr-2{padding-right:.5rem!important}.date-time-picker .lm-pt-2{padding-top:.5rem!important}.date-time-picker .lm-pb-2{padding-bottom:.5rem!important}.date-time-picker .lm-pl-2,.date-time-picker .lm-px-2{padding-left:.5rem!important}.date-time-picker .lm-px-2{padding-right:.5rem!important}.date-time-picker .lm-py-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.date-time-picker .lm-p-2{padding:.5rem!important}.date-time-picker .lm-pr-3{padding-right:1rem!important}.date-time-picker .lm-pt-3{padding-top:1rem!important}.date-time-picker .lm-pb-3{padding-bottom:1rem!important}.date-time-picker .lm-pl-3,.date-time-picker .lm-px-3{padding-left:1rem!important}.date-time-picker .lm-px-3{padding-right:1rem!important}.date-time-picker .lm-py-3{padding-top:1rem!important;padding-bottom:1rem!important}.date-time-picker .lm-p-3{padding:1rem!important}.date-time-picker .lm-pr-4{padding-right:1.5rem!important}.date-time-picker .lm-pt-4{padding-top:1.5rem!important}.date-time-picker .lm-pb-4{padding-bottom:1.5rem!important}.date-time-picker .lm-pl-4,.date-time-picker .lm-px-4{padding-left:1.5rem!important}.date-time-picker .lm-px-4{padding-right:1.5rem!important}.date-time-picker .lm-py-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.date-time-picker .lm-p-4{padding:1.5rem!important}.date-time-picker .lm-pr-5{padding-right:3rem!important}.date-time-picker .lm-pt-5{padding-top:3rem!important}.date-time-picker .lm-pb-5{padding-bottom:3rem!important}.date-time-picker .lm-pl-5,.date-time-picker .lm-px-5{padding-left:3rem!important}.date-time-picker .lm-px-5{padding-right:3rem!important}.date-time-picker .lm-py-5{padding-top:3rem!important;padding-bottom:3rem!important}.date-time-picker .lm-p-5{padding:3rem!important}.date-time-picker .lm-mr-1{margin-right:.25rem!important}.date-time-picker .lm-mt-1{margin-top:.25rem!important}.date-time-picker .lm-mb-1{margin-bottom:.25rem!important}.date-time-picker .lm-ml-1,.date-time-picker .lm-mx-1{margin-left:.25rem!important}.date-time-picker .lm-mx-1{margin-right:.25rem!important}.date-time-picker .lm-my-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.date-time-picker .lm-m-1{margin:.25rem!important}.date-time-picker .lm-mr-2{margin-right:.5rem!important}.date-time-picker .lm-mt-2{margin-top:.5rem!important}.date-time-picker .lm-mb-2{margin-bottom:.5rem!important}.date-time-picker .lm-ml-2,.date-time-picker .lm-mx-2{margin-left:.5rem!important}.date-time-picker .lm-mx-2{margin-right:.5rem!important}.date-time-picker .lm-my-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.date-time-picker .lm-m-2{margin:.5rem!important}.date-time-picker .lm-mr-3{margin-right:1rem!important}.date-time-picker .lm-mt-3{margin-top:1rem!important}.date-time-picker .lm-mb-3{margin-bottom:1rem!important}.date-time-picker .lm-ml-3{margin-left:1rem!important}.date-time-picker .lm-mx-3{margin-left:1rem!important;margin-right:1rem!important}.date-time-picker .lm-my-3{margin-top:1rem!important;margin-bottom:1rem!important}.date-time-picker .lm-m-3{margin:1rem!important}.date-time-picker .lm-mr-4{margin-right:1.5rem!important}.date-time-picker .lm-mt-4{margin-top:1.5rem!important}.date-time-picker .lm-mb-4{margin-bottom:1.5rem!important}.date-time-picker .lm-ml-4,.date-time-picker .lm-mx-4{margin-left:1.5rem!important}.date-time-picker .lm-mx-4{margin-right:1.5rem!important}.date-time-picker .lm-my-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.date-time-picker .lm-m-4{margin:1.5rem!important}.date-time-picker .lm-mr-5{margin-right:3rem!important}.date-time-picker .lm-mt-5{margin-top:3rem!important}.date-time-picker .lm-mb-5{margin-bottom:3rem!important}.date-time-picker .lm-ml-5{margin-left:3rem!important}.date-time-picker .lm-mx-5{margin-left:3rem!important;margin-right:3rem!important}.date-time-picker .lm-my-5{margin-top:3rem!important;margin-bottom:3rem!important}.date-time-picker .lm-m-5{margin:3rem!important}.date-time-picker .lm-btn{padding:10px 20px;margin-bottom:20px;border:none;display:inline-block;border-radius:4px;text-decoration:none;font-size:12px;outline:none;cursor:pointer;-webkit-transition:all .25s cubic-bezier(.645,.045,.355,1);transition:all .25s cubic-bezier(.645,.045,.355,1);background-color:#1e90ff;color:#fff;font-weight:500}.date-time-picker .lm-btn:hover{background-color:#0077ea;-webkit-box-shadow:0 0 8px 0 rgba(232,237,250,.6),0 2px 4px 0 rgba(232,237,250,.5);box-shadow:0 0 8px 0 rgba(232,237,250,.6),0 2px 4px 0 rgba(232,237,250,.5)}.date-time-picker .lm-btn.option{background-color:#424242}.date-time-picker .lm-btn.option:hover{background-color:#292929}.date-time-picker .lm-btn-success{background-color:#9acd32}.date-time-picker .lm-btn-success:hover{background-color:#7ba428}.date-time-picker .lm-btn-dark{background-color:#424242}.date-time-picker .lm-btn-dark:hover{background-color:#292929}.date-time-picker .lm-btn-danger{background-color:#ff4500}.date-time-picker .lm-btn-danger:hover{background-color:#cc3700}.date-time-picker .dark .lm-btn:hover{-webkit-box-shadow:0 0 8px 0 rgba(0,0,0,.6),0 2px 4px 0 rgba(0,0,0,.5);box-shadow:0 0 8px 0 rgba(0,0,0,.6),0 2px 4px 0 rgba(0,0,0,.5)}.date-time-picker .dark .lm-btn.option{background-color:#424242}.date-time-picker .dark .lm-btn.option:hover{background-color:#5c5c5c}.date-time-picker .slide-enter-active,.date-time-picker .slide-leave-active{opacity:1;z-index:998;-webkit-transition:all .3s;transition:all .3s;-webkit-transform:translateY(0);transform:translateY(0)}.date-time-picker .slide-enter,.date-time-picker .slide-leave-to{opacity:0;z-index:998;-webkit-transform:translateY(-20px);transform:translateY(-20px)}.date-time-picker .slideinvert-enter-active,.date-time-picker .slideinvert-leave-active{opacity:1;z-index:998;-webkit-transition:all .3s;transition:all .3s;-webkit-transform:translateY(0);transform:translateY(0)}.date-time-picker .slideinvert-enter,.date-time-picker .slideinvert-leave-to{opacity:0;z-index:998;-webkit-transform:translateY(40px);transform:translateY(40px)}.date-time-picker .slidenext-enter-active,.date-time-picker .slidenext-leave-active,.date-time-picker .slideprev-enter-active,.date-time-picker .slideprev-leave-active{position:absolute;-webkit-transition:all .3s;transition:all .3s}.date-time-picker .slidenext-enter,.date-time-picker .slideprev-leave-to{-webkit-transform:translateX(100%);transform:translateX(100%)}.date-time-picker .slidenext-leave-to,.date-time-picker .slideprev-enter{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.date-time-picker .slidevnext-enter-active,.date-time-picker .slidevnext-leave-active,.date-time-picker .slidevprev-enter-active,.date-time-picker .slidevprev-leave-active{position:absolute;-webkit-transition:all .3s;transition:all .3s}.date-time-picker .slidevnext-enter,.date-time-picker .slidevprev-leave-to{-webkit-transform:translateY(100%);transform:translateY(100%);opacity:0}.date-time-picker .slidevnext-leave-to,.date-time-picker .slidevprev-enter{-webkit-transform:translateY(-100%);transform:translateY(-100%);opacity:0}@media screen and (max-width:415px){.date-time-picker .slide-enter-active,.date-time-picker .slide-leave-active,.date-time-picker .slideinvert-enter-active,.date-time-picker .slideinvert-leave-active{-webkit-transition:all 0s;transition:all 0s}}.date-time-picker .lm-text-white{color:#fff}.date-time-picker .lm-dots-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.date-time-picker .lm-text-muted{color:rgba(0,0,0,.54)!important}.date-time-picker .lm-text-strong{font-weight:500}.date-time-picker .lm-text-center{text-align:center!important}.date-time-picker .lm-text-left{text-align:left!important}.date-time-picker .lm-text-right{text-align:right!important}.date-time-picker .lm-h-100{height:100%!important}.date-time-picker .lm-mh-100{max-height:100%!important}.date-time-picker .lm-w-100{width:100%!important}.date-time-picker .lm-mw-100{max-width:100%!important}.date-time-picker *,.date-time-picker :after,.date-time-picker :before{-webkit-box-sizing:border-box;box-sizing:border-box}.date-time-picker{width:100%;margin:0 auto;text-align:left;font-size:14px;border-radius:4px;position:relative}.date-time-picker .time-picker-overlay{z-index:2;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.4)}@media screen and (max-width:415px){.time-picker-overlay{display:none}.date-time-picker:not(.inline){position:inherit!important}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "65f0":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var isArray = __webpack_require__("e8b5");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("7f9a");
var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");
var objectHas = __webpack_require__("5135");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6dfc":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("bdd7");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("acc59edc", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "6eeb":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var setGlobal = __webpack_require__("ce4e");
var inspectSource = __webpack_require__("8925");
var InternalStateModule = __webpack_require__("69f3");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "6f5e":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("0828");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("09d7ccd6", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "7156":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var setPrototypeOf = __webpack_require__("d2bb");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "7418":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "746f":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var has = __webpack_require__("5135");
var wrappedWellKnownSymbolModule = __webpack_require__("e538");
var defineProperty = __webpack_require__("9bf2").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "7839":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "7b0b":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "7c73":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var defineProperties = __webpack_require__("37e8");
var enumBugKeys = __webpack_require__("7839");
var hiddenKeys = __webpack_require__("d012");
var html = __webpack_require__("1be4");
var documentCreateElement = __webpack_require__("cc12");
var sharedKey = __webpack_require__("f772");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "7dd0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var createIteratorConstructor = __webpack_require__("9ed3");
var getPrototypeOf = __webpack_require__("e163");
var setPrototypeOf = __webpack_require__("d2bb");
var setToStringTag = __webpack_require__("d44e");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");
var Iterators = __webpack_require__("3f8c");
var IteratorsCore = __webpack_require__("ae93");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "7f9a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var inspectSource = __webpack_require__("8925");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "8418":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__("c04e");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "861d":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "8925":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("c6cd");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "8aa5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "90e3":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "9263":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__("ad6d");
var stickyHelpers = __webpack_require__("9f7f");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "95c3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cropperjs = __webpack_require__("bab4");

var _cropperjs2 = _interopRequireDefault(_cropperjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var previewPropType = typeof window === 'undefined' ? [String, Array] : [String, Array, Element, NodeList];

exports.default = {
  render: function render(h) {
    return h('div', { style: this.containerStyle }, [h('img', {
      ref: 'img',
      attrs: {
        src: this.src,
        alt: this.alt || 'image',
        style: 'max-width: 100%'
      },
      style: this.imgStyle
    })]);
  },

  props: {
    containerStyle: Object,
    src: {
      type: String,
      default: ''
    },
    alt: String,
    imgStyle: Object,

    viewMode: Number,
    dragMode: String,
    aspectRatio: Number,
    data: Object,
    preview: previewPropType,
    responsive: {
      type: Boolean,
      default: true
    },
    restore: {
      type: Boolean,
      default: true
    },
    checkCrossOrigin: {
      type: Boolean,
      default: true
    },
    checkOrientation: {
      type: Boolean,
      default: true
    },
    modal: {
      type: Boolean,
      default: true
    },
    guides: {
      type: Boolean,
      default: true
    },
    center: {
      type: Boolean,
      default: true
    },
    highlight: {
      type: Boolean,
      default: true
    },
    background: {
      type: Boolean,
      default: true
    },
    autoCrop: {
      type: Boolean,
      default: true
    },
    autoCropArea: Number,
    movable: {
      type: Boolean,
      default: true
    },
    rotatable: {
      type: Boolean,
      default: true
    },
    scalable: {
      type: Boolean,
      default: true
    },
    zoomable: {
      type: Boolean,
      default: true
    },
    zoomOnTouch: {
      type: Boolean,
      default: true
    },
    zoomOnWheel: {
      type: Boolean,
      default: true
    },
    wheelZoomRatio: Number,
    cropBoxMovable: {
      type: Boolean,
      default: true
    },
    cropBoxResizable: {
      type: Boolean,
      default: true
    },
    toggleDragModeOnDblclick: {
      type: Boolean,
      default: true
    },

    minCanvasWidth: Number,
    minCanvasHeight: Number,
    minCropBoxWidth: Number,
    minCropBoxHeight: Number,
    minContainerWidth: Number,
    minContainerHeight: Number,

    ready: Function,
    cropstart: Function,
    cropmove: Function,
    cropend: Function,
    crop: Function,
    zoom: Function
  },
  mounted: function mounted() {
    var _$options$props = this.$options.props,
        containerStyle = _$options$props.containerStyle,
        src = _$options$props.src,
        alt = _$options$props.alt,
        imgStyle = _$options$props.imgStyle,
        data = _objectWithoutProperties(_$options$props, ['containerStyle', 'src', 'alt', 'imgStyle']);

    var props = {};

    for (var key in data) {
      if (this[key] !== undefined) {
        props[key] = this[key];
      }
    }

    this.cropper = new _cropperjs2.default(this.$refs.img, props);
  },

  methods: {
    reset: function reset() {
      return this.cropper.reset();
    },
    clear: function clear() {
      return this.cropper.clear();
    },
    initCrop: function initCrop() {
      return this.cropper.crop();
    },
    replace: function replace(url) {
      var onlyColorChanged = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      return this.cropper.replace(url, onlyColorChanged);
    },
    enable: function enable() {
      return this.cropper.enable();
    },
    disable: function disable() {
      return this.cropper.disable();
    },
    destroy: function destroy() {
      return this.cropper.destroy();
    },
    move: function move(offsetX, offsetY) {
      return this.cropper.move(offsetX, offsetY);
    },
    moveTo: function moveTo(x) {
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;

      return this.cropper.moveTo(x, y);
    },
    relativeZoom: function relativeZoom(ratio, _originalEvent) {
      return this.cropper.zoom(ratio, _originalEvent);
    },
    zoomTo: function zoomTo(ratio, _originalEvent) {
      return this.cropper.zoomTo(ratio, _originalEvent);
    },
    rotate: function rotate(degree) {
      return this.cropper.rotate(degree);
    },
    rotateTo: function rotateTo(degree) {
      return this.cropper.rotateTo(degree);
    },
    scaleX: function scaleX(_scaleX) {
      return this.cropper.scaleX(_scaleX);
    },
    scaleY: function scaleY(_scaleY) {
      return this.cropper.scaleY(_scaleY);
    },
    scale: function scale(scaleX) {
      var scaleY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : scaleX;

      return this.cropper.scale(scaleX, scaleY);
    },
    getData: function getData() {
      var rounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      return this.cropper.getData(rounded);
    },
    setData: function setData(data) {
      return this.cropper.setData(data);
    },
    getContainerData: function getContainerData() {
      return this.cropper.getContainerData();
    },
    getImageData: function getImageData() {
      return this.cropper.getImageData();
    },
    getCanvasData: function getCanvasData() {
      return this.cropper.getCanvasData();
    },
    setCanvasData: function setCanvasData(data) {
      return this.cropper.setCanvasData(data);
    },
    getCropBoxData: function getCropBoxData() {
      return this.cropper.getCropBoxData();
    },
    setCropBoxData: function setCropBoxData(data) {
      return this.cropper.setCropBoxData(data);
    },
    getCroppedCanvas: function getCroppedCanvas() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.cropper.getCroppedCanvas(options);
    },
    setAspectRatio: function setAspectRatio(aspectRatio) {
      return this.cropper.setAspectRatio(aspectRatio);
    },
    setDragMode: function setDragMode(mode) {
      return this.cropper.setDragMode(mode);
    }
  }
};

/***/ }),

/***/ "9bdd":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};


/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var anObject = __webpack_require__("825a");
var toPrimitive = __webpack_require__("c04e");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9cda":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageEditor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6f5e");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageEditor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageEditor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageEditor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9ed3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__("ae93").IteratorPrototype;
var create = __webpack_require__("7c73");
var createPropertyDescriptor = __webpack_require__("5c6c");
var setToStringTag = __webpack_require__("d44e");
var Iterators = __webpack_require__("3f8c");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "9f7f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__("d039");

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "a434":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var toAbsoluteIndex = __webpack_require__("23cb");
var toInteger = __webpack_require__("a691");
var toLength = __webpack_require__("50c4");
var toObject = __webpack_require__("7b0b");
var arraySpeciesCreate = __webpack_require__("65f0");
var createProperty = __webpack_require__("8418");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');
var USES_TO_LENGTH = arrayMethodUsesToLength('splice', { ACCESSORS: true, 0: 0, 1: 2 });

var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = toLength(O.length);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});


/***/ }),

/***/ "a4d3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var getBuiltIn = __webpack_require__("d066");
var IS_PURE = __webpack_require__("c430");
var DESCRIPTORS = __webpack_require__("83ab");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");
var fails = __webpack_require__("d039");
var has = __webpack_require__("5135");
var isArray = __webpack_require__("e8b5");
var isObject = __webpack_require__("861d");
var anObject = __webpack_require__("825a");
var toObject = __webpack_require__("7b0b");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var createPropertyDescriptor = __webpack_require__("5c6c");
var nativeObjectCreate = __webpack_require__("7c73");
var objectKeys = __webpack_require__("df75");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertyNamesExternal = __webpack_require__("057f");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var shared = __webpack_require__("5692");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");
var uid = __webpack_require__("90e3");
var wellKnownSymbol = __webpack_require__("b622");
var wrappedWellKnownSymbolModule = __webpack_require__("e538");
var defineWellKnownSymbol = __webpack_require__("746f");
var setToStringTag = __webpack_require__("d44e");
var InternalStateModule = __webpack_require__("69f3");
var $forEach = __webpack_require__("b727").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "a640":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "a691":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "a9e3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var isForced = __webpack_require__("94ca");
var redefine = __webpack_require__("6eeb");
var has = __webpack_require__("5135");
var classof = __webpack_require__("c6b6");
var inheritIfRequired = __webpack_require__("7156");
var toPrimitive = __webpack_require__("c04e");
var fails = __webpack_require__("d039");
var create = __webpack_require__("7c73");
var getOwnPropertyNames = __webpack_require__("241c").f;
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var defineProperty = __webpack_require__("9bf2").f;
var trim = __webpack_require__("58a8").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.github.io/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.github.io/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "ac1f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var exec = __webpack_require__("9263");

$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "ad6d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("825a");

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "ae40":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var has = __webpack_require__("5135");

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),

/***/ "ae93":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__("e163");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "b041":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classof = __webpack_require__("f5df");

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "b0c0":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var defineProperty = __webpack_require__("9bf2").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "b40d":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("65d0");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("5957d264", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "b575":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var classof = __webpack_require__("c6b6");
var macrotask = __webpack_require__("2cf4").set;
var IS_IOS = __webpack_require__("1cdc");

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var IS_NODE = classof(process) == 'process';
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  } else if (MutationObserver && !IS_IOS) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    then = promise.then;
    notify = function () {
      then.call(promise, flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),

/***/ "b622":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var shared = __webpack_require__("5692");
var has = __webpack_require__("5135");
var uid = __webpack_require__("90e3");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "b64b":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var toObject = __webpack_require__("7b0b");
var nativeKeys = __webpack_require__("df75");
var fails = __webpack_require__("d039");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "b727":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("0366");
var IndexedObject = __webpack_require__("44ad");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var arraySpeciesCreate = __webpack_require__("65f0");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),

/***/ "bab4":
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Cropper.js v1.5.6
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2019-10-04T04:33:48.372Z
 */

(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, function () { 'use strict';

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
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

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(source, true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(source).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  var IS_BROWSER = typeof window !== 'undefined' && typeof window.document !== 'undefined';
  var WINDOW = IS_BROWSER ? window : {};
  var IS_TOUCH_DEVICE = IS_BROWSER ? 'ontouchstart' in WINDOW.document.documentElement : false;
  var HAS_POINTER_EVENT = IS_BROWSER ? 'PointerEvent' in WINDOW : false;
  var NAMESPACE = 'cropper'; // Actions

  var ACTION_ALL = 'all';
  var ACTION_CROP = 'crop';
  var ACTION_MOVE = 'move';
  var ACTION_ZOOM = 'zoom';
  var ACTION_EAST = 'e';
  var ACTION_WEST = 'w';
  var ACTION_SOUTH = 's';
  var ACTION_NORTH = 'n';
  var ACTION_NORTH_EAST = 'ne';
  var ACTION_NORTH_WEST = 'nw';
  var ACTION_SOUTH_EAST = 'se';
  var ACTION_SOUTH_WEST = 'sw'; // Classes

  var CLASS_CROP = "".concat(NAMESPACE, "-crop");
  var CLASS_DISABLED = "".concat(NAMESPACE, "-disabled");
  var CLASS_HIDDEN = "".concat(NAMESPACE, "-hidden");
  var CLASS_HIDE = "".concat(NAMESPACE, "-hide");
  var CLASS_INVISIBLE = "".concat(NAMESPACE, "-invisible");
  var CLASS_MODAL = "".concat(NAMESPACE, "-modal");
  var CLASS_MOVE = "".concat(NAMESPACE, "-move"); // Data keys

  var DATA_ACTION = "".concat(NAMESPACE, "Action");
  var DATA_PREVIEW = "".concat(NAMESPACE, "Preview"); // Drag modes

  var DRAG_MODE_CROP = 'crop';
  var DRAG_MODE_MOVE = 'move';
  var DRAG_MODE_NONE = 'none'; // Events

  var EVENT_CROP = 'crop';
  var EVENT_CROP_END = 'cropend';
  var EVENT_CROP_MOVE = 'cropmove';
  var EVENT_CROP_START = 'cropstart';
  var EVENT_DBLCLICK = 'dblclick';
  var EVENT_TOUCH_START = IS_TOUCH_DEVICE ? 'touchstart' : 'mousedown';
  var EVENT_TOUCH_MOVE = IS_TOUCH_DEVICE ? 'touchmove' : 'mousemove';
  var EVENT_TOUCH_END = IS_TOUCH_DEVICE ? 'touchend touchcancel' : 'mouseup';
  var EVENT_POINTER_DOWN = HAS_POINTER_EVENT ? 'pointerdown' : EVENT_TOUCH_START;
  var EVENT_POINTER_MOVE = HAS_POINTER_EVENT ? 'pointermove' : EVENT_TOUCH_MOVE;
  var EVENT_POINTER_UP = HAS_POINTER_EVENT ? 'pointerup pointercancel' : EVENT_TOUCH_END;
  var EVENT_READY = 'ready';
  var EVENT_RESIZE = 'resize';
  var EVENT_WHEEL = 'wheel';
  var EVENT_ZOOM = 'zoom'; // Mime types

  var MIME_TYPE_JPEG = 'image/jpeg'; // RegExps

  var REGEXP_ACTIONS = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/;
  var REGEXP_DATA_URL = /^data:/;
  var REGEXP_DATA_URL_JPEG = /^data:image\/jpeg;base64,/;
  var REGEXP_TAG_NAME = /^img|canvas$/i; // Misc
  // Inspired by the default width and height of a canvas element.

  var MIN_CONTAINER_WIDTH = 200;
  var MIN_CONTAINER_HEIGHT = 100;

  var DEFAULTS = {
    // Define the view mode of the cropper
    viewMode: 0,
    // 0, 1, 2, 3
    // Define the dragging mode of the cropper
    dragMode: DRAG_MODE_CROP,
    // 'crop', 'move' or 'none'
    // Define the initial aspect ratio of the crop box
    initialAspectRatio: NaN,
    // Define the aspect ratio of the crop box
    aspectRatio: NaN,
    // An object with the previous cropping result data
    data: null,
    // A selector for adding extra containers to preview
    preview: '',
    // Re-render the cropper when resize the window
    responsive: true,
    // Restore the cropped area after resize the window
    restore: true,
    // Check if the current image is a cross-origin image
    checkCrossOrigin: true,
    // Check the current image's Exif Orientation information
    checkOrientation: true,
    // Show the black modal
    modal: true,
    // Show the dashed lines for guiding
    guides: true,
    // Show the center indicator for guiding
    center: true,
    // Show the white modal to highlight the crop box
    highlight: true,
    // Show the grid background
    background: true,
    // Enable to crop the image automatically when initialize
    autoCrop: true,
    // Define the percentage of automatic cropping area when initializes
    autoCropArea: 0.8,
    // Enable to move the image
    movable: true,
    // Enable to rotate the image
    rotatable: true,
    // Enable to scale the image
    scalable: true,
    // Enable to zoom the image
    zoomable: true,
    // Enable to zoom the image by dragging touch
    zoomOnTouch: true,
    // Enable to zoom the image by wheeling mouse
    zoomOnWheel: true,
    // Define zoom ratio when zoom the image by wheeling mouse
    wheelZoomRatio: 0.1,
    // Enable to move the crop box
    cropBoxMovable: true,
    // Enable to resize the crop box
    cropBoxResizable: true,
    // Toggle drag mode between "crop" and "move" when click twice on the cropper
    toggleDragModeOnDblclick: true,
    // Size limitation
    minCanvasWidth: 0,
    minCanvasHeight: 0,
    minCropBoxWidth: 0,
    minCropBoxHeight: 0,
    minContainerWidth: 200,
    minContainerHeight: 100,
    // Shortcuts of events
    ready: null,
    cropstart: null,
    cropmove: null,
    cropend: null,
    crop: null,
    zoom: null
  };

  var TEMPLATE = '<div class="cropper-container" touch-action="none">' + '<div class="cropper-wrap-box">' + '<div class="cropper-canvas"></div>' + '</div>' + '<div class="cropper-drag-box"></div>' + '<div class="cropper-crop-box">' + '<span class="cropper-view-box"></span>' + '<span class="cropper-dashed dashed-h"></span>' + '<span class="cropper-dashed dashed-v"></span>' + '<span class="cropper-center"></span>' + '<span class="cropper-face"></span>' + '<span class="cropper-line line-e" data-cropper-action="e"></span>' + '<span class="cropper-line line-n" data-cropper-action="n"></span>' + '<span class="cropper-line line-w" data-cropper-action="w"></span>' + '<span class="cropper-line line-s" data-cropper-action="s"></span>' + '<span class="cropper-point point-e" data-cropper-action="e"></span>' + '<span class="cropper-point point-n" data-cropper-action="n"></span>' + '<span class="cropper-point point-w" data-cropper-action="w"></span>' + '<span class="cropper-point point-s" data-cropper-action="s"></span>' + '<span class="cropper-point point-ne" data-cropper-action="ne"></span>' + '<span class="cropper-point point-nw" data-cropper-action="nw"></span>' + '<span class="cropper-point point-sw" data-cropper-action="sw"></span>' + '<span class="cropper-point point-se" data-cropper-action="se"></span>' + '</div>' + '</div>';

  /**
   * Check if the given value is not a number.
   */

  var isNaN = Number.isNaN || WINDOW.isNaN;
  /**
   * Check if the given value is a number.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a number, else `false`.
   */

  function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
  }
  /**
   * Check if the given value is a positive number.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a positive number, else `false`.
   */

  var isPositiveNumber = function isPositiveNumber(value) {
    return value > 0 && value < Infinity;
  };
  /**
   * Check if the given value is undefined.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is undefined, else `false`.
   */

  function isUndefined(value) {
    return typeof value === 'undefined';
  }
  /**
   * Check if the given value is an object.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is an object, else `false`.
   */

  function isObject(value) {
    return _typeof(value) === 'object' && value !== null;
  }
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  /**
   * Check if the given value is a plain object.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a plain object, else `false`.
   */

  function isPlainObject(value) {
    if (!isObject(value)) {
      return false;
    }

    try {
      var _constructor = value.constructor;
      var prototype = _constructor.prototype;
      return _constructor && prototype && hasOwnProperty.call(prototype, 'isPrototypeOf');
    } catch (error) {
      return false;
    }
  }
  /**
   * Check if the given value is a function.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a function, else `false`.
   */

  function isFunction(value) {
    return typeof value === 'function';
  }
  var slice = Array.prototype.slice;
  /**
   * Convert array-like or iterable object to an array.
   * @param {*} value - The value to convert.
   * @returns {Array} Returns a new array.
   */

  function toArray(value) {
    return Array.from ? Array.from(value) : slice.call(value);
  }
  /**
   * Iterate the given data.
   * @param {*} data - The data to iterate.
   * @param {Function} callback - The process function for each element.
   * @returns {*} The original data.
   */

  function forEach(data, callback) {
    if (data && isFunction(callback)) {
      if (Array.isArray(data) || isNumber(data.length)
      /* array-like */
      ) {
          toArray(data).forEach(function (value, key) {
            callback.call(data, value, key, data);
          });
        } else if (isObject(data)) {
        Object.keys(data).forEach(function (key) {
          callback.call(data, data[key], key, data);
        });
      }
    }

    return data;
  }
  /**
   * Extend the given object.
   * @param {*} target - The target object to extend.
   * @param {*} args - The rest objects for merging to the target object.
   * @returns {Object} The extended object.
   */

  var assign = Object.assign || function assign(target) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (isObject(target) && args.length > 0) {
      args.forEach(function (arg) {
        if (isObject(arg)) {
          Object.keys(arg).forEach(function (key) {
            target[key] = arg[key];
          });
        }
      });
    }

    return target;
  };
  var REGEXP_DECIMALS = /\.\d*(?:0|9){12}\d*$/;
  /**
   * Normalize decimal number.
   * Check out {@link http://0.30000000000000004.com/}
   * @param {number} value - The value to normalize.
   * @param {number} [times=100000000000] - The times for normalizing.
   * @returns {number} Returns the normalized number.
   */

  function normalizeDecimalNumber(value) {
    var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100000000000;
    return REGEXP_DECIMALS.test(value) ? Math.round(value * times) / times : value;
  }
  var REGEXP_SUFFIX = /^width|height|left|top|marginLeft|marginTop$/;
  /**
   * Apply styles to the given element.
   * @param {Element} element - The target element.
   * @param {Object} styles - The styles for applying.
   */

  function setStyle(element, styles) {
    var style = element.style;
    forEach(styles, function (value, property) {
      if (REGEXP_SUFFIX.test(property) && isNumber(value)) {
        value = "".concat(value, "px");
      }

      style[property] = value;
    });
  }
  /**
   * Check if the given element has a special class.
   * @param {Element} element - The element to check.
   * @param {string} value - The class to search.
   * @returns {boolean} Returns `true` if the special class was found.
   */

  function hasClass(element, value) {
    return element.classList ? element.classList.contains(value) : element.className.indexOf(value) > -1;
  }
  /**
   * Add classes to the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be added.
   */

  function addClass(element, value) {
    if (!value) {
      return;
    }

    if (isNumber(element.length)) {
      forEach(element, function (elem) {
        addClass(elem, value);
      });
      return;
    }

    if (element.classList) {
      element.classList.add(value);
      return;
    }

    var className = element.className.trim();

    if (!className) {
      element.className = value;
    } else if (className.indexOf(value) < 0) {
      element.className = "".concat(className, " ").concat(value);
    }
  }
  /**
   * Remove classes from the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be removed.
   */

  function removeClass(element, value) {
    if (!value) {
      return;
    }

    if (isNumber(element.length)) {
      forEach(element, function (elem) {
        removeClass(elem, value);
      });
      return;
    }

    if (element.classList) {
      element.classList.remove(value);
      return;
    }

    if (element.className.indexOf(value) >= 0) {
      element.className = element.className.replace(value, '');
    }
  }
  /**
   * Add or remove classes from the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be toggled.
   * @param {boolean} added - Add only.
   */

  function toggleClass(element, value, added) {
    if (!value) {
      return;
    }

    if (isNumber(element.length)) {
      forEach(element, function (elem) {
        toggleClass(elem, value, added);
      });
      return;
    } // IE10-11 doesn't support the second parameter of `classList.toggle`


    if (added) {
      addClass(element, value);
    } else {
      removeClass(element, value);
    }
  }
  var REGEXP_CAMEL_CASE = /([a-z\d])([A-Z])/g;
  /**
   * Transform the given string from camelCase to kebab-case
   * @param {string} value - The value to transform.
   * @returns {string} The transformed value.
   */

  function toParamCase(value) {
    return value.replace(REGEXP_CAMEL_CASE, '$1-$2').toLowerCase();
  }
  /**
   * Get data from the given element.
   * @param {Element} element - The target element.
   * @param {string} name - The data key to get.
   * @returns {string} The data value.
   */

  function getData(element, name) {
    if (isObject(element[name])) {
      return element[name];
    }

    if (element.dataset) {
      return element.dataset[name];
    }

    return element.getAttribute("data-".concat(toParamCase(name)));
  }
  /**
   * Set data to the given element.
   * @param {Element} element - The target element.
   * @param {string} name - The data key to set.
   * @param {string} data - The data value.
   */

  function setData(element, name, data) {
    if (isObject(data)) {
      element[name] = data;
    } else if (element.dataset) {
      element.dataset[name] = data;
    } else {
      element.setAttribute("data-".concat(toParamCase(name)), data);
    }
  }
  /**
   * Remove data from the given element.
   * @param {Element} element - The target element.
   * @param {string} name - The data key to remove.
   */

  function removeData(element, name) {
    if (isObject(element[name])) {
      try {
        delete element[name];
      } catch (error) {
        element[name] = undefined;
      }
    } else if (element.dataset) {
      // #128 Safari not allows to delete dataset property
      try {
        delete element.dataset[name];
      } catch (error) {
        element.dataset[name] = undefined;
      }
    } else {
      element.removeAttribute("data-".concat(toParamCase(name)));
    }
  }
  var REGEXP_SPACES = /\s\s*/;

  var onceSupported = function () {
    var supported = false;

    if (IS_BROWSER) {
      var once = false;

      var listener = function listener() {};

      var options = Object.defineProperty({}, 'once', {
        get: function get() {
          supported = true;
          return once;
        },

        /**
         * This setter can fix a `TypeError` in strict mode
         * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only}
         * @param {boolean} value - The value to set
         */
        set: function set(value) {
          once = value;
        }
      });
      WINDOW.addEventListener('test', listener, options);
      WINDOW.removeEventListener('test', listener, options);
    }

    return supported;
  }();
  /**
   * Remove event listener from the target element.
   * @param {Element} element - The event target.
   * @param {string} type - The event type(s).
   * @param {Function} listener - The event listener.
   * @param {Object} options - The event options.
   */


  function removeListener(element, type, listener) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var handler = listener;
    type.trim().split(REGEXP_SPACES).forEach(function (event) {
      if (!onceSupported) {
        var listeners = element.listeners;

        if (listeners && listeners[event] && listeners[event][listener]) {
          handler = listeners[event][listener];
          delete listeners[event][listener];

          if (Object.keys(listeners[event]).length === 0) {
            delete listeners[event];
          }

          if (Object.keys(listeners).length === 0) {
            delete element.listeners;
          }
        }
      }

      element.removeEventListener(event, handler, options);
    });
  }
  /**
   * Add event listener to the target element.
   * @param {Element} element - The event target.
   * @param {string} type - The event type(s).
   * @param {Function} listener - The event listener.
   * @param {Object} options - The event options.
   */

  function addListener(element, type, listener) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var _handler = listener;
    type.trim().split(REGEXP_SPACES).forEach(function (event) {
      if (options.once && !onceSupported) {
        var _element$listeners = element.listeners,
            listeners = _element$listeners === void 0 ? {} : _element$listeners;

        _handler = function handler() {
          delete listeners[event][listener];
          element.removeEventListener(event, _handler, options);

          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          listener.apply(element, args);
        };

        if (!listeners[event]) {
          listeners[event] = {};
        }

        if (listeners[event][listener]) {
          element.removeEventListener(event, listeners[event][listener], options);
        }

        listeners[event][listener] = _handler;
        element.listeners = listeners;
      }

      element.addEventListener(event, _handler, options);
    });
  }
  /**
   * Dispatch event on the target element.
   * @param {Element} element - The event target.
   * @param {string} type - The event type(s).
   * @param {Object} data - The additional event data.
   * @returns {boolean} Indicate if the event is default prevented or not.
   */

  function dispatchEvent(element, type, data) {
    var event; // Event and CustomEvent on IE9-11 are global objects, not constructors

    if (isFunction(Event) && isFunction(CustomEvent)) {
      event = new CustomEvent(type, {
        detail: data,
        bubbles: true,
        cancelable: true
      });
    } else {
      event = document.createEvent('CustomEvent');
      event.initCustomEvent(type, true, true, data);
    }

    return element.dispatchEvent(event);
  }
  /**
   * Get the offset base on the document.
   * @param {Element} element - The target element.
   * @returns {Object} The offset data.
   */

  function getOffset(element) {
    var box = element.getBoundingClientRect();
    return {
      left: box.left + (window.pageXOffset - document.documentElement.clientLeft),
      top: box.top + (window.pageYOffset - document.documentElement.clientTop)
    };
  }
  var location = WINDOW.location;
  var REGEXP_ORIGINS = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
  /**
   * Check if the given URL is a cross origin URL.
   * @param {string} url - The target URL.
   * @returns {boolean} Returns `true` if the given URL is a cross origin URL, else `false`.
   */

  function isCrossOriginURL(url) {
    var parts = url.match(REGEXP_ORIGINS);
    return parts !== null && (parts[1] !== location.protocol || parts[2] !== location.hostname || parts[3] !== location.port);
  }
  /**
   * Add timestamp to the given URL.
   * @param {string} url - The target URL.
   * @returns {string} The result URL.
   */

  function addTimestamp(url) {
    var timestamp = "timestamp=".concat(new Date().getTime());
    return url + (url.indexOf('?') === -1 ? '?' : '&') + timestamp;
  }
  /**
   * Get transforms base on the given object.
   * @param {Object} obj - The target object.
   * @returns {string} A string contains transform values.
   */

  function getTransforms(_ref) {
    var rotate = _ref.rotate,
        scaleX = _ref.scaleX,
        scaleY = _ref.scaleY,
        translateX = _ref.translateX,
        translateY = _ref.translateY;
    var values = [];

    if (isNumber(translateX) && translateX !== 0) {
      values.push("translateX(".concat(translateX, "px)"));
    }

    if (isNumber(translateY) && translateY !== 0) {
      values.push("translateY(".concat(translateY, "px)"));
    } // Rotate should come first before scale to match orientation transform


    if (isNumber(rotate) && rotate !== 0) {
      values.push("rotate(".concat(rotate, "deg)"));
    }

    if (isNumber(scaleX) && scaleX !== 1) {
      values.push("scaleX(".concat(scaleX, ")"));
    }

    if (isNumber(scaleY) && scaleY !== 1) {
      values.push("scaleY(".concat(scaleY, ")"));
    }

    var transform = values.length ? values.join(' ') : 'none';
    return {
      WebkitTransform: transform,
      msTransform: transform,
      transform: transform
    };
  }
  /**
   * Get the max ratio of a group of pointers.
   * @param {string} pointers - The target pointers.
   * @returns {number} The result ratio.
   */

  function getMaxZoomRatio(pointers) {
    var pointers2 = _objectSpread2({}, pointers);

    var ratios = [];
    forEach(pointers, function (pointer, pointerId) {
      delete pointers2[pointerId];
      forEach(pointers2, function (pointer2) {
        var x1 = Math.abs(pointer.startX - pointer2.startX);
        var y1 = Math.abs(pointer.startY - pointer2.startY);
        var x2 = Math.abs(pointer.endX - pointer2.endX);
        var y2 = Math.abs(pointer.endY - pointer2.endY);
        var z1 = Math.sqrt(x1 * x1 + y1 * y1);
        var z2 = Math.sqrt(x2 * x2 + y2 * y2);
        var ratio = (z2 - z1) / z1;
        ratios.push(ratio);
      });
    });
    ratios.sort(function (a, b) {
      return Math.abs(a) < Math.abs(b);
    });
    return ratios[0];
  }
  /**
   * Get a pointer from an event object.
   * @param {Object} event - The target event object.
   * @param {boolean} endOnly - Indicates if only returns the end point coordinate or not.
   * @returns {Object} The result pointer contains start and/or end point coordinates.
   */

  function getPointer(_ref2, endOnly) {
    var pageX = _ref2.pageX,
        pageY = _ref2.pageY;
    var end = {
      endX: pageX,
      endY: pageY
    };
    return endOnly ? end : _objectSpread2({
      startX: pageX,
      startY: pageY
    }, end);
  }
  /**
   * Get the center point coordinate of a group of pointers.
   * @param {Object} pointers - The target pointers.
   * @returns {Object} The center point coordinate.
   */

  function getPointersCenter(pointers) {
    var pageX = 0;
    var pageY = 0;
    var count = 0;
    forEach(pointers, function (_ref3) {
      var startX = _ref3.startX,
          startY = _ref3.startY;
      pageX += startX;
      pageY += startY;
      count += 1;
    });
    pageX /= count;
    pageY /= count;
    return {
      pageX: pageX,
      pageY: pageY
    };
  }
  /**
   * Get the max sizes in a rectangle under the given aspect ratio.
   * @param {Object} data - The original sizes.
   * @param {string} [type='contain'] - The adjust type.
   * @returns {Object} The result sizes.
   */

  function getAdjustedSizes(_ref4) // or 'cover'
  {
    var aspectRatio = _ref4.aspectRatio,
        height = _ref4.height,
        width = _ref4.width;
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'contain';
    var isValidWidth = isPositiveNumber(width);
    var isValidHeight = isPositiveNumber(height);

    if (isValidWidth && isValidHeight) {
      var adjustedWidth = height * aspectRatio;

      if (type === 'contain' && adjustedWidth > width || type === 'cover' && adjustedWidth < width) {
        height = width / aspectRatio;
      } else {
        width = height * aspectRatio;
      }
    } else if (isValidWidth) {
      height = width / aspectRatio;
    } else if (isValidHeight) {
      width = height * aspectRatio;
    }

    return {
      width: width,
      height: height
    };
  }
  /**
   * Get the new sizes of a rectangle after rotated.
   * @param {Object} data - The original sizes.
   * @returns {Object} The result sizes.
   */

  function getRotatedSizes(_ref5) {
    var width = _ref5.width,
        height = _ref5.height,
        degree = _ref5.degree;
    degree = Math.abs(degree) % 180;

    if (degree === 90) {
      return {
        width: height,
        height: width
      };
    }

    var arc = degree % 90 * Math.PI / 180;
    var sinArc = Math.sin(arc);
    var cosArc = Math.cos(arc);
    var newWidth = width * cosArc + height * sinArc;
    var newHeight = width * sinArc + height * cosArc;
    return degree > 90 ? {
      width: newHeight,
      height: newWidth
    } : {
      width: newWidth,
      height: newHeight
    };
  }
  /**
   * Get a canvas which drew the given image.
   * @param {HTMLImageElement} image - The image for drawing.
   * @param {Object} imageData - The image data.
   * @param {Object} canvasData - The canvas data.
   * @param {Object} options - The options.
   * @returns {HTMLCanvasElement} The result canvas.
   */

  function getSourceCanvas(image, _ref6, _ref7, _ref8) {
    var imageAspectRatio = _ref6.aspectRatio,
        imageNaturalWidth = _ref6.naturalWidth,
        imageNaturalHeight = _ref6.naturalHeight,
        _ref6$rotate = _ref6.rotate,
        rotate = _ref6$rotate === void 0 ? 0 : _ref6$rotate,
        _ref6$scaleX = _ref6.scaleX,
        scaleX = _ref6$scaleX === void 0 ? 1 : _ref6$scaleX,
        _ref6$scaleY = _ref6.scaleY,
        scaleY = _ref6$scaleY === void 0 ? 1 : _ref6$scaleY;
    var aspectRatio = _ref7.aspectRatio,
        naturalWidth = _ref7.naturalWidth,
        naturalHeight = _ref7.naturalHeight;
    var _ref8$fillColor = _ref8.fillColor,
        fillColor = _ref8$fillColor === void 0 ? 'transparent' : _ref8$fillColor,
        _ref8$imageSmoothingE = _ref8.imageSmoothingEnabled,
        imageSmoothingEnabled = _ref8$imageSmoothingE === void 0 ? true : _ref8$imageSmoothingE,
        _ref8$imageSmoothingQ = _ref8.imageSmoothingQuality,
        imageSmoothingQuality = _ref8$imageSmoothingQ === void 0 ? 'low' : _ref8$imageSmoothingQ,
        _ref8$maxWidth = _ref8.maxWidth,
        maxWidth = _ref8$maxWidth === void 0 ? Infinity : _ref8$maxWidth,
        _ref8$maxHeight = _ref8.maxHeight,
        maxHeight = _ref8$maxHeight === void 0 ? Infinity : _ref8$maxHeight,
        _ref8$minWidth = _ref8.minWidth,
        minWidth = _ref8$minWidth === void 0 ? 0 : _ref8$minWidth,
        _ref8$minHeight = _ref8.minHeight,
        minHeight = _ref8$minHeight === void 0 ? 0 : _ref8$minHeight;
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    var maxSizes = getAdjustedSizes({
      aspectRatio: aspectRatio,
      width: maxWidth,
      height: maxHeight
    });
    var minSizes = getAdjustedSizes({
      aspectRatio: aspectRatio,
      width: minWidth,
      height: minHeight
    }, 'cover');
    var width = Math.min(maxSizes.width, Math.max(minSizes.width, naturalWidth));
    var height = Math.min(maxSizes.height, Math.max(minSizes.height, naturalHeight)); // Note: should always use image's natural sizes for drawing as
    // imageData.naturalWidth === canvasData.naturalHeight when rotate % 180 === 90

    var destMaxSizes = getAdjustedSizes({
      aspectRatio: imageAspectRatio,
      width: maxWidth,
      height: maxHeight
    });
    var destMinSizes = getAdjustedSizes({
      aspectRatio: imageAspectRatio,
      width: minWidth,
      height: minHeight
    }, 'cover');
    var destWidth = Math.min(destMaxSizes.width, Math.max(destMinSizes.width, imageNaturalWidth));
    var destHeight = Math.min(destMaxSizes.height, Math.max(destMinSizes.height, imageNaturalHeight));
    var params = [-destWidth / 2, -destHeight / 2, destWidth, destHeight];
    canvas.width = normalizeDecimalNumber(width);
    canvas.height = normalizeDecimalNumber(height);
    context.fillStyle = fillColor;
    context.fillRect(0, 0, width, height);
    context.save();
    context.translate(width / 2, height / 2);
    context.rotate(rotate * Math.PI / 180);
    context.scale(scaleX, scaleY);
    context.imageSmoothingEnabled = imageSmoothingEnabled;
    context.imageSmoothingQuality = imageSmoothingQuality;
    context.drawImage.apply(context, [image].concat(_toConsumableArray(params.map(function (param) {
      return Math.floor(normalizeDecimalNumber(param));
    }))));
    context.restore();
    return canvas;
  }
  var fromCharCode = String.fromCharCode;
  /**
   * Get string from char code in data view.
   * @param {DataView} dataView - The data view for read.
   * @param {number} start - The start index.
   * @param {number} length - The read length.
   * @returns {string} The read result.
   */

  function getStringFromCharCode(dataView, start, length) {
    var str = '';
    length += start;

    for (var i = start; i < length; i += 1) {
      str += fromCharCode(dataView.getUint8(i));
    }

    return str;
  }
  var REGEXP_DATA_URL_HEAD = /^data:.*,/;
  /**
   * Transform Data URL to array buffer.
   * @param {string} dataURL - The Data URL to transform.
   * @returns {ArrayBuffer} The result array buffer.
   */

  function dataURLToArrayBuffer(dataURL) {
    var base64 = dataURL.replace(REGEXP_DATA_URL_HEAD, '');
    var binary = atob(base64);
    var arrayBuffer = new ArrayBuffer(binary.length);
    var uint8 = new Uint8Array(arrayBuffer);
    forEach(uint8, function (value, i) {
      uint8[i] = binary.charCodeAt(i);
    });
    return arrayBuffer;
  }
  /**
   * Transform array buffer to Data URL.
   * @param {ArrayBuffer} arrayBuffer - The array buffer to transform.
   * @param {string} mimeType - The mime type of the Data URL.
   * @returns {string} The result Data URL.
   */

  function arrayBufferToDataURL(arrayBuffer, mimeType) {
    var chunks = []; // Chunk Typed Array for better performance (#435)

    var chunkSize = 8192;
    var uint8 = new Uint8Array(arrayBuffer);

    while (uint8.length > 0) {
      // XXX: Babel's `toConsumableArray` helper will throw error in IE or Safari 9
      // eslint-disable-next-line prefer-spread
      chunks.push(fromCharCode.apply(null, toArray(uint8.subarray(0, chunkSize))));
      uint8 = uint8.subarray(chunkSize);
    }

    return "data:".concat(mimeType, ";base64,").concat(btoa(chunks.join('')));
  }
  /**
   * Get orientation value from given array buffer.
   * @param {ArrayBuffer} arrayBuffer - The array buffer to read.
   * @returns {number} The read orientation value.
   */

  function resetAndGetOrientation(arrayBuffer) {
    var dataView = new DataView(arrayBuffer);
    var orientation; // Ignores range error when the image does not have correct Exif information

    try {
      var littleEndian;
      var app1Start;
      var ifdStart; // Only handle JPEG image (start by 0xFFD8)

      if (dataView.getUint8(0) === 0xFF && dataView.getUint8(1) === 0xD8) {
        var length = dataView.byteLength;
        var offset = 2;

        while (offset + 1 < length) {
          if (dataView.getUint8(offset) === 0xFF && dataView.getUint8(offset + 1) === 0xE1) {
            app1Start = offset;
            break;
          }

          offset += 1;
        }
      }

      if (app1Start) {
        var exifIDCode = app1Start + 4;
        var tiffOffset = app1Start + 10;

        if (getStringFromCharCode(dataView, exifIDCode, 4) === 'Exif') {
          var endianness = dataView.getUint16(tiffOffset);
          littleEndian = endianness === 0x4949;

          if (littleEndian || endianness === 0x4D4D
          /* bigEndian */
          ) {
              if (dataView.getUint16(tiffOffset + 2, littleEndian) === 0x002A) {
                var firstIFDOffset = dataView.getUint32(tiffOffset + 4, littleEndian);

                if (firstIFDOffset >= 0x00000008) {
                  ifdStart = tiffOffset + firstIFDOffset;
                }
              }
            }
        }
      }

      if (ifdStart) {
        var _length = dataView.getUint16(ifdStart, littleEndian);

        var _offset;

        var i;

        for (i = 0; i < _length; i += 1) {
          _offset = ifdStart + i * 12 + 2;

          if (dataView.getUint16(_offset, littleEndian) === 0x0112
          /* Orientation */
          ) {
              // 8 is the offset of the current tag's value
              _offset += 8; // Get the original orientation value

              orientation = dataView.getUint16(_offset, littleEndian); // Override the orientation with its default value

              dataView.setUint16(_offset, 1, littleEndian);
              break;
            }
        }
      }
    } catch (error) {
      orientation = 1;
    }

    return orientation;
  }
  /**
   * Parse Exif Orientation value.
   * @param {number} orientation - The orientation to parse.
   * @returns {Object} The parsed result.
   */

  function parseOrientation(orientation) {
    var rotate = 0;
    var scaleX = 1;
    var scaleY = 1;

    switch (orientation) {
      // Flip horizontal
      case 2:
        scaleX = -1;
        break;
      // Rotate left 180°

      case 3:
        rotate = -180;
        break;
      // Flip vertical

      case 4:
        scaleY = -1;
        break;
      // Flip vertical and rotate right 90°

      case 5:
        rotate = 90;
        scaleY = -1;
        break;
      // Rotate right 90°

      case 6:
        rotate = 90;
        break;
      // Flip horizontal and rotate right 90°

      case 7:
        rotate = 90;
        scaleX = -1;
        break;
      // Rotate left 90°

      case 8:
        rotate = -90;
        break;

      default:
    }

    return {
      rotate: rotate,
      scaleX: scaleX,
      scaleY: scaleY
    };
  }

  var render = {
    render: function render() {
      this.initContainer();
      this.initCanvas();
      this.initCropBox();
      this.renderCanvas();

      if (this.cropped) {
        this.renderCropBox();
      }
    },
    initContainer: function initContainer() {
      var element = this.element,
          options = this.options,
          container = this.container,
          cropper = this.cropper;
      addClass(cropper, CLASS_HIDDEN);
      removeClass(element, CLASS_HIDDEN);
      var containerData = {
        width: Math.max(container.offsetWidth, Number(options.minContainerWidth) || 200),
        height: Math.max(container.offsetHeight, Number(options.minContainerHeight) || 100)
      };
      this.containerData = containerData;
      setStyle(cropper, {
        width: containerData.width,
        height: containerData.height
      });
      addClass(element, CLASS_HIDDEN);
      removeClass(cropper, CLASS_HIDDEN);
    },
    // Canvas (image wrapper)
    initCanvas: function initCanvas() {
      var containerData = this.containerData,
          imageData = this.imageData;
      var viewMode = this.options.viewMode;
      var rotated = Math.abs(imageData.rotate) % 180 === 90;
      var naturalWidth = rotated ? imageData.naturalHeight : imageData.naturalWidth;
      var naturalHeight = rotated ? imageData.naturalWidth : imageData.naturalHeight;
      var aspectRatio = naturalWidth / naturalHeight;
      var canvasWidth = containerData.width;
      var canvasHeight = containerData.height;

      if (containerData.height * aspectRatio > containerData.width) {
        if (viewMode === 3) {
          canvasWidth = containerData.height * aspectRatio;
        } else {
          canvasHeight = containerData.width / aspectRatio;
        }
      } else if (viewMode === 3) {
        canvasHeight = containerData.width / aspectRatio;
      } else {
        canvasWidth = containerData.height * aspectRatio;
      }

      var canvasData = {
        aspectRatio: aspectRatio,
        naturalWidth: naturalWidth,
        naturalHeight: naturalHeight,
        width: canvasWidth,
        height: canvasHeight
      };
      canvasData.left = (containerData.width - canvasWidth) / 2;
      canvasData.top = (containerData.height - canvasHeight) / 2;
      canvasData.oldLeft = canvasData.left;
      canvasData.oldTop = canvasData.top;
      this.canvasData = canvasData;
      this.limited = viewMode === 1 || viewMode === 2;
      this.limitCanvas(true, true);
      this.initialImageData = assign({}, imageData);
      this.initialCanvasData = assign({}, canvasData);
    },
    limitCanvas: function limitCanvas(sizeLimited, positionLimited) {
      var options = this.options,
          containerData = this.containerData,
          canvasData = this.canvasData,
          cropBoxData = this.cropBoxData;
      var viewMode = options.viewMode;
      var aspectRatio = canvasData.aspectRatio;
      var cropped = this.cropped && cropBoxData;

      if (sizeLimited) {
        var minCanvasWidth = Number(options.minCanvasWidth) || 0;
        var minCanvasHeight = Number(options.minCanvasHeight) || 0;

        if (viewMode > 1) {
          minCanvasWidth = Math.max(minCanvasWidth, containerData.width);
          minCanvasHeight = Math.max(minCanvasHeight, containerData.height);

          if (viewMode === 3) {
            if (minCanvasHeight * aspectRatio > minCanvasWidth) {
              minCanvasWidth = minCanvasHeight * aspectRatio;
            } else {
              minCanvasHeight = minCanvasWidth / aspectRatio;
            }
          }
        } else if (viewMode > 0) {
          if (minCanvasWidth) {
            minCanvasWidth = Math.max(minCanvasWidth, cropped ? cropBoxData.width : 0);
          } else if (minCanvasHeight) {
            minCanvasHeight = Math.max(minCanvasHeight, cropped ? cropBoxData.height : 0);
          } else if (cropped) {
            minCanvasWidth = cropBoxData.width;
            minCanvasHeight = cropBoxData.height;

            if (minCanvasHeight * aspectRatio > minCanvasWidth) {
              minCanvasWidth = minCanvasHeight * aspectRatio;
            } else {
              minCanvasHeight = minCanvasWidth / aspectRatio;
            }
          }
        }

        var _getAdjustedSizes = getAdjustedSizes({
          aspectRatio: aspectRatio,
          width: minCanvasWidth,
          height: minCanvasHeight
        });

        minCanvasWidth = _getAdjustedSizes.width;
        minCanvasHeight = _getAdjustedSizes.height;
        canvasData.minWidth = minCanvasWidth;
        canvasData.minHeight = minCanvasHeight;
        canvasData.maxWidth = Infinity;
        canvasData.maxHeight = Infinity;
      }

      if (positionLimited) {
        if (viewMode > (cropped ? 0 : 1)) {
          var newCanvasLeft = containerData.width - canvasData.width;
          var newCanvasTop = containerData.height - canvasData.height;
          canvasData.minLeft = Math.min(0, newCanvasLeft);
          canvasData.minTop = Math.min(0, newCanvasTop);
          canvasData.maxLeft = Math.max(0, newCanvasLeft);
          canvasData.maxTop = Math.max(0, newCanvasTop);

          if (cropped && this.limited) {
            canvasData.minLeft = Math.min(cropBoxData.left, cropBoxData.left + (cropBoxData.width - canvasData.width));
            canvasData.minTop = Math.min(cropBoxData.top, cropBoxData.top + (cropBoxData.height - canvasData.height));
            canvasData.maxLeft = cropBoxData.left;
            canvasData.maxTop = cropBoxData.top;

            if (viewMode === 2) {
              if (canvasData.width >= containerData.width) {
                canvasData.minLeft = Math.min(0, newCanvasLeft);
                canvasData.maxLeft = Math.max(0, newCanvasLeft);
              }

              if (canvasData.height >= containerData.height) {
                canvasData.minTop = Math.min(0, newCanvasTop);
                canvasData.maxTop = Math.max(0, newCanvasTop);
              }
            }
          }
        } else {
          canvasData.minLeft = -canvasData.width;
          canvasData.minTop = -canvasData.height;
          canvasData.maxLeft = containerData.width;
          canvasData.maxTop = containerData.height;
        }
      }
    },
    renderCanvas: function renderCanvas(changed, transformed) {
      var canvasData = this.canvasData,
          imageData = this.imageData;

      if (transformed) {
        var _getRotatedSizes = getRotatedSizes({
          width: imageData.naturalWidth * Math.abs(imageData.scaleX || 1),
          height: imageData.naturalHeight * Math.abs(imageData.scaleY || 1),
          degree: imageData.rotate || 0
        }),
            naturalWidth = _getRotatedSizes.width,
            naturalHeight = _getRotatedSizes.height;

        var width = canvasData.width * (naturalWidth / canvasData.naturalWidth);
        var height = canvasData.height * (naturalHeight / canvasData.naturalHeight);
        canvasData.left -= (width - canvasData.width) / 2;
        canvasData.top -= (height - canvasData.height) / 2;
        canvasData.width = width;
        canvasData.height = height;
        canvasData.aspectRatio = naturalWidth / naturalHeight;
        canvasData.naturalWidth = naturalWidth;
        canvasData.naturalHeight = naturalHeight;
        this.limitCanvas(true, false);
      }

      if (canvasData.width > canvasData.maxWidth || canvasData.width < canvasData.minWidth) {
        canvasData.left = canvasData.oldLeft;
      }

      if (canvasData.height > canvasData.maxHeight || canvasData.height < canvasData.minHeight) {
        canvasData.top = canvasData.oldTop;
      }

      canvasData.width = Math.min(Math.max(canvasData.width, canvasData.minWidth), canvasData.maxWidth);
      canvasData.height = Math.min(Math.max(canvasData.height, canvasData.minHeight), canvasData.maxHeight);
      this.limitCanvas(false, true);
      canvasData.left = Math.min(Math.max(canvasData.left, canvasData.minLeft), canvasData.maxLeft);
      canvasData.top = Math.min(Math.max(canvasData.top, canvasData.minTop), canvasData.maxTop);
      canvasData.oldLeft = canvasData.left;
      canvasData.oldTop = canvasData.top;
      setStyle(this.canvas, assign({
        width: canvasData.width,
        height: canvasData.height
      }, getTransforms({
        translateX: canvasData.left,
        translateY: canvasData.top
      })));
      this.renderImage(changed);

      if (this.cropped && this.limited) {
        this.limitCropBox(true, true);
      }
    },
    renderImage: function renderImage(changed) {
      var canvasData = this.canvasData,
          imageData = this.imageData;
      var width = imageData.naturalWidth * (canvasData.width / canvasData.naturalWidth);
      var height = imageData.naturalHeight * (canvasData.height / canvasData.naturalHeight);
      assign(imageData, {
        width: width,
        height: height,
        left: (canvasData.width - width) / 2,
        top: (canvasData.height - height) / 2
      });
      setStyle(this.image, assign({
        width: imageData.width,
        height: imageData.height
      }, getTransforms(assign({
        translateX: imageData.left,
        translateY: imageData.top
      }, imageData))));

      if (changed) {
        this.output();
      }
    },
    initCropBox: function initCropBox() {
      var options = this.options,
          canvasData = this.canvasData;
      var aspectRatio = options.aspectRatio || options.initialAspectRatio;
      var autoCropArea = Number(options.autoCropArea) || 0.8;
      var cropBoxData = {
        width: canvasData.width,
        height: canvasData.height
      };

      if (aspectRatio) {
        if (canvasData.height * aspectRatio > canvasData.width) {
          cropBoxData.height = cropBoxData.width / aspectRatio;
        } else {
          cropBoxData.width = cropBoxData.height * aspectRatio;
        }
      }

      this.cropBoxData = cropBoxData;
      this.limitCropBox(true, true); // Initialize auto crop area

      cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
      cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight); // The width/height of auto crop area must large than "minWidth/Height"

      cropBoxData.width = Math.max(cropBoxData.minWidth, cropBoxData.width * autoCropArea);
      cropBoxData.height = Math.max(cropBoxData.minHeight, cropBoxData.height * autoCropArea);
      cropBoxData.left = canvasData.left + (canvasData.width - cropBoxData.width) / 2;
      cropBoxData.top = canvasData.top + (canvasData.height - cropBoxData.height) / 2;
      cropBoxData.oldLeft = cropBoxData.left;
      cropBoxData.oldTop = cropBoxData.top;
      this.initialCropBoxData = assign({}, cropBoxData);
    },
    limitCropBox: function limitCropBox(sizeLimited, positionLimited) {
      var options = this.options,
          containerData = this.containerData,
          canvasData = this.canvasData,
          cropBoxData = this.cropBoxData,
          limited = this.limited;
      var aspectRatio = options.aspectRatio;

      if (sizeLimited) {
        var minCropBoxWidth = Number(options.minCropBoxWidth) || 0;
        var minCropBoxHeight = Number(options.minCropBoxHeight) || 0;
        var maxCropBoxWidth = limited ? Math.min(containerData.width, canvasData.width, canvasData.width + canvasData.left, containerData.width - canvasData.left) : containerData.width;
        var maxCropBoxHeight = limited ? Math.min(containerData.height, canvasData.height, canvasData.height + canvasData.top, containerData.height - canvasData.top) : containerData.height; // The min/maxCropBoxWidth/Height must be less than container's width/height

        minCropBoxWidth = Math.min(minCropBoxWidth, containerData.width);
        minCropBoxHeight = Math.min(minCropBoxHeight, containerData.height);

        if (aspectRatio) {
          if (minCropBoxWidth && minCropBoxHeight) {
            if (minCropBoxHeight * aspectRatio > minCropBoxWidth) {
              minCropBoxHeight = minCropBoxWidth / aspectRatio;
            } else {
              minCropBoxWidth = minCropBoxHeight * aspectRatio;
            }
          } else if (minCropBoxWidth) {
            minCropBoxHeight = minCropBoxWidth / aspectRatio;
          } else if (minCropBoxHeight) {
            minCropBoxWidth = minCropBoxHeight * aspectRatio;
          }

          if (maxCropBoxHeight * aspectRatio > maxCropBoxWidth) {
            maxCropBoxHeight = maxCropBoxWidth / aspectRatio;
          } else {
            maxCropBoxWidth = maxCropBoxHeight * aspectRatio;
          }
        } // The minWidth/Height must be less than maxWidth/Height


        cropBoxData.minWidth = Math.min(minCropBoxWidth, maxCropBoxWidth);
        cropBoxData.minHeight = Math.min(minCropBoxHeight, maxCropBoxHeight);
        cropBoxData.maxWidth = maxCropBoxWidth;
        cropBoxData.maxHeight = maxCropBoxHeight;
      }

      if (positionLimited) {
        if (limited) {
          cropBoxData.minLeft = Math.max(0, canvasData.left);
          cropBoxData.minTop = Math.max(0, canvasData.top);
          cropBoxData.maxLeft = Math.min(containerData.width, canvasData.left + canvasData.width) - cropBoxData.width;
          cropBoxData.maxTop = Math.min(containerData.height, canvasData.top + canvasData.height) - cropBoxData.height;
        } else {
          cropBoxData.minLeft = 0;
          cropBoxData.minTop = 0;
          cropBoxData.maxLeft = containerData.width - cropBoxData.width;
          cropBoxData.maxTop = containerData.height - cropBoxData.height;
        }
      }
    },
    renderCropBox: function renderCropBox() {
      var options = this.options,
          containerData = this.containerData,
          cropBoxData = this.cropBoxData;

      if (cropBoxData.width > cropBoxData.maxWidth || cropBoxData.width < cropBoxData.minWidth) {
        cropBoxData.left = cropBoxData.oldLeft;
      }

      if (cropBoxData.height > cropBoxData.maxHeight || cropBoxData.height < cropBoxData.minHeight) {
        cropBoxData.top = cropBoxData.oldTop;
      }

      cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
      cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight);
      this.limitCropBox(false, true);
      cropBoxData.left = Math.min(Math.max(cropBoxData.left, cropBoxData.minLeft), cropBoxData.maxLeft);
      cropBoxData.top = Math.min(Math.max(cropBoxData.top, cropBoxData.minTop), cropBoxData.maxTop);
      cropBoxData.oldLeft = cropBoxData.left;
      cropBoxData.oldTop = cropBoxData.top;

      if (options.movable && options.cropBoxMovable) {
        // Turn to move the canvas when the crop box is equal to the container
        setData(this.face, DATA_ACTION, cropBoxData.width >= containerData.width && cropBoxData.height >= containerData.height ? ACTION_MOVE : ACTION_ALL);
      }

      setStyle(this.cropBox, assign({
        width: cropBoxData.width,
        height: cropBoxData.height
      }, getTransforms({
        translateX: cropBoxData.left,
        translateY: cropBoxData.top
      })));

      if (this.cropped && this.limited) {
        this.limitCanvas(true, true);
      }

      if (!this.disabled) {
        this.output();
      }
    },
    output: function output() {
      this.preview();
      dispatchEvent(this.element, EVENT_CROP, this.getData());
    }
  };

  var preview = {
    initPreview: function initPreview() {
      var element = this.element,
          crossOrigin = this.crossOrigin;
      var preview = this.options.preview;
      var url = crossOrigin ? this.crossOriginUrl : this.url;
      var alt = element.alt || 'The image to preview';
      var image = document.createElement('img');

      if (crossOrigin) {
        image.crossOrigin = crossOrigin;
      }

      image.src = url;
      image.alt = alt;
      this.viewBox.appendChild(image);
      this.viewBoxImage = image;

      if (!preview) {
        return;
      }

      var previews = preview;

      if (typeof preview === 'string') {
        previews = element.ownerDocument.querySelectorAll(preview);
      } else if (preview.querySelector) {
        previews = [preview];
      }

      this.previews = previews;
      forEach(previews, function (el) {
        var img = document.createElement('img'); // Save the original size for recover

        setData(el, DATA_PREVIEW, {
          width: el.offsetWidth,
          height: el.offsetHeight,
          html: el.innerHTML
        });

        if (crossOrigin) {
          img.crossOrigin = crossOrigin;
        }

        img.src = url;
        img.alt = alt;
        /**
         * Override img element styles
         * Add `display:block` to avoid margin top issue
         * Add `height:auto` to override `height` attribute on IE8
         * (Occur only when margin-top <= -height)
         */

        img.style.cssText = 'display:block;' + 'width:100%;' + 'height:auto;' + 'min-width:0!important;' + 'min-height:0!important;' + 'max-width:none!important;' + 'max-height:none!important;' + 'image-orientation:0deg!important;"';
        el.innerHTML = '';
        el.appendChild(img);
      });
    },
    resetPreview: function resetPreview() {
      forEach(this.previews, function (element) {
        var data = getData(element, DATA_PREVIEW);
        setStyle(element, {
          width: data.width,
          height: data.height
        });
        element.innerHTML = data.html;
        removeData(element, DATA_PREVIEW);
      });
    },
    preview: function preview() {
      var imageData = this.imageData,
          canvasData = this.canvasData,
          cropBoxData = this.cropBoxData;
      var cropBoxWidth = cropBoxData.width,
          cropBoxHeight = cropBoxData.height;
      var width = imageData.width,
          height = imageData.height;
      var left = cropBoxData.left - canvasData.left - imageData.left;
      var top = cropBoxData.top - canvasData.top - imageData.top;

      if (!this.cropped || this.disabled) {
        return;
      }

      setStyle(this.viewBoxImage, assign({
        width: width,
        height: height
      }, getTransforms(assign({
        translateX: -left,
        translateY: -top
      }, imageData))));
      forEach(this.previews, function (element) {
        var data = getData(element, DATA_PREVIEW);
        var originalWidth = data.width;
        var originalHeight = data.height;
        var newWidth = originalWidth;
        var newHeight = originalHeight;
        var ratio = 1;

        if (cropBoxWidth) {
          ratio = originalWidth / cropBoxWidth;
          newHeight = cropBoxHeight * ratio;
        }

        if (cropBoxHeight && newHeight > originalHeight) {
          ratio = originalHeight / cropBoxHeight;
          newWidth = cropBoxWidth * ratio;
          newHeight = originalHeight;
        }

        setStyle(element, {
          width: newWidth,
          height: newHeight
        });
        setStyle(element.getElementsByTagName('img')[0], assign({
          width: width * ratio,
          height: height * ratio
        }, getTransforms(assign({
          translateX: -left * ratio,
          translateY: -top * ratio
        }, imageData))));
      });
    }
  };

  var events = {
    bind: function bind() {
      var element = this.element,
          options = this.options,
          cropper = this.cropper;

      if (isFunction(options.cropstart)) {
        addListener(element, EVENT_CROP_START, options.cropstart);
      }

      if (isFunction(options.cropmove)) {
        addListener(element, EVENT_CROP_MOVE, options.cropmove);
      }

      if (isFunction(options.cropend)) {
        addListener(element, EVENT_CROP_END, options.cropend);
      }

      if (isFunction(options.crop)) {
        addListener(element, EVENT_CROP, options.crop);
      }

      if (isFunction(options.zoom)) {
        addListener(element, EVENT_ZOOM, options.zoom);
      }

      addListener(cropper, EVENT_POINTER_DOWN, this.onCropStart = this.cropStart.bind(this));

      if (options.zoomable && options.zoomOnWheel) {
        addListener(cropper, EVENT_WHEEL, this.onWheel = this.wheel.bind(this), {
          passive: false,
          capture: true
        });
      }

      if (options.toggleDragModeOnDblclick) {
        addListener(cropper, EVENT_DBLCLICK, this.onDblclick = this.dblclick.bind(this));
      }

      addListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove = this.cropMove.bind(this));
      addListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd = this.cropEnd.bind(this));

      if (options.responsive) {
        addListener(window, EVENT_RESIZE, this.onResize = this.resize.bind(this));
      }
    },
    unbind: function unbind() {
      var element = this.element,
          options = this.options,
          cropper = this.cropper;

      if (isFunction(options.cropstart)) {
        removeListener(element, EVENT_CROP_START, options.cropstart);
      }

      if (isFunction(options.cropmove)) {
        removeListener(element, EVENT_CROP_MOVE, options.cropmove);
      }

      if (isFunction(options.cropend)) {
        removeListener(element, EVENT_CROP_END, options.cropend);
      }

      if (isFunction(options.crop)) {
        removeListener(element, EVENT_CROP, options.crop);
      }

      if (isFunction(options.zoom)) {
        removeListener(element, EVENT_ZOOM, options.zoom);
      }

      removeListener(cropper, EVENT_POINTER_DOWN, this.onCropStart);

      if (options.zoomable && options.zoomOnWheel) {
        removeListener(cropper, EVENT_WHEEL, this.onWheel, {
          passive: false,
          capture: true
        });
      }

      if (options.toggleDragModeOnDblclick) {
        removeListener(cropper, EVENT_DBLCLICK, this.onDblclick);
      }

      removeListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove);
      removeListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd);

      if (options.responsive) {
        removeListener(window, EVENT_RESIZE, this.onResize);
      }
    }
  };

  var handlers = {
    resize: function resize() {
      var options = this.options,
          container = this.container,
          containerData = this.containerData;
      var minContainerWidth = Number(options.minContainerWidth) || MIN_CONTAINER_WIDTH;
      var minContainerHeight = Number(options.minContainerHeight) || MIN_CONTAINER_HEIGHT;

      if (this.disabled || containerData.width <= minContainerWidth || containerData.height <= minContainerHeight) {
        return;
      }

      var ratio = container.offsetWidth / containerData.width; // Resize when width changed or height changed

      if (ratio !== 1 || container.offsetHeight !== containerData.height) {
        var canvasData;
        var cropBoxData;

        if (options.restore) {
          canvasData = this.getCanvasData();
          cropBoxData = this.getCropBoxData();
        }

        this.render();

        if (options.restore) {
          this.setCanvasData(forEach(canvasData, function (n, i) {
            canvasData[i] = n * ratio;
          }));
          this.setCropBoxData(forEach(cropBoxData, function (n, i) {
            cropBoxData[i] = n * ratio;
          }));
        }
      }
    },
    dblclick: function dblclick() {
      if (this.disabled || this.options.dragMode === DRAG_MODE_NONE) {
        return;
      }

      this.setDragMode(hasClass(this.dragBox, CLASS_CROP) ? DRAG_MODE_MOVE : DRAG_MODE_CROP);
    },
    wheel: function wheel(event) {
      var _this = this;

      var ratio = Number(this.options.wheelZoomRatio) || 0.1;
      var delta = 1;

      if (this.disabled) {
        return;
      }

      event.preventDefault(); // Limit wheel speed to prevent zoom too fast (#21)

      if (this.wheeling) {
        return;
      }

      this.wheeling = true;
      setTimeout(function () {
        _this.wheeling = false;
      }, 50);

      if (event.deltaY) {
        delta = event.deltaY > 0 ? 1 : -1;
      } else if (event.wheelDelta) {
        delta = -event.wheelDelta / 120;
      } else if (event.detail) {
        delta = event.detail > 0 ? 1 : -1;
      }

      this.zoom(-delta * ratio, event);
    },
    cropStart: function cropStart(event) {
      var buttons = event.buttons,
          button = event.button;

      if (this.disabled // Handle mouse event and pointer event and ignore touch event
      || (event.type === 'mousedown' || event.type === 'pointerdown' && event.pointerType === 'mouse') && ( // No primary button (Usually the left button)
      isNumber(buttons) && buttons !== 1 || isNumber(button) && button !== 0 // Open context menu
      || event.ctrlKey)) {
        return;
      }

      var options = this.options,
          pointers = this.pointers;
      var action;

      if (event.changedTouches) {
        // Handle touch event
        forEach(event.changedTouches, function (touch) {
          pointers[touch.identifier] = getPointer(touch);
        });
      } else {
        // Handle mouse event and pointer event
        pointers[event.pointerId || 0] = getPointer(event);
      }

      if (Object.keys(pointers).length > 1 && options.zoomable && options.zoomOnTouch) {
        action = ACTION_ZOOM;
      } else {
        action = getData(event.target, DATA_ACTION);
      }

      if (!REGEXP_ACTIONS.test(action)) {
        return;
      }

      if (dispatchEvent(this.element, EVENT_CROP_START, {
        originalEvent: event,
        action: action
      }) === false) {
        return;
      } // This line is required for preventing page zooming in iOS browsers


      event.preventDefault();
      this.action = action;
      this.cropping = false;

      if (action === ACTION_CROP) {
        this.cropping = true;
        addClass(this.dragBox, CLASS_MODAL);
      }
    },
    cropMove: function cropMove(event) {
      var action = this.action;

      if (this.disabled || !action) {
        return;
      }

      var pointers = this.pointers;
      event.preventDefault();

      if (dispatchEvent(this.element, EVENT_CROP_MOVE, {
        originalEvent: event,
        action: action
      }) === false) {
        return;
      }

      if (event.changedTouches) {
        forEach(event.changedTouches, function (touch) {
          // The first parameter should not be undefined (#432)
          assign(pointers[touch.identifier] || {}, getPointer(touch, true));
        });
      } else {
        assign(pointers[event.pointerId || 0] || {}, getPointer(event, true));
      }

      this.change(event);
    },
    cropEnd: function cropEnd(event) {
      if (this.disabled) {
        return;
      }

      var action = this.action,
          pointers = this.pointers;

      if (event.changedTouches) {
        forEach(event.changedTouches, function (touch) {
          delete pointers[touch.identifier];
        });
      } else {
        delete pointers[event.pointerId || 0];
      }

      if (!action) {
        return;
      }

      event.preventDefault();

      if (!Object.keys(pointers).length) {
        this.action = '';
      }

      if (this.cropping) {
        this.cropping = false;
        toggleClass(this.dragBox, CLASS_MODAL, this.cropped && this.options.modal);
      }

      dispatchEvent(this.element, EVENT_CROP_END, {
        originalEvent: event,
        action: action
      });
    }
  };

  var change = {
    change: function change(event) {
      var options = this.options,
          canvasData = this.canvasData,
          containerData = this.containerData,
          cropBoxData = this.cropBoxData,
          pointers = this.pointers;
      var action = this.action;
      var aspectRatio = options.aspectRatio;
      var left = cropBoxData.left,
          top = cropBoxData.top,
          width = cropBoxData.width,
          height = cropBoxData.height;
      var right = left + width;
      var bottom = top + height;
      var minLeft = 0;
      var minTop = 0;
      var maxWidth = containerData.width;
      var maxHeight = containerData.height;
      var renderable = true;
      var offset; // Locking aspect ratio in "free mode" by holding shift key

      if (!aspectRatio && event.shiftKey) {
        aspectRatio = width && height ? width / height : 1;
      }

      if (this.limited) {
        minLeft = cropBoxData.minLeft;
        minTop = cropBoxData.minTop;
        maxWidth = minLeft + Math.min(containerData.width, canvasData.width, canvasData.left + canvasData.width);
        maxHeight = minTop + Math.min(containerData.height, canvasData.height, canvasData.top + canvasData.height);
      }

      var pointer = pointers[Object.keys(pointers)[0]];
      var range = {
        x: pointer.endX - pointer.startX,
        y: pointer.endY - pointer.startY
      };

      var check = function check(side) {
        switch (side) {
          case ACTION_EAST:
            if (right + range.x > maxWidth) {
              range.x = maxWidth - right;
            }

            break;

          case ACTION_WEST:
            if (left + range.x < minLeft) {
              range.x = minLeft - left;
            }

            break;

          case ACTION_NORTH:
            if (top + range.y < minTop) {
              range.y = minTop - top;
            }

            break;

          case ACTION_SOUTH:
            if (bottom + range.y > maxHeight) {
              range.y = maxHeight - bottom;
            }

            break;

          default:
        }
      };

      switch (action) {
        // Move crop box
        case ACTION_ALL:
          left += range.x;
          top += range.y;
          break;
        // Resize crop box

        case ACTION_EAST:
          if (range.x >= 0 && (right >= maxWidth || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
            renderable = false;
            break;
          }

          check(ACTION_EAST);
          width += range.x;

          if (width < 0) {
            action = ACTION_WEST;
            width = -width;
            left -= width;
          }

          if (aspectRatio) {
            height = width / aspectRatio;
            top += (cropBoxData.height - height) / 2;
          }

          break;

        case ACTION_NORTH:
          if (range.y <= 0 && (top <= minTop || aspectRatio && (left <= minLeft || right >= maxWidth))) {
            renderable = false;
            break;
          }

          check(ACTION_NORTH);
          height -= range.y;
          top += range.y;

          if (height < 0) {
            action = ACTION_SOUTH;
            height = -height;
            top -= height;
          }

          if (aspectRatio) {
            width = height * aspectRatio;
            left += (cropBoxData.width - width) / 2;
          }

          break;

        case ACTION_WEST:
          if (range.x <= 0 && (left <= minLeft || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
            renderable = false;
            break;
          }

          check(ACTION_WEST);
          width -= range.x;
          left += range.x;

          if (width < 0) {
            action = ACTION_EAST;
            width = -width;
            left -= width;
          }

          if (aspectRatio) {
            height = width / aspectRatio;
            top += (cropBoxData.height - height) / 2;
          }

          break;

        case ACTION_SOUTH:
          if (range.y >= 0 && (bottom >= maxHeight || aspectRatio && (left <= minLeft || right >= maxWidth))) {
            renderable = false;
            break;
          }

          check(ACTION_SOUTH);
          height += range.y;

          if (height < 0) {
            action = ACTION_NORTH;
            height = -height;
            top -= height;
          }

          if (aspectRatio) {
            width = height * aspectRatio;
            left += (cropBoxData.width - width) / 2;
          }

          break;

        case ACTION_NORTH_EAST:
          if (aspectRatio) {
            if (range.y <= 0 && (top <= minTop || right >= maxWidth)) {
              renderable = false;
              break;
            }

            check(ACTION_NORTH);
            height -= range.y;
            top += range.y;
            width = height * aspectRatio;
          } else {
            check(ACTION_NORTH);
            check(ACTION_EAST);

            if (range.x >= 0) {
              if (right < maxWidth) {
                width += range.x;
              } else if (range.y <= 0 && top <= minTop) {
                renderable = false;
              }
            } else {
              width += range.x;
            }

            if (range.y <= 0) {
              if (top > minTop) {
                height -= range.y;
                top += range.y;
              }
            } else {
              height -= range.y;
              top += range.y;
            }
          }

          if (width < 0 && height < 0) {
            action = ACTION_SOUTH_WEST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_NORTH_WEST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_SOUTH_EAST;
            height = -height;
            top -= height;
          }

          break;

        case ACTION_NORTH_WEST:
          if (aspectRatio) {
            if (range.y <= 0 && (top <= minTop || left <= minLeft)) {
              renderable = false;
              break;
            }

            check(ACTION_NORTH);
            height -= range.y;
            top += range.y;
            width = height * aspectRatio;
            left += cropBoxData.width - width;
          } else {
            check(ACTION_NORTH);
            check(ACTION_WEST);

            if (range.x <= 0) {
              if (left > minLeft) {
                width -= range.x;
                left += range.x;
              } else if (range.y <= 0 && top <= minTop) {
                renderable = false;
              }
            } else {
              width -= range.x;
              left += range.x;
            }

            if (range.y <= 0) {
              if (top > minTop) {
                height -= range.y;
                top += range.y;
              }
            } else {
              height -= range.y;
              top += range.y;
            }
          }

          if (width < 0 && height < 0) {
            action = ACTION_SOUTH_EAST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_NORTH_EAST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_SOUTH_WEST;
            height = -height;
            top -= height;
          }

          break;

        case ACTION_SOUTH_WEST:
          if (aspectRatio) {
            if (range.x <= 0 && (left <= minLeft || bottom >= maxHeight)) {
              renderable = false;
              break;
            }

            check(ACTION_WEST);
            width -= range.x;
            left += range.x;
            height = width / aspectRatio;
          } else {
            check(ACTION_SOUTH);
            check(ACTION_WEST);

            if (range.x <= 0) {
              if (left > minLeft) {
                width -= range.x;
                left += range.x;
              } else if (range.y >= 0 && bottom >= maxHeight) {
                renderable = false;
              }
            } else {
              width -= range.x;
              left += range.x;
            }

            if (range.y >= 0) {
              if (bottom < maxHeight) {
                height += range.y;
              }
            } else {
              height += range.y;
            }
          }

          if (width < 0 && height < 0) {
            action = ACTION_NORTH_EAST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_SOUTH_EAST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_NORTH_WEST;
            height = -height;
            top -= height;
          }

          break;

        case ACTION_SOUTH_EAST:
          if (aspectRatio) {
            if (range.x >= 0 && (right >= maxWidth || bottom >= maxHeight)) {
              renderable = false;
              break;
            }

            check(ACTION_EAST);
            width += range.x;
            height = width / aspectRatio;
          } else {
            check(ACTION_SOUTH);
            check(ACTION_EAST);

            if (range.x >= 0) {
              if (right < maxWidth) {
                width += range.x;
              } else if (range.y >= 0 && bottom >= maxHeight) {
                renderable = false;
              }
            } else {
              width += range.x;
            }

            if (range.y >= 0) {
              if (bottom < maxHeight) {
                height += range.y;
              }
            } else {
              height += range.y;
            }
          }

          if (width < 0 && height < 0) {
            action = ACTION_NORTH_WEST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_SOUTH_WEST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_NORTH_EAST;
            height = -height;
            top -= height;
          }

          break;
        // Move canvas

        case ACTION_MOVE:
          this.move(range.x, range.y);
          renderable = false;
          break;
        // Zoom canvas

        case ACTION_ZOOM:
          this.zoom(getMaxZoomRatio(pointers), event);
          renderable = false;
          break;
        // Create crop box

        case ACTION_CROP:
          if (!range.x || !range.y) {
            renderable = false;
            break;
          }

          offset = getOffset(this.cropper);
          left = pointer.startX - offset.left;
          top = pointer.startY - offset.top;
          width = cropBoxData.minWidth;
          height = cropBoxData.minHeight;

          if (range.x > 0) {
            action = range.y > 0 ? ACTION_SOUTH_EAST : ACTION_NORTH_EAST;
          } else if (range.x < 0) {
            left -= width;
            action = range.y > 0 ? ACTION_SOUTH_WEST : ACTION_NORTH_WEST;
          }

          if (range.y < 0) {
            top -= height;
          } // Show the crop box if is hidden


          if (!this.cropped) {
            removeClass(this.cropBox, CLASS_HIDDEN);
            this.cropped = true;

            if (this.limited) {
              this.limitCropBox(true, true);
            }
          }

          break;

        default:
      }

      if (renderable) {
        cropBoxData.width = width;
        cropBoxData.height = height;
        cropBoxData.left = left;
        cropBoxData.top = top;
        this.action = action;
        this.renderCropBox();
      } // Override


      forEach(pointers, function (p) {
        p.startX = p.endX;
        p.startY = p.endY;
      });
    }
  };

  var methods = {
    // Show the crop box manually
    crop: function crop() {
      if (this.ready && !this.cropped && !this.disabled) {
        this.cropped = true;
        this.limitCropBox(true, true);

        if (this.options.modal) {
          addClass(this.dragBox, CLASS_MODAL);
        }

        removeClass(this.cropBox, CLASS_HIDDEN);
        this.setCropBoxData(this.initialCropBoxData);
      }

      return this;
    },
    // Reset the image and crop box to their initial states
    reset: function reset() {
      if (this.ready && !this.disabled) {
        this.imageData = assign({}, this.initialImageData);
        this.canvasData = assign({}, this.initialCanvasData);
        this.cropBoxData = assign({}, this.initialCropBoxData);
        this.renderCanvas();

        if (this.cropped) {
          this.renderCropBox();
        }
      }

      return this;
    },
    // Clear the crop box
    clear: function clear() {
      if (this.cropped && !this.disabled) {
        assign(this.cropBoxData, {
          left: 0,
          top: 0,
          width: 0,
          height: 0
        });
        this.cropped = false;
        this.renderCropBox();
        this.limitCanvas(true, true); // Render canvas after crop box rendered

        this.renderCanvas();
        removeClass(this.dragBox, CLASS_MODAL);
        addClass(this.cropBox, CLASS_HIDDEN);
      }

      return this;
    },

    /**
     * Replace the image's src and rebuild the cropper
     * @param {string} url - The new URL.
     * @param {boolean} [hasSameSize] - Indicate if the new image has the same size as the old one.
     * @returns {Cropper} this
     */
    replace: function replace(url) {
      var hasSameSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!this.disabled && url) {
        if (this.isImg) {
          this.element.src = url;
        }

        if (hasSameSize) {
          this.url = url;
          this.image.src = url;

          if (this.ready) {
            this.viewBoxImage.src = url;
            forEach(this.previews, function (element) {
              element.getElementsByTagName('img')[0].src = url;
            });
          }
        } else {
          if (this.isImg) {
            this.replaced = true;
          }

          this.options.data = null;
          this.uncreate();
          this.load(url);
        }
      }

      return this;
    },
    // Enable (unfreeze) the cropper
    enable: function enable() {
      if (this.ready && this.disabled) {
        this.disabled = false;
        removeClass(this.cropper, CLASS_DISABLED);
      }

      return this;
    },
    // Disable (freeze) the cropper
    disable: function disable() {
      if (this.ready && !this.disabled) {
        this.disabled = true;
        addClass(this.cropper, CLASS_DISABLED);
      }

      return this;
    },

    /**
     * Destroy the cropper and remove the instance from the image
     * @returns {Cropper} this
     */
    destroy: function destroy() {
      var element = this.element;

      if (!element[NAMESPACE]) {
        return this;
      }

      element[NAMESPACE] = undefined;

      if (this.isImg && this.replaced) {
        element.src = this.originalUrl;
      }

      this.uncreate();
      return this;
    },

    /**
     * Move the canvas with relative offsets
     * @param {number} offsetX - The relative offset distance on the x-axis.
     * @param {number} [offsetY=offsetX] - The relative offset distance on the y-axis.
     * @returns {Cropper} this
     */
    move: function move(offsetX) {
      var offsetY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : offsetX;
      var _this$canvasData = this.canvasData,
          left = _this$canvasData.left,
          top = _this$canvasData.top;
      return this.moveTo(isUndefined(offsetX) ? offsetX : left + Number(offsetX), isUndefined(offsetY) ? offsetY : top + Number(offsetY));
    },

    /**
     * Move the canvas to an absolute point
     * @param {number} x - The x-axis coordinate.
     * @param {number} [y=x] - The y-axis coordinate.
     * @returns {Cropper} this
     */
    moveTo: function moveTo(x) {
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
      var canvasData = this.canvasData;
      var changed = false;
      x = Number(x);
      y = Number(y);

      if (this.ready && !this.disabled && this.options.movable) {
        if (isNumber(x)) {
          canvasData.left = x;
          changed = true;
        }

        if (isNumber(y)) {
          canvasData.top = y;
          changed = true;
        }

        if (changed) {
          this.renderCanvas(true);
        }
      }

      return this;
    },

    /**
     * Zoom the canvas with a relative ratio
     * @param {number} ratio - The target ratio.
     * @param {Event} _originalEvent - The original event if any.
     * @returns {Cropper} this
     */
    zoom: function zoom(ratio, _originalEvent) {
      var canvasData = this.canvasData;
      ratio = Number(ratio);

      if (ratio < 0) {
        ratio = 1 / (1 - ratio);
      } else {
        ratio = 1 + ratio;
      }

      return this.zoomTo(canvasData.width * ratio / canvasData.naturalWidth, null, _originalEvent);
    },

    /**
     * Zoom the canvas to an absolute ratio
     * @param {number} ratio - The target ratio.
     * @param {Object} pivot - The zoom pivot point coordinate.
     * @param {Event} _originalEvent - The original event if any.
     * @returns {Cropper} this
     */
    zoomTo: function zoomTo(ratio, pivot, _originalEvent) {
      var options = this.options,
          canvasData = this.canvasData;
      var width = canvasData.width,
          height = canvasData.height,
          naturalWidth = canvasData.naturalWidth,
          naturalHeight = canvasData.naturalHeight;
      ratio = Number(ratio);

      if (ratio >= 0 && this.ready && !this.disabled && options.zoomable) {
        var newWidth = naturalWidth * ratio;
        var newHeight = naturalHeight * ratio;

        if (dispatchEvent(this.element, EVENT_ZOOM, {
          ratio: ratio,
          oldRatio: width / naturalWidth,
          originalEvent: _originalEvent
        }) === false) {
          return this;
        }

        if (_originalEvent) {
          var pointers = this.pointers;
          var offset = getOffset(this.cropper);
          var center = pointers && Object.keys(pointers).length ? getPointersCenter(pointers) : {
            pageX: _originalEvent.pageX,
            pageY: _originalEvent.pageY
          }; // Zoom from the triggering point of the event

          canvasData.left -= (newWidth - width) * ((center.pageX - offset.left - canvasData.left) / width);
          canvasData.top -= (newHeight - height) * ((center.pageY - offset.top - canvasData.top) / height);
        } else if (isPlainObject(pivot) && isNumber(pivot.x) && isNumber(pivot.y)) {
          canvasData.left -= (newWidth - width) * ((pivot.x - canvasData.left) / width);
          canvasData.top -= (newHeight - height) * ((pivot.y - canvasData.top) / height);
        } else {
          // Zoom from the center of the canvas
          canvasData.left -= (newWidth - width) / 2;
          canvasData.top -= (newHeight - height) / 2;
        }

        canvasData.width = newWidth;
        canvasData.height = newHeight;
        this.renderCanvas(true);
      }

      return this;
    },

    /**
     * Rotate the canvas with a relative degree
     * @param {number} degree - The rotate degree.
     * @returns {Cropper} this
     */
    rotate: function rotate(degree) {
      return this.rotateTo((this.imageData.rotate || 0) + Number(degree));
    },

    /**
     * Rotate the canvas to an absolute degree
     * @param {number} degree - The rotate degree.
     * @returns {Cropper} this
     */
    rotateTo: function rotateTo(degree) {
      degree = Number(degree);

      if (isNumber(degree) && this.ready && !this.disabled && this.options.rotatable) {
        this.imageData.rotate = degree % 360;
        this.renderCanvas(true, true);
      }

      return this;
    },

    /**
     * Scale the image on the x-axis.
     * @param {number} scaleX - The scale ratio on the x-axis.
     * @returns {Cropper} this
     */
    scaleX: function scaleX(_scaleX) {
      var scaleY = this.imageData.scaleY;
      return this.scale(_scaleX, isNumber(scaleY) ? scaleY : 1);
    },

    /**
     * Scale the image on the y-axis.
     * @param {number} scaleY - The scale ratio on the y-axis.
     * @returns {Cropper} this
     */
    scaleY: function scaleY(_scaleY) {
      var scaleX = this.imageData.scaleX;
      return this.scale(isNumber(scaleX) ? scaleX : 1, _scaleY);
    },

    /**
     * Scale the image
     * @param {number} scaleX - The scale ratio on the x-axis.
     * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
     * @returns {Cropper} this
     */
    scale: function scale(scaleX) {
      var scaleY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : scaleX;
      var imageData = this.imageData;
      var transformed = false;
      scaleX = Number(scaleX);
      scaleY = Number(scaleY);

      if (this.ready && !this.disabled && this.options.scalable) {
        if (isNumber(scaleX)) {
          imageData.scaleX = scaleX;
          transformed = true;
        }

        if (isNumber(scaleY)) {
          imageData.scaleY = scaleY;
          transformed = true;
        }

        if (transformed) {
          this.renderCanvas(true, true);
        }
      }

      return this;
    },

    /**
     * Get the cropped area position and size data (base on the original image)
     * @param {boolean} [rounded=false] - Indicate if round the data values or not.
     * @returns {Object} The result cropped data.
     */
    getData: function getData() {
      var rounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var options = this.options,
          imageData = this.imageData,
          canvasData = this.canvasData,
          cropBoxData = this.cropBoxData;
      var data;

      if (this.ready && this.cropped) {
        data = {
          x: cropBoxData.left - canvasData.left,
          y: cropBoxData.top - canvasData.top,
          width: cropBoxData.width,
          height: cropBoxData.height
        };
        var ratio = imageData.width / imageData.naturalWidth;
        forEach(data, function (n, i) {
          data[i] = n / ratio;
        });

        if (rounded) {
          // In case rounding off leads to extra 1px in right or bottom border
          // we should round the top-left corner and the dimension (#343).
          var bottom = Math.round(data.y + data.height);
          var right = Math.round(data.x + data.width);
          data.x = Math.round(data.x);
          data.y = Math.round(data.y);
          data.width = right - data.x;
          data.height = bottom - data.y;
        }
      } else {
        data = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      }

      if (options.rotatable) {
        data.rotate = imageData.rotate || 0;
      }

      if (options.scalable) {
        data.scaleX = imageData.scaleX || 1;
        data.scaleY = imageData.scaleY || 1;
      }

      return data;
    },

    /**
     * Set the cropped area position and size with new data
     * @param {Object} data - The new data.
     * @returns {Cropper} this
     */
    setData: function setData(data) {
      var options = this.options,
          imageData = this.imageData,
          canvasData = this.canvasData;
      var cropBoxData = {};

      if (this.ready && !this.disabled && isPlainObject(data)) {
        var transformed = false;

        if (options.rotatable) {
          if (isNumber(data.rotate) && data.rotate !== imageData.rotate) {
            imageData.rotate = data.rotate;
            transformed = true;
          }
        }

        if (options.scalable) {
          if (isNumber(data.scaleX) && data.scaleX !== imageData.scaleX) {
            imageData.scaleX = data.scaleX;
            transformed = true;
          }

          if (isNumber(data.scaleY) && data.scaleY !== imageData.scaleY) {
            imageData.scaleY = data.scaleY;
            transformed = true;
          }
        }

        if (transformed) {
          this.renderCanvas(true, true);
        }

        var ratio = imageData.width / imageData.naturalWidth;

        if (isNumber(data.x)) {
          cropBoxData.left = data.x * ratio + canvasData.left;
        }

        if (isNumber(data.y)) {
          cropBoxData.top = data.y * ratio + canvasData.top;
        }

        if (isNumber(data.width)) {
          cropBoxData.width = data.width * ratio;
        }

        if (isNumber(data.height)) {
          cropBoxData.height = data.height * ratio;
        }

        this.setCropBoxData(cropBoxData);
      }

      return this;
    },

    /**
     * Get the container size data.
     * @returns {Object} The result container data.
     */
    getContainerData: function getContainerData() {
      return this.ready ? assign({}, this.containerData) : {};
    },

    /**
     * Get the image position and size data.
     * @returns {Object} The result image data.
     */
    getImageData: function getImageData() {
      return this.sized ? assign({}, this.imageData) : {};
    },

    /**
     * Get the canvas position and size data.
     * @returns {Object} The result canvas data.
     */
    getCanvasData: function getCanvasData() {
      var canvasData = this.canvasData;
      var data = {};

      if (this.ready) {
        forEach(['left', 'top', 'width', 'height', 'naturalWidth', 'naturalHeight'], function (n) {
          data[n] = canvasData[n];
        });
      }

      return data;
    },

    /**
     * Set the canvas position and size with new data.
     * @param {Object} data - The new canvas data.
     * @returns {Cropper} this
     */
    setCanvasData: function setCanvasData(data) {
      var canvasData = this.canvasData;
      var aspectRatio = canvasData.aspectRatio;

      if (this.ready && !this.disabled && isPlainObject(data)) {
        if (isNumber(data.left)) {
          canvasData.left = data.left;
        }

        if (isNumber(data.top)) {
          canvasData.top = data.top;
        }

        if (isNumber(data.width)) {
          canvasData.width = data.width;
          canvasData.height = data.width / aspectRatio;
        } else if (isNumber(data.height)) {
          canvasData.height = data.height;
          canvasData.width = data.height * aspectRatio;
        }

        this.renderCanvas(true);
      }

      return this;
    },

    /**
     * Get the crop box position and size data.
     * @returns {Object} The result crop box data.
     */
    getCropBoxData: function getCropBoxData() {
      var cropBoxData = this.cropBoxData;
      var data;

      if (this.ready && this.cropped) {
        data = {
          left: cropBoxData.left,
          top: cropBoxData.top,
          width: cropBoxData.width,
          height: cropBoxData.height
        };
      }

      return data || {};
    },

    /**
     * Set the crop box position and size with new data.
     * @param {Object} data - The new crop box data.
     * @returns {Cropper} this
     */
    setCropBoxData: function setCropBoxData(data) {
      var cropBoxData = this.cropBoxData;
      var aspectRatio = this.options.aspectRatio;
      var widthChanged;
      var heightChanged;

      if (this.ready && this.cropped && !this.disabled && isPlainObject(data)) {
        if (isNumber(data.left)) {
          cropBoxData.left = data.left;
        }

        if (isNumber(data.top)) {
          cropBoxData.top = data.top;
        }

        if (isNumber(data.width) && data.width !== cropBoxData.width) {
          widthChanged = true;
          cropBoxData.width = data.width;
        }

        if (isNumber(data.height) && data.height !== cropBoxData.height) {
          heightChanged = true;
          cropBoxData.height = data.height;
        }

        if (aspectRatio) {
          if (widthChanged) {
            cropBoxData.height = cropBoxData.width / aspectRatio;
          } else if (heightChanged) {
            cropBoxData.width = cropBoxData.height * aspectRatio;
          }
        }

        this.renderCropBox();
      }

      return this;
    },

    /**
     * Get a canvas drawn the cropped image.
     * @param {Object} [options={}] - The config options.
     * @returns {HTMLCanvasElement} - The result canvas.
     */
    getCroppedCanvas: function getCroppedCanvas() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (!this.ready || !window.HTMLCanvasElement) {
        return null;
      }

      var canvasData = this.canvasData;
      var source = getSourceCanvas(this.image, this.imageData, canvasData, options); // Returns the source canvas if it is not cropped.

      if (!this.cropped) {
        return source;
      }

      var _this$getData = this.getData(),
          initialX = _this$getData.x,
          initialY = _this$getData.y,
          initialWidth = _this$getData.width,
          initialHeight = _this$getData.height;

      var ratio = source.width / Math.floor(canvasData.naturalWidth);

      if (ratio !== 1) {
        initialX *= ratio;
        initialY *= ratio;
        initialWidth *= ratio;
        initialHeight *= ratio;
      }

      var aspectRatio = initialWidth / initialHeight;
      var maxSizes = getAdjustedSizes({
        aspectRatio: aspectRatio,
        width: options.maxWidth || Infinity,
        height: options.maxHeight || Infinity
      });
      var minSizes = getAdjustedSizes({
        aspectRatio: aspectRatio,
        width: options.minWidth || 0,
        height: options.minHeight || 0
      }, 'cover');

      var _getAdjustedSizes = getAdjustedSizes({
        aspectRatio: aspectRatio,
        width: options.width || (ratio !== 1 ? source.width : initialWidth),
        height: options.height || (ratio !== 1 ? source.height : initialHeight)
      }),
          width = _getAdjustedSizes.width,
          height = _getAdjustedSizes.height;

      width = Math.min(maxSizes.width, Math.max(minSizes.width, width));
      height = Math.min(maxSizes.height, Math.max(minSizes.height, height));
      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      canvas.width = normalizeDecimalNumber(width);
      canvas.height = normalizeDecimalNumber(height);
      context.fillStyle = options.fillColor || 'transparent';
      context.fillRect(0, 0, width, height);
      var _options$imageSmoothi = options.imageSmoothingEnabled,
          imageSmoothingEnabled = _options$imageSmoothi === void 0 ? true : _options$imageSmoothi,
          imageSmoothingQuality = options.imageSmoothingQuality;
      context.imageSmoothingEnabled = imageSmoothingEnabled;

      if (imageSmoothingQuality) {
        context.imageSmoothingQuality = imageSmoothingQuality;
      } // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D.drawImage


      var sourceWidth = source.width;
      var sourceHeight = source.height; // Source canvas parameters

      var srcX = initialX;
      var srcY = initialY;
      var srcWidth;
      var srcHeight; // Destination canvas parameters

      var dstX;
      var dstY;
      var dstWidth;
      var dstHeight;

      if (srcX <= -initialWidth || srcX > sourceWidth) {
        srcX = 0;
        srcWidth = 0;
        dstX = 0;
        dstWidth = 0;
      } else if (srcX <= 0) {
        dstX = -srcX;
        srcX = 0;
        srcWidth = Math.min(sourceWidth, initialWidth + srcX);
        dstWidth = srcWidth;
      } else if (srcX <= sourceWidth) {
        dstX = 0;
        srcWidth = Math.min(initialWidth, sourceWidth - srcX);
        dstWidth = srcWidth;
      }

      if (srcWidth <= 0 || srcY <= -initialHeight || srcY > sourceHeight) {
        srcY = 0;
        srcHeight = 0;
        dstY = 0;
        dstHeight = 0;
      } else if (srcY <= 0) {
        dstY = -srcY;
        srcY = 0;
        srcHeight = Math.min(sourceHeight, initialHeight + srcY);
        dstHeight = srcHeight;
      } else if (srcY <= sourceHeight) {
        dstY = 0;
        srcHeight = Math.min(initialHeight, sourceHeight - srcY);
        dstHeight = srcHeight;
      }

      var params = [srcX, srcY, srcWidth, srcHeight]; // Avoid "IndexSizeError"

      if (dstWidth > 0 && dstHeight > 0) {
        var scale = width / initialWidth;
        params.push(dstX * scale, dstY * scale, dstWidth * scale, dstHeight * scale);
      } // All the numerical parameters should be integer for `drawImage`
      // https://github.com/fengyuanchen/cropper/issues/476


      context.drawImage.apply(context, [source].concat(_toConsumableArray(params.map(function (param) {
        return Math.floor(normalizeDecimalNumber(param));
      }))));
      return canvas;
    },

    /**
     * Change the aspect ratio of the crop box.
     * @param {number} aspectRatio - The new aspect ratio.
     * @returns {Cropper} this
     */
    setAspectRatio: function setAspectRatio(aspectRatio) {
      var options = this.options;

      if (!this.disabled && !isUndefined(aspectRatio)) {
        // 0 -> NaN
        options.aspectRatio = Math.max(0, aspectRatio) || NaN;

        if (this.ready) {
          this.initCropBox();

          if (this.cropped) {
            this.renderCropBox();
          }
        }
      }

      return this;
    },

    /**
     * Change the drag mode.
     * @param {string} mode - The new drag mode.
     * @returns {Cropper} this
     */
    setDragMode: function setDragMode(mode) {
      var options = this.options,
          dragBox = this.dragBox,
          face = this.face;

      if (this.ready && !this.disabled) {
        var croppable = mode === DRAG_MODE_CROP;
        var movable = options.movable && mode === DRAG_MODE_MOVE;
        mode = croppable || movable ? mode : DRAG_MODE_NONE;
        options.dragMode = mode;
        setData(dragBox, DATA_ACTION, mode);
        toggleClass(dragBox, CLASS_CROP, croppable);
        toggleClass(dragBox, CLASS_MOVE, movable);

        if (!options.cropBoxMovable) {
          // Sync drag mode to crop box when it is not movable
          setData(face, DATA_ACTION, mode);
          toggleClass(face, CLASS_CROP, croppable);
          toggleClass(face, CLASS_MOVE, movable);
        }
      }

      return this;
    }
  };

  var AnotherCropper = WINDOW.Cropper;

  var Cropper =
  /*#__PURE__*/
  function () {
    /**
     * Create a new Cropper.
     * @param {Element} element - The target element for cropping.
     * @param {Object} [options={}] - The configuration options.
     */
    function Cropper(element) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, Cropper);

      if (!element || !REGEXP_TAG_NAME.test(element.tagName)) {
        throw new Error('The first argument is required and must be an <img> or <canvas> element.');
      }

      this.element = element;
      this.options = assign({}, DEFAULTS, isPlainObject(options) && options);
      this.cropped = false;
      this.disabled = false;
      this.pointers = {};
      this.ready = false;
      this.reloading = false;
      this.replaced = false;
      this.sized = false;
      this.sizing = false;
      this.init();
    }

    _createClass(Cropper, [{
      key: "init",
      value: function init() {
        var element = this.element;
        var tagName = element.tagName.toLowerCase();
        var url;

        if (element[NAMESPACE]) {
          return;
        }

        element[NAMESPACE] = this;

        if (tagName === 'img') {
          this.isImg = true; // e.g.: "img/picture.jpg"

          url = element.getAttribute('src') || '';
          this.originalUrl = url; // Stop when it's a blank image

          if (!url) {
            return;
          } // e.g.: "http://example.com/img/picture.jpg"


          url = element.src;
        } else if (tagName === 'canvas' && window.HTMLCanvasElement) {
          url = element.toDataURL();
        }

        this.load(url);
      }
    }, {
      key: "load",
      value: function load(url) {
        var _this = this;

        if (!url) {
          return;
        }

        this.url = url;
        this.imageData = {};
        var element = this.element,
            options = this.options;

        if (!options.rotatable && !options.scalable) {
          options.checkOrientation = false;
        } // Only IE10+ supports Typed Arrays


        if (!options.checkOrientation || !window.ArrayBuffer) {
          this.clone();
          return;
        } // Detect the mime type of the image directly if it is a Data URL


        if (REGEXP_DATA_URL.test(url)) {
          // Read ArrayBuffer from Data URL of JPEG images directly for better performance
          if (REGEXP_DATA_URL_JPEG.test(url)) {
            this.read(dataURLToArrayBuffer(url));
          } else {
            // Only a JPEG image may contains Exif Orientation information,
            // the rest types of Data URLs are not necessary to check orientation at all.
            this.clone();
          }

          return;
        } // 1. Detect the mime type of the image by a XMLHttpRequest.
        // 2. Load the image as ArrayBuffer for reading orientation if its a JPEG image.


        var xhr = new XMLHttpRequest();
        var clone = this.clone.bind(this);
        this.reloading = true;
        this.xhr = xhr; // 1. Cross origin requests are only supported for protocol schemes:
        // http, https, data, chrome, chrome-extension.
        // 2. Access to XMLHttpRequest from a Data URL will be blocked by CORS policy
        // in some browsers as IE11 and Safari.

        xhr.onabort = clone;
        xhr.onerror = clone;
        xhr.ontimeout = clone;

        xhr.onprogress = function () {
          // Abort the request directly if it not a JPEG image for better performance
          if (xhr.getResponseHeader('content-type') !== MIME_TYPE_JPEG) {
            xhr.abort();
          }
        };

        xhr.onload = function () {
          _this.read(xhr.response);
        };

        xhr.onloadend = function () {
          _this.reloading = false;
          _this.xhr = null;
        }; // Bust cache when there is a "crossOrigin" property to avoid browser cache error


        if (options.checkCrossOrigin && isCrossOriginURL(url) && element.crossOrigin) {
          url = addTimestamp(url);
        }

        xhr.open('GET', url);
        xhr.responseType = 'arraybuffer';
        xhr.withCredentials = element.crossOrigin === 'use-credentials';
        xhr.send();
      }
    }, {
      key: "read",
      value: function read(arrayBuffer) {
        var options = this.options,
            imageData = this.imageData; // Reset the orientation value to its default value 1
        // as some iOS browsers will render image with its orientation

        var orientation = resetAndGetOrientation(arrayBuffer);
        var rotate = 0;
        var scaleX = 1;
        var scaleY = 1;

        if (orientation > 1) {
          // Generate a new URL which has the default orientation value
          this.url = arrayBufferToDataURL(arrayBuffer, MIME_TYPE_JPEG);

          var _parseOrientation = parseOrientation(orientation);

          rotate = _parseOrientation.rotate;
          scaleX = _parseOrientation.scaleX;
          scaleY = _parseOrientation.scaleY;
        }

        if (options.rotatable) {
          imageData.rotate = rotate;
        }

        if (options.scalable) {
          imageData.scaleX = scaleX;
          imageData.scaleY = scaleY;
        }

        this.clone();
      }
    }, {
      key: "clone",
      value: function clone() {
        var element = this.element,
            url = this.url;
        var crossOrigin = element.crossOrigin;
        var crossOriginUrl = url;

        if (this.options.checkCrossOrigin && isCrossOriginURL(url)) {
          if (!crossOrigin) {
            crossOrigin = 'anonymous';
          } // Bust cache when there is not a "crossOrigin" property (#519)


          crossOriginUrl = addTimestamp(url);
        }

        this.crossOrigin = crossOrigin;
        this.crossOriginUrl = crossOriginUrl;
        var image = document.createElement('img');

        if (crossOrigin) {
          image.crossOrigin = crossOrigin;
        }

        image.src = crossOriginUrl || url;
        image.alt = element.alt || 'The image to crop';
        this.image = image;
        image.onload = this.start.bind(this);
        image.onerror = this.stop.bind(this);
        addClass(image, CLASS_HIDE);
        element.parentNode.insertBefore(image, element.nextSibling);
      }
    }, {
      key: "start",
      value: function start() {
        var _this2 = this;

        var image = this.image;
        image.onload = null;
        image.onerror = null;
        this.sizing = true; // Match all browsers that use WebKit as the layout engine in iOS devices,
        // such as Safari for iOS, Chrome for iOS, and in-app browsers.

        var isIOSWebKit = WINDOW.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(WINDOW.navigator.userAgent);

        var done = function done(naturalWidth, naturalHeight) {
          assign(_this2.imageData, {
            naturalWidth: naturalWidth,
            naturalHeight: naturalHeight,
            aspectRatio: naturalWidth / naturalHeight
          });
          _this2.sizing = false;
          _this2.sized = true;

          _this2.build();
        }; // Most modern browsers (excepts iOS WebKit)


        if (image.naturalWidth && !isIOSWebKit) {
          done(image.naturalWidth, image.naturalHeight);
          return;
        }

        var sizingImage = document.createElement('img');
        var body = document.body || document.documentElement;
        this.sizingImage = sizingImage;

        sizingImage.onload = function () {
          done(sizingImage.width, sizingImage.height);

          if (!isIOSWebKit) {
            body.removeChild(sizingImage);
          }
        };

        sizingImage.src = image.src; // iOS WebKit will convert the image automatically
        // with its orientation once append it into DOM (#279)

        if (!isIOSWebKit) {
          sizingImage.style.cssText = 'left:0;' + 'max-height:none!important;' + 'max-width:none!important;' + 'min-height:0!important;' + 'min-width:0!important;' + 'opacity:0;' + 'position:absolute;' + 'top:0;' + 'z-index:-1;';
          body.appendChild(sizingImage);
        }
      }
    }, {
      key: "stop",
      value: function stop() {
        var image = this.image;
        image.onload = null;
        image.onerror = null;
        image.parentNode.removeChild(image);
        this.image = null;
      }
    }, {
      key: "build",
      value: function build() {
        if (!this.sized || this.ready) {
          return;
        }

        var element = this.element,
            options = this.options,
            image = this.image; // Create cropper elements

        var container = element.parentNode;
        var template = document.createElement('div');
        template.innerHTML = TEMPLATE;
        var cropper = template.querySelector(".".concat(NAMESPACE, "-container"));
        var canvas = cropper.querySelector(".".concat(NAMESPACE, "-canvas"));
        var dragBox = cropper.querySelector(".".concat(NAMESPACE, "-drag-box"));
        var cropBox = cropper.querySelector(".".concat(NAMESPACE, "-crop-box"));
        var face = cropBox.querySelector(".".concat(NAMESPACE, "-face"));
        this.container = container;
        this.cropper = cropper;
        this.canvas = canvas;
        this.dragBox = dragBox;
        this.cropBox = cropBox;
        this.viewBox = cropper.querySelector(".".concat(NAMESPACE, "-view-box"));
        this.face = face;
        canvas.appendChild(image); // Hide the original image

        addClass(element, CLASS_HIDDEN); // Inserts the cropper after to the current image

        container.insertBefore(cropper, element.nextSibling); // Show the image if is hidden

        if (!this.isImg) {
          removeClass(image, CLASS_HIDE);
        }

        this.initPreview();
        this.bind();
        options.initialAspectRatio = Math.max(0, options.initialAspectRatio) || NaN;
        options.aspectRatio = Math.max(0, options.aspectRatio) || NaN;
        options.viewMode = Math.max(0, Math.min(3, Math.round(options.viewMode))) || 0;
        addClass(cropBox, CLASS_HIDDEN);

        if (!options.guides) {
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-dashed")), CLASS_HIDDEN);
        }

        if (!options.center) {
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-center")), CLASS_HIDDEN);
        }

        if (options.background) {
          addClass(cropper, "".concat(NAMESPACE, "-bg"));
        }

        if (!options.highlight) {
          addClass(face, CLASS_INVISIBLE);
        }

        if (options.cropBoxMovable) {
          addClass(face, CLASS_MOVE);
          setData(face, DATA_ACTION, ACTION_ALL);
        }

        if (!options.cropBoxResizable) {
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-line")), CLASS_HIDDEN);
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-point")), CLASS_HIDDEN);
        }

        this.render();
        this.ready = true;
        this.setDragMode(options.dragMode);

        if (options.autoCrop) {
          this.crop();
        }

        this.setData(options.data);

        if (isFunction(options.ready)) {
          addListener(element, EVENT_READY, options.ready, {
            once: true
          });
        }

        dispatchEvent(element, EVENT_READY);
      }
    }, {
      key: "unbuild",
      value: function unbuild() {
        if (!this.ready) {
          return;
        }

        this.ready = false;
        this.unbind();
        this.resetPreview();
        this.cropper.parentNode.removeChild(this.cropper);
        removeClass(this.element, CLASS_HIDDEN);
      }
    }, {
      key: "uncreate",
      value: function uncreate() {
        if (this.ready) {
          this.unbuild();
          this.ready = false;
          this.cropped = false;
        } else if (this.sizing) {
          this.sizingImage.onload = null;
          this.sizing = false;
          this.sized = false;
        } else if (this.reloading) {
          this.xhr.onabort = null;
          this.xhr.abort();
        } else if (this.image) {
          this.stop();
        }
      }
      /**
       * Get the no conflict cropper class.
       * @returns {Cropper} The cropper class.
       */

    }], [{
      key: "noConflict",
      value: function noConflict() {
        window.Cropper = AnotherCropper;
        return Cropper;
      }
      /**
       * Change the default options.
       * @param {Object} options - The new default options.
       */

    }, {
      key: "setDefaults",
      value: function setDefaults(options) {
        assign(DEFAULTS, isPlainObject(options) && options);
      }
    }]);

    return Cropper;
  }();

  assign(Cropper.prototype, render, preview, events, handlers, change, methods);

  return Cropper;

}));


/***/ }),

/***/ "bdd7":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".v-select{position:relative;font-family:inherit}.v-select,.v-select *{-webkit-box-sizing:border-box;box-sizing:border-box}@-webkit-keyframes vSelectSpinner{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes vSelectSpinner{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.vs__fade-enter-active,.vs__fade-leave-active{pointer-events:none;-webkit-transition:opacity .15s cubic-bezier(1,.5,.8,1);transition:opacity .15s cubic-bezier(1,.5,.8,1)}.vs__fade-enter,.vs__fade-leave-to{opacity:0}.vs--disabled .vs__clear,.vs--disabled .vs__dropdown-toggle,.vs--disabled .vs__open-indicator,.vs--disabled .vs__search,.vs--disabled .vs__selected{cursor:not-allowed;background-color:#f8f8f8}.v-select[dir=rtl] .vs__actions{padding:0 3px 0 6px}.v-select[dir=rtl] .vs__clear{margin-left:6px;margin-right:0}.v-select[dir=rtl] .vs__deselect{margin-left:0;margin-right:2px}.v-select[dir=rtl] .vs__dropdown-menu{text-align:right}.vs__dropdown-toggle{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 0 4px;background:none;border:1px solid rgba(60,60,60,.26);border-radius:4px;white-space:normal}.vs__dropdown-toggle,.vs__selected-options{display:-webkit-box;display:-ms-flexbox;display:flex}.vs__selected-options{-ms-flex-preferred-size:100%;flex-basis:100%;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:0 2px;position:relative}.vs__actions{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:4px 6px 0 3px}.vs--searchable .vs__dropdown-toggle{cursor:text}.vs--unsearchable .vs__dropdown-toggle{cursor:pointer}.vs--open .vs__dropdown-toggle{border-bottom-color:transparent;border-bottom-left-radius:0;border-bottom-right-radius:0}.vs__open-indicator{fill:rgba(60,60,60,.5);-webkit-transform:scale(1);transform:scale(1);-webkit-transition:-webkit-transform .15s cubic-bezier(1,-.115,.975,.855);transition:-webkit-transform .15s cubic-bezier(1,-.115,.975,.855);transition:transform .15s cubic-bezier(1,-.115,.975,.855);transition:transform .15s cubic-bezier(1,-.115,.975,.855),-webkit-transform .15s cubic-bezier(1,-.115,.975,.855);-webkit-transition-timing-function:cubic-bezier(1,-.115,.975,.855);transition-timing-function:cubic-bezier(1,-.115,.975,.855)}.vs--open .vs__open-indicator{-webkit-transform:rotate(180deg) scale(1);transform:rotate(180deg) scale(1)}.vs--loading .vs__open-indicator{opacity:0}.vs__clear{fill:rgba(60,60,60,.5);padding:0;border:0;background-color:transparent;cursor:pointer;margin-right:8px}.vs__dropdown-menu{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;top:calc(100% - 1px);left:0;z-index:1000;padding:5px 0;margin:0;width:100%;max-height:350px;min-width:160px;overflow-y:auto;-webkit-box-shadow:0 3px 6px 0 rgba(0,0,0,.15);box-shadow:0 3px 6px 0 rgba(0,0,0,.15);border:1px solid rgba(60,60,60,.26);border-top-style:none;border-radius:0 0 4px 4px;text-align:left;list-style:none;background:#fff}.vs__no-options{text-align:center}.vs__dropdown-option{line-height:1.42857143;display:block;padding:3px 20px;clear:both;color:#333;white-space:nowrap}.vs__dropdown-option:hover{cursor:pointer}.vs__dropdown-option--highlight{background:#5897fb;color:#fff}.vs__dropdown-option--disabled{background:inherit;color:rgba(60,60,60,.5)}.vs__dropdown-option--disabled:hover{cursor:inherit}.vs__selected{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#f0f0f0;border:1px solid rgba(60,60,60,.26);border-radius:4px;color:#333;line-height:1.4;margin:4px 2px 0;padding:0 .25em}.vs__deselect{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-appearance:none;-moz-appearance:none;appearance:none;margin-left:4px;padding:0;border:0;cursor:pointer;background:none;fill:rgba(60,60,60,.5);text-shadow:0 1px 0 #fff}.vs--single .vs__selected{background-color:transparent;border-color:transparent}.vs--single.vs--open .vs__selected{position:absolute;opacity:.4}.vs--single.vs--searching .vs__selected{display:none}.vs__search::-webkit-search-cancel-button{display:none}.vs__search::-ms-clear,.vs__search::-webkit-search-decoration,.vs__search::-webkit-search-results-button,.vs__search::-webkit-search-results-decoration{display:none}.vs__search,.vs__search:focus{-webkit-appearance:none;-moz-appearance:none;appearance:none;line-height:1.4;font-size:1em;border:1px solid transparent;border-left:none;outline:none;margin:4px 0 0;padding:0 7px;background:none;-webkit-box-shadow:none;box-shadow:none;width:0;max-width:100%;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.vs__search::-webkit-input-placeholder{color:inherit}.vs__search::-moz-placeholder{color:inherit}.vs__search:-ms-input-placeholder{color:inherit}.vs__search::-ms-input-placeholder{color:inherit}.vs__search::placeholder{color:inherit}.vs--unsearchable .vs__search{opacity:1}.vs--unsearchable .vs__search:hover{cursor:pointer}.vs--single.vs--searching:not(.vs--open):not(.vs--loading) .vs__search{opacity:.2}.vs__spinner{-ms-flex-item-align:center;align-self:center;opacity:0;font-size:5px;text-indent:-9999em;overflow:hidden;border:.9em solid hsla(0,0%,39.2%,.1);border-left-color:rgba(60,60,60,.45);-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-animation:vSelectSpinner 1.1s linear infinite;animation:vSelectSpinner 1.1s linear infinite;-webkit-transition:opacity .1s;transition:opacity .1s}.vs__spinner,.vs__spinner:after{border-radius:50%;width:5em;height:5em}.vs--loading .vs__spinner{opacity:1}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c6b6":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var setGlobal = __webpack_require__("ce4e");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "c975":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $indexOf = __webpack_require__("4d64").indexOf;
var arrayMethodIsStrict = __webpack_require__("a640");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');
var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toIndexedObject = __webpack_require__("fc6a");
var indexOf = __webpack_require__("4d64").indexOf;
var hiddenKeys = __webpack_require__("d012");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "cdf9":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var isObject = __webpack_require__("861d");
var newPromiseCapability = __webpack_require__("f069");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "ce4e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "d012":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var global = __webpack_require__("da84");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "d28b":
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("746f");

// `Symbol.iterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ "d2bb":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var aPossiblePrototype = __webpack_require__("3bbe");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "d3b7":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var redefine = __webpack_require__("6eeb");
var toString = __webpack_require__("b041");

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "d44e":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("9bf2").f;
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "d784":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__("ac1f");
var redefine = __webpack_require__("6eeb");
var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var regexpExec = __webpack_require__("9263");
var createNonEnumerableProperty = __webpack_require__("9112");

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "d81d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $map = __webpack_require__("b727").map;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('map');

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "da84":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "ddb0":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var ArrayIteratorMethods = __webpack_require__("e260");
var createNonEnumerableProperty = __webpack_require__("9112");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

/***/ "df75":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "e01a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.github.io/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__("23e7");
var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var has = __webpack_require__("5135");
var isObject = __webpack_require__("861d");
var defineProperty = __webpack_require__("9bf2").f;
var copyConstructorProperties = __webpack_require__("e893");

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "e163":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toObject = __webpack_require__("7b0b");
var sharedKey = __webpack_require__("f772");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("e177");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "e177":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "e260":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__("fc6a");
var addToUnscopables = __webpack_require__("44d2");
var Iterators = __webpack_require__("3f8c");
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("7dd0");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "e2cc":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("6eeb");

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "e31a":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#app{margin-top:60px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "e538":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "e667":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),

/***/ "e6cf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var IS_PURE = __webpack_require__("c430");
var global = __webpack_require__("da84");
var getBuiltIn = __webpack_require__("d066");
var NativePromise = __webpack_require__("fea9");
var redefine = __webpack_require__("6eeb");
var redefineAll = __webpack_require__("e2cc");
var setToStringTag = __webpack_require__("d44e");
var setSpecies = __webpack_require__("2626");
var isObject = __webpack_require__("861d");
var aFunction = __webpack_require__("1c0b");
var anInstance = __webpack_require__("19aa");
var classof = __webpack_require__("c6b6");
var inspectSource = __webpack_require__("8925");
var iterate = __webpack_require__("2266");
var checkCorrectnessOfIteration = __webpack_require__("1c7e");
var speciesConstructor = __webpack_require__("4840");
var task = __webpack_require__("2cf4").set;
var microtask = __webpack_require__("b575");
var promiseResolve = __webpack_require__("cdf9");
var hostReportErrors = __webpack_require__("44de");
var newPromiseCapabilityModule = __webpack_require__("f069");
var perform = __webpack_require__("e667");
var InternalStateModule = __webpack_require__("69f3");
var isForced = __webpack_require__("94ca");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var PromiseConstructor = NativePromise;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var $fetch = getBuiltIn('fetch');
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var IS_NODE = classof(process) == 'process';
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
  if (!GLOBAL_CORE_JS_PROMISE) {
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (V8_VERSION === 66) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    if (!IS_NODE && typeof PromiseRejectionEvent != 'function') return true;
  }
  // We need Promise#finally in the pure version for preventing prototype pollution
  if (IS_PURE && !PromiseConstructor.prototype['finally']) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = PromiseConstructor.resolve(1);
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  return !(promise.then(function () { /* empty */ }) instanceof FakePromise);
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function (promise, state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(promise, state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(promise, state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (handler = global['on' + name]) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (promise, state) {
  task.call(global, function () {
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (promise, state) {
  task.call(global, function () {
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, promise, state, unwrap) {
  return function (value) {
    fn(promise, state, value, unwrap);
  };
};

var internalReject = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(promise, state, true);
};

var internalResolve = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind(internalResolve, promise, wrapper, state),
            bind(internalReject, promise, wrapper, state)
          );
        } catch (error) {
          internalReject(promise, wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(promise, state, false);
    }
  } catch (error) {
    internalReject(promise, { done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, this, state), bind(internalReject, this, state));
    } catch (error) {
      internalReject(this, state, error);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
    // `Promise.prototype.then` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(this, state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, promise, state);
    this.reject = bind(internalReject, promise, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && typeof NativePromise == 'function') {
    nativeThen = NativePromise.prototype.then;

    // wrap native Promise#then for native async functions
    redefine(NativePromise.prototype, 'then', function then(onFulfilled, onRejected) {
      var that = this;
      return new PromiseConstructor(function (resolve, reject) {
        nativeThen.call(that, resolve, reject);
      }).then(onFulfilled, onRejected);
    // https://github.com/zloirock/core-js/issues/640
    }, { unsafe: true });

    // wrap fetch result
    if (typeof $fetch == 'function') $({ global: true, enumerable: true, forced: true }, {
      // eslint-disable-next-line no-unused-vars
      fetch: function fetch(input /* , init */) {
        return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
      }
    });
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.github.io/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.github.io/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.github.io/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.github.io/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ "e893":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var ownKeys = __webpack_require__("56ef");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "e8b5":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "e95a":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var Iterators = __webpack_require__("3f8c");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "f069":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__("1c0b");

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
};

// 25.4.1.5 NewPromiseCapability(C)
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "f5df":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classofRaw = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "f772":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "App", function() { return /* reexport */ App; });
__webpack_require__.d(__webpack_exports__, "Lama", function() { return /* reexport */ lama; });
__webpack_require__.d(__webpack_exports__, "LamaForm", function() { return /* reexport */ Form; });
__webpack_require__.d(__webpack_exports__, "Builder", function() { return /* reexport */ Builder; });
__webpack_require__.d(__webpack_exports__, "Control", function() { return /* reexport */ Control; });
__webpack_require__.d(__webpack_exports__, "ControlField", function() { return /* reexport */ fields_ControlField; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"161888d0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=b6befb94&
var Appvue_type_template_id_b6befb94_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('ul',{staticClass:"nav nav-tabs"},_vm._l((_vm.tabs),function(tab,index){return _c('li',{key:index,staticClass:"nav-item"},[_c('a',{staticClass:"nav-link",class:{active: _vm.activeTab==index},attrs:{"href":"#"},on:{"click":function($event){_vm.activeTab=index}}},[_vm._v(_vm._s(tab))])])}),0),_c('div',{staticClass:"pt-2"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.activeTab==0),expression:"activeTab==0"}]},[_c('builder',{ref:"builder",attrs:{"connector":_vm.connector},model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v},expression:"model"}})],1),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.activeTab==1),expression:"activeTab==1"}]},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.schemaText),expression:"schemaText"}],staticStyle:{"width":"100%","height":"300px"},domProps:{"value":(_vm.schemaText)},on:{"input":function($event){if($event.target.composing){ return; }_vm.schemaText=$event.target.value}}})]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.activeTab==2),expression:"activeTab==2"}]},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.optionsText),expression:"optionsText"}],staticStyle:{"width":"100%","height":"300px"},domProps:{"value":(_vm.optionsText)},on:{"input":function($event){if($event.target.composing){ return; }_vm.optionsText=$event.target.value}}})]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.activeTab==3),expression:"activeTab==3"}]},[_c('div',{attrs:{"id":"lama"}}),_c('lama-form',_vm._b({model:{value:(_vm.demoModel),callback:function ($$v) {_vm.demoModel=$$v},expression:"demoModel"}},'lama-form',_vm.demo,false))],1)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=b6befb94&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"161888d0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Builder.vue?vue&type=template&id=2f129546&
var Buildervue_type_template_id_2f129546_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-6"},[_c('lama-form',_vm._b({attrs:{"debug":_vm.debug},model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v},expression:"model"}},'lama-form',_vm.props,false))],1),_c('div',{staticClass:"col-md-6"},[_c('lama-form',_vm._b({attrs:{"debug":_vm.debug},model:{value:(_vm.demo),callback:function ($$v) {_vm.demo=$$v},expression:"demo"}},'lama-form',_vm.demoProps,false)),(_vm.debug)?_c('div',[_c('hr'),_vm._v(" schema = "+_vm._s(_vm.value.schema)+" "),_c('hr'),_vm._v(" options = "+_vm._s(_vm.value.options)+" ")]):_vm._e()],1)]),_c('hr')])}
var Buildervue_type_template_id_2f129546_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Builder.vue?vue&type=template&id=2f129546&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"161888d0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Form.vue?vue&type=template&id=e6f0ddee&scoped=true&
var Formvue_type_template_id_e6f0ddee_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('ValidationObserver',{ref:"validationobserver"},[_c('div',[_c('form-field',_vm._b({model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v},expression:"model"}},'form-field',_vm.props,false))],1)]),(_vm.debug)?_c('div',[_vm._v(" "+_vm._s(_vm.model)+" ")]):_vm._e()],1)}
var Formvue_type_template_id_e6f0ddee_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Form.vue?vue&type=template&id=e6f0ddee&scoped=true&

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"161888d0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Field.vue?vue&type=template&id=7f4d617c&scoped=true&
var Fieldvue_type_template_id_7f4d617c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c(_vm.fieldComponent,_vm._b({tag:"component",model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v},expression:"model"}},'component',_vm.props,false))],1)}
var Fieldvue_type_template_id_7f4d617c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Field.vue?vue&type=template&id=7f4d617c&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("b64b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.constructor.js
var es_regexp_constructor = __webpack_require__("4d63");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("25f0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("a4d3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__("e01a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__("d28b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("3ca3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js







function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}
// CONCATENATED MODULE: ./node_modules/vee-validate/dist/vee-validate.esm.js
/**
  * vee-validate v3.2.5
  * (c) 2020 Abdelrahman Awad
  * @license MIT
  */


/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function vee_validate_esm_isNaN(value) {
    // NaN is the one value that does not equal itself.
    // eslint-disable-next-line
    return value !== value;
}
function isNullOrUndefined(value) {
    return value === null || value === undefined;
}
function isEmptyArray(arr) {
    return Array.isArray(arr) && arr.length === 0;
}
var isObject = function (obj) {
    return obj !== null && obj && typeof obj === 'object' && !Array.isArray(obj);
};
/**
 * Shallow object comparison.
 */
function isEqual(lhs, rhs) {
    if (lhs instanceof RegExp && rhs instanceof RegExp) {
        return isEqual(lhs.source, rhs.source) && isEqual(lhs.flags, rhs.flags);
    }
    if (Array.isArray(lhs) && Array.isArray(rhs)) {
        if (lhs.length !== rhs.length)
            return false;
        for (var i = 0; i < lhs.length; i++) {
            if (!isEqual(lhs[i], rhs[i])) {
                return false;
            }
        }
        return true;
    }
    // if both are objects, compare each key recursively.
    if (isObject(lhs) && isObject(rhs)) {
        return (Object.keys(lhs).every(function (key) {
            return isEqual(lhs[key], rhs[key]);
        }) &&
            Object.keys(rhs).every(function (key) {
                return isEqual(lhs[key], rhs[key]);
            }));
    }
    if (vee_validate_esm_isNaN(lhs) && vee_validate_esm_isNaN(rhs)) {
        return true;
    }
    return lhs === rhs;
}
// Checks if a given value is not an empty string or null or undefined.
function isSpecified(val) {
    if (val === '') {
        return false;
    }
    return !isNullOrUndefined(val);
}
function isCallable(fn) {
    return typeof fn === 'function';
}
function isLocator(value) {
    return isCallable(value) && !!value.__locatorRef;
}

function findIndex(arrayLike, predicate) {
    var array = Array.isArray(arrayLike) ? arrayLike : toArray(arrayLike);
    if (isCallable(array.findIndex)) {
        return array.findIndex(predicate);
    }
    /* istanbul ignore next */
    for (var i = 0; i < array.length; i++) {
        if (predicate(array[i], i)) {
            return i;
        }
    }
    /* istanbul ignore next */
    return -1;
}
/**
 * finds the first element that satisfies the predicate callback, polyfills array.find
 */
function find(arrayLike, predicate) {
    var array = Array.isArray(arrayLike) ? arrayLike : toArray(arrayLike);
    var idx = findIndex(array, predicate);
    return idx === -1 ? undefined : array[idx];
}
function includes(collection, item) {
    return collection.indexOf(item) !== -1;
}
/**
 * Converts an array-like object to array, provides a simple polyfill for Array.from
 */
function toArray(arrayLike) {
    if (isCallable(Array.from)) {
        return Array.from(arrayLike);
    }
    /* istanbul ignore next */
    return _copyArray(arrayLike);
}
/* istanbul ignore next */
function _copyArray(arrayLike) {
    var array = [];
    var length = arrayLike.length;
    for (var i = 0; i < length; i++) {
        array.push(arrayLike[i]);
    }
    return array;
}
function values(obj) {
    if (isCallable(Object.values)) {
        return Object.values(obj);
    }
    // fallback to keys()
    /* istanbul ignore next */
    return Object.keys(obj).map(function (k) { return obj[k]; });
}
function merge(target, source) {
    Object.keys(source).forEach(function (key) {
        if (isObject(source[key])) {
            if (!target[key]) {
                target[key] = {};
            }
            merge(target[key], source[key]);
            return;
        }
        target[key] = source[key];
    });
    return target;
}

function createFlags() {
    return {
        untouched: true,
        touched: false,
        dirty: false,
        pristine: true,
        valid: false,
        invalid: false,
        validated: false,
        pending: false,
        required: false,
        changed: false,
        passed: false,
        failed: false
    };
}

function identity(x) {
    return x;
}
function debounce(fn, wait, token) {
    if (wait === void 0) { wait = 0; }
    if (token === void 0) { token = { cancelled: false }; }
    if (wait === 0) {
        return fn;
    }
    var timeout;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var later = function () {
            timeout = undefined;
            // check if the fn call was cancelled.
            if (!token.cancelled)
                fn.apply(void 0, args);
        };
        // because we might want to use Node.js setTimout for SSR.
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Emits a warning to the console
 */
function warn(message) {
    console.warn("[vee-validate] " + message);
}
/**
 * Replaces placeholder values in a string with their actual values
 */
function interpolate(template, values) {
    return template.replace(/{([^}]+)}/g, function (_, p) {
        return p in values ? values[p] : "{" + p + "}";
    });
}

var RULES = {};
function normalizeSchema(schema) {
    var _a;
    if ((_a = schema.params) === null || _a === void 0 ? void 0 : _a.length) {
        schema.params = schema.params.map(function (param) {
            if (typeof param === 'string') {
                return { name: param };
            }
            return param;
        });
    }
    return schema;
}
var RuleContainer = /** @class */ (function () {
    function RuleContainer() {
    }
    RuleContainer.extend = function (name, schema) {
        // if rule already exists, overwrite it.
        var rule = normalizeSchema(schema);
        if (RULES[name]) {
            RULES[name] = merge(RULES[name], schema);
            return;
        }
        RULES[name] = __assign({ lazy: false, computesRequired: false }, rule);
    };
    RuleContainer.isLazy = function (name) {
        var _a;
        return !!((_a = RULES[name]) === null || _a === void 0 ? void 0 : _a.lazy);
    };
    RuleContainer.isRequireRule = function (name) {
        var _a;
        return !!((_a = RULES[name]) === null || _a === void 0 ? void 0 : _a.computesRequired);
    };
    RuleContainer.getRuleDefinition = function (ruleName) {
        return RULES[ruleName];
    };
    return RuleContainer;
}());
/**
 * Adds a custom validator to the list of validation rules.
 */
function extend(name, schema) {
    // makes sure new rules are properly formatted.
    guardExtend(name, schema);
    // Full schema object.
    if (typeof schema === 'object') {
        RuleContainer.extend(name, schema);
        return;
    }
    RuleContainer.extend(name, {
        validate: schema
    });
}
/**
 * Guards from extension violations.
 */
function guardExtend(name, validator) {
    if (isCallable(validator)) {
        return;
    }
    if (isCallable(validator.validate)) {
        return;
    }
    if (RuleContainer.getRuleDefinition(name)) {
        return;
    }
    throw new Error("Extension Error: The validator '" + name + "' must be a function or have a 'validate' method.");
}

var DEFAULT_CONFIG = {
    defaultMessage: "{_field_} is not valid.",
    skipOptional: true,
    classes: {
        touched: 'touched',
        untouched: 'untouched',
        valid: 'valid',
        invalid: 'invalid',
        pristine: 'pristine',
        dirty: 'dirty' // control has been interacted with
    },
    bails: true,
    mode: 'aggressive',
    useConstraintAttrs: true
};
var currentConfig = __assign({}, DEFAULT_CONFIG);
var getConfig = function () { return currentConfig; };
var setConfig = function (newConf) {
    currentConfig = __assign(__assign({}, currentConfig), newConf);
};
var configure = function (cfg) {
    setConfig(cfg);
};

/**
 * Normalizes the given rules expression.
 */
function normalizeRules(rules) {
    // if falsy value return an empty object.
    var acc = {};
    Object.defineProperty(acc, '_$$isNormalized', {
        value: true,
        writable: false,
        enumerable: false,
        configurable: false
    });
    if (!rules) {
        return acc;
    }
    // Object is already normalized, skip.
    if (isObject(rules) && rules._$$isNormalized) {
        return rules;
    }
    if (isObject(rules)) {
        return Object.keys(rules).reduce(function (prev, curr) {
            var params = [];
            if (rules[curr] === true) {
                params = [];
            }
            else if (Array.isArray(rules[curr])) {
                params = rules[curr];
            }
            else if (isObject(rules[curr])) {
                params = rules[curr];
            }
            else {
                params = [rules[curr]];
            }
            if (rules[curr] !== false) {
                prev[curr] = buildParams(curr, params);
            }
            return prev;
        }, acc);
    }
    /* istanbul ignore if */
    if (typeof rules !== 'string') {
        warn('rules must be either a string or an object.');
        return acc;
    }
    return rules.split('|').reduce(function (prev, rule) {
        var parsedRule = parseRule(rule);
        if (!parsedRule.name) {
            return prev;
        }
        prev[parsedRule.name] = buildParams(parsedRule.name, parsedRule.params);
        return prev;
    }, acc);
}
function buildParams(ruleName, provided) {
    var ruleSchema = RuleContainer.getRuleDefinition(ruleName);
    if (!ruleSchema) {
        return provided;
    }
    var params = {};
    if (!ruleSchema.params && !Array.isArray(provided)) {
        throw new Error('You provided an object params to a rule that has no defined schema.');
    }
    // Rule probably uses an array for their args, keep it as is.
    if (Array.isArray(provided) && !ruleSchema.params) {
        return provided;
    }
    var definedParams;
    // collect the params schema.
    if (!ruleSchema.params || (ruleSchema.params.length < provided.length && Array.isArray(provided))) {
        var lastDefinedParam_1;
        // collect any additional parameters in the last item.
        definedParams = provided.map(function (_, idx) {
            var _a;
            var param = (_a = ruleSchema.params) === null || _a === void 0 ? void 0 : _a[idx];
            lastDefinedParam_1 = param || lastDefinedParam_1;
            if (!param) {
                param = lastDefinedParam_1;
            }
            return param;
        });
    }
    else {
        definedParams = ruleSchema.params;
    }
    // Match the provided array length with a temporary schema.
    for (var i = 0; i < definedParams.length; i++) {
        var options = definedParams[i];
        var value = options.default;
        // if the provided is an array, map element value.
        if (Array.isArray(provided)) {
            if (i in provided) {
                value = provided[i];
            }
        }
        else {
            // If the param exists in the provided object.
            if (options.name in provided) {
                value = provided[options.name];
                // if the provided is the first param value.
            }
            else if (definedParams.length === 1) {
                value = provided;
            }
        }
        // if the param is a target, resolve the target value.
        if (options.isTarget) {
            value = createLocator(value, options.cast);
        }
        // A target param using interpolation
        if (typeof value === 'string' && value[0] === '@') {
            value = createLocator(value.slice(1), options.cast);
        }
        // If there is a transformer defined.
        if (!isLocator(value) && options.cast) {
            value = options.cast(value);
        }
        // already been set, probably multiple values.
        if (params[options.name]) {
            params[options.name] = Array.isArray(params[options.name]) ? params[options.name] : [params[options.name]];
            params[options.name].push(value);
        }
        else {
            // set the value.
            params[options.name] = value;
        }
    }
    return params;
}
/**
 * Parses a rule string expression.
 */
var parseRule = function (rule) {
    var params = [];
    var name = rule.split(':')[0];
    if (includes(rule, ':')) {
        params = rule
            .split(':')
            .slice(1)
            .join(':')
            .split(',');
    }
    return { name: name, params: params };
};
function createLocator(value, castFn) {
    var locator = function (crossTable) {
        var val = crossTable[value];
        return castFn ? castFn(val) : val;
    };
    locator.__locatorRef = value;
    return locator;
}
function extractLocators(params) {
    if (Array.isArray(params)) {
        return params.filter(isLocator);
    }
    return Object.keys(params)
        .filter(function (key) { return isLocator(params[key]); })
        .map(function (key) { return params[key]; });
}

/**
 * Validates a value against the rules.
 */
function validate(value, rules, options) {
    if (options === void 0) { options = {}; }
    var _a, _b, _c, _d, _e, _f;
    return __awaiter(this, void 0, void 0, function () {
        var shouldBail, skipIfEmpty, field, result, errors, failedRules, regenerateMap;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    shouldBail = (_a = options) === null || _a === void 0 ? void 0 : _a.bails;
                    skipIfEmpty = (_b = options) === null || _b === void 0 ? void 0 : _b.skipIfEmpty;
                    field = {
                        name: ((_c = options) === null || _c === void 0 ? void 0 : _c.name) || '{field}',
                        rules: normalizeRules(rules),
                        bails: (shouldBail !== null && shouldBail !== void 0 ? shouldBail : true),
                        skipIfEmpty: (skipIfEmpty !== null && skipIfEmpty !== void 0 ? skipIfEmpty : true),
                        forceRequired: false,
                        crossTable: ((_d = options) === null || _d === void 0 ? void 0 : _d.values) || {},
                        names: ((_e = options) === null || _e === void 0 ? void 0 : _e.names) || {},
                        customMessages: ((_f = options) === null || _f === void 0 ? void 0 : _f.customMessages) || {}
                    };
                    return [4 /*yield*/, _validate(field, value, options)];
                case 1:
                    result = _g.sent();
                    errors = [];
                    failedRules = {};
                    regenerateMap = {};
                    result.errors.forEach(function (e) {
                        var msg = e.msg();
                        errors.push(msg);
                        failedRules[e.rule] = msg;
                        regenerateMap[e.rule] = e.msg;
                    });
                    return [2 /*return*/, {
                            valid: result.valid,
                            errors: errors,
                            failedRules: failedRules,
                            regenerateMap: regenerateMap
                        }];
            }
        });
    });
}
/**
 * Starts the validation process.
 */
function _validate(field, value, _a) {
    var _b = (_a === void 0 ? {} : _a).isInitial, isInitial = _b === void 0 ? false : _b;
    return __awaiter(this, void 0, void 0, function () {
        var _c, shouldSkip, errors, rules, length, i, rule, result;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, _shouldSkip(field, value)];
                case 1:
                    _c = _d.sent(), shouldSkip = _c.shouldSkip, errors = _c.errors;
                    if (shouldSkip) {
                        return [2 /*return*/, {
                                valid: !errors.length,
                                errors: errors
                            }];
                    }
                    rules = Object.keys(field.rules).filter(function (rule) { return !RuleContainer.isRequireRule(rule); });
                    length = rules.length;
                    i = 0;
                    _d.label = 2;
                case 2:
                    if (!(i < length)) return [3 /*break*/, 5];
                    if (isInitial && RuleContainer.isLazy(rules[i])) {
                        return [3 /*break*/, 4];
                    }
                    rule = rules[i];
                    return [4 /*yield*/, _test(field, value, {
                            name: rule,
                            params: field.rules[rule]
                        })];
                case 3:
                    result = _d.sent();
                    if (!result.valid && result.error) {
                        errors.push(result.error);
                        if (field.bails) {
                            return [2 /*return*/, {
                                    valid: false,
                                    errors: errors
                                }];
                        }
                    }
                    _d.label = 4;
                case 4:
                    i++;
                    return [3 /*break*/, 2];
                case 5: return [2 /*return*/, {
                        valid: !errors.length,
                        errors: errors
                    }];
            }
        });
    });
}
function _shouldSkip(field, value) {
    return __awaiter(this, void 0, void 0, function () {
        var requireRules, length, errors, isEmpty, isEmptyAndOptional, isRequired, i, rule, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    requireRules = Object.keys(field.rules).filter(RuleContainer.isRequireRule);
                    length = requireRules.length;
                    errors = [];
                    isEmpty = isNullOrUndefined(value) || value === '' || isEmptyArray(value);
                    isEmptyAndOptional = isEmpty && field.skipIfEmpty;
                    isRequired = false;
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < length)) return [3 /*break*/, 4];
                    rule = requireRules[i];
                    return [4 /*yield*/, _test(field, value, {
                            name: rule,
                            params: field.rules[rule]
                        })];
                case 2:
                    result = _a.sent();
                    if (!isObject(result)) {
                        throw new Error('Require rules has to return an object (see docs)');
                    }
                    if (result.required) {
                        isRequired = true;
                    }
                    if (!result.valid && result.error) {
                        errors.push(result.error);
                        // Exit early as the field is required and failed validation.
                        if (field.bails) {
                            return [2 /*return*/, {
                                    shouldSkip: true,
                                    errors: errors
                                }];
                        }
                    }
                    _a.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4:
                    if (isEmpty && !isRequired && !field.skipIfEmpty) {
                        return [2 /*return*/, {
                                shouldSkip: false,
                                errors: errors
                            }];
                    }
                    // field is configured to run through the pipeline regardless
                    if (!field.bails && !isEmptyAndOptional) {
                        return [2 /*return*/, {
                                shouldSkip: false,
                                errors: errors
                            }];
                    }
                    // skip if the field is not required and has an empty value.
                    return [2 /*return*/, {
                            shouldSkip: !isRequired && isEmpty,
                            errors: errors
                        }];
            }
        });
    });
}
/**
 * Tests a single input value against a rule.
 */
function _test(field, value, rule) {
    return __awaiter(this, void 0, void 0, function () {
        var ruleSchema, normalizedValue, params, result, values_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ruleSchema = RuleContainer.getRuleDefinition(rule.name);
                    if (!ruleSchema || !ruleSchema.validate) {
                        throw new Error("No such validator '" + rule.name + "' exists.");
                    }
                    normalizedValue = ruleSchema.castValue ? ruleSchema.castValue(value) : value;
                    params = fillTargetValues(rule.params, field.crossTable);
                    return [4 /*yield*/, ruleSchema.validate(normalizedValue, params)];
                case 1:
                    result = _a.sent();
                    if (typeof result === 'string') {
                        values_1 = __assign(__assign({}, (params || {})), { _field_: field.name, _value_: value, _rule_: rule.name });
                        return [2 /*return*/, {
                                valid: false,
                                error: { rule: rule.name, msg: function () { return interpolate(result, values_1); } }
                            }];
                    }
                    if (!isObject(result)) {
                        result = { valid: result };
                    }
                    return [2 /*return*/, {
                            valid: result.valid,
                            required: result.required,
                            error: result.valid ? undefined : _generateFieldError(field, value, ruleSchema, rule.name, params)
                        }];
            }
        });
    });
}
/**
 * Generates error messages.
 */
function _generateFieldError(field, value, ruleSchema, ruleName, params) {
    var _a;
    var message = (_a = field.customMessages[ruleName], (_a !== null && _a !== void 0 ? _a : ruleSchema.message));
    var ruleTargets = _getRuleTargets(field, ruleSchema, ruleName);
    var _b = _getUserTargets(field, ruleSchema, ruleName, message), userTargets = _b.userTargets, userMessage = _b.userMessage;
    var values = __assign(__assign(__assign(__assign({}, (params || {})), { _field_: field.name, _value_: value, _rule_: ruleName }), ruleTargets), userTargets);
    return {
        msg: function () { return _normalizeMessage(userMessage || getConfig().defaultMessage, field.name, values); },
        rule: ruleName
    };
}
function _getRuleTargets(field, ruleSchema, ruleName) {
    var params = ruleSchema.params;
    if (!params) {
        return {};
    }
    var numTargets = params.filter(function (param) { return param.isTarget; }).length;
    if (numTargets <= 0) {
        return {};
    }
    var names = {};
    var ruleConfig = field.rules[ruleName];
    if (!Array.isArray(ruleConfig) && isObject(ruleConfig)) {
        ruleConfig = params.map(function (param) {
            return ruleConfig[param.name];
        });
    }
    for (var index = 0; index < params.length; index++) {
        var param = params[index];
        var key = ruleConfig[index];
        if (!isLocator(key)) {
            continue;
        }
        key = key.__locatorRef;
        var name_1 = field.names[key] || key;
        names[param.name] = name_1;
        names["_" + param.name + "_"] = field.crossTable[key];
    }
    return names;
}
function _getUserTargets(field, ruleSchema, ruleName, userMessage) {
    var userTargets = {};
    var rules = field.rules[ruleName];
    var params = ruleSchema.params || [];
    // early return if no rules
    if (!rules) {
        return {};
    }
    // check all rules to convert targets
    Object.keys(rules).forEach(function (key, index) {
        // get the rule
        var rule = rules[key];
        if (!isLocator(rule)) {
            return {};
        }
        // get associated parameter
        var param = params[index];
        if (!param) {
            return {};
        }
        // grab the name of the target
        var name = rule.__locatorRef;
        userTargets[param.name] = field.names[name] || name;
        userTargets["_" + param.name + "_"] = field.crossTable[name];
    });
    return {
        userTargets: userTargets,
        userMessage: userMessage
    };
}
function _normalizeMessage(template, field, values) {
    if (typeof template === 'function') {
        return template(field, values);
    }
    return interpolate(template, __assign(__assign({}, values), { _field_: field }));
}
function fillTargetValues(params, crossTable) {
    if (Array.isArray(params)) {
        return params;
    }
    var values = {};
    var normalize = function (value) {
        if (isLocator(value)) {
            return value(crossTable);
        }
        return value;
    };
    Object.keys(params).forEach(function (param) {
        values[param] = normalize(params[param]);
    });
    return values;
}

var aggressive = function () { return ({
    on: ['input', 'blur']
}); };
var lazy = function () { return ({
    on: ['change']
}); };
var eager = function (_a) {
    var errors = _a.errors;
    if (errors.length) {
        return {
            on: ['input', 'change']
        };
    }
    return {
        on: ['change', 'blur']
    };
};
var passive = function () { return ({
    on: []
}); };
var modes = {
    aggressive: aggressive,
    eager: eager,
    passive: passive,
    lazy: lazy
};
var setInteractionMode = function (mode, implementation) {
    setConfig({ mode: mode });
    if (!implementation) {
        return;
    }
    if (!isCallable(implementation)) {
        throw new Error('A mode implementation must be a function');
    }
    modes[mode] = implementation;
};

var EVENT_BUS = new external_commonjs_vue_commonjs2_vue_root_Vue_default.a();
function localeChanged() {
    EVENT_BUS.$emit('change:locale');
}

var Dictionary = /** @class */ (function () {
    function Dictionary(locale, dictionary) {
        this.container = {};
        this.locale = locale;
        this.merge(dictionary);
    }
    Dictionary.prototype.resolve = function (field, rule, values) {
        return this.format(this.locale, field, rule, values);
    };
    Dictionary.prototype.format = function (locale, field, rule, values) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var message;
        // find if specific message for that field was specified.
        message = ((_c = (_b = (_a = this.container[locale]) === null || _a === void 0 ? void 0 : _a.fields) === null || _b === void 0 ? void 0 : _b[field]) === null || _c === void 0 ? void 0 : _c[rule]) || ((_e = (_d = this.container[locale]) === null || _d === void 0 ? void 0 : _d.messages) === null || _e === void 0 ? void 0 : _e[rule]);
        if (!message) {
            message = '{field} is not valid';
        }
        field = (_h = (_g = (_f = this.container[locale]) === null || _f === void 0 ? void 0 : _f.names) === null || _g === void 0 ? void 0 : _g[field], (_h !== null && _h !== void 0 ? _h : field));
        return isCallable(message) ? message(field, values) : interpolate(message, __assign(__assign({}, values), { _field_: field }));
    };
    Dictionary.prototype.merge = function (dictionary) {
        merge(this.container, dictionary);
    };
    Dictionary.prototype.hasRule = function (name) {
        var _a, _b;
        return !!((_b = (_a = this.container[this.locale]) === null || _a === void 0 ? void 0 : _a.messages) === null || _b === void 0 ? void 0 : _b[name]);
    };
    return Dictionary;
}());
var DICTIONARY;
function localize(locale, dictionary) {
    var _a;
    if (!DICTIONARY) {
        DICTIONARY = new Dictionary('en', {});
        setConfig({
            defaultMessage: function (field, values) {
                var _a;
                return DICTIONARY.resolve(field, (_a = values) === null || _a === void 0 ? void 0 : _a._rule_, values || {});
            }
        });
    }
    if (typeof locale === 'string') {
        DICTIONARY.locale = locale;
        if (dictionary) {
            DICTIONARY.merge((_a = {}, _a[locale] = dictionary, _a));
        }
        localeChanged();
        return;
    }
    DICTIONARY.merge(locale);
}

var isEvent = function (evt) {
    if (!evt) {
        return false;
    }
    if (typeof Event !== 'undefined' && isCallable(Event) && evt instanceof Event) {
        return true;
    }
    // this is for IE
    /* istanbul ignore next */
    if (evt && evt.srcElement) {
        return true;
    }
    return false;
};
function normalizeEventValue(value) {
    var _a, _b;
    if (!isEvent(value)) {
        return value;
    }
    var input = value.target;
    if (input.type === 'file' && input.files) {
        return toArray(input.files);
    }
    // If the input has a `v-model.number` modifier applied.
    if ((_a = input._vModifiers) === null || _a === void 0 ? void 0 : _a.number) {
        // as per the spec the v-model.number uses parseFloat
        var valueAsNumber = parseFloat(input.value);
        if (vee_validate_esm_isNaN(valueAsNumber)) {
            return input.value;
        }
        return valueAsNumber;
    }
    if ((_b = input._vModifiers) === null || _b === void 0 ? void 0 : _b.trim) {
        var trimmedValue = typeof input.value === 'string' ? input.value.trim() : input.value;
        return trimmedValue;
    }
    return input.value;
}

var isTextInput = function (vnode) {
    var _a, _b;
    var attrs = ((_a = vnode.data) === null || _a === void 0 ? void 0 : _a.attrs) || vnode.elm;
    // it will fallback to being a text input per browsers spec.
    if (vnode.tag === 'input' && (!attrs || !attrs.type)) {
        return true;
    }
    if (vnode.tag === 'textarea') {
        return true;
    }
    return includes(['text', 'password', 'search', 'email', 'tel', 'url', 'number'], (_b = attrs) === null || _b === void 0 ? void 0 : _b.type);
};
// export const isCheckboxOrRadioInput = (vnode: VNode): boolean => {
//   const attrs = (vnode.data && vnode.data.attrs) || vnode.elm;
//   return includes(['radio', 'checkbox'], attrs && attrs.type);
// };
// Gets the model object on the vnode.
function findModel(vnode) {
    if (!vnode.data) {
        return undefined;
    }
    // Component Model
    // THIS IS NOT TYPED IN OFFICIAL VUE TYPINGS
    // eslint-disable-next-line
    var nonStandardVNodeData = vnode.data;
    if ('model' in nonStandardVNodeData) {
        return nonStandardVNodeData.model;
    }
    if (!vnode.data.directives) {
        return undefined;
    }
    return find(vnode.data.directives, function (d) { return d.name === 'model'; });
}
function findValue(vnode) {
    var _a, _b, _c;
    var model = findModel(vnode);
    if (model) {
        return { value: model.value };
    }
    var config = findModelConfig(vnode);
    var prop = ((_a = config) === null || _a === void 0 ? void 0 : _a.prop) || 'value';
    if (((_b = vnode.componentOptions) === null || _b === void 0 ? void 0 : _b.propsData) && prop in vnode.componentOptions.propsData) {
        var propsDataWithValue = vnode.componentOptions.propsData;
        return { value: propsDataWithValue[prop] };
    }
    if (((_c = vnode.data) === null || _c === void 0 ? void 0 : _c.domProps) && 'value' in vnode.data.domProps) {
        return { value: vnode.data.domProps.value };
    }
    return undefined;
}
function extractChildren(vnode) {
    if (Array.isArray(vnode)) {
        return vnode;
    }
    if (Array.isArray(vnode.children)) {
        return vnode.children;
    }
    /* istanbul ignore next */
    if (vnode.componentOptions && Array.isArray(vnode.componentOptions.children)) {
        return vnode.componentOptions.children;
    }
    return [];
}
function extractVNodes(vnode) {
    if (!Array.isArray(vnode) && findValue(vnode) !== undefined) {
        return [vnode];
    }
    var children = extractChildren(vnode);
    return children.reduce(function (nodes, node) {
        var candidates = extractVNodes(node);
        if (candidates.length) {
            nodes.push.apply(nodes, candidates);
        }
        return nodes;
    }, []);
}
// Resolves v-model config if exists.
function findModelConfig(vnode) {
    /* istanbul ignore next */
    if (!vnode.componentOptions)
        return null;
    // This is also not typed in the standard Vue TS.
    return vnode.componentOptions.Ctor.options.model;
}
// Adds a listener to vnode listener object.
function mergeVNodeListeners(obj, eventName, handler) {
    // no listener at all.
    if (isNullOrUndefined(obj[eventName])) {
        obj[eventName] = [handler];
        return;
    }
    // Is an invoker.
    if (isCallable(obj[eventName]) && obj[eventName].fns) {
        var invoker = obj[eventName];
        invoker.fns = Array.isArray(invoker.fns) ? invoker.fns : [invoker.fns];
        if (!includes(invoker.fns, handler)) {
            invoker.fns.push(handler);
        }
        return;
    }
    if (isCallable(obj[eventName])) {
        var prev = obj[eventName];
        obj[eventName] = [prev];
    }
    if (Array.isArray(obj[eventName]) && !includes(obj[eventName], handler)) {
        obj[eventName].push(handler);
    }
}
// Adds a listener to a native HTML vnode.
function addNativeNodeListener(node, eventName, handler) {
    /* istanbul ignore next */
    if (!node.data) {
        node.data = {};
    }
    if (isNullOrUndefined(node.data.on)) {
        node.data.on = {};
    }
    mergeVNodeListeners(node.data.on, eventName, handler);
}
// Adds a listener to a Vue component vnode.
function addComponentNodeListener(node, eventName, handler) {
    /* istanbul ignore next */
    if (!node.componentOptions) {
        return;
    }
    /* istanbul ignore next */
    if (!node.componentOptions.listeners) {
        node.componentOptions.listeners = {};
    }
    mergeVNodeListeners(node.componentOptions.listeners, eventName, handler);
}
function addVNodeListener(vnode, eventName, handler) {
    if (vnode.componentOptions) {
        addComponentNodeListener(vnode, eventName, handler);
        return;
    }
    addNativeNodeListener(vnode, eventName, handler);
}
// Determines if `change` should be used over `input` for listeners.
function getInputEventName(vnode, model) {
    var _a, _b;
    // Is a component.
    if (vnode.componentOptions) {
        var event_1 = (findModelConfig(vnode) || { event: 'input' }).event;
        return event_1;
    }
    // Lazy Models typically use change event
    if ((_b = (_a = model) === null || _a === void 0 ? void 0 : _a.modifiers) === null || _b === void 0 ? void 0 : _b.lazy) {
        return 'change';
    }
    // is a textual-type input.
    if (isTextInput(vnode)) {
        return 'input';
    }
    return 'change';
}
function isHTMLNode(node) {
    return includes(['input', 'select', 'textarea'], node.tag);
}
// TODO: Type this one properly.
function normalizeSlots(slots, ctx) {
    var acc = [];
    return Object.keys(slots).reduce(function (arr, key) {
        slots[key].forEach(function (vnode) {
            if (!vnode.context) {
                slots[key].context = ctx;
                if (!vnode.data) {
                    vnode.data = {};
                }
                vnode.data.slot = key;
            }
        });
        return arr.concat(slots[key]);
    }, acc);
}
function resolveTextualRules(vnode) {
    var _a;
    var attrs = (_a = vnode.data) === null || _a === void 0 ? void 0 : _a.attrs;
    var rules = {};
    if (!attrs)
        return rules;
    if (attrs.type === 'email' && RuleContainer.getRuleDefinition('email')) {
        rules.email = ['multiple' in attrs];
    }
    if (attrs.pattern && RuleContainer.getRuleDefinition('regex')) {
        rules.regex = attrs.pattern;
    }
    if (attrs.maxlength >= 0 && RuleContainer.getRuleDefinition('max')) {
        rules.max = attrs.maxlength;
    }
    if (attrs.minlength >= 0 && RuleContainer.getRuleDefinition('min')) {
        rules.min = attrs.minlength;
    }
    if (attrs.type === 'number') {
        if (isSpecified(attrs.min) && RuleContainer.getRuleDefinition('min_value')) {
            rules.min_value = Number(attrs.min);
        }
        if (isSpecified(attrs.max) && RuleContainer.getRuleDefinition('max_value')) {
            rules.max_value = Number(attrs.max);
        }
    }
    return rules;
}
function resolveRules(vnode) {
    var _a;
    var htmlTags = ['input', 'select', 'textarea'];
    var attrs = (_a = vnode.data) === null || _a === void 0 ? void 0 : _a.attrs;
    if (!includes(htmlTags, vnode.tag) || !attrs) {
        return {};
    }
    var rules = {};
    if ('required' in attrs && attrs.required !== false && RuleContainer.getRuleDefinition('required')) {
        rules.required = attrs.type === 'checkbox' ? [true] : true;
    }
    if (isTextInput(vnode)) {
        return normalizeRules(__assign(__assign({}, rules), resolveTextualRules(vnode)));
    }
    return normalizeRules(rules);
}
function normalizeChildren(context, slotProps) {
    if (context.$scopedSlots.default) {
        return context.$scopedSlots.default(slotProps) || [];
    }
    return context.$slots.default || [];
}

/**
 * Determines if a provider needs to run validation.
 */
function shouldValidate(ctx, value) {
    // when an immediate/initial validation is needed and wasn't done before.
    if (!ctx._ignoreImmediate && ctx.immediate) {
        return true;
    }
    // when the value changes for whatever reason.
    if (ctx.value !== value && ctx.normalizedEvents.length) {
        return true;
    }
    // when it needs validation due to props/cross-fields changes.
    if (ctx._needsValidation) {
        return true;
    }
    // when the initial value is undefined and the field wasn't rendered yet.
    if (!ctx.initialized && value === undefined) {
        return true;
    }
    return false;
}
function createValidationCtx(ctx) {
    return __assign(__assign({}, ctx.flags), { errors: ctx.errors, classes: ctx.classes, failedRules: ctx.failedRules, reset: function () { return ctx.reset(); }, validate: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return ctx.validate.apply(ctx, args);
        }, ariaInput: {
            'aria-invalid': ctx.flags.invalid ? 'true' : 'false',
            'aria-required': ctx.isRequired ? 'true' : 'false',
            'aria-errormessage': "vee_" + ctx.id
        }, ariaMsg: {
            id: "vee_" + ctx.id,
            'aria-live': ctx.errors.length ? 'assertive' : 'off'
        } });
}
function onRenderUpdate(vm, value) {
    if (!vm.initialized) {
        vm.initialValue = value;
    }
    var validateNow = shouldValidate(vm, value);
    vm._needsValidation = false;
    vm.value = value;
    vm._ignoreImmediate = true;
    if (!validateNow) {
        return;
    }
    var validate = function () {
        if (vm.immediate || vm.flags.validated) {
            return triggerThreadSafeValidation(vm);
        }
        vm.validateSilent();
    };
    if (vm.initialized) {
        validate();
        return;
    }
    vm.$once('hook:mounted', function () { return validate(); });
}
function computeModeSetting(ctx) {
    var compute = (isCallable(ctx.mode) ? ctx.mode : modes[ctx.mode]);
    return compute(ctx);
}
function triggerThreadSafeValidation(vm) {
    var pendingPromise = vm.validateSilent();
    // avoids race conditions between successive validations.
    vm._pendingValidation = pendingPromise;
    return pendingPromise.then(function (result) {
        if (pendingPromise === vm._pendingValidation) {
            vm.applyResult(result);
            vm._pendingValidation = undefined;
        }
        return result;
    });
}
// Creates the common handlers for a validatable context.
function createCommonHandlers(vm) {
    if (!vm.$veeOnInput) {
        vm.$veeOnInput = function (e) {
            vm.syncValue(e); // track and keep the value updated.
            vm.setFlags({ dirty: true, pristine: false });
        };
    }
    var onInput = vm.$veeOnInput;
    if (!vm.$veeOnBlur) {
        vm.$veeOnBlur = function () {
            vm.setFlags({ touched: true, untouched: false });
        };
    }
    // Blur event listener.
    var onBlur = vm.$veeOnBlur;
    var onValidate = vm.$veeHandler;
    var mode = computeModeSetting(vm);
    // Handle debounce changes.
    if (!onValidate || vm.$veeDebounce !== vm.debounce) {
        onValidate = debounce(function () {
            vm.$nextTick(function () {
                if (!vm._pendingReset) {
                    triggerThreadSafeValidation(vm);
                }
                vm._pendingReset = false;
            });
        }, mode.debounce || vm.debounce);
        // Cache the handler so we don't create it each time.
        vm.$veeHandler = onValidate;
        // cache the debounce value so we detect if it was changed.
        vm.$veeDebounce = vm.debounce;
    }
    return { onInput: onInput, onBlur: onBlur, onValidate: onValidate };
}
// Adds all plugin listeners to the vnode.
function addListeners(vm, node) {
    var _a;
    var value = findValue(node);
    // cache the input eventName.
    vm._inputEventName = vm._inputEventName || getInputEventName(node, findModel(node));
    onRenderUpdate(vm, (_a = value) === null || _a === void 0 ? void 0 : _a.value);
    var _b = createCommonHandlers(vm), onInput = _b.onInput, onBlur = _b.onBlur, onValidate = _b.onValidate;
    addVNodeListener(node, vm._inputEventName, onInput);
    addVNodeListener(node, 'blur', onBlur);
    // add the validation listeners.
    vm.normalizedEvents.forEach(function (evt) {
        addVNodeListener(node, evt, onValidate);
    });
    vm.initialized = true;
}

var PROVIDER_COUNTER = 0;
function vee_validate_esm_data() {
    var errors = [];
    var fieldName = '';
    var defaultValues = {
        errors: errors,
        value: undefined,
        initialized: false,
        initialValue: undefined,
        flags: createFlags(),
        failedRules: {},
        isActive: true,
        fieldName: fieldName,
        id: ''
    };
    return defaultValues;
}
var ValidationProvider = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
    inject: {
        $_veeObserver: {
            from: '$_veeObserver',
            default: function () {
                if (!this.$vnode.context.$_veeObserver) {
                    this.$vnode.context.$_veeObserver = createObserver();
                }
                return this.$vnode.context.$_veeObserver;
            }
        }
    },
    props: {
        vid: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: null
        },
        mode: {
            type: [String, Function],
            default: function () {
                return getConfig().mode;
            }
        },
        rules: {
            type: [Object, String],
            default: null
        },
        immediate: {
            type: Boolean,
            default: false
        },
        bails: {
            type: Boolean,
            default: function () { return getConfig().bails; }
        },
        skipIfEmpty: {
            type: Boolean,
            default: function () { return getConfig().skipOptional; }
        },
        debounce: {
            type: Number,
            default: 0
        },
        tag: {
            type: String,
            default: 'span'
        },
        slim: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        customMessages: {
            type: Object,
            default: function () {
                return {};
            }
        }
    },
    watch: {
        rules: {
            deep: true,
            handler: function (val, oldVal) {
                this._needsValidation = !isEqual(val, oldVal);
            }
        }
    },
    data: vee_validate_esm_data,
    computed: {
        fieldDeps: function () {
            var _this = this;
            return Object.keys(this.normalizedRules).reduce(function (acc, rule) {
                var deps = extractLocators(_this.normalizedRules[rule]).map(function (dep) { return dep.__locatorRef; });
                acc.push.apply(acc, deps);
                deps.forEach(function (depName) {
                    watchCrossFieldDep(_this, depName);
                });
                return acc;
            }, []);
        },
        normalizedEvents: function () {
            var _this = this;
            var on = computeModeSetting(this).on;
            return (on || []).map(function (e) {
                if (e === 'input') {
                    return _this._inputEventName;
                }
                return e;
            });
        },
        isRequired: function () {
            var rules = __assign(__assign({}, this._resolvedRules), this.normalizedRules);
            var isRequired = Object.keys(rules).some(RuleContainer.isRequireRule);
            this.flags.required = !!isRequired;
            return isRequired;
        },
        classes: function () {
            var names = getConfig().classes;
            return computeClassObj(names, this.flags);
        },
        normalizedRules: function () {
            return normalizeRules(this.rules);
        }
    },
    mounted: function () {
        var _this = this;
        var onLocaleChanged = function () {
            if (!_this.flags.validated) {
                return;
            }
            var regenerateMap = _this._regenerateMap;
            if (regenerateMap) {
                var errors_1 = [];
                var failedRules_1 = {};
                Object.keys(regenerateMap).forEach(function (rule) {
                    var msg = regenerateMap[rule]();
                    errors_1.push(msg);
                    failedRules_1[rule] = msg;
                });
                _this.applyResult({ errors: errors_1, failedRules: failedRules_1, regenerateMap: regenerateMap });
                return;
            }
            _this.validate();
        };
        EVENT_BUS.$on('change:locale', onLocaleChanged);
        this.$on('hook:beforeDestroy', function () {
            EVENT_BUS.$off('change:locale', onLocaleChanged);
        });
    },
    render: function (h) {
        var _this = this;
        this.registerField();
        var ctx = createValidationCtx(this);
        var children = normalizeChildren(this, ctx);
        // Handle single-root slot.
        extractVNodes(children).forEach(function (input) {
            var _a, _b, _c, _d;
            // resolved rules are not reactive because it has a new reference each time.
            // causing infinite render-loops.
            // So we are comparing them manually to decide if we need to validate or not.
            var resolved = getConfig().useConstraintAttrs ? resolveRules(input) : {};
            if (!isEqual(_this._resolvedRules, resolved)) {
                _this._needsValidation = true;
            }
            if (isHTMLNode(input)) {
                _this.fieldName = ((_b = (_a = input.data) === null || _a === void 0 ? void 0 : _a.attrs) === null || _b === void 0 ? void 0 : _b.name) || ((_d = (_c = input.data) === null || _c === void 0 ? void 0 : _c.attrs) === null || _d === void 0 ? void 0 : _d.id);
            }
            _this._resolvedRules = resolved;
            addListeners(_this, input);
        });
        return this.slim && children.length <= 1 ? children[0] : h(this.tag, children);
    },
    beforeDestroy: function () {
        // cleanup reference.
        this.$_veeObserver.unobserve(this.id);
    },
    activated: function () {
        this.isActive = true;
    },
    deactivated: function () {
        this.isActive = false;
    },
    methods: {
        setFlags: function (flags) {
            var _this = this;
            Object.keys(flags).forEach(function (flag) {
                _this.flags[flag] = flags[flag];
            });
        },
        syncValue: function (v) {
            var value = normalizeEventValue(v);
            this.value = value;
            this.flags.changed = this.initialValue !== value;
        },
        reset: function () {
            var _this = this;
            this.errors = [];
            this.initialValue = this.value;
            var flags = createFlags();
            flags.required = this.isRequired;
            this.setFlags(flags);
            this.failedRules = {};
            this.validateSilent();
            this._pendingValidation = undefined;
            this._pendingReset = true;
            setTimeout(function () {
                _this._pendingReset = false;
            }, this.debounce);
        },
        validate: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (args.length > 0) {
                        this.syncValue(args[0]);
                    }
                    return [2 /*return*/, triggerThreadSafeValidation(this)];
                });
            });
        },
        validateSilent: function () {
            return __awaiter(this, void 0, void 0, function () {
                var rules, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.setFlags({ pending: true });
                            rules = __assign(__assign({}, this._resolvedRules), this.normalizedRules);
                            Object.defineProperty(rules, '_$$isNormalized', {
                                value: true,
                                writable: false,
                                enumerable: false,
                                configurable: false
                            });
                            return [4 /*yield*/, validate(this.value, rules, __assign(__assign({ name: this.name || this.fieldName }, createLookup(this)), { bails: this.bails, skipIfEmpty: this.skipIfEmpty, isInitial: !this.initialized, customMessages: this.customMessages }))];
                        case 1:
                            result = _a.sent();
                            this.setFlags({
                                pending: false,
                                valid: result.valid,
                                invalid: !result.valid
                            });
                            return [2 /*return*/, result];
                    }
                });
            });
        },
        setErrors: function (errors) {
            this.applyResult({ errors: errors, failedRules: {} });
        },
        applyResult: function (_a) {
            var errors = _a.errors, failedRules = _a.failedRules, regenerateMap = _a.regenerateMap;
            this.errors = errors;
            this._regenerateMap = regenerateMap;
            this.failedRules = __assign({}, (failedRules || {}));
            this.setFlags({
                valid: !errors.length,
                passed: !errors.length,
                invalid: !!errors.length,
                failed: !!errors.length,
                validated: true,
                changed: this.value !== this.initialValue
            });
        },
        registerField: function () {
            updateRenderingContextRefs(this);
        }
    }
});
function computeClassObj(names, flags) {
    var acc = {};
    var keys = Object.keys(flags);
    var length = keys.length;
    var _loop_1 = function (i) {
        var flag = keys[i];
        var className = (names && names[flag]) || flag;
        var value = flags[flag];
        if (isNullOrUndefined(value)) {
            return "continue";
        }
        if ((flag === 'valid' || flag === 'invalid') && !flags.validated) {
            return "continue";
        }
        if (typeof className === 'string') {
            acc[className] = value;
        }
        else if (Array.isArray(className)) {
            className.forEach(function (cls) {
                acc[cls] = value;
            });
        }
    };
    for (var i = 0; i < length; i++) {
        _loop_1(i);
    }
    return acc;
}
function createLookup(vm) {
    var providers = vm.$_veeObserver.refs;
    var reduced = {
        names: {},
        values: {}
    };
    return vm.fieldDeps.reduce(function (acc, depName) {
        if (!providers[depName]) {
            return acc;
        }
        acc.values[depName] = providers[depName].value;
        acc.names[depName] = providers[depName].name;
        return acc;
    }, reduced);
}
function extractId(vm) {
    if (vm.vid) {
        return vm.vid;
    }
    if (vm.name) {
        return vm.name;
    }
    if (vm.id) {
        return vm.id;
    }
    if (vm.fieldName) {
        return vm.fieldName;
    }
    PROVIDER_COUNTER++;
    return "_vee_" + PROVIDER_COUNTER;
}
function updateRenderingContextRefs(vm) {
    var providedId = extractId(vm);
    var id = vm.id;
    // Nothing has changed.
    if (!vm.isActive || (id === providedId && vm.$_veeObserver.refs[id])) {
        return;
    }
    // vid was changed.
    if (id !== providedId && vm.$_veeObserver.refs[id] === vm) {
        vm.$_veeObserver.unobserve(id);
    }
    vm.id = providedId;
    vm.$_veeObserver.observe(vm);
}
function createObserver() {
    return {
        refs: {},
        observe: function (vm) {
            this.refs[vm.id] = vm;
        },
        unobserve: function (id) {
            delete this.refs[id];
        }
    };
}
function watchCrossFieldDep(ctx, depName, withHooks) {
    if (withHooks === void 0) { withHooks = true; }
    var providers = ctx.$_veeObserver.refs;
    if (!ctx._veeWatchers) {
        ctx._veeWatchers = {};
    }
    if (!providers[depName] && withHooks) {
        return ctx.$once('hook:mounted', function () {
            watchCrossFieldDep(ctx, depName, false);
        });
    }
    if (!isCallable(ctx._veeWatchers[depName]) && providers[depName]) {
        ctx._veeWatchers[depName] = providers[depName].$watch('value', function () {
            if (ctx.flags.validated) {
                ctx._needsValidation = true;
                ctx.validate();
            }
        });
    }
}

var FLAGS_STRATEGIES = [
    ['pristine', 'every'],
    ['dirty', 'some'],
    ['touched', 'some'],
    ['untouched', 'every'],
    ['valid', 'every'],
    ['invalid', 'some'],
    ['pending', 'some'],
    ['validated', 'every'],
    ['changed', 'some'],
    ['passed', 'every'],
    ['failed', 'some']
];
var OBSERVER_COUNTER = 0;
function data$1() {
    var refs = {};
    var errors = {};
    var flags = createObserverFlags();
    var fields = {};
    // FIXME: Not sure of this one can be typed, circular type reference.
    var observers = [];
    return {
        id: '',
        refs: refs,
        observers: observers,
        errors: errors,
        flags: flags,
        fields: fields
    };
}
function provideSelf() {
    return {
        $_veeObserver: this
    };
}
var ValidationObserver = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
    name: 'ValidationObserver',
    provide: provideSelf,
    inject: {
        $_veeObserver: {
            from: '$_veeObserver',
            default: function () {
                if (!this.$vnode.context.$_veeObserver) {
                    return null;
                }
                return this.$vnode.context.$_veeObserver;
            }
        }
    },
    props: {
        tag: {
            type: String,
            default: 'span'
        },
        vid: {
            type: String,
            default: function () {
                return "obs_" + OBSERVER_COUNTER++;
            }
        },
        slim: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data: data$1,
    created: function () {
        var _this = this;
        this.id = this.vid;
        vee_validate_esm_register(this);
        var onChange = debounce(function (_a) {
            var errors = _a.errors, flags = _a.flags, fields = _a.fields;
            _this.errors = errors;
            _this.flags = flags;
            _this.fields = fields;
        }, 16);
        this.$watch(computeObserverState, onChange);
    },
    activated: function () {
        vee_validate_esm_register(this);
    },
    deactivated: function () {
        unregister(this);
    },
    beforeDestroy: function () {
        unregister(this);
    },
    render: function (h) {
        var children = normalizeChildren(this, prepareSlotProps(this));
        return this.slim && children.length <= 1 ? children[0] : h(this.tag, { on: this.$listeners }, children);
    },
    methods: {
        observe: function (subscriber, kind) {
            var _a;
            if (kind === void 0) { kind = 'provider'; }
            if (kind === 'observer') {
                this.observers.push(subscriber);
                return;
            }
            this.refs = __assign(__assign({}, this.refs), (_a = {}, _a[subscriber.id] = subscriber, _a));
        },
        unobserve: function (id, kind) {
            if (kind === void 0) { kind = 'provider'; }
            if (kind === 'provider') {
                var provider = this.refs[id];
                if (!provider) {
                    return;
                }
                this.$delete(this.refs, id);
                return;
            }
            var idx = findIndex(this.observers, function (o) { return o.id === id; });
            if (idx !== -1) {
                this.observers.splice(idx, 1);
            }
        },
        validate: function (_a) {
            var _b = (_a === void 0 ? {} : _a).silent, silent = _b === void 0 ? false : _b;
            return __awaiter(this, void 0, void 0, function () {
                var results;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, Promise.all(__spreadArrays(values(this.refs)
                                .filter(function (r) { return !r.disabled; })
                                .map(function (ref) { return ref[silent ? 'validateSilent' : 'validate']().then(function (r) { return r.valid; }); }), this.observers.filter(function (o) { return !o.disabled; }).map(function (obs) { return obs.validate({ silent: silent }); })))];
                        case 1:
                            results = _c.sent();
                            return [2 /*return*/, results.every(function (r) { return r; })];
                    }
                });
            });
        },
        handleSubmit: function (cb) {
            return __awaiter(this, void 0, void 0, function () {
                var isValid;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.validate()];
                        case 1:
                            isValid = _a.sent();
                            if (!isValid || !cb) {
                                return [2 /*return*/];
                            }
                            return [2 /*return*/, cb()];
                    }
                });
            });
        },
        reset: function () {
            return __spreadArrays(values(this.refs), this.observers).forEach(function (ref) { return ref.reset(); });
        },
        setErrors: function (errors) {
            var _this = this;
            Object.keys(errors).forEach(function (key) {
                var provider = _this.refs[key];
                if (!provider)
                    return;
                var errorArr = errors[key] || [];
                errorArr = typeof errorArr === 'string' ? [errorArr] : errorArr;
                provider.setErrors(errorArr);
            });
            this.observers.forEach(function (observer) {
                observer.setErrors(errors);
            });
        }
    }
});
function unregister(vm) {
    if (vm.$_veeObserver) {
        vm.$_veeObserver.unobserve(vm.id, 'observer');
    }
}
function vee_validate_esm_register(vm) {
    if (vm.$_veeObserver) {
        vm.$_veeObserver.observe(vm, 'observer');
    }
}
function prepareSlotProps(vm) {
    return __assign(__assign({}, vm.flags), { errors: vm.errors, fields: vm.fields, validate: vm.validate, passes: vm.handleSubmit, handleSubmit: vm.handleSubmit, reset: vm.reset });
}
// Creates a modified version of validation flags
function createObserverFlags() {
    return __assign(__assign({}, createFlags()), { valid: true, invalid: false });
}
function computeObserverState() {
    var vms = __spreadArrays(values(this.refs), this.observers);
    var errors = {};
    var flags = createObserverFlags();
    var fields = {};
    var length = vms.length;
    for (var i = 0; i < length; i++) {
        var vm = vms[i];
        // validation provider
        if (Array.isArray(vm.errors)) {
            errors[vm.id] = vm.errors;
            fields[vm.id] = __assign({ id: vm.id, name: vm.name, failedRules: vm.failedRules }, vm.flags);
            continue;
        }
        // Nested observer, merge errors and fields
        errors = __assign(__assign({}, errors), vm.errors);
        fields = __assign(__assign({}, fields), vm.fields);
    }
    FLAGS_STRATEGIES.forEach(function (_a) {
        var flag = _a[0], method = _a[1];
        flags[flag] = vms[method](function (vm) { return vm.flags[flag]; });
    });
    return { errors: errors, flags: flags, fields: fields };
}

function withValidation(component, mapProps) {
    if (mapProps === void 0) { mapProps = identity; }
    var _a, _b;
    var options = 'options' in component ? component.options : component;
    var providerOpts = ValidationProvider.options;
    var hoc = {
        name: (options.name || 'AnonymousHoc') + "WithValidation",
        props: __assign({}, providerOpts.props),
        data: providerOpts.data,
        computed: __assign({}, providerOpts.computed),
        methods: __assign({}, providerOpts.methods),
        beforeDestroy: providerOpts.beforeDestroy,
        inject: providerOpts.inject
    };
    var eventName = ((_b = (_a = options) === null || _a === void 0 ? void 0 : _a.model) === null || _b === void 0 ? void 0 : _b.event) || 'input';
    hoc.render = function (h) {
        var _a;
        var _b, _c;
        this.registerField();
        var vctx = createValidationCtx(this);
        var listeners = __assign({}, this.$listeners);
        var model = findModel(this.$vnode);
        this._inputEventName = this._inputEventName || getInputEventName(this.$vnode, model);
        var value = findValue(this.$vnode);
        onRenderUpdate(this, (_b = value) === null || _b === void 0 ? void 0 : _b.value);
        var _d = createCommonHandlers(this), onInput = _d.onInput, onBlur = _d.onBlur, onValidate = _d.onValidate;
        mergeVNodeListeners(listeners, eventName, onInput);
        mergeVNodeListeners(listeners, 'blur', onBlur);
        this.normalizedEvents.forEach(function (evt) {
            mergeVNodeListeners(listeners, evt, onValidate);
        });
        // Props are any attrs not associated with ValidationProvider Plus the model prop.
        // WARNING: Accidental prop overwrite will probably happen.
        var prop = (findModelConfig(this.$vnode) || { prop: 'value' }).prop;
        var props = __assign(__assign(__assign({}, this.$attrs), (_a = {}, _a[prop] = (_c = model) === null || _c === void 0 ? void 0 : _c.value, _a)), mapProps(vctx));
        return h(options, {
            attrs: this.$attrs,
            props: props,
            on: listeners
        }, normalizeSlots(this.$slots, this.$vnode.context));
    };
    return hoc;
}

var version = '3.2.5';



// CONCATENATED MODULE: ./node_modules/vee-validate/dist/rules.js
/**
  * vee-validate v3.2.5
  * (c) 2020 Abdelrahman Awad
  * @license MIT
  */
/**
 * Some Alpha Regex helpers.
 * https://github.com/chriso/validator.js/blob/master/src/lib/alpha.js
 */
var alpha = {
    en: /^[A-Z]*$/i,
    cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
    da: /^[A-ZÆØÅ]*$/i,
    de: /^[A-ZÄÖÜß]*$/i,
    es: /^[A-ZÁÉÍÑÓÚÜ]*$/i,
    fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
    it: /^[A-Z\xC0-\xFF]*$/i,
    lt: /^[A-ZĄČĘĖĮŠŲŪŽ]*$/i,
    nl: /^[A-ZÉËÏÓÖÜ]*$/i,
    hu: /^[A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
    pl: /^[A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
    pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
    ru: /^[А-ЯЁ]*$/i,
    sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
    sr: /^[A-ZČĆŽŠĐ]*$/i,
    sv: /^[A-ZÅÄÖ]*$/i,
    tr: /^[A-ZÇĞİıÖŞÜ]*$/i,
    uk: /^[А-ЩЬЮЯЄІЇҐ]*$/i,
    ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,
    az: /^[A-ZÇƏĞİıÖŞÜ]*$/i
};
var alphaSpaces = {
    en: /^[A-Z\s]*$/i,
    cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ\s]*$/i,
    da: /^[A-ZÆØÅ\s]*$/i,
    de: /^[A-ZÄÖÜß\s]*$/i,
    es: /^[A-ZÁÉÍÑÓÚÜ\s]*$/i,
    fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ\s]*$/i,
    it: /^[A-Z\xC0-\xFF\s]*$/i,
    lt: /^[A-ZĄČĘĖĮŠŲŪŽ\s]*$/i,
    nl: /^[A-ZÉËÏÓÖÜ\s]*$/i,
    hu: /^[A-ZÁÉÍÓÖŐÚÜŰ\s]*$/i,
    pl: /^[A-ZĄĆĘŚŁŃÓŻŹ\s]*$/i,
    pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ\s]*$/i,
    ru: /^[А-ЯЁ\s]*$/i,
    sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ\s]*$/i,
    sr: /^[A-ZČĆŽŠĐ\s]*$/i,
    sv: /^[A-ZÅÄÖ\s]*$/i,
    tr: /^[A-ZÇĞİıÖŞÜ\s]*$/i,
    uk: /^[А-ЩЬЮЯЄІЇҐ\s]*$/i,
    ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ\s]*$/,
    az: /^[A-ZÇƏĞİıÖŞÜ\s]*$/i
};
var alphanumeric = {
    en: /^[0-9A-Z]*$/i,
    cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
    da: /^[0-9A-ZÆØÅ]$/i,
    de: /^[0-9A-ZÄÖÜß]*$/i,
    es: /^[0-9A-ZÁÉÍÑÓÚÜ]*$/i,
    fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
    it: /^[0-9A-Z\xC0-\xFF]*$/i,
    lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ]*$/i,
    hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
    nl: /^[0-9A-ZÉËÏÓÖÜ]*$/i,
    pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
    pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
    ru: /^[0-9А-ЯЁ]*$/i,
    sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
    sr: /^[0-9A-ZČĆŽŠĐ]*$/i,
    sv: /^[0-9A-ZÅÄÖ]*$/i,
    tr: /^[0-9A-ZÇĞİıÖŞÜ]*$/i,
    uk: /^[0-9А-ЩЬЮЯЄІЇҐ]*$/i,
    ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,
    az: /^[0-9A-ZÇƏĞİıÖŞÜ]*$/i
};
var alphaDash = {
    en: /^[0-9A-Z_-]*$/i,
    cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ_-]*$/i,
    da: /^[0-9A-ZÆØÅ_-]*$/i,
    de: /^[0-9A-ZÄÖÜß_-]*$/i,
    es: /^[0-9A-ZÁÉÍÑÓÚÜ_-]*$/i,
    fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ_-]*$/i,
    it: /^[0-9A-Z\xC0-\xFF_-]*$/i,
    lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ_-]*$/i,
    nl: /^[0-9A-ZÉËÏÓÖÜ_-]*$/i,
    hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ_-]*$/i,
    pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ_-]*$/i,
    pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ_-]*$/i,
    ru: /^[0-9А-ЯЁ_-]*$/i,
    sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ_-]*$/i,
    sr: /^[0-9A-ZČĆŽŠĐ_-]*$/i,
    sv: /^[0-9A-ZÅÄÖ_-]*$/i,
    tr: /^[0-9A-ZÇĞİıÖŞÜ_-]*$/i,
    uk: /^[0-9А-ЩЬЮЯЄІЇҐ_-]*$/i,
    ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ_-]*$/,
    az: /^[0-9A-ZÇƏĞİıÖŞÜ_-]*$/i
};

var rules_validate = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).locale, locale = _b === void 0 ? '' : _b;
    if (Array.isArray(value)) {
        return value.every(function (val) { return rules_validate(val, { locale: locale }); });
    }
    // Match at least one locale.
    if (!locale) {
        return Object.keys(alpha).some(function (loc) { return alpha[loc].test(value); });
    }
    return (alpha[locale] || alpha.en).test(value);
};
var params = [
    {
        name: 'locale'
    }
];
var alpha$1 = {
    validate: rules_validate,
    params: params
};

var validate$1 = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).locale, locale = _b === void 0 ? '' : _b;
    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$1(val, { locale: locale }); });
    }
    // Match at least one locale.
    if (!locale) {
        return Object.keys(alphaDash).some(function (loc) { return alphaDash[loc].test(value); });
    }
    return (alphaDash[locale] || alphaDash.en).test(value);
};
var params$1 = [
    {
        name: 'locale'
    }
];
var alpha_dash = {
    validate: validate$1,
    params: params$1
};

var validate$2 = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).locale, locale = _b === void 0 ? '' : _b;
    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$2(val, { locale: locale }); });
    }
    // Match at least one locale.
    if (!locale) {
        return Object.keys(alphanumeric).some(function (loc) { return alphanumeric[loc].test(value); });
    }
    return (alphanumeric[locale] || alphanumeric.en).test(value);
};
var params$2 = [
    {
        name: 'locale'
    }
];
var alpha_num = {
    validate: validate$2,
    params: params$2
};

var validate$3 = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).locale, locale = _b === void 0 ? '' : _b;
    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$3(val, { locale: locale }); });
    }
    // Match at least one locale.
    if (!locale) {
        return Object.keys(alphaSpaces).some(function (loc) { return alphaSpaces[loc].test(value); });
    }
    return (alphaSpaces[locale] || alphaSpaces.en).test(value);
};
var params$3 = [
    {
        name: 'locale'
    }
];
var alpha_spaces = {
    validate: validate$3,
    params: params$3
};

var validate$4 = function (value, _a) {
    var _b = _a === void 0 ? {} : _a, min = _b.min, max = _b.max;
    if (Array.isArray(value)) {
        return value.every(function (val) { return !!validate$4(val, { min: min, max: max }); });
    }
    return Number(min) <= value && Number(max) >= value;
};
var params$4 = [
    {
        name: 'min'
    },
    {
        name: 'max'
    }
];
var between = {
    validate: validate$4,
    params: params$4
};

var validate$5 = function (value, _a) {
    var target = _a.target;
    return String(value) === String(target);
};
var params$5 = [
    {
        name: 'target',
        isTarget: true
    }
];
var confirmed = {
    validate: validate$5,
    params: params$5
};

var validate$6 = function (value, _a) {
    var length = _a.length;
    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$6(val, { length: length }); });
    }
    var strVal = String(value);
    return /^[0-9]*$/.test(strVal) && strVal.length === length;
};
var params$6 = [
    {
        name: 'length',
        cast: function (value) {
            return Number(value);
        }
    }
];
var digits = {
    validate: validate$6,
    params: params$6
};

var validateImage = function (file, width, height) {
    var URL = window.URL || window.webkitURL;
    return new Promise(function (resolve) {
        var image = new Image();
        image.onerror = function () { return resolve(false); };
        image.onload = function () { return resolve(image.width === width && image.height === height); };
        image.src = URL.createObjectURL(file);
    });
};
var validate$7 = function (files, _a) {
    var width = _a.width, height = _a.height;
    var list = [];
    files = Array.isArray(files) ? files : [files];
    for (var i = 0; i < files.length; i++) {
        // if file is not an image, reject.
        if (!/\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(files[i].name)) {
            return Promise.resolve(false);
        }
        list.push(files[i]);
    }
    return Promise.all(list.map(function (file) { return validateImage(file, width, height); })).then(function (values) {
        return values.every(function (v) { return v; });
    });
};
var params$7 = [
    {
        name: 'width',
        cast: function (value) {
            return Number(value);
        }
    },
    {
        name: 'height',
        cast: function (value) {
            return Number(value);
        }
    }
];
var dimensions = {
    validate: validate$7,
    params: params$7
};

var validate$8 = function (value, _a) {
    var multiple = (_a === void 0 ? {} : _a).multiple;
    // eslint-disable-next-line
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (multiple && !Array.isArray(value)) {
        value = String(value)
            .split(',')
            .map(function (emailStr) { return emailStr.trim(); });
    }
    if (Array.isArray(value)) {
        return value.every(function (val) { return re.test(String(val)); });
    }
    return re.test(String(value));
};
var params$8 = [
    {
        name: 'multiple',
        default: false
    }
];
var email = {
    validate: validate$8,
    params: params$8
};

function rules_isNullOrUndefined(value) {
    return value === null || value === undefined;
}
function rules_isEmptyArray(arr) {
    return Array.isArray(arr) && arr.length === 0;
}
function rules_isCallable(fn) {
    return typeof fn === 'function';
}

function rules_includes(collection, item) {
    return collection.indexOf(item) !== -1;
}
/**
 * Converts an array-like object to array, provides a simple polyfill for Array.from
 */
function rules_toArray(arrayLike) {
    if (rules_isCallable(Array.from)) {
        return Array.from(arrayLike);
    }
    /* istanbul ignore next */
    return rules_copyArray(arrayLike);
}
/* istanbul ignore next */
function rules_copyArray(arrayLike) {
    var array = [];
    var length = arrayLike.length;
    for (var i = 0; i < length; i++) {
        array.push(arrayLike[i]);
    }
    return array;
}

var validate$9 = function (value, options) {
    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$9(val, options); });
    }
    return rules_toArray(options).some(function (item) {
        // eslint-disable-next-line
        return item == value;
    });
};
var oneOf = {
    validate: validate$9
};

var validate$a = function (value, args) {
    return !validate$9(value, args);
};
var excluded = {
    validate: validate$a
};

var validate$b = function (files, extensions) {
    var regex = new RegExp(".(" + extensions.join('|') + ")$", 'i');
    if (Array.isArray(files)) {
        return files.every(function (file) { return regex.test(file.name); });
    }
    return regex.test(files.name);
};
var ext = {
    validate: validate$b
};

var validate$c = function (files) {
    var regex = /\.(jpg|svg|jpeg|png|bmp|gif)$/i;
    if (Array.isArray(files)) {
        return files.every(function (file) { return regex.test(file.name); });
    }
    return regex.test(files.name);
};
var rules_image = {
    validate: validate$c
};

var validate$d = function (value) {
    if (Array.isArray(value)) {
        return value.every(function (val) { return /^-?[0-9]+$/.test(String(val)); });
    }
    return /^-?[0-9]+$/.test(String(value));
};
var integer = {
    validate: validate$d
};

var validate$e = function (value, _a) {
    var other = _a.other;
    return value === other;
};
var params$9 = [
    {
        name: 'other'
    }
];
var is = {
    validate: validate$e,
    params: params$9
};

var validate$f = function (value, _a) {
    var other = _a.other;
    return value !== other;
};
var params$a = [
    {
        name: 'other'
    }
];
var is_not = {
    validate: validate$f,
    params: params$a
};

var validate$g = function (value, _a) {
    var length = _a.length;
    if (rules_isNullOrUndefined(value)) {
        return false;
    }
    if (typeof value === 'number') {
        value = String(value);
    }
    if (!value.length) {
        value = rules_toArray(value);
    }
    return value.length === length;
};
var params$b = [
    {
        name: 'length',
        cast: function (value) { return Number(value); }
    }
];
var rules_length = {
    validate: validate$g,
    params: params$b
};

var validate$h = function (value, _a) {
    var length = _a.length;
    if (rules_isNullOrUndefined(value)) {
        return length >= 0;
    }
    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$h(val, { length: length }); });
    }
    return String(value).length <= length;
};
var params$c = [
    {
        name: 'length',
        cast: function (value) {
            return Number(value);
        }
    }
];
var max = {
    validate: validate$h,
    params: params$c
};

var validate$i = function (value, _a) {
    var max = _a.max;
    if (rules_isNullOrUndefined(value) || value === '') {
        return false;
    }
    if (Array.isArray(value)) {
        return value.length > 0 && value.every(function (val) { return validate$i(val, { max: max }); });
    }
    return Number(value) <= max;
};
var params$d = [
    {
        name: 'max',
        cast: function (value) {
            return Number(value);
        }
    }
];
var max_value = {
    validate: validate$i,
    params: params$d
};

var validate$j = function (files, mimes) {
    var regex = new RegExp(mimes.join('|').replace('*', '.+') + "$", 'i');
    if (Array.isArray(files)) {
        return files.every(function (file) { return regex.test(file.type); });
    }
    return regex.test(files.type);
};
var mimes = {
    validate: validate$j
};

var validate$k = function (value, _a) {
    var length = _a.length;
    if (rules_isNullOrUndefined(value)) {
        return false;
    }
    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$k(val, { length: length }); });
    }
    return String(value).length >= length;
};
var params$e = [
    {
        name: 'length',
        cast: function (value) {
            return Number(value);
        }
    }
];
var min = {
    validate: validate$k,
    params: params$e
};

var validate$l = function (value, _a) {
    var min = _a.min;
    if (rules_isNullOrUndefined(value) || value === '') {
        return false;
    }
    if (Array.isArray(value)) {
        return value.length > 0 && value.every(function (val) { return validate$l(val, { min: min }); });
    }
    return Number(value) >= min;
};
var params$f = [
    {
        name: 'min',
        cast: function (value) {
            return Number(value);
        }
    }
];
var min_value = {
    validate: validate$l,
    params: params$f
};

var ar = /^[٠١٢٣٤٥٦٧٨٩]+$/;
var en = /^[0-9]+$/;
var validate$m = function (value) {
    var testValue = function (val) {
        var strValue = String(val);
        return en.test(strValue) || ar.test(strValue);
    };
    if (Array.isArray(value)) {
        return value.every(testValue);
    }
    return testValue(value);
};
var numeric = {
    validate: validate$m
};

var validate$n = function (value, _a) {
    var regex = _a.regex;
    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$n(val, { regex: regex }); });
    }
    return regex.test(String(value));
};
var params$g = [
    {
        name: 'regex',
        cast: function (value) {
            if (typeof value === 'string') {
                return new RegExp(value);
            }
            return value;
        }
    }
];
var regex = {
    validate: validate$n,
    params: params$g
};

var validate$o = function (value, _a) {
    var allowFalse = (_a === void 0 ? { allowFalse: true } : _a).allowFalse;
    var result = {
        valid: false,
        required: true
    };
    if (rules_isNullOrUndefined(value) || rules_isEmptyArray(value)) {
        return result;
    }
    // incase a field considers `false` as an empty value like checkboxes.
    if (value === false && !allowFalse) {
        return result;
    }
    result.valid = !!String(value).trim().length;
    return result;
};
var computesRequired = true;
var params$h = [
    {
        name: 'allowFalse',
        default: true
    }
];
var required = {
    validate: validate$o,
    params: params$h,
    computesRequired: computesRequired
};

var testEmpty = function (value) {
    return rules_isEmptyArray(value) || rules_includes([false, null, undefined], value) || !String(value).trim().length;
};
var validate$p = function (value, _a) {
    var target = _a.target, values = _a.values;
    var required;
    if (values && values.length) {
        if (!Array.isArray(values) && typeof values === 'string') {
            values = [values];
        }
        // eslint-disable-next-line
        required = values.some(function (val) { return val == String(target).trim(); });
    }
    else {
        required = !testEmpty(target);
    }
    if (!required) {
        return {
            valid: true,
            required: required
        };
    }
    return {
        valid: !testEmpty(value),
        required: required
    };
};
var params$i = [
    {
        name: 'target',
        isTarget: true
    },
    {
        name: 'values'
    }
];
var computesRequired$1 = true;
var required_if = {
    validate: validate$p,
    params: params$i,
    computesRequired: computesRequired$1
};

var validate$q = function (files, _a) {
    var size = _a.size;
    if (isNaN(size)) {
        return false;
    }
    var nSize = size * 1024;
    if (!Array.isArray(files)) {
        return files.size <= nSize;
    }
    for (var i = 0; i < files.length; i++) {
        if (files[i].size > nSize) {
            return false;
        }
    }
    return true;
};
var params$j = [
    {
        name: 'size',
        cast: function (value) {
            return Number(value);
        }
    }
];
var size = {
    validate: validate$q,
    params: params$j
};



// CONCATENATED MODULE: ./src/BaseView.js
/* harmony default export */ var BaseView = ({
  "id": "base",
  "title": "Abstract base view",
  "messages": {
    "countries": {
      "afg": "Afghanistan",
      "ala": "Aland Islands",
      "alb": "Albania",
      "dza": "Algeria",
      "asm": "American Samoa",
      "and": "Andorra",
      "ago": "Angola",
      "aia": "Anguilla",
      "ata": "Antarctica",
      "atg": "Antigua and Barbuda",
      "arg": "Argentina",
      "arm": "Armenia",
      "abw": "Aruba",
      "aus": "Australia",
      "aut": "Austria",
      "aze": "Azerbaijan",
      "bhs": "Bahamas",
      "bhr": "Bahrain",
      "bgd": "Bangladesh",
      "brb": "Barbados",
      "blr": "Belarus",
      "bel": "Belgium",
      "blz": "Belize",
      "ben": "Benin",
      "bmu": "Bermuda",
      "btn": "Bhutan",
      "bol": "Bolivia",
      "bih": "Bosnia and Herzegovina",
      "bwa": "Botswana",
      "bvt": "Bouvet Island",
      "bra": "Brazil",
      "iot": "British Indian Ocean Territory",
      "brn": "Brunei Darussalam",
      "bgr": "Bulgaria",
      "bfa": "Burkina Faso",
      "bdi": "Burundi",
      "khm": "Cambodia",
      "cmr": "Cameroon",
      "can": "Canada",
      "cpv": "Cape Verde",
      "cym": "Cayman Islands",
      "caf": "Central African Republic",
      "tcd": "Chad",
      "chl": "Chile",
      "chn": "China",
      "cxr": "Christmas Island",
      "cck": "Cocos (Keeling), Islands",
      "col": "Colombia",
      "com": "Comoros",
      "cog": "Congo",
      "cod": "Congo, the Democratic Republic of the",
      "cok": "Cook Islands",
      "cri": "Costa Rica",
      "hrv": "Croatia",
      "cub": "Cuba",
      "cyp": "Cyprus",
      "cze": "Czech Republic",
      "civ": "Cote d'Ivoire",
      "dnk": "Denmark",
      "dji": "Djibouti",
      "dma": "Dominica",
      "dom": "Dominican Republic",
      "ecu": "Ecuador",
      "egy": "Egypt",
      "slv": "El Salvador",
      "gnq": "Equatorial Guinea",
      "eri": "Eritrea",
      "est": "Estonia",
      "eth": "Ethiopia",
      "flk": "Falkland Islands (Malvinas),",
      "fro": "Faroe Islands",
      "fji": "Fiji",
      "fin": "Finland",
      "fra": "France",
      "guf": "French Guiana",
      "pyf": "French Polynesia",
      "atf": "French Southern Territories",
      "gab": "Gabon",
      "gmb": "Gambia",
      "geo": "Georgia",
      "deu": "Germany",
      "gha": "Ghana",
      "gib": "Gibraltar",
      "grc": "Greece",
      "grl": "Greenland",
      "grd": "Grenada",
      "glp": "Guadeloupe",
      "gum": "Guam",
      "gtm": "Guatemala",
      "ggy": "Guernsey",
      "gin": "Guinea",
      "gnb": "Guinea-Bissau",
      "guy": "Guyana",
      "hti": "Haiti",
      "hmd": "Heard Island and McDonald Islands",
      "vat": "Holy See (Vatican City State),",
      "hnd": "Honduras",
      "hkg": "Hong Kong",
      "hun": "Hungary",
      "isl": "Iceland",
      "ind": "India",
      "idn": "Indonesia",
      "irn": "Iran, Islamic Republic of",
      "irq": "Iraq",
      "irl": "Ireland",
      "imn": "Isle of Man",
      "isr": "Israel",
      "ita": "Italy",
      "jam": "Jamaica",
      "jpn": "Japan",
      "jey": "Jersey",
      "jor": "Jordan",
      "kaz": "Kazakhstan",
      "ken": "Kenya",
      "kir": "Kiribati",
      "prk": "Korea, Democratic People's Republic of",
      "kor": "Korea, Republic of",
      "kwt": "Kuwait",
      "kgz": "Kyrgyzstan",
      "lao": "Lao People's Democratic Republic",
      "lva": "Latvia",
      "lbn": "Lebanon",
      "lso": "Lesotho",
      "lbr": "Liberia",
      "lby": "Libyan Arab Jamahiriya",
      "lie": "Liechtenstein",
      "ltu": "Lithuania",
      "lux": "Luxembourg",
      "mac": "Macao",
      "mkd": "Macedonia, the former Yugoslav Republic of",
      "mdg": "Madagascar",
      "mwi": "Malawi",
      "mys": "Malaysia",
      "mdv": "Maldives",
      "mli": "Mali",
      "mlt": "Malta",
      "mhl": "Marshall Islands",
      "mtq": "Martinique",
      "mrt": "Mauritania",
      "mus": "Mauritius",
      "myt": "Mayotte",
      "mex": "Mexico",
      "fsm": "Micronesia, Federated States of",
      "mda": "Moldova, Republic of",
      "mco": "Monaco",
      "mng": "Mongolia",
      "mne": "Montenegro",
      "msr": "Montserrat",
      "mar": "Morocco",
      "moz": "Mozambique",
      "mmr": "Myanmar",
      "nam": "Namibia",
      "nru": "Nauru",
      "npl": "Nepal",
      "nld": "Netherlands",
      "ant": "Netherlands Antilles",
      "ncl": "New Caledonia",
      "nzl": "New Zealand",
      "nic": "Nicaragua",
      "ner": "Niger",
      "nga": "Nigeria",
      "niu": "Niue",
      "nfk": "Norfolk Island",
      "mnp": "Northern Mariana Islands",
      "nor": "Norway",
      "omn": "Oman",
      "pak": "Pakistan",
      "plw": "Palau",
      "pse": "Palestinian Territory, Occupied",
      "pan": "Panama",
      "png": "Papua New Guinea",
      "pry": "Paraguay",
      "per": "Peru",
      "phl": "Philippines",
      "pcn": "Pitcairn",
      "pol": "Poland",
      "prt": "Portugal",
      "pri": "Puerto Rico",
      "qat": "Qatar",
      "rou": "Romania",
      "rus": "Russian Federation",
      "rwa": "Rwanda",
      "reu": "Reunion",
      "blm": "Saint Barthelemy",
      "shn": "Saint Helena",
      "kna": "Saint Kitts and Nevis",
      "lca": "Saint Lucia",
      "maf": "Saint Martin (French part)",
      "spm": "Saint Pierre and Miquelon",
      "vct": "Saint Vincent and the Grenadines",
      "wsm": "Samoa",
      "smr": "San Marino",
      "stp": "Sao Tome and Principe",
      "sau": "Saudi Arabia",
      "sen": "Senegal",
      "srb": "Serbia",
      "syc": "Seychelles",
      "sle": "Sierra Leone",
      "sgp": "Singapore",
      "svk": "Slovakia",
      "svn": "Slovenia",
      "slb": "Solomon Islands",
      "som": "Somalia",
      "zaf": "South Africa",
      "sgs": "South Georgia and the South Sandwich Islands",
      "esp": "Spain",
      "lka": "Sri Lanka",
      "sdn": "Sudan",
      "sur": "Suriname",
      "sjm": "Svalbard and Jan Mayen",
      "swz": "Swaziland",
      "swe": "Sweden",
      "che": "Switzerland",
      "syr": "Syrian Arab Republic",
      "twn": "Taiwan, Province of China",
      "tjk": "Tajikistan",
      "tza": "Tanzania, United Republic of",
      "tha": "Thailand",
      "tls": "Timor-Leste",
      "tgo": "Togo",
      "tkl": "Tokelau",
      "ton": "Tonga",
      "tto": "Trinidad and Tobago",
      "tun": "Tunisia",
      "tur": "Turkey",
      "tkm": "Turkmenistan",
      "tca": "Turks and Caicos Islands",
      "tuv": "Tuvalu",
      "uga": "Uganda",
      "ukr": "Ukraine",
      "are": "United Arab Emirates",
      "gbr": "United Kingdom",
      "usa": "United States",
      "umi": "United States Minor Outlying Islands",
      "ury": "Uruguay",
      "uzb": "Uzbekistan",
      "vut": "Vanuatu",
      "ven": "Venezuela",
      "vnm": "Viet Nam",
      "vgb": "Virgin Islands, British",
      "vir": "Virgin Islands, U.S.",
      "wlf": "Wallis and Futuna",
      "esh": "Western Sahara",
      "yem": "Yemen",
      "zmb": "Zambia",
      "zwe": "Zimbabwe"
    },
    "empty": "",
    "required": "This field is required",
    "valid": "",
    "invalid": "This field is invalid",
    "months": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    "timeUnits": {
      SECOND: "seconds",
      MINUTE: "minutes",
      HOUR: "hours",
      DAY: "days",
      MONTH: "months",
      YEAR: "years"
    },
    "countryCallingCodes": [{
      "name": "Israel",
      "dial_code": "+972",
      "code": "IL"
    }, {
      "name": "Afghanistan",
      "dial_code": "+93",
      "code": "AF"
    }, {
      "name": "Albania",
      "dial_code": "+355",
      "code": "AL"
    }, {
      "name": "Algeria",
      "dial_code": "+213",
      "code": "DZ"
    }, {
      "name": "AmericanSamoa",
      "dial_code": "+1 684",
      "code": "AS"
    }, {
      "name": "Andorra",
      "dial_code": "+376",
      "code": "AD"
    }, {
      "name": "Angola",
      "dial_code": "+244",
      "code": "AO"
    }, {
      "name": "Anguilla",
      "dial_code": "+1 264",
      "code": "AI"
    }, {
      "name": "Antigua and Barbuda",
      "dial_code": "+1268",
      "code": "AG"
    }, {
      "name": "Argentina",
      "dial_code": "+54",
      "code": "AR"
    }, {
      "name": "Armenia",
      "dial_code": "+374",
      "code": "AM"
    }, {
      "name": "Aruba",
      "dial_code": "+297",
      "code": "AW"
    }, {
      "name": "Australia",
      "dial_code": "+61",
      "code": "AU"
    }, {
      "name": "Austria",
      "dial_code": "+43",
      "code": "AT"
    }, {
      "name": "Azerbaijan",
      "dial_code": "+994",
      "code": "AZ"
    }, {
      "name": "Bahamas",
      "dial_code": "+1 242",
      "code": "BS"
    }, {
      "name": "Bahrain",
      "dial_code": "+973",
      "code": "BH"
    }, {
      "name": "Bangladesh",
      "dial_code": "+880",
      "code": "BD"
    }, {
      "name": "Barbados",
      "dial_code": "+1 246",
      "code": "BB"
    }, {
      "name": "Belarus",
      "dial_code": "+375",
      "code": "BY"
    }, {
      "name": "Belgium",
      "dial_code": "+32",
      "code": "BE"
    }, {
      "name": "Belize",
      "dial_code": "+501",
      "code": "BZ"
    }, {
      "name": "Benin",
      "dial_code": "+229",
      "code": "BJ"
    }, {
      "name": "Bermuda",
      "dial_code": "+1 441",
      "code": "BM"
    }, {
      "name": "Bhutan",
      "dial_code": "+975",
      "code": "BT"
    }, {
      "name": "Bosnia and Herzegovina",
      "dial_code": "+387",
      "code": "BA"
    }, {
      "name": "Botswana",
      "dial_code": "+267",
      "code": "BW"
    }, {
      "name": "Brazil",
      "dial_code": "+55",
      "code": "BR"
    }, {
      "name": "British Indian Ocean Territory",
      "dial_code": "+246",
      "code": "IO"
    }, {
      "name": "Bulgaria",
      "dial_code": "+359",
      "code": "BG"
    }, {
      "name": "Burkina Faso",
      "dial_code": "+226",
      "code": "BF"
    }, {
      "name": "Burundi",
      "dial_code": "+257",
      "code": "BI"
    }, {
      "name": "Cambodia",
      "dial_code": "+855",
      "code": "KH"
    }, {
      "name": "Cameroon",
      "dial_code": "+237",
      "code": "CM"
    }, {
      "name": "Canada",
      "dial_code": "+1",
      "code": "CA"
    }, {
      "name": "Cape Verde",
      "dial_code": "+238",
      "code": "CV"
    }, {
      "name": "Cayman Islands",
      "dial_code": "+ 345",
      "code": "KY"
    }, {
      "name": "Central African Republic",
      "dial_code": "+236",
      "code": "CF"
    }, {
      "name": "Chad",
      "dial_code": "+235",
      "code": "TD"
    }, {
      "name": "Chile",
      "dial_code": "+56",
      "code": "CL"
    }, {
      "name": "China",
      "dial_code": "+86",
      "code": "CN"
    }, {
      "name": "Christmas Island",
      "dial_code": "+61",
      "code": "CX"
    }, {
      "name": "Colombia",
      "dial_code": "+57",
      "code": "CO"
    }, {
      "name": "Comoros",
      "dial_code": "+269",
      "code": "KM"
    }, {
      "name": "Congo",
      "dial_code": "+242",
      "code": "CG"
    }, {
      "name": "Cook Islands",
      "dial_code": "+682",
      "code": "CK"
    }, {
      "name": "Costa Rica",
      "dial_code": "+506",
      "code": "CR"
    }, {
      "name": "Croatia",
      "dial_code": "+385",
      "code": "HR"
    }, {
      "name": "Cuba",
      "dial_code": "+53",
      "code": "CU"
    }, {
      "name": "Cyprus",
      "dial_code": "+537",
      "code": "CY"
    }, {
      "name": "Czech Republic",
      "dial_code": "+420",
      "code": "CZ"
    }, {
      "name": "Denmark",
      "dial_code": "+45",
      "code": "DK"
    }, {
      "name": "Djibouti",
      "dial_code": "+253",
      "code": "DJ"
    }, {
      "name": "Dominica",
      "dial_code": "+1 767",
      "code": "DM"
    }, {
      "name": "Dominican Republic",
      "dial_code": "+1 849",
      "code": "DO"
    }, {
      "name": "Ecuador",
      "dial_code": "+593",
      "code": "EC"
    }, {
      "name": "Egypt",
      "dial_code": "+20",
      "code": "EG"
    }, {
      "name": "El Salvador",
      "dial_code": "+503",
      "code": "SV"
    }, {
      "name": "Equatorial Guinea",
      "dial_code": "+240",
      "code": "GQ"
    }, {
      "name": "Eritrea",
      "dial_code": "+291",
      "code": "ER"
    }, {
      "name": "Estonia",
      "dial_code": "+372",
      "code": "EE"
    }, {
      "name": "Ethiopia",
      "dial_code": "+251",
      "code": "ET"
    }, {
      "name": "Faroe Islands",
      "dial_code": "+298",
      "code": "FO"
    }, {
      "name": "Fiji",
      "dial_code": "+679",
      "code": "FJ"
    }, {
      "name": "Finland",
      "dial_code": "+358",
      "code": "FI"
    }, {
      "name": "France",
      "dial_code": "+33",
      "code": "FR"
    }, {
      "name": "French Guiana",
      "dial_code": "+594",
      "code": "GF"
    }, {
      "name": "French Polynesia",
      "dial_code": "+689",
      "code": "PF"
    }, {
      "name": "Gabon",
      "dial_code": "+241",
      "code": "GA"
    }, {
      "name": "Gambia",
      "dial_code": "+220",
      "code": "GM"
    }, {
      "name": "Georgia",
      "dial_code": "+995",
      "code": "GE"
    }, {
      "name": "Germany",
      "dial_code": "+49",
      "code": "DE"
    }, {
      "name": "Ghana",
      "dial_code": "+233",
      "code": "GH"
    }, {
      "name": "Gibraltar",
      "dial_code": "+350",
      "code": "GI"
    }, {
      "name": "Greece",
      "dial_code": "+30",
      "code": "GR"
    }, {
      "name": "Greenland",
      "dial_code": "+299",
      "code": "GL"
    }, {
      "name": "Grenada",
      "dial_code": "+1 473",
      "code": "GD"
    }, {
      "name": "Guadeloupe",
      "dial_code": "+590",
      "code": "GP"
    }, {
      "name": "Guam",
      "dial_code": "+1 671",
      "code": "GU"
    }, {
      "name": "Guatemala",
      "dial_code": "+502",
      "code": "GT"
    }, {
      "name": "Guinea",
      "dial_code": "+224",
      "code": "GN"
    }, {
      "name": "Guinea-Bissau",
      "dial_code": "+245",
      "code": "GW"
    }, {
      "name": "Guyana",
      "dial_code": "+595",
      "code": "GY"
    }, {
      "name": "Haiti",
      "dial_code": "+509",
      "code": "HT"
    }, {
      "name": "Honduras",
      "dial_code": "+504",
      "code": "HN"
    }, {
      "name": "Hungary",
      "dial_code": "+36",
      "code": "HU"
    }, {
      "name": "Iceland",
      "dial_code": "+354",
      "code": "IS"
    }, {
      "name": "India",
      "dial_code": "+91",
      "code": "IN"
    }, {
      "name": "Indonesia",
      "dial_code": "+62",
      "code": "ID"
    }, {
      "name": "Iraq",
      "dial_code": "+964",
      "code": "IQ"
    }, {
      "name": "Ireland",
      "dial_code": "+353",
      "code": "IE"
    }, {
      "name": "Israel",
      "dial_code": "+972",
      "code": "IL"
    }, {
      "name": "Italy",
      "dial_code": "+39",
      "code": "IT"
    }, {
      "name": "Jamaica",
      "dial_code": "+1 876",
      "code": "JM"
    }, {
      "name": "Japan",
      "dial_code": "+81",
      "code": "JP"
    }, {
      "name": "Jordan",
      "dial_code": "+962",
      "code": "JO"
    }, {
      "name": "Kazakhstan",
      "dial_code": "+7 7",
      "code": "KZ"
    }, {
      "name": "Kenya",
      "dial_code": "+254",
      "code": "KE"
    }, {
      "name": "Kiribati",
      "dial_code": "+686",
      "code": "KI"
    }, {
      "name": "Kuwait",
      "dial_code": "+965",
      "code": "KW"
    }, {
      "name": "Kyrgyzstan",
      "dial_code": "+996",
      "code": "KG"
    }, {
      "name": "Latvia",
      "dial_code": "+371",
      "code": "LV"
    }, {
      "name": "Lebanon",
      "dial_code": "+961",
      "code": "LB"
    }, {
      "name": "Lesotho",
      "dial_code": "+266",
      "code": "LS"
    }, {
      "name": "Liberia",
      "dial_code": "+231",
      "code": "LR"
    }, {
      "name": "Liechtenstein",
      "dial_code": "+423",
      "code": "LI"
    }, {
      "name": "Lithuania",
      "dial_code": "+370",
      "code": "LT"
    }, {
      "name": "Luxembourg",
      "dial_code": "+352",
      "code": "LU"
    }, {
      "name": "Madagascar",
      "dial_code": "+261",
      "code": "MG"
    }, {
      "name": "Malawi",
      "dial_code": "+265",
      "code": "MW"
    }, {
      "name": "Malaysia",
      "dial_code": "+60",
      "code": "MY"
    }, {
      "name": "Maldives",
      "dial_code": "+960",
      "code": "MV"
    }, {
      "name": "Mali",
      "dial_code": "+223",
      "code": "ML"
    }, {
      "name": "Malta",
      "dial_code": "+356",
      "code": "MT"
    }, {
      "name": "Marshall Islands",
      "dial_code": "+692",
      "code": "MH"
    }, {
      "name": "Martinique",
      "dial_code": "+596",
      "code": "MQ"
    }, {
      "name": "Mauritania",
      "dial_code": "+222",
      "code": "MR"
    }, {
      "name": "Mauritius",
      "dial_code": "+230",
      "code": "MU"
    }, {
      "name": "Mayotte",
      "dial_code": "+262",
      "code": "YT"
    }, {
      "name": "Mexico",
      "dial_code": "+52",
      "code": "MX"
    }, {
      "name": "Monaco",
      "dial_code": "+377",
      "code": "MC"
    }, {
      "name": "Mongolia",
      "dial_code": "+976",
      "code": "MN"
    }, {
      "name": "Montenegro",
      "dial_code": "+382",
      "code": "ME"
    }, {
      "name": "Montserrat",
      "dial_code": "+1664",
      "code": "MS"
    }, {
      "name": "Morocco",
      "dial_code": "+212",
      "code": "MA"
    }, {
      "name": "Myanmar",
      "dial_code": "+95",
      "code": "MM"
    }, {
      "name": "Namibia",
      "dial_code": "+264",
      "code": "NA"
    }, {
      "name": "Nauru",
      "dial_code": "+674",
      "code": "NR"
    }, {
      "name": "Nepal",
      "dial_code": "+977",
      "code": "NP"
    }, {
      "name": "Netherlands",
      "dial_code": "+31",
      "code": "NL"
    }, {
      "name": "Netherlands Antilles",
      "dial_code": "+599",
      "code": "AN"
    }, {
      "name": "New Caledonia",
      "dial_code": "+687",
      "code": "NC"
    }, {
      "name": "New Zealand",
      "dial_code": "+64",
      "code": "NZ"
    }, {
      "name": "Nicaragua",
      "dial_code": "+505",
      "code": "NI"
    }, {
      "name": "Niger",
      "dial_code": "+227",
      "code": "NE"
    }, {
      "name": "Nigeria",
      "dial_code": "+234",
      "code": "NG"
    }, {
      "name": "Niue",
      "dial_code": "+683",
      "code": "NU"
    }, {
      "name": "Norfolk Island",
      "dial_code": "+672",
      "code": "NF"
    }, {
      "name": "Northern Mariana Islands",
      "dial_code": "+1 670",
      "code": "MP"
    }, {
      "name": "Norway",
      "dial_code": "+47",
      "code": "NO"
    }, {
      "name": "Oman",
      "dial_code": "+968",
      "code": "OM"
    }, {
      "name": "Pakistan",
      "dial_code": "+92",
      "code": "PK"
    }, {
      "name": "Palau",
      "dial_code": "+680",
      "code": "PW"
    }, {
      "name": "Panama",
      "dial_code": "+507",
      "code": "PA"
    }, {
      "name": "Papua New Guinea",
      "dial_code": "+675",
      "code": "PG"
    }, {
      "name": "Paraguay",
      "dial_code": "+595",
      "code": "PY"
    }, {
      "name": "Peru",
      "dial_code": "+51",
      "code": "PE"
    }, {
      "name": "Philippines",
      "dial_code": "+63",
      "code": "PH"
    }, {
      "name": "Poland",
      "dial_code": "+48",
      "code": "PL"
    }, {
      "name": "Portugal",
      "dial_code": "+351",
      "code": "PT"
    }, {
      "name": "Puerto Rico",
      "dial_code": "+1 939",
      "code": "PR"
    }, {
      "name": "Qatar",
      "dial_code": "+974",
      "code": "QA"
    }, {
      "name": "Romania",
      "dial_code": "+40",
      "code": "RO"
    }, {
      "name": "Rwanda",
      "dial_code": "+250",
      "code": "RW"
    }, {
      "name": "Samoa",
      "dial_code": "+685",
      "code": "WS"
    }, {
      "name": "San Marino",
      "dial_code": "+378",
      "code": "SM"
    }, {
      "name": "Saudi Arabia",
      "dial_code": "+966",
      "code": "SA"
    }, {
      "name": "Senegal",
      "dial_code": "+221",
      "code": "SN"
    }, {
      "name": "Serbia",
      "dial_code": "+381",
      "code": "RS"
    }, {
      "name": "Seychelles",
      "dial_code": "+248",
      "code": "SC"
    }, {
      "name": "Sierra Leone",
      "dial_code": "+232",
      "code": "SL"
    }, {
      "name": "Singapore",
      "dial_code": "+65",
      "code": "SG"
    }, {
      "name": "Slovakia",
      "dial_code": "+421",
      "code": "SK"
    }, {
      "name": "Slovenia",
      "dial_code": "+386",
      "code": "SI"
    }, {
      "name": "Solomon Islands",
      "dial_code": "+677",
      "code": "SB"
    }, {
      "name": "South Africa",
      "dial_code": "+27",
      "code": "ZA"
    }, {
      "name": "South Georgia and the South Sandwich Islands",
      "dial_code": "+500",
      "code": "GS"
    }, {
      "name": "Spain",
      "dial_code": "+34",
      "code": "ES"
    }, {
      "name": "Sri Lanka",
      "dial_code": "+94",
      "code": "LK"
    }, {
      "name": "Sudan",
      "dial_code": "+249",
      "code": "SD"
    }, {
      "name": "Suriname",
      "dial_code": "+597",
      "code": "SR"
    }, {
      "name": "Swaziland",
      "dial_code": "+268",
      "code": "SZ"
    }, {
      "name": "Sweden",
      "dial_code": "+46",
      "code": "SE"
    }, {
      "name": "Switzerland",
      "dial_code": "+41",
      "code": "CH"
    }, {
      "name": "Tajikistan",
      "dial_code": "+992",
      "code": "TJ"
    }, {
      "name": "Thailand",
      "dial_code": "+66",
      "code": "TH"
    }, {
      "name": "Togo",
      "dial_code": "+228",
      "code": "TG"
    }, {
      "name": "Tokelau",
      "dial_code": "+690",
      "code": "TK"
    }, {
      "name": "Tonga",
      "dial_code": "+676",
      "code": "TO"
    }, {
      "name": "Trinidad and Tobago",
      "dial_code": "+1 868",
      "code": "TT"
    }, {
      "name": "Tunisia",
      "dial_code": "+216",
      "code": "TN"
    }, {
      "name": "Turkey",
      "dial_code": "+90",
      "code": "TR"
    }, {
      "name": "Turkmenistan",
      "dial_code": "+993",
      "code": "TM"
    }, {
      "name": "Turks and Caicos Islands",
      "dial_code": "+1 649",
      "code": "TC"
    }, {
      "name": "Tuvalu",
      "dial_code": "+688",
      "code": "TV"
    }, {
      "name": "Uganda",
      "dial_code": "+256",
      "code": "UG"
    }, {
      "name": "Ukraine",
      "dial_code": "+380",
      "code": "UA"
    }, {
      "name": "United Arab Emirates",
      "dial_code": "+971",
      "code": "AE"
    }, {
      "name": "United Kingdom",
      "dial_code": "+44",
      "code": "GB"
    }, {
      "name": "United States",
      "dial_code": "+1",
      "code": "US"
    }, {
      "name": "Uruguay",
      "dial_code": "+598",
      "code": "UY"
    }, {
      "name": "Uzbekistan",
      "dial_code": "+998",
      "code": "UZ"
    }, {
      "name": "Vanuatu",
      "dial_code": "+678",
      "code": "VU"
    }, {
      "name": "Wallis and Futuna",
      "dial_code": "+681",
      "code": "WF"
    }, {
      "name": "Yemen",
      "dial_code": "+967",
      "code": "YE"
    }, {
      "name": "Zambia",
      "dial_code": "+260",
      "code": "ZM"
    }, {
      "name": "Zimbabwe",
      "dial_code": "+263",
      "code": "ZW"
    }, {
      "name": "land Islands",
      "dial_code": "",
      "code": "AX"
    }, {
      "name": "Antarctica",
      "dial_code": null,
      "code": "AQ"
    }, {
      "name": "Bolivia, Plurinational State of",
      "dial_code": "+591",
      "code": "BO"
    }, {
      "name": "Brunei Darussalam",
      "dial_code": "+673",
      "code": "BN"
    }, {
      "name": "Cocos (Keeling) Islands",
      "dial_code": "+61",
      "code": "CC"
    }, {
      "name": "Congo, The Democratic Republic of the",
      "dial_code": "+243",
      "code": "CD"
    }, {
      "name": "Cote d'Ivoire",
      "dial_code": "+225",
      "code": "CI"
    }, {
      "name": "Falkland Islands (Malvinas)",
      "dial_code": "+500",
      "code": "FK"
    }, {
      "name": "Guernsey",
      "dial_code": "+44",
      "code": "GG"
    }, {
      "name": "Holy See (Vatican City State)",
      "dial_code": "+379",
      "code": "VA"
    }, {
      "name": "Hong Kong",
      "dial_code": "+852",
      "code": "HK"
    }, {
      "name": "Iran, Islamic Republic of",
      "dial_code": "+98",
      "code": "IR"
    }, {
      "name": "Isle of Man",
      "dial_code": "+44",
      "code": "IM"
    }, {
      "name": "Jersey",
      "dial_code": "+44",
      "code": "JE"
    }, {
      "name": "Korea, Democratic People's Republic of",
      "dial_code": "+850",
      "code": "KP"
    }, {
      "name": "Korea, Republic of",
      "dial_code": "+82",
      "code": "KR"
    }, {
      "name": "Lao People's Democratic Republic",
      "dial_code": "+856",
      "code": "LA"
    }, {
      "name": "Libyan Arab Jamahiriya",
      "dial_code": "+218",
      "code": "LY"
    }, {
      "name": "Macao",
      "dial_code": "+853",
      "code": "MO"
    }, {
      "name": "Macedonia, The Former Yugoslav Republic of",
      "dial_code": "+389",
      "code": "MK"
    }, {
      "name": "Micronesia, Federated States of",
      "dial_code": "+691",
      "code": "FM"
    }, {
      "name": "Moldova, Republic of",
      "dial_code": "+373",
      "code": "MD"
    }, {
      "name": "Mozambique",
      "dial_code": "+258",
      "code": "MZ"
    }, {
      "name": "Palestinian Territory, Occupied",
      "dial_code": "+970",
      "code": "PS"
    }, {
      "name": "Pitcairn",
      "dial_code": "+872",
      "code": "PN"
    }, {
      "name": "Réunion",
      "dial_code": "+262",
      "code": "RE"
    }, {
      "name": "Russia",
      "dial_code": "+7",
      "code": "RU"
    }, {
      "name": "Saint Barthélemy",
      "dial_code": "+590",
      "code": "BL"
    }, {
      "name": "Saint Helena, Ascension and Tristan Da Cunha",
      "dial_code": "+290",
      "code": "SH"
    }, {
      "name": "Saint Kitts and Nevis",
      "dial_code": "+1 869",
      "code": "KN"
    }, {
      "name": "Saint Lucia",
      "dial_code": "+1 758",
      "code": "LC"
    }, {
      "name": "Saint Martin",
      "dial_code": "+590",
      "code": "MF"
    }, {
      "name": "Saint Pierre and Miquelon",
      "dial_code": "+508",
      "code": "PM"
    }, {
      "name": "Saint Vincent and the Grenadines",
      "dial_code": "+1 784",
      "code": "VC"
    }, {
      "name": "Sao Tome and Principe",
      "dial_code": "+239",
      "code": "ST"
    }, {
      "name": "Somalia",
      "dial_code": "+252",
      "code": "SO"
    }, {
      "name": "Svalbard and Jan Mayen",
      "dial_code": "+47",
      "code": "SJ"
    }, {
      "name": "Syrian Arab Republic",
      "dial_code": "+963",
      "code": "SY"
    }, {
      "name": "Taiwan, Province of China",
      "dial_code": "+886",
      "code": "TW"
    }, {
      "name": "Tanzania, United Republic of",
      "dial_code": "+255",
      "code": "TZ"
    }, {
      "name": "Timor-Leste",
      "dial_code": "+670",
      "code": "TL"
    }, {
      "name": "Venezuela, Bolivarian Republic of",
      "dial_code": "+58",
      "code": "VE"
    }, {
      "name": "Viet Nam",
      "dial_code": "+84",
      "code": "VN"
    }, {
      "name": "Virgin Islands, British",
      "dial_code": "+1 284",
      "code": "VG"
    }, {
      "name": "Virgin Islands, U.S.",
      "dial_code": "+1 340",
      "code": "VI"
    }]
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"161888d0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/fields/ObjectField.vue?vue&type=template&id=9b988d2c&scoped=true&
var ObjectFieldvue_type_template_id_9b988d2c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('container',_vm._b({model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v},expression:"model"}},'container',_vm.props,false),[_c('fields',_vm._b({model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v},expression:"model"}},'fields',_vm.props,false))],1)}
var ObjectFieldvue_type_template_id_9b988d2c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/fields/ObjectField.vue?vue&type=template&id=9b988d2c&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"161888d0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Container.vue?vue&type=template&id=761588b4&scoped=true&
var Containervue_type_template_id_761588b4_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.schema.title)?_c('div',{staticClass:"card",staticStyle:{"margin-bottom":"10px"}},[(_vm.showBody || !_vm.showHeader)?_c('div',{staticClass:"card-body"},[_c('h5',[_vm._v(_vm._s(_vm.schema.title))]),_vm._t("default")],2):_vm._e()]):_c('div',[_vm._t("default")],2)])}
var Containervue_type_template_id_761588b4_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Container.vue?vue&type=template&id=761588b4&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Container.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Containervue_type_script_lang_js_ = ({
  name: "Container",
  props: {
    value: {},
    data: {},
    schema: {},
    options: {},
    view: {},
    connector: {}
  },
  data: function data() {
    return {
      showBody: false
    };
  },
  computed: {
    label: function label() {
      return this.schema.title;
    },
    headerLabel: function headerLabel() {
      if (!this.value) return "";
      var keys = Object.keys(this.value);
      var l = this.value[keys[0]];
      return l ? l : "[empty item]";
    },
    showHeader: function showHeader() {
      return false; //!!this.$slots.header;
    }
  },
  methods: {},
  components: {}
});
// CONCATENATED MODULE: ./src/components/Container.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Containervue_type_script_lang_js_ = (Containervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/Container.vue





/* normalize component */

var Container_component = normalizeComponent(
  components_Containervue_type_script_lang_js_,
  Containervue_type_template_id_761588b4_scoped_true_render,
  Containervue_type_template_id_761588b4_scoped_true_staticRenderFns,
  false,
  null,
  "761588b4",
  null
  
)

/* harmony default export */ var Container = (Container_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"161888d0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Fields.vue?vue&type=template&id=3c8ca06e&scoped=true&
var Fieldsvue_type_template_id_3c8ca06e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-row"},_vm._l((_vm.visibleFields),function(value,key){return _c('div',{key:key,staticClass:"col-12"},[_c('form-field',_vm._b({on:{"input":function($event){return _vm.propChange(key, $event)}},model:{value:(_vm.model[key]),callback:function ($$v) {_vm.$set(_vm.model, key, $$v)},expression:"model[key]"}},'form-field',_vm.itemProps(key),false))],1)}),0)}
var Fieldsvue_type_template_id_3c8ca06e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Fields.vue?vue&type=template&id=3c8ca06e&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Fields.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//


/* harmony default export */ var Fieldsvue_type_script_lang_js_ = ({
  name: "Fields",
  props: {
    value: {},
    data: {},
    schema: {},
    options: {},
    view: {},
    connector: {}
  },
  computed: {
    fields: function fields() {
      var fields = {};

      for (var key in this.schema.properties) {
        var data = this.value && this.value[key] ? this.value[key] : undefined;
        var schema = this.schema && this.schema.properties && this.schema.properties[key] ? this.schema.properties[key] : {};
        var options = this.options && this.options.fields && this.options.fields[key] ? this.options.fields[key] : {};

        if (!options.label) {
          options.label = schema.title || "";
        }

        var view = this.view && this.view.fields && this.view.fields[key] ? this.view.fields[key] : this.view;
        /*
        if (schema.type =="array"){
          schema = schema.items;
          options = options.items ? options.items: {};
          view = view.items ? view.items: {};
        }
        */

        fields[key] = lama.createFieldInstance("", data, options, schema, view, this.connector, this.errorCallback);
      }

      return fields;
    },
    visibleFields: function visibleFields() {
      var fields = {};

      for (var key in this.fields) {
        if (this.visible(key)) {
          fields[key] = this.fields[key];
        }
      }

      return fields;
    },
    model: {
      get: function get() {
        return this.value || {};
      },
      set: function set(val) {
        this.$emit("input", val);
      }
    }
  },
  methods: {
    propChange: function propChange(key, value) {
      this.$set(this.model, key, value);
      this.$emit("input", this.model);
    },
    itemProps: function itemProps(key) {
      return this.fields[key].props;
    },
    visible: function visible(key) {
      var opt = this.itemProps(key).options;

      if (opt.dependencies) {
        var ok = true;

        for (var prop in opt.dependencies) {
          var val = opt.dependencies[prop];
          ok = ok && this.model[prop] == val;
        }

        return ok;
      }

      if (this.schema.dependencies && this.schema.dependencies[key]) {
        var _ok = true;

        for (var i = 0; i < this.schema.dependencies[key].length; i++) {
          var _prop = this.schema.dependencies[key][i];
          _ok = _ok && this.model[_prop];
        }

        return _ok;
      }

      return true;
    }
  },
  //components: { FormField },
  beforeCreate: function beforeCreate() {
    this.$options.components.FormField = Field;
  }
});
// CONCATENATED MODULE: ./src/components/Fields.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Fieldsvue_type_script_lang_js_ = (Fieldsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Fields.vue





/* normalize component */

var Fields_component = normalizeComponent(
  components_Fieldsvue_type_script_lang_js_,
  Fieldsvue_type_template_id_3c8ca06e_scoped_true_render,
  Fieldsvue_type_template_id_3c8ca06e_scoped_true_staticRenderFns,
  false,
  null,
  "3c8ca06e",
  null
  
)

/* harmony default export */ var Fields = (Fields_component.exports);
// CONCATENATED MODULE: ./src/builderUtils.js

/* harmony default export */ var builderUtils = ({
  getObjectProps: function getObjectProps() {
    var types = [];
    var fieldClassRegistry = lama.fieldClassRegistry;

    for (var key in fieldClassRegistry) {
      if (fieldClassRegistry[key].builder) {
        types.push(key);
      }
    }

    return {
      schema: {
        title: "Builder",
        type: "array",
        items: {
          type: "object",
          properties: {
            fieldName: {
              type: "string",
              title: "Field Name",
              required: true
            },
            label: {
              type: "string",
              title: "Label",
              required: true
            },
            fieldType: {
              type: "string",
              title: "Field Type",
              enum: types
            }
          }
        }
      },
      options: {
        items: {
          type: "builder",
          fields: {}
        }
      }
    };
  },
  objectFromBuilder: function objectFromBuilder(field) {
    var props = {};
    var fields = {};

    if (field.fields) {
      for (var i = 0; i < field.fields.length; i++) {
        var f = field.fields[i];
        if (!f.fieldName) f.fieldName = "field" + i;

        if (f.fieldType) {
          var builderComponent = lama.getFieldComponent(f.fieldType);
          var d = builderComponent.builder.fromBuilder(f);
          props[f.fieldName] = d.schema;
          fields[f.fieldName] = d.options;
        } else {
          props[f.fieldName] = {
            title: f.label
          };
          fields[f.fieldName] = {};
        }
      }
    }

    return {
      schema: {
        title: field.label,
        type: "object",
        properties: props
      },
      options: {
        fields: fields
      }
    };
  },
  objectToBuilder: function objectToBuilder(def) {
    var fields = [];

    if (def.schema && def.schema.properties) {
      for (var key in def.schema.properties) {
        var f = def.schema.properties[key];

        if (f) {
          var opt = {};

          if (def.options.fields && def.options.fields) {
            opt = def.options.fields[key] || {};
          }

          var type = opt.type;

          if (!type && f.type) {
            type = lama.guessOptionsType(f);
          }

          if (type) {
            var builderComponent = lama.getFieldComponent(type);
            var d = builderComponent.builder.toBuilder({
              schema: f,
              options: opt
            });
            d.fieldName = key;
            fields.push(d);
          } else {
            fields.push({
              fieldName: key,
              label: f.title
            });
          }
        } else {
          fields.push({
            fieldName: "new"
          });
        }
      }
    }

    return {
      label: def.schema.title,
      fieldType: "object",
      fields: fields
    };
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/fields/ObjectField.vue?vue&type=script&lang=js&
//
//
//
//
//
//



var ObjectField = {
  name: "ObjectField",
  props: {
    value: {
      type: Object
    },
    schema: {},
    options: {},
    view: {},
    connector: {}
  },
  computed: {
    model: {
      get: function get() {
        return this.value;
      },
      set: function set(val) {
        this.$emit("input", val);
      }
    },
    props: function props() {
      return {
        schema: this.schema,
        options: this.options,
        view: this.view,
        connector: this.connector,
        errorCallback: this.errorCallback
      };
    }
  },
  methods: {},
  components: {
    Container: Container,
    Fields: Fields
  },
  builder: {
    props: function props() {
      return {
        schema: {
          type: "object",
          properties: {
            fields: {
              title: "Fields",
              type: "array",
              items: builderUtils.getObjectProps().schema.items
            }
          }
        },
        options: {
          fields: {
            fields: {
              items: builderUtils.getObjectProps().options.items
            }
          }
        }
      };
    },
    fromBuilder: function fromBuilder(field) {
      return builderUtils.objectFromBuilder(field);
    },
    toBuilder: function toBuilder(def) {
      return builderUtils.objectToBuilder(def);
    }
  }
};
/* harmony default export */ var ObjectFieldvue_type_script_lang_js_ = (ObjectField);
// CONCATENATED MODULE: ./src/components/fields/ObjectField.vue?vue&type=script&lang=js&
 /* harmony default export */ var fields_ObjectFieldvue_type_script_lang_js_ = (ObjectFieldvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/fields/ObjectField.vue





/* normalize component */

var ObjectField_component = normalizeComponent(
  fields_ObjectFieldvue_type_script_lang_js_,
  ObjectFieldvue_type_template_id_9b988d2c_scoped_true_render,
  ObjectFieldvue_type_template_id_9b988d2c_scoped_true_staticRenderFns,
  false,
  null,
  "9b988d2c",
  null
  
)

/* harmony default export */ var fields_ObjectField = (ObjectField_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/fields/AddressField.vue?vue&type=script&lang=js&
//

var AddressField = {
  name: "AddressField",
  extends: fields_ObjectField,
  data: function data() {
    return {};
  },
  computed: {
    props: function props() {
      return {
        schema: {
          title: "Address",
          type: "object",
          properties: {
            street: {
              title: "Street",
              type: "string"
            },
            number: {
              title: "House Number",
              type: "string"
            },
            city: {
              title: "City",
              type: "string"
            },
            state: {
              title: "State",
              type: "string",
              enum: ["AL", "AK", "AS", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FM", "FL", "GA", "GU", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MH", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "MP", "OH", "OK", "OR", "PW", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VI", "VA", "WA", "WV", "WI", "WY"]
            },
            postalcode: {
              title: "Postal Code",
              type: "string"
            },
            country: {
              title: "Country",
              type: "string"
            },
            latitude: {
              title: "Latitude",
              type: "number"
            },
            longitude: {
              title: "Longitude",
              type: "number"
            }
          }
        },
        options: {
          fields: {
            search: {
              fieldClass: "googlesearch"
            },
            street: {
              fieldClass: "street"
            },
            number: {
              fieldClass: "number"
            },
            city: {
              fieldClass: "city"
            },
            postalcode: {
              fieldClass: "postalcode"
            },
            state: {
              optionLabels: ["ALABAMA", "ALASKA", "AMERICANSAMOA", "ARIZONA", "ARKANSAS", "CALIFORNIA", "COLORADO", "CONNECTICUT", "DELAWARE", "DISTRICTOFCOLUMBIA", "FEDERATEDSTATESOFMICRONESIA", "FLORIDA", "GEORGIA", "GUAM", "HAWAII", "IDAHO", "ILLINOIS", "INDIANA", "IOWA", "KANSAS", "KENTUCKY", "LOUISIANA", "MAINE", "MARSHALLISLANDS", "MARYLAND", "MASSACHUSETTS", "MICHIGAN", "MINNESOTA", "MISSISSIPPI", "MISSOURI", "MONTANA", "NEBRASKA", "NEVADA", "NEWHAMPSHIRE", "NEWJERSEY", "NEWMEXICO", "NEWYORK", "NORTHCAROLINA", "NORTHDAKOTA", "NORTHERNMARIANAISLANDS", "OHIO", "OKLAHOMA", "OREGON", "PALAU", "PENNSYLVANIA", "PUERTORICO", "RHODEISLAND", "SOUTHCAROLINA", "SOUTHDAKOTA", "TENNESSEE", "TEXAS", "UTAH", "VERMONT", "VIRGINISLANDS", "VIRGINIA", "WASHINGTON", "WESTVIRGINIA", "WISCONSIN", "WYOMING"],
              fieldClass: "state",
              hidden: true
            },
            country: {
              type: "country",
              fieldClass: "country"
            },
            latitude: {
              fieldClass: "lat"
            },
            longitude: {
              fieldClass: "lng"
            }
          }
        },
        view: this.view,
        connector: this.connector
      };
    }
  },
  methods: {},
  created: function created() {},
  components: {},
  builder: {
    props: function props() {
      return {
        schema: {
          type: "object",
          properties: {}
        },
        options: {}
      };
    },
    fromBuilder: function fromBuilder(field) {
      return {
        schema: {
          title: field.label,
          type: "object"
        },
        options: {
          type: "address"
        }
      };
    },
    toBuilder: function toBuilder(def) {
      return {
        label: def.schema.title,
        fieldType: "address"
      };
    }
  }
};
/* harmony default export */ var AddressFieldvue_type_script_lang_js_ = (AddressField);
// CONCATENATED MODULE: ./src/components/fields/AddressField.vue?vue&type=script&lang=js&
 /* harmony default export */ var fields_AddressFieldvue_type_script_lang_js_ = (AddressFieldvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/fields/AddressField.vue
var AddressField_render, AddressField_staticRenderFns




/* normalize component */

var AddressField_component = normalizeComponent(
  fields_AddressFieldvue_type_script_lang_js_,
  AddressField_render,
  AddressField_staticRenderFns,
  false,
  null,
  "59ec049a",
  null
  
)

/* harmony default export */ var fields_AddressField = (AddressField_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"161888d0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/fields/ArrayField.vue?vue&type=template&id=0da24fa5&scoped=true&
var ArrayFieldvue_type_template_id_0da24fa5_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('container',_vm._b({},'container',_vm.props,false),[_c('list',_vm._b({model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v},expression:"model"}},'list',_vm.props,false))],1)}
var ArrayFieldvue_type_template_id_0da24fa5_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/fields/ArrayField.vue?vue&type=template&id=0da24fa5&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"161888d0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/List.vue?vue&type=template&id=fb3e8d98&scoped=true&
var Listvue_type_template_id_fb3e8d98_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._l((_vm.model),function(item,index){return _c('div',{key:index},[_c('array-item-container',_vm._b({on:{"show-body":function($event){return _vm.showBody(index)}},scopedSlots:_vm._u([{key:"toolbar",fn:function(){return [_c('toolbar',_vm._b({on:{"show-body":function($event){return _vm.showBody(index+1)}},model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v},expression:"model"}},'toolbar',_vm.toolbarProps(index),false))]},proxy:true}],null,true),model:{value:(_vm.model[index]),callback:function ($$v) {_vm.$set(_vm.model, index, $$v)},expression:"model[index]"}},'array-item-container',_vm.containerProps(index),false),[_c('form-field',_vm._b({on:{"input":function($event){return _vm.itemChange(index, $event)}},model:{value:(_vm.model[index]),callback:function ($$v) {_vm.$set(_vm.model, index, $$v)},expression:"model[index]"}},'form-field',_vm.itemProps(item),false))],1)],1)}),(!_vm.model.length)?_c('toolbar',_vm._b({on:{"show-body":function($event){return _vm.showBody(0)}},model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v},expression:"model"}},'toolbar',_vm.toolbarProps(-1),false)):_vm._e()],2)}
var Listvue_type_template_id_fb3e8d98_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/List.vue?vue&type=template&id=fb3e8d98&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"161888d0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Toolbar.vue?vue&type=template&id=34304e92&scoped=true&
var Toolbarvue_type_template_id_34304e92_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"btn-group btn-group-sm",attrs:{"role":"group","aria-label":"Toolbar"}},[(_vm.index >=0)?_c('button',{staticClass:"btn btn-secondary",attrs:{"type":"button","disabled":_vm.index ==0},on:{"click":_vm.up}},[_vm._v("Up")]):_vm._e(),(_vm.index >=0)?_c('button',{staticClass:"btn btn-secondary",attrs:{"type":"button","disabled":_vm.index+1 == _vm.model.length},on:{"click":_vm.down}},[_vm._v("Down")]):_vm._e(),_c('button',{staticClass:"btn btn-secondary",attrs:{"type":"button"},on:{"click":_vm.add}},[_vm._v("+")]),(_vm.index >=0)?_c('button',{staticClass:"btn btn-secondary",attrs:{"type":"button"},on:{"click":_vm.remove}},[_vm._v("-")]):_vm._e()])}
var Toolbarvue_type_template_id_34304e92_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Toolbar.vue?vue&type=template&id=34304e92&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__("a434");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Toolbar.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Toolbarvue_type_script_lang_js_ = ({
  name: "Toolbar",
  props: {
    schema: {},
    options: {},
    messages: {},
    connector: {},
    value: {
      type: Array
    },
    index: {}
  },
  computed: {
    model: {
      get: function get() {
        return this.value;
      },
      set: function set(val) {
        this.$emit("input", val);
      }
    }
  },
  methods: {
    array_move: function array_move(arr, old_index, new_index) {
      if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;

        while (k--) {
          arr.push(undefined);
        }
      }

      arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
      return arr; // for testing
    },
    up: function up() {
      this.array_move(this.model, this.index, this.index - 1);
      this.$emit("input", this.model);
    },
    down: function down() {
      this.array_move(this.model, this.index, this.index + 1);
      this.$emit("input", this.model);
    },
    add: function add() {
      var schema = this.schema; // eslint-disable-next-line no-undef

      var itemData = Lama.createEmptyDataInstance(schema);

      if (this.index < 0) {
        this.model.push(itemData);
      } else {
        this.model.splice(this.index + 1, 0, itemData);
      }

      this.$emit("show-body");
      this.$emit("input", this.model);
    },
    remove: function remove() {
      this.model.splice(this.index, 1);
      this.$emit("input", this.model);
    }
  },
  components: {}
});
// CONCATENATED MODULE: ./src/components/Toolbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Toolbarvue_type_script_lang_js_ = (Toolbarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Toolbar.vue





/* normalize component */

var Toolbar_component = normalizeComponent(
  components_Toolbarvue_type_script_lang_js_,
  Toolbarvue_type_template_id_34304e92_scoped_true_render,
  Toolbarvue_type_template_id_34304e92_scoped_true_staticRenderFns,
  false,
  null,
  "34304e92",
  null
  
)

/* harmony default export */ var Toolbar = (Toolbar_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"161888d0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ArrayItemContainer.vue?vue&type=template&id=2f090152&scoped=true&
var ArrayItemContainervue_type_template_id_2f090152_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card",staticStyle:{"margin-bottom":"10px"}},[_c('div',{staticClass:"card-header"},[_c('div',{staticStyle:{"float":"left"}},[_c('button',{staticClass:"btn btn-link btn-sm",attrs:{"aria-expanded":"true","aria-controls":"collapseOne"},on:{"click":_vm.showBody}},[_vm._v(_vm._s(_vm.headerLabel))])]),_c('div',{staticStyle:{"float":"right"}},[_vm._t("toolbar")],2)]),(_vm.show)?_c('div',{staticClass:"card-body"},[_vm._t("default")],2):_vm._e()])}
var ArrayItemContainervue_type_template_id_2f090152_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/ArrayItemContainer.vue?vue&type=template&id=2f090152&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ArrayItemContainer.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ArrayItemContainervue_type_script_lang_js_ = ({
  name: "ArrayItemContainer",
  props: {
    value: {},
    data: {},
    schema: {},
    options: {},
    connector: {},
    errorCallback: {},
    messages: {},
    show: {}
  },
  data: function data() {
    return {//showBody: false
    };
  },
  computed: {
    headerLabel: function headerLabel() {
      if (!this.value) return "[empty item]";
      if (!lama.isObject(this.value)) return this.value;
      var keys = Object.keys(this.value);
      var l = this.value[keys[0]];
      return l ? l : "[empty item]";
    }
  },
  methods: {
    showBody: function showBody() {
      //this.showBody = !this.showBody;
      this.$emit("show-body");
    }
  },
  components: {}
});
// CONCATENATED MODULE: ./src/components/ArrayItemContainer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ArrayItemContainervue_type_script_lang_js_ = (ArrayItemContainervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/ArrayItemContainer.vue





/* normalize component */

var ArrayItemContainer_component = normalizeComponent(
  components_ArrayItemContainervue_type_script_lang_js_,
  ArrayItemContainervue_type_template_id_2f090152_scoped_true_render,
  ArrayItemContainervue_type_template_id_2f090152_scoped_true_staticRenderFns,
  false,
  null,
  "2f090152",
  null
  
)

/* harmony default export */ var ArrayItemContainer = (ArrayItemContainer_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/List.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var Listvue_type_script_lang_js_ = ({
  name: "List",
  props: {
    value: {},
    schema: {},
    options: {},
    view: {},
    connector: {}
  },
  data: function data() {
    return {
      showIndex: -1
    };
  },
  computed: {
    model: {
      get: function get() {
        return this.value || [];
      },
      set: function set(val) {
        this.$emit("input", val);
      }
    },
    field: function field() {
      var schema = this.schema && this.schema.items ? this.schema.items : {};
      var options = this.options && this.options.items ? this.options.items : {};
      options.label = options.label || schema.title || "";
      var view = this.view && this.view.items ? this.view.items : {};
      var field = lama.createFieldInstance("", null, options, schema, view, this.connector, this.errorCallback);
      return field;
    }
  },
  methods: {
    toolbarProps: function toolbarProps(index) {
      return {
        data: this.field.props.data,
        schema: this.field.props.schema,
        options: this.field.props.options,
        view: this.field.props.view,
        index: index
      };
    },
    itemProps: function itemProps(data) {
      var schema = this.schema && this.schema.items ? this.schema.items : {};
      var options = this.options && this.options.items ? this.options.items : {};
      options.label = options.label || schema.title || "";
      var view = this.view && this.view.items ? this.view.items : {}; // eslint-disable-next-line no-undef

      var field = lama.createFieldInstance("", data, options, schema, view, this.connector, this.errorCallback);
      return field.props;
    },
    containerProps: function containerProps(index) {
      return {
        data: this.field.props.data,
        schema: this.field.props.schema,
        options: this.field.props.options,
        view: this.field.props.view,
        index: index,
        show: index == this.showIndex
      };
    },
    itemChange: function itemChange(index, value) {
      this.$set(this.model, index, value);
      this.$emit("input", this.model);
    },
    showBody: function showBody(index) {
      this.showIndex = index == this.showIndex ? -1 : index;
    }
  },
  components: {
    Toolbar: Toolbar,
    ArrayItemContainer: ArrayItemContainer
  },
  beforeCreate: function beforeCreate() {
    this.$options.components.FormField = Field;
  }
});
// CONCATENATED MODULE: ./src/components/List.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Listvue_type_script_lang_js_ = (Listvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/List.vue





/* normalize component */

var List_component = normalizeComponent(
  components_Listvue_type_script_lang_js_,
  Listvue_type_template_id_fb3e8d98_scoped_true_render,
  Listvue_type_template_id_fb3e8d98_scoped_true_staticRenderFns,
  false,
  null,
  "fb3e8d98",
  null
  
)

/* harmony default export */ var List = (List_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/fields/ArrayField.vue?vue&type=script&lang=js&
//
//
//
//
//
//



var ArrayField = {
  name: "ArrayField",
  props: {
    value: {
      type: Array
    },
    schema: {},
    options: {},
    connector: {},
    errorCallback: {}
  },
  computed: {
    model: {
      get: function get() {
        return this.value;
      },
      set: function set(val) {
        this.$emit("input", val);
      }
    },
    props: function props() {
      return {
        schema: this.schema,
        options: this.options,
        view: this.view,
        errorCallback: this.errorCallback
      };
    }
  },
  methods: {},
  components: {
    Container: Container,
    List: List
  },
  builder: {
    props: function props() {
      return {
        schema: {
          type: "object",
          properties: {
            fields: {
              title: "Fields",
              type: "array",
              items: builderUtils.getObjectProps().schema.items
            }
          }
        },
        options: {
          fields: {
            fields: {
              items: builderUtils.getObjectProps().options.items
            }
          }
        }
      };
    },
    fromBuilder: function fromBuilder(field) {
      var def = builderUtils.objectFromBuilder(field);
      def.schema.title = "";
      return {
        schema: {
          title: field.label,
          type: "array",
          items: def.schema
        },
        options: {
          items: def.options
        }
      };
    },
    toBuilder: function toBuilder(def) {
      var b = builderUtils.objectToBuilder({
        schema: def.schema.items,
        options: def.options.items
      });
      return {
        label: def.schema.title,
        fieldType: "array",
        fields: b.fields
      };
    }
  }
};
/* harmony default export */ var ArrayFieldvue_type_script_lang_js_ = (ArrayField);
// CONCATENATED MODULE: ./src/components/fields/ArrayField.vue?vue&type=script&lang=js&
 /* harmony default export */ var fields_ArrayFieldvue_type_script_lang_js_ = (ArrayFieldvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/fields/ArrayField.vue





/* normalize component */

var ArrayField_component = normalizeComponent(
  fields_ArrayFieldvue_type_script_lang_js_,
  ArrayFieldvue_type_template_id_0da24fa5_scoped_true_render,
  ArrayFieldvue_type_template_id_0da24fa5_scoped_true_staticRenderFns,
  false,
  null,
  "0da24fa5",
  null
  
)

/* harmony default export */ var fields_ArrayField = (ArrayField_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"161888d0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/fields/CheckboxField.vue?vue&type=template&id=477ff454&scoped=true&
var CheckboxFieldvue_type_template_id_477ff454_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('control',_vm._b({scopedSlots:_vm._u([{key:"default",fn:function(flags){return [_c('div',{staticClass:"form-check"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.model),expression:"model"}],staticClass:"form-check-input",class:{'is-invalid':flags.invalid && flags.touched},attrs:{"type":"checkbox","aria-describedby":_vm.options.label,"placeholder":_vm.options.placeholder},domProps:{"checked":Array.isArray(_vm.model)?_vm._i(_vm.model,null)>-1:(_vm.model)},on:{"change":function($event){var $$a=_vm.model,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.model=$$a.concat([$$v]))}else{$$i>-1&&(_vm.model=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.model=$$c}}}}),(_vm.options.rightLabel)?_c('label',{staticClass:"form-check-label"},[_vm._v(_vm._s(_vm.options.rightLabel))]):_vm._e()])]}}])},'control',_vm.props,false))}
var CheckboxFieldvue_type_template_id_477ff454_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/fields/CheckboxField.vue?vue&type=template&id=477ff454&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"161888d0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/fields/Control.vue?vue&type=template&id=1efccf92&scoped=true&
var Controlvue_type_template_id_1efccf92_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-group"},[(_vm.label)?_c('label',{attrs:{"for":""}},[_vm._v(_vm._s(_vm.label))]):_vm._e(),(_vm.badge)?_c('span',{staticClass:"badge badge-dark",staticStyle:{"float":"right"}},[_vm._v(_vm._s(_vm.badge))]):_vm._e(),_c('ValidationProvider',{attrs:{"name":_vm.options.label,"rules":{ required: _vm.schema.required },"slim":""},scopedSlots:_vm._u([{key:"default",fn:function(flags){return [_vm._t("default",null,null,flags),(flags.errors)?_c('div',{staticClass:"invalid-feedback"},_vm._l((flags.errors),function(error,index){return _c('span',{key:index},[_vm._v(_vm._s(error))])}),0):_vm._e()]}}],null,true)})],1)}
var Controlvue_type_template_id_1efccf92_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/fields/Control.vue?vue&type=template&id=1efccf92&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/fields/Control.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Controlvue_type_script_lang_js_ = ({
  name: "Control",
  props: {
    schema: {},
    options: {},
    messages: {},
    connector: {},
    errors: {}
  },
  computed: {
    label: function label() {
      return this.options.label || this.schema.title;
    },
    badge: function badge() {
      return this.options.multilanguage ? this.connector.currentCulture.substring(0, 2).toUpperCase() : "";
    }
  },
  methods: {},
  components: {}
});
// CONCATENATED MODULE: ./src/components/fields/Control.vue?vue&type=script&lang=js&
 /* harmony default export */ var fields_Controlvue_type_script_lang_js_ = (Controlvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/fields/Control.vue





/* normalize component */

var Control_component = normalizeComponent(
  fields_Controlvue_type_script_lang_js_,
  Controlvue_type_template_id_1efccf92_scoped_true_render,
  Controlvue_type_template_id_1efccf92_scoped_true_staticRenderFns,
  false,
  null,
  "1efccf92",
  null
  
)

/* harmony default export */ var Control = (Control_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/fields/ControlField.vue?vue&type=script&lang=js&

var ControlField = {
  name: "ControlField",
  data: function data() {
    return {};
  },
  props: {
    value: {},
    data: {},
    schema: {},
    options: {},
    view: {},
    connector: {}
  },
  computed: {
    model: {
      get: function get() {
        return this.value;
      },
      set: function set(val) {
        this.$emit("input", val);
      }
    },
    props: function props() {
      return {
        schema: this.schema,
        options: this.options,
        view: this.view,
        connector: this.connector
      };
    }
  },
  methods: {},
  components: {
    Control: Control
  }
};
/* harmony default export */ var ControlFieldvue_type_script_lang_js_ = (ControlField);
// CONCATENATED MODULE: ./src/components/fields/ControlField.vue?vue&type=script&lang=js&
 /* harmony default export */ var fields_ControlFieldvue_type_script_lang_js_ = (ControlFieldvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/fields/ControlField.vue
var ControlField_render, ControlField_staticRenderFns




/* normalize component */

var ControlField_component = normalizeComponent(
  fields_ControlFieldvue_type_script_lang_js_,
  ControlField_render,
  ControlField_staticRenderFns,
  false,
  null,
  "6ec01430",
  null
  
)

/* harmony default export */ var fields_ControlField = (ControlField_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/fields/CheckboxField.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var CheckBoxField = {
  name: "CheckBoxField",
  extends: fields_ControlField,
  props: {
    value: {
      type: Boolean
    }
  },
  computed: {},
  methods: {},
  components: {},
  builder: {
    props: function props() {
      return {
        schema: {
          type: "object",
          properties: {
            required: {
              title: "Required",
              type: "boolean"
            }
          }
        },
        options: {}
      };
    },
    fromBuilder: function fromBuilder(field) {
      return {
        schema: {
          title: field.label,
          type: "boolean",
          required: field.required
        },
        options: {}
      };
    },
    toBuilder: function toBuilder(def) {
      return {
        label: def.schema.title,
        fieldType: "checkbox",
        required: def.schema.required
      };
    }
  }
};
/* harmony default export */ var CheckboxFieldvue_type_script_lang_js_ = (CheckBoxField);
// CONCATENATED MODULE: ./src/components/fields/CheckboxField.vue?vue&type=script&lang=js&
 /* harmony default export */ var fields_CheckboxFieldvue_type_script_lang_js_ = (CheckboxFieldvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/fields/CheckboxField.vue





/* normalize component */

var CheckboxField_component = normalizeComponent(
  fields_CheckboxFieldvue_type_script_lang_js_,
  CheckboxFieldvue_type_template_id_477ff454_scoped_true_render,
  CheckboxFieldvue_type_template_id_477ff454_scoped_true_staticRenderFns,
  false,
  null,
  "477ff454",
  null
  
)

/* harmony default export */ var CheckboxField = (CheckboxField_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"161888d0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/fields/CKEditorField.vue?vue&type=template&id=227506a8&scoped=true&
var CKEditorFieldvue_type_template_id_227506a8_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('control',_vm._b({},'control',_vm.props,false),[_c('ckeditor',{attrs:{"config":_vm.editorConfig},model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v},expression:"model"}})],1)}
var CKEditorFieldvue_type_template_id_227506a8_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/fields/CKEditorField.vue?vue&type=template&id=227506a8&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"161888d0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/fields/TextField.vue?vue&type=template&id=2316a21f&scoped=true&
var TextFieldvue_type_template_id_2316a21f_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('control',_vm._b({scopedSlots:_vm._u([{key:"default",fn:function(flags){return [_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.model),expression:"model"}],staticClass:"form-control",class:{'is-invalid':flags.invalid && flags.touched},attrs:{"type":"text","aria-describedby":_vm.options.label,"placeholder":_vm.options.placeholder},domProps:{"value":(_vm.model)},on:{"input":function($event){if($event.target.composing){ return; }_vm.model=$event.target.value}}})]}}])},'control',_vm.props,false))}
var TextFieldvue_type_template_id_2316a21f_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/fields/TextField.vue?vue&type=template&id=2316a21f&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/fields/TextField.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//


var TextField = {
  name: "TextField",
  extends: fields_ControlField,
  props: {
    value: {
      type: String
    }
  },
  computed: {},
  methods: {},
  components: {
    Control: Control
  },
  builder: {
    props: function props() {
      return {
        schema: {
          type: "object",
          properties: {
            required: {
              type: "boolean"
            },
            placeholder: {
              title: "Placeholder",
              type: "string"
            },
            multilanguage: {
              title: "Multi language",
              type: "boolean"
            }
          }
        },
        options: {
          fields: {
            required: {
              rightLabel: "Required"
            }
          }
        }
      };
    },
    fromBuilder: function fromBuilder(field) {
      return {
        schema: {
          title: field.label,
          type: "string",
          required: field.required
        },
        options: {
          placeholder: field.placeholder,
          multilanguage: field.multilanguage
        }
      };
    },
    toBuilder: function toBuilder(def) {
      return {
        label: def.schema.title,
        fieldType: "text",
        required: def.schema.required,
        placeholder: def.options.placeholder,
        multilanguage: def.options.multilanguage
      };
    }
  }
};
/* harmony default export */ var TextFieldvue_type_script_lang_js_ = (TextField);
// CONCATENATED MODULE: ./src/components/fields/TextField.vue?vue&type=script&lang=js&
 /* harmony default export */ var fields_TextFieldvue_type_script_lang_js_ = (TextFieldvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/fields/TextField.vue





/* normalize component */

var TextField_component = normalizeComponent(
  fields_TextFieldvue_type_script_lang_js_,
  TextFieldvue_type_template_id_2316a21f_scoped_true_render,
  TextFieldvue_type_template_id_2316a21f_scoped_true_staticRenderFns,
  false,
  null,
  "2316a21f",
  null
  
)

/* harmony default export */ var fields_TextField = (TextField_component.exports);
// EXTERNAL MODULE: ./node_modules/ckeditor4-vue/dist/ckeditor.js
var ckeditor = __webpack_require__("25ae");
var ckeditor_default = /*#__PURE__*/__webpack_require__.n(ckeditor);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/fields/CKEditorField.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//import Vue from 'vue';



var CKEditorField = {
  name: "CKEditorField",
  extends: fields_TextField,
  props: {},
  data: function data() {
    return {
      editorConfig: {}
    };
  },
  computed: {},
  methods: {},
  components: {
    Control: Control,
    ckeditor: ckeditor_default.a.component
  },
  builder: {
    props: function props() {
      return {
        schema: {
          type: "object",
          properties: {
            required: {
              title: "Required",
              type: "boolean"
            },
            placeholder: {
              title: "Placeholder",
              type: "string"
            }
          }
        },
        options: {}
      };
    },
    fromBuilder: function fromBuilder(field) {
      return {
        schema: {
          title: field.label,
          type: "string",
          required: field.required
        },
        options: {
          type: "ckeditor",
          placeholder: field.placeholder
        }
      };
    },
    toBuilder: function toBuilder(def) {
      return {
        label: def.schema.title,
        fieldType: "ckeditor",
        required: def.schema.required,
        placeholder: def.options.placeholder
      };
    }
  }
};
/* harmony default export */ var CKEditorFieldvue_type_script_lang_js_ = (CKEditorField);
// CONCATENATED MODULE: ./src/components/fields/CKEditorField.vue?vue&type=script&lang=js&
 /* harmony default export */ var fields_CKEditorFieldvue_type_script_lang_js_ = (CKEditorFieldvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/fields/CKEditorField.vue





/* normalize component */

var CKEditorField_component = normalizeComponent(
  fields_CKEditorFieldvue_type_script_lang_js_,
  CKEditorFieldvue_type_template_id_227506a8_scoped_true_render,
  CKEditorFieldvue_type_template_id_227506a8_scoped_true_staticRenderFns,
  false,
  null,
  "227506a8",
  null
  
)

/* harmony default export */ var fields_CKEditorField = (CKEditorField_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"161888d0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/fields/SelectField.vue?vue&type=template&id=94e26eb4&scoped=true&
var SelectFieldvue_type_template_id_94e26eb4_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('control',_vm._b({},'control',_vm.props,false),[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.model),expression:"model"}],staticClass:"form-control",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.model=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},_vm._l((_vm.items),function(option){return _c('option',{key:option.value},[_vm._v(_vm._s(option.label))])}),0)])}
var SelectFieldvue_type_template_id_94e26eb4_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/fields/SelectField.vue?vue&type=template&id=94e26eb4&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("d81d");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/fields/SelectField.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//

var SelectField = {
  name: "SelectField",
  extends: fields_ControlField,
  props: {
    value: {
      type: String
    },
    schema: {},
    options: {},
    connector: {}
  },
  computed: {
    items: function items() {
      var _this = this;

      return this.schema.enum.map(function (v, index) {
        return {
          value: v,
          label: _this.label(index)
        };
      });
    }
  },
  methods: {
    label: function label(index) {
      return this.options.optionLabels && this.options.optionLabels[index] ? this.options.optionLabels[index] : this.schema.enum[index];
    }
  },
  components: {},
  builder: {
    props: function props() {
      return {
        schema: {
          type: "object",
          properties: {
            options: {
              title: "Options",
              type: "array",
              items: {
                type: "object",
                properties: {
                  value: {
                    type: "string",
                    title: "Value"
                  },
                  label: {
                    type: "string",
                    title: "Label"
                  }
                }
              }
            }
          }
        },
        options: {}
      };
    },
    fromBuilder: function fromBuilder(field) {
      var _enum = [];
      var optionLabels = [];

      if (field.options) {
        _enum = field.options.map(function (o) {
          return o.value;
        });
        optionLabels = field.options.map(function (o) {
          return o.label;
        });
      }

      return {
        schema: {
          type: "string",
          title: field.label,
          enum: _enum
        },
        options: {
          type: "select",
          optionLabels: optionLabels
        }
      };
    },
    toBuilder: function toBuilder(def) {
      return {
        label: def.schema.title,
        fieldType: "select",
        options: def.schema.enum.map(function (a, i) {
          return {
            value: a,
            label: def.options.optionLabels ? def.options.optionLabels[i] : a
          };
        })
      };
    }
  }
};
/* harmony default export */ var SelectFieldvue_type_script_lang_js_ = (SelectField);
// CONCATENATED MODULE: ./src/components/fields/SelectField.vue?vue&type=script&lang=js&
 /* harmony default export */ var fields_SelectFieldvue_type_script_lang_js_ = (SelectFieldvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/fields/SelectField.vue





/* normalize component */

var SelectField_component = normalizeComponent(
  fields_SelectFieldvue_type_script_lang_js_,
  SelectFieldvue_type_template_id_94e26eb4_scoped_true_render,
  SelectFieldvue_type_template_id_94e26eb4_scoped_true_staticRenderFns,
  false,
  null,
  "94e26eb4",
  null
  
)

/* harmony default export */ var fields_SelectField = (SelectField_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/fields/CountryField.vue?vue&type=script&lang=js&
//


var CountryField = {
  name: "CountryField",
  extends: fields_SelectField,
  props: {},
  computed: {
    items: function items() {
      var countries = lama.getMessage(this.view, 'countries');
      var options = [];

      for (var key in countries) {
        var val = countries[key];
        options.push({
          value: key,
          label: val
        });
      }

      return options;
    }
  },
  methods: {},
  components: {},
  builder: {
    props: function props() {
      return {
        schema: {
          type: "object",
          properties: {}
        },
        options: {}
      };
    },
    fromBuilder: function fromBuilder(field) {
      return {
        schema: {
          type: "string",
          title: field.label
        },
        options: {
          type: "country"
        }
      };
    },
    toBuilder: function toBuilder(def) {
      return {
        label: def.schema.title,
        fieldType: "country"
      };
    }
  }
};
/* harmony default export */ var CountryFieldvue_type_script_lang_js_ = (CountryField);
// CONCATENATED MODULE: ./src/components/fields/CountryField.vue?vue&type=script&lang=js&
 /* harmony default export */ var fields_CountryFieldvue_type_script_lang_js_ = (CountryFieldvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/fields/CountryField.vue
var CountryField_render, CountryField_staticRenderFns




/* normalize component */

var CountryField_component = normalizeComponent(
  fields_CountryFieldvue_type_script_lang_js_,
  CountryField_render,
  CountryField_staticRenderFns,
  false,
  null,
  "76d6d21f",
  null
  
)

/* harmony default export */ var fields_CountryField = (CountryField_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"161888d0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/fields/DateField.vue?vue&type=template&id=09ae5729&scoped=true&
var DateFieldvue_type_template_id_09ae5729_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('control',_vm._b({scopedSlots:_vm._u([{key:"default",fn:function(flags){return [_c('vue-ctk-date-time-picker',{class:{'is-invalid':flags.invalid && flags.touched},attrs:{"only-date":true,"auto-close":true,"no-label":true,"no-header":true,"no-button-now":true,"format":"YYYY-MM-DD","formatted":"ll","placeholder":_vm.options.placeholder},model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v},expression:"model"}})]}}])},'control',_vm.props,false))}
var DateFieldvue_type_template_id_09ae5729_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/fields/DateField.vue?vue&type=template&id=09ae5729&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css
var vue_ctk_date_time_picker = __webpack_require__("b40d");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/fields/DateField.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 //import VueCtkDateTimePicker from "vue-ctk-date-time-picker";


var DateField = {
  name: "DateField",
  extends: fields_ControlField,
  props: {
    value: {
      type: String
    }
  },
  computed: {},
  methods: {},
  components: {
    Control: Control,
    VueCtkDateTimePicker: function VueCtkDateTimePicker() {
      return __webpack_require__.e(/* import() */ 1).then(__webpack_require__.t.bind(null, "e30a", 7));
    }
  },
  builder: {
    props: function props() {
      return {
        schema: {
          type: "object",
          properties: {
            required: {
              title: "Required",
              type: "boolean"
            },
            placeholder: {
              title: "Placeholder",
              type: "string"
            },
            multilanguage: {
              title: "Multi language",
              type: "boolean"
            }
          }
        },
        options: {}
      };
    },
    fromBuilder: function fromBuilder(field) {
      return {
        schema: {
          title: field.label,
          type: "string",
          required: field.required
        },
        options: {
          type: "date",
          placeholder: field.placeholder,
          multilanguage: field.multilanguage
        }
      };
    },
    toBuilder: function toBuilder(def) {
      return {
        label: def.schema.title,
        fieldType: "date",
        required: def.schema.required,
        placeholder: def.options.placeholder,
        multilanguage: def.options.multilanguage
      };
    }
  }
};
/* harmony default export */ var DateFieldvue_type_script_lang_js_ = (DateField);
// CONCATENATED MODULE: ./src/components/fields/DateField.vue?vue&type=script&lang=js&
 /* harmony default export */ var fields_DateFieldvue_type_script_lang_js_ = (DateFieldvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/fields/DateField.vue





/* normalize component */

var DateField_component = normalizeComponent(
  fields_DateFieldvue_type_script_lang_js_,
  DateFieldvue_type_template_id_09ae5729_scoped_true_render,
  DateFieldvue_type_template_id_09ae5729_scoped_true_staticRenderFns,
  false,
  null,
  "09ae5729",
  null
  
)

/* harmony default export */ var fields_DateField = (DateField_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"161888d0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/fields/FileField.vue?vue&type=template&id=7c9123b2&
var FileFieldvue_type_template_id_7c9123b2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('control',_vm._b({scopedSlots:_vm._u([{key:"default",fn:function(flags){return [_c('input',{ref:"input",staticClass:"form-control-file",staticStyle:{"margin-bottom":"10px"},attrs:{"type":"file","name":"file"},on:{"change":_vm.setFile}}),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.model),expression:"model"}],staticClass:"form-control",class:{'is-invalid':flags.invalid && flags.touched},staticStyle:{"margin-bottom":"10px"},attrs:{"type":"text","aria-describedby":_vm.options.label},domProps:{"value":(_vm.model)},on:{"input":function($event){if($event.target.composing){ return; }_vm.model=$event.target.value}}})]}}])},'control',_vm.props,false))}
var FileFieldvue_type_template_id_7c9123b2_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/fields/FileField.vue?vue&type=template&id=7c9123b2&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__("c975");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"161888d0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/fields/FileBrowser.vue?vue&type=template&id=2b57cbfa&scoped=true&
var FileBrowservue_type_template_id_2b57cbfa_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.showFolderSelector)?_c('vue-select',{staticStyle:{"margin-bottom":"10px"},attrs:{"label":"name","filterable":true,"clearable":false,"options":_vm.folders,"reduce":function (option){ return option.id; }},on:{"input":_vm.folderChange},model:{value:(_vm.folder),callback:function ($$v) {_vm.folder=$$v},expression:"folder"}}):_vm._e(),(_vm.showFileSelector)?_c('vue-select',{staticStyle:{"margin-bottom":"10px"},attrs:{"label":"filename","options":_vm.files,"filterable":true},model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v},expression:"model"}}):_vm._e(),_c('input',{ref:"input",staticClass:"form-control-file",staticStyle:{"margin-bottom":"10px"},attrs:{"type":"file","name":"image","accept":"image/*"},on:{"change":_vm.setImage}})],1)}
var FileBrowservue_type_template_id_2b57cbfa_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/fields/FileBrowser.vue?vue&type=template&id=2b57cbfa&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-select/dist/vue-select.js
var vue_select = __webpack_require__("4a7a");
var vue_select_default = /*#__PURE__*/__webpack_require__.n(vue_select);

// EXTERNAL MODULE: ./node_modules/vue-select/dist/vue-select.css
var dist_vue_select = __webpack_require__("6dfc");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/fields/FileBrowser.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var FileBrowservue_type_script_lang_js_ = ({
  name: "FileBrowser",
  props: {
    value: {},
    connector: {},
    baseForlder: {},
    showFolderSelector: {
      type: Boolean,
      default: true
    },
    showFileSelector: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      folders: [],
      folder: null,
      files: [],
      fileId: -1
    };
  },
  computed: {
    model: {
      get: function get() {
        return this.value;
      },
      set: function set(val) {
        this.$emit("input", val);
      }
    }
  },
  methods: {
    folderChange: function folderChange() {
      this.fetchFiles();
    },
    fetchFolders: function fetchFolders() {
      var _this = this;

      //let self=this;
      var config = {
        query: {
          type: "folders",
          folder: this.baseFolder
        }
      };
      this.connector.loadDataSource(config, function (data) {
        _this.folders = data;

        if (data.length) {
          _this.folder = data[0].id;

          _this.fetchFiles();
        }
      }, function () {});
    },
    fetchFiles: function fetchFiles() {
      var _this2 = this;

      var config = {
        query: {
          type: "files",
          folder: this.folder
        }
      };
      this.connector.loadDataSource(config, function (data) {
        _this2.files = data;
      }, function () {});
    },
    setImage: function setImage(e) {
      var _this3 = this;

      var file = e.target.files[0];

      if (file.type.indexOf("image/") === -1) {
        alert("Please select an image file");
        return;
      }

      var config = {
        query: {
          type: "folders",
          folder: this.baseFolder
        }
      };
      this.connector.upload(config, function (data) {
        _this3.model = data;

        _this3.fetchFiles();
      }, function () {});
      /*
      if (typeof FileReader === "function") {
        const reader = new FileReader();
        reader.onload = event => {
          this.model = {
            url: event.target.result,
          };
          // rebuild cropperjs with the updated source
          //this.$refs.cropper.replace(event.target.result);
        };
        reader.readAsDataURL(file);
      } else {
        alert("Sorry, FileReader API not supported");
      }
      */
    }
  },
  watch: {
    value: function value(val) {
      if (val && val.folderId) {
        this.folder = this.value.folderId;
        this.fetchFiles();
      }
    }
  },
  created: function created() {
    this.fetchFolders();
  },
  components: {
    VueSelect: vue_select_default.a
  }
});
// CONCATENATED MODULE: ./src/components/fields/FileBrowser.vue?vue&type=script&lang=js&
 /* harmony default export */ var fields_FileBrowservue_type_script_lang_js_ = (FileBrowservue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/fields/FileBrowser.vue





/* normalize component */

var FileBrowser_component = normalizeComponent(
  fields_FileBrowservue_type_script_lang_js_,
  FileBrowservue_type_template_id_2b57cbfa_scoped_true_render,
  FileBrowservue_type_template_id_2b57cbfa_scoped_true_staticRenderFns,
  false,
  null,
  "2b57cbfa",
  null
  
)

/* harmony default export */ var FileBrowser = (FileBrowser_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/fields/FileField.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var FileField = {
  name: "FileField",
  extends: fields_ControlField,
  props: {
    value: {
      type: String
    }
  },
  data: function data() {
    return {
      file: {}
    };
  },
  computed: {},
  methods: {
    setFile: function setFile(e) {
      var _this = this;

      var file = e.target.files[0];

      if (file.type.indexOf("image/") === -1) {
        alert("Please select an image file");
        return;
      }

      var config = {
        query: {
          folder: this.baseFolder
        }
      };
      this.connector.upload(config, function (data) {
        _this.model = data.url;
      }, function () {});
    },
    showFileChooser: function showFileChooser() {
      this.$refs.input.click();
    }
  },
  components: {
    Control: Control,
    FileBrowser: FileBrowser
  },
  builder: {
    props: function props() {
      return {
        schema: {
          type: "object",
          properties: {
            required: {
              title: "Required",
              type: "boolean"
            },
            placeholder: {
              title: "Placeholder",
              type: "string"
            },
            multilanguage: {
              title: "Multi language",
              type: "boolean"
            }
          }
        },
        options: {}
      };
    },
    fromBuilder: function fromBuilder(field) {
      return {
        schema: {
          title: field.label,
          type: "string",
          required: field.required
        },
        options: {
          type: "file",
          multilanguage: field.multilanguage
        }
      };
    },
    toBuilder: function toBuilder(def) {
      return {
        label: def.schema.title,
        fieldType: "file",
        required: def.schema.required,
        multilanguage: def.options.multilanguage
      };
    }
  }
};
/* harmony default export */ var FileFieldvue_type_script_lang_js_ = (FileField);
// CONCATENATED MODULE: ./src/components/fields/FileField.vue?vue&type=script&lang=js&
 /* harmony default export */ var fields_FileFieldvue_type_script_lang_js_ = (FileFieldvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/fields/FileField.vue





/* normalize component */

var FileField_component = normalizeComponent(
  fields_FileFieldvue_type_script_lang_js_,
  FileFieldvue_type_template_id_7c9123b2_render,
  FileFieldvue_type_template_id_7c9123b2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var fields_FileField = (FileField_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"161888d0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/fields/ImageField.vue?vue&type=template&id=63085383&
var ImageFieldvue_type_template_id_63085383_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('control',_vm._b({scopedSlots:_vm._u([{key:"default",fn:function(flags){return [(_vm.showImageEditor)?[_c('image-editor',{attrs:{"imageUrl":_vm.value,"cropperData":{}},on:{"cancel":_vm.cancelImageEditor,"save":_vm.saveImageEditor}})]:_vm._e(),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.showImageEditor),expression:"!showImageEditor"}]},[_c('input',{ref:"input",staticClass:"form-control-file",staticStyle:{"margin-bottom":"10px"},attrs:{"type":"file","name":"image","accept":"image/*"},on:{"change":_vm.setImage}}),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.model),expression:"model"}],staticClass:"form-control",class:{'is-invalid':flags.invalid && flags.touched},staticStyle:{"margin-bottom":"10px"},attrs:{"type":"text","aria-describedby":_vm.options.label},domProps:{"value":(_vm.model)},on:{"input":function($event){if($event.target.composing){ return; }_vm.model=$event.target.value}}}),_c('div',[(_vm.imageSrc)?_c('a',{attrs:{"href":"#","title":"Edit Image"},on:{"click":function($event){$event.preventDefault();return _vm.edit($event)}}},[_c('img',{staticClass:"img-fluid",staticStyle:{"margin":"10px 0"},attrs:{"src":_vm.imageSrc,"alt":"Image"}})]):_vm._e()])])]}}])},'control',_vm.props,false))}
var ImageFieldvue_type_template_id_63085383_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/fields/ImageField.vue?vue&type=template&id=63085383&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"161888d0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/fields/ImageEditor.vue?vue&type=template&id=76b32234&
var ImageEditorvue_type_template_id_76b32234_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"modal-mask"}),_c('div',{staticClass:"editor"},[_c('div',{staticStyle:{"margin-bottom":"10px"}},[_c('vue-cropper',{ref:"cropper",attrs:{"responsive":true,"src":_vm.imageUrl,"data":_vm.cropperData,"alt":"Image"}})],1),_c('button',{staticClass:"btn btn-sm btn-secondary mr-2",attrs:{"type":"button"},on:{"click":function($event){$event.preventDefault();return _vm.rotate(90)}}},[_vm._v("Rotate Right")]),_c('button',{staticClass:"btn btn-sm btn-secondary",attrs:{"type":"button"},on:{"click":function($event){$event.preventDefault();return _vm.rotate(-90)}}},[_vm._v("Rotate Left")]),_c('div',{staticClass:"btn-group btn-group-sm ml-2",staticStyle:{"float":"right"},attrs:{"role":"group","aria-label":"Basic example"}},[_c('button',{staticClass:"btn btn-primary",attrs:{"type":"button"},on:{"click":function($event){$event.preventDefault();return _vm.save($event)}}},[_vm._v("Save")]),_c('button',{staticClass:"btn btn-light",attrs:{"type":"button"},on:{"click":function($event){$event.preventDefault();return _vm.cancel($event)}}},[_vm._v("Cancel")])])])])}
var ImageEditorvue_type_template_id_76b32234_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/fields/ImageEditor.vue?vue&type=template&id=76b32234&

// EXTERNAL MODULE: ./node_modules/vue-cropperjs/dist/VueCropper.js
var VueCropper = __webpack_require__("95c3");
var VueCropper_default = /*#__PURE__*/__webpack_require__.n(VueCropper);

// EXTERNAL MODULE: ./node_modules/cropperjs/dist/cropper.css
var cropper = __webpack_require__("6107");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/fields/ImageEditor.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 //import DialogMixin from "vuejs-dialog/dist/vuejs-dialog-mixin.min.js";

/* harmony default export */ var ImageEditorvue_type_script_lang_js_ = ({
  name: "ImageEditor",
  //mixins: [DialogMixin],
  props: {
    imageUrl: {},
    cropperData: {}
  },
  data: function data() {
    return {};
  },
  methods: {
    save: function save() {
      this.$emit("save", this.$refs.cropper.getCroppedCanvas().toDataURL(), this.$refs.cropper.getData());
    },
    cancel: function cancel() {
      this.$emit("cancel");
    },
    rotate: function rotate(deg) {
      this.$refs.cropper.rotate(deg);
    }
  },
  components: {
    VueCropper: VueCropper_default.a
  }
});
// CONCATENATED MODULE: ./src/components/fields/ImageEditor.vue?vue&type=script&lang=js&
 /* harmony default export */ var fields_ImageEditorvue_type_script_lang_js_ = (ImageEditorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/fields/ImageEditor.vue?vue&type=style&index=0&lang=css&
var ImageEditorvue_type_style_index_0_lang_css_ = __webpack_require__("9cda");

// CONCATENATED MODULE: ./src/components/fields/ImageEditor.vue






/* normalize component */

var ImageEditor_component = normalizeComponent(
  fields_ImageEditorvue_type_script_lang_js_,
  ImageEditorvue_type_template_id_76b32234_render,
  ImageEditorvue_type_template_id_76b32234_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ImageEditor = (ImageEditor_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/fields/ImageField.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//import Vue from "vue";






var ImageField = {
  name: "ImageField",
  extends: fields_ControlField,
  props: {
    value: {
      type: String
    }
  },
  data: function data() {
    return {
      showImageEditor: false
    };
  },
  computed: {
    imageSrc: function imageSrc() {
      return this.value;
    }
  },
  methods: {
    setImage: function setImage(e) {
      var _this = this;

      var file = e.target.files[0];

      if (file.type.indexOf("image/") === -1) {
        alert("Please select an image file");
        return;
      }

      var config = {
        query: {
          type: "folders",
          folder: this.baseFolder
        }
      };
      this.connector.upload(config, function (data) {
        _this.model = data.url;
      }, function () {});
      /*
      if (typeof FileReader === "function") {
        const reader = new FileReader();
        reader.onload = event => {
          this.model = {
            url: event.target.result,
          };
          // rebuild cropperjs with the updated source
          //this.$refs.cropper.replace(event.target.result);
        };
        reader.readAsDataURL(file);
      } else {
        alert("Sorry, FileReader API not supported");
      }
      */
    },
    showFileChooser: function showFileChooser() {
      this.$refs.input.click();
    },
    edit: function edit() {
      this.showImageEditor = true;
    },
    cancelImageEditor: function cancelImageEditor() {
      this.showImageEditor = false;
    },
    saveImageEditor: function saveImageEditor(cropUrl) {
      this.showImageEditor = false;
      this.model = cropUrl;
    },
    remove: function remove() {
      this.model = null;
    }
  },
  components: {
    Control: Control,
    VueCropper: VueCropper_default.a,
    FileBrowser: FileBrowser,
    ImageEditor: ImageEditor
  },
  builder: {
    props: function props() {
      return {
        schema: {
          type: "object",
          properties: {
            required: {
              title: "Required",
              type: "boolean"
            },
            multilanguage: {
              title: "Multi language",
              type: "boolean"
            }
          }
        },
        options: {}
      };
    },
    fromBuilder: function fromBuilder(field) {
      return {
        schema: {
          title: field.label,
          type: "string",
          required: field.required
        },
        options: {
          type: "image",
          multilanguage: field.multilanguage
        }
      };
    },
    toBuilder: function toBuilder(def) {
      return {
        label: def.schema.title,
        fieldType: "image",
        required: def.schema.required,
        multilanguage: def.options.multilanguage
      };
    }
  }
};
/* harmony default export */ var ImageFieldvue_type_script_lang_js_ = (ImageField);
// CONCATENATED MODULE: ./src/components/fields/ImageField.vue?vue&type=script&lang=js&
 /* harmony default export */ var fields_ImageFieldvue_type_script_lang_js_ = (ImageFieldvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/fields/ImageField.vue





/* normalize component */

var ImageField_component = normalizeComponent(
  fields_ImageFieldvue_type_script_lang_js_,
  ImageFieldvue_type_template_id_63085383_render,
  ImageFieldvue_type_template_id_63085383_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var fields_ImageField = (ImageField_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"161888d0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/fields/ImagexField.vue?vue&type=template&id=662594e0&
var ImagexFieldvue_type_template_id_662594e0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('control',_vm._b({},'control',_vm.props,false),[(_vm.showImageEditor)?[_c('image-editor',{attrs:{"imageUrl":_vm.value.url,"cropperData":_vm.value.crop},on:{"cancel":_vm.cancelImageEditor,"save":_vm.saveImageEditor}})]:_vm._e(),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.showImageEditor),expression:"!showImageEditor"}]},[_c('file-browser',_vm._b({model:{value:(_vm.imageFile),callback:function ($$v) {_vm.imageFile=$$v},expression:"imageFile"}},'file-browser',_vm.props,false)),_c('div',{staticClass:"btn-group",attrs:{"role":"group","aria-label":"Basic example"}},[(_vm.imageSrc)?_c('button',{staticClass:"btn btn-secondary",attrs:{"type":"button"},on:{"click":function($event){$event.preventDefault();return _vm.remove($event)}}},[_vm._v("Delete")]):_vm._e(),(_vm.imageSrc)?_c('button',{staticClass:"btn btn-secondary",attrs:{"type":"button"},on:{"click":function($event){$event.preventDefault();return _vm.edit($event)}}},[_vm._v("Edit")]):_vm._e()]),_c('div',[(_vm.imageSrc)?_c('a',{attrs:{"href":"#","title":"Edit Image"},on:{"click":function($event){$event.preventDefault();return _vm.edit($event)}}},[_c('img',{staticClass:"img-fluid",staticStyle:{"margin":"10px 0"},attrs:{"src":_vm.imageSrc,"alt":"Image"}})]):_vm._e()])],1)],2)}
var ImagexFieldvue_type_template_id_662594e0_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/fields/ImagexField.vue?vue&type=template&id=662594e0&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/fields/ImagexField.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//import Vue from "vue";






var ImagexField = {
  name: "ImageField",
  extends: fields_ControlField,
  props: {
    value: {
      type: Object
    }
  },
  data: function data() {
    return {
      showImageEditor: false
    };
  },
  computed: {
    imageSrc: function imageSrc() {
      if (this.value) return this.value.cropUrl || this.value.url;else return "";
    },
    imageFile: {
      get: function get() {
        return this.model ? {
          id: this.model.id,
          url: this.model.url,
          filename: this.model.filename,
          width: this.model.width,
          height: this.model.height
        } : null;
      },
      set: function set(val) {
        if (val) {
          this.model = {
            id: val.id,
            filename: val.filename,
            width: val.width,
            height: val.height,
            url: val.url
          };
        } else {
          this.model = null;
        }
      }
    }
  },
  methods: {
    showFileChooser: function showFileChooser() {
      this.$refs.input.click();
    },
    edit: function edit() {
      this.showImageEditor = true;
    },
    cancelImageEditor: function cancelImageEditor() {
      this.showImageEditor = false;
    },
    saveImageEditor: function saveImageEditor(cropUrl, cropData) {
      this.showImageEditor = false;
      this.model = {
        id: this.model.id,
        url: this.model.url,
        filename: this.model.filename,
        width: this.model.width,
        height: this.model.height,
        cropUrl: cropUrl,
        crop: cropData
      };
    },
    remove: function remove() {
      this.model = null;
    }
  },
  components: {
    Control: Control,
    VueCropper: VueCropper_default.a,
    FileBrowser: FileBrowser,
    ImageEditor: ImageEditor
  },
  builder: {
    props: function props() {
      return {
        schema: {
          type: "object",
          properties: {
            required: {
              title: "Required",
              type: "boolean"
            },
            multilanguage: {
              title: "Multi language",
              type: "boolean"
            }
          }
        },
        options: {}
      };
    },
    fromBuilder: function fromBuilder(field) {
      return {
        schema: {
          title: field.label,
          type: "string",
          required: field.required
        },
        options: {
          type: "imagex",
          multilanguage: field.multilanguage
        }
      };
    },
    toBuilder: function toBuilder(def) {
      return {
        label: def.schema.title,
        fieldType: "imagex",
        required: def.schema.required,
        multilanguage: def.options.multilanguage
      };
    }
  }
};
/* harmony default export */ var ImagexFieldvue_type_script_lang_js_ = (ImagexField);
// CONCATENATED MODULE: ./src/components/fields/ImagexField.vue?vue&type=script&lang=js&
 /* harmony default export */ var fields_ImagexFieldvue_type_script_lang_js_ = (ImagexFieldvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/fields/ImagexField.vue





/* normalize component */

var ImagexField_component = normalizeComponent(
  fields_ImagexFieldvue_type_script_lang_js_,
  ImagexFieldvue_type_template_id_662594e0_render,
  ImagexFieldvue_type_template_id_662594e0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var fields_ImagexField = (ImagexField_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"161888d0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/fields/NumberField.vue?vue&type=template&id=182ff081&scoped=true&
var NumberFieldvue_type_template_id_182ff081_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('control',_vm._b({scopedSlots:_vm._u([{key:"default",fn:function(flags){return [_c('input',{directives:[{name:"model",rawName:"v-model.number",value:(_vm.model),expression:"model",modifiers:{"number":true}}],staticClass:"form-control",class:{'is-invalid':flags.invalid && flags.touched},attrs:{"type":"number","aria-describedby":_vm.options.label},domProps:{"value":(_vm.model)},on:{"input":function($event){if($event.target.composing){ return; }_vm.model=_vm._n($event.target.value)},"blur":function($event){return _vm.$forceUpdate()}}})]}}])},'control',_vm.props,false))}
var NumberFieldvue_type_template_id_182ff081_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/fields/NumberField.vue?vue&type=template&id=182ff081&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/fields/NumberField.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//

var NumberField = {
  name: "NumberField",
  extends: fields_ControlField,
  props: {
    value: {
      type: Number
    }
  },
  computed: {},
  methods: {},
  components: {},
  builder: {
    props: function props() {
      return {
        schema: {
          type: "object",
          properties: {
            required: {
              title: "Required",
              type: "boolean"
            },
            placeholder: {
              title: "Field Placeholder",
              description: "Field placeholder.",
              type: "number"
            }
          }
        },
        options: {}
      };
    },
    fromBuilder: function fromBuilder(field) {
      return {
        schema: {
          type: "number",
          title: field.label,
          required: field.required,
          placeholder: field.placeholder
        },
        options: {
          placeholder: field.placeholder
        }
      };
    },
    toBuilder: function toBuilder(def) {
      return {
        label: def.schema.title,
        fieldType: "number",
        required: def.schema.required,
        placeholder: def.options.placeholder
      };
    }
  }
};
/* harmony default export */ var NumberFieldvue_type_script_lang_js_ = (NumberField);
// CONCATENATED MODULE: ./src/components/fields/NumberField.vue?vue&type=script&lang=js&
 /* harmony default export */ var fields_NumberFieldvue_type_script_lang_js_ = (NumberFieldvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/fields/NumberField.vue





/* normalize component */

var NumberField_component = normalizeComponent(
  fields_NumberFieldvue_type_script_lang_js_,
  NumberFieldvue_type_template_id_182ff081_scoped_true_render,
  NumberFieldvue_type_template_id_182ff081_scoped_true_staticRenderFns,
  false,
  null,
  "182ff081",
  null
  
)

/* harmony default export */ var fields_NumberField = (NumberField_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"161888d0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/fields/RadioField.vue?vue&type=template&id=50235d49&scoped=true&
var RadioFieldvue_type_template_id_50235d49_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('control',_vm._b({},'control',_vm.props,false),_vm._l((_vm.schema.enum),function(val,index){return _c('div',{key:val,staticClass:"form-check"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.model),expression:"model"}],staticClass:"form-check-input",attrs:{"type":"radio"},domProps:{"value":val,"checked":_vm._q(_vm.model,val)},on:{"change":function($event){_vm.model=val}}}),_c('label',{staticClass:"form-check-label"},[_vm._v(_vm._s(_vm.label(index)))])])}),0)}
var RadioFieldvue_type_template_id_50235d49_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/fields/RadioField.vue?vue&type=template&id=50235d49&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/fields/RadioField.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//

var RadioField = {
  name: "RadioField",
  extends: fields_ControlField,
  props: {
    value: {
      type: String
    },
    schema: {},
    options: {},
    connector: {}
  },
  computed: {
    model: {
      get: function get() {
        return this.value;
      },
      set: function set(val) {
        this.$emit("input", val);
      }
    }
  },
  methods: {
    label: function label(index) {
      return this.schema.enum[index];
    }
  },
  components: {},
  builder: {
    props: function props() {
      return {
        schema: {
          type: "object",
          properties: {
            options: {
              title: "Options",
              type: "array",
              items: {
                type: "object",
                properties: {
                  value: {
                    type: "string",
                    title: "Value"
                  },
                  label: {
                    type: "string",
                    title: "Label"
                  }
                }
              }
            }
          }
        },
        options: {}
      };
    },
    fromBuilder: function fromBuilder(field) {
      var _enum = [];
      var optionLabels = [];

      if (field.options) {
        _enum = field.options.map(function (o) {
          return o.value;
        });
        optionLabels = field.options.map(function (o) {
          return o.label;
        });
      }

      return {
        schema: {
          type: "string",
          title: field.label,
          enum: _enum
        },
        options: {
          type: "radio",
          optionLabels: optionLabels
        }
      };
    },
    toBuilder: function toBuilder(def) {
      return {
        label: def.schema.title,
        fieldType: "radio",
        options: def.schema.enum.map(function (a, i) {
          return {
            value: a,
            label: def.options.optionLabels ? def.options.optionLabels[i] : a
          };
        })
      };
    }
  }
};
/* harmony default export */ var RadioFieldvue_type_script_lang_js_ = (RadioField);
// CONCATENATED MODULE: ./src/components/fields/RadioField.vue?vue&type=script&lang=js&
 /* harmony default export */ var fields_RadioFieldvue_type_script_lang_js_ = (RadioFieldvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/fields/RadioField.vue





/* normalize component */

var RadioField_component = normalizeComponent(
  fields_RadioFieldvue_type_script_lang_js_,
  RadioFieldvue_type_template_id_50235d49_scoped_true_render,
  RadioFieldvue_type_template_id_50235d49_scoped_true_staticRenderFns,
  false,
  null,
  "50235d49",
  null
  
)

/* harmony default export */ var fields_RadioField = (RadioField_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"161888d0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/fields/TextareaField.vue?vue&type=template&id=26ae2b70&scoped=true&
var TextareaFieldvue_type_template_id_26ae2b70_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('control',_vm._b({scopedSlots:_vm._u([{key:"default",fn:function(flags){return [_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.model),expression:"model"}],staticClass:"form-control",class:{'is-invalid':flags.invalid && flags.touched},attrs:{"aria-describedby":_vm.options.label,"placeholder":_vm.options.placeholder,"rows":_vm.options.rows,"cols":_vm.options.cols},domProps:{"value":(_vm.model)},on:{"input":function($event){if($event.target.composing){ return; }_vm.model=$event.target.value}}})]}}])},'control',_vm.props,false))}
var TextareaFieldvue_type_template_id_26ae2b70_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/fields/TextareaField.vue?vue&type=template&id=26ae2b70&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/fields/TextareaField.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var TextareaField = {
  name: "TextareaField",
  extends: fields_TextField,
  props: {},
  computed: {},
  methods: {},
  components: {
    Control: Control
  },
  builder: {
    props: function props() {
      return {
        schema: {
          type: "object",
          properties: {
            required: {
              title: "Required",
              type: "boolean"
            },
            placeholder: {
              title: "Field Placeholder",
              description: "Field placeholder.",
              type: "string"
            }
          }
        },
        options: {}
      };
    },
    fromBuilder: function fromBuilder(field) {
      return {
        schema: {
          title: field.label,
          type: "string",
          required: field.required
        },
        options: {
          type: "textarea",
          placeholder: field.placeholder
        }
      };
    },
    toBuilder: function toBuilder(def) {
      return {
        label: def.schema.title,
        fieldType: "textarea",
        required: def.schema.required,
        placeholder: def.options.placeholder
      };
    }
  }
};
/* harmony default export */ var TextareaFieldvue_type_script_lang_js_ = (TextareaField);
// CONCATENATED MODULE: ./src/components/fields/TextareaField.vue?vue&type=script&lang=js&
 /* harmony default export */ var fields_TextareaFieldvue_type_script_lang_js_ = (TextareaFieldvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/fields/TextareaField.vue





/* normalize component */

var TextareaField_component = normalizeComponent(
  fields_TextareaFieldvue_type_script_lang_js_,
  TextareaFieldvue_type_template_id_26ae2b70_scoped_true_render,
  TextareaFieldvue_type_template_id_26ae2b70_scoped_true_staticRenderFns,
  false,
  null,
  "26ae2b70",
  null
  
)

/* harmony default export */ var fields_TextareaField = (TextareaField_component.exports);
// CONCATENATED MODULE: ./src/Bootstap4View.js
















/* harmony default export */ var Bootstap4View = ({
  register: function register() {
    //Lama.registerFieldComponent("textarea", () => import('./components/TextareaField.vue') );
    lama.registerFieldComponent("address", fields_AddressField);
    lama.registerFieldComponent("array", fields_ArrayField);
    lama.registerDefaultSchemaFieldMapping("array", "array");
    lama.registerFieldComponent("checkbox", CheckboxField);
    lama.registerDefaultSchemaFieldMapping("boolean", "checkbox");
    lama.registerFieldComponent("ckeditor", fields_CKEditorField);
    lama.registerFieldComponent("country", fields_CountryField);
    lama.registerFieldComponent("date", fields_DateField);
    lama.registerFieldComponent("file", fields_FileField);
    lama.registerFieldComponent("image", fields_ImageField);
    lama.registerFieldComponent("imagex", fields_ImagexField);
    lama.registerFieldComponent("number", fields_NumberField);
    lama.registerDefaultSchemaFieldMapping("number", "number");
    lama.registerFieldComponent("object", fields_ObjectField);
    lama.registerDefaultSchemaFieldMapping("object", "object");
    lama.registerFieldComponent("radio", fields_RadioField);
    lama.registerFieldComponent("select", fields_SelectField);
    lama.registerFieldComponent("textarea", fields_TextareaField);
    lama.registerFieldComponent("text", fields_TextField);
    lama.registerDefaultSchemaFieldMapping("string", "text");
    lama.registerView({
      "id": "bootstrap4-edit",
      "parent": "base",
      "type": "edit",
      "ui": "bootstrap4",
      "title": "Bootstrap4 view",
      "displayReadonly": false,
      "components": {},
      //"callbacks": callbacks,
      "styles": {
        layoutRow: "form-row",
        layoutColumn: ["col-1", "col-2", "col-3"]
      },
      "horizontal": false
    });
    lama.registerView({
      "id": "bootstrap4-create",
      "parent": "bootstrap4-edit",
      "title": "Create View for Bootstrap 4",
      "ui": "bootstrap4",
      "type": "create",
      "displayReadonly": false
    });
  }
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4de4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// CONCATENATED MODULE: ./src/DefaultConnector.js



/* harmony default export */ var DefaultConnector = ({
  currentCulture: "fr-FR",
  connect: function connect() {},
  loadAll: function loadAll(resources, onSuccess) {
    onSuccess();
  },
  getMessage: function getMessage() {},

  /**
       * Loads data source (value/text) pairs from a remote source.
       * This default implementation allows for config to be a string identifying a URL.
       *
       * @param config
       * @param successCallback
       * @param errorCallback
       * @returns {*}
       */
  loadDataSource: function loadDataSource(config, successCallback, errorCallback) {
    //return this._handleLoadDataSource(config, successCallback, errorCallback);
    console.log("loadDataSource");
    console.log(config);

    if (config && config.query && config.query) {
      if (config.query.type == "folders") {
        successCallback([{
          id: "1",
          name: "Files",
          url: "/Files"
        }]);
      }

      if (config.query.type == "files") {
        var files = [{
          id: "1",
          url: "https://agontuk.github.io/assets/images/berserk.jpg",
          name: "berserk.jpg",
          folderId: "1"
        }];
        successCallback(files.filter(function (f) {
          if (config.query.folder) return f.folderId == config.query.folder;else return false;
        }).map(function (f) {
          return {
            id: f.id,
            filename: f.name,
            url: f.url
          };
        }));
      }
    } else {
      errorCallback();
    }
  },
  // eslint-disable-next-line no-unused-vars
  upload: function upload(config, successCallback, errorCallback) {
    successCallback({
      id: "2",
      url: "https://agontuk.github.io/assets/images/berserk.jpg",
      filename: "berserk.jpg"
    });
  }
});
// CONCATENATED MODULE: ./src/lama.js










 //import VueI18n from 'vue-i18n'





external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component('ValidationProvider', ValidationProvider);
external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component('ValidationObserver', ValidationObserver); //Vue.use(VueI18n)

extend('required', required);
extend('email', email);
extend('numeric', numeric);
var lama_Lama = {
  /**
   * @namespace Namespace for all Lama Field Class Implementations.
   */
  Fields: {},

  /**
   * @namespace Namespace for all Lama Connector Class Implementations.
   */
  Connectors: {},
  //this.Extend = $.extend;
  Extend: function Extend(a, b) {
    for (var key in b) {
      // eslint-disable-next-line no-prototype-builtins
      if (b.hasOwnProperty(key)) a[key] = b[key];
    }

    return a;
  },

  /**
   * Makes an array.
   *
   * @param {Any} nonArray A non-array variable.
   * @returns {Array} Array out of the non-array variable.
   */
  makeArray: function makeArray(nonArray) {
    return Array.prototype.slice.call(nonArray);
  },

  /**
  * Finds whether the type of a variable is function.
  * @param {Any} obj The variable being evaluated.
  * @returns {Boolean} True if the variable is a function, false otherwise.
  */
  isFunction: function isFunction(obj) {
    return Object.prototype.toString.call(obj) === "[object Function]";
  },

  /**
   * Finds whether the type of a variable is string.
   * @param {Any} obj The variable being evaluated.
   * @returns {Boolean} True if the variable is a string, false otherwise.
   */
  isString: function isString(obj) {
    return typeof obj === "string";
  },

  /**
   * Finds whether the type of a variable is object.
   * @param {Any} obj The variable being evaluated.
   * @returns {Boolean} True if the variable is an object, false otherwise.
   */
  isObject: function isObject(obj) {
    return !this.isUndefined(obj) && Object.prototype.toString.call(obj) === '[object Object]';
  },

  /**
   * Finds whether the type of a variable is a plain, non-prototyped object.
   * @param {Any} obj The variable being evaluated.
   * @returns {Boolean} True if the variable is a plain object, false otherwise.
   */
  isPlainObject: function isPlainObject(obj) {
    //return $.isPlainObject(obj);
    return Object.prototype.toString.call(obj) === '[object Object]';
  },

  /**
   * Finds whether the type of a variable is number.
   * @param {Any} obj The variable being evaluated.
   * @returns {Boolean} True if the variable is a number, false otherwise.
   */
  isNumber: function isNumber(obj) {
    return typeof obj === "number";
  },

  /**
   * Finds whether the type of a variable is array.
   * @param {Any} obj The variable being evaluated.
   * @returns {Boolean} True if the variable is an array, false otherwise.
   */
  isArray: function isArray(obj) {
    return Object.prototype.toString.call(obj) == "[object Array]";
  },

  /**
   * Finds whether the type of a variable is boolean.
   * @param {Any} obj The variable being evaluated.
   * @returns {Boolean} True if the variable is a boolean, false otherwise.
   */
  isBoolean: function isBoolean(obj) {
    return typeof obj === "boolean";
  },

  /**
   * Finds whether the type of a variable is undefined.
   * @param {Any} obj The variable being evaluated.
   * @returns {Boolean} True if the variable is a undefined, false otherwise.
   */
  isUndefined: function isUndefined(obj) {
    return typeof obj == "undefined";
  },

  /**
  * Finds whether a variable is empty.
  * @param {Any} obj The variable being evaluated.
  * @param [boolean] includeFunctions whether to include functions in any counts
  * @returns {Boolean} True if the variable is empty, false otherwise.
  */
  isEmpty: function isEmpty(obj, includeFunctions) {
    var self = this;

    if (this.isUndefined(obj)) {
      return true;
    } else if (obj === null) {
      return true;
    }

    if (obj && this.isObject(obj)) {
      var count = self.countProperties(obj, includeFunctions);

      if (count === 0) {
        return true;
      }
    }

    return false;
  },

  /**
   * Counts the number of properties in an object.
   *
   * @param obj
   * @param includeFunctions
   *
   * @returns {number}
   */
  countProperties: function countProperties(obj, includeFunctions) {
    var count = 0;

    if (obj && this.isObject(obj)) {
      for (var k in obj) {
        // eslint-disable-next-line no-prototype-builtins
        if (obj.hasOwnProperty(k)) {
          if (includeFunctions) {
            count++;
          } else {
            if (typeof obj[k] !== "function") {
              count++;
            }
          }
        }
      }
    }

    return count;
  },

  /**
   * Produces a copy of the given JS value.
   *
   * If the value is a simple array or a simple object, then a pure copy is produced.
   *
   * If it's a complex object or a function, then the reference is copied (i.e. not truly a copy).
   *
   * @param thing
   * @return {*}
   */
  copyOf: function copyOf(thing) {
    var copy = thing;

    if (this.isArray(thing)) {
      copy = [];

      for (var i = 0; i < thing.length; i++) {
        copy.push(this.copyOf(thing[i]));
      }
    } else if (this.isObject(thing)) {
      if (thing instanceof Date) {
        // date
        return new Date(thing.getTime());
      } else if (thing instanceof RegExp) {
        // regular expression
        return new RegExp(thing);
      } else if (thing.nodeType && "cloneNode" in thing) {
        // DOM node
        copy = thing.cloneNode(true);
      } else if (this.isPlainObject(thing)) {
        copy = {};

        for (var k in thing) {
          // eslint-disable-next-line no-prototype-builtins
          if (thing.hasOwnProperty(k)) {
            copy[k] = this.copyOf(thing[k]);
          }
        }
      } else {// otherwise, it's some other kind of object so we just do a referential copy
        // in other words, not a copy
      }
    }

    return copy;
  },
  copyInto: function copyInto(target, source) {
    for (var i in source) {
      // eslint-disable-next-line no-prototype-builtins
      if (source.hasOwnProperty(i) && !this.isFunction(this[i])) {
        target[i] = source[i];
      }
    }
  },

  /**
   * Retained for legacy purposes.  Alias for copyOf().
   *
   * @param object
   * @returns {*}
   */
  cloneObject: function cloneObject(object) {
    return this.copyOf(object);
  },

  /**
   * Splices a string.
   *
   * @param {String} source Source string to be spliced.
   * @param {Integer} splicePoint Splice location.
   * @param {String} splice String to be spliced in.
   * @returns {String} Spliced string
   */
  spliceIn: function spliceIn(source, splicePoint, splice) {
    return source.substring(0, splicePoint) + splice + source.substring(splicePoint, source.length);
  },

  /**
   * Compacts an array.
   *
   * @param {Array} arr Source array to be compacted.
   * @returns {Array} Compacted array.
   */
  compactArray: function compactArray(arr) {
    var n = [],
        l = arr.length,
        i;

    for (i = 0; i < l; i++) {
      if (!this.isNull(arr[i]) && !this.isUndefined(arr[i])) {
        n.push(arr[i]);
      }
    }

    return n;
  },

  /**
   * Removes accents from a string.
   *
   * @param {String} str Source string.
   * @returns {String} Cleaned string without accents.
   */
  removeAccents: function removeAccents(str) {
    return str.replace(/[àáâãäå]/g, "a").replace(/[èéêë]/g, "e").replace(/[ìíîï]/g, "i").replace(/[òóôõö]/g, "o").replace(/[ùúûü]/g, "u").replace(/[ýÿ]/g, "y").replace(/[ñ]/g, "n").replace(/[ç]/g, "c").replace(/[œ]/g, "oe").replace(/[æ]/g, "ae");
  },

  /**
   * @private
   * @param el
   * @param arr
   * @param fn
   */
  indexOf: function indexOf(el, arr, fn) {
    var l = arr.length,
        i;

    if (!this.isFunction(fn)) {
      /**
       * @ignore
       * @param elt
       * @param arrElt
       */
      fn = function fn(elt, arrElt) {
        return elt === arrElt;
      };
    }

    for (i = 0; i < l; i++) {
      if (fn.call({}, el, arr[i])) {
        return i;
      }
    }

    return -1;
  },
  isEmptyObject: function isEmptyObject(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  },

  /**
   * Finds whether a variable has empty value or not.
   *
   * @param {Any} val Variable to be evaluated.
   * @param [boolean] includeFunctions whether to include function in any counts
   *
   * @returns {Boolean} True if the variable has empty value, false otherwise.
   */
  isValEmpty: function isValEmpty(val, includeFunctions) {
    var empty = false;

    if (this.isEmpty(val, includeFunctions)) {
      empty = true;
    } else {
      if (this.isString(val) && val === "") {
        empty = true;
      }

      if (this.isObject(val) && this.isEmptyObject(val)) {
        empty = true;
      }

      if (this.isArray(val) && val.length === 0) {
        empty = true;
      }
      /*
      if (this.isNumber(val) && isNaN(val)) {
          empty = true;
      }
      */

    }

    return empty;
  },

  /**
   * Merges json obj2 into obj1 using a recursive approach.
   *
   * @param {Object} obj1 Destination object.
   * @param {Object} obj2 Source object.
   * @param {Function} validKeyFunction Function used to determine whether to include a given key or not.
   *
   * @returns {Object} Merged object.
   */
  merge: function merge(obj1, obj2, validKeyFunction) {
    if (!obj1) {
      obj1 = {};
    }

    for (var key in obj2) {
      var valid = true;

      if (validKeyFunction) {
        valid = validKeyFunction(key);
      }

      if (valid) {
        if (this.isEmpty(obj2[key])) {
          obj1[key] = obj2[key];
        } else {
          if (this.isObject(obj2[key])) {
            if (!obj1[key]) {
              obj1[key] = {};
            }

            obj1[key] = this.merge(obj1[key], obj2[key]);
          } else {
            obj1[key] = obj2[key];
          }
        }
      }
    }

    return obj1;
  },

  /**
   * Merges json "source" into "target" using a recursive approach. The merge will include empty values
   * of obj2 properties.
   *
   * @param {Object} target Target object.
   * @param {Object} source Source object.
   *
   * @returns {Object} Merged object
   */
  mergeObject: function mergeObject(target, source) {
    if (!target) {
      target = {};
    }

    if (!source) {
      source = {};
    }

    this.mergeObject2(source, target);
    return target;
  },
  mergeObject2: function mergeObject2(source, target) {
    var _this = this;

    //var isArray = this.isArray;
    //var isObject = this.isObject;
    //var isUndefined = this.isUndefined;
    //var copyOf = this.copyOf;
    var _merge = function _merge(source, target) {
      if (_this.isArray(source)) {
        if (_this.isArray(target)) {
          // merge array elements
          for (var index = 0; index < source.length; index++) {
            target.push(_this.copyOf(source[index]));
          } //$.each(source, function (index) {
          //    target.push(copyOf(source[index]));
          //});

        } else {// something is already in the target that isn't an ARRAY
            // skip
          }
      } else if (_this.isObject(source)) {
        if (_this.isObject(target)) {
          // merge object properties
          for (var key in source) {
            // eslint-disable-next-line no-prototype-builtins
            if (source.hasOwnProperty(key)) {
              if (_this.isUndefined(target[key])) {
                target[key] = _this.copyOf(source[key]);
              } else {
                target[key] = _merge(source[key], target[key]);
              }
            }
          } //$.each(source, function (key) {
          //if (isUndefined(target[key])) {
          //target[key] = copyOf(source[key]);
          //} else {
          //target[key] = _merge(source[key], target[key]);
          //}
          //});

        } else {// something is already in the target that isn't an OBJECT
            // skip
          }
      } else {
        // otherwise, it's a scalar, always overwrite
        target = _this.copyOf(source);
      }

      return target;
    };

    _merge(source, target);

    return target;
  },

  /**
  * Static counter for generating a unique ID.
  */
  uniqueIdCounter: 0,

  /**
   * Generates a unique alpaca id.
   *
   * @returns {String} The unique alpaca id.
   */
  generateId: function generateId() {
    this.uniqueIdCounter++;
    return "lama" + this.uniqueIdCounter;
  },

  /**
   * Field Type to Schema Type Mappings.
   */
  defaultSchemaFieldMapping: {},

  /**
   * Registers a field type to schema data type mapping.
   *
   * @param {String} schemaType Schema data type.
   * @param {String} fieldType Field type.
   */
  registerDefaultSchemaFieldMapping: function registerDefaultSchemaFieldMapping(schemaType, fieldType) {
    if (schemaType && fieldType) {
      this.defaultSchemaFieldMapping[schemaType] = fieldType;
    }
  },

  /**
   * Field Type to Schema Format Mappings.
   */
  defaultFormatFieldMapping: {},

  /**
   * Registers a field type to schema format mapping.
   *
   * @param {String} format Schema format.
   * @param {String} fieldType Field type.
   */
  registerDefaultFormatFieldMapping: function registerDefaultFormatFieldMapping(format, fieldType) {
    if (format && fieldType) {
      this.defaultFormatFieldMapping[format] = fieldType;
    }
  },

  /**
   * Gets schema type of a variable.
   *
   * @param {Any} data The variable.
   * @returns {String} Schema type of the variable.
   */
  getSchemaType: function getSchemaType(data) {
    var schemaType = null; // map data types to default field types

    if (this.isEmpty(data)) {
      schemaType = "string";
    } else if (this.isArray(data)) {
      schemaType = "array";
    } else if (this.isObject(data)) {
      schemaType = "object";
    } else if (this.isString(data)) {
      schemaType = "string";
    } else if (this.isNumber(data)) {
      schemaType = "number";
    } else if (this.isBoolean(data)) {
      schemaType = "boolean";
    } // Last check for data that carries functions -- GitanaConnector case.


    if (!schemaType && _typeof(data) === 'object') {
      schemaType = "object";
    }

    return schemaType;
  },

  /**
  * Makes a best guess at the options field type if none provided.
  *
  * @param schema
  * @returns {string} the field type
  */
  guessOptionsType: function guessOptionsType(schema) {
    var type = null;

    if (schema && typeof schema["enum"] !== "undefined") {
      if (schema["enum"].length > 3) {
        type = "select";
      } else {
        type = "radio";
      }
    } else {
      type = this.defaultSchemaFieldMapping[schema.type];
    } // check if it has format defined


    if (schema.format && this.defaultFormatFieldMapping[schema.format]) {
      type = this.defaultFormatFieldMapping[schema.format];
    }

    return type;
  },

  /**
   * Lama Views.
   */
  views: {},

  /**
   * Generates a valid view id.
   *
   * @returns {String} A valid unique view id.
   */
  generateViewId: function generateViewId() {
    return "view-" + this.generateId();
  },

  /**
   * Registers a view with the framework.
   *
   * @param viewObject
   */
  registerView: function registerView(viewObject) {
    var viewId = viewObject.id;

    if (!viewId) {
      return this.throwDefaultError("Cannot register view with missing view id: " + viewId);
    }

    var existingView = this.views[viewId];

    if (existingView) {
      this.mergeObject(existingView, viewObject);
    } else {
      this.views[viewId] = viewObject;

      if (!viewObject.components) {
        viewObject.components = {};
      }
    }
  },

  /**
   * Resolves which view handles a given theme and type of operation.
   *
   * @param {String} ui
   * @param {String} type
   *
   * @returns {String} the view id
   */
  lookupView: function lookupView(ui, type) {
    var theViewId = null;

    for (var viewId in this.views) {
      var view = this.views[viewId];

      if (view.ui === ui && view.type === type) {
        theViewId = viewId;
        break;
      }
    }

    return theViewId;
  },

  /**
   * Registers a component to a view.
   *
   * @param {String} templateId Template id.
   * @param {String|Object} template Either the text of the template or an object containing { "type": "<templateEngineIdentifier>", "template": "<markup>" }
   * @param [String] viewId the optional view id.  If none is provided, then all registrations are to the default view.
   */
  registerTemplate: function registerTemplate(templateId, template, viewId) {
    // if no view specified, fall back to the base view which is "base"
    if (!viewId) {
      viewId = "base";
    }

    if (!this.views[viewId]) {
      this.views[viewId] = {};
      this.views[viewId].id = viewId;
    }

    if (!this.views[viewId].components) {
      this.views[viewId].components = {};
    }

    this.views[viewId].components[templateId] = template;
  },

  /**
   * Registers list of templates to a view.
   *
   * @param {Array} components Components being registered
   * @param {String} viewId Id of the view that the components being registered to.
   */
  registerTemplates: function registerTemplates(components, viewId) {
    for (var templateId in components) {
      this.registerTemplate(templateId, components[templateId], viewId);
    }
  },

  /**
   * Maps of field types to field class implementations.
   */
  fieldClassRegistry: {},

  /**
   * Registers an implementation class for a type of field.
   *
   * @param {String} type Field type.
   * @param{Lama.Field} fieldClass Field class.
   */
  registerFieldComponent: function registerFieldComponent(type, fieldClass) {
    this.fieldClassRegistry[type] = fieldClass;
  },

  /**
   * Returns the implementation class for a type of field.
   *
   * @param {String} type Field type.
   *
   * @returns{Lama.Field} Field class mapped to field type.
   */
  getFieldComponent: function getFieldComponent(type) {
    return this.fieldClassRegistry[type];
  },

  /**
   * Gets the field type id for a given field implementation class.
   *
   * @param{Lama.Field} fieldClass Field class.
   *
   * @returns {String} Field type of the field class.
   */
  getFieldComponentType: function getFieldComponentType(fieldClass) {
    for (var type in this.fieldClassRegistry) {
      // eslint-disable-next-line no-prototype-builtins
      if (this.fieldClassRegistry.hasOwnProperty(type)) {
        if (this.fieldClassRegistry[type] === fieldClass) {
          return type;
        }
      }
    }

    return null;
  },

  /**
   * Maps of connector types to connector class implementations.
   */
  connectorClassRegistry: {},

  /**
   * Registers an implementation class for a connector type.
   *
   * @param {String} type cConnect type
   * @param{Lama.Connector} connectorClass Connector class.
   */
  registerConnectorClass: function registerConnectorClass(type, connectorClass) {
    this.connectorClassRegistry[type] = connectorClass;
  },

  /**
   * Returns the implementation class for a connector type.
   *
   * @param {String} type Connect type.
   * @returns{Lama.Connector} Connector class mapped to connect type.
   */
  getConnectorClass: function getConnectorClass(type) {
    return this.connectorClassRegistry[type];
  },
  getMessage: function getMessage(viewId, key, locale) {
    if (!locale) {
      locale = this.defaultLocale;
    }

    var messageForLocale = null;

    while (viewId) {
      var view = this.views[viewId];

      if (view["messages"]) {
        if (view["messages"][locale]) {
          messageForLocale = view["messages"][locale][key];
        }

        if (this.isEmpty(messageForLocale)) {
          messageForLocale = view["messages"][key];
        }

        if (!this.isEmpty(messageForLocale)) {
          return messageForLocale;
        }
      }

      viewId = view.parent;
    }

    return "[" + key + "]";
  },

  /**
  * Initial function for setting up field instance and executing callbacks if needed.
  *
  * @param {Object} el Container element.
  * @param {Object} data Field data.
  * @param {Object} options Field options.
  * @param {Object} schema Field schema.
  * @param {Object|String} view Field view.
  * @param {Object} initialSettings any additional settings provided to the top-level Lama object
  * @param {Function} callback Render callback.
  * @param {Function} renderedCallback Post-render callback.
  * @param {Lama.connector} connector Field connector.
  * @param {Function} errorCallback Error callback.
  *
  * @returns {Lama.Field} New field instance.
  */
  init: function init(el, data, options, schema, view, initialSettings, callback, renderedCallback, connector, errorCallback) {
    //var self = this;
    // if they provided an inline view object, we assign an id and store onto views map
    // so that it gets compiled along with the rest
    if (this.isObject(view)) {
      var viewId = view.id;

      if (!viewId) {
        view.id = this.generateViewId();
      }

      var parentId = view.parent;

      if (!parentId) {
        view.parent = "bootstrap4-edit";
      }

      this.registerView(view);
      view = view.id;
    } // make some intelligent guesses about what view id we might default to in case they want to use
    // auto-view selection.  We detect jquery-ui, bootstrap and jquerymobile.  If nothing can be detected,
    // we fall back to straight web views.


    var fallbackUI = this.defaultView || null;
    var fallbackType = null;

    if (fallbackUI) {
      if (data) {
        fallbackType = "edit";
      } else {
        fallbackType = "create";
      }
    } // if no view provided, but they provided "ui" and optionally "type", then we try to auto-select the view


    if (!view) {
      var ui = initialSettings.ui;
      var type = initialSettings.type;

      if (!ui) {
        if (!fallbackUI) {
          fallbackUI = this.defaultUI;
        }

        if (fallbackUI) {
          ui = fallbackUI;
        }
      }

      if (ui) {
        if (!type) {
          type = fallbackType ? fallbackType : "edit";
        }

        this.logDebug("No view provided but found request for UI: " + ui + " and type: " + type); // see if we can auto-select a view

        view = this.lookupView(ui, type);

        if (view) {
          this.logDebug("Found view: " + view);
        } else {
          this.logDebug("No view found for UI: " + ui + " and type: " + type);
        }
      }
    } // NOTE: at this point view is a string (the view id) or it is empty/null
    // if still no view, then default fallback to our detected view or the default


    if (!view) {
      return this.throwErrorWithCallback("A view was not specified and could not be automatically determined.", errorCallback);
    } else {
      // debugging: if the view isn't available, we want to report it right away
      if (this.isString(view)) {
        if (!this.views[view]) {
          return this.throwErrorWithCallback("The desired view: " + view + " could not be loaded.  Please make sure it is loaded and not misspelled.", errorCallback);
        }
      }

      var field = this.createFieldInstance("", data, options, schema, view, connector);

      if (field) {
        //this.fieldInstances[field.getId()] = field;
        // mechanism for looking up field instances by id
        //field.allFieldInstances = function () {
        //   return this.fieldInstances;
        //};
        // allow callbacks defined through view
        if (this.isEmpty(callback)) {
          callback = field.view.render;
        }

        if (this.isEmpty(renderedCallback)) {
          renderedCallback = field.view.postRender;
        }

        var fin = function fin() {
          // if this is the top-level alpaca field, we apply some additional CSS classes
          if (!field.parent) {} //field.getFieldEl().addClass("alpaca-" + self.getNormalizedView(view).type);
          // if this is the top-level alpaca field, we mark as top


          if (!field.parent) {//field.getFieldEl().addClass("alpaca-top");
          }

          renderedCallback(field);
        };

        if (!this.isEmpty(callback)) {
          callback(field, function () {
            fin();
          });
        } else {
          field.render(function () {
            fin();
          });
        }

        field.callback = callback;
        field.renderedCallback = renderedCallback;
      }
    }
  },

  /**
   * Internal method for constructing a field instance.
   *
   * @param {Object} el The dom element to act as the container of the constructed field.
   * @param {Object} data The data to be bound into the field.
   * @param {Object} options The configuration for the field.
   * @param {Object} schema The schema for the field.
   * @param {Object|String} view The view for the field.
   * @param{Lama.connector} connector The field connector to be bound into the field.
   * @param {Function} errorCallback Error callback.
   *
   * @returns{Lama.Field} New field instance.
   */
  createFieldInstance: function createFieldInstance(prefix, data, options, schema, view, connector) {
    var errorCallback = this.defaultErrorCallback; // make sure options and schema are not empty

    if (this.isValEmpty(options, true)) {
      options = {};
    }

    if (this.isValEmpty(schema, true)) {
      schema = {};
    }

    if (this.isUndefined(schema.required)) {
      schema.required = false;
    } // options can be a string that identifies the kind of field to construct (i.e. "text")


    if (options && this.isString(options)) {
      var fieldType = options;
      options = {};
      options.type = fieldType;
    }

    if (!options.type) {
      // if nothing passed in, we can try to make a guess based on the type of data
      if (!schema.type) {
        schema.type = this.getSchemaType(data);
      }

      if (!schema.type) {
        if (data && this.isArray(data)) {
          schema.type = "array";
        } else {
          schema.type = "object"; // fallback
        }
      } // using what we now about schema, try to guess the type


      options.type = this.guessOptionsType(schema);
    } // find the field class registered for this field type


    var component = this.getFieldComponent(prefix + options.type);

    if (!component) {
      errorCallback({
        "message": "Unable to find field class for type: " + options.type + " (" + schema.type + ")",
        "reason": "FIELD_INSTANTIATION_ERROR"
      });
      return null;
    }

    if (schema.type == "object" && this.isUndefined(data)) {
      data = {};
    } else if (schema.type == "array" && this.isUndefined(data)) {
      data = [];
    } // if we have data, bind it in


    return {
      component: component,
      props: {
        data: data,
        options: options,
        schema: schema,
        view: view,
        connector: connector,
        errorCallback: errorCallback
      }
    }; //return new FieldClass(el, data, options, schema, view, connector, errorCallback);
  },

  /**
   * Creates an empty data object for a given JSON schema.
   *
   * @param schema
   * @returns {string}
   */
  createEmptyDataInstance: function createEmptyDataInstance(schema) {
    if (!schema) {
      return "";
    }

    if (schema.type === "object") {
      return {};
    }

    if (schema.type === "array") {
      return [];
    }

    if (schema.type === "number") {
      return -1;
    }

    if (schema.type === "boolean") {
      return false;
    }

    return "";
  },
  defaultView: {},

  /*
  DEFAULT_ERROR_CALLBACK: function (error) {
      if (error && error.message) {
          // log to debug
          this.logError(JSON.stringify(error));
            // error out
          throw new Error("Lama caught an error with the default error handler: " + JSON.stringify(error));
        }
  },
  */

  /**
   * Default error callback handler for Lama.
   *
   * This error handler will be used if an "error" argument isn't passed in to the constructor for an Lama field.
   *
   * @param error
   */
  defaultErrorCallback: function defaultErrorCallback(error) {
    if (error && error.message) {
      // log to debug
      //this.logError(JSON.stringify(error));
      console.log(error); // error out

      throw new Error("Lama caught an error with the default error handler: " + JSON.stringify(error));
    }
  },

  /**
   * Utility method that throws a general error and dispatches to the default error handler.
   *
   * @param message
   */
  throwDefaultError: function throwDefaultError(message) {
    if (message && this.isObject(message)) {
      message = JSON.stringify(message);
    }

    var err = {
      "message": message
    };
    this.defaultErrorCallback(err);
  },

  /**
   * Utility method that throws an error back to the given callback handler.
   *
   * @param message
   * @param errorCallback
   */
  throwErrorWithCallback: function throwErrorWithCallback(message, errorCallback) {
    if (message && this.isObject(message)) {
      message = JSON.stringify(message);
    }

    var err = {
      "message": message
    };

    if (errorCallback) {
      errorCallback(err);
    } else {
      this.defaultErrorCallback(err);
    }
  },
  ///////////////////////////////////////////////////////////////////////////////////////////
  //
  // LOGGER
  //
  ///////////////////////////////////////////////////////////////////////////////////////////
  DEBUG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3,
  // by default, logging only shows warnings and above
  // to debug, set this.logLevel = this.DEBUG
  logLevel: 2,
  //WARN,
  logDebug: function logDebug(obj) {
    this.log(this.DEBUG, obj);
  },
  logInfo: function logInfo(obj) {
    this.log(this.INFO, obj);
  },
  logWarn: function logWarn(obj) {
    this.log(this.WARN, obj);
  },
  logError: function logError(obj) {
    this.log(this.ERROR, obj);
  },
  LOG_METHOD_MAP: {
    0: 'debug',
    1: 'info',
    2: 'warn',
    3: 'error'
  },
  log: function log(level, obj) {
    if (this.logLevel <= level) {
      var method = this.LOG_METHOD_MAP[level];

      if (typeof console !== 'undefined' && console[method]) {
        if ("debug" === method) {
          console.debug(obj);
        } else if ("info" === method) {
          console.info(obj);
        } else if ("warn" === method) {
          console.warn(obj);
        } else if ("error" === method) {
          console.error(obj);
        } else {
          console.log(obj);
        }
      }
    }
  },
  installed: false,
  install: function install(Vue, options) {
    if (this.installed) {
      console.warn("[LamaVue] allready installed");
      return;
    }

    this.installed = true;
    this.registerView(BaseView);
    Bootstap4View.register();
    if (options && options.view) this.defaultView = options.view;else this.defaultView = "bootstrap4-edit";
    this.registerConnectorClass("default", DefaultConnector);
  },
  mount: function mount(elementOrSelector, config) {
    var app = new external_commonjs_vue_commonjs2_vue_root_Vue_default.a({
      data: {
        model: config.data
      },
      render: function render(h) {
        var self = this;
        return h(Form, {
          ref: 'form',
          props: {
            schema: config.schema,
            options: config.options,
            view: config.view,
            connector: config.connector,
            value: self.model
          },
          on: {
            input: function input(event) {
              //self.$emit('input', event.target.value)
              self.model = event;
            }
          }
        });
      }
    }).$mount(elementOrSelector);
    return {
      getValue: function getValue() {
        return app.model;
      },
      validate: function validate(successCallback, errorCallBack) {
        app.$refs.form.validate(successCallback, errorCallBack);
      }
    };
  }
};
/* harmony default export */ var lama = (lama_Lama);

if (typeof window !== 'undefined') {
  window.Lama = lama_Lama;
  external_commonjs_vue_commonjs2_vue_root_Vue_default.a.use(lama_Lama);
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Field.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var Fieldvue_type_script_lang_js_ = ({
  name: "FormField",
  props: {
    value: {},
    schema: {},
    options: {},
    view: {},
    connector: {}
  },
  computed: {
    field: function field() {
      var field = lama.createFieldInstance("", this.data, this.options, this.schema, this.view, this.connector, this.errorCallback);
      return field;
    },

    /* model: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      }
    }, */
    model: {
      get: function get() {
        if (this.options.multilanguage) {
          return lama.isObject(this.value) ? this.value[this.connector.currentCulture] : this.value;
        } else {
          return this.value;
        }
      },
      set: function set(val) {
        if (this.options.multilanguage) {
          var valueObject = {};
          valueObject[this.connector.currentCulture] = val;

          if (lama.isObject(this.value)) {
            valueObject = lama.mergeObject(this.value, valueObject);
          }

          this.$emit("input", valueObject);
        } else {
          this.$emit("input", val);
        }
      }
    },
    fieldComponent: function fieldComponent() {
      return this.field.component;
    },
    props: function props() {
      return this.field.props;
    }
  },
  methods: {},
  components: {}
});
// CONCATENATED MODULE: ./src/components/Field.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Fieldvue_type_script_lang_js_ = (Fieldvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Field.vue





/* normalize component */

var Field_component = normalizeComponent(
  components_Fieldvue_type_script_lang_js_,
  Fieldvue_type_template_id_7f4d617c_scoped_true_render,
  Fieldvue_type_template_id_7f4d617c_scoped_true_staticRenderFns,
  false,
  null,
  "7f4d617c",
  null
  
)

/* harmony default export */ var Field = (Field_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Form.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//



external_commonjs_vue_commonjs2_vue_root_Vue_default.a.use(lama);
/* harmony default export */ var Formvue_type_script_lang_js_ = ({
  name: "Form",
  props: {
    schema: {},
    options: {},
    view: {},
    connector: {},
    value: {},
    debug: {
      "type": Boolean,
      "default": false
    }
  },
  computed: {
    model: {
      get: function get() {
        return this.value;
      },
      set: function set(val) {
        this.$emit("input", val);
      }
    },
    props: function props() {
      var connector = this.connector || lama.getConnectorClass("default");
      var view = this.view || lama.defaultView;
      return {
        schema: this.schema,
        options: this.options,
        view: view,
        connector: connector
      };
    },
    label: function label() {
      return this.schema.title;
    }
  },
  methods: {
    validate: function validate(successCallback, errorCallBack) {
      this.$refs.validationobserver.validate().then(function (success) {
        if (success) {
          if (successCallback) successCallback();
        } else {
          if (errorCallBack) errorCallBack();
        }
      });
    }
  },
  components: {
    FormField: Field
  }
});
// CONCATENATED MODULE: ./src/components/Form.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Formvue_type_script_lang_js_ = (Formvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Form.vue





/* normalize component */

var Form_component = normalizeComponent(
  components_Formvue_type_script_lang_js_,
  Formvue_type_template_id_e6f0ddee_scoped_true_render,
  Formvue_type_template_id_e6f0ddee_scoped_true_staticRenderFns,
  false,
  null,
  "e6f0ddee",
  null
  
)

/* harmony default export */ var Form = (Form_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"161888d0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BuilderField.vue?vue&type=template&id=deb31c5e&scoped=true&
var BuilderFieldvue_type_template_id_deb31c5e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{},[_c('container',_vm._b({model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v},expression:"model"}},'container',_vm.props,false),[_c('fields',_vm._b({model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v},expression:"model"}},'fields',_vm.props,false)),(_vm.model.fieldType)?_c('fields',_vm._b({model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v},expression:"model"}},'fields',_vm.builderProps,false)):_vm._e(),_vm._v(" "+_vm._s(_vm.model.builder)+" ")],1)],1)}
var BuilderFieldvue_type_template_id_deb31c5e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/BuilderField.vue?vue&type=template&id=deb31c5e&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BuilderField.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var BuilderFieldvue_type_script_lang_js_ = ({
  name: "BuilderField",
  props: {
    value: {},
    schema: {},
    options: {},
    connector: {},
    errorCallback: {}
  },
  computed: {
    field: function field() {
      var field = lama.createFieldInstance("", this.data, this.options, this.schema, this.view, this.connector, this.errorCallback);
      return field;
    },
    model: {
      get: function get() {
        return this.value;
      },
      set: function set(val) {
        this.$emit("input", val);
      }
    },
    props: function props() {
      return {
        schema: this.schema,
        options: this.options
      };
    },
    itemcomponent: function itemcomponent() {
      var schemaType = this.schema.type;
      var component = null;

      if (schemaType == "object") {
        component = lama.getFieldComponent("object");
      } else if (schemaType == "array") {
        component = lama.getFieldComponent("array");
      } else {
        component = lama.getFieldComponent("control");
      }

      return component;
    },
    controlComponent: function controlComponent() {
      var schemaType = this.schema.type;
      var component = null;

      if (schemaType == "object") {
        component = Fields;
      } else if (schemaType == "array") {
        component = List;
      } else {
        component = this.field.component;
      }

      return component;
    },
    itemProps: function itemProps() {
      return this.field.props;
    },
    builderComponent: function builderComponent() {
      return null;
      /*
      // eslint-disable-next-line no-undef
      let builderComponent = Lama.getFieldComponent(this.model.fieldType);
       var schemaType = builderComponent.builder.schema.type;
      var component = null;
      if (schemaType == "object") {
        // eslint-disable-next-line no-undef
        component = Fields;
      } else if (schemaType == "array") {
        // eslint-disable-next-line no-undef
        component = List;
      } else {
        // eslint-disable-next-line no-undef
        component = this.field.component;
      }
      return component;
      */
    },
    builderProps: function builderProps() {
      if (!this.model.fieldType) return null;
      var builderComponent = lama.getFieldComponent(this.model.fieldType);
      return builderComponent.builder.props();
    }
  },
  methods: {
    label: function label(field) {
      return this.properties[field].title;
    },
    propChange: function propChange(key, value) {
      this.$set(this.model, key, value);
      this.$emit("input", this.model);
    }
  },
  components: {
    Fields: Fields,
    Container: Container
  }
});
// CONCATENATED MODULE: ./src/components/BuilderField.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BuilderFieldvue_type_script_lang_js_ = (BuilderFieldvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/BuilderField.vue





/* normalize component */

var BuilderField_component = normalizeComponent(
  components_BuilderFieldvue_type_script_lang_js_,
  BuilderFieldvue_type_template_id_deb31c5e_scoped_true_render,
  BuilderFieldvue_type_template_id_deb31c5e_scoped_true_staticRenderFns,
  false,
  null,
  "deb31c5e",
  null
  
)

/* harmony default export */ var BuilderField = (BuilderField_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Builder.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




lama.registerFieldComponent("builder", BuilderField);
/* harmony default export */ var Buildervue_type_script_lang_js_ = ({
  name: "Builder",
  props: {
    value: {},
    connector: {},
    debug: {
      "type": Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      demo: {}
    };
  },
  computed: {
    model: {
      get: function get() {
        var fields = [];

        if (this.value.schema && this.value.schema.properties) {
          for (var key in this.value.schema.properties) {
            var sch = this.value.schema.properties[key];
            var opt = this.value.options.fields[key] || {};
            var field = {
              fieldName: key,
              label: sch.title,
              fieldType: type
            };
            var type = opt.type;

            if (!opt.type) {
              type = lama.guessOptionsType(sch);
            }

            if (type) {
              var builderComponent = lama.getFieldComponent(type);

              if (builderComponent && builderComponent.builder && builderComponent.builder.toBuilder) {
                field = builderComponent.builder.toBuilder({
                  schema: sch,
                  options: opt
                });
                field.fieldName = key;
              }
            }

            fields.push(field);
          }
        }

        return fields;
      },
      set: function set(val) {
        var props = {};
        var fields = {};

        for (var index = 0; index < val.length; index++) {
          var field = val[index];

          if (field.fieldType) {
            var builderComponent = lama.getFieldComponent(field.fieldType);
            var builder = builderComponent.builder.fromBuilder(field);
            props[field.fieldName] = builder.schema;
            fields[field.fieldName] = builder.options;
          } else {
            props[field.fieldName] = {
              title: field.label,
              type: field.fieldType
            };
            fields[field.fieldName] = {};
          }
        }

        this.$emit("input", {
          schema: {
            title: "What do you think of Alpaca?",
            type: "object",
            properties: props
          },
          options: {
            fields: fields
          }
        }); //this.$emit("input", val);
      }
    },
    demoProps: function demoProps() {
      var demoSchema = JSON.parse(JSON.stringify(this.value.schema || {}));
      demoSchema.type = demoSchema.type || "object";
      demoSchema.properties = demoSchema.properties || {};
      return {
        schema: demoSchema,
        options: JSON.parse(JSON.stringify(this.value.options)),
        connector: this.connector
      };
    },
    props: function props() {
      return builderUtils.getObjectProps();
    }
  },
  methods: {
    fieldProps: function fieldProps() {
      var defautProps = {
        type: "object",
        properties: {
          fieldname: {
            type: "string",
            title: "Field Name",
            required: true
          },
          label: {
            type: "string",
            title: "Label",
            required: true
          },
          fieldType: {
            type: "string",
            title: "Field Type",
            enum: this.fieldTypes
          }
        }
      };
      return defautProps;
    }
  },
  components: {
    LamaForm: Form
  }
});
// CONCATENATED MODULE: ./src/components/Builder.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Buildervue_type_script_lang_js_ = (Buildervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Builder.vue





/* normalize component */

var Builder_component = normalizeComponent(
  components_Buildervue_type_script_lang_js_,
  Buildervue_type_template_id_2f129546_render,
  Buildervue_type_template_id_2f129546_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Builder = (Builder_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Appvue_type_script_lang_js_ = ({
  name: "App",
  data: function data() {
    return {
      activeTab: 0,
      tabs: ["Builder", "Schema", "Options", "Demo"],
      model: {
        schema: {
          type: "object",
          properties: {}
        },
        options: {
          fields: {}
        }
      },
      connector: lama.getConnectorClass("default"),
      demoModel: {},
      demo: {
        schema: {
          title: "What do you think of Alpaca?",
          type: "object",
          properties: {
            name: {
              type: "string",
              title: "Name",
              required: true
            },
            amount: {
              type: "number",
              title: "Amount",
              required: true
            },
            ranking: {
              type: "string",
              title: "Ranking",
              enum: ["excellent", "not too shabby", "alpaca built my hotrod"]
            },
            adr: {
              type: "object",
              title: "Adress"
            },
            obj: {
              title: "What do you think of Alpaca?",
              type: "object",
              properties: {
                name2: {
                  type: "string",
                  title: "Name"
                },
                ranking2: {
                  type: "string",
                  title: "Ranking",
                  enum: ["excellent", "not too shabby", "alpaca built my hotrod"]
                }
              },
              dependencies: {
                ranking2: ["name2"]
              }
            },
            arr: {
              title: "What do you think of Lama?",
              type: "array",
              items: {
                title: "Ice Cream",
                type: "string"
              }
            },
            arrobj: {
              title: "What do you think of Lama?",
              type: "array",
              items: {
                type: "object",
                properties: {
                  name2: {
                    type: "string",
                    title: "Name"
                  },
                  ranking2: {
                    type: "string",
                    title: "Ranking",
                    enum: ["excellent", "not too shabby", "alpaca built my hotrod"]
                  }
                }
              }
            }
          }
        },
        options: {
          fields: {
            name: {
              type: "text",
              multilanguage: true
            },
            ranking: {
              dependencies: {
                name: "x"
              }
            },
            adr: {
              type: "address"
            }
          }
        },
        view: "bootstrap4-create"
      }
    };
  },
  computed: {
    schemaText: {
      get: function get() {
        return JSON.stringify(this.model.schema, undefined, "  ");
      },
      set: function set(val) {
        this.model.schema = JSON.parse(val);
      }
    },
    optionsText: {
      get: function get() {
        return JSON.stringify(this.model.options, undefined, "  ");
      },
      set: function set(val) {
        this.model.options = JSON.parse(val);
      }
    }
  },
  watch: {
    "model.schema": function modelSchema(val) {
      localStorage.setItem("schema", JSON.stringify(val));
    },
    "model.options": function modelOptions(val) {
      localStorage.setItem("options", JSON.stringify(val));
    }
  },
  created: function created() {
    var schema = localStorage.getItem("schema");
    if (schema) this.model.schema = JSON.parse(schema);
    var options = localStorage.getItem("options");
    if (options) this.model.options = JSON.parse(options);
  },
  components: {
    Builder: Builder,
    LamaForm: Form
  }
});
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/App.vue?vue&type=style&index=0&lang=css&
var Appvue_type_style_index_0_lang_css_ = __webpack_require__("034f");

// CONCATENATED MODULE: ./src/App.vue






/* normalize component */

var App_component = normalizeComponent(
  src_Appvue_type_script_lang_js_,
  Appvue_type_template_id_b6befb94_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = (App_component.exports);
// CONCATENATED MODULE: ./src/lamavue.js







// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js




/***/ }),

/***/ "fb6a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var isObject = __webpack_require__("861d");
var isArray = __webpack_require__("e8b5");
var toAbsoluteIndex = __webpack_require__("23cb");
var toLength = __webpack_require__("50c4");
var toIndexedObject = __webpack_require__("fc6a");
var createProperty = __webpack_require__("8418");
var wellKnownSymbol = __webpack_require__("b622");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
var USES_TO_LENGTH = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fdbc":
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__("4930");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "fea9":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global.Promise;


/***/ })

/******/ });
//# sourceMappingURL=lamavue.common.js.map