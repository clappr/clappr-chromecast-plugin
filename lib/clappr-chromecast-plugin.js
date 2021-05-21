(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@clappr/player"));
	else if(typeof define === 'function' && define.amd)
		define(["@clappr/player"], factory);
	else if(typeof exports === 'object')
		exports["ChromecastPlugin"] = factory(require("@clappr/player"));
	else
		root["ChromecastPlugin"] = factory(root["Clappr"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = "<div class=\"chromecast-playback-background\"></div>\n<div class=\"chromecast-playback-overlay\"></div>\n";

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(9);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".chromecast-playback{height:100%;width:100%}.chromecast-playback .chromecast-playback-background,.chromecast-playback .chromecast-playback-overlay{position:absolute;height:100%;width:100%}.chromecast-playback .chromecast-playback-background{background-size:contain}.chromecast-playback .chromecast-playback-overlay{background-color:#000;opacity:0.4}.chromecast-button{background:transparent;border:0;width:32px;height:32px;font-size:22px;line-height:32px;letter-spacing:0;margin:0 6px;color:#fff;opacity:0.5;vertical-align:middle;text-align:left;cursor:pointer;-webkit-font-smoothing:antialiased;transition:all 0.1s ease}.chromecast-button:hover{opacity:0.75;text-shadow:rgba(255,255,255,0.8) 0 0 5px}.chromecast-button:focus{outline:none}.chromecast-button svg{width:24px;height:24px}.chromecast-button svg #cast,.chromecast-button svg #cast-on,.chromecast-button svg #Path{fill:#fff;stroke:#fff;stroke-width:0.5px}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object),
    nativeMax = Math.max;

/** Detect if properties shadowing those on `Object.prototype` are non-enumerable. */
var nonEnumShadows = !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf');

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Assigns own enumerable string keyed properties of source objects to the
 * destination object. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object` and is loosely based on
 * [`Object.assign`](https://mdn.io/Object/assign).
 *
 * @static
 * @memberOf _
 * @since 0.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assignIn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assign({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'c': 3 }
 */
var assign = createAssigner(function(object, source) {
  if (nonEnumShadows || isPrototype(source) || isArrayLike(source)) {
    copyObject(source, keys(source), object);
    return;
  }
  for (var key in source) {
    if (hasOwnProperty.call(source, key)) {
      assignValue(object, key, source[key]);
    }
  }
});

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = assign;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\"><g id=\"Page-1\" fill=\"none\" fill-rule=\"evenodd\"><g id=\"ic_cast_black_24dp\"><g id=\"ic_remove_circle_white_24dp\"><path d=\"M1 18v3h3c0-1.66-1.34-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11zm20-7H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\" id=\"cast\" fill=\"#000\"></path><path id=\"bounds\" d=\"M0 0h24v24H0z\"></path></g></g></g></svg>"

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\"><g id=\"Page-1\" fill=\"none\" fill-rule=\"evenodd\"><g id=\"ic_cast0_black_24dp\"><g id=\"ic_remove_circle_white_24dp\"><path d=\"M1 18v3h3c0-1.66-1.34-3-3-3z\" id=\"Path\" fill=\"#000\"></path><path d=\"M1 14v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7z\" id=\"Path\" opacity=\".3\" fill=\"#000\"></path><path d=\"M1 10v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11z\" id=\"Path\" opacity=\".3\" fill=\"#000\"></path><path d=\"M21 3H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\" id=\"Path\" fill=\"#000\"></path><path id=\"bounds\" d=\"M0 0h24v24H0z\"></path></g></g></g></svg>"

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\"><g id=\"Page-1\" fill=\"none\" fill-rule=\"evenodd\"><g id=\"ic_cast1_black_24dp\"><g id=\"ic_remove_circle_white_24dp\"><path d=\"M1 18v3h3c0-1.66-1.34-3-3-3z\" id=\"Path\" opacity=\".3\" fill=\"#000\"></path><path d=\"M1 14v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7z\" id=\"Path\" fill=\"#000\"></path><path d=\"M1 10v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11z\" id=\"Path\" opacity=\".3\" fill=\"#000\"></path><path d=\"M21 3H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\" id=\"cast\" fill=\"#000\"></path><path id=\"bounds\" d=\"M0 0h24v24H0z\"></path></g></g></g></svg>"

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\"><g id=\"Page-1\" fill=\"none\" fill-rule=\"evenodd\"><g id=\"ic_cast2_black_24dp\"><g id=\"ic_remove_circle_white_24dp\"><path d=\"M1 18v3h3c0-1.66-1.34-3-3-3zM1 14v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7z\" id=\"Path\" opacity=\".3\" fill=\"#000\"></path><path d=\"M1 10v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11z\" id=\"Path\" fill=\"#000\"></path><path d=\"M21 3H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\" id=\"cast\" fill=\"#000\"></path><path id=\"bounds\" d=\"M0 0h24v24H0z\"></path></g></g></g></svg>"

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\"><g id=\"Page-1\" fill=\"none\" fill-rule=\"evenodd\"><g id=\"ic_cast_connected_black_24dp\"><g id=\"ic_remove_circle_white_24dp\"><path d=\"M1 18v3h3c0-1.66-1.34-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm18-7H5v1.63c3.96 1.28 7.09 4.41 8.37 8.37H19V7zM1 10v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11zm20-7H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\" id=\"cast-on\" fill=\"#000\"></path><path id=\"bounds\" d=\"M0 0h24v24H0z\"></path></g></g></g></svg>"

/***/ }),
/* 9 */
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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ chromecast_ChromecastPlugin; });

// EXTERNAL MODULE: external {"amd":"@clappr/player","commonjs":"@clappr/player","commonjs2":"@clappr/player","root":"Clappr"}
var player_root_Clappr_ = __webpack_require__(0);

// EXTERNAL MODULE: ./src/public/chromecast.html
var chromecast = __webpack_require__(1);
var chromecast_default = /*#__PURE__*/__webpack_require__.n(chromecast);

// CONCATENATED MODULE: ./src/chromecast_playback.js


const TICK_INTERVAL = 100;
class chromecast_playback_ChromecastPlayback extends player_root_Clappr_["Playback"] {
  get name() {
    return 'chromecast_playback';
  }

  get template() {
    return Object(player_root_Clappr_["template"])(chromecast_default.a);
  }

  get attributes() {
    return {
      class: 'chromecast-playback'
    };
  }

  get isReady() {
    return true;
  }

  constructor(options) {
    super(options);
    this.src = options.src;
    this.currentMedia = options.currentMedia;
    this.mediaControl = options.mediaControl;
    this.currentMedia.addUpdateListener(() => this.onMediaStatusUpdate());
    this.settings = options.settings;

    let noVolume = name => name != 'volume';

    this.settings.default && (this.settings.default = this.settings.default.filter(noVolume));
    this.settings.left && (this.settings.left = this.settings.left.filter(noVolume));
    this.settings.right && (this.settings.right = this.settings.right.filter(noVolume));
    this._closedCaptionsTracks = options.ccTracks || [];
    this._ccTrackId = -1;
    this._updateCCTrackID = options.updateCCTrackID;
  }

  get closedCaptionsTracks() {
    return this._closedCaptionsTracks;
  }

  get closedCaptionsTrackId() {
    return this._ccTrackId;
  }

  set closedCaptionsTrackId(trackID) {
    this._ccTrackId = trackID;

    this._updateCCTrackID(trackID);
  }

  render() {
    let template = this.template();
    this.$el.html(template);

    if (this.options.poster) {
      this.$('.chromecast-playback-background').css('background-image', 'url(' + this.options.poster + ')');
    } else {
      this.$('.chromecast-playback-background').css('background-color', '#666');
    }
  }

  play() {
    this.currentMedia.play();
  }

  pause() {
    this.stopTimer();
    this.currentMedia.pause();

    if (this.getPlaybackType() === player_root_Clappr_["Playback"].LIVE) {
      this.trigger(player_root_Clappr_["Events"].PLAYBACK_DVR, true);
    }
  }

  stop() {
    this.stopTimer();
    this.currentMedia.pause(); // FIXME: properly handle media stop
  }

  seek(time) {
    this.stopTimer();
    let request = new chrome.cast.media.SeekRequest();
    request.currentTime = time;
    this.currentMedia.seek(request, () => this.startTimer(), () => player_root_Clappr_["Log"].warn('seek failed'));

    if (this.getPlaybackType() === player_root_Clappr_["Playback"].LIVE) {
      // assume live if time within 30 seconds of end of live stream
      this.trigger(player_root_Clappr_["Events"].PLAYBACK_DVR, time < this.getDuration() - 30);
    }
  }

  seekPercentage(percentage) {
    if (percentage >= 0 && percentage <= 100) {
      let duration = this.getDuration();
      this.seek(percentage * duration / 100);
    }
  }

  startTimer() {
    this.timer = setInterval(() => this.updateMediaControl(), TICK_INTERVAL);
  }

  stopTimer() {
    clearInterval(this.timer);
    this.timer = null;
  }

  getDuration() {
    return this.currentMedia.media.duration;
  }

  isPlaying() {
    return this.currentMedia.playerState === 'PLAYING' || this.currentMedia.playerState === 'BUFFERING';
  }

  getPlaybackType() {
    return this.currentMedia.liveSeekableRange ? player_root_Clappr_["Playback"].LIVE : player_root_Clappr_["Playback"].VOD;
  }

  onMediaStatusUpdate() {
    this.mediaControl.changeTogglePlay();

    if (this.isPlaying() && !this.timer) {
      this.startTimer();
    }

    if (this.currentMedia.playerState === 'BUFFERING') {
      this.isBuffering = true;
      this.trigger(player_root_Clappr_["Events"].PLAYBACK_BUFFERING, this.name);
    } else if (this.currentMedia.playerState === 'PLAYING') {
      if (this.isBuffering) {
        this.isBuffering = false;
        this.trigger(player_root_Clappr_["Events"].PLAYBACK_BUFFERFULL, this.name);
      }

      if (this.prevState !== this.currentMedia.playerState) {
        this.trigger(player_root_Clappr_["Events"].PLAYBACK_PLAY, this.name);
      }
    } else if (this.currentMedia.playerState === 'IDLE') {
      if (this.isBuffering) {
        this.isBuffering = false;
        this.trigger(player_root_Clappr_["Events"].PLAYBACK_BUFFERFULL, this.name);
      }

      this.trigger(player_root_Clappr_["Events"].PLAYBACK_ENDED, this.name);
    } else if (this.currentMedia.playerState === 'PAUSED') {
      if (this.prevState !== this.currentMedia.playerState) {
        this.trigger(player_root_Clappr_["Events"].PLAYBACK_PAUSE, this.name);
      }
    }

    this.prevState = this.currentMedia.playerState;
  }

  updateMediaControl() {
    let position = this.currentMedia.getEstimatedTime();
    let duration = this.currentMedia.media.duration;
    this.trigger(player_root_Clappr_["Events"].PLAYBACK_TIMEUPDATE, {
      current: position,
      total: duration
    }, this.name);
  }

  show() {
    this.$el.show();
  }

  hide() {
    this.$el.hide();
  }

}
// EXTERNAL MODULE: ./src/public/style.scss
var style = __webpack_require__(2);
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: /Users/mdg/Source/boxcast_js/node_modules/lodash.assign/index.js
var lodash_assign = __webpack_require__(3);
var lodash_assign_default = /*#__PURE__*/__webpack_require__.n(lodash_assign);

// EXTERNAL MODULE: ./src/public/ic_cast_24dp.svg
var ic_cast_24dp = __webpack_require__(4);
var ic_cast_24dp_default = /*#__PURE__*/__webpack_require__.n(ic_cast_24dp);

// EXTERNAL MODULE: ./src/public/ic_cast0_24dp.svg
var ic_cast0_24dp = __webpack_require__(5);
var ic_cast0_24dp_default = /*#__PURE__*/__webpack_require__.n(ic_cast0_24dp);

// EXTERNAL MODULE: ./src/public/ic_cast1_24dp.svg
var ic_cast1_24dp = __webpack_require__(6);
var ic_cast1_24dp_default = /*#__PURE__*/__webpack_require__.n(ic_cast1_24dp);

// EXTERNAL MODULE: ./src/public/ic_cast2_24dp.svg
var ic_cast2_24dp = __webpack_require__(7);
var ic_cast2_24dp_default = /*#__PURE__*/__webpack_require__.n(ic_cast2_24dp);

// EXTERNAL MODULE: ./src/public/ic_cast_connected_24dp.svg
var ic_cast_connected_24dp = __webpack_require__(8);
var ic_cast_connected_24dp_default = /*#__PURE__*/__webpack_require__.n(ic_cast_connected_24dp);

// CONCATENATED MODULE: ./src/chromecast.js









const DEVICE_STATE = {
  'IDLE': 0,
  'ACTIVE': 1,
  'WARNING': 2,
  'ERROR': 3
};
const DEFAULT_CLAPPR_APP_ID = '9DFB77C0';
const DEFAULT_MESSAGE_NAMESPACE = 'clappr-chromecast-plugin';
const MIMETYPES = {
  'mp4': 'video/mp4',
  'ogg': 'video/ogg',
  '3gpp': 'video/3gpp',
  'webm': 'video/webm',
  'mkv': 'video/x-matroska',
  'm3u8': 'application/x-mpegurl',
  'mpd': 'application/dash+xml'
};
MIMETYPES['ogv'] = MIMETYPES['ogg'];
MIMETYPES['3gp'] = MIMETYPES['3gpp'];
class chromecast_ChromecastPlugin extends player_root_Clappr_["UICorePlugin"] {
  get supportedVersion() {
    return {
      min: '0.4.0',
      max: '0.5.0'
    };
  }

  static get Movie() {
    return 'movie';
  }

  static get TvShow() {
    return 'tv_show';
  }

  static get Generic() {
    return 'none';
  }

  static get version() {
    return VERSION;
  }

  get version() {
    return VERSION;
  }

  get name() {
    return 'chromecast';
  }

  get tagName() {
    return 'button';
  }

  get attributes() {
    return {
      'class': 'chromecast-button',
      'type': 'button'
    };
  }

  get events() {
    return {
      'click': 'click'
    };
  }

  get options() {
    return this.core.options.chromecast || (this.core.options.chromecast = {});
  }

  get container() {
    return this.core.getCurrentContainer ? this.core.getCurrentContainer() : this.core.activeContainer; // Clappr 0.3.0 or greater
  }

  get playback() {
    return this.core.getCurrentPlayback ? this.core.getCurrentPlayback() : this.core.activePlayback; // Clappr 0.3.0 or greater
  }

  constructor(core) {
    super(core);
    this.bootTryDelay = this.options.bootTryDelay || 500; // Default is 500 milliseconds between each attempt

    this.bootMaxTryCount = this.options.bootMaxTryCount || 6; // Default is 6 attempts (3 seconds)

    this.bootTryCount = 0;
    this.textTracks = [];
    this.messageNamespace = this.options.customNamespace || DEFAULT_MESSAGE_NAMESPACE;

    if (this.isBootable()) {
      this.appId = this.options.appId || DEFAULT_CLAPPR_APP_ID;
      this.deviceState = DEVICE_STATE.IDLE;
      this.embedScript();
    } else {
      this.disable();
    }
  }

  bindEvents() {
    this.listenTo(this.core.mediaControl, player_root_Clappr_["Events"].MEDIACONTROL_RENDERED, this.render);

    if (player_root_Clappr_["Events"].CORE_ACTIVE_CONTAINER_CHANGED) {
      // Clappr 0.3.0 or greater
      this.listenTo(this.core, player_root_Clappr_["Events"].CORE_ACTIVE_CONTAINER_CHANGED, this.containerChanged);
    } else {
      this.listenTo(this.core.mediaControl, player_root_Clappr_["Events"].MEDIACONTROL_CONTAINERCHANGED, this.containerChanged);
    }

    if (this.container) {
      this.listenTo(this.container, player_root_Clappr_["Events"].CONTAINER_TIMEUPDATE, this.containerTimeUpdate);
      this.listenTo(this.container, player_root_Clappr_["Events"].CONTAINER_PLAY, this.containerPlay);
      this.listenTo(this.container, player_root_Clappr_["Events"].CONTAINER_ENDED, this.sessionStopped);
    }
  }

  isBootable() {
    // Browser must be Chrome
    if (!player_root_Clappr_["Browser"].isChrome) {
      return false;
    } // Chrome lesser than or equals to 71
    // does not require secure page


    if (player_root_Clappr_["Browser"].version <= 71) {
      return true;
    } // Chrome greater than or equals to 72
    // require secure page or localhost


    return this.isSecure() || this.isLocalhost();
  }

  isLocalhost() {
    return window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  }

  isSecure() {
    return window.location.protocol === 'https:';
  }

  enable() {
    super.enable();
    this.render();
    this.embedScript();
  }

  embedScript() {
    if (!window.chrome || !window.chrome.cast || !window.chrome.cast.isAvailable) {
      let script = document.createElement('script');
      script.setAttribute('type', 'text/javascript');
      script.setAttribute('async', 'async');
      script.setAttribute('src', 'https://www.gstatic.com/cv/js/sender/v1/cast_sender.js');

      script.onload = () => this.bootstrapCastApi();

      document.body.appendChild(script);
    } else {
      this.bootstrapCastApi();
    }
  }

  bootstrapCastApi() {
    this.bootTryCount++;

    if (this.bootTryCount > this.bootMaxTryCount) {
      this.bootTryCount = 0;
      player_root_Clappr_["Log"].warn('GCastApi bootstrap timeout');
      this.disable();
      return;
    } // The "chrome" property may not be available immediately on some iOS devices


    if (window.chrome) {
      this.bootTryCount = 0;

      if (window.chrome.cast && window.chrome.cast.isAvailable) {
        this.appId = this.appId || DEFAULT_CLAPPR_APP_ID;
        this.initializeCastApi();
      } else {
        window['__onGCastApiAvailable'] = (loaded, errorInfo) => {
          if (loaded) {
            this.appId = this.appId || DEFAULT_CLAPPR_APP_ID;
            this.initializeCastApi();
          } else {
            player_root_Clappr_["Log"].warn('GCastApi error', errorInfo);
            this.disable();
          }
        };
      }
    } else {
      setTimeout(() => {
        this.bootstrapCastApi();
      }, this.bootTryDelay);
    }
  }

  updateCCTrackID(trackID) {
    if (trackID !== -1) {
      if (this.textTracks.filter(t => t.id === trackID).length === 0) {
        console.warn(`Failed to enable text track with ID ${trackID}, as it does not exist.`);
        return;
      }
    }

    var enabledTextTrackIDs = [];

    if (trackID !== -1) {
      enabledTextTrackIDs = [trackID];
    }

    if (this.session) {
      this.session.sendMessage(`urn:x-cast:${this.messageNamespace}:active-text-tracks`, enabledTextTrackIDs);
    }

    let container = this.core.getCurrentContainer();

    if (container) {
      container.trigger(player_root_Clappr_["Events"].CONTAINER_SUBTITLE_CHANGED, {
        id: trackID
      });
    }
  }

  initializeCastApi() {
    let autoJoinPolicy = chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED;
    let sessionRequest = new chrome.cast.SessionRequest(this.appId);
    let apiConfig = new chrome.cast.ApiConfig(sessionRequest, session => this.sessionListener(session), e => this.receiverListener(e), autoJoinPolicy);
    chrome.cast.initialize(apiConfig, () => player_root_Clappr_["Log"].debug(this.name, 'init success'), () => player_root_Clappr_["Log"].warn(this.name, 'init error'));
  }

  sessionListener(session) {
    player_root_Clappr_["Log"].debug(this.name, 'new session id:' + session.sessionId);
    this.newSession(session);
  }

  sessionUpdateListener() {
    if (this.session) {
      player_root_Clappr_["Log"].debug(this.name, this.session.status);

      if (this.session.status === chrome.cast.SessionStatus.STOPPED) {
        this.sessionStopped();
        this.session = null;
      }
    }
  }

  onSessionTextTracks(tracks) {
    this.textTracks = tracks.map(t => {
      return {
        id: t.trackId,
        name: t.name,
        track: t
      };
    });

    if (this.textTracks.length > 0) {
      if (this.playbackProxy) {
        this.playbackProxy._closedCaptionsTracks = this.textTracks;
      }

      this.trigger(player_root_Clappr_["Events"].PLAYBACK_SUBTITLE_AVAILABLE);
      this.updateCCTrackID(this.core.getCurrentContainer().closedCaptionsTrackId);
    }
  }

  receiverListener(e) {
    if (e === chrome.cast.ReceiverAvailability.AVAILABLE) {
      player_root_Clappr_["Log"].debug(this.name, 'receiver found');
      this.show();
    } else {
      player_root_Clappr_["Log"].debug(this.name, 'receiver list empty');
      this.hide();
    }
  }

  launchSuccess(session) {
    this.renderConnected();
    clearInterval(this.connectAnimInterval);
    this.core.mediaControl.resetKeepVisible();
    player_root_Clappr_["Log"].debug(this.name, 'launch success - session: ' + session.sessionId);
    this.newSession(session);
  }

  launchError(e) {
    player_root_Clappr_["Log"].debug(this.name, 'error on launch', e);
    this.renderDisconnected();
    clearInterval(this.connectAnimInterval);
    this.core.mediaControl.resetKeepVisible();
    this.container.play();
  }

  loadMediaSuccess(how, mediaSession) {
    player_root_Clappr_["Log"].debug(this.name, 'new media session', mediaSession, '(', how, ')');
    this.originalPlayback = this.playback;
    let options = lodash_assign_default()({}, this.originalPlayback.options, {
      currentMedia: mediaSession,
      mediaControl: this.core.mediaControl,
      poster: this.options.poster || this.core.options.poster,
      settings: this.originalPlayback.settings,
      ccTracks: this.textTracks,
      updateCCTrackID: id => this.updateCCTrackID(id)
    });
    this.src = this.originalPlayback.src;
    this.playbackProxy = new chromecast_playback_ChromecastPlayback(options);
    this.playbackProxy.render();
    this.core.$el.addClass('chromecast-active');
    this.mediaSession = mediaSession;
    this.originalPlayback.$el.remove();
    let container = this.container;
    container.$el.append(this.playbackProxy.$el);
    container.stopListening();
    container.playback = this.playbackProxy;
    container.bindEvents();
    container.settingsUpdate();
  }

  loadMediaError(e) {
    player_root_Clappr_["Log"].warn(this.name, 'media error', e);
  }

  newSession(session) {
    this.session = session;
    this.deviceState = DEVICE_STATE.ACTIVE;
    this.renderConnected();
    session.addUpdateListener(() => this.sessionUpdateListener());
    session.addMessageListener(`urn:x-cast:${this.messageNamespace}:text-tracks`, (_, tracksJSON) => this.onSessionTextTracks(JSON.parse(tracksJSON)));
    this.containerPlay();
  }

  sessionStopped() {
    this.renderDisconnected();
    let time = this.currentTime;
    let playerState = undefined;

    if (this.mediaSession) {
      playerState = this.mediaSession.playerState;
      this.mediaSession = null;
    }

    this.core.$el.removeClass('chromecast-active');
    this.core.load(this.src || this.core.options.sources);
    let container = this.container;

    if (this.playbackProxy) {
      if (this.playbackProxy.isPlaying() || playerState === 'PAUSED') {
        container.once(player_root_Clappr_["Events"].CONTAINER_READY, () => {
          container.play();
          container.playback.seek(100 * time / container.getDuration());
        });
      }

      this.playbackProxy.stop();
    }
  }

  loadMedia() {
    this.container.pause();
    let src = this.container.options.src;
    player_root_Clappr_["Log"].debug(this.name, 'loading... ' + src);
    let mediaInfo = this.createMediaInfo(src);
    let request = new chrome.cast.media.LoadRequest(mediaInfo);
    request.autoplay = true;

    if (this.currentTime) {
      request.currentTime = this.currentTime;
    }

    this.session.loadMedia(request, mediaSession => this.loadMediaSuccess('loadMedia', mediaSession), e => this.loadMediaError(e));
  }

  createMediaInfo(src) {
    let mimeType = chromecast_ChromecastPlugin.mimeTypeFor(src);
    let mediaInfo = new chrome.cast.media.MediaInfo(src);
    mediaInfo.contentType = this.options.contentType || mimeType;
    mediaInfo.customData = this.options.customData;
    let metadata = this.createMediaMetadata();
    mediaInfo.metadata = metadata;
    return mediaInfo;
  }

  createMediaMetadata() {
    this.options.media || (this.options.media = {});
    let type = this.options.media.type;
    let metadata = this.createCastMediaMetadata(type);
    metadata.title = this.options.media.title;
    metadata.subtitle = this.options.media.subtitle;
    metadata.releaseDate = this.options.media.releaseDate;

    if (type === chromecast_ChromecastPlugin.TvShow) {
      metadata.episode = this.options.media.episode;
      metadata.originalAirdate = this.options.media.originalAirdate;
      metadata.season = this.options.media.season;
      metadata.seriesTitle = this.options.media.seriesTitle;
    } else if (type === chromecast_ChromecastPlugin.Movie) {
      metadata.studio = this.options.media.studio;
    }

    if (this.options.media.images) {
      metadata.images = this.options.media.images.map(url => new chrome.cast.Image(url));
    }

    if (!metadata.images && this.options.poster) {
      metadata.images = [new chrome.cast.Image(this.options.poster)];
    }

    if (!metadata.images && this.core.options.poster) {
      metadata.images = [new chrome.cast.Image(this.core.options.poster)];
    }

    return metadata;
  }

  createCastMediaMetadata(type) {
    switch (type) {
      case chromecast_ChromecastPlugin.Movie:
        return new chrome.cast.media.MovieMediaMetadata();

      case chromecast_ChromecastPlugin.TvShow:
        return new chrome.cast.media.TvShowMediaMetadata();

      default:
        return new chrome.cast.media.GenericMediaMetadata();
    }
  }

  show() {
    this.$el.show();
  }

  hide() {
    this.$el.hide();
  }

  click() {
    this.currentTime = this.container.getCurrentTime();
    this.container.pause();
    chrome.cast.requestSession(session => this.launchSuccess(session), e => this.launchError(e));

    if (!this.session) {
      let position = 0;
      let connectingIcons = [ic_cast0_24dp_default.a, ic_cast1_24dp_default.a, ic_cast2_24dp_default.a];
      clearInterval(this.connectAnimInterval);
      this.connectAnimInterval = setInterval(() => {
        this.$el.html(connectingIcons[position]);
        position = (position + 1) % 3;
      }, 600);
      this.core.mediaControl.setKeepVisible();
    }
  }

  containerChanged() {
    this.stopListening();
    this.bindEvents();
  }

  containerTimeUpdate(timeProgress) {
    this.currentTime = timeProgress.current;
  }

  containerPlay() {
    if (this.session && (!this.mediaSession || this.mediaSession.playerState === 'IDLE' || this.mediaSession.playerState === 'PAUSED')) {
      player_root_Clappr_["Log"].debug(this.name, 'load media');
      this.loadMedia();
    }
  }

  renderConnected() {
    this.$el.html(ic_cast_connected_24dp_default.a);
  }

  renderDisconnected() {
    this.$el.html(ic_cast_24dp_default.a);
  }

  render() {
    this.session ? this.renderConnected() : this.renderDisconnected();
    this.core.mediaControl.$el.find('.media-control-right-panel[data-media-control]').append(this.$el);
    this.$style && this.$style.remove();
    this.$style = player_root_Clappr_["Styler"].getStyleFor(style_default.a, {
      baseUrl: this.core.options.baseUrl
    });
    this.core.$el.append(this.$style);
    return this;
  }

  static mimeTypeFor(srcUrl) {
    let extension = (srcUrl.split('?')[0].match(/.*\.(.*)$/) || [])[1];

    if (MIMETYPES[extension]) {
      return MIMETYPES[extension];
    } else if (srcUrl.indexOf('.ism') > -1) {
      return 'application/vnd.ms-sstr+xml';
    }
  }

}

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=clappr-chromecast-plugin.js.map