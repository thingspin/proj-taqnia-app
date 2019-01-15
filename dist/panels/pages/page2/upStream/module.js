define(["app/plugins/sdk"], function(__WEBPACK_EXTERNAL_MODULE_grafana_app_plugins_sdk__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./panels/pages/page2/upStream/module.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./panels/common/index.ts":
/*!********************************!*\
  !*** ./panels/common/index.ts ***!
  \********************************/
/*! exports provided: appId, baseCssFilename */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appId", function() { return appId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseCssFilename", function() { return baseCssFilename; });
var appId = "proj-taqnia-app";
var baseCssFilename = "app";


/***/ }),

/***/ "./panels/pages/page2/upStream/module.ts":
/*!***********************************************!*\
  !*** ./panels/pages/page2/upStream/module.ts ***!
  \***********************************************/
/*! exports provided: PanelCtrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelCtrl", function() { return ProjTaqniaPage2UpstreamPanelCtrl; });
/* harmony import */ var grafana_app_plugins_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! grafana/app/plugins/sdk */ "grafana/app/plugins/sdk");
/* harmony import */ var grafana_app_plugins_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(grafana_app_plugins_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common */ "./panels/common/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


Object(grafana_app_plugins_sdk__WEBPACK_IMPORTED_MODULE_0__["loadPluginCss"])({
    dark: "plugins/" + _common__WEBPACK_IMPORTED_MODULE_1__["appId"] + "/css/" + _common__WEBPACK_IMPORTED_MODULE_1__["baseCssFilename"] + ".dark.css",
    light: "plugins/" + _common__WEBPACK_IMPORTED_MODULE_1__["appId"] + "/css/" + _common__WEBPACK_IMPORTED_MODULE_1__["baseCssFilename"] + ".light.css"
});
var ProjTaqniaPage2UpstreamPanelCtrl = /** @class */ (function (_super) {
    __extends(ProjTaqniaPage2UpstreamPanelCtrl, _super);
    function ProjTaqniaPage2UpstreamPanelCtrl($scope, $injector, $element) {
        var _this = _super.call(this, $scope, $injector) || this;
        _this.$element = $element;
        _this.divID = "taqnia-page2-upstream-panel";
        _this.events.on('panel-initialized', _this.onInitialized.bind(_this));
        _this.events.on('data-received', _this.onDataReceived.bind(_this));
        return _this;
    }
    Object.defineProperty(ProjTaqniaPage2UpstreamPanelCtrl.prototype, "container", {
        get: function () { return this._container; },
        set: function (container) { this._container = container; },
        enumerable: true,
        configurable: true
    });
    /* Angularjs(1.x) Initialize Function */
    ProjTaqniaPage2UpstreamPanelCtrl.prototype.$onInit = function () {
        console.log(this.divID + " onInited...");
    };
    ProjTaqniaPage2UpstreamPanelCtrl.prototype.onInitialized = function () {
        var node = this.$element.find("ng-transclude > div");
        if (node.length === 0) {
            console.error("cannot find element id '#" + this.divID + "'");
            return;
        }
        this.container = node;
    };
    ProjTaqniaPage2UpstreamPanelCtrl.prototype.onDataReceived = function (dataList) {
        console.log(dataList);
    };
    ProjTaqniaPage2UpstreamPanelCtrl.template = __webpack_require__(/*! ./partial/template.html */ "./panels/pages/page2/upStream/partial/template.html");
    return ProjTaqniaPage2UpstreamPanelCtrl;
}(grafana_app_plugins_sdk__WEBPACK_IMPORTED_MODULE_0__["MetricsPanelCtrl"]));



/***/ }),

/***/ "./panels/pages/page2/upStream/partial/template.html":
/*!***********************************************************!*\
  !*** ./panels/pages/page2/upStream/partial/template.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"{{ctrl.divID}}\" class=\"app-taqnia-panel\">\n    upstream\n</div>\n";

/***/ }),

/***/ "grafana/app/plugins/sdk":
/*!**********************************!*\
  !*** external "app/plugins/sdk" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_grafana_app_plugins_sdk__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map