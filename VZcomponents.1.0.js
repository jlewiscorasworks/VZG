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
	window.cnCmAppComponents.hello = __webpack_require__(44);
	window.cnCmAppComponents.activityTimelineConstructor = __webpack_require__(45);
	//window.cnCmAppComponents.hello = require('./components/diff/diffConstructor');
	


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/*
	if ( !ko.components.isRegistered('cn-app-map') ) {
	    ko.components.register('cn-app-map', require('./app-map/app-map'));
	}
	*/
	
	if ( !ko.components.isRegistered('cn-cm-risk-matrix') ) {
	    ko.components.register('cn-cm-risk-matrix', __webpack_require__(2));
	}
	if ( !ko.components.isRegistered('cn-cm-activity-timeline') ) {
	    ko.components.register('cn-cm-activity-timeline', __webpack_require__(4));
	}
	if ( !ko.components.isRegistered('cn-cm-project-overview') ) {
	    ko.components.register('cn-cm-project-overview', __webpack_require__(6));
	}
	if ( !ko.components.isRegistered('cn-cm-portfolio-timeline') ) {
	    ko.components.register('cn-cm-portfolio-timeline', __webpack_require__(8));
	}
	if ( !ko.components.isRegistered('cn-cm-expense-summary') ) {
	    ko.components.register('cn-cm-expense-summary', __webpack_require__(10));
	}
	if ( !ko.components.isRegistered('cn-cm-project-schedule') ) {
	    ko.components.register('cn-cm-project-schedule', __webpack_require__(12));
	}
	if ( !ko.components.isRegistered('cn-cm-budget-viewer') ) {
	    ko.components.register('cn-cm-budget-viewer', __webpack_require__(14));
	}
	if ( !ko.components.isRegistered('cn-cm-project-scorecard') ) {
	    ko.components.register('cn-cm-project-scorecard', __webpack_require__(16));
	}
	if ( !ko.components.isRegistered('cn-cm-weekly-report') ) {
	    ko.components.register('cn-cm-weekly-report', __webpack_require__(18));
	}
	if ( !ko.components.isRegistered('cn-cm-team-members') ) {
	    ko.components.register('cn-cm-team-members', __webpack_require__(20));
	}
	if ( !ko.components.isRegistered('cn-cm-project-plan') ) {
	    ko.components.register('cn-cm-project-plan', __webpack_require__(22));
	}
	if ( !ko.components.isRegistered('cn-cm-gonogo-analysis') ) {
	    ko.components.register('cn-cm-gonogo-analysis', __webpack_require__(24));
	}
	if ( !ko.components.isRegistered('cn-cm-portfolio-builder') ) {
	    ko.components.register('cn-cm-portfolio-builder', __webpack_require__(26));
	}
	if ( !ko.components.isRegistered('cn-cm-query-builder') ) {
	    ko.components.register('cn-cm-query-builder', __webpack_require__(28));
	}
	if ( !ko.components.isRegistered('cn-cm-comment-collaborate') ) {
	    ko.components.register('cn-cm-comment-collaborate', __webpack_require__(30));
	}
	if ( !ko.components.isRegistered('cn-cm-portfolio-assessment') ) {
	    ko.components.register('cn-cm-portfolio-assessment', __webpack_require__(32));
	}
	if ( !ko.components.isRegistered('cn-diff') ) {
	    ko.components.register('cn-diff', __webpack_require__(34));
	}
	if ( !ko.components.isRegistered('cn-cm-kpi-builder') ) {
	    ko.components.register('cn-cm-kpi-builder', __webpack_require__(36));
	}
	if ( !ko.components.isRegistered('cn-cm-quad-chart') ) {
	    ko.components.register('cn-cm-quad-chart', __webpack_require__(38));
	}
	if ( !ko.components.isRegistered('cn-cm-schedule-overlay') ) {
	    ko.components.register('cn-cm-schedule-overlay', __webpack_require__(40));
	}
	if ( !ko.components.isRegistered('cn-cm-project-cleanup') ) {
	    ko.components.register('cn-cm-project-cleanup', __webpack_require__(42));
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
	function RiskMatrix(params) {
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
	        $.when(cmApp.ready).done(function () {
	            cmApp.blockUI();
	
	            var grid = $("#riskGrid").data("kendoGrid");
	            if (cmApp.thisApp == 'Projects') {
	                $("#riskGrid").kendoGrid({
	                    pageable: true,
	                    sortable: true,
	                    columns: [{
	                        field: 'Title',
	                        title: 'Title',
	                        width: "150px"
	                    },
	                        {
	                            field: 'Description_cc_',
	                            title: 'Description',
	                            template: function (field) {
	                                var item = '<html>' + field.Description_cc_ + '</html>';
	                                if (field.Description_cc_.length < 51) {
	                                    item = jQuery(item).text();
	                                    return item;
	                                } else {
	                                    item = jQuery(item).text();
	                                    return item.substring(0,50) + '...';
	                                }
	                            }
	                        },
	                        {
	                            field: 'Status.Title',
	                            title: 'Status',
	                            width: "80px",
	                            template: function (field) {
	                                var item = '<i class="fa fa-flag fa-2x" style="color:' + field._HexColorCode + '"></i>';
	                                return item;
	                            }
	                        },
	                        {command: {text: "View", click: showDetails}, title: " ", width: "80px"},
	                        {command: {text: "Edit", click: editRisk }, title: " ", width: "80px"},
	                        {command: {text: "Escalate", click: escalateRisk }, title: " ", width: "90px"},
	                        {command: {text: "Delete", click: deleteRisk }, title: " ", width: "80px"}
	
	                    ],
	                    dataSource: {
	                        pageSize: 3,
	                        cache: false
	                    }
	                });
	            } else {
	                $("#riskGrid").kendoGrid({
	                    pageable: true,
	                    sortable: true,
	                    columns: [{
	                        field: 'Project.Title',
	                        title: 'Project',
	                        width: "150px"
	                    },
	                        {
	                            field: 'Title',
	                            title: 'Title',
	                            width: "150px"
	                        },
	                        {
	                            field: 'Description_cc_',
	                            title: 'Description',
	                            template: function (field) {
	                                var item = '<html>' + field.Description_cc_ + '</html>';
	                                if (field.Description_cc_.length < 51) {
	                                    item = jQuery(item).text();
	                                    return item;
	                                } else {
	                                    item = jQuery(item).text();
	                                    return item.substring(0,50) + '...';
	                                }
	                            }
	                        },
	                        {
	                            field: 'Status.Title',
	                            title: 'Status',
	                            width: "80px",
	                            template: function (field) {
	                                var item = '<i class="fa fa-flag fa-2x" style="color:' + field._HexColorCode + '"></i>';
	                                return item;
	                            }
	                        },
	                        { command: { text: "View", click: showDetails }, title: " ", width: "80px" } ],
	                    dataSource: {
	                        pageSize: 3,
	                        cache: false
	                    }
	                });
	            }
	
	            if (cmApp.thisApp == 'Projects') {
	                $("#toolbar").show();
	                $("#newRisk").click(function(){
	                    var formOptions = new cnc.ui.form.options();
	                    formOptions.actionTitle = 'New Risk';
	                    cnc.ui.form.run(formOptions)
	                        .done(function (results) {
	                            self.loadRiskMatrix();
	                        })
	                        .fail(function (results) {
	                        });
	                });
	            } else {
	                $("#toolbar").hide();
	            }
	
	            function editRisk(e) {
	                e.preventDefault();
	                var dataItem = this.dataItem($(e.currentTarget).closest("tr"));
	                var formOptions = new cnc.ui.form.options();
	                formOptions.actionTitle = 'Edit Risk';
	                formOptions.itemId = dataItem.Id;
	
	                cnc.ui.form.run(formOptions)
	                    .done(function (results) {
	                        self.loadRiskMatrix();
	                        self.ds.read().then(function () {
	                            if (self.ds.data().length >= 1) {
	                                for(var i=0; i < self.ds.data().length; i++){
	                                    cnc.fn.flattenListObjects(self.ds.data()[i]);
	                                    self.ds.data()[i]._HexColorCode = _.find(self.riskStatus,{_ProbabilityItemId: self.ds.data()[i]._ProbabilityItemId, _ImpactItemId: self.ds.data()[i]._ImpactItemId} ).__colorIndicatorHexColorCode;
	                                }
	                                $("#riskGrid").data("kendoGrid").dataSource.data(self.ds.data());
	                            } else {
	                                $("#riskGrid").data("kendoGrid").dataSource.data([]);
	                            }
	                        });
	                    })
	                    .fail(function (results) {
	                    });
	            }
	
	            function escalateRisk(e) {
	                e.preventDefault();
	                var dataItem = this.dataItem($(e.currentTarget).closest("tr"));
	                var formOptions = new cnc.ui.form.options();
	                formOptions.actionTitle = 'Escalate to Issue';
	                formOptions.itemId = dataItem.Id;
	                cnc.ui.form.run(formOptions)
	                    .done(function (results) {
	                        self.loadRiskMatrix();
	                        self.ds.read().then(function () {
	                            if (self.ds.data().length >= 1) {
	                                for(var i=0; i < self.ds.data().length; i++){
	                                    cnc.fn.flattenListObjects(self.ds.data()[i]);
	                                    self.ds.data()[i]._HexColorCode = _.find(self.riskStatus,{_ProbabilityItemId: self.ds.data()[i]._ProbabilityItemId, _ImpactItemId: self.ds.data()[i]._ImpactItemId} ).__colorIndicatorHexColorCode;
	                                }
	                                $("#riskGrid").data("kendoGrid").dataSource.data(self.ds.data());
	                            } else {
	                                $("#riskGrid").data("kendoGrid").dataSource.data([]);
	                            }
	                        });
	                    })
	                    .fail(function (results) {
	                    });
	            }
	
	            function deleteRisk(e) {
	                e.preventDefault();
	                var dataItem = this.dataItem($(e.currentTarget).closest("tr"));
	                kendo.ui.CcOkCancelDialog.show({
	                    title: "Item delete confirmation",
	                    message: 'This will delete the selected risk.</br></br>Do you want to proceed?',
	                    icon: 'question'
	                }).done(function( response ) {
	                    if ( response.button === 'OK' ) {
	                        var deletedItem = _.find(self.ds.data(),{Id: dataItem.Id});
	                        self.ds.data().remove(deletedItem);
	                        self.ds.sync().then(function (){
	                            self.ds.read().then(function () {
	                                self.loadRiskMatrix();
	                                self.ds.read().then(function () {
	                                    if (self.ds.data().length >= 1) {
	                                        for(var i=0; i < self.ds.data().length; i++){
	                                            cnc.fn.flattenListObjects(self.ds.data()[i]);
	                                            self.ds.data()[i]._HexColorCode = _.find(self.riskStatus,{_ProbabilityItemId: self.ds.data()[i]._ProbabilityItemId, _ImpactItemId: self.ds.data()[i]._ImpactItemId} ).__colorIndicatorHexColorCode;
	                                        }
	                                        $("#riskGrid").data("kendoGrid").dataSource.data(self.ds.data());
	                                    } else {
	                                        $("#riskGrid").data("kendoGrid").dataSource.data([]);
	                                    }
	                                });
	                            });
	                        });
	                    }
	                });
	            }
	
	            function showDetails(e) {
	                e.preventDefault();
	                var dataItem = this.dataItem($(e.currentTarget).closest("tr"));
	                var formOptions = new cnc.ui.form.options();
	                formOptions.actionTitle = 'View Risk';
	                formOptions.itemId = dataItem.Id;
	
	                cnc.ui.form.run(formOptions)
	                    .done(function (results) {
	                    })
	                    .fail(function (results) {
	                    });
	            }
	
	            self.availableDataSources = cmApp.availableDataSources;
	            self.loadRiskMatrix = function () {
	                self.risksList = _.find(cmApp.availableDataSources, {Title: 'Risks'}); // Get the list details
	                var riskTypesList = _.find(cmApp.availableDataSources, {Title: 'Risk Types'}); // Get the list details
	                self.riskTypeId = '';
	
	                var riskFilter = '{"logic":"and","filters":[{"field":"Title","operator":"eq","value":"Risk"}]}';
	                cmApp.datasource('Risk Types', false).done(function (ds) {
	                    if (ds === null) {
	                        console.log('Risk Types datasource connection not found');
	                    } else {
	                        ds.query({
	                            filter: JSON.parse(riskFilter)
	                        }).then(function () {
	                            loadMatrix(ds.data()[0].Id);
	                        });
	                    }
	                });
	
	                self.riskCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	                self.selectedProject = cmApp.selectedProject;
	                self.projectsInPortfolio = cmApp.projectsInPortfolio;
	
	                function loadMatrix(riskTypeId) {
	                    var projectFilter = null;
	
	                    if (cmApp.thisApp == 'Projects') {
	                        projectFilter = JSON.parse('{"logic":"and","filters":[{"field":"RiskType/ItemId","operator":"eq","value":"' + riskTypeId + '","Filter":null},{"field":"Project/ItemId","operator":"eq","value":"' + self.selectedProject + '","Filter":null}]}');
	                    }
	                    if (cmApp.thisApp == 'Portfolios') {
	                        if(cmApp.projectsInPortfolio.length ===0){
	                            return;
	                        }
	                        if (self.projectsInPortfolio.length == 1) {
	                            projectFilter = JSON.parse('{"logic":"and","filters":[{"field":"RiskType/ItemId","operator":"eq","value":"' + riskTypeId + '","Filter":null},{"field":"Project/ItemId","operator":"eq","value":"' + self.projectsInPortfolio[0] + '","Filter":null}]}');
	                        } else {
	                            projectFilter = JSON.parse('{"logic":"and","filters":[{"field" : null,' +
	                                '"value" : null, "operator" : null,"Filter" : {' +
	                                '"logic":"or","filters":[]}},{"field":"RiskType/ItemId","operator":"eq","value":"' + riskTypeId + '","Filter" : null}]}');
	                            $.each(self.projectsInPortfolio, function (index, id) {
	                                projectFilter.filters[0].Filter.filters.push({
	                                    "field": "Project/ItemId",
	                                    "operator": "eq",
	                                    "value": id
	                                });
	                            });
	                        }
	                    }
	                    self.projectFilterParsed = projectFilter;
	                    projectFilter = JSON.stringify(projectFilter);
	                    self.projectFilter = projectFilter;
	                    $.ajax({
	                        url: window.location.origin + '/api/Aggregation/MultiSeries',
	                        type: 'POST',
	                        headers: {
	                            Accept: 'application/json,odata.metadata=minimal',
	                            AppId: cmApp.getAppId('Data')
	                        },
	                        data: '{"DataSource":1,"ConnectionId":"' + self.risksList.ConnectionId + '","ListId":"' + self.risksList.Id + '","SiteUri":"","Filter": ' + projectFilter + ',"Group":{"Field":"Probability/Title","Aggregates":[{"AggregateField":"Probability/Title","AggregateType":0}],"SubGroupFields":["Impact/Title"]}}',
	                        contentType: "application/json",
	                        success: function (data, xhr) {
	                            self.riskCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	                            $.each(data[0].Results, function (i, v) {
	                                if (v.Fields.length == 2) { // Must have two dimensions to have valid usable data
	                                    if (v.Fields[0]._value == "Rare" && v.Fields[1]._value == "Extreme") {
	                                        self.riskCount[0] = v.Value;
	                                    } else if (v.Fields[0]._value == "Rare" && v.Fields[1]._value == "Major") {
	                                        self.riskCount[1] = v.Value;
	                                    } else if (v.Fields[0]._value == "Rare" && v.Fields[1]._value == "Moderate") {
	                                        self.riskCount[2] = v.Value;
	                                    } else if (v.Fields[0]._value == "Rare" && v.Fields[1]._value == "Minor") {
	                                        self.riskCount[3] = v.Value;
	                                    } else if (v.Fields[0]._value == "Rare" && v.Fields[1]._valuee == "Insignificant") {
	                                        self.riskCount[4] = v.Value;
	                                    } else if (v.Fields[0]._value == "Unlikely" && v.Fields[1]._value == "Extreme") {
	                                        self.riskCount[5] = v.Value;
	                                    } else if (v.Fields[0]._value == "Unlikely" && v.Fields[1]._value == "Major") {
	                                        self.riskCount[6] = v.Value;
	                                    } else if (v.Fields[0]._value == "Unlikely" && v.Fields[1]._value == "Moderate") {
	                                        self.riskCount[7] = v.Value;
	                                    } else if (v.Fields[0]._value == "Unlikely" && v.Fields[1]._value == "Minor") {
	                                        self.riskCount[8] = v.Value;
	                                    } else if (v.Fields[0]._value == "Unlikely" && v.Fields[1]._value == "Insignificant") {
	                                        self.riskCount[9] = v.Value;
	                                    } else if (v.Fields[0]._value == "Possible" && v.Fields[1]._value == "Extreme") {
	                                        self.riskCount[10] = v.Value;
	                                    } else if (v.Fields[0]._value == "Possible" && v.Fields[1]._value == "Major") {
	                                        self.riskCount[11] = v.Value;
	                                    } else if (v.Fields[0]._value == "Possible" && v.Fields[1]._value == "Moderate") {
	                                        self.riskCount[12] = v.Value;
	                                    } else if (v.Fields[0]._value == "Possible" && v.Fields[1]._value == "Minor") {
	                                        self.riskCount[13] = v.Value;
	                                    } else if (v.Fields[0]._value == "Possible" && v.Fields[1]._value == "Insignificant") {
	                                        self.riskCount[14] = v.Value;
	                                    } else if (v.Fields[0]._value == "Likely" && v.Fields[1]._value == "Extreme") {
	                                        self.riskCount[15] = v.Value;
	                                    } else if (v.Fields[0]._value == "Likely" && v.Fields[1]._value == "Major") {
	                                        self.riskCount[16] = v.Value;
	                                    } else if (v.Fields[0]._value == "Likely" && v.Fields[1]._value == "Moderate") {
	                                        self.riskCount[17] = v.Value;
	                                    } else if (v.Fields[0]._value == "Likely" && v.Fields[1]._value == "Minor") {
	                                        self.riskCount[18] = v.Value;
	                                    } else if (v.Fields[0]._value == "Likely" && v.Fields[1]._value == "Insignificant") {
	                                        self.riskCount[19] = v.Value;
	                                    } else if (v.Fields[0]._value == "Almost Certain" && v.Fields[1]._value == "Extreme") {
	                                        self.riskCount[20] = v.Value;
	                                    } else if (v.Fields[0]._value == "Almost Certain" && v.Fields[1]._value == "Major") {
	                                        self.riskCount[21] = v.Value;
	                                    } else if (v.Fields[0]._value == "Almost Certain" && v.Fields[1]._value == "Moderate") {
	                                        self.riskCount[22] = v.Value;
	                                    } else if (v.Fields[0]._value == "Almost Certain" && v.Fields[1]._value == "Minor") {
	                                        self.riskCount[23] = v.Value;
	                                    } else if (v.Fields[0]._value == "Almost Certain" && v.Fields[1]._value == "Insignificant") {
	                                        self.riskCount[24] = v.Value;
	                                    }
	                                }
	                            });
	                            self.loadChart(self.riskCount);
	                        },
	                        error: function (xhr, ajaxOptions, thrownError) {
	                        }
	                    });
	                }
	            };
	            var riskStatusListDfer = $.Deferred();
	            var colorIndicatorsListDfer = $.Deferred();
	            var riskStatusList = _.find(cmApp.availableDataSources, {Title: 'Risk Status'}); // Get the list details
	            var colorIndicatorsList = _.find(cmApp.availableDataSources, {Title: 'Color Indicators'}); // Get the list details
	            cmApp.datasource('Risk Status', false).done(function (ds) {
	                if (ds === null) {
	                    console.log('Risk Status datasource connection not found');
	                } else {
	                    ds.query().then(function () {
	                        riskStatusListDfer.resolve(ds.data());
	                    });
	                }
	            });
	
	            cmApp.datasource('Color Indicators', false).done(function (ds) {
	                if (ds === null) {
	                    console.log('Color Indicators datasource connection not found');
	                } else {
	                    ds.query().then(function () {
	                        colorIndicatorsListDfer.resolve(ds.data());
	                    });
	                }
	            });
	
	            $.when(riskStatusListDfer, colorIndicatorsListDfer ).done(function (riskStatus, colorsInd) {
	                $.each(colorsInd, function(index, ci){
	                    cnc.fn.flattenListObjects(ci);
	                });
	                $.each(riskStatus, function(index, rs){
	                    rs._colorIndicator = _.find(colorsInd, {Id: rs.ColorIndicator.ItemId});
	                    cnc.fn.flattenListObjects(rs);
	                });
	                self.riskStatus = riskStatus;
	                self.loadRiskMatrix();
	            });
	
	            cc.events.on('cmAppNewProjectSelected', function (evt) {
	                self.loadRiskMatrix();
	                var data = [];
	                $("#riskGrid").data("kendoGrid").dataSource.data(data);
	                $("#riskHeader").remove();
	            }, self);
	            cc.events.on('cmAppNewPortfolioSelected', function (evt) {
	                self.loadRiskMatrix();
	                var data = [];
	                $("#riskGrid").data("kendoGrid").dataSource.data(data);
	                $("#riskHeader").remove();
	            }, self);
	
	            self.loadChart = function (riskCount) {
	                $('#chart').empty();
	                // Creates Heat Map
	                chart = anychart.heatMap([
	                    {x: "Rare", y: "Extreme", heat: riskCount[0],
	                        fill: _.find(self.riskStatus,{_ProbabilityTitle: 'Rare', _ImpactTitle: 'Extreme'} ).__colorIndicatorHexColorCode},
	                    {x: "Rare", y: "Major", heat: riskCount[1],
	                        fill: _.find(self.riskStatus,{_ProbabilityTitle: 'Rare', _ImpactTitle: 'Major'} ).__colorIndicatorHexColorCode},
	                    {x: "Rare", y: "Moderate", heat: riskCount[2],
	                        fill: _.find(self.riskStatus,{_ProbabilityTitle: 'Rare', _ImpactTitle: 'Moderate'} ).__colorIndicatorHexColorCode},
	                    {x: "Rare", y: "Minor", heat: riskCount[3],
	                        fill: _.find(self.riskStatus,{_ProbabilityTitle: 'Rare', _ImpactTitle: 'Minor'} ).__colorIndicatorHexColorCode},
	                    {x: "Rare", y: "Insignificant", heat: riskCount[4],
	                        fill: _.find(self.riskStatus,{_ProbabilityTitle: 'Rare', _ImpactTitle: 'Insignificant'} ).__colorIndicatorHexColorCode},
	                    {x: "Unlikely", y: "Extreme", heat: riskCount[5],
	                        fill: _.find(self.riskStatus,{_ProbabilityTitle: 'Unlikely', _ImpactTitle: 'Extreme'} ).__colorIndicatorHexColorCode},
	                    {x: "Unlikely", y: "Major", heat: riskCount[6],
	                        fill: _.find(self.riskStatus,{_ProbabilityTitle: 'Unlikely', _ImpactTitle: 'Major'} ).__colorIndicatorHexColorCode},
	                    {x: "Unlikely", y: "Moderate", heat: riskCount[7],
	                        fill: _.find(self.riskStatus,{_ProbabilityTitle: 'Unlikely', _ImpactTitle: 'Moderate'} ).__colorIndicatorHexColorCode},
	                    {x: "Unlikely", y: "Minor", heat: riskCount[8],
	                        fill: _.find(self.riskStatus,{_ProbabilityTitle: 'Unlikely', _ImpactTitle: 'Minor'} ).__colorIndicatorHexColorCode},
	                    {x: "Unlikely", y: "Insignificant", heat: riskCount[9],
	                        fill: _.find(self.riskStatus,{_ProbabilityTitle: 'Unlikely', _ImpactTitle: 'Insignificant'} ).__colorIndicatorHexColorCode},
	                    {x: "Possible", y: "Extreme", heat: riskCount[10],
	                        fill: _.find(self.riskStatus,{_ProbabilityTitle: 'Possible', _ImpactTitle: 'Extreme'} ).__colorIndicatorHexColorCode},
	                    {x: "Possible", y: "Major", heat: riskCount[11],
	                        fill: _.find(self.riskStatus,{_ProbabilityTitle: 'Possible', _ImpactTitle: 'Major'} ).__colorIndicatorHexColorCode},
	                    {x: "Possible", y: "Moderate", heat: riskCount[12],
	                        fill: _.find(self.riskStatus,{_ProbabilityTitle: 'Possible', _ImpactTitle: 'Moderate'} ).__colorIndicatorHexColorCode},
	                    {x: "Possible", y: "Minor", heat: riskCount[13],
	                        fill: _.find(self.riskStatus,{_ProbabilityTitle: 'Possible', _ImpactTitle: 'Minor'} ).__colorIndicatorHexColorCode},
	                    {x: "Possible", y: "Insignificant", heat: riskCount[14],
	                        fill: _.find(self.riskStatus,{_ProbabilityTitle: 'Possible', _ImpactTitle: 'Insignificant'} ).__colorIndicatorHexColorCode},
	                    {x: "Likely", y: "Extreme", heat: riskCount[15],
	                        fill: _.find(self.riskStatus,{_ProbabilityTitle: 'Likely', _ImpactTitle: 'Extreme'} ).__colorIndicatorHexColorCode},
	                    {x: "Likely", y: "Major", heat: riskCount[16],
	                        fill: _.find(self.riskStatus,{_ProbabilityTitle: 'Likely', _ImpactTitle: 'Major'} ).__colorIndicatorHexColorCode},
	                    {x: "Likely", y: "Moderate", heat: riskCount[17],
	                        fill: _.find(self.riskStatus,{_ProbabilityTitle: 'Likely', _ImpactTitle: 'Moderate'} ).__colorIndicatorHexColorCode},
	                    {x: "Likely", y: "Minor", heat: riskCount[18],
	                        fill: _.find(self.riskStatus,{_ProbabilityTitle: 'Likely', _ImpactTitle: 'Minor'} ).__colorIndicatorHexColorCode},
	                    {x: "Likely", y: "Insignificant", heat: riskCount[19],
	                        fill: _.find(self.riskStatus,{_ProbabilityTitle: 'Likely', _ImpactTitle: 'Insignificant'} ).__colorIndicatorHexColorCode},
	                    {x: "Almost Certain", y: "Extreme", heat: riskCount[20],
	                        fill: _.find(self.riskStatus,{_ProbabilityTitle: 'Almost Certain', _ImpactTitle: 'Extreme'} ).__colorIndicatorHexColorCode},
	                    {x: "Almost Certain", y: "Major", heat: riskCount[21],
	                        fill: _.find(self.riskStatus,{_ProbabilityTitle: 'Almost Certain', _ImpactTitle: 'Major'} ).__colorIndicatorHexColorCode},
	                    {x: "Almost Certain", y: "Moderate", heat: riskCount[22],
	                        fill: _.find(self.riskStatus,{_ProbabilityTitle: 'Almost Certain', _ImpactTitle: 'Moderate'} ).__colorIndicatorHexColorCode},
	                    {x: "Almost Certain", y: "Minor", heat: riskCount[23],
	                        fill: _.find(self.riskStatus,{_ProbabilityTitle: 'Almost Certain', _ImpactTitle: 'Minor'} ).__colorIndicatorHexColorCode},
	                    {x: "Almost Certain", y: "Insignificant", heat: riskCount[24],
	                        fill: _.find(self.riskStatus,{_ProbabilityTitle: 'Almost Certain', _ImpactTitle: 'Insignificant'} ).__colorIndicatorHexColorCode}
	                ]);
	
	
	                // Sets chart settings and hover chart settings
	                chart.stroke('#fff');
	                chart.credits().enabled(false);
	                chart.hoverStroke('6 #fff');
	                chart.hoverFill('#545f69');
	                chart.hoverLabels().fontColor('#fff');
	
	                // Sets selection mode for single selection
	                chart.interactivity();
	                chart.listen("pointMouseDown", function (evt) {
	                    self.selectedProbability = evt.iterator.get("x");
	                    self.selectedImpact = evt.iterator.get("y");
	                    $("#riskHeader").remove();
	                    $("#riskGrid").data("kendoGrid").dataSource.page(0);
	                    var gridHeader = '<div id="riskHeader" class="k-grid-header"><table><thead><tr><th class="k-header">Risks with Probability = ' + self.selectedProbability + ' and Impact = ' + self.selectedImpact + '</th></tr></thead></table></div>';
	                    $("#riskGrid").data("kendoGrid").wrapper.prepend(gridHeader);
	                    var selectedProject;
	
	                    selectedProject = cmApp.selectedProject;
	                    var projectFilter = null;
	
	                    if (cmApp.thisApp == 'Projects') {
	                        projectFilter = '{"logic":"and","filters":[{"field":"Project%2FItemId","operator":"eq","value":"' + selectedProject + '"},{"field":"RiskType%2FTitle","operator":"eq","value":"Risk"},{"field":"Probability%2FTitle","operator":"startswith","value":"' + self.selectedProbability + '"},{"field":"Impact%2FTitle","operator":"startswith","value":"' + self.selectedImpact + '"}]}';
	                    }
	                    if (cmApp.thisApp == 'Portfolios') {
	                        if (self.projectsInPortfolio.length == 1) {
	                            projectFilter = '{"logic":"and","filters":[{"field":"Project%2FItemId","operator":"eq","value":"' + self.projectsInPortfolio[0] + '"},{"field":"RiskType%2FTitle","operator":"eq","value":"Risk"},{"field":"Probability%2FTitle","operator":"startswith","value":"' + self.selectedProbability + '"},{"field":"Impact%2FTitle","operator":"startswith","value":"' + self.selectedImpact + '"}]}';
	                        } else {
	                            projectFilter = '{"logic":"or","filters":[';
	                            $.each(self.projectsInPortfolio, function (index, id) {
	                                projectFilter += '{"logic":"and","filters":[{"field":"Project%2FItemId","operator":"eq","value":"' + id + '"},{"field":"RiskType%2FTitle","operator":"eq","value":"Risk"},{"field":"Probability%2FTitle","operator":"startswith","value":"' + self.selectedProbability + '"},{"field":"Impact%2FTitle","operator":"startswith","value":"' + self.selectedImpact + '"}]},';
	                            });
	                            projectFilter = projectFilter.substring(0, projectFilter.length - 1) + ']}';
	                        }
	                    }
	
	                    cmApp.datasource('Risks', true).done(function (ds) {
	                        if (ds === null) {
	                            console.log('Risks datasource connection not found');
	                        } else {
	                            self.ds = ds;
	                            ds.query({
	                                filter: JSON.parse(projectFilter)
	                            }).then(function () {
	                                if (self.ds.data().length >= 1) {
	                                    for(var i=0; i < self.ds.data().length; i++){
	                                        cnc.fn.flattenListObjects(self.ds.data()[i]);
	                                        self.ds.data()[i]._HexColorCode = _.find(self.riskStatus,{_ProbabilityItemId: self.ds.data()[i]._ProbabilityItemId, _ImpactItemId: self.ds.data()[i]._ImpactItemId} ).__colorIndicatorHexColorCode;
	                                    }
	                                    $("#riskGrid").data("kendoGrid").dataSource.data(self.ds.data());
	                                } else {
	                                    $("#riskGrid").data("kendoGrid").dataSource.data([]);
	                                }
	                            });
	                        }
	                    });
	                });
	
	                // Sets title
	                chart.title().enabled(true).text("Risk Reporting Matrix").padding([0, 0, 20, 0]);
	
	                // Sets adjust chart labels
	                var labels = chart.labels();
	                labels.enabled(true).minFontSize(14);
	                labels.enabled(true);
	                labels.fontColor("white");
	                // Formats labels
	                labels.useHtml(true);
	                labels.textFormatter(function () {
	                    if (this.heat === 0) {
	                        return "";
	                    } else {
	                        return '<span class="badge">' + this.heat + '</span>';
	                    }
	                });
	
	                // Sets Axes
	                chart.yAxis().stroke(null).labels().padding([0, 15, 0, 0]);
	                chart.yAxis().ticks().enabled(false);
	                chart.xAxis().stroke(null);
	                chart.xAxis().ticks().enabled(false);
	
	                // Sets Tooltip
	                chart.tooltip().title().useHtml(true);
	                chart.tooltip().useHtml(true)
	                    .titleFormatter(function () {
	                        if (this.heat === 1) {
	                            return '<b>' + this.heat + ' Risk';
	                        } else
	                            return '<b>' + this.heat + ' Risks';
	                    })
	                    .textFormatter(function () {
	                        return '<span style="color: #CECECE">Probability: </span>' + this.y + '<br/>' +
	                            '<span style="color: #CECECE">Impact: </span>' + this.x;
	                    });
	
	                // Draws Chart
	                chart.container("chart");
	                chart.draw();
	                cmApp.unblockUI();
	
	                chart.width(550);
	                chart.height(400);
	
	            };
	
	        });
	    });
	}
	
	$.extend(true, RiskMatrix.prototype, {
	    dispose: function () {
	        cc.events.off('cmAppNewProjectSelected');
	        cc.events.off('cmAppNewPortfolioSelected');
	    },
	
	    initSubscriptions: function () {
	        var self = this;
	
	    },
	
	    initComponent: function (view) {
	//        this.campusPicker = $('.campusPicker', view).kendoDropDownList().data("kendoDropDownList");
	    }
	});
	
	function createViewModel(params, componentInfo) {
	    return new RiskMatrix(params);
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

	module.exports = "<style>\r\n    .parentWrapper {\r\n        overflow: auto;\r\n        background-color: gray;\r\n    }\r\n    #child1 {\r\n        float:left;\r\n        min-height: 400px;\r\n        margin-right:50px;\r\n        width:500px;\r\n    }\r\n    #child2 {\r\n        overflow:auto;\r\n    }\r\n    @media screen and (max-width: 400px) {\r\n        #child1 {\r\n            float: none;\r\n            margin-right:0;\r\n            width:auto;\r\n            border:0;\r\n        }\r\n    }\r\n</style>\r\n\r\n<div class=\"parentwrapper\">\r\n    <div id=\"toolbar\" class=\"cc-toolbar k-toolbar k-widget k-toolbar-resizable\">\r\n        <input id=\"newRisk\" class=\"k-button\" type=\"submit\" value=\"New Risk\">\r\n    </div>\r\n    <div id=\"child1\"><div style=\"height: 400px; width: 550px\" id=\"chart\"></div></div>\r\n    <div id=\"child2\"><br/><br/><br/><br/><div id=\"riskGrid\"></div></div>\r\n</div>"

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var _ = cc.lodash,
	    template = __webpack_require__(5),
	    fn = cc.fn;
	
	/**
	 * @summary Activity Timeline component
	 * @desc Activity Timeline component
	 * <br />
	 * Creates Activity Timeline
	 * @namespace
	 * @example <caption>Activity Timeline Description</caption>
	 * // Extension JS
	 * // Boilerplate Extension JS code works
	 * //
	 * // Extension HTML
	 * // <cn-cm-activity-timeline></cn-cm-activity-timeline>
	 */
	function ActivityTimeline(params) {
	
	    var self = this;
	    self.ready = ko.observable(false);
	    self.options = null;
	    self.logs = ko.observableArray();
	    $.when(cmApp.ready).done(function () {
	        params = params || params;
	        if ( !params.projectIds ) {
	            throw new Error('mandatory param \'projectIds\' missing');
	        }
	        if ( !$.isArray(params.projectIds()) ) {
	            throw new Error('param \'projectIds\' is not an array');
	        }
	/*
	        if ( params.projectIds().length ===0  ) {
	            throw new Error('param array \'projectIds\' is empty');
	        }
	
	
	*/
	        self.options = params.options;
	        params.projectIds.subscribe(function (newProjectId) {
	            self.loadActivityTimeline();
	        });
	        self.toggleLogData = function () {
	            $('.' + this.Id).toggle();
	        };
	        self.views = ko.observableArray();
	        self.selectedProject = cmApp.selectedProject;
	        self.selectedPortfolio = cmApp.selectedPortfolio;
	        self.projectsInPortfolio = cmApp.projectsInPortfolio;
	        self.availableDataSources = cmApp.availableDataSources;
	        self.loadActivityTimeline = function () {
	            self.journalDfer = $.Deferred();
	            self.tasksDfer = $.Deferred();
	            //$('#projectPicker span.k-combobox').block({ message: null });
	            cmApp.blockUI();
	            self.selectedProject = cmApp.selectedProject;
	            self.selectedPortfolio = cmApp.selectedPortfolio;
	            self.projectsInPortfolio = cmApp.projectsInPortfolio;
	            self.logs.removeAll();
	            self.onMenuSelect = function(e) {
	                if(e.item.id == "setAllCardsSmall"){
	                    self.setAllCardsSmall();
	                    return;
	                }
	                if(e.item.id == "setAllCardsMedium"){
	                    self.setAllCardsMedium();
	                    return;
	                }
	                if(e.item.id == "setAllCardsLarge"){
	                    self.setAllCardsLarge();
	                    return;
	                }
	            };
	            self.setAllCardsSmall = function (){
	                cmApp.blockUI({ message: 'Resizing...' });
	                $.each(self.logs(), function(index, log){
	                    log._cardSize('small');
	                });
	                cmApp.unblockUI();
	            };
	            self.setAllCardsMedium = function (){
	                cmApp.blockUI({ message: 'Resizing...' });
	                $.each(self.logs(), function(index, log){
	                    log._cardSize('medium');
	                });
	                cmApp.unblockUI();
	            };
	            self.setAllCardsLarge = function (){
	                cmApp.blockUI({ message: 'Resizing...' });
	                $.each(self.logs(), function(index, log){
	                    log._cardSize('large');
	                });
	                cmApp.unblockUI();
	            };
	            self.setCardSmall = function (item){
	                item._cardSize('small');
	            };
	            self.setCardMedium = function (item){
	                item._cardSize('medium');
	            };
	            self.setCardLarge = function (item){
	                item._cardSize('large');
	            };
	
	            var stickyList = _.find(self.availableDataSources, {Title: 'Journal'}); // Get the list details
	            var projectFilter = null;
	            var projectFilterArray = [];
	/*
	            if (cmApp.thisApp == 'Projects') {
	                projectFilter = [{"field":"Project/ItemId","operator":"eq","value":"' + self.selectedProject + '"}];// "Project%2FItemId+eq+%27" + self.selectedProject + "%27";
	            }
	            if (cmApp.thisApp == 'Portfolios' || cmApp.thisApp == 'Executive Dashboard') {
	                if (self.projectsInPortfolio.length == 1) {
	                    projectFilter = [{"field":"Project/ItemId","operator":"eq","value":"' + self.projectsInPortfolio[0] + '"}];// "Project%2FItemId+eq+%27" + self.projectsInPortfolio[0] + "%27";
	                } else {
	                    $.each(self.projectsInPortfolio, function (index, id) {
	                        projectFilterArray.push({"field":"Project/ItemId","operator":"eq","value":"' + id + '"}); // "Project%2FItemId+eq+%27" + id + "%27");
	                    });
	                    projectFilter = projectFilterArray;
	                    portfolioFilter = projectFilterArray;
	                    portfolioFilter.push({"field":"Portfolio/ItemId","operator":"eq","value":"' + self.selectedPortfolio + '"}); // "Project%2FItemId+eq+%27" + id + "%27");
	                }
	            }
	*/
	            if (cmApp.thisApp == 'Projects') {
	                projectFilter = [{"field":"Project/ItemId","operator":"eq","value": self.selectedProject}];// "Project%2FItemId+eq+%27" + self.selectedProject + "%27";
	            }
	            /*           switch (params.projectIds().length) {
	                case 0:
	                    return;
	                case 1:
	                    projectFilter = [{"field":"Project/ItemId","operator":"eq","value": params.projectIds()[0] }];// "Project%2FItemId+eq+%27" + self.projectsInPortfolio[0] + "%27";
	                    break;
	                default:
	                    $.each(params.projectIds(), function (index, id) {
	                        projectFilterArray.push({"field":"Project/ItemId","operator":"eq","value": id }); // "Project%2FItemId+eq+%27" + id + "%27");
	                    });
	                    projectFilter = projectFilterArray;
	            }
	*/
	            if (cmApp.thisApp == 'Portfolios' || cmApp.thisApp == 'Executive Dashboard') {
	                $.each(cmApp.projectsInPortfolio, function(index, projectId){
	                    projectFilterArray.push({"field":"Project/ItemId","operator":"eq","value": projectId});
	                });
	                projectFilter = projectFilterArray;
	            }
	
	            var dsUniqueLogging = [];
	            var dsLogging = _.filter(cmApp.availableDataSources, {LogListItems: true});
	            $.each(dsLogging, function (index, ds) {
	                var izzit = _.find(dsUniqueLogging, {
	                    Title : ds.Title
	                });
	                if (izzit === undefined) {
	                    dsUniqueLogging.push(ds);
	                }
	            });
	            //console.log(dsUniqueLogging);
	            cmApp.datasource('Tasks', true).done(function (ds) {
	                var tasksData = [];
	                var filter = '{"logic":"or","filters": ' + JSON.stringify(projectFilter) + '}';
	                ds.query({
	                    sort: { field: "ModifiedDate", dir: "desc" },
	                    filter: JSON.parse(filter)
	                }).then(function () {
	                    $.each(ds.data(), function (index, log) {
	                        log._cardSize = ko.observable(self.options.initialCardSize);
	                        log.ModifiedDate = moment(log.ModifiedDate).valueOf();
	                        tasksData.push(log);
	                    });
	                    self.tasksDfer.resolve(tasksData);
	                });
	            });
	            cmApp.datasource('Journal', true).done(function (ds) {
	                var journalData = [];
	                var filter = '{"logic":"or","filters": ' + JSON.stringify(projectFilter) + '}';
	                ds.query({
	                    sort: { field: "ModifiedDate", dir: "desc" },
	                    filter: JSON.parse(filter)
	                }).then(function () {
	                    var url = '';
	                    $.each(ds.data(), function (index, log) {
	                        log._cardSize = ko.observable(self.options.initialCardSize);
	                        log.ModifiedDate = moment(log.ModifiedDate).valueOf();
	                        url = window.location.protocol + '//' + window.location.hostname;
	                        if (log.Portfolio.ItemId !== undefined) {
	                            url += '/Home/SPA?AppId=' + log.AppId_cc_ + '&portfolioId=' + log.Portfolio.ItemId + '&navigateTo=' + log.ViewTitle;
	                        } else if (log.Project.ItemId !== undefined) {
	                            url += '/Home/SPA?AppId=' + log.AppId_cc_ + '&projectId=' + log.Project.ItemId + '&navigateTo=' + log.ViewTitle;
	                        }
	                        if (log.JournalType === 'User Sticky') {
	                            url += '&showStickies=true';
	                        }
	                        log.url = url;
	                        journalData.push(log);
	                    });
	                    self.journalDfer.resolve(journalData);
	                });
	            });
	
	/*
	            $.ajax({
	                url: window.location.origin + "/odata/Connections('" +
	                stickyList.ConnectionId + "')/Lists('" + stickyList.Id + "')/ListItems?" +
	                "&%24filter=" + projectFilter +
	                "&%24orderby=CreateDate+desc&%24count=true",
	                type: 'GET',
	                headers: {
	                    Accept: 'application/json,odata.metadata=minimal',
	                    AppId: cmApp.getAppId('Data')
	                },
	                dataType: 'json',
	                cache: false,
	                contentType: "application/json",
	                success: function (data, xhr) {
	                    $.each(data.value, function (index, log) {
	                        log._cardSize = ko.observable(self.options.initialCardSize);
	                        log.ModifiedDate = moment(log.ModifiedDate).valueOf();
	                        journalData.push(log);
	                    });
	                    self.journalDfer.resolve(journalData);
	                },
	                error: function (xhr, ajaxOptions, thrownError) {
	                    alert(thrownError);
	                }
	            });
	*/
	            $.when(self.journalDfer, self.tasksDfer).done(function (journalData, tasksData) {
	                var logData = [];
	                $.each(journalData, function(index, item){
	                    logData.push(item);
	                });
	                $.each(tasksData, function(index, item){
	                    logData.push(item);
	                });
	                logData = _.sortBy(logData, function(log) { return log.ModifiedDate * -1; });
	                $.each(logData, function(index, item){
	                    self.logs.push(item);
	                });
	
	                //console.log(self.logs());
	                self.ready(true);
	                cmApp.unblockUI();
	
	            });
	        };
	
	
	        self.loadActivityTimeline();
	        if(cmApp.thisApp == 'Projects'){
	            cc.events.on('cmAppNewProjectSelected', function (evt) {
	                self.loadActivityTimeline();
	            }, self);
	        }
	        if(cmApp.thisApp == 'Portfolios'){
	            cc.events.on('cmAppNewPortfolioSelected', function (evt) {
	                self.loadActivityTimeline();
	            }, self);
	        }
	    });
	
	}
	
	$.extend(true, ActivityTimeline.prototype, {
	    dispose: function () {
	        cc.events.off('cmAppNewProjectSelected');
	        cc.events.off('cmAppNewPortfolioSelected');
	    },
	
	    initSubscriptions: function () {
	        var self = this;
	
	    },
	
	    initComponent: function (view) {
	//        this.campusPicker = $('.campusPicker', view).kendoDropDownList().data("kendoDropDownList");
	    }
	});
	function createViewModel(params, componentInfo) {
	    return new ActivityTimeline(params);
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

	module.exports = "<style>\r\n    .timeline {\r\n        list-style: none;\r\n        padding: 20px 0 20px;\r\n        position: relative;\r\n    }\r\n\r\n    .timeline:before {\r\n        top: 0;\r\n        bottom: 0;\r\n        position: absolute;\r\n        content: \" \";\r\n        width: 3px;\r\n        background-color: #eeeeee;\r\n        left: 50%;\r\n        margin-left: -1.5px;\r\n    }\r\n\r\n    .timeline > li {\r\n        margin-bottom: 20px;\r\n        position: relative;\r\n    }\r\n\r\n    .timeline > li:before,\r\n    .timeline > li:after {\r\n        content: \" \";\r\n        display: table;\r\n    }\r\n\r\n    .timeline > li:after {\r\n        clear: both;\r\n    }\r\n\r\n    .timeline > li:before,\r\n    .timeline > li:after {\r\n        content: \" \";\r\n        display: table;\r\n    }\r\n\r\n    .timeline > li:after {\r\n        clear: both;\r\n    }\r\n\r\n    .timeline > li > .timeline-panel {\r\n        width: 46%;\r\n        float: left;\r\n        border: 1px solid #d4d4d4;\r\n        border-radius: 2px;\r\n        padding: 20px;\r\n        position: relative;\r\n        -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);\r\n        box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);\r\n    }\r\n\r\n    .timeline-panel tr td {\r\n        background-color: white;\r\n    }\r\n\r\n    .timeline-panel:hover {\r\n        background-color: #fffcf9;\r\n    }\r\n\r\n    .timeline-panel:hover tr td {\r\n        background-color: #fffcf9;\r\n    }\r\n\r\n    .timeline > li > .timeline-panel:before {\r\n        position: absolute;\r\n        top: 26px;\r\n        right: -15px;\r\n        display: inline-block;\r\n        border-top: 15px solid transparent;\r\n        border-left: 15px solid #ccc;\r\n        border-right: 0 solid #ccc;\r\n        border-bottom: 15px solid transparent;\r\n        content: \" \";\r\n    }\r\n\r\n    .timeline > li > .timeline-panel:after {\r\n        position: absolute;\r\n        top: 27px;\r\n        right: -14px;\r\n        display: inline-block;\r\n        border-top: 14px solid transparent;\r\n        border-left: 14px solid #fff;\r\n        border-right: 0 solid #fff;\r\n        border-bottom: 14px solid transparent;\r\n        content: \" \";\r\n    }\r\n\r\n    .timeline > li > .timeline-badge {\r\n        color: #fff;\r\n        width: 50px;\r\n        height: 50px;\r\n        line-height: 50px;\r\n        font-size: 1.4em;\r\n        text-align: center;\r\n        position: absolute;\r\n        top: 16px;\r\n        left: 50%;\r\n        margin-left: -25px;\r\n        background-color: #EB0043;\r\n        z-index: 100;\r\n        border-top-right-radius: 50%;\r\n        border-top-left-radius: 50%;\r\n        border-bottom-right-radius: 50%;\r\n        border-bottom-left-radius: 50%;\r\n    }\r\n\r\n    .timeline > li > .timeline-badge:hover {\r\n        /*\r\n                background-color: #ff80a4;\r\n        */\r\n    }\r\n\r\n    .timeline > li.timeline-inverted > .timeline-panel {\r\n        float: right;\r\n    }\r\n\r\n    .timeline > li.timeline-inverted > .timeline-panel:before {\r\n        border-left-width: 0;\r\n        border-right-width: 15px;\r\n        left: -15px;\r\n        right: auto;\r\n    }\r\n\r\n    .timeline > li.timeline-inverted > .timeline-panel:after {\r\n        border-left-width: 0;\r\n        border-right-width: 14px;\r\n        left: -14px;\r\n        right: auto;\r\n    }\r\n\r\n    .timeline-badge.primary {\r\n        background-color: #2e6da4 !important;\r\n    }\r\n\r\n    .timeline-badge.success {\r\n        background-color: #3f903f !important;\r\n    }\r\n\r\n    .timeline-badge.warning {\r\n        background-color: #f0ad4e !important;\r\n    }\r\n\r\n    .timeline-badge.danger {\r\n        background-color: #d9534f !important;\r\n    }\r\n\r\n    .timeline-badge.info {\r\n        background-color: #5bc0de !important;\r\n    }\r\n\r\n    .timeline-title {\r\n        margin-top: 0;\r\n        color: inherit;\r\n        font-size: 1.25em;\r\n        font-weight: bold;\r\n        color: #EB0043;\r\n    }\r\n\r\n    .timeline-heading {\r\n        padding-bottom: 5px;\r\n        font-family: 'Gentona W00 ExtraLight', Gentona ExtraLight;\r\n        font-size: 1.25em;\r\n    }\r\n\r\n    .timeline-body {\r\n        font-family: 'Gentona W00 ExtraLight', Gentona ExtraLight;\r\n    }\r\n\r\n    .timeline-body > p,\r\n    .timeline-body > ul {\r\n        margin-bottom: 0;\r\n    }\r\n\r\n    .timeline-body > p + p {\r\n        margin-top: 5px;\r\n    }\r\n\r\n    .timeline-body table.table {\r\n        margin-bottom: 0px\r\n    }\r\n\r\n    .timeline-body td {\r\n        font-size: 1.25em;\r\n    }\r\n\r\n    .appPageDescription p {\r\n        margin-bottom: 4px;\r\n    }\r\n\r\n    .appPageDescription .k-block {\r\n        background-color: #fffcf9;\r\n    }\r\n\r\n    .kendo-menu {\r\n        background-color: #fffcf9;\r\n    }\r\n\r\n    .kendo-menu .k-item:hover {\r\n        background-color: #f9f4f2;\r\n    }\r\n\r\n    .kendo-menu .k-link:hover {\r\n        background-color: #f9f4f2;\r\n    }\r\n\r\n    .kendo-menu .k-state-default {\r\n        background-color: #fffcf9;\r\n    }\r\n\r\n    .kendo-menu .k-state-active {\r\n        background-color: #fffcf9 !important;\r\n        color: #1E252D;\r\n    }\r\n\r\n    .kendo-menu .k-state-border-right {\r\n        background-color: #f9f4f2 !important;\r\n        color: #1E252D !important;;\r\n    }\r\n\r\n    .kendo-disabled .k-item {\r\n        background-color: #fffcf9 !important;\r\n    }\r\n\r\n    .kendo-disabled .k-link {\r\n        background-color: #fffcf9 !important;\r\n    }\r\n\r\n    i.smallCard {\r\n        font-size: medium;\r\n    }\r\n\r\n    i.mediumCard {\r\n        font-size: large;\r\n    }\r\n\r\n    i.largeCard {\r\n        font-size: x-large;\r\n    }\r\n\r\n    i.smallCard, i.mediumCard, i.largeCard {\r\n        vertical-align: middle;\r\n    }\r\n\r\n</style>\r\n<div>\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <!-- ko if: $component.ready() == true -->\r\n                <span>\r\n                    <ul class=\"kendo-menu\" data-bind=\"kendoMenu: {\r\n                                   select: $component.onMenuSelect\r\n                                   }\">\r\n                      <li id=\"setAllCardsSmall\"><i class=\"fa fa-fw fa-list-alt smallCard\"\r\n                                                   title=\"Set All Cards Small\"></i></li>\r\n                      <li id=\"setAllCardsMedium\"><i class=\"fa fa-fw fa-lg fa-list-alt mediumCard\"\r\n                                                    title=\"Set All Cards Medium\"></i></li>\r\n                      <li id=\"setAllCardsLarge\"><i class=\"fa fa-fw fa-2x fa-list-alt largeCard\"\r\n                                                   title=\"Set All Cards Large\"></i>\r\n                      </li>\r\n                    </ul>\r\n                </span>\r\n                <ul class=\"timeline\">\r\n                    <li>\r\n                        <div class=\"timeline-badge\">\r\n                            <i class=\"fa fa-lg fa-heartbeat\" title=\"Header\">\r\n                            </i>\r\n                        </div>\r\n                        <div class=\"timeline-panel\">\r\n                            <div class=\"timeline-heading\">\r\n                                    <span class=\"timeline-title\">\r\n                                        System Captured Entries\r\n                                    </span>\r\n                            </div>\r\n                        </div>\r\n                    </li>\r\n                    <li class=\"timeline-inverted\">\r\n                        <div class=\"timeline-badge\">\r\n                            <i class=\"fa fa-lg fa-user\" title=\"Header\">\r\n                            </i>\r\n                        </div>\r\n                        <div class=\"timeline-panel\">\r\n                            <div class=\"timeline-heading\">\r\n                                <span class=\"timeline-title\">Sticky and Collaboration Notes<br/></span>\r\n                                <span>(Click on Title to drill down to Center)</span>\r\n                            </div>\r\n                        </div>\r\n                    </li>\r\n                    <!-- ko foreach: $component.logs -->\r\n                    <!-- ko if: typeof JournalType != 'undefined' && (JournalType == \"User Sticky\" || JournalType == \"User Comment\") -->\r\n                    <li class=\"timeline-inverted\">\r\n                        <div class=\"timeline-badge\">\r\n                            <i class=\"fa fa-lg fa-user\" title=\"Sticky and Collaboration Notes\">\r\n                            </i>\r\n                        </div>\r\n                        <div class=\"timeline-panel\">\r\n                            <!-- ko template: { name: 'timeline-heading', data: $data } --><!-- /ko -->\r\n                            <!-- ko if: _cardSize() == 'large' -->\r\n                            <!-- ko template: { name: 'timeline-body', data: $data } --><!-- /ko -->\r\n                            <!-- /ko -->\r\n                            <!-- ko if: _cardSize() == 'medium' || _cardSize() == 'large' -->\r\n                            <!-- ko template: { name: 'timeline-footer', data: $data } --><!-- /ko -->\r\n                            <!-- /ko -->\r\n                        </div>\r\n                    </li>\r\n                    <!-- /ko -->\r\n                    <!-- ko if: typeof JournalType == 'undefined' -->\r\n                    <li>\r\n                        <div class=\"timeline-badge\">\r\n                            <i class=\"fa fa-lg fa-heartbeat\" title=\"System Captured Changes\">\r\n                            </i>\r\n                        </div>\r\n                        <div class=\"timeline-panel\">\r\n                            <!-- ko template: { name: 'timeline-heading', data: $data } --><!-- /ko -->\r\n                            <!-- ko if: _cardSize() == 'large' -->\r\n                            <!-- ko template: { name: 'timeline-body', data: $data } --><!-- /ko -->\r\n                            <!-- /ko -->\r\n                            <!-- ko if: _cardSize() == 'medium' || _cardSize() == 'large' -->\r\n                            <!-- ko template: { name: 'timeline-footer', data: $data } --><!-- /ko -->\r\n                            <!-- /ko -->\r\n                        </div>\r\n                    </li>\r\n                    <!-- /ko -->\r\n                    <!-- /ko -->\r\n                </ul>\r\n                <!-- /ko -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<script type=\"text/html\" id=\"cardSizeSelector\">\r\n    <span>\r\n    <i class=\"fa fa-fw fa-list-alt smallCard\" title=\"Set Card Small\"\r\n       data-bind=\"click: $component.setCardSmall\"></i>\r\n    <i class=\"fa fa-fw fa-lg fa-list-alt mediumCard\" title=\"Set Card Medium\"\r\n       data-bind=\"click: $component.setCardMedium\"></i>\r\n    <i class=\"fa fa-fw fa-2x fa-list-alt largeCard\" title=\"Set Card Large\"\r\n       data-bind=\"click: $component.setCardLarge\"></i>\r\n    </span>\r\n</script>\r\n<script type=\"text/html\" id=\"timeline-heading\">\r\n    <div class=\"timeline-heading\">\r\n        <!-- ko if: typeof JournalType != \"undefined\" -->\r\n        <!-- ko if: JournalType == \"User Sticky\" -->\r\n        <i class=\"fa fa-sticky-note-o fa-lg\"></i>\r\n        <!-- /ko -->\r\n        <!-- ko if: JournalType == \"User Comment\" -->\r\n        <i class=\"fa fa-comments-o fa-lg\"></i>\r\n        <!-- /ko -->\r\n        <!-- /ko -->\r\n        <!--data-bind=\"attr: { href: url, text: Title }\"\r\n        <a data-bind=\"attr: { href: url }, text: Title\"></a>-->\r\n        <!-- ko if: typeof url != \"undefined\" -->\r\n        <a class=\"timeline-title\" data-bind=\"attr: { href: url, target: '_blank' }, text: Title\"></a>\r\n        <!-- /ko -->\r\n        <!-- ko if: typeof url == \"undefined\" -->\r\n        <span class=\"timeline-title\" data-bind=\"html: Title\"></span>\r\n        <!-- /ko -->\r\n        <!-- ko template: { name: 'cardSizeSelector', data: $data } --><!-- /ko -->\r\n    </div>\r\n</script>\r\n<script type=\"text/html\" id=\"timeline-body\">\r\n    <div class=\"timeline-body\">\r\n        <table class=\"table\">\r\n            <tr>\r\n                <td>\r\n                    <!-- ko if: typeof Project != \"undefined\" && typeof Project.Title != \"undefined\"-->\r\n                    Project\r\n                    <!-- /ko -->\r\n                    <!-- ko if: typeof Portfolio != \"undefined\" && typeof Portfolio.Title != \"undefined\"-->\r\n                    Portfolio\r\n                    <!-- /ko -->\r\n                </td>\r\n                <td>\r\n                    <!-- ko if: typeof Project != \"undefined\" && typeof Project.Title != \"undefined\"-->\r\n                    <span data-bind=\"html: Project.Title\"></span>\r\n                    <!-- /ko -->\r\n                    <!-- ko if: typeof Portfolio != \"undefined\" && typeof Portfolio.Title != \"undefined\"-->\r\n                    <span data-bind=\"html: Portfolio.Title\"></span>\r\n                    <!-- /ko -->\r\n                </td>\r\n            </tr>\r\n            <!-- ko if: typeof JournalType != \"undefined\" && JournalType == \"User Comment\"-->\r\n            <tr>\r\n                <td>\r\n                    Column Name\r\n                </td>\r\n                <td data-bind=\"html: ColumnName\">\r\n                </td>\r\n            </tr>\r\n            <!-- /ko -->\r\n            <!-- ko if: typeof ViewTitle != \"undefined\" -->\r\n            <tr>\r\n                <td>\r\n                    Page\r\n                </td>\r\n                <td data-bind=\"html: ViewTitle\">\r\n                </td>\r\n            </tr>\r\n            <!-- /ko -->\r\n            <tr>\r\n                <td>\r\n                    Title\r\n                </td>\r\n                <td data-bind=\"html: Title\"></td>\r\n            </tr>\r\n            <!-- ko if: typeof JournalType != \"undefined\" -->\r\n            <tr>\r\n                <td>\r\n                    Note\r\n                </td>\r\n                <td data-bind=\"html: Note\">\r\n                </td>\r\n            </tr>\r\n            <!-- /ko -->\r\n        </table>\r\n    </div>\r\n\r\n\r\n</script>\r\n<script type=\"text/html\" id=\"timeline-footer\">\r\n    <div class=\"timeline-footer\">\r\n        <div>\r\n            Created by\r\n            <span data-bind=\"html: CreatedBy.DisplayName\"></span>\r\n            on\r\n            <span data-bind=\"html: moment(CreateDate).format('MM/DD/YYYY h:mm:ss a')\"></span>\r\n        </div>\r\n        <!-- ko if: typeof JournalType == \"undefined\" -->\r\n        <div>\r\n            Modified by\r\n            <span data-bind=\"html: ModifiedBy.DisplayName\"></span>\r\n            on\r\n            <span data-bind=\"html: moment(ModifiedDate).format('MM/DD/YYYY h:mm:ss a')\"></span>\r\n        </div>\r\n        <!-- /ko -->\r\n    </div>\r\n</script>"

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var _ = cc.lodash,
	    template = __webpack_require__(7),
	    fn = cc.fn;
	
	//    $.getScript( "/libs/anychart/7.8.0/anychart_bundle.min.js", function( data, textStatus, jqxhr ) {
	// });
	/**
	 * @summary Portfolio Overview component
	 * @desc Portfolio Overview component
	 * <br />
	 * Creates Portfolio Overview
	 * @namespace
	 * @example <caption>Portfolio Overview Description</caption>
	 * // Extension JS
	 * // Boilerplate Extension JS code works
	 * //
	 * // Extension HTML
	 * // <cn-cm-project-overview></cn-cm-project-overview>
	 */
	function ProjectOverview(params) {
	
	    var self = this;
	    self.ready = ko.observable(false);
	    self.projects = ko.observableArray();
	    self.kpiStatus = null;
	    self.kpiStatusDfer = $.Deferred();
	    $.when(cmApp.ready).done(function () {
	        // Set up ajax defaults
	        $.ajaxSetup({
	            method: "GET",
	            contentType: 'application/json',
	            headers: {
	                Accept: 'application/json,odata.metadata=minimal',
	                AppId: cmApp.getAppId('Data')
	            },
	            cache: false
	        });
	
	        self.availableDataSources = cmApp.availableDataSources;
	        var projectsList = _.find(cmApp.availableDataSources, {Title: 'Projects'}); // Get the list details
	        self.selectedProject = cmApp.selectedProject;
	        self.projectsInPortfolio = cmApp.projectsInPortfolio;
	
	        self.colorIndicators = {};
	        self.colorIndicators.dfer = $.Deferred();
	        self.colorIndicators.ds = _.find(cmApp.availableDataSources, {Title: 'Color Indicators'}); // Get the list details
	        self.colorIndicators.setDs = function(){
	            var ds = _.find(cmApp.availableDataSources, {
	                Title : 'Color Indicators',
	                CrossAppAccessLevel : 'Viewer'
	            });
	            var connId = ds.ConnectionId;
	            var listId = ds.Id;
	
	            cc.api.getConnectionListModelById(connId, listId).then(function (model) {
	                var listItemDS = cc.api.getListItemDataSourceById(listId, {
	                    schema : {
	                        model : model.listModel
	                    },
	                    ccModel : model
	                }, connId);
	
	                self.colorIndicators.ds = listItemDS;
	                self.colorIndicators.ds.read().then(function(){
	                    self.colorIndicators.dfer.resolve(self.colorIndicators.ds.data());
	                });
	            });
	        };
	        self.projectKpiStatus = {};
	        self.projectKpiStatus.dfer = $.Deferred();
	        self.projectKpiStatus.ds = _.find(cmApp.availableDataSources, {Title: 'Project KPI Status'}); // Get the list details
	        self.projectKpiStatus.setDs = function(){
	            var ds = _.find(cmApp.availableDataSources, {
	                Title : 'Project KPI Status',
	                CrossAppAccessLevel : 'Viewer'
	            });
	            var connId = ds.ConnectionId;
	            var listId = ds.Id;
	
	            cc.api.getConnectionListModelById(connId, listId).then(function (model) {
	                var listItemDS = cc.api.getListItemDataSourceById(listId, {
	                    schema : {
	                        model : model.listModel
	                    },
	                    ccModel : model
	                }, connId);
	
	                self.projectKpiStatus.ds = listItemDS;
	                self.projectKpiStatus.ds.read().then(function(){
	                    self.projectKpiStatus.dfer.resolve(self.projectKpiStatus.ds.data());
	                });
	            });
	        };
	        self.projectKpiStatus.setDs();
	        self.colorIndicators.setDs();
	
	        $.when(self.colorIndicators.dfer, self.projectKpiStatus.dfer).done(function (colorsInd, kpiStatus) {
	            $.each(colorsInd, function(index, ci){
	                cnc.fn.flattenListObjects(ci);
	            });
	            $.each(kpiStatus, function(index, rs){
	                rs._colorIndicator = _.find(colorsInd, {Id: rs.ColorIndicator.ItemId});
	                cnc.fn.flattenListObjects(rs);
	            });
	            self.kpiStatus = kpiStatus;
	            self.colorRed = _.find(kpiStatus, {Title: 'Red'}).__colorIndicatorHexColorCode;
	            self.colorYellow = _.find(kpiStatus, {Title: 'Yellow'}).__colorIndicatorHexColorCode;
	            self.colorGreen = _.find(kpiStatus, {Title: 'Green'}).__colorIndicatorHexColorCode;
	            self.kpiStatusDfer.resolve(self.kpiStatus);
	        });
	
	        self.launchProjectPlan = function (project) {
	            var projectCenter = _.find(cc.sidebar.getSections()[0].links, {title: 'Projects'}).href;
	            window.open(projectCenter + '&projectId=' + project.Id + '&navigateTo=Project%20Plan');
	        };
	
	        self.launchProjectScorecard = function (project) {
	            var projectCenter = _.find(cc.sidebar.getSections()[0].links, {title: 'Projects'}).href;
	            window.open(projectCenter + '&projectId=' + project.Id + '&navigateTo=Project%20Scorecard');
	        };
	
	        self.loadProjectOverview = function () {
	            self.selectedProject = cmApp.selectedProject;
	            self.projectsInPortfolio = cmApp.projectsInPortfolio;
	            if(cmApp.thisApp == 'Portfolios' && self.projectsInPortfolio.length === 0){
	                return;
	            }
	            cmApp.blockUI();
	            self.taskStatusDfer = $.Deferred();
	            self.impactDfer = $.Deferred();
	            self.riskTypesDfer = $.Deferred();
	            self.issuesExtremeDfer = $.Deferred();
	            self.issuesMajorDfer = $.Deferred();
	            self.projectsDfer = $.Deferred();
	            self.expensesPlannedDfer = $.Deferred();
	            self.expensesActualDfer = $.Deferred();
	            self.tasksNotStartedDfer = $.Deferred();
	            self.tasksInProgressDfer = $.Deferred();
	            self.selectedProject = cmApp.selectedProject;
	            self.projectsInPortfolio = cmApp.projectsInPortfolio;
	            var projectsList = _.find(self.availableDataSources, {Title: 'Projects'}); // Get the list details
	            var projectFilter = null;
	            var scheduleKpiFilter = null;
	            var healthKpiFilter = null;
	            var expensesFilter = null;
	            if (cmApp.thisApp == 'Projects') {
	                projectFilter = '{"logic":"or","filters":[{"field":"Id","operator":"eq","value":"' + cmApp.selectedProject + '"}]}';
	
	                scheduleKpiFilter = JSON.parse('{"logic":"and","filters":[' +
	                    '{"field":"Project/ItemId","operator":"eq","value":"' + self.selectedProject + '",' + '"Filter":null},' +
	                    '{"field":"EndDate","operator":"lte","value":"' + moment().startOf('day').toISOString() + '","Filter":null},' +
	                    '{"field":"TaskStatus/ItemId","operator":"eq","value":"","Filter":null}' +
	                    ']}');
	                healthKpiFilter = JSON.parse('{"logic":"and","filters":[' +
	                    '{"field":"Project/ItemId","operator":"eq","value":"' + self.selectedProject + '",' + '"Filter":null},' +
	                    '{"field":"RiskType/ItemId","operator":"eq","value":"","Filter":null},' +
	                    '{"field":"Impact/ItemId","operator":"eq","value":"","Filter":null}' +
	                    ']}');
	                expensesFilter = JSON.parse('{"logic":"and","filters":[{"field":"Project/ItemId","operator":"eq","value":"' + self.selectedProject + '","Filter":null}]}');
	            }
	            if (cmApp.thisApp == 'Portfolios') {
	                if (self.projectsInPortfolio.length == 1) {
	                    projectFilter = '{"logic":"or","filters":[{"field":"Id","operator":"eq","value":"' + self.projectsInPortfolio[0] + '"}]}';
	                    scheduleKpiFilter = JSON.parse('{"logic":"and","filters":[' +
	                        '{"field":"Project/ItemId","operator":"eq","value":"' + self.projectsInPortfolio[0] + '",' + '"Filter":null},' +
	                        '{"field":"EndDate","operator":"lte","value":"' + moment().startOf('day').toISOString() + '","Filter":null},' +
	                        '{"field":"TaskStatus/ItemId","operator":"eq","value":"","Filter":null}' +
	                        ']}');
	                    healthKpiFilter = JSON.parse('{"logic":"and","filters":[' +
	                        '{"field":"Project/ItemId","operator":"eq","value":"' + self.projectsInPortfolio[0] + '",' + '"Filter":null},' +
	                        '{"field":"RiskType/ItemId","operator":"eq","value":"","Filter":null},' +
	                        '{"field":"Impact/ItemId","operator":"eq","value":"","Filter":null}' +
	                        ']}');
	                    expensesFilter = JSON.parse('{"logic":"and","filters":[{"field":"Project/ItemId","operator":"eq","value":"' + self.projectsInPortfolio[0] + '","Filter":null}]}');
	                } else {
	                    projectFilter = '{"logic":"or","filters":[';
	                    $.each(self.projectsInPortfolio, function (index, id) {
	                        projectFilter += '{"field":"Id","operator":"eq","value":"' + id + '"},';
	                    });
	                    projectFilter = projectFilter.substring(0, projectFilter.length - 1) + ']}';
	                    scheduleKpiFilter = JSON.parse('{"logic":"and","filters":[{"logic":"or","filters":[]},' +
	                        '{"field":"EndDate","operator":"lte","value":"' + moment().startOf('day').toISOString() + '","Filter":null},' +
	                        '{"field":"TaskStatus/ItemId","operator":"eq","value":"","Filter":null}' +
	                        ']}');
	                    healthKpiFilter = JSON.parse('{"logic":"and","filters":[{"logic":"or","filters":[]},' +
	                        '{"field":"RiskType/ItemId","operator":"eq","value":"","Filter":null},' +
	                        '{"field":"Impact/ItemId","operator":"eq","value":"","Filter":null}' +
	                        ']}');
	                    expensesFilter = JSON.parse('{"logic":"and","filters":[{"logic":"or","filters":[]}]}');
	                    $.each(self.projectsInPortfolio, function (index, id) {
	                        scheduleKpiFilter.filters[0].filters.push({
	                            "field": "Project/ItemId",
	                            "operator": "eq",
	                            "value": id
	                        });
	                        expensesFilter.filters[0].filters.push({
	                            "field": "Project/ItemId",
	                            "operator": "eq",
	                            "value": id
	                        });
	                        healthKpiFilter.filters[0].filters.push({
	                            "field": "Project/ItemId",
	                            "operator": "eq",
	                            "value": id
	                        });
	                    });
	                }
	            }
	            self.projects.removeAll();
	
	            cmApp.datasource('Projects', false).done(function (ds) {
	                if (ds === null) {
	                    console.log('Projects datasource connection not found');
	                } else {
	                    ds.query({
	                        sort: { field: "Title", dir: "desc" },
	                        filter: JSON.parse(projectFilter)
	                    }).then(function () {
	                        if (ds.data().length >= 1) {
	                            self.projectsDfer.resolve(ds.data());
	                        } else {
	                            console.log('No data is returned');
	                        }
	                    });
	                }
	            });
	
	            // Call to get Task Status Id values for Red and Yellow
	            cmApp.datasource('Task Status', false).done(function (ds) {
	                if (ds === null) {
	                    console.log('Task Status datasource connection not found');
	                } else {
	                    ds.query({
	                        sort: { field: "Title", dir: "desc" }
	                    }).then(function () {
	                        if (ds.data().length >= 1) {
	                            self.taskStatusDfer.resolve(ds.data());
	                        } else {
	                            console.log('No data is returned');
	                        }
	                    });
	                }
	            });
	
	            // Call to get Impact Id values for Extreme and Major
	            cmApp.datasource('Impact', false).done(function (ds) {
	                if (ds === null) {
	                    console.log('Impact datasource connection not found');
	                } else {
	                    ds.query({
	                        sort: { field: "Title", dir: "desc" }
	                    }).then(function () {
	                        if (ds.data().length >= 1) {
	                            self.impactDfer.resolve(ds.data());
	                        } else {
	                            console.log('No data is returned');
	                        }
	                    });
	                }
	            });
	
	            // Call to get Risk Type Id values for Issue
	            cmApp.datasource('Risk Types', false).done(function (ds) {
	                if (ds === null) {
	                    console.log('Risk Types datasource connection not found');
	                } else {
	                    ds.query({
	                        sort: { field: "Title", dir: "desc" }
	                    }).then(function () {
	                        if (ds.data().length >= 1) {
	                            self.riskTypesDfer.resolve(ds.data());
	                        } else {
	                            console.log('No data is returned');
	                        }
	                    });
	                }
	            });
	
	            // Aggregation call for Expense Planned
	            var aggPlanned = _.cloneDeep(expensesFilter);
	            var expenseList = _.find(cmApp.availableDataSources, {Title: 'Expenses'}); // Get the list details
	            aggPlanned = JSON.stringify(aggPlanned);
	            $.ajax({
	                url: window.location.origin + '/api/Aggregation',
	                type: 'POST',
	                data: '{"DataSource":1,"ConnectionId":"' + expenseList.ConnectionId + '","ListId":"' + expenseList.Id + '","SiteUri":"","Filter": ' +
	                aggPlanned + ',"Group":{"Field":"Project/ItemId","Aggregates":[{"AggregateField":"PlannedAmount","AggregateType":1}]}}',
	                success: function (data, xhr) {
	                    self.expensesPlannedDfer.resolve(data);
	                }
	            });
	            // Aggregation call for Expense Actual
	            var aggActual = _.cloneDeep(expensesFilter);
	            aggActual = JSON.stringify(aggActual);
	            $.ajax({
	                url: window.location.origin + '/api/Aggregation',
	                type: 'POST',
	                data: '{"DataSource":1,"ConnectionId":"' + expenseList.ConnectionId + '","ListId":"' + expenseList.Id + '","SiteUri":"","Filter": ' +
	                aggActual + ',"Group":{"Field":"Project/ItemId","Aggregates":[{"AggregateField":"ActualAmount","AggregateType":1}]}}',
	                success: function (data, xhr) {
	                    self.expensesActualDfer.resolve(data);
	                }
	            });
	            // Aggregation call for Issues Extreme
	            $.when(self.riskTypesDfer, self.impactDfer).done(function (riskTypes, impacts) {
	                var agg = _.cloneDeep(healthKpiFilter);
	                agg.filters[1].value = _.find(riskTypes, {Title: 'Issue'}).Id;
	                agg.filters[2].value = _.find(impacts, {Title: 'Extreme'}).Id;
	                var risksList = _.find(cmApp.availableDataSources, {Title: 'Risks'}); // Get the list details
	                agg = JSON.stringify(agg);
	                $.ajax({
	                    url: window.location.origin + '/api/Aggregation',
	                    type: 'POST',
	                    data: '{"DataSource":1,"ConnectionId":"' + risksList.ConnectionId + '","ListId":"' + risksList.Id + '","SiteUri":"","Filter": ' +
	                    agg + ',"Group":{"Field":"Project/ItemId","Aggregates":[{"AggregateField":"Project/ItemId","AggregateType":0}]}}',
	                    success: function (data, xhr) {
	                        self.issuesExtremeDfer.resolve(data);
	                    }
	                });
	            });
	            // Aggregation call for Issues Extreme
	            $.when(self.riskTypesDfer, self.impactDfer).done(function (riskTypes, impacts) {
	                var agg = _.cloneDeep(healthKpiFilter);
	                agg.filters[1].value = _.find(riskTypes, {Title: 'Issue'}).Id;
	                agg.filters[2].value = _.find(impacts, {Title: 'Major'}).Id;
	                var risksList = _.find(cmApp.availableDataSources, {Title: 'Risks'}); // Get the list details
	                agg = JSON.stringify(agg);
	                $.ajax({
	                    url: window.location.origin + '/api/Aggregation',
	                    type: 'POST',
	                    data: '{"DataSource":1,"ConnectionId":"' + risksList.ConnectionId + '","ListId":"' + risksList.Id + '","SiteUri":"","Filter": ' +
	                    agg + ',"Group":{"Field":"Project/ItemId","Aggregates":[{"AggregateField":"Project/ItemId","AggregateType":0}]}}',
	                    success: function (data, xhr) {
	                        self.issuesMajorDfer.resolve(data);
	                    }
	                });
	            });
	
	            // Aggregation call for Schedule KPI Red
	            $.when(self.taskStatusDfer).done(function (taskStatus) {
	                var agg = _.cloneDeep(scheduleKpiFilter);
	                agg.filters[2].value = _.find(taskStatus, {Title: 'Not Started'}).Id;
	                var taskList = _.find(cmApp.availableDataSources, {Title: 'Tasks'}); // Get the list details
	                agg = JSON.stringify(agg);
	                $.ajax({
	                    url: window.location.origin + '/api/Aggregation',
	                    type: 'POST',
	                    data: '{"DataSource":1,"ConnectionId":"' + taskList.ConnectionId + '","ListId":"' + taskList.Id + '","SiteUri":"","Filter": ' +
	                    agg + ',"Group":{"Field":"Project/ItemId","Aggregates":[{"AggregateField":"Project/ItemId","AggregateType":0}]}}',
	                    success: function (data, xhr) {
	                        self.tasksNotStartedDfer.resolve(data);
	                    }
	                });
	            });
	            // Aggregation call for Schedule KPI Yellow
	            $.when(self.taskStatusDfer).done(function (taskStatus) {
	                var agg = _.cloneDeep(scheduleKpiFilter);
	                agg.filters[2].value = _.find(taskStatus, {Title: 'In Progress'}).Id;
	                var taskList = _.find(cmApp.availableDataSources, {Title: 'Tasks'}); // Get the list details
	                agg = JSON.stringify(agg);
	                $.ajax({
	                    url: window.location.origin + '/api/Aggregation',
	                    type: 'POST',
	                    data: '{"DataSource":1,"ConnectionId":"' + taskList.ConnectionId + '","ListId":"' + taskList.Id + '","SiteUri":"","Filter": ' +
	                    agg + ',"Group":{"Field":"Project/ItemId","Aggregates":[{"AggregateField":"Project/ItemId","AggregateType":0}]}}',
	                    success: function (data, xhr) {
	                        self.tasksInProgressDfer.resolve(data);
	                    }
	                });
	            });
	            $.when(self.projectsDfer,
	                self.tasksInProgressDfer,
	                self.tasksNotStartedDfer,
	                self.expensesPlannedDfer,
	                self.expensesActualDfer,
	                self.issuesExtremeDfer,
	                self.issuesMajorDfer,
	                self.kpiStatusDfer).done(function
	                (projects, inProgress, notStarted, expPlanned, expActual, issuesExtreme, issuesMajor, kpiStatus) {
	                for (var i = 0; i < projects.length; i++) {
	                    var project = projects[i];
	                    project._scheduleKpi = 'Green';
	                    project._scheduleKpiCount = 0;
	                    project._expenseKpi = 'Green';
	                    project._expenseKpiPercentage = '';
	                    project._healthKpi = 'Green';
	                    project._healthKpiCount = '';
	                    if (_.find(notStarted[0].Results, {Field: projects[i].Id}) !== undefined) {
	                        project._scheduleKpi = 'Red';
	                        project._scheduleKpiCount = _.find(notStarted[0].Results, {Field: projects[i].Id}).Value;
	                    } else if (_.find(inProgress[0].Results, {Field: projects[i].Id}) !== undefined) {
	                        project._scheduleKpi = 'Yellow';
	                        project._scheduleKpiCount = _.find(inProgress[0].Results, {Field: projects[i].Id}).Value;
	                    }
	                    if (_.find(issuesExtreme[0].Results, {Field: projects[i].Id}) !== undefined) {
	                        project._healthKpi = 'Red';
	                        project._healthKpiCount = _.find(issuesExtreme[0].Results, {Field: projects[i].Id}).Value;
	                    } else if (_.find(issuesMajor[0].Results, {Field: projects[i].Id}) !== undefined) {
	                        project._healthKpi = 'Yellow';
	                        project._healthKpiCount = _.find(issuesMajor[0].Results, {Field: projects[i].Id}).Value;
	                    }
	                    if (_.find(expPlanned[0].Results, {Field: projects[i].Id}) !== undefined &&
	                        _.find(expActual[0].Results, {Field: projects[i].Id}) !== undefined &&
	                        _.find(expPlanned[0].Results, {Field: projects[i].Id}).Value !== 0) {
	                        var perc = 100 * _.find(expActual[0].Results, {Field: projects[i].Id}).Value / _.find(expPlanned[0].Results, {Field: projects[i].Id}).Value;
	                        if(perc > 100){
	                            project._expenseKpi = 'Red';
	                        } else if (perc > 90){
	                            project._expenseKpi = 'Yellow';
	                        }
	                        project._expenseKpiPercentage = parseInt(perc, 10);
	                    }
	                    project.CostKPI._HexColorCode = _.find(kpiStatus, {Id: project.CostKPI.ItemId}).__colorIndicatorHexColorCode;
	                    project.ScheduleKPI._HexColorCode = _.find(kpiStatus, {Id: project.ScheduleKPI.ItemId}).__colorIndicatorHexColorCode;
	                    project.PerformanceKPI._HexColorCode = _.find(kpiStatus, {Id: project.PerformanceKPI.ItemId}).__colorIndicatorHexColorCode;
	                    var color;
	                    color = project._expenseKpi;
	                    project._expenseKpiHexColorCode = _.find(kpiStatus, {Title: color}).__colorIndicatorHexColorCode;
	                    color = project._scheduleKpi;
	                    project._scheduleKpiHexColorCode = _.find(kpiStatus, {Title: color}).__colorIndicatorHexColorCode;
	                    color = project._healthKpi;
	                    project._healthKpiHexColorCode = _.find(kpiStatus, {Title: color}).__colorIndicatorHexColorCode;
	                    self.projects.push(project);
	                }
	                cmApp.unblockUI();
	            });
	
	        };
	        self.addProject = function (project) {
	            self = this;
	            self = project;
	        };
	        self.loadProjectOverview();
	        if(cmApp.thisApp == 'Projects'){
	            cc.events.on('cmAppNewProjectSelected', function (evt) {
	                self.loadProjectOverview();
	            }, self);
	        }
	        if(cmApp.thisApp == 'Portfolios'){
	            cc.events.on('cmAppNewPortfolioSelected', function (evt) {
	                self.loadProjectOverview();
	            }, self);
	        }
	
	    });
	
	}
	
	$.extend(true, ProjectOverview.prototype, {
	    dispose: function () {
	        cc.events.off('cmAppNewProjectSelected');
	        cc.events.off('cmAppNewPortfolioSelected');
	    },
	
	    initSubscriptions: function () {
	        var self = this;
	
	    },
	
	    initComponent: function (view) {
	//        this.campusPicker = $('.campusPicker', view).kendoDropDownList().data("kendoDropDownList");
	    }
	});
	
	function createViewModel(params, componentInfo) {
	    return new ProjectOverview(params);
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

	module.exports = "<style>\r\n    .kpi_Green .indicator{\r\n        color: white;\r\n    }\r\n    .indicator{\r\n        border-style: solid;\r\n        border-color: black;\r\n        border-width: thin;\r\n        padding: 5px;\r\n        font-weight: bold;\r\n    }\r\n</style>\r\n\r\n<table class=\"table\">\r\n    <thead>\r\n    <tr>\r\n        <th>Project</th>\r\n        <th colspan=\"3\" style=\"text-align: center\">Reported KPIs</th>\r\n        <th colspan=\"3\" style=\"text-align: center\">Computed KPIs</th>\r\n        <th>Project Manager</th>\r\n    </tr>\r\n    <tr>\r\n        <th>&nbsp;</th>\r\n        <th>Cost</th>\r\n        <th>Schedule</th>\r\n        <th>Performance</th>\r\n        <th>Expense</th>\r\n        <th>Timeline</th>\r\n        <th>Health</th>\r\n        <th>&nbsp;</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody data-bind=\"foreach: $component.projects\">\r\n    <tr>\r\n        <td><i style=\"cursor: pointer\" class=\"fa fa-sign-in\" data-bind=\"click: $component.launchProjectPlan\"></i><span style=\"cursor: pointer\" data-bind=\"html: ' ' + Title, click: $component.launchProjectPlan\"></span></td></td>\r\n        <td style=\"cursor: pointer\" data-bind=\"click: $component.launchProjectScorecard\">\r\n            <!-- ko if: typeof CostKPI != 'undefined' && typeof CostKPI.Title != 'undefined' -->\r\n            <div data-bind=\"css: 'kpi_' + CostKPI.Title\">\r\n                <span class=\"indicator\" data-bind=\"text: CostKPI.Title.substr(0,1), style:{'background-color': CostKPI._HexColorCode}\">&nbsp;</span> -\r\n                <span data-bind=\"html: CostKPI.Title\"></span>\r\n            </div>\r\n            <!-- /ko -->\r\n        </td>\r\n        <td style=\"cursor: pointer\" data-bind=\"click: $component.launchProjectScorecard\">\r\n            <!-- ko if: typeof ScheduleKPI != 'undefined' && typeof ScheduleKPI.Title != 'undefined' -->\r\n            <div data-bind=\"css: 'kpi_' + ScheduleKPI.Title\">\r\n                <span class=\"indicator\" data-bind=\"text: ScheduleKPI.Title.substr(0,1), style:{'background-color': ScheduleKPI._HexColorCode}\">&nbsp;</span> -\r\n                <span data-bind=\"html: ScheduleKPI.Title\"></span>\r\n            </div>\r\n            <!-- /ko -->\r\n        </td>\r\n        <td style=\"cursor: pointer\" data-bind=\"click: $component.launchProjectScorecard\">\r\n            <!-- ko if: typeof PerformanceKPI != 'undefined' && typeof PerformanceKPI.Title != 'undefined' -->\r\n            <div data-bind=\"css: 'kpi_' + PerformanceKPI.Title\">\r\n                <span class=\"indicator\" data-bind=\"text: PerformanceKPI.Title.substr(0,1), style:{'background-color': PerformanceKPI._HexColorCode}\">&nbsp;</span> -\r\n                <span data-bind=\"html: PerformanceKPI.Title\"></span>\r\n            </div>\r\n            <!-- /ko -->\r\n        </td>\r\n        <td style=\"cursor: pointer\" data-bind=\"click: $component.launchProjectScorecard\">\r\n            <div data-bind=\"css: 'kpi_' + _expenseKpi\">\r\n                <span class=\"indicator\" data-bind=\"text: _expenseKpi.substr(0,1), style:{'background-color': _expenseKpiHexColorCode}\">&nbsp;</span> -\r\n                <span data-bind=\"html: _expenseKpi\"></span>\r\n                <span data-bind=\"html: ' (' + _expenseKpiPercentage + '%)', visible: _expenseKpiPercentage > 0\"></span>\r\n            </div>\r\n        </td>\r\n        <td style=\"cursor: pointer\" data-bind=\"click: $component.launchProjectScorecard\">\r\n            <div data-bind=\"css: 'kpi_' + _scheduleKpi\">\r\n                <span class=\"indicator\" data-bind=\"text: _scheduleKpi.substr(0,1), style:{'background-color': _scheduleKpiHexColorCode}\">&nbsp;</span> -\r\n                <span data-bind=\"html: _scheduleKpi\"></span>\r\n                <span data-bind=\"html: ' (' + _scheduleKpiCount + ')', visible: _scheduleKpiCount > 0\"></span>\r\n            </div>\r\n\r\n        </td>\r\n        <td style=\"cursor: pointer\" data-bind=\"click: $component.launchProjectScorecard\">\r\n            <div data-bind=\"css: 'kpi_' + _healthKpi\">\r\n                <span class=\"indicator\" data-bind=\"text: _healthKpi.substr(0,1), style:{'background-color': _healthKpiHexColorCode}\">&nbsp;</span> -\r\n                <span data-bind=\"html: _healthKpi\"></span>\r\n                <span data-bind=\"html: ' (' + _healthKpiCount + ')', visible: _healthKpiCount > 0\"></span>\r\n            </div>\r\n        </td>\r\n        <!-- ko if: typeof PrimaryPM.DisplayName != 'undefined' -->\r\n        <td><a style=\"text-decoration: none\" data-bind=\"attr: { href: 'mailto:' + PrimaryPM.Email + '?subject=Project: ' + Title}\"><i class=\"fa fa-envelope\"></i><span data-bind=\"html: ' ' + PrimaryPM.DisplayName\"></span></a></td>\r\n        <!-- /ko -->\r\n        <!-- ko if: typeof PrimaryPM.DisplayName  == 'undefined'-->\r\n        <td></td>\r\n        <!-- /ko -->\r\n\r\n    </tr>\r\n    </tbody>\r\n</table>\r\n\r\n\r\n"

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var _ = cc.lodash,
	    template = __webpack_require__(9),
	    fn = cc.fn;
	
	//    $.getScript( "/libs/anychart/7.8.0/anychart_bundle.min.js", function( data, textStatus, jqxhr ) {
	// });
	/**
	 * @summary Portfolio Timeline component
	 * @desc Portfolio Timeline component
	 * <br />
	 * Creates an Anygantt Portfolio Timeline
	 * @namespace
	 * @example <caption>Portfolio Timeline Description</caption>
	 * // Extension JS
	 * // Boilerplate Extension JS code works
	 * //
	 * // Extension HTML
	 * // <cn-cm-portfolio-timeline></cn-cm-portfolio-timeline>
	 */
	function PortfolioTimeline(params) {
	    cmApp.blockUI();
	    $.when(cmApp.ready).done(function () {
	        var self = this;
	        self.ds = [];
	        self.filterCriteria = '';
	        self.projects = [];
	        self.projectTasks = [];
	        self.projectData = [];
	        self.projectFinalData = [];
	        self.chart = anychart.ganttProject();
	        // set container id for the chart
	        self.chart.container('container');
	        // set general splitter pixel position
	        self.chart.splitterPosition(415);
	        var dataGrid = self.chart.dataGrid();
	        var actualStart = dataGrid.column(2);
	        actualStart.title('Start Date');
	        actualStart.setColumnFormat('actualStart', anychart.enums.ColumnFormats.DATE_US_SHORT);
	        var actualEnd = dataGrid.column(3);
	        actualEnd.title('End Date');
	        actualEnd.setColumnFormat('actualEnd', anychart.enums.ColumnFormats.DATE_US_SHORT);
	        dataGrid.column(1).width(175);
	        var project = dataGrid.column(1);
	        project.title('Project');
	        // styling the data grid
	        dataGrid.rowEvenFill('#e3f2fd');
	        dataGrid.rowOddFill('#f6fbfe');
	        dataGrid.rowHoverFill('#fff8e1');
	        dataGrid.rowSelectedFill('#ffecb3');
	        dataGrid.columnStroke('2 #90caf9');
	        // coloring the data grid's edit controls
	        dataGrid.editStructurePreviewFill('red 0.3');
	        dataGrid.editStructurePreviewStroke('red');
	        dataGrid.editStructurePreviewDashStroke({
	            color: 'red',
	            dash: '5 2',
	            thickness: 2
	        });
	        // getting chart's timeline
	        var timeline = self.chart.getTimeline();
	        // styling the timeline
	        timeline.rowEvenFill('#e3f2fd');
	        timeline.rowOddFill('#f6fbfe');
	        timeline.rowHoverFill('#fff8e1');
	        timeline.rowSelectedFill('#ffecb3');
	        timeline.columnStroke('2 #90caf9');
	        // coloring the timeline's edit controls
	        timeline.connectorPreviewStroke('3 green 0.3');
	        timeline.editPreviewFill('black 0.2');
	        timeline.editPreviewStroke('3 blue 0.8');
	        timeline.editProgressFill('yellow');
	        timeline.editProgressStroke('2 black');
	        timeline.editIntervalThumbFill('red');
	        timeline.editIntervalThumbStroke('black');
	        timeline.editConnectorThumbFill('#9f9');
	        timeline.editConnectorThumbStroke('#090');
	        // make chart editable
	        self.chart.editing(false);
	        self.chart.credits().enabled(false);
	
	        self.loadTimeline = function () {
	            self.projectsInPortfolio = cmApp.projectsInPortfolio;
	            if(cmApp.thisApp == 'Portfolios' && self.projectsInPortfolio.length === 0){
	                return;
	            }
	            cmApp.blockUI();
	            cmApp.getAvailableDataSources()
	                .fail(function (results) {
	                })
	                .then(function (results) {
	                    var tasksList = _.find(results, {Title: 'Tasks'}); // Get the list details
	                    var projectsList = _.find(results, {Title: 'Projects'});
	                    var selectedPortfolioProjects;
	                    selectedPortfolioProjects = cmApp.projectsInPortfolio;
	
	                    self.filterCriteria = '{"logic":"or","filters":[';
	                    $.each(selectedPortfolioProjects, function (index, id) {
	                        self.filterCriteria += '{"logic":"and","filters":[{"field":"Project%2FItemId","operator":"eq","value":"' + id + '"},{"field":"TopLevel","operator":"eq","value":true}]},';
	                    });
	                    self.filterCriteria = self.filterCriteria.substring(0, self.filterCriteria.length - 1) + ']}';
	
	                    cmApp.datasource('Tasks', false).done(function (ds) {
	                        if (ds === null) {
	                            console.log('Tasks datasource connection not found');
	                        } else {
	                            self.ds = ds;
	                            self.ds.query({
	                                filter: JSON.parse(self.filterCriteria)
	                            }).then(function () {
	                                self.projectTasks = [];
	                                var progress;
	                                _.each(self.ds.data(), function(project, i){
	                                    if (project.Complete === undefined) {
	                                        progress = '0';
	                                    } else {
	                                        progress = project.Complete;
	                                    }
	                                    self.projectTasks.push({
	                                        id: project.Id,
	                                        projectId: project.Project.ItemId,
	                                        actualStart: moment(project.StartDate).valueOf(),
	                                        actualEnd: moment(project.EndDate).valueOf(),
	                                        progressValue: progress + '%'
	                                    });
	                                });
	
	                                cmApp.datasource('Projects', false).done(function (ds) {
	                                    if (ds === null) {
	                                        console.log('Projects datasource connection not found');
	                                    } else {
	                                        self.ds = ds;
	                                        self.ds.query().then(function () {
	                                            self.projects = [];
	                                            _.each(self.ds.data(), function(project, i){
	                                                self.projects.push({
	                                                    projectId: project.Id,
	                                                    name: project.Title,
	                                                });
	                                            });
	                                            self.projectData = self.projectTasks.map(function(v){
	                                                var ret;
	                                                $.each(self.projects, function(k, v2){
	                                                    if(v2.projectId === v.projectId){
	                                                        ret = $.extend({}, v2, v);
	                                                        return false;
	                                                    }
	                                                });
	                                                return ret;
	                                            });
	                                            self.projectFinalData = [];
	                                            _.each(self.projectData, function(project, i){
	                                                self.projectFinalData.push({
	                                                    id: project.id,
	                                                    name: project.name,
	                                                    actualStart: moment(project.actualStart).valueOf(),
	                                                    actualEnd: moment(project.actualEnd).valueOf(),
	                                                    progressValue: project.progressValue
	                                                });
	                                            });
	                                            self.drawGantt();
	                                            cmApp.unblockUI();
	                                        });
	                                    }
	                                });
	                            });
	                        }
	                    });
	                });
	        };
	
	        self.loadTimeline();
	
	        cc.events.on('cmAppNewPortfolioSelected', function (evt) {
	            self.loadTimeline();
	        }, self);
	
	
	        self.drawGantt = function () {
	            // create data tree on raw data
	            var treeData = anychart.data.tree(self.projectFinalData, anychart.enums.TreeFillingMethod.AS_TABLE);
	
	            // set data for the chart
	            self.chart.data(treeData);
	
	            // initiate chart drawing
	            self.chart.draw();
	
	            // zoom chart all dates range
	            self.chart.fitAll();
	
	        };
	
	        cmApp.unblockUI();
	
	    });
	
	}
	
	$.extend(true, PortfolioTimeline.prototype, {
	    dispose: function () {
	        cc.events.off('cmAppNewPortfolioSelected');
	    },
	
	    initSubscriptions: function () {
	        var self = this;
	
	    },
	
	    initComponent: function (view) {
	//        this.campusPicker = $('.campusPicker', view).kendoDropDownList().data("kendoDropDownList");
	    }
	});
	
	function createViewModel(params, componentInfo) {
	    return new PortfolioTimeline(params);
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

	module.exports = "<style>\r\n    #container{\r\n        width: 100%;\r\n        height: 400px;\r\n    }\r\n</style>\r\n<div id=\"container\"></div>"

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var _ = cc.lodash,
	    template = __webpack_require__(11),
	    fn = cc.fn;
	
	/**
	 * @summary Portfolio Overview component
	 * @desc Portfolio Overview component
	 * <br />
	 * Creates Portfolio Overview
	 * @namespace
	 * @example <caption>Portfolio Overview Description</caption>
	 * // Extension JS
	 * // Boilerplate Extension JS code works
	 * //
	 * // Extension HTML
	 * // <cn-cm-portfolio-overview></cn-cm-portfolio-overview>
	 */
	function ExpenseSummary(params) {
	
	    var self = this;
	    self.ready = ko.observable(false);
	    self.projects = ko.observableArray();
	    self.ready = ko.observable(false);
	    self.chart = null;
	    $.when(cmApp.ready).done(function () {
	        //    self.params = params.chart || params || new cnComponents.ViewBoundChartParams();
	        // Set up ajax defaults
	        $.ajaxSetup({
	            method: "GET",
	            contentType: 'application/json',
	            headers: {
	                Accept: 'application/json,odata.metadata=minimal',
	                AppId: cmApp.getAppId('Data')
	            },
	            cache: false
	        });
	        self.availableDataSources = cmApp.availableDataSources;
	        var projectsList = _.find(cmApp.availableDataSources, {Title: 'Projects'}); // Get the list details
	        self.selectedProject = cmApp.selectedProject;
	        self.projectsInPortfolio = cmApp.projectsInPortfolio;
	        self.loadExpenseSummary = function () {
	            self.selectedProject = cmApp.selectedProject;
	            self.projectsInPortfolio = cmApp.projectsInPortfolio;
	            if(cmApp.thisApp == 'Portfolios' && self.projectsInPortfolio.length === 0){
	                return;
	            }
	            cmApp.blockUI();
	            self.projectsDfer = $.Deferred();
	            self.expensesPlannedDfer = $.Deferred();
	            self.expensesActualDfer = $.Deferred();
	            self.selectedProject = cmApp.selectedProject;
	            self.projectsInPortfolio = cmApp.projectsInPortfolio;
	            var projectsList = _.find(self.availableDataSources, {Title: 'Projects'}); // Get the list details
	            var projectFilter = null;
	            var scheduleKpiFilter = null;
	            var healthKpiFilter = null;
	            var expensesFilter = null;
	            if (cmApp.thisApp == 'Projects') {
	                projectFilter = '{"logic":"or","filters":[{"field":"Id","operator":"eq","value":"' + cmApp.selectedProject + '"}]}';
	                scheduleKpiFilter = JSON.parse('{"logic":"and","filters":[' +
	                    '{"field":"Project/ItemId","operator":"eq","value":"' + self.selectedProject + '",' + '"Filter":null},' +
	                    '{"field":"EndDate","operator":"lte","value":"' + moment().startOf('day').toISOString() + '","Filter":null},' +
	                    '{"field":"TaskStatus/ItemId","operator":"eq","value":"","Filter":null}' +
	                    ']}');
	                healthKpiFilter = JSON.parse('{"logic":"and","filters":[' +
	                    '{"field":"Project/ItemId","operator":"eq","value":"' + self.selectedProject + '",' + '"Filter":null},' +
	                    '{"field":"RiskType/ItemId","operator":"eq","value":"","Filter":null},' +
	                    '{"field":"Impact/ItemId","operator":"eq","value":"","Filter":null}' +
	                    ']}');
	                expensesFilter = JSON.parse('{"logic":"and","filters":[{"field":"Project/ItemId","operator":"eq","value":"' + self.selectedProject + '","Filter":null}]}');
	            }
	            if (cmApp.thisApp == 'Portfolios') {
	                if (self.projectsInPortfolio.length == 1) {
	                    projectFilter = '{"logic":"or","filters":[{"field":"Id","operator":"eq","value":"' + self.projectsInPortfolio[0] + '"}]}';
	
	                    scheduleKpiFilter = JSON.parse('{"logic":"and","filters":[' +
	                        '{"field":"Project/ItemId","operator":"eq","value":"' + self.projectsInPortfolio[0] + '",' + '"Filter":null},' +
	                        '{"field":"EndDate","operator":"lte","value":"' + moment().startOf('day').toISOString() + '","Filter":null},' +
	                        '{"field":"TaskStatus/ItemId","operator":"eq","value":"","Filter":null}' +
	                        ']}');
	                    healthKpiFilter = JSON.parse('{"logic":"and","filters":[' +
	                        '{"field":"Project/ItemId","operator":"eq","value":"' + self.projectsInPortfolio[0] + '",' + '"Filter":null},' +
	                        '{"field":"RiskType/ItemId","operator":"eq","value":"","Filter":null},' +
	                        '{"field":"Impact/ItemId","operator":"eq","value":"","Filter":null}' +
	                        ']}');
	                    expensesFilter = JSON.parse('{"logic":"and","filters":[{"field":"Project/ItemId","operator":"eq","value":"' + self.projectsInPortfolio[0] + '","Filter":null}]}');
	                } else {
	                    projectFilter = '{"logic":"or","filters":[';
	                    $.each(self.projectsInPortfolio, function (index, id) {
	                        projectFilter += '{"field":"Id","operator":"eq","value":"' + id + '"},';
	                    });
	                    projectFilter = projectFilter.substring(0, projectFilter.length - 1) + ']}';
	
	
	                    scheduleKpiFilter = JSON.parse('{"logic":"and","filters":[{"logic":"or","filters":[]},' +
	                        '{"field":"EndDate","operator":"lte","value":"' + moment().startOf('day').toISOString() + '","Filter":null},' +
	                        '{"field":"TaskStatus/ItemId","operator":"eq","value":"","Filter":null}' +
	                        ']}');
	                    healthKpiFilter = JSON.parse('{"logic":"and","filters":[{"logic":"or","filters":[]},' +
	                        '{"field":"RiskType/ItemId","operator":"eq","value":"","Filter":null},' +
	                        '{"field":"Impact/ItemId","operator":"eq","value":"","Filter":null}' +
	                        ']}');
	                    expensesFilter = JSON.parse('{"logic":"and","filters":[{"logic":"or","filters":[]}]}');
	                    $.each(self.projectsInPortfolio, function (index, id) {
	                        scheduleKpiFilter.filters[0].filters.push({
	                            "field": "Project/ItemId",
	                            "operator": "eq",
	                            "value": id
	                        });
	                        expensesFilter.filters[0].filters.push({
	                            "field": "Project/ItemId",
	                            "operator": "eq",
	                            "value": id
	                        });
	                        healthKpiFilter.filters[0].filters.push({
	                            "field": "Project/ItemId",
	                            "operator": "eq",
	                            "value": id
	                        });
	                    });
	                }
	            }
	            self.projects.removeAll();
	            cmApp.datasource('Projects', false).done(function (ds) {
	                if (ds === null) {
	                    console.log('Projects datasource connection not found');
	                } else {
	                    ds.query({
	                        sort: { field: "Title", dir: "desc" },
	                        filter: JSON.parse(projectFilter)
	                    }).then(function () {
	                        if (ds.data().length >= 1) {
	                            $.each(ds.data(), function (index, item) {
	                                cnc.fn.flattenListObjects(item);
	                            });
	                            self.projectsDfer.resolve(ds.data());
	                        } else {
	                            console.log('No data is returned');
	                        }
	                    });
	                }
	            });
	
	            var expenseList = _.find(cmApp.availableDataSources, {Title: 'Expenses'}); // Get the list details
	            // Aggregation call for Expense Planned
	            var aggPlanned = _.cloneDeep(expensesFilter);
	            aggPlanned = JSON.stringify(aggPlanned);
	            $.ajax({
	                url: window.location.origin + '/api/Aggregation',
	                type: 'POST',
	                data: '{"DataSource":1,"ConnectionId":"' + expenseList.ConnectionId + '","ListId":"' + expenseList.Id + '","SiteUri":"","Filter": ' +
	                aggPlanned + ',"Group":{"Field":"Project/ItemId","Aggregates":[{"AggregateField":"PlannedAmount","AggregateType":1}]}}',
	                success: function (data, xhr) {
	                    self.expensesPlannedDfer.resolve(data);
	                }
	            });
	            // Aggregation call for Expense Actual
	            var aggActual = _.cloneDeep(expensesFilter);
	            aggActual = JSON.stringify(aggActual);
	            $.ajax({
	                url: window.location.origin + '/api/Aggregation',
	                type: 'POST',
	                data: '{"DataSource":1,"ConnectionId":"' + expenseList.ConnectionId + '","ListId":"' + expenseList.Id + '","SiteUri":"","Filter": ' +
	                aggActual + ',"Group":{"Field":"Project/ItemId","Aggregates":[{"AggregateField":"ActualAmount","AggregateType":1}]}}',
	                success: function (data, xhr) {
	                    self.expensesActualDfer.resolve(data);
	                }
	            });
	            $.when(self.projectsDfer,
	                self.expensesPlannedDfer,
	                self.expensesActualDfer).done(function
	                (projects, expPlanned, expActual) {
	                for (var i = 0; i < projects.length; i++) {
	                    var project = projects[i];
	                    project._plannedExpenses = 0;
	                    project._actualExpenses = 0;
	                    if (_.find(expPlanned[0].Results, {Field: projects[i].Id}) !== undefined) {
	                        project._plannedExpenses = _.find(expPlanned[0].Results, {Field: projects[i].Id}).Value;
	                    }
	                    if (_.find(expActual[0].Results, {Field: projects[i].Id}) !== undefined) {
	                        project._actualExpenses = _.find(expActual[0].Results, {Field: projects[i].Id}).Value;
	                    }
	                    self.projects.push(project);
	                }
	
	
	
	
	
	                anychart.onDocumentReady(function() {
	                    self.drawChart();
	                });
	                if(self.chart !== null){
	                    self.drawChart();
	                }
	
	                cmApp.unblockUI();
	            });
	
	        };
	        self.drawChart = function(){
	            if(self.chart !== null){
	                $('#expenseSummaryChart').html('');
	            }
	            expenseData = [];
	            $.each(self.projects(), function(index, project){
	                expenseData.push([project.Title, project._plannedExpenses, project._actualExpenses]);
	            });
	            var data = anychart.data.set(expenseData);
	
	            // remapping data
	            var plannedExpenses = data.mapAs({x: [0], value: [1]});
	            var actualExpenses = data.mapAs({x: [0], value: [2]});
	
	            // define chart type
	            self.chart = anychart.cartesian();
	            self.chart.credits().enabled(false);
	
	            // set default series type
	            self.chart.defaultSeriesType("column");
	            // create multiple series
	            self.chart.addSeries(plannedExpenses, actualExpenses);
	
	            // set axes titles
	            var xAxis = self.chart.xAxis();
	            xAxis.title("Planned / Actual");
	            var yAxis = self.chart.yAxis();
	            yAxis.title("Total Amount");
	
	            // draw chart
	            self.chart.container("expenseSummaryChart");
	            self.chart.draw();
	        };
	        self.addProject = function (project) {
	            self = this;
	            self = project;
	        };
	        self.loadExpenseSummary();
	        if(cmApp.thisApp == 'Projects'){
	            cc.events.on('cmAppNewProjectSelected', function (evt) {
	                self.loadExpenseSummary();
	            }, self);
	        }
	        if(cmApp.thisApp == 'Portfolios'){
	            cc.events.on('cmAppNewPortfolioSelected', function (evt) {
	                self.loadExpenseSummary();
	            }, self);
	        }
	
	
	    });
	
	}
	
	$.extend(true, ExpenseSummary.prototype, {
	    dispose: function () {
	        cc.events.off('cmAppNewProjectSelected');
	    },
	
	    initSubscriptions: function () {
	        var self = this;
	
	    },
	
	    initComponent: function (view) {
	//        this.campusPicker = $('.campusPicker', view).kendoDropDownList().data("kendoDropDownList");
	    }
	});
	
	function createViewModel(params, componentInfo) {
	    return new ExpenseSummary(params);
	}
	
	module.exports = {
	    viewModel: {
	        createViewModel: createViewModel
	    },
	    template: template
	};


/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "<style>\r\n    #expenseSummaryChart {\r\n        width: 100%;\r\n        height: 600px;\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n</style>\r\n<div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <div id=\"expenseSummaryChart\"></div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <table class=\"table\">\r\n                <thead>\r\n                <tr>\r\n                    <th>Project</th>\r\n                    <th>Actual</th>\r\n                    <th>Planned</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody data-bind=\"foreach: $component.projects\">\r\n                <tr>\r\n                    <td data-bind=\"html: Title\"></td>\r\n                    <td>\r\n                        <div>\r\n                            <span data-bind=\"html: _actualExpenses\"></span>\r\n                        </div>\r\n                    </td>\r\n                    <td>\r\n                        <div>\r\n                            <span data-bind=\"html: _plannedExpenses\"></span>\r\n                        </div>\r\n                    </td>\r\n\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n"

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var _ = cc.lodash,
	    template = __webpack_require__(13),
	    fn = cc.fn;
	
	/**
	 * @summary Project Schedule component
	 * @desc Project Schedule component
	 * <br />
	 *
	 * @namespace
	 * @example <caption>Project Schedule</caption>
	 * // Extension JS
	 * // Boilerplate Extension JS code works
	 * //
	 * // Extension HTML
	 * // <cn-cm-project-schedule></cn-cm-project-schedule>
	 */
	function projectSchedule( params ) {
	    cmApp.blockUI();
	    $.when(cmApp.ready).done(function () {
	        var self = this;
	        self.projectTasks = [];
	        self.collapsedTasks = [];
	        self.filterCriteria = '';
	        self.selectedItem = '';
	        self.treeData = '';
	        self.topLevelUpdate = false;
	        self.startDate = '';
	        self.endDate = '';
	        self.originalStartDate = '';
	        self.startDateChange = false;
	        self.endDateChange = false;
	        self.hourDiff = '';
	        self.ds = '';
	
	        // create project gantt chart
	        self.chart = anychart.ganttProject();
	        // set container id for the chart
	        self.chart.container('container');
	
	        // set general splitter pixel position
	        self.chart.splitterPosition(415);
	        self.dataGrid = self.chart.dataGrid();
	        var actualStart = self.dataGrid.column(2);
	        actualStart.title('Start Date');
	        actualStart.setColumnFormat('actualStart', anychart.enums.ColumnFormats.DATE_US_SHORT);
	        var actualEnd = self.dataGrid.column(3);
	        actualEnd.title('End Date');
	        actualEnd.setColumnFormat('actualEnd', anychart.enums.ColumnFormats.DATE_US_SHORT);
	        self.dataGrid.column(1).width(175);
	        // styling the data grid
	        self.dataGrid.rowEvenFill('#e3f2fd');
	        self.dataGrid.rowOddFill('#f6fbfe');
	        self.dataGrid.rowHoverFill('#fff8e1');
	        self.dataGrid.rowSelectedFill('#ffecb3');
	        self.dataGrid.columnStroke('2 #90caf9');
	        // coloring the data grid's edit controls
	        self.dataGrid.editStructurePreviewFill('red 0.3');
	        self.dataGrid.editStructurePreviewStroke('red');
	        self.dataGrid.editStructurePreviewDashStroke({
	            color: 'red',
	            dash: '5 2',
	            thickness: 2
	        });
	        // getting chart's timeline
	        self.timeline = self.chart.getTimeline();
	        // styling the timeline
	        self.timeline.rowEvenFill('#e3f2fd');
	        self.timeline.rowOddFill('#f6fbfe');
	        self.timeline.rowHoverFill('#fff8e1');
	        self.timeline.rowSelectedFill('#ffecb3');
	        self.timeline.columnStroke('2 #90caf9');
	        // coloring the timeline's edit controls
	        self.timeline.connectorPreviewStroke('3 green 0.3');
	        self.timeline.editPreviewFill('black 0.2');
	        self.timeline.editPreviewStroke('3 blue 0.8');
	        self.timeline.editProgressFill('yellow');
	        self.timeline.editProgressStroke('2 black');
	        self.timeline.editIntervalThumbFill('red');
	        self.timeline.editIntervalThumbStroke('black');
	        self.timeline.editConnectorThumbFill('#9f9');
	        self.timeline.editConnectorThumbStroke('#090');
	        // make chart editable
	        self.chart.editing(true);
	        self.chart.credits().enabled(false);
	
	        self.drawGantt = function () {
	            cmApp.blockUI();
	            self.dataGrid = self.chart.dataGrid();
	            var dgTooltip = self.dataGrid.tooltip();
	            dgTooltip.textFormatter(function(event) {
	                var actualStart = '';
	                var actualEnd = '';
	                var progressValue = '';
	                var keyActivity = '';
	                var assignedTo = '';
	                if (event.actualStart !== undefined) {
	                    actualStart = moment(event.actualStart).format('MM/DD/YYYY');
	                } else {
	                    actualStart = moment(event.autoStart).format('MM/DD/YYYY');
	                }
	                if (event.actualEnd !== undefined) {
	                    actualEnd = moment(event.actualEnd).format('MM/DD/YYYY');
	                } else {
	                    actualEnd = moment(event.autoEnd).format('MM/DD/YYYY');
	                }
	                if (event.progressValue !== undefined) {
	                    progressValue = event.progressValue;
	                } else {
	                    progressValue = (event.item.B.autoProgress * 100).toFixed(2) === '0.00' ? '0%' : Number(event.item.B.autoProgress * 100).toFixed(2) + '%';
	                }
	                if (event.a.b.keyActivity !== undefined) {
	                    keyActivity = event.a.b.keyActivity;
	                } else {
	                    keyActivity = false;
	                }
	                if (event.a.b.assignedTo !== undefined) {
	                    assignedTo = event.a.b.assignedTo;
	                } else {
	                    assignedTo = '';
	                }
	                return 'Start Date: ' + actualStart + '\nEnd Date: ' + actualEnd + '\nComplete: ' + progressValue + '\nAssigned To: ' + assignedTo + '\nKey Activity: ' + keyActivity;
	            });
	
	            var tlTooltip = self.timeline.tooltip();
	            tlTooltip.textFormatter(function(event) {
	                var actualStart = '';
	                var actualEnd = '';
	                var progressValue = '';
	                var keyActivity = '';
	                var assignedTo = '';
	                if (event.actualStart !== undefined) {
	                    actualStart = moment(event.actualStart).format('MM/DD/YYYY');
	                } else {
	                    actualStart = moment(event.autoStart).format('MM/DD/YYYY');
	                }
	                if (event.actualEnd !== undefined) {
	                    actualEnd = moment(event.actualEnd).format('MM/DD/YYYY');
	                } else {
	                    actualEnd = moment(event.autoEnd).format('MM/DD/YYYY');
	                }
	                if (event.progressValue !== undefined) {
	                    progressValue = event.progressValue;
	                } else {
	                    progressValue = (event.item.B.autoProgress * 100).toFixed(2) === '0.00' ? '0%' : Number(event.item.B.autoProgress * 100).toFixed(2) + '%';
	                }
	                if (event.a.b.keyActivity !== undefined) {
	                    keyActivity = event.a.b.keyActivity;
	                } else {
	                    keyActivity = false;
	                }
	                if (event.a.b.assignedTo !== undefined) {
	                    assignedTo = event.a.b.assignedTo;
	                } else {
	                    assignedTo = '';
	                }
	                return 'Start Date: ' + actualStart + '\nEnd Date: ' + actualEnd + '\nComplete: ' + progressValue + '\nAssigned To: ' + assignedTo + '\nKey Activity: ' + keyActivity;
	            });
	
	            var allEvents = null;
	            // create data tree on raw data
	            self.treeData = anychart.data.tree(self.projectTasks, anychart.enums.TreeFillingMethod.AS_TABLE);
	
	            self.chart.listen(anychart.enums.EventType.ROW_COLLAPSE_EXPAND, function(e) {
	                var taskItem  = _.find(self.collapsedTasks, {taskId:e.item.b.taskId});
	                if (taskItem !== undefined) {
	                    taskItem.collapsed = e.collapsed;
	                } else {
	                    self.collapsedTasks.push({
	                        taskId: e.item.b.taskId,
	                        collapsed: e.collapsed,
	                        id: e.item.b.id
	                    });
	                }
	            });
	
	            self.chart.listen(anychart.enums.EventType.ROW_SELECT, function(e) {
	                if (e.item !== null && e.item.b.topLevel !== true) {
	                    self.selectedItem = e.item;
	                    $('#deleteButton').removeClass('k-state-disabled');
	                    $('#viewButton').removeClass('k-state-disabled');
	                    $('#editButton').removeClass('k-state-disabled');
	                    if (e.item.b.actualStart !== e.item.b.actualEnd && e.item.c.length === 0) {
	                        $('#setMilestoneButton').removeClass('k-state-disabled');
	                    } else {
	                        $('#setMilestoneButton').addClass('k-state-disabled');
	                    }
	                    if (e.item.b.actualStart === e.item.b.actualEnd && e.item.c.length === 0) {
	                        $('#removeMilestoneButton').removeClass('k-state-disabled');
	                    } else {
	                        $('#removeMilestoneButton').addClass('k-state-disabled');
	                    }
	                } else {
	                    $('#deleteButton').addClass('k-state-disabled');
	                    $('#viewButton').addClass('k-state-disabled');
	                    $('#editButton').addClass('k-state-disabled');
	                    $('#setMilestoneButton').addClass('k-state-disabled');
	                    $('#removeMilestoneButton').addClass('k-state-disabled');
	                    self.selectedItem = null;
	                }
	            });
	
	            self.treeData.listen(anychart.enums.EventType.TREE_ITEM_UPDATE, function(e) {
	                cmApp.blockUI();
	                if (e.item.b.topLevel !== true) {
	                    var updateItem = _.find(self.ds.data(), {Id: e.item.get('taskId')});
	                    if (self.startDateChange === false) {
	                        self.originalStartDate = '';
	                    }
	                    if(allEvents === null){
	                        allEvents = setTimeout(function(){
	                            allEvents = null;
	                            self.ds.sync().then(function (){
	                                self.ds.read().then(function () {
	                                    self.loadTasks();
	                                    var dataItem  = self.treeData.searchItems("id", 1);
	                                    var topLevelItem = '';
	                                    topLevelItem = _.find(self.ds.data(), {Id: dataItem[0].b.taskId});
	                                    topLevelItem.dirty = true;
	                                    topLevelItem.StartDate = moment(dataItem[0].B.autoStart).format('YYYY-MM-DDT08:00:00Z');
	                                    topLevelItem.EndDate = moment(dataItem[0].B.autoEnd).format('YYYY-MM-DDT17:00:00Z');
	                                    topLevelItem.Complete = parseFloat(dataItem[0].B.autoProgress * 100).toFixed(2);
	                                    self.ds.sync().then(function (){
	                                        self.ds.read().then(function () {
	                                            self.loadTasks();
	                                            self.startDateChange = false;
	                                        });
	                                    });
	                                });
	                            });
	                        }, 3000);
	                    }
	                    var itemName = e.item.get('name');
	                    var depth = e.item.B.depth;
	                    var val = e.value;
	                    var path = e.path.join();
	                    var parentTask = '';
	                    var parentID = '';
	                    var i;
	                    var parentItem;
	
	                    if (path === 'actualStart') {
	                        var connectedItem = _.find(self.ds.data(), {connectTo: updateItem.Id});
	                        var connectTo = '';
	                        var timeDiff = '';
	                        var diffDays = '';
	                        self.hourDiff = 0;
	                        /* jshint -W004 */
	                        var i = 1;
	                        self.startDateChange = true;
	                        if (connectedItem === undefined || (connectedItem.connectorType !== 'finishstart' && connectedItem.connectorType !== 'startstart')) {
	                            self.originalStartDate = updateItem.StartDate;
	                            updateItem.dirty = true;
	                            if (updateItem.Milestone === true && connectedItem === undefined) {
	                                updateItem.StartDate = moment(e.value).format('YYYY-MM-DDT08:00:00Z');
	                            } else if (updateItem.Milestone !== true) {
	                                updateItem.StartDate = moment(e.value).format('YYYY-MM-DDT08:00:00Z');
	                                self.hourDiff = moment(updateItem.StartDate).diff(moment(e.value), 'hours');
	                            }
	
	                            while (updateItem.connectTo !== '') {
	                                if (updateItem.connectorType === 'startstart') {
	                                    /* jshint -W004 */
	                                    var connectedItem = _.find(self.ds.data(), {Id: updateItem.connectTo});
	                                    timeDiff = Math.abs(connectedItem.EndDate - connectedItem.StartDate);
	                                    diffDays = Math.ceil(timeDiff / (24 * 60 * 60 * 1000));
	                                    connectedItem.dirty = true;
	                                    if (i === 1) {
	                                        connectedItem.StartDate = moment(updateItem.StartDate).format('YYYY-MM-DDT08:00:00Z');
	                                        if (connectedItem.Milestone === true) {
	                                            connectedItem.EndDate = moment(updateItem.StartDate).add(diffDays, 'days').format('YYYY-MM-DDT08:00:00Z');
	                                        } else {
	                                            connectedItem.EndDate = moment(updateItem.StartDate).add(diffDays, 'days').format('YYYY-MM-DDT17:00:00Z');
	                                        }
	                                    } else {
	                                        connectedItem.StartDate = moment(updateItem.StartDate).format('YYYY-MM-DDT08:00:00Z');
	                                        if (connectedItem.Milestone === true) {
	                                            connectedItem.EndDate = moment(updateItem.StartDate).add(diffDays, 'days').format('YYYY-MM-DDT08:00:00Z');
	                                        } else {
	                                            connectedItem.EndDate = moment(updateItem.StartDate).add(diffDays, 'days').format('YYYY-MM-DDT17:00:00Z');
	                                        }
	                                    }
	                                    updateItem = _.find(self.ds.data(), {Id: connectedItem.Id});
	                                    i++;
	                                } else if (updateItem.connectorType === 'startfinish') {
	                                    /* jshint -W004 */
	                                    var connectedItem = _.find(self.ds.data(), {Id: updateItem.connectTo});
	                                    timeDiff = Math.abs(connectedItem.EndDate - connectedItem.StartDate);
	                                    diffDays = Math.ceil(timeDiff / (24 * 60 * 60 * 1000));
	                                    connectedItem.dirty = true;
	                                    connectedItem.StartDate = moment(updateItem.StartDate).subtract(diffDays, 'days').format('YYYY-MM-DDT08:00:00Z');
	                                    if (connectedItem.Milestone === true) {
	                                        connectedItem.EndDate = moment(updateItem.StartDate).subtract(1, 'days').format('YYYY-MM-DDT08:00:00Z');
	                                    } else {
	                                        connectedItem.EndDate = moment(updateItem.StartDate).subtract(1, 'days').format('YYYY-MM-DDT17:00:00Z');                      }
	
	                                    updateItem = _.find(self.ds.data(), {Id: connectedItem.Id});
	                                    i++;
	                                } else {
	                                    break;
	                                }
	                            }
	                        }
	                    }
	
	                    if (path === 'actualEnd') {
	                        /* jshint -W004 */
	                        var connectedItem = _.find(self.ds.data(), {connectTo: updateItem.Id});
	                        /* jshint -W004 */
	                        var connectTo = '';
	                        /* jshint -W004 */
	                        var timeDiff = '';
	                        /* jshint -W004 */
	                        var diffDays = '';
	                        /* jshint -W004 */
	                        var i = 1;
	                        if (connectedItem === undefined || (connectedItem.connectorType !== 'finishfinish' && connectedItem.connectorType !== 'startfinish')) {
	                            if ((self.startDateChange === true && connectedItem === undefined) || self.startDateChange === false) {
	                                updateItem.dirty = true;
	                                if (updateItem.Milestone === true && connectedItem === undefined) {
	                                    updateItem.EndDate = moment(e.value).add(self.hourDiff, 'hours').format('YYYY-MM-DDT08:00:00Z');
	                                } else if (updateItem.Milestone !== true) {
	                                    updateItem.EndDate = moment(e.value).add(self.hourDiff, 'hours').format('YYYY-MM-DDT17:00:00Z');
	                                }
	                                self.endDateChange = true;
	                                while (updateItem.connectTo !== '') {
	                                    if (updateItem.connectorType === 'finishfinish' && self.endDateChange === true) {
	                                        /* jshint -W004 */
	                                        var connectedItem = _.find(self.ds.data(), {Id: updateItem.connectTo});
	                                        timeDiff = Math.abs(moment(connectedItem.EndDate) - moment(connectedItem.StartDate));
	                                        diffDays = Math.ceil(timeDiff / (24 * 60 * 60 * 1000));
	                                        connectedItem.dirty = true;
	                                        connectedItem.StartDate = moment(updateItem.EndDate).subtract(diffDays - 1, 'days').format('YYYY-MM-DDT08:00:00Z');
	                                        if (connectedItem.Milestone === true) {
	                                            connectedItem.EndDate = moment(updateItem.EndDate).format('YYYY-MM-DDT08:00:00Z');
	                                        } else {
	                                            connectedItem.EndDate = moment(updateItem.EndDate).format('YYYY-MM-DDT17:00:00Z');
	                                        }
	                                        updateItem = _.find(self.ds.data(), {Id: connectedItem.Id});
	                                        i++;
	                                    } else if (updateItem.connectorType === 'finishstart' && self.endDateChange === true) {
	                                        var connectedItem = _.find(self.ds.data(), {Id: updateItem.connectTo});
	                                        timeDiff = Math.abs(moment(connectedItem.EndDate) - moment(connectedItem.StartDate));
	                                        diffDays = Math.ceil(timeDiff / (24 * 60 * 60 * 1000));
	                                        connectedItem.dirty = true;
	                                        connectedItem.StartDate = moment(updateItem.EndDate).add(1, 'days').format('YYYY-MM-DDT08:00:00Z');
	                                        if (connectedItem.Milestone === true) {
	                                            connectedItem.EndDate = moment(updateItem.EndDate).add(diffDays, 'days').format('YYYY-MM-DDT08:00:00Z');
	                                        } else {
	                                            connectedItem.EndDate = moment(updateItem.EndDate).add(diffDays, 'days').format('YYYY-MM-DDT17:00:00Z');
	                                        }
	                                        updateItem = _.find(self.ds.data(), {Id: connectedItem.Id});
	                                        i++;
	                                    } else if (updateItem.connectorType === 'startstart') {
	                                        var connectedItem = _.find(self.ds.data(), {Id: updateItem.connectTo});
	                                        timeDiff = Math.abs(moment(connectedItem.EndDate) - moment(connectedItem.StartDate));
	                                        diffDays = Math.ceil(timeDiff / (24 * 60 * 60 * 1000));
	                                        connectedItem.dirty = true;
	                                        connectedItem.StartDate = moment(updateItem.StartDate).format('YYYY-MM-DDT08:00:00Z');
	                                        if (connectedItem.Milestone === true) {
	                                            connectedItem.EndDate = moment(updateItem.StartDate).add(diffDays - 1, 'days').format('YYYY-MM-DDT08:00:00Z');
	                                        } else {
	                                            connectedItem.EndDate = moment(updateItem.StartDate).add(diffDays - 1, 'days').format('YYYY-MM-DDT17:00:00Z');
	                                        }
	                                        updateItem = _.find(self.ds.data(), {Id: connectedItem.Id});
	                                        i++;
	                                    } else if (updateItem.connectorType === 'startfinish') {
	                                        var connectedItem = _.find(self.ds.data(), {Id: updateItem.connectTo});
	                                        timeDiff = Math.abs(moment(connectedItem.EndDate) - moment(connectedItem.StartDate));
	                                        diffDays = Math.ceil(timeDiff / (24 * 60 * 60 * 1000));
	                                        connectedItem.dirty = true;
	                                        connectedItem.StartDate = moment(updateItem.StartDate).subtract(diffDays, 'days').format('YYYY-MM-DDT08:00:00Z');
	                                        if (connectedItem.Milestone === true) {
	                                            connectedItem.EndDate = moment(updateItem.StartDate).subtract(1, 'days').format('YYYY-MM-DDT08:00:00Z');
	                                        } else {
	                                            connectedItem.EndDate = moment(updateItem.StartDate).subtract(1, 'days').format('YYYY-MM-DDT17:00:00Z');
	                                        }
	                                        updateItem = _.find(self.ds.data(), {Id: connectedItem.Id});
	                                        i++;
	                                    } else {
	                                        break;
	                                    }
	                                }
	                            }
	                        } else {
	                            if (self.startDateChange === true) {
	                                // Item was moved but connectors prevent changes to it and to the child tasks
	                                updateItem.dirty = false;
	                                while (updateItem.connectTo !== '') {
	                                    var connectedItem = _.find(self.ds.data(), {Id: updateItem.connectTo});
	                                    connectedItem.dirty = false;
	                                    updateItem = _.find(self.ds.data(), {Id: connectedItem.Id});
	                                }
	                            }
	                        }
	                    }
	
	                    if (path === 'progressValue') {
	                        parentTask = e.item;
	                        updateItem.dirty = true;
	                        updateItem.Complete = e.value.slice(0, -1);
	                    }
	
	                    if (path === 'connector,0' || path === 'connector,1') {
	                        var connectedItem = _.find(self.ds.data(), {ganttId: e.value.connectTo});
	                        var startDate = moment(connectedItem.StartDate).valueOf();
	                        var endDate = moment(connectedItem.EndDate).valueOf();
	                        var timeDiff = Math.abs(endDate - startDate);
	                        var diffDays = Math.ceil(timeDiff / (24 * 60 * 60 * 1000));
	                        var diffEndDate = moment(e.item.b.actualEnd).subtract(diffDays, 'days');
	                        var diffStartDate = moment(e.item.b.actualStart).subtract(diffDays, 'days');
	                        connectedItem.dirty = true;
	                        if (e.value.connectorType === 'finishfinish') {
	                            if (connectedItem.Milestone === true) {
	                                connectedItem.StartDate = moment(diffEndDate).format('YYYY-MM-DDT17:00:00Z');
	                                connectedItem.EndDate = moment(e.item.b.actualEnd).format('YYYY-MM-DDT17:00:00Z');
	                            } else {
	                                connectedItem.StartDate = moment(diffEndDate).add(1, 'days').format('YYYY-MM-DDT08:00:00Z');
	                                connectedItem.EndDate = moment(e.item.b.actualEnd).format('YYYY-MM-DDT17:00:00Z');
	                            }
	                        } else if (e.value.connectorType === 'finishstart') {
	                            if (connectedItem.Milestone === true) {
	                                connectedItem.StartDate = moment(e.item.b.actualEnd).add(1, 'days').format('YYYY-MM-DDT08:00:00Z');
	                                connectedItem.EndDate = moment(e.item.b.actualEnd).add(diffDays + 1, 'days').format('YYYY-MM-DDT08:00:00Z');
	                            } else {
	                                connectedItem.StartDate = moment(e.item.b.actualEnd).add(1, 'days').format('YYYY-MM-DDT08:00:00Z');
	                                connectedItem.EndDate = moment(e.item.b.actualEnd).add(diffDays, 'days').format('YYYY-MM-DDT17:00:00Z');
	                            }
	                        } else if (e.value.connectorType === 'startfinish') {
	                            if (connectedItem.Milestone === true) {
	                                connectedItem.StartDate = moment(diffStartDate).subtract(1, 'days').format('YYYY-MM-DDT17:00:00Z');
	                                connectedItem.EndDate = moment(e.item.b.actualStart).subtract(1, 'days').format('YYYY-MM-DDT17:00:00Z');
	                            } else {
	                                connectedItem.StartDate = moment(diffStartDate).format('YYYY-MM-DDT08:00:00Z');
	                                connectedItem.EndDate = moment(e.item.b.actualStart).subtract(1, 'days').format('YYYY-MM-DDT17:00:00Z');
	                            }
	                        } else if (e.value.connectorType === 'startstart') {
	                            if (connectedItem.Milestone === true) {
	                                connectedItem.StartDate = moment(e.item.b.actualStart).format('YYYY-MM-DDT08:00:00Z');
	                                connectedItem.EndDate = moment(e.item.b.actualStart).format('YYYY-MM-DDT08:00:00Z');
	                            } else {
	                                connectedItem.StartDate = moment(e.item.b.actualStart).format('YYYY-MM-DDT08:00:00Z');
	                                connectedItem.EndDate = moment(e.item.b.actualStart).add(diffDays - 1, 'days').format('YYYY-MM-DDT17:00:00Z');
	                            }
	                        }
	                        updateItem.dirty = true;
	                        updateItem.connectTo = connectedItem.Id;
	                        updateItem.connectorType = e.value.connectorType;
	                        var timeDiff = '';
	                        var diffDays = '';
	                        while (connectedItem.connectTo !== '') {
	                            if (connectedItem.connectorType === 'startstart') {
	                                var nextItem = _.find(self.ds.data(), {Id: connectedItem.connectTo});
	                                timeDiff = Math.abs(nextItem.EndDate - nextItem.StartDate);
	                                diffDays = Math.ceil(timeDiff / (24 * 60 * 60 * 1000));
	                                nextItem.dirty = true;
	                                nextItem.StartDate = moment(connectedItem.StartDate).format('YYYY-MM-DDT08:00:00Z');
	                                if (nextItem.Milestone === true) {
	                                    nextItem.EndDate = moment(connectedItem.StartDate).add(diffDays - 1, 'days').format('YYYY-MM-DDT08:00:00Z');
	                                } else {
	                                    nextItem.EndDate = moment(connectedItem.StartDate).add(diffDays - 1, 'days').format('YYYY-MM-DDT17:00:00Z');
	                                }
	                                connectedItem = _.find(self.ds.data(), {Id: nextItem.Id});
	                            } else if (connectedItem.connectorType === 'startfinish') {
	                                var nextItem = _.find(self.ds.data(), {Id: connectedItem.connectTo});
	                                timeDiff = Math.abs(nextItem.EndDate - nextItem.StartDate);
	                                diffDays = Math.ceil(timeDiff / (24 * 60 * 60 * 1000));
	                                nextItem.dirty = true;
	                                nextItem.StartDate = moment(connectedItem.StartDate).subtract(diffDays, 'days').format('YYYY-MM-DDT08:00:00Z');
	                                if (nextItem.Milestone === true) {
	                                    nextItem.EndDate = moment(connectedItem.StartDate).subtract(1, 'days').format('YYYY-MM-DDT08:00:00Z');
	                                } else {
	                                    nextItem.EndDate = moment(connectedItem.StartDate).subtract(1, 'days').format('YYYY-MM-DDT17:00:00Z');
	                                }
	                                connectedItem = _.find(self.ds.data(), {Id: nextItem.Id});
	                            } else if (connectedItem.connectorType === 'finishfinish') {
	                                var nextItem = _.find(self.ds.data(), {Id: connectedItem.connectTo});
	                                timeDiff = Math.abs(moment(nextItem.EndDate) - moment(nextItem.StartDate));
	                                diffDays = Math.ceil(timeDiff / (24 * 60 * 60 * 1000));
	                                nextItem.dirty = true;
	                                nextItem.StartDate = moment(connectedItem.EndDate).subtract(diffDays - 1, 'days').format('YYYY-MM-DDT08:00:00Z');
	                                if (nextItem.Milestone === true) {
	                                    nextItem.EndDate = moment(connectedItem.EndDate).format('YYYY-MM-DDT08:00:00Z');
	                                } else {
	                                    nextItem.EndDate = moment(connectedItem.EndDate).format('YYYY-MM-DDT17:00:00Z');
	                                }
	                                connectedItem = _.find(self.ds.data(), {Id: nextItem.Id});
	                            } else if (connectedItem.connectorType === 'finishstart') {
	                                var nextItem = _.find(self.ds.data(), {Id: connectedItem.connectTo});
	                                timeDiff = Math.abs(moment(nextItem.EndDate) - moment(nextItem.StartDate));
	                                diffDays = Math.ceil(timeDiff / (24 * 60 * 60 * 1000));
	                                nextItem.dirty = true;
	                                nextItem.StartDate = moment(connectedItem.EndDate).add(1, 'days').format('YYYY-MM-DDT08:00:00Z');
	                                if (nextItem.Milestone === true) {
	                                    nextItem.EndDate = moment(connectedItem.EndDate).add(diffDays, 'days').format('YYYY-MM-DDT08:00:00Z');
	                                } else {
	                                    nextItem.EndDate = moment(connectedItem.EndDate).add(diffDays, 'days').format('YYYY-MM-DDT17:00:00Z');
	                                }
	                                connectedItem = _.find(self.ds.data(), {Id: nextItem.Id});
	                            } else {
	                                break;
	                            }
	                        }
	                    }
	
	                    if (path === 'connectTo' && e.value.connectorType === undefined) {
	                        updateItem.dirty = true;
	                        updateItem.connectTo = null;
	                        updateItem.connectorType = null;
	                    }
	                } else {
	                    cmApp.unblockUI();
	                }
	            });
	
	            self.treeData.listen(anychart.enums.EventType.TREE_ITEM_MOVE, function(e) {
	                cmApp.blockUI();
	                if (e.item.b.topLevel !== true) {
	                    var itemName = e.item.get('name');
	                    var sourceName = e.source ? '"' + e.source.get('name') + '"' : 'tree';
	                    var targetName = e.target ? '"' + e.target.get('name') + '"' : 'tree';
	                    var updateItem = _.find(self.ds.data(), {Id: e.item.get('taskId')});
	
	                    if (itemName !== 'tree' && targetName !== 'tree') {
	                        updateItem.dirty = true;
	                        var taskItem = '';
	                        var parentItem = '';
	                        if (e.item.get('id') <= e.item.B.index) {
	                            var i = e.item.get('id') + 1;
	                            while (i <= (e.item.B.index + 1)) {
	                                taskItem = _.find(self.ds.data(), {ganttId: i});
	                                if (e.item.c.length !== 0) {
	                                    updateItem.SummaryTask = true;
	                                } else {
	                                    if (updateItem.SummaryTask === true) {
	                                        updateItem.Complete = 0;
	                                    }
	                                    updateItem.SummaryTask = false;
	                                    if (updateItem.StartDate === null) {
	                                        updateItem.StartDate = moment().format('YYYY-MM-DDT08:00:00Z');
	                                    }
	                                    if (updateItem.EndDate === null) {
	                                        updateItem.EndDate = moment().add(1, 'days').format('YYYY-MM-DDT17:00:00Z');
	                                    }
	                                }
	                                taskItem.dirty = true;
	                                /* jshint -W083 */
	                                var newArr = self.ds.data().filter(function(item){
	                                    return item.Parent === taskItem.Id;
	                                });
	                                if (newArr.length > 1) {
	                                    taskItem.SummaryTask = true;
	                                } else {
	                                    taskItem.SummaryTask = false;
	                                    if (taskItem.StartDate === null) {
	                                        taskItem.StartDate = moment().format('YYYY-MM-DDT08:00:00Z');
	                                    }
	                                    if (taskItem.EndDate === null) {
	                                        taskItem.EndDate = moment().startOf('day').add(1, 'days').format('YYYY-MM-DDT17:00:00Z');
	                                    }
	                                }
	                                var connectedArr = self.ds.data().filter(function(item){
	                                    return item.connectedTo === taskItem.ganttId;
	                                });
	                                taskItem.ganttId = taskItem.ganttId - 1;
	                                i++;
	                            }
	                            updateItem.ganttId = e.item.B.index + 1;
	                        } else {
	                            /* jshint -W004 */
	                            var i = e.item.get('id');
	                            while (i > e.item.B.index) {
	                                taskItem = _.find(self.ds.data(), {ganttId: i});
	                                if (e.item.c.length !== 0) {
	                                    updateItem.SummaryTask = true;
	                                } else {
	                                    if (updateItem.SummaryTask === true) {
	                                        updateItem.Complete = 0;
	                                    }
	                                    updateItem.SummaryTask = false;
	                                    if (updateItem.StartDate === null) {
	                                        updateItem.StartDate = moment().format('YYYY-MM-DDT08:00:00Z');
	                                    }
	                                    if (updateItem.EndDate === null) {
	                                        updateItem.EndDate = moment().add(1, 'days').format('YYYY-MM-DDT17:00:00Z');
	                                    }
	                                }
	                                taskItem.dirty = true;
	                                /* jshint -W004 */
	                                var newArr = self.ds.data().filter(function(item){
	                                    return item.Parent === taskItem.Id;
	                                });
	                                if (newArr.length > 1) {
	                                    taskItem.SummaryTask = true;
	                                } else {
	                                    taskItem.SummaryTask = false;
	                                    if (taskItem.StartDate === null) {
	                                        taskItem.StartDate = moment().format('YYYY-MM-DDT08:00:00Z');
	                                    }
	                                    if (taskItem.EndDate === null) {
	                                        taskItem.EndDate = moment().add(1, 'days').format('YYYY-MM-DDT17:00:00Z');
	                                    }
	                                }
	                                /* jshint -W004 */
	                                var connectedArr = self.ds.data().filter(function(item){
	                                    return item.connectedTo === taskItem.ganttId;
	                                });
	                                taskItem.ganttId = taskItem.ganttId + 1;
	                                i--;
	                            }
	                            updateItem.ganttId = e.item.B.index + 1;
	                        }
	
	                        if (itemName === targetName) {
	                            updateItem.Parent = e.source.get('taskId');
	                        } else {
	                            updateItem.Parent = e.target.get('taskId');
	                        }
	                        var updateParent = _.find(self.ds.data(), {Id: e.target.get('taskId')});
	                        updateParent.dirty = true;
	                        updateParent.SummaryTask = true;
	                        updateParent.autoProgress = '';
	                        updateParent.autoStart = '';
	                        updateParent.autoEnd = '';
	                        updateParent.StartDate = null;
	                        updateParent.EndDate = null;
	                    }
	                    self.ds.sync().then(function (){
	                        self.ds.read().then(function () {
	                            self.loadTasks();
	                            var dataItem  = self.treeData.searchItems("id", 1);
	                            var topLevelItem = '';
	                            topLevelItem = _.find(self.ds.data(), {Id: dataItem[0].b.taskId});
	                            topLevelItem.dirty = true;
	                            topLevelItem.StartDate = moment(dataItem[0].B.autoStart).format('YYYY-MM-DDT08:00:00Z');
	                            topLevelItem.EndDate = moment(dataItem[0].B.autoEnd).format('YYYY-MM-DDT17:00:00Z');
	                            topLevelItem.Complete = parseFloat(dataItem[0].B.autoProgress * 100).toFixed(2);
	                            self.ds.sync().then(function (){
	                                self.ds.read().then(function () {
	                                    self.loadTasks();
	                                    self.startDateChange = false;
	                                    self.selectedItem = null;
	                                    $('#deleteButton').addClass('k-state-disabled');
	                                    $('#viewButton').addClass('k-state-disabled');
	                                    $('#editButton').addClass('k-state-disabled');
	                                    $('#setMilestoneButton').addClass('k-state-disabled');
	                                    $('#removeMilestoneButton').addClass('k-state-disabled');
	                                });
	                            });
	                        });
	                    });
	                } else {
	                    cmApp.unblockUI();
	                }
	            });
	
	            // set data for the chart
	            self.chart.data(self.treeData);
	
	            // initiate chart drawing
	            self.chart.draw();
	
	            // zoom chart all dates range
	            self.chart.fitAll();
	
	            cmApp.unblockUI();
	        };
	
	        self.loadTasks = function () {
	            cmApp.blockUI();
	            self.projectTasks = [];
	            var parentItem = '';
	            var parent = '';
	            var sortedTasks = [];
	            sortedTasks = self.ds.data().sort(function(a, b){
	                return a.ganttId-b.ganttId;
	            });
	            _.each(sortedTasks, function(data, i){
	                if (data.Parent !== undefined) {
	                    parentItem = _.findIndex(sortedTasks, {Id: data.Parent});
	                    parent = parentItem + 1;
	                } else {
	                    parent = '';
	                }
	                var actualStyling = '';
	                if (data.KeyActivity === true) {
	                    actualStyling = '3 green';
	                }
	                if (data.SummaryTask === true) {
	                    if (data.TopLevel === true) {
	                        if (sortedTasks.length > 1) {
	                            self.projectTasks.push({
	                                id: data.ganttId,
	                                taskId: data.Id,
	                                name: data.Title,
	                                parent: '',
	                                autoProgress: '',
	                                autoStart: '',
	                                autoEnd: '',
	                                assignedTo: '',
	                                topLevel: true,
	                                summaryTask: true,
	                                actual: {
	                                    label: {
	                                        position: 'Center',
	                                        anchor: 'Center',
	                                        padding: 0,
	                                        fontColor: 'white'
	                                    },
	                                    stroke: actualStyling
	                                }
	                            });
	                        } else {
	                            self.projectTasks.push({
	                                id: data.ganttId,
	                                taskId: data.Id,
	                                name: data.Title,
	                                parent: '',
	                                actualStart: moment(data.StartDate).valueOf(),
	                                actualEnd: moment(data.EndDate).valueOf(),
	                                assignedTo: '',
	                                topLevel: true,
	                                summaryTask: true,
	                                actual: {
	                                    label: {
	                                        position: 'Center',
	                                        anchor: 'Center',
	                                        padding: 0,
	                                        fontColor: 'white'
	                                    },
	                                    stroke: actualStyling
	                                }
	                            });
	                        }
	                    } else {
	                        self.projectTasks.push({
	                            id: data.ganttId,
	                            taskId: data.Id,
	                            name: data.Title,
	                            parent: parent,
	                            summaryTask: true,
	                            autoProgress: '',
	                            autoStart: '',
	                            autoEnd: '',
	                            assignedTo: '',
	                            actual: {
	                                label: {
	                                    position: 'Center',
	                                    anchor: 'Center',
	                                    padding: 0,
	                                    fontColor: 'white'
	                                },
	                                stroke: actualStyling
	                            }
	                        });
	                    }
	                } else {
	                    var assignedTo = '';
	                    if (data.AssignedTo !== undefined && data.AssignedTo.length === 1) {
	                        assignedTo = data.AssignedTo[0].DisplayName;
	                    }
	                    var connectedItem = _.find(sortedTasks, {Id: data.connectTo});
	                    var connectTo = '';
	                    if (connectedItem !== undefined) {
	                        connectTo = connectedItem.ganttId;
	                    }
	                    var startDate = '';
	                    var endDate = '';
	                    if (data.StartDate === null) {
	                        startDate = moment().startOf('day').add(8, 'hours').valueOf();
	                    } else {
	                        startDate = moment(data.StartDate).valueOf();
	                    }
	                    if (data.EndDate === null) {
	                        endDate = moment().startOf('day').add(41, 'hours').valueOf();
	                    } else {
	                        endDate = moment(data.EndDate).valueOf();
	                    }
	                    self.projectTasks.push({
	                        id: data.ganttId,
	                        taskId: data.Id,
	                        name: data.Title,
	                        parent: parent,
	                        actualStart: startDate,
	                        actualEnd: endDate,
	                        progressValue: data.Complete + '%',
	                        connectTo: connectTo,
	                        connectorType: data.connectorType,
	                        assignedTo: assignedTo,
	                        summaryTask: false,
	                        keyActivity: data.KeyActivity,
	                        actual: {
	                            label: {
	                                position: 'Center',
	                                anchor: 'Center',
	                                padding: 0,
	                                fontColor: 'white'
	                            },
	                            stroke: actualStyling
	                        }
	                    });
	                }
	            });
	            self.drawGantt();
	            _.each(self.collapsedTasks, function(data, i){
	                if (data.collapsed === true) {
	                    var taskItem  = _.find(self.projectTasks, {taskId:data.taskId});
	                    self.chart.collapseTask(taskItem.id);
	                }
	            });
	
	            cmApp.unblockUI();
	        };
	
	        $('#viewButton').on('click', function (e) {
	            if (self.selectedItem) {
	                var formOptions = new cnc.ui.form.options();
	                formOptions.actionTitle = 'View Task';
	                formOptions.itemId = self.selectedItem.b.taskId;
	
	                cnc.ui.form.run(formOptions)
	                    .done(function (results) {
	                        console.log('Done:', results);
	                    })
	                    .fail(function (results) {
	                        console.log('Fail:', results);
	                    });
	            }
	        });
	
	        $('#editButton').on('click', function (e) {
	            if (self.selectedItem) {
	                var formOptions = new cnc.ui.form.options();
	                if (self.selectedItem.b.summaryTask !== true) {
	                    formOptions.actionTitle = 'Edit Task';
	                } else {
	                    formOptions.actionTitle = 'Edit Summary Task';
	                }
	                formOptions.itemId = self.selectedItem.b.taskId;
	                cnc.ui.form.run(formOptions)
	                    .done(function (results) {
	                        console.log('Done:', results);
	                        cmApp.blockUI();
	                        self.ds.read().then(function () {
	                            var updatedItem  = _.find(self.ds.data(), {Id:self.selectedItem.b.taskId});
	                            var connectedItem = _.find(self.ds.data(), {connectTo: updatedItem.Id});
	                            if (connectedItem !== undefined) {
	                                updatedItem.dirty = true;
	                                var startDate = moment(updatedItem.StartDate).valueOf();
	                                var endDate = moment(updatedItem.EndDate).valueOf();
	                                var timeDiff = Math.abs(endDate - startDate);
	                                var diffDays = Math.ceil(timeDiff / (24 * 60 * 60 * 1000));
	                                var diffEndDate = moment(updatedItem.EndDate).subtract(diffDays, 'days');
	                                var diffStartDate = moment(updatedItem.StartDate).subtract(diffDays, 'days');
	                                switch(connectedItem.connectorType) {
	                                    case 'finishfinish':
	                                        updatedItem.StartDate = moment(connectedItem.EndDate).subtract(diffDays - 1, 'days').format('YYYY-MM-DDT08:00:00Z');
	                                        updatedItem.EndDate = moment(connectedItem.EndDate).format('YYYY-MM-DDT17:00:00Z');
	                                        break;
	                                    case 'startfinish':
	                                        updatedItem.StartDate = moment(connectedItem.StartDate).subtract(diffDays, 'days').format('YYYY-MM-DDT08:00:00Z');
	                                        if (updatedItem.Milestone === true) {
	                                            updatedItem.EndDate = moment(connectedItem.StartDate).subtract(diffDays, 'days').format('YYYY-MM-DDT08:00:00Z');
	                                        } else {
	                                            updatedItem.EndDate = moment(connectedItem.StartDate).subtract(1, 'days').format('YYYY-MM-DDT17:00:00Z');
	                                        }
	                                        break;
	                                    case 'startstart':
	                                        updatedItem.StartDate = moment(connectedItem.StartDate).format('YYYY-MM-DDT08:00:00Z');
	                                        updatedItem.EndDate = moment(connectedItem.StartDate).add(diffDays - 1, 'days').format('YYYY-MM-DDT17:00:00Z');
	                                        break;
	                                    case 'finishstart':
	                                        updatedItem.StartDate = moment(connectedItem.EndDate).add(1, 'days').format('YYYY-MM-DDT08:00:00Z');
	                                        if (updatedItem.Milestone === true) {
	                                            updatedItem.EndDate = moment(connectedItem.EndDate).add(1, 'days').format('YYYY-MM-DDT08:00:00Z');
	                                        } else {
	                                            updatedItem.EndDate = moment(connectedItem.EndDate).add(diffDays + 1, 'days').format('YYYY-MM-DDT17:00:00Z');
	                                        }
	                                        break;
	                                }
	                            }
	                            /* jshint -W004 */
	                            var timeDiff = '';
	                            /* jshint -W004 */
	                            var diffDays = '';
	                            while (updatedItem.connectTo !== '') {
	                                if (updatedItem.connectorType === 'startstart') {
	                                    var nextItem = _.find(self.ds.data(), {Id: updatedItem.connectTo});
	                                    timeDiff = Math.abs(nextItem.EndDate - nextItem.StartDate);
	                                    diffDays = Math.ceil(timeDiff / (24 * 60 * 60 * 1000));
	                                    nextItem.dirty = true;
	                                    nextItem.StartDate = moment(updatedItem.StartDate).format('YYYY-MM-DDT08:00:00Z');
	                                    if (nextItem.Milestone === true) {
	                                        nextItem.EndDate = moment(updatedItem.StartDate).add(diffDays - 1, 'days').format('YYYY-MM-DDT08:00:00Z');
	                                    } else {
	                                        nextItem.EndDate = moment(updatedItem.StartDate).add(diffDays - 1, 'days').format('YYYY-MM-DDT17:00:00Z');
	                                    }
	                                    updatedItem = _.find(self.ds.data(), {Id: nextItem.Id});
	                                } else if (updatedItem.connectorType === 'startfinish') {
	                                    var nextItem = _.find(self.ds.data(), {Id: updatedItem.connectTo});
	                                    timeDiff = Math.abs(nextItem.EndDate - nextItem.StartDate);
	                                    diffDays = Math.ceil(timeDiff / (24 * 60 * 60 * 1000));
	                                    nextItem.dirty = true;
	                                    nextItem.StartDate = moment(updatedItem.StartDate).subtract(diffDays, 'days').format('YYYY-MM-DDT08:00:00Z');
	                                    if (nextItem.Milestone === true) {
	                                        nextItem.EndDate = moment(updatedItem.StartDate).subtract(1, 'days').format('YYYY-MM-DDT08:00:00Z');
	                                    } else {
	                                        nextItem.EndDate = moment(updatedItem.StartDate).subtract(1, 'days').format('YYYY-MM-DDT17:00:00Z');
	                                    }
	                                    updatedItem = _.find(self.ds.data(), {Id: nextItem.Id});
	                                } else if (updatedItem.connectorType === 'finishfinish') {
	                                    var nextItem = _.find(self.ds.data(), {Id: updatedItem.connectTo});
	                                    timeDiff = Math.abs(moment(nextItem.EndDate) - moment(nextItem.StartDate));
	                                    diffDays = Math.ceil(timeDiff / (24 * 60 * 60 * 1000));
	                                    nextItem.dirty = true;
	                                    nextItem.StartDate = moment(updatedItem.EndDate).subtract(diffDays - 1, 'days').format('YYYY-MM-DDT08:00:00Z');
	                                    if (nextItem.Milestone === true) {
	                                        nextItem.EndDate = moment(updatedItem.EndDate).format('YYYY-MM-DDT08:00:00Z');
	                                    } else {
	                                        nextItem.EndDate = moment(updatedItem.EndDate).format('YYYY-MM-DDT17:00:00Z');
	                                    }
	                                    updatedItem = _.find(self.ds.data(), {Id: nextItem.Id});
	                                } else if (updatedItem.connectorType === 'finishstart') {
	                                    var nextItem = _.find(self.ds.data(), {Id: updatedItem.connectTo});
	                                    timeDiff = Math.abs(moment(nextItem.EndDate) - moment(nextItem.StartDate));
	                                    diffDays = Math.ceil(timeDiff / (24 * 60 * 60 * 1000));
	                                    nextItem.dirty = true;
	                                    nextItem.StartDate = moment(updatedItem.EndDate).add(1, 'days').format('YYYY-MM-DDT08:00:00Z');
	                                    if (nextItem.Milestone === true) {
	                                        nextItem.EndDate = moment(updatedItem.EndDate).add(diffDays, 'days').format('YYYY-MM-DDT08:00:00Z');
	                                    } else {
	                                        nextItem.EndDate = moment(updatedItem.EndDate).add(diffDays, 'days').format('YYYY-MM-DDT17:00:00Z');
	                                    }
	                                    updatedItem = _.find(self.ds.data(), {Id: nextItem.Id});
	                                } else {
	                                    break;
	                                }
	                            }
	                            self.ds.sync().then(function (){
	                                self.ds.read().then(function () {
	                                    self.loadTasks();
	                                    var dataItem  = self.treeData.searchItems("id", 1);
	                                    var topLevelItem = '';
	                                    topLevelItem = _.find(self.ds.data(), {Id: dataItem[0].b.taskId});
	                                    topLevelItem.dirty = true;
	                                    topLevelItem.StartDate = moment(dataItem[0].B.autoStart).format('YYYY-MM-DDT08:00:00Z');
	                                    topLevelItem.EndDate = moment(dataItem[0].B.autoEnd).format('YYYY-MM-DDT17:00:00Z');
	                                    topLevelItem.Complete = parseFloat(dataItem[0].B.autoProgress * 100).toFixed(2);
	                                    self.ds.sync().then(function (){
	                                        self.ds.read().then(function () {
	                                            self.loadTasks();
	                                            self.selectedItem = null;
	                                            $('#deleteButton').addClass('k-state-disabled');
	                                            $('#viewButton').addClass('k-state-disabled');
	                                            $('#editButton').addClass('k-state-disabled');
	                                            $('#setMilestoneButton').addClass('k-state-disabled');
	                                            $('#removeMilestoneButton').addClass('k-state-disabled');
	                                            cmApp.unblockUI();
	                                        });
	                                    });
	                                });
	                            });
	                        });
	                    })
	                    .fail(function (results) {
	                        console.log('Fail:', results);
	                    });
	            }
	        });
	
	        $('#setMilestoneButton').on('click', function (e) {
	            if (self.selectedItem) {
	                var formOptions = new cnc.ui.form.options();
	                formOptions.actionTitle = 'Set as Milestone';
	                formOptions.itemId = self.selectedItem.b.taskId;
	                var timeDiff = '';
	                var diffDays = '';
	                cnc.ui.form.run(formOptions)
	                    .done(function (results) {
	                        console.log('Done:', results);
	                        cmApp.blockUI();
	                        self.ds.read().then(function () {
	                            var milestoneItem  = _.find(self.ds.data(), {Id:self.selectedItem.b.taskId});
	                            milestoneItem.dirty = true;
	                            milestoneItem.Milestone = true;
	                            var connectedItem = _.find(self.ds.data(), {connectTo: milestoneItem.Id});
	                            if (connectedItem === undefined) {
	                                milestoneItem.StartDate = moment(milestoneItem.StartDate).format('YYYY-MM-DDT08:00:00Z');
	                                milestoneItem.EndDate = moment(milestoneItem.StartDate).format('YYYY-MM-DDT08:00:00Z');
	                            } else {
	                                switch(connectedItem.connectorType) {
	                                    case 'finishfinish':
	                                        milestoneItem.StartDate = moment(connectedItem.EndDate).format('YYYY-MM-DDT08:00:00Z');
	                                        milestoneItem.EndDate = moment(connectedItem.EndDate).format('YYYY-MM-DDT08:00:00Z');
	                                        break;
	                                    case 'startfinish':
	                                        milestoneItem.StartDate = moment(connectedItem.StartDate).subtract(1, 'days').format('YYYY-MM-DDT08:00:00Z');
	                                        milestoneItem.EndDate = moment(connectedItem.StartDate).subtract(1, 'days').format('YYYY-MM-DDT08:00:00Z');
	                                        break;
	                                    case 'startstart':
	                                        milestoneItem.StartDate = moment(connectedItem.StartDate).format('YYYY-MM-DDT08:00:00Z');
	                                        milestoneItem.EndDate = moment(connectedItem.StartDate).format('YYYY-MM-DDT08:00:00Z');
	                                        break;
	                                    case 'finishstart':
	                                        milestoneItem.StartDate = moment(connectedItem.EndDate).add(1, 'days').format('YYYY-MM-DDT08:00:00Z');
	                                        milestoneItem.EndDate = moment(connectedItem.EndDate).add(1, 'days').format('YYYY-MM-DDT08:00:00Z');
	                                        break;
	                                }
	                            }
	                            while (milestoneItem.connectTo !== '') {
	                                if (milestoneItem.connectorType === 'startstart') {
	                                    var nextItem = _.find(self.ds.data(), {Id: milestoneItem.connectTo});
	                                    timeDiff = Math.abs(nextItem.EndDate - nextItem.StartDate);
	                                    diffDays = Math.ceil(timeDiff / (24 * 60 * 60 * 1000));
	                                    nextItem.dirty = true;
	                                    nextItem.StartDate = moment(milestoneItem.StartDate).format('YYYY-MM-DDT08:00:00Z');
	                                    if (nextItem.Milestone === true) {
	                                        nextItem.EndDate = moment(milestoneItem.StartDate).add(diffDays - 1, 'days').format('YYYY-MM-DDT08:00:00Z');
	                                    } else {
	                                        nextItem.EndDate = moment(milestoneItem.StartDate).add(diffDays - 1, 'days').format('YYYY-MM-DDT17:00:00Z');
	                                    }
	                                    milestoneItem = _.find(self.ds.data(), {Id: nextItem.Id});
	                                } else if (milestoneItem.connectorType === 'startfinish') {
	                                    /* jshint -W004 */
	                                    var nextItem = _.find(self.ds.data(), {Id: milestoneItem.connectTo});
	                                    timeDiff = Math.abs(nextItem.EndDate - nextItem.StartDate);
	                                    diffDays = Math.ceil(timeDiff / (24 * 60 * 60 * 1000));
	                                    nextItem.dirty = true;
	                                    nextItem.StartDate = moment(milestoneItem.StartDate).subtract(diffDays, 'days').format('YYYY-MM-DDT08:00:00Z');
	                                    if (nextItem.Milestone === true) {
	                                        nextItem.EndDate = moment(milestoneItem.StartDate).subtract(1, 'days').format('YYYY-MM-DDT08:00:00Z');
	                                    } else {
	                                        nextItem.EndDate = moment(milestoneItem.StartDate).subtract(1, 'days').format('YYYY-MM-DDT17:00:00Z');
	                                    }
	                                    milestoneItem = _.find(self.ds.data(), {Id: nextItem.Id});
	                                } else if (milestoneItem.connectorType === 'finishfinish') {
	                                    var nextItem = _.find(self.ds.data(), {Id: milestoneItem.connectTo});
	                                    timeDiff = Math.abs(moment(nextItem.EndDate) - moment(nextItem.StartDate));
	                                    diffDays = Math.ceil(timeDiff / (24 * 60 * 60 * 1000));
	                                    nextItem.dirty = true;
	                                    nextItem.StartDate = moment(milestoneItem.EndDate).subtract(diffDays - 1, 'days').format('YYYY-MM-DDT08:00:00Z');
	                                    if (nextItem.Milestone === true) {
	                                        nextItem.EndDate = moment(milestoneItem.EndDate).format('YYYY-MM-DDT08:00:00Z');
	                                    } else {
	                                        nextItem.EndDate = moment(milestoneItem.EndDate).format('YYYY-MM-DDT17:00:00Z');
	                                    }
	                                    milestoneItem = _.find(self.ds.data(), {Id: nextItem.Id});
	                                } else if (milestoneItem.connectorType === 'finishstart') {
	                                    var nextItem = _.find(self.ds.data(), {Id: milestoneItem.connectTo});
	                                    timeDiff = Math.abs(moment(nextItem.EndDate) - moment(nextItem.StartDate));
	                                    diffDays = Math.ceil(timeDiff / (24 * 60 * 60 * 1000));
	                                    nextItem.dirty = true;
	                                    nextItem.StartDate = moment(milestoneItem.EndDate).add(1, 'days').format('YYYY-MM-DDT08:00:00Z');
	                                    if (nextItem.Milestone === true) {
	                                        nextItem.EndDate = moment(milestoneItem.EndDate).add(diffDays, 'days').format('YYYY-MM-DDT08:00:00Z');
	                                    } else {
	                                        nextItem.EndDate = moment(milestoneItem.EndDate).add(diffDays, 'days').format('YYYY-MM-DDT17:00:00Z');
	                                    }
	                                    milestoneItem = _.find(self.ds.data(), {Id: nextItem.Id});
	                                } else {
	                                    break;
	                                }
	                            }
	                            self.ds.sync().then(function (){
	                                self.ds.read().then(function () {
	                                    self.loadTasks();
	                                    var dataItem  = self.treeData.searchItems("id", 1);
	                                    var topLevelItem = '';
	                                    topLevelItem = _.find(self.ds.data(), {Id: dataItem[0].b.taskId});
	                                    topLevelItem.dirty = true;
	                                    topLevelItem.StartDate = moment(dataItem[0].B.autoStart).format('YYYY-MM-DDT08:00:00Z');
	                                    topLevelItem.EndDate = moment(dataItem[0].B.autoEnd).format('YYYY-MM-DDT17:00:00Z');
	                                    topLevelItem.Complete = parseFloat(dataItem[0].B.autoProgress * 100).toFixed(2);
	                                    self.ds.sync().then(function (){
	                                        self.ds.read().then(function () {
	                                            self.loadTasks();
	                                            self.selectedItem = null;
	                                            $('#deleteButton').addClass('k-state-disabled');
	                                            $('#viewButton').addClass('k-state-disabled');
	                                            $('#editButton').addClass('k-state-disabled');
	                                            $('#setMilestoneButton').addClass('k-state-disabled');
	                                            $('#removeMilestoneButton').addClass('k-state-disabled');
	                                            cmApp.unblockUI();
	                                        });
	                                    });
	                                });
	                            });
	                        });
	                    })
	                    .fail(function (results) {
	                        console.log('Fail:', results);
	                    });
	            }
	        });
	
	        $('#removeMilestoneButton').on('click', function (e) {
	            if (self.selectedItem) {
	                var formOptions = new cnc.ui.form.options();
	                formOptions.actionTitle = 'Set as Task';
	                formOptions.itemId = self.selectedItem.b.taskId;
	                cnc.ui.form.run(formOptions)
	                    .done(function (results) {
	                        console.log('Done:', results);
	                        cmApp.blockUI();
	                        self.ds.read().then(function () {
	                            var taskItem  = _.find(self.ds.data(), {Id:self.selectedItem.b.taskId});
	                            taskItem.dirty = true;
	                            taskItem.Milestone = false;
	                            var connectedItem = _.find(self.ds.data(), {connectTo: taskItem.Id});
	                            if (connectedItem === undefined) {
	                                taskItem.StartDate = moment(taskItem.StartDate).format('YYYY-MM-DDT08:00:00Z');
	                                taskItem.EndDate = moment(taskItem.EndDate).format('YYYY-MM-DDT17:00:00Z');
	                            } else {
	                                var startDate = moment(taskItem.StartDate).valueOf();
	                                var endDate = moment(taskItem.EndDate).valueOf();
	                                var timeDiff = Math.abs(endDate - startDate);
	                                var diffDays = Math.ceil(timeDiff / (24 * 60 * 60 * 1000));
	                                var diffEndDate = moment(taskItem.EndDate).subtract(diffDays, 'days');
	                                var diffStartDate = moment(taskItem.StartDate).subtract(diffDays, 'days');
	                                switch(connectedItem.connectorType) {
	                                    case 'finishfinish':
	                                        taskItem.StartDate = moment(connectedItem.EndDate).subtract(diffDays, 'days').format('YYYY-MM-DDT08:00:00Z');
	                                        taskItem.EndDate = moment(connectedItem.EndDate).format('YYYY-MM-DDT17:00:00Z');
	                                        break;
	                                    case 'startfinish':
	                                        taskItem.StartDate = moment(connectedItem.StartDate).subtract(diffDays + 1, 'days').format('YYYY-MM-DDT08:00:00Z');
	                                        taskItem.EndDate = moment(connectedItem.StartDate).subtract(1, 'days').format('YYYY-MM-DDT17:00:00Z');
	                                        break;
	                                    case 'startstart':
	                                        taskItem.StartDate = moment(connectedItem.StartDate).format('YYYY-MM-DDT08:00:00Z');
	                                        taskItem.EndDate = moment(connectedItem.StartDate).add(diffDays, 'days').format('YYYY-MM-DDT17:00:00Z');
	                                        break;
	                                    case 'finishstart':
	                                        taskItem.StartDate = moment(connectedItem.EndDate).add(1, 'days').format('YYYY-MM-DDT08:00:00Z');
	                                        taskItem.EndDate = moment(connectedItem.EndDate).add(diffDays + 1, 'days').format('YYYY-MM-DDT17:00:00Z');
	                                        break;
	                                }
	                            }
	                            /* jshint -W004 */
	                            var timeDiff = '';
	                            /* jshint -W004 */
	                            var diffDays = '';
	                            while (taskItem.connectTo !== '') {
	                                if (taskItem.connectorType === 'startstart') {
	                                    var nextItem = _.find(self.ds.data(), {Id: taskItem.connectTo});
	                                    timeDiff = Math.abs(nextItem.EndDate - nextItem.StartDate);
	                                    diffDays = Math.ceil(timeDiff / (24 * 60 * 60 * 1000));
	                                    nextItem.dirty = true;
	                                    nextItem.StartDate = moment(taskItem.StartDate).format('YYYY-MM-DDT08:00:00Z');
	                                    if (nextItem.Milestone === true) {
	                                        nextItem.EndDate = moment(taskItem.StartDate).add(diffDays - 1, 'days').format('YYYY-MM-DDT08:00:00Z');
	                                    } else {
	                                        nextItem.EndDate = moment(taskItem.StartDate).add(diffDays - 1, 'days').format('YYYY-MM-DDT17:00:00Z');
	                                    }
	                                    taskItem = _.find(self.ds.data(), {Id: nextItem.Id});
	                                } else if (taskItem.connectorType === 'startfinish') {
	                                    var nextItem = _.find(self.ds.data(), {Id: taskItem.connectTo});
	                                    timeDiff = Math.abs(nextItem.EndDate - nextItem.StartDate);
	                                    diffDays = Math.ceil(timeDiff / (24 * 60 * 60 * 1000));
	                                    nextItem.dirty = true;
	                                    nextItem.StartDate = moment(taskItem.StartDate).subtract(diffDays, 'days').format('YYYY-MM-DDT08:00:00Z');
	                                    if (nextItem.Milestone === true) {
	                                        nextItem.EndDate = moment(taskItem.StartDate).subtract(1, 'days').format('YYYY-MM-DDT08:00:00Z');
	                                    } else {
	                                        nextItem.EndDate = moment(taskItem.StartDate).subtract(1, 'days').format('YYYY-MM-DDT17:00:00Z');
	                                    }
	                                    taskItem = _.find(self.ds.data(), {Id: nextItem.Id});
	                                } else if (taskItem.connectorType === 'finishfinish') {
	                                    var nextItem = _.find(self.ds.data(), {Id: taskItem.connectTo});
	                                    timeDiff = Math.abs(moment(nextItem.EndDate) - moment(nextItem.StartDate));
	                                    diffDays = Math.ceil(timeDiff / (24 * 60 * 60 * 1000));
	                                    nextItem.dirty = true;
	                                    nextItem.StartDate = moment(taskItem.EndDate).subtract(diffDays - 1, 'days').format('YYYY-MM-DDT08:00:00Z');
	                                    if (nextItem.Milestone === true) {
	                                        nextItem.EndDate = moment(taskItem.EndDate).format('YYYY-MM-DDT08:00:00Z');
	                                    } else {
	                                        nextItem.EndDate = moment(taskItem.EndDate).format('YYYY-MM-DDT17:00:00Z');
	                                    }
	                                    taskItem = _.find(self.ds.data(), {Id: nextItem.Id});
	                                } else if (taskItem.connectorType === 'finishstart') {
	                                    var nextItem = _.find(self.ds.data(), {Id: taskItem.connectTo});
	                                    timeDiff = Math.abs(moment(nextItem.EndDate) - moment(nextItem.StartDate));
	                                    diffDays = Math.ceil(timeDiff / (24 * 60 * 60 * 1000));
	                                    nextItem.dirty = true;
	                                    nextItem.StartDate = moment(taskItem.EndDate).add(1, 'days').format('YYYY-MM-DDT08:00:00Z');
	                                    if (nextItem.Milestone === true) {
	                                        nextItem.EndDate = moment(taskItem.EndDate).add(diffDays, 'days').format('YYYY-MM-DDT08:00:00Z');
	                                    } else {
	                                        nextItem.EndDate = moment(taskItem.EndDate).add(diffDays, 'days').format('YYYY-MM-DDT17:00:00Z');
	                                    }
	                                    taskItem = _.find(self.ds.data(), {Id: nextItem.Id});
	                                } else {
	                                    break;
	                                }
	                            }
	                            self.ds.sync().then(function (){
	                                self.ds.read().then(function () {
	                                    self.loadTasks();
	                                    var dataItem  = self.treeData.searchItems("id", 1);
	                                    var topLevelItem = '';
	                                    topLevelItem = _.find(self.ds.data(), {Id: dataItem[0].b.taskId});
	                                    topLevelItem.dirty = true;
	                                    topLevelItem.StartDate = moment(dataItem[0].B.autoStart).format('YYYY-MM-DDT08:00:00Z');
	                                    topLevelItem.EndDate = moment(dataItem[0].B.autoEnd).format('YYYY-MM-DDT17:00:00Z');
	                                    topLevelItem.Complete = parseFloat(dataItem[0].B.autoProgress * 100).toFixed(2);
	                                    self.ds.sync().then(function (){
	                                        self.ds.read().then(function () {
	                                            self.loadTasks();
	                                            self.selectedItem = null;
	                                            $('#deleteButton').addClass('k-state-disabled');
	                                            $('#viewButton').addClass('k-state-disabled');
	                                            $('#editButton').addClass('k-state-disabled');
	                                            $('#setMilestoneButton').addClass('k-state-disabled');
	                                            $('#removeMilestoneButton').addClass('k-state-disabled');
	                                            cmApp.unblockUI();
	                                        });
	                                    });
	                                });
	                            });
	                        });
	                    })
	                    .fail(function (results) {
	                        console.log('Fail:', results);
	                    });
	            }
	        });
	
	        $('#deleteButton').on('click', function (e) {
	            cmApp.blockUI();
	            var parentTask = '';
	            var collapsedTask = [];
	            parentTask = self.selectedItem.getParent();
	            collapsedTask = _.findIndex(self.collapsedTasks, {id: self.selectedItem.b.id});
	            if (collapsedTask >= 0) {
	                self.collapsedTasks.splice(collapsedTask, 1);
	            }
	            if (parentTask.c.length === 1 && parentTask.b.id !== 1) {
	                var summaryItem = _.find(self.ds.data(), {ganttId: parentTask.b.id});
	                summaryItem.dirty = true;
	                summaryItem.SummaryTask = false;
	                var startDate = moment().valueOf();
	                var endDate = moment().add(1, 'days').valueOf();
	                startDate = moment(startDate).format('YYYY-MM-DDT08:00:00Z');
	                endDate = moment(endDate).format('YYYY-MM-DDT17:00:00Z');
	                summaryItem.StartDate = startDate;
	                summaryItem.EndDate = endDate;
	            }
	            var parentItem = _.find(self.ds.data(), {ganttId: self.selectedItem.b.id});
	            self.ds.remove(parentItem);
	            i = self.selectedItem.b.id + 1;
	            while (i <= self.ds.data().length + 1) {
	                var updateItem = _.find(self.ds.data(), {ganttId: i});
	                updateItem.dirty = true;
	                updateItem.ganttId = i - 1;
	                if (updateItem.Parent === parentItem.Id) {
	                    updateItem.Parent = parentItem.Parent;
	                }
	                i++;
	            }
	            var connectedItem = _.find(self.ds.data(), {connectTo: self.selectedItem.b.taskId});
	            while (connectedItem !== undefined) {
	                connectedItem.dirty = true;
	                connectedItem.connectTo = '';
	                connectedItem.connectorType = '';
	                connectedItem = _.find(self.ds.data(), {connectTo: self.selectedItem.b.taskId});
	            }
	            self.ds.sync().then(function (){
	                self.ds.read().then(function () {
	                    self.loadTasks();
	                    var dataItem  = self.treeData.searchItems("id", 1);
	                    var topLevelItem = '';
	                    topLevelItem = _.find(self.ds.data(), {Id: dataItem[0].b.taskId});
	                    topLevelItem.dirty = true;
	                    if (dataItem[0].c.length === 0) {
	                        cmApp.getAvailableDataSources()
	                            .fail(function (results) {
	                            })
	                            .then(function (results) {
	                                cmApp.datasource('Projects', true).done(function (ds) {
	                                    if (ds === null) {
	                                        console.log('Projects datasource connection not found');
	                                    } else {
	                                        var filter = '{"logic":"and","filters":[{"field":"Id","operator":"eq","value":"' + cmApp.selectedProject + '"}]}';
	                                        ds.query({
	                                            filter: JSON.parse(filter)
	                                        }).then(function () {
	                                            if (ds.data().length >= 1) {
	                                                topLevelItem.StartDate = moment(ds.data[0].ProposedStartDate).format('YYYY-MM-DDT08:00:00Z');
	                                                topLevelItem.EndDate = moment(ds.data[0].ProposedEndDate).format('YYYY-MM-DDT17:00:00Z');
	                                                topLevelItem.Complete = 0;
	                                                self.ds.sync().then(function (){
	                                                    self.ds.read().then(function () {
	                                                        self.selectedItem = null;
	                                                        $('#deleteButton').addClass('k-state-disabled');
	                                                        $('#viewButton').addClass('k-state-disabled');
	                                                        $('#editButton').addClass('k-state-disabled');
	                                                        $('#setMilestoneButton').addClass('k-state-disabled');
	                                                        $('#removeMilestoneButton').addClass('k-state-disabled');
	                                                        self.loadTasks();
	                                                        cmApp.unblockUI();
	                                                    });
	                                                });
	                                            } else {
	                                                console.log('No data is returned');
	                                            }
	                                        });
	                                    }
	                                });
	                            });
	                    } else {
	                        topLevelItem.StartDate = moment(dataItem[0].B.autoStart).format('YYYY-MM-DDT08:00:00Z');
	                        topLevelItem.EndDate = moment(dataItem[0].B.autoEnd).format('YYYY-MM-DDT17:00:00Z');
	                        topLevelItem.Complete = parseFloat(dataItem[0].B.autoProgress * 100).toFixed(2);
	                        self.ds.sync().then(function (){
	                            self.ds.read().then(function () {
	                                self.selectedItem = null;
	                                $('#deleteButton').addClass('k-state-disabled');
	                                $('#viewButton').addClass('k-state-disabled');
	                                $('#editButton').addClass('k-state-disabled');
	                                $('#setMilestoneButton').addClass('k-state-disabled');
	                                $('#removeMilestoneButton').addClass('k-state-disabled');
	                                self.loadTasks();
	                                cmApp.unblockUI();
	                            });
	                        });
	                    }
	                });
	            });
	        });
	
	        $('#addButton').on('click', function (e) {
	            var topLevelTask = _.find(self.ds.data(), {TopLevel: true});
	            var newTaskGanttId = self.ds.data().length + 1;
	            self.ds.add({dirty: true, ganttId: newTaskGanttId, Title: '[Enter Task Title]', Parent: topLevelTask.Id, Project: null, SummaryTask: false, TopLevel: false, KeyActivity: false, Work: 0, Complete: 0});
	            self.ds.sync().then(function (){
	                var newTask = _.find(self.ds.data(), {ganttId: newTaskGanttId});
	                var formOptions = new cnc.ui.form.options();
	                formOptions.actionTitle = 'Add Task';
	                formOptions.itemId = newTask.Id;
	                cnc.ui.form.run(formOptions)
	                    .done(function (results) {
	                        console.log('Done:', results);
	                        cmApp.blockUI();
	                        self.ds.read().then(function () {
	                            var taskItem  = _.find(self.ds.data(), {Id:newTask.Id});
	                            taskItem.dirty = true;
	                            taskItem.StartDate = moment(taskItem.StartDate).format('YYYY-MM-DDT08:00:00Z');
	                            taskItem.EndDate = moment(taskItem.EndDate).format('YYYY-MM-DDT17:00:00Z');
	                            self.ds.sync().then(function (){
	                                self.ds.read().then(function () {
	                                    self.loadTasks();
	                                    var dataItem  = self.treeData.searchItems("id", 1);
	                                    var topLevelItem = '';
	                                    topLevelItem = _.find(self.ds.data(), {Id: dataItem[0].b.taskId});
	                                    topLevelItem.dirty = true;
	                                    topLevelItem.StartDate = moment(dataItem[0].B.autoStart).format('YYYY-MM-DDT08:00:00Z');
	                                    topLevelItem.EndDate = moment(dataItem[0].B.autoEnd).format('YYYY-MM-DDT17:00:00Z');
	                                    topLevelItem.Complete = parseFloat(dataItem[0].B.autoProgress * 100).toFixed(2);
	                                    self.ds.sync().then(function (){
	                                        self.ds.read().then(function () {
	                                            self.selectedItem = null;
	                                            $('#deleteButton').addClass('k-state-disabled');
	                                            $('#viewButton').addClass('k-state-disabled');
	                                            $('#editButton').addClass('k-state-disabled');
	                                            $('#setMilestoneButton').addClass('k-state-disabled');
	                                            $('#removeMilestoneButton').addClass('k-state-disabled');
	                                            self.loadTasks();
	                                            cmApp.unblockUI();
	                                        });
	                                    });
	                                });
	                            });
	                        });
	                    })
	                    .fail(function (results) {
	                        console.log('Fail:', results);
	                        self.ds.remove(newTask);
	                        self.ds.sync();
	                    });
	            });
	        });
	
	        $('#expandButton').on('click', function (e) {
	            self.chart.expandAll();
	            self.collapsedTasks = [];
	        });
	
	        $('#collapseButton').on('click', function (e) {
	            self.chart.collapseAll();
	            self.collapsedTasks = [];
	            _.each(self.projectTasks, function(data, i){
	                if (data.summaryTask === true) {
	                    self.collapsedTasks.push({
	                        taskId: data.taskId,
	                        collapsed: true,
	                        id: data.id
	                    });
	                }
	            });
	        });
	
	        cmApp.datasource('Tasks', true).done(function (ds) {
	            self.collapsedTasks = [];
	            self.ds = ds;
	            var filter = '{"logic":"and","filters":[{"field":"Project/ItemId","operator":"eq","value":"' + cmApp.selectedProject + '"}]}';
	            self.ds.query({
	                filter: JSON.parse(filter)
	            }).then(function () {
	                if (self.ds.data().length >= 1) {
	                    self.loadTasks();
	                } else {
	                    cmApp.datasource('Projects', true).done(function (ds) {
	                        if (ds === null) {
	                            console.log('Projects datasource connection not found');
	                        } else {
	                            var filter = '{"logic":"and","filters":[{"field":"Id","operator":"eq","value":"' + cmApp.selectedProject + '"}]}';
	                            ds.query({
	                                filter: JSON.parse(filter)
	                            }).then(function () {
	                                if (ds.data().length >= 1) {
	                                    var startDate = moment(ds.data()[0].ProposedStartDate).format('YYYY-MM-DDT08:00:00Z');
	                                    var endDate = moment(ds.data()[0].ProposedEndDate).format('YYYY-MM-DDT17:00:00Z');
	                                    self.ds.add({dirty: true, ganttId: 1, Title: ds.data()[0].Title, Parent: null, Project: null, StartDate: startDate, EndDate: endDate, SummaryTask: true, TopLevel: true, KeyActivity: false, Work: 0, Complete: 0});
	                                    self.ds.sync().then(function (){
	                                        self.loadTasks();
	                                    });
	                                } else {
	                                    console.log('No data is returned');
	                                }
	                            });
	                        }
	                    });
	                }
	            });
	        });
	
	        cc.events.on('cmAppNewProjectSelected', function (evt) {
	            self.collapsedTasks = [];
	            var filter = '{"logic":"and","filters":[{"field":"Project/ItemId","operator":"eq","value":"' + cmApp.selectedProject + '"}]}';
	            self.ds.query({
	                filter: JSON.parse(filter)
	            }).then(function () {
	                if (self.ds.data().length >= 1) {
	                    self.loadTasks();
	                } else {
	                    cmApp.datasource('Projects', true).done(function (ds) {
	                        if (ds === null) {
	                            console.log('Projects datasource connection not found');
	                        } else {
	                            var filter = '{"logic":"and","filters":[{"field":"Id","operator":"eq","value":"' + cmApp.selectedProject + '"}]}';
	                            ds.query({
	                                filter: JSON.parse(filter)
	                            }).then(function () {
	                                if (ds.data().length >= 1) {
	                                    var startDate = moment(ds.data()[0].ProposedStartDate).format('YYYY-MM-DDT08:00:00Z');
	                                    var endDate = moment(ds.data()[0].ProposedEndDate).format('YYYY-MM-DDT17:00:00Z');
	                                    self.ds.add({dirty: true, ganttId: 1, Title: ds.data()[0].Title, Parent: null, Project: null, StartDate: startDate, EndDate: endDate, SummaryTask: true, TopLevel: true, KeyActivity: false, Work: 0, Complete: 0});
	                                    self.ds.sync().then(function (){
	                                        self.loadTasks();
	                                    });
	                                } else {
	                                    console.log('No data is returned');
	                                }
	                            });
	                        }
	                    });
	                }
	            });
	        }, self);
	
	        cmApp.unblockUI();
	
	    });
	}
	
	$.extend(true, projectSchedule.prototype, {
	    dispose: function() {
	
	    },
	
	    initSubscriptions: function() {
	        var self = this;
	
	    },
	
	    initComponent: function( view ) {
	    }
	});
	
	function createViewModel( params, componentInfo ) {
	
	    return new projectSchedule(params);
	}
	
	module.exports = {
	    viewModel: {
	        createViewModel: createViewModel
	    },
	    template: template
	};


/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "<style>\r\n    #container {\r\n        width: 100%;\r\n        height: 1600px;\r\n    }\r\n</style>\r\n<div>\r\n    <div id=\"toolbar\" class=\"cc-toolbar k-toolbar k-widget k-toolbar-resizable\">\r\n        <button id=\"addButton\" type=\"button\" class=\"k-button\">Add Task</button>\r\n        <button id=\"editButton\" type=\"button\" class=\"k-button k-state-disabled\">Edit Task</button>\r\n        <button id=\"viewButton\" type=\"button\" class=\"k-button k-state-disabled\">View Task</button>\r\n        <button id=\"setMilestoneButton\" type=\"button\" class=\"k-button k-state-disabled\">Set as Milestone</button>\r\n        <button id=\"removeMilestoneButton\" type=\"button\" class=\"k-button k-state-disabled\">Set as Task</button>\r\n        <button id=\"deleteButton\" type=\"button\" class=\"k-button k-state-disabled\">Delete Task</button>\r\n        <button id=\"expandButton\" type=\"button\" class=\"k-button\">Expand All</button>\r\n        <button id=\"collapseButton\" type=\"button\" class=\"k-button\">Collapse All</button>\r\n    </div>\r\n</div>\r\n<div id=\"container\"></div>"

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var _ = cc.lodash,
	    template = __webpack_require__(15),
	    fn = cc.fn;
	
	/**
	 * @summary Budget Viewer component
	 * @desc Budget Viewer component
	 * <br />
	 * Creates a Budget Viewer
	 * @namespace
	 * @example <caption>Budget Viewer Description</caption>
	 * // Extension JS
	 * // Boilerplate Extension JS code works
	 * //
	 * // Extension HTML
	 * // <cn-cm-budget-viewer></cn-cm-budget-viewer>
	 */
	function BudgetViewer(params) {
	    cmApp.blockUI();
	
	    $.when(cmApp.ready).done(function () {
	        var self = this;
	        self.ds = [];
	        self.activeId = '';
	        self.submittedId = '';
	        self.approvedId = '';
	        self.budgetItems = [];
	        self.expenseItems = [];
	
	        var grid = $("#budgetGrid").data("kendoGrid");
	        $("#budgetGrid").kendoGrid({
	            pageable: true,
	            sortable: true,
	            columns: [{
	                field: 'Project',
	                title: 'Project'
	            },
	                {
	                    field: 'displayBudget',
	                    title: 'Budget',
	                    aggregates: ["sum"],
	                    footerTemplate: "Total: #= kendo.toString(sum, 'C') #",
	                    groupFooterTemplate: "Total: #= kendo.toString(sum, 'C') #",
	                    template: function(field) {
	                        return kendo.toString(field.displayBudget, 'C');
	                    }
	                },
	                {
	                    field: 'budgetAdjustment',
	                    title: 'Proposed Adjustment',
	                    aggregates: ["sum"],
	                    footerTemplate: "Total: #= kendo.toString(sum, 'C') #",
	                    groupFooterTemplate: "Total: #= kendo.toString(sum, 'C') #",
	                    template: function(field) {
	                        return kendo.toString(field.budgetAdjustment, 'C');
	                    }
	                },
	                {
	                    field: 'plannedExpenses',
	                    title: 'Planned Expenses',
	                    aggregates: ["sum"],
	                    footerTemplate: "Total: #= kendo.toString(sum, 'C') #",
	                    groupFooterTemplate: "Total: #= kendo.toString(sum, 'C') #",
	                    template: function(field) {
	                        return kendo.toString(field.plannedExpenses, 'C');
	                    }
	                },
	                {
	                    field: 'remainingBudget',
	                    title: 'Remaining',
	                    aggregates: ["sum"],
	                    footerTemplate: "Total: #= kendo.toString(sum, 'C') #",
	                    groupFooterTemplate: "Total: #= kendo.toString(sum, 'C') #",
	                    template: function(field) {
	                        return kendo.toString(field.remainingBudget, 'C');
	                    }
	                },
	                { command: { text: "View", click: showDetails }, title: " ", width: "80px" },
	                { command: { text: "Adjust", click: adjustBudget }, title: " ", width: "80px" },
	                { command: { text: "Revise", click: reviseBudget }, title: " ", width: "80px" },
	            ],
	            dataSource: {
	                pageSize: 250,
	                cache: false,
	                group: {
	                    field: "Category", aggregates: [
	                        { field: "displayBudget", aggregate: "sum" },
	                        { field: "budgetAdjustment", aggregate: "sum" },
	                        { field: "plannedExpenses", aggregate: "sum" },
	                        { field: "remainingBudget", aggregate: "sum" }
	                    ]
	                },
	                aggregate: [ { field: "displayBudget", aggregate: "sum" },
	                    { field: "budgetAdjustment", aggregate: "sum" },
	                    { field: "plannedExpenses", aggregate: "sum" },
	                    { field: "remainingBudget", aggregate: "sum" }]
	            },
	            dataBound: function(){
	                var grid = this;
	                var model;
	                grid.tbody.find("tr[role='row']").each(function(){
	                    model = grid.dataItem(this);
	                    if(model.budgetAdjustment === 0){
	                        $(this).find(".k-grid-Revise").remove();
	                    }
	                });
	            }
	        });
	
	        function showDetails(e) {
	            e.preventDefault();
	            var dataItem = this.dataItem($(e.currentTarget).closest("tr"));
	            var formOptions = new cnc.ui.form.options();
	            formOptions.actionTitle = 'View Project';
	            formOptions.itemId = dataItem.Id;
	
	            cnc.ui.form.run(formOptions)
	                .done(function (results) {
	                    console.log('Done:', results);
	                })
	                .fail(function (results) {
	                    console.log('Fail:', results);
	                });
	        }
	
	        function adjustBudget(e) {
	            e.preventDefault();
	            var dataItem = this.dataItem($(e.currentTarget).closest("tr"));
	            var formOptions = new cnc.ui.form.options();
	            formOptions.actionTitle = 'Adjust Budget';
	            formOptions.itemId = dataItem.Id;
	
	            cnc.ui.form.run(formOptions)
	                .done(function (results) {
	                    console.log('Done:', results);
	                    self.loadBudgetViewer();
	                })
	                .fail(function (results) {
	                    console.log('Fail:', results);
	                });
	        }
	
	        function reviseBudget(e) {
	            cmApp.blockUI();
	            e.preventDefault();
	            var dataItem = this.dataItem($(e.currentTarget).closest("tr"));
	            var budgetItem = _.filter(self.ds.data(), {Id: dataItem.Id});
	            budgetItem[0].dirty = true;
	            if (dataItem.Category === 'Submitted') {
	                budgetItem[0].ProposedBudget -= budgetItem[0].BudgetAdjustment;
	            } else {
	                budgetItem[0].ApprovedBudget -= budgetItem[0].BudgetAdjustment;
	            }
	            budgetItem[0].BudgetAdjustment = 0;
	            self.ds.sync().then(function () {
	                self.loadBudgetViewer();
	                cmApp.unblockUI();
	            });
	        }
	
	        self.loadBudgetViewer = function () {
	            cmApp.blockUI();
	            self.budgetItems = [];
	            self.expenseItems = [];
	
	            cmApp.datasource('Project Categories', false).done(function (ds) {
	                if (ds === null) {
	                    console.log('Project Categories datasource not found');
	                } else {
	                    ds.read().then(function () {
	                        if (ds.data().length >= 1) {
	                            self.activeId = _.find(ds.data(), {Title: 'Active'});
	                            self.submittedId = _.find(ds.data(), {Title: 'Submitted'});
	                            self.approvedId = _.find(ds.data(), {Title: 'Approved'});
	
	                            cmApp.datasource('Expenses', false).done(function (ds) {
	                                if (ds === null) {
	                                    console.log('Expenses datasource not found');
	                                } else {
	                                    var filter = '{"logic":"and","filters":[{"field":"PlannedAmount","operator":"ne","value":"0"}]}';
	                                    ds.filter(JSON.parse(filter));
	
	                                    ds.read().then(function () {
	                                        if (ds.data().length >= 1) {
	                                            $.each(ds.data(), function(i, v) {
	                                                self.expenseItems.push({
	                                                    PlannedAmount: v.PlannedAmount,
	                                                    projectId: v.Project.ItemId
	                                                });
	                                            });
	
	                                            cmApp.datasource('Projects', false).done(function (ds) {
	                                                if (ds === null) {
	                                                    console.log('Projects datasource not found');
	                                                } else {
	                                                    var filter = '{"logic":"or","filters":[{"field":"Category%2FItemId","operator":"eq","value":"' + self.activeId.Id + '"},{"field":"Category%2FItemId","operator":"eq","value":"' + self.approvedId.Id + '"},{"field":"Category%2FItemId","operator":"eq","value":"' + self.submittedId.Id + '"}]}';
	                                                    ds.filter(JSON.parse(filter));
	
	                                                    ds.read().then(function () {
	                                                        if (ds.data().length >= 1) {
	                                                            self.ds = ds;
	                                                            var budget = 0;
	                                                            var budgetAdjustment = 0;
	                                                            $.each(ds.data(), function(i, v) {
	                                                                var plannedExpenses = 0;
	                                                                var projectExpenseItems = _.filter(self.expenseItems, {projectId: v.Id});
	                                                                $.each(projectExpenseItems, function(x, y) {
	                                                                    plannedExpenses += y.PlannedAmount;
	                                                                });
	                                                                if (v.BudgetAdjustment === null) {
	                                                                    budgetAdjustment = 0;
	                                                                } else {
	                                                                    budgetAdjustment = v.BudgetAdjustment;
	                                                                }
																	/*VZG Change*/
																	budget = v.ProposedBudget;
	                                                                self.budgetItems.push({
	                                                                    Project: v.Title,
	                                                                    Id: v.Id,
	                                                                    Category: v.Category.Title,
	                                                                    ApprovedBudget: v.ApprovedBudget,
	                                                                    ProposedBudget: v.ProposedBudget,
	                                                                    displayBudget: budget,
	                                                                    plannedExpenses: plannedExpenses,
	                                                                    remainingBudget: budget - plannedExpenses + budgetAdjustment,
	                                                                    budgetAdjustment: budgetAdjustment,
	                                                                    include: true
	                                                                });
	                                                            });
	
	                                                            $("#budgetGrid").data("kendoGrid").dataSource.data(self.budgetItems);
	
	                                                        } else {
	                                                            console.log('No data is returned');
	                                                        }
	                                                    });
	                                                }
	                                            });
	
	                                        } else {
	                                            console.log('No data is returned');
	                                        }
	                                    });
	                                }
	                            });
	                        } else {
	                            console.log('No data is returned');
	                        }
	                    });
	                }
	            });
	            cmApp.unblockUI();
	        };
	
	        self.loadBudgetViewer();
	        cmApp.unblockUI();
	
	    });
	
	}
	
	$.extend(true, BudgetViewer.prototype, {
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
	    return new BudgetViewer(params);
	}
	
	module.exports = {
	    viewModel: {
	        createViewModel: createViewModel
	    },
	    template: template
	};


/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "<style>\r\n    .parentWrapper {\r\n        overflow: auto;\r\n    }\r\n    #child1 {\r\n        overflow:auto;\r\n    }\r\n    @media screen and (max-width: 400px) {\r\n        #child1 {\r\n            float: none;\r\n            margin-right:0;\r\n            width:auto;\r\n            border:0;\r\n        }\r\n    }\r\n</style>\r\n<div class=\"parentWrapper\"><div class=\"child1\" id=\"budgetGrid\"></div></div>"

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var _ = cc.lodash,
	    template = __webpack_require__(17),
	    fn = cc.fn;
	
	//    $.getScript( "/libs/anychart/7.8.0/anychart_bundle.min.js", function( data, textStatus, jqxhr ) {
	// });
	/**
	 * @summary Portfolio Overview component
	 * @desc Portfolio Overview component
	 * <br />
	 * Creates Portfolio Overview
	 * @namespace
	 * @example <caption>Portfolio Overview Description</caption>
	 * // Extension JS
	 * // Boilerplate Extension JS code works
	 * //
	 * // Extension HTML
	 * // <cn-cm-project-scorecard></cn-cm-project-scorecard>
	 */
	function ProjectScorecard(params) {
	    var self = this;
	    self.ready = ko.observable(false);
	    self.projects = ko.observableArray();
	    self.projectDetail = ko.observable();
	    self.projectDetailLoaded = ko.observable(false);
	    self.kpiStatus = null;
	    self.kpiStatusDfer = $.Deferred();
	    self.showDetail = function () {
	        self.projectDetail(this);
	        self.projectDetailLoaded(true);
	    };
	    $.when(cmApp.ready).done(function () {
	        //    self.params = params.chart || params || new cnComponents.ViewBoundChartParams();
	        // Set up ajax defaults
	        $.ajaxSetup({
	            method: "GET",
	            contentType: 'application/json',
	            headers: {
	                Accept: 'application/json,odata.metadata=minimal',
	                AppId: cmApp.getAppId('Data')
	            },
	            cache: false
	        });
	
	        self.availableDataSources = cmApp.availableDataSources;
	        var projectsList = _.find(cmApp.availableDataSources, {Title: 'Projects'}); // Get the list details
	        self.selectedProject = cmApp.selectedProject;
	        self.projectsInPortfolio = cmApp.projectsInPortfolio;
	
	        self.colorIndicators = {};
	        self.colorIndicators.dfer = $.Deferred();
	        self.colorIndicators.ds = _.find(cmApp.availableDataSources, {Title: 'Color Indicators'}); // Get the list details
	        self.colorIndicators.setDs = function(){
	            var ds = _.find(cmApp.availableDataSources, {
	                Title : 'Color Indicators',
	                CrossAppAccessLevel : 'Viewer'
	            });
	            var connId = ds.ConnectionId;
	            var listId = ds.Id;
	
	            cc.api.getConnectionListModelById(connId, listId).then(function (model) {
	                var listItemDS = cc.api.getListItemDataSourceById(listId, {
	                    schema : {
	                        model : model.listModel
	                    },
	                    ccModel : model
	                }, connId);
	
	                self.colorIndicators.ds = listItemDS;
	                self.colorIndicators.ds.read().then(function(){
	                    self.colorIndicators.dfer.resolve(self.colorIndicators.ds.data());
	                });
	            });
	        };
	        self.projectKpiStatus = {};
	        self.projectKpiStatus.dfer = $.Deferred();
	        self.projectKpiStatus.ds = _.find(cmApp.availableDataSources, {Title: 'Project KPI Status'}); // Get the list details
	        self.projectKpiStatus.setDs = function(){
	            var ds = _.find(cmApp.availableDataSources, {
	                Title : 'Project KPI Status',
	                CrossAppAccessLevel : 'Viewer'
	            });
	            var connId = ds.ConnectionId;
	            var listId = ds.Id;
	
	            cc.api.getConnectionListModelById(connId, listId).then(function (model) {
	                var listItemDS = cc.api.getListItemDataSourceById(listId, {
	                    schema : {
	                        model : model.listModel
	                    },
	                    ccModel : model
	                }, connId);
	
	                self.projectKpiStatus.ds = listItemDS;
	                self.projectKpiStatus.ds.read().then(function(){
	                    self.projectKpiStatus.dfer.resolve(self.projectKpiStatus.ds.data());
	                });
	            });
	        };
	        self.projectKpiStatus.setDs();
	        self.colorIndicators.setDs();
	
	        $.when(self.colorIndicators.dfer, self.projectKpiStatus.dfer).done(function (colorsInd, kpiStatus) {
	            $.each(colorsInd, function(index, ci){
	                cnc.fn.flattenListObjects(ci);
	            });
	            $.each(kpiStatus, function(index, rs){
	                rs._colorIndicator = _.find(colorsInd, {Id: rs.ColorIndicator.ItemId});
	                cnc.fn.flattenListObjects(rs);
	            });
	            self.kpiStatus = kpiStatus;
	            self.colorRed = _.find(kpiStatus, {Title: 'Red'}).__colorIndicatorHexColorCode;
	            self.colorYellow = _.find(kpiStatus, {Title: 'Yellow'}).__colorIndicatorHexColorCode;
	            self.colorGreen = _.find(kpiStatus, {Title: 'Green'}).__colorIndicatorHexColorCode;
	            self.kpiStatusDfer.resolve(self.kpiStatus);
	        });
	
	        self.loadProjectScorecard = function () {
	            self.selectedProject = cmApp.selectedProject;
	            self.projectsInPortfolio = cmApp.projectsInPortfolio;
	            self.projectsInPortfolio = cmApp.projectsInPortfolio;
	            if(cmApp.thisApp == 'Portfolios' && self.projectsInPortfolio.length === 0){
	                return;
	            }
	            cmApp.blockUI();
	            self.taskStatusDfer = $.Deferred();
	            self.impactDfer = $.Deferred();
	            self.probabilityDfer = $.Deferred();
	            self.riskTypesDfer = $.Deferred();
	            self.issuesRedDfer = $.Deferred();
	            self.issuesYellowDfer = $.Deferred();
	            self.issuesGreenDfer = $.Deferred();
	            self.risksDfer = $.Deferred();
	            self.tasksOver60Dfer = $.Deferred();
	            self.tasks30to60Dfer = $.Deferred();
	            self.tasksLt30Dfer = $.Deferred();
	            self.projectsDfer = $.Deferred();
	            self.expensesPlannedDfer = $.Deferred();
	            self.expensesActualDfer = $.Deferred();
	            self.tasksNotStartedDfer = $.Deferred();
	            self.tasksInProgressDfer = $.Deferred();
	            self.selectedProject = cmApp.selectedProject;
	            self.projectsInPortfolio = cmApp.projectsInPortfolio;
	            var projectsList = _.find(self.availableDataSources, {Title: 'Projects'}); // Get the list details
	            var projectFilter = null;
	            var projectRelationFilter = null;
	            var scheduleKpiFilter = null;
	            var lateTasksFilter = null;
	            var healthKpiFilter = null;
	            var expensesFilter = null;
	            if (cmApp.thisApp == 'Projects') {
	                projectFilter = '{"logic":"or","filters":[{"field":"Id","operator":"eq","value":"' + cmApp.selectedProject + '"}]}';
	                projectRelationFilter = '{"logic":"or","filters":[{"field":"Project/ItemId","operator":"eq","value":"' + cmApp.selectedProject + '"}]}';
	                scheduleKpiFilter = JSON.parse('{"logic":"and","filters":[' +
	                    '{"field":"Project/ItemId","operator":"eq","value":"' + self.selectedProject + '",' + '"Filter":null},' +
	                    '{"field":"EndDate","operator":"lte","value":"' + moment().startOf('day').toISOString() + '","Filter":null},' +
	                    '{"field":"TaskStatus/ItemId","operator":"eq","value":"","Filter":null}' +
	                    ']}');
	                lateTasksFilter = JSON.parse('{"logic":"and","filters":[' +
	                    '{"field":"Project/ItemId","operator":"eq","value":"' + self.selectedProject + '",' + '"Filter":null},' +
	                    '{"field":"EndDate","operator":"lte","value":"","Filter":null},' +
	                    '{"field":"EndDate","operator":"gt","value":"","Filter":null},' +
	                    '{"field":"TaskStatus/ItemId","operator":"neq","value":"","Filter":null},' +
	                    '{"field":"SummaryTask","operator":"neq","value":true,"Filter":null},' +
	                    '{"field":"TopLevel","operator":"neq","value":true,"Filter":null}' +
	                    ']}');
	                healthKpiFilter = JSON.parse('{"logic":"and","filters":[' +
	                    '{"field":"Project/ItemId","operator":"eq","value":"' + self.selectedProject + '",' + '"Filter":null},' +
	                    '{"field":"RiskType/ItemId","operator":"eq","value":"","Filter":null},' +
	                    '{"field":"Impact/ItemId","operator":"eq","value":"","Filter":null}' +
	                    ']}');
	                expensesFilter = JSON.parse('{"logic":"and","filters":[{"field":"Project/ItemId","operator":"eq","value":"' + self.selectedProject + '","Filter":null}]}');
	            }
	            if (cmApp.thisApp == 'Portfolios') {
	                if (self.projectsInPortfolio.length == 1) {
	                    projectFilter = '{"logic":"or","filters":[{"field":"Id","operator":"eq","value":"' + self.projectsInPortfolio[0] + '"}]}';
	                    projectRelationFilter = '{"logic":"or","filters":[{"field":"Project/ItemId","operator":"eq","value":"' + self.projectsInPortfolio[0] + '"}]}';
	                    scheduleKpiFilter = JSON.parse('{"logic":"and","filters":[' +
	                        '{"field":"Project/ItemId","operator":"eq","value":"' + self.projectsInPortfolio[0] + '",' + '"Filter":null},' +
	                        '{"field":"EndDate","operator":"lte","value":"' + moment().startOf('day').toISOString() + '","Filter":null},' +
	                        '{"field":"TaskStatus/ItemId","operator":"eq","value":"","Filter":null}' +
	                        ']}');
	                    lateTasksFilter = JSON.parse('{"logic":"and","filters":[' +
	                        '{"field":"Project/ItemId","operator":"eq","value":"' + self.projectsInPortfolio[0] + '",' + '"Filter":null},' +
	                        '{"field":"EndDate","operator":"lte","value":"","Filter":null},' +
	                        '{"field":"EndDate","operator":"gt","value":"","Filter":null},' +
	                        '{"field":"TaskStatus/ItemId","operator":"neq","value":"","Filter":null},' +
	                        '{"field":"SummaryTask","operator":"neq","value":true,"Filter":null},' +
	                        '{"field":"TopLevel","operator":"neq","value":true,"Filter":null}' +
	                        ']}');
	                    healthKpiFilter = JSON.parse('{"logic":"and","filters":[' +
	                        '{"field":"Project/ItemId","operator":"eq","value":"' + self.projectsInPortfolio[0] + '",' + '"Filter":null},' +
	                        '{"field":"RiskType/ItemId","operator":"eq","value":"","Filter":null},' +
	                        '{"field":"Impact/ItemId","operator":"eq","value":"","Filter":null}' +
	                        ']}');
	                    expensesFilter = JSON.parse('{"logic":"and","filters":[{"field":"Project/ItemId","operator":"eq","value":"' + self.projectsInPortfolio[0] + '","Filter":null}]}');
	                } else {
	                    self.projectsInPortfolio = cmApp.projectsInPortfolio;
	                    projectFilter = '{"logic":"or","filters":[';
	                    $.each(self.projectsInPortfolio, function (index, id) {
	                        projectFilter += '{"field":"Id","operator":"eq","value":"' + id + '"},';
	                    });
	                    projectFilter = projectFilter.substring(0, projectFilter.length - 1) + ']}';
	
	                    projectFilterArray = [];
	                    projectRelationFilter = '{"logic":"or","filters":[';
	                    $.each(self.projectsInPortfolio, function (index, id) {
	                        projectRelationFilter += '{"field":"Project/ItemId","operator":"eq","value":"' + id + '"},';
	                    });
	                    projectRelationFilter = projectRelationFilter.substring(0, projectRelationFilter.length - 1) + ']}';
	
	                    scheduleKpiFilter = JSON.parse('{"logic":"and","filters":[{"logic":"or","filters":[]},' +
	                        '{"field":"EndDate","operator":"lte","value":"' + moment().startOf('day').toISOString() + '","Filter":null},' +
	                        '{"field":"TaskStatus/ItemId","operator":"eq","value":"","Filter":null}' +
	                        ']}');
	                    lateTasksFilter = JSON.parse('{"logic":"and","filters":[{"logic":"or","filters":[]},' +
	                        '{"field":"EndDate","operator":"lte","value":"","Filter":null},' +
	                        '{"field":"EndDate","operator":"gt","value":"","Filter":null},' +
	                        '{"field":"TaskStatus/ItemId","operator":"neq","value":"","Filter":null},' +
	                        '{"field":"SummaryTask","operator":"neq","value":true,"Filter":null},' +
	                        '{"field":"TopLevel","operator":"neq","value":true,"Filter":null}' +
	                        ']}');
	                    healthKpiFilter = JSON.parse('{"logic":"and","filters":[{"logic":"or","filters":[]},' +
	                        '{"field":"RiskType/ItemId","operator":"eq","value":"","Filter":null},' +
	                        '{"field":"Impact/ItemId","operator":"eq","value":"","Filter":null}' +
	                        ']}');
	                    expensesFilter = JSON.parse('{"logic":"and","filters":[{"logic":"or","filters":[]}]}');
	                    $.each(self.projectsInPortfolio, function (index, id) {
	                        scheduleKpiFilter.filters[0].filters.push({
	                            "field": "Project/ItemId",
	                            "operator": "eq",
	                            "value": id
	                        });
	                        lateTasksFilter.filters[0].filters.push({
	                            "field": "Project/ItemId",
	                            "operator": "eq",
	                            "value": id
	                        });
	                        expensesFilter.filters[0].filters.push({
	                            "field": "Project/ItemId",
	                            "operator": "eq",
	                            "value": id
	                        });
	                        healthKpiFilter.filters[0].filters.push({
	                            "field": "Project/ItemId",
	                            "operator": "eq",
	                            "value": id
	                        });
	                    });
	                }
	            }
	            self.projects.removeAll();
	            self.projectDetail(null);
	            self.projectDetailLoaded(false);
	
	
	            cmApp.datasource('Projects', false).done(function (ds) {
	                if (ds === null) {
	                    console.log('Projects datasource connection not found');
	                } else {
	                    ds.query({
	                        sort: { field: "Title", dir: "desc" },
	                        filter: JSON.parse(projectFilter)
	                    }).then(function () {
	                        if (ds.data().length >= 1) {
	                            $.each(ds.data(), function (index, item) {
	                                cnc.fn.flattenListObjects(item);
	                            });
	                            self.projectsDfer.resolve(ds.data());
	                        } else {
	                            console.log('No data is returned');
	                        }
	                    });
	                }
	            });
	
	            // Call to get Task Status Id values for Red and Yellow
	            cmApp.datasource('Task Status', false).done(function (ds) {
	                if (ds === null) {
	                    console.log('Task Status datasource connection not found');
	                } else {
	                    ds.query({
	                        sort: { field: "Title", dir: "desc" }
	                    }).then(function () {
	                        if (ds.data().length >= 1) {
	                            self.taskStatusDfer.resolve(ds.data());
	                        } else {
	                            console.log('No data is returned');
	                        }
	                    });
	                }
	            });
	
	            // Call to get Impact Id values
	            cmApp.datasource('Impact', false).done(function (ds) {
	                if (ds === null) {
	                    console.log('Impact datasource connection not found');
	                } else {
	                    ds.query({
	                        sort: { field: "Title", dir: "desc" }
	                    }).then(function () {
	                        if (ds.data().length >= 1) {
	                            self.impactDfer.resolve(ds.data());
	                        } else {
	                            console.log('No data is returned');
	                        }
	                    });
	                }
	            });
	
	            // Call to get Probability Id values
	            cmApp.datasource('Probability', false).done(function (ds) {
	                if (ds === null) {
	                    console.log('Probability datasource connection not found');
	                } else {
	                    ds.query({
	                        sort: { field: "Title", dir: "desc" }
	                    }).then(function () {
	                        if (ds.data().length >= 1) {
	                            self.probabilityDfer.resolve(ds.data());
	                        } else {
	                            console.log('No data is returned');
	                        }
	                    });
	                }
	            });
	
	
	            // Call to get Risk Type Id values for Issue
	            cmApp.datasource('Risk Types', false).done(function (ds) {
	                if (ds === null) {
	                    console.log('Risk Types datasource connection not found');
	                } else {
	                    ds.query({
	                        sort: { field: "Title", dir: "desc" }
	                    }).then(function () {
	                        if (ds.data().length >= 1) {
	                            self.riskTypesDfer.resolve(ds.data());
	                        } else {
	                            console.log('No data is returned');
	                        }
	                    });
	                }
	            });
	
	            // Aggregation call for Expense Planned
	            var aggPlanned = _.cloneDeep(expensesFilter);
	            var expenseList = _.find(cmApp.availableDataSources, {Title: 'Expenses'}); // Get the list details
	            aggPlanned = JSON.stringify(aggPlanned);
	            $.ajax({
	                url: window.location.origin + '/api/Aggregation',
	                type: 'POST',
	                data: '{"DataSource":1,"ConnectionId":"' + expenseList.ConnectionId + '","ListId":"' + expenseList.Id + '","SiteUri":"","Filter": ' +
	                aggPlanned + ',"Group":{"Field":"Project/ItemId","Aggregates":[{"AggregateField":"PlannedAmount","AggregateType":1}]}}',
	                success: function (data, xhr) {
	                    self.expensesPlannedDfer.resolve(data);
	                }
	            });
	            // Aggregation call for Expense Actual
	            var aggActual = _.cloneDeep(expensesFilter);
	            aggActual = JSON.stringify(aggActual);
	            $.ajax({
	                url: window.location.origin + '/api/Aggregation',
	                type: 'POST',
	                data: '{"DataSource":1,"ConnectionId":"' + expenseList.ConnectionId + '","ListId":"' + expenseList.Id + '","SiteUri":"","Filter": ' +
	                aggActual + ',"Group":{"Field":"Project/ItemId","Aggregates":[{"AggregateField":"ActualAmount","AggregateType":1}]}}',
	                success: function (data, xhr) {
	                    self.expensesActualDfer.resolve(data);
	                }
	            });
	            // Aggregation call for Issues Red
	            $.when(self.riskTypesDfer, self.impactDfer).done(function (riskTypes, impacts) {
	                var agg = _.cloneDeep(healthKpiFilter);
	                agg.filters[1].value = _.find(riskTypes, {Title: 'Issue'}).Id;
	                agg.filters[2].value = _.find(impacts, {Title: 'Extreme'}).Id;
	                var risksList = _.find(cmApp.availableDataSources, {Title: 'Risks'}); // Get the list details
	                agg = JSON.stringify(agg);
	                $.ajax({
	                    url: window.location.origin + '/api/Aggregation',
	                    type: 'POST',
	                    data: '{"DataSource":1,"ConnectionId":"' + risksList.ConnectionId + '","ListId":"' + risksList.Id + '","SiteUri":"","Filter": ' +
	                    agg + ',"Group":{"Field":"Project/ItemId","Aggregates":[{"AggregateField":"Project/ItemId","AggregateType":0}]}}',
	                    success: function (data, xhr) {
	                        self.issuesRedDfer.resolve(data);
	                    }
	                });
	            });
	
	            // Aggregation call for Issues Yellow
	            $.when(self.riskTypesDfer, self.impactDfer).done(function (riskTypes, impacts) {
	                var agg = _.cloneDeep(healthKpiFilter);
	                agg.filters[1].value = _.find(riskTypes, {Title: 'Issue'}).Id;
	                agg.filters[2].value = _.find(impacts, {Title: 'Major'}).Id;
	                var risksList = _.find(cmApp.availableDataSources, {Title: 'Risks'}); // Get the list details
	                agg = JSON.stringify(agg);
	                $.ajax({
	                    url: window.location.origin + '/api/Aggregation',
	                    type: 'POST',
	                    data: '{"DataSource":1,"ConnectionId":"' + risksList.ConnectionId + '","ListId":"' + risksList.Id + '","SiteUri":"","Filter": ' +
	                    agg + ',"Group":{"Field":"Project/ItemId","Aggregates":[{"AggregateField":"Project/ItemId","AggregateType":0}]}}',
	                    success: function (data, xhr) {
	                        self.issuesYellowDfer.resolve(data);
	                    }
	                });
	            });
	            // Aggregation call for Issues Green
	            $.when(self.riskTypesDfer, self.impactDfer).done(function (riskTypes, impacts) {
	                var agg = _.cloneDeep(healthKpiFilter);
	                agg.filters[1].value = _.find(riskTypes, {Title: 'Issue'}).Id;
	                agg.filters[2] = {logic: 'or', filters: [agg.filters[2], agg.filters[2], agg.filters[2]]}; // Make Impact Filter complex
	                agg.filters[2].filters[0].value = _.find(impacts, {Title: 'Moderate'}).Id;
	                agg.filters[2].filters[1].value = _.find(impacts, {Title: 'Minor'}).Id;
	                agg.filters[2].filters[2].value = _.find(impacts, {Title: 'Insignificant'}).Id;
	                var risksList = _.find(cmApp.availableDataSources, {Title: 'Risks'}); // Get the list details
	                agg = JSON.stringify(agg);
	                $.ajax({
	                    url: window.location.origin + '/api/Aggregation',
	                    type: 'POST',
	                    headers: {
	                        Debug: 'Green Issues'
	                    },
	                    data: '{"DataSource":1,"ConnectionId":"' + risksList.ConnectionId + '","ListId":"' + risksList.Id + '","SiteUri":"","Filter": ' +
	                    agg + ',"Group":{"Field":"Project/ItemId","Aggregates":[{"AggregateField":"Project/ItemId","AggregateType":0}]}}',
	                    success: function (data, xhr) {
	                        self.issuesGreenDfer.resolve(data);
	                    }
	                });
	            });
	            // Data call for Risks
	            $.when(self.riskTypesDfer, self.impactDfer, self.probabilityDfer).done(function (riskTypes, impacts, probabilities) {
	                cmApp.datasource('Risks', true).done(function (ds) {
	                    if (ds === null) {
	                        console.log('Risks datasource connection not found');
	                    } else {
	                        ds.query({
	                            sort: { field: "Title", dir: "desc" },
	                            filter: JSON.parse(projectRelationFilter)
	                        }).then(function () {
	                            if (ds.data().length >= 1) {
	                                $.each(ds.data(), function (index, item) {
	                                    cnc.fn.flattenListObjects(item);
	                                });
	                                self.risksDfer.resolve(ds.data());
	                            } else {
	                                console.log('No data is returned');
	                            }
	                        });
	                    }
	                });
	            });
	
	
	            // Aggregation call for Tasks < 30 days Past Due
	            $.when(self.taskStatusDfer).done(function (taskStatus) {
	                var agg = _.cloneDeep(lateTasksFilter);
	                agg.filters[1].value = moment().startOf('day').toISOString();
	                agg.filters[2].value = moment().startOf('day').subtract(30, 'days').toISOString();
	                agg.filters[3].value = _.find(taskStatus, {Title: 'Completed'}).Id;
	                var taskList = _.find(cmApp.availableDataSources, {Title: 'Tasks'}); // Get the list details
	                agg = JSON.stringify(agg);
	                $.ajax({
	                    url: window.location.origin + '/api/Aggregation',
	                    type: 'POST',
	                    headers: {
	                        Debug: 'tasks less than 30'
	                    },
	
	                    data: '{"DataSource":1,"ConnectionId":"' + taskList.ConnectionId + '","ListId":"' + taskList.Id + '","SiteUri":"","Filter": ' +
	                    agg + ',"Group":{"Field":"Project/ItemId","Aggregates":[{"AggregateField":"Project/ItemId","AggregateType":0}]}}',
	                    success: function (data, xhr) {
	                        self.tasksLt30Dfer.resolve(data);
	                    }
	                });
	            });
	
	            // Aggregation call for Tasks 30 - 60 days Past Due
	            $.when(self.taskStatusDfer).done(function (taskStatus) {
	                var agg = _.cloneDeep(lateTasksFilter);
	                agg.filters[1].value = moment().startOf('day').subtract(30, 'days').toISOString();
	                agg.filters[2].value = moment().startOf('day').subtract(60, 'days').toISOString();
	                agg.filters[3].value = _.find(taskStatus, {Title: 'Completed'}).Id;
	                var taskList = _.find(cmApp.availableDataSources, {Title: 'Tasks'}); // Get the list details
	                agg = JSON.stringify(agg);
	                $.ajax({
	                    url: window.location.origin + '/api/Aggregation',
	                    type: 'POST',
	                    headers: {
	                        Debug: 'tasks less than 30'
	                    },
	
	                    data: '{"DataSource":1,"ConnectionId":"' + taskList.ConnectionId + '","ListId":"' + taskList.Id + '","SiteUri":"","Filter": ' +
	                    agg + ',"Group":{"Field":"Project/ItemId","Aggregates":[{"AggregateField":"Project/ItemId","AggregateType":0}]}}',
	                    success: function (data, xhr) {
	                        self.tasks30to60Dfer.resolve(data);
	                    }
	                });
	            });
	            // Aggregation call for Tasks > 60 days Past Due
	            $.when(self.taskStatusDfer).done(function (taskStatus) {
	                var agg = _.cloneDeep(lateTasksFilter);
	                agg.filters[1].value = moment().startOf('day').subtract(60, 'days').toISOString();
	                agg.filters[2].value = moment().startOf('day').subtract(10, 'years').toISOString();
	                agg.filters[3].value = _.find(taskStatus, {Title: 'Completed'}).Id;
	                var taskList = _.find(cmApp.availableDataSources, {Title: 'Tasks'}); // Get the list details
	                agg = JSON.stringify(agg);
	                $.ajax({
	                    url: window.location.origin + '/api/Aggregation',
	                    type: 'POST',
	                    headers: {
	                        Debug: 'tasks less than 30'
	                    },
	
	                    data: '{"DataSource":1,"ConnectionId":"' + taskList.ConnectionId + '","ListId":"' + taskList.Id + '","SiteUri":"","Filter": ' +
	                    agg + ',"Group":{"Field":"Project/ItemId","Aggregates":[{"AggregateField":"Project/ItemId","AggregateType":0}]}}',
	                    success: function (data, xhr) {
	                        self.tasksOver60Dfer.resolve(data);
	                    }
	                });
	            });
	
	            // Aggregation call for Schedule KPI Red
	            $.when(self.taskStatusDfer).done(function (taskStatus) {
	                var agg = _.cloneDeep(scheduleKpiFilter);
	                agg.filters[2].value = _.find(taskStatus, {Title: 'Not Started'}).Id;
	                var taskList = _.find(cmApp.availableDataSources, {Title: 'Tasks'}); // Get the list details
	                agg = JSON.stringify(agg);
	                $.ajax({
	                    url: window.location.origin + '/api/Aggregation',
	                    type: 'POST',
	                    data: '{"DataSource":1,"ConnectionId":"' + taskList.ConnectionId + '","ListId":"' + taskList.Id + '","SiteUri":"","Filter": ' +
	                    agg + ',"Group":{"Field":"Project/ItemId","Aggregates":[{"AggregateField":"Project/ItemId","AggregateType":0}]}}',
	                    success: function (data, xhr) {
	                        self.tasksNotStartedDfer.resolve(data);
	                    }
	                });
	            });
	            // Aggregation call for Schedule KPI Yellow
	            $.when(self.taskStatusDfer).done(function (taskStatus) {
	                var agg = _.cloneDeep(scheduleKpiFilter);
	                agg.filters[2].value = _.find(taskStatus, {Title: 'In Progress'}).Id;
	                var taskList = _.find(cmApp.availableDataSources, {Title: 'Tasks'}); // Get the list details
	                agg = JSON.stringify(agg);
	                $.ajax({
	                    url: window.location.origin + '/api/Aggregation',
	                    type: 'POST',
	                    data: '{"DataSource":1,"ConnectionId":"' + taskList.ConnectionId + '","ListId":"' + taskList.Id + '","SiteUri":"","Filter": ' +
	                    agg + ',"Group":{"Field":"Project/ItemId","Aggregates":[{"AggregateField":"Project/ItemId","AggregateType":0}]}}',
	                    success: function (data, xhr) {
	                        self.tasksInProgressDfer.resolve(data);
	                    }
	                });
	            });
	            $.when(self.projectsDfer,
	                self.tasksInProgressDfer,
	                self.tasksNotStartedDfer,
	                self.expensesPlannedDfer,
	                self.expensesActualDfer,
	                self.issuesRedDfer,
	                self.issuesYellowDfer,
	                self.issuesGreenDfer,
	                self.risksDfer,
	                self.impactDfer,
	                self.probabilityDfer,
	                self.tasksLt30Dfer,
	                self.tasks30to60Dfer,
	                self.tasksOver60Dfer,
	                self.kpiStatusDfer
	            ).done(function
	                (projects,
	                 inProgress,
	                 notStarted,
	                 expPlanned,
	                 expActual,
	                 issuesRed,
	                 issuesYellow,
	                 issuesGreen,
	                 risks,
	                 impacts,
	                 probabilities,
	                 tasksLt30,
	                 tasks30to60,
	                 tasksOver60,
	                 kpiStatus) {
	                for (var i = 0; i < projects.length; i++) {
	                    var project = projects[i];
	                    project._scheduleKpi = 'Green';
	                    project._scheduleKpiCount = 0;
	                    project._issuesRedCount = 0;
	                    project._issuesYellowCount = 0;
	                    project._issuesGreenCount = 0;
	                    project._risksRedCount = 0;
	                    project._risksYellowCount = 0;
	                    project._risksGreenCount = 0;
	                    project._tasksOver60Count = 0;
	                    project._tasks30to60Count = 0;
	                    project._tasksLt30Count = 0;
	                    project._expenseKpi = 'Green';
	                    project._expenseKpiPercentage = '';
	                    project._expensesPlannedAmount = 0;
	                    project._expensesActualAmount = 0;
	                    project._healthKpi = 'Green';
	                    project._healthKpiCount = '';
	                    project._overallKpi = 'Green';
	                    if (_.find(notStarted[0].Results, {Field: project.Id}) !== undefined) {
	                        project._scheduleKpi = 'Red';
	                        project._scheduleKpiCount = _.find(notStarted[0].Results, {Field: project.Id}).Value;
	                    } else if (_.find(inProgress[0].Results, {Field: project.Id}) !== undefined) {
	                        project._scheduleKpi = 'Yellow';
	                        project._scheduleKpiCount = _.find(inProgress[0].Results, {Field: project.Id}).Value;
	                    }
	                    if (_.find(issuesRed[0].Results, {Field: project.Id}) !== undefined) {
	                        project._issuesRedCount = _.find(issuesRed[0].Results, {Field: project.Id}).Value;
	                    }
	                    if (_.find(issuesYellow[0].Results, {Field: project.Id}) !== undefined) {
	                        project._issuesYellowCount = _.find(issuesYellow[0].Results, {Field: project.Id}).Value;
	                    }
	                    if (_.find(issuesGreen[0].Results, {Field: project.Id}) !== undefined) {
	                        project._issuesGreenCount = _.find(issuesGreen[0].Results, {Field: project.Id}).Value;
	                    }
	                    var includeInCount = [
	                        {Probability: 'Rare', Impact: 'Extreme', include: 'green'},
	                        {Probability: 'Rare', Impact: 'Major', include: 'green'},
	                        {Probability: 'Rare', Impact: 'Moderate', include: 'green'},
	                        {Probability: 'Rare', Impact: 'Minor', include: 'green'},
	                        {Probability: 'Rare', Impact: 'Insignificant', include: 'green'},
	                        {Probability: 'Unlikely', Impact: 'Moderate', include: 'green'},
	                        {Probability: 'Unlikely', Impact: 'Minor', include: 'green'},
	                        {Probability: 'Unlikely', Impact: 'Insignificant', include: 'green'},
	                        {Probability: 'Possible', Impact: 'Minor', include: 'green'},
	                        {Probability: 'Possible', Impact: 'Insignificant', include: 'green'},
	                        {Probability: 'Likely', Impact: 'Insignificant', include: 'green'},
	                        {Probability: 'Unlikely', Impact: 'Extreme', include: 'yellow'},
	                        {Probability: 'Unlikely', Impact: 'Major', include: 'yellow'},
	                        {Probability: 'Possible', Impact: 'Major', include: 'yellow'},
	                        {Probability: 'Possible', Impact: 'Moderate', include: 'yellow'},
	                        {Probability: 'Likely', Impact: 'Moderate', include: 'yellow'},
	                        {Probability: 'Likely', Impact: 'Minor', include: 'yellow'},
	                        {Probability: 'Almost Certain', Impact: 'Minor', include: 'yellow'},
	                        {Probability: 'Almost Certain', Impact: 'Insignificant', include: 'yellow'},
	                        {Probability: 'Possible', Impact: 'Extreme', include: 'red'},
	                        {Probability: 'Likely', Impact: 'Extreme', include: 'red'},
	                        {Probability: 'Likely', Impact: 'Major', include: 'red'},
	                        {Probability: 'Almost Certain', Impact: 'Extreme', include: 'red'},
	                        {Probability: 'Almost Certain', Impact: 'Major', include: 'red'},
	                        {Probability: 'Almost Certain', Impact: 'Moderate', include: 'red'}
	                    ];
	                    for (var j = 0; j < includeInCount.length; j++) {
	                        if (includeInCount[j].include == 'green') {
	                            project._risksGreenCount +=
	                                _.filter(risks, {
	                                    _ImpactItemId: _.find(impacts, {Title: includeInCount[j].Impact}).Id,
	                                    _ProbabilityItemId: _.find(probabilities, {Title: includeInCount[j].Probability}).Id,
	                                    _ProjectItemId: project.Id
	                                }).length;
	                        }
	                        if (includeInCount[j].include == 'yellow') {
	                            project._risksYellowCount +=
	                                _.filter(risks, {
	                                    _ImpactItemId: _.find(impacts, {Title: includeInCount[j].Impact}).Id,
	                                    _ProbabilityItemId: _.find(probabilities, {Title: includeInCount[j].Probability}).Id,
	                                    _ProjectItemId: project.Id
	                                }).length;
	                        }
	                        if (includeInCount[j].include == 'red') {
	                            project._risksRedCount +=
	                                _.filter(risks, {
	                                    _ImpactItemId: _.find(impacts, {Title: includeInCount[j].Impact}).Id,
	                                    _ProbabilityItemId: _.find(probabilities, {Title: includeInCount[j].Probability}).Id,
	                                    _ProjectItemId: project.Id
	                                }).length;
	                        }
	                    }
	                    if (_.find(tasksLt30[0].Results, {Field: project.Id}) !== undefined) {
	                        project._tasksLt30Count = _.find(tasksLt30[0].Results, {Field: project.Id}).Value;
	                    }
	                    if (_.find(tasks30to60[0].Results, {Field: project.Id}) !== undefined) {
	                        project._tasks30to60Count = _.find(tasks30to60[0].Results, {Field: project.Id}).Value;
	                    }
	                    if (_.find(tasksOver60[0].Results, {Field: project.Id}) !== undefined) {
	                        project._tasksOver60Count = _.find(tasksOver60[0].Results, {Field: project.Id}).Value;
	                    }
	                    if (_.find(issuesRed[0].Results, {Field: project.Id}) !== undefined) {
	                        project._healthKpi = 'Red';
	                        project._healthKpiCount = _.find(issuesRed[0].Results, {Field: project.Id}).Value;
	                    } else if (_.find(issuesYellow[0].Results, {Field: project.Id}) !== undefined) {
	                        project._healthKpi = 'Yellow';
	                        project._healthKpiCount = _.find(issuesYellow[0].Results, {Field: project.Id}).Value;
	                    }
	                    if(_.find(expActual[0].Results, {Field: project.Id}) !== undefined){
	                        project._expensesActualAmount = _.find(expActual[0].Results, {Field: project.Id}).Value;
	                    }
	                    if(_.find(expPlanned[0].Results, {Field: project.Id}) !== undefined){
	                        project._expensesPlannedAmount = _.find(expPlanned[0].Results, {Field: project.Id}).Value;
	                    }
	                    if (_.find(expPlanned[0].Results, {Field: project.Id}) !== undefined &&
	                        _.find(expActual[0].Results, {Field: project.Id}) !== undefined &&
	                        _.find(expPlanned[0].Results, {Field: project.Id}).Value !== 0) {
	                        var perc = 100 * _.find(expActual[0].Results, {Field: project.Id}).Value / _.find(expPlanned[0].Results, {Field: project.Id}).Value;
	                        if (perc > 100) {
	                            project._expenseKpi = 'Red';
	                        } else if (perc > 90) {
	                            project._expenseKpi = 'Yellow';
	                        }
	                        project._expenseKpiPercentage = parseInt(perc, 10);
	                    }
	                    if(project.CostKPI !== undefined){
	                        if (project.CostKPI !== undefined && (project.CostKPI.Title == 'Yellow' || project.ScheduleKPI.Title == 'Yellow' || project.PerformanceKPI.Title == 'Yellow')) {
	                            project._overallKpi = 'Yellow';
	                        }
	                        if (project.CostKPI !== undefined && (project.CostKPI.Title == 'Red' || project.ScheduleKPI.Title == 'Red' || project.PerformanceKPI.Title == 'Red')) {
	                            project._overallKpi = 'Red';
	                        }
	                    }
	                    project.CostKPI._HexColorCode = _.find(kpiStatus, {Id: project.CostKPI.ItemId}).__colorIndicatorHexColorCode;
	                    project.ScheduleKPI._HexColorCode = _.find(kpiStatus, {Id: project.ScheduleKPI.ItemId}).__colorIndicatorHexColorCode;
	                    project.PerformanceKPI._HexColorCode = _.find(kpiStatus, {Id: project.PerformanceKPI.ItemId}).__colorIndicatorHexColorCode;
	                    var color;
	                    color = project._expenseKpi;
	                    project._expenseKpi._HexColorCode = _.find(kpiStatus, {Title: color}).__colorIndicatorHexColorCode;
	                    color = project._scheduleKpi;
	                    project._scheduleKpi._HexColorCode = _.find(kpiStatus, {Title: color}).__colorIndicatorHexColorCode;
	                    color = project._healthKpi;
	                    project._healthKpi._HexColorCode = _.find(kpiStatus, {Title: color}).__colorIndicatorHexColorCode;
	                    self.projects.push(project);
	                }
	                if (self.projects().length == 1) {
	                    self.projectDetail(self.projects()[0]);
	                    self.projectDetailLoaded(true);
	                }
	                cmApp.unblockUI();
	            });
	
	        };
	        self.loadProjectScorecard();
	        if(cmApp.thisApp == 'Projects'){
	            cc.events.on('cmAppNewProjectSelected', function (evt) {
	                self.loadProjectScorecard();
	            }, self);
	        }
	        if(cmApp.thisApp == 'Portfolios'){
	            cc.events.on('cmAppNewPortfolioSelected', function (evt) {
	                self.loadProjectScorecard();
	            }, self);
	        }
	
	
	    });
	}
	
	$.extend(true, ProjectScorecard.prototype, {
	    dispose: function () {
	        cc.events.off('cmAppNewProjectSelected');
	        cc.events.off('cmAppNewPortfolioSelected');
	    },
	
	    initSubscriptions: function () {
	        var self = this;
	
	    },
	
	    initComponent: function (view) {
	//        this.campusPicker = $('.campusPicker', view).kendoDropDownList().data("kendoDropDownList");
	    }
	});
	
	function createViewModel(params, componentInfo) {
	    return new ProjectScorecard(params);
	}
	
	module.exports = {
	    viewModel: {
	        createViewModel: createViewModel
	    },
	    template: template
	};


/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "<style>\r\n    .kpi_Red .indicator, .overallKpi_Red {\r\n        /*background-color: red;*/\r\n    }\r\n\r\n    .kpi_Yellow .indicator, .overallKpi_Yellow {\r\n        /*background-color: yellow;*/\r\n    }\r\n\r\n    .kpi_Green .indicator, .overallKpi_Green {\r\n        /*background-color: green;*/\r\n        color: white;\r\n    }\r\n\r\n    .indicator {\r\n        border-style: solid;\r\n        border-color: black;\r\n        border-width: thin;\r\n        padding-right: 5px;\r\n        padding-left: 5px;\r\n        font-weight: bold;\r\n    }\r\n\r\n    .overallColorbar {\r\n        width: 100%;\r\n    }\r\n</style>\r\n<div class=\"container-fluid\">\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\" data-bind=\"foreach: $component.projects\">\r\n                    <!-- ko if: $index() % 2 == 0 -->\r\n                    <div class=\"\" data-bind=\"template: { name: 'summaryCard', data: $data }\"></div>\r\n                    <!-- /ko -->\r\n                </div>\r\n                <div class=\"col-md-6\" data-bind=\"foreach: $component.projects\">\r\n                    <!-- ko if: $index() % 2 == 1 -->\r\n                    <div class=\"\" data-bind=\"template: { name: 'summaryCard', data: $data }\"></div>\r\n                    <!-- /ko -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <!-- ko if: $component.projectDetailLoaded -->\r\n            <!-- ko with: $component.projectDetail() -->\r\n                            <div class=\"panel panel-primary\">\r\n                <div class=\"panel-heading\">\r\n                    <h3 class=\"panel-title\" data-bind=\"text: Title + ' details'\">\r\n                    </h3>\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4\">\r\n                            <!-- ko if: typeof CostKPI != 'undefined' && typeof CostKPI.Title != 'undefined' -->\r\n                            <div data-bind=\"css: 'kpi_' + CostKPI.Title\">\r\n                                Cost:\r\n                                <span data-bind=\"html: CostKPI.Title\"></span>\r\n                                <span class=\"indicator\" data-bind=\"text: CostKPI.Title.substr(0,1), style:{'background-color': CostKPI._HexColorCode}\">&nbsp;</span>\r\n                            </div>\r\n                            <!-- /ko -->\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <!-- ko if: typeof ScheduleKPI != 'undefined' && typeof ScheduleKPI.Title != 'undefined' -->\r\n                            <div data-bind=\"css: 'kpi_' + ScheduleKPI.Title\">\r\n                                Schedule:\r\n                                <span data-bind=\"html: ScheduleKPI.Title\"></span>\r\n                                <span class=\"indicator\" data-bind=\"text: ScheduleKPI.Title.substr(0,1), style:{'background-color': ScheduleKPI._HexColorCode}\">&nbsp;</span>\r\n                            </div>\r\n                            <!-- /ko -->\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <!-- ko if: typeof PerformanceKPI != 'undefined' && typeof PerformanceKPI.Title != 'undefined' -->\r\n                            <div data-bind=\"css: 'kpi_' + PerformanceKPI.Title\">\r\n                                Performance:\r\n                                <span data-bind=\"html: PerformanceKPI.Title\"></span>\r\n                                <span class=\"indicator\" data-bind=\"text: PerformanceKPI.Title.substr(0,1), style:{'background-color': PerformanceKPI._HexColorCode}\">&nbsp;</span>\r\n                            </div>\r\n                            <!-- /ko -->\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"panel panel-default\">\r\n                                <div class=\"panel-heading\">\r\n                                    <h3 class=\"panel-title\">\r\n                                        Tasks\r\n                                    </h3>\r\n                                </div>\r\n                                <div class=\"panel-body\">\r\n                                    <ul class=\"fa-ul\">\r\n                                        <li>\r\n                                            <i class=\"fa-li fa fa-square-o\"></i>\r\n                                            <div data-bind=\"css: 'kpi_Red'\">\r\n                                                <span class=\"indicator\" data-bind=\"text: _tasksLt30Count, style:{'background-color': $component.colorRed}\">&nbsp;</span>\r\n                                                &lt; 30 Days Past Due:\r\n                                            </div>\r\n                                        </li>\r\n                                        <li>\r\n                                            <i class=\"fa-li fa fa-square-o\"></i>\r\n                                            <div data-bind=\"css: 'kpi_Red'\">\r\n                                                <span class=\"indicator\"\r\n                                                      data-bind=\"text: _tasks30to60Count, style:{'background-color': $component.colorRed}\">&nbsp;</span>\r\n                                                31 - 60 Days Past Due:\r\n                                            </div>\r\n                                        </li>\r\n                                        <li>\r\n                                            <i class=\"fa-li fa fa-square-o\"></i>\r\n                                            <div data-bind=\"css: 'kpi_Red'\">\r\n                                                <span class=\"indicator\"\r\n                                                      data-bind=\"text: _tasksOver60Count, style:{'background-color': $component.colorRed}\">&nbsp;</span>\r\n                                                &gt; 60 Days Past Due:\r\n                                            </div>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"panel panel-default\">\r\n                                <div class=\"panel-heading\">\r\n                                    <h3 class=\"panel-title\">\r\n                                        Expenses\r\n                                    </h3>\r\n                                </div>\r\n                                <div class=\"panel-body\">\r\n                                    <ul class=\"fa-ul\">\r\n                                        <li>\r\n                                            <i class=\"fa-li fa fa-square-o\"></i>\r\n                                            Planned:\r\n                                            <span data-bind=\"text: '$' + _expensesPlannedAmount.toFixed(2)\"></span>\r\n                                        </li>\r\n                                        <li>\r\n                                            <i class=\"fa-li fa fa-square-o\"></i>\r\n                                            Actual to Date:\r\n                                            <span data-bind=\"text: '$' +  _expensesActualAmount.toFixed(2)\"></span>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"panel panel-default\">\r\n                                <div class=\"panel-heading\">\r\n                                    <h3 class=\"panel-title\">\r\n                                        Risks\r\n                                    </h3>\r\n                                </div>\r\n                                <div class=\"panel-body\">\r\n                                    <ul class=\"fa-ul\">\r\n                                        <li>\r\n                                            <i class=\"fa-li fa fa-square-o\"></i>\r\n                                            <div data-bind=\"css: 'kpi_Red'\">\r\n                                                <span class=\"indicator\" data-bind=\"text: _risksRedCount, style:{'background-color': $component.colorRed}\">&nbsp;</span>\r\n                                                Status Red Risks\r\n                                            </div>\r\n                                        </li>\r\n                                        <li>\r\n                                            <i class=\"fa-li fa fa-square-o\"></i>\r\n                                            <div data-bind=\"css: 'kpi_Yellow'\">\r\n                                                <span class=\"indicator\"\r\n                                                      data-bind=\"text: _risksYellowCount, style:{'background-color': $component.colorYellow}\">&nbsp;</span>\r\n                                                Status Yellow Risks\r\n                                            </div>\r\n                                        </li>\r\n                                        <li>\r\n                                            <i class=\"fa-li fa fa-square-o\"></i>\r\n                                            <div data-bind=\"css: 'kpi_Green'\">\r\n                                                <span class=\"indicator\" data-bind=\"text: _risksGreenCount, style:{'background-color': $component.colorGreen}\">&nbsp;</span>\r\n                                                Status Green Risks\r\n                                            </div>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"panel panel-default\">\r\n                                <div class=\"panel-heading\">\r\n                                    <h3 class=\"panel-title\">\r\n                                        Issues\r\n                                    </h3>\r\n                                </div>\r\n                                <div class=\"panel-body\">\r\n                                    <ul class=\"fa-ul\">\r\n                                        <li>\r\n                                            <i class=\"fa-li fa fa-square-o\"></i>\r\n                                            <div data-bind=\"css: 'kpi_Red'\">\r\n                                                <span class=\"indicator\" data-bind=\"text: _issuesRedCount, style:{'background-color': $component.colorRed}\">&nbsp;</span>\r\n                                                Status Red Issues\r\n                                            </div>\r\n                                        </li>\r\n                                        <li>\r\n                                            <i class=\"fa-li fa fa-square-o\"></i>\r\n                                            <div data-bind=\"css: 'kpi_Yellow'\">\r\n                                                <span class=\"indicator\"\r\n                                                      data-bind=\"text: _issuesYellowCount, style:{'background-color': $component.colorYellow}\">&nbsp;</span>\r\n                                                Status Yellow Issues\r\n                                            </div>\r\n                                        </li>\r\n                                        <li>\r\n                                            <i class=\"fa-li fa fa-square-o\"></i>\r\n                                            <div data-bind=\"css: 'kpi_Green'\">\r\n                                                <span class=\"indicator\"\r\n                                                      data-bind=\"text: _issuesGreenCount, style:{'background-color': $component.colorGreen}\">&nbsp;</span>\r\n                                                Status Green Issues\r\n                                            </div>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"panel-footer overallColorbar\" data-bind=\"css: 'overallKpi_' + _overallKpi\">\r\n                    &nbsp;\r\n                </div>\r\n            </div>\r\n            <!-- /ko -->\r\n            <!-- /ko -->\r\n        </div>\r\n    </div>\r\n</div>\r\n<script type=\"text/html\" id=\"summaryCard\">\r\n    <!-- ko if: $component.projects().length > 0 -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\" data-bind=\" click: $component.showDetail\">\r\n            <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                    <h3 class=\"panel-title\" data-bind=\"text: Title\">\r\n                    </h3>\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                    <div class=\"col-md-4\">\r\n                        <!-- ko if: typeof CostKPI != 'undefined' && typeof CostKPI.Title != 'undefined' -->\r\n                        <div data-bind=\"css: 'kpi_' + CostKPI.Title\">\r\n                            Cost:\r\n                            <span data-bind=\"html: CostKPI.Title\"></span>\r\n                            <span class=\"indicator\" data-bind=\"text: CostKPI.Title.substr(0,1), style:{'background-color': CostKPI._HexColorCode}\">&nbsp;</span>\r\n                        </div>\r\n                        <!-- /ko -->\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <!-- ko if: typeof ScheduleKPI != 'undefined' && typeof ScheduleKPI.Title != 'undefined' -->\r\n                        <div data-bind=\"css: 'kpi_' + ScheduleKPI.Title\">\r\n                            Schedule:\r\n                            <span data-bind=\"html: ScheduleKPI.Title\"></span>\r\n                            <span class=\"indicator\" data-bind=\"text: ScheduleKPI.Title.substr(0,1), style:{'background-color': ScheduleKPI._HexColorCode}\">&nbsp;</span>\r\n                        </div>\r\n                        <!-- /ko -->\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <!-- ko if: typeof PerformanceKPI != 'undefined' && typeof PerformanceKPI.Title != 'undefined' -->\r\n                        <div data-bind=\"css: 'kpi_' + PerformanceKPI.Title\">\r\n                            Performance:\r\n                            <span data-bind=\"html: PerformanceKPI.Title\"></span>\r\n                            <span class=\"indicator\" data-bind=\"text: PerformanceKPI.Title.substr(0,1), style:{'background-color': PerformanceKPI._HexColorCode}\">&nbsp;</span>\r\n                        </div>\r\n                        <!-- /ko -->\r\n                    </div>\r\n                </div>\r\n                <div class=\"panel-footer overallColorbar\" data-bind=\"css: 'overallKpi_' + _overallKpi\">\r\n                    &nbsp;\r\n                </div>\r\n            </div>\r\n\r\n\r\n        </div>\r\n    </div>\r\n    <!-- /ko -->\r\n</script>\r\n<table style=\"display: none\" class=\"table\">\r\n    <thead>\r\n    <tr>\r\n        <th>Project</th>\r\n        <th colspan=\"6\" style=\"text-align: center\">KPIs</th>\r\n        <th>Project Manager</th>\r\n    </tr>\r\n    <tr>\r\n        <th>&nbsp;</th>\r\n        <th>Cost</th>\r\n        <th>Schedule</th>\r\n        <th>Performance</th>\r\n        <th>Expense</th>\r\n        <th>Timeline</th>\r\n        <th>Health</th>\r\n        <th>&nbsp;</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody data-bind=\"foreach: $component.projects\">\r\n    <tr>\r\n        <td data-bind=\"html: Title\"></td>\r\n        <td>\r\n            <!-- ko if: typeof CostKPI != 'undefined' && typeof CostKPI.Title != 'undefined' -->\r\n            <div data-bind=\"css: 'kpi_' + CostKPI.Title\">\r\n                <span class=\"indicator\" data-bind=\"text: CostKPI.Title.substr(0,1), style:{'background-color': CostKPI._HexColorCode}\">&nbsp;</span> -\r\n                <span data-bind=\"html: CostKPI.Title\"></span>\r\n            </div>\r\n            <!-- /ko -->\r\n        </td>\r\n        <td>\r\n            <!-- ko if: typeof ScheduleKPI != 'undefined' && typeof ScheduleKPI.Title != 'undefined' -->\r\n            <div data-bind=\"css: 'kpi_' + ScheduleKPI.Title\">\r\n                <span class=\"indicator\" data-bind=\"text: ScheduleKPI.Title.substr(0,1), style:{'background-color': ScheduleKPI._HexColorCode}\">&nbsp;</span> -\r\n                <span data-bind=\"html: ScheduleKPI.Title\"></span>\r\n            </div>\r\n            <!-- /ko -->\r\n        </td>\r\n        <td>\r\n            <!-- ko if: typeof PerformanceKPI != 'undefined' && typeof PerformanceKPI.Title != 'undefined' -->\r\n            <div data-bind=\"css: 'kpi_' + PerformanceKPI.Title\">\r\n                <span class=\"indicator\" data-bind=\"text: PerformanceKPI.Title.substr(0,1), style:{'background-color': PerformanceKPI._HexColorCode}\">&nbsp;</span> -\r\n                <span data-bind=\"html: PerformanceKPI.Title\"></span>\r\n            </div>\r\n            <!-- /ko -->\r\n        </td>\r\n        <td>\r\n            <div data-bind=\"css: 'kpi_' + _expenseKpi\">\r\n                <span class=\"indicator\" data-bind=\"text: _expenseKpi.substr(0,1), style:{'background-color': _expenseKpi._HexColorCode}\">&nbsp;</span> -\r\n                <span data-bind=\"html: _expenseKpi\"></span>\r\n                <span data-bind=\"html: ' (' + _expenseKpiPercentage + '%)'\"></span>\r\n            </div>\r\n        </td>\r\n        <td>\r\n            <div data-bind=\"css: 'kpi_' + _scheduleKpi\">\r\n                <span class=\"indicator\" data-bind=\"text: _scheduleKpi.substr(0,1), style:{'background-color': _scheduleKpi._HexColorCode}\">&nbsp;</span> -\r\n                <span data-bind=\"html: _scheduleKpi\"></span>\r\n                <span data-bind=\"html: ' (' + _scheduleKpiCount + ')', visible: _scheduleKpiCount > 0\"></span>\r\n            </div>\r\n\r\n        </td>\r\n        <td>\r\n            <div data-bind=\"css: 'kpi_' + _healthKpi\">\r\n                <span class=\"indicator\" data-bind=\"text: _healthKpi.substr(0,1), style:{'background-color': _healthKpi._HexColorCode}\">&nbsp;</span> -\r\n                <span data-bind=\"html: _healthKpi\"></span>\r\n                <span data-bind=\"html: ' (' + _healthKpiCount + ')', visible: _healthKpiCount > 0\"></span>\r\n            </div>\r\n        </td>\r\n        <!-- ko if: typeof PrimaryPM != 'undefined'-->\r\n        <td data-bind=\"html: PrimaryPM.DisplayName\"></td>\r\n        <!-- /ko -->\r\n        <!-- ko if: typeof PrimaryPM == 'undefined'-->\r\n        <td>none</td>\r\n        <!-- /ko -->\r\n\r\n    </tr>\r\n    </tbody>\r\n</table>\r\n"

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var _ = cc.lodash,
	    template = __webpack_require__(19),
	    fn = cc.fn;
	
	/**
	 * @summary Weekly Report component
	 * @desc Weekly Report component
	 * <br />
	 * Creates a Weekly Report
	 * @namespace
	 * @example <caption>Weekly Report Description</caption>
	 * // Extension JS
	 * // Boilerplate Extension JS code works
	 * //
	 * // Extension HTML
	 * // <cn-cm-weekly-report></cn-cm-weekly-report>
	 */
	function WeeklyReport(params) {
	    var self = this;
	    self.ready = ko.observable(false);
	    self.project = ko.observableArray();
	    self.loaded = ko.observable(false);
	    self.projectKpiExpanded = ko.observable(false);
	    self.statusNarrativeExpanded = ko.observable(false);
	    self.fullDetailsExpanded = ko.observable(false);
	    self.OverallKPI = ko.computed({
	        read: function() {
	
	            var kpi = {};
	
	            var kpiIndicators = [
	                this.project()[0].CostKPI.Title,
	                this.project()[0].ScheduleKPI.Title,
	                this.project()[0].PerformanceKPI.Title
	            ];
	
	            var costKPI = {},
	                scheduleKPI = {},
	                performanceKPI = {};
	
	            costKPI[this.project()[0].CostKPI.Title] = 'Cost';
	            scheduleKPI[this.project()[0].ScheduleKPI.Title] = 'Schedule';
	            performanceKPI[this.project()[0].PerformanceKPI.Title] = 'Performance';
	
	            var kpiIndicatorsText = [];
	            kpiIndicatorsText.push( costKPI );
	            kpiIndicatorsText.push( scheduleKPI );
	            kpiIndicatorsText.push( performanceKPI );
	
	            if ( kpiIndicators.indexOf('Red') !== -1 ) {
	
	                kpi.symbol = 'R';
	                kpi.css = 'Red';
	                kpi.text = '( ';
	
	                ko.utils.arrayForEach(kpiIndicatorsText, function( item ) {
	                    /*jshint -W069 */
	                    if ( item['Red'] ) {
	                        /*jshint -W069 */
	                        kpi.text += item['Red'] + ', ';
	                    }
	                });
	
	                kpi.text = kpi.text.substring(0, kpi.text.length - 2);
	                kpi.text += ' )';
	
	            }
	            else if ( kpiIndicators.indexOf('Yellow') !== -1 ) {
	
	                kpi.symbol = 'Y';
	                kpi.css = 'Yellow';
	                kpi.text = '( ';
	
	                ko.utils.arrayForEach(kpiIndicatorsText, function( item ) {
	                    /*jshint -W069 */
	                    if ( item['Yellow'] ) {
	                        kpi.text += item['Yellow'] + ', ';
	                    }
	                });
	
	                kpi.text = kpi.text.substring(0, kpi.text.length - 2);
	                kpi.text += ' )';
	
	            }
	            else {
	
	                kpi.symbol = 'G';
	                kpi.css = 'Green';
	                kpi.text = '( Cost, Schedule, Performance )';
	
	            }
	
	            return kpi;
	
	        },
	        deferEvaluation: true
	    }, self);
	
	    self.CostKPI_Symbol = ko.computed({
	        read: function() {
	
	            return this.project()[0].CostKPI.Title.substring(0, 1);
	
	        },
	        deferEvaluation: true
	    }, self);
	
	    self.ScheduleKPI_Symbol = ko.computed({
	        read: function() {
	
	            return this.project()[0].ScheduleKPI.Title.substring(0, 1);
	
	        },
	        deferEvaluation: true
	    }, self);
	
	    self.PerformanceKPI_Symbol = ko.computed({
	        read: function() {
	
	            return this.project()[0].PerformanceKPI.Title.substring(0, 1);
	
	        },
	        deferEvaluation: true
	    }, self);
	
	
	    $.when( cmApp.ready ).done(function () {
	        cmApp.blockUI();
	        self.kpiStatus = null;
	        self.kpiStatusDfer = $.Deferred();
	        self.colorIndicators = {};
	        self.colorIndicators.dfer = $.Deferred();
	        self.colorIndicators.ds = _.find(cmApp.availableDataSources, {Title: 'Color Indicators'}); // Get the list details
	        self.colorIndicators.setDs = function(){
	            var ds = _.find(cmApp.availableDataSources, {
	                Title : 'Color Indicators',
	                CrossAppAccessLevel : 'Viewer'
	            });
	            var connId = ds.ConnectionId;
	            var listId = ds.Id;
	
	            cc.api.getConnectionListModelById(connId, listId).then(function (model) {
	                var listItemDS = cc.api.getListItemDataSourceById(listId, {
	                    schema : {
	                        model : model.listModel
	                    },
	                    ccModel : model
	                }, connId);
	
	                self.colorIndicators.ds = listItemDS;
	                self.colorIndicators.ds.read().then(function(){
	                    self.colorIndicators.dfer.resolve(self.colorIndicators.ds.data());
	                });
	            });
	        };
	        self.projectKpiStatus = {};
	        self.projectKpiStatus.dfer = $.Deferred();
	        self.projectKpiStatus.ds = _.find(cmApp.availableDataSources, {Title: 'Project KPI Status'}); // Get the list details
	        self.projectKpiStatus.setDs = function(){
	            var ds = _.find(cmApp.availableDataSources, {
	                Title : 'Project KPI Status',
	                CrossAppAccessLevel : 'Viewer'
	            });
	            var connId = ds.ConnectionId;
	            var listId = ds.Id;
	
	            cc.api.getConnectionListModelById(connId, listId).then(function (model) {
	                var listItemDS = cc.api.getListItemDataSourceById(listId, {
	                    schema : {
	                        model : model.listModel
	                    },
	                    ccModel : model
	                }, connId);
	
	                self.projectKpiStatus.ds = listItemDS;
	                self.projectKpiStatus.ds.read().then(function(){
	                    self.projectKpiStatus.dfer.resolve(self.projectKpiStatus.ds.data());
	                });
	            });
	        };
	        self.projectKpiStatus.setDs();
	        self.colorIndicators.setDs();
	
	        $.when(self.colorIndicators.dfer, self.projectKpiStatus.dfer).done(function (colorsInd, kpiStatus) {
	            $.each(colorsInd, function(index, ci){
	                cnc.fn.flattenListObjects(ci);
	            });
	            $.each(kpiStatus, function(index, rs){
	                rs._colorIndicator = _.find(colorsInd, {Id: rs.ColorIndicator.ItemId});
	                cnc.fn.flattenListObjects(rs);
	            });
	            self.kpiStatus = kpiStatus;
	            self.colorRed = _.find(kpiStatus, {Title: 'Red'}).__colorIndicatorHexColorCode;
	            self.colorYellow = _.find(kpiStatus, {Title: 'Yellow'}).__colorIndicatorHexColorCode;
	            self.colorGreen = _.find(kpiStatus, {Title: 'Green'}).__colorIndicatorHexColorCode;
	            self.kpiStatusDfer.resolve(self.kpiStatus);
	        });
	
	        self.loadProject =
	
	            function() {
	                $.when(self.kpiStatusDfer).done(function(){
	                    var projectFilter = null;
	                    switch (cmApp.thisApp) {
	                        case 'Projects':
	                            projectFilter = '{"logic":"or","filters":[{"field":"Id","operator":"eq","value":"' + cmApp.selectedProject + '"}]}';
	                            self.projectKpiExpanded(true);
	                            self.statusNarrativeExpanded(true);
	                            self.fullDetailsExpanded(true);
	                            break;
	                        case 'Executive Dashboard':
	                            self.projectsInPortfolio = cmApp.projectsInPortfolio;
	                            if (self.projectsInPortfolio.length === 0) {
	                                return;
	                            }
	                            projectFilter = '{"logic":"or","filters":[';
	                            $.each(self.projectsInPortfolio, function (index, id) {
	                                projectFilter += '{"field":"Id","operator":"eq","value":"' + id + '"},';
	                            });
	                            projectFilter = projectFilter.substring(0, projectFilter.length - 1) + ']}';
	                            break;
	                        default:
	                            return;
	                    }
	
	                    cmApp.datasource('Projects', false).done(function (ds) {
	                        if (ds === null) {
	                            console.log('Projects datasource connection not found');
	                        } else {
	                            ds.query({
	                                filter: JSON.parse(projectFilter)
	                            }).then(function () {
	                                if (ds.data().length >= 1) {
	                                    self.project.removeAll();
	                                    $.each(ds.data(), function (index, project) {
	                                        project.OverallKPI = ko.computed({
	                                            read: function() {
	
	                                                var kpi = {};
	
	                                                var kpiIndicators = [
	                                                    project.CostKPI.Title,
	                                                    project.ScheduleKPI.Title,
	                                                    project.PerformanceKPI.Title
	                                                ];
	
	                                                var costKPI = {},
	                                                    scheduleKPI = {},
	                                                    performanceKPI = {};
	
	                                                costKPI[project.CostKPI.Title] = 'Cost';
	                                                scheduleKPI[project.ScheduleKPI.Title] = 'Schedule';
	                                                performanceKPI[project.PerformanceKPI.Title] = 'Performance';
	
	                                                var kpiIndicatorsText = [];
	                                                kpiIndicatorsText.push( costKPI );
	                                                kpiIndicatorsText.push( scheduleKPI );
	                                                kpiIndicatorsText.push( performanceKPI );
	
	                                                if ( kpiIndicators.indexOf('Red') !== -1 ) {
	
	                                                    kpi.symbol = 'R';
	                                                    kpi.css = 'Red';
	                                                    kpi.text = '( ';
	
	                                                    ko.utils.arrayForEach(kpiIndicatorsText, function( item ) {
	                                                        /*jshint -W069 */
	                                                        if ( item['Red'] ) {
	                                                            /*jshint -W069 */
	                                                            kpi.text += item['Red'] + ', ';
	                                                        }
	                                                    });
	
	                                                    kpi.text = kpi.text.substring(0, kpi.text.length - 2);
	                                                    kpi.text += ' )';
	
	                                                }
	                                                else if ( kpiIndicators.indexOf('Yellow') !== -1 ) {
	
	                                                    kpi.symbol = 'Y';
	                                                    kpi.css = 'Yellow';
	                                                    kpi.text = '( ';
	
	                                                    ko.utils.arrayForEach(kpiIndicatorsText, function( item ) {
	                                                        /*jshint -W069 */
	                                                        if ( item['Yellow'] ) {
	                                                            kpi.text += item['Yellow'] + ', ';
	                                                        }
	                                                    });
	
	                                                    kpi.text = kpi.text.substring(0, kpi.text.length - 2);
	                                                    kpi.text += ' )';
	
	                                                }
	                                                else {
	
	                                                    kpi.symbol = 'G';
	                                                    kpi.css = 'Green';
	                                                    kpi.text = '( Cost, Schedule, Performance )';
	
	                                                }
	
	                                                return kpi;
	
	                                            },
	                                            deferEvaluation: true
	                                        }, self);
	                                        project.CostKPI._HexColorCode = _.find(self.kpiStatus, {Id: project.CostKPI.ItemId}).__colorIndicatorHexColorCode;
	                                        project.ScheduleKPI._HexColorCode = _.find(self.kpiStatus, {Id: project.ScheduleKPI.ItemId}).__colorIndicatorHexColorCode;
	                                        project.PerformanceKPI._HexColorCode = _.find(self.kpiStatus, {Id: project.PerformanceKPI.ItemId}).__colorIndicatorHexColorCode;
	                                        project.OverallKPI._HexColorCode = _.find(self.kpiStatus, {Title: project.OverallKPI().css}).__colorIndicatorHexColorCode;
	                                        self.project.push(project);
	                                    });
	                                    self.loaded(true);
	                                    cmApp.unblockUI();
	                                } else {
	                                    console.log('No data is returned');
	                                }
	                            });
	                        }
	                    });
	                });
	            };
	        self.loadProject();
	
	        switch (cmApp.thisApp) {
	            case 'Projects':
	                cc.events.on('cmAppNewProjectSelected', function ( evt ) {
	                    self.loadProject();
	                }, self );
	                break;
	            case 'Executive Dashboard':
	                cc.events.on('cmAppNewPortfolioSelected', function ( evt ) {
	                    self.loadProject();
	                }, self );
	                break;
	            default:
	        }
	
	    });
	}
	
	$.extend(true, WeeklyReport.prototype, {
	    dispose: function () {
	        cc.events.off('cmAppNewProjectSelected');
	        cc.events.off('cmAppNewPortfolioSelected');
	    },
	
	    initSubscriptions: function () {
	        var self = this;
	
	    },
	
	    initComponent: function (view) {
	//        this.campusPicker = $('.campusPicker', view).kendoDropDownList().data("kendoDropDownList");
	    }
	});
	
	function createViewModel(params, componentInfo) {
	    return new WeeklyReport(params);
	}
	
	module.exports = {
	    viewModel: {
	        createViewModel: createViewModel
	    },
	    template: template
	};


/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "<style>\r\n\r\n    .report-outer {\r\n        margin-left: 5px;\r\n        margin-top: 5px;\r\n        width: 100%;\r\n        float: left;\r\n        color: #333;\r\n        font-size: 16px;\r\n        font-family: 'Gentona W00 Light', Gentona Light;\r\n    }\r\n\r\n    .report-outer .report-title {\r\n        height: 75px;\r\n        width: 100%;\r\n        float: left;\r\n        display: none;\r\n    }\r\n\r\n    .report-title span {\r\n        font-size: 25px;\r\n        font-family: 'Gentona W00 Light', Gentona Light;\r\n    }\r\n\r\n    .report-outer .report-kpi {\r\n        margin-bottom: 35px;\r\n        width: 100%;\r\n        float: left;\r\n    }\r\n\r\n    .report-kpi span.title {\r\n        height: 35px;\r\n        width: 100%;\r\n        font-size: 19px;\r\n        float: left;\r\n        font-family: 'Gentona W00 Medium', Gentona Medium;\r\n    }\r\n\r\n    .report-kpi .status-message {\r\n        float: left;\r\n    }\r\n\r\n    .report-kpi .status-message span {\r\n        margin-left: 21px;\r\n        margin-top: 2px;\r\n        font-size: 18px;\r\n        float: left;\r\n    }\r\n\r\n    .report-outer .report-bluf {\r\n        margin-bottom: 35px;\r\n        width: 100%;\r\n        float: left;\r\n    }\r\n\r\n    .report-bluf span.title {\r\n        height: 30px;\r\n        width: 100%;\r\n        font-size: 19px;\r\n        float: left;\r\n        font-family: 'Gentona W00 Medium', Gentona Medium;\r\n    }\r\n\r\n    .report-bluf .bluf-message {\r\n        width: 100%;\r\n        float: left;\r\n    }\r\n\r\n    .report-bluf .bluf-message span {\r\n        min-height: 22px;\r\n        width: 765px;\r\n        float: left;\r\n    }\r\n\r\n    .report-outer .report-details {\r\n        width: 100%;\r\n        float: left;\r\n    }\r\n\r\n    .report-details span.title {\r\n        height: 31px;\r\n        width: 100%;\r\n        font-size: 19px;\r\n        float: left;\r\n        font-family: 'Gentona W00 Medium', Gentona Medium;\r\n    }\r\n\r\n    .report-details .details-container {\r\n        width: 100%;\r\n        float: left;\r\n    }\r\n\r\n    .report-details .details-container .details-row {\r\n        margin-top: 6px;\r\n        margin-bottom: 15px;\r\n        width: 100%;\r\n        float: left;\r\n    }\r\n\r\n    .xdetails-container .details-row span.title {\r\n        height: 26px;\r\n        font-size: 17px;\r\n        color: cadetblue;\r\n        float: left;\r\n        font-family: 'Gentona W00 Light', Gentona Light;\r\n    }\r\n\r\n    .details-container .details-row span.content {\r\n        width: 765px;\r\n        float: left;\r\n    }\r\n\r\n    .details-container .details-row .status {\r\n        margin-left: -2px;\r\n        margin-right: 28px;\r\n        margin-top: 7px;\r\n        padding: 10px 15px;\r\n        float: left;\r\n        border-radius: 3px;\r\n        border: 1px solid silver;\r\n        background-color: beige;\r\n        box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);\r\n        font-family: 'Gentona W00 Medium', Gentona Medium;\r\n    }\r\n\r\n    .details-container .details-row .status .status-title {\r\n        margin-top: 3px;\r\n        width: 145px;\r\n        font-size: 16px;\r\n        float: left;\r\n    }\r\n\r\n    .status-icon {\r\n        height: 27px;\r\n        width: 27px;\r\n        border: 1px solid silver;\r\n        border-radius: 5px;\r\n        float: left;\r\n    }\r\n\r\n    .status-icon span {\r\n        margin-left: 5px;\r\n        margin-top: -1px;\r\n        color: white;\r\n        font-size: 19px;\r\n        font-weight: bold;\r\n        font-family: verdana, arial, helvetica, sans-serif;\r\n        float: left;\r\n    }\r\n\r\n    .status-icon.small {\r\n        height: 26px;\r\n        width: 26px;\r\n    }\r\n\r\n    .status-icon.small span {\r\n        margin-left: 6px;\r\n        margin-top: 1px;\r\n        font-size: 15px;\r\n    }\r\n\r\n    .status-icon.Green {\r\n        /*background-color: #56BD83;*/\r\n    }\r\n\r\n    .status-icon.Yellow {\r\n        /*background-color: #ffff58;*/\r\n    }\r\n\r\n    .status-icon.Yellow span {\r\n        margin-top: -1px;\r\n        color: #404040;\r\n    }\r\n\r\n    .status-icon.small.Yellow span {\r\n        margin-top: 2px;\r\n        color: #404040;\r\n    }\r\n\r\n    .status-icon.Red {\r\n        /*background-color: #C1262E;*/\r\n    }\r\n\r\n    .font-bold {\r\n        font-family: 'Gentona W00 Medium', Gentona Medium;\r\n    }\r\n\r\n    .loading-indicator {\r\n        position: absolute;\r\n        background-color: white;\r\n        font-size: 8px;\r\n    }\r\n\r\n    .loading-indicator.overallKPI {\r\n        margin-top: 34px;\r\n        height: 30px;\r\n        width: 500px;\r\n    }\r\n\r\n    .loading-indicator.overallKPI span {\r\n        left: 39px;\r\n        top: 4px;\r\n        height: auto;\r\n        width: auto;\r\n        color: #333;\r\n        font-size: 13px;\r\n        clip: auto;\r\n    }\r\n\r\n    .loading-indicator.fullDetails {\r\n        margin-left: -3px;\r\n        margin-top: 34px;\r\n        padding-left: 2px;\r\n        height: 100%;\r\n        width: 700px;\r\n    }\r\n\r\n    .loading-indicator.fullDetails span {\r\n        left: 41px;\r\n        top: 4px;\r\n        height: auto;\r\n        width: auto;\r\n        color: #333;\r\n        font-size: 13px;\r\n        clip: auto;\r\n    }\r\n    .table {\r\n        width: 100%;\r\n        min-width: 400px;\r\n    }\r\n    .table tbody tr td{\r\n        white-space: normal;\r\n    }\r\n    .k-widget.k-treeview{\r\n        color: rgb(68, 63, 111);\r\n    }\r\n</style>\r\n\r\n<link type=\"text/css\" rel=\"stylesheet\" href=\"https://fast.fonts.net/cssapi/2a83e921-5a95-4231-a7dd-17cec2452a97.css\">\r\n<!-- ko if: $component.loaded -->\r\n<div class=\"report-outer\">\r\n\r\n    <div class=\"report-title\">\r\n        <span>Weekly Report</span>\r\n    </div>\r\n    <ul id=\"weeklyReportTree\" data-bind=\"kendoTreeView: {}\">\r\n        <li data-bind=\"kendoTreeItem: { expanded: $component.projectKpiExpanded}\">\r\n            <span>Project KPI</span>\r\n            <ul>\r\n                <li>\r\n                    <table class=\"table table-striped\">\r\n                        <thead></thead>\r\n                        <tbody data-bind=\"foreach: $component.project\">\r\n                        <tr>\r\n                            <td>\r\n                                <span data-bind=\"text: Title\"></span>\r\n                            </td>\r\n                            <td>\r\n                                <cn-cm-kpi-indicator params=\"color: OverallKPI, options: {showText: true, textpotiions: 'below'}\"></cn-cm-kpi-indicator>\r\n                                <div class=\"status-icon\" data-bind=\"css: $component.loaded() ? OverallKPI().css : '', style:{'background-color': OverallKPI._HexColorCode}\">\r\n                                    <span data-bind=\"text: $component.loaded() ? OverallKPI().symbol : ''\"></span>\r\n                                </div>\r\n                            </td>\r\n                            <td>\r\n                                <div class=\"status-message\">\r\n                                    <span data-bind=\"text: $component.loaded() ? OverallKPI().text : ''\"></span>\r\n                                </div>\r\n                                <div class=\"loading-indicator overallKPI\" data-bind=\"visible: !$component.loaded()\">\r\n                                    <i class=\"fa fa-spinner fa-spin fa-3x fa-fw\"></i>\r\n                                    <span class=\"sr-only\">Loading...</span>\r\n                                </div>\r\n                            </td>\r\n                        </tr>\r\n\r\n                        </tbody>\r\n                    </table>\r\n                </li>\r\n            </ul>\r\n        </li>\r\n        <li data-bind=\"kendoTreeItem: { expanded: $component.statusNarrativeExpanded}\">\r\n            <span>Status Narrative</span>\r\n            <ul>\r\n                <li>\r\n                    <table class=\"table\">\r\n                        <thead></thead>\r\n                        <tbody data-bind=\"foreach: $component.project\">\r\n                        <tr>\r\n                            <td>\r\n                                <span data-bind=\"text: Title\"></span>\r\n                            </td>\r\n                            <td>\r\n                                <div class=\"bluf-message\">\r\n                                    <span class=\"content\" data-bind=\"html:BLUF\"></span>\r\n                                </div>\r\n                                <div class=\"loading-indicator overallKPI\" data-bind=\"visible: !$component.loaded()\">\r\n                                    <i class=\"fa fa-spinner fa-spin fa-3x fa-fw\"></i>\r\n                                    <span class=\"sr-only\">Loading...</span>\r\n                                </div>\r\n                            </td>\r\n                        </tr>\r\n\r\n                        </tbody>\r\n                    </table>\r\n                </li>\r\n            </ul>\r\n        </li>\r\n        <li data-bind=\"kendoTreeItem: { expanded: $component.fullDetailsExpanded}\">\r\n            <span>Full Details</span>\r\n            <ul>\r\n                <li>\r\n                    <table class=\"table\">\r\n                        <thead></thead>\r\n                        <tbody data-bind=\"foreach: $component.project\">\r\n                        <tr>\r\n                            <td>\r\n                                <span data-bind=\"text: Title\"></span>\r\n                            </td>\r\n                            <td>\r\n                                <table class=\"table table-bordered\">\r\n                                    <thead></thead>\r\n                                    <tbody>\r\n                                    <tr>\r\n                                        <td>\r\n                                            Description\r\n                                        </td>\r\n                                        <td data-bind=\"html: $component.loaded() ?Description_cc_ : ''\">\r\n\r\n                                        </td>\r\n                                    <tr>\r\n                                        <td>\r\n                                            Scope\r\n                                        </td>\r\n                                        <td data-bind=\"html:Scope\">\r\n\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>\r\n                                            Status\r\n                                        </td>\r\n                                        <td>\r\n                                            <table class=\"table\">\r\n                                                <tbody>\r\n                                                <tr>\r\n                                                    <td>\r\n                                                        <span class=\"status-title\">Cost</span>\r\n                                                    </td>\r\n                                                    <td>\r\n                                                        <div class=\"status-icon small\" data-bind=\"css: $component.loaded() ?CostKPI.Title : '', style:{'background-color': CostKPI._HexColorCode}\">\r\n                                                            <span data-bind=\"text: $component.loaded() ? CostKPI.Title.substr(0,1) : ''\"></span>\r\n                                                        </div>\r\n\r\n                                                    </td>\r\n                                                    <td>\r\n                                                        <span class=\"status-title\">Schedule</span>\r\n                                                    </td>\r\n                                                    <td>\r\n                                                        <div class=\"status-icon small\" data-bind=\"css: $component.loaded() ?ScheduleKPI.Title : '', style:{'background-color': ScheduleKPI._HexColorCode}\">\r\n                                                            <span data-bind=\"text: $component.loaded() ? ScheduleKPI.Title.substr(0,1) : ''\"></span>\r\n                                                        </div>\r\n\r\n                                                    </td>\r\n                                                    <td>\r\n                                                        <span class=\"status-title\">Performance</span>\r\n                                                    </td>\r\n                                                    <td>\r\n                                                        <div class=\"status-icon small\" data-bind=\"css: $component.loaded() ?PerformanceKPI.Title : '', style:{'background-color': PerformanceKPI._HexColorCode}\">\r\n                                                            <span data-bind=\"text: $component.loaded() ? PerformanceKPI.Title.substr(0,1) : ''\"></span>\r\n                                                        </div>\r\n                                                    </td>\r\n                                                </tr>\r\n                                                </tbody>\r\n                                            </table>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>\r\n                                            Executive Summary\r\n                                        </td>\r\n                                        <td data-bind=\"html:ExecutiveSummary\">\r\n\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>\r\n                                            Primary PM\r\n                                        </td>\r\n                                        <td>\r\n                                            <!-- ko if: typeof PrimaryPM != 'undefined'-->\r\n                                            <span class=\"content font-bold\"\r\n                                                  data-bind=\"text: $component.loaded() ?PrimaryPM.DisplayName : ''\"></span>\r\n                                            <!-- /ko -->\r\n                                            <!-- ko if: typeof PrimaryPM == 'undefined'-->\r\n                                            <span class=\"content font-bold\"> none </span>\r\n                                            <!-- /ko -->\r\n\r\n                                        </td>\r\n                                    </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </td>\r\n                        </tr>\r\n\r\n                        </tbody>\r\n                    </table>\r\n                </li>\r\n            </ul>\r\n        </li>\r\n    </ul>\r\n\r\n</div>\r\n<!-- /ko -->"

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var _ = cc.lodash,
	    template = __webpack_require__(21),
	    fn = cc.fn;
	
	/**
	 * @summary Team Members component
	 * @desc Team Members component
	 * <br />
	 * Creates a Team Members
	 * @namespace
	 * @example <caption>Team Members Description</caption>
	 * // Extension JS
	 * // Boilerplate Extension JS code works
	 * //
	 * // Extension HTML
	 * // <cn-cm-team-members></cn-cm-team-members>
	 */
	function TeamMembers(params) {
	
	    $.when(cmApp.ready).done(function () {
	        var self = this;
	        self.ds = [];
	        self.selectedProject = '';
	        self.membersList = [];
	        self.memberData = [];
	        self.memberFinalData = [];
	        self.resources = [];
	
	        var grid = $("#memberGrid").data("kendoGrid");
	        $("#memberGrid").kendoGrid({
	            pageable: true,
	            sortable: true,
	            columns: [{
	                field: 'name',
	                title: 'Member Name'
	            },
	                {
	                    field: 'role',
	                    title: 'Role'
	                },
	                {
	                    field: 'email',
	                    title: 'Email'
	                },
	                {
	                    field: 'phone',
	                    title: 'Phone'
	                },
	                {
	                    field: 'organization',
	                    title: 'Organization'
	                },
	                { command: { text: "Edit Role", click: editMember }, title: " ", width: "120px" },
	                { command: { text: "Delete", click: deleteMember }, title: " ", width: "85px" }
	            ],
	
	            dataSource: {
	                pageSize: 15,
	                cache: false
	            }
	        });
	
	        $("#newMember").click(function(){
	            var formOptions = new cnc.ui.form.options();
	            formOptions.actionTitle = 'New Member';
	            cnc.ui.form.run(formOptions)
	                .done(function (results) {
	                    console.log('Done:', results);
	                    self.loadMembers();
	                })
	                .fail(function (results) {
	                    console.log('Fail:', results);
	                });
	        });
	
	        function deleteMember(e) {
	            var dataItem = this.dataItem($(e.currentTarget).closest("tr"));
	            kendo.ui.CcOkCancelDialog.show({
	                title: "Item delete confirmation",
	                message: 'This will delete the selected item.</br></br>Do you want to proceed?',
	                icon: 'question'
	            }).done(function( response ) {
	                if ( response.button === 'OK' ) {
	                    var deletedItem = _.find(self.ds.data(),{Id: dataItem.itemId});
	                    self.ds.data().remove(deletedItem);
	                    self.ds.sync().then(function (){
	                        self.ds.read().then(function () {
	                            self.loadMembers();
	                        });
	                    });
	                }
	            });
	        }
	
	        function editMember(e) {
	            e.preventDefault();
	            var dataItem = this.dataItem($(e.currentTarget).closest("tr"));
	            var formOptions = new cnc.ui.form.options();
	            formOptions.actionTitle = 'Edit Member';
	            formOptions.itemId = dataItem.itemId;
	
	            cnc.ui.form.run(formOptions)
	                .done(function (results) {
	                    console.log('Done:', results);
	                    self.loadMembers();
	                })
	                .fail(function (results) {
	                    console.log('Fail:', results);
	                });
	        }
	
	
	        self.loadMembers = function() {
	            self.memberFinalData = [];
	            $("#memberGrid").data("kendoGrid").dataSource.data(self.memberFinalData);
	
	            cmApp.datasource('Team Members', true).done(function (ds) {
	                if (ds === null) {
	                    console.log('Team Members datasource connection not found');
	                } else {
	                    var filter = '{"logic":"and","filters":[{"field":"Project/ItemId","operator":"eq","value":"' + cmApp.selectedProject + '"}]}';
	                    ds.query({
	                        filter: JSON.parse(filter)
	                    }).then(function () {
	                        self.ds = ds;
	                        if (ds.data().length >= 1) {
	                            self.memberData = [];
	                            _.each(self.ds.data(), function(member, i){
	                                self.memberData.push({
	                                    name: member.Resource.Title,
	                                    role: member.Role,
	                                    id: member.Resource.ItemId,
	                                    itemId: member.Id
	                                });
	                            });
	
	                            cmApp.datasource('Resources', true).done(function (ds) {
	                                if (ds === null) {
	                                    console.log('Resources datasource connection not found');
	                                } else {
	                                    ds.query().then(function () {
	                                        if (ds.data().length >= 1) {
	                                            self.resources = [];
	                                            _.each(ds.data(), function(resource, i){
	                                                self.resources.push({
	                                                    id: resource.Id,
	                                                    email: resource.MemberEmail,
	                                                    phone: resource.MemberPhoneNumber,
	                                                    organization: resource.MemberOrganization,
	                                                });
	                                            });
	
	                                            self.memberFinalData = self.memberData.map(function(v){
	                                                var ret;
	                                                $.each(self.resources, function(k, v2){
	                                                    if(v2.id === v.id){
	                                                        ret = $.extend({}, v2, v);
	                                                        return false;
	                                                    }
	                                                });
	                                                return ret;
	                                            });
	
	                                            $("#memberGrid").data("kendoGrid").dataSource.data(self.memberFinalData);
	                                        } else {
	                                            console.log('No data is returned');
	                                        }
	                                    });
	                                }
	                            });
	
	
	                        } else {
	                            console.log('No data is returned');
	                        }
	                    });
	                }
	            });
	        };
	
	        self.loadMembers();
	
	        cc.events.on('cmAppNewProjectSelected', function (evt) {
	            self.loadMembers();
	        }, self);
	
	    });
	}
	
	$.extend(true, TeamMembers.prototype, {
	    dispose: function () {
	        cc.events.off('cmAppNewPortfolioSelected');
	    },
	
	    initSubscriptions: function () {
	        var self = this;
	
	    },
	
	    initComponent: function (view) {
	//        this.campusPicker = $('.campusPicker', view).kendoDropDownList().data("kendoDropDownList");
	    }
	});
	
	function createViewModel(params, componentInfo) {
	    return new TeamMembers(params);
	}
	
	module.exports = {
	    viewModel: {
	        createViewModel: createViewModel
	    },
	    template: template
	};


/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "<div id=\"toolbar\" class=\"cc-toolbar k-toolbar k-widget k-toolbar-resizable\">\r\n    <input id=\"newMember\" class=\"k-button\" type=\"submit\" value=\"New Member\">\r\n</div>\r\n<div id=\"memberGrid\"></div>\r\n"

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var _ = cc.lodash,
	    template = __webpack_require__(23),
	    fn = cc.fn;
	
	/**
	 * @summary Project Plan component
	 * @desc Project Plan component
	 * <br />
	 * Creates a Project Plan
	 * @namespace
	 * @example <caption>Project Plan Description</caption>
	 * // Extension JS
	 * // Boilerplate Extension JS code works
	 * //
	 * // Extension HTML
	 * // <cn-cm-project-plan></cn-cm-project-plan>
	 */
	function ProjectPlan(params) {
	
	    $.when(cmApp.ready).done(function () {
	        var self = this;
	
	        $("#editPlan").click(function(){
	            var formOptions = new cnc.ui.form.options();
	            formOptions.actionTitle = 'Edit Project Plan';
	            formOptions.itemId = $("#editPlan").attr("projectId");
	
	            cnc.ui.form.run(formOptions)
	                .done(function (results) {
	                    console.log('Done:', results);
	                    self.loadProject();
	                })
	                .fail(function (results) {
	                    console.log('Fail:', results);
	                });
	        });
	
	        $("#preProd").click(function(){
	            var formOptions = new cnc.ui.form.options();
	            formOptions.actionTitle = 'Set Project Pre-Production';
	            formOptions.itemId = $("#editPlan").attr("projectId");
	
	            cnc.ui.form.run(formOptions)
	                .done(function (results) {
	                    console.log('Done:', results);
	                    self.loadProject();
	                })
	                .fail(function (results) {
	                    console.log('Fail:', results);
	                });
	        });
	
	        $("#complete").click(function(){
	            var formOptions = new cnc.ui.form.options();
	            formOptions.actionTitle = 'Set Project Completed';
	            formOptions.itemId = $("#editPlan").attr("projectId");
	
	            cnc.ui.form.run(formOptions)
	                .done(function (results) {
	                    console.log('Done:', results);
	                    self.loadProject();
	                })
	                .fail(function (results) {
	                    console.log('Fail:', results);
	                });
	        });
	
	        self.loadProject = function() {
	
	            cmApp.datasource('Projects', true).done(function (ds) {
	                if (ds === null) {
	                    console.log('Projects datasource connection not found');
	                } else {
	                    var filter = '{"logic":"and","filters":[{"field":"Id","operator":"eq","value":"' + cmApp.selectedProject + '"}]}';
	                    ds.query({
	                        filter: JSON.parse(filter)
	                    }).then(function () {
	                        if (ds.data().length >= 1) {
	                            $("#editPlan").attr("projectId",ds.data()[0].Id);
	                            $("#preProd").attr("projectId",ds.data()[0].Id);
	                            $("#complete").attr("projectId",ds.data()[0].Id);
	                            $("#projectTitle").html(ds.data()[0].Title);
	                            $("#primaryCustomer").html(ds.data()[0].PrimaryCustomer);
	                            if (ds.data()[0].CostKPI !== undefined) {
	                                $("#costSymbol").html(ds.data()[0].CostKPI.Title.substring(0, 1));
	                                $("#costColor").removeClass();
	                                $("#costColor").addClass('status-icon small '  + ds.data()[0].CostKPI.Title);
	                            } else {
	                                $("#costColor").removeClass();
	                            }
	                            if (ds.data()[0].ScheduleKPI !== undefined) {
	                                $("#scheduleSymbol").html(ds.data()[0].ScheduleKPI.Title.substring(0, 1));
	                                $("#scheduleColor").removeClass();
	                                $("#scheduleColor").addClass('status-icon small '  + ds.data()[0].ScheduleKPI.Title);
	                            } else {
	                                $("#scheduleColor").removeClass();
	                            }
	                            if (ds.data()[0].PerformanceKPI !== undefined) {
	                                $("#performanceSymbol").html(ds.data()[0].PerformanceKPI.Title.substring(0, 1));
	                                $("#performanceColor").removeClass();
	                                $("#performanceColor").addClass('status-icon small '  + ds.data()[0].PerformanceKPI.Title);
	                            } else {
	                                $("#performanceColor").removeClass();
	                            }
	                            var scheduleKPI = '';
	                            if (ds.data()[0].ScheduleKPI !== undefined) {
	                                scheduleKPI = ds.data()[0].ScheduleKPI.Title;
	                            }
	                            var performanceKPI = '';
	                            if (ds.data()[0].PerformanceKPI !== undefined) {
	                                performanceKPI = ds.data()[0].PerformanceKPI.Title;
	                            }
	                            var costKPI = '';
	                            if (ds.data()[0].CostKPI !== undefined) {
	                                costKPI = ds.data()[0].CostKPI.Title;
	                            }
	                            var primaryPM = '';
	                            if (ds.data()[0].PrimaryPM !== undefined) {
	                                primaryPM = ds.data()[0].PrimaryPM.DisplayName;
	                            }
	
	
	                            $("#kpis").html(' Schedule: '    + scheduleKPI +
	                                ' Performance: ' + performanceKPI +
	                                ' Cost: '        + costKPI);
	
	                            $("#bluf").html(ds.data()[0].BLUF);
	                            $("#scope").html(ds.data()[0].Scope);
	                            $("#executiveSummary").html(ds.data()[0].ExecutiveSummary);
	                            $("#solutionSummary").html(ds.data()[0].SolutionSummary);
	                            $("#category").html(ds.data()[0].Category.Title);
	                            $("#impact").html(ds.data()[0].ImpactOnObjective);
	                            $("#primaryPM").html(primaryPM);
	                            $("#description").html(ds.data()[0].Description_cc_);
	                            $("#deliverables").html(ds.data()[0].KeyDeliverables);
	                            $("#shortSchedule").html(ds.data()[0].ShortTermScheduleSummary);
	                            $("#issues").html(ds.data()[0].Issues);
	                            $("#costSummary").html(ds.data()[0].CostSummary);
	                            $("#scheduleSummary").html(ds.data()[0].ScheduleSummary);
	                            $("#performanceSummary").html(ds.data()[0].PerformanceSummary);
	                        } else {
	                            console.log('No data is returned');
	                        }
	                    });
	                }
	            });
	
	
	        };
	
	        self.loadProject();
	
	        cc.events.on('cmAppNewProjectSelected', function (evt) {
	            self.loadProject();
	        }, self);
	
	    });
	}
	
	$.extend(true, ProjectPlan.prototype, {
	    dispose: function () {
	        cc.events.off('cmAppNewPortfolioSelected');
	    },
	
	    initSubscriptions: function () {
	        var self = this;
	
	    },
	
	    initComponent: function (view) {
	//        this.campusPicker = $('.campusPicker', view).kendoDropDownList().data("kendoDropDownList");
	    }
	});
	
	function createViewModel(params, componentInfo) {
	    return new ProjectPlan(params);
	}
	
	module.exports = {
	    viewModel: {
	        createViewModel: createViewModel
	    },
	    template: template
	};


/***/ },
/* 23 */
/***/ function(module, exports) {
/*VZG Change*/
		module.exports = "<style>\r\n    .status {\r\n        margin-left: -2px;\r\n        margin-right: 28px;\r\n        margin-top: 7px;\r\n        padding: 10px 15px;\r\n        float: left;\r\n        border-radius: 3px;\r\n        border: 1px solid silver;\r\n        background-color: beige;\r\n        box-shadow: 0 0 1px rgba(0,0,0,0.5);\r\n        font-family: 'Gentona W00 Medium', Gentona Medium;\r\n    }\r\n    .status .status-title {\r\n        margin-top: 3px;\r\n        width: 145px;\r\n        font-size: 16px;\r\n        float: left;\r\n    }\r\n    .status-icon {\r\n        height: 27px;\r\n        width: 27px;\r\n        border: 1px solid silver;\r\n        border-radius: 5px;\r\n        float: left;\r\n    }\r\n    .status-icon span {\r\n        margin-left: 5px;\r\n        margin-top: -1px;\r\n        color: white;\r\n        font-size: 19px;\r\n        font-weight: bold;\r\n        font-family: verdana,arial,helvetica,sans-serif;\r\n        float: left;\r\n    }\r\n    .status-icon.small {\r\n        height: 26px;\r\n        width: 26px;\r\n    }\r\n    .status-icon.small span {\r\n        margin-left: 6px;\r\n        margin-top: 1px;\r\n        font-size: 15px;\r\n    }\r\n    .status-icon.Green {\r\n        background-color: #56BD83;\r\n    }\r\n    .status-icon.Yellow {\r\n        background-color: #ffff58;\r\n    }\r\n    .status-icon.Yellow span {\r\n        margin-top: -1px;\r\n        color: #404040;\r\n    }\r\n    .status-icon.small.Yellow span {\r\n        margin-top: 2px;\r\n        color: #404040;\r\n    }\r\n    .status-icon.Red {\r\n        background-color: #C1262E;\r\n    }\r\n</style>\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <h3>\r\n                Title\r\n            </h3>\r\n            <p id=\"projectTitle\"></p>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <h3>\r\n                DESCRIPTION\r\n            </h3>\r\n            <p id=\"description\"></p>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n            <h3>\r\n                BLUF\r\n            </h3>\r\n            <p id=\"bluf\"></p>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <h3>\r\n                Executive Summary\r\n            </h3>\r\n            <p id=\"executiveSummary\"></p>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <h3>\r\n                Solution Summary\r\n            </h3>\r\n            <p id=\"solutionSummary\"></p>\r\n        </div>\r\n    </div>\r\n    <div class=\"thumbnail\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"status\">\r\n                            <span class=\"status-title\">Cost</span>\r\n                            <div id=\"costColor\" class=\"status-icon small\">\r\n                                <span id=\"costSymbol\"></span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"status\">\r\n                            <span class=\"status-title\">Schedule</span>\r\n                            <div id=\"scheduleColor\" class=\"status-icon small\">\r\n                                <span id=\"scheduleSymbol\"></span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"status\">\r\n                            <span class=\"status-title\">Performance</span>\r\n                            <div id=\"performanceColor\" class=\"status-icon small\">\r\n                                <span id=\"performanceSymbol\"></span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n                <dl>\r\n                    <dt><br/>\r\n                        KPI Comments\r\n                    </dt>\r\n                    <dd id=\"costSummary\"></dd>\r\n                </dl>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <dl>\r\n                    <dt><br/>\r\n                        KPI Comments\r\n                    </dt>\r\n                    <dd id=\"scheduleSummary\"></dd>\r\n                </dl>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <dl>\r\n                    <dt><br/>\r\n                        KPI Comments\r\n                    </dt>\r\n                    <dd id=\"performanceSummary\"></dd>\r\n                </dl>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n            <dl>\r\n                <dt>\r\n                    Scope\r\n                </dt>\r\n                <dd id=\"scope\"></dd>\r\n            </dl>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <dl>\r\n                <dt>\r\n                    Key Deliverables\r\n                </dt>\r\n                <dd id=\"deliverables\"></dd>\r\n            </dl>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <dl>\r\n                <dt>\r\n                    Category\r\n                </dt>\r\n                <dd id=\"category\"></dd>\r\n                <dt>\r\n                    Primary Customer\r\n                </dt>\r\n                <dd id=\"primaryCustomer\"></dd>\r\n                <dt>\r\n                    Primary PM\r\n                </dt>\r\n                <dd id=\"primaryPM\"></dd>\r\n            </dl>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n            <dl>\r\n                <dt>\r\n                    Impact on Objective\r\n                </dt>\r\n                <dd id=\"impact\"></dd>\r\n            </dl>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <dl>\r\n                <dt>\r\n                    Short/Mid Term Schedule\r\n                </dt>\r\n                <dd id=\"shortSchedule\"></dd>\r\n            </dl>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <dl>\r\n                <dt>\r\n                    Issues\r\n                </dt>\r\n                <dd id=\"issues\"></dd>\r\n            </dl>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <button type=\"button\" class=\"btn active btn-primary\" id=\"editPlan\" projectId=\"\">\r\n                Edit Program Plan\r\n            </button>\r\n<button type=\"button\" class=\"btn active btn-primary\" id=\"complete\" projectId=\"\">\r\n                Set Program Completed\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var _ = cc.lodash,
	    template = __webpack_require__(25),
	    fn = cc.fn;
	
	/**
	 * @summary GoNoGo Analysis component
	 * @desc GoNoGo Analysis component
	 * <br />
	 * Creates a GoNoGo Analysis
	 * @namespace
	 * @example <caption>GoNoGo Analysis Description</caption>
	 * // Extension JS
	 * // Boilerplate Extension JS code works
	 * //
	 * // Extension HTML
	 * // <cn-cm-gonogo-analysis></cn-cm-gonogo-analysis>
	 */
	function GoNoGoAnalysis(params) {
	    var self = this;
	    self.ready = ko.observable(false);
	    $.when(cmApp.ready).done(function () {
	        cmApp.blockUI();
	        var self = this;
	        self.activeId = '';
	        self.approvedId = '';
	        self.rejectedId = '';
	        self.chartData = [];
	        self.legendData = [{
	            text: 'Approved',
	            iconType: "square",
	            iconFill: 'blue',
	            iconStroke: 'blue'
	        },{
	            text: 'Active',  // text of item
	            iconType: "square",
	            iconFill: 'green',
	            iconStroke: 'green'
	        },{
	            text: 'Rejected',
	            iconType: "square",
	            iconFill: 'red',
	            iconStroke: 'red'
	        }];
	
	        self.legend = anychart.ui.legend();
	        self.legend.itemsFormatter(function(){return self.legendData;});
	        self.legend.position("top");
	        self.legend.align("center");
	        self.legend.zIndex(1);
	        self.legend.enabled(true);
	        self.legend.itemsLayout("horizontal");
	        self.legend.container('legend');
	
	        // create column chart
	        self.chart = anychart.column();
	        self.chart.height(600);
	        self.chart.container('container');
	
	        self.chart.tooltip().positionMode('point');
	        self.chart.interactivity().hoverMode('byX');
	
	        self.chart.xAxis().title('Projects');
	        self.chart.yAxis().title('Days');
	        self.chart.credits().enabled(false);
	
	        cmApp.getAvailableDataSources()
	            .fail(function (results) {
	            })
	            .then(function (results) {
	                var projectCategories = _.find(results, {Title: 'Project Categories'});
	                var projectsList = _.find(results, {Title: 'Projects'});
	
	                self.loadAnalysis = function () {
	
	                    cmApp.datasource('Project Categories', false).done(function (ds) {
	                        if (ds === null) {
	                            console.log('Project Categories datasource connection not found');
	                        } else {
	                            ds.query().then(function () {
	                                if (ds.data().length >= 1) {
	                                    self.activeId = _.find(ds.data(), {Title: 'Active'});
	                                    self.approvedId = _.find(ds.data(), {Title: 'Approved'});
	                                    self.rejectedId = _.find(ds.data(), {Title: 'Rejected'});
	
	                                    cmApp.datasource('Projects', false).done(function (ds) {
	                                        if (ds === null) {
	                                            console.log('Projects datasource connection not found');
	                                        } else {
	                                            var filter = '{"logic":"or","filters":[{"field":"Category%2FItemId","operator":"eq","value":"' + self.activeId.Id + '"},{"field":"Category%2FItemId","operator":"eq","value":"' + self.approvedId.Id + '"},{"field":"Category%2FItemId","operator":"eq","value":"' + self.rejectedId.Id + '"}]}';
	                                            ds.query({
	                                                filter: JSON.parse(filter)
	                                            }).then(function () {
	                                                if (ds.data().length >= 1) {
	                                                    var timeDiff = '';
	                                                    var diffDays = '';
	                                                    var fill = '';
	                                                    var stroke = '';
	                                                    var totalRejected = 0;
	                                                    var totalRejectedCount = 0;
	                                                    var avgRejected = 0;
	                                                    var totalApproved = 0;
	                                                    var totalApprovedCount = 0;
	                                                    var avgApproved = 0;
	                                                    for(var i = 0; i < ds.data().length; i++) {
	                                                        timeDiff = Math.abs(moment(ds.data()[i].DecisionDate) - moment(ds.data()[i].SubmittedDate));
	                                                        diffDays = Math.ceil(timeDiff / (24 * 60 * 60 * 1000));
	                                                        if (ds.data()[i].Category.Title === 'Rejected') {
	                                                            totalRejected += diffDays;
	                                                            totalRejectedCount++;
	                                                        } else {
	                                                            totalApproved += diffDays;
	                                                            totalApprovedCount++;
	                                                        }
	                                                    }
	
	                                                    avgRejected = ((totalRejectedCount !== 0) ? Number(totalRejected / totalRejectedCount).toFixed(0) : 'N/A');
	                                                    avgApproved = ((totalRejectedCount !== 0) ? Number(totalApproved / totalApprovedCount).toFixed(0) : 'N/A');
	
	                                                    $.each(ds.data(), function(i, v) {
	                                                        timeDiff = Math.abs(moment(v.DecisionDate) - moment(v.SubmittedDate));
	                                                        diffDays = Math.ceil(timeDiff / (24 * 60 * 60 * 1000));
	                                                        if (v.Category.Title === 'Active') {
	                                                            fill = 'green';
	                                                            stroke = 'green';
	                                                        } else if (v.Category.Title === 'Approved') {
	                                                            fill = 'blue';
	                                                            stroke = 'blue';
	                                                        } else {
	                                                            fill = 'red';
	                                                            stroke = 'red';
	                                                        }
	                                                        self.chartData.push({
	                                                            x: v.Title,
	                                                            y: diffDays,
	                                                            fill: fill,
	                                                            stroke: stroke,
	                                                            category: v.Category.Title,
	                                                            comments: v.Comments
	                                                        });
	
	                                                    });
	
	                                                    var series = self.chart.column(self.chartData);
	                                                    series.tooltip().titleFormatter(function() {
	                                                        return this.x;
	                                                    });
	                                                    series.tooltip().textFormatter(function() {
	                                                        var comments = ((this.getDataValue("comments") !== undefined) ? this.getDataValue("comments") : '');
	                                                        return this.getDataValue("category") + ' in ' + parseInt(this.value, 10).toLocaleString() + ' day(s)\n\nComments: ' + comments;
	                                                    });
	                                                    series.tooltip().position('top').anchor('bottom').offsetX(0).offsetY(5);
	                                                    self.chart.title('Go/No Go Analysis\nAvg Rejected Duration: ' + avgRejected + ' day(s)\nAvg Approved Duration: ' + avgApproved + ' day(s)');
	
	                                                    self.chart.draw();
	                                                    self.legend.draw();
	                                                } else {
	                                                    console.log('No data is returned');
	                                                }
	                                            });
	                                        }
	                                    });
	                                } else {
	                                    console.log('No data is returned');
	                                }
	                            });
	                        }
	                    });
	                };
	            });
	
	        self.loadAnalysis();
	
	        cmApp.unblockUI();
	    });
	}
	
	$.extend(true, GoNoGoAnalysis.prototype, {
	    dispose: function () {
	        cc.events.off('cmAppNewPortfolioSelected');
	    },
	
	    initSubscriptions: function () {
	        var self = this;
	
	    },
	
	    initComponent: function (view) {
	//        this.campusPicker = $('.campusPicker', view).kendoDropDownList().data("kendoDropDownList");
	    }
	});
	
	function createViewModel(params, componentInfo) {
	    return new GoNoGoAnalysis(params);
	}
	
	module.exports = {
	    viewModel: {
	        createViewModel: createViewModel
	    },
	    template: template
	};


/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "<style>\r\n    #container {\r\n        width: 100%;\r\n        height: 600px;\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n</style>\r\n<div id=\"container\"></div><div id=\"legend\"></div>"

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var _ = cc.lodash,
	    template = __webpack_require__(27),
	    fn = cc.fn;
	
	/**
	 * @summary Portfolio Builder component
	 * @desc Portfolio Builder component
	 * <br />
	 * Creates a Portfolio Builder
	 * @namespace
	 * @example <caption>Portfolio Builder Description</caption>
	 * // Extension JS
	 * // Boilerplate Extension JS code works
	 * //
	 * // Extension HTML
	 * // <cn-cm-portfolio-builder></cn-cm-portfolio-builder>
	 */
	function PortfolioBuilder(params) {
	    var self = this;
	    self.filterMethods = [
	        {title: "Selected Projects", value: '0'},
	        {title: "Preset Filter", value: '1'},
	        {title: "AdHoc Filter", value: '2'}
	    ];
	
	    self.ready = ko.observable(false);
	
	    self.listId = null;
	    self.connId = null;
	    // jsonFilter updated on Apply/Reset
	    self.jsonFilter = ko.observable('');
	    self.filteredProjects = ko.observableArray();
	    self.jsonFilter.subscribe(function( val ) {
	        //do something with the JSON Filter
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
	            self.filteredProjects.removeAll();
	            if(self.jsonFilter() !== ''){
	                projectDS.query({
	                    sort: { field: "Title", dir: "asc" },
	                    filter: JSON.parse(self.jsonFilter())
	                }).then(function () {
	                    $.each(projectDS.data(), function(index, project){
	                        self.filteredProjects.push(project);
	                    });
	
	                });
	            }
	        });
	    });
	
	    self.filterMethod = ko.observable(2);
	    self.portfolio = ko.observable();
	    self.portfolioDS = null;
	
	    self.projects = ko.observableArray();
	
	    self.projectsInPortfolio = ko.observableArray();
	    self.filterInPortfolio = ko.observable();
	    self.iconClickHandlerAdded = false;
	    self.showIcons = ko.observable(false);
	    self.toggleShowIcons = function(){
	        self.showIcons(!self.showIcons());
	        if(!self.iconClickHandlerAdded){
	            $('icon-builder div#iconBuilder div div div i').click(function(evt) {
	                self.icon(this.classList[this.classList.length - 1]);
	                self.toggleShowIcons();
	            });
	        }
	    };
	    self.portfolioDfer = $.Deferred();
	    self.projectsDfer = $.Deferred();
	    self.portfolioFiltersDfer = $.Deferred();
	    self.portfolioFilters = ko.observableArray();
	    self.updatePortfolio = function(){
	        cmApp.blockUI();
	        self.portfolioDS.data()[0].FilterMethod = _.find(self.filterMethods, {value: self.filterMethod()}).title;
	        self.portfolioDS.data()[0].AdHocFilter = self.jsonFilter();
	        self.portfolioDS.data()[0].Title = self.title();
	        self.portfolioDS.data()[0].Icon = self.icon();
	        self.portfolioDS.data()[0].Description_cc_ = self.description();
	        self.portfolioDS.data()[0].Projects = [];
	        $.each(self.projectsInPortfolio(), function(index, project){
	            self.portfolioDS.data()[0].Projects.push({ItemId: project, Title: _.find(self.projects(), {Id: project}).Title});
	        });
	        if(self.filterInPortfolio() !== undefined && self.filterInPortfolio() !== '' && self.filterInPortfolio() !== null){
	            self.portfolioDS.data()[0].ProjectFilter = [];
	            self.portfolioDS.data()[0].ProjectFilter = new cnc.objects.relation();
	            self.portfolioDS.data()[0].ProjectFilter.ItemId = self.filterInPortfolio();
	            self.portfolioDS.data()[0].ProjectFilter.Id = _.find(cmApp.availableDataSources, {Title: 'Portfolios'}).Id;
	            self.portfolioDS.data()[0].ProjectFilter.Title = _.find(self.portfolioFilters(), {Id: self.filterInPortfolio()}).Title;
	        }
	        self.portfolioDS.data()[0].dirty = true;
	        self.portfolioDS.sync().done(function (msg) {
	            cmApp.refreshPortfolios()
	                .fail(function (results) {
	                })
	                .then(function (results) {
	                    cc.notification.trigger('success', {
	                        title: 'Portfolio Updated',
	                        message: ''
	                    });
	                    cmApp.setSelectedPortfolio(self.portfolio().Id);
	                    cmApp.unblockUI();
	                });
	        });
	    };
	    self.savePortfolioAs = function(){
	        cmApp.blockUI();
	        cmApp.datasource('Portfolios', true).done(function (ds) {
	            if (ds === null) {
	            } else {
	                var newPortfolio = ds.add();
	                newPortfolio.FilterMethod = _.find(self.filterMethods, {value: self.filterMethod()}).title;
	                newPortfolio.AdHocFilter = self.jsonFilter();
	                newPortfolio.Icon = self.icon();
	                newPortfolio.Title = self.title();
	                newPortfolio.Description_cc_ = self.description();
	                newPortfolio.Projects = [];
	                $.each(self.projectsInPortfolio(), function(index, project){
	                    newPortfolio.Projects.push({ItemId: project, Title: _.find(self.projects(), {Id: project}).Title});
	                });
	                if(self.filterInPortfolio() !== undefined && self.filterInPortfolio() !== '' && self.filterInPortfolio() !== null){
	                    newPortfolio.ProjectFilter = [];
	                    newPortfolio.ProjectFilter = new cnc.objects.relation();
	                    newPortfolio.ProjectFilter.ItemId = self.filterInPortfolio();
	                    newPortfolio.ProjectFilter.Id = _.find(cmApp.availableDataSources, {Title: 'Portfolios'}).Id;
	                    newPortfolio.ProjectFilter.Title = _.find(self.portfolioFilters(), {Id: self.filterInPortfolio()}).Title;
	                }
	
	
	                ds.sync().done(function (data) {
	                    self.portfolioDS.query({
	                        sort: { field: "CreateDate", dir: "desc" },
	                        pageSize: 1
	                    }).done(function() {
	                        cmApp.refreshPortfolios()
	                            .fail(function (results) {
	                            })
	                            .then(function (results) {
	                                cmApp.setSelectedPortfolio(self.portfolioDS.data()[0].Id);
	                            });
	                        cmApp.unblockUI();
	                        cc.notification.trigger('success', {
	                            title: 'Portfolio Saved',
	                            message: ''
	                        });
	                    });
	                });
	            }
	        });
	    };
	    self.portfolioDS = null;
	    self.setPortfolioDS = function(){
	        var ds = _.find(cmApp.availableDataSources, {
	            Title : 'Portfolios',
	            CrossAppAccessLevel : 'Contributor'
	        });
	        var connId = ds.ConnectionId;
	        var listId = ds.Id;
	
	        cc.api.getConnectionListModelById(connId, listId).then(function (model) {
	            var listItemDS = cc.api.getListItemDataSourceById(listId, {
	                schema : {
	                    model : model.listModel
	                },
	                ccModel : model
	            }, connId);
	
	            self.portfolioDS = listItemDS;
	        });
	
	    };
	    self.cancelNewPortfolio = function(){
	        cmApp.blockUI();
	        self.newPortfolio(false);
	        self.readPortfolio();
	        cmApp.unblockUI();
	    };
	    self.newPortfolioItem = function(){
	        self.portfolio(self.portfolioDS.add());
	        self.newPortfolio(true);
	        self.title('');
	        self.filterMethod('2');
	        self.projectsInPortfolio.removeAll();
	        self.filterInPortfolio(null);
	        self.jsonFilter('');
	        self.icon('fa-question');
	        self.description('');
	    };
	    self.savePortfolio = function(){
	        cmApp.blockUI();
	        var newId = null;
	        self.portfolio().FilterMethod = _.find(self.filterMethods, {value: self.filterMethod()}).title;
	        self.portfolio().AdHocFilter = self.jsonFilter();
	        self.portfolio().Icon = self.icon();
	        self.portfolio().Title = self.title();
	        self.portfolio().Description_cc_ = self.description();
	        self.portfolio().Projects = [];
	        $.each(self.projectsInPortfolio(), function(index, project){
	            self.portfolio().Projects.push({ItemId: project, Title: _.find(self.projects(), {Id: project}).Title});
	        });
	        if(self.filterInPortfolio() !== undefined && self.filterInPortfolio() !== '' && self.filterInPortfolio() !== null){
	            self.portfolio().ProjectFilter = [];
	            self.portfolio().ProjectFilter = new cnc.objects.relation();
	            self.portfolio().ProjectFilter.ItemId = self.filterInPortfolio();
	            self.portfolio().ProjectFilter.Id = _.find(cmApp.availableDataSources, {Title: 'Portfolios'}).Id;
	            self.portfolio().ProjectFilter.Title = _.find(self.portfolioFilters(), {Id: self.filterInPortfolio()}).Title;
	        }
	        self.portfolioDS.sync().done(function(){
	
	            self.newPortfolio(false);
	            self.portfolioDS.query({
	                sort: { field: "CreateDate", dir: "desc" },
	                pageSize: 1
	            }).done(function() {
	                cmApp.refreshPortfolios()
	                    .fail(function (results) {
	                    })
	                    .then(function (results) {
	                        cmApp.setSelectedPortfolio(self.portfolioDS.data()[0].Id);
	                    });
	                cmApp.unblockUI();
	                cc.notification.trigger('success', {
	                    title: 'Portfolio Saved',
	                    message: ''
	                });
	            });
	
	        });
	    };
	    self.loadPortfolioBuilder = function () {
	        cmApp.blockUI();
	        self.listId = _.find(cmApp.availableDataSources, {Title: 'Projects', CrossAppAccessLevel: 'Viewer'}).Id.toString();
	        self.connId = _.find(cmApp.availableDataSources, {Title: 'Projects', CrossAppAccessLevel: 'Viewer'}).ConnectionId.toString();
	        self.listId = self.listId.toLowerCase();
	        self.connId = self.connId.toLowerCase();
	
	        self.portfolioDfer = $.Deferred();
	        self.projectsDfer = $.Deferred();
	        self.portfolioFiltersDfer = $.Deferred();
	        self.projectsInPortfolio.removeAll();
	        self.filterInPortfolio(null);
	        self.portfolioFilters.removeAll();
	        self.filterMethod('2');
	        self.jsonFilter('');
	        self.icon = ko.observable('fa-square-o');
	        self.title = ko.observable();
	        self.portfolioManager = ko.observable();
	        self.description = ko.observable();
	        self.newPortfolio = ko.observable(false);
	        self.validFormData = ko.computed(
	            function() {
	                if(self.title() === ''){
	                    return false;
	                }
	                if(self.filterMethod() == '0' && self.projectsInPortfolio().length === 0){
	                    return false;
	                }
	                if(self.filterMethod() == '1' && self.filterInPortfolio() === null){
	                    return false;
	                }
	                if(self.filterMethod() == '2' && self.jsonFilter() === ''){
	                    return false;
	                }
	                if(self.icon() === ''){
	                    return false;
	                }
	                return true;
	            }, this);
	        self.setPortfolioDS();
	        cmApp.datasource('Projects').done(function (ds) {
	            if (ds === null) {
	                // console.log('Handle condition when datasource connection not found');
	            } else {
	                ds.query().then(function () {
	                    if (ds.data().length >= 1) {
	                        $.each(ds.data(), function(index, project){
	                            self.projects.push(project);
	                        });
	                        self.projectsDfer.resolve();
	                    } else {
	                        // console.log('Handle condition when no data is returned');
	                    }
	                });
	            }
	        });
	        cmApp.datasource('Portfolio Filters').done(function (ds) {
	            if (ds === null) {
	                // console.log('Handle condition when datasource connection not found');
	            } else {
	                ds.query().then(function () {
	                    if (ds.data().length >= 1) {
	                        $.each(ds.data(), function(index, filter){
	                            self.portfolioFilters.push(filter);
	                        });
	                        self.portfolioFiltersDfer.resolve();
	                    } else {
	                        // console.log('Handle condition when no data is returned');
	                    }
	                });
	            }
	        });
	
	        $.when(self.projectsDfer, self.portfolioFiltersDfer).done(function () {
	            cmApp.unblockUI();
	            self.readPortfolio();
	            self.ready(true);
	        });
	    };
	
	    self.readPortfolio = function(){
	        cmApp.blockUI();
	        cmApp.datasource('Portfolios').done(function (ds) {
	            if (ds === null) {
	                // console.log('Handle condition when datasource connection not found');
	            } else {
	                //Filters and other settings as needed
	                var filter = '{"logic":"and","filters":[{"field":"Id","operator":"eq","value":"' + cmApp.selectedPortfolio + '"}]}';
	                //ds.filter(JSON.parse(filter));
	                ds.query({
	                    filter: JSON.parse(filter)
	                    }).then(function () {
	                    if (ds.data().length >= 1) {
	                        if (ds.data()[0].FilterMethod !== undefined && ds.data()[0].FilterMethod !== '') {
	                            self.filterMethod(_.find(self.filterMethods, {title: ds.data()[0].FilterMethod}).value);
	                        }
	                        self.portfolio(ds.data()[0]);
	                        $.each(ds.data()[0].Projects, function (index, project) {
	                            self.projectsInPortfolio.push(project.ItemId);
	                        });
	                        if (ds.data()[0].ProjectFilter !== undefined && ds.data()[0].ProjectFilter.Id !== undefined) {
	                            self.filterInPortfolio(ds.data()[0].ProjectFilter.ItemId);
	                        }
	                        if (ds.data()[0].AdHocFilter !== undefined) {
	                            self.jsonFilter(ds.data()[0].AdHocFilter);
	                        }
	                        if (ds.data()[0].Icon !== undefined) {
	                            self.icon(ds.data()[0].Icon);
	                        }
	                        if (ds.data()[0].Title !== undefined) {
	                            self.title(ds.data()[0].Title);
	                        }
	                        self.portfolioManager(ds.data()[0].CreatedBy.DisplayName);
	                        if (ds.data()[0].Description_cc_ !== undefined) {
	                            self.description(ds.data()[0].Description_cc_);
	                        }
	                        self.portfolioDS = ds;
	                        self.portfolioDfer.resolve();
	                        cmApp.unblockUI();
	                    } else {
	                        if((cmApp.selectedPortfolio == "none" || cmApp.selectedPortfolio === null) && cmApp.portfolios.length === 0){
	                            self.newPortfolioItem();
	                        }
	                        self.portfolioDS = null;
	                        self.portfolioDfer.resolve();
	                        cmApp.unblockUI();
	                    }
	                });
	            }
	        });
	
	    };
	    $.when(cmApp.ready).done(function () {
	        self.loadPortfolioBuilder();
	        cc.events.on('cmAppNewPortfolioSelected', function (evt) {
	            self.readPortfolio();
	        }, self);
	    });
	}
	
	$.extend(true, PortfolioBuilder.prototype, {
	    dispose: function () {
	        cc.events.off('cmAppNewPortfolioSelected');
	    },
	
	    initSubscriptions: function () {
	        var self = this;
	
	    },
	
	    initComponent: function (view) {
	//        this.campusPicker = $('.campusPicker', view).kendoDropDownList().data("kendoDropDownList");
	    }
	});
	
	function createViewModel(params, componentInfo) {
	    return new PortfolioBuilder(params);
	}
	
	module.exports = {
	    viewModel: {
	        createViewModel: createViewModel
	    },
	    template: template
	};


/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = "\r\n<!-- ko with: $component.portfolio -->\r\n\r\n<div>\r\n    <div class=\"row\" data-bind=\"visible: $component.newPortfolio()\">\r\n        <div class=\"col-md-12\">\r\n            <button type=\"button\" class=\"btn btn-default\" data-bind=\"click: $component.savePortfolio, enable: $component.validFormData\">Save</button>\r\n            <button type=\"button\" class=\"btn btn-default\" data-bind=\"click: $component.cancelNewPortfolio\">Cancel</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" data-bind=\"visible: !$component.newPortfolio()\">\r\n        <div class=\"col-md-12\">\r\n            <button type=\"button\" class=\"btn btn-default\" data-bind=\"click: $component.updatePortfolio, enable: $component.validFormData\" >Update</button>\r\n            <button type=\"button\" class=\"btn\" data-bind=\"click: $component.savePortfolioAs, enable: $component.validFormData\">Save As</button>\r\n            <i class=\"fa fa-fw fa-2x fa-plus\" title=\"Add New Portfolio\" data-bind=\"click: $component.newPortfolioItem\"></i>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-2\">Title</div>\r\n        <div class=\"col-md-3\"><input data-bind=\"textInput: $component.title\" /></div>\r\n        <div class=\"col-md-1\"><i data-bind=\"css: 'fa fa-2x fa-fw ' + $component.icon(), click: $component.toggleShowIcons\"></i>\r\n        </div>\r\n        <div data-bind=\"visible: $component.showIcons\">\r\n            <icon-builder params=\"selected: $component.icon\"></icon-builder>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-2\">Portfolio Manager</div>\r\n        <div data-bind=\"text: $component.portfolioManager\" class=\"col-md-3\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-2\">Description</div>\r\n        <div class=\"col-md-10\">\r\n            <textarea rows=\"10\" cols=\"20\" data-bind=\"kendoEditor: $component.description\" > </textarea>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-2\">Filter Method</div>\r\n        <div class=\"col-md-2\">\r\n            <input data-bind=\"kendoDropDownList: { data: $component.filterMethods, value: $component.filterMethod, dataTextField: 'title', dataValueField: 'value' }\" />\r\n        </div>\r\n        <div class=\"col-md-8\">\r\n            <div class=\"row\" data-bind=\"visible: $component.filterMethod() == '0'\">\r\n                <div class=\"col-md-4\">\r\n                    <select data-bind=\"kendoMultiSelect: { dataTextField: 'Title', dataValueField: 'Id',\r\n                data: $component.projects,\r\n               value: $component.projectsInPortfolio}\"></select>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\" data-bind=\"visible: $component.filterMethod() == '1'\">\r\n                <div class=\"col-md-4\">\r\n                    <select data-bind=\"kendoDropDownList: { dataTextField: 'Title', dataValueField: 'Id',\r\n                data: $component.portfolioFilters,\r\n               value: $component.filterInPortfolio}\"></select>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\" data-bind=\"visible: $component.filterMethod() == '2'\">\r\n                <div class=\"col-md-9\">\r\n                    <cn-app-filter-builder params=\"listId: $component.listId,\r\n                                  connId: $component.connId,\r\n                                  jsonFilter: $component.jsonFilter\">\r\n                    </cn-app-filter-builder>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\" data-bind=\"visible: $component.filterMethod() == '2'\">\r\n                <div class=\"col-md-2\">Filter Code</div>\r\n                <div class=\"col-md-9\">\r\n                    <span data-bind=\"text: $component.jsonFilter\"></span>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"row\" data-bind=\"visible: $component.filterMethod() == '2'\">\r\n        <div class=\"col-md-2\">Filtered Projects Preview</div>\r\n        <div class=\"col-md-9\">\r\n            Count: <span data-bind=\"text: $component.filteredProjects().length\"></span>\r\n            <ul data-bind=\"foreach: $component.filteredProjects\">\r\n                <li data-bind=\"text: Title\"></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /ko -->\r\n"

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var _ = cc.lodash,
	    template = __webpack_require__(29),
	    fn = cc.fn;
	
	/**
	 * @summary Query Builder component
	 * @desc Query Builder component
	 * <br />
	 * Creates a Query Builder
	 * @namespace
	 * @example <caption>Query Builder Description</caption>
	 * // Extension JS
	 * // Boilerplate Extension JS code works
	 * //
	 * // Extension HTML
	 * // <cn-cm-query-builder></cn-cm-query-builder>
	 */
	function QueryBuilder(params) {
	    var self = this;
	    self.filterMethods = [
	        {title: "Selected Projects", value: '0'},
	        {title: "Preset Filter", value: '1'},
	        {title: "AdHoc Filter", value: '2'}
	        ];
	
	    self.ready = ko.observable(false);
	
	    var ds = _.find(cmApp.availableDataSources, {
	        Title : 'Projects',
	        CrossAppAccessLevel : 'Viewer'
	    });
	    var connId = ds.ConnectionId;
	    var listId = ds.Id;
	
	    self.listId = ds.Id; //'ab839124-cf89-482e-b668-8a81e44212d9' ; //_.find(cmApp.availableDataSources, {Title: 'Projects', CrossAppAccessLevel: 'Viewer'}).Id;
	    self.connId = ds.ConnectionId; //'f47cb2c2-0156-4f60-8ddd-c048c615f9e7'; //_.find(cmApp.availableDataSources, {Title: 'Projects', CrossAppAccessLevel: 'Viewer'}).ConnectionId;
	    self.listId = self.listId.toLowerCase();
	    self.connId = self.connId.toLowerCase();
	    // jsonFilter updated on Apply/Reset
	    self.jsonFilter = ko.observable('');
	    self.filteredProjects = ko.observableArray();
	    self.jsonFilter.subscribe(function( val ) {
	        //do something with the JSON Filter
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
	            if(self.jsonFilter() !== ''){
	                projectDS.filter(JSON.parse(self.jsonFilter()));
	            } else {
	                projectDS.filter('');
	            }
	            self.filteredProjects.removeAll();
	            if(self.jsonFilter() !== ''){
	                projectDS.query({
	                    sort: { field: "Title", dir: "asc" },
	                    filter: JSON.parse(self.jsonFilter())
	                }).then(function () {
	                    $.each(projectDS.data(), function(index, project){
	                        self.filteredProjects.push(project);
	                    });
	                });
	            }
	        });
	    });
	
	    self.filterMethod = ko.observable(2);
	    self.query = ko.observable();
	    self.queryDS = null;
	
	    self.projects = ko.observableArray();
	
	    self.projectsInQuery = ko.observableArray();
	    self.filterInQuery = ko.observable();
	    self.iconClickHandlerAdded = false;
	    self.showIcons = ko.observable(false);
	    self.toggleShowIcons = function(){
	        self.showIcons(!self.showIcons());
	        if(!self.iconClickHandlerAdded){
	            $('icon-builder div#iconBuilder div div div i').click(function(evt) {
	                self.icon(this.classList[this.classList.length - 1]);
	                self.toggleShowIcons();
	            });
	        }
	    };
	    self.queryDfer = $.Deferred();
	    self.projectsDfer = $.Deferred();
	    self.queryFiltersDfer = $.Deferred();
	    self.queryFilters = ko.observableArray();
	    self.queryDS = null;
	    self.setQueryDS = function(){
	        var ds = _.find(cmApp.availableDataSources, {
	            Title : 'Executive Dashboards',
	            CrossAppAccessLevel : 'Contributor'
	        });
	        var connId = ds.ConnectionId;
	        var listId = ds.Id;
	
	        cc.api.getConnectionListModelById(connId, listId).then(function (model) {
	            var listItemDS = cc.api.getListItemDataSourceById(listId, {
	                schema : {
	                    model : model.listModel
	                },
	                ccModel : model
	            }, connId);
	
	            self.queryDS = listItemDS;
	            self.setQueryDSDfer.resolve();
	        });
	
	    };
	    self.cancelNewQuery = function(){
	        cmApp.blockUI();
	        self.newQuery(false);
	        self.readQuery();
	        cmApp.unblockUI();
	    };
	    self.newQueryItem = function(){
	        self.query(self.queryDS.add());
	        self.newQuery(true);
	        self.title('');
	        self.filterMethod('2');
	        self.projectsInQuery.removeAll();
	        self.filterInQuery(null);
	        self.jsonFilter('');
	        self.icon('fa-question');
	        self.description('');
	    };
	    self.saveQuery = function() {
	        var newid = cnc.fn.generateUUID();
	        cmApp.addQueryToPortfolios({
	            title: 'Query: ' + self.title(),
	            adHocFilter: self.jsonFilter(),
	            projectFilter: null,
	            id: newid,
	            projectIds: null,
	            filterMethod: _.find(self.filterMethods, {value: self.filterMethod()}).title,
	            icon: null
	        }).then(function(){
	            cmApp.setSelectedPortfolio(newid);
	
	        });
	    };
	    self.loadQueryBuilder = function () {
	        cmApp.blockUI();
	        // Set up ajax defaults
	        $.ajaxSetup({
	            method: "GET",
	            contentType: 'application/json',
	            headers: {
	                Accept: 'application/json,odata.metadata=minimal',
	                AppId: cmApp.getAppId('Data')
	            },
	            cache: false
	        });
	
	        self.queryDfer = $.Deferred();
	        self.projectsDfer = $.Deferred();
	        self.queryFiltersDfer = $.Deferred();
	        self.projectsInQuery.removeAll();
	        self.filterInQuery(null);
	        self.queryFilters.removeAll();
	        self.filterMethod('2');
	        self.jsonFilter('');
	        self.icon = ko.observable('fa-square-o');
	        self.title = ko.observable();
	        self.description = ko.observable();
	        self.newQuery = ko.observable(false);
	        self.validFormData = ko.computed(
	            function() {
	                if(self.title() === ''){
	                    return false;
	                }
	                if(self.filterMethod() == '0' && self.projectsInQuery().length === 0){
	                    return false;
	                }
	                if(self.filterMethod() == '1' && self.filterInQuery() === null){
	                    return false;
	                }
	                if(self.filterMethod() == '2' && self.jsonFilter() === ''){
	                    return false;
	                }
	                if(self.icon() === ''){
	                    return false;
	                }
	                return true;
	            }, this);
	        cmApp.datasource('Projects').done(function (ds) {
	            if (ds === null) {
	                // console.log('Handle condition when datasource connection not found');
	            } else {
	                ds.query().then(function () {
	                    if (ds.data().length >= 1) {
	                        $.each(ds.data(), function(index, project){
	                            self.projects.push(project);
	                        });
	                        self.projectsDfer.resolve();
	                    } else {
	                        // console.log('Handle condition when no data is returned');
	                    }
	                });
	            }
	        });
	        cmApp.datasource('Portfolio Filters').done(function (ds) {
	            if (ds === null) {
	                // console.log('Handle condition when datasource connection not found');
	            } else {
	                ds.query().then(function () {
	                    if (ds.data().length >= 1) {
	                        $.each(ds.data(), function(index, filter){
	                            self.queryFilters.push(filter);
	                        });
	                        self.queryFiltersDfer.resolve();
	                    } else {
	                        // console.log('Handle condition when no data is returned');
	                    }
	                });
	            }
	        });
	
	        $.when(self.projectsDfer, self.queryFiltersDfer).done(function () {
	            cmApp.unblockUI();
	            self.readQuery();
	            self.ready(true);
	        });
	    };
	
	    self.readQuery = function(){
	        cmApp.blockUI();
	        cmApp.datasource('Executive Dashboards').done(function (ds) {
	            if (ds === null) {
	                // console.log('Handle condition when datasource connection not found');
	            } else {
	                //Filters and other settings as needed
	                var filter = '{"logic":"and","filters":[{"field":"Id","operator":"eq","value":"' + cmApp.selectedExecutiveDashboard + '"}]}';
	                //ds.filter(JSON.parse(filter));
	                ds.query({
	                    filter: JSON.parse(filter)
	                }).then(function () {
	                    if(ds.data().length === 0){
	                        self.newQueryItem();
	                        self.queryDfer.resolve();
	                        cmApp.unblockUI();
	                    } else {
	                        self.newQuery(false);
	
	                        if (ds.data()[0].FilterMethod !== undefined && ds.data()[0].FilterMethod !== '') {
	                            self.filterMethod(_.find(self.filterMethods, {title: ds.data()[0].FilterMethod}).value);
	                        }
	                        self.query(ds.data()[0]);
	                        $.each(ds.data()[0].Projects, function (index, project) {
	                            self.projectsInQuery.push(project.ItemId);
	                        });
	                        if (ds.data()[0].ProjectFilter !== undefined && ds.data()[0].ProjectFilter.Id !== undefined) {
	                            self.filterInQuery(ds.data()[0].ProjectFilter.ItemId);
	                        }
	                        if (ds.data()[0].AdHocFilter !== undefined) {
	                            self.jsonFilter(ds.data()[0].AdHocFilter);
	                        }
	                        if (ds.data()[0].Icon !== undefined) {
	                            self.icon(ds.data()[0].Icon);
	                        }
	                        if (ds.data()[0].Title !== undefined) {
	                            self.title(ds.data()[0].Title);
	                        }
	                        if (ds.data()[0].Description_cc_ !== undefined) {
	                            self.description(ds.data()[0].Description_cc_);
	                        }
	                        self.queryDfer.resolve();
	                        cmApp.unblockUI();
	                    }
	
	                });
	            }
	        });
	
	    };
	    self.setQueryDSDfer = $.Deferred();
	
	    $.when(cmApp.ready).done(function () {
	        self.setQueryDS();
	    });
	    $.when(self.setQueryDSDfer).done(function () {
	        self.loadQueryBuilder();
	        cc.events.on('cmAppNewExecutiveDashboardSelected', function (evt) {
	            self.readQuery();
	        }, self);
	    });
	}
	
	$.extend(true, QueryBuilder.prototype, {
	    dispose: function () {
	        cc.events.off('cmAppNewExecutiveDashboardSelected');
	    },
	
	    initSubscriptions: function () {
	        var self = this;
	
	    },
	
	    initComponent: function (view) {
	//        this.campusPicker = $('.campusPicker', view).kendoDropDownList().data("kendoDropDownList");
	    }
	});
	
	function createViewModel(params, componentInfo) {
	    return new QueryBuilder(params);
	}
	
	module.exports = {
	    viewModel: {
	        createViewModel: createViewModel
	    },
	    template: template
	};


/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "<!-- ko with: $component.query -->\r\n\r\n<div>\r\n    <div class=\"row\" data-bind=\"visible: $component.newQuery()\">\r\n        <div class=\"col-md-12\">\r\n            <button type=\"button\" class=\"btn btn-default\" data-bind=\"click: $component.saveQuery, enable: $component.validFormData\">Activate (temporary)</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" data-bind=\"visible: !$component.newQuery()\">\r\n        <div class=\"col-md-12\">\r\n            <button type=\"button\" name=\"filterMode\" class=\"btn btn-default\" data-bind=\"click: $component.updateQuery, enable: $component.validFormData\" >Update</button>\r\n            <button type=\"button\" name=\"filterMode\" class=\"btn\" data-bind=\"click: $component.saveQueryAs, enable: $component.validFormData\">Save As</button>\r\n            <i class=\"fa fa-fw fa-2x fa-plus\" title=\"Add New Query\" data-bind=\"click: $component.newQueryItem\"></i>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-2\">Title</div>\r\n        <div class=\"col-md-3\"><input data-bind=\"textInput: $component.title\" /></div>\r\n        <div style=\"display: none\"  class=\"col-md-1\"><i data-bind=\"css: 'fa fa-2x fa-fw ' + $component.icon(), click: $component.toggleShowIcons\"></i>\r\n        </div>\r\n        <div data-bind=\"visible: $component.showIcons\">\r\n            <icon-builder params=\"selected: $component.icon\"></icon-builder>\r\n        </div>\r\n\r\n    </div>\r\n    <div style=\"display: none\" class=\"row\">\r\n        <div class=\"col-md-2\">Description</div>\r\n        <div class=\"col-md-10\">\r\n            <textarea rows=\"10\" cols=\"20\" data-bind=\"kendoEditor: $component.description\" > </textarea>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div style=\"display: none\"  class=\"col-md-2\">Filter Method</div>\r\n        <div style=\"display: none\"  class=\"col-md-2\">\r\n            <input data-bind=\"kendoDropDownList: { data: $component.filterMethods, value: $component.filterMethod, dataTextField: 'title', dataValueField: 'value' }\" />\r\n        </div>\r\n        <div class=\"col-md-8\">\r\n            <div class=\"row\" data-bind=\"visible: $component.filterMethod() == '0'\">\r\n                <div class=\"col-md-4\">\r\n                    <select data-bind=\"kendoMultiSelect: { dataTextField: 'Title', dataValueField: 'Id',\r\n                data: $component.projects,\r\n               value: $component.projectsInQuery}\"></select>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\" data-bind=\"visible: $component.filterMethod() == '1'\">\r\n                <div class=\"col-md-4\">\r\n                    <select data-bind=\"kendoDropDownList: { dataTextField: 'Title', dataValueField: 'Id',\r\n                data: $component.queryFilters,\r\n               value: $component.filterInQuery}\"></select>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\" data-bind=\"visible: $component.filterMethod() == '2'\">\r\n                <div class=\"col-md-9\">\r\n                    <cn-app-filter-builder params=\"listId: $component.listId,\r\n                                  connId: $component.connId,\r\n                                  jsonFilter: $component.jsonFilter\">\r\n                    </cn-app-filter-builder>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\" data-bind=\"visible: $component.filterMethod() == '2'\">\r\n                <div style=\"display: none\"  class=\"col-md-2\">Filter Code</div>\r\n                <div class=\"col-md-9\">\r\n                    <span data-bind=\"text: $component.jsonFilter\"></span>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"row\" data-bind=\"visible: $component.filterMethod() == '2'\">\r\n        <div style=\"display: none\"  class=\"col-md-2\">Filtered Projects Preview</div>\r\n        <div class=\"col-md-9\">\r\n            Count: <span data-bind=\"text: $component.filteredProjects().length\"></span>\r\n            <ul data-bind=\"foreach: $component.filteredProjects\">\r\n                <li data-bind=\"text: Title\"></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /ko -->\r\n"

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var _ = cc.lodash,
	    template = __webpack_require__(31),
	    fn = cc.fn;
	
	/**
	 * @summary Comment Collaborate component
	 * @desc Comment Collaborate component
	 * <br />
	 * Creates Comment Collaborate
	 * @namespace
	 * @example <caption>Comment Collaborate Description</caption>
	 * // Extension JS
	 * // Boilerplate Extension JS code works
	 * //
	 * // Extension HTML
	 * // <cn-cm-comment-collaborate></cn-cm-comment-collaborate>
	 */
	function CommentCollaborate(params) {
	    cmApp.blockUI();
	    var self = this;
	    self.ready = ko.observable(false);
	    self.projects = ko.observableArray();
	    self.project = ko.observable();
	    self.projectComments = ko.observableArray();
	    self.workingProjectRelation = new cnc.objects.relation();
	    self.workingProjectId = ko.observable(null);
	    self.workingProjectId.subscribe(function (newProjectId) {
	        self.loadCommentCollaborate();
	    });
	
	    self.currentColumn = ko.observable('');
	    self.currentColumnTitle = ko.observable('');
	    self.commentColumns = [];
	    self.commentColumns.push({title: 'Project',   column: 'Title', type: 'text'});
	    self.commentColumns.push({title: 'Cost KPI', column: 'CostKPI', type: 'kpi'});
	    self.commentColumns.push({title: 'Schedule KPI', column: 'ScheduleKPI', type: 'kpi'});
	    self.commentColumns.push({title: 'Performance KPI', column: 'PerformanceKPI', type: 'kpi'});
	    self.commentColumns.push({title: 'Proposed Start Date', column: 'ProposedStartDate', type: 'date'});
	    self.commentColumns.push({title: 'Proposed End Date', column: 'ProposedEndDate', type: 'date'});
	    self.commentColumns.push({title: 'Proposed Budget', column: 'ProposedBudget', type: 'currency'});
	    self.commentColumns.push({title: 'Business FTE', column: 'BusinessFTE', type: 'number'});
	    self.commentColumns.push({title: 'Technical FTE', column: 'TechnicalFTE', type: 'number'});
	    self.commentColumns.push({title: 'Long Term FTE', column: 'LongTermFTE', type: 'number'});
	    self.commentColumns.push({title: 'Primary PM', column: 'PrimaryPM'});
	
	    $.each(self.commentColumns, function(index, comment){
	       comment.count = ko.observable(0);
	    });
	    self.columnDisplayValue = function(column, type){
	        var definition = _.find(this.commentColumns, {column: type});
	        if (typeof column == 'undefined' || column === null){
	            return null;
	        }
	        if(typeof column == 'string'){
	            if (definition.type == 'text')
	                return column;
	
	            return column;
	        }
	        if(typeof column == 'number'){
	            if (definition.type == 'currency')
	                return self.CurrencyFormatted(column);
	            return column;
	        }
	        if(typeof column == 'object' && typeof column.Title !== 'undefined' ){
	            if (definition.type == 'kpi'){
	                var markup = '';
	                markup += '<div class="kpi_' + column.Title + '">';
	                markup += '<span class="indicator">' + column.Title.substr(0,1) + '</span> - ';
	                markup += '<span>' + column.Title + '</span>';
	                markup +=  '</div>';
	                return markup;
	            }
	            return column.Title;
	        }
	        if(typeof column == 'object' && definition.type == 'date' ){
	            return moment(column).format('M/D/YYYY');
	        }
	        if(typeof column == 'object' && typeof column.DisplayName !== 'undefined' ){
	            return column.DisplayName;
	        }
	    };
	    $.when(cmApp.ready).done(function () {
	
	        self.availableDataSources = cmApp.availableDataSources;
	        self.views = ko.observableArray();
	        var projectsList = _.find(cmApp.availableDataSources, {Title: 'Projects'}); // Get the list details
	        self.selectedProject = cmApp.selectedProject;
	        self.projectsInPortfolio = cmApp.projectsInPortfolio;
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
	        self.addComment = function(item, evt){
	            cmApp.blockUI('Adding Comment');
	            cmApp.datasource('Journal', true).done(function (ds) {
	                if (ds === null) {
	                } else {
	                    self.workingProjectRelation.Id = _.find(cmApp.availableDataSources, {Title: 'Projects'}).Id;
	                    self.workingProjectRelation.ItemId = self.workingProjectId();
	                    self.workingProjectRelation.Title = self.project().Title;
	                    var view = window.location.href.split('?AppId=')[1].split('#/view/')[1];
	                    var newComment = ds.add();
	                    newComment.Title = self.newComment.title();
	                    newComment.Note = self.newComment.note();
	                    newComment.JournalType = "User Comment";
	                    newComment.AppId_cc_= cmApp.currentAppId;
	                    newComment.View = view;
	                    newComment.ViewTitle = self.getViewTitle(view);
	                    newComment.Project = self.workingProjectRelation;
	                    newComment.ColumnName = self.currentColumn();
	                    newComment.AppId_cc_ = cmApp.currentAppId;
	                    ds.sync().done(function (msg) {
	                        cc.notification.trigger('success', {
	                            title: 'User Comment Added',
	                            message: ''
	                        });
	                        self.loadCommentCollaborate();
	                        self.newComment.title('');
	                        self.newComment.note('');
	                        cmApp.unblockUI();
	                    });
	                }
	            });
	        };
	        self.showComments = function(item, evt){
	            self.currentColumn(item.column.column);
	            self.currentColumnTitle(item.column.title);
	            $(evt.target.parentElement.parentElement).siblings().removeClass('active');
	            $(evt.target.parentElement.parentElement).addClass('active');
	
	        };
	        self.newComment = {title: ko.observable(''), note: ko.observable("")};
	        self.projectsDfer = $.Deferred();
	        self.projectsInPortfolio = cmApp.projectsInPortfolio;
	        var projectFilter = null;
	        if (cmApp.thisApp == 'Onboard') {
	            // projectFilter = "Category/Title+eq+%27Submitted%27";
	        }
	        if (cmApp.thisApp == 'Projects') {
	            projectFilter = JSON.parse('{"logic":"and","filters":[{"field":"Id","operator":"eq","value":"' + self.selectedProject + '"}]}');
	        }
	        if (cmApp.thisApp == 'Portfolios') {
	            if (self.projectsInPortfolio.length == 1) {
	                projectFilter = JSON.parse('{"logic":"and","filters":[{"field":"Id","operator":"eq","value":"' + self.projectsInPortfolio[0] + '"}]}');
	            } else {
	                projectFilter = JSON.parse('{"logic":"or","filters":[]}');
	                $.each(self.projectsInPortfolio, function (index, id) {
	                    projectFilter.filters.push(JSON.parse('{"field":"Id","operator":"eq","value":"' + id + '"}'));
	                });
	            }
	        }
	        self.projects.removeAll();
	        cmApp.datasource('Projects').done(function (ds) {
	            if (ds === null) {
	            } else {
	                if(projectFilter !== null){
	                    ds.filter(projectFilter);
	                }
	                ds.sort ( { field: "Title", dir: "asc" });
	                ds.read().then(function () {
	                    if (ds.data().length >= 1) {
	                        $.each(ds.data(), function(index, project){
	                            self.projects.push(project);
	                        });
	                    } else {
	                    }
	                    self.projectsDfer.resolve(ds.data());
	                });
	            }
	        });
	
	
	        self.loadCommentCollaborate = function () {
	            if(self.workingProjectId() === null){
	                return;
	            }
	            cmApp.blockUI();
	            self.commentsDfer = $.Deferred();
	            var commentsList = _.find(self.availableDataSources, {Title: 'Journal'}); // Get the list details
	            self.project(_.find(self.projects(), {Id: self.workingProjectId()}));
	            self.projectComments.removeAll();
	            $.each(self.commentColumns, function(index, comment){
	                comment.count(0);
	            });
	
	            commentFilter = JSON.parse('{"logic":"and","filters":[' +
	                '{"field":"Project/ItemId","operator":"eq","value":"' + self.workingProjectId() + '"}, ' +
	                '{"field":"JournalType","operator":"eq","value":"User Comment"}' +
	                ']}');
	
	            cmApp.datasource('Journal').done(function (ds) {
	                if (ds === null) {
	                } else {
	                    ds.filter(commentFilter);
	                    ds.sort ( { field: "CreateDate", dir: "desc" });
	                    ds.read().then(function () {
	                        if (ds.data().length >= 1) {
	                            $.each(ds.data(), function(index, comment){
	                                self.projectComments.push(comment);
	                                var commentCounter = _.find(self.commentColumns, { column: comment.ColumnName});
	                                if (commentCounter !== undefined){
	                                    commentCounter.count(commentCounter.count()+ 1);
	                                }
	                            });
	                        } else {
	                        }
	                    });
	                }
	            });
	
	
	
	
	/*            $.ajax({
	                url: window.location.origin + "/odata/Connections('" +
	                commentsList.ConnectionId + "')/Lists('" + commentsList.Id + "')/ListItems?" +
	                "&%24filter=Project/ItemId+eq+" + self.workingProjectId() +
	                "+and+ColumnName+ne+null" +
	                "&%24orderby=CreateDate+desc&%24count=true",
	                success:
	                /!*jshint -W083 *!/
	                    function (data, xhr) {
	                        $.each(data.value, function(index, comment) {
	                            self.projectComments.push(comment);
	
	                            var commentCounter = _.find(self.commentColumns, { column: comment.ColumnName});
	                            if (commentCounter !== undefined){
	                                commentCounter.count(commentCounter.count()+ 1);
	                            }
	                        });
	                },
	                error:
	                /!*jshint -W083 *!/
	                    function (xhr, ajaxOptions, thrownError) {
	                }
	            });*/
	
	            cmApp.unblockUI();
	        };
	        $.when(self.projectsDfer).done(function (projects) {
	            self.loadCommentCollaborate();
	            self.ready(true);
	            if(cmApp.getQueryVariable('projectId'))  {
	                self.workingProjectId(cmApp.getQueryVariable('projectId'));
	            }
	            cmApp.unblockUI();
	        });
	        self.CurrencyFormatted = function(amount)
	        {
	            var i = parseFloat(amount);
	            if(isNaN(i)) { i = 0.00; }
	            var minus = '';
	            if(i < 0) { minus = '-'; }
	            i = Math.abs(i);
	            i = parseInt((i + 0.005) * 100, 10);
	            i = i / 100;
	            s = i.toString();
	            if(s.indexOf('.') < 0) { s += '.00'; }
	            if(s.indexOf('.') == (s.length - 2)) { s += '0'; }
	            s = minus + s;
	            return s;
	        };
	    });
	
	}
	
	$.extend(true, CommentCollaborate.prototype, {
	    dispose: function () {
	        self.projectsDfer = $.Deferred();
	    },
	
	    initSubscriptions: function () {
	        var self = this;
	
	    },
	
	    initComponent: function (view) {
	//        this.campusPicker = $('.campusPicker', view).kendoDropDownList().data("kendoDropDownList");
	    }
	});
	
	function createViewModel(params, componentInfo) {
	    return new CommentCollaborate(params);
	}
	
	module.exports = {
	    viewModel: {
	        createViewModel: createViewModel
	    },
	    template: template
	};


/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = "<style>\r\n    .kpi_Red .indicator {\r\n        background-color: red;\r\n    }\r\n\r\n    .kpi_Yellow .indicator {\r\n        background-color: yellow;\r\n    }\r\n\r\n    .kpi_Green .indicator {\r\n        background-color: green;\r\n        color: white;\r\n    }\r\n\r\n    .indicator {\r\n        border-style: solid;\r\n        border-color: black;\r\n        border-width: thin;\r\n        padding: 5px;\r\n        font-weight: bold;\r\n    }\r\n    .projectSelector .k-widget.k-combobox.k-header{\r\n        width: 650px;\r\n    }\r\n</style>\r\n<div>\r\n    <input id=\"projectSelector\" class=\"projectSelector\" data-bind=\"kendoComboBox: { dataTextField: 'Title', dataValueField: 'Id',\r\n            data: $component.projects, filter: 'contains', value: $component.workingProjectId, }\" />\r\n    <!-- ko if: $component.ready() == true -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-8\">\r\n            <table class=\"table\">\r\n                <thead>\r\n                <tr>\r\n                    <th>Attribute</th>\r\n                    <th>Value</th>\r\n                    <th>Comments</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody data-bind=\"with: $component.project\">\r\n                <!-- ko foreach: $component.commentColumns -->\r\n                <!-- ko if: $parent[column] !== undefined -->\r\n                <tr>\r\n                    <th data-bind=\"html: title\"></th>\r\n                    <td data-bind=\"html: $component.columnDisplayValue($parent[column], column)\"></td>\r\n                    <td data-bind=\"template: { name: 'comment-template', data: {item: $parent, column: $data} }\"></td>\r\n                </tr>\r\n                <!-- /ko -->\r\n                <!-- /ko -->\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <div id=\"commentWindow\">\r\n                <!-- ko if: $component.currentColumnTitle() !== '' -->\r\n                <div data-bind=\"text: 'Comments for ' + $component.currentColumnTitle()\"></div>\r\n                <div class=\"panel-group\">\r\n                    <div class=\"panel panel-primary\">\r\n                        <div class=\"panel-heading bg-primary\">New Comment\r\n                            <!--<i class=\"fa fa-plus\" data-bind=\"visible: newComment.title() != '' && newComment.note() != '',click: $component.addComment.bind($data) \"></i>-->\r\n                        </div>\r\n                        <div class=\"panel-body\">\r\n                            <input placeholder=\"Enter comment title and..\" data-bind=\"textInput : newComment.title\" class=\"form-control\"\r\n                                   id=\"newCommentTitle\"/>\r\n                            <textarea placeholder=\"Enter comment body. Then add add button below that becomes visible when you have entered Title and Body\" data-bind=\"textInput : newComment.note\" class=\"form-control\" rows=\"5\"\r\n                                      id=\"newCommentNote\"></textarea>\r\n                        </div>\r\n                        <div class=\"panel-footer\">\r\n                            <button type=\"button\" id=\"newStickyAdd\" class=\"k-button pointer\" data-bind=\"visible: newComment.title() != '' && newComment.note() != '',click: $component.addComment.bind($data)\" >Add</button>&nbsp;\r\n                        </div>\r\n                    </div>\r\n                    <!-- ko with: $component.project -->\r\n                    <!-- ko foreach: $component.projectComments -->\r\n                    <!-- ko if: $component.currentColumn() == ColumnName -->\r\n                    <div class=\"panel panel-info\">\r\n                        <div class=\"panel-heading bg-primary\" data-bind=\"text:Title + ':' + ColumnName\"></div>\r\n                        <div class=\"panel-body\" data-bind=\"html: Note\"></div>\r\n                        <div class=\"panel-footer text-muted\">\r\n                            <span data-bind=\"html: CreatedBy.DisplayName\"></span>\r\n                            <span data-bind=\"html: moment(CreateDate).format('MM/DD/YYYY h:mm:ss a')\"></span>\r\n                        </div>\r\n                    </div>\r\n                    <!-- /ko -->\r\n                    <!-- /ko -->\r\n                    <!-- /ko -->\r\n                </div>\r\n                <!-- /ko -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /ko -->\r\n</div>\r\n\r\n<script type=\"text/html\" id=\"comment-template\">\r\n    <i class=\"fa fa-comments-o fa-lg\" data-bind=\"click: $component.showComments.bind($data)\"></i>&nbsp;\r\n    <span class=\"badge\" data-bind=\"visible: column.count() > 0, text: column.count, click: $component.showComments.bind($data)\"></span>\r\n</script>\r\n"

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var _ = cc.lodash,
	    template = __webpack_require__(33),
	    fn = cc.fn;
	
	//    $.getScript( "/libs/anychart/7.8.0/anychart_bundle.min.js", function( data, textStatus, jqxhr ) {
	// });
	/**
	 * @summary Portfolio Assessment component
	 * @desc Portfolio Assessment component
	 * <br />
	 * Creates an Anychart Portfolio Assessment
	 * @namespace
	 * @example <caption>Portfolio Assessment Description</caption>
	 * // Extension JS
	 * // Boilerplate Extension JS code works
	 * //
	 * // Extension HTML
	 * // <cn-cm-portfolio-assessment></cn-cm-portfolio-assessment>
	 */
	function PortfolioAssessment(params) {
	    var self = this;
	    self.ready = ko.observable(false);
	    self.readyDfer = $.Deferred();
	    self.anychartDfer = $.Deferred();
	    self.projects = ko.observableArray();
	    self.projectDetail = ko.observable();
	    self.projectDetailLoaded = ko.observable(false);
	    self.showDetail = function () {
	        self.projectDetail(this);
	        self.projectDetailLoaded(true);
	    };
	    $.when(cmApp.ready).done(function () {
	        // Set up ajax defaults
	        $.ajaxSetup({
	            method: "GET",
	            contentType: 'application/json',
	            headers: {
	                Accept: 'application/json,odata.metadata=minimal',
	                AppId: cmApp.getAppId('Data')
	            },
	            cache: false
	        });
	        self.availableDataSources = cmApp.availableDataSources;
	        var projectsList = _.find(cmApp.availableDataSources, {Title: 'Projects'}); // Get the list details
	        self.projectsInPortfolio = cmApp.projectsInPortfolio;
	
	        self.loadPortfolioAssessment = function () {
	            self.projectsInPortfolio = cmApp.projectsInPortfolio;
	            if(cmApp.thisApp == 'Portfolios' && self.projectsInPortfolio.length === 0){
	                return;
	            }
	            cmApp.blockUI();
	            $('#portfolioAssessmentChart').empty();
	
	            self.colorIndicatorsListDfer = $.Deferred();
	            self.colorIndicatorsList = _.find(cmApp.availableDataSources, {Title: 'Color Indicators'}); // Get the list details
	
	            self.reportCardListDfer = $.Deferred();
	            self.reportCardList = _.find(cmApp.availableDataSources, {Title: 'Report Card'}); // Get the list details
	
	            self.reportSettingsListDfer = $.Deferred();
	            self.reportSettingsList = _.find(cmApp.availableDataSources, {Title: 'Report Settings'}); // Get the list details
	            self.reportSettings = null;
	            self.taskStatusDfer = $.Deferred();
	            self.impactDfer = $.Deferred();
	            self.probabilityDfer = $.Deferred();
	            self.riskTypesDfer = $.Deferred();
	            self.issuesRedDfer = $.Deferred();
	            self.issuesYellowDfer = $.Deferred();
	            self.issuesGreenDfer = $.Deferred();
	            self.risksDfer = $.Deferred();
	            self.tasksOver60Dfer = $.Deferred();
	            self.tasks30to60Dfer = $.Deferred();
	            self.tasksLt30Dfer = $.Deferred();
	            self.projectsDfer = $.Deferred();
	            self.expensesPlannedDfer = $.Deferred();
	            self.expensesActualDfer = $.Deferred();
	            self.tasksNotStartedDfer = $.Deferred();
	            self.tasksInProgressDfer = $.Deferred();
	            self.selectedProject = cmApp.selectedProject;
	            self.projectsInPortfolio = cmApp.projectsInPortfolio;
	            var projectsList = _.find(self.availableDataSources, {
	                Title : 'Projects'
	            }); // Get the list details
	            var projectFilter = null;
	            var projectRelationFilter = null;
	            var scheduleKpiFilter = null;
	            var lateTasksFilter = null;
	            var healthKpiFilter = null;
	            var expensesFilter = null;
	            if (cmApp.thisApp == 'Projects') {
	                projectFilter = '{"logic":"or","filters":[{"field":"Id","operator":"eq","value":"' + cmApp.selectedProject + '"}]}';
	                projectRelationFilter = '{"logic":"or","filters":[{"field":"Project/ItemId","operator":"eq","value":"' + cmApp.selectedProject + '"}]}';
	                scheduleKpiFilter = JSON.parse('{"logic":"and","filters":[' +
	                    '{"field":"Project/ItemId","operator":"eq","value":"' + self.selectedProject + '",' + '"Filter":null},' +
	                    '{"field":"EndDate","operator":"lte","value":"' + moment().startOf('day').toISOString() + '","Filter":null},' +
	                    '{"field":"TaskStatus/ItemId","operator":"eq","value":"","Filter":null}' +
	                    ']}');
	                lateTasksFilter = JSON.parse('{"logic":"and","filters":[' +
	                    '{"field":"Project/ItemId","operator":"eq","value":"' + self.selectedProject + '",' + '"Filter":null},' +
	                    '{"field":"EndDate","operator":"lte","value":"","Filter":null},' +
	                    '{"field":"EndDate","operator":"gt","value":"","Filter":null},' +
	                    '{"field":"TaskStatus/ItemId","operator":"neq","value":"","Filter":null},' +
	                    '{"field":"SummaryTask","operator":"neq","value":true,"Filter":null},' +
	                    '{"field":"TopLevel","operator":"neq","value":true,"Filter":null}' +
	                    ']}');
	                healthKpiFilter = JSON.parse('{"logic":"and","filters":[' +
	                    '{"field":"Project/ItemId","operator":"eq","value":"' + self.selectedProject + '",' + '"Filter":null},' +
	                    '{"field":"RiskType/ItemId","operator":"eq","value":"","Filter":null},' +
	                    '{"field":"Impact/ItemId","operator":"eq","value":"","Filter":null}' +
	                    ']}');
	                expensesFilter = JSON.parse('{"logic":"and","filters":[{"field":"Project/ItemId","operator":"eq","value":"' + self.selectedProject + '","Filter":null}]}');
	            }
	            if (cmApp.thisApp == 'Portfolios') {
	                if (self.projectsInPortfolio.length == 1) {
	                    projectFilter = '{"logic":"or","filters":[{"field":"Id","operator":"eq","value":"' + self.projectsInPortfolio[0] + '"}]}';
	                    projectRelationFilter = '{"logic":"or","filters":[{"field":"Project/ItemId","operator":"eq","value":"' + self.projectsInPortfolio[0] + '"}]}';
	                    scheduleKpiFilter = JSON.parse('{"logic":"and","filters":[' +
	                        '{"field":"Project/ItemId","operator":"eq","value":"' + self.projectsInPortfolio[0] + '",' + '"Filter":null},' +
	                        '{"field":"EndDate","operator":"lte","value":"' + moment().startOf('day').toISOString() + '","Filter":null},' +
	                        '{"field":"TaskStatus/ItemId","operator":"eq","value":"","Filter":null}' +
	                        ']}');
	                    lateTasksFilter = JSON.parse('{"logic":"and","filters":[' +
	                        '{"field":"Project/ItemId","operator":"eq","value":"' + self.projectsInPortfolio[0] + '",' + '"Filter":null},' +
	                        '{"field":"EndDate","operator":"lte","value":"","Filter":null},' +
	                        '{"field":"EndDate","operator":"gt","value":"","Filter":null},' +
	                        '{"field":"TaskStatus/ItemId","operator":"neq","value":"","Filter":null},' +
	                        '{"field":"SummaryTask","operator":"neq","value":true,"Filter":null},' +
	                        '{"field":"TopLevel","operator":"neq","value":true,"Filter":null}' +
	                        ']}');
	                    healthKpiFilter = JSON.parse('{"logic":"and","filters":[' +
	                        '{"field":"Project/ItemId","operator":"eq","value":"' + self.projectsInPortfolio[0] + '",' + '"Filter":null},' +
	                        '{"field":"RiskType/ItemId","operator":"eq","value":"","Filter":null},' +
	                        '{"field":"Impact/ItemId","operator":"eq","value":"","Filter":null}' +
	                        ']}');
	                    expensesFilter = JSON.parse('{"logic":"and","filters":[{"field":"Project/ItemId","operator":"eq","value":"' + self.projectsInPortfolio[0] + '","Filter":null}]}');
	                } else {
	                    projectFilter = '{"logic":"or","filters":[';
	                    $.each(self.projectsInPortfolio, function (index, id) {
	                        projectFilter += '{"field":"Id","operator":"eq","value":"' + id + '"},';
	                    });
	                    projectFilter = projectFilter.substring(0, projectFilter.length - 1) + ']}';
	                    projectRelationFilter = '{"logic":"or","filters":[';
	                    $.each(self.projectsInPortfolio, function (index, id) {
	                        projectRelationFilter += '{"field":"Project/ItemId","operator":"eq","value":"' + id + '"},';
	                    });
	                    projectRelationFilter = projectRelationFilter.substring(0, projectRelationFilter.length - 1) + ']}';
	                    scheduleKpiFilter = JSON.parse('{"logic":"and","filters":[{"logic":"or","filters":[]},' +
	                        '{"field":"EndDate","operator":"lte","value":"' + moment().startOf('day').toISOString() + '","Filter":null},' +
	                        '{"field":"TaskStatus/ItemId","operator":"eq","value":"","Filter":null}' +
	                        ']}');
	                    lateTasksFilter = JSON.parse('{"logic":"and","filters":[{"logic":"or","filters":[]},' +
	                        '{"field":"EndDate","operator":"lte","value":"","Filter":null},' +
	                        '{"field":"EndDate","operator":"gt","value":"","Filter":null},' +
	                        '{"field":"TaskStatus/ItemId","operator":"neq","value":"","Filter":null},' +
	                        '{"field":"SummaryTask","operator":"neq","value":true,"Filter":null},' +
	                        '{"field":"TopLevel","operator":"neq","value":true,"Filter":null}' +
	                        ']}');
	                    healthKpiFilter = JSON.parse('{"logic":"and","filters":[{"logic":"or","filters":[]},' +
	                        '{"field":"RiskType/ItemId","operator":"eq","value":"","Filter":null},' +
	                        '{"field":"Impact/ItemId","operator":"eq","value":"","Filter":null}' +
	                        ']}');
	                    expensesFilter = JSON.parse('{"logic":"and","filters":[{"logic":"or","filters":[]}]}');
	                    $.each(self.projectsInPortfolio, function (index, id) {
	                        scheduleKpiFilter.filters[0].filters.push({
	                            "field" : "Project/ItemId",
	                            "operator" : "eq",
	                            "value" : id
	                        });
	                        lateTasksFilter.filters[0].filters.push({
	                            "field" : "Project/ItemId",
	                            "operator" : "eq",
	                            "value" : id
	                        });
	                        expensesFilter.filters[0].filters.push({
	                            "field" : "Project/ItemId",
	                            "operator" : "eq",
	                            "value" : id
	                        });
	                        healthKpiFilter.filters[0].filters.push({
	                            "field" : "Project/ItemId",
	                            "operator" : "eq",
	                            "value" : id
	                        });
	                    });
	                }
	            }
	            self.projects.removeAll();
	            self.projectDetail(null);
	            self.projectDetailLoaded(false);
	
	            cmApp.datasource('Color Indicators', false).done(function (ds) {
	                if (ds === null) {
	                    console.log('Color Indicators datasource connection not found');
	                } else {
	                    ds.query().then(function () {
	                        if (ds.data().length >= 1) {
	                            self.colorIndicators = ds.data();
	                            self.colorIndicatorsListDfer.resolve(ds.data());
	                        } else {
	                            console.log('No data is returned');
	                        }
	                    });
	                }
	            });
	
	            cmApp.datasource('Report Card', false).done(function (ds) {
	                if (ds === null) {
	                    console.log('Report Card datasource connection not found');
	                } else {
	                    ds.query({
	                        sort: { field: "CreateDate", dir: "desc" }
	                    }).then(function () {
	                        if (ds.data().length >= 1) {
	                            self.reportCard = ds.data();
	                            $.each(ds.data(), function (index, item) {
	                                cnc.fn.flattenListObjects(item);
	                            });
	                            self.reportCardListDfer.resolve(ds.data());
	                        } else {
	                            console.log('No data is returned');
	                        }
	                    });
	                }
	            });
	
	            cmApp.datasource('Report Settings', false).done(function (ds) {
	                if (ds === null) {
	                    console.log('Report Settings datasource connection not found');
	                } else {
	                    var filter = '{"logic":"and","filters":[{"field":"Title","operator":"eq","value":"Portfolio Assessment"}]}';
	                    ds.query({
	                        filter: JSON.parse(filter)
	                    }).then(function () {
	                        if (ds.data().length >= 1) {
	                            self.reportSettings = ds.data();
	                            $.each(ds.data(), function (index, item) {
	                                cnc.fn.flattenListObjects(item);
	                            });
	                            self.reportSettings = ds.data()[0];
	                            self.reportSettingsListDfer.resolve(ds.data()[0]);
	                        } else {
	                            console.log('No data is returned');
	                        }
	                    });
	                }
	            });
	
	            cmApp.datasource('Projects', false).done(function (ds) {
	                if (ds === null) {
	                    console.log('Projects datasource connection not found');
	                } else {
	                    ds.query({
	                        sort: { field: "Title", dir: "desc" },
	                        filter: JSON.parse(projectFilter)
	                    }).then(function () {
	                        if (ds.data().length >= 1) {
	                            $.each(ds.data(), function (index, item) {
	                                cnc.fn.flattenListObjects(item);
	                            });
	                            self.projectsDfer.resolve(ds.data());
	                        } else {
	                            console.log('No data is returned');
	                        }
	                    });
	                }
	            });
	
	            cmApp.datasource('Task Status', false).done(function (ds) {
	                if (ds === null) {
	                    console.log('Task Status datasource connection not found');
	                } else {
	                    ds.query({
	                        sort: { field: "Title", dir: "desc" }
	                    }).then(function () {
	                        if (ds.data().length >= 1) {
	                            self.taskStatusDfer.resolve(ds.data());
	                        } else {
	                            console.log('No data is returned');
	                        }
	                    });
	                }
	            });
	
	            cmApp.datasource('Impact', false).done(function (ds) {
	                if (ds === null) {
	                    console.log('Impact datasource connection not found');
	                } else {
	                    ds.query({
	                        sort: { field: "Title", dir: "desc" }
	                    }).then(function () {
	                        if (ds.data().length >= 1) {
	                            self.impactDfer.resolve(ds.data());
	                        } else {
	                            console.log('No data is returned');
	                        }
	                    });
	                }
	            });
	
	            cmApp.datasource('Probability', false).done(function (ds) {
	                if (ds === null) {
	                    console.log('Probability datasource connection not found');
	                } else {
	                    ds.query({
	                        sort: { field: "Title", dir: "desc" }
	                    }).then(function () {
	                        if (ds.data().length >= 1) {
	                            self.probabilityDfer.resolve(ds.data());
	                        } else {
	                            console.log('No data is returned');
	                        }
	                    });
	                }
	            });
	
	            cmApp.datasource('Risk Types', false).done(function (ds) {
	                if (ds === null) {
	                    console.log('Risk Types datasource connection not found');
	                } else {
	                    ds.query({
	                        sort: { field: "Title", dir: "desc" }
	                    }).then(function () {
	                        if (ds.data().length >= 1) {
	                            self.riskTypesDfer.resolve(ds.data());
	                        } else {
	                            console.log('No data is returned');
	                        }
	                    });
	                }
	            });
	
	            // Aggregation call for Expense Planned
	            var aggPlanned = _.cloneDeep(expensesFilter);
	            var expenseList = _.find(cmApp.availableDataSources, {
	                Title : 'Expenses'
	            }); // Get the list details
	            aggPlanned = JSON.stringify(aggPlanned);
	            $.ajax({
	                url : window.location.origin + '/api/Aggregation',
	                type : 'POST',
	                data : '{"DataSource":1,"ConnectionId":"' + expenseList.ConnectionId + '","ListId":"' + expenseList.Id + '","SiteUri":"","Filter": ' +
	                aggPlanned + ',"Group":{"Field":"Project/ItemId","Aggregates":[{"AggregateField":"PlannedAmount","AggregateType":1}]}}',
	                success : function (data, xhr) {
	                    self.expensesPlannedDfer.resolve(data);
	                }
	            });
	            // Aggregation call for Expense Actual
	            var aggActual = _.cloneDeep(expensesFilter);
	            aggActual = JSON.stringify(aggActual);
	            $.ajax({
	                url : window.location.origin + '/api/Aggregation',
	                type : 'POST',
	                data : '{"DataSource":1,"ConnectionId":"' + expenseList.ConnectionId + '","ListId":"' + expenseList.Id + '","SiteUri":"","Filter": ' +
	                aggActual + ',"Group":{"Field":"Project/ItemId","Aggregates":[{"AggregateField":"ActualAmount","AggregateType":1}]}}',
	                success : function (data, xhr) {
	                    self.expensesActualDfer.resolve(data);
	                }
	            });
	            // Aggregation call for Issues Red
	            $.when(self.riskTypesDfer, self.impactDfer).done(function (riskTypes, impacts) {
	                var agg = _.cloneDeep(healthKpiFilter);
	                agg.filters[1].value = _.find(riskTypes, {
	                    Title : 'Issue'
	                }).Id;
	                agg.filters[2].value = _.find(impacts, {
	                    Title : 'Extreme'
	                }).Id;
	                var risksList = _.find(cmApp.availableDataSources, {
	                    Title : 'Risks'
	                }); // Get the list details
	                agg = JSON.stringify(agg);
	                $.ajax({
	                    url : window.location.origin + '/api/Aggregation',
	                    type : 'POST',
	                    data : '{"DataSource":1,"ConnectionId":"' + risksList.ConnectionId + '","ListId":"' + risksList.Id + '","SiteUri":"","Filter": ' +
	                    agg + ',"Group":{"Field":"Project/ItemId","Aggregates":[{"AggregateField":"Project/ItemId","AggregateType":0}]}}',
	                    success : function (data, xhr) {
	                        self.issuesRedDfer.resolve(data);
	                    }
	                });
	            });
	
	            // Aggregation call for Issues Yellow
	            $.when(self.riskTypesDfer, self.impactDfer).done(function (riskTypes, impacts) {
	                var agg = _.cloneDeep(healthKpiFilter);
	                agg.filters[1].value = _.find(riskTypes, {
	                    Title : 'Issue'
	                }).Id;
	                agg.filters[2].value = _.find(impacts, {
	                    Title : 'Major'
	                }).Id;
	                var risksList = _.find(cmApp.availableDataSources, {
	                    Title : 'Risks'
	                }); // Get the list details
	                agg = JSON.stringify(agg);
	                $.ajax({
	                    url : window.location.origin + '/api/Aggregation',
	                    type : 'POST',
	                    data : '{"DataSource":1,"ConnectionId":"' + risksList.ConnectionId + '","ListId":"' + risksList.Id + '","SiteUri":"","Filter": ' +
	                    agg + ',"Group":{"Field":"Project/ItemId","Aggregates":[{"AggregateField":"Project/ItemId","AggregateType":0}]}}',
	                    success : function (data, xhr) {
	                        self.issuesYellowDfer.resolve(data);
	                    }
	                });
	            });
	            // Aggregation call for Issues Green
	            $.when(self.riskTypesDfer, self.impactDfer).done(function (riskTypes, impacts) {
	                var agg = _.cloneDeep(healthKpiFilter);
	                agg.filters[1].value = _.find(riskTypes, {
	                    Title : 'Issue'
	                }).Id;
	                agg.filters[2] = {
	                    logic : 'or',
	                    filters : [agg.filters[2], agg.filters[2], agg.filters[2]]
	                }; // Make Impact Filter complex
	                agg.filters[2].filters[0].value = _.find(impacts, {
	                    Title : 'Moderate'
	                }).Id;
	                agg.filters[2].filters[1].value = _.find(impacts, {
	                    Title : 'Minor'
	                }).Id;
	                agg.filters[2].filters[2].value = _.find(impacts, {
	                    Title : 'Insignificant'
	                }).Id;
	                var risksList = _.find(cmApp.availableDataSources, {
	                    Title : 'Risks'
	                }); // Get the list details
	                agg = JSON.stringify(agg);
	                $.ajax({
	                    url : window.location.origin + '/api/Aggregation',
	                    type : 'POST',
	                    headers : {
	                        Debug : 'Green Issues'
	                    },
	                    data : '{"DataSource":1,"ConnectionId":"' + risksList.ConnectionId + '","ListId":"' + risksList.Id + '","SiteUri":"","Filter": ' +
	                    agg + ',"Group":{"Field":"Project/ItemId","Aggregates":[{"AggregateField":"Project/ItemId","AggregateType":0}]}}',
	                    success : function (data, xhr) {
	                        self.issuesGreenDfer.resolve(data);
	                    }
	                });
	            });
	            // Data call for Risks
	            $.when(self.riskTypesDfer, self.impactDfer, self.probabilityDfer).done(function (riskTypes, impacts, probabilities) {
	                cmApp.datasource('Risks', false).done(function (ds) {
	                    if (ds === null) {
	                        console.log('Risks datasource connection not found');
	                    } else {
	                        ds.query({
	                            sort: { field: "Title", dir: "desc" },
	                            filter: JSON.parse(projectRelationFilter)
	                        }).then(function () {
	                            if (ds.data().length >= 1) {
	                                $.each(ds.data(), function (index, item) {
	                                    cnc.fn.flattenListObjects(item);
	                                });
	                                self.risksDfer.resolve(ds.data());
	                            } else {
	                                console.log('No data is returned');
	                            }
	                        });
	                    }
	                });
	            });
	
	            // Aggregation call for Tasks < 30 days Past Due
	            $.when(self.taskStatusDfer).done(function (taskStatus) {
	                var agg = _.cloneDeep(lateTasksFilter);
	                agg.filters[1].value = moment().startOf('day').toISOString();
	                agg.filters[2].value = moment().startOf('day').subtract(30, 'days').toISOString();
	                agg.filters[3].value = _.find(taskStatus, {
	                    Title : 'Completed'
	                }).Id;
	                var taskList = _.find(cmApp.availableDataSources, {
	                    Title : 'Tasks'
	                }); // Get the list details
	                agg = JSON.stringify(agg);
	                $.ajax({
	                    url : window.location.origin + '/api/Aggregation',
	                    type : 'POST',
	                    headers : {
	                        Debug : 'tasks less than 30'
	                    },
	
	                    data : '{"DataSource":1,"ConnectionId":"' + taskList.ConnectionId + '","ListId":"' + taskList.Id + '","SiteUri":"","Filter": ' +
	                    agg + ',"Group":{"Field":"Project/ItemId","Aggregates":[{"AggregateField":"Project/ItemId","AggregateType":0}]}}',
	                    success : function (data, xhr) {
	                        self.tasksLt30Dfer.resolve(data);
	                    }
	                });
	            });
	
	            // Aggregation call for Tasks 30 - 60 days Past Due
	            $.when(self.taskStatusDfer).done(function (taskStatus) {
	                var agg = _.cloneDeep(lateTasksFilter);
	                agg.filters[1].value = moment().startOf('day').subtract(30, 'days').toISOString();
	                agg.filters[2].value = moment().startOf('day').subtract(60, 'days').toISOString();
	                agg.filters[3].value = _.find(taskStatus, {
	                    Title : 'Completed'
	                }).Id;
	                var taskList = _.find(cmApp.availableDataSources, {
	                    Title : 'Tasks'
	                }); // Get the list details
	                agg = JSON.stringify(agg);
	                $.ajax({
	                    url : window.location.origin + '/api/Aggregation',
	                    type : 'POST',
	                    headers : {
	                        Debug : 'tasks less than 30'
	                    },
	
	                    data : '{"DataSource":1,"ConnectionId":"' + taskList.ConnectionId + '","ListId":"' + taskList.Id + '","SiteUri":"","Filter": ' +
	                    agg + ',"Group":{"Field":"Project/ItemId","Aggregates":[{"AggregateField":"Project/ItemId","AggregateType":0}]}}',
	                    success : function (data, xhr) {
	                        self.tasks30to60Dfer.resolve(data);
	                    }
	                });
	            });
	            // Aggregation call for Tasks > 60 days Past Due
	            $.when(self.taskStatusDfer).done(function (taskStatus) {
	                var agg = _.cloneDeep(lateTasksFilter);
	                agg.filters[1].value = moment().startOf('day').subtract(60, 'days').toISOString();
	                agg.filters[2].value = moment().startOf('day').subtract(10, 'years').toISOString();
	                agg.filters[3].value = _.find(taskStatus, {
	                    Title : 'Completed'
	                }).Id;
	                var taskList = _.find(cmApp.availableDataSources, {
	                    Title : 'Tasks'
	                }); // Get the list details
	                agg = JSON.stringify(agg);
	                $.ajax({
	                    url : window.location.origin + '/api/Aggregation',
	                    type : 'POST',
	                    headers : {
	                        Debug : 'tasks less than 30'
	                    },
	
	                    data : '{"DataSource":1,"ConnectionId":"' + taskList.ConnectionId + '","ListId":"' + taskList.Id + '","SiteUri":"","Filter": ' +
	                    agg + ',"Group":{"Field":"Project/ItemId","Aggregates":[{"AggregateField":"Project/ItemId","AggregateType":0}]}}',
	                    success : function (data, xhr) {
	                        self.tasksOver60Dfer.resolve(data);
	                    }
	                });
	            });
	
	            // Aggregation call for Schedule KPI Red
	            $.when(self.taskStatusDfer).done(function (taskStatus) {
	                var agg = _.cloneDeep(scheduleKpiFilter);
	                agg.filters[2].value = _.find(taskStatus, {
	                    Title : 'Not Started'
	                }).Id;
	                var taskList = _.find(cmApp.availableDataSources, {
	                    Title : 'Tasks'
	                }); // Get the list details
	                agg = JSON.stringify(agg);
	                $.ajax({
	                    url : window.location.origin + '/api/Aggregation',
	                    type : 'POST',
	                    data : '{"DataSource":1,"ConnectionId":"' + taskList.ConnectionId + '","ListId":"' + taskList.Id + '","SiteUri":"","Filter": ' +
	                    agg + ',"Group":{"Field":"Project/ItemId","Aggregates":[{"AggregateField":"Project/ItemId","AggregateType":0}]}}',
	                    success : function (data, xhr) {
	                        self.tasksNotStartedDfer.resolve(data);
	                    }
	                });
	            });
	            // Aggregation call for Schedule KPI Yellow
	            $.when(self.taskStatusDfer).done(function (taskStatus) {
	                var agg = _.cloneDeep(scheduleKpiFilter);
	                agg.filters[2].value = _.find(taskStatus, {
	                    Title : 'In Progress'
	                }).Id;
	                var taskList = _.find(cmApp.availableDataSources, {
	                    Title : 'Tasks'
	                }); // Get the list details
	                agg = JSON.stringify(agg);
	                $.ajax({
	                    url : window.location.origin + '/api/Aggregation',
	                    type : 'POST',
	                    data : '{"DataSource":1,"ConnectionId":"' + taskList.ConnectionId + '","ListId":"' + taskList.Id + '","SiteUri":"","Filter": ' +
	                    agg + ',"Group":{"Field":"Project/ItemId","Aggregates":[{"AggregateField":"Project/ItemId","AggregateType":0}]}}',
	                    success : function (data, xhr) {
	                        self.tasksInProgressDfer.resolve(data);
	                    }
	                });
	            });
	            $.when(self.projectsDfer,
	                self.tasksInProgressDfer,
	                self.tasksNotStartedDfer,
	                self.expensesPlannedDfer,
	                self.expensesActualDfer,
	                self.issuesRedDfer,
	                self.issuesYellowDfer,
	                self.issuesGreenDfer,
	                self.risksDfer,
	                self.impactDfer,
	                self.probabilityDfer,
	                self.tasksLt30Dfer,
	                self.tasks30to60Dfer,
	                self.tasksOver60Dfer,
	                self.reportCardListDfer,
	                self.reportSettingsListDfer
	
	            ).done(function
	                (projects,
	                 inProgress,
	                 notStarted,
	                 expPlanned,
	                 expActual,
	                 issuesRed,
	                 issuesYellow,
	                 issuesGreen,
	                 risks,
	                 impacts,
	                 probabilities,
	                 tasksLt30,
	                 tasks30to60,
	                 tasksOver60,
	                 reportCards,
	                 reportSettings
	                ) {
	                for (var i = 0; i < projects.length; i++) {
	                    var project = projects[i];
	                    project._scheduleKpi = 'Green';
	                    project._scheduleKpiCount = 0;
	                    project._issuesRedCount = 0;
	                    project._issuesYellowCount = 0;
	                    project._issuesGreenCount = 0;
	                    project._risksRedCount = 0;
	                    project._risksYellowCount = 0;
	                    project._risksGreenCount = 0;
	                    project._tasksOver60Count = 0;
	                    project._tasks30to60Count = 0;
	                    project._tasksLt30Count = 0;
	                    project._expenseKpi = 'Green';
	                    project._expenseKpiPercentage = '';
	                    project._expensesPlannedAmount = 0;
	                    project._expensesActualAmount = 0;
	                    project._healthKpi = 'Green';
	                    project._healthKpiCount = '';
	                    project._overallKpi = 'Green';
	                    project._reportCard = _.find(reportCards, {_ProjectItemId: project.Id});
	                    if (_.find(notStarted[0].Results, {
	                            Field : project.Id
	                        }) !== undefined) {
	                        project._scheduleKpi = 'Red';
	                        project._scheduleKpiCount = _.find(notStarted[0].Results, {
	                            Field : project.Id
	                        }).Value;
	                    } else if (_.find(inProgress[0].Results, {
	                            Field : project.Id
	                        }) !== undefined) {
	                        project._scheduleKpi = 'Yellow';
	                        project._scheduleKpiCount = _.find(inProgress[0].Results, {
	                            Field : project.Id
	                        }).Value;
	                    }
	                    if (_.find(issuesRed[0].Results, {
	                            Field : project.Id
	                        }) !== undefined) {
	                        project._issuesRedCount = _.find(issuesRed[0].Results, {
	                            Field : project.Id
	                        }).Value;
	                    }
	                    if (_.find(issuesYellow[0].Results, {
	                            Field : project.Id
	                        }) !== undefined) {
	                        project._issuesYellowCount = _.find(issuesYellow[0].Results, {
	                            Field : project.Id
	                        }).Value;
	                    }
	                    if (_.find(issuesGreen[0].Results, {
	                            Field : project.Id
	                        }) !== undefined) {
	                        project._issuesGreenCount = _.find(issuesGreen[0].Results, {
	                            Field : project.Id
	                        }).Value;
	                    }
	                    var includeInCount = [{
	                        Probability : 'Rare',
	                        Impact : 'Extreme',
	                        include : 'green'
	                    }, {
	                        Probability : 'Rare',
	                        Impact : 'Major',
	                        include : 'green'
	                    }, {
	                        Probability : 'Rare',
	                        Impact : 'Moderate',
	                        include : 'green'
	                    }, {
	                        Probability : 'Rare',
	                        Impact : 'Minor',
	                        include : 'green'
	                    }, {
	                        Probability : 'Rare',
	                        Impact : 'Insignificant',
	                        include : 'green'
	                    }, {
	                        Probability : 'Unlikely',
	                        Impact : 'Moderate',
	                        include : 'green'
	                    }, {
	                        Probability : 'Unlikely',
	                        Impact : 'Minor',
	                        include : 'green'
	                    }, {
	                        Probability : 'Unlikely',
	                        Impact : 'Insignificant',
	                        include : 'green'
	                    }, {
	                        Probability : 'Possible',
	                        Impact : 'Minor',
	                        include : 'green'
	                    }, {
	                        Probability : 'Possible',
	                        Impact : 'Insignificant',
	                        include : 'green'
	                    }, {
	                        Probability : 'Likely',
	                        Impact : 'Insignificant',
	                        include : 'green'
	                    }, {
	                        Probability : 'Unlikely',
	                        Impact : 'Extreme',
	                        include : 'yellow'
	                    }, {
	                        Probability : 'Unlikely',
	                        Impact : 'Major',
	                        include : 'yellow'
	                    }, {
	                        Probability : 'Possible',
	                        Impact : 'Major',
	                        include : 'yellow'
	                    }, {
	                        Probability : 'Possible',
	                        Impact : 'Moderate',
	                        include : 'yellow'
	                    }, {
	                        Probability : 'Likely',
	                        Impact : 'Moderate',
	                        include : 'yellow'
	                    }, {
	                        Probability : 'Likely',
	                        Impact : 'Minor',
	                        include : 'yellow'
	                    }, {
	                        Probability : 'Almost Certain',
	                        Impact : 'Minor',
	                        include : 'yellow'
	                    }, {
	                        Probability : 'Almost Certain',
	                        Impact : 'Insignificant',
	                        include : 'yellow'
	                    }, {
	                        Probability : 'Possible',
	                        Impact : 'Extreme',
	                        include : 'red'
	                    }, {
	                        Probability : 'Likely',
	                        Impact : 'Extreme',
	                        include : 'red'
	                    }, {
	                        Probability : 'Likely',
	                        Impact : 'Major',
	                        include : 'red'
	                    }, {
	                        Probability : 'Almost Certain',
	                        Impact : 'Extreme',
	                        include : 'red'
	                    }, {
	                        Probability : 'Almost Certain',
	                        Impact : 'Major',
	                        include : 'red'
	                    }, {
	                        Probability : 'Almost Certain',
	                        Impact : 'Moderate',
	                        include : 'red'
	                    }
	                    ];
	                    for (var j = 0; j < includeInCount.length; j++) {
	                        if (includeInCount[j].include == 'green') {
	                            project._risksGreenCount +=
	                                _.filter(risks, {
	                                    _ImpactItemId : _.find(impacts, {
	                                        Title : includeInCount[j].Impact
	                                    }).Id,
	                                    _ProbabilityItemId : _.find(probabilities, {
	                                        Title : includeInCount[j].Probability
	                                    }).Id,
	                                    _ProjectItemId : project.Id
	                                }).length;
	                        }
	                        if (includeInCount[j].include == 'yellow') {
	                            project._risksYellowCount +=
	                                _.filter(risks, {
	                                    _ImpactItemId : _.find(impacts, {
	                                        Title : includeInCount[j].Impact
	                                    }).Id,
	                                    _ProbabilityItemId : _.find(probabilities, {
	                                        Title : includeInCount[j].Probability
	                                    }).Id,
	                                    _ProjectItemId : project.Id
	                                }).length;
	                        }
	                        if (includeInCount[j].include == 'red') {
	                            project._risksRedCount +=
	                                _.filter(risks, {
	                                    _ImpactItemId : _.find(impacts, {
	                                        Title : includeInCount[j].Impact
	                                    }).Id,
	                                    _ProbabilityItemId : _.find(probabilities, {
	                                        Title : includeInCount[j].Probability
	                                    }).Id,
	                                    _ProjectItemId : project.Id
	                                }).length;
	                        }
	                    }
	                    if (_.find(tasksLt30[0].Results, {
	                            Field : project.Id
	                        }) !== undefined) {
	                        project._tasksLt30Count = _.find(tasksLt30[0].Results, {
	                            Field : project.Id
	                        }).Value;
	                    }
	                    if (_.find(tasks30to60[0].Results, {
	                            Field : project.Id
	                        }) !== undefined) {
	                        project._tasks30to60Count = _.find(tasks30to60[0].Results, {
	                            Field : project.Id
	                        }).Value;
	                    }
	                    if (_.find(tasksOver60[0].Results, {
	                            Field : project.Id
	                        }) !== undefined) {
	                        project._tasksOver60Count = _.find(tasksOver60[0].Results, {
	                            Field : project.Id
	                        }).Value;
	                    }
	                    if (_.find(issuesRed[0].Results, {
	                            Field : project.Id
	                        }) !== undefined) {
	                        project._healthKpi = 'Red';
	                        project._healthKpiCount = _.find(issuesRed[0].Results, {
	                            Field : project.Id
	                        }).Value;
	                    } else if (_.find(issuesYellow[0].Results, {
	                            Field : project.Id
	                        }) !== undefined) {
	                        project._healthKpi = 'Yellow';
	                        project._healthKpiCount = _.find(issuesYellow[0].Results, {
	                            Field : project.Id
	                        }).Value;
	                    }
	                    if(_.find(expActual[0].Results, {Field : project.Id}) !== undefined) {
	                        project._expensesActualAmount = cmApp.numvalOrValue(_.find(expActual[0].Results, {Field : project.Id}).Value);
	                    } else {
	                        project._expensesActualAmount = 0;
	                    }
	                    if(_.find(expPlanned[0].Results, {Field : project.Id}) !== undefined) {
	                        project._expensesPlannedAmount = cmApp.numvalOrValue(_.find(expPlanned[0].Results, {Field : project.Id}).Value);
	                    } else {
	                        project._expensesPlannedAmount = 0;
	                    }
	                    if (_.find(expPlanned[0].Results, {
	                            Field : project.Id
	                        }) !== undefined &&
	                        _.find(expActual[0].Results, {
	                            Field : project.Id
	                        }) !== undefined &&
	                        _.find(expPlanned[0].Results, {
	                            Field : project.Id
	                        }).Value !== 0) {
	                        var perc = 100 * _.find(expActual[0].Results, {
	                                Field : project.Id
	                            }).Value / _.find(expPlanned[0].Results, {
	                                Field : project.Id
	                            }).Value;
	                        if (perc > 100) {
	                            project._expenseKpi = 'Red';
	                        } else if (perc > 90) {
	                            project._expenseKpi = 'Yellow';
	                        }
	                        project._expenseKpiPercentage = parseInt(perc, 10);
	                    }
	                    if (project._scheduleKpi == 'Red' || project._expenseKpi == 'Red' || project._healthKpi == 'Red') {
	                        project._overallKpi = 'Red';
	                    }
	                    if (project._scheduleKpi == 'Yellow' || project._expenseKpi == 'Yellow' || project._healthKpi == 'Yellow') {
	                        project._overallKpi = 'Yellow';
	                    }
	
	                    self.projects.push(project);
	                }
	                self.ready(true);
	                self.readyDfer.resolve();
	            });
	
	            function getRandomInt(min, max) {
	                return Math.floor(Math.random() * (max - min + 1)) + min;
	            }
	
	            anychart.onDocumentReady(function () {
	                self.anychartDfer.resolve();
	            });
	            $.when(self.anychartDfer, self.readyDfer).done(function () {
	                var paData = [];
	                $.each(self.projects(), function(index, project) {
	                        var stayScore = 0;
	                        switch (project.CostKPI.Title){
	                            case 'Green':
	                                stayScore += 3;
	                                break;
	                            case 'Yellow':
	                                stayScore += 2;
	                                break;
	                            case 'Red':
	                                stayScore += 1;
	                                break;
	                        }
	                        switch (project.ScheduleKPI.Title){
	                            case 'Green':
	                                stayScore += 3;
	                                break;
	                            case 'Yellow':
	                                stayScore += 2;
	                                break;
	                            case 'Red':
	                                stayScore += 1;
	                                break;
	                        }
	                        switch (project.PerformanceKPI.Title){
	                            case 'Green':
	                                stayScore += 3;
	                                break;
	                            case 'Yellow':
	                                stayScore += 2;
	                                break;
	                            case 'Red':
	                                stayScore += 1;
	                                break;
	                        }
	                        var projectData;
	                        if (project._reportCard === undefined){
	                            projectData = [0, 0, stayScore];
	                        } else {
	                            projectData = [project._reportCard.TotalImpact, project._reportCard.TotalFeasibility, stayScore];
	                        }
	
	                        project._data = [];
	                        project._data.push(projectData);
	                        project._dataSet = anychart.data.set(project._data);
	                        project._seriesData = project._dataSet.mapAs({x: [0], value: [1], size: [2]});
	                        paData.push(projectData);
	                    }
	                );
	                var project_data = anychart.data.set(paData);
	
	
	                // create scatter chart
	                chart = anychart.scatter();
	
	                // turn on chart animation
	                chart.animation(true);
	
	                // set container id for the chart
	                chart.container('portfolioAssessmentChart');
	
	                // set chart title text settings
	                var title = chart.title();
	                title.enabled(true);
	                title.text(
	                    'Portfolio Assessment ' +
	                    '<br/><span  style="color:#929292; font-size: 12px;">(Bubble size indicates Stay Score)</span>'
	                ).padding([0, 0, 10, 0]).useHtml(true);
	
	                // set chart margin settings
	                chart.padding(20, 20, 10, 20);
	
	                // turn on grids
	                chart.grid().enabled(true);
	                chart.grid(1).enabled(true).layout('vertical');
	                chart.minorGrid().enabled(true);
	                chart.minorGrid(1).enabled(true).layout('vertical');
	                chart.minBubbleSize(10);
	                chart.maxBubbleSize(37);
	                var yScale = chart.yScale();
	                yScale.minimum(0);
	                //                yScale.maximum(200);
	                var xScale = chart.xScale();
	                xScale.minimum(0);
	                //                xScale.maximum(200);
	
	                // set chart axes settings
	                chart.xAxis().title('Total Impact');
	                chart.xAxis().minorTicks(true);
	                chart.yAxis().title('Total Feasibility');
	                chart.yAxis().minorTicks(true);
	
	                var yMarker = chart.lineMarker(0);
	                yMarker.stroke({
	                    // set stroke thickness
	                    thickness: 4,
	                    // set stroke color
	                    color: _.find(self.colorIndicators, {Title: 'Warning/High/Critical'}).HexColorCode
	                });
	                yMarker.value(self.reportSettings.YAxisMarker);
	                yMarker.axis(chart.yAxis());
	
	                var xMarker = chart.lineMarker(1);
	                xMarker.stroke({
	                    // set stroke thickness
	                    thickness: 4,
	                    // set stroke color
	                    color: _.find(self.colorIndicators, {Title: 'Warning/High/Critical'}).HexColorCode
	                });
	                xMarker.value(self.reportSettings.XAxisMarker);
	                xMarker.axis(chart.xAxis());
	
	
	                //set chart legend settings
	                chart.legend().enabled(false).padding().bottom(10);
	                var tooltipFormatter = function (data) {
	                    return 'Total Feasibility: <span style="color: #d2d2d2; font-size: 12px">' + data.getDataValue('value') + '</span></strong><br/>' +
	                        'Total Impact: <span style="color: #d2d2d2; font-size: 12px">' + data.getDataValue('x') + '</span></strong><br/>' +
	                        'Stay Score: <span style="color: #d2d2d2; font-size: 12px">' + data.getDataValue('size') + '</span></strong>';
	                };
	
	                $.each(self.projects(), function(index, project) {
	                        chart.bubble(project._seriesData).name(project.Title).tooltip().useHtml(true).fontColor('#fff').textFormatter(tooltipFormatter);
	                    }
	                );
	
	                chart.draw();
	                chart.credits().enabled(false);
	                yScale = chart.yScale();
	                yScale.maximum(Math.max(yMarker.value * 1.25, yScale.maximum()));
	                xScale = chart.xScale();
	                xScale.maximum(Math.max(xMarker.value * 1.25, xScale.maximum()));
	                cmApp.unblockUI();
	            });
	        };
	
	        self.loadPortfolioAssessment();
	        cc.events.on('cmAppNewPortfolioSelected', function (evt) {
	            self.readyDfer = $.Deferred();
	            self.loadPortfolioAssessment();
	        }, self);
	
	
	    });
	    /**
	     * Helper function to bind data field to the local var.
	     * @param val
	     * @return {Function}
	     */
	    function training_filter_constructor(val) {
	        return function (fieldVal) {
	            return fieldVal == val;
	        };
	    }
	}
	
	$.extend(true, PortfolioAssessment.prototype, {
	    dispose: function () {
	        cc.events.off('cmAppNewPortfolioSelected');
	    },
	
	    initSubscriptions: function () {
	        var self = this;
	
	    },
	
	    initComponent: function (view) {
	//        this.campusPicker = $('.campusPicker', view).kendoDropDownList().data("kendoDropDownList");
	    }
	});
	
	function createViewModel(params, componentInfo) {
	    return new PortfolioAssessment(params);
	}
	
	module.exports = {
	    viewModel: {
	        createViewModel: createViewModel
	    },
	    template: template
	};


/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = "<style>\r\n    #portfolioAssessmentChart {\r\n        width: 100%;\r\n        height: 100%;\r\n        margin-right: 10px;\r\n        width: 800px;\r\n        height: 600px;\r\n    }\r\n</style>\r\n<div id=\"portfolioAssessmentChart\"></div>"

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var _ = cc.lodash,
	    template = __webpack_require__(35),
	    fn = cc.fn;
	 $.getScript( "//cdn.corasworks.net/cmlib_dev/libs/diff/2.0.1/diff.js", function( data, textStatus, jqxhr ) {
	});
	/**
	 * @summary Diff component
	 * @desc Diff component
	 * <br />
	 * Creates a text display of the page description
	 * @namespace
	 * @example <caption>Diff</caption>
	 * // Extension JS
	 * // Boilerplate Extension JS code works
	 * // 
	 * // Extension HTML
	 * // <cn-diff params="diff: $component.diffParams"></cn-diff>
	 */
	function Diff( params ) {
	    var self = this;
	    self.listsInfo = params.listsInfo;
	    self.diffType = ko.observable("diffJson");
	    self.diffResults = ko.observable();
	    params = params || params;
	    if ( !params.diff.base ) {
	        throw new Error('mandatory param \'base\' missing');
	    }
	    if ( !params.diff.modified ) {
	        throw new Error('mandatory param \'modified\' missing');
	    }
	    if ( params.diff.diffType ) {
	        self.diffType(params.diff.diffType);
	    }
	
	    self.diffType.subscribe(function(newValue) {
	        changed();
	    });
	    function changed() {
	        var diff = JsDiff[self.diffType()](params.diff.base, params.diff.modified);
	        var fragment = '';
	        for (var i=0; i < diff.length; i++) {
	
	            if (diff[i].added && diff[i + 1] && diff[i + 1].removed) {
	                var swap = diff[i];
	                diff[i] = diff[i + 1];
	                diff[i + 1] = swap;
	            }
	
	            var node = diff[i].value;
	            if (diff[i].removed) {
	                node = '';
	                node += '<del>';
	                node += diff[i].value;
	                node += '</del>';
	            } else if (diff[i].added) {
	                node = '';
	                node += '<ins>';
	                node += diff[i].value;
	                node += '</ins>';
	            }
	            fragment += node;
	        }
	
	        self.diffResults(fragment);
	    }
	    changed();
	}
	
	$.extend(true, Diff.prototype, {
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
	
	    return new Diff(params);
	}
	
	module.exports = {
	    viewModel: {
	        createViewModel: createViewModel
	    },
	    template: template
	};


/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = "<style>\r\n    table#diffTable {\r\n        table-layout: fixed;\r\n        width: 100%;\r\n    }\r\n    table#diffTable tr td.source {\r\n        display: none;\r\n        width: 0%;\r\n        padding: 3px 4px;\r\n        border: 1px solid transparent;\r\n        vertical-align: top;\r\n        font: 1em monospace;\r\n        text-align: left;\r\n        white-space: pre-wrap;\r\n    }\r\n    table#diffTable tr td.diffResults {\r\n        width: 99%;\r\n        padding: 3px 4px;\r\n        border: 1px solid transparent;\r\n        vertical-align: top;\r\n        font: 1em monospace;\r\n        text-align: left;\r\n        white-space: pre-wrap;\r\n    }\r\n    del {\r\n        text-decoration: none;\r\n        color: #b30000;\r\n        background: #fadad7;\r\n    }\r\n    ins {\r\n        background: #eaf2c2;\r\n        color: #406619;\r\n        text-decoration: none;\r\n    }\r\n    [contentEditable] {\r\n        background: #F9F9F9;\r\n        border-color: #BBB #D9D9D9 #DDD;\r\n        border-radius: 4px;\r\n        -webkit-user-modify: read-write-plaintext-only;\r\n        outline: none;\r\n    }\r\n    [contentEditable]:focus {\r\n        background: #FFF;\r\n        border-color: #6699cc;\r\n        box-shadow: 0 0 4px #2175c9;\r\n    }\r\n</style>\r\n<div id=\"settings\">\r\n    <label><input data-bind=\"checked: diffType\" type=\"radio\" name=\"diff_type\" value=\"diffChars\"> Chars</label>\r\n    <label><input data-bind=\"checked: diffType\" type=\"radio\" name=\"diff_type\" value=\"diffWords\"> Words</label>\r\n    <label><input data-bind=\"checked: diffType\" type=\"radio\" name=\"diff_type\" value=\"diffLines\"> Lines</label>\r\n    <label><input data-bind=\"checked: diffType\" type=\"radio\" name=\"diff_type\" value=\"diffJson\"> JSON</label>\r\n</div>\r\n\r\n\r\n<table id=\"diffTable\">\r\n    <tr>\r\n        <td class=\"source\" contenteditable=\"true\">\r\n        </td>\r\n        <td class=\"source\" contenteditable=\"true\">\r\n        </td>\r\n        <td class=\"diffResults\"><pre data-bind=\"html: diffResults\"></pre></td>\r\n    </tr>\r\n</table>"

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var _ = cc.lodash,
	    template = __webpack_require__(37),
	    fn = cc.fn;
	
	/**
	 * @summary KPI Builder
	 * @desc Returns a project KPI in order to ensure consistent UI elements
	 * <br />
	 * 
	 * @namespace
	 * @example <caption>KPI Builder</caption>
	 * // Extension JS
	 * // Boilerplate Extension JS code works
	 * // 
	 * // Extension HTML
	 * // <cn-cm-kpi-builder params="title: $component.title, showText: $component.showText"></cn-cm-kpi-builder>
	 */
	function kpiBuilder( params ) {
	
	    if ( !params.title ) {
	        throw new Error('mandatory param \'title\' missing');
	    }
	    if ( !params.showText ) {
	        throw new Error('mandatory param \'showText\' missing');
	    }
	
	    var self = this;
	    self.title = params.title;
	    self.showText = params.showText;
	
	    self.ready = ko.observable(false);
	    self.kpiStatus = null;
	    self.kpiIndicators = ko.observableArray([]);
	
	    self.kpiOptions = ko.observable({});
	    self.selectedKpi = ko.observable();
	    self.selectedKpiStyle = ko.observable('');
	    self.selectedKpiTitle = ko.observable('');
	    self.selectedKpiKey = ko.observable('');
	    self.showText = ko.observable(true);
	    self.kpiText = ko.observable('');
	    self.kpiHeight = ko.observable('30px');
	    self.kpiWidth = ko.observable('30px');
	    self.kpiSymbolTextColor = ko.observable('#ffffff');
	    self.kpiSymbolTextSize = ko.observable('19px');
	    self.kpiSymbolTextFontFamily = ko.observable('verdana, arial, helvetica, sans-serif;');
	    self.kpiBorderWidth = ko.observable('1px');
	    self.kpiBorderColor = ko.observable('silver');
	    self.kpiBorderStyle = ko.observable('solid');
	    self.kpiBorderRadius = ko.observable('5px');
	    self.kpiMarginRight = ko.observable('0px');
	    self.kpiMarginLeft = ko.observable('0px');
	
	
	
	    self.getOptions = function () {
	        self.kpiOptions({
	            height: ko.observable(self.kpiHeight()),
	            width: ko.observable(self.kpiWidth()),
	            borderStyle: ko.observable(self.kpiBorderStyle()),
	            borderWidth: ko.observable(self.kpiBorderWidth()),
	            borderColor: ko.observable(self.kpiBorderColor()),
	            borderRadius: ko.observable(self.kpiBorderRadius()),
	            symbolTextSize: ko.observable(self.kpiSymbolTextSize()),
	            symbolTextColor: ko.observable(self.kpiSymbolTextColor()),
	            symbolTextFontFamily: ko.observable(self.kpiSymbolTextFontFamily()),
	            marginLeft: ko.observable(self.kpiMarginLeft()),
	            marginRight: ko.observable(self.kpiMarginRight()),
	
	        });
	    };
	
	    self.getKpi = function (color) {
	        self.getOptions();
	
	        var _markup = 'color: ' + self.kpiOptions().symbolTextColor() + ';' +
	            'background-color: ' + color + ';' +
	            'border: ' + self.kpiOptions().borderWidth() + ' ' + self.kpiOptions().borderColor() + ' ' + self.kpiOptions().borderStyle() + ';' +
	            'border-radius: ' + self.kpiOptions().borderRadius() + ';' +
	            'width: ' + self.kpiOptions().width() + ';' +
	            'height: ' + self.kpiOptions().height() + ';' +
	            'text-align: center;' +
	            'vertical-align: middle;' +
	            'font-family: ' + self.kpiOptions().symbolTextFontFamily() + ';' +
	            'font-size: ' + self.kpiOptions().symbolTextSize() + ';' +
	            'font-weight: bold;' +
	            'margin-left: ' + self.kpiOptions().marginLeft() + ';' +
	            'display: table-cell;' +
	            'margin-right: ' + self.kpiOptions().marginRight();
	        //self.selectedKpiStyle(self.selectedKpi().markup);
	        self.selectedKpiStyle(_markup);
	        self.selectedKpiTitle(self.selectedKpi().kpiTitle);
	        self.selectedKpiKey(self.selectedKpi().key);
	    };
	
	
	    self.kpiStatusDfer = $.Deferred();
	
	    $.when(cmApp.ready).done(function () {
	        // Set up ajax defaults
	
	        $.ajaxSetup({
	            method: "GET",
	            contentType: 'application/json',
	            headers: {
	                Accept: 'application/json,odata.metadata=minimal',
	                AppId: cmApp.getAppId('Data')
	            },
	            cache: false
	        });
	
	        self.availableDataSources = cmApp.availableDataSources;
	
	        self.colorIndicators = {};
	        self.colorIndicators.dfer = $.Deferred();
	        self.colorIndicators.ds = _.find(cmApp.availableDataSources, { Title: 'Color Indicators' }); // Get the list details
	        self.colorIndicators.setDs = function () {
	            var ds = _.find(cmApp.availableDataSources, {
	                Title: 'Color Indicators',
	                CrossAppAccessLevel: 'Viewer'
	            });
	            var connId = ds.ConnectionId;
	            var listId = ds.Id;
	
	            cc.api.getConnectionListModelById(connId, listId).then(function (model) {
	                var listItemDS = cc.api.getListItemDataSourceById(listId, {
	                    schema: {
	                        model: model.listModel
	                    },
	                    ccModel: model
	                }, connId);
	
	                self.colorIndicators.ds = listItemDS;
	                self.colorIndicators.ds.read().then(function () {
	                    self.colorIndicators.dfer.resolve(self.colorIndicators.ds.data());
	                });
	            });
	        };
	
	        self.projectKpiStatus = {};
	        self.projectKpiStatus.dfer = $.Deferred();
	        self.projectKpiStatus.ds = _.find(cmApp.availableDataSources, { Title: 'Project KPI Status' }); // Get the list details
	        self.projectKpiStatus.setDs = function () {
	            var ds = _.find(cmApp.availableDataSources, {
	                Title: 'Project KPI Status',
	                CrossAppAccessLevel: 'Viewer'
	            });
	            var connId = ds.ConnectionId;
	            var listId = ds.Id;
	
	            cc.api.getConnectionListModelById(connId, listId).then(function (model) {
	                var listItemDS = cc.api.getListItemDataSourceById(listId, {
	                    schema: {
	                        model: model.listModel
	                    },
	                    ccModel: model
	                }, connId);
	
	                self.projectKpiStatus.ds = listItemDS;
	                self.projectKpiStatus.ds.read().then(function () {
	                    self.projectKpiStatus.dfer.resolve(self.projectKpiStatus.ds.data());
	                });
	            });
	        };
	        self.projectKpiStatus.setDs();
	        self.colorIndicators.setDs();
	
	        $.when(self.colorIndicators.dfer, self.projectKpiStatus.dfer).done(function (colorsInd, kpiStatus) {
	            $.each(colorsInd, function (index, ci) {
	                cnc.fn.flattenListObjects(ci);
	            });
	            $.each(kpiStatus, function (index, rs) {
	                rs._colorIndicator = _.find(colorsInd, { Id: rs.ColorIndicator.ItemId });
	                cnc.fn.flattenListObjects(rs);
	            });
	            self.kpiStatus = kpiStatus;
	            //self.colorRed = _.find(kpiStatus, { Title: 'Red' }).__colorIndicatorHexColorCode;
	            //self.colorYellow = _.find(kpiStatus, { Title: 'Yellow' }).__colorIndicatorHexColorCode;
	            //self.colorGreen = _.find(kpiStatus, { Title: 'Green' }).__colorIndicatorHexColorCode;
	
	            self.kpiStatusDfer.resolve(self.kpiStatus);
	
	            $.each(kpiStatus, function (indx, kpi) {
	                var _kpiMarkup = {
	                    key: kpi.Title,
	                    kpiTitle: kpi.Title.charAt(0),
	                    kpiColor: kpi._colorIndicator.HexColorCode,
	                    markup: 'color: white;' +
	                    'background-color: ' + kpi._colorIndicator.HexColorCode + ';' +
	                    'border: 1px silver solid;' +
	                    'border-radius: 5px;' +
	                    'width: 30px;' +
	                    'height: 30px;' +
	                    'text-align: center;' +
	                    'font-family: verdana, arial, helvetica, sans-serif;' +
	                    'font-size: 19px;' +
	                    'font-weight: bold;' +
	                    'margin-left: 20px;' +
	                    'display: inline-block;' +
	                    'margin-right: 10px;'
	                };
	                self.kpiIndicators.push(_kpiMarkup);
	            });
	
	        });
	
	
	    });
	
	}
	
	$.extend(true, kpiBuilder.prototype, {
	    dispose: function() {
	
	    },
	
	    initSubscriptions: function() {
	        var self = this;
	
	    },
	
	    initComponent: function( view ) {
	    }
	});
	
	function createViewModel( params, componentInfo ) {
	
	    return new kpiBuilder(params);
	}
	
	module.exports = {
	    viewModel: {
	        createViewModel: createViewModel
	    },
	    template: template
	};


/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">\r\n    <div class=\"row\" style=\"margin-bottom: 20px;\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"form-group\">\r\n                <label data-bind=\"text: title\"></label>\r\n                <label for=\"kpiStyles\">KPI Styles:</label>\r\n                <div data-bind=\"foreach: kpiIndicators\">\r\n                    <div data-bind=\"attr: {style: $data.markup }, text: $data.kpiTitle\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"kpiType\">KPI Status:</label>\r\n                        <select class=\"form-control\" data-bind=\"options: kpiIndicators,\r\n                         optionsText: 'key',\r\n                         value: selectedKpi,\r\n                         optionsCaption: 'Choose...'\">\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label>Show Text:</label>\r\n                        <select class=\"form-control\" data-bind=\"value: showText\">\r\n                            <option value=\"true\">true</option>\r\n                            <option value=\"false\">false</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label>Text:</label>\r\n                        <input class=\"form-control\" type=\"text\" data-bind=\"value: kpiText\" />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label>Symbol Text Size:</label>\r\n                        <input class=\"form-control\" type=\"text\" data-bind=\"value: kpiSymbolTextSize\" />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label>Symbol Text Font Family:</label>\r\n                        <input class=\"form-control\" type=\"text\" data-bind=\"value: kpiSymbolTextFontFamily\" />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label>Symbol Text Color:</label>\r\n                        <input class=\"form-control\" type=\"text\" data-bind=\"value: kpiSymbolTextColor\" />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label>Height:</label>\r\n                        <input class=\"form-control\" type=\"text\" data-bind=\"value: kpiHeight\" />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label>Width:</label>\r\n                        <input class=\"form-control\" type=\"text\" data-bind=\"value: kpiWidth\" />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label>Border Width:</label>\r\n                        <input class=\"form-control\" type=\"text\" data-bind=\"value: kpiBorderWidth\" />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label>Border Radius:</label>\r\n                        <input class=\"form-control\" type=\"text\" data-bind=\"value: kpiBorderRadius\" />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label>Border Color:</label>\r\n                        <input class=\"form-control\" type=\"text\" data-bind=\"value: kpiBorderColor\" />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label>Border Style:</label>\r\n                        <select class=\"form-control\" data-bind=\"value: kpiBorderStyle\">\r\n                            <option value=\"none\">none</option>\r\n                            <option value=\"solid\">solid</option>\r\n                            <option value=\"double\">double</option>\r\n                            <option value=\"groove\">groove</option>\r\n                            <option value=\"ridge\">ridge</option>\r\n                            <option value=\"inset\">inset</option>\r\n                            <option value=\"outset\">outset</option>\r\n                            <option value=\"dotted\">dotted</option>\r\n                            <option value=\"dashed\">dashed</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label>Margin Left:</label>\r\n                        <input class=\"form-control\" type=\"text\" data-bind=\"value: kpiMarginLeft\" />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label>Margin Right:</label>\r\n                        <input class=\"form-control\" type=\"text\" data-bind=\"value: kpiMarginRight\" />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <div class=\"row\" style=\"margin-top: 21px\">\r\n                <input type=\"button\" class=\"btn btn-primary\" data-bind=\" click: function(data, event) { getKpi(selectedKpi().kpiColor, data, event) }\" value=\"Show KPI Symbol\" />\r\n            </div>\r\n            <hr />\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div data-bind=\"attr: { style: selectedKpiStyle }, text: selectedKpiTitle\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n\r\n</div>\r\n\r\n\r\n"

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var _ = cc.lodash,
	    template = __webpack_require__(39),
	    fn = cc.fn;
	
	/**
	 * @summary Quad Chart Model component
	 * @desc Quad Chart Model component
	 * <br />
	 * 
	 * @namespace
	 * @example <caption>Quad Chart Model</caption>
	 * // Extension JS
	 * // Boilerplate Extension JS code works
	 * // 
	 * // Extension HTML
	 * // <cn-cm-quadChart></cn-cm-quadChart>
	 */
	function QuadChart( params ) {
	
	    var self = this;
	
	    self.ready = ko.observable(false);
	    self.project = ko.observableArray();
	    self.loaded = ko.observable(false);
	
	    $.when(cmApp.ready).done(function () {
	        cmApp.blockUI();
	
	        self.loadProject =
	
	            function () {
	
	                var projectFilter = null;
	                switch (cmApp.thisApp) {
	                    case 'Projects':
	                        projectFilter = '{"logic":"or","filters":[{"field":"Id","operator":"eq","value":"' + cmApp.selectedProject + '"},';
	                        break;
	                    case 'Executive Dashboard':
	                        self.projectsInPortfolio = cmApp.projectsInPortfolio;
	                        if (self.projectsInPortfolio.length === 0) {
	                            self.loaded(true);
	                            cmApp.unblockUI();
	                            return;
	                        }
	                        projectFilter = '{"logic":"or","filters":[';
	                        $.each(self.projectsInPortfolio, function (index, id) {
	                            projectFilter += '{"field":"Id","operator":"eq","value":"' + id + '"},';
	                        });
	                        projectFilter = projectFilter.substring(0, projectFilter.length - 1) + ']}';
	                        break;
	                    default:
	                        return;
	                }
	
	                cmApp.datasource('Projects', false).done(function (ds) {
	                    if (ds === null) {
	                        console.log('Projects datasource connection not found');
	                    } else {
	                        ds.query({
	                            filter: JSON.parse(projectFilter)
	                        }).then(function () {
	                            if (ds.data().length >= 1) {
	                                self.project([]);
	                                $.each(ds.data(), function (index, project) {
	                                    self.project.push(project);
	                                });
	                                self.loaded(true);
	                                cmApp.unblockUI();
	                            } else {
	                                console.log('No data is returned');
	                            }
	                        });
	                    }
	                });
	            };
	        self.loadProject();
	        $('.carousel').carousel({interval: false});
	        switch (cmApp.thisApp) {
	            case 'Projects':
	                cc.events.on('cmAppNewProjectSelected', function (evt) {
	                    self.loadProject();
	                }, self);
	                break;
	            case 'Executive Dashboards':
	                cc.events.on('cmAppNewPortfolioSelected', function (evt) {
	                    self.loadProject();
	                }, self);
	                break;
	            default:
	        }
	    });
	
	}
	
	$.extend(true, QuadChart.prototype, {
	    dispose: function() {
	        cc.events.off('cmAppNewProjectSelected');
	        cc.events.off('cmAppNewPortfolioSelected');
	
	    },
	
	    initSubscriptions: function() {
	        var self = this;
	
	    },
	
	    initComponent: function( view ) {
	    }
	});
	
	function createViewModel( params, componentInfo ) {
	
	    return new QuadChart(params);
	}
	
	module.exports = {
	    viewModel: {
	        createViewModel: createViewModel
	    },
	    template: template
	};


/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = "<script src=\"/libs/bootstrap/3.3.1/js/bootstrap.js\">\r\n\r\n</script>\r\n\r\n<style>\r\n    #carousel-portfolio {\r\n        height: 700px;\r\n    }\r\n\r\n    .quad-panel {\r\n        height: 300px;\r\n    }\r\n\r\n    .quad-panel > div {\r\n        height: 100%;\r\n        overflow-y: auto;\r\n    }\r\n\r\n    .carousel-inner {\r\n        position: relative;\r\n        overflow: hidden;\r\n        /* width: 100%; */\r\n    }\r\n\r\n    .carousel-indicators {\r\n        bottom: -55px !important;\r\n    }\r\n\r\n    @media screen and (min-width: 768px) .fa-chevron-left {\r\n        margin-left: -10px;\r\n    }\r\n\r\n        @media screen and (min-width: 768px) .fa-chevron-left, .fa-chevron-right {\r\n            width: 30px; height: 30px; margin-top: -10px; font-size: 30px;\r\n        }\r\n\r\n            .fa-chevron-left {\r\n                left: 50%;\r\n                margin-left: -10px;\r\n            }\r\n\r\n            .fa-chevron-left, .fa-chevron-right {\r\n                position: absolute;\r\n                top: 50%;\r\n                z-index: 5;\r\n                display: inline-block;\r\n                margin-top: -10px;\r\n            }\r\n\r\n            .carousel-indicators li {\r\n                border: 1px solid #333;\r\n                background-color: #333;\r\n            }\r\n\r\n            .carousel-control {\r\n                width: 8% !important;\r\n                top: 108px !important;\r\n            }\r\n\r\n            .carousel-control.left {\r\n                background-image: -webkit-linear-gradient(left,rgba(84,78,137,.5) 0%,rgba(0,0,0,.0001) 100%);\r\n                background-image: -o-linear-gradient(left,rgba(84,78,137,.5) 0%,rgba(0,0,0,.0001) 100%);\r\n                background-image: linear-gradient(to right,rgba(84,78,137,.5) 0%,rgba(0,0,0,.0001) 100%);\r\n                background-repeat: repeat-x;\r\n                filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000',endColorstr='#00000000',GradientType=1);\r\n            }\r\n\r\n            .carousel-control.right {\r\n                left: auto;\r\n                right: 0;\r\n                background-image: -webkit-linear-gradient(left,rgba(0,0,0,.0001) 0%,rgba(84,78,137,.5) 100%);\r\n                background-image: -o-linear-gradient(left,rgba(0,0,0,.0001) 0%,rgba(84,78,137,.5) 100%);\r\n                background-image: linear-gradient(to right,rgba(0,0,0,.0001) 0%,rgba(84,78,137,.5) 100%);\r\n                background-repeat: repeat-x;\r\n                filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000',endColorstr='#80000000',GradientType=1);\r\n            }\r\n\r\n            .quad-frame-border-top {\r\n                border-bottom: 10px #645da3 solid;\r\n            }\r\n\r\n            .quad-frame-border-bottom {\r\n                border-bottom: 10px #645da3 solid;\r\n            }\r\n\r\n            .quad-frame-border-mid {\r\n                border-top: 5px #645da3 solid;\r\n            }\r\n\r\n            .quad-frame-border-right {\r\n                border-right: 5px #645da3 solid;\r\n            }\r\n\r\n            .Green {\r\n                color: white;\r\n                background-color: #247c1f;\r\n                border: 1px silver solid;\r\n                border-radius: 5px;\r\n                width: 30px;\r\n                height: 30px;\r\n                text-align: center;\r\n                font-family: verdana, arial, helvetica, sans-serif;\r\n                font-size: 19px;\r\n                font-weight: bold;\r\n                margin-left: 20px;\r\n                display: inline-block;\r\n                margin-right: 10px;\r\n            }\r\n\r\n            .Green:after {\r\n                content: \"G\";\r\n            }\r\n\r\n            .Red {\r\n                color: white;\r\n                background-color: #C1262E;\r\n                border: 1px silver solid;\r\n                border-radius: 5px;\r\n                width: 30px;\r\n                height: 30px;\r\n                text-align: center;\r\n                font-family: verdana, arial, helvetica, sans-serif;\r\n                font-size: 19px;\r\n                font-weight: bold;\r\n                margin-left: 20px;\r\n                display: inline-block;\r\n                margin-right: 10px;\r\n            }\r\n\r\n            .Red:after {\r\n                content: \"R\";\r\n            }\r\n\r\n            .Yellow {\r\n                color: #404040;\r\n                background-color: #ebd176;\r\n                border: 1px silver solid;\r\n                border-radius: 5px;\r\n                width: 30px;\r\n                height: 30px;\r\n                text-align: center;\r\n                font-family: verdana, arial, helvetica, sans-serif;\r\n                font-size: 19px;\r\n                font-weight: bold;\r\n                margin-left: 20px;\r\n                display: inline-block;\r\n                margin-right: 10px;\r\n            }\r\n\r\n            .Yellow:after {\r\n                content: \"Y\";\r\n            }\r\n\r\n            .va-top {\r\n                vertical-align: top;\r\n                padding-top: 7px;\r\n            }\r\n\r\n            .va-top-0 {\r\n                vertical-align: top;\r\n                padding-top: 0px;\r\n            }\r\n\r\n            .pgm-assmt-row {\r\n                margin-bottom: 10px;\r\n            }\r\n\r\n            .pgm-assmt-label {\r\n                width: 100px;\r\n                font-weight: bold;\r\n            }\r\n</style>\r\n\r\n<div id=\"carousel-portfolio\" class=\"carousel slide\" data-ride=\"carousel\">\r\n    <!-- Indicators -->\r\n    <ol class=\"carousel-indicators\" data-bind=\"foreach: project\">\r\n        <li data-target=\"#carousel-portfolio\" data-bind=\"attr: { 'data-slide-to': $index, 'title': $data.Title }, css: { active: $index() == 0}\"></li>\r\n    </ol>\r\n\r\n    <!-- Wrapper for slides -->\r\n    <div class=\"col-md-10 col-md-offset-1\" id=\"carosuel-container\">\r\n        <div class=\"carousel-inner col-md-10\" role=\"listbox\" data-bind=\"foreach: project\">\r\n            <div class=\"item\" data-bind=\"css: { active: $index() == 0 }\">\r\n                <div class=\"row\">\r\n                    <div class=\"header-text\">\r\n                        <div class=\"col-md-12 text-center\">\r\n                            <h2>\r\n                                <span data-bind=\"text: $data.Title\"></span>\r\n                            </h2>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12 quad-frame-border-top\">\r\n                        <div class=\"col-md-6 text-center\">\r\n                            <h5>Primary PM:\r\n                                <!-- ko if: $data.PrimaryPM -->\r\n                                <span data-bind=\"text: $data.PrimaryPM.DisplayName\"></span>\r\n                                <!-- /ko -->\r\n                            </h5>\r\n                        </div>\r\n                        <div class=\"col-md-6 text-center\">\r\n                            <h5>Customer: <span data-bind=\"text: $data.PrimaryCustomer\"></span></h5>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12 quad-panel\">\r\n                        <div class=\"col-md-6 quad-frame-border-right\">\r\n                            <h3>Key Deliverables:</h3>\r\n                            <div data-bind=\"html: $data.KeyDeliverables\"></div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <h3>Program Assessment:</h3>\r\n                            <div class=\"row pgm-assmt-row\">\r\n                                <table>\r\n                                    <tr>\r\n                                        <td class=\"va-top-0\">\r\n                                            <div data-bind=\"attr: { class: $data.CostKPI.Title }\"></div>\r\n                                        </td>\r\n                                        <td class=\"va-top pgm-assmt-label\">Cost:</td>\r\n                                        <td class=\"va-top\" data-bind=\"html: $data.CostSummary\"></td>\r\n                                    </tr>\r\n                                </table>\r\n                            </div>\r\n                            <div class=\"row pgm-assmt-row\">\r\n                                <table>\r\n                                    <tr>\r\n                                        <td class=\"va-top-0\">\r\n                                            <div data-bind=\"attr: { class: $data.ScheduleKPI.Title }\"></div>\r\n                                        </td>\r\n                                        <td class=\"va-top pgm-assmt-label\">Schedule:</td>\r\n                                        <td class=\"va-top\" data-bind=\"html: $data.ScheduleSummary\"></td>\r\n                                    </tr>\r\n                                </table>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <table>\r\n                                    <tr>\r\n                                        <td class=\"va-top-0\">\r\n                                            <div data-bind=\"attr: { class: $data.PerformanceKPI.Title }\"></div>\r\n                                        </td>\r\n                                        <td class=\"va-top pgm-assmt-label\">Performance:</td>\r\n                                        <td class=\"va-top\" data-bind=\"html: $data.PerformanceSummary\"></td>\r\n                                    </tr>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12 quad-panel quad-frame-border-bottom quad-frame-border-mid\">\r\n                        <div class=\"col-md-6 quad-frame-border-right\">\r\n                            <h3>Short / Mid Term Schedule:</h3>\r\n                            <div data-bind=\"html: $data.ShortTermScheduleSummary\"></div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <h3>Issue / Challenges:</h3>\r\n                            <div data-bind=\"html: $data.Issues\"></div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- Controls -->\r\n\r\n    <a class=\"left carousel-control col-md-1\" href=\"#carousel-portfolio\" role=\"button\" data-slide=\"prev\">\r\n        <i class=\"fa fa-4x fa-chevron-left\" aria-hidden=\"true\"></i>\r\n        <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n\r\n\r\n    <a class=\"right carousel-control col-md-1 col-md-offset-11 \" href=\"#carousel-portfolio\" role=\"button\" data-slide=\"next\">\r\n        <i class=\"fa fa-4x fa-chevron-right\" aria-hidden=\"true\"></i>\r\n        <span class=\"sr-only\">Next</span>\r\n    </a>\r\n\r\n</div>\r\n"

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var _ = cc.lodash,
	    template = __webpack_require__(41),
	    fn = cc.fn;
	
	/**
	 * @summary Schedule Overlay component
	 * @desc Schedule Overlay component
	 * <br />
	 *
	 * @namespace
	 * @example <caption>Schedule Overlay</caption>
	 * // Extension JS
	 * // Boilerplate Extension JS code works
	 * //
	 * // Extension HTML
	 * // <cn-cm-schedule-overlay></cn-cm-schedule-overlay>
	 */
	function scheduleOverlay(params) {
	    $.when(cmApp.ready).done(function () {
	        var self = this;
	        self.filterCriteria = '';
	        self.projects = [];
	        self.projectCategories = [];
	        self.projectTasks = [];
	        self.projectData = [];
	        self.projectFinalData = [];
	
	        // create resource gantt chart
	        self.chart = anychart.ganttResource();
	        // set container id for the chart
	        self.chart.container('container');
	
	        //set DataGrid and TimeLine visual settings
	        self.chart.dataGrid().rowOddFill('#fff');
	        self.chart.dataGrid().rowEvenFill('#fff');
	        self.chart.getTimeline().rowOddFill('#fff');
	        self.chart.getTimeline().rowEvenFill('#fff');
	
	        self.chart.rowSelectedFill('#D4DFE8');
	        self.chart.rowHoverFill('#EAEFF3');
	
	        // set start splitter position settings
	        self.chart.splitterPosition(278);
	
	        // get chart data grid link to set column settings
	        var dataGrid = self.chart.dataGrid();
	
	        // set first column settings
	        var firstColumn = dataGrid.column(0);
	        firstColumn.title('#');
	        firstColumn.width(25);
	        firstColumn.cellTextSettings().hAlign('center');
	
	        // set second column settings
	        var secondColumn = dataGrid.column(1);
	        secondColumn.title('Project');
	        secondColumn.width(250);
	        secondColumn.cellTextSettings().hAlign('left');
	        secondColumn.textFormatter(function (item) {
	            return item.get('name');
	        });
	
	
	        self.loadScheduleOverlay = function () {
	            $.blockUI();
	
	            self.projectData = [];
	
	            cmApp.datasource('Tasks', true).done(function (ds) {
	                if (ds === null) {
	                    console.log('Tasks datasource connection not found');
	                } else {
	                    var filter = '{"logic":"and","filters":[{"field":"TopLevel","operator":"eq","value":true}]}';
	                    ds.query({
	                        filter: JSON.parse(filter)
	                    }).then(function () {
	                        if (ds.data().length >= 1) {
	                            self.projectTasks = [];
	                            _.each(ds.data(), function (task, i) {
	                                self.projectTasks.push({
	                                    id: task.Id,
	                                    projectId: task.Project.ItemId,
	                                    start: moment(task.StartDate).valueOf(),
	                                    end: moment(task.EndDate).valueOf()
	                                });
	                            });
	
	                            cmApp.datasource('Project Categories', false).done(function (ds) {
	                                if (ds === null) {
	                                    console.log('Project Categories datasource connection not found');
	                                } else {
	                                    ds.query({
	                                        sort: { field: "Title", dir: "asc" }
	                                    }).then(function () {
	                                        if (ds.data().length >= 1) {
	                                            self.filterCriteria = '';
	                                            self.projectCategories = [];
	                                            var legendHTML = '';
	                                            self.filterCriteria = '{"logic":"or","filters":[';
	                                            _.each(ds.data(), function (category, i) {
	                                                self.projectCategories.push({
	                                                    id: category.Id,
	                                                    color: category.LegendColor,
	                                                    scheduleOverlay: category.ScheduleOverlay,
	                                                    proposedDates: category.UseProposedDates
	                                                });
	
	                                                if (category.ScheduleOverlay === true) {
	                                                    legendHTML += '<div style="background-color: ' + category.LegendColor + '" class="legend">' + category.Title + '</div>';
	                                                    self.filterCriteria += '{"field":"Category%2FItemId","operator":"eq","value":"' + category.Id + '"},';
	                                                }
	                                            });
	                                            self.filterCriteria = self.filterCriteria.substring(0, self.filterCriteria.length - 1) + ']}';
	                                            $("#legend").html(legendHTML);
	
	                                            cmApp.datasource('Projects', true).done(function (ds) {
	                                                if (ds === null) {
	                                                    console.log('Projects datasource connection not found');
	                                                } else {
	                                                    ds.query({
	                                                        filter: JSON.parse(self.filterCriteria)
	                                                    }).then(function () {
	                                                        if (ds.data().length >= 1) {
	                                                            self.projects = [];
	                                                            var color = '';
	                                                            var proposedProject = '';
	                                                            _.each(ds.data(), function (project, i) {
	                                                                var category = _.find(self.projectCategories, {id: project.Category.ItemId});
	                                                                color = category.color;
	                                                                if (category.proposedDates !== undefined) {
	                                                                    proposedProject = true;
	                                                                } else {
	                                                                    proposedProject = false;
	                                                                }
	                                                                self.projects.push({
	                                                                    projectId: project.Id,
	                                                                    name: project.Title,
	                                                                    category: project.Category.Title,
	                                                                    fill: color,
	                                                                    stroke: color,
	                                                                    proposedStart: moment(project.ProposedStartDate).valueOf(),
	                                                                    proposedEnd: moment(project.ProposedEndDate).valueOf(),
	                                                                    proposedProject: proposedProject
	                                                                });
	                                                            });
	                                                            self.projectData = self.projects.map(function (v) {
	                                                                var ret;
	                                                                $.each(self.projectTasks, function (k, v2) {
	                                                                    if (v2.projectId === v.projectId) {
	                                                                        ret = $.extend({}, v2, v);
	                                                                        return false;
	                                                                    }
	                                                                });
	                                                                return ret;
	                                                            });
	
	                                                            self.projectFinalData = [];
	                                                            _.each(self.projectData, function (project, i) {
	                                                                if (project !== undefined) {
	                                                                    if (project.proposedProject === true) {
	                                                                        self.projectFinalData.push({
	                                                                            id: project.id,
	                                                                            projectId: project.projectId,
	                                                                            name: project.name,
	                                                                            category: project.category,
	                                                                            periods: [{
	                                                                                id: '1',
	                                                                                start: moment(project.proposedStart).valueOf(),
	                                                                                end: moment(project.proposedEnd).valueOf(),
	                                                                                fill: project.fill,
	                                                                                stroke: project.stroke
	                                                                            }]
	                                                                        });
	                                                                    } else {
	                                                                        self.projectFinalData.push({
	                                                                            id: project.id,
	                                                                            projectId: project.projectId,
	                                                                            name: project.name,
	                                                                            category: project.category,
	                                                                            periods: [{
	                                                                                id: '1',
	                                                                                start: moment(project.start).valueOf(),
	                                                                                end: moment(project.end).valueOf(),
	                                                                                fill: project.fill,
	                                                                                stroke: project.stroke
	                                                                            }]
	                                                                        });
	                                                                    }
	                                                                }
	                                                            });
	                                                            self.projectFinalData = _.sortBy(self.projectFinalData, ["category", "periods[0].start"]);
	                                                            self.drawChart();
	                                                        } else {
	                                                            console.log('No data is returned');
	                                                        }
	                                                    });
	                                                }
	                                            });
	                                        } else {
	                                            console.log('No data is returned');
	                                        }
	                                    });
	                                }
	                            });
	                        } else {
	                            console.log('No data is returned');
	                        }
	                    });
	                }
	            });
	        };
	
	        self.loadScheduleOverlay();
	
	        self.drawChart = function () {
	            // create data tree on our data
	            var treeData = anychart.data.tree(self.projectFinalData, anychart.enums.TreeFillingMethod.AS_TABLE);
	
	            // set data for the chart
	            self.chart.data(treeData);
	
	            // initiate chart drawing
	            self.chart.draw();
	
	            self.chart.listen(anychart.enums.EventType.ROW_CLICK, function (e) {
	                e.preventDefault();
	            });
	
	            $.unblockUI();
	            // zoom chart all dates range
	            self.chart.fitAll();
	        };
	
	    });
	}
	
	$.extend(true, scheduleOverlay.prototype, {
	    dispose: function () {
	
	    },
	
	    initSubscriptions: function () {
	        var self = this;
	
	    },
	
	    initComponent: function (view) {
	    }
	});
	
	function createViewModel(params, componentInfo) {
	
	    return new scheduleOverlay(params);
	}
	
	module.exports = {
	    viewModel: {
	        createViewModel: createViewModel
	    },
	    template: template
	};


/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = "<style>\r\n    #container{\r\n        width: 100%;\r\n        height: 600px;\r\n    }\r\n    .legend {\r\n        margin-left: -2px;\r\n        margin-right: 15px;\r\n        margin-top: 7px;\r\n        padding: 5px 7px;\r\n        float: left;\r\n        border-radius: 3px;\r\n        border: 1px solid silver;\r\n        width: 100px;\r\n        text-align: center;\r\n        color: white;\r\n        box-shadow: 0 0 1px rgba(0,0,0,0.5);\r\n        font-family: 'Gentona W00 Medium', Gentona Medium;\r\n    }\r\n</style>\r\n<div id=\"legend\"></div>\r\n<div id=\"container\"></div>"

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var _ = cc.lodash,
	    template = __webpack_require__(43),
	    fn = cc.fn;
	
	/**
	 * @summary Project Cleanup component
	 * @desc Project Cleanup component
	 * <br />
	 * Deletes all data associated to the selected project
	 * @namespace
	 * @example <caption>Project Cleanup Description</caption>
	 * // Extension JS
	 * // Boilerplate Extension JS code works
	 * //
	 * // Extension HTML
	 * // <cn-cm-project-cleanup></cn-cm-project-cleanup>
	 */
	function ProjectCleanup(params) {
	
	    var self = this;
	    window.projectCleanupVm = self;
	    cmApp.blockUI();
	    self.isLoading = ko.observable(true);
	    self.isRendered = ko.observable(false);
	    self.selectedProject = ko.observable();
	    self.capiche = ko.observable(false);
	    self.selectedProject.subscribe(function (newProjectId) {
	
	        var self = window.projectCleanupVm;
	        cmApp.blockUI('Reading related project data');
	        var ds = [];
	        $.each(self.projectRelatedDataSources, function(index, source){
	            var listName = window.projectCleanupVm.projectRelatedDataSources[index].Title;
	            var sort = {field: "Title", dir: "asc"};
	            var filter = {"logic":"and","filters":[{"field":"Project%2FItemId","operator":"eq","value":window.projectCleanupVm.selectedProject()}]};
	            if(listName == 'Projects'){
	                filter = {"logic":"and","filters":[{"field":"Id","operator":"eq","value":window.projectCleanupVm.selectedProject()}]};
	            }
	            window.projectCleanupVm.datasourceArray[listName].query(
	                {
	                    sort: sort,
	                    filter: filter
	                }
	            ).then(function () {
	            });
	        });
	        $(document).ajaxStop(function () {
	            $(document).unbind("ajaxStop");
	            $.each(window.projectCleanupVm.projectRelatedDataSources, function(index, ds){
	                ds.data(window.projectCleanupVm.datasourceArray[ds.Title].data());
	            });
	            cmApp.unblockUI();
	        });
	
	    });
	
	    self.deleteAll = function(parent){
	        cmApp.blockUI('Deleting related project data');
	        var ds = [];
	        $.each(self.projectRelatedDataSources, function(index, source){
	            var listName = window.projectCleanupVm.projectRelatedDataSources[index].Title;
	            if(listName != 'Projects'){
	                var datasource = window.projectCleanupVm.datasourceArray[listName];
	                var dataLen = datasource.data().length;
	                if(datasource.data().length > 0){
	                    for(var i = 0; i < dataLen; i++){
	                        var dataItem = datasource.data().at(0);
	                        datasource.remove(dataItem);
	                    }
	                    datasource.sync().done(function () {
	                        cc.notification.trigger('success', {
	                            title: dataLen + ' ' + listName +  ' items deleted',
	                            message: ''
	                        });
	
	                    });
	                }
	            }
	        });
	        $(document).ajaxStop(function () {
	            $(document).unbind("ajaxStop");
	            $(document).ajaxStop(function () {
	                $(document).unbind("ajaxStop");
	                self.projects.remove(_.find(self.projects(), {Id: self.selectedProject()}));
	                self.selectedProject(null);
	                cmApp.unblockUI();
	            });
	            $.each(self.projectRelatedDataSources, function(index, source){
	                var listName = window.projectCleanupVm.projectRelatedDataSources[index].Title;
	                if(listName == 'Projects'){
	                    var datasource = window.projectCleanupVm.datasourceArray[listName];
	                    var dataLen = datasource.data().length;
	                    if(datasource.data().length > 0){
	                        for(var i = 0; i < dataLen; i++){
	                            var dataItem = datasource.data().at(0);
	                            datasource.remove(dataItem);
	                        }
	                        datasource.sync().done(function () {
	                            cc.notification.trigger('success', {
	                                title: dataLen + ' ' + listName +  ' items deleted',
	                                message: ''
	                            });
	
	                        });
	                    }
	                }
	            });
	        });
	    };
	    $(document).ajaxStop(function () {
	        $.when(cmApp.availableDataSourcesDfer).done(function () {
	            cmApp.unblockUI();
	            self.isLoading(false);
	        });
	        $(document).unbind("ajaxStop");
	    });
	    self.datasourceArray = [];
	    self.projects  = ko.observableArray([]);
	    self.dataArray = ko.observableArray([]);
	    self.projectRelatedDataSources = [];
	    $.when(cmApp.availableDataSourcesDfer).done(function () {
	        self.availableDataSources = ko.observableArray(_.filter(cmApp.availableDataSources, {CrossAppAccessLevel: 'Contributor'}));
	        self.projectRelatedDataSources.push({Title: 'Projects', data: ko.observableArray()});
	        $.each(self.availableDataSources(), function (index, datasource) {
	            cmApp.datasource(datasource.Title, true).done(function (ds) {
	                if(typeof ds.options.schema.model.fields.Project == 'object' &&
	                    _.findIndex(window.projectCleanupVm.projectRelatedDataSources, {Title: datasource.Title}) == -1){
	                    self.projectRelatedDataSources.push({Title: datasource.Title, data: ko.observableArray()});
	                }
	                self.datasourceArray[datasource.Title] = ds;
	                if(datasource.Title == 'Projects'){
	                    ds.query({sort: {field: "Title", dir: "asc"}}).then(function () {
	                        self.projects(ds.data());
	                    });
	                }
	            });
	        });
	    });
	
	}
	
	$.extend(true, ProjectCleanup.prototype, {
	    dispose: function () {
	    },
	
	    initSubscriptions: function () {
	        var self = this;
	
	    },
	
	    initComponent: function (view) {
	    }
	});
	function createViewModel(params, componentInfo) {
	    return new ProjectCleanup(params);
	}
	
	module.exports = {
	    viewModel: {
	        createViewModel: createViewModel
	    },
	    template: template
	};


/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = "<div data-bind=\"if: isLoading\">\r\n    Loading...\r\n</div>\r\n\r\n<div data-bind=\"ifnot: isLoading\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6 alert-danger lead\">\r\n            Ok, I'm only going to tell you once. This utility is very powerful. In one fell swoop, it will delete the\r\n            selected Project and all of the related data. There will be no \"Are you sure?\" or any other confirmation. Once you\r\n            click the button, it is done. Capiche?\r\n            <p>Capiche: <input type=\"checkbox\" data-bind=\"checked: capiche\" /></p>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n            <button type=\"button\" class=\"btn-primary btn-lg btn-danger\" data-bind=\"visible: capiche() && selectedProject(), click: deleteAll\">Delete</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\" data-bind=\"visible: capiche\">\r\n    <div class=\"col-md-8\">\r\n        <input style=\"width: 100%;\" data-bind=\"kendoComboBox: { placeholder: 'Select a Project', dataTextField: 'Title', dataValueField: 'Id', data: projects, value: selectedProject, }\">\r\n        </input>\r\n    </div>\r\n</div>\r\n<div class=\"row\" data-bind=\"if: selectedProject, visible: capiche\">\r\n    <div class=\"col-md-6\">\r\n        <ul class=\"list-unstyled list-group\" data-bind=\"foreach: $component.projectRelatedDataSources\">\r\n            <li class=\"list-group-item\">\r\n                <span data-bind=\"text: $data.Title\"></span>\r\n                (<span data-bind=\"text: $data.data().length\"></span>)\r\n                <!-- ko if: $data.data().length > 0 -->\r\n                <ul class=\"list-unstyled list-group\" data-bind=\"foreach: data\">\r\n                    <li class=\"list-group-item\">\r\n                        <span data-bind=\"text: Title\"></span>\r\n                        <!-- ko if: $parent.Title == 'Team Members' -->\r\n                        <span data-bind=\"text: Resource.Title\"></span>\r\n                        <!-- /ko -->\r\n                    </li>\r\n                </ul>\r\n                <!-- /ko -->\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>"

/***/ },
/* 44 */
/***/ function(module, exports) {

	/**
	 * Created by david.smiley on 5/12/2016.
	 */
	cnCmAppComponents.hello = function(){
	    alert('Hello');
	};


/***/ },
/* 45 */
/***/ function(module, exports) {

	/**
	 * Created by david.smiley on 7/7/2016.
	 */
	/*
	 Add constructor function for ActivityTimeline params
	 */
	/**
	 * @summary Constructor for Activity Timeline Params
	 * @desc Constructor for Activity Timeline Params
	 * @param {array} projectIds - Array of Project Ids
	 * @param {object} options - Options for ActivityTimeline behavior
	 * @returns {object}
	 * @constructor
	 */
	cnCmAppComponents.activityTimelineParams = function(){
	    this.projectIds = ko.observableArray([]).extend({ rateLimit: { method: "notifyWhenChangesStop", timeout: 100 }});
	    this.options = {
	        initialCardSize: 'default'
	    };
	};


/***/ }
/******/ ]);
