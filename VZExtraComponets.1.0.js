/******/ (function(modules) { // webpackBootstrap
    /******/ 	// The module cache
    /******/ 	var installedModules = {};
    /******/
    /******/ 	// The require function
    /******/ 	function __webpack_require__(moduleId) {
        /******/
        /******/ 		// Check if module is in cache
        /******/ 		if(installedModules[moduleId])
        /******/ 			return installedModules[moduleId].exports;
        /******/
        /******/ 		// Create a new module (and put it into the cache)
        /******/ 		var module = installedModules[moduleId] = {
            /******/ 			exports: {},
            /******/ 			id: moduleId,
            /******/ 			loaded: false
            /******/ 		};
        /******/
        /******/ 		// Execute the module function
        /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ 		// Flag the module as loaded
        /******/ 		module.loaded = true;
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
    /******/ 	// __webpack_public_path__
    /******/ 	__webpack_require__.p = "/assets/";
    /******/
    /******/ 	// Load entry module and return exports
    /******/ 	return __webpack_require__(0);
    /******/ })
/************************************************************************/
/******/ ([
    /* 0 */
    /***/ function(module, exports, __webpack_require__) {

        // register custom components
        __webpack_require__(1);

        /**
         * @summary CORASNow CORASManage Components
         * @desc CORASNow CORASManageComponents
         * <br />
         * A collection of additional components that can be referenced in CORASManage Extensions.
         * @version 0.1
         * @copyright Copyright &reg; CORASCloud Inc.
         * @author David Smiley <david.smiley@corascloud.com>
         * @namespace
         */
        var cnCmAppComponents = {};
        window.cnCmAppComponents = window.cnCmAppComponents || {};
        //window.cnCmAppComponents.hello = __webpack_require__(44);
        window.cnCmAppComponents.activityTimelineConstructor = __webpack_require__(3);
        //window.cnCmAppComponents.hello = require('./components/diff/diffConstructor');



        /***/ },
    /* 1 */
    /***/ function(module, exports, __webpack_require__) {

        /*
         if ( !ko.components.isRegistered('cn-app-map') ) {
         ko.components.register('cn-app-map', require('./app-map/app-map'));
         }
         */

        if ( !ko.components.isRegistered('cn-vz-test') ) {
            ko.components.register('cn-vz-test', __webpack_require__(2));
        }

        /***/ },
    /* 2 */
    /***/ function(module, exports, __webpack_require__) {

        var _ = cc.lodash,
            template = __webpack_require__(3),
            fn = cc.fn;

        //    $.getScript( "/libs/anychart/7.8.0/anychart_bundle.min.js", function( data, textStatus, jqxhr ) {
        // });
        /**
         * @summary Risk Matrix component
         * @desc Risk Matrix component
         * <br />
         * Creates an Anychart Risk Matrix with drilldown to kendo Grid
         * @namespace
         * @example <caption>Risk Matrix Description</caption>
         * // Extension JS
         * // Boilerplate Extension JS code works
         * //
         * // Extension HTML
         * // <cn-risk-matrix></cn-risk-matrix>
         */
        function TestDisplay(params) {
            $.when(cmApp.ready).done(function () {
                var self = this;
                self.selectedProject = '';
                self.selectedProbability = '';
                self.selectedImpact = '';
                self.projectFilter = '';
                self.projectFilterParsed = '';
                self.ready = ko.observable(false);
                self.riskStatus = null;
                self.risksList = '';
                self.ds = [];
            });
        }

        function createViewModel(params, componentInfo) {
            return new TestDisplay(params);
        }

        module.exports = {
            viewModel: {
                createViewModel: createViewModel
            },
            template: template
        };


        /***/ },
    /* 3 */
    /***/ function(module, exports) {

        module.exports = "<div id=\"toolValidationMsg\" class=\"validationOK\">No tool validation errors were found</div>";

        /***/ }



    /******/ ]);
/**/
