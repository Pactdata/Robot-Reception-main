System.register(["./base", "../services/api"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __generator = (this && this.__generator) || function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [0, t.value];
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
    };
    var __moduleName = context_1 && context_1.id;
    var base_1, webapi, VisitreasonIndexCtrl;
    return {
        setters: [
            function (base_1_1) {
                base_1 = base_1_1;
            },
            function (webapi_1) {
                webapi = webapi_1;
            }
        ],
        execute: function () {
            VisitreasonIndexCtrl = /** @class */ (function (_super) {
                __extends(VisitreasonIndexCtrl, _super);
                function VisitreasonIndexCtrl($scope, $http, $q, $swal, $timeout, $state, $stateParams, principal, $rootScope, $uibModal, $location, $urlService, $notify, $i18next, api, validateFileSize, Upload) {
                    var _this = _super.call(this, $notify, $i18next, $scope) || this;
                    _this.$scope = $scope;
                    _this.$http = $http;
                    _this.$q = $q;
                    _this.$swal = $swal;
                    _this.$timeout = $timeout;
                    _this.$state = $state;
                    _this.$stateParams = $stateParams;
                    _this.principal = principal;
                    _this.$rootScope = $rootScope;
                    _this.$uibModal = $uibModal;
                    _this.$location = $location;
                    _this.$urlService = $urlService;
                    _this.$notify = $notify;
                    _this.$i18next = $i18next;
                    _this.api = api;
                    _this.validateFileSize = validateFileSize;
                    _this.Upload = Upload;
                    _this.init();
                    return _this;
                }
                VisitreasonIndexCtrl.prototype.init = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var scope;
                        return __generator(this, function (_a) {
                            scope = this.$scope;
                            scope.query = {};
                            scope.pageIndex = 1;
                            scope.pageSize = 20;
                            scope.pageChanged = this.pageChanged.bind(this);
                            scope.openReasonModal = this.openReasonModal.bind(this);
                            scope.openMemberModal = this.openMemberModal.bind(this);
                            scope.deleteReason = this.deleteReason.bind(this);
                            this.pageChanged();
                            return [2 /*return*/];
                        });
                    });
                };
                // #region 查询分页
                VisitreasonIndexCtrl.prototype.pageChanged = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var scope, query, query_1, webVisitReasonClient, dataSource, err_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    scope = this.$scope;
                                    query = scope.query;
                                    query.loading = true;
                                    _a.label = 1;
                                case 1:
                                    _a.trys.push([1, 3, 4, 5]);
                                    query_1 = scope.query;
                                    webVisitReasonClient = this.api.getClient(webapi.WebVisitReasonClient);
                                    return [4 /*yield*/, webVisitReasonClient.getAll()];
                                case 2:
                                    dataSource = _a.sent();
                                    scope.list = dataSource.data;
                                    query_1.loading = false;
                                    return [3 /*break*/, 5];
                                case 3:
                                    err_1 = _a.sent();
                                    console.error(err_1);
                                    this.$notify.error("Failed to get list");
                                    return [3 /*break*/, 5];
                                case 4:
                                    query.loading = false;
                                    return [7 /*endfinally*/];
                                case 5: return [2 /*return*/];
                            }
                        });
                    });
                };
                // #endregion 分页
                // #region showPositionModel
                VisitreasonIndexCtrl.prototype.openReasonModal = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            this.$uibModal.open({
                                templateUrl: "testTemplate.html",
                                controller: function ($scope, $uibModalInstance, $http, $q, $swal, $notify) { return __awaiter(_this, void 0, void 0, function () {
                                    var _this = this;
                                    return __generator(this, function (_a) {
                                        $scope.close = function () {
                                            $uibModalInstance.dismiss("dismiss");
                                        };
                                        $scope.ok = function () { return __awaiter(_this, void 0, void 0, function () {
                                            var webVisitReasonClient, resp, err_2;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        _a.trys.push([0, 2, , 3]);
                                                        if ($scope.reason.visitReason === undefined) {
                                                            $swal.error({ title: "请填写reason!" });
                                                            return [2 /*return*/];
                                                        }
                                                        webVisitReasonClient = this.api.getClient(webapi.WebVisitReasonClient);
                                                        return [4 /*yield*/, webVisitReasonClient.addReason($scope.reason.visitReason)];
                                                    case 1:
                                                        resp = _a.sent();
                                                        if (resp.errcode === 0) {
                                                            this.pageChanged();
                                                            $notify.success("新增Reason成功");
                                                            $uibModalInstance.close();
                                                        }
                                                        else {
                                                            $swal.error({ title: resp.errmsg });
                                                            $uibModalInstance.close();
                                                        }
                                                        return [3 /*break*/, 3];
                                                    case 2:
                                                        err_2 = _a.sent();
                                                        console.error(err_2);
                                                        $swal.error({ title: "新增异常,请联系管理员!" });
                                                        return [3 /*break*/, 3];
                                                    case 3: return [2 /*return*/];
                                                }
                                            });
                                        }); };
                                        return [2 /*return*/];
                                    });
                                }); },
                                resolve: {},
                                size: 'lg',
                            }).result.then(function (data) {
                            }).catch(function () { });
                            return [2 /*return*/];
                        });
                    });
                };
                // #endregion
                // #region openPositionModal
                VisitreasonIndexCtrl.prototype.openMemberModal = function (l) {
                    return __awaiter(this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            this.$uibModal.open({
                                templateUrl: "memberTemplate.html",
                                controller: function ($scope, $uibModalInstance, $http, $q, $swal, $notify) { return __awaiter(_this, void 0, void 0, function () {
                                    var _this = this;
                                    return __generator(this, function (_a) {
                                        $scope.reason = {};
                                        $scope.reason.visitReason = l.visitReason;
                                        $scope.reason.id = l.id;
                                        $scope.close = function () {
                                            $uibModalInstance.dismiss("dismiss");
                                        };
                                        $scope.ok = function () { return __awaiter(_this, void 0, void 0, function () {
                                            var webVisitReasonClient, visitReasonInfo, resp, err_3;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        _a.trys.push([0, 2, , 3]);
                                                        if ($scope.reason.visitReason === undefined) {
                                                            $swal.error({ title: "请填写reason!" });
                                                            return [2 /*return*/];
                                                        }
                                                        webVisitReasonClient = this.api.getClient(webapi.WebVisitReasonClient);
                                                        visitReasonInfo = this.api.getClient(webapi.VisitReasonInfo);
                                                        visitReasonInfo.id = $scope.reason.id;
                                                        visitReasonInfo.visitReason = $scope.reason.visitReason;
                                                        return [4 /*yield*/, webVisitReasonClient.editReason(visitReasonInfo)];
                                                    case 1:
                                                        resp = _a.sent();
                                                        if (resp.errcode === 0) {
                                                            this.pageChanged();
                                                            this.$notify.success("更新成功");
                                                            $uibModalInstance.close();
                                                        }
                                                        else {
                                                            $swal.error({ title: resp.errmsg });
                                                            $uibModalInstance.close();
                                                        }
                                                        return [3 /*break*/, 3];
                                                    case 2:
                                                        err_3 = _a.sent();
                                                        console.error(err_3);
                                                        $swal.error({ title: "更新异常,请联系管理员!" });
                                                        return [3 /*break*/, 3];
                                                    case 3: return [2 /*return*/];
                                                }
                                            });
                                        }); };
                                        return [2 /*return*/];
                                    });
                                }); },
                                resolve: {},
                                size: 'lg',
                            }).result.then(function (data) {
                            }).catch(function () { });
                            return [2 /*return*/];
                        });
                    });
                };
                // #endregion
                // #region 删除
                VisitreasonIndexCtrl.prototype.deleteReason = function (l) {
                    return __awaiter(this, void 0, void 0, function () {
                        var webVisitReasonClient, res, err_4;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.$swal.confirm({
                                        title: "Are you sure you want to delete this reason?",
                                    })];
                                case 1:
                                    _a.sent();
                                    _a.label = 2;
                                case 2:
                                    _a.trys.push([2, 4, , 5]);
                                    webVisitReasonClient = this.api.getClient(webapi.WebVisitReasonClient);
                                    return [4 /*yield*/, webVisitReasonClient.deleteReason(l.id)];
                                case 3:
                                    res = _a.sent();
                                    if (res.errcode === 0) {
                                        this.pageChanged();
                                        this.$notify.success("Delete success!");
                                    }
                                    else {
                                        this.$swal.error({ title: "Delete failed", text: res.errmsg });
                                    }
                                    return [3 /*break*/, 5];
                                case 4:
                                    err_4 = _a.sent();
                                    console.error(err_4);
                                    this.$swal.error({ title: "Delete the exception, please contact the administrator" });
                                    return [3 /*break*/, 5];
                                case 5: return [2 /*return*/];
                            }
                        });
                    });
                };
                return VisitreasonIndexCtrl;
            }(base_1.default));
            exports_1("VisitreasonIndexCtrl", VisitreasonIndexCtrl);
        }
    };
});
//# sourceMappingURL=visitreason.index.js.map