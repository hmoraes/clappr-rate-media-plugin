(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("clappr"));
	else if(typeof define === 'function' && define.amd)
		define(["clappr"], factory);
	else if(typeof exports === 'object')
		exports["RateMediaPlugin"] = factory(require("clappr"));
	else
		root["RateMediaPlugin"] = factory(root["Clappr"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_85__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/public/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(10);
var IE8_DOM_DEFINE = __webpack_require__(31);
var toPrimitive = __webpack_require__(17);
var dP = Object.defineProperty;

exports.f = __webpack_require__(3) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(12)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(2);
var createDesc = __webpack_require__(13);
module.exports = __webpack_require__(3) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(51);
var defined = __webpack_require__(16);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(22)('wks');
var uid = __webpack_require__(14);
var Symbol = __webpack_require__(1).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(0);
var ctx = __webpack_require__(30);
var hide = __webpack_require__(5);
var has = __webpack_require__(4);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(6);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 13 */
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
/* 14 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(6);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(10);
var dPs = __webpack_require__(50);
var enumBugKeys = __webpack_require__(23);
var IE_PROTO = __webpack_require__(21)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(32)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(55).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(34);
var enumBugKeys = __webpack_require__(23);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(22)('keys');
var uid = __webpack_require__(14);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(0);
var global = __webpack_require__(1);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(11) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 23 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(2).f;
var has = __webpack_require__(4);
var TAG = __webpack_require__(8)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(8);


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(0);
var LIBRARY = __webpack_require__(11);
var wksExt = __webpack_require__(25);
var defineProperty = __webpack_require__(2).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(44);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(62);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(11);
var $export = __webpack_require__(9);
var redefine = __webpack_require__(33);
var hide = __webpack_require__(5);
var Iterators = __webpack_require__(18);
var $iterCreate = __webpack_require__(49);
var setToStringTag = __webpack_require__(24);
var getPrototypeOf = __webpack_require__(56);
var ITERATOR = __webpack_require__(8)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(48);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(3) && !__webpack_require__(12)(function () {
  return Object.defineProperty(__webpack_require__(32)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(6);
var document = __webpack_require__(1).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(4);
var toIObject = __webpack_require__(7);
var arrayIndexOf = __webpack_require__(52)(false);
var IE_PROTO = __webpack_require__(21)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(34);
var hiddenKeys = __webpack_require__(23).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(27);
var createDesc = __webpack_require__(13);
var toIObject = __webpack_require__(7);
var toPrimitive = __webpack_require__(17);
var has = __webpack_require__(4);
var IE8_DOM_DEFINE = __webpack_require__(31);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(3) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _stringify=__webpack_require__(40);var _stringify2=_interopRequireDefault(_stringify);var _classCallCheck2=__webpack_require__(42);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2=__webpack_require__(43);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _createClass2=__webpack_require__(72);var _createClass3=_interopRequireDefault(_createClass2);var _inherits2=__webpack_require__(76);var _inherits3=_interopRequireDefault(_inherits2);var _md5Es=__webpack_require__(84);var _md5Es2=_interopRequireDefault(_md5Es);var _clappr=__webpack_require__(85);var _style=__webpack_require__(86);var _style2=_interopRequireDefault(_style);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var RateMediaPlugin=function(_UICorePlugin){(0,_inherits3.default)(RateMediaPlugin,_UICorePlugin);RateMediaPlugin.prototype.saveConfig=function saveConfig(config){if(_clappr.Browser.hasLocalstorage){try{localStorage['clappr.'+document.domain+'.'+this.name]=(0,_stringify2.default)(config);return true;}catch(e){}}RateMediaPlugin._localStorage=config;};(0,_createClass3.default)(RateMediaPlugin,[{key:'name',get:function get(){return'rate-media-plugin';}},{key:'attributes',get:function get(){return{'class':this.name};}},{key:'stylesheet',get:function get(){return _clappr.Styler.getStyleFor(_style2.default,{baseUrl:this.options.baseUrl});}},{key:'persistConfig',get:function get(){if(_clappr.Browser.hasLocalstorage){var config=localStorage['clappr.'+document.domain+'.'+this.name];return config?JSON.parse(config):{};}return RateMediaPlugin._localStorage||{};}}]);function RateMediaPlugin(core){(0,_classCallCheck3.default)(this,RateMediaPlugin);var _this=(0,_possibleConstructorReturn3.default)(this,_UICorePlugin.call(this,core));_this._mediaControlVisible=false;_this._stopped=true;_this._ready=false;var options=_this._getOptions();_this._enabled=typeof options.enabled==="undefined"||!!options.enabled;_this._visible=false;_this._renderPlugin();// so that it fades in on load
_this._enableTimeoutId=setTimeout(function(){_this._enableTimeoutId=null;_this._ready=true;_this._renderPlugin();},0);return _this;}RateMediaPlugin.prototype.bindEvents=function bindEvents(){this.listenTo(this.core.mediaControl,_clappr.Events.MEDIACONTROL_CONTAINERCHANGED,this._onMediaControlContainerChanged);};RateMediaPlugin.prototype.unBindEvents=function unBindEvents(){this.stopListening(this.core.mediaControl,_clappr.Events.MEDIACONTROL_CONTAINERCHANGED,null);};RateMediaPlugin.prototype._onMediaControlContainerChanged=function _onMediaControlContainerChanged(){this._bindContainerEvents();this._appendElToContainer();};RateMediaPlugin.prototype._bindContainerEvents=function _bindContainerEvents(){if(this._oldContainer){this.stopListening(this._oldContainer,_clappr.Events.CONTAINER_MEDIACONTROL_SHOW,this._onMediaControlShow);this.stopListening(this._oldContainer,_clappr.Events.CONTAINER_MEDIACONTROL_HIDE,this._onMediaControlHide);this.stopListening(this._oldContainer,_clappr.Events.CONTAINER_STOP,this._onStop);this.stopListening(this._oldContainer,_clappr.Events.CONTAINER_ENDED,this._onStop);this.stopListening(this._oldContainer,_clappr.Events.CONTAINER_PLAY,this._onPlay);}this._oldContainer=this.core.mediaControl.container;this.listenTo(this.core.mediaControl.container,_clappr.Events.CONTAINER_MEDIACONTROL_SHOW,this._onMediaControlShow);this.listenTo(this.core.mediaControl.container,_clappr.Events.CONTAINER_MEDIACONTROL_HIDE,this._onMediaControlHide);this.listenTo(this.core.mediaControl.container,_clappr.Events.CONTAINER_STOP,this._onStop);this.listenTo(this.core.mediaControl.container,_clappr.Events.CONTAINER_ENDED,this._onStop);this.listenTo(this.core.mediaControl.container,_clappr.Events.CONTAINER_PLAY,this._onPlay);};RateMediaPlugin.prototype.reload=function reload(){this.unBindEvents();this.bindEvents();};RateMediaPlugin.prototype._getOptions=function _getOptions(){if(!("rateMediaPlugin"in this.core.options)){throw"'rateMediaPlugin' property missing from options object.";}return this.core.options.rateMediaPlugin;};RateMediaPlugin.prototype._onStop=function _onStop(){this._stopped=true;this._renderPlugin();};RateMediaPlugin.prototype._onPlay=function _onPlay(){this._stopped=false;this._renderPlugin();};RateMediaPlugin.prototype._onMediaControlShow=function _onMediaControlShow(){this._mediaControlVisible=true;this._renderPlugin();};RateMediaPlugin.prototype._onMediaControlHide=function _onMediaControlHide(){this._mediaControlVisible=false;this._renderPlugin();};RateMediaPlugin.prototype._renderPlugin=function _renderPlugin(){var show=this._visible=this._ready&&this._enabled&&(this._stopped||this._mediaControlVisible);this._$headingContainer.attr("data-visible",show?"1":"0");};RateMediaPlugin.prototype._appendElToContainer=function _appendElToContainer(){this.core.mediaControl.container.$el.append(this.el);};RateMediaPlugin.prototype.setEnabled=function setEnabled(enabled){this._enabled=!!enabled;this._renderPlugin();};RateMediaPlugin.prototype._re_render=function _re_render(){this.render();this._renderPlugin();};RateMediaPlugin.prototype.render=function render(){var $el=(0,_clappr.$)(this.el).empty();var $container=this._$headingContainer=(0,_clappr.$)("<div />").addClass("rate-media-container").attr("data-visible","0");this._renderButtons();$el.append($container);$el.append(this.stylesheet);return this;};RateMediaPlugin.prototype._renderButtons=function _renderButtons(){var _this2=this;var $container=this._$headingContainer;var buttons=this._getOptions().buttons;var _loop=function _loop(key){var button=buttons[key];var $button=(0,_clappr.$)("<button/>").addClass(key).attr("data-button-type",key).attr("title",button.text);var $button_circle=(0,_clappr.$)("<div/>").addClass("circle");var $button_icon=(0,_clappr.$)("<div/>").addClass(button.icon.default||"thumbs-up");var hash=_md5Es2.default.hash(button.url);if(_this2.persistConfig[hash])$button.addClass("clicked");$button.append($button_circle).append($button_icon).click(function(e){e.preventDefault();e.stopImmediatePropagation();var config=_this2.persistConfig;if(_this2._visible&&!config[hash]){_clappr.$.ajax({url:button.url,type:'POST',cache:false,xhrFields:{withCredentials:true},success:function success(result,status,xhr){config[hash]=true;_this2.saveConfig(config);_this2._re_render();},error:function error(xhr,status,_error){console.log('Error: '+_error);}});}});$container.append($button);};for(var key in buttons){_loop(key);}};RateMediaPlugin.prototype.destroy=function destroy(){if(this._enableTimeoutId){clearTimeout(this._enableTimeoutId);this._enableTimeoutId=null;}};return RateMediaPlugin;}(_clappr.UICorePlugin);exports.default=RateMediaPlugin;module.exports=exports['default'];

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(41), __esModule: true };

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(0);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(28);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(45), __esModule: true };

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(46);
__webpack_require__(58);
module.exports = __webpack_require__(25).f('iterator');


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(47)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(29)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(15);
var defined = __webpack_require__(16);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(19);
var descriptor = __webpack_require__(13);
var setToStringTag = __webpack_require__(24);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(5)(IteratorPrototype, __webpack_require__(8)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(2);
var anObject = __webpack_require__(10);
var getKeys = __webpack_require__(20);

module.exports = __webpack_require__(3) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(35);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(7);
var toLength = __webpack_require__(53);
var toAbsoluteIndex = __webpack_require__(54);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
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
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(15);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(15);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(1).document;
module.exports = document && document.documentElement;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(4);
var toObject = __webpack_require__(57);
var IE_PROTO = __webpack_require__(21)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(16);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(59);
var global = __webpack_require__(1);
var hide = __webpack_require__(5);
var Iterators = __webpack_require__(18);
var TO_STRING_TAG = __webpack_require__(8)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(60);
var step = __webpack_require__(61);
var Iterators = __webpack_require__(18);
var toIObject = __webpack_require__(7);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(29)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(63), __esModule: true };

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(64);
__webpack_require__(69);
__webpack_require__(70);
__webpack_require__(71);
module.exports = __webpack_require__(0).Symbol;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(1);
var has = __webpack_require__(4);
var DESCRIPTORS = __webpack_require__(3);
var $export = __webpack_require__(9);
var redefine = __webpack_require__(33);
var META = __webpack_require__(65).KEY;
var $fails = __webpack_require__(12);
var shared = __webpack_require__(22);
var setToStringTag = __webpack_require__(24);
var uid = __webpack_require__(14);
var wks = __webpack_require__(8);
var wksExt = __webpack_require__(25);
var wksDefine = __webpack_require__(26);
var enumKeys = __webpack_require__(66);
var isArray = __webpack_require__(67);
var anObject = __webpack_require__(10);
var isObject = __webpack_require__(6);
var toIObject = __webpack_require__(7);
var toPrimitive = __webpack_require__(17);
var createDesc = __webpack_require__(13);
var _create = __webpack_require__(19);
var gOPNExt = __webpack_require__(68);
var $GOPD = __webpack_require__(38);
var $DP = __webpack_require__(2);
var $keys = __webpack_require__(20);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(37).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(27).f = $propertyIsEnumerable;
  __webpack_require__(36).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(11)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(5)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(14)('meta');
var isObject = __webpack_require__(6);
var has = __webpack_require__(4);
var setDesc = __webpack_require__(2).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(12)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(20);
var gOPS = __webpack_require__(36);
var pIE = __webpack_require__(27);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(35);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(7);
var gOPN = __webpack_require__(37).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 69 */
/***/ (function(module, exports) {



/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(26)('asyncIterator');


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(26)('observable');


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(73);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(74), __esModule: true };

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(75);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(9);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(3), 'Object', { defineProperty: __webpack_require__(2).f });


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(77);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(81);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(28);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(78), __esModule: true };

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(79);
module.exports = __webpack_require__(0).Object.setPrototypeOf;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(9);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(80).set });


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(6);
var anObject = __webpack_require__(10);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(30)(Function.call, __webpack_require__(38).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(82), __esModule: true };

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(83);
var $Object = __webpack_require__(0).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(9);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(19) });


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,r){ true?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports["md5-es"]=r():e["md5-es"]=r()}(this,function(){return function(e){function r(t){if(n[t])return n[t].exports;var f=n[t]={i:t,l:!1,exports:{}};return e[t].call(f.exports,f,f.exports,r),f.l=!0,f.exports}var n={};return r.m=e,r.c=n,r.i=function(e){return e},r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=1)}([function(e,r,n){"use strict";function t(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var f=function(){function e(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(r,n,t){return n&&e(r.prototype,n),t&&e(r,t),r}}(),i=function(){function e(){t(this,e)}return f(e,null,[{key:"hash",value:function(r){return e.hex(e.md51(r))}},{key:"md5cycle",value:function(r,n){var t=r[0],f=r[1],i=r[2],u=r[3];t=e.ff(t,f,i,u,n[0],7,-680876936),u=e.ff(u,t,f,i,n[1],12,-389564586),i=e.ff(i,u,t,f,n[2],17,606105819),f=e.ff(f,i,u,t,n[3],22,-1044525330),t=e.ff(t,f,i,u,n[4],7,-176418897),u=e.ff(u,t,f,i,n[5],12,1200080426),i=e.ff(i,u,t,f,n[6],17,-1473231341),f=e.ff(f,i,u,t,n[7],22,-45705983),t=e.ff(t,f,i,u,n[8],7,1770035416),u=e.ff(u,t,f,i,n[9],12,-1958414417),i=e.ff(i,u,t,f,n[10],17,-42063),f=e.ff(f,i,u,t,n[11],22,-1990404162),t=e.ff(t,f,i,u,n[12],7,1804603682),u=e.ff(u,t,f,i,n[13],12,-40341101),i=e.ff(i,u,t,f,n[14],17,-1502002290),f=e.ff(f,i,u,t,n[15],22,1236535329),t=e.gg(t,f,i,u,n[1],5,-165796510),u=e.gg(u,t,f,i,n[6],9,-1069501632),i=e.gg(i,u,t,f,n[11],14,643717713),f=e.gg(f,i,u,t,n[0],20,-373897302),t=e.gg(t,f,i,u,n[5],5,-701558691),u=e.gg(u,t,f,i,n[10],9,38016083),i=e.gg(i,u,t,f,n[15],14,-660478335),f=e.gg(f,i,u,t,n[4],20,-405537848),t=e.gg(t,f,i,u,n[9],5,568446438),u=e.gg(u,t,f,i,n[14],9,-1019803690),i=e.gg(i,u,t,f,n[3],14,-187363961),f=e.gg(f,i,u,t,n[8],20,1163531501),t=e.gg(t,f,i,u,n[13],5,-1444681467),u=e.gg(u,t,f,i,n[2],9,-51403784),i=e.gg(i,u,t,f,n[7],14,1735328473),f=e.gg(f,i,u,t,n[12],20,-1926607734),t=e.hh(t,f,i,u,n[5],4,-378558),u=e.hh(u,t,f,i,n[8],11,-2022574463),i=e.hh(i,u,t,f,n[11],16,1839030562),f=e.hh(f,i,u,t,n[14],23,-35309556),t=e.hh(t,f,i,u,n[1],4,-1530992060),u=e.hh(u,t,f,i,n[4],11,1272893353),i=e.hh(i,u,t,f,n[7],16,-155497632),f=e.hh(f,i,u,t,n[10],23,-1094730640),t=e.hh(t,f,i,u,n[13],4,681279174),u=e.hh(u,t,f,i,n[0],11,-358537222),i=e.hh(i,u,t,f,n[3],16,-722521979),f=e.hh(f,i,u,t,n[6],23,76029189),t=e.hh(t,f,i,u,n[9],4,-640364487),u=e.hh(u,t,f,i,n[12],11,-421815835),i=e.hh(i,u,t,f,n[15],16,530742520),f=e.hh(f,i,u,t,n[2],23,-995338651),t=e.ii(t,f,i,u,n[0],6,-198630844),u=e.ii(u,t,f,i,n[7],10,1126891415),i=e.ii(i,u,t,f,n[14],15,-1416354905),f=e.ii(f,i,u,t,n[5],21,-57434055),t=e.ii(t,f,i,u,n[12],6,1700485571),u=e.ii(u,t,f,i,n[3],10,-1894986606),i=e.ii(i,u,t,f,n[10],15,-1051523),f=e.ii(f,i,u,t,n[1],21,-2054922799),t=e.ii(t,f,i,u,n[8],6,1873313359),u=e.ii(u,t,f,i,n[15],10,-30611744),i=e.ii(i,u,t,f,n[6],15,-1560198380),f=e.ii(f,i,u,t,n[13],21,1309151649),t=e.ii(t,f,i,u,n[4],6,-145523070),u=e.ii(u,t,f,i,n[11],10,-1120210379),i=e.ii(i,u,t,f,n[2],15,718787259),f=e.ii(f,i,u,t,n[9],21,-343485551),r[0]=t+r[0]&4294967295,r[1]=f+r[1]&4294967295,r[2]=i+r[2]&4294967295,r[3]=u+r[3]&4294967295}},{key:"cmn",value:function(e,r,n,t,f,i){return((r=(r+e&4294967295)+(t+i&4294967295)&4294967295)<<f|r>>>32-f)+n&4294967295}},{key:"ff",value:function(r,n,t,f,i,u,o){return e.cmn(n&t|~n&f,r,n,i,u,o)}},{key:"gg",value:function(r,n,t,f,i,u,o){return e.cmn(n&f|t&~f,r,n,i,u,o)}},{key:"hh",value:function(r,n,t,f,i,u,o){return e.cmn(n^t^f,r,n,i,u,o)}},{key:"ii",value:function(r,n,t,f,i,u,o){return e.cmn(t^(n|~f),r,n,i,u,o)}},{key:"md51",value:function(r){var n=r.length,t=[1732584193,-271733879,-1732584194,271733878],f=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],i=0,u=64;for(u;u<=n;u+=64)e.md5cycle(t,e.md5blk(r.substring(u-64,u)));for(r=r.substring(u-64),u=0,i=r.length,u;u<i;u++)f[u>>2]|=r.charCodeAt(u)<<(u%4<<3);if(f[u>>2]|=128<<(u%4<<3),u>55)for(e.md5cycle(t,f),u=0;u<16;u++)f[u]=0;return f[14]=8*n,e.md5cycle(t,f),t}},{key:"md5blk",value:function(e){var r=[],n=0;for(n;n<64;n+=4)r[n>>2]=e.charCodeAt(n)+(e.charCodeAt(n+1)<<8)+(e.charCodeAt(n+2)<<16)+(e.charCodeAt(n+3)<<24);return r}},{key:"rhex",value:function(r){var n="";return n+=e.hexArray[r>>4&15]+e.hexArray[r>>0&15],n+=e.hexArray[r>>12&15]+e.hexArray[r>>8&15],n+=e.hexArray[r>>20&15]+e.hexArray[r>>16&15],n+=e.hexArray[r>>28&15]+e.hexArray[r>>24&15]}},{key:"hex",value:function(r){var n=r.length,t=0;for(t;t<n;t++)r[t]=e.rhex(r[t]);return r.join("")}}]),e}();i.hexArray=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"],r.default=i},function(e,r,n){e.exports=n(0)}])});
//# sourceMappingURL=md5-es.min.js.map

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_85__;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(87)(false);
// imports


// module
exports.push([module.i, ".rate-media-plugin .rate-media-container {\n  display: block;\n  position: absolute;\n  top: -80px;\n  left: 0;\n  right: 0;\n  z-index: 999;\n  margin: 0;\n  padding: 8px 10px;\n  text-align: center;\n  transition: .5s ease-out; }\n  .rate-media-plugin .rate-media-container button {\n    border: 1px solid transparent;\n    background-color: initial;\n    margin: 5px;\n    border-radius: 100%;\n    position: relative;\n    outline: none;\n    pointer-events: auto;\n    cursor: pointer;\n    display: inline-block;\n    vertical-align: middle;\n    width: 50px;\n    height: 50px;\n    line-height: 50px;\n    opacity: 0.3; }\n    .rate-media-plugin .rate-media-container button:hover {\n      opacity: 1; }\n      .rate-media-plugin .rate-media-container button:hover div.circle {\n        opacity: 0.7; }\n      .rate-media-plugin .rate-media-container button:hover div.thumbs-up {\n        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDEwMDAgMTAwMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwMCAxMDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48bWV0YWRhdGE+IFN2ZyBWZWN0b3IgSWNvbnMgOiBodHRwOi8vd3d3Lm9ubGluZXdlYmZvbnRzLmNvbS9pY29uIDwvbWV0YWRhdGE+PGc+PGcgaWQ9Ikxpa2VfMiI+PHBhdGggc3R5bGU9ImZpbGw6IzI4YTc0NSIgZD0iTTg1Ni4xLDU1MS43YzQyLDEuOSw3Ny41LTMxLjEsNzkuNC03My44YzEuOC00Mi43LTI3LjctODEuMS02OS42LTgyLjlsLTI3OC43LTM1YzAsMCw1OC4xLTk3LjIsNTguMS0yNDEuMWMwLTk2LTY4LjYtMTA4LjktMTA4LjktMTA4LjlDNTA0LjYsMTAsNDk2LDcxLjQsNDk2LDcxLjRINDk2Yy03LjIsMzkuNC0xNi41LDczLjgtNDksMTM3LjJjLTM2LjQsNzEtODUuOSw2NC40LTE0My44LDEyNy42Yy0xMC4yLDExLjEtMjMuOSwyOS41LTM3LjMsNTIuMmMtMS4xLDEuMi0yLjEsMi45LTMuMSw1LjJjLTEuMiwyLjgtMi42LDQuOC0zLjksNy4zYy0yLjIsNC4xLTQuNCw4LjEtNi41LDEyLjRjLTM1LjgsMzUuOC05MS42LDMyLjEtMTE1LjMsMzIuMWMtNDcuNiwwLTcyLjYsMjcuNy03Mi42LDcyLjZsMCwzMzEuOGMwLDUwLjQsMjAuNiw2Ny40LDcyLjYsNjcuNGg3Mi42YzM2LjUsMCw2NS4yLDIwLjksMTA4LjksMzYuM2M1OS45LDIwLjcsMTQ5LjMsMzYuMywzMDMuNCwzNi4zYzI2LjksMCwxMTAuNSwwLjEsMTEwLjUsMC4xYzI1LjYsMCw0Ni4xLTExLjcsNjEtMjUuOGM1LjYtNS40LDExLjUtMTMuMiwxNC4xLTI4LjRjMC40LTIuNCwwLjgtMTIuMiwwLjgtMTMuNmMxLjktNDMuNS0yNC40LTU5LjMtMzkuMy02NC4yYzAuNC0wLjEsMC4xLTAuNSwwLjktMC41bDQ3LjMsMi4xYzQyLDEuOSw4My40LTI4LjMsODMuNC03OS44YzAtNDIuNi0zNC42LTcyLjctNzYuNC03NC44bDI1LjEsMS4yYzQyLDEuOCw3Ny41LTMxLjIsNzkuNC03My45QzkzMC41LDU4OS43LDg5OCw1NTMuNiw4NTYuMSw1NTEuN3oiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9nPjwvc3ZnPg==); }\n      .rate-media-plugin .rate-media-container button:hover div.thumbs-down {\n        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjkzLjY2NCAyOTMuNjY0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyOTMuNjY0IDI5My42NjQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBmaWxsPSIjMjhhNzQ1IiBkPSJNMjkyLjAyOCwxMTYuMjE4YzAtMTMuNjU2LTExLjA3MS0yNC43MjgtMjQuNzI4LTI0LjcyOGgtNS41MmM3LjAyMy00LjM2MiwxMS43MDMtMTIuMTQyLDExLjcwMy0yMS4wMThjMC0xMy42NTYtMTEuMDcxLTI0LjcyOC0yNC43MjgtMjQuNzI4aC03Ljk5NGM3LjAyMy00LjM2MiwxMS43MDMtMTIuMTQyLDExLjcwMy0yMS4wMThDMjUyLjQ2NCwxMS4wNzEsMjQxLjM5MywwLDIyNy43MzcsMGMtMTEuODg1LDAtMTI0LjEzNCwwLjAwMS0xMjYuMTg1LDAuMDAxYy0xOS4zMDEsMC0zNi4zNSw5LjgyLTQ2LjQxNywyNC43MjdIMjIuMTEyYy0xMS4zMDgsMC0yMC40NzYsOS4xNjctMjAuNDc2LDIwLjQ3NnY3OS42MzljMCwxMS4zMDgsOS4xNjcsMjAuNDc1LDIwLjQ3NiwyMC40NzVINDYuOTRjMi4yMjQsOS42NTEsNy4xMjgsMTguNTA0LDE0LjIyOSwyNS43ODRjNDAuMzgzLDQxLjM5OSw2Ni4yNDQsNzguNTU4LDgyLjc1NCwxMDguMzg1YzcuMzM4LDEzLjI1NywyMC44MDcsMTcuNDk4LDMzLjE0MiwxMS41M2MxMS4wNzQtNS4zNTgsMTYuMzYxLTE3Ljg3MSwxMy4wMS0yOS4yOThjLTUuODItMTkuOTA3LTExLjk0OS00My4yOTMtMjkuMDk1LTc1LjAyOWg5Mi4xMTNjMTMuNjU2LDAsMjQuNzI4LTExLjA3MSwyNC43MjgtMjQuNzI4YzAtOC44NzYtNC42NzktMTYuNjU2LTExLjcwMy0yMS4wMThoMS4xOEMyODAuOTU2LDE0MC45NDUsMjkyLjAyOCwxMjkuODc0LDI5Mi4wMjgsMTE2LjIxOHoiLz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48L3N2Zz4=); }\n      .rate-media-plugin .rate-media-container button:hover div.heart {\n        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIGlkPSJMYXllcl8zIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDE2IDE2IiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBmaWxsPSIjMjhhNzQ1IiBkPSJNMTMuMiwxLjJjLTItMC42LTQuNCwwLjMtNS4yLDIuMkM3LjIsMS41LDQuOCwwLjYsMi44LDEuMmMtMiwwLjYtMy41LDIuNi0yLjUsNS43YzEuNCw0LjEsNi44LDgsNy43LDguNWMwLjktMC42LDYuNC00LjQsNy43LTguNUMxNi42LDMuNywxNS4yLDEuOCwxMy4yLDEuMnoiLz48L3N2Zz4=); }\n    .rate-media-plugin .rate-media-container button.clicked div.thumbs-up {\n      background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDEwMDAgMTAwMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwMCAxMDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48bWV0YWRhdGE+IFN2ZyBWZWN0b3IgSWNvbnMgOiBodHRwOi8vd3d3Lm9ubGluZXdlYmZvbnRzLmNvbS9pY29uIDwvbWV0YWRhdGE+PGc+PGcgaWQ9Ikxpa2VfMiI+PHBhdGggc3R5bGU9ImZpbGw6IzI4YTc0NSIgZD0iTTg1Ni4xLDU1MS43YzQyLDEuOSw3Ny41LTMxLjEsNzkuNC03My44YzEuOC00Mi43LTI3LjctODEuMS02OS42LTgyLjlsLTI3OC43LTM1YzAsMCw1OC4xLTk3LjIsNTguMS0yNDEuMWMwLTk2LTY4LjYtMTA4LjktMTA4LjktMTA4LjlDNTA0LjYsMTAsNDk2LDcxLjQsNDk2LDcxLjRINDk2Yy03LjIsMzkuNC0xNi41LDczLjgtNDksMTM3LjJjLTM2LjQsNzEtODUuOSw2NC40LTE0My44LDEyNy42Yy0xMC4yLDExLjEtMjMuOSwyOS41LTM3LjMsNTIuMmMtMS4xLDEuMi0yLjEsMi45LTMuMSw1LjJjLTEuMiwyLjgtMi42LDQuOC0zLjksNy4zYy0yLjIsNC4xLTQuNCw4LjEtNi41LDEyLjRjLTM1LjgsMzUuOC05MS42LDMyLjEtMTE1LjMsMzIuMWMtNDcuNiwwLTcyLjYsMjcuNy03Mi42LDcyLjZsMCwzMzEuOGMwLDUwLjQsMjAuNiw2Ny40LDcyLjYsNjcuNGg3Mi42YzM2LjUsMCw2NS4yLDIwLjksMTA4LjksMzYuM2M1OS45LDIwLjcsMTQ5LjMsMzYuMywzMDMuNCwzNi4zYzI2LjksMCwxMTAuNSwwLjEsMTEwLjUsMC4xYzI1LjYsMCw0Ni4xLTExLjcsNjEtMjUuOGM1LjYtNS40LDExLjUtMTMuMiwxNC4xLTI4LjRjMC40LTIuNCwwLjgtMTIuMiwwLjgtMTMuNmMxLjktNDMuNS0yNC40LTU5LjMtMzkuMy02NC4yYzAuNC0wLjEsMC4xLTAuNSwwLjktMC41bDQ3LjMsMi4xYzQyLDEuOSw4My40LTI4LjMsODMuNC03OS44YzAtNDIuNi0zNC42LTcyLjctNzYuNC03NC44bDI1LjEsMS4yYzQyLDEuOCw3Ny41LTMxLjIsNzkuNC03My45QzkzMC41LDU4OS43LDg5OCw1NTMuNiw4NTYuMSw1NTEuN3oiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9nPjwvc3ZnPg==); }\n    .rate-media-plugin .rate-media-container button.clicked div.thumbs-down {\n      background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjkzLjY2NCAyOTMuNjY0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyOTMuNjY0IDI5My42NjQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBmaWxsPSIjMjhhNzQ1IiBkPSJNMjkyLjAyOCwxMTYuMjE4YzAtMTMuNjU2LTExLjA3MS0yNC43MjgtMjQuNzI4LTI0LjcyOGgtNS41MmM3LjAyMy00LjM2MiwxMS43MDMtMTIuMTQyLDExLjcwMy0yMS4wMThjMC0xMy42NTYtMTEuMDcxLTI0LjcyOC0yNC43MjgtMjQuNzI4aC03Ljk5NGM3LjAyMy00LjM2MiwxMS43MDMtMTIuMTQyLDExLjcwMy0yMS4wMThDMjUyLjQ2NCwxMS4wNzEsMjQxLjM5MywwLDIyNy43MzcsMGMtMTEuODg1LDAtMTI0LjEzNCwwLjAwMS0xMjYuMTg1LDAuMDAxYy0xOS4zMDEsMC0zNi4zNSw5LjgyLTQ2LjQxNywyNC43MjdIMjIuMTEyYy0xMS4zMDgsMC0yMC40NzYsOS4xNjctMjAuNDc2LDIwLjQ3NnY3OS42MzljMCwxMS4zMDgsOS4xNjcsMjAuNDc1LDIwLjQ3NiwyMC40NzVINDYuOTRjMi4yMjQsOS42NTEsNy4xMjgsMTguNTA0LDE0LjIyOSwyNS43ODRjNDAuMzgzLDQxLjM5OSw2Ni4yNDQsNzguNTU4LDgyLjc1NCwxMDguMzg1YzcuMzM4LDEzLjI1NywyMC44MDcsMTcuNDk4LDMzLjE0MiwxMS41M2MxMS4wNzQtNS4zNTgsMTYuMzYxLTE3Ljg3MSwxMy4wMS0yOS4yOThjLTUuODItMTkuOTA3LTExLjk0OS00My4yOTMtMjkuMDk1LTc1LjAyOWg5Mi4xMTNjMTMuNjU2LDAsMjQuNzI4LTExLjA3MSwyNC43MjgtMjQuNzI4YzAtOC44NzYtNC42NzktMTYuNjU2LTExLjcwMy0yMS4wMThoMS4xOEMyODAuOTU2LDE0MC45NDUsMjkyLjAyOCwxMjkuODc0LDI5Mi4wMjgsMTE2LjIxOHoiLz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48L3N2Zz4=); }\n    .rate-media-plugin .rate-media-container button.clicked div.heart {\n      background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIGlkPSJMYXllcl8zIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDE2IDE2IiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBmaWxsPSIjMjhhNzQ1IiBkPSJNMTMuMiwxLjJjLTItMC42LTQuNCwwLjMtNS4yLDIuMkM3LjIsMS41LDQuOCwwLjYsMi44LDEuMmMtMiwwLjYtMy41LDIuNi0yLjUsNS43YzEuNCw0LjEsNi44LDgsNy43LDguNWMwLjktMC42LDYuNC00LjQsNy43LTguNUMxNi42LDMuNywxNS4yLDEuOCwxMy4yLDEuMnoiLz48L3N2Zz4=); }\n    .rate-media-plugin .rate-media-container button div {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background-repeat: no-repeat;\n      background-position: center center;\n      background-size: 60%; }\n      .rate-media-plugin .rate-media-container button div.circle {\n        background-color: #fefefe;\n        border-radius: 100%;\n        border: 1px solid #888;\n        filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.9)); }\n      .rate-media-plugin .rate-media-container button div.thumbs-up {\n        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDEwMDAgMTAwMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwMCAxMDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48bWV0YWRhdGE+IFN2ZyBWZWN0b3IgSWNvbnMgOiBodHRwOi8vd3d3Lm9ubGluZXdlYmZvbnRzLmNvbS9pY29uIDwvbWV0YWRhdGE+PGc+PGcgaWQ9Ikxpa2VfMiI+PHBhdGggc3R5bGU9ImZpbGw6ICM4ODgiIGQ9Ik04NTYuMSw1NTEuN2M0MiwxLjksNzcuNS0zMS4xLDc5LjQtNzMuOGMxLjgtNDIuNy0yNy43LTgxLjEtNjkuNi04Mi45bC0yNzguNy0zNWMwLDAsNTguMS05Ny4yLDU4LjEtMjQxLjFjMC05Ni02OC42LTEwOC45LTEwOC45LTEwOC45QzUwNC42LDEwLDQ5Niw3MS40LDQ5Niw3MS40SDQ5NmMtNy4yLDM5LjQtMTYuNSw3My44LTQ5LDEzNy4yYy0zNi40LDcxLTg1LjksNjQuNC0xNDMuOCwxMjcuNmMtMTAuMiwxMS4xLTIzLjksMjkuNS0zNy4zLDUyLjJjLTEuMSwxLjItMi4xLDIuOS0zLjEsNS4yYy0xLjIsMi44LTIuNiw0LjgtMy45LDcuM2MtMi4yLDQuMS00LjQsOC4xLTYuNSwxMi40Yy0zNS44LDM1LjgtOTEuNiwzMi4xLTExNS4zLDMyLjFjLTQ3LjYsMC03Mi42LDI3LjctNzIuNiw3Mi42bDAsMzMxLjhjMCw1MC40LDIwLjYsNjcuNCw3Mi42LDY3LjRoNzIuNmMzNi41LDAsNjUuMiwyMC45LDEwOC45LDM2LjNjNTkuOSwyMC43LDE0OS4zLDM2LjMsMzAzLjQsMzYuM2MyNi45LDAsMTEwLjUsMC4xLDExMC41LDAuMWMyNS42LDAsNDYuMS0xMS43LDYxLTI1LjhjNS42LTUuNCwxMS41LTEzLjIsMTQuMS0yOC40YzAuNC0yLjQsMC44LTEyLjIsMC44LTEzLjZjMS45LTQzLjUtMjQuNC01OS4zLTM5LjMtNjQuMmMwLjQtMC4xLDAuMS0wLjUsMC45LTAuNWw0Ny4zLDIuMWM0MiwxLjksODMuNC0yOC4zLDgzLjQtNzkuOGMwLTQyLjYtMzQuNi03Mi43LTc2LjQtNzQuOGwyNS4xLDEuMmM0MiwxLjgsNzcuNS0zMS4yLDc5LjQtNzMuOUM5MzAuNSw1ODkuNyw4OTgsNTUzLjYsODU2LjEsNTUxLjd6Ii8+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjwvZz48L3N2Zz4=); }\n      .rate-media-plugin .rate-media-container button div.thumbs-down {\n        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjkzLjY2NCAyOTMuNjY0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyOTMuNjY0IDI5My42NjQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBmaWxsPSIjODg4IiBkPSJNMjkyLjAyOCwxMTYuMjE4YzAtMTMuNjU2LTExLjA3MS0yNC43MjgtMjQuNzI4LTI0LjcyOGgtNS41MmM3LjAyMy00LjM2MiwxMS43MDMtMTIuMTQyLDExLjcwMy0yMS4wMThjMC0xMy42NTYtMTEuMDcxLTI0LjcyOC0yNC43MjgtMjQuNzI4aC03Ljk5NGM3LjAyMy00LjM2MiwxMS43MDMtMTIuMTQyLDExLjcwMy0yMS4wMThDMjUyLjQ2NCwxMS4wNzEsMjQxLjM5MywwLDIyNy43MzcsMGMtMTEuODg1LDAtMTI0LjEzNCwwLjAwMS0xMjYuMTg1LDAuMDAxYy0xOS4zMDEsMC0zNi4zNSw5LjgyLTQ2LjQxNywyNC43MjdIMjIuMTEyYy0xMS4zMDgsMC0yMC40NzYsOS4xNjctMjAuNDc2LDIwLjQ3NnY3OS42MzljMCwxMS4zMDgsOS4xNjcsMjAuNDc1LDIwLjQ3NiwyMC40NzVINDYuOTRjMi4yMjQsOS42NTEsNy4xMjgsMTguNTA0LDE0LjIyOSwyNS43ODRjNDAuMzgzLDQxLjM5OSw2Ni4yNDQsNzguNTU4LDgyLjc1NCwxMDguMzg1YzcuMzM4LDEzLjI1NywyMC44MDcsMTcuNDk4LDMzLjE0MiwxMS41M2MxMS4wNzQtNS4zNTgsMTYuMzYxLTE3Ljg3MSwxMy4wMS0yOS4yOThjLTUuODItMTkuOTA3LTExLjk0OS00My4yOTMtMjkuMDk1LTc1LjAyOWg5Mi4xMTNjMTMuNjU2LDAsMjQuNzI4LTExLjA3MSwyNC43MjgtMjQuNzI4YzAtOC44NzYtNC42NzktMTYuNjU2LTExLjcwMy0yMS4wMThoMS4xOEMyODAuOTU2LDE0MC45NDUsMjkyLjAyOCwxMjkuODc0LDI5Mi4wMjgsMTE2LjIxOHoiLz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48L3N2Zz4=); }\n      .rate-media-plugin .rate-media-container button div.heart {\n        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIGlkPSJMYXllcl8zIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDE2IDE2IiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBmaWxsPSIjODg4IiBkPSJNMTMuMiwxLjJjLTItMC42LTQuNCwwLjMtNS4yLDIuMkM3LjIsMS41LDQuOCwwLjYsMi44LDEuMmMtMiwwLjYtMy41LDIuNi0yLjUsNS43YzEuNCw0LjEsNi44LDgsNy43LDguNWMwLjktMC42LDYuNC00LjQsNy43LTguNUMxNi42LDMuNywxNS4yLDEuOCwxMy4yLDEuMnoiLz48L3N2Zz4=); }\n  .rate-media-plugin .rate-media-container[data-visible=\"1\"] {\n    top: 0; }\n", ""]);

// exports


/***/ }),
/* 87 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ })
/******/ ]);
});