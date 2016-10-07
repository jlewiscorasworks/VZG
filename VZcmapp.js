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

	__webpack_require__(1);
	// require('./cmapp/datasource');
	//require('./cmapp/getStickies');
	// require('./cmapp/numvalOrValue');


/***/ },
/* 1 */
/***/ function(module, exports) {

	// DynamicSelector provides a method for determining when DOM elements are ready
	var selectors = [],
	    observer,
	    DynamicSelector = function(selector) {
	        this.selector = selector;
	        this.ready = function(fn) {
	            // Store the selector and callback to be monitored
	            selectors.push(this);
	
	            if(observer === undefined){
	                // Watch for changes in the document
	                /* jshint -W056 */
	                observer = new (MutationObserver || WebKitMutationObserver)(function(){
	                    // Check the DOM for elements matching  a stored selector
	                    selectors.forEach(function(dynamicSelector) {
	                        // Query for elements matching the specified selector
	                        $(dynamicSelector.selector).each(function() {
	                            // Make sure the callback isn't invoked with the
	                            // same element more than once
	                            if(!this.ready){
	                                this.ready = true;
	                                // Invoke the callback with the element
	                                fn.call(this, this);
	                            }
	                        });
	                    });
	                });
	                observer.observe(document.documentElement, {
	                    childList: true,
	                    subtree: true
	                });
	            }
	        };
	    };
	new DynamicSelector('.cc-sidebar-nav, .notification-navbar, .k-tabstrip-wrapper').ready(function(element){
	    // Add loading spinner placeholder for sticky notes
	    if(element.classList.contains('notification-navbar')){
	        if($('#stickyBadge').length ===0 ){
	            $('.notification-navbar').append('<li id="stickySpinner"><a href="#"><i class="fa fa-spin fa-inverse fa-circle-o-notch"></i></a></li>');
	        }
	        cmApp.notificationNavbarDfer.resolve();
	    }
	    // Add loading spinner placeholder for nav panel
	    if(element.classList.contains('cc-sidebar-nav')){
	        if(cmApp.thisApp !== null){
	            var sections = [
	                cc.sidebar.createSection({
	                    title: 'Loading...',
	                    icon: 'fa-spin fa-circle-o-notch'
	                })
	            ];
	            cc.sidebar.setSections(sections);
	        }
	    }
	    // Add markup for sticky note window
	    if(element.classList.contains('k-tabstrip-wrapper')){
	        $('.k-tabstrip-wrapper').append(stickyWindowMarkup());
	    }
	});
	
	if ($.when.all === undefined) {
	    $.when.all = function (deferreds) {
	        var deferred = new $.Deferred();
	        $.when.apply(jQuery, deferreds).then(
	            function () {
	                deferred.resolve(Array.prototype.slice.call(arguments));
	            },
	            function () {
	                deferred.fail(Array.prototype.slice.call(arguments));
	            });
	
	        return deferred;
	    };
	}
	window.cmApp = {};
	/**
	 * @summary CORASManage Application script library
	 * @version 1.0
	 * @copyright Copyright &reg; CORASCloud Inc.
	 * @author David Smiley <david.smiley@corascloud.com>
	 * @namespace
	 */
	cmApp = {};
	cmApp = window.cmApp;
	/**
	 * @summary Deferred resolves when cmApp is ready
	 */
	cmApp.ready = $.Deferred();
	/**
	 * @summary Base URL including protocol and server. No trailing /
	 */
	cmApp.baseURL = window.location.origin;
	
	/**
	 * @summary Method to get URL param values
	 * @param variable
	 * @returns {*}
	 */
	cmApp.getQueryVariable = function ( variable ) {
	    var query = window.location.search.substring( 1 );
	    var vars = query.split( "&" );
	    for ( var i = 0; i < vars.length; i++ ) {
	        var pair = vars[i].split( "=" );
	        if ( pair[0] == variable ) {
	            return pair[1];
	        }
	    }
	    return false;
	};
	cmApp.removeParam = function(key, sourceURL) {
	    var rtn = sourceURL.split("?")[0],
	        param,
	        params_arr = [],
	        queryString = (sourceURL.indexOf("?") !== -1) ? sourceURL.split("?")[1] : "";
	    if (queryString !== "") {
	        params_arr = queryString.split("&");
	        for (var i = params_arr.length - 1; i >= 0; i -= 1) {
	            param = params_arr[i].split("=")[0];
	            if (param === key) {
	                params_arr.splice(i, 1);
	            }
	        }
	        rtn = rtn + "?" + params_arr.join("&");
	    }
	    return rtn;
	};
	/**
	 * @summary Reference to CMViewModel.self
	 */
	/**
	 * @summary Get a kendo datasource object for a List
	 * @param {string} title - title of the List
	 * @param {boolean} update - must the datasource have Contributor rights
	 * @returns {object} kendo datasource
	 * @example <caption>cmApp.datasource</caption>
	 *      cmApp.datasource('Tasks', true).done(function (ds) {
	     *if (ds === null) {
	     *	console.log('Handle condition when datasource connection not found');
	     *} else {
	     *		//Filters and other settings as needed
	     *			//var filter = '{"logic":"and","filters":[{"field":"Project/ItemId","operator":"eq","value":"' + cmApp.selectedProject + '"}]}';
	     *         //   ds.filter(JSON.parse(filter));
	     *
	     *    ds.read().then(function () {
	     *       if (ds.data().length >= 1) {
	     *           console.log('Handle condition when data is returned');
	     *       } else {
	     *           console.log('Handle condition when no data is returned');
	     *       }
	     *   });
	     *}
	     *});
	 */
	cmApp.availableDataSourcesDfer = $.Deferred();
	cmApp.notificationNavbarDfer = $.Deferred();
	cmApp.portfolioProjectsDfer = $.Deferred();
	cmApp.datasource = function (title, update) {
	    var deferred = $.Deferred();
	    $.when(cmApp.availableDataSourcesDfer).done(function () {
	        var listItemDS, ds;
	        var updateLevel = update || false;
	        if (updateLevel) {
	            ds = _.find(cmApp.availableDataSources, {
	                Title: title,
	                CrossAppAccessLevel: "Contributor"
	            });
	
	        } else {
	            ds = _.find(cmApp.availableDataSources, {
	                Title: title
	            });
	        }
	        if (ds === undefined) {
	            return deferred.resolve(null);
	        }
	        var connId = ds.ConnectionId;
	        var listId = ds.Id;
	
	        cc.api.getConnectionListModelById(connId, listId).then(function (model) {
	            listItemDS = cc.api.getListItemDataSourceById(listId, {
	                schema: {
	                    model: model.listModel
	                },
	                ccModel: model
	            }, connId);
	            return deferred.resolve(listItemDS);
	        })
	            .fail(function () {
	                // console.log(arguments);
	            });
	    });
	    return deferred.promise();
	};
	/**
	 * @summary Default Wait Message
	 */
	cmApp.waitMessages = ['Please wait'];
	/**
	 * @summary Read configurable Wait Messages
	 */
	cmApp.datasource('Wait Messages').done(function (ds) {
	    ds.read().then(function () {
	        if (ds.data().length >= 1) {
	            var msgs = ds.data();
	            $.each(msgs, function (index, msg) {
	                if ((msg.DateActive === null || moment(msg.DateActive).isBefore(moment())) &&
	                    (msg.DateInactive === null || moment(msg.DateInactive).isAfter(moment()))) {
	                    cmApp.waitMessages.push(msg.Title);
	                }
	            });
	            if(cmApp.waitMessages.length > 1){
	                cmApp.waitMessages.shift();
	            }
	        }
	    });
	});
	/**
	 * @summary Refresh Sticky notes
	 * @returns {null}
	 */
	cmApp.getStickies = function () {
	    var deferred = $.Deferred(); // Establish Deferred
	    $.when(cmApp.ready).done(function () {
	        var getStickies = cnc.fn.generateUUID(); // Generate a unique Id
	        cc.events.on(getStickies, function () { // Create listener for the returning event
	            cc.events.off(getStickies); // Turn off event listening on this channel
	            deferred.resolve(); // Resolved Deferred
	        }, self);
	        cc.events.trigger('cmApp', { // Trigger request to the ViewModel
	            method: 'getStickies',
	            responseChannel: getStickies // This is the channel you are tuned in to
	        });
	    });
	    return deferred.promise();
	};
	/**
	 * @summary Listen for changes in URL hash (navigate to new display within the App)
	 */
	window.addEventListener("hashchange", cmApp.getStickies, false);
	
	/**
	 * @summary Return a number value based on input
	 * @param {string} valueToCheck - the input value
	 * @param {number} whenNaN - numeric value to use when input is NaN
	 * @returns {number} Number value of input or whenNan value or 0
	 */
	cmApp.numvalOrValue = function(valueToCheck, whenNaN){
	    whenNan = whenNaN || 0;
	    if(isNaN(valueToCheck)){
	        return whenNaN;
	    } else {
	        return Number(valueToCheck);
	    }
	};
	/**
	 * @summary Current User details
	 */
	cmApp.currentUser = null;
	/**
	 * @summary Details about the current CorasManage App
	 */
	cmApp.app = {};
	/**
	 * @summary Details about the all CorasManage Apps
	 */
	cmApp.apps = [];
	/**
	 * @summary GUID of current App
	 */
	cmApp.currentAppId = window.location.href.split('?AppId=')[1].substr(0, 36);
	/**
	 * @summary Static Title and Ids of CorasManage Apps
	 */
	cmApp.permIds = [];
	cmApp.permIds.push({
	    title: 'Onboard',
	    id: '59f5e350baa5467e9f01c0e8e78b056d',
	    helpId: 'Onboard-Home-Home'
	});
	cmApp.permIds.push({
	    title: 'Portfolios',
	    id: '3051edb838584190a0e192ecccd85c8b',
	    helpId: 'Port-Home-Home'
	});
	cmApp.permIds.push({
	    title: 'Projects',
	    id: 'c04aee4c560a450ca864c2f69b4be07e',
	    helpId: 'Project-Home-Home'
	});
	cmApp.permIds.push({
	    title: 'Executive Dashboard',
	    id: 'a7272e0c31b7489a8a770618c736cac9',
	    helpId: 'Exec-Home-Home'
	});
	cmApp.permIds.push({
	    title: 'Admin',
	    id: '08e759ceb82b4ec690c2046291c5ba36',
	    helpId: 'Admin-Home-Home'
	});
	cmApp.permIds.push({
	    title: 'Data',
	    id: '5d7759ba55d54b0a9b9e8487b691de67',
	    helpId: 'Data-Home-Home'
	});
	
	/**
	 * @summary Static Title (as defined in cmApp.permIds) of this app
	 */
	cmApp.thisApp = null;
	/**
	 * @summary Get the GUID for a named App
	 * @param {string} permTitle - Static Title of CorasManage App as defined in cmApp.permIds
	 * @returns {GUID}
	 */
	cmApp.getAppId = function (permTitle) {
	    var permId = _.find(cmApp.permIds, {
	        title: permTitle
	    }).id;
	    return _.find(cmApp.apps, {
	        PermId: permId
	    }).AppId_cc_;
	};
	/**
	 * @summary GUID of the currently selected Project
	 */
	cmApp.selectedProject = null;
	/**
	 * @summary Array of all projects (icon, id, title)
	 */
	cmApp.projects = [];
	/**
	 * @deprecated Use cmApp.selectedProject
	 */
	cmApp.getSelectedProject = function () {
	    var deferred = $.Deferred(); // Establish Deferred
	    var getSelectedProject = cnc.fn.generateUUID(); // Generate a unique Id
	    cc.events.on(getSelectedProject, function (projectId) { // Create listener for the returning event
	        cc.events.off(getSelectedProject); // Turn off event listening on this channel
	        deferred.resolve(projectId); // Resolved Deferred
	    }, self);
	    cc.events.trigger('cmApp', { // Trigger request to the ViewModel
	        method: 'getSelectedProject',
	        responseChannel: getSelectedProject // This is the channel you are tuned in to
	    });
	    return deferred.promise();
	};
	/**
	 * @summary Set the selected Project
	 * @param {GUID} portfolioId - GUID of the Project to be set as selected
	 * @returns {jQuery.Promise.then<Array<GUID>> | jQuery.Promise.fail<error>}
	 */
	cmApp.setSelectedProject = function (projectId) {
	    var deferred = $.Deferred(); // Establish Deferred
	    var setSelectedProject = cnc.fn.generateUUID(); // Generate a unique Id
	    cc.events.on(setSelectedProject, function (dataSources) { // Create listener for the returning event
	        cc.events.off(setSelectedProject); // Turn off event listening on this channel
	        deferred.resolve(dataSources); // Resolved Deferred
	    }, self);
	    cc.events.trigger('cmApp', { // Trigger request to the ViewModel
	        method: 'setSelectedProject',
	        projectId: projectId,
	        responseChannel: setSelectedProject // This is the channel you are tuned in to
	    });
	    return deferred.promise();
	
	};
	/**
	 * @summary Add query to the Portfolios list
	 * @param {object} newQuery - Query to be added
	 * @returns {jQuery.Promise.then<boolean> | jQuery.Promise.fail<error>}
	 */
	cmApp.addQueryToPortfolios = function (query) {
	    var deferred = $.Deferred(); // Establish Deferred
	    var addQueryToPortfolios = cnc.fn.generateUUID(); // Generate a unique Id
	    cc.events.on(addQueryToPortfolios, function (dataSources) { // Create listener for the returning event
	        cc.events.off(addQueryToPortfolios); // Turn off event listening on this channel
	        deferred.resolve(dataSources); // Resolved Deferred
	    }, self);
	    cc.events.trigger('cmApp', { // Trigger request to the ViewModel
	        method: 'addQueryToPortfolios',
	        query: query,
	        responseChannel: addQueryToPortfolios // This is the channel you are tuned in to
	    });
	    return deferred.promise();
	
	};
	/**
	 * @summary GUID of the currently selected Portfolio
	 */
	cmApp.selectedPortfolio = null;
	/**
	 * @summary Array of all portfolios (adHocFilter, filterMethod, icon, id, projectFilter, projectIds, title)
	 */
	cmApp.portfolios = [];
	/**
	 * @deprecated Use cmApp.selectedPortfolio
	 */
	cmApp.getSelectedPortfolio = function () {
	    var deferred = $.Deferred(); // Establish Deferred
	    var getSelectedPortfolio = cnc.fn.generateUUID(); // Generate a unique Id
	    cc.events.on(getSelectedPortfolio, function (portfolioId) { // Create listener for the returning event
	        cc.events.off(getSelectedPortfolio); // Turn off event listening on this channel
	        deferred.resolve(portfolioId); // Resolved Deferred
	    }, self);
	    cc.events.trigger('cmApp', { // Trigger request to the ViewModel
	        method: 'getSelectedPortfolio',
	        responseChannel: getSelectedPortfolio // This is the channel you are tuned in to
	    });
	    return deferred.promise();
	};
	/**
	 * @summary Set the selected Portfolio
	 * @param {GUID} portfolioId - GUID of the Portfolio to be set as selected
	 * @returns {jQuery.Promise.then<Array<GUID>> | jQuery.Promise.fail<error>}
	 */
	cmApp.setSelectedPortfolio = function (portfolioId) {
	    var deferred = $.Deferred(); // Establish Deferred
	    var setSelectedPortfolio = cnc.fn.generateUUID(); // Generate a unique Id
	    cc.events.on(setSelectedPortfolio, function (dataSources) { // Create listener for the returning event
	        cc.events.off(setSelectedPortfolio); // Turn off event listening on this channel
	        deferred.resolve(dataSources); // Resolved Deferred
	    }, self);
	    cc.events.trigger('cmApp', { // Trigger request to the ViewModel
	        method: 'setSelectedPortfolio',
	        portfolioId: portfolioId,
	        responseChannel: setSelectedPortfolio // This is the channel you are tuned in to
	    });
	    return deferred.promise();
	};
	/**
	 * @summary Add an item to the User App Settings list for the current user
	 * @returns {jQuery.Promise.then<Array<GUID>> | jQuery.Promise.fail<error>}
	 */
	cmApp.addUserAppSetting = function () {
	    var userOpts = new cnc.currentUser.options();
	    cnc.currentUser.get(userOpts)
	        .fail(function (results) {
	        })
	        .then(function (results) {
	            var userO = new cnc.objects.user();
	            cmApp.currentAppId = window.location.href.split('?AppId=')[1].substr(0, 36);
	            userO.UserName = results.UserName;
	            userO.DisplayName = results.DisplayName;
	            userO.Email = results.Email;
	            userO.Id = results.Id;
	            cmApp.datasource('User App Settings', true).done(function (ds) {
	                if (ds === null) {
	                    // console.log('Handle condition when datasource connection not found');
	                } else {
	                    var newAppSetting = ds.add();
	                    newAppSetting.AppUser = userO;
	                    var mostRecentApp = new cnc.objects.relation();
	                    mostRecentApp.Id = _.find(cmApp.availableDataSources, {Title: 'App References'}).Id;
	                    mostRecentApp.ItemId = _.find(cmApp.apps, {AppId_cc_: cmApp.currentAppId}).Id;
	                    mostRecentApp.Title = _.find(cmApp.apps, {AppId_cc_: cmApp.currentAppId}).Title;
	                    newAppSetting.MostRecentApp = mostRecentApp;
	                    newAppSetting.Title = userO.DisplayName;
	                    // console.log(newAppSetting);
	                    ds.sync();
	                }
	            });
	
	        });
	};
	/**
	 * @summary When create a dynamic portfolio, this is preview of projects
	 * @param filterString
	 * @returns {*}
	 */
	cmApp.getProjectsUsingFilter = function(filterString){
	    var deferred = $.Deferred(); // Establish Deferred
	    var filteredProjects = [];
	    var ds = _.find(cmApp.availableDataSources, {
	        Title : 'Projects',
	        CrossAppAccessLevel : 'Viewer'
	    });
	    var connId = ds.ConnectionId;
	    var listId = ds.Id;
	
	    cc.api.getConnectionListModelById(connId, listId).then(function (model) {
	
	        var projectDS = cc.api.getListItemDataSourceById(listId, {
	            schema : {
	                model : model.listModel
	            },
	            ccModel : model
	        }, connId);
	
	        projectDS.sort ( { field: "Title", dir: "asc" });
	        if(filterString !== ''){
	            projectDS.filter(JSON.parse(filterString));
	        } else {
	            projectDS.filter('');
	        }
	        if(projectDS.filter() !== ''){
	            projectDS.read().then(function () {
	                $.each(projectDS.data(), function(index, project){
	                    filteredProjects.push(project);
	                });
	                deferred.resolve(filteredProjects);
	            });
	        }
	    });
	    return deferred.promise();
	};
	cmApp.updateUserAppSetting = function () {
	    if(self.updateUserAppSettingInProgress){
	        return;
	    }
	    if (['Data','Admin', null].indexOf(cmApp.thisApp) > -1) {
	        return;
	    }
	    self.updateUserAppSettingInProgress = true;
	    var userOpts = new cnc.currentUser.options();
	    cnc.currentUser.get(userOpts)
	        .fail(function (results) {
	        })
	        .then(function (results) {
	            cmApp.datasource('User App Settings', true).done(function (ds) {
	                if (ds === null) {
	                    // console.log('Handle condition when datasource connection not found');
	                } else {
	                    taskDataSource = ds;
	                    var filter = '{"logic":"and","filters":[{"field":"AppUser/Id","operator":"eq","value":"' + cmApp.currentUser.Id + '"}]}';
	                    ds.filter(JSON.parse(filter));
	
	                    ds.read().then(function () {
	                        if (ds.data().length == 1) {
	                            var updateAppSetting = ds.data()[0];
	                            var mostRecentApp = new cnc.objects.relation();
	                            mostRecentApp.Id = _.find(cmApp.availableDataSources, {Title: 'App References'}).Id;
	                            mostRecentApp.ItemId = _.find(cmApp.apps, {AppId_cc_: cmApp.currentAppId}).Id;
	                            mostRecentApp.Title = _.find(cmApp.apps, {AppId_cc_: cmApp.currentAppId}).Title;
	                            updateAppSetting.MostRecentApp = mostRecentApp;
	
	                            if (cmApp.selectedProject != 'none' &&
	                                cmApp.selectedProject !== null) {
	                                var selectedProject = new cnc.objects.relation();
	                                selectedProject.Id = _.find(cmApp.availableDataSources, {Title: 'Projects'}).Id;
	                                selectedProject.ItemId = _.find(cmApp.projects, {id: cmApp.selectedProject}).id;
	                                selectedProject.Title = _.find(cmApp.projects, {id: cmApp.selectedProject}).title;
	                                updateAppSetting.SelectedProject = selectedProject;
	                            } else {
	                                if (typeof updateAppSetting.SelectedProject == 'object') {
	                                    cmApp.setSelectedProject(updateAppSetting.SelectedProject.ItemId);
	                                    setAllLocalStorage(updateAppSetting.SelectedProject.ItemId);
	                                }
	
	                            }
	                            if (cmApp.selectedPortfolio != 'none' &&
	                                cmApp.selectedPortfolio !== null &&
	                                _.find(cmApp.portfolios, {id: cmApp.selectedPortfolio}) !== undefined
	                            ) {
	
	                                var selectedPortfolio = new cnc.objects.relation();
	                                selectedPortfolio.Id = _.find(cmApp.availableDataSources, {Title: 'Portfolios'}).Id;
	                                selectedPortfolio.ItemId = _.find(cmApp.portfolios, {id: cmApp.selectedPortfolio}).id;
	                                selectedPortfolio.Title = _.find(cmApp.portfolios, {id: cmApp.selectedPortfolio}).title;
	                                updateAppSetting.SelectedPortfolio = selectedPortfolio;
	                            } else {
	                                if (typeof updateAppSetting.SelectedPortfolio == 'object') {
	                                    cmApp.setSelectedPortfolio(updateAppSetting.SelectedPortfolio.ItemId);
	                                    setAllLocalStorage(undefined, updateAppSetting.SelectedPortfolio.ItemId);
	                                }
	                            }
	                            updateAppSetting.dirty = true;
	                            ds.sync().done(function (){
	                                self.updateUserAppSettingInProgress = false;
	                            });
	                        } else {
	                            // console.log('Handle condition when no data is returned');
	                        }
	                    });
	                }
	            });
	
	
	        });
	
	};
	
	cmApp.enableDisableApp = function(){
	    if (cmApp.thisApp == 'Projects' &&
	        (cmApp.selectedProject == 'none' ||
	        cmApp.selectedProject === null))
	    {
	        if (cmApp.projects.length === 0) {
	            $('.twoLevelNavigation ul li').hide();
	            $('.twoLevelNavigation ul li:first').show();
	            $('.vaNavButtonGroup div').hide();
	/*
	            cc.notification.trigger('error', {
	                title: 'Project Center Disabled',
	                message: 'No Projects available. Go to the Onboard Center or contact an administrator.'
	            });
	*/
	        } else {
	            $('.twoLevelNavigation ul li').hide();
	            $('.twoLevelNavigation ul li:first').show();
	            $('.vaNavButtonGroup div').hide();
	/*
	            cc.notification.trigger('error', {
	                title: 'Project Center Disabled',
	                message: 'No Project selected. Select one from the dropdown list at the top of the page.'
	            });
	*/
	
	        }
	    }
	
	    if (cmApp.thisApp == 'Portfolios' &&
	        (cmApp.selectedPortfolio == 'none' ||
	        cmApp.selectedPortfolio === null)
	    ) {
	        if (cmApp.portfolios.length === 0) {
	            $('.twoLevelNavigation ul li').hide();
	            $('.twoLevelNavigation ul li:first').show();
	            $('.vaNavButtonGroup div').hide();
	            // $('.vaNavButtonGroup div:first').show();
	            // $('.vaNavButtonGroup div:first').next().show();
	/*
	            cc.notification.trigger('error', {
	                title: 'Portfolio Center Disabled',
	                message: 'No Portfolio available. Add one using the Portfolio Builder.'
	            });
	*/
	        } else {
	            $('.twoLevelNavigation ul li').hide();
	            $('.twoLevelNavigation ul li:first').show();
	            $('.vaNavButtonGroup div').hide();
	/*
	            cc.notification.trigger('error', {
	                title: 'Portfolio Center Disabled',
	                message: 'No Portfolio selected. Select one from the dropdown list at the top of the page.'
	            });
	*/
	
	        }
	
	    }
	    if (cmApp.thisApp == 'Executive Dashboard' &&
	        (cmApp.selectedPortfolio == 'none' ||
	        cmApp.selectedPortfolio === null)
	    ) {
	        if (cmApp.portfolios.length === 0) {
	            $('.twoLevelNavigation ul li').hide();
	            $('.twoLevelNavigation ul li:first').show();
	            $('.vaNavButtonGroup div').hide();
	/*
	            cc.notification.trigger('error', {
	                title: 'Executive Dashboard Disabled',
	                message: 'No Portfolio available. Add one using the Query Builder.'
	            });
	*/
	        } else {
	            $('.twoLevelNavigation ul li').hide();
	            $('.twoLevelNavigation ul li:first').show();
	            $('.vaNavButtonGroup div').hide();
	/*
	            cc.notification.trigger('error', {
	                title: 'Executive Dashboard Disabled',
	                message: 'No Portfolio selected. Select one from the dropdown list at the top of the page.'
	            });
	*/
	
	        }
	
	    }
	};
	/**
	 * @summary Array of ProjectIds in the currently selected Portfolio
	 */
	cmApp.projectsInPortfolio = [];
	/**
	 * @deprecated Use cmApp.projectsInPortfolio
	 */
	cmApp.getProjectsInPortfolio = function () {
	    var deferred = $.Deferred(); // Establish Deferred
	    var getProjectsInPortfolio = cnc.fn.generateUUID(); // Generate a unique Id
	    cc.events.on(getProjectsInPortfolio, function (projectIdArray) { // Create listener for the returning event
	        cc.events.off(getProjectsInPortfolio); // Turn off event listening on this channel
	        deferred.resolve(projectIdArray); // Resolved Deferred
	    }, self);
	    cc.events.trigger('cmApp', { // Trigger request to the ViewModel
	        method: 'getProjectsInPortfolio',
	        responseChannel: getProjectsInPortfolio // This is the channel you are tuned in to
	    });
	    return deferred.promise();
	};
	/**
	 * @summary Refresh the list of Portfolios
	 * @returns {null}
	 */
	cmApp.refreshPortfolios = function () {
	    var deferred = $.Deferred(); // Establish Deferred
	    var refreshPortfolios = cnc.fn.generateUUID(); // Generate a unique Id
	    cc.events.on(refreshPortfolios, function (dataSources) { // Create listener for the returning event
	        cc.events.off(refreshPortfolios); // Turn off event listening on this channel
	        deferred.resolve(dataSources); // Resolved Deferred
	    }, self);
	    cc.events.trigger('cmApp', { // Trigger request to the ViewModel
	        method: 'refreshPortfolios',
	        responseChannel: refreshPortfolios // This is the channel you are tuned in to
	    });
	    return deferred.promise();
	};
	/**
	 * @summary Refresh the list of Projects
	 * @returns {null}
	 */
	cmApp.refreshProjects = function () {
	    var deferred = $.Deferred(); // Establish Deferred
	    var refreshProjects = cnc.fn.generateUUID(); // Generate a unique Id
	    cc.events.on(refreshProjects, function (dataSources) { // Create listener for the returning event
	        cc.events.off(refreshProjects); // Turn off event listening on this channel
	        deferred.resolve(dataSources); // Resolved Deferred
	    }, self);
	    cc.events.trigger('cmApp', { // Trigger request to the ViewModel
	        method: 'refreshProjects',
	        responseChannel: refreshProjects // This is the channel you are tuned in to
	    });
	    return deferred.promise();
	};
	/**
	 * @summary Array of available datasources (not kendo datasource)
	 */
	cmApp.availableDataSources = [];
	/**
	 * @deprecated Use cmApp.availableDataSources
	 */
	cmApp.getAvailableDataSources = function () {
	    var deferred = $.Deferred(); // Establish Deferred
	    var getAvailableDataSources = cnc.fn.generateUUID(); // Generate a unique Id
	    cc.events.on(getAvailableDataSources, function (dataSources) { // Create listener for the returning event
	        cc.events.off(getAvailableDataSources); // Turn off event listening on this channel
	        deferred.resolve(dataSources); // Resolved Deferred
	    }, self);
	    cc.events.trigger('cmApp', { // Trigger request to the ViewModel
	        method: 'getAvailableDatasources',
	        responseChannel: getAvailableDataSources // This is the channel you are tuned in to
	    });
	    return deferred.promise();
	};
	/**
	 * @summary Block the UI while processing occurs
	 * @param {string} message - Text to display in the wait box
	 * @param {string} css - unreferenced
	 * @returns {null}
	 */
	cmApp.blockUI = function (message, css) {
	    message = message || _.sample(cmApp.waitMessages);
	    $.blockUI.defaults.message = '<span class="waitMessage">' + message + '</span>';
	        // +
	        // '<div class="progress">  ' +
	        // '<div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%">     ' +
	        // '<span class="sr-only">Working</span>   ' +
	        // '</div> ' +
	        // '</div>';
	    $('div#appContent').block();// $.blockUI();
	
	};
	/**
	 * @summary Unblock the UI
	 * @returns {null}
	 */
	cmApp.unblockUI = function () {
	    $('div#appContent').unblock(); //$.unblockUI();
	};
	/**
	 * @summary CORASManage View Model
	 * @version 1.0
	 * @copyright Copyright &reg; CORASCloud Inc.
	 * @author David Smiley <david.smiley@corascloud.com>
	 * @namespace
	 */
	var CMViewModel = function () {
	    $("head").append("<link rel='stylesheet' type='text/css' href='//cdn.corasworks.net/cmlib/app/1.0/app.css'>");
	    /**
	     * @summary CORASManage View Model Internal
	     * @version 1.0
	     * @copyright Copyright &reg; CORASCloud Inc.
	     * @author David Smiley <david.smiley@corascloud.com>
	     * @namespace
	     */
	    var self = this;
	    /**
	     * @summary Event handler for cmApp events
	     * @description The event subsystem provides a bridge between the cmApp namespace
	     * and the View Model
	     */
	    cc.events.on('cmApp', function (evt) {
	        if (evt.method == 'getAvailableDatasources') {
	            cc.events.trigger(evt.responseChannel, self.availableDataSources());
	        }
	        if (evt.method == 'getStickies') {
	            self.getStickies();
	            cc.events.trigger(evt.responseChannel);
	        }
	
	        if (evt.method == 'setSelectedProject') {
	            if(_.find(cmApp.projects, {id: evt.projectId}) !== undefined) {
	                self.selectedProject(evt.projectId);
	                cmApp.selectedProject = evt.projectId;
	                cc.events.trigger(evt.responseChannel, evt.projectId);
	            }
	        }
	        if (evt.method == 'addQueryToPortfolios') {
	            self.portfolios.push(evt.query);
	            cc.events.trigger(evt.responseChannel, true);
	        }
	        if (evt.method == 'setSelectedPortfolio') {
	            if(_.find(cmApp.portfolios, {id: evt.portfolioId}) !== undefined){
	                self.selectedPortfolio(evt.portfolioId);
	                cmApp.selectedPortfolio = evt.portfolioId;
	                cc.events.trigger(evt.responseChannel, evt.portfolioId);
	            }
	        }
	        if (evt.method == 'refreshPortfolios') {
	            self.portfoliosDfer = $.Deferred();
	            self.readPortfolios();
	            $.when(self.portfoliosDfer).done(function () {
	                cc.events.trigger(evt.responseChannel);
	            });
	            /*
	             if (cmApp.thisApp != 'Portfolios') {
	             window.location.href = _.find(self.navOptions(), {category: 'center', title: 'Portfolios'}).link;
	             }
	             */
	        }
	        if (evt.method == 'refreshProjects') {
	            self.projectsDfer = $.Deferred();
	            self.readProjects();
	            $.when(self.projectsDfer).done(function () {
	                cc.events.trigger(evt.responseChannel);
	            });
	        }
	        if (evt.method == 'getSelectedPortfolio') {
	            cc.events.trigger(evt.responseChannel, self.selectedPortfolio());
	        }
	        if (evt.method == 'getProjectsInPortfolio') {
	            cc.events.trigger(evt.responseChannel, self.projectsInSelectedPortfolio());
	        }
	        if (evt.method == 'getSelectedProject') {
	            cc.events.trigger(evt.responseChannel, self.selectedProject());
	        }
	
	    }, self);
	    /**
	     * @summary When Portfolios and Projects are loaded
	     */
	    self.portfolioProjectsDfer = $.Deferred();
	    /**
	     * @summary This rateLimited observable keep the updateUserSettings from firing too frequently
	     */
	    self.updateUserAppSettingInProgress = false; // Track whether UserAppSetting is in progress
	    self.updateUserSettings = ko.observable().extend({ rateLimit: 1000, method: "notifyWhenChangesStop"  });
	    self.updateUserSettings.subscribe(function () {
	        cmApp.updateUserAppSetting();
	    });
	
	
	    /**
	     * @summary Track whether Sticky window is open
	     */
	    self.stickiesOpen = ko.observable(false);
	    self.initialLoad = true;
	    self.notificationNavbarDfer = cmApp.notificationNavbarDfer;
	    self.stickiesLoadedAtInit = false;
	    self.showNewStickyPanel = ko.observable(true);
	    self.showNewSticky = function(state){
	        if(state === undefined){
	            self.showNewStickyPanel(!self.showNewStickyPanel()); // Toggle
	        } else {
	            self.showNewStickyPanel(state); // Set to given true | false value
	        }
	    };
	    self.currentUser = ko.observable();
	    var userOpts = new cnc.currentUser.options();
	    cnc.currentUser.get(userOpts)
	        .fail(function (results) {
	        })
	        .then(function (results) {
	            self.currentUser(results);
	            cmApp.currentUser = results;
	        });
	    /**
	     * @summary Base URL including protocol and server. No trailing /
	     */
	    self.baseURL = window.location.origin;
	    self.appDetails = ko.observable(null);
	    self.navOptions = ko.observableArray([]);
	    self.availableDataSources = ko.observableArray([]);
	
	    self.projects = ko.observableArray([]);
	    self.recentProjects = ko.observableArray([]);
	    self.selectedProject = ko.observable(null).extend({ deferred: true });
	    self.views = ko.observableArray();
	
	    self.portfolios = ko.observableArray([]);
	    self.portfolioFilters = ko.observableArray([]);
	    self.recentPortfolios = ko.observableArray([]);
	    self.selectedPortfolio = ko.observable(null).extend({ deferred: true });
	    self.projectsInSelectedPortfolio = ko.observableArray([]);
	    /**
	     * @summary Add Project and Portfolio pickers to the UI
	     */
	    self.addPickers = function () {
	        if (cmApp.thisApp == 'Projects') {
	            $('#cc-app-add-content').html(pickersHtml()); // Add Project Picker to header
	            ko.applyBindings(self, document.getElementById("projectPicker"));
	            $('#projectPicker').slideDown('slow');
	            return;
	        }
	        if (cmApp.thisApp == 'Portfolios' || cmApp.thisApp == 'Executive Dashboard') {
	            $('#cc-app-add-content').html(pickersHtml()); // Add Project Picker to header
	            ko.applyBindings(self, document.getElementById("portfolioPicker"));
	            $('#portfolioPicker').slideDown('slow');
	            return;
	        }
	        $('#cc-app-add-content').html(''); // Clear spinner
	    };
	    self.readLocalStorageDfer = $.Deferred();
	
	    var opts = new cnc.localStorage.options();
	    self.lsDfer1 = $.Deferred();
	    self.lsDfer2 = $.Deferred();
	    self.lsDfer3 = $.Deferred();
	    $.when(self.portfoliosDfer, self.projectsDfer).done(function(){
	        cnc.localStorage.get('[CMv1SelectedProjectId]', opts)
	            .fail(function (results) {
	                self.lsDfer1.resolve();
	            })
	            .then(function (results) {
	                if(_.find(self.projects, {Id: results.value}) !== undefined){
	                    self.selectedProject(results.value);
	                    cmApp.selectedProject = results.value;
	                }
	                self.lsDfer1.resolve();
	            });
	        cnc.localStorage.get('[CMv1SelectedPortfolioId]', opts)
	            .fail(function (results) {
	                self.lsDfer2.resolve();
	            })
	            .then(function (results) {
	                if(_.find(self.portfolios(), {Id: results.value}) !== undefined) {
	                    self.selectedPortfolio(results.value);
	                    cmApp.selectedPortfolio = results.value;
	                }
	                self.lsDfer2.resolve();
	            });
	
	        cnc.localStorage.get('[CMv1ProjectsInPortfolio]', opts)
	            .fail(function (results) {
	                self.lsDfer3.resolve();
	            })
	            .then(function (results) {
	                for (var i = 0; i < results.value.length; i++) {
	                    if(_.find(self.portfolios(), {Id: results.value[i]}) !== undefined) {
	                        self.projectsInSelectedPortfolio.push(results.value[i]);
	                        cmApp.projectsInPortfolio.push(results.value[i]);
	                    }
	                }
	                self.lsDfer3.resolve();
	            });
	
	    });
	    $.when(self.lsDfer1, self.lsDfer2, self.lsDfer3).done(function () {
	        self.readLocalStorageDfer.resolve();
	    });
	    self.selectedProject.subscribe(function (newProjectId) {
	        cmApp.selectedProject = newProjectId;
	
	        if((!self.initialLoad || !self.stickiesLoadedAtInit) && cmApp.thisApp == 'Projects') {
	            self.getStickies();
	        }
	        var opts = new cnc.localStorage.options();
	        // Read Recent Project Id Array from localstorage
	        cnc.localStorage.get('[CMv1RecentProjectIdArray]', opts)
	            .fail(function (results) { // Local Storage key does not exist, add it
	                cnc.localStorage.set('[CMv1RecentProjectIdArray]', [newProjectId], opts)
	                    .fail(function (results) {
	                    })
	                    .then(function (results) {
	                    });
	
	                if(_.find(self.projects, {Id:newProjectId}) !== undefined) {
	                    self.setRecentProjects([newProjectId]);
	                }
	            })
	            .then(function (results) { // Local Storage key does exist, add current project to the array
	                // If the newProjectId is already in the array, remove it to avoid duplicates
	                if(_.find(self.projects, {Id:newProjectId}) !== undefined) {
	                    if (_.indexOf(results.value, newProjectId) > -1) {
	                        results.value.splice(_.indexOf(results.value, newProjectId), 1);
	                    }
	                    // Add newProjectId to the array
	                    results.value.splice(0, 0, newProjectId);
	                    cnc.localStorage.set('[CMv1RecentProjectIdArray]', results.value, opts)
	                        .fail(function (results) {
	                        })
	                        .then(function (results) {
	                        });
	                    self.setRecentProjects(results.value);
	                }
	            });
	        if(_.find(self.projects(), {id: newProjectId}) !== undefined) {
	            cnc.localStorage.set('[CMv1SelectedProjectId]', newProjectId, opts)
	                .fail(function (results) {
	                })
	                .then(function (results) {
	                });
	            self.updateUserSettings(cnc.fn.generateUUID());
	            if(newProjectId !== null){
	                cc.events.trigger('cmAppNewProjectSelected', {
	                    projectId: newProjectId
	                });
	            }
	        }
	        $('.twoLevelNavigation ul li').show();
	        $('.vaNavButtonGroup div').show();
	
	        $.each(self.availableDataSources(), function (index, dataSource) {
	            cc.events.trigger('sync', {
	                id: dataSource.Id,
	                connectionId: undefined,
	                listId: dataSource.Id
	            });
	        });
	    });
	    self.selectedPortfolio.subscribe(function (newPortfolioId) {
	        self.portfolioProjectsDfer = $.Deferred();
	        cmApp.portfolioProjectsDfer = $.Deferred();
	        cmApp.selectedPortfolio = newPortfolioId;
	
	        if((!self.initialLoad || !self.stickiesLoadedAtInit) && cmApp.thisApp == 'Portfolios') {
	            self.getStickies();
	        }
	
	        var opts = new cnc.localStorage.options();
	        if(_.find(self.portfolios(), {id: newPortfolioId}) === undefined){
	            self.portfolioProjectsDfer.resolve();
	            cmApp.portfolioProjectsDfer.resolve();
	            return;
	        }
	        // Update [CMv1ProjectsInPortfolio]
	        var selectedPortfolio = _.find(self.portfolios(), {id: newPortfolioId});
	        if (selectedPortfolio !== undefined) {
	            self.projectsInSelectedPortfolio.removeAll();
	            switch (selectedPortfolio.filterMethod){
	                case 'AdHoc Filter':
	                    cmApp.getProjectsUsingFilter(selectedPortfolio.adHocFilter).then(function (results) {
	                        $.each(results, function(index,project){
	                            self.projectsInSelectedPortfolio.push(project.Id);
	                        });
	                        cmApp.projectsInPortfolio = self.projectsInSelectedPortfolio();
	                        self.portfolioProjectsDfer.resolve();
	                        cmApp.portfolioProjectsDfer.resolve();
	                        cnc.localStorage.set('[CMv1ProjectsInPortfolio]', cmApp.projectsInPortfolio, opts)
	                            .fail(function (results) {
	                            })
	                            .then(function (results) {
	                            });
	                    });
	                    break;
	                case 'Preset Filter':
	                    // selectedPortfolio.projectFilter
	                    // selectedPortfolio.adHocFilter
	                    var ds = _.find(cmApp.availableDataSources, {
	                        Title : 'Portfolio Filters',
	                        CrossAppAccessLevel : 'Viewer'
	                    });
	                    var connId = ds.ConnectionId;
	                    var listId = ds.Id;
	                    var filterString = '';
	                    cc.api.getConnectionListModelById(connId, listId).then(function (model) {
	
	                        var pfilterDS = cc.api.getListItemDataSourceById(listId, {
	                            schema : {
	                                model : model.listModel
	                            },
	                            ccModel : model
	                        }, connId);
	
	                        pfilterDS.sort ( { field: "Title", dir: "asc" });
	                        var filter = '{"logic":"and","filters":[{"field":"Id","operator":"eq","value":"' + selectedPortfolio.projectFilter.ItemId + '"}]}';
	                        pfilterDS.filter(JSON.parse(filter));
	                        pfilterDS.read().then(function () {
	                            $.each(pfilterDS.data(), function(index, filter){
	                                filterString = filter.FilterString;
	                            });
	                            cmApp.getProjectsUsingFilter(filterString).then(function (results) {
	                                self.projectsInSelectedPortfolio.removeAll();
	                                $.each(results, function(index,project){
	                                    self.projectsInSelectedPortfolio.push(project.Id);
	                                });
	                                cmApp.projectsInPortfolio = self.projectsInSelectedPortfolio();
	                                self.portfolioProjectsDfer.resolve();
	                                cmApp.portfolioProjectsDfer.resolve();
	                                cnc.localStorage.set('[CMv1ProjectsInPortfolio]', cmApp.projectsInPortfolio, opts)
	                                    .fail(function (results) {
	                                    })
	                                    .then(function (results) {
	                                    });
	                            });
	                        });
	                    });
	                    break;
	                case 'Selected Projects':
	                    $.each(selectedPortfolio.projectIds, function (index, project){
	                        self.projectsInSelectedPortfolio.push(project.ItemId);
	                    });
	                    cmApp.projectsInPortfolio = self.projectsInSelectedPortfolio();
	                    self.portfolioProjectsDfer.resolve();
	                    cmApp.portfolioProjectsDfer.resolve();
	                    cnc.localStorage.set('[CMv1ProjectsInPortfolio]', cmApp.projectsInPortfolio, opts)
	                        .fail(function (results) {
	                        })
	                        .then(function (results) {
	                        });
	                    break;
	                default:
	                    self.portfolioProjectsDfer.resolve();
	                    cmApp.portfolioProjectsDfer.resolve();
	            }
	        }
	
	        // Read Recent Portfolio Id Array from localstorage
	        cnc.localStorage.get('[CMv1RecentPortfolioIdArray]', opts)
	            .fail(function (results) { // Local Storage key does not exist, add it
	                cnc.localStorage.set('[CMv1RecentPortfolioIdArray]', [newPortfolioId], opts)
	                    .fail(function (results) {
	                    })
	                    .then(function (results) {
	                    });
	            })
	            .then(function (results) { // Local Storage key does exist, add current Portfolio to the array
	                // If the newPortfolioId is already in the array, remove it to avoid duplicates
	                if (_.indexOf(results.value, newPortfolioId) > -1) {
	                    results.value.splice(_.indexOf(results.value, newPortfolioId), 1);
	                }
	                // Add newPortfolioId to the array
	                results.value.splice(0, 0, newPortfolioId);
	                cnc.localStorage.set('[CMv1RecentPortfolioIdArray]', results.value, opts)
	                    .fail(function (results) {
	                    })
	                    .then(function (results) {
	                    });
	                self.setRecentPortfolios(results.value);
	            });
	        // Read Recent Projects and Portfolios Array from localstorage
	        cnc.localStorage.get('[CMv1RecentProjectsAndPortfoliosArray]', opts)
	            .fail(function (results) { // Local Storage key does not exist, add it
	                cnc.localStorage.set('[CMv1RecentProjectsAndPortfoliosArray]',
	                    [new self.RecentEntity(_.find(self.portfolios(), {id: newPortfolioId}), 'portfolio')], opts)
	                    .fail(function (results) {
	                    })
	                    .then(function (results) {
	                    });
	            })
	            .then(function (results) { // Local Storage key does exist, add current Portfolio to the array
	
	                // If the newPortfolioId is already in the array, remove it to avoid duplicates
	                if (_.findIndex(results.value, {id: newPortfolioId}) > -1) {
	                    results.value.splice(_.indexOf(results.value, {id: newPortfolioId}), 1);
	                }
	                // Add newPortfolioId to the array
	                results.value.splice(0, 0, new self.RecentEntity(_.find(self.portfolios(), {id: newPortfolioId}), 'portfolio'));
	                cnc.localStorage.set('[CMv1RecentProjectsAndPortfoliosArray]', results.value, opts)
	                    .fail(function (results) {
	                    })
	                    .then(function (results) {
	                    });
	                self.setRecentPortfolios(results.value);
	
	            });
	        cnc.localStorage.set('[CMv1SelectedPortfolioId]', newPortfolioId, opts)
	            .fail(function (results) {
	            })
	            .then(function (results) {
	            });
	        self.updateUserSettings(cnc.fn.generateUUID());
	        $.when(self.portfolioProjectsDfer).done(function (){
	            if(newPortfolioId !== null){
	                cc.events.trigger('cmAppNewPortfolioSelected', {
	                    portfolioId: newPortfolioId
	                });
	            }
	
	        });
	        $('.twoLevelNavigation ul li').show();
	        $('.vaNavButtonGroup div').show();
	
	        $.each(self.availableDataSources(), function (index, dataSource) {
	            cc.events.trigger('sync', {
	                id: dataSource.Id,
	                connectionId: undefined,
	                listId: dataSource.Id
	            });
	        });
	
	    });
	    var viewConfigDS = cc.api.getViewConfigsDS();
	    viewConfigDS.read({$expand:'Tabs($expand=Views)'}).then(function () {
	        $.each(viewConfigDS.data()[0].Tabs, function(tab_index, tab){
	            $.each(tab.Views, function(view_index, view){
	                self.views.push(view);
	            });
	        });
	    });
	    self.getViewTitle = function(viewId){
	        return _.find(self.views(), {Id: viewId}).Title;
	    };
	
	    self.stickyNotes = ko.observableArray();
	    self.availableDataSourcesDfer = $.Deferred();
	    self.projectsDfer = $.Deferred();
	    self.portfoliosDfer = $.Deferred();
	    self.stickiesDfer = $.Deferred();
	    self.portfolioFiltersDfer = $.Deferred();
	    self.appRefConnectionDfer = $.Deferred();
	    self.appRefConnectionCompleteDfer = $.Deferred();
	    self.appDetailsDfer = $.Deferred();
	    self.connectionsAndSourcesDetailsDfer = $.Deferred();
	    self.userPrefsDfer = $.Deferred();
	
	    $.when(self.projectsDfer,
	        self.portfoliosDfer,
	        self.appRefConnectionCompleteDfer,
	        self.userPrefsDfer,
	        self.availableDataSourcesDfer,
	        self.connectionsAndSourcesDetailsDfer,
	        self.readLocalStorageDfer
	    ).done(function () {
	        self.initialLoad = false;
	        setNavigation(self);
	        cmApp.ready.resolve();
	        if(cmApp.getQueryVariable('projectId') || cmApp.getQueryVariable('navigateTo') || cmApp.getQueryVariable('showStickies')){
	            if(cmApp.getQueryVariable('showStickies')){
	                self.showStickies(cmApp.getQueryVariable('showStickies'));
	            }
	            if(cmApp.getQueryVariable('navigateTo')){
	                var oldHash = window.location.hash;
	                var newHash;
	                var navto = cmApp.getQueryVariable('navigateTo');
	                if (typeof $('button[title="' + cmApp.getQueryVariable('navigateTo').replace(/%20/g, ' ') + '"]') == 'object' &&
	                    $('button[title="' + cmApp.getQueryVariable('navigateTo').replace(/%20/g, ' ') + '"]').length > 0)
	                {
	                    var hashArray = window.location.hash.split('/');
	
	                    hashArray[2] = $('button[title="' + cmApp.getQueryVariable('navigateTo').replace(/%20/g, ' ') + '"]')[0].id;
	                    newHash = hashArray.join('/');
	                    window.location.hash = newHash;
	                }
	            }
	            if(cmApp.getQueryVariable('projectId')){
	                cmApp.setSelectedProject(cmApp.getQueryVariable('projectId')).then( function(){
	                });
	            }
	        }
	        cmApp.enableDisableApp();
	        cmApp.unblockUI();
	        self.updateUserSettings(cnc.fn.generateUUID());
	    });
	
	    self.showStickies = function (parm) {
	        switch (typeof parm){
	            case 'object':
	                $('#stickyWindow').slideToggle();
	                break;
	            case 'string':
	                if(Boolean(parm)){
	                    $('#stickyWindow').slideDown();
	                } else {
	                    $('#stickyWindow').slideUp();
	                }
	                break;
	            default:
	                $('#stickyWindow').slideToggle();
	        }
	    };
	    self.pdfExport = function(){
	        if($('iframe').length > 0){
	            cc.notification.trigger('warning', {
	                title: 'PDF Export Warning',
	                message: 'Charts may not be included in the exported PDF. Right mouse click on a chart provides' +
	                ' additional export options.'
	            });
	        }
	        kendo.drawing.drawDOM($("#appContent"), {
	            paperSize : [1728, 1296],
	        })
	            .then(function (group) {
	                // Render the result as a PDF file
	                return kendo.drawing.exportPDF(group, {
	                    creator: 'CorasManage',
	                    paperSize : [1728, 1296],
	                    landscape: true
	                });
	            })
	            .done(function (data) {
	                // Save the PDF file
	                kendo.saveAs({
	                    dataURI : data,
	                    fileName : document.title + " " + moment().format('MM/DD/YYYY hh:mm:ss a') + ".pdf",
	                    proxyURL : "//demos.telerik.com/kendo-ui/service/export"
	                });
	            });
	    };
	    self.newSticky = {title: ko.observable(''), note: ko.observable("")};
	    self.stickyCanBeSaved =  ko.computed(function() {
	        if(self.newSticky.title() === '' || self.newSticky.note() === ''){
	            return false;
	        } else {
	            return true;
	        }
	    }, self);
	    /* If code is reactivated, need to be modified to use datasource
	     self.deleteSticky = function(item, evt){
	     cmApp.blockUI('Deleting...');
	     //https://corascloudsolutiondev.azurewebsites.net/odata/Connections('7feb986d-d9d1-40d2-8d05-0ad631e75bb1')/
	     // Lists('b7736b88-b0a7-4229-9051-6b6b0ba02b28')/ListItems('b175278a-21a8-46e3-ab58-12b3e5396bc2')
	     //
	     $.ajax({
	     method: "DELETE",
	     headers: {
	     AppId: self.appDetails().Id
	     },
	     url: self.baseURL + "/odata/Connections('" +
	     _.find(self.availableDataSources(), {Title: 'Journal'}).ConnectionId +
	     "')/Lists('" + _.find(self.availableDataSources(), {Title: 'Journal'}).Id +
	     "')/ListItems('" + item.Id + "')"
	     })
	     .done(function (msg) {
	     cc.notification.trigger('success', {
	     title: 'Sticky Note Deleted',
	     message: ''
	     });
	     self.getStickies();
	     cmApp.unblockUI();
	
	     });
	     };
	     */
	    self.addSticky = function () {
	        cmApp.blockUI('Adding sticky note...');
	        var view = window.location.href.split('?AppId=')[1].split('#/view/')[1];
	        var appId = cmApp.currentAppId;
	        cmApp.datasource('Journal', true).done(function (ds) {
	            if (ds === null) {
	            } else {
	                var view = window.location.href.split('?AppId=')[1].split('#/view/')[1];
	                var newSticky = ds.add();
	                newSticky.Title = self.newSticky.title();
	                newSticky.Note = self.newSticky.note();
	                newSticky.JournalType = "User Sticky";
	                newSticky.AppId_cc_= cmApp.currentAppId;
	                newSticky.View = view;
	                newSticky.ViewTitle = self.getViewTitle(view);
	                if (cmApp.thisApp == 'Projects') {
	                    var project = new cnc.objects.relation();
	                    project.Id = _.find(cmApp.availableDataSources, {Title: 'Projects'}).Id;
	                    project.ItemId = self.selectedProject();
	                    project.Title = _.find(self.projects(), {id: self.selectedProject()}).title;
	                    newSticky.Project = project;
	                }
	                if (cmApp.thisApp == 'Portfolios') {
	                    var portfolio = new cnc.objects.relation();
	                    portfolio.Id = _.find(cmApp.availableDataSources, {Title: 'Portfolios'}).Id;
	                    portfolio.ItemId = self.selectedPortfolio();
	                    portfolio.Title = _.find(self.portfolios(), {id: self.selectedPortfolio()}).title;
	                    newSticky.Portfolio = portfolio;
	                }
	                ds.sync().done(function (msg) {
	                    cc.notification.trigger('success', {
	                        title: 'Sticky Note Added',
	                        message: ''
	                    });
	                    self.getStickies();
	                    self.newSticky.title('');
	                    self.newSticky.note('');
	                    cmApp.unblockUI();
	
	                });
	
	            }
	        });
	    };
	    self.getStickies = function () {
	        if(self.initialLoad && self.stickiesLoadedAtInit) {
	            return;
	        }
	        self.stickiesLoadedAtInit = true;
	        self.stickyNotes.removeAll();
	        var stickyList = _.find(cmApp.availableDataSources, {
	            Title: 'Journal'
	        });
	        if (stickyList === undefined) {
	            return;
	        }
	        var view = window.location.href.split('?AppId=')[1].split('#/view/')[1];
	        var appId = cmApp.currentAppId;
	
	
	        journalFilter = JSON.parse('{"logic":"and","filters":[' +
	            '{"field":"JournalType","operator":"eq","value":"User Sticky"},' +
	            '{"field":"AppId_cc_","operator":"eq","value":"' +  appId + '"},' +
	            '{"field":"View","operator":"eq","value":"' + view + '"}' +
	            ']}');
	
	        if (cmApp.thisApp == 'Projects') {
	            journalFilter.filters.push(JSON.parse('{"field":"Project/ItemId","operator":"eq","value":"' + cmApp.selectedProject + '"}'));
	        }
	        if (cmApp.thisApp == 'Portfolios') {
	            journalFilter.filters.push(JSON.parse('{"field":"Portfolio/ItemId","operator":"eq","value":"' + cmApp.selectedPortfolio + '"}'));
	        }
	        cmApp.datasource('Journal').done(function (ds) {
	            if (ds === null) {
	            } else {
	                ds.filter(journalFilter);
	                ds.sort ( { field: "CreateDate", dir: "desc" });
	                ds.read().then(function () {
	                    self.stickyNotes.removeAll();
	                    if (ds.data().length >= 1) {
	                        $.each(ds.data(), function (index, sticky) {
	                            self.stickyNotes.push(sticky);
	                        });
	                        if(ds.data().length === 0){
	                            // self.showNewSticky(true);
	                        }
	                    } else {
	                    }
	                    self.stickiesDfer.resolve(ds.data());
	                });
	            }
	        });
	    };
	    $.when(self.availableDataSourcesDfer, self.appRefConnectionDfer).done(function () {
	        self.getStickies();
	    });
	
	    self.dataConnections = ko.observableArray([]);
	    // Get App details before we do anything else that requires it
	    var appOpts = new cnc.app.options();
	    cnc.app.get(appOpts)
	        .fail(function (results) {
	        })
	        .then(function (results) {
	            self.appDetails(results);
	            cmApp.app = results;
	            self.readProjects();
	            self.getPortfolioFiltersConnection();
	            self.connectionsAndSources();
	            self.getAppRefConnection();
	            self.appDetailsDfer.resolve(results);
	        });
	    self.connectionsAndSources = function () {
	        // Get all available connections and data sources
	        var connectionOpts = new cnc.connections.options();
	        connectionOpts.depth = 1;
	        cnc.connections.get(connectionOpts)
	            .fail(function (results) {
	            })
	            .then(function (connections) {
	                for (var i = 0; i < connections.length; i++) {
	                    self.dataConnections.push(connections[i]);
	                    for (var j = 0; j < connections[i].Lists.length; j++) {
	                        self.availableDataSources.push(connections[i].Lists[j]);
	                        cmApp.availableDataSources.push(connections[i].Lists[j]);
	                        self.availableDataSources()[self.availableDataSources().length - 1].ConnectionId = connections[i].Id;
	                    }
	                }
	                self.connectionsAndSourcesDetailsDfer.resolve();
	                self.availableDataSourcesDfer.resolve();
	                cmApp.availableDataSourcesDfer.resolve();
	            });
	    };
	    $.when(self.appRefConnectionCompleteDfer).done(function(){
	        setNavigation(self);
	    });
	    $.when(self.appDetailsDfer, self.connectionsAndSourcesDetailsDfer).done(function () {
	        self.getUserPrefs();
	        cmApp.blockUI('Loading CorasManage core functionality');
	        $.when(self.notificationNavbarDfer).done( function() {
	            $('#stickySpinner').remove();
	            $('.notification-navbar').append(
	                '<li><a id="stickyBadge" title="Show/Hide Sticky Notes" href="#" data-bind="click: showStickies">' +
	                '<i class="fa fa-sticky-note-o fa-inverse"></i>' +
	                '<span class="badge" data-bind="visible: stickyNotes().length > 0, text: stickyNotes().length"></span></a>' +
	                '</li>' +
	                '<li><a id="pdfExport" title="Export page to PDF" href="#" data-bind="click: pdfExport">' +
	                '<i class="fa fa-file-pdf-o fa-inverse"></i>' +
	                '</a>' +
	                '</li>');
	            try {
	                ko.applyBindings(self, document.getElementById("stickyBadge"));
	                ko.applyBindings(self, document.getElementById("pdfExport"));
	            } catch (err) {
	            }
	        });
	
	        // $('.k-tabstrip-wrapper').append(stickyWindowMarkup());
	        try {
	            ko.applyBindings(self, document.getElementById("cc-cm-sidebar-nav"));
	        } catch (err) {
	        }
	        try {
	            ko.applyBindings(self, document.getElementById("stickyWindow"));
	        } catch (err) {
	        }
	        // Let's listen for ajax calls and modify them on the fly as needed
	        $(document).ajaxSend(function (event, jqxhr, settings) {
	            self.ajaxSendHandler(event, jqxhr, settings, self);
	        });
	        $(document).ajaxComplete(function (event, jqxhr, settings) {
	            self.ajaxCompleteHandler(event, jqxhr, settings, self);
	        });
	    });
	    self.ajaxCompleteHandler = function (event, xhr, settings, self) {
	        if (settings.url.indexOf('/api/') != -1) {
	            return;
	        }
	        if (settings.url.indexOf('/odata/ActionConfigs') != -1) {
	            return;
	        }
	
	        if (settings.data !== undefined &&
	            (settings.type == 'POST' || settings.type == 'PUT') &&
	            xhr.status == 200) {
	            var ConnectionId = null;
	            var ListId = null;
	            var filtering = null;
	            var urlSplit = settings.url.split('/');
	            for (var i = 0; i < urlSplit.length; i++) {
	                var lookFor = "Connections('";
	                if (urlSplit[i].substr(0, lookFor.length) == lookFor) {
	                    ConnectionId = urlSplit[i].substr(lookFor.length, 36);
	                }
	                lookFor = "Lists('";
	                if (urlSplit[i].substr(0, lookFor.length) == lookFor) {
	                    ListId = urlSplit[i].substr(lookFor.length, 36);
	                }
	                lookFor = "ListItems";
	                if (urlSplit[i].substr(0, lookFor.length) == lookFor) {
	                    filtering = urlSplit[i].split('&');
	                }
	            }
	            // When a Project is updated, check to see if the project Title is different from the Top Level Task Title
	            if (ListId == _.find(self.availableDataSources(), {Title: 'Projects'}).Id && settings.type == 'PUT') {
	                var tasksDfer = $.Deferred();
	                var taskDataSource;
	                cmApp.datasource('Tasks', true).done(function (ds) {
	                    taskDataSource = ds;
	                    var filter = '{"logic":"and","filters":[{"field":"Project/ItemId","operator":"eq","value":"' +
	                        cmApp.selectedProject + '"}]}';
	                    ds.filter(JSON.parse(filter));
	                    ds.read().then(function () {
	                        if(ds.data().length >= 1){
	                            tasksDfer.resolve(ds.data());
	                        } else {
	                        }
	                    });
	
	                });
	                $.when(tasksDfer).done(function(tasks){
	                    var project = JSON.parse(xhr.responseText);
	                    var topLevelTask = _.find(tasks, {ganttId: 1});
	                    if(topLevelTask.Title != project.Title || tasks.length == 1){
	                        if(tasks.length == 1){
	                            topLevelTask.StartDate = project.ProposedStartDate;
	                            topLevelTask.EndDate = project.ProposedEndDate;
	                        }
	                        if(topLevelTask.Title != project.Title){
	                            topLevelTask.Title = project.Title;
	                            $.each(tasks, function(index, task){
	                                task.Project.Title = project.Title;
	                                task.dirty = true;
	                            });
	                        }
	                        taskDataSource.sync();
	                        cmApp.refreshProjects();
	                    }
	                });
	            }
	            // When a Project is added, add a Top Level Summary Task
	            if (ListId == _.find(self.availableDataSources(), {Title: 'Projects'}).Id && settings.type == 'POST') {
	
	                cmApp.datasource('Tasks', true).done(function (ds) {
	                    if (ds === null) {
	                    } else {
	                        var newTask = ds.add();
	                        var projectObject = new cnc.objects.relation();
	                        projectObject.ItemId = JSON.parse(xhr.responseText).Id ;
	                        projectObject.Title = JSON.parse(xhr.responseText).Title;
	                        newTask.TopLevel = true;
	                        newTask.SummaryTask = true;
	                        newTask.StartDate = JSON.parse(xhr.responseText).ProposedStartDate;
	                        newTask.EndDate = JSON.parse(xhr.responseText).ProposedEndDate;
	                        newTask.Complete = 0;
	                        newTask.Title = JSON.parse(xhr.responseText).Title;
	                        newTask.Project = projectObject;
	                        newTask.ganttId = 1;
	                        ds.sync().done(function (msg) {
	                            /*
	                             cc.notification.trigger('success', {
	                             title: 'Top Level Task added',
	                             message: ''
	                             });
	                             */
	                        });
	                    }
	                });
	            }
	
	        }
	
	    };
	    self.ajaxSendHandler = function (event, jqxhr, settings, self) {
	        if (settings.url.indexOf('/api/') != -1) {
	            return;
	        }
	        // Capture Add calls, set the Project column, if not already set
	        if (settings.data !== undefined && settings.type == 'POST') {
	            var settingsJson = JSON.parse(settings.data);
	            if (typeof settingsJson.Project == 'object' && settingsJson.Project === null) {
	                var projectObject = new cnc.objects.relation();
	                projectObject.Id = _.find(self.availableDataSources(), {
	                    Title: 'Projects'
	                }).Id;
	                if (self.selectedProject() === null) {
	                    cc.notification.trigger('error', {
	                        title: 'Select a Project first',
	                        message: ''
	                    });
	                    jqxhr.abort();
	                    return false;
	                }
	                projectObject.Title = _.find(self.projects(), {
	                    id: self.selectedProject()
	                }).title;
	                projectObject.ItemId = self.selectedProject();
	                settingsJson.Project = projectObject;
	                settings.data = JSON.stringify(settingsJson);
	            }
	            return;
	        }
	
	    };
	    self.readProjects = function () {
	        cmApp.datasource('Projects').done(function (ds) {
	            var results;
	            if (ds === null) {
	                cc.notification.trigger('error', {
	                    title: connectionName + ' missing',
	                    message: ''
	                });
	                return false;
	            } else {
	                ds.read().then(function () {
	                    if (ds.data().length >= 1) {
	                        results = _.sortBy(ds.data(), 'Title');
	                        self.projects.removeAll();
	                        $.each(results, function (index, project) {
	                            self.navOptions.push({
	                                category: 'project',
	                                title: project.Title,
	                                link: '#',
	                                icon: 'fa fa-fw fa-lg ' + project.Icon
	                            });
	                            self.projects.push({
	                                title: project.Title,
	                                id: project.Id,
	                                icon: 'fa fa-fw fa-lg ' + project.Icon
	                            });
	                        });
	
	                    } else {
	                    }
	                    cmApp.projects = self.projects();
	                    self.projectsDfer.resolve(results);
	                });
	            }
	        });
	    };
	    self.getPortfolioFiltersConnection = function () {
	        cmApp.datasource('Portfolio Filters').done(function (ds) {
	            if (ds === null) {
	                // console.log('Handle condition when datasource connection not found');
	            } else {
	                ds.read().then(function () {
	                    if (ds.data().length >= 1) {
	                        var results = _.sortBy(ds.data(), 'Title');
	                        $.each(results, function(index, filter){
	                            self.portfolioFilters.push(filter);
	                        });
	                    } else {
	                    }
	                    self.portfolioFiltersDfer.resolve();
	                });
	            }
	        });
	    };
	    self.readPortfolios = function () {
	        cmApp.datasource('Portfolios').done(function (ds) {
	            if (ds === null) {
	                // console.log('Handle condition when datasource connection not found');
	            } else {
	                ds.read().then(function () {
	                    if (ds.data().length >= 1) {
	                        results = _.sortBy(ds.data(), 'Title');
	                        $.each(results, function (index, portfolio) {
	                            var pids = [];
	                            $.each(portfolio.Projects, function(index, id){
	                                pids.push(id);
	                            });
	                            portfolio._filterString = null;
	                            if (portfolio.ProjectFilter !== undefined && portfolio.ProjectFilter.ItemId !== undefined) {
	                                portfolio._filterString = _.find(self.portfolioFilters(), {Id: portfolio.ProjectFilter.ItemId}).FilterString;
	                            }
	                            self.portfolios.push({
	                                title: portfolio.Title + ' [' + portfolio.CreatedBy.DisplayName+ ']',
	                                adHocFilter: portfolio.AdHocFilter,
	                                projectFilter: portfolio.ProjectFilter,
	                                id: portfolio.Id,
	                                projectIds: pids,
	                                filterMethod: portfolio.FilterMethod,
	                                icon: 'fa fa-fw fa-lg ' + portfolio.Icon
	                            });
	                        });
	                        cmApp.portfolios = self.portfolios();
	                    } else {
	                    }
	                    self.portfoliosDfer.resolve(results);
	                });
	            }
	        });
	    };
	
	    $.when(self.portfolioFiltersDfer).done(function () {
	        self.readPortfolios();
	    });
	    $.when(self.projectsDfer).done(function (results) {
	        cnc.localStorage.get('[CMv1RecentProjectIdArray]', opts)
	            .fail(function (results) { // Local Storage key does not exist
	            })
	            .then(function (results) { // Local Storage key does exist, load the recentProjects
	                self.setRecentProjects(results.value);
	            });
	    });
	
	    $.when(self.portfoliosDfer, self.availableDataSourcesDfer, self.appRefConnectionCompleteDfer).done(function (portfolios) {
	        $.each(portfolios, function (index, portfolio) {
	            self.navOptions.push({
	                category: 'portfolio',
	                title: portfolio.Title,
	                link: '#',
	                icon: 'fa fa-fw fa-lg ' + portfolio.Icon
	            });
	            var portfolioProjectIds = [];
	            if (portfolio.Projects.length === 0) {
	                var appListTitle = 'Projects';
	                var appList = _.find(self.availableDataSources(), {
	                    Title: appListTitle
	                });
	                if (appList === undefined) {
	                    cc.notification.trigger('error', {
	                        title: appListTitle + ' reference missing',
	                        message: ''
	                    });
	                    return;
	                }
	
	                /*
	                 cmApp.getProjectsUsingFilter(portfolio._filterString).then(function (results) {
	                 portfolioProjectIds = [];
	                 $.each(results, function(index,project){
	                 portfolioProjectIds.push(project.Id);
	                 });
	
	                 });
	                 */
	
	
	            } else {
	                for (var i = 0; i < portfolio.Projects.length; i++) {
	                    portfolioProjectIds.push(portfolio.Projects[i].ItemId);
	                }
	            }
	            /*                if(portfolio.ProjectinPortfolio){
	             portfolioProjectIds.push(portfolio.ProjectinPortfolio.ItemId);
	             }
	             if(portfolio.AnotherProjectinPortfolio){
	             portfolioProjectIds.push(portfolio.AnotherProjectinPortfolio.ItemId);
	             }
	             */
	        });
	        self.addPickers();
	        cnc.localStorage.get('[CMv1RecentPortfolioIdArray]', opts)
	            .fail(function (results) { // Local Storage key does not exist
	            })
	            .then(function (results) { // Local Storage key does exist, load the recentPortfolios
	                self.setRecentPortfolios(results.value);
	            });
	    });
	    self.setRecentProjects = function (projectIdArray) {
	        self.recentProjects.removeAll();
	        $.each(projectIdArray, function (index, projectId) {
	            var project = _.find(self.projects(), {id: projectId});
	            if (project !== undefined) {
	                self.recentProjects.push(project);
	            }
	        });
	    };
	    self.setRecentPortfolios = function (portfolioIdArray) {
	        self.recentPortfolios.removeAll();
	        $.each(portfolioIdArray, function (index, portfolioId) {
	            var portfolio = _.find(self.portfolios(), {id: portfolioId});
	            if (portfolio !== undefined) {
	                self.recentPortfolios.push(portfolio);
	            }
	        });
	    };
	    self.selectRecentProject = function (parm) {
	        cmApp.setSelectedProject(parm.id);
	        // If we are not in the Project Center, go there
	        if (cmApp.thisApp != 'Projects') {
	            window.location.href = _.find(self.navOptions(), {category: 'center', title: 'Projects'}).link;
	        }
	    };
	    self.selectRecentPortfolio = function (parm) {
	        cmApp.setSelectedPortfolio(parm.id);
	        // If we are not in the Portfolio Center, go there
	        if (cmApp.thisApp != 'Portfolios') {
	            window.location.href = _.find(self.navOptions(), {category: 'center', title: 'Portfolios'}).link;
	        }
	    };
	    self.getAppRefConnection = function () {
	        cmApp.datasource('App References').done(function (ds) {
	            if (ds === null) {
	            } else {
	                ds.read().then(function () {
	                    if (ds.data().length >= 1) {
	                        var results = _.sortBy(ds.data(), 'SortOrder');
	                        $.each(results, function (index, app) {
	                            cmApp.apps.push(app);
	                        });
	                        self.appRefConnectionDfer.resolve(results);
	                    } else {
	                    }
	                });
	            }
	        });
	    };
	    $.when(self.appRefConnectionDfer).done(function (results) {
	        $.each(results, function (index, app) {
	
	            if (app.ShowInNavigation) {
	                self.navOptions.push({
	                    category: 'center',
	                    title: app.Title,
	                    link: window.location.origin + '/Home/SPA?AppId=' + app.AppId_cc_,
	                    icon: app.Icon
	                });
	            }
	        });
	        if(_.find(cmApp.apps, {AppId_cc_: cmApp.currentAppId}) === undefined){
	            self.appRefConnectionCompleteDfer.resolve();
	        } else {
	            var permId = _.find(cmApp.apps, {AppId_cc_: cmApp.currentAppId}).PermId;
	            cmApp.thisApp = _.find(cmApp.permIds, {id: permId}).title;
	            if (['Data','Admin'].indexOf(cmApp.thisApp) == -1) {
	                setAllLocalStorage();
	            }
	            self.appRefConnectionCompleteDfer.resolve();
	        }
	    });
	    self.RecentEntity = function (obj, type) {
	        this.id = obj.id;
	        this.title = obj.title;
	        this.icon = obj.icon;
	        this.type = type;
	        this.typeIcon = 'fa-question-o';
	        if (type == 'project') {
	            this.typeIcon = 'fa-file-o';
	        }
	        if (type == 'portfolio') {
	            this.typeIcon = 'fa-files-o';
	        }
	
	
	    };
	    self.getUserPrefs = function () {
	        cmApp.datasource('User App Settings', true).done(function (ds) {
	            if (ds === null) {
	            } else {
	                //Filters and other settings as needed
	                var filter = '{"logic":"and","filters":[{"field":"AppUser/Id","operator":"eq","value":"[Me]"}]}';
	                ds.filter(JSON.parse(filter));
	                ds.read().then(function () {
	                    if (ds.data().length >= 1) {
	                        var results = _.sortBy(ds.data(), 'Title');
	                        self.userPrefsDfer.resolve(results);
	                    } else {
	                        self.userPrefsDfer.resolve([]);
	                    }
	                });
	            }
	        });
	
	    };
	    $.when(self.userPrefsDfer, self.availableDataSourcesDfer).done(function (results) {
	        var userPrefs = null;
	        switch (results.length) {
	            case 0:
	                // Add an entry
	                if (['Data','Admin', null].indexOf(cmApp.thisApp) == -1) {
	                    cmApp.addUserAppSetting();
	                }
	                break;
	            case 1:
	                // We're good
	                userPrefs = results[0];
	                break;
	            default:
	                // Bad... but just use first entry
	                userPrefs = results[0];
	        }
	        if (userPrefs !== null) {
	        }
	    });
	};
	$(document).ready(function () {
	    ko.applyBindings(new CMViewModel(), document.getElementById("navWindow"));
	});
	// });
	
	function pickersHtml() {
	    var pickersHTML = "";
	    pickersHTML += ' <span id="projectPicker" class="cmPicker">';
	    pickersHTML += '<!-- ko if: projects -->';
	    pickersHTML += '<input data-bind="kendoComboBox: ';
		/* VZG change  */
		pickersHTML += '{ placeholder: \'Select a Program\', dataTextField: \'title\', dataValueField: \'id\', data: projects, value: selectedProject, }';
	    pickersHTML += '" />';
	    pickersHTML += '<!-- /ko -->';
	    pickersHTML += '</span>';
	
	    pickersHTML += ' <span id="portfolioPicker" class="cmPicker">';
	    pickersHTML += '<!-- ko if: portfolios -->';
	    pickersHTML += '<input data-bind="kendoComboBox: ';
	    pickersHTML += '{placeholder: \'Select a Portfolio\', dataTextField: \'title\', dataValueField: \'id\', data: portfolios, value: selectedPortfolio, }';
	    pickersHTML += '" />';
	    pickersHTML += '<!-- /ko -->';
	    pickersHTML += '</span>';
	
	
	
	    return pickersHTML;
	}
	function stickyWindowMarkup() {
	
	    markup = '';
	    markup += '<!-- ko if: $component !== undefined -->';
	    markup += "  <div id=\"stickyWindow\">";
	    markup += "     <div>&nbsp;";
	    markup += "     <i class=\"fa fa-close fa-lg floatright pointer\" data-bind=\"click: showStickies\"></i>";
	    // markup += "     <i class=\"fa fa-plus fa-lg floatright pointer\"data-bind=\"click: showNewSticky\"></i>";
	    markup += "     </div>";
	    markup += "            <div class=\"panel-group\">";
	    markup += "                <div id=\"showNewSticky\" data-bind=\"visible: showNewStickyPanel\" class=\"panel panel-primary\" >";
	    markup += "                    <div class=\"panel-heading bg-primary\">New Sticky Note ";
	    markup += "                         <i id=\"newStickyClose\" class=\"fa fa-close floatright pointer\" data-bind=\"click: showNewSticky \" ></i></div>";
	    markup += "                    <div class=\"panel-body\">";
	    markup += "                     <input placeholder=\"Enter note title and..\" data-bind=\"textInput : newSticky.title\" class=\"form-control\" id=\"newStickyTitle\"></input>";
	    markup += "                     <textarea placeholder=\"Enter note body. Then add add button below that becomes visible when you have entered Title and Body\" ";
	    markup += "                         data-bind=\"textInput : newSticky.note\" class=\"form-control\" rows=\"5\" id=\"newStickyNote\"></textarea>";
	    markup += "                     <\/div>";
	    markup += "                    <div class=\"panel-footer\">";
	    markup += "                         <button type=\"button\" id=\"newStickyAdd\" class=\"k-button pointer\" data-bind=\"click: addSticky, visible: stickyCanBeSaved \" >Add</button>&nbsp;";
	    markup += "                     <\/div>";
	    markup += "                <\/div>";
	    markup += "                <!-- ko foreach: stickyNotes -->";
	    markup += "                <div class=\"panel panel-info\" >";
	    markup += "                    <div class=\"panel-heading bg-primary\" data-bind=\"text:Title\"></div>";
	    markup += "                    <div class=\"panel-body\" data-bind=\"html: Note\"></div>";
	    markup += "                    <div class=\"panel-footer text-muted\">";
	    markup += "                        <span data-bind=\"html: CreatedBy.DisplayName\"></span>";
	    markup += "                        <span data-bind=\"html: moment(CreateDate).format(\'MM/DD/YYYY h:mm:ss a\')\"></span>";
	//    markup += "                        <i class='fa fa-minus-square-o fa-lg pointer' title='Delete this note' data-bind=\"visible: $parent.currentUser().Id == CreatedBy.Id, click: $parent.deleteSticky\"></i>";
	
	    markup += "                    </div>";
	    markup += "                <\/div>";
	    markup += "                <!-- \/ko -->";
	    markup += "            <\/div>";
	    markup += "  <\/div>";
	    markup += '<!-- /ko -->';
	
	    return markup;
	}
	function setNavigation (self){
	    if(cmApp.thisApp === null){
	        return;
	    }
	    var createSection = cc.sidebar.createSection,
	        createLink = cc.sidebar.createLink,
	
	        // optionally if you need to append/modify the existing menu
	        existingSections = cc.sidebar.getSections(),
	
	        // sections is a simple array
	        sections = [];
	    sections.push(createSection({
	            title: 'CorasManage',
	            links: []
	        })
	    );
	    var link = createLink({title: 'Help', href: ko.observable('http://coras.help/corasmanage#cshid=' +
	        _.find(cmApp.permIds, {title: cmApp.thisApp}).helpId), icon: 'fa-question', target: '_blank'});
	    sections[0].links.push(link);
	    var centers = _.filter(self.navOptions(), {category: 'center'});
	    $.each(centers, function(index, center){
	        var link = createLink({title: center.title, href: center.link, icon: center.icon});
	        sections[0].links.push(link);
	    });
	
	    // updating the shared observable
	    cc.sidebar.setSections(sections);
	
	}
	function setAllLocalStorage(selectedProjectId, selectedPortfolioId) {
	    var opts = new cnc.localStorage.options();
	    cnc.localStorage.set('[CMv1MostRecentAppId]', window.location.href.split('?AppId=')[1].substr(0, 36), opts)
	        .fail(function (results) {
	        })
	        .then(function (results) {
	        });
	    cnc.localStorage.get('[CMv1SelectedProjectId]', opts)
	        .fail(function (results) {
	            cnc.localStorage.set('[CMv1SelectedProjectId]', 'none', opts)
	                .fail(function (results) {
	                })
	                .then(function (results) {
	                });
	        })
	        .then(function (results) {
	            if (selectedProjectId) {
	                cnc.localStorage.set('[CMv1SelectedProjectId]', selectedProjectId, opts)
	                    .fail(function (results) {
	                    })
	                    .then(function (results) {
	                    });
	            }
	        });
	    cnc.localStorage.get('[CMv1RecentProjectIdArray]', opts)
	        .fail(function (results) {
	            cnc.localStorage.set('[CMv1RecentProjectIdArray]', [], opts)
	                .fail(function (results) {
	                })
	                .then(function (results) {
	                });
	        })
	        .then(function (results) {
	        });
	    cnc.localStorage.get('[CMv1ProjectsInPortfolio]', opts)
	        .fail(function (results) {
	            cnc.localStorage.set('[CMv1ProjectsInPortfolio]', 'none', opts)
	                .fail(function (results) {
	                })
	                .then(function (results) {
	                });
	        })
	        .then(function (results) {
	        });
	    cnc.localStorage.get('[CMv1SelectedPortfolioId]', opts)
	        .fail(function (results) {
	            cnc.localStorage.set('[CMv1SelectedPortfolioId]', 'none', opts)
	                .fail(function (results) {
	                })
	                .then(function (results) {
	                });
	        })
	        .then(function (results) {
	            if (selectedPortfolioId) {
	                cnc.localStorage.set('[CMv1SelectedPortfolioId]', selectedPortfolioId, opts)
	                    .fail(function (results) {
	                    })
	                    .then(function (results) {
	                    });
	            }
	        });
	    cnc.localStorage.get('[CMv1RecentPortfolioIdArray]', opts)
	        .fail(function (results) {
	            cnc.localStorage.set('[CMv1RecentPortfolioIdArray]', [], opts)
	                .fail(function (results) {
	                })
	                .then(function (results) {
	                });
	        })
	        .then(function (results) {
	        });
	    cnc.localStorage.get('[CMv1RecentProjectsAndPortfoliosArray]', opts)
	        .fail(function (results) {
	            cnc.localStorage.set('[CMv1RecentProjectsAndPortfoliosArray]', [], opts)
	                .fail(function (results) {
	                })
	                .then(function (results) {
	                });
	        })
	        .then(function (results) {
	        });
	}

/***/ }
/******/ ]);
//# sourceMappingURL=cmapp.js.map