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
	
	var cnCommonComponents = {};
	window.cnCommonComponents = window.cnCommonComponents || {};
	
	window.cnCommonComponents.hello = __webpack_require__(13);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	if (!ko.components.isRegistered('cn-app-map')) {
	  ko.components.register('cn-app-map', __webpack_require__(2));
	}
	if (!ko.components.isRegistered('cn-app-page-description')) {
	  ko.components.register('cn-app-page-description', __webpack_require__(4));
	}
	if (!ko.components.isRegistered('cn-app-admin-console')) {
	  ko.components.register('cn-app-admin-console', __webpack_require__(6));
	}
	if (!ko.components.isRegistered('cn-app-filter-builder')) {
	  ko.components.register('cn-app-filter-builder', __webpack_require__(8));
	}


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var _ = cc.lodash,
	    template = __webpack_require__(3),
	    fn = cc.fn;
	
	/**
	 * @summary App Map component
	 * @desc App Map component
	 * <br />
	 * Creates a tree view of the App navigation, with descriptions.
	 * @namespace
	 * @example <caption>App Map</caption>
	 * // Extension JS
	 * // Boilerplate Extension JS code works
	 * //
	 * // Extension HTML
	 * // <cn-app-map></cn-app-map>
	 */
	function AppMap(params) {
	  var self = this;
	  self.newParams = function(){
	  };
	  self.params = params || new self.newParams();
	  self.ready = ko.observable(false);
	  self.onlyEnabled = ko.observable(true);
	  self.pageDescription = ko.observable('');
	  self.viewId = window.location.hash.split('/').pop();
	  self.appMap = ko.observable();
	  //    self.viewId = window.location.hash.split('/').pop();
	  self.appName = ko.observable();
	  self.appId = ko.observable();
	  self.appDescription = ko.observable();
	  self.navLink = ko.observable();
	
	  var opts = new cnc.app.options();
	  cnc.app.get(opts)
	    .fail(function (results) {
	      //            console.log('fail:', results);
	    })
	    .then(function (results) {
	//console.log(results);
	      self.appName(results.ApplicationName);
	      self.appId(results.AppId);
	      self.appDescription(results.Description);
	    });
	
	  var viewConfigDS = cc.api.getViewConfigsDS();
	  viewConfigDS.read({$expand:'Tabs($expand=Views)'}).then(function () {
	    self.appMap(viewConfigDS.data()[0]);
	    for (var k = 0; k < self.appMap().Tabs.length; k++) {
	      for (var l = 0; l < self.appMap().Tabs[k].Views.length; l++) {
	        self.appMap().Tabs[k].Views[l].navLink = window.location.protocol + '//' + window.location.host + '/home/SPA?AppId=' + self.appMap().AppId + '#/view/' + self.appMap().Tabs[k].Views[l].Id;
	      }
	    }
	    var foundit = false;
	    for (var i = 0; i < viewConfigDS.data()[0].Tabs.length; i++){
	      for (var j = 0; j < viewConfigDS.data()[0].Tabs[i].Views.length; j++){
	        if(viewConfigDS.data()[0].Tabs[i].Views[j].Id == self.viewId){
	          self.pageDescription(viewConfigDS.data()[0].Tabs[i].Views[j].Description);
	          foundit = true;
	          break;
	        }
	      }
	      if(foundit){
	        break;
	      }
	    }
	    self.ready(true);
	
	    });
	
	}
	
	$.extend(true, AppMap.prototype, {
	    dispose: function () {
	
	    },
	
	    initSubscriptions: function () {
	        var self = this;
	
	    },
	
	    initComponent: function (view) {
	//        this.campusPicker = $('.campusPicker', view).kendoDropDownList().data("kendoDropDownList");
	    }
	});
	
	function createViewModel(params, componentInfo) {
	
	    return new AppMap(params);
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

	module.exports = "<style>\r\n\r\n  .app-map .k-in {\r\n    display: none;\r\n  }\r\n\r\n  .app-map-description {\r\n    padding-top: 25px;\r\n    padding-left: 25px;\r\n    font-family: 'Century Gothic', sans-serif;\r\n    font-size: 1.5em;\r\n  }\r\n\r\n  .app-map .tab-description {\r\n    font-style: italic;\r\n    font-size: 1.15em;\r\n  }\r\n\r\n  .app-map .tab-title {\r\n    font-size: 1.15em;\r\n    color: #1E252D !important;\r\n    border-bottom: 1px solid lightgray;\r\n  }\r\n\r\n  .app-map .title {\r\n    padding-top: 5px;\r\n    /* padding-bottom: 5px; */\r\n    color: #1E252D;\r\n  }\r\n\r\n  .app-map .description {\r\n    padding-left: 10px;\r\n    padding-top: 2px;\r\n    padding-bottom: 2px;\r\n    color: #7C868E;\r\n  }\r\n  .nav-link:hover {\r\n    text-decoration: none;\r\n    font-family: 'Century Gothic', sans-serif;\r\n  }\r\n\r\n  .nav-link:hover .title {\r\n    color: slate;\r\n  }\r\n\r\n  .app-map .k-treeview  {\r\n    font-family: 'Century Gothic', sans-serif;\r\n    font-size: 1.25em;\r\n    background-color: white;\r\n    display:inline-block;\r\n    min-height:200px;\r\n    padding:20px;\r\n    padding-right:40px;\r\n  }\r\n\r\n  .app-map .k-item .k-item:hover .view-title {\r\n    font-weight:bold;\r\n  }\r\n  .app-map .k-item .k-item:hover .view-description {\r\n    font-style:italic;\r\n    color: #1E252D;\r\n  }\r\n\r\n  .app-map {\r\n    background-color: white;\r\n    float:left;\r\n    border:none;\r\n  }\r\n  .app-map-header {\r\n    font-family: 'Century Gothic', sans-serif;\r\n    font-size: 3em;\r\n    color: #1E252D;\r\n  }\r\n  div.k-treeview {\r\n    white-space: normal;\r\n  }\r\n</style>\r\n<div data-bind=\"initComponent\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <!-- ko if: $component.ready() == true -->\r\n      <div class=\"app-map-header\">\r\n        <span id=\"app-map-header-title\" data-bind=\"html: $component.appName\"></span>\r\n      </div>\r\n      <div class=\"app-map-description\">\r\n        <span id=\"app-map-description-body\" data-bind=\"html: $component.appDescription\"></span>\r\n      </div>\r\n      <div class=\"app-map k-block\">\r\n        <ul data-bind=\"kendoTreeView: {}, foreach: $component.appMap().Tabs\">\r\n          <!-- ko if: $component.onlyEnabled() == false || ($component.onlyEnabled() == true && Enabled == true)-->\r\n          <li>\r\n            <div>\r\n              <span class=\"title tab-title\" data-bind=\"html: Title\"></span>\r\n              <div class=\"description tab-description\" data-bind=\"html: Description\"></div>\r\n            </div>\r\n            <ul data-bind=\"foreach: Views\">\r\n              <!-- ko if: $component.onlyEnabled() == false || ($component.onlyEnabled() == true && Enabled == true)-->\r\n              <a class=\"nav-link\" data-bind=\"attr: {href: navLink}\">\r\n                <li class=\"k-item\">\r\n                  <span class=\"title view-title\" data-bind=\"html: Title\"></span>\r\n                  <div class=\"description view-description\" data-bind=\"html: Description\"></div>\r\n                </li>\r\n              </a>\r\n              <!-- /ko -->\r\n            </ul>\r\n          </li>\r\n          <!-- /ko -->\r\n        </ul>\r\n      </div>\r\n      <!-- /ko -->\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var _ = cc.lodash,
	    template = __webpack_require__(5),
	    fn = cc.fn;
	
	/**
	 * @summary App Page Description component
	 * @desc App Page Description component
	 * <br />
	 * Creates a text display of the page description
	 * @namespace
	 * @example <caption>App Page Description</caption>
	 * // Extension JS
	 * // Boilerplate Extension JS code works
	 * // 
	 * // Extension HTML
	 * // <app-page-description></app-page-description>
	 */
	function AppPageDescription( params ) {
	    var self = this;
	    self.listsInfo = params.listsInfo;
	    self.pageDescription = ko.observable('');
	    self.viewId = window.location.hash.split('/').pop();
	    var viewConfigDS = cc.api.getViewConfigsDS();
	    viewConfigDS.read({$expand:'Tabs($expand=Views)'}).then(function () {
	        var foundit = false;
	        for (var i = 0; i < viewConfigDS.data()[0].Tabs.length; i++){
	            for (var j = 0; j < viewConfigDS.data()[0].Tabs[i].Views.length; j++){
	                if(viewConfigDS.data()[0].Tabs[i].Views[j].Id == self.viewId){
	                    self.pageDescription(viewConfigDS.data()[0].Tabs[i].Views[j].Description);
	                    foundit = true;
	                    break;
	                }
	            }
	            if(foundit){
	                break;
	            }
	        }
	    });
	}
	
	$.extend(true, AppPageDescription.prototype, {
	    dispose: function() {
	
	    },
	
	    initSubscriptions: function() {
	        var self = this;
	
	    },
	
	    initComponent: function( view ) {
	//        this.campusPicker = $('.campusPicker', view).kendoDropDownList().data("kendoDropDownList");
	    }
	});
	
	function createViewModel( params, componentInfo ) {
	
	    return new AppPageDescription(params);
	}
	
	module.exports = {
	    viewModel: {
	        createViewModel: createViewModel
	    },
	    template: template
	};


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "<div class=\"appPageDescription\"  data-bind=\"visible: $component.pageDescription != ''\">\r\n    <div class=\"k-block\" data-bind=\"html: $component.pageDescription\">\r\n    </div>\r\n    <p>&nbsp;</p>\r\n</div>\r\n"

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var _ = cc.lodash,
	    template = __webpack_require__(7),
	    fn = cc.fn;
	
	/**
	 * @summary App Admin Console component
	 * @desc App Admin Console component
	 * <br />
	 * Administrative Console
	 * @namespace
	 * @example <caption>App Admin Console</caption>
	 * // Extension JS
	 * // Boilerplate Extension JS code works
	 * // 
	 * // Extension HTML
	 * // <app-admin-console></app-admin-console>
	 */
	function AppAdminConsole( params ) {
	        // ko.options.deferUpdates = true; not supported yet
	        /*
	         Add constructor function for AppAdminConsole params
	         */
	        var self = this;
	        // Provides access to data sources, which have been chosen in the Designer
	        self.listsInfo = params.listsInfo;
	        self.baseURL = window.location.origin;
	        // Get the Connection ID
	        self.internalConnectionID = null;
	        var internalConnection = cc.api.getConnectionsDS();
	        internalConnection.read({
	            $expand : 'Capabilities'
	        }).then(function () {
	            var iconnect = _.find(internalConnection.data(), {
	                Name : "CorasCloud Internal"
	            });
	            self.internalConnectionID = iconnect.Id;
	        });
	        //    self.selectedList = ko.observable();
	        self.componentSelect = ko.observableArray();
	        self.appId = ko.observable(null);
	        self.tenant = ko.observable(null);
	        self.app = ko.observable(null);
	        self.otherAppComponents = ko.observableArray();
	        self.otherAppDataSources = ko.observableArray();
	        self.destinationSelectionOptions = ko.observableArray();
	        self.replaceFromSelected = ko.observable();
	        self.replaceToSelected = ko.observable();
	        self.destinationApp = ko.observable();
	        self.replaceEnabled = ko.computed(function() {
	            var enabled = false;
	            if(self.appId() != self.destinationApp()){
	                return true;
	            }
	            return self.replaceFromSelected() != self.replaceToSelected();
	        }, self);
	        $(document).ajaxStop(function () {
	            $(this).unbind("ajaxStop");
	        });
	        self.destinationApp.subscribe(function (dApp){
	            self.destinationSelectionOptions.removeAll();
	            self.otherAppComponents.removeAll();
	            self.otherAppDataSources.removeAll();
	            var hamburger = $.Deferred();
	            var hotdog = $.Deferred();
	            // https://app.corascloud.com/odata/Lists?%24expand=Fields&_=1459455123330
	            $.ajax({
	                method: "GET",
	                headers: {
	                    Accept: 'application/json,odata.metadata=minimal',
	                    AppId : dApp
	
	                },
	                contentType: 'application/json',
	                cache: false,
	                url: self.baseURL + "/odata/ExtensionConfigs?"
	            })
	                .done(function( apps ) {
	                    apps.value.sort(function(a,b) {return (a.Title.toLowerCase() > b.Title.toLowerCase()) ? 1 : ((b.Title.toLowerCase() > a.Title.toLowerCase()) ? -1 : 0);} );
	
	                    hamburger.resolve(apps.value);
	                });
	            $.ajax({
	                method: "GET",
	                headers: {
	                    Accept: 'application/json,odata.metadata=minimal',
	                    AppId : dApp
	
	                },
	                contentType: 'application/json',
	                cache: false,
	                url: self.baseURL + "/odata/Lists?",
	                data: '%24expand=Fields'
	            })
	                .done(function( apps ) {
	                    apps.value.sort(function(a,b) {return (a.Title.toLowerCase() > b.Title.toLowerCase()) ? 1 : ((b.Title.toLowerCase() > a.Title.toLowerCase()) ? -1 : 0);} );
	                    hotdog.resolve(apps.value);
	                });
	            $.when(hamburger, hotdog).done(function (exts, datasources) {
	                $.each(exts, (function(index, extension) {
	                    self.destinationSelectionOptions.push({text: extension.Title, value: extension.Id});
	                    self.otherAppComponents.push(extension);
	                }));
	                var extensions = _.find(self.components(), {key: "getExtensionConfigsDS"});
	                $.each(extensions.dataRow(), function(i, row){
	                    console.log(row.data.Title, row.replaceToSelected());
	                });
	                $.each(datasources, (function(index, extension) {
	                    self.otherAppDataSources.push(extension);
	                }));
	
	            });
	        });
	        self.exportFileName = ko.observable('CorasNow Export');
	        var appConfig = cc.api.getAppConfigsDS();
	        appConfig.read().then(function () {
	            self.appId (appConfig.data()[0].AppId);
	            self.tenant (appConfig.data()[0].Tenant);
	            self.app = (appConfig.data()[0]);
	            self.destinationApp(self.appId());
	
	        });
	        self.importedComponents = ko.observableArray([]).extend({ rateLimit: { method: "notifyWhenChangesStop", timeout: 100 }});
	        self.importedDataSources = ko.observableArray([]);
	        self.sourceApp = ko.observable(null);
	        self.showOnlyImportable = ko.observable(true);
	        self.adjustedComponent = ko.observable(null);
	        self.keyEntry = function(key, desc, valueNode, idNode, selectDefault, selectLocked){
	            this.key = key;
	            this.desc = desc;
	            this.called = ko.observable(false);
	            this.callInProgress = ko.observable(false);
	            this.valueRow = ko.observableArray([]);
	            this.dataRow = ko.observableArray([]).extend({ rateLimit: { method: "notifyWhenChangesStop", timeout: 200 }});
	            this.rawDataRow = ko.observableArray([]).extend({ rateLimit: { method: "notifyWhenChangesStop", timeout: 200 }});
	            this.selectedRowCount = ko.computed(function() {
	                var numrows = _.filter(ko.toJS(this.dataRow), {selected: true});
	                return numrows.length;
	            }, this).extend({ rateLimit: { method: "notifyWhenChangesStop", timeout: 200 }});
	
	            this.valueNode = valueNode;
	            this.idNode = idNode;
	            this.selectDefault = selectDefault;
	            this.selectLocked = selectLocked;
	            this.selectionOptions = ko.observableArray();
	            this.targetSelectionOptions = ko.observableArray();
	            this.optionSelected = ko.observable();
	        };
	        self.makeAdjustedComponent = function(component){
	            this['@odata.etag'] = null;
	            this.Title = ko.observable(component.Title);
	            this.Description = ko.observable(component.Description);
	
	            this.Tenant = self.tenant;
	            this.AppId = self.destinationApp();
	            this.Id = self.generateUUID(); // Generate a new id
	            this.OrginalId = this.Id; // Copy of generated Id
	            this.CSSFiles = component.CSSFiles;
	            this.ConfigJSON = component.ConfigJSON;
	            this.CreateDate = component.CreateDate;
	            this.CreatedBy = component.CreatedBy;
	            this.DataSources = component.DataSources;
	            this.JSFiles = component.JSFiles;
	            this.ModifiedBy = component.ModifiedBy;
	            this.ModifiedDate = component.ModifiedDate;
	            this.Permissions = component.Permissions;
	            this.Recycled = component.Recycled;
	            this.Template = component.Template;
	            this.Version = component.Version;
	            this.ViewModel = component.ViewModel;
	        };
	        self.generateUUID = function () {
	            var d = new Date().getTime();
	            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	                var r = (d + Math.random()*16)%16 | 0;
	                d = Math.floor(d/16);
	                return (c=='x' ? r : (r&0x3|0x8)).toString(16);
	            });
	            return uuid;
	        };
	
	        self.myApps = ko.observableArray();
	        var hamburger = $.Deferred();
	        $.ajax({
	            method: "GET",
	            headers: {
	                Accept: 'application/json,odata.metadata=minimal',
	            },
	            contentType: 'application/json',
	            cache: false,
	            url: self.baseURL + "/api/Manager/GetAppTiles?layout="
	        })
	            .done(function( apps ) {
	                apps.Tiles.sort(function(a,b) {return (a.AppConfig.ApplicationName.toLowerCase() > b.AppConfig.ApplicationName.toLowerCase()) ? 1 : ((b.AppConfig.ApplicationName.toLowerCase() > a.AppConfig.ApplicationName.toLowerCase()) ? -1 : 0);} );
	
	                hamburger.resolve(apps);
	            });
	        $.when(hamburger).done(function ( apps ) {
	            $.each(apps.Tiles, (function(index, app) {
	                self.myApps.push({title: app.AppConfig.ApplicationName, id: app.AppConfig.Id});
	            }));
	
	        });
	
	
	        self.importList = function(data){
	            var thisList = this;
	            var componentInfo = _.find(self.importedComponents(), function(o) {  return o.component.definition.Id == data.id; });
	            // Remove all columns de-selected by the user
	            var popCount = 0;
	            $.each(data.definition.Fields, function (index, field) {
	                if (field !== undefined) {
	                    if (!field._importField()) {
	                        componentInfo.component.definition.Fields.splice(index - popCount, 1);
	                        popCount++;
	                    }
	                }
	            });
	
	            var importJSON = {
	                AppId: null,
	                ConfigJSON: componentInfo.component.definition.ConfigJSON,
	                Description: componentInfo.component.definition.Description,
	                ExternalApps: [],
	                Fields: componentInfo.component.definition.Fields,
	                ImageUrl: '',
	                OrginalId: '',
	                Permissions: componentInfo.component.definition.Permissions,
	                Recycled: false,
	                RelatedLists: [],
	                Roles: [],
	                Tenant: null,
	                Title: componentInfo.component.definition.Title,
	                Users: [],
	                Version: 0
	            };
	            var dataString = self.replaceDataSourceIds(importJSON );
	            $.ajax({
	                method: "POST",
	                headers: {
	                    Accept: 'application/json,odata.metadata=minimal',
	                    AppId : self.appId()
	                },
	                contentType: 'application/json',
	                url: self.baseURL + "/odata/Lists?$expand=Fields",
	                data: dataString
	            })
	                .done(function( msg ) {
	                    thisList.appListId(msg.Id);
	                    self.components()[self.getListsDSIndex].dataRow.push(new self.dataRowItem(false, 'List', msg));
	                    //        self.components()[self.getListsDSIndex].dataRow.push({selected: ko.observable(msg.Id), componentType: 'List', id: msg.Id, data: msg});
	                    self.components()[self.getListsDSIndex].rawDataRow.push(msg);
	                    cc.notification.trigger('success', {title: 'Data Source Created', message: msg.Title + '<br />' + msg.Id});
	                });
	        };
	        self.gitOwner = ko.observable('CorasWorks');
	        self.gitRepo = ko.observable('cnapps');
	        self.gitRepos = ko.observableArray([]);
	        self.gitUser = ko.observable('david.smiley@corascloud.com');
	        self.gitToken = ko.observable('5df67ff2a087c1d6d5fca40e465c08e7fd493600');
	        self.gitResults = ko.observable('');
	        self.commitMessage = ko.observable('');
	        self.gitCred = ko.computed(function() {
	            return btoa(self.gitUser() + ":" + self.gitToken());
	        }, this);
	        self.gitOperations = ko.observableArray([
	            {title: 'Issues', func: 'repos/:owner/:repo/issues'},
	            {title: 'Master', func: 'repos/:owner/:repo/git/refs/heads/master'}
	            /*,
	             {title: 'Tree', func: 'repos/:owner/:repo/git/trees'},
	             {title: 'Tree Recursive', func: 'repos/:owner/:repo/git/trees/?recursive=1'}
	             //{title: 'Trees', func: 'repos/:owner/:repo/git/trees'}
	
	             cfab379e6cbcbc50419683d8777000d3d55018fe
	             {
	             "base_tree": "9fb037999f264ba9a7fc6274d15fa3ae2ab98312",
	             "tree": [
	             {
	             "path": "file.rb",
	             "mode": "100644",
	             "type": "blob",
	             "sha": "44b4fc6d56897b048c772eb4087f854f46256132"
	             }
	             ]
	             }
	             */
	        ]);
	        self.gitOperation = ko.observable();
	        self.replaceDataSourceIds = function(importJSON){
	            var dataString = JSON.stringify(importJSON );
	            if(typeof dataString != 'undefined'){
	                for (var i = 0; i <self.importedDataSources().length; i++){
	                    if(self.importedDataSources()[i].appListId() !== null){
	                        dataString = self.replaceAllIds(dataString, self.importedDataSources()[i].id, self.importedDataSources()[i].appListId());
	                    }
	                }
	            }
	            return dataString;
	        };
	        self.replaceAllIds =  function (str,replaceWhat,replaceTo){
	            while (str.indexOf(replaceWhat) > -1) {
	                str = str.replace(replaceWhat, replaceTo);
	            }
	            return str;
	        };
	        self.importComponents = function(){
	
	            for (var i = 0; i < self.importedComponents().length; i++){
	                if(self.importedComponents()[i].importable && self.importedComponents()[i].selected()){
	                    switch (self.importedComponents()[i].component.type){
	                        case 'Extension':
	                            self.importExtension(self.importedComponents()[i].component.definition);
	                            break;
	                        default:
	
	                    }
	                    console.log(i, self.importedComponents()[i].component.type, self.importedComponents()[i]);
	                }}
	        };
	        self.importExtension = function(originalComponent){
	            self.adjustedComponent(new self.makeAdjustedComponent(originalComponent));
	            var importJSON = {
	                JSFiles: self.adjustedComponent().JSFiles,
	                CSSFiles: self.adjustedComponent().CSSFiles,
	                DataSources: self.adjustedComponent().DataSources,
	                ViewModel: self.adjustedComponent().ViewModel,
	                Template: self.adjustedComponent().Template,
	                Title: self.adjustedComponent().Title() + ' copyer',
	                Description: self.adjustedComponent().Description(),
	                ConfigJSON: self.adjustedComponent().ConfigJSON,
	                Permissions: self.adjustedComponent().Permissions,
	                Tenant: null,
	                AppId: null,
	                OrginalId: "",
	                Recycled: false,
	                Version: 0
	            };
	            var dataString = self.replaceDataSourceIds(importJSON );
	            $.ajax({
	                method: "POST",
	                headers: {
	                    Accept: 'application/json,odata.metadata=minimal',
	                    AppId : self.appId()
	                },
	                contentType: 'application/json',
	                url: self.baseURL + "/odata/ExtensionConfigs",
	                data: dataString
	            })
	                .done(function( msg ) {
	                    cc.notification.trigger('success', {title: 'Extension Created', message: msg.Title + '<br />' + msg.Id});
	                });
	
	        };
	        self.setTopLevel = function(){
	            $.ajax({
	                beforeSend: function(req) {
	                    req.setRequestHeader('Authorization', 'Basic ' + self.gitCred());
	                },
	                method: "POST",
	                contentType: 'application/json',
	                data:
	
	                {
	                    "tree": [
	                        {
	                            "path": "test1",
	                            "mode": "040000",
	                            "type": "tree"
	                        }
	                    ]
	                },
	
	
	                url: 'https://api.github.com/repos/' + self.gitOwner() + '/' + self.gitRepo() + '/git/trees'})
	                .done(function( msg ) {
	                    console.log('done', msg);
	                    return msg;
	                });
	        };
	        self.getRepos = function(){
	            self.gitOperation('orgs/:owner:/repos');
	            self.callGit(function(result) {
	                self.gitRepos(result);
	            });
	        };
	        self.genericGitCall = function(){
	            self.callGit(function(result) {
	            });
	        };
	        self.gitCommit = function(){
	            var gitData = {
	                "tree": [
	                    {
	                        "path": "file.txt",
	                        "mode": "100644",
	                        "type": "blob",
	                        "content": "Content of the blob",
	                        "encoding": "utf-8"
	                    }
	                ]
	            };
	            gitData = {
	                "content": "Content of the blob",
	                "encoding": "utf-8"
	            };
	            $.ajax({
	                beforeSend: function(req) {
	                    req.setRequestHeader('Authorization', 'Basic ' + self.gitCred());
	                },
	                method: "POST",
	                async: false,
	                contentType: 'application/json',
	                data: JSON.stringify(gitData),
	                url: "https://api.github.com/" + 'repos/:owner/:repo/git/blobs'.replace(':owner', self.gitOwner()).replace(':repo', self.gitRepo())
	            })
	                .done(function( msg ) {
	                    self.gitResults(JSON.stringify(msg), null, '\t');
	                });
	
	        };
	        self.callGit = function (callback){
	            $.ajax({
	                beforeSend: function(req) {
	                    req.setRequestHeader('Authorization', 'Basic ' + self.gitCred());
	                },
	                method: "GET",
	                async: false,
	                contentType: 'application/json',
	                //        url: "https://api.github.com/" + self.gitOperation(),
	                url: "https://api.github.com/" + self.gitOperation().replace(':owner', self.gitOwner()).replace(':repo', self.gitRepo())
	            })
	                .done(function( msg ) {
	                    self.gitResults(JSON.stringify(msg), null, '\t');
	                    callback(msg);
	                });
	        };
	        self.importedComponent = function(component){
	            this.importable = false;
	            this.selected = ko.observable(false);
	            this.dataSources = ko.observableArray();
	            switch (component.type){
	                case 'Extension':
	                    this.importable = true;
	                    this.selected(true);
	                    for(var i=0; i < component.definition.DataSources.length; i++){
	                        this.dataSources.push(component.definition.DataSources[i]);
	                    }
	                    break;
	                default:
	
	            }
	            this.component = component;
	        };
	        self.uploadFile = function(element, rpssl){
	            rpsslLower = 'fileUpload';
	            var preview = document.querySelector('img#' + rpsslLower + 'Image');
	            var file    = document.querySelector('input#' + rpsslLower + '[type=file]').files[0];
	            var reader  = new FileReader();
	
	            reader.onloadend = function () {
	                self.sourceApp(JSON.parse(reader.result).sourceApp);
	                var components = JSON.parse(reader.result).components;
	                var dataSourceIds = [];
	                for (var i=0; i < components.length; i++){
	                    self.importedComponents.push(new self.importedComponent(components[i]));
	                    if (components[i].type == 'List'){
	                        dataSourceIds.push(components[i].definition.Id);
	                    }
	                }
	                for (i = 0; i < dataSourceIds.length; i++){
	                    /*jshint -W083 */
	                    var component = _.find(self.importedComponents(), function(o) {  return o.component.definition.Id == dataSourceIds[i]; });
	                    self.importedDataSources.push(new self.importedDataSource(dataSourceIds[i], component.component.definition));
	                    /*
	                     self.importedDataSources.push({id: dataSourceIds[i], 
	                     definition: component.component.definition,
	                     title: self.getImportedComponentTitleById(dataSourceIds[i]),
	                     appListId: ko.observable(self.getComponentIdByName('List', self.getImportedComponentTitleById(dataSourceIds[i]))),
	                     appListDef: ko.computed(function() {
	                     return appListId() + "***" ;
	                     }, this)
	                     });
	                     */
	                }
	                //        var adjusted = JSON.parse(reader.result);
	                //        self.adjustedComponent(new self.makeAdjustedComponent(JSON.parse(reader.result)));
	            };
	
	            if (file) {
	                reader.readAsText(file);
	            } else {
	                //debugger;
	            }
	        };
	        self.importedDataSource = function(id, definition){
	            this.id = id;
	            this.definition = _.cloneDeep(definition);
	            this.importField = ko.observableArray([]);
	            for(var i = 0; i < this.definition.Fields.length; i++){
	                this.definition.Fields[i]._importField = ko.observable(true);
	            }
	            this.title = self.getImportedComponentTitleById(id);
	            this.appListId =  ko.observable(self.getComponentIdByName('List', self.getImportedComponentTitleById(id)));
	            this.appListFields = ko.computed(function() {
	                var componentInfo = _.filter(self.components()[self.getListsDSIndex].dataRow(), {id: this.appListId()});
	                if(componentInfo.length === 0){
	                    return [];
	                } else {
	                    return componentInfo[0].data.Fields;
	                }
	            }, this);
	        };
	        self.checkInverse = function(index){
	            for(var i=0; i < self.components()[index].dataRow().length; i++){
	                self.components()[index].dataRow()[i].selected(!self.components()[index].dataRow()[i].selected());
	            }
	        };
	        self.checkAll = function(index){
	            for(var i=0; i < self.components()[index].dataRow().length; i++){
	                self.components()[index].dataRow()[i].selected(true);
	            }
	        };
	        self.checkNone = function(index){
	            for(var i=0; i < self.components()[index].dataRow().length; i++){
	                self.components()[index].dataRow()[i].selected(false);
	            }
	        };
	        self.exportComponent = function(){
	            var exportContent = {sourceApp: self.app, components: []};
	            for(var i=0; i < self.components().length; i++){
	                for(var j=0; j < self.components()[i].dataRow().length; j++){
	                    if(self.components()[i].dataRow()[j].selected()){
	                        exportContent.components.push({type: self.components()[i].dataRow()[j].componentType,
	                            definition: self.components()[i].dataRow()[j].data});
	                    }
	                }
	            }
	            download_file(self.exportFileName().trim() + moment().format(' YYYY-MM-DD hh:mm:ss') + ".ccc", JSON.stringify(exportContent));
	
	            function download_file(name, contents, mime_type) {
	                mime_type = mime_type || "text/plain";
	
	                var blob = new Blob([contents], {type: mime_type});
	
	                var dlink = document.createElement('a');
	                dlink.download = name;
	                dlink.href = window.URL.createObjectURL(blob);
	                dlink.onclick = function(e) {
	                    // revokeObjectURL needs a delay to work properly
	                    var that = this;
	                    setTimeout(function() {
	                        window.URL.revokeObjectURL(that.href);
	                    }, 1500);
	                };
	
	                dlink.click();
	                dlink.remove();
	            }
	
	        };
	        self.keyValueRow = function(){
	            this.pairs = ko.observableArray([]);
	        };
	        self.keyPairs = function(key, value){
	            this.key = ko.observable(key);
	            this.value = ko.observable(value);
	        };
	        self.getImportedComponentTitleById = function(componentId){
	            var componentInfo = _.find(self.importedComponents(), function(o) {  return o.component.definition.Id == componentId; });
	
	            switch (componentInfo){
	                case null:
	                    return null;
	                default:
	                    return componentInfo.component.definition.Title;
	            }
	            return 'Reference not found either';
	        };
	        self.getOtherDsByTitle = function(title){
	            var componentInfo = _.filter(self.otherAppDataSources(), {Title: title});
	            if(componentInfo === null){
	                return null;
	            }
	            return componentInfo[0];
	        };
	        self.getComponentById = function(componentId){
	            for(var i=0; i < self.components().length ; i++){
	                var componentInfo = _.filter(self.components()[i].dataRow(), {id: componentId});
	                if(componentInfo.length === 0){
	                }
	                switch (componentInfo.length){
	                    case 0:
	                        componentInfo = _.filter(self.otherAppComponents(), {Id: componentId});
	                        if(componentInfo.length == 1){
	                            return componentInfo[0];
	                        }
	                        break;
	                    case 1:
	                        return componentInfo[0].data;
	                    default:
	                    //            return 'Reference found more than once... that\'s very bad';
	                }
	            }
	            return null;
	        };
	        self.getComponentTitleById = function(componentId){
	            for(var i=0; i < self.components().length ; i++){
	                var componentInfo = _.filter(self.components()[i].dataRow(), {id: componentId});
	                switch (componentInfo.length){
	                    //          case 0:
	                    //            return null;
	                    //            break;
	                    case 1:
	                        return componentInfo[0].data.Title;
	                    default:
	                    //            return 'Reference found more than once... that\'s very bad';
	                }
	            }
	            return null;
	        };
	        self.getComponentIdByName = function(componentType, componentName){
	            for(var i=0; i < self.components().length ; i++){
	                for (var j=0; j < self.components()[i].dataRow().length; j++){
	                    if(self.components()[i].desc == componentType && self.components()[i].dataRow()[j].data.Title == componentName ){
	                        return self.components()[i].dataRow()[j].data.Id;
	                    }
	                }
	            }
	            return null;
	        };
	        self.components = ko.observableArray([]);
	        self.components.push(new self.keyEntry('getAppConfigsDS', 'App', 'ApplicationName', 'AppId', true, true));
	        self.components.push(new self.keyEntry('getViewConfigsDS', 'Design', 'Title', 'Id', true, false));
	        self.components.push(new self.keyEntry('getListsDS', 'List', 'Title', 'Id', true, true));
	        self.getListsDSIndex = self.components().length - 1;
	        self.components.push(new self.keyEntry('getExtensionConfigsDS', 'Extension', 'Title', 'Id', true, false));
	        self.components.push(new self.keyEntry('getGridConfigsDS', 'View', 'Title', 'Id', true, false));
	        self.components.push(new self.keyEntry('getChartConfigsDS', 'Chart', 'Title', 'Id', true, false));
	        self.components.push(new self.keyEntry('getActionConfigsDS', 'Form', 'Title', 'Id', true, false));
	        self.components.push(new self.keyEntry('getLayoutConfigsDS', 'Page Layout', 'Title', 'Id', true, false));
	        //    self.components.push(new self.keyEntry('getSiteAdminsDS', 'a'));
	        //    self.components.push(new self.keyEntry('getConnectionsDS', 'a', 'Name', 'Id'));
	        //    self.components.push(new self.keyEntry('getLocalStorageDS', 'a', 'key', 'value'));
	        //    self.components.push(new self.keyEntry('getRolesDS', 'a', 'Name', 'Id'));
	        //    self.components.push(new self.keyEntry('getLibraryConfigsDS',  'a'));
	        //    self.components.push(new self.keyEntry('getAppInvitesDS',  'a'));
	        //    self.components.push(new self.keyEntry('getApplicationsDS', 'a', 'Id', 'Id'));
	        //    self.components.push(new self.keyEntry('getListItemsDS', 'a', 'Title', 'Id'));
	        //    self.components.push(new self.keyEntry('getUsersDS', 'a', 'DisplayName', 'Id'));
	        //    self.components.push(new self.keyEntry('getCurrentUserDS', 'a', 'DisplayName', 'Id'));
	        //    self.components.push(new self.keyEntry('getCapabilitiesDS', 'a', 'ConnectorId', 'Id'));
	        //    self.components.push(new self.keyEntry('getListItemDataSourceById', 'a', 'getListItemDataSourceById'));
	        self.replaceExtension = function(sourceExtension){
	            var rFrom = self.getComponentById(sourceExtension.id);
	            var rTo = self.getComponentById(sourceExtension.replaceToSelected());
	            rTo.JSFiles = rFrom.JSFiles;
	            rTo.CSSFiles = rFrom.CSSFiles;
	            // Only set datasources if we're in the same App
	            if(self.appId() == self.destinationApp()){
	                rTo.DataSources = rFrom.DataSources;
	            }
	            rTo.ViewModel = rFrom.ViewModel;
	            rTo.Template = rFrom.Template;
	            rTo.Description = rFrom.Description;
	            rTo.ConfigJSON = rFrom.ConfigJSON;
	
	            $.ajax({
	                method: "PUT",
	                headers: {
	                    Accept: 'application/json,odata.metadata=minimal',
	                    AppId : self.destinationApp()
	                },
	                contentType: 'application/json',
	                url: self.baseURL + "/odata/ExtensionConfigs('" + rTo.Id +  "')",
	                data: JSON.stringify(rTo)
	            })
	                .done(function( msg ) {
	                    cc.notification.trigger('success', {title: 'Extension Updated', message: msg.Title + '<br />' + msg.Id});
	                })
	                .fail(function( msg ) {
	                    cc.notification.trigger('error', {title: 'Extension Update Failed', message: msg});
	                });
	
	        };
	        self.copyExtension = function(existingExtension){
	            self.adjustedComponent(new self.makeAdjustedComponent(existingExtension.data));
	            var datasources = [];
	            // Only set datasources if we're in the same App
	            if(self.appId() == self.destinationApp()){
	                datasources = self.adjustedComponent().DataSources;
	            } else {
	                $.each(self.adjustedComponent().DataSources, (function(index, datasourceId) {
	                    datasources.push(callme(datasourceId));
	                }));
	            }
	            function callme(id){
	                return self.getOtherDsByTitle(self.getComponentById(id).Title).Id;
	            }
	
	            var importJSON = {
	                JSFiles: self.adjustedComponent().JSFiles,
	                CSSFiles: self.adjustedComponent().CSSFiles,
	                DataSources: datasources,
	                ViewModel: self.adjustedComponent().ViewModel,
	                Template: self.adjustedComponent().Template,
	                Title: existingExtension.copyToTitle(),
	                Description: self.adjustedComponent().Description(),
	                ConfigJSON: self.adjustedComponent().ConfigJSON,
	                Permissions: self.adjustedComponent().Permissions,
	                Tenant: existingExtension.data.Tenant,
	                AppId: self.destinationApp(),
	                OrginalId: "",
	                Recycled: false,
	                Version: 0
	            };
	            $.ajax({
	                method: "POST",
	                headers: {
	                    Accept: 'application/json,odata.metadata=minimal',
	                    AppId : self.destinationApp()
	                },
	                contentType: 'application/json',
	                url: self.baseURL + "/odata/ExtensionConfigs",
	                data: JSON.stringify(importJSON)
	            })
	                .done(function( msg ) {
	                    cc.notification.trigger('success', {title: 'Extension Created', message: msg.Title + '<br />' + msg.Id});
	                });
	
	        };
	        self.dataRowItem = function(selectDefault, componentType, item){
	            this.selected = ko.observable(selectDefault);
	            this.componentType =  componentType;
	            this.id = item.Id;
	            this.data =  item;
	            this.copyToTitle = ko.observable(item.Title + ' copy');
	            this.replaceToSelected = ko.observable();
	            if(self.appId() === self.destinationApp()){
	                this.replaceToSelected(item.Id);
	            }
	            //ko.observable();
	            this.replaceEnabled = ko.computed(function() {
	                return true;
	/*
	                var enabled = false;
	                if(self.appId() != self.destinationApp()){
	                    return true;
	                }
	                return this.id != this.replaceToSelected();
	*/
	            }, self);
	            this.replace = ko.observable();
	        };
	        self.callApiFunction = function(apikey){
	            var thisApiFunctionInstance = _.find(self.components(), {
	                key : apikey.key
	            });
	            thisApiFunctionInstance.callInProgress(true);
	            /*jshint -W061 */
	            var thisApiFunction = eval('cc.api.' + apikey.key + '()');
	            var expandParm = null;
	            switch (apikey.key){
	                case 'getAppConfigsDS':
	                    //expandParm = {$expand: 'ConfigJSON'};
	                    break;
	                case 'getViewConfigsDS':
	                    //expandParm = {$expand:'Tabs($expand=Views)'};
	                    break;
	                case 'getListsDS':
	                    expandParm = {$expand: 'Fields'};
	                    break;
	                case 'getLayoutConfigsDS':
	                    expandParm = {$expand: 'Rows($expand=Columns($expand=Widgets))'};
	                    break;
	                default:
	            }
	            thisApiFunction.read(expandParm).then(function () {
	                thisApiFunctionInstance.called(true);
	                thisApiFunctionInstance.valueRow.removeAll();
	                thisApiFunction.data().sort(function(a,b) {return (a.Title.toLowerCase() > b.Title.toLowerCase()) ? 1 : ((b.Title.toLowerCase() > a.Title.toLowerCase()) ? -1 : 0);} );
	
	                for (var i = 0; i < thisApiFunction.data().length; i++) {
	                    switch (apikey.key){
	                        case 'getAppConfigsDS':
	                            self.exportFileName(thisApiFunction.data()[0].ApplicationName);
	                            break;
	                        case 'getActionConfigsDS':
	                            break;
	                        case 'getExtensionConfigsDS':
	                            break;
	                        default:
	                    }
	                    thisApiFunctionInstance.valueRow.push(new self.keyValueRow());
	                    thisApiFunctionInstance.dataRow.push(new self.dataRowItem(thisApiFunctionInstance.selectDefault, apikey.desc, thisApiFunction.data()[i]));
	                    thisApiFunctionInstance.selectionOptions.push({text: thisApiFunction.data()[i].Title, value: thisApiFunction.data()[i].Id});
	                    thisApiFunctionInstance.targetSelectionOptions.push({text: thisApiFunction.data()[i].Title, value: thisApiFunction.data()[i].Id});
	                    thisApiFunctionInstance.rawDataRow.push(thisApiFunction.data()[i]);
	                    for (var key in thisApiFunction.data()[i]){
	                        switch (typeof thisApiFunction.data()[i][key]){
	                            case 'function':
	                                //console.log(typeof thisApiFunction.data()[i][key], key);
	                                break;
	                            case 'object':
	                                //console.log(typeof thisApiFunction.data()[i][key], key, thisApiFunction.data()[i][key]);
	                                for (var key1 in thisApiFunction.data()[i][key]){
	                                    //						console.log(key1, thisApiFunction.data()[i][key][key1]);
	                                }
	                                break;
	                            default:
	                                thisApiFunctionInstance.valueRow()[thisApiFunctionInstance.valueRow().length - 1].pairs.push(new self.keyPairs(key, thisApiFunction.data()[i][key]));
	                            //                console.log(typeof thisApiFunction.data()[i][key], key, thisApiFunction.data()[i][key]);
	                        }
	                    }
	                }
	                thisApiFunctionInstance.callInProgress(false);
	            });
	        };
	        for(var i=0; i < self.components().length; i++){
	            self.callApiFunction(self.components()[i]);
	        }
	}
	
	$.extend(true, AppAdminConsole.prototype, {
	    dispose: function() {
	
	    },
	
	    initSubscriptions: function() {
	        var self = this;
	
	    },
	
	    initComponent: function( view ) {
	//        this.campusPicker = $('.campusPicker', view).kendoDropDownList().data("kendoDropDownList");
	    }
	});
	
	function createViewModel( params, componentInfo ) {
	
	    return new AppAdminConsole(params);
	}
	
	module.exports = {
	    viewModel: {
	        createViewModel: createViewModel
	    },
	    template: template
	};


/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "<style>\r\n    .fa-warning{\r\n        color: red;\r\n    }\r\n    #differentApp {\r\n        color: red\r\n    }\r\n</style>\r\n<h1>Use at your own risk</h1>\r\n<div data-bind=\"kendoTabStrip: {}\">\r\n    <ul>\r\n        <li class=\"k-state-active\">Export</li>\r\n        <li>Import</li>\r\n        <li style=\"display: none\">GitHub</li>\r\n        <li>Copy/Replace</li>\r\n    </ul>\r\n    <div id=\"exportTabContent\">\r\n        <div class=\"k-content\">\r\n            <input type=\"text\" data-bind=\"textInput: $component.exportFileName\" />\r\n            <button class=\"button\" type=\"button\" data-bind=\"visible: $component.exportFileName().trim() != '', click: $component.exportComponent\" >\r\n                <i class=\"fa fa-fw fa-cloud-download\"></i>\r\n                Export\r\n            </button>\r\n        </div>\r\n        <br />\r\n        <div data-bind=\"kendoTabStrip: {}\">\r\n            <ul data-bind=\"foreach: $component.components\">\r\n                <li data-bind=\"css: {'k-state-active': $index() == 0}\">\r\n                    <i class=\"fa fa-fw fa-cog fa-spin\" data-bind=\"visible: callInProgress\"></i>\r\n\r\n                    <span data-bind=\"text: desc + ' (' + selectedRowCount() + '/' + dataRow().length + ')'\"></span>\r\n                </li>\r\n            </ul>\r\n            <!-- ko foreach: $component.components -->\r\n            <div class=\"row\">\r\n                <div class=\"col-md-11\">\r\n                    <span data-bind=\"visible: called() && valueRow().length == 0\">No Components</span>\r\n          <span data-bind=\"visible: called() && valueRow().length > 0\">\r\n            <div class=\"k-content\">\r\n              <button class=\"button\" type=\"button\" data-bind=\"visible: !selectLocked, click: function(data, event) { $component.checkAll($index()) }\">\r\n                <i class=\"fa fa-fw fa-check\"></i>\r\n                All\r\n              </button>\r\n              <button class=\"button\" type=\"button\" data-bind=\"visible: !selectLocked, click: function(data, event) { $component.checkNone($index()) }\">\r\n                <i class=\"fa fa-fw fa-check\"></i>\r\n                None\r\n              </button>\r\n              <button class=\"button\" type=\"button\" data-bind=\"visible: !selectLocked, click: function(data, event) { $component.checkInverse($index()) }\">\r\n                <i class=\"fa fa-fw fa-check\"></i>\r\n                Invert\r\n              </button>\r\n            </div>\r\n            <table class=\"table table-striped\">\r\n              <thead>\r\n                <th></th>\r\n                <th>Title</th>\r\n                <th>Description</th>\r\n                <th>Modified By</th>\r\n                <th>Modified Date</th>\r\n                <th>References</th>\r\n              </thead>\r\n              <tbody data-bind=\"foreach: dataRow\">\r\n                <tr>\r\n                  <td>\r\n                    <a data-bind=\"attr: {name: 'id-' + data.Id}\"></a>\r\n                    <input type=\"checkbox\" data-bind=\"enable: !$parent.selectLocked, value: data.Id, text: data.Title, checked: selected\" />\r\n                  </td>\r\n                  <td data-bind=\"text: data.Title\"></td>\r\n                  <td data-bind=\"text: data.Description\"></td>\r\n                  <td data-bind=\"text: data.ModifiedBy.DisplayName\"></td>\r\n                  <td data-bind=\"text: data.ModifiedDate\"></td>\r\n                  <td>\r\n                    <!-- ko foreach: data.DataSources -->\r\n                    <div>\r\n                      <span>DataSource | </span>\r\n                      <span data-bind=\"text: $component.getComponentTitleById($data)\"></span>\r\n                    </div>\r\n                      <!-- /ko -->\r\n                    <div data-bind=\"if: data.ListTitle || data.ListId\">\r\n                      <span>List | </span>\r\n                      <span data-bind=\"text: data.ListTitle || $component.getComponentTitleById(data.ListId)\"></span>\r\n                    </div>\r\n                      <!-- ko foreach: data.Rows -->\r\n                      <!-- ko foreach: Columns -->\r\n                      <!-- ko foreach: Widgets -->\r\n                    <div>\r\n                      <span data-bind=\"text: Type.substr(0,1).toUpperCase() + Type.substr(1) + ' | '\"></span>\r\n                      <span data-bind=\"text: $component.getComponentTitleById(Link)\"></span>\r\n                    </div>\r\n                      <!-- /ko -->\r\n                      <!-- /ko -->\r\n                      <!-- /ko -->\r\n                      <!-- ko foreach: data.Tabs -->\r\n                    <div data-bind=\"html: '<em>' + Title + '</em>'\"></div>\r\n                      <!-- ko foreach: Views -->\r\n                    <div>\r\n                      <span data-bind=\"text: Type.substr(0,1).toUpperCase() + Type.substr(1) + ' | '\"></span>\r\n                      <span data-bind=\"text: $component.getComponentTitleById(Link)\"></span>\r\n                    </div>\r\n                      <!-- /ko -->\r\n                      <!-- /ko -->\r\n\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </span>\r\n                </div>\r\n            </div>\r\n            <!-- /ko -->\r\n        </div>\r\n    </div>\r\n    <div id=\"importTabContent\" class=\"row\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <input size=\"200\" style='width: 100%;' accept=\".ccc\" id=\"fileUpload\" data-bind=\"event: { change: function() { $component.uploadFile() } }\"  type=\"file\" />\r\n                <br />\r\n                <button data-bind=\"visible: $component.sourceApp() !== null, click: $component.importComponents\">Import</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\" data-bind=\"visible: $component.sourceApp() !== null\">\r\n            <!-- ko if: $component.importedComponents() !== null -->\r\n            <div class=\"col-md-11\">\r\n                <!-- ko with: $component.sourceApp -->\r\n                <table class=\"table table-striped\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th colspan=\"9\">Source Application</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr>\r\n                        <td>Application Name</td>\r\n                        <td data-bind=\"text:ApplicationName\"></td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Description</td>\r\n                        <td data-bind=\"text:Description\"></td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Modified By</td>\r\n                        <td data-bind=\"text:ModifiedBy.DisplayName + ' ' + ModifiedBy.Email\"></td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Modified Date</td>\r\n                        <td data-bind=\"text:ModifiedDate\"></td>\r\n                    </tr>\r\n                    </tbody>\r\n                </table>\r\n                <!-- /ko -->\r\n                <div data-bind=\"if: $component.importedComponents() !== null\">\r\n\r\n                    Datasource Mapping\r\n                    <table class=\"table table-striped\">\r\n                        <thead>\r\n                        <tr>\r\n                            <th>Imported Datasource</th>\r\n                            <th>App Datasource</th>\r\n                            <th>Imported Schema</th>\r\n                            <th></th>\r\n                            <th>App Schema</th>\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody data-bind=\"foreach: $component.importedDataSources\">\r\n                        <tr>\r\n                            <td>\r\n                                <span data-bind=\"text: title\"></span>\r\n                            </td>\r\n                            <td>\r\n                                <input data-bind=\"kendoComboBox: { dataTextField: 'Title',\r\n                                    dataValueField: 'Id',\r\n                                    data: $component.components()[$component.getListsDSIndex].rawDataRow,\r\n                                    value: appListId,\r\n                                    placeholder: 'Select...'\r\n                                    }\" />\r\n                                <i class=\"fa fa-fw fa-remove\" title=\"Clear selection\" data-bind=\"visible: appListId() != null,\r\n                                                                                   click: function(){this.appListId(null);}\"></i>\r\n                            </td>\r\n                            <td>\r\n                                <ul data-bind=\"foreach: definition.Fields\">\r\n                                    <li>\r\n                                        <input type=\"checkbox\" data-bind=\"checked: _importField\" />\r\n                                        <span data-bind=\"text: Title + ' : ' + FieldType + ' ' + LookUpDisplayField\"></span>\r\n                      <span data-bind=\"visible: FieldType == 'Relation' || FieldType == 'Lookup'\">\r\n                        <i class=\"fa fa-fw fa-arrows-h\"></i>\r\n                          <!-- ko if: RelatedListId != '' -->\r\n                        <span data-bind=\"text: $component.getImportedComponentTitleById(RelatedListId)\"></span>\r\n                          <!-- /ko -->\r\n\r\n                      </span>\r\n                                    </li>\r\n                                </ul>\r\n                            </td>\r\n                            <td>\r\n                                <button data-bind=\"click: $component.importList, visible: appListId() == null\">\r\n                                    <i title=\"Add list to the App\" class=\"fa fa-fw fa-plus fa-2x\"></i>\r\n                                </button>\r\n                            </td>\r\n                            <td>\r\n                                <ul data-bind=\"foreach: appListFields\">\r\n                                    <li data-bind=\"text: Title + ' : ' + FieldType + ' ' + LookUpDisplayField\"></li>\r\n                                </ul>\r\n\r\n                            </td>\r\n                        </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n                <table class=\"table table-striped\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th colspan=\"9\">\r\n                            Uploaded Components\r\n                            <input type=\"checkbox\" data-bind=\"checked: $component.showOnlyImportable\" />\r\n                            Show only importable components\r\n                        </th>\r\n                    </tr>\r\n                    <tr>\r\n                        <th></th>\r\n                        <th>Type</th>\r\n                        <th>Title</th>\r\n                        <th>Description</th>\r\n                        <th>Modified By</th>\r\n                        <th>Modified Date</th>\r\n                        <th>References</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <!-- ko foreach: $component.importedComponents -->\r\n                    <!-- ko with: component -->\r\n                    <tr data-bind=\"visible: !$component.showOnlyImportable() || ($component.showOnlyImportable() && $parent.importable)\">\r\n                        <td data-bind=\"attr: {id: 'id-' + definition.Id}\">\r\n                            <input type=\"checkbox\" data-bind=\"visible: $parent.importable, checked: $parent.selected\"  />\r\n                        </td>\r\n                        <td data-bind=\"text: type\"></td>\r\n                        <td data-bind=\"text: definition.Title || definition.ApplicationName\"></td>\r\n                        <td data-bind=\"text: definition.Description\"></td>\r\n                        <td data-bind=\"text: definition.ModifiedBy.DisplayName + ' ' + definition.ModifiedBy.Email\"></td>\r\n                        <td data-bind=\"text: definition.ModifiedDate\"></td>\r\n                        <td>\r\n                            <span data-bind=\"visible: definition.DataSources && definition.DataSources.length > 0\">DataSources</span>\r\n                            <!-- ko foreach: definition.DataSources -->\r\n                            <div>\r\n                                <a data-bind=\"attr: {href: '#id-' + $data}\"><i class=\"fa fa-fw fa-link\"></i></a>\r\n\r\n                                <span data-bind=\"text: $component.getComponentTitleById($data)\"></span>\r\n                  <span data-bind=\"visible: $component.getComponentTitleById($data) == null\">\r\n                    <span data-bind=\"text: $component.getImportedComponentTitleById($data)\"></span>\r\n                  </span>\r\n\r\n                            </div>\r\n                            <!-- /ko -->\r\n                            <div data-bind=\"if: definition.ListTitle || definition.ListId\">\r\n                                <a data-bind=\"attr: {href: '#id-' + definition.ListId}\"><i class=\"fa fa-fw fa-link\"></i></a>\r\n                                <span>List | </span>\r\n                                <span data-bind=\"text: definition.ListTitle || $component.getComponentTitleById(definition.ListId)\"></span>\r\n                            </div>\r\n                            <!-- ko foreach: definition.Rows -->\r\n                            <!-- ko foreach: Columns -->\r\n                            <!-- ko foreach: Widgets -->\r\n                            <div>\r\n                                <a data-bind=\"attr: {href: '#id-' + Link}\"><i class=\"fa fa-fw fa-link\"></i></a>\r\n                                <span data-bind=\"text: Type.substr(0,1).toUpperCase() + Type.substr(1) + ' | '\"></span>\r\n                                <span data-bind=\"text: $component.getComponentTitleById(Link)\"></span>\r\n                            </div>\r\n                            <!-- /ko -->\r\n                            <!-- /ko -->\r\n                            <!-- /ko -->\r\n                            <!-- ko foreach: definition.Tabs -->\r\n                            <div data-bind=\"html: '<em>' + Title + '</em>'\"></div>\r\n                            <!-- ko foreach: Views -->\r\n                            <div>\r\n                                <a data-bind=\"attr: {href: '#id-' + Link}\"><i class=\"fa fa-fw fa-link\"></i></a>\r\n                                <span data-bind=\"text: Type.substr(0,1).toUpperCase() + Type.substr(1) + ' | '\"></span>\r\n                                <span data-bind=\"text: $component.getComponentTitleById(Link)\"></span>\r\n                            </div>\r\n                            <!-- /ko -->\r\n                            <!-- /ko -->\r\n                        </td>\r\n                    </tr>\r\n                    <!-- /ko -->\r\n                    <!-- /ko -->\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <!-- /ko -->\r\n        </div>\r\n    </div>\r\n    <div id=\"githubTabContent\" class=\"k-content\">\r\n        <table class=\"table table-striped\">\r\n            <thead></thead>\r\n            <tbody>\r\n            <tr>\r\n                <td>\r\n                    GitOwner\r\n                </td>\r\n                <td>\r\n                    <input type=\"text\" data-bind=\"textInput: $component.gitOwner\" />\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    Git User\r\n                </td>\r\n                <td>\r\n                    <input type=\"text\" data-bind=\"textInput: $component.gitUser\" />\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    Git Password/Token\r\n                </td>\r\n                <td>\r\n                    <input type=\"password\" data-bind=\"textInput: $component.gitToken\" />\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    Git Repo\r\n                </td>\r\n                <td>\r\n                    <input style=\"width:300px;\" data-bind=\"kendoComboBox: {\r\n                                                   data: $component.gitRepos,\r\n                                                   dataTextField: 'name', dataValueField: 'name',\r\n                                                   value: $component.gitRepo,\r\n                                                   placeholder: 'Select...'\r\n                                                   }\" />\r\n                    <button data-bind=\"click: $component.getRepos\">Get Repos</button>\r\n                    <input type=\"text\" data-bind=\"textInput: $component.gitRepo\" />\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    GitHub function\r\n                </td>\r\n                <td>\r\n                    <input data-bind=\"kendoComboBox: {\r\n                              data: $component.gitOperations,\r\n                              dataTextField: 'title', dataValueField: 'func',\r\n                              value: $component.gitOperation,\r\n                              placeholder: 'Select...',\r\n                              width: '300px'\r\n                              }\" />\r\n                    <button data-bind=\"click: $component.genericGitCall\">Call GitHub</button>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    Commit to GitHub\r\n                </td>\r\n                <td>\r\n                    <input type=\"text\" data-bind=\"textInput: $component.commitMessage\" />\r\n                    <button data-bind=\"enable: $component.commitMessage().trim() != '', click: $component.gitCommit\">Commit</button>\r\n                </td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n        <div style=\"overflow-y: auto; height: 300px\" data-bind=\"html: $component.gitResults\"></div>\r\n    </div>\r\n    <div id=\"copyReplaceTabContent\">\r\n        Destination App:\r\n        <input data-bind=\"kendoComboBox: {\r\n                      dataTextField: 'title',\r\n                      dataValueField: 'id',\r\n                      data: $component.myApps,\r\n                      value: $component.destinationApp,\r\n                      placeholder: 'Destination App...'\r\n                      }\" />\r\n        <!-- ko if: $component.destinationApp() != $component.appId() -->\r\n        <span id=\"differentApp\">Destination is not the current App</span>\r\n        <!-- /ko -->\r\n        <div data-bind=\"kendoTabStrip: {}\">\r\n            <ul data-bind=\"foreach: $component.components\">\r\n                <li data-bind=\"css: {'k-state-active': $index() == 0}\">\r\n                    <i class=\"fa fa-fw fa-cog fa-spin\" data-bind=\"visible: callInProgress\"></i>\r\n\r\n                    <span data-bind=\"text: desc + ' (' + dataRow().length + ')'\"></span>\r\n                </li>\r\n            </ul>\r\n            <!-- ko foreach: $component.components -->\r\n            <div class=\"row\">\r\n                <div class=\"col-md-11\">\r\n                    <span data-bind=\"visible: called() && valueRow().length == 0\">No Components</span>\r\n          <span data-bind=\"visible: called() && valueRow().length > 0\">\r\n            <table class=\"table table-striped\">\r\n              <thead>\r\n                <th>Title</th>\r\n                <th>Description</th>\r\n                <th>Modified By</th>\r\n                <th>Modified Date</th>\r\n                <th>References</th>\r\n                <th>Copy To</th>\r\n                <th></th>\r\n              </thead>\r\n              <tbody data-bind=\"foreach: dataRow\">\r\n                <tr>\r\n                  <td data-bind=\"text: data.Title\"></td>\r\n                  <td data-bind=\"text: data.Description\"></td>\r\n                  <td data-bind=\"text: data.ModifiedBy.DisplayName\"></td>\r\n                  <td data-bind=\"text: data.ModifiedDate\"></td>\r\n                  <td>\r\n                    <!-- ko foreach: data.DataSources -->\r\n                    <div>\r\n                      <span>DataSource | </span>\r\n                      <span data-bind=\"text: $component.getComponentTitleById($data)\"></span>\r\n                    </div>\r\n                      <!-- /ko -->\r\n                    <div data-bind=\"if: data.ListTitle || data.ListId\">\r\n                      <span>List | </span>\r\n                      <span data-bind=\"text: data.ListTitle || $component.getComponentTitleById(data.ListId)\"></span>\r\n                    </div>\r\n                      <!-- ko foreach: data.Rows -->\r\n                      <!-- ko foreach: Columns -->\r\n                      <!-- ko foreach: Widgets -->\r\n                    <div>\r\n                      <span data-bind=\"text: Type.substr(0,1).toUpperCase() + Type.substr(1) + ' | '\"></span>\r\n                      <span data-bind=\"text: $component.getComponentTitleById(Link)\"></span>\r\n                    </div>\r\n                      <!-- /ko -->\r\n                      <!-- /ko -->\r\n                      <!-- /ko -->\r\n                      <!-- ko foreach: data.Tabs -->\r\n                    <div data-bind=\"html: '<em>' + Title + '</em>'\"></div>\r\n                      <!-- ko foreach: Views -->\r\n                    <div>\r\n                      <span data-bind=\"text: Type.substr(0,1).toUpperCase() + Type.substr(1) + ' | '\"></span>\r\n                      <span data-bind=\"text: $component.getComponentTitleById(Link)\"></span>\r\n                    </div>\r\n                      <!-- /ko -->\r\n                      <!-- /ko -->\r\n\r\n                  </td>\r\n                    <!-- ko if: $parent.desc == 'Extension' -->\r\n                  <td>\r\n                    <input type=\"text\" data-bind=\"value: copyToTitle\" />\r\n                  </td>\r\n                  <td>\r\n                    <button class=\"button\" data-bind=\"click: $component.copyExtension\">Copy</button>\r\n                  </td>\r\n                  <td>\r\n                    <input data-bind=\"kendoDropDownList: { dataTextField: 'text', dataValueField: 'value', data: $component.destinationSelectionOptions, value: replaceToSelected, optionLabel: 'Select target...' }\" />\r\n                  </td>\r\n                  <td>\r\n                    <button class=\"button\" data-bind=\"click: $component.replaceExtension, visible: replaceEnabled\">Replace</button>\r\n                  </td>\r\n                    <!-- /ko -->\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </span>\r\n                </div>\r\n            </div>\r\n            <!-- /ko -->\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var _ = cc.lodash,
	  template = __webpack_require__(9),
	  fn = __webpack_require__(10);
	
	/**
	 * @summary App Filter Builder component
	 * @desc App Filter Builder component
	 * <br />
	 * Creates a Filter builder that produces a JSON.stringified binary filter tree.
	 * @namespace
	 * @example <caption>App Filter Builder</caption>
	 * // Extension JS
	 * ...
	 * this.connId = 'GUID';
	 * this.listId = 'GUID';
	 * this.jsonFilter = ko.observable('');
	 * ...
	 * this.jsonFilter.subscribe(function(val){
	 *  // jsonFilter get's updated on
	 *
	 * })
	 * //
	 * // Extension HTML
	 * // <cn-app-filter-builder params="listId: listId, connId: connId, jsonFilter: jsonFilter"></cn-app-filter-builder>
	 */
	function AppFilterBuilder(params) {
	
	  if (!params.listId && typeof params.listId !== 'string') {
	    throw new Error('cc-app-filter-builder: Missing or wrong param \'listId\'');
	  }
	
	  if (!params.connId && typeof params.connId !== 'string') {
	    throw new Error('cc-app-filter-builder: Missing or wrong param \'connId\'');
	  }
	
	  if (!params.jsonFilter && !ko.isObservable(params.jsonFilter)) {
	    throw new Error('cc-app-filter-builder: Missing or wrong param \'jsonFilter\'');
	  }
	
	  this.listId = params.listId;
	  this.connectionId = params.connId;
	  this.jsonFilter = params.jsonFilter;
	
	  this.isLoading = ko.observable(true);
	  this.fieldEditableDS = ko.observable();
	  this.availableColumns = ko.observable();
	  this.fields = ko.computed(function() {
	    return _.map(ko.unwrap(this.availableColumns), function(field) {
	      return { name: field.staticName, display: field.title, field: field.field };
	    });
	
	  }, this);
	
	  this.init();
	}
	
	$.extend(true, AppFilterBuilder.prototype, {
	  dispose: function() {
	
	  },
	
	  init: function() {
	    var self = this;
	
	    fn.getFieldsCollection(this.connectionId, this.listId)
	      .then(function( resp ) {
	        var columns = resp.fields,
	          model = resp.model,
	          ds = fn.getKendoListDS(self.connectionId, self.listId, model);
	
	        self.availableColumns(columns);
	        self.fieldEditableDS(ds);
	        self.isLoading(false);
	
	      });
	  },
	
	  initComponent: function(view) {
	
	  }
	});
	
	function createViewModel(params) {
	
	  return new AppFilterBuilder(params);
	}
	
	module.exports = {
	  viewModel: {
	    createViewModel: createViewModel
	  },
	  template: template
	};
	
	


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<div data-bind=\"initComponent\">\r\n  <div data-bind=\"ifnot: isLoading\">\r\n    <filter-builder params=\"fields: fields(),\r\n                            filter: jsonFilter,\r\n                            fieldEditableDS: fieldEditableDS\">\r\n    </filter-builder>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  getFieldsCollection: __webpack_require__(11),
	  getKendoListDS: __webpack_require__(12)
	};


/***/ },
/* 11 */
/***/ function(module, exports) {

	var _ = cc.lodash;
	
	function getFieldsCollection( connectionId, listId ) {
	  var listModel = cc.api.getConnectionListModelById(connectionId, listId);
	
	  return listModel
	    .then(function( model ) {
	        var fields = model.fields ? model.fields : [],
	          sorted = _.sortBy(fields, 'Title'),
	          result = [];
	
	        _.each(sorted, function( field) {
	          var isHidden = field.hasOwnProperty('Hidden') ? field.Hidden : false;
	
	          if ( !isHidden ) {
	
	            result.push({
	              staticName: field.StaticName,
	              title: field.Title,
	              field: field
	            });
	
	          }
	
	        });
	
	        return {
	          fields: result,
	          model: model
	        };
	
	      }
	    );
	
	}
	
	module.exports = getFieldsCollection;


/***/ },
/* 12 */
/***/ function(module, exports) {

	function getKendoListDS( connectionId, listId, model ) {
	  model = model || {};
	
	  var options = $.extend(true, {}, {
	    schema: {
	      model: model.listModel
	    }
	  }, {
	    ccModel: model
	  });
	
	  return cc.api.getConnectionListItemDataSourceById(connectionId, listId, options);
	
	}
	
	module.exports = getKendoListDS;


/***/ },
/* 13 */
/***/ function(module, exports) {

	/**
	 * Created by david.smiley on 5/12/2016.
	 */
	module.exports = {
	    hello: function(){
	        alert('Hello');
	    }
	};


/***/ }
/******/ ]);
//# sourceMappingURL=components.js.map