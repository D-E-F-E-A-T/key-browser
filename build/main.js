webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_auth_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_details_actions_store_details_actions__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_details_orders_store_details_orders__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_details_history_store_details_history__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store_details_contacts_store_details_contacts__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_constants__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__distribution_articles_distribution_articles__ = __webpack_require__(439);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var StoreDetailsPage = (function () {
    function StoreDetailsPage(navCtrl, storage, authService, navParams) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.authService = authService;
        this.navParams = navParams;
        this.ACCESS_CALENDAR = __WEBPACK_IMPORTED_MODULE_8__app_constants__["a" /* ACCESS_CALENDAR */];
        this.ACCESS_STORE_LIST = __WEBPACK_IMPORTED_MODULE_8__app_constants__["e" /* ACCESS_STORE_LIST */];
        this.ACCESS_CONTACTS = __WEBPACK_IMPORTED_MODULE_8__app_constants__["b" /* ACCESS_CONTACTS */];
        this.ACCESS_ORDERS = __WEBPACK_IMPORTED_MODULE_8__app_constants__["c" /* ACCESS_ORDERS */];
        this.ACCESS_ORDERS_HISTORY = __WEBPACK_IMPORTED_MODULE_8__app_constants__["d" /* ACCESS_ORDERS_HISTORY */];
        this.accesses = {};
        this.actionsPage = __WEBPACK_IMPORTED_MODULE_3__store_details_actions_store_details_actions__["a" /* StoreDetailsActionsPage */];
        this.ordersPage = __WEBPACK_IMPORTED_MODULE_4__store_details_orders_store_details_orders__["a" /* StoreDetailsOrdersPage */];
        this.historyPage = __WEBPACK_IMPORTED_MODULE_5__store_details_history_store_details_history__["a" /* StoreDetailsHistoryPage */];
        this.contactsPage = __WEBPACK_IMPORTED_MODULE_7__store_details_contacts_store_details_contacts__["a" /* StoreDetailsContactsPage */];
        this.articlesPage = __WEBPACK_IMPORTED_MODULE_9__distribution_articles_distribution_articles__["a" /* DistributionArticlesPage */];
        this.hide = false;
        this.accesses = authService.getAccesses();
        this.accesses[6] = true;
        this.store = this.navParams.data.store;
    }
    return StoreDetailsPage;
}());
StoreDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-store-details',template:/*ion-inline-start:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/store-details/store-details.html"*/'<div *ngIf="store">\n  <ion-tabs #storeDetailsTabs color="newcolor">\n    <ion-tab [root]="actionsPage" [rootParams]="store" tabTitle="Actions" tabIcon="locate"></ion-tab>\n    <ion-tab [root]="contactsPage" [rootParams]="store" *ngIf="accesses[ACCESS_CONTACTS]"  tabTitle="Contacts" tabIcon="contact"></ion-tab>\n    <ion-tab [root]="articlesPage" [rootParams]="store"  *ngIf="accesses[6]" tabTitle="Article" tabIcon="barcode"></ion-tab>\n    <ion-tab [root]="ordersPage" [rootParams]="store" *ngIf="accesses[ACCESS_ORDERS]" tabTitle="Orders" tabIcon="cart"></ion-tab>\n    <ion-tab [root]="historyPage" [rootParams]="store" *ngIf="accesses[ACCESS_ORDERS_HISTORY]" tabTitle="History" tabIcon="timer"></ion-tab>\n  </ion-tabs>\n</div>'/*ion-inline-end:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/store-details/store-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_0__providers_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* NavParams */]])
], StoreDetailsPage);

//# sourceMappingURL=store-details.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_models_visit__ = __webpack_require__(752);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globals__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VisitService = (function () {
    function VisitService(http) {
        this.http = http;
    }
    VisitService.prototype.fetchAll = function (params) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__globals__["a" /* Globals */].api + 'app/visit/list', { params: params }).map(function (res) { return __WEBPACK_IMPORTED_MODULE_1__app_models_visit__["a" /* Visit */].fromJSONArray(res); });
    };
    VisitService.prototype.create = function (payload, params) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__globals__["a" /* Globals */].api + 'app/visit/create', payload, { params: params }).map(function (res) { return __WEBPACK_IMPORTED_MODULE_1__app_models_visit__["a" /* Visit */].fromJSONObject(res); });
    };
    VisitService.prototype.update = function (id, payload, params) {
        if (params === void 0) { params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */](); }
        params = params.append('id', id.toString());
        return this.http.put(__WEBPACK_IMPORTED_MODULE_3__globals__["a" /* Globals */].api + 'app/visit/update', payload, { params: params }).map(function (res) { return __WEBPACK_IMPORTED_MODULE_1__app_models_visit__["a" /* Visit */].fromJSONObject(res); });
    };
    VisitService.prototype.delete = function (id, params) {
        if (params === void 0) { params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */](); }
        params = params.append('id', id.toString());
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__globals__["a" /* Globals */].api + 'app/visit/delete', { params: params });
    };
    return VisitService;
}());
VisitService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
], VisitService);

//# sourceMappingURL=visit.service.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__globals__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationService = (function () {
    function AuthenticationService(http, storage, authService) {
        this.http = http;
        this.storage = storage;
        this.authService = authService;
    }
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        var payload = {
            LoginForm: {
                username: username,
                password: password
            }
        };
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__globals__["a" /* Globals */].api + 'user/login', payload)
            .map(function (data) {
            // login successful if there's a jwt token in the response
            var token = data && data['auth_token'];
            if (token) {
                // manage accesses
                var accesses = {};
                for (var index in data['seller_accesses']) {
                    accesses[parseInt(data['seller_accesses'][index].access_id)] = true;
                }
                for (var index in [1, 2, 3, 4, 5]) {
                    var i = parseInt(index) + 1;
                    if (!accesses.hasOwnProperty(i)) {
                        accesses[i] = false;
                    }
                }
                data.accesses = accesses;
                _this.storage.set('user', data);
                _this.authService.init(data);
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        // clear token remove user from local storage to log user out
        this.storage.remove('user');
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */]])
], AuthenticationService);

//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_globals__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_details_actions_store_details_actions__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__visit_stores_visit_stores__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__visit_visit__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__store_details_store_details__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__calendar_mode_popover_calendar_mode_popover__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__visit_edit_modal_visit_edit_modal__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_common_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_visit_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__store_filter_store_filter__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_contact_contact__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_constants__ = __webpack_require__(438);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var START_TIME_HOUR = 8;













var CalendarPage = (function () {
    function CalendarPage(navCtrl, navParams, http, storage, menuCtrl, alert, loader, popoverCtrl, commonService, visitService, _contactProvider, authService, toastCtrl, modal) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.storage = storage;
        this.menuCtrl = menuCtrl;
        this.alert = alert;
        this.loader = loader;
        this.popoverCtrl = popoverCtrl;
        this.commonService = commonService;
        this.visitService = visitService;
        this._contactProvider = _contactProvider;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.modal = modal;
        this.visitTypes = [];
        this.ACCESS_CALENDAR = __WEBPACK_IMPORTED_MODULE_17__app_constants__["a" /* ACCESS_CALENDAR */];
        this.ACCESS_STORE_LIST = __WEBPACK_IMPORTED_MODULE_17__app_constants__["e" /* ACCESS_STORE_LIST */];
        this.ACCESS_CONTACTS = __WEBPACK_IMPORTED_MODULE_17__app_constants__["b" /* ACCESS_CONTACTS */];
        this.ACCESS_ORDERS = __WEBPACK_IMPORTED_MODULE_17__app_constants__["c" /* ACCESS_ORDERS */];
        this.ACCESS_ORDERS_HISTORY = __WEBPACK_IMPORTED_MODULE_17__app_constants__["d" /* ACCESS_ORDERS_HISTORY */];
        this.stores = [];
        this.filter_customer = false;
        this.filter_tags = false;
        this.filter_categories = false;
        this.scores = [];
        this.days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        this.visits = [];
        this.accesses = {};
        this.visit_frequency = [];
        this.daysDates = [];
        this.monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
        this.calendar = {
            mode: 'week',
            currentDate: new Date(),
            currentDateCopy: new Date(),
            eventSource: [],
            activeEvent: null,
            setToday: function () {
                _this.calendar.currentDate = new Date();
            },
            onCurrentDateChanged: function (newCurrentDate) {
                _this.calendar.currentDateCopy = newCurrentDate;
            },
            onRangeChanged: function (ev) {
                var startStr = __WEBPACK_IMPORTED_MODULE_9_moment__(ev.startTime).format('YYYY-MM-DD');
                var endStr = __WEBPACK_IMPORTED_MODULE_9_moment__(ev.endTime).format('YYYY-MM-DD');
                _this.storage.get('user').then(function (user) {
                    var params = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpParams */]()
                        .append('start', startStr)
                        .append('end', endStr)
                        .append('expand', 'visitType,store');
                    _this.visitService.fetchAll(params).subscribe(function (visits) {
                        _this.calendar.eventSource = visits.map(function (visit) {
                            return {
                                id: visit.id,
                                visit: visit,
                                title: visit.title,
                                startTime: visit.start,
                                endTime: visit.end,
                                backgroundColor: visit.status ? "green" : (visit.visitType ? visit.visitType.color : '#0866c6'),
                            };
                        });
                    });
                });
            },
            onEventSelected: function (event) {
                _this.calendar.activeEvent = event;
                var visitEditModal = _this.modal.create(__WEBPACK_IMPORTED_MODULE_12__visit_edit_modal_visit_edit_modal__["a" /* VisitEditModalPage */], {
                    visit: event.visit,
                    store: event.visit.store,
                    visitTypes: _this.visitTypes
                });
                visitEditModal.onDidDismiss(function (data) {
                    _this.calendar.activeEvent = null;
                    if (data) {
                        switch (data.reason) {
                            case 'update': {
                                var startMoment = __WEBPACK_IMPORTED_MODULE_9_moment__(data.editedVisit.start);
                                var endMoment = __WEBPACK_IMPORTED_MODULE_9_moment__(data.editedVisit.end);
                                var payload = {
                                    note: data.editedVisit.note,
                                    visit_type_id: data.editedVisit.visit_type_id,
                                    booked: data.editedVisit.booked ? 1 : 0,
                                    status: data.editedVisit.status ? 1 : 0,
                                    start: startMoment.format('YYYY-MM-DD HH:mm:ss'),
                                    duration: __WEBPACK_IMPORTED_MODULE_9_moment__["duration"](endMoment.diff(startMoment)).asMinutes()
                                };
                                _this.visitService.update(event.id, payload).subscribe(function () {
                                    _this.calendar.currentDate = __WEBPACK_IMPORTED_MODULE_9_moment__(_this.calendar.currentDateCopy).toDate();
                                });
                                break;
                            }
                            case 'delete': {
                                _this.visitService.delete(event.id).subscribe(function () {
                                    _this.calendar.currentDate = __WEBPACK_IMPORTED_MODULE_9_moment__(_this.calendar.currentDateCopy).toDate();
                                });
                                break;
                            }
                        }
                    }
                });
                visitEditModal.present();
            },
            onTimeSelected: function (e) {
                if (_this.calendar.activeEvent || _this.calendar.mode == 'month')
                    return;
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__visit_stores_visit_stores__["a" /* VisitStoresPage */], {
                    stores: _this.all_stores,
                    callback: function (store) {
                        var payload = {
                            store_id: store.id,
                            title: store.customer,
                            booked: 0,
                            start: __WEBPACK_IMPORTED_MODULE_9_moment__(e.selectedTime).format('YYYY-MM-DD HH:mm:ss'),
                            duration: 60
                        };
                        _this.visitService.create(payload).subscribe(function () {
                            _this.calendar.currentDate = __WEBPACK_IMPORTED_MODULE_9_moment__(_this.calendar.currentDateCopy).toDate();
                        });
                    }
                });
            }
        };
        this.filter = false;
        this.scroll = false;
        this.accesses = authService.getAccesses();
        this.store_page = 1;
        if (this.accesses[__WEBPACK_IMPORTED_MODULE_17__app_constants__["a" /* ACCESS_CALENDAR */]]) {
            this.active_page = 'visits';
        }
        else if (this.accesses[__WEBPACK_IMPORTED_MODULE_17__app_constants__["e" /* ACCESS_STORE_LIST */]]) {
            this.active_page = 'stores';
        }
        this.loading = true;
        this.year = this.getWeekNumber(new Date())[0];
        this.week = this.getWeekNumber(new Date())[1];
    }
    CalendarPage.prototype.ionViewWillEnter = function () {
        this.loadStores();
    };
    CalendarPage.prototype.loadStores = function () {
        var _this = this;
        var loading = this.loader.create({
            content: 'Loading stores'
        });
        loading.present().then(function () {
            _this.commonService.fetchVisitTypes().subscribe(function (visitTypes) { return _this.visitTypes = visitTypes; });
            _this.stores = [];
            _this.scores = [];
            _this.store_page = 1;
            var params = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpParams */]()
                .append('page', _this.store_page)
                .append('expand', 'storeTags.tag,category');
            if (_this.filter_customer) {
                params = params.append('name', _this.filter_customer);
            }
            else {
                params = params.append('null', 'null');
            }
            if (_this.filter_tags) {
                params = params.append('tags', _this.filter_tags);
            }
            else {
                params = params.append('null', 'null');
            }
            if (_this.filter_categories) {
                params = params.append('categories', _this.filter_categories);
            }
            else {
                params = params.append('null', 'null');
            }
            _this.http.get(__WEBPACK_IMPORTED_MODULE_0__providers_globals__["a" /* Globals */].api + 'app/store/lazyList', { params: params }).subscribe(function (stores) {
                for (var id in stores.stores) {
                    if (stores.stores[id].visits.length > parseInt(stores.stores[id].visit_frequency)) {
                        _this.visit_frequency[parseInt(stores.stores[id].id)] = new Array(0);
                    }
                    else {
                        _this.visit_frequency[parseInt(stores.stores[id].id)] = new Array(parseInt(stores.stores[id].visit_frequency) - stores.stores[id].visits.length);
                    }
                }
                for (var somebla in stores.stores) {
                    _this.stores.push(stores.stores[somebla]);
                    // this.stores_super.pus(stores[somebla]);
                }
                // this.stores = stores;
                for (var blabla in stores.store_details) {
                    _this.scores[blabla] = stores.store_details[blabla];
                }
                // this.http.get('https://keysale.se/admin/app/store/scores?api=1&response_type=application/json&auth_token=' + this.user['auth_token']).map(res => res.json()).subscribe(scores => {
                //     this.scores = scores;
                // });
                loading.dismiss();
            }, function (error) {
                if (error.status == 0) {
                    loading.dismiss();
                    _this.presentToast("No internet connection. Please press reload button", "stores");
                }
            });
        });
    };
    CalendarPage.prototype.presentToast = function (text, requestCase) {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: text,
            showCloseButton: true,
            closeButtonText: "Reload",
            position: 'middle',
        });
        toast.onDidDismiss(function () {
            switch (requestCase) {
                case 'stores': {
                    _this.loadStores();
                    break;
                }
            }
        });
        toast.present();
    };
    CalendarPage.prototype.openMenu = function () {
        this.menuCtrl.open();
    };
    CalendarPage.prototype.openCalendarViewModePopover = function (event) {
        var _this = this;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_11__calendar_mode_popover_calendar_mode_popover__["a" /* CalendarModePopoverPage */]);
        popover.present({ ev: event });
        popover.onDidDismiss(function (mode) {
            if (mode !== null)
                _this.calendar.mode = mode;
        });
    };
    CalendarPage.prototype.getWeekNumber = function (d) {
        // Copy date so don't modify original
        d = new Date(+d);
        d.setHours(0, 0, 0, 0);
        // Set to nearest Thursday: current date + 4 - current day number
        // Make Sunday's day number 7
        d.setDate(d.getDate() + 4 - (d.getDay() || 7));
        // Get first day of year
        var yearStart = new Date(d.getFullYear(), 0, 1);
        // Calculate full weeks to nearest Thursday
        var weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
        // Return array of year and week number
        return [d.getFullYear(), weekNo];
    };
    CalendarPage.prototype.createVisitForStore = function (index) {
        var _this = this;
        var start_time_hour = START_TIME_HOUR;
        if (this.visits[index].length) {
            start_time_hour = new Date(this.visits[index][this.visits[index].length - 1].start).getHours() + 1;
        }
        var date = this.daysDates[index];
        date.setHours(start_time_hour);
        var moment_date = __WEBPACK_IMPORTED_MODULE_9_moment__(date);
        var visitModal = this.modal.create(__WEBPACK_IMPORTED_MODULE_8__visit_visit__["a" /* VisitPage */], {
            datetime: moment_date.format(), user: this.user, stores: this.stores, callback: function () {
                _this.downloadVisits();
            }
        });
        visitModal.present();
    };
    CalendarPage.prototype.openStore = function (store) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__store_details_actions_store_details_actions__["a" /* StoreDetailsActionsPage */], { store: store });
    };
    CalendarPage.prototype.storeDetails = function (store) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__store_details_store_details__["a" /* StoreDetailsPage */], { store: store });
    };
    CalendarPage.prototype.editVisit = function (visit) {
        var _this = this;
        var visitModal = this.modal.create(__WEBPACK_IMPORTED_MODULE_8__visit_visit__["a" /* VisitPage */], {
            visit: visit, user: this.user, stores: this.stores, callback: function () {
                _this.downloadVisits();
            }
        });
        visitModal.present();
    };
    CalendarPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.store_page += 1;
        setTimeout(function () {
            // this.stores = this.stores.concat(this.all_stores.slice(this.stores.length, this.stores.length + 20));
            var params = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpParams */]()
                .append('page', _this.store_page)
                .append('expand', 'storeTags.tag,category');
            if (_this.filter_customer) {
                params = params.append('name', _this.filter_customer);
            }
            else {
                params = params.append('null', 'null');
            }
            if (_this.filter_tags) {
                params = params.append('tags', _this.filter_tags);
            }
            if (_this.filter_categories) {
                params = params.append('categories', _this.filter_categories);
            }
            _this.http.get(__WEBPACK_IMPORTED_MODULE_0__providers_globals__["a" /* Globals */].api + 'app/store/lazyList', { params: params }).subscribe(function (stores) {
                for (var somebla in stores.stores) {
                    _this.stores.push(stores.stores[somebla]);
                    // this.stores_super.push(stores[somebla]);
                }
                for (var blabla in stores.store_details) {
                    _this.scores[blabla] = stores.store_details[blabla];
                }
                infiniteScroll.complete();
            });
        }, 100);
    };
    CalendarPage.prototype.fixDays = function (day) {
        day = day - 1;
        if (day < 0)
            day = 7;
        return day;
    };
    CalendarPage.prototype.selectWeek = function () {
        var _this = this;
        var weeks = 52;
        var week_options = [];
        while (week_options.length <= weeks) {
            var index = (week_options.length + 1).toString();
            week_options.push({ name: 'week', type: 'radio', value: index, label: index });
        }
        var alert = this.alert.create({
            title: 'Select Week',
            inputs: week_options,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        alert.dismiss();
                    }
                },
                {
                    text: 'Select',
                    handler: function (data) {
                        _this.week = data;
                        _this.downloadVisits();
                        return true;
                    }
                }
            ]
        });
        alert.present();
    };
    CalendarPage.prototype.nextWeek = function () {
        this.week = this.week + 1;
        this.downloadVisits();
    };
    CalendarPage.prototype.previousWeek = function () {
        this.week = this.week - 1;
        this.downloadVisits();
    };
    CalendarPage.prototype.downloadVisits = function () {
    };
    CalendarPage.prototype.weeksToDate = function (y, w, d) {
        var days = 2 + d + (w - 1) * 7 - (new Date(y, 0, 1)).getDay();
        return new Date(y, 0, days);
    };
    ;
    CalendarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StorePage');
    };
    CalendarPage.prototype.storeFilter = function () {
        var _this = this;
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_15__store_filter_store_filter__["a" /* StoreFilterPage */], this.filter);
        modal.onDidDismiss(function (data) {
            console.log(data);
            if (typeof data.tagFilter != 'undefined' || typeof data.categoryFilter != 'undefined') {
                _this.stores = [];
                _this.scores = [];
                _this.store_page = 1;
                _this.filter_customer = false;
                // let params = new HttpParams();
                if (typeof data.tagFilter != 'undefined' && typeof data.categoryFilter != 'undefined') {
                    _this.filter_categories = data.categoryFilter.join();
                    _this.filter_tags = data.tagFilter.join();
                    var params = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpParams */]()
                        .append('page', _this.store_page)
                        .append('expand', 'storeTags.tag,category')
                        .append('categories', data.categoryFilter.join())
                        .append('tags', data.tagFilter.join());
                    _this.http.get(__WEBPACK_IMPORTED_MODULE_0__providers_globals__["a" /* Globals */].api + 'app/store/lazyList', { params: params })
                        .subscribe(function (stores) {
                        for (var somebla in stores.stores) {
                            _this.stores.push(stores.stores[somebla]);
                        }
                        for (var blabla in stores.store_details) {
                            _this.scores[blabla] = stores.store_details[blabla];
                        }
                    });
                }
                else if (typeof data.tagFilter != 'undefined') {
                    _this.filter_tags = data.tagFilter.join();
                    var params = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpParams */]()
                        .append('page', _this.store_page)
                        .append('expand', 'storeTags.tag,category')
                        .append('tags', data.tagFilter.join());
                    _this.http.get(__WEBPACK_IMPORTED_MODULE_0__providers_globals__["a" /* Globals */].api + 'app/store/lazyList', { params: params })
                        .subscribe(function (stores) {
                        for (var somebla in stores.stores) {
                            _this.stores.push(stores.stores[somebla]);
                        }
                        for (var blabla in stores.store_details) {
                            _this.scores[blabla] = stores.store_details[blabla];
                        }
                    });
                }
                else if (typeof data.categoryFilter != 'undefined') {
                    _this.filter_categories = data.categoryFilter.join();
                    var params = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpParams */]()
                        .append('page', _this.store_page)
                        .append('expand', 'storeTags.tag,category')
                        .append('categories', data.categoryFilter.join());
                    _this.http.get(__WEBPACK_IMPORTED_MODULE_0__providers_globals__["a" /* Globals */].api + 'app/store/lazyList', { params: params })
                        .subscribe(function (stores) {
                        for (var somebla in stores.stores) {
                            _this.stores.push(stores.stores[somebla]);
                        }
                        for (var blabla in stores.store_details) {
                            _this.scores[blabla] = stores.store_details[blabla];
                        }
                    });
                }
                // this.http.get('https://keysale.se/admin/app/store/lazyList', {params})
                //     .subscribe((stores: any) => {
                //     for (let somebla in stores.stores) {
                //         this.stores.push(stores.stores[somebla]);
                //     }
                //     for (let blabla in stores.store_details) {
                //         this.scores[blabla] = stores.store_details[blabla];
                //     }
                // });
                //
                // let params = new HttpParams()
                //     .append('page', this.store_page)
                //     .append('expand', 'storeTags.tag,category');
                // if (this.filter_customer) {
                //     params = params.append('name', this.filter_customer);
                // } else {
                //     params = params.append('null', 'null');
                // }
                // this.http.get('https://keysale.se/admin/app/store/lazyList', {params}).subscribe((stores: any) => {
                //
                //     for (let id in stores.stores) {
                //         if (stores.stores[id].visits.length > parseInt(stores.stores[id].visit_frequency)) {
                //             this.visit_frequency[parseInt(stores.stores[id].id)] = new Array(0);
                //         } else {
                //             this.visit_frequency[parseInt(stores.stores[id].id)] = new Array(parseInt(stores.stores[id].visit_frequency) - stores.stores[id].visits.length);
                //         }
                //
                //     }
                //
                //     for (let somebla in stores.stores) {
                //         this.stores.push(stores.stores[somebla]);
                //         // this.stores_super.pus(stores[somebla]);
                //     }
                //     // this.stores = stores;
                //     for (let blabla in stores.store_details) {
                //         this.scores[blabla] = stores.store_details[blabla];
                //     }
                // this.http.get('https://keysale.se/admin/app/store/scores?api=1&response_type=application/json&auth_token=' + this.user['auth_token']).map(res => res.json()).subscribe(scores => {
                //     this.scores = scores;
                // });
                // });
                // this._contactProvider.getStoreVisits()
                //     .subscribe(storeVisits => {
                //         this.all_stores = this.all_all_stores;
                //         this.stores = this.all_stores.slice(0, 20);
                //
                //         // TAG FILTER
                //         if (data.tagFilter.length > 0) {
                //             this.all_stores = this.all_stores.filter(store => {
                //                 // if no stores found? combination with search
                //                 for (let i in data.tagFilter) {
                //                     for (let b in store.storeTags) {
                //                         if (data.tagFilter[i] == parseInt(store.storeTags[b].tag_id)) {
                //                             return store;
                //                         }
                //                     }
                //                 }
                //             });
                //         }
                //         // VISIT FILTER
                //         if (data.visitFilter.length > 0) {
                //             this.all_stores = this.all_stores.filter(store => {
                //                 for (let i in data.visitFilter) {
                //                     // NOT VISITED
                //                     if (data.visitFilter[i] == '1') {
                //                         let checker = false;
                //                         for (let storeId in storeVisits) {
                //                             if (storeId == store.id) {
                //                                 checker = true;
                //                             }
                //                         }
                //                         if (checker == false) {
                //                             return store;
                //                         }
                //                     }
                //                 }
                //             });
                //         }
                //         this.filter = data;
                //         this.stores = this.all_stores.slice(0, 20);
                //     })
            }
        });
        modal.present();
    };
    CalendarPage.prototype.discardFilter = function () {
        var _this = this;
        this.stores = [];
        this.scores = [];
        this.store_page = 1;
        this.filter_categories = false;
        this.filter_tags = false;
        this.filter_customer = false;
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpParams */]()
            .append('page', this.store_page)
            .append('expand', 'storeTags.tag,category');
        this.http.get(__WEBPACK_IMPORTED_MODULE_0__providers_globals__["a" /* Globals */].api + 'app/store/lazyList', { params: params }).subscribe(function (stores) {
            for (var somebla in stores.stores) {
                _this.stores.push(stores.stores[somebla]);
            }
            for (var blabla in stores.store_details) {
                _this.scores[blabla] = stores.store_details[blabla];
            }
        });
    };
    CalendarPage.prototype.visitFrequency = function (visit_frequency) {
        this.visit_frequency = new Array(parseInt(visit_frequency));
    };
    // super logic O_O
    CalendarPage.prototype.int = function (int) {
        return parseInt(int);
    };
    CalendarPage.prototype.getItems = function (ev) {
        var _this = this;
        this.filter_customer = ev.target.value;
        if (this.filter_customer && this.filter_customer.trim() != '') {
            this.stores = [];
            this.scores = [];
            this.store_page = 1;
            this.filter_categories = false;
            this.filter_tags = false;
            var params = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpParams */]()
                .append('page', this.store_page)
                .append('expand', 'storeTags.tag,category')
                .append('name', this.filter_customer);
            this.http.get(__WEBPACK_IMPORTED_MODULE_0__providers_globals__["a" /* Globals */].api + 'app/store/lazyList', { params: params }).subscribe(function (stores) {
                for (var somebla in stores.stores) {
                    _this.stores.push(stores.stores[somebla]);
                }
                for (var blabla in stores.store_details) {
                    _this.scores[blabla] = stores.store_details[blabla];
                }
            });
        }
        else {
            this.stores = [];
            this.scores = [];
            this.store_page = 1;
            this.filter_categories = false;
            this.filter_tags = false;
            var params = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpParams */]()
                .append('page', this.store_page)
                .append('expand', 'storeTags.tag,category')
                .append('null', 'null');
            this.http.get(__WEBPACK_IMPORTED_MODULE_0__providers_globals__["a" /* Globals */].api + 'app/store/lazyList', { params: params }).subscribe(function (stores) {
                for (var somebla in stores.stores) {
                    _this.stores.push(stores.stores[somebla]);
                }
                for (var blabla in stores.store_details) {
                    _this.scores[blabla] = stores.store_details[blabla];
                }
            });
        }
        // this.articles = this.articles_super;
        //
        // let val = ev.target.value;
        //
        // if (val && val.trim() != '') {
        //     this.articles = this.articles.filter((article) => {
        //         return (article.product.toLowerCase().indexOf(val.toLowerCase()) > -1 || article.price.toLowerCase().indexOf(val.toLowerCase()) > -1
        //             || article.suppArtNr.toLowerCase().indexOf(val.toLowerCase()) > -1);
        //     })
        // }
    };
    CalendarPage.prototype.typeOf = function (val) {
        return typeof val;
    };
    CalendarPage.prototype.scrollToTop = function () {
        // Scrolls to the top, ie 0px to top.
        this.content.scrollToTop();
    };
    CalendarPage.prototype.activateScroll = function (value) {
        if (value == true) {
            this.scroll = true;
        }
        else {
            this.scroll = false;
        }
    };
    return CalendarPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["d" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["d" /* Content */])
], CalendarPage.prototype, "content", void 0);
CalendarPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
        selector: 'page-calendar',template:/*ion-inline-start:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/calendar/calendar.html"*/'<ion-header>\n    <ion-navbar hideBackButton color="primary">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n\n        <ion-buttons end>\n            <button ion-button (click)="openCalendarViewModePopover($event)">\n                <ion-icon name="settings" style="font-size: 2em"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <div [ngSwitch]="active_page" style="height: 100%">\n        <div *ngSwitchCase="\'visits\'" style="height: 100%">\n            <ion-grid no-padding style="margin: 10px 0">\n                <ion-row>\n                    <ion-col col-3>\n                        <div style="padding: 16px 0; text-align: center">W.{{calendar.currentDateCopy | amDateFormat : \'W - ddd\'}}</div>\n                    </ion-col>\n                    <ion-col col-6>\n                        <ion-segment color="primary" [(ngModel)]="active_page">\n                            <ion-segment-button value="visits" (click)="activateScroll(false)" *ngIf="accesses[ACCESS_CALENDAR]">\n                                Visits\n                            </ion-segment-button>\n                            <ion-segment-button value="stores" (click)="activateScroll(true)" *ngIf="accesses[ACCESS_STORE_LIST]">\n                                Stores\n                            </ion-segment-button>\n                        </ion-segment>\n                    </ion-col>\n                    <ion-col col-3>\n                        <ion-item no-lines hidden="true">\n                            <mbsc-calendar #currentDatePicker [(ngModel)]="calendar.currentDate" [options]="{ display: \'center\', weekCounter: \'year\', firstDay: 1 }">\n                            </mbsc-calendar>\n                        </ion-item>\n                        <div style="padding: 10px 0; text-align: center">\n                            <ion-icon name="calendar" style="font-size: 2em" color="primary" (tap)="calendar.setToday()" (press)="currentDatePicker.instance.show()"></ion-icon>\n                        </div>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n            <ng-template #eventTemplate let-displayEvent="displayEvent">\n                <div class="calendar-event-inner" [ngStyle]="{backgroundColor: displayEvent.event.backgroundColor}">{{displayEvent.event.title}}</div>\n            </ng-template>\n            <calendar *ngSwitchCase="\'visits\'" [eventSource]="calendar.eventSource" [calendarMode]="calendar.mode" [(currentDate)]="calendar.currentDate"\n                [weekviewNormalEventTemplate]="eventTemplate" [dayviewNormalEventTemplate]="eventTemplate" (onCurrentDateChanged)="calendar.onCurrentDateChanged($event)"\n                (onRangeChanged)="calendar.onRangeChanged($event)" (onEventSelected)="calendar.onEventSelected($event)" (onTimeSelected)="calendar.onTimeSelected($event)"\n                queryMode="remote" startingDayWeek="1" formatHourColumn="HH" startHour="6" step="30" class="calendar">\n            </calendar>\n        </div>\n        <div *ngSwitchCase="\'stores\'">\n            <ion-grid no-padding style="margin: 10px 0">\n                <ion-row>\n                    <ion-col col-3>\n\n                    </ion-col>\n                    <ion-col col-6>\n                        <ion-segment color="primary" [(ngModel)]="active_page">\n                            <ion-segment-button value="visits" *ngIf="accesses[ACCESS_CALENDAR]">\n                                Visits\n                            </ion-segment-button>\n                            <ion-segment-button value="stores" *ngIf="accesses[ACCESS_STORE_LIST]">\n                                Stores\n                            </ion-segment-button>\n                        </ion-segment>\n                    </ion-col>\n                    <ion-col col-3>\n\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n            <ion-list>\n\n\n                <div style="width: 80%; display: block">\n                    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n                    <!--<ion-searchbar [(ngModel)]="storesSearchTerm" item-right></ion-searchbar>-->\n                </div>\n                <div style="position: absolute; display: block;margin-left: 81%;margin-top: -42px;" (click)="storeFilter()">\n                    <ion-icon style="font-size: 30px" color="newcolor" name="funnel"></ion-icon>\n                </div>\n                <div style="position: absolute; display: block;margin-left: 91%;margin-top: -42px;" (click)="discardFilter()">\n                    <ion-icon style="font-size: 30px" color="danger" name="close"></ion-icon>\n                </div>\n\n                <button style="" ion-item *ngFor="let store of stores" (click)="storeDetails(store)">\n                    <!--| storeFilter:storesSearchTerm:all_stores-->\n                    <span style="margin: 2px 0; display:block; font-size: 17px; text-transform: uppercase; color: #424242">\n                        <strong>{{store.customer}}</strong>\n                    </span>\n                    <span style="margin: 2px 0; display:block; font-size: 12px; color: grey; text-transform: uppercase">{{store.address}}</span>\n                    <span style="margin: 2px 0; display:block; font-size: 12px; color: grey; text-transform: uppercase">{{store.city}}</span>\n\n                    <span style="margin: 2px 0; display:block; font-size: 12px; color: grey; text-transform: uppercase">{{store.phone}}</span>\n                    <span style="margin: 2px 0; display:block; ">\n\n                        <ion-icon name="radio-button-off" *ngFor="let v of visit_frequency[int(store.id)]" style="color: #15639e"></ion-icon>\n                        <span *ngFor="let b of store.visits">\n                            <ion-icon name="checkmark-circle" *ngIf="b.status == \'0\'" style="color: #15639e"></ion-icon>\n                        </span>\n                        <span *ngFor="let b of store.visits">\n                            <ion-icon name="checkmark-circle" *ngIf="b.status == \'1\'" style="color: #169e51"></ion-icon>\n                        </span>\n                        <span style="margin: 2px 0; display:block; font-size: 8px; color: grey; text-transform: uppercase">\n                            <span *ngFor="let storeTag of store.storeTags">({{storeTag.tag.name}}), </span>\n                        </span>\n\n                    </span>\n                    <!--<progress-bar-2 [progress]="34"></progress-bar-2><br /><br /><br />-->\n                    <span style="" class="progress" item-right>\n                        <progress-bar-2 *ngIf="scores[int(store.id)] != false && scores[int(store.id)].totalScore>0" [type]="\'Scoring\'" [progress]="scores[int(store.id)].totalScore"></progress-bar-2>\n\n                        <progress-bar-2 *ngIf="scores[int(store.id)].distributions.index != false" [type]="\'Distribution\'" [progress]="scores[int(store.id)].distributions.index*100"></progress-bar-2>\n                    </span>\n\n\n\n                    <!--<b style="color: green" *ngIf="scores" item-right>{{(scores[store.id]*100).toFixed(0)}}%</b>-->\n\n                    <!--<ion-icon name="ios-arrow-forward" item-end></ion-icon>-->\n\n                </button>\n            </ion-list>\n            <ion-infinite-scroll *ngIf="active_page==\'stores\'" (ionInfinite)="doInfinite($event)">\n                <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more stores...">\n                </ion-infinite-scroll-content>\n            </ion-infinite-scroll>\n\n\n\n\n\n        </div>\n    </div>\n    <ion-fab right bottom *ngIf="scroll == true">\n        <button ion-fab mini (click)="scrollToTop()">\n            <ion-icon name="arrow-round-up"></ion-icon>\n        </button>\n    </ion-fab>\n</ion-content>'/*ion-inline-end:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/calendar/calendar.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["p" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["q" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["m" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["k" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["s" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_13__providers_common_service__["a" /* CommonService */],
        __WEBPACK_IMPORTED_MODULE_14__providers_visit_service__["a" /* VisitService */],
        __WEBPACK_IMPORTED_MODULE_16__providers_contact_contact__["a" /* ContactProvider */],
        __WEBPACK_IMPORTED_MODULE_1__providers_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["v" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["n" /* ModalController */]])
], CalendarPage);

//# sourceMappingURL=calendar.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MyFilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DistributionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_transfer__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_path__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__distribution_photo_add_distribution_photo_add__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__distribution_answer_detail_distribution_answer_detail__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__distribution_filter_2_distribution_filter_2__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_globals__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var MyFilterPipe = (function () {
    function MyFilterPipe() {
    }
    MyFilterPipe.prototype.transform = function (items, filter) {
        if (!items || !filter) {
            return items;
        }
        return items.filter(function (item) { return item.storeCategoryId.indexOf(filter['storeCategoryId']) !== -1; });
    };
    return MyFilterPipe;
}());
MyFilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
        name: 'myfilter',
        pure: false
    })
], MyFilterPipe);

var DistributionPage = (function () {
    function DistributionPage(actionSheetCtrl, loadingCtrl, camera, transfer, file, filePath, navCtrl, toastCtrl, platform, navParams, alertCtrl, viewCtrl, storage, loader, modalCtrl, filterPipe, http) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.camera = camera;
        this.transfer = transfer;
        this.file = file;
        this.filePath = filePath;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.loader = loader;
        this.modalCtrl = modalCtrl;
        this.filterPipe = filterPipe;
        this.http = http;
        this.active_page = 'distribution';
        this.articleGroupMode = 'grouped';
        this.groups = [];
        this.articles = [];
        this.answer = {};
        this.records = {};
        this.records_more = {
            records: [],
            noArticle: []
        };
        this.payload = [];
        this.filterlistings = { storeCategoryId: 0 };
        this.countDistr = [];
        this.groups_super = [];
        this.total_articles = 0;
        this.total_distributions = 0;
        this.total_distributions_number = 0;
        this.notes = {};
        this.s3_url = 'https://s3-eu-west-1.amazonaws.com/s3.keyreport.se/images/input/full/';
        this.no_article = false;
        this.showOnlyMissing = false;
        this.store = navParams.get('store');
        this.filterlistings.storeCategoryId = this.store.categoryId;
        this.distribution = navParams.get('distribution');
        this.distribution_answer = 0;
        this.getDistribution();
        this.getGroups();
        this.getListings();
    }
    DistributionPage.prototype.getGroups = function () {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
        this.http.get(__WEBPACK_IMPORTED_MODULE_11__providers_globals__["a" /* Globals */].api + 'app/article/groups', { params: params }).subscribe(function (groups) {
            _this.groups_store = groups;
        });
    };
    DistributionPage.prototype.getListings = function () {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]()
            .append('storeId', this.store.id);
        this.http.get(__WEBPACK_IMPORTED_MODULE_11__providers_globals__["a" /* Globals */].api + 'app/article/listingsForStore', { params: params }).subscribe(function (listings) {
            _this.listings_store = listings;
            _this.listings_store = _this.listings_store.map(function (item) { return item.listing; })
                .filter(function (value, index, self) { return self.indexOf(value) === index; });
        });
    };
    DistributionPage.prototype.photoSelected = function (session) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__distribution_answer_detail_distribution_answer_detail__["a" /* DistributionAnswerDetailPage */], {
            distribution_answer: session
        });
        modal.present();
    };
    DistributionPage.prototype.getDistribution = function () {
        var _this = this;
        this.records = {};
        this.records_more = {
            records: [],
            noArticle: []
        };
        this.groups = [];
        this.groups_super = [];
        this.countDistr = [];
        var distributions_loader = this.loader.create({
            content: 'Loading...'
        });
        distributions_loader.present().then(function () {
            var params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]()
                .append('storeCategoryId', _this.filterlistings.storeCategoryId.toString())
                .append('storeId', _this.store.id)
                .append('id', _this.distribution.id);
            _this.http.get(__WEBPACK_IMPORTED_MODULE_11__providers_globals__["a" /* Globals */].api + 'app/distribution/viewForMobileApp', { params: params }).subscribe(function (distribution) {
                _this.articleGroupMode = distribution.show_article_group == "0" ? "ungrouped" : "grouped";
                var params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]()
                    .append('storeId', _this.store.id)
                    .append('id', _this.distribution.id);
                _this.http.get(__WEBPACK_IMPORTED_MODULE_11__providers_globals__["a" /* Globals */].api + 'app/distribution/lastRecords', { params: params }).subscribe(function (records) {
                    var records = records;
                    _this.distribution = distribution;
                    var groups = { "0": { "name": "No groups", "articles": [], "id": "13" } };
                    for (var _i = 0, records_1 = records; _i < records_1.length; _i++) {
                        var record = records_1[_i];
                        if (!_this.records[record.article_id]) {
                            _this.records[record.article_id] = parseInt(record.quantity);
                            _this.notes[record.article_id] = record.note;
                            _this.records_more.records[record.article_id] = record.quantity;
                            _this.records_more.noArticle[record.article_id] = false;
                        }
                    }
                    var disArticles = _this.distribution.distributionArticles.sort(function (a, b) { return a.sort_order - b.sort_order; });
                    var disStoreCategory = _this.distribution.distributionStoreCategories.find(function (a) { return a.store_category_id == _this.store.categoryId; });
                    if (disStoreCategory && disStoreCategory.sort_orders) {
                        var sortOrders_1 = disStoreCategory.sort_orders.split(',');
                        disArticles = disArticles.sort(function (a, b) { return sortOrders_1.indexOf(a.article_id) - sortOrders_1.indexOf(b.article_id); });
                    }
                    for (var _a = 0, disArticles_1 = disArticles; _a < disArticles_1.length; _a++) {
                        var distributionArticle = disArticles_1[_a];
                        console.log(distributionArticle.article);
                        var group_id = distributionArticle.article.group ? distributionArticle.article.group.id : 0;
                        var group_name = distributionArticle.article.group ? distributionArticle.article.group.name : '';
                        if (!groups[group_id]) {
                            groups[group_id] = {};
                            groups[group_id] = distributionArticle.article.group;
                            groups[group_id]['articles'] = [];
                            groups[group_id]['articles'].push(distributionArticle);
                        }
                        else {
                            groups[group_id]['articles'].push(distributionArticle);
                        }
                    }
                    _this.articles = disArticles;
                    var some_articles = [];
                    for (var bla2 in _this.articles) {
                        var some = void 0;
                        some = _this.articles[bla2].article.listings.filter(function (listing) {
                            return (listing.storeCategoryId == _this.filterlistings.storeCategoryId);
                        });
                        var checker = false;
                        for (var ind in some) {
                            if (some[ind].store_id != '0' && some[ind].store_id != null && some[ind].store_id == _this.store.id) {
                                checker = true;
                                break;
                            }
                        }
                        //
                        var somesome = [];
                        if (checker == true) {
                            for (var ind in some) {
                                if (some[ind].store_id != '0' && some[ind].store_id != null && some[ind].store_id == _this.store.id) {
                                    somesome.push(some[ind]);
                                }
                            }
                            some = somesome;
                        }
                        else {
                            for (var ind in some) {
                                somesome.push(some[ind]);
                            }
                            some = somesome;
                        }
                        // if (some.length > 0) {
                        some_articles.push(_this.articles[bla2]);
                        some_articles[some_articles.length - 1]['article']['listings'] = some;
                        // }
                    }
                    _this.articles = some_articles;
                    for (var groups_key in groups) {
                        _this.groups.push(groups[groups_key]);
                        _this.groups_super.push(groups[groups_key]);
                    }
                    for (var group_index in _this.groups) {
                        for (var article_index in _this.groups[group_index].articles) {
                            var listing_checker = {
                                checker: false,
                                listings: []
                            };
                            for (var listing_index in _this.groups[group_index].articles[article_index].article.listings) {
                                if (_this.groups[group_index].articles[article_index].article.listings[listing_index].storeCategoryId == _this.filterlistings.storeCategoryId) {
                                    listing_checker.listings.push(_this.groups[group_index].articles[article_index].article.listings[listing_index]);
                                }
                            }
                            if (listing_checker.listings.length > 0) {
                                listing_checker.checker = true;
                            }
                            _this.groups[group_index].articles[article_index].article.listings = listing_checker;
                        }
                    }
                    for (var group_index in _this.groups) {
                        _this.countDistr[_this.groups[group_index].id] = {
                            records: [],
                            sum: 0
                        };
                        for (var article_index in _this.groups[group_index].articles) {
                            if (parseInt(_this.records[_this.groups[group_index].articles[article_index].article_id]) > 0) {
                                _this.countDistr[_this.groups[group_index].id].records.push(_this.records[_this.groups[group_index].articles[article_index].article_id]);
                            }
                        }
                        for (var counter_index in _this.countDistr[_this.groups[group_index].id].records) {
                            _this.countDistr[_this.groups[group_index].id].sum += parseInt(_this.countDistr[_this.groups[group_index].id].records[counter_index]);
                        }
                    }
                    var filteredArticles = _this.articles.filter(_this.listingFilter);
                    _this.total_articles += filteredArticles.length;
                    _this.total_distributions = filteredArticles.filter(function (disArticle) { return _this.records[disArticle.article_id]; }).length;
                    console.log(_this.records);
                    distributions_loader.dismiss();
                });
            }, function (error) {
                if (error.status == 0) {
                    distributions_loader.dismiss();
                    _this.presentToast("No internet connection. Please press reload button", "enter");
                }
            });
        });
    };
    DistributionPage.prototype.getDistributionPhotos = function () {
        var _this = this;
        var sessions_loader = this.loader.create({
            content: 'Loading ' + this.distribution.title + ' Photos'
        });
        sessions_loader.present().then(function () {
            var params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]()
                .append('store_id', _this.store.id)
                .append('id', _this.distribution.id);
            _this.http.get(__WEBPACK_IMPORTED_MODULE_11__providers_globals__["a" /* Globals */].api + 'app/distribution/sessions', { params: params }).subscribe(function (sessions) {
                _this.sessions = sessions;
                sessions_loader.dismiss();
            });
        });
    };
    DistributionPage.prototype.presentToast = function (text, requestCase) {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: text,
            showCloseButton: true,
            closeButtonText: "Reload",
            position: 'middle',
        });
        toast.onDidDismiss(function () {
            switch (requestCase) {
                case 'stores': {
                    // this.loadStores();
                    break;
                }
                case 'enter': {
                    _this.getDistribution();
                    _this.getGroups();
                    _this.getListings();
                }
            }
        });
        toast.present();
    };
    DistributionPage.prototype.selectImage = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select image',
            buttons: [
                {
                    text: 'Gallery',
                    role: 'destructive',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__distribution_photo_add_distribution_photo_add__["a" /* DistributionPhotoAddPage */], {
                            store: _this.store,
                            distribution: _this.distribution,
                            type: 'gallery'
                        });
                    }
                },
                {
                    text: 'Take a Photo',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__distribution_photo_add_distribution_photo_add__["a" /* DistributionPhotoAddPage */], {
                            store: _this.store,
                            distribution: _this.distribution,
                            type: 'camera'
                        });
                    }
                }
            ]
        });
        actionSheet.present();
    };
    DistributionPage.prototype.getItems = function (ev) {
        // this.groups = this.groups_super;
        var val = ev.target.value;
        // if (val && val.trim() != '') {
        //     let some_articles = [];
        //     for (let fff in this.groups) {
        //         this.groups[fff].articles = this.groups[fff].articles.filter((article) => {
        //             return (article.article.product.toLowerCase().indexOf(val.toLowerCase()) > -1);
        //         })
        //     }
        // }
    };
    DistributionPage.prototype.saveDistribution = function () {
        var _this = this;
        var answers = [];
        var note;
        this.distribution.distributionArticles.filter(this.listingFilter).forEach(function (distributionArticle) {
            var quantity = 0;
            if (_this.answer[distributionArticle.article.id]) {
                quantity = 1;
            }
            if (_this.distribution.photo_distribution == '0') {
                quantity = _this.records[distributionArticle.article.id];
                note = _this.notes[distributionArticle.article.id];
            }
            answers.push({
                'article_id': distributionArticle.article.id,
                'store_id': _this.store.id,
                'quantity': quantity,
                'note': note
            });
        });
        var post = {};
        post['distributions'] = answers;
        post['photos'] = this.payload;
        var params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]()
            .append('id', this.distribution.id);
        this.http.post(__WEBPACK_IMPORTED_MODULE_11__providers_globals__["a" /* Globals */].api + 'app/distribution/register', post, { params: params }).subscribe(function (distribution) {
            _this.navCtrl.pop();
        });
    };
    DistributionPage.prototype.addDistribution = function (article_id) {
        if (this.distribution.photo_distribution == '0') {
            // TODO REMOVE THIS=====================
            if (this.records[article_id] == null || typeof this.records[article_id] == 'undefined') {
                this.records[article_id] = 0;
                this.records_more.records[article_id] = 0;
            }
            // TODO REMOVE THIS=====================
            this.records[article_id] = parseInt(this.records[article_id]) + 1;
            this.records_more.records[article_id] = parseInt(this.records_more.records[article_id]) + 1;
            this.records_more.noArticle[article_id] = false;
        }
    };
    DistributionPage.prototype.clearDistribution = function (article_id) {
        if (this.distribution.photo_distribution == '0') {
            this.records[article_id] = 0;
            this.records_more.records[article_id] = 0;
        }
    };
    DistributionPage.prototype.distributionFilter = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__distribution_filter_2_distribution_filter_2__["a" /* DistributionFilter_2Page */], {
            groups: this.groups_store,
            listings: this.listings_store
        });
        modal.onDidDismiss(function (data) {
            if (data.articleFilter == 1) {
                for (var art_id in _this.records_more.records) {
                    if (_this.records_more.records[art_id] > 0) {
                        _this.records_more.noArticle[art_id] = true;
                    }
                }
            }
            if (data.articleFilter == 0) {
                for (var art_id in _this.records_more.records) {
                    _this.records_more.noArticle[art_id] = false;
                }
            }
            if (data.listingFilter == 'all') {
                for (var group_index in _this.groups) {
                    for (var article_index in _this.groups[group_index].articles) {
                        var listing_checker = {
                            checker: false,
                            listings: []
                        };
                        for (var listing_filter in _this.groups[group_index].articles[article_index].article.listings.listings) {
                            if (_this.groups[group_index].articles[article_index].article.listings.listings[listing_filter].storeCategoryId == _this.filterlistings.storeCategoryId) {
                                listing_checker.listings.push(_this.groups[group_index].articles[article_index].article.listings.listings[listing_filter]);
                            }
                        }
                        if (listing_checker.listings.length > 0) {
                            listing_checker.checker = true;
                        }
                        _this.groups[group_index].articles[article_index].article.listings = listing_checker;
                    }
                }
                for (var bla5 in _this.articles) {
                    var blabla = {
                        checker: true,
                        listings: []
                    };
                    for (var blasdf in _this.articles[bla5].article.listings.listings) {
                        if (_this.articles[bla5].article.listings.listings[blasdf].storeCategoryId == _this.filterlistings.storeCategoryId) {
                            blabla.listings.push(_this.articles[bla5].article.listings.listings[blasdf]);
                        }
                    }
                    _this.articles[bla5].article.listings = blabla;
                }
                console.log(_this.articles);
            }
            if (data.listingFilter == 0) {
                for (var bla5 in _this.groups) {
                    for (var bla123 in _this.groups[bla5].articles) {
                        var blabla = {
                            checker: true,
                            listings: []
                        };
                        for (var blasdf in _this.groups[bla5].articles[bla123].article.listings.listings) {
                            if (_this.groups[bla5].articles[bla123].article.listings.listings[blasdf].storeCategoryId == _this.filterlistings.storeCategoryId) {
                                blabla.listings.push(_this.groups[bla5].articles[bla123].article.listings.listings[blasdf]);
                            }
                        }
                        _this.groups[bla5].articles[bla123].article.listings = blabla;
                    }
                }
            }
        });
        modal.present();
    };
    DistributionPage.prototype.toggleMissing = function () {
        this.showOnlyMissing = !this.showOnlyMissing;
    };
    DistributionPage.prototype.missingArticles = function () {
        // if (this.art_filter == 1) {
        //     this.art_filter = 0;
        //     for(let art_id in this.records_more.records) {
        //         if (this.records_more.records[art_id] > 0) {
        //             this.records_more.noArticle[art_id] = true;
        //         }
        //     }
        // } else {
        //     this.art_filter = 1;
        //     for(let art_id in this.records_more.records) {
        //         this.records_more.noArticle[art_id] = false;
        //     }
        // }
    };
    DistributionPage.prototype.articleFilter = function (disArticle) {
        return this.missingFilter(disArticle) && this.listingFilter(disArticle);
    };
    DistributionPage.prototype.missingFilter = function (disArticle) {
        if (this.showOnlyMissing) {
            return this.records[disArticle.article_id] == 0 || this.records[disArticle.article_id] == null;
        }
        return true;
    };
    DistributionPage.prototype.listingFilter = function (disArticle) {
        return disArticle.article.listings.checker;
    };
    DistributionPage.prototype.back = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Go back',
            message: 'Do you want to go back without saving distribution?',
            buttons: [
                {
                    text: 'Yes',
                    handler: function () {
                        _this.viewCtrl.dismiss();
                    }
                },
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        alert.present();
    };
    DistributionPage.prototype.addNote = function (article_id) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Add note',
            inputs: [
                {
                    name: 'note',
                    placeholder: 'add note...'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.notes[article_id] = data.note;
                        console.log(_this.notes);
                    }
                }
            ]
        });
        alert.present();
    };
    DistributionPage.prototype.discardFilter = function () {
        this.getDistribution();
    };
    return DistributionPage;
}());
DistributionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-distribution',template:/*ion-inline-start:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/distribution/distribution.html"*/'<style>\n    .table-article {\n        width: 90%;\n        margin-left: 7%;\n    }\n\n    .table-article td {\n        padding: 6px;\n    }\n</style>\n<ion-header>\n\n    <ion-navbar style="background-color: #0866c6" hideBackButton="true">\n        <ion-buttons left>\n            <button ion-button icon-only (click)="back()">\n                <ion-icon name="arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n        <!--<ion-title>{{distribution.title}}</ion-title>-->\n        <ion-buttons right>\n            <button ion-button="" (click)="saveDistribution()">Save</button>\n        </ion-buttons>\n    </ion-navbar>\n\n\n</ion-header>\n<ion-content>\n\n    <ion-grid no-padding style="margin: 10px 0">\n        <ion-row>\n            <ion-col col-3>\n\n            </ion-col>\n            <ion-col col-6>\n                <ion-segment style="background-color: white" [(ngModel)]="active_page">\n                    <ion-segment-button value="distribution">\n                        Article\n                    </ion-segment-button>\n                    <ion-segment-button *ngIf="distribution.photo_distribution == \'1\'" value="history" (click)="getDistributionPhotos()">\n                        Image\n                    </ion-segment-button>\n                </ion-segment>\n            </ion-col>\n            <ion-col col-3>\n\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n\n\n    <div [ngSwitch]="active_page">\n        <div *ngSwitchCase="\'distribution\'">\n            <div style="width: 80%; display: block">\n                <ion-searchbar (ionInput)="getItems($event)" item-right></ion-searchbar>\n            </div>\n            <div style="position: absolute; display: block;margin-left: 81%;margin-top: -42px;" (click)="distributionFilter()">\n                <ion-icon style="font-size: 30px" color="newcolor" name="funnel"></ion-icon>\n            </div>\n            <div style="position: absolute; display: block;margin-left: 91%;margin-top: -42px;" (click)="discardFilter()">\n                <ion-icon style="font-size: 30px" color="danger" name="close"></ion-icon>\n            </div>\n            <!--<div style="width: 55%; margin-left: 5px">-->\n            <!--<canvas #doughnutCanvas style="width: 50px; height: 8px"></canvas>-->\n            <!--</div>-->\n            <div>\n\n                <div style="width: 10%; display: inline">\n                <div class="progress-outer">\n                    <div class="progress-inner" [style.width]="total_distributions*100/total_articles + \'%\'">\n                        {{total_distributions*100/total_articles | number : \'1.2-2\'}}%\n                    </div>\n                </div>\n                <div class="kpis">{{total_distributions}}/{{total_articles}}</div>\n                <!-- <div class="kpis2">Trend  +{{total_distributions_number}}</div> -->\n                <div class="kpis3" (click)="toggleMissing()">{{showOnlyMissing ? "All" : "Missing"}}</div>\n                </div>\n            </div>\n            <br />\n            <br />\n            <br />\n\n            <!--<ion-list>-->\n            <div [ngSwitch]="articleGroupMode">\n                <div *ngSwitchCase="\'grouped\'">\n                    <span *ngFor="let group of groups">\n                        <div class="group-item" *ngIf="group.articles.length > 0">\n                            {{group.name}}\n                            <span style="float: right">{{countDistr[group.id].records.length}}/{{group.articles.length}} ({{countDistr[group.id].records.length*100/group.articles.length\n                                | number : \'1.2-2\'}}%)</span>\n                        </div>\n                        <ion-list>\n                            <span *ngFor="let article of group.articles">\n                                <ion-item-sliding #item *ngIf="article.article.listings.checker == true">\n\n                                    <button ion-item *ngIf="records_more.records[article.article_id]>0 && records_more.noArticle[article.article_id] == false"\n                                            (click)="addDistribution(article.article_id)" class="yes-article-item">\n\n                                        <b style="font-size: 16px; text-transform: uppercase; color:#fff">{{article.article.product}} </b>\n                                        <b *ngIf="records[article.article_id] == 0" style="color: #fff; font-size: 12px;float: right;margin: 16px 50px 0 0;">(0% share)</b>\n\n                                        <b *ngIf="records[article.article_id] > 0" style="color: #fff; font-size: 12px;float: right;margin: 12px 50px 0 0;">({{records[article.article_id] * 100 / countDistr[group.id].sum | number: \'1.2-2\'}}%\n                                            share)\n                                        </b>\n                                        <div class="{{records[article.article_id]>0?\'yes-counter-block\':\'no-counter-block\'}}">\n                                            <div style="margin-top: 6px;"></div>\n                                            <span style="margin: 5px 0 0 0">{{records[article.article_id]}}</span>\n                                        </div>\n                                        <div *ngIf="records[article.article_id]==null" class="no-counter-block">\n                                            <div style="margin-top: 6px;"></div>\n                                            <span style="margin: 5px 0 0 0">{{records[article.article_id]}}</span>\n                                        </div>\n                                        <br />\n                                        <span style="font-size: 12px; color: #fff">Article #: {{article.article.suppArtNr}}, Wholesaler #:\n                                            <span *ngFor="let l of article.article.listings.listings">({{l.listing}})</span>\n                                        </span>\n                                        <br />\n                                        <span style="font-size: 12px; color: #fff">Note: {{notes[article.article.id]}}</span>\n\n                                    </button>\n\n                                    <button ion-item *ngIf="records[article.article_id]==0" (click)="addDistribution(article.article_id)" class="no-article-item">\n\n                                        <b style="font-size: 16px; text-transform: uppercase">{{article.article.product}} </b>\n                                        <b *ngIf="records[article.article_id] == 0" style="font-size: 12px;float: right;margin: 12px 50px 0 0;">(0% share)</b>\n\n                                        <b *ngIf="records[article.article_id] > 0" style="font-size: 12px;float: right;margin: 12px 50px 0 0;">({{records[article.article_id] * 100 / countDistr[group.id].sum | number: \'1.2-2\'}}%\n                                            share)\n                                        </b>\n                                        <div class="{{records[article.article_id]>0?\'yes-counter-block\':\'no-counter-block\'}}">\n                                            <div style="margin-top: 6px;"></div>\n                                            <span style="margin: 5px 0 0 0">{{records[article.article_id]}}</span>\n                                        </div>\n                                        <div *ngIf="records[article.article_id]==null" class="no-counter-block">\n                                            <div style="margin-top: 6px;"></div>\n                                            <span style="margin: 5px 0 0 0">{{records[article.article_id]}}</span>\n                                        </div>\n                                        <br />\n                                        <span style="font-size: 12px; color: grey">Article #: {{article.article.suppArtNr}}, Wholesaler #:\n                                            <span *ngFor="let l of article.article.listings.listings">({{l.listing}})</span>\n                                        </span>\n                                        <br />\n                                        <span style="font-size: 12px; color: grey">Note: {{notes[article.article.id]}}</span>\n                                    </button>\n\n                                    <button ion-item *ngIf="records[article.article_id]==null" (click)="addDistribution(article.article_id)" class="no-article-item">\n\n                                        <b style="font-size: 16px; text-transform: uppercase">{{article.article.product}} </b>\n                                        <b *ngIf="records[article.article_id] == 0" style="font-size: 12px;float: right;margin: 12px 50px 0 0;">(0% share)</b>\n\n                                        <b *ngIf="records[article.article_id] > 0" style="font-size: 12px;float: right;margin: 12px 50px 0 0;">({{records[article.article_id] * 100 / countDistr[group.id].sum | number: \'1.2-2\'}}%\n                                            share)\n                                        </b>\n                                        <div class="{{records[article.article_id]>0?\'yes-counter-block\':\'no-counter-block\'}}">\n                                            <div style="margin-top: 6px;"></div>\n                                            <span style="margin: 5px 0 0 0">{{records[article.article_id]}}</span>\n                                        </div>\n                                        <div *ngIf="records[article.article_id]==null" class="no-counter-block">\n                                            <div style="margin-top: 6px;"></div>\n                                            <span style="margin: 5px 0 0 0">{{records[article.article_id]}}</span>\n                                        </div>\n                                        <br />\n                                        <span style="font-size: 12px; color: grey">Article #: {{article.article.suppArtNr}}, Wholesaler #:\n                                            <span *ngFor="let l of article.article.listings.listings">({{l.listing}})</span>\n                                        </span>\n                                        <br />\n                                        <span style="font-size: 12px; color: grey">Note: {{notes[article.article.id]}}</span>\n                                    </button>\n\n                                    <ion-item-options side="right">\n                                        <button ion-button (click)="clearDistribution(article.article_id)" color="danger">Clear</button>\n                                        <button ion-button (click)="addNote(article.article_id)" color="primary">Note</button>\n                                    </ion-item-options>\n                                </ion-item-sliding>\n                            </span>\n\n                        </ion-list>\n                    </span>\n                </div>\n                <div *ngSwitchCase="\'ungrouped\'">\n\n\n                    <ion-list>\n                            <span *ngFor="let article of articles">\n                                <ion-item-sliding #item *ngIf="articleFilter(article)">\n                                    <!-- *ngIf="records_more.records[article.article_id]>0 && records_more.noArticle[article.article_id] == false" -->\n                                    <button ion-item (click)="addDistribution(article.article_id)" [ngClass]="{\'yes-article-item\': records[article.article_id], \'no-article-item\': !records[article.article_id]}">\n\n                                        <b style="font-size: 16px; text-transform: uppercase; color:#fff">{{article.article.product}} </b>\n                                        <!--<b *ngIf="records[article.article_id] == 0" style="color: #fff; font-size: 12px;float: right;margin: 16px 50px 0 0;">(0% share)</b>-->\n\n                                        <!--<b *ngIf="records[article.article_id] > 0" style="color: #fff; font-size: 12px;float: right;margin: 12px 50px 0 0;">({{records[article.article_id] * 100 / countDistr[group.id].sum | number: \'1.2-2\'}}%-->\n                                            <!--share)-->\n                                        <!--</b>-->\n                                        <div class="{{records[article.article_id]>0?\'yes-counter-block\':\'no-counter-block\'}}">\n                                            <div style="margin-top: 6px;"></div>\n                                            <span style="margin: 5px 0 0 0">{{records[article.article_id]}}</span>\n                                        </div>\n                                        <div *ngIf="records[article.article_id]==null" class="no-counter-block">\n                                            <div style="margin-top: 6px;"></div>\n                                            <span style="margin: 5px 0 0 0">{{records[article.article_id]}}</span>\n                                        </div>\n                                        <br />\n                                        <span style="font-size: 12px; color: #fff">Article #: {{article.article.suppArtNr}}, Wholesaler #:\n                                            <span *ngFor="let l of article.article.listings.listings">({{l.listing}})</span>\n                                        </span>\n                                        <br />\n                                        <span style="font-size: 12px; color: #fff">Note: {{notes[article.article.id]}}</span>\n\n                                    </button>\n\n                                    <ion-item-options side="right">\n                                        <button ion-button (click)="clearDistribution(article.article_id)" color="danger">Clear</button>\n                                        <button ion-button (click)="addNote(article.article_id)" color="primary">Note</button>\n                                    </ion-item-options>\n                                </ion-item-sliding>\n                            </span>\n\n                    </ion-list>\n\n\n\n\n\n                    <!--<ion-list>-->\n                        <!--<span *ngFor="let article of articles">-->\n                            <!--<ion-item-sliding #item>-->\n\n                                <!--<button ion-item (click)="addDistribution(article.article_id)"-->\n                                        <!--[ngClass]="{\'yes-article-item\' : (records_more.records[article.article_id]>0 && records_more.noArticle[article.article_id] == false),-->\n                                      <!--\'no-article-item\': (records[article.article_id]==0 || records[article.article_id]==null)}">-->\n\n                                    <!--<b style="font-size: 16px; text-transform: uppercase;">{{article.article.product}}</b>-->\n                                    <!--&lt;!&ndash; <b *ngIf="records[article.article_id] == 0" style="color: #fff; font-size: 12px;float: right;margin: 16px 50px 0 0;">(0% share)</b>-->\n\n                                    <!--<b *ngIf="records[article.article_id] > 0" style="color: #fff; font-size: 12px;float: right;margin: 12px 50px 0 0;">({{records[article.article_id] * 100 / countDistr[group.id].sum | number: \'1.2-2\'}}%-->\n                                        <!--share)-->\n                                    <!--</b> &ndash;&gt;-->\n                                    <!--<div class="{{records[article.article_id]>0?\'yes-counter-block\':\'no-counter-block\'}}">-->\n                                        <!--<div style="margin-top: 6px;"></div>-->\n                                        <!--<span style="margin: 5px 0 0 0">{{records[article.article_id]}}</span>-->\n                                    <!--</div>-->\n                                    <!--<div *ngIf="records[article.article_id]==null" class="no-counter-block">-->\n                                        <!--<div style="margin-top: 6px;"></div>-->\n                                        <!--<span style="margin: 5px 0 0 0">{{records[article.article_id]}}</span>-->\n                                    <!--</div>-->\n                                    <!--<br />-->\n                                    <!--<span style="font-size: 12px;">Article #: {{article.article.suppArtNr}},-->\n                                        <!--<span *ngFor="let l of article.article.listings.listings">({{l.listing}})</span>-->\n                                    <!--</span>-->\n                                    <!--<br />-->\n                                    <!--<span style="font-size: 12px;">Note: {{notes[article.article.id]}}</span>-->\n\n                                <!--</button>-->\n                                <!--<ion-item-options side="right">-->\n                                    <!--<button ion-button (click)="clearDistribution(article.article_id)" color="danger">Clear</button>-->\n                                    <!--<button ion-button (click)="addNote(article.article_id)" color="primary">Note</button>-->\n                                <!--</ion-item-options>-->\n                            <!--</ion-item-sliding>-->\n                        <!--</span>-->\n\n                    <!--</ion-list>-->\n                </div>\n            </div>\n\n\n            <ion-row>\n                <ion-list>\n                    <ion-item *ngFor="let image of payload">\n                        <img src="{{s3_url+image}}" height="100">\n                    </ion-item>\n                </ion-list>\n            </ion-row>\n            <!--</ion-list>-->\n        </div>\n\n\n        <ion-list *ngSwitchCase="\'history\'">\n            <ion-item *ngFor="let session of sessions" (click)="photoSelected(session)">\n                <br/>\n                <ion-avatar item-start>\n                    <img src="{{session.photo_processed}}" />\n                </ion-avatar>\n                <br/>\n                <h2>\n                    <strong>Status:\n                        <span *ngIf="session.processed == \'1\'">Done</span>\n                        <span *ngIf="session.processed == \'0\'">Converting</span>\n                    </strong>\n                </h2>\n                {{session.date}}\n                <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n                <br/>\n                <br/>\n            </ion-item>\n        </ion-list>\n    </div>\n\n\n\n    <ion-fab *ngIf="distribution.photo_distribution == \'1\'" right bottom>\n        <button ion-fab mini (click)="selectImage()">\n            <ion-icon name="add"></ion-icon>\n        </button>\n    </ion-fab>\n</ion-content>'/*ion-inline-end:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/distribution/distribution.html"*/,
        providers: [MyFilterPipe]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_transfer__["a" /* Transfer */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_path__["a" /* FilePath */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["v" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["r" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["q" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["w" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* ModalController */],
        MyFilterPipe,
        __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
], DistributionPage);

//# sourceMappingURL=distribution.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitStoresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_filter_store_filter__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_contact_contact__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_globals__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the VisitStoresPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var VisitStoresPage = (function () {
    function VisitStoresPage(navCtrl, modal, _contactProvider, loader, storage, commonService, http, navParams) {
        this.navCtrl = navCtrl;
        this.modal = modal;
        this._contactProvider = _contactProvider;
        this.loader = loader;
        this.storage = storage;
        this.commonService = commonService;
        this.http = http;
        this.navParams = navParams;
        this.stores = [];
        this.storesSearchTerm = '';
        this.visit_frequency = [];
        this.filter_customer = false;
        this.visitTypes = [];
        this.filter = false;
        this.store_page = 1;
        this.callback = navParams.data.callback;
        // this.stores = navParams.get('stores');
        // this.all_stores = navParams.get('stores');
        // this.all_all_stores = navParams.get('stores');
        //
        //
        //
        //
        //
        // for (let id in this.all_all_stores) {
        //     if (this.all_all_stores[id].visits.length > parseInt(this.all_all_stores[id].visit_frequency)) {
        //         this.visit_frequency[parseInt(this.all_all_stores[id].id)] = new Array(0);
        //     } else {
        //         this.visit_frequency[parseInt(this.all_all_stores[id].id)] = new Array(parseInt(this.all_all_stores[id].visit_frequency) - this.all_all_stores[id].visits.length);
        //     }
        // }
    }
    VisitStoresPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var loading = this.loader.create({
            content: 'Loading stores'
        });
        loading.present().then(function () {
            _this.commonService.fetchVisitTypes().subscribe(function (visitTypes) { return _this.visitTypes = visitTypes; });
            var params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]()
                .append('page', _this.store_page)
                .append('expand', 'storeTags.tag,category');
            if (_this.filter_customer) {
                params = params.append('name', _this.filter_customer);
            }
            else {
                params = params.append('null', 'null');
            }
            _this.http.get(__WEBPACK_IMPORTED_MODULE_7__providers_globals__["a" /* Globals */].api + 'app/store/lazyList', { params: params }).subscribe(function (stores) {
                for (var id in stores.stores) {
                    if (stores.stores[id].visits.length > parseInt(stores.stores[id].visit_frequency)) {
                        _this.visit_frequency[parseInt(stores.stores[id].id)] = new Array(0);
                    }
                    else {
                        _this.visit_frequency[parseInt(stores.stores[id].id)] = new Array(parseInt(stores.stores[id].visit_frequency) - stores.stores[id].visits.length);
                    }
                }
                console.log("======");
                console.log(stores);
                console.log("======");
                for (var somebla in stores.stores) {
                    _this.stores.push(stores.stores[somebla]);
                }
                loading.dismiss();
            });
        });
    };
    VisitStoresPage.prototype.selectStore = function (store) {
        this.navCtrl.pop({}, this.callback(store));
    };
    VisitStoresPage.prototype.storeFilter = function () {
        var _this = this;
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_3__store_filter_store_filter__["a" /* StoreFilterPage */], this.filter);
        modal.onDidDismiss(function (data) {
            if (typeof data != 'undefined') {
                _this._contactProvider.getStoreVisits()
                    .subscribe(function (storeVisits) {
                    _this.all_stores = _this.all_all_stores;
                    _this.stores = _this.all_stores;
                    // TAG FILTER
                    if (data.tagFilter.length > 0) {
                        _this.all_stores = _this.all_stores.filter(function (store) {
                            // if no stores found? combination with search
                            for (var i in data.tagFilter) {
                                for (var b in store.storeTags) {
                                    if (data.tagFilter[i] == parseInt(store.storeTags[b].tag_id)) {
                                        return store;
                                    }
                                }
                            }
                        });
                    }
                    // VISIT FILTER
                    if (data.visitFilter.length > 0) {
                        _this.all_stores = _this.all_stores.filter(function (store) {
                            for (var i in data.visitFilter) {
                                // NOT VISITED
                                if (data.visitFilter[i] == '1') {
                                    var checker = false;
                                    for (var storeId in storeVisits) {
                                        if (storeId == store.id) {
                                            checker = true;
                                        }
                                    }
                                    if (checker == false) {
                                        return store;
                                    }
                                }
                            }
                        });
                    }
                    _this.filter = data;
                    _this.stores = _this.all_stores;
                });
            }
        });
        modal.present();
    };
    VisitStoresPage.prototype.discardFilter = function () {
        this.all_stores = this.all_all_stores;
        this.stores = this.all_stores;
        this.filter = false;
    };
    VisitStoresPage.prototype.int = function (int) {
        return parseInt(int);
    };
    VisitStoresPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.store_page += 1;
        setTimeout(function () {
            // this.stores = this.stores.concat(this.all_stores.slice(this.stores.length, this.stores.length + 20));
            var params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]()
                .append('page', _this.store_page)
                .append('expand', 'storeTags.tag,category');
            if (_this.filter_customer) {
                params = params.append('name', _this.filter_customer);
            }
            else {
                params = params.append('null', 'null');
            }
            _this.http.get(__WEBPACK_IMPORTED_MODULE_7__providers_globals__["a" /* Globals */].api + 'app/store/lazyList', { params: params }).subscribe(function (stores) {
                for (var somebla in stores.stores) {
                    _this.stores.push(stores.stores[somebla]);
                    // this.stores_super.push(stores[somebla]);
                }
                infiniteScroll.complete();
            });
        }, 100);
    };
    VisitStoresPage.prototype.getItems = function (ev) {
        var _this = this;
        console.log(ev);
        this.filter_customer = ev.target.value;
        if (this.filter_customer && this.filter_customer.trim() != '') {
            this.stores = [];
            this.store_page = 1;
            var params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]()
                .append('page', this.store_page)
                .append('expand', 'storeTags.tag,category')
                .append('name', this.filter_customer);
            this.http.get(__WEBPACK_IMPORTED_MODULE_7__providers_globals__["a" /* Globals */].api + 'app/store/lazyList', { params: params }).subscribe(function (stores) {
                for (var somebla in stores.stores) {
                    _this.stores.push(stores.stores[somebla]);
                }
            });
        }
        else {
            this.stores = [];
            this.store_page = 1;
            var params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]()
                .append('page', this.store_page)
                .append('expand', 'storeTags.tag,category')
                .append('null', 'null');
            this.http.get(__WEBPACK_IMPORTED_MODULE_7__providers_globals__["a" /* Globals */].api + 'app/store/lazyList', { params: params }).subscribe(function (stores) {
                for (var somebla in stores.stores) {
                    _this.stores.push(stores.stores[somebla]);
                }
            });
        }
    };
    return VisitStoresPage;
}());
VisitStoresPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-visit-stores',template:/*ion-inline-start:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/visit-stores/visit-stores.html"*/'\n<ion-header>\n    <ion-navbar>\n\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <!--<ion-list>-->\n\n        <!--<div style="width: 80%; display: block">-->\n            <!--<ion-searchbar [(ngModel)]="storesSearchTerm" item-right></ion-searchbar>-->\n        <!--</div>-->\n        <!--<div style="position: absolute; display: block;margin-left: 81%;margin-top: -42px;" (click)="storeFilter()">-->\n            <!--<ion-icon style="font-size: 30px" color="newcolor" name="funnel"></ion-icon>-->\n        <!--</div>-->\n        <!--<div style="position: absolute; display: block;margin-left: 91%;margin-top: -42px;" (click)="discardFilter()">-->\n            <!--<ion-icon style="font-size: 30px" color="danger" name="close"></ion-icon>-->\n        <!--</div>-->\n\n        <!--<button ion-item *ngFor="let store of stores | storeFilter:storesSearchTerm:all_stores" (click)="selectStore(store)">-->\n            <!--<ion-icon name="flag" class="custom-icon-color"></ion-icon>-->\n            <!--<b style="color: #488aff">{{ store.customer}}</b>-->\n            <!--<br/>-->\n            <!--<ion-icon name="locate" class="custom-icon-color"></ion-icon>-->\n            <!--{{ store.address}},{{ store.city}}-->\n            <!--<br>-->\n            <!--<ion-icon name="call" class="custom-icon-color"></ion-icon>-->\n            <!--{{ store.phone}}-->\n            <!--<br/>-->\n            <!--<button *ngFor="let storeTag of store.storeTags" ion-button outline>{{storeTag.tag.name}}</button>-->\n\n            <!--<span item-end>-->\n                        <!--<ion-icon name="radio-button-off" *ngFor="let v of visit_frequency[int(store.id)]" style="color: #15639e"></ion-icon>-->\n                        <!--<span *ngFor="let b of store.visits">-->\n                        <!--<ion-icon name="checkmark-circle" *ngIf="b.status == \'0\'" style="color: #15639e"></ion-icon>-->\n                    <!--</span>-->\n                    <!--<span *ngFor="let b of store.visits">-->\n                        <!--<ion-icon name="checkmark-circle" *ngIf="b.status == \'1\'" style="color: #169e51"></ion-icon>-->\n                    <!--</span>-->\n\n                        <!--</span>-->\n\n            <!--<b style="color: green" *ngIf="scores" item-right>{{(scores[store.id]*100).toFixed(0)}}%</b>-->\n            <!--<ion-icon name="ios-arrow-forward" item-end></ion-icon>-->\n        <!--</button>-->\n    <!--</ion-list>-->\n\n\n    <ion-list>\n\n\n        <div style="width: 80%; display: block">\n            <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n        </div>\n        <div style="position: absolute; display: block;margin-left: 81%;margin-top: -42px;" (click)="storeFilter()">\n            <ion-icon style="font-size: 30px" color="newcolor" name="funnel"></ion-icon>\n        </div>\n        <div style="position: absolute; display: block;margin-left: 91%;margin-top: -42px;" (click)="discardFilter()">\n            <ion-icon style="font-size: 30px" color="danger" name="close"></ion-icon>\n        </div>\n\n        <button style="" ion-item *ngFor="let store of stores" (click)="selectStore(store)">\n            <span style="margin: 2px 0; display:block; font-size: 17px; text-transform: uppercase; color: #424242"><strong>{{store.customer}}</strong></span>\n            <span style="margin: 2px 0; display:block; font-size: 12px; color: grey; text-transform: uppercase">{{store.address}}</span>\n            <span style="margin: 2px 0; display:block; font-size: 12px; color: grey; text-transform: uppercase">{{store.city}}</span>\n\n            <span style="margin: 2px 0; display:block; font-size: 12px; color: grey; text-transform: uppercase">{{store.phone}}</span>\n            <span style="margin: 2px 0; display:block; ">\n\n                        <ion-icon name="radio-button-off" *ngFor="let v of visit_frequency[int(store.id)]" style="color: #15639e"></ion-icon>\n                        <span *ngFor="let b of store.visits">\n                        <ion-icon name="checkmark-circle" *ngIf="b.status == \'0\'" style="color: #15639e"></ion-icon>\n                    </span>\n                    <span *ngFor="let b of store.visits">\n                        <ion-icon name="checkmark-circle" *ngIf="b.status == \'1\'" style="color: #169e51"></ion-icon>\n                    </span>\n                        <span style="margin: 2px 0; display:block; font-size: 8px; color: grey; text-transform: uppercase"><span *ngFor="let storeTag of store.storeTags">({{storeTag.tag.name}}), </span></span>\n                        </span>\n        </button>\n    </ion-list>\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more stores...">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/visit-stores/visit-stores.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_contact_contact__["a" /* ContactProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_6__providers_common_service__["a" /* CommonService */],
        __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* NavParams */]])
], VisitStoresPage);

//# sourceMappingURL=visit-stores.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreFilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_contact_contact__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StoreFilterPage = (function () {
    function StoreFilterPage(navCtrl, viewCtrl, _contactProvider, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this._contactProvider = _contactProvider;
        this.navParams = navParams;
        this.tagFilter = [];
        this.categoryFilter = [];
        this.visitFilter = [];
        console.log(this.navParams.data);
        if (this.navParams.data != false) {
            this.tagFilter = this.navParams.data.tagFilter;
            this.categoryFilter = this.navParams.data.categoryFilter;
            // this.visitFilter = this.navParams.data.visitFilter;
        }
    }
    StoreFilterPage.prototype.back = function () {
        this.viewCtrl.dismiss();
    };
    StoreFilterPage.prototype.apply = function () {
        this.viewCtrl.dismiss({
            tagFilter: this.tagFilter,
            // visitFilter: this.visitFilter,
            categoryFilter: this.categoryFilter
        });
    };
    StoreFilterPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this._contactProvider.getTags()
            .subscribe(function (tags) {
            _this.tags = tags;
        });
        this._contactProvider.getCategories()
            .subscribe(function (categories) {
            _this.categories = categories;
        });
    };
    return StoreFilterPage;
}());
StoreFilterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-store-filter',template:/*ion-inline-start:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/store-filter/store-filter.html"*/'<ion-header>\n<ion-navbar>\n    <ion-buttons left>\n        <button ion-button icon-only (click)="back()">\n            <ion-icon name="arrow-back"></ion-icon>\n        </button>\n    </ion-buttons>\n    <ion-title>Store Filter</ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="apply()">\n            Apply\n        </button>\n    </ion-buttons>\n</ion-navbar>\n</ion-header>\n\n\n<ion-content>\n    <div style="background-color: #f4f4f4; padding-left: 17px; padding-top: 2.5%; padding-bottom: 2.5%; font-weight: bold; border-bottom: 1px solid #A9A9A9">\n        Tags\n    </div>\n    <ion-item>\n        <ion-select [(ngModel)]="tagFilter" multiple="true">\n            <ion-option *ngFor="let tag of tags" value="{{tag.id}}">{{tag.name}}</ion-option>\n        </ion-select>\n    </ion-item>\n\n    <div style="background-color: #f4f4f4; padding-left: 17px; padding-top: 2.5%; padding-bottom: 2.5%; font-weight: bold; border-bottom: 1px solid #A9A9A9">\n        Categories\n    </div>\n    <ion-item>\n        <ion-select [(ngModel)]="categoryFilter" multiple="true">\n            <ion-option *ngFor="let category of categories" value="{{category.id}}">{{category.name}}</ion-option>\n        </ion-select>\n    </ion-item>\n\n    <!--<div style="background-color: #f4f4f4; padding-left: 17px; padding-top: 2.5%; padding-bottom: 2.5%; font-weight: bold; border-bottom: 1px solid #A9A9A9">-->\n        <!--Visits-->\n    <!--</div>-->\n    <!--<ion-item>-->\n        <!--<ion-select [(ngModel)]="visitFilter" multiple="true">-->\n            <!--<ion-option value="1">Not Visited</ion-option>-->\n        <!--</ion-select>-->\n    <!--</ion-item>-->\n</ion-content>\n'/*ion-inline-end:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/store-filter/store-filter.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_contact_contact__["a" /* ContactProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */]])
], StoreFilterPage);

//# sourceMappingURL=store-filter.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__globals__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Api = (function () {
    function Api(http, storage) {
        this.http = http;
        this.storage = storage;
        this.url = __WEBPACK_IMPORTED_MODULE_4__globals__["a" /* Globals */].api + 'app/';
    }
    Api.prototype.get = function (endpoint, params) {
        // this.params = {
        //     api: 1,
        //     response_type: 'application/json',
        //     auth_token: localStorage.getItem('auth_token')
        // };
        var parm = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
        for (var key in params) {
            parm = parm.append(key, params[key]);
        }
        for (var par_ke in this.params) {
            parm = parm.append(par_ke, this.params[par_ke]);
        }
        return this.http.get(this.url + endpoint, { params: parm });
    };
    Api.prototype.post = function (endpoint, body) {
        return this.http.post(this.url + endpoint, body);
    };
    return Api;
}());
Api = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], Api);

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 176:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 176;

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DistributionThirdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plan_visit_plan_visit__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_dashboard_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the DistributionThirdPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DistributionThirdPage = (function () {
    function DistributionThirdPage(navCtrl, navParams, commonService, dashboardService, loader) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.commonService = commonService;
        this.dashboardService = dashboardService;
        this.loader = loader;
        this.activeSegment = 'missing';
        var loading = this.loader.create({
            content: 'Loading report'
        });
        console.log(navParams.data.article);
        loading.present().then(function () {
            dashboardService.fetchDistributionReport(navParams.data.id).subscribe(function (distribution) {
                _this.distribution = distribution;
                _this.categories = _this.prepareData(navParams.data.article.id, navParams.data.sellerId);
                loading.dismissAll();
            });
        });
    }
    DistributionThirdPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DistributionThirdPage');
    };
    DistributionThirdPage.prototype.prepareData = function (articleId, sellerId) {
        var categories = __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.cloneDeep(this.distribution.storeCategories);
        var currentSeller = this.distribution.sellers.find(function (seller) { return seller.id == sellerId; });
        categories.forEach(function (category) {
            var stores = currentSeller.stores.filter(function (store) { return store.categoryId == category.id; });
            stores.forEach(function (store) {
                var article = store.articles.find(function (article) { return article.id == articleId; });
                store.distributionValue = article ? article.quantity : null;
            });
            category.stores = stores;
        });
        return categories;
    };
    DistributionThirdPage.prototype.missing = function (store) {
        return !store.distributionValue;
    };
    DistributionThirdPage.prototype.planVisit = function (store) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__plan_visit_plan_visit__["a" /* PlanVisitPage */], { store: store });
    };
    return DistributionThirdPage;
}());
DistributionThirdPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'page-distribution-third',template:/*ion-inline-start:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/distribution-third/distribution-third.html"*/'\n<ion-header>\n\n    <ion-navbar color="primary">\n        <ion-title>Back</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n    <div *ngIf="distribution">\n        <ion-grid no-padding style="margin: 10px 0">\n            <ion-row>\n                <ion-col col-3></ion-col>\n                <ion-col col-6>\n                    <ion-segment color="primary" [(ngModel)]="activeSegment">\n                        <ion-segment-button value="missing">\n                            Missing\n                        </ion-segment-button>\n                        <ion-segment-button value="all">\n                            All\n                        </ion-segment-button>\n                    </ion-segment>\n                </ion-col>\n                <ion-col col-3></ion-col>\n            </ion-row>\n        </ion-grid>\n        <div [ngSwitch]="activeSegment" style="height: 100%">\n            <div *ngSwitchCase="\'missing\'">\n                <div class="category-section" *ngFor="let category of categories"\n                     [hidden]="category.stores.length == 0">\n                    <div class="category-title">{{category.name}}</div>\n                    <ion-list no-margin>\n                        <button ion-item (click)="planVisit(store)" class="store-section"\n                                *ngFor="let store of category.stores | filterFn: missing">\n                            {{store.customer}}\n                            <ion-badge *ngIf="store.distributionValue" item-end>{{store.distributionValue}}</ion-badge>\n                            <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n                        </button>\n                    </ion-list>\n                </div>\n            </div>\n            <div *ngSwitchCase="\'all\'">\n                <div class="category-section" *ngFor="let category of categories"\n                     [hidden]="category.stores.length == 0">\n                    <div class="category-title">{{category.name}}</div>\n                    <ion-list no-margin>\n                        <button ion-item class="store-section" (click)="planVisit(store)"\n                                *ngFor="let store of category.stores">\n                            {{store.customer}}\n                            <ion-badge *ngIf="store.distributionValue" item-end>{{store.distributionValue}}</ion-badge>\n                            <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n                        </button>\n                    </ion-list>\n                </div>\n            </div>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/distribution-third/distribution-third.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["q" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_common_service__["a" /* CommonService */],
        __WEBPACK_IMPORTED_MODULE_1__providers_dashboard_service__["a" /* DashboardService */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* LoadingController */]])
], DistributionThirdPage);

//# sourceMappingURL=distribution-third.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanVisitPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_visit_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the PlanVisitPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PlanVisitPage = (function () {
    function PlanVisitPage(navCtrl, navParams, visitService, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.visitService = visitService;
        this.storage = storage;
        this.visit = {
            start: new Date(),
            note: null,
        };
        this.store = null;
        this.dateTimePickerOptions = {
            timeFormat: 'H:ii',
            dateFormat: 'd MM yy',
            dateWheels: '|D M d|'
        };
        this.store = navParams.data.store;
    }
    PlanVisitPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlanVisitPage');
    };
    PlanVisitPage.prototype.planVisit = function () {
        var _this = this;
        var payload = {
            store_id: this.store.id,
            title: this.store.customer,
            booked: 0,
            start: __WEBPACK_IMPORTED_MODULE_3_moment__(this.visit.start).format('YYYY-MM-DD HH:mm:ss'),
            duration: 60,
            note: this.visit.note
        };
        this.visitService.create(payload).subscribe(function () {
            _this.navCtrl.pop();
        });
    };
    return PlanVisitPage;
}());
PlanVisitPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-plan-visit',template:/*ion-inline-start:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/plan-visit/plan-visit.html"*/'<!--\n  Generated template for the PlanVisitPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Plan visit</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form (submit)="planVisit()">\n    <ion-list>\n      <ion-row>\n        <ion-item col-3>\n          <ion-label>Start</ion-label>\n        </ion-item>\n        <ion-item col-6 no-padding text-center>\n          <mbsc-calendar text-right [(ngModel)]="visit.start" [options]="{ display: \'center\', weekCounter: \'year\', firstDay: 1}" name="startDate"></mbsc-calendar>\n        </ion-item>\n        <ion-item col-3 no-padding text-center>\n          <ion-input text-right [(ngModel)]="visit.start" mbsc-time [mbsc-options]="dateTimePickerOptions" name="startTime"></ion-input>\n        </ion-item>\n      </ion-row>\n      <ion-item>\n        <ion-label>Note</ion-label>\n        <ion-textarea [(ngModel)]="visit.note" name="note"></ion-textarea>\n      </ion-item>\n    </ion-list>\n    <div padding>\n      <button type="button" (click)="planVisit()" ion-button block color="success">Plan visit</button>\n    </div>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/plan-visit/plan-visit.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0__providers_visit_service__["a" /* VisitService */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], PlanVisitPage);

//# sourceMappingURL=plan-visit.js.map

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Globals; });
var Globals = {
    api: 'https://keysale.se/admin/',
    imageBaseUrl: 'https://s3.keysale.se/files/'
};
//# sourceMappingURL=globals.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitType; });
var VisitType = (function () {
    function VisitType(id, name, color) {
        this.id = id;
        this.name = name;
        this.color = color;
    }
    VisitType.fromJSONObject = function (o) {
        return new VisitType(o.id, o.name, o.color);
    };
    VisitType.fromJSONArray = function (array) {
        var _this = this;
        return array.map(function (o) { return _this.fromJSONObject(o); });
    };
    return VisitType;
}());

//# sourceMappingURL=visit-type.js.map

/***/ }),

/***/ 367:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 367;

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DistributionSecondPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_globals__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_common_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dashboard_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__distribution_third_distribution_third__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_service__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the DistributionSecondPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DistributionSecondPage = (function () {
    function DistributionSecondPage(navCtrl, navParams, dashboardService, commonService, authService, loader) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dashboardService = dashboardService;
        this.commonService = commonService;
        this.authService = authService;
        this.loader = loader;
        this.activeSegment = "team";
        this.globals = __WEBPACK_IMPORTED_MODULE_0__providers_globals__["a" /* Globals */];
        var loading = this.loader.create({
            content: 'Loading distribution'
        });
        this.seller = authService.getSeller();
        loading.present().then(function () {
            _this.commonService.fetchRegions().subscribe(function (regions) {
                _this.regions = regions;
                _this.dashboardService.fetchDistribution(navParams.data.id).subscribe(function (distribution) {
                    _this.distribution = distribution;
                    _this.distribution.articles.forEach(function (article) {
                        _this.prepareArticleChartData(article);
                    });
                    console.log(distribution);
                    loading.dismissAll();
                });
            });
        });
    }
    DistributionSecondPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DistributionSecondPage');
    };
    DistributionSecondPage.prototype.prepareArticleChartData = function (article) {
        var _this = this;
        article.possible = 0;
        article.milestone = 0;
        article.outcome = 0;
        article.sold = 0;
        article.checked = 0;
        article.sold_total = 0;
        article.checked_total = 0;
        article.new = 0;
        article.index = 0;
        article.currentSeller = article.sellers.find(function (seller) {
            return seller.id == _this.seller.id;
        });
        article.regions = __WEBPACK_IMPORTED_MODULE_5_lodash__["cloneDeep"](this.regions);
        article.regions.forEach(function (item) {
            item.possible = 0;
            item.milestone = 0;
            item.outcome = 0;
            item.new = 0;
            item.left = 0;
            item.sold = 0;
            item.checked = 0;
            item.sold_total = 0;
            item.positive = 0;
            item.outcome_total = 0;
            item.checked_total = 0;
            item.index = 0;
            item.sellers = [];
            article.sellers.forEach(function (seller) {
                if (item.id == seller.regionId) {
                    _this.prepareSellerChartData(seller);
                    seller.new = seller.outcome - seller.start_outcome;
                    seller.index = 0;
                    seller.current_index = seller.sold / seller.checked;
                    if (seller.milestone > 0)
                        seller.index = seller.outcome / seller.milestone;
                    item.possible += seller.possible;
                    item.left += seller.possible - seller.positive_outcome;
                    item.milestone += seller.milestone;
                    item.outcome += seller.outcome;
                    item.outcome_total += seller.outcome_total;
                    item.positive += seller.positive_outcome;
                    item.index = item.outcome / item.milestone;
                    item.sold += seller.sold;
                    item.checked += seller.checked;
                    item.sold_total += seller.sold_total;
                    item.checked_total += seller.checked_total;
                    item.new += seller.new;
                    item.sellers.push(seller);
                }
            });
            if (item.milestone > 0)
                item.index = item.outcome / item.milestone;
            article.possible += item.possible;
            article.milestone += item.milestone;
            article.outcome += item.outcome;
            article.new += item.new;
            article.sold += item.sold;
            article.checked += item.checked;
            article.sold_total += item.sold_total;
            article.checked_total += item.checked_total;
        });
        if (article.milestone > 0)
            article.index = article.outcome / article.milestone;
    };
    DistributionSecondPage.prototype.prepareSellerChartData = function (seller) {
        seller.chart = {
            new: [0, 100],
            current: [0, 100],
            total: [0, 100]
        };
        if (seller.milestone != 0 && seller.outcome != 0) {
            if (seller.milestone < seller.outcome) {
                seller.chart.new = [100, 0];
            }
            else {
                seller.chart.new[0] = seller.outcome;
                seller.chart.new[1] = seller.milestone - seller.outcome;
            }
        }
        if (seller.checked != 0 && seller.sold != 0) {
            if (seller.checked < seller.sold) {
                seller.chart.current = [100, 0];
            }
            else {
                seller.chart.current[0] = seller.sold;
                seller.chart.current[1] = seller.checked - seller.sold;
            }
        }
        if (seller.possible != 0 && seller.outcome_total != 0) {
            if (seller.possible < seller.outcome_total) {
                seller.chart.total = [100, 0];
            }
            else {
                seller.chart.total[0] = seller.outcome_total;
                seller.chart.total[1] = seller.possible - seller.outcome_total;
            }
        }
        return seller.chart;
    };
    DistributionSecondPage.prototype.onSellerClicked = function (seller, article) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__distribution_third_distribution_third__["a" /* DistributionThirdPage */], { id: this.distribution.id, article: article, sellerId: seller.id });
    };
    return DistributionSecondPage;
}());
DistributionSecondPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'page-distribution-second',template:/*ion-inline-start:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/distribution-second/distribution-second.html"*/'<!--\n  Generated template for the DistributionSecondPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="primary">\n        <ion-title>{{distribution ? distribution.title : \'Loading distribution...\'}}</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div *ngIf="distribution">\n        <ion-grid no-padding style="margin: 10px 0">\n            <ion-row>\n                <ion-col col-3></ion-col>\n                <ion-col col-6>\n                    <ion-segment color="primary" [(ngModel)]="activeSegment">\n                        <ion-segment-button value="team">\n                            Team\n                        </ion-segment-button>\n                        <ion-segment-button value="me">\n                            Me\n                        </ion-segment-button>\n                    </ion-segment>\n                </ion-col>\n                <ion-col col-3></ion-col>\n            </ion-row>\n        </ion-grid>\n\n        <div [ngSwitch]="activeSegment" style="height: 100%">\n            <div *ngSwitchCase="\'team\'">\n                <div class="article-section" *ngFor="let article of distribution.articles">\n                    <div class="article-title">6666 888 - {{article.name}}</div>\n                    <div class="region-section" *ngFor="let region of article.regions">\n                        <ion-grid>\n                            <ion-row>\n                                <ion-col col-3>\n                                    <div style="color: #000000">{{region.name}}</div>\n                                    <div>{{region.manager ? region.manager.name : ""}}</div>\n                                </ion-col>\n                                <ion-col col-3 text-center>\n                                    <div class="primary-number">{{(region.outcome / region.milestone) | numerally :\n                                        \'0%\'}}\n                                    </div>\n                                    <div>New</div>\n                                </ion-col>\n                                <ion-col col-3 text-center>\n                                    <div class="primary-number">{{(region.sold / region.checked) | numerally : \'0%\'}}\n                                    </div>\n                                    <div>Current</div>\n                                </ion-col>\n                                <ion-col col-3 text-center>\n                                    <div class="primary-number">{{(region.positive / region.possible) | numerally :\n                                        \'0%\'}}\n                                    </div>\n                                    <div>Total</div>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n                        <ion-list no-margin>\n                            <ion-item class="seller-section" *ngFor="let seller of region.sellers"\n                                      (click)="onSellerClicked(seller, article)">\n                                <ion-grid no-padding>\n                                    <ion-row>\n                                        <ion-col col-3 text-center>\n                                            <div>\n                                                <img *ngIf="seller.imgName != \'\' && seller.imgName != null"\n                                                     style="width: 60px; height: 60px;" class="seller-image"\n                                                     src="{{globals.imageBaseUrl + seller.imgName}}"\n                                                     alt="{{seller.name}}">\n                                                <img *ngIf="seller.imgName == \'\' || seller.imgName == null"\n                                                     style="width: 60px; height: 60px;" class="seller-image"\n                                                     src="{{globals.api}}files/avatar-1577909_640.png"\n                                                     alt="{{seller.name}}">\n                                            </div>\n                                            <div style="font-size: 10px">{{seller.name}}</div>\n                                            <div class="primary-number" style="font-size: 12px">Not visit\n                                                {{(seller.possible - seller.checked) | numerally : \'0.[0]a\'}}\n                                            </div>\n                                        </ion-col>\n                                        <ion-col col-9>\n                                            <ion-grid no-padding>\n                                                <ion-row style="padding: 2px 0">\n                                                    <ion-col col-7 text-right>\n                                                        <div style="font-size: 14px; padding: 4px 3px;">\n                                                            Goal {{seller.milestone}}/{{seller.outcome}}\n                                                        </div>\n                                                    </ion-col>\n                                                    <ion-col col-5>\n                                                        <normal-progress-bar\n                                                                [progress]="(seller.outcome / seller.milestone * 100) | numerally : \'0\'"></normal-progress-bar>\n                                                    </ion-col>\n                                                </ion-row>\n                                                <ion-row style="padding: 2px 0">\n                                                    <ion-col col-7 text-right>\n                                                        <div style="font-size: 14px; padding: 4px 3px;">\n                                                            Current {{seller.checked}}/{{seller.sold}}\n                                                        </div>\n                                                    </ion-col>\n                                                    <ion-col col-5>\n                                                        <normal-progress-bar\n                                                                [progress]="(seller.sold / seller.checked * 100) | numerally : \'0\'"></normal-progress-bar>\n                                                    </ion-col>\n                                                </ion-row>\n                                                <ion-row style="padding: 2px 0">\n                                                    <ion-col col-7 text-right>\n                                                        <div style="font-size: 14px; padding: 4px 3px;">\n                                                            Total {{seller.possible}}/{{seller.positive_outcome}}\n                                                        </div>\n                                                    </ion-col>\n                                                    <ion-col col-5>\n                                                        <normal-progress-bar\n                                                                [progress]="(seller.positive_outcome / seller.possible * 100) | numerally : \'0\'"></normal-progress-bar>\n                                                    </ion-col>\n                                                </ion-row>\n                                            </ion-grid>\n                                        </ion-col>\n                                    </ion-row>\n                                </ion-grid>\n                            </ion-item>\n                        </ion-list>\n\n                    </div>\n                </div>\n            </div>\n            <div *ngSwitchCase="\'me\'">\n                <div class="article-section" *ngFor="let article of distribution.articles">\n                    <div class="article-title">6666 888 - {{article.name}}</div>\n                    <ion-list no-margin>\n                        <ion-item class="seller-section" (click)="onSellerClicked(article.currentSeller, article)">\n                            <ion-grid no-padding>\n                                <ion-row>\n                                    <ion-col col-3 text-center>\n                                        <div>\n                                            <img style="width: 60px; height: 60px;" class="seller-image"\n                                                 src="{{globals.imageBaseUrl + article.currentSeller.imgName}}"\n                                                 alt="seller.name">\n                                        </div>\n                                        <div style="font-size: 10px">{{article.currentSeller.name}}</div>\n                                        <div class="primary-number" style="font-size: 12px">Not visit\n                                            {{(article.currentSeller.possible - article.currentSeller.checked) |\n                                            numerally : \'0.[0]a\'}}\n                                        </div>\n                                    </ion-col>\n                                    <ion-col col-9>\n                                        <ion-grid no-padding>\n                                            <ion-row style="padding: 2px 0">\n                                                <ion-col col-7 text-right>\n                                                    <div style="font-size: 14px; padding: 4px 3px;">\n                                                        Goal\n                                                        {{article.currentSeller.milestone}}/{{article.currentSeller.outcome}}\n                                                    </div>\n                                                </ion-col>\n                                                <ion-col col-5>\n                                                    <normal-progress-bar\n                                                            [progress]="(article.currentSeller.outcome / article.currentSeller.milestone * 100) | numerally : \'0\'"></normal-progress-bar>\n                                                </ion-col>\n                                            </ion-row>\n                                            <ion-row style="padding: 2px 0">\n                                                <ion-col col-7 text-right>\n                                                    <div style="font-size: 14px; padding: 4px 3px;">\n                                                        Current\n                                                        {{article.currentSeller.checked}}/{{article.currentSeller.sold}}\n                                                    </div>\n                                                </ion-col>\n                                                <ion-col col-5>\n                                                    <normal-progress-bar\n                                                            [progress]="(article.currentSeller.sold / article.currentSeller.checked * 100) | numerally : \'0\'"></normal-progress-bar>\n                                                </ion-col>\n                                            </ion-row>\n                                            <ion-row style="padding: 2px 0">\n                                                <ion-col col-7 text-right>\n                                                    <div style="font-size: 14px; padding: 4px 3px;">\n                                                        Total\n                                                        {{article.currentSeller.possible}}/{{article.currentSeller.positive_outcome}}\n                                                    </div>\n                                                </ion-col>\n                                                <ion-col col-5>\n                                                    <normal-progress-bar\n                                                            [progress]="(article.currentSeller.positive_outcome / article.currentSeller.possible * 100) | numerally : \'0\'"></normal-progress-bar>\n                                                </ion-col>\n                                            </ion-row>\n                                        </ion-grid>\n                                    </ion-col>\n                                </ion-row>\n                            </ion-grid>\n                        </ion-item>\n                    </ion-list>\n                </div>\n            </div>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/distribution-second/distribution-second.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["p" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["q" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_dashboard_service__["a" /* DashboardService */],
        __WEBPACK_IMPORTED_MODULE_1__providers_common_service__["a" /* CommonService */],
        __WEBPACK_IMPORTED_MODULE_7__providers_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* LoadingController */]])
], DistributionSecondPage);

//# sourceMappingURL=distribution-second.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardFirstPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_auth_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dashboard_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_chart_options__ = __webpack_require__(793);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_models_widget_type_enum__ = __webpack_require__(794);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__distribution_second_distribution_second__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_globals__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the DashboardFirstPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DashboardFirstPage = (function () {
    function DashboardFirstPage(navCtrl, navParams, menuCtrl, dashboardService, loader, authService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.dashboardService = dashboardService;
        this.loader = loader;
        this.authService = authService;
        this.salesPeriod = "current";
        this.dashboardsME = {
            distributions: []
        };
        this.dashboardsTEAM = {
            distributions: []
        };
        this.loadingTEAM = true;
        this.chartOptions = __WEBPACK_IMPORTED_MODULE_5__providers_chart_options__["a" /* ChartOptions */];
        this.activeSegment = 'me';
        this.globals = __WEBPACK_IMPORTED_MODULE_8__providers_globals__["a" /* Globals */];
        var loading = this.loader.create({
            content: 'Loading dashboards'
        });
        loading.present().then(function () {
            var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
                .append('salesPeriod', _this.salesPeriod)
                .append('seller', authService.getSeller().id);
            _this.dashboardService.fetchDistributions(params).subscribe(function (items) {
                _this.dashboardsME.distributions = items;
                // console.log(this.dashboardsME.distributions);
                // this.dashboardsME.distributions = JSON.parse(localStorage.getItem('tempdists'));
                _this.dashboardsME.distributions.forEach(function (distribution) {
                    _this.prepareChartData(distribution, __WEBPACK_IMPORTED_MODULE_6__app_models_widget_type_enum__["a" /* WidgetType */].DISTRIBUTION);
                });
                // console.log(items);
                // localStorage.setItem('tempdists', JSON.stringify(items));
                loading.dismiss();
            });
        });
    }
    DashboardFirstPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardFirstPage');
        // let params = new HttpParams()
        // .append('salesPeriod', this.salesPeriod);
        // this.dashboardService.fetchDistributions(params).subscribe((items: any[]) => {
        //   this.dashboardsTEAM.distributions = items;
        //   this.dashboardsTEAM.distributions.forEach(distribution => {
        //     this.prepareChartData(distribution, WidgetType.DISTRIBUTION);
        //   });
        //   this.loadingTEAM = false;
        // });
    };
    DashboardFirstPage.prototype.onDistributionClicked = function (distribution) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__distribution_second_distribution_second__["a" /* DistributionSecondPage */], { id: distribution.id });
    };
    DashboardFirstPage.prototype.prepareChartData = function (item, type) {
        switch (type) {
            case __WEBPACK_IMPORTED_MODULE_6__app_models_widget_type_enum__["a" /* WidgetType */].DISTRIBUTION: {
                var milestone_1 = 0, outcome_1 = 0, start_outcome_1 = 0, sold_1 = 0, checked_1 = 0;
                item.sellers.forEach(function (seller) {
                    milestone_1 += seller.milestone;
                    outcome_1 += seller.outcome;
                    start_outcome_1 += seller.start_outcome;
                    sold_1 += seller.sold;
                    checked_1 += seller.checked;
                });
                item.milestone = milestone_1;
                item.outcome = outcome_1;
                item.sold = sold_1;
                item.checked = checked_1;
                item.start_outcome = start_outcome_1;
                var index;
                if (milestone_1 === 0 || outcome_1 === 0) {
                    outcome_1 = 0;
                    index = 100;
                }
                else {
                    index = milestone_1 - outcome_1;
                    if (index < 0)
                        index = 0;
                }
                var indexChecked;
                if (sold_1 === 0 || checked_1 === 0) {
                    sold_1 = 0;
                    indexChecked = 100;
                }
                else {
                    indexChecked = checked_1 - sold_1;
                    if (indexChecked < 0)
                        indexChecked = 0;
                }
                item.chartData = [
                    [outcome_1, index],
                    [sold_1, indexChecked]
                ];
                item.sellers.forEach(function (seller) {
                    seller.index = 0;
                    if (seller.milestone > 0)
                        seller.index = seller.outcome / seller.milestone;
                });
            }
        }
    };
    DashboardFirstPage.prototype.firstFive = function (item, index) {
        return index < 5;
    };
    return DashboardFirstPage;
}());
DashboardFirstPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'page-dashboard-first',template:/*ion-inline-start:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/dashboard-first/dashboard-first.html"*/'<!--\n  Generated template for the DashboardFirstPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar hideBackButton color="primary">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Dashboard</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-grid no-padding style="margin: 10px 0">\n        <ion-row>\n            <ion-col col-3></ion-col>\n            <ion-col col-6>\n                <ion-segment color="primary" [(ngModel)]="activeSegment">\n                    <ion-segment-button value="me">\n                        Me\n                    </ion-segment-button>\n                    <ion-segment-button value="team">\n                        Team\n                    </ion-segment-button>\n                </ion-segment>\n            </ion-col>\n            <ion-col col-3></ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <div [ngSwitch]="activeSegment">\n        <div *ngSwitchCase="\'me\'">\n            <ion-card *ngFor="let distribution of this.dashboardsME.distributions">\n                <ion-card-header color="primary">\n                    {{distribution.title}}\n                </ion-card-header>\n                <ion-grid>\n                    <ion-row>\n                        <ion-col col-4>\n                            <div padding-vertical text-center>\n                                <div>\n                                    <ion-icon color="secondary" name="ios-radio-button-on"></ion-icon>\n                                </div>\n                                <div style="padding: 5px 0; font-weight: 500">Milestone</div>\n                                <div class="secondary-number">\n                                    {{distribution.milestone}} / {{distribution.outcome}}\n                                </div>\n                            </div>\n                        </ion-col>\n                        <ion-col col-4>\n                            <div padding-vertical text-center>\n                                <div>\n                                    <ion-icon color="primary" name="ios-radio-button-on"></ion-icon>\n                                </div>\n                                <div style="padding: 5px 0; font-weight: 500">Current</div>\n                                <div class="primary-number">\n                                    {{distribution.checked}} / {{distribution.sold}}\n                                </div>\n                            </div>\n                        </ion-col>\n                        <ion-col col-4>\n                            <canvas baseChart width="90" height="90" [data]="distribution.chartData" [options]="chartOptions.distribution.options" [colors]="chartOptions.distribution.colors"\n                                chartType="doughnut"></canvas>\n                            <div text-center class="doughnut-center">\n                                <div class="secondary-number">{{(distribution.outcome / distribution.milestone) | numerally: \'0a%\'}}\n                                </div>\n                                <hr style="margin: 3px 0">\n                                <div class="primary-number">{{(distribution.sold / distribution.checked) | numerally: \'0a%\'}}\n                                </div>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col col-12>\n                            <button float-right ion-button icon-only clear round (click)="onDistributionClicked(distribution)">\n                                <ion-icon name="arrow-round-forward" color="success"></ion-icon>\n                            </button>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-card>\n        </div>\n        <div *ngSwitchCase="\'team\'">\n            <div [hidden]="!loadingTEAM" text-center style="padding: 60px 0;">\n                <ion-spinner class="spinner-lg"></ion-spinner>\n            </div>\n            <ion-card *ngFor="let distribution of this.dashboardsTEAM.distributions">\n                <ion-card-header color="primary">\n                    {{distribution.title}}\n                </ion-card-header>\n                <ion-grid>\n                    <ion-row>\n                        <ion-col col-4>\n                            <div padding-vertical text-center>\n                                <div>\n                                    <ion-icon color="secondary" name="ios-radio-button-on"></ion-icon>\n                                </div>\n                                <div style="padding: 5px 0; font-weight: 500">Milestone</div>\n                                <div class="secondary-number">\n                                    {{distribution.milestone}} / {{distribution.outcome}}\n                                </div>\n                            </div>\n                        </ion-col>\n                        <ion-col col-4>\n                            <div padding-vertical text-center>\n                                <div>\n                                    <ion-icon color="primary" name="ios-radio-button-on"></ion-icon>\n                                </div>\n                                <div style="padding: 5px 0; font-weight: 500">Current</div>\n                                <div class="primary-number">\n                                    {{distribution.checked}} / {{distribution.sold}}\n                                </div>\n                            </div>\n                        </ion-col>\n                        <ion-col col-4>\n                            <canvas baseChart width="90" height="90" [data]="distribution.chartData" [options]="chartOptions.distribution.options" [colors]="chartOptions.distribution.colors"\n                                chartType="doughnut"></canvas>\n                            <div text-center class="doughnut-center">\n                                <div class="secondary-number">{{(distribution.outcome / distribution.milestone) | numerally: \'0a%\'}}\n                                </div>\n                                <hr style="margin: 3px 0">\n                                <div class="primary-number">{{(distribution.sold / distribution.checked) | numerally: \'0a%\'}}\n                                </div>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col col-2 text-center *ngFor="let seller of distribution.sellers | filterFn: firstFive">\n\n                            <img *ngIf="seller.imgName != \'\' && seller.imgName != null" class="seller-image" src="{{globals.imageBaseUrl + seller.imgName}}"\n                                alt="{{seller.name}}">\n                            <img *ngIf="seller.imgName == \'\' || seller.imgName == null" class="seller-image" src="{{globals.api}}files/avatar-1577909_640.png"\n                                alt="{{seller.name}}">\n\n                        </ion-col>\n                        <ion-col col-2 text-center>\n                            <button ion-button icon-only clear round (click)="onDistributionClicked(distribution)">\n                                <ion-icon name="arrow-round-forward" color="success"></ion-icon>\n                            </button>\n                        </ion-col>\n\n                    </ion-row>\n                </ion-grid>\n            </ion-card>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/dashboard-first/dashboard-first.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["p" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["q" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_dashboard_service__["a" /* DashboardService */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_0__providers_auth_service__["a" /* AuthService */]])
], DashboardFirstPage);

//# sourceMappingURL=dashboard-first.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__calendar_calendar__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_authentication_service__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, toastCtrl, loader, authService, authenticationService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.loader = loader;
        this.authService = authService;
        this.authenticationService = authenticationService;
        this.initialPage = __WEBPACK_IMPORTED_MODULE_0__calendar_calendar__["a" /* CalendarPage */];
        // redirect to main page, if already loggedIn
        authService.getToken().subscribe(function (token) {
            if (token) {
                _this.navCtrl.push(_this.initialPage);
                _this.navCtrl.setRoot(_this.initialPage);
            }
        });
    }
    LoginPage.prototype.onLogin = function () {
        var _this = this;
        var loading = this.loader.create({
            content: 'Signing in'
        });
        loading.present();
        this.authenticationService.login(this.username, this.password).subscribe(function (isLoginSuccessful) {
            if (isLoginSuccessful) {
                _this.navCtrl.push(_this.initialPage);
                _this.navCtrl.setRoot(_this.initialPage);
                loading.dismiss();
                return;
            }
            loading.dismiss();
            _this.presentToast('Incorrect username or password');
        }, function (err) {
            console.log(err);
        });
    };
    // test() {
    //     var json = {
    //         LoginForm: {
    //             username: this.username,
    //             password: this.password
    //         }
    //     };
    //     this.http.post('https://keysale.se/admin/user/login?api=1', json).map(res => res.json()).subscribe(data => {
    //         let loading = this.loader.create({
    //             content: 'Signing in'
    //         });
    //         loading.present().then(() => {
    //             if (data.password == 'Incorrect username or password') {
    //                 loading.dismissAll();
    //                 this.presentToast('Incorrect username or password');
    //             } else {
    //                 var all_accesses = {};
    //                 for (let index in data.seller_accesses) {
    //                     all_accesses[parseInt(data.seller_accesses[index].access_id)] = true;
    //                 }
    //                 for (let index in [1, 2, 3, 4, 5]) {
    //                     var i = parseInt(index) + 1;
    //                     if (!all_accesses.hasOwnProperty(i)) {
    //                         all_accesses[i] = false;
    //                     }
    //                 }
    //                 if (data.message == "successful") {
    //                     localStorage.setItem('accesses', JSON.stringify(all_accesses));
    //                     this.storage.set('user', data);
    //                     this.navCtrl.push(this.initialPage);
    //                     this.navCtrl.setRoot(this.initialPage);
    //                     loading.dismissAll();
    //                 }
    //             }
    //         });
    //     }, err => {
    //         console.log(err);
    //     });
    // }
    LoginPage.prototype.presentToast = function (text, css) {
        if (css === void 0) { css = 'default-toast'; }
        var toast = this.toastCtrl.create({
            message: text,
            showCloseButton: true,
            closeButtonText: "Ok",
            position: 'middle',
            cssClass: css,
        });
        toast.present();
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/login/login.html"*/'<ion-header>\n</ion-header>\n<ion-content class="login-page" padding>\n    <div padding style="text-align: center">\n        <img style="margin:50px auto" src="assets/images/logo.png">\n    </div>\n    <ion-list>\n\n            <ion-item>\n                <ion-label>Username</ion-label>\n                <ion-input [(ngModel)]="username" type="text"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>Password</ion-label>\n                <ion-input [(ngModel)]="password"  type="password"></ion-input>\n            </ion-item>\n\n    </ion-list>\n    <div padding>\n        <button color="light" (click)="onLogin()"ion-button block>Sign In</button>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["p" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["q" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["v" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_1__providers_authentication_service__["a" /* AuthenticationService */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_signaturepad_signature_pad__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_signaturepad_signature_pad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_signaturepad_signature_pad__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_gallery_modal__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_globals__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FormPage = (function () {
    function FormPage(app, navCtrl, toastCtrl, navParams, loader, http, alertCtrl, storage, viewCtrl, modalCtrl) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.loader = loader;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.signature = '';
        this.isDrawing = false;
        this.active_page = 'action';
        this.signaturePadOptions = {
            'minWidth': 2,
            'canvasWidth': 400,
            'canvasHeight': 200,
            'backgroundColor': '#f6fbff',
            'penColor': '#666a73'
        };
        this.history = [];
        this.field_answer = {};
        this.input_id = false;
        this.action = navParams.get('action');
        this.store = navParams.get('store');
        this.answer = {
            data: [],
            form_id: this.action.id,
            store_id: this.store.id
        };
        this.getAction();
    }
    FormPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        if (this.signaturePad) {
            this.signaturePad.clear();
            this.storage.get('savedSignature').then(function (data) {
                _this.signature = data;
            });
        }
    };
    FormPage.prototype.openGallery = function (sliderImages) {
        var photos = [];
        for (var _i = 0, sliderImages_1 = sliderImages; _i < sliderImages_1.length; _i++) {
            var sliderImage = sliderImages_1[_i];
            photos.push({ url: 'https://s3.keysale.se/files/' + sliderImage.key });
        }
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5_ionic_gallery_modal__["a" /* GalleryModal */], {
            photos: photos,
            initialSlide: []
        });
        modal.present();
    };
    FormPage.prototype.saveAction = function (newAnswer) {
        var _this = this;
        var save_load = this.loader.create({
            content: 'Saving Answer'
        });
        save_load.present().then(function () {
            _this.answer.data = [];
            for (var field_id in _this.field_answer) {
                if (_this.field_answer[field_id]) {
                    if (_this.field_answer[field_id].constructor == Object) {
                        var options = [];
                        for (var option_id in _this.field_answer[field_id]) {
                            if (_this.field_answer[field_id][option_id]) {
                                options.push(option_id);
                            }
                        }
                        _this.answer.data.push({ field_id: field_id, value: options.join('_') });
                    }
                    else
                        _this.answer.data.push({ field_id: field_id, value: _this.field_answer[field_id] });
                }
                else
                    _this.answer.data.push({ field_id: field_id, value: null });
            }
            if (_this.input_id != false) {
                var params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]().append('id', _this.input_id);
                _this.http.post(__WEBPACK_IMPORTED_MODULE_7__providers_globals__["a" /* Globals */].api + 'app/answer/update', _this.answer, { params: params }).subscribe(function (action) {
                    if (newAnswer == true) {
                        _this.newAnswer();
                        var params_1 = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]()
                            .append('action', _this.action.id)
                            .append('expand', 'datas')
                            .append('store', _this.store.id);
                        _this.http.post(__WEBPACK_IMPORTED_MODULE_7__providers_globals__["a" /* Globals */].api + 'app/answer', _this.answer, { params: params_1 }).subscribe(function (answers) {
                            _this.history = answers;
                            save_load.dismissAll();
                        });
                    }
                    else {
                        save_load.dismissAll();
                        _this.navCtrl.pop();
                        _this.input_id = false;
                    }
                });
            }
            else {
                var params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]()
                    .append('id', _this.action.id)
                    .append('expand', 'datas')
                    .append('store', _this.store.id);
                _this.http.post(__WEBPACK_IMPORTED_MODULE_7__providers_globals__["a" /* Globals */].api + 'app/answer/create', _this.answer, { params: params }).subscribe(function (action) {
                    if (newAnswer == true) {
                        _this.newAnswer();
                        var params_2 = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]()
                            .append('action', _this.action.id)
                            .append('expand', 'datas')
                            .append('store', _this.store.id);
                        _this.http.post(__WEBPACK_IMPORTED_MODULE_7__providers_globals__["a" /* Globals */].api + 'app/answer', _this.answer, { params: params_2 }).subscribe(function (answers) {
                            _this.history = answers;
                            save_load.dismissAll();
                        });
                    }
                    else {
                        save_load.dismissAll();
                        _this.navCtrl.pop();
                    }
                });
            }
        });
    };
    FormPage.prototype.newAnswer = function () {
        this.answer = {
            data: [],
            form_id: this.action.id,
            store_id: this.store.id
        };
        for (var _i = 0, _a = this.action.fields; _i < _a.length; _i++) {
            var field = _a[_i];
            if (field.type_id == 3) {
                this.field_answer[field.id] = {};
                for (var _b = 0, _c = field.options; _b < _c.length; _b++) {
                    var option = _c[_b];
                    this.field_answer[field.id][option.id] = null;
                }
            }
            else
                this.field_answer[field.id] = null;
        }
        this.input_id = false;
    };
    FormPage.prototype.getAction = function () {
        var _this = this;
        var actions_loader = this.loader.create({
            content: 'Loading ' + this.action.name
        });
        actions_loader.present().then(function () {
            var params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]()
                .append('expand', 'fields.options,fields.sliderImages,formSettings')
                .append('id', _this.action.id);
            _this.http.get(__WEBPACK_IMPORTED_MODULE_7__providers_globals__["a" /* Globals */].api + 'app/actions/view', { params: params }).subscribe(function (action) {
                for (var _i = 0, _a = action.fields; _i < _a.length; _i++) {
                    var field = _a[_i];
                    if (field.type_id == 3) {
                        _this.field_answer[field.id] = {};
                        for (var _b = 0, _c = field.options; _b < _c.length; _b++) {
                            var option = _c[_b];
                            _this.field_answer[field.id][option.id] = null;
                        }
                    }
                    else
                        _this.field_answer[field.id] = null;
                }
                _this.action = action;
                actions_loader.dismissAll();
                var params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]()
                    .append('expand', 'datas')
                    .append('store', _this.store.id)
                    .append('action', _this.action.id);
                _this.http.post(__WEBPACK_IMPORTED_MODULE_7__providers_globals__["a" /* Globals */].api + 'app/answer', _this.answer, { params: params }).subscribe(function (answers) {
                    _this.history = answers;
                    if (_this.history.length > 0) {
                        _this.openAnswer(_this.history[0]);
                    }
                });
            });
        });
    };
    FormPage.prototype.openAnswer = function (answer) {
        console.log(answer);
        console.log(this.history);
        this.input_id = answer.id;
        this.answer = answer;
        for (var _i = 0, _a = this.answer.datas; _i < _a.length; _i++) {
            var data = _a[_i];
            for (var _b = 0, _c = this.action.fields; _b < _c.length; _b++) {
                var field = _c[_b];
                if (data.field_id == field.id) {
                    if (field.type_id == '3') {
                        var options = data.value.split('_');
                        for (var _d = 0, options_1 = options; _d < options_1.length; _d++) {
                            var option = options_1[_d];
                            this.field_answer[data.field_id][parseInt(option)] = true;
                        }
                    }
                    else if (field.type_id == '4') {
                        this.field_answer[data.field_id] = data.option_id;
                    }
                    else if (field.type_id == '5') {
                        this.field_answer[data.field_id] = data.option_id;
                    }
                    else {
                        this.field_answer[data.field_id] = data.value;
                    }
                }
            }
        }
        this.active_page = 'action';
    };
    FormPage.prototype.drawComplete = function (field) {
        this.isDrawing = false;
        this.field_answer[field.id] = this.signaturePad.toDataURL();
    };
    FormPage.prototype.drawStart = function () {
        this.isDrawing = true;
    };
    FormPage.prototype.savePad = function () {
        this.signature = this.signaturePad.toDataURL();
        this.storage.set('savedSignature', this.signature);
        this.signaturePad.clear();
        var toast = this.toastCtrl.create({
            message: 'New Signature saved.',
            duration: 3000
        });
        toast.present();
    };
    FormPage.prototype.clearPad = function () {
        this.signaturePad.clear();
    };
    FormPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FormPage');
    };
    FormPage.prototype.now = function (field_id) {
        console.log(__WEBPACK_IMPORTED_MODULE_6_moment__(new Date()).format('HH:mm'));
        this.field_answer[field_id] = __WEBPACK_IMPORTED_MODULE_6_moment__(new Date()).format('HH:mm');
        console.log(this.field_answer[field_id]);
    };
    FormPage.prototype.back = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Go back',
            message: 'Do you want to go back without saving answer?',
            buttons: [
                {
                    text: 'Yes',
                    handler: function () {
                        _this.viewCtrl.dismiss();
                        console.log('Buy clicked');
                    }
                },
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    return FormPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4_angular2_signaturepad_signature_pad__["SignaturePad"]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_angular2_signaturepad_signature_pad__["SignaturePad"])
], FormPage.prototype, "signaturePad", void 0);
FormPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-form',template:/*ion-inline-start:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/form/form.html"*/'\n<ion-header>\n\n    <ion-navbar style="background-color: #0866c6">\n        <ion-buttons left>\n            <button ion-button icon-only (click)="back()">\n                <ion-icon name="arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n        <!--<ion-title>{{action.name}}</ion-title>-->\n\n        <ion-buttons right>\n            <button ion-button="" (click)="saveAction()">Save</button>\n        </ion-buttons>\n\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n    <div [ngSwitch]="active_page">\n    <ion-col col-11 no-padding="">\n        <ion-segment style="background-color: white" [(ngModel)]="active_page">\n            <ion-segment-button value="action">\n                Action\n            </ion-segment-button>\n            <ion-segment-button value="history">\n                History\n            </ion-segment-button>\n        </ion-segment>\n    </ion-col>\n    <ion-list  *ngSwitchCase="\'action\'">\n        <div style="padding: 0;margin: 0" *ngFor="let field of action.fields">\n            <div class="question-title">{{field.title}}</div>\n            <div *ngIf="field.type_id==1">\n                <!--1,textarea-->\n                <ion-item><ion-textarea [(ngModel)]="field_answer[field.id]" placeholder="Enter a description"></ion-textarea></ion-item>\n            </div>\n            <div *ngIf="field.type_id==\'2\'">\n                <!--2,text-->\n                <ion-item><ion-input  [(ngModel)]="field_answer[field.id]" style="padding: 0;margin: 0" type="text" placeholder="Type text"></ion-input></ion-item>\n            </div>\n            <div *ngIf="field.type_id==3">\n                <ion-item *ngFor="let option of field.options"  >\n                    <ion-label>{{option.title}}</ion-label>\n                    <ion-checkbox [(ngModel)]="field_answer[field.id][option.id]"  color="primary"></ion-checkbox>\n                </ion-item>\n                <!--3,checkbox-->\n            </div>\n            <div *ngIf="field.type_id==4" radio-group>\n                <ion-item radio-group *ngFor="let option of field.options" [(ngModel)]="field_answer[field.id]">\n                    <ion-label>{{option.title}}</ion-label>\n                    <ion-radio item-left value="{{option.id}}" color="primary"></ion-radio>\n                </ion-item>\n                <!--4,radio-->\n            </div>\n            <div *ngIf="field.type_id==5">\n                <ion-item>\n                    <ion-select [(ngModel)]="field_answer[field.id]" [selectOptions]="{title:field.title}">\n                        <ion-option  *ngFor="let option of field.options" value="{{option.id}}">{{option.title}}</ion-option>\n                    </ion-select>\n                </ion-item>\n\n                <!--5,select-->\n            </div>\n            <div *ngIf="field.type_id==6">\n                <!--6,section-->\n                <br />\n            </div>\n            <div *ngIf="field.type_id==7">\n                <!--7,date-->\n                <ion-item>\n                    <ion-datetime [(ngModel)]="field_answer[field.id]" displayFormat="MM/DD/YYYY"></ion-datetime>\n                </ion-item>\n            </div>\n            <div *ngIf="field.type_id==8">\n                <input type="file" value="Upload file" color="primary"/>\n            </div>\n            <div *ngIf="field.type_id==9">\n                <!--9,signature-->\n\n                <signature-pad *ngIf="!field_answer[field.id]" [options]="signaturePadOptions" (onBeginEvent)="drawStart()" (onEndEvent)="drawComplete(field)"></signature-pad>\n                <img *ngIf="field_answer[field.id]" src="{{field_answer[field.id]}}">\n            </div>\n            <div *ngIf="field.type_id==10">\n                <!--10,number-->\n                <ion-item><ion-input [(ngModel)]="field_answer[field.id]" style="padding: 0;margin: 0" type="number" placeholder="Type number"></ion-input></ion-item>\n            </div>\n            <div *ngIf="field.type_id==11">\n                <!--11,sum-->\n            </div>\n            <div *ngIf="field.type_id==13">\n                <!--13,keywatch-->\n                <a href="{{\'keywatch:upload?name=\'+store.customer+\'&city=\'+store.city+\'&query=\'+action.name+\'&returnUrl=keySaleOnlineApp://&cancelUrl=keySaleOnlineApp://\'}}" ion-button>KeyWatch</a>\n            </div>\n            <div *ngIf="field.type_id==14">\n                <!--14,event-->\n            </div>\n            <div *ngIf="field.type_id==15">\n                <!--15,store_info-->\n            </div>\n            <div *ngIf="field.type_id==16">\n                <!--16,seller_info-->\n            </div>\n            <div *ngIf="field.type_id==17">\n                <!--17,rich_text-->\n            </div>\n            <div *ngIf="field.type_id==18">\n                <!--18,slider-->\n                <img (click)="openGallery(field.sliderImages)" height="100" src="https://s3.keysale.se/files/{{field.sliderImages[0].key}}"><br>\n                <button ion-button color="secondary" (click)="openGallery(field.sliderImages)">Slider</button>\n            </div>\n            <div *ngIf="field.type_id==19">\n                <!--19,time-->\n                <ion-item>\n                    <ion-datetime [(ngModel)]="field_answer[field.id]" displayFormat="HH:mm"></ion-datetime>\n                    <button ion-button item-end round (click)="now(field.id)">Now</button>\n                </ion-item>\n            </div>\n        </div>\n    </ion-list>\n    <ion-list  *ngSwitchCase="\'history\'">\n        <button ion-item *ngFor="let answer of history" (click)="openAnswer(answer)">\n            {{answer.date}}\n        </button>\n    </ion-list>\n    </div>\n\n    <ion-fab right bottom>\n        <button ion-fab mini (click)="saveAction(true)">\n            <ion-icon name="add"></ion-icon>\n        </button>\n    </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/form/form.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["v" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["w" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ModalController */]])
], FormPage);

//# sourceMappingURL=form.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DistributionPhotoAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_path__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_transfer__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__distibution_photo_crop_distibution_photo_crop__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_globals__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var DistributionPhotoAddPage = (function () {
    function DistributionPhotoAddPage(loadingCtrl, navCtrl, navParams, camera, actionSheetCtrl, transfer, toastCtrl, file, modal, filePath, http, storage, platform) {
        var _this = this;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.transfer = transfer;
        this.toastCtrl = toastCtrl;
        this.file = file;
        this.modal = modal;
        this.filePath = filePath;
        this.http = http;
        this.storage = storage;
        this.platform = platform;
        this.payload = [];
        this.images = [];
        this.lastImage = null;
        this.answer = {};
        this.dist_images = [];
        this.images = [];
        storage.get('user').then(function (user) {
            _this.user = user;
        });
        this.selected_image = 0;
        this.store = this.navParams.data.store;
        this.distribution = this.navParams.data.distribution;
        this.addPhoto(this.navParams.data.type);
        // this.images.push('https://static01.nyt.com/images/2014/05/28/dining/Apple-Pie/Apple-Pie-articleLarge.jpg');
    }
    DistributionPhotoAddPage.prototype.ionViewDidAppear = function () {
    };
    DistributionPhotoAddPage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    DistributionPhotoAddPage.prototype.selectImage = function (image) {
        this.selected_image = this.images.indexOf(image);
    };
    DistributionPhotoAddPage.prototype.addImage = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select image',
            buttons: [
                {
                    text: 'Gallery',
                    role: 'destructive',
                    handler: function () {
                        _this.addPhoto('gallery');
                    }
                },
                {
                    text: 'Take a Photo',
                    handler: function () {
                        _this.addPhoto('camera');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    DistributionPhotoAddPage.prototype.takePicture = function (sourceType, payload, field_id) {
        var _this = this;
        // Create options for the Camera Dialog
        var options = {
            quality: 25,
            sourceType: sourceType,
            saveToPhotoAlbum: true,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imagePath) {
            // Special handling for Android library
            if (_this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath)
                    .then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName(), payload, field_id);
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName(), payload, field_id);
            }
        }, function (err) {
            // this.presentToast("Can't select image");
        });
    };
    DistributionPhotoAddPage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName, payload, field_id) {
        var _this = this;
        this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
            _this.lastImage = newFileName;
            _this.uploadImage(payload, field_id);
            // this.images.push(this.pathForImage(this.lastImage));
        }, function (error) {
            _this.presentToast("Can't save file");
        });
    };
    DistributionPhotoAddPage.prototype.presentToast = function (text, css) {
        if (css === void 0) { css = 'default-toast'; }
        var toast = this.toastCtrl.create({
            message: text,
            showCloseButton: true,
            closeButtonText: "Ok",
            position: 'middle',
            cssClass: css,
        });
        toast.present();
    };
    DistributionPhotoAddPage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return cordova.file.dataDirectory + img;
        }
    };
    DistributionPhotoAddPage.prototype.addPhoto = function (type) {
        if (type == 'camera') {
            this.takePicture(this.camera.PictureSourceType.CAMERA, null, null);
        }
        if (type == 'gallery') {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY, null, null);
        }
    };
    DistributionPhotoAddPage.prototype.uploadImage = function (payload, field_id) {
        var _this = this;
        // Destination URL
        var url = "http://207.154.244.178/web/index.php/mobile-api/upload-image-cropped"; // TODO
        var url2 = "http://207.154.244.178/web/index.php/mobile-api/upload-image-thumbnail"; // TODO
        // File for Upload
        var targetPath = this.pathForImage(this.lastImage);
        // file_name
        // File name only
        var filename = this.lastImage;
        var cropModal = this.modal.create(__WEBPACK_IMPORTED_MODULE_7__distibution_photo_crop_distibution_photo_crop__["a" /* DistibutionPhotoCropPage */], {
            image: targetPath
        });
        cropModal.onDidDismiss(function (data) {
            var options = {
                fileKey: "file",
                fileName: filename,
                chunkedMode: false,
                mimeType: "multipart/form-data",
                params: {
                    'fileName': filename,
                    'cropInfo': data.cropInfo
                }
            };
            var fileTransfer = _this.transfer.create();
            _this.loading = _this.loadingCtrl.create({
                content: 'Uploading' + '...',
            });
            _this.loading.present();
            fileTransfer.upload(targetPath, url, options).then(function (data) {
                var json = JSON.parse(data.response);
                // this.payload.push(json.file_name);
                _this.images.push(json.file_url); // TODO image url for saving store here
                _this.dist_images.push(json.file_name);
                _this.presentToastBottom('Upload image');
                _this.loading.dismissAll();
            }, function (err) {
                _this.loading.dismissAll();
                _this.presentToast('Try later');
            });
            fileTransfer.upload(targetPath, url2, options).then(function (data) {
            }, function (err) {
            });
        });
        cropModal.present();
    };
    DistributionPhotoAddPage.prototype.presentToastBottom = function (text, css) {
        if (css === void 0) { css = 'default-toast'; }
        var toast = this.toastCtrl.create({
            message: text,
            position: 'bottom',
            duration: 3000,
            cssClass: css,
        });
        toast.present();
    };
    DistributionPhotoAddPage.prototype.saveDistribution = function () {
        var _this = this;
        var answers = [];
        for (var distributionArticle in this.distribution.distributionArticles) {
            var quantity = 0;
            if (this.answer[this.distribution.distributionArticles[distributionArticle].article.id]) {
                quantity = 1;
            }
            answers.push({
                'article_id': this.distribution.distributionArticles[distributionArticle].article.id,
                'store_id': this.store.id,
                'quantity': quantity
            });
        }
        var post = {};
        post['distributions'] = answers;
        post['photos'] = this.dist_images;
        var params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]().append('id', this.distribution.id);
        this.http.post(__WEBPACK_IMPORTED_MODULE_9__providers_globals__["a" /* Globals */].api + 'app/distribution/register', post, { params: params }).subscribe(function (distribution) {
            _this.navCtrl.pop();
        });
    };
    DistributionPhotoAddPage.prototype.cropImage = function (targetPath, item_index) {
        var _this = this;
        console.log("blah");
        var url = "http://207.154.244.178/web/index.php/mobile-api/upload-image-cropped"; // TODO
        //
        var cropModal = this.modal.create(__WEBPACK_IMPORTED_MODULE_7__distibution_photo_crop_distibution_photo_crop__["a" /* DistibutionPhotoCropPage */], {
            image: targetPath
        });
        cropModal.onDidDismiss(function (data) {
            var options = {
                fileKey: "file",
                fileName: targetPath,
                chunkedMode: false,
                mimeType: "multipart/form-data",
                params: {
                    'fileName': targetPath,
                    'cropInfo': data.cropInfo
                }
            };
            var fileTransfer = _this.transfer.create();
            _this.loading = _this.loadingCtrl.create({
                content: 'Cropping image' + '...',
            });
            _this.loading.present();
            fileTransfer.upload(targetPath, url, options).then(function (data) {
                var json = JSON.parse(data.response);
                // this.payload.push(json.file_name);
                _this.images[item_index] = json.file_url; // TODO image url for saving store here
                _this.dist_images.push(json.file_name);
                _this.presentToastBottom('Upload image');
                _this.loading.dismissAll();
            }, function (err) {
                _this.loading.dismissAll();
                _this.presentToast('Try later');
            });
        });
        cropModal.present();
    };
    return DistributionPhotoAddPage;
}());
DistributionPhotoAddPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-distribution-photo-add',template:/*ion-inline-start:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/distribution-photo-add/distribution-photo-add.html"*/'<!--\n  Generated template for the DistributionPhotoAddPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<style>\n  .selected-image{\n    width: 96%;\n    margin: 2%;\n    height: 50%;\n    text-align:center;\n  }\n  .images-block{\n    width:96%;\n    margin:2%;\n    height:20%;\n  }\n  .floating-box {\n    display: inline-block;\n    width: 150px;\n    vertical-align: top;\n    margin: 10px;\n  }\n</style>\n<script src="jquery.fancybox-plus.js"></script>\n<script src="angular-fancybox-plus.js"></script>\n<ion-header>\n  <ion-navbar style="background-color: #0866c6">\n    <ion-title>New Distribution</ion-title>\n      <ion-buttons end>\n          <button ion-button="" (click)="saveDistribution()">Save</button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <!--<div class="selected-image">-->\n        <!--<img style="height:100%" src="{{images[selected_image]}}"></div>-->\n  <div class="images-block">\n    <div class="floating-box2" *ngFor="let image of images; let item_index = index">\n      <img src="{{image}}" (click)="cropImage(image, item_index)" />\n    </div>\n  </div>\n\n\n    <ion-fab right bottom>\n        <button ion-fab mini (click)="addImage()">\n            <ion-icon name="add"></ion-icon>\n        </button>\n    </ion-fab>\n</ion-content>'/*ion-inline-end:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/distribution-photo-add/distribution-photo-add.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_transfer__["a" /* Transfer */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["v" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_path__["a" /* FilePath */],
        __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* Platform */]])
], DistributionPhotoAddPage);

//# sourceMappingURL=distribution-photo-add.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DistibutionPhotoCropPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_cropperjs__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_cropperjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular_cropperjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//
// Get with @ViewChild
var DistibutionPhotoCropPage = (function () {
    function DistibutionPhotoCropPage(navCtrl, viewCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.config = { checkCrossOrigin: false };
        this.imageUrl = this.navParams.data.image;
        // this.imageUrl = 'https://static01.nyt.com/images/2014/05/28/dining/Apple-Pie/Apple-Pie-articleLarge.jpg';
    }
    DistibutionPhotoCropPage.prototype.test = function () {
        console.log(this.angularCropper.cropper.getData());
    };
    DistibutionPhotoCropPage.prototype.save = function () {
        this.viewCtrl.dismiss({ cropInfo: this.angularCropper.cropper.getData() });
    };
    DistibutionPhotoCropPage.prototype.zoomIn = function () {
        console.log("ZOOOOOM");
        this.angularCropper.cropper.zoom(0.5);
        //         this.angularCropper.cropper.zoomTo(1); // 1:1 (canvasData.width === canvasData.naturalWidth)
        //
        //         const containerData = this.angularCropper.cropper.getContainerData();
        //
        // // Zoom to 50% from the center of the container.
        //         this.angularCropper.cropper.zoomTo(.5, {
        //             x: containerData.width / 2,
        //             y: containerData.height / 2,
        //         });
        // this.angularCropper.cropper.zoom(10);
    };
    DistibutionPhotoCropPage.prototype.zoomOut = function () {
        this.angularCropper.cropper.zoom(-10);
    };
    return DistibutionPhotoCropPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('angularCropper'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_angular_cropperjs__["AngularCropperjsComponent"])
], DistibutionPhotoCropPage.prototype, "angularCropper", void 0);
DistibutionPhotoCropPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-distibution-photo-crop',template:/*ion-inline-start:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/distibution-photo-crop/distibution-photo-crop.html"*/'<ion-header>\n\n    <ion-navbar style="background-color: #0866c6">\n        <ion-title>Crop Image</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <!--<button ion-button (click)="zoomIn()">Zoom In</button>-->\n    <!--<button ion-button (click)="zoomOut()">Zoom Out</button>-->\n\n\n    <angular-cropper #angularCropper [cropperOptions]="config" [imageUrl]="imageUrl"></angular-cropper>\n\n    <button ion-button (click)="save()">Save</button>\n</ion-content>\n'/*ion-inline-end:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/distibution-photo-crop/distibution-photo-crop.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */]])
], DistibutionPhotoCropPage);

//# sourceMappingURL=distibution-photo-crop.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DistributionAnswerDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DistributionAnswerDetailPage = (function () {
    function DistributionAnswerDetailPage(navCtrl, viewCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
    }
    DistributionAnswerDetailPage.prototype.ionViewWillEnter = function () {
        console.log("HERE");
        console.log(this.navParams.data);
        this.distribution_answer = this.navParams.data.distribution_answer;
    };
    DistributionAnswerDetailPage.prototype.back = function () {
        this.viewCtrl.dismiss();
    };
    return DistributionAnswerDetailPage;
}());
DistributionAnswerDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-distribution-answer-detail',template:/*ion-inline-start:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/distribution-answer-detail/distribution-answer-detail.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-buttons left>\n            <button ion-button icon-only (click)="back()">\n                <ion-icon name="arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title>Answer Details</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <div *ngIf="distribution_answer">\n    <div style="text-align: center"><img\n            src="{{distribution_answer.photo_processed}}"\n            height="215"></div>\n\n        <ion-list>\n            <span *ngFor="let distribution of distribution_answer.distributions">\n                <ion-item *ngIf="distribution.quantity > 0">\n                    {{distribution.article.product}}\n                    <span item-end>{{distribution.quantity}}</span>\n                </ion-item>\n            </span>\n\n        </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/distribution-answer-detail/distribution-answer-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */]])
], DistributionAnswerDetailPage);

//# sourceMappingURL=distribution-answer-detail.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DistributionFilter_2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DistributionFilter_2Page = (function () {
    function DistributionFilter_2Page(navCtrl, viewCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.tagFilter = [];
        // public articleFiltegr:any = [];
        this.listingFilter = false;
        this.groupFilter = false;
        this.articleFilter = false;
        this.groups = this.navParams.data.groups;
        this.listings = this.navParams.data.listings;
    }
    DistributionFilter_2Page.prototype.back = function () {
        this.viewCtrl.dismiss({
            // articleFilter: this.articleFilter,
            listingFilter: this.listingFilter,
            groupFilter: this.groupFilter,
            articleFilter: this.articleFilter
        });
    };
    DistributionFilter_2Page.prototype.apply = function () {
        this.viewCtrl.dismiss({
            articleFilter: this.articleFilter,
            listingFilter: this.listingFilter,
            groupFilter: this.groupFilter
        });
    };
    return DistributionFilter_2Page;
}());
DistributionFilter_2Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-distribution-filter-2',template:/*ion-inline-start:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/distribution-filter-2/distribution-filter-2.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="back()">\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Distribution Filter</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="apply()">\n        Apply\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <div style="background-color: #f4f4f4; padding-left: 17px; padding-top: 2.5%; padding-bottom: 2.5%; font-weight: bold; border-bottom: 1px solid #A9A9A9">\n  Articles\n  </div>\n  <ion-item>\n  <ion-select [(ngModel)]="articleFilter">\n  <ion-option value="0">All articles</ion-option>\n  <ion-option value="1">Missing articles</ion-option>\n  </ion-select>\n  </ion-item>\n\n  <!--<div style="background-color: #f4f4f4; padding-left: 17px; padding-top: 2.5%; padding-bottom: 2.5%; font-weight: bold; border-bottom: 1px solid #A9A9A9">-->\n  <!--Listings-->\n  <!--</div>-->\n  <!--<ion-item>-->\n  <!--<ion-select [(ngModel)]="listingFilter">-->\n  <!--<ion-option value="0">All articles</ion-option>-->\n  <!--<ion-option value="1">Store Articles</ion-option>-->\n  <!--</ion-select>-->\n  <!--</ion-item>-->\n\n  <div style="background-color: #f4f4f4; padding-left: 17px; padding-top: 2.5%; padding-bottom: 2.5%; font-weight: bold; border-bottom: 1px solid #A9A9A9">\n    Groups\n  </div>\n  <ion-item>\n    <ion-select [(ngModel)]="groupFilter">\n      <!--<ion-option value="0">All Groups</ion-option>-->\n      <ion-option *ngFor="let group of groups" value="{{group.id}}">{{group.name}}</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <div style="background-color: #f4f4f4; padding-left: 17px; padding-top: 2.5%; padding-bottom: 2.5%; font-weight: bold; border-bottom: 1px solid #A9A9A9">\n    Listings\n  </div>\n  <ion-item>\n    <ion-select [(ngModel)]="listingFilter">\n      <ion-option value="all">All Listings</ion-option>\n      <ion-option *ngFor="let listing of listings" value="{{listing}}">{{listing}}</ion-option>\n    </ion-select>\n  </ion-item>\n</ion-content>'/*ion-inline-end:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/distribution-filter-2/distribution-filter-2.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */]])
], DistributionFilter_2Page);

//# sourceMappingURL=distribution-filter-2.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__visit_stores_visit_stores__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store_details_store_details__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store_details_actions_store_details_actions__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_common_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_globals__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the VisitPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var VisitPage = (function () {
    /*
     booked
     :
     0
     duration
     :
     60
     start
     :
     "2017-05-02 06:00:00"
     store_id
     :
     "165916"
     title
     :
     "CITYGROSS SOLLENTUNA"
     * */
    function VisitPage(storage, navCtrl, http, commonService, loader, navParams, viewCtr) {
        var _this = this;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.http = http;
        this.commonService = commonService;
        this.loader = loader;
        this.navParams = navParams;
        this.viewCtr = viewCtr;
        this.visit = {
            visit_type_id: undefined,
            store: undefined,
            booked: 0,
            note: '',
            duration: 0,
            start: undefined
        };
        this.user = navParams.get('user');
        this.stores = navParams.get('stores');
        this.callback = navParams.get('callback');
        var visit = navParams.get('visit');
        console.log(visit);
        var stores_loader = this.loader.create({
            content: 'Loading types'
        });
        this.visit.start = navParams.get('datetime');
        if (this.visit.start) {
            this.selectStore();
        }
        stores_loader.present().then(function () {
            _this.commonService.fetchVisitTypes().subscribe(function (types) {
                _this.types = types;
                if (visit) {
                    _this.visit = visit;
                    for (var _i = 0, types_1 = types; _i < types_1.length; _i++) {
                        var type = types_1[_i];
                        if (_this.visit.visit_type_id == type.id)
                            _this.visit.type = type;
                    }
                    _this.visit.start = __WEBPACK_IMPORTED_MODULE_5_moment__(_this.visit.start).format();
                }
                console.log(_this.visit);
                stores_loader.dismiss();
            });
        });
    }
    VisitPage.prototype.storeActions = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__store_details_actions_store_details_actions__["a" /* StoreDetailsActionsPage */], { store: this.visit.store });
    };
    VisitPage.prototype.storeDetails = function () {
        console.log(this.visit.store);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__store_details_store_details__["a" /* StoreDetailsPage */], { store: this.visit.store });
    };
    VisitPage.prototype.selectStore = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__visit_stores_visit_stores__["a" /* VisitStoresPage */], {
            stores: this.stores, callback: function (store) {
                _this.visit.store = store;
            }
        });
    };
    VisitPage.prototype.saveVisit = function () {
        var _this = this;
        var visit = {
            id: this.visit.id,
            booked: this.visit.booked,
            duration: this.visit.duration,
            note: this.visit.note,
            start: this.visit.start,
            visit_type_id: this.visit.type ? this.visit.type.id : 0,
            store_id: this.visit.store.id,
            title: this.visit.store.customer,
        };
        if (visit.id) {
            var params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]().append('id', visit.id);
            this.http.put(__WEBPACK_IMPORTED_MODULE_9__providers_globals__["a" /* Globals */].api + 'app/visit/update', visit, { params: params }).subscribe(function () {
                _this.navCtrl.pop({}, _this.callback());
            });
        }
        else {
            this.http.put(__WEBPACK_IMPORTED_MODULE_9__providers_globals__["a" /* Globals */].api + 'app/visit/create', visit).subscribe(function () {
                _this.navCtrl.pop({}, _this.callback());
            });
        }
    };
    VisitPage.prototype.deleteVisit = function () {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]().append('id', this.visit.id);
        this.http.get(__WEBPACK_IMPORTED_MODULE_9__providers_globals__["a" /* Globals */].api + 'app/visit/delete', { params: params }).subscribe(function (responce) {
            _this.navCtrl.pop({}, _this.callback());
        });
    };
    VisitPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VisitPage');
    };
    VisitPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    return VisitPage;
}());
VisitPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'page-visit',template:/*ion-inline-start:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/visit/visit.html"*/'<!--\n  Generated template for the VisitPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-buttons left="">\n            <button ion-button="" (click)="closeModal()">Close</button>\n        </ion-buttons>\n        <ion-buttons end>\n            <button ion-button="" (click)="saveVisit()">Save</button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n        <button ion-item (click)="storeDetails()">\n            Store Actions\n        </button>\n        <button ion-item (click)="selectStore()" style="color: lightgray">Store<span item-end style="color: black">{{visit.store?visit.store.customer:\'\'}}</span></button>\n        <ion-item>\n            <ion-label>Note</ion-label>\n            <ion-textarea [(ngModel)]="visit.note" name="note"></ion-textarea>\n        </ion-item>\n        <ion-item>\n            <ion-label>Visit Type</ion-label>\n            <ion-select [(ngModel)]="visit.type">\n                <ion-option *ngFor="let type of types" [value]="type">{{type.name}}</ion-option>\n            </ion-select>\n        </ion-item>\n        <ion-item>\n            <ion-label>Start Date Time</ion-label>\n            <ion-datetime displayFormat="YYYY-MM-DD HH:mm" [(ngModel)]="visit.start"></ion-datetime>\n        </ion-item>\n        <button *ngIf="visit.id" ion-item color="danger" text-center (click)="deleteVisit()">Delete</button>\n\n\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/visit/visit.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_8__providers_common_service__["a" /* CommonService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */]])
], VisitPage);

//# sourceMappingURL=visit.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreDetailsOrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_order_order__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_formation_order_formation__ = __webpack_require__(426);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StoreDetailsOrdersPage = (function () {
    function StoreDetailsOrdersPage(navParams, nav, app, modalCtrl, events, _orderProvider) {
        this.navParams = navParams;
        this.nav = nav;
        this.app = app;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this._orderProvider = _orderProvider;
        this.order = false;
        this.new_order = false;
        this.cart = {
            orders: [],
            shareEmails: ""
        };
    }
    StoreDetailsOrdersPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.store = this.navParams.data;
        this._orderProvider.getArticleGroups({ bla: 0 })
            .subscribe(function (article_groups) {
            _this.article_groups = article_groups;
        });
    };
    StoreDetailsOrdersPage.prototype.selectArticleGroup = function (article_group) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__order_formation_order_formation__["a" /* OrderFormationPage */], {
            article_group: article_group,
            store: this.store,
            cart: this.cart
        });
        modal.onDidDismiss(function (cart) {
            if (typeof cart == 'undefined') {
                _this.cart = {
                    orders: [],
                    shareEmails: ""
                };
            }
            else {
                _this.cart = cart;
            }
        });
        modal.present();
    };
    StoreDetailsOrdersPage.prototype.back = function () {
        this.app.navPop();
    };
    return StoreDetailsOrdersPage;
}());
StoreDetailsOrdersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-store-details-orders',template:/*ion-inline-start:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/store-details-orders/store-details-orders.html"*/'<ion-header>\n    <ion-navbar style="background-color: #0866c6">\n        <!--<ion-buttons left>-->\n            <!--<button ion-button icon-only (click)="back()">-->\n                <!--<ion-icon name="arrow-back"></ion-icon>-->\n            <!--</button>-->\n        <!--</ion-buttons>-->\n\n        <ion-title>Article Groups</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n    <ion-list *ngIf="article_groups">\n        <button ion-item (click)="selectArticleGroup(null)">All groups</button>\n        <button ion-item *ngFor="let group of article_groups" (click)="selectArticleGroup(group)">{{group.name}}\n        </button>\n    </ion-list>\n</ion-content>\n\n'/*ion-inline-end:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/store-details-orders/store-details-orders.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
        __WEBPACK_IMPORTED_MODULE_2__providers_order_order__["a" /* OrderProvider */]])
], StoreDetailsOrdersPage);

//# sourceMappingURL=store-details-orders.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderFormationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_order_order__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_formation_add_order_order_formation_add_order__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__order_cart_order_cart__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__order_calculator_order_calculator__ = __webpack_require__(431);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OrderFormationPage = (function () {
    function OrderFormationPage(navCtrl, navParams, loader, modalCtrl, alertCtrl, viewCtrl, events, _orderProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loader = loader;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.events = events;
        this._orderProvider = _orderProvider;
        this.articles = [];
        this.articles_super = [];
        this.cart = {
            orders: [],
            shareEmails: ""
        };
        this.order = false;
    }
    OrderFormationPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.articles = [];
        this.articles_super = [];
        if (this.navParams.data != false) {
            this.article_group = this.navParams.data.article_group;
            this.store = this.navParams.data.store;
            this.cart = this.navParams.data.cart;
            this.navParams.data = false;
        }
        var loader = this.loader.create({
            content: 'Loading articles'
        });
        loader.present().then(function () {
            _this._orderProvider.getArticles({ expand: 'group,articleUnitJoin' })
                .subscribe(function (articles) {
                _this._orderProvider.getListings({ store_id: _this.store.id })
                    .subscribe(function (listings) {
                    _this.listings = listings;
                    for (var art_key in articles) {
                        var checker = false;
                        for (var art_id in listings) {
                            if (art_id == articles[art_key].id) {
                                var bla_bla = {
                                    brand: articles[art_key].brand_id,
                                    suppArtNr: articles[art_key].suppArtNr,
                                    tax: articles[art_key].tax,
                                    group: articles[art_key].group,
                                    img66: articles[art_key].img66,
                                    id: articles[art_key].id,
                                    product: articles[art_key].product,
                                    price: articles[art_key].price,
                                    listing: listings[art_id],
                                    quantity: 0
                                };
                                _this.articles.push(bla_bla);
                                _this.articles_super.push(bla_bla);
                                checker = true;
                                break;
                            }
                        }
                        if (checker == false) {
                            var ah_ah = {
                                brand: articles[art_key].brand_id,
                                suppArtNr: articles[art_key].suppArtNr,
                                tax: articles[art_key].tax,
                                group: articles[art_key].group,
                                img66: articles[art_key].img66,
                                id: articles[art_key].id,
                                product: articles[art_key].product,
                                price: articles[art_key].price,
                                listing: " ",
                                quantity: 0
                            };
                            _this.articles.push(ah_ah);
                            _this.articles_super.push(ah_ah);
                        }
                    }
                    if (_this.article_group != null) {
                        var ar_id_1 = _this.article_group.id;
                        _this.articles = _this.articles.filter(function (article) {
                            return article.group.id === ar_id_1;
                        });
                        _this.articles_super = _this.articles_super.filter(function (article) {
                            return article.group.id === ar_id_1;
                        });
                    }
                    if (_this.cart.orders.length > 0) {
                        for (var some_key in _this.cart.orders[_this.cart.orders.length - 1].orderItems) {
                            for (var an_key in _this.articles) {
                                if (_this.articles[an_key].id == _this.cart.orders[_this.cart.orders.length - 1].orderItems[some_key].articleId) {
                                    _this.articles[an_key].quantity = _this.cart.orders[_this.cart.orders.length - 1].orderItems[some_key].quantity;
                                    // this.articles_super[an_key].quantity = this.order.orderItems[some_key].quantity;
                                }
                            }
                        }
                        _this.content.resize();
                    }
                    _this.content.resize();
                    loader.dismissAll();
                });
            });
        });
        // TODO cart click problem, reset do, calculator, add order pushing
        this._orderProvider.getOrderTypes({ indexBy: 'id' })
            .subscribe(function (orderTypes) {
            _this.order_types = orderTypes;
        });
        this._orderProvider.getPricing({ store_id: this.store.id })
            .subscribe(function (pricing) {
            _this.pricing = pricing;
        });
    };
    OrderFormationPage.prototype.listingFilter = function () {
        var _this = this;
        this.articles = this.articles_super;
        var list = [];
        for (var inpr in this.listings) {
            list.push(this.listings[inpr]);
        }
        list = list.filter(function (x, i, a) { return a.indexOf(x) == i; });
        var alert = this.alertCtrl.create();
        alert.setTitle('Listing Filter');
        alert.addInput({
            type: 'radio',
            label: 'All Articles',
            value: 'all',
        });
        for (var key in list) {
            alert.addInput({
                type: 'radio',
                label: list[key],
                value: list[key],
            });
        }
        alert.addButton('Cancel');
        alert.addButton({
            text: 'Ok',
            handler: function (data) {
                if (data == 'all') {
                    _this.articles = _this.articles_super;
                }
                else {
                    _this.articles = _this.articles.filter(function (article) {
                        return article.listing === data;
                    });
                }
            }
        });
        alert.present();
    };
    OrderFormationPage.prototype.addOrder = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__order_formation_add_order_order_formation_add_order__["a" /* OrderFormationAddOrderPage */], { order_types: this.order_types });
        modal.onDidDismiss(function (data) {
            if (data != null) {
                data.deliveryDate = __WEBPACK_IMPORTED_MODULE_4_moment__(data.deliveryDate).format('YYYY-MM-DD');
                _this.order = data;
                for (var key in _this.order_types) {
                    if (_this.order_types[key].id == _this.order.orderTypeId) {
                        _this.new_order = _this.order_types[key];
                    }
                }
                _this.content.resize();
                _this._orderProvider.getPricing({ store_id: _this.store.id, delivery_date: _this.order.deliveryDate })
                    .subscribe(function (pricing) {
                    for (var blakey in _this.articles) {
                        for (var article_id in pricing) {
                            if (article_id == _this.articles[blakey].id) {
                                _this.articles[blakey].price = pricing[article_id];
                            }
                        }
                    }
                });
                var duplicate_order = _this.cart.orders.findIndex(function (order) { return order.deliveryDate == data.deliveryDate && order.orderTypeId == data.orderTypeId; });
                if (duplicate_order == -1) {
                    _this.cart.orders.push(_this.order);
                    for (var index_ar in _this.articles) {
                        _this.articles[index_ar].quantity = 0;
                        // this.articles_super[index_ar].quantity = 0;
                    }
                }
                else {
                    _this.cart.orders.push(_this.cart.orders.splice(duplicate_order, 1)[0]);
                    for (var index_ar in _this.articles) {
                        _this.articles[index_ar].quantity = 0;
                    }
                    if (_this.cart.orders[_this.cart.orders.length - 1].orderItems.length > 0) {
                        for (var index_ar in _this.articles) {
                            for (var index_oitems in _this.cart.orders[_this.cart.orders.length - 1].orderItems) {
                                if (_this.articles[index_ar].id == _this.cart.orders[_this.cart.orders.length - 1].orderItems[index_oitems].articleId) {
                                    _this.articles[index_ar].quantity = _this.cart.orders[_this.cart.orders.length - 1].orderItems[index_oitems].quantity;
                                }
                            }
                        }
                    }
                }
            }
        });
        modal.present();
    };
    OrderFormationPage.prototype.addArticle = function (article) {
        var _this = this;
        if (this.cart.orders.length == 0) {
            var alert_1 = this.alertCtrl.create({
                title: 'Cart is empty',
                subTitle: 'To create a new order please go to the "+" button',
                buttons: ['Got it!']
            });
            alert_1.present();
        }
        else {
            var foundIndex_1 = this.articles.findIndex(function (art) { return art.id == article.id; });
            this.articles[foundIndex_1].quantity += 1;
            // this.articles_super[foundIndex].quantity += 1;
            var orderItemIndex = this.cart.orders[this.cart.orders.length - 1].orderItems.findIndex(function (item) { return item.articleId == _this.articles[foundIndex_1].id; });
            if (orderItemIndex == -1) {
                this.cart.orders[this.cart.orders.length - 1].orderItems.push({
                    brand: this.articles[foundIndex_1].brand,
                    suppArtNr: this.articles[foundIndex_1].suppArtNr,
                    tax: this.articles[foundIndex_1].tax,
                    img66: this.articles[foundIndex_1].img66,
                    product: this.articles[foundIndex_1].product,
                    listing: this.articles[foundIndex_1].listing,
                    articleId: this.articles[foundIndex_1].id,
                    consumerPrice: 0,
                    customPrice: null,
                    discountPercent: 0,
                    price: this.articles[foundIndex_1].price,
                    quantity: this.articles[foundIndex_1].quantity,
                    newPrice: 0,
                    marg_pr: 0,
                    marg_kr: 0,
                });
            }
            else {
                this.cart.orders[this.cart.orders.length - 1].orderItems[orderItemIndex] = {
                    brand: this.articles[foundIndex_1].brand,
                    suppArtNr: this.articles[foundIndex_1].suppArtNr,
                    tax: this.articles[foundIndex_1].tax,
                    img66: this.articles[foundIndex_1].img66,
                    product: this.articles[foundIndex_1].product,
                    listing: this.articles[foundIndex_1].listing,
                    articleId: this.articles[foundIndex_1].id,
                    consumerPrice: 0,
                    customPrice: null,
                    discountPercent: 0,
                    price: this.articles[foundIndex_1].price,
                    quantity: this.articles[foundIndex_1].quantity,
                    newPrice: 0,
                    marg_pr: 0,
                    marg_kr: 0,
                };
            }
        }
    };
    OrderFormationPage.prototype.goToCart = function () {
        var _this = this;
        if (this.cart.orders.length > 0) {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__order_cart_order_cart__["a" /* OrderCartPage */], { cart: this.cart, store: this.store });
            modal.onDidDismiss(function (data) {
                _this.cart = data;
            });
            modal.present();
        }
    };
    OrderFormationPage.prototype.reset = function (item_index, article, slidingItem) {
        var index = this.cart.orders[this.cart.orders.length - 1].orderItems.findIndex(function (item) { return item.articleId == article.id; });
        this.cart.orders[this.cart.orders.length - 1].orderItems.splice(index, 1);
        this.articles = this.articles.map(function (arti) {
            if (arti.id == article.id) {
                arti.quantity = 0;
            }
            return arti;
        });
        slidingItem.close();
    };
    OrderFormationPage.prototype.calculator = function (item_index, article, item) {
        var _this = this;
        item.close();
        if (this.cart.orders.length == 0) {
            var alert_2 = this.alertCtrl.create({
                title: 'Cart is empty',
                subTitle: 'To create a new order please go to the "+" button',
                buttons: ['Got it!']
            });
            alert_2.present();
        }
        else {
            var index = this.cart.orders[this.cart.orders.length - 1].orderItems.findIndex(function (item) { return item.articleId == article.id; });
            if (index == -1) {
                var alert_3 = this.alertCtrl.create({
                    title: 'Article not added',
                    subTitle: 'Please add article to customize prices',
                    buttons: ['Got it!']
                });
                alert_3.present();
            }
            else {
                var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__order_calculator_order_calculator__["a" /* OrderCalculatorPage */], { article: article });
                modal.onDidDismiss(function (data) {
                    if (data != false) {
                        _this.articles = _this.articles.map(function (arti) {
                            if (arti.id == article.id) {
                                arti.quantity = data.quantity;
                            }
                            return arti;
                        });
                        var index_1 = _this.cart.orders[_this.cart.orders.length - 1].orderItems.findIndex(function (item) { return item.articleId == article.id; });
                        _this.cart.orders[_this.cart.orders.length - 1].orderItems[index_1].consumerPrice = data.consumerPrice;
                        if (_this.cart.orders[_this.cart.orders.length - 1].orderItems[index_1].price != data.customPrice) {
                            _this.cart.orders[_this.cart.orders.length - 1].orderItems[index_1].customPrice = data.customPrice;
                        }
                        _this.cart.orders[_this.cart.orders.length - 1].orderItems[index_1].discountPercent = data.discountPercent;
                        _this.cart.orders[_this.cart.orders.length - 1].orderItems[index_1].quantity = data.quantity;
                        _this.cart.orders[_this.cart.orders.length - 1].orderItems[index_1].newPrice = data.newPrice;
                        _this.cart.orders[_this.cart.orders.length - 1].orderItems[index_1].marg_pr = data.marg_pr;
                        _this.cart.orders[_this.cart.orders.length - 1].orderItems[index_1].marg_kr = data.marg_kr;
                        _this.cart.orders[_this.cart.orders.length - 1].orderItems[index_1].tax = data.tax;
                    }
                    ;
                });
                modal.present();
            }
        }
    };
    OrderFormationPage.prototype.getItems = function (ev) {
        this.articles = this.articles_super;
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.articles = this.articles.filter(function (article) {
                return (article.product.toLowerCase().indexOf(val.toLowerCase()) > -1 || article.price.toLowerCase().indexOf(val.toLowerCase()) > -1
                    || article.suppArtNr.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    OrderFormationPage.prototype.momentFunc = function (date, format) {
        return __WEBPACK_IMPORTED_MODULE_4_moment__(date).format(format);
    };
    OrderFormationPage.prototype.back = function () {
        this.viewCtrl.dismiss(this.cart);
    };
    return OrderFormationPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
], OrderFormationPage.prototype, "content", void 0);
OrderFormationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-order-formation',template:/*ion-inline-start:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/order-formation/order-formation.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-buttons left>\n            <button ion-button icon-only (click)="back()">\n                <ion-icon name="arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title *ngIf="article_group"><span *ngIf="article_group.name">{{article_group.name}}</span>\n            <span *ngIf="!article_group.name">All Groups</span>\n        </ion-title>\n        <ion-buttons end>\n\n\n            <div style="float: left" (click)="goToCart()">\n                <ion-icon style="font-size: 30px" color="white" name="cart"></ion-icon>\n                <div style="float: right;border-radius: 50%;background-color: red;width: 20px;height: 20px;padding: 3px 6px;color: #fff;">\n                    {{cart.orders.length}}\n                </div>\n            </div>\n        </ion-buttons>\n\n    </ion-navbar>\n\n    <div style="width: 90%; display: block">\n    <ion-searchbar (ionInput)="getItems($event)" placeholder="Search by article\'s name, number and price"></ion-searchbar>\n    </div>\n    <div style="position: absolute; display: block;margin-left: 91%;margin-top: -42px;" (click)="listingFilter()">\n        <ion-icon style="font-size: 30px" color="newcolor" name="funnel"></ion-icon>\n\n    </div>\n\n    <div *ngIf="cart.orders.length > 0" class="order_header">\n        Week {{momentFunc(cart.orders[cart.orders.length - 1].deliveryDate, \'w\')}}\n        {{momentFunc(cart.orders[cart.orders.length - 1].deliveryDate, \'dddd\')}} - {{cart.orders[cart.orders.length-1].orderTypeName}}\n        <!--{{new_order.name}}-->\n    </div>\n</ion-header>\n\n\n<ion-content>\n\n    <ion-list *ngIf="articles">\n        <ion-item-sliding #item *ngFor="let article of articles; let item_index = index">\n            <button ion-item (click)="addArticle(article)">\n                <ion-avatar\n                        style="width: 100% !important; height: 100% !important; max-height: 60px !important; max-width: 60px !important;"\n                        item-start>\n                    <img style="width: 100px; height: 60px; border-radius: 10%" src="{{article.img66}}">\n                </ion-avatar>\n                <p style="font-size: 20px; margin: 0; margin-bottom: 4px; color: #0866c6">{{article.product}}</p>\n                <p style="font-size: 14px; margin: 0;">Article #: {{article.suppArtNr}}</p>\n                <p style="font-size: 14px; margin: 0;">Price: {{article.price}} </p>\n                <p style="font-size: 14px; margin: 0;">Listing: {{article.listing}}</p>\n                <span *ngIf="article.quantity != 0" item-end style="border-radius: 50%;background-color: red;color: #fff;font-weight: bold;padding: 10px 15px;width: 40px;height: 40px;">\n                    {{article.quantity}}\n                </span>\n            </button>\n\n            <ion-item-options side="right">\n                <button ion-button color="danger" (click)="reset(item_index, article, item)">Reset</button>\n                <button ion-button color="main" (click)="calculator(item_index, article, item)">Details</button>\n            </ion-item-options>\n        </ion-item-sliding>\n    </ion-list>\n\n\n\n\n\n    <ion-fab right bottom>\n        <button ion-fab mini (click)="addOrder()">\n            <ion-icon name="add"></ion-icon>\n        </button>\n    </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/order-formation/order-formation.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
        __WEBPACK_IMPORTED_MODULE_2__providers_order_order__["a" /* OrderProvider */]])
], OrderFormationPage);

//# sourceMappingURL=order-formation.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderFormationAddOrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderFormationAddOrderPage = (function () {
    function OrderFormationAddOrderPage(navCtrl, viewCtrl, alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.order_types = [];
        this.o_t = [];
        this.params = {
            deliveryDate: null,
            orderTypeId: null,
            orderTypeName: null,
            orderItems: []
        };
    }
    OrderFormationAddOrderPage.prototype.ionViewWillEnter = function () {
        for (var key in this.navParams.data.order_types) {
            this.order_types.push(this.navParams.data.order_types[key]);
            this.o_t.push(this.navParams.data.order_types[key]);
        }
        this.order_types = this.order_types.map(function (order_type) {
            return {
                value: order_type.id,
                text: order_type.name
            };
        });
    };
    OrderFormationAddOrderPage.prototype.createOrder = function () {
        var _this = this;
        if (this.params.deliveryDate != null && this.params.orderTypeId != null) {
            var found = this.o_t.findIndex(function (order_type) { return order_type.id == _this.params.orderTypeId; });
            this.params.orderTypeName = this.o_t[found].name;
            this.viewCtrl.dismiss(this.params);
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'All fields required',
                subTitle: 'Please fill out all fields',
                buttons: ['Ok']
            });
            alert_1.present();
        }
    };
    OrderFormationAddOrderPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return OrderFormationAddOrderPage;
}());
OrderFormationAddOrderPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-order-formation-add-order',template:/*ion-inline-start:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/order-formation-add-order/order-formation-add-order.html"*/'<ion-content class="main-view">\n    <div class="overlay" (click)="dismiss()"></div>\n    <div class="modal_content">\n        <h3 style="text-align: center">Create New Order</h3><br/>\n        <div style="background-color: #f4f4f4; padding-left: 17px; padding-top: 2.5%; padding-bottom: 2.5%; font-weight: bold; border-bottom: 1px solid #A9A9A9">\n            Delivery Date\n        </div>\n        <mbsc-form [options]="{theme: \'ios\'}">\n            <mbsc-input mbsc-calendar\n                        [mbsc-options]="{weekCounter: \'year\', setOnDayTap: true, firstDay: 1}"\n                        placeholder="Enter delivery day"\n                        [(ngModel)]="params.deliveryDate"></mbsc-input>\n        </mbsc-form>\n\n        <div style="background-color: #f4f4f4; padding-left: 17px; padding-top: 2.5%; padding-bottom: 2.5%; font-weight: bold; border-bottom: 1px solid #A9A9A9">\n            Order Type\n        </div>\n        <mbsc-form [options]="{theme: \'ios\'}">\n            <mbsc-select [(ngModel)]="params.orderTypeId" [options]="{ minWidth: 200, closeOnOverlayTap: false, focusOnClose: false, buttons: []}"\n                         [data]="order_types">\n            </mbsc-select>\n        </mbsc-form>\n        <br/>\n        <button style="width: 45%; margin-left: 2%; margin-right: 2%" round color="main" ion-button (click)="dismiss()">\n            Cancel\n        </button>\n        <button style="width: 45%; margin-left: 2%; margin-right: 2%" round color="main" ion-button (click)="createOrder()">\n            Create\n        </button>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/order-formation-add-order/order-formation-add-order.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */]])
], OrderFormationAddOrderPage);

//# sourceMappingURL=order-formation-add-order.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderCartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_send_order_send__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_order_order__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__order_cart_edit_order_cart_edit__ = __webpack_require__(430);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrderCartPage = (function () {
    function OrderCartPage(navCtrl, modalCtrl, _orderProvider, loader, toastCtrl, viewCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this._orderProvider = _orderProvider;
        this.loader = loader;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
    }
    OrderCartPage.prototype.ionViewWillEnter = function () {
        this.cart = this.navParams.data.cart;
        this.store = this.navParams.data.store;
    };
    OrderCartPage.prototype.sendOrder = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__order_send_order_send__["a" /* OrderSendPage */], {
            store: this.store
        });
        modal.onDidDismiss(function (data) {
            if (data != null) {
                _this.cart.shareEmails = data.join();
                var loader_1 = _this.loader.create({
                    content: 'Sending Order'
                });
                loader_1.present().then(function () {
                    _this._orderProvider.sendOrder(_this.cart, _this.store)
                        .subscribe(function (order) {
                        var toast = _this.toastCtrl.create({
                            message: 'Order sent successfully',
                            duration: 3000,
                            position: 'middle'
                        });
                        toast.present();
                        _this.navCtrl.popTo(_this.navCtrl.getByIndex(_this.navCtrl.length() - 3));
                        loader_1.dismissAll();
                    });
                });
            }
        });
        modal.present();
    };
    OrderCartPage.prototype.emptyCart = function () {
        this.cart = {
            orders: [],
            shareEmails: ""
        };
    };
    OrderCartPage.prototype.deleteOrderItem = function (order, orderItem) {
        this.cart.orders[order].orderItems.splice(orderItem, 1);
        if (this.cart.orders[order].orderItems.length == 0) {
            this.cart.orders.splice(order, 1);
        }
    };
    OrderCartPage.prototype.editOrderItem = function (order, orderItem, item) {
        var _this = this;
        item.close();
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__order_cart_edit_order_cart_edit__["a" /* OrderCartEditPage */], { item: this.cart.orders[order].orderItems[orderItem] });
        modal.onDidDismiss(function (data) {
            if (data != false) {
                _this.cart.orders[order].orderItems[orderItem].consumerPrice = data.consumerPrice;
                if (_this.cart.orders[order].orderItems[orderItem].price != data.customPrice) {
                    _this.cart.orders[order].orderItems[orderItem].customPrice = data.customPrice;
                }
                _this.cart.orders[order].orderItems[orderItem].discountPercent = data.discountPercent;
                _this.cart.orders[order].orderItems[orderItem].quantity = data.quantity;
                _this.cart.orders[order].orderItems[orderItem].newPrice = data.newPrice;
                _this.cart.orders[order].orderItems[orderItem].marg_pr = data.marg_pr;
                _this.cart.orders[order].orderItems[orderItem].marg_kr = data.marg_kr;
                _this.cart.orders[order].orderItems[orderItem].tax = data.tax;
            }
        });
        modal.present();
    };
    OrderCartPage.prototype.momentFunc = function (date, format) {
        return __WEBPACK_IMPORTED_MODULE_4_moment__(date).format(format);
    };
    OrderCartPage.prototype.back = function () {
        this.viewCtrl.dismiss(this.cart);
    };
    return OrderCartPage;
}());
OrderCartPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-order-cart',template:/*ion-inline-start:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/order-cart/order-cart.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-buttons left>\n            <button ion-button icon-only (click)="back()">\n                <ion-icon name="arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title>\n            Cart\n        </ion-title>\n        <ion-buttons end>\n            <div (click)="sendOrder()">\n                <ion-icon style="font-size: 30px; margin-right: 15px" color="white" name="mail"></ion-icon>\n            </div>\n        </ion-buttons>\n\n    </ion-navbar>\n    <div style="height: 40px">\n        <div (click)="emptyCart()" style="font-size: 16px; padding: 10px; color: #0866c6">Empty Cart</div>\n\n    </div>\n</ion-header>\n\n<ion-content>\n    <span *ngIf="cart">\n        <span *ngFor="let order of cart.orders; let order_index = index">\n            <div class="order_header">Week {{momentFunc(order.deliveryDate, \'w\')}} {{momentFunc(order.deliveryDate, \'dddd\')}} - {{order.orderTypeName}}</div>\n            <ion-list>\n                <ion-item-sliding #item *ngFor="let orderItem of order.orderItems; let item_index = index">\n                    <ion-item>\n                        <ion-avatar\n                                style="width: 100% !important; height: 100% !important; max-height: 60px !important; max-width: 60px !important;"\n                                item-start>\n                            <img style="width: 100px; height: 60px; border-radius: 10%" src="{{orderItem.img66}}">\n                        </ion-avatar>\n                        <p style="font-size: 20px; margin: 0; margin-bottom: 4px; color: #0866c6">{{orderItem.product}}</p>\n                        <p style="font-size: 14px; margin: 0;">Article #: {{orderItem.suppArtNr}} Listing: {{orderItem.listing}}</p>\n                        <p style="font-size: 14px; margin: 0;">Price: <span *ngIf="orderItem.customPrice == null">{{orderItem.price | number : \'1.2-2\'}}</span>\n                           <span *ngIf="orderItem.customPrice != null">{{orderItem.customPrice | number : \'1.2-2\'}}</span> - {{orderItem.consumerPrice | number : \'1.2-2\'}}</p>\n                        <p style="font-size: 14px; margin: 0;">Marginal: {{orderItem.marg_pr | number : \'1.2-2\'}}% - {{orderItem.marg_kr | number : \'1.2-2\'}}kr.</p>\n                        <span item-end\n                              style="border-radius: 50%;background-color: red;color: #fff;font-weight: bold;padding: 10px 15px;width: 40px;height: 40px;">\n                            {{orderItem.quantity}}\n                        </span>\n                    </ion-item>\n\n                    <ion-item-options side="right">\n                        <button ion-button color="danger" (click)="deleteOrderItem(order_index, item_index)">Delete</button>\n                        <button ion-button color="primary" (click)="editOrderItem(order_index, item_index, item)">Edit</button>\n                    </ion-item-options>\n                </ion-item-sliding>\n            </ion-list>\n        </span>\n    </span>\n</ion-content>\n'/*ion-inline-end:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/order-cart/order-cart.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_order_order__["a" /* OrderProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */]])
], OrderCartPage);

//# sourceMappingURL=order-cart.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderSendPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_globals__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrderSendPage = (function () {
    function OrderSendPage(navCtrl, viewCtrl, http, storage, alertCtrl, actionSheetCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.http = http;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navParams = navParams;
        this.email_list = [];
    }
    OrderSendPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.store = this.navParams.data.store;
        this.storage.get('user').then(function (user) {
            _this.user = user;
            var params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]()
                .append('id', _this.store.id)
                .append('expand', 'storeTags.tag,storeContacts,category,customFieldDatas');
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__providers_globals__["a" /* Globals */].api + 'app/store/view', { params: params }).subscribe(function (store) {
                _this.contacts = store.storeContacts;
            });
        });
    };
    OrderSendPage.prototype.sendOrder = function () {
        this.viewCtrl.dismiss(this.email_list);
    };
    OrderSendPage.prototype.addContact = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Add Contact',
            buttons: [
                {
                    text: 'Add from contacts',
                    handler: function () {
                        _this.addFromContacts();
                    }
                },
                {
                    text: 'Add manually',
                    handler: function () {
                        _this.addManually();
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        actionSheet.present();
    };
    OrderSendPage.prototype.addFromContacts = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Add from contacts');
        for (var key in this.contacts) {
            alert.addInput({
                type: 'checkbox',
                label: this.contacts[key].name,
                value: this.contacts[key].email
            });
        }
        alert.addButton('Cancel');
        alert.addButton({
            text: 'Okay',
            handler: function (data) {
                for (var i in data) {
                    _this.email_list.push(data[i]);
                }
            }
        });
        alert.present();
    };
    OrderSendPage.prototype.addManually = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Login',
            inputs: [
                {
                    name: 'email',
                    placeholder: 'Email'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Add',
                    handler: function (data) {
                        _this.email_list.push(data.email);
                    }
                }
            ]
        });
        alert.present();
    };
    OrderSendPage.prototype.back = function () {
        this.viewCtrl.dismiss();
    };
    return OrderSendPage;
}());
OrderSendPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-order-send',template:/*ion-inline-start:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/order-send/order-send.html"*/'\n\n<ion-header>\n\n    <ion-navbar>\n\n        <ion-buttons left>\n            <button ion-button icon-only (click)="back()">\n                <ion-icon name="arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title *ngIf="article_group"><span *ngIf="article_group.name">{{article_group.name}}</span>\n            <span *ngIf="!article_group.name">Send Order</span>\n        </ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="sendOrder()">\n                Send\n            </button>\n        </ion-buttons>\n\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n        <div style="margin-left: 2%; margin-right: 2%">\n            <ion-badge *ngFor="let mail of email_list" style="margin: 1%">{{mail}}</ion-badge>\n        </div>\n\n    <ion-fab right bottom>\n        <button ion-fab mini (click)="addContact()">\n            <ion-icon name="add"></ion-icon>\n        </button>\n    </ion-fab>\n</ion-content>\n\n'/*ion-inline-end:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/order-send/order-send.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["w" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* NavParams */]])
], OrderSendPage);

//# sourceMappingURL=order-send.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(storage) {
        var _this = this;
        this.storage = storage;
        this.storage.get('user').then(function (currentUser) {
            if (currentUser) {
                _this.init(currentUser);
            }
        });
    }
    AuthService.prototype.init = function (user) {
        this.token = user.auth_token;
        this.seller = user.seller;
        this.accesses = user.accesses;
    };
    AuthService.prototype.getToken = function () {
        var _this = this;
        var promise = this.storage.get('user').then(function (currentUser) {
            _this.token = currentUser && currentUser.auth_token;
            return _this.token;
        });
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].fromPromise(promise);
    };
    AuthService.prototype.getSeller = function () {
        return this.seller;
    };
    AuthService.prototype.getAccesses = function () {
        return this.accesses;
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */]])
], AuthService);

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderCartEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderCartEditPage = (function () {
    function OrderCartEditPage(navCtrl, viewCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
    }
    OrderCartEditPage.prototype.ionViewWillEnter = function () {
        this.article = this.navParams.data.item;
        this.price = parseFloat(this.article.price);
        this.quantity = parseInt(this.article.quantity);
        this.tax = parseFloat(this.article.tax);
        this.newPrice = parseFloat(this.article.newPrice);
        this.consumerPrice = parseFloat(this.article.consumerPrice);
        this.discount = 0;
        this.changePrice();
        this.changeConsumerPrice();
        this.content.resize();
    };
    OrderCartEditPage.prototype.changePrice = function () {
        var _this = this;
        setTimeout(function () {
            _this.discount = (_this.price - _this.newPrice) * 100 / _this.price;
        }, 100);
    };
    OrderCartEditPage.prototype.changeNewPrice = function () {
        var _this = this;
        setTimeout(function () {
            _this.discount = (_this.price - _this.newPrice) * 100 / _this.price;
            _this.marg_kr = (_this.consumerPrice * 1 / (1 + _this.tax / 100)) - _this.newPrice;
            _this.marg_pr = (((_this.consumerPrice * 1 / (1 + _this.tax / 100))
                - _this.newPrice) / (_this.consumerPrice * 1 / (1 + _this.tax / 100))) * 100;
        }, 100);
    };
    OrderCartEditPage.prototype.changeConsumerPrice = function () {
        var _this = this;
        setTimeout(function () {
            _this.marg_kr = (_this.consumerPrice * 1 / (1 + _this.tax / 100)) - _this.newPrice;
            _this.marg_pr = (((_this.consumerPrice * 1 / (1 + _this.tax / 100))
                - _this.newPrice) / (_this.consumerPrice * 1 / (1 + _this.tax / 100))) * 100;
        }, 100);
    };
    OrderCartEditPage.prototype.changeMargPr = function () {
        var _this = this;
        setTimeout(function () {
            var value = _this.newPrice / (1 - _this.marg_pr / 100);
            // plus tax
            value = value * (1 + _this.tax / 100);
            _this.consumerPrice = (value * 100) / 100;
            _this.marg_kr = (_this.consumerPrice * 1 / (1 + _this.tax / 100)) - _this.newPrice;
        }, 100);
    };
    OrderCartEditPage.prototype.changeMargKr = function () {
        var _this = this;
        setTimeout(function () {
            var value = _this.newPrice + _this.marg_kr;
            value = value * (1 + _this.tax / 100);
            _this.consumerPrice = (value * 100) / 100;
            _this.marg_pr = (((_this.consumerPrice * 1 / (1 + _this.tax / 100))
                - _this.newPrice) / (_this.consumerPrice * 1 / (1 + _this.tax / 100))) * 100;
        });
    };
    // public changeDiscount() {
    //     setTimeout(() => {
    //         let value = this.newPrice + this.marg_kr;
    //         value = value * (1 + this.tax / 100);
    //         this.consumerPrice = (value * 100) / 100;
    //
    //         this.marg_pr = (((this.consumerPrice * 1 / (1 + this.tax / 100))
    //             - this.newPrice) / (this.consumerPrice * 1 / (1 + this.tax / 100))) * 100;
    //     })
    // }
    OrderCartEditPage.prototype.back = function () {
        this.viewCtrl.dismiss(false);
    };
    OrderCartEditPage.prototype.save = function () {
        this.viewCtrl.dismiss({
            customPrice: this.price,
            newPrice: this.newPrice,
            consumerPrice: this.consumerPrice,
            marg_pr: this.marg_pr,
            marg_kr: this.marg_kr,
            discount: this.discount,
            quantity: this.quantity,
            tax: this.tax,
        });
    };
    return OrderCartEditPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
], OrderCartEditPage.prototype, "content", void 0);
OrderCartEditPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-order-cart-edit',template:/*ion-inline-start:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/order-cart-edit/order-cart-edit.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="back()">\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      Calculator\n    </ion-title>\n\n    <ion-buttons right>\n      <button ion-button icon-only (click)="save()">\n        Save\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf="article">\n    <div style="margin:  0 auto;text-align:  center;">\n      <img src="{{article.img66}}" style="\n    height: 150px;\n    margin: 10px;\n    padding: 5px;\n">\n      <p color="newcolor" style="\n        color: #0866c6;\n    font-size: 20px;\n    margin: 5px;\n">{{article.product}}</p>\n      <p style="\n    display: inline;\n    margin:  5px;\n">Article #: {{article.suppArtNr}}</p>\n      <p style="\n    margin:  5px;\n    display:  inline;\n">Listing: {{article.listing}}</p>\n    </div>\n  </div><br />\n\n  <div style="background-color: #f4f4f4; padding-left: 17px; padding-top: 2.5%; padding-bottom: 2.5%; font-weight: bold; border-bottom: 1px solid #A9A9A9">\n    O-Netto\n  </div>\n  <mbsc-form [options]="{theme: \'ios\'}">\n    <input class="input-form" [(ngModel)]="price" mbsc-numpad-decimal\n           [mbsc-options]="{theme: \'ios\',display: \'bottom\',template: \'dddd.dd\',max: 9999.99,defaultValue: null,fill: \'ltr\',setText: \'Save\'}" placeholder="Please select..."\n           (change)="changePrice()"\n    />\n  </mbsc-form>\n  <div style="background-color: #f4f4f4; padding-left: 17px; padding-top: 2.5%; padding-bottom: 2.5%; font-weight: bold; border-bottom: 1px solid #A9A9A9">\n    X-Netto\n  </div>\n  <mbsc-form [options]="{theme: \'ios\'}">\n    <input class="input-form" [(ngModel)]="newPrice" mbsc-numpad-decimal\n           [mbsc-options]="{theme: \'ios\',display: \'bottom\',template: \'dddd.dd\',max: 9999.99,defaultValue: null,fill: \'ltr\',setText: \'Save\'}" placeholder="Please select..."\n           (change)="changeNewPrice()"\n    />\n  </mbsc-form>\n  <div style="background-color: #f4f4f4; padding-left: 17px; padding-top: 2.5%; padding-bottom: 2.5%; font-weight: bold; border-bottom: 1px solid #A9A9A9">\n    X-Utpris\n  </div>\n  <mbsc-form [options]="{theme: \'ios\'}">\n    <input class="input-form" [(ngModel)]="consumerPrice" mbsc-numpad-decimal\n           [mbsc-options]="{theme: \'ios\',display: \'bottom\',template: \'dddd.dd\',max: 9999.99,defaultValue: null,fill: \'ltr\',setText: \'Save\'}" placeholder="Please select..."\n           (change)="changeConsumerPrice()"\n    />\n  </mbsc-form>\n  <div style="background-color: #f4f4f4; padding-left: 17px; padding-top: 2.5%; padding-bottom: 2.5%; font-weight: bold; border-bottom: 1px solid #A9A9A9">\n    Marg %\n  </div>\n  <mbsc-form [options]="{theme: \'ios\'}">\n    <input class="input-form" [(ngModel)]="marg_pr" mbsc-numpad-decimal\n           [mbsc-options]="{theme: \'ios\',display: \'bottom\',template: \'dddd.dd\',max: 9999.99,defaultValue: null,fill: \'ltr\',setText: \'Save\'}" placeholder="Please select..."\n           (change)="changeMargPr()"\n    />\n  </mbsc-form>\n  <div style="background-color: #f4f4f4; padding-left: 17px; padding-top: 2.5%; padding-bottom: 2.5%; font-weight: bold; border-bottom: 1px solid #A9A9A9">\n    Marg kr\n  </div>\n  <mbsc-form [options]="{theme: \'ios\'}">\n    <input class="input-form" [(ngModel)]="marg_kr" mbsc-numpad-decimal\n           [mbsc-options]="{theme: \'ios\',display: \'bottom\',template: \'dddd.dd\',max: 9999.99,defaultValue: null,fill: \'ltr\',setText: \'Save\'}" placeholder="Please select..."\n           (change)="changeMargKr()"\n    />\n  </mbsc-form>\n  <div style="background-color: #f4f4f4; padding-left: 17px; padding-top: 2.5%; padding-bottom: 2.5%; font-weight: bold; border-bottom: 1px solid #A9A9A9">\n    Rabbat\n  </div>\n  <mbsc-form [options]="{theme: \'ios\'}">\n    <input class="input-form" [(ngModel)]="discount" mbsc-numpad-decimal\n           [mbsc-options]="{theme: \'ios\',display: \'bottom\',template: \'dddd.dd\',max: 9999.99,defaultValue: null,fill: \'ltr\',setText: \'Save\'}" placeholder="Please select..."\n\n    />\n  </mbsc-form>\n  <div style="background-color: #f4f4f4; padding-left: 17px; padding-top: 2.5%; padding-bottom: 2.5%; font-weight: bold; border-bottom: 1px solid #A9A9A9">\n    Antal\n  </div>\n  <mbsc-form [options]="{theme: \'ios\'}">\n    <input class="input-form" [(ngModel)]="quantity" mbsc-numpad-decimal\n           [mbsc-options]="{theme: \'ios\',display: \'bottom\',scale: 0,max: 9999,min: -9999}" placeholder="Please select..."/>\n  </mbsc-form>\n  <p style="font-size: 18px;font-weight: bold;margin-left: 16px;">TAX - {{this.tax}}%</p>\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/order-cart-edit/order-cart-edit.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */]])
], OrderCartEditPage);

//# sourceMappingURL=order-cart-edit.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderCalculatorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderCalculatorPage = (function () {
    function OrderCalculatorPage(navCtrl, viewCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
    }
    OrderCalculatorPage.prototype.ionViewWillEnter = function () {
        this.article = this.navParams.data.article;
        this.price = parseFloat(this.article.price);
        this.quantity = parseInt(this.article.quantity);
        this.tax = parseFloat(this.article.tax);
        this.newPrice = parseFloat(this.article.price);
        this.consumerPrice = 0;
        this.discount = 0;
        console.log(this.tax);
        this.content.resize();
    };
    OrderCalculatorPage.prototype.changePrice = function () {
        var _this = this;
        setTimeout(function () {
            _this.discount = (_this.price - _this.newPrice) * 100 / _this.price;
        }, 100);
    };
    OrderCalculatorPage.prototype.changeNewPrice = function () {
        var _this = this;
        setTimeout(function () {
            _this.discount = (_this.price - _this.newPrice) * 100 / _this.price;
            _this.marg_kr = (_this.consumerPrice * 1 / (1 + _this.tax / 100)) - _this.newPrice;
            _this.marg_pr = (((_this.consumerPrice * 1 / (1 + _this.tax / 100))
                - _this.newPrice) / (_this.consumerPrice * 1 / (1 + _this.tax / 100))) * 100;
        }, 100);
    };
    OrderCalculatorPage.prototype.changeConsumerPrice = function () {
        var _this = this;
        setTimeout(function () {
            _this.marg_kr = (_this.consumerPrice * 1 / (1 + _this.tax / 100)) - _this.newPrice;
            _this.marg_pr = (((_this.consumerPrice * 1 / (1 + _this.tax / 100))
                - _this.newPrice) / (_this.consumerPrice * 1 / (1 + _this.tax / 100))) * 100;
        }, 100);
    };
    OrderCalculatorPage.prototype.changeMargPr = function () {
        var _this = this;
        setTimeout(function () {
            var value = _this.newPrice / (1 - _this.marg_pr / 100);
            // plus tax
            value = value * (1 + _this.tax / 100);
            _this.consumerPrice = (value * 100) / 100;
            _this.marg_kr = (_this.consumerPrice * 1 / (1 + _this.tax / 100)) - _this.newPrice;
        }, 100);
    };
    OrderCalculatorPage.prototype.changeMargKr = function () {
        var _this = this;
        setTimeout(function () {
            var value = _this.newPrice + _this.marg_kr;
            value = value * (1 + _this.tax / 100);
            _this.consumerPrice = (value * 100) / 100;
            _this.marg_pr = (((_this.consumerPrice * 1 / (1 + _this.tax / 100))
                - _this.newPrice) / (_this.consumerPrice * 1 / (1 + _this.tax / 100))) * 100;
        });
    };
    // public changeDiscount() {
    //     setTimeout(() => {
    //         let value = this.newPrice + this.marg_kr;
    //         value = value * (1 + this.tax / 100);
    //         this.consumerPrice = (value * 100) / 100;
    //
    //         this.marg_pr = (((this.consumerPrice * 1 / (1 + this.tax / 100))
    //             - this.newPrice) / (this.consumerPrice * 1 / (1 + this.tax / 100))) * 100;
    //     })
    // }
    OrderCalculatorPage.prototype.back = function () {
        this.viewCtrl.dismiss(false);
    };
    OrderCalculatorPage.prototype.save = function () {
        this.viewCtrl.dismiss({
            customPrice: this.price,
            newPrice: this.newPrice,
            consumerPrice: this.consumerPrice,
            marg_pr: this.marg_pr,
            marg_kr: this.marg_kr,
            discount: this.discount,
            quantity: this.quantity,
            tax: this.tax,
        });
    };
    return OrderCalculatorPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
], OrderCalculatorPage.prototype, "content", void 0);
OrderCalculatorPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-order-calculator',template:/*ion-inline-start:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/order-calculator/order-calculator.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-buttons left>\n            <button ion-button icon-only (click)="back()">\n                <ion-icon name="arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title>\n            Calculator\n        </ion-title>\n\n        <ion-buttons right>\n            <button ion-button icon-only (click)="save()">\n                Save\n            </button>\n        </ion-buttons>\n\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n<div *ngIf="article">\n    <div style="margin:  0 auto;text-align:  center;">\n        <img src="{{article.img66}}" style="\n    height: 150px;\n    margin: 10px;\n    padding: 5px;\n">\n        <p color="newcolor" style="\n        color: #0866c6;\n    font-size: 20px;\n    margin: 5px;\n">{{article.product}}</p>\n        <p style="\n    display: inline;\n    margin:  5px;\n">Article #: {{article.suppArtNr}}</p>\n        <p style="\n    margin:  5px;\n    display:  inline;\n">Listing: {{article.listing}}</p>\n    </div>\n</div><br />\n\n    <div style="background-color: #f4f4f4; padding-left: 17px; padding-top: 2.5%; padding-bottom: 2.5%; font-weight: bold; border-bottom: 1px solid #A9A9A9">\n        O-Netto\n    </div>\n    <mbsc-form [options]="{theme: \'ios\'}">\n        <input class="input-form" [(ngModel)]="price" mbsc-numpad-decimal\n               [mbsc-options]="{theme: \'ios\',display: \'bottom\',template: \'dddd.dd\',max: 9999.99,defaultValue: null,fill: \'ltr\',setText: \'Save\'}" placeholder="Please select..."\n               (change)="changePrice()"\n        />\n    </mbsc-form>\n    <div style="background-color: #f4f4f4; padding-left: 17px; padding-top: 2.5%; padding-bottom: 2.5%; font-weight: bold; border-bottom: 1px solid #A9A9A9">\n        X-Netto\n    </div>\n    <mbsc-form [options]="{theme: \'ios\'}">\n        <input class="input-form" [(ngModel)]="newPrice" mbsc-numpad-decimal\n               [mbsc-options]="{theme: \'ios\',display: \'bottom\',template: \'dddd.dd\',max: 9999.99,defaultValue: null,fill: \'ltr\',setText: \'Save\'}" placeholder="Please select..."\n               (change)="changeNewPrice()"\n        />\n    </mbsc-form>\n    <div style="background-color: #f4f4f4; padding-left: 17px; padding-top: 2.5%; padding-bottom: 2.5%; font-weight: bold; border-bottom: 1px solid #A9A9A9">\n        X-Utpris\n    </div>\n    <mbsc-form [options]="{theme: \'ios\'}">\n        <input class="input-form" [(ngModel)]="consumerPrice" mbsc-numpad-decimal\n               [mbsc-options]="{theme: \'ios\',display: \'bottom\',template: \'dddd.dd\',max: 9999.99,defaultValue: null,fill: \'ltr\',setText: \'Save\'}" placeholder="Please select..."\n               (change)="changeConsumerPrice()"\n        />\n    </mbsc-form>\n    <div style="background-color: #f4f4f4; padding-left: 17px; padding-top: 2.5%; padding-bottom: 2.5%; font-weight: bold; border-bottom: 1px solid #A9A9A9">\n        Marg %\n    </div>\n    <mbsc-form [options]="{theme: \'ios\'}">\n        <input class="input-form" [(ngModel)]="marg_pr" mbsc-numpad-decimal\n               [mbsc-options]="{theme: \'ios\',display: \'bottom\',template: \'dddd.dd\',max: 9999.99,defaultValue: null,fill: \'ltr\',setText: \'Save\'}" placeholder="Please select..."\n               (change)="changeMargPr()"\n        />\n    </mbsc-form>\n    <div style="background-color: #f4f4f4; padding-left: 17px; padding-top: 2.5%; padding-bottom: 2.5%; font-weight: bold; border-bottom: 1px solid #A9A9A9">\n        Marg kr\n    </div>\n    <mbsc-form [options]="{theme: \'ios\'}">\n        <input class="input-form" [(ngModel)]="marg_kr" mbsc-numpad-decimal\n               [mbsc-options]="{theme: \'ios\',display: \'bottom\',template: \'dddd.dd\',max: 9999.99,defaultValue: null,fill: \'ltr\',setText: \'Save\'}" placeholder="Please select..."\n               (change)="changeMargKr()"\n        />\n    </mbsc-form>\n    <div style="background-color: #f4f4f4; padding-left: 17px; padding-top: 2.5%; padding-bottom: 2.5%; font-weight: bold; border-bottom: 1px solid #A9A9A9">\n        Rabbat\n    </div>\n    <mbsc-form [options]="{theme: \'ios\'}">\n        <input class="input-form" [(ngModel)]="discount" mbsc-numpad-decimal\n               [mbsc-options]="{theme: \'ios\',display: \'bottom\',template: \'dddd.dd\',max: 9999.99,defaultValue: null,fill: \'ltr\',setText: \'Save\'}" placeholder="Please select..."\n\n        />\n    </mbsc-form>\n    <div style="background-color: #f4f4f4; padding-left: 17px; padding-top: 2.5%; padding-bottom: 2.5%; font-weight: bold; border-bottom: 1px solid #A9A9A9">\n        Antal\n    </div>\n    <mbsc-form [options]="{theme: \'ios\'}">\n        <input class="input-form" [(ngModel)]="quantity" mbsc-numpad-decimal\n               [mbsc-options]="{theme: \'ios\',display: \'bottom\',scale: 0,max: 9999,min: -9999}" placeholder="Please select..."/>\n    </mbsc-form>\n    <p style="font-size: 18px;font-weight: bold;margin-left: 16px;">TAX - {{this.tax}}%</p>\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/order-calculator/order-calculator.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */]])
], OrderCalculatorPage);

//# sourceMappingURL=order-calculator.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreDetailsHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_order_order__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_history_details_order_history_details__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StoreDetailsHistoryPage = (function () {
    function StoreDetailsHistoryPage(navCtrl, _orderProvider, loader, app, navParams) {
        this.navCtrl = navCtrl;
        this._orderProvider = _orderProvider;
        this.loader = loader;
        this.app = app;
        this.navParams = navParams;
        this.objectKeys = Object.keys;
    }
    StoreDetailsHistoryPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.store = this.navParams.data;
        var loader = this.loader.create({
            content: 'Loading order history'
        });
        loader.present().then(function () {
            _this._orderProvider.getOrderHistory({
                expand: 'orderType0,orderTypeStatus0,store,orderItems.article',
                storeId: _this.store.id
            })
                .subscribe(function (orderHistory) {
                _this.orderHistorySuper = orderHistory;
                _this.orderHistory = orderHistory;
                _this.orderHistory = _this.groupBy(_this.orderHistory, 'deliveryDate');
                loader.dismissAll();
            });
        });
    };
    StoreDetailsHistoryPage.prototype.orderDetails = function (order) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__order_history_details_order_history_details__["a" /* OrderHistoryDetailsPage */], order);
    };
    StoreDetailsHistoryPage.prototype.groupBy = function (array, prop) {
        return array.reduce(function (groups, item) {
            var val = item[prop];
            groups[val] = groups[val] || [];
            groups[val].push(item);
            return groups;
        }, {});
    };
    StoreDetailsHistoryPage.prototype.momentFunc = function (date, format) {
        return __WEBPACK_IMPORTED_MODULE_4_moment__(date).format(format);
    };
    StoreDetailsHistoryPage.prototype.back = function () {
        this.app.navPop();
    };
    StoreDetailsHistoryPage.prototype.getItems = function (ev) {
        this.orderFormation = this.orderHistorySuper;
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.orderFormation = this.orderFormation.filter(function (article) {
                if (article.orderType0) {
                    return (article.note.toLowerCase().indexOf(val.toLowerCase()) > -1 || article.orderType0.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
                }
            });
        }
        this.orderHistory = this.groupBy(this.orderFormation, 'deliveryDate');
    };
    return StoreDetailsHistoryPage;
}());
StoreDetailsHistoryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-store-details-history',template:/*ion-inline-start:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/store-details-history/store-details-history.html"*/'<ion-header>\n    <ion-navbar>\n        <!--<ion-buttons left>-->\n            <!--<button ion-button icon-only (click)="back()">-->\n                <!--<ion-icon name="arrow-back"></ion-icon>-->\n            <!--</button>-->\n        <!--</ion-buttons>-->\n        <ion-title>\n            Order History\n        </ion-title>\n    </ion-navbar>\n    <ion-searchbar (ionInput)="getItems($event)" placeholder="Search by order type and order note"></ion-searchbar>\n</ion-header>\n\n<ion-content>\n    <span *ngIf="orderHistory">\n        <span *ngFor="let key of objectKeys(orderHistory)">\n            <div class="order_header">Week {{momentFunc(key, \'w\')}} {{momentFunc(key, \'dddd\')}}</div>\n            <ion-list>\n                <ion-item-sliding #item *ngFor="let order of orderHistory[key]">\n                    <button ion-item (click)="orderDetails(order)">\n                    <p style="font-size: 20px; margin: 0; margin-bottom: 4px; color: #0866c6">{{(order.orderType0)?order.orderType0.name:\'\'}}</p>\n                    <p style="font-size: 14px; margin: 0;">Order Id: #{{order.id}}</p>\n                    <p style="font-size: 14px; margin: 0;">Order Date: {{order.orderDate}} </p>\n                    <p style="font-size: 14px; margin: 0;">Note: {{order.note}} </p>\n                    </button>\n                </ion-item-sliding>\n            </ion-list>\n        </span>\n    </span>\n</ion-content>'/*ion-inline-end:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/store-details-history/store-details-history.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_order_order__["a" /* OrderProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */]])
], StoreDetailsHistoryPage);

//# sourceMappingURL=store-details-history.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderHistoryDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_history_item_details_order_history_item_details__ = __webpack_require__(434);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderHistoryDetailsPage = (function () {
    function OrderHistoryDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OrderHistoryDetailsPage.prototype.ionViewWillEnter = function () {
        this.order = this.navParams.data;
    };
    OrderHistoryDetailsPage.prototype.itemDetails = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__order_history_item_details_order_history_item_details__["a" /* OrderHistoryItemDetailsPage */], item);
    };
    OrderHistoryDetailsPage.prototype.parseFloat2 = function (item) {
        return parseFloat(item);
    };
    return OrderHistoryDetailsPage;
}());
OrderHistoryDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-order-history-details',template:/*ion-inline-start:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/order-history-details/order-history-details.html"*/'\n<ion-header>\n    <ion-navbar>\n        <ion-title>Order Items</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list *ngIf="order">\n            <button ion-item (click)="itemDetails(item)" *ngFor="let item of order.orderItems">\n\n                    <p style="font-size: 16px; margin: 0; margin-bottom: 4px;">{{item.article.product}}</p>\n                <p style="font-size: 16px; margin: 0; margin-bottom: 4px;">Discount {{item.discount}}% {{parseFloat2(item.consumer_price) - parseFloat2(item.other_price)}}</p>\n\n                <span item-end>\n                    <p style="font-size: 16px; margin: 0; margin-bottom: 4px;"><span style="border: 1px solid gray;border-radius: 50%;padding: 1px 7px;background-color: gray;color: #fff;font-size: 16px;">{{item.quantity}}</span> {{item.other_price}} - {{item.consumer_price}}</p>\n                    <p style="font-size: 16px; margin: 0; margin-bottom: 4px;">Marginal -\n                        {{(((parseFloat2(item.consumer_price) * 1 / (1 + parseFloat2(item.article.tax) / 100)) - parseFloat2(item.other_price))\n                        / (parseFloat2(item.consumer_price) * 1 / (1 + parseFloat2(item.article.tax) / 100 )))}}% - {{(parseFloat2(item.consumer_price) * 1 / (1 + parseFloat2(item.article.tax) / 100)) - item.other_price}} kr.</p>\n                </span>\n\n            </button>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/order-history-details/order-history-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */]])
], OrderHistoryDetailsPage);

//# sourceMappingURL=order-history-details.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderHistoryItemDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the OrderHistoryItemDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var OrderHistoryItemDetailsPage = (function () {
    function OrderHistoryItemDetailsPage(navCtrl, viewCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
    }
    OrderHistoryItemDetailsPage.prototype.ionViewWillEnter = function () {
        this.article = this.navParams.data;
        this.price = parseFloat(this.article.other_price);
        this.quantity = parseInt(this.article.quantity);
        this.tax = parseFloat(this.article.article.tax);
        this.newPrice = parseFloat(this.article.other_price);
        this.consumerPrice = parseFloat(this.article.consumer_price);
        this.discount = parseFloat(this.article.quantity);
        this.marg_kr = (this.consumerPrice * 1 / (1 + this.tax / 100)) - this.newPrice;
        this.marg_pr = (((this.consumerPrice * 1 / (1 + this.tax / 100))
            - this.newPrice) / (this.consumerPrice * 1 / (1 + this.tax / 100))) * 100;
        this.content.resize();
    };
    return OrderHistoryItemDetailsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
], OrderHistoryItemDetailsPage.prototype, "content", void 0);
OrderHistoryItemDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-order-history-item-details',template:/*ion-inline-start:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/order-history-item-details/order-history-item-details.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Item Details\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div *ngIf="article">\n        <div style="margin:  0 auto;text-align:  center;">\n            <img src="{{article.article.img150}}" style="\n    height: 150px;\n    margin: 10px;\n    padding: 5px;\n">\n            <p color="newcolor" style="\n        color: #0866c6;\n    font-size: 20px;\n    margin: 5px;\n">{{article.article.product}}</p>\n            <p style="\n    display: inline;\n    margin:  5px;\n">Article #: {{article.article.suppArtNr}}</p>\n\n        </div>\n    </div>\n    <br/>\n\n    <table style="margin-left: 15px">\n        <tr>\n            <td style="width: 150px; padding: 10px; font-size: 16px"><strong>O-Netto</strong></td>\n            <td style="font-size: 16px">{{price}}</td>\n        </tr>\n\n        <tr>\n            <td style="width: 150px; padding: 10px; font-size: 16px"><strong>X-Netto</strong></td>\n            <td style="font-size: 16px">{{newPrice}}</td>\n        </tr>\n\n        <tr>\n            <td style="width: 150px; padding: 10px; font-size: 16px"><strong>X-Utpris</strong></td>\n            <td style="font-size: 16px">{{consumerPrice}}</td>\n        </tr>\n\n        <tr>\n            <td style="width: 150px; padding: 10px; font-size: 16px"><strong>Marg %</strong></td>\n            <td style="font-size: 16px">{{marg_pr}}</td>\n        </tr>\n\n        <tr>\n            <td style="width: 150px; padding: 10px; font-size: 16px"><strong>Marg Kr</strong></td>\n            <td style="font-size: 16px">{{marg_kr}}</td>\n        </tr>\n\n        <tr>\n            <td style="width: 150px; padding: 10px; font-size: 16px"><strong>Rabbat</strong></td>\n            <td style="font-size: 16px">{{discount}}</td>\n        </tr>\n\n        <tr>\n            <td style="width: 150px; padding: 10px; font-size: 16px"><strong>Antal</strong></td>\n            <td style="font-size: 16px">{{quantity}}</td>\n        </tr>\n\n\n    </table>\n\n    <p style="font-size: 18px;font-weight: bold;margin-left: 24px;">TAX - {{this.tax}}%</p>\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/order-history-item-details/order-history-item-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */]])
], OrderHistoryItemDetailsPage);

//# sourceMappingURL=order-history-item-details.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreDetailsContactsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_contact_contact__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_details_contact_add_store_details_contact_add__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store_details_contact_detail_store_details_contact_detail__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_call_number__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_globals__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var StoreDetailsContactsPage = (function () {
    function StoreDetailsContactsPage(navCtrl, navParams, loader, app, http, _contactProvider, nav, modalCtrl, actionSheetCtrl, callNumber, alertCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loader = loader;
        this.app = app;
        this.http = http;
        this._contactProvider = _contactProvider;
        this.nav = nav;
        this.modalCtrl = modalCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.callNumber = callNumber;
        this.alertCtrl = alertCtrl;
        this.store = this.navParams.data;
        storage.get('user').then(function (user) {
            _this.user = user;
            _this.downloadContacts();
        });
    }
    StoreDetailsContactsPage.prototype.downloadContacts = function () {
        var _this = this;
        var contacts_loader = this.loader.create({
            content: 'Loading Contacts'
        });
        contacts_loader.present().then(function () {
            var params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]().append('id', _this.store.id)
                .append('expand', 'storeTags.tag,storeContacts,category,customFieldDatas');
            _this.http.get(__WEBPACK_IMPORTED_MODULE_8__providers_globals__["a" /* Globals */].api + 'app/store/view', { params: params }).subscribe(function (store) {
                _this.contacts = store.storeContacts;
                contacts_loader.dismissAll();
            });
        });
    };
    StoreDetailsContactsPage.prototype.showContact = function (contact) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__store_details_contact_detail_store_details_contact_detail__["a" /* StoreDetailsContactDetailPage */], {
            contact: contact
        });
        modal.present();
    };
    StoreDetailsContactsPage.prototype.back = function () {
        this.navCtrl.pop();
        // this.app.navPop();
    };
    StoreDetailsContactsPage.prototype.deleteContact = function (contact, item_index, item) {
        var _this = this;
        item.close();
        var loader = this.loader.create({
            content: 'Deleting contact'
        });
        loader.present().then(function () {
            var params = {
                id: contact.id
            };
            _this._contactProvider.deleteContact(params)
                .subscribe(function (item) {
                console.log(item);
                _this.contacts.splice(item_index, 1);
                loader.dismiss();
            });
        });
    };
    StoreDetailsContactsPage.prototype.addContact = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__store_details_contact_add_store_details_contact_add__["a" /* StoreDetailsContactAddPage */], {
            store: this.store,
            isEdit: 0
        });
        modal.onDidDismiss(function (data) {
            _this.downloadContacts();
        });
        modal.present();
    };
    StoreDetailsContactsPage.prototype.editContact = function (contact) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__store_details_contact_add_store_details_contact_add__["a" /* StoreDetailsContactAddPage */], {
            store: this.store,
            contact: contact,
            isEdit: 1
        });
        modal.onDidDismiss(function (data) {
            _this.downloadContacts();
        });
        modal.present();
    };
    StoreDetailsContactsPage.prototype.contactActions = function (contact) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Contact Actions',
            buttons: [
                {
                    text: 'Details',
                    handler: function () {
                        _this.showContact(contact);
                    }
                },
                {
                    text: 'Call',
                    handler: function () {
                        _this.callContact(contact);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    StoreDetailsContactsPage.prototype.callContact = function (contact) {
        if (contact.mobile) {
            this.callNumber.callNumber(contact.mobile, true)
                .then(function () { return console.log('Launched dialer!'); })
                .catch(function () { return console.log('Error launching dialer'); });
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'No Phone #',
                subTitle: 'The contact doesn\'t have phone #. Please add phone #',
                buttons: ['Ok']
            });
            alert_1.present();
        }
    };
    return StoreDetailsContactsPage;
}());
StoreDetailsContactsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-store-details-contacts',template:/*ion-inline-start:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/store-details-contacts/store-details-contacts.html"*/'<ion-header>\n    <ion-navbar style="background-color: #0866c6">\n        <!--<ion-buttons left>-->\n            <!--<button ion-button icon-only (click)="back()">-->\n                <!--<ion-icon name="arrow-back"></ion-icon>-->\n            <!--</button>-->\n        <!--</ion-buttons>-->\n        <ion-title>Contacts</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-list>\n        <ion-item-sliding #item *ngFor="let contact of contacts; let item_index = index">\n            <button ion-item class="action-item" (click)="contactActions(contact)">\n                <div class="contact-row"><ion-icon name="contact"></ion-icon> Name: {{contact.name}}</div>\n                <div class="contact-row"><ion-icon name="mail"></ion-icon> Email: {{contact.email}}</div>\n                <div class="contact-row"><ion-icon name="phone-portrait"></ion-icon> Mobile: {{contact.mobile}}</div>\n                <div class="contact-row"><ion-icon name="star"></ion-icon> Role: {{contact.role}}</div>\n                <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n            </button>\n\n            <ion-item-options side="right">\n                <button ion-button color="primary" (click)="editContact(contact)">Edit</button>\n                <button ion-button color="danger" (click)="deleteContact(contact, item_index, item)">Delete</button>\n            </ion-item-options>\n        </ion-item-sliding>\n    </ion-list>\n\n    <ion-fab right bottom>\n        <button ion-fab mini (click)="addContact()">\n            <ion-icon name="add"></ion-icon>\n        </button>\n    </ion-fab>\n\n\n</ion-content>'/*ion-inline-end:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/store-details-contacts/store-details-contacts.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_4__providers_contact_contact__["a" /* ContactProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_call_number__["a" /* CallNumber */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], StoreDetailsContactsPage);

//# sourceMappingURL=store-details-contacts.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreDetailsContactAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_contact_contact__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the StoreDetailsContactAddPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var StoreDetailsContactAddPage = (function () {
    function StoreDetailsContactAddPage(navCtrl, _contactProvider, viewCtrl, navParams) {
        this.navCtrl = navCtrl;
        this._contactProvider = _contactProvider;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.work_days = [false, false, false, false, false, false, false];
        this.delivery_days = [false, false, false, false, false, false, false];
        this.name = "";
        this.email = "";
        this.office_phone = "";
        this.mobile = "";
        this.role = "";
        this.note = "";
        this.favorite = false;
        this.appointment = false;
        this.payload = {
            name: "",
            email: "",
            officePhone: "",
            mobile: "",
            role: "",
            note: "",
            isFavorite: false,
            appointment: false,
            workDays: [],
            deliveryDays: []
        };
        this.store = this.navParams.data.store;
        if (this.navParams.data.isEdit == 1) {
            this.contact = this.navParams.data.contact;
            this.name = this.contact.name;
            this.email = this.contact.email;
            this.office_phone = this.contact.officePhone;
            this.mobile = this.contact.mobile;
            this.role = this.contact.role;
            this.note = this.contact.note;
            if (this.contact.isFavorite == '1') {
                this.favorite = true;
            }
            if (this.contact.isFavorite == '0') {
                this.favorite = false;
            }
            if (this.contact.appointment == '1') {
                this.appointment = true;
            }
            if (this.contact.appointment == '0') {
                this.appointment = false;
            }
        }
    }
    StoreDetailsContactAddPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StoreDetailsContactAddPage');
    };
    StoreDetailsContactAddPage.prototype.save = function () {
        var _this = this;
        if (this.name != "") {
            this.payload.name = this.name;
        }
        if (this.email != "") {
            this.payload.email = this.email;
        }
        if (this.office_phone != "") {
            this.payload.officePhone = this.office_phone;
        }
        if (this.mobile != "") {
            this.payload.mobile = this.mobile;
        }
        if (this.role != "") {
            this.payload.role = this.role;
        }
        if (this.note != "") {
            this.payload.note = this.note;
        }
        if (this.favorite != false) {
            this.payload.isFavorite = this.favorite;
        }
        if (this.appointment != false) {
            this.payload.appointment = this.appointment;
        }
        for (var i in this.work_days) {
            if (this.work_days[i] != false) {
                this.payload.workDays.push(parseInt(i) + 1);
            }
        }
        for (var b in this.delivery_days) {
            if (this.delivery_days[b] != false) {
                this.payload.deliveryDays.push(parseInt(b) + 1);
            }
        }
        if (this.navParams.data.isEdit == 1) {
            this._contactProvider.updateContact(this.payload, this.contact)
                .subscribe(function (contact) {
                _this.viewCtrl.dismiss();
            });
        }
        else {
            this._contactProvider.createContact(this.payload, this.store)
                .subscribe(function (contact) {
                _this.viewCtrl.dismiss();
            });
        }
    };
    StoreDetailsContactAddPage.prototype.back = function () {
        this.viewCtrl.dismiss();
    };
    return StoreDetailsContactAddPage;
}());
StoreDetailsContactAddPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-store-details-contact-add',template:/*ion-inline-start:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/store-details-contact-add/store-details-contact-add.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-buttons left>\n            <button ion-button icon-only (click)="back()">\n                <ion-icon name="arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title>\n            New Contact\n        </ion-title>\n\n        <ion-buttons right>\n            <button ion-button icon-only (click)="save()">\n                Save\n            </button>\n        </ion-buttons>\n\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div style="background-color: #f4f4f4; padding-left: 17px; padding-top: 2.5%; padding-bottom: 2.5%; font-weight: bold; border-bottom: 1px solid #A9A9A9">\n        Name\n    </div>\n    <mbsc-form [options]="{theme: \'ios\'}">\n        <input class="input-form" [(ngModel)]="name"\n               placeholder="Please enter name..."\n        />\n    </mbsc-form>\n\n    <div style="background-color: #f4f4f4; padding-left: 17px; padding-top: 2.5%; padding-bottom: 2.5%; font-weight: bold; border-bottom: 1px solid #A9A9A9">\n        Email\n    </div>\n    <mbsc-form [options]="{theme: \'ios\'}">\n        <input class="input-form" [(ngModel)]="email"\n               placeholder="Please enter email..."\n        />\n    </mbsc-form>\n\n    <div style="background-color: #f4f4f4; padding-left: 17px; padding-top: 2.5%; padding-bottom: 2.5%; font-weight: bold; border-bottom: 1px solid #A9A9A9">\n        Office Phone\n    </div>\n    <mbsc-form [options]="{theme: \'ios\'}">\n        <input class="input-form" [(ngModel)]="office_phone"\n               placeholder="Please enter office phone..."\n        />\n    </mbsc-form>\n\n    <div style="background-color: #f4f4f4; padding-left: 17px; padding-top: 2.5%; padding-bottom: 2.5%; font-weight: bold; border-bottom: 1px solid #A9A9A9">\n        Mobile\n    </div>\n    <mbsc-form [options]="{theme: \'ios\'}">\n        <input class="input-form" [(ngModel)]="mobile"\n               placeholder="Please enter mobile..."\n        />\n    </mbsc-form>\n\n\n    <div style="background-color: #f4f4f4; padding-left: 17px; padding-top: 2.5%; padding-bottom: 2.5%; font-weight: bold; border-bottom: 1px solid #A9A9A9">\n        Role\n    </div>\n    <mbsc-form [options]="{theme: \'ios\'}">\n        <input class="input-form" [(ngModel)]="role"\n               placeholder="Please enter role..."\n        />\n    </mbsc-form>\n\n    <div style="background-color: #f4f4f4; padding-left: 17px; padding-top: 2.5%; padding-bottom: 2.5%; font-weight: bold; border-bottom: 1px solid #A9A9A9">\n        Note\n    </div>\n    <mbsc-form [options]="{theme: \'ios\'}">\n        <input class="input-form" [(ngModel)]="note"\n               placeholder="Please enter note..."\n        />\n    </mbsc-form>\n\n    <div style="background-color: #f4f4f4; padding-left: 17px; padding-top: 2.5%; padding-bottom: 2.5%; font-weight: bold; border-bottom: 1px solid #A9A9A9">\n        Favorite\n    </div>\n    <ion-item>\n        <ion-label>Yes</ion-label>\n        <ion-checkbox [(ngModel)]="favorite"  color="dark"></ion-checkbox>\n    </ion-item>\n\n    <div style="background-color: #f4f4f4; padding-left: 17px; padding-top: 2.5%; padding-bottom: 2.5%; font-weight: bold; border-bottom: 1px solid #A9A9A9">\n        Appointment\n    </div>\n    <ion-item>\n        <ion-label>Yes</ion-label>\n        <ion-checkbox [(ngModel)]="appointment" color="dark"></ion-checkbox>\n    </ion-item>\n\n\n    <div style="background-color: #f4f4f4; padding-left: 17px; padding-top: 2.5%; padding-bottom: 2.5%; font-weight: bold; border-bottom: 1px solid #A9A9A9">\n        Work Days\n    </div>\n    <ion-item>\n        <ion-label>Mon</ion-label>\n        <ion-checkbox [(ngModel)]="work_days[0]" color="dark"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n        <ion-label>Tue</ion-label>\n        <ion-checkbox [(ngModel)]="work_days[1]" color="dark"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n        <ion-label>Wed</ion-label>\n        <ion-checkbox [(ngModel)]="work_days[2]" color="dark"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n        <ion-label>Thu</ion-label>\n        <ion-checkbox [(ngModel)]="work_days[3]" color="dark"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n        <ion-label>Fri</ion-label>\n        <ion-checkbox [(ngModel)]="work_days[4]" color="dark"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n        <ion-label>Sat</ion-label>\n        <ion-checkbox [(ngModel)]="work_days[5]" color="dark"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n        <ion-label>Sun</ion-label>\n        <ion-checkbox [(ngModel)]="work_days[6]" color="dark"></ion-checkbox>\n    </ion-item>\n\n    <div style="background-color: #f4f4f4; padding-left: 17px; padding-top: 2.5%; padding-bottom: 2.5%; font-weight: bold; border-bottom: 1px solid #A9A9A9">\n        Delivery Days\n    </div>\n    <ion-item>\n        <ion-label>Mon</ion-label>\n        <ion-checkbox [(ngModel)]="delivery_days[0]" color="dark"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n        <ion-label>Tue</ion-label>\n        <ion-checkbox [(ngModel)]="delivery_days[1]" color="dark"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n        <ion-label>Wed</ion-label>\n        <ion-checkbox [(ngModel)]="delivery_days[2]" color="dark"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n        <ion-label>Thu</ion-label>\n        <ion-checkbox [(ngModel)]="delivery_days[3]" color="dark"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n        <ion-label>Fri</ion-label>\n        <ion-checkbox [(ngModel)]="delivery_days[4]" color="dark"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n        <ion-label>Sat</ion-label>\n        <ion-checkbox [(ngModel)]="delivery_days[5]" color="dark"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n        <ion-label>Sun</ion-label>\n        <ion-checkbox [(ngModel)]="delivery_days[6]" color="dark"></ion-checkbox>\n    </ion-item>\n\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/store-details-contact-add/store-details-contact-add.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_contact_contact__["a" /* ContactProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */]])
], StoreDetailsContactAddPage);

//# sourceMappingURL=store-details-contact-add.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreDetailsContactDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StoreDetailsContactDetailPage = (function () {
    function StoreDetailsContactDetailPage(navCtrl, viewCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
    }
    StoreDetailsContactDetailPage.prototype.ionViewWillEnter = function () {
        this.contact = this.navParams.data.contact;
    };
    StoreDetailsContactDetailPage.prototype.back = function () {
        this.viewCtrl.dismiss();
    };
    return StoreDetailsContactDetailPage;
}());
StoreDetailsContactDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-store-details-contact-detail',template:/*ion-inline-start:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/store-details-contact-detail/store-details-contact-detail.html"*/'\n<ion-header>\n    <ion-navbar>\n        <ion-buttons left>\n            <button ion-button icon-only (click)="back()">\n                <ion-icon name="arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title>Contacts Details</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <span *ngIf="contact">\n        <ion-list>\n            <ion-item>\n                <span item-start><strong>Name: </strong></span>\n                <span item-end>{{contact.name}}</span>\n            </ion-item>\n            <ion-item>\n                <span item-start><strong>Email: </strong></span>\n                <span item-end>{{contact.email}}</span>\n            </ion-item>\n            <ion-item>\n                <span item-start><strong>Role: </strong></span>\n                <span item-end>{{contact.role}}</span>\n            </ion-item>\n            <ion-item>\n                <span item-start><strong>Mobile #: </strong></span>\n                <span item-end>{{contact.mobile}}</span>\n            </ion-item>\n            <ion-item>\n                <span item-start><strong>Office #: </strong></span>\n                <span item-end>{{contact.officePhone}}</span>\n            </ion-item>\n            <ion-item>\n                <span item-start><strong>Favorite: </strong></span>\n                <span item-end *ngIf="contact.isFavorite == \'1\'">Yes</span>\n                <span item-end *ngIf="contact.isFavorite == \'0\'">No</span>\n            </ion-item>\n\n        </ion-list>\n    </span>\n</ion-content>\n'/*ion-inline-end:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/store-details-contact-detail/store-details-contact-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */]])
], StoreDetailsContactDetailPage);

//# sourceMappingURL=store-details-contact-detail.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACCESS_CALENDAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ACCESS_STORE_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ACCESS_CONTACTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ACCESS_ORDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ACCESS_ORDERS_HISTORY; });
var ACCESS_CALENDAR = 1;
var ACCESS_STORE_LIST = 2;
var ACCESS_CONTACTS = 3;
var ACCESS_ORDERS = 4;
var ACCESS_ORDERS_HISTORY = 5;
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MyFilterPipe */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DistributionArticlesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_globals__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_transfer__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_path__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__distribution_filter_distribution_filter__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_order_order__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__distribution_note_distribution_note__ = __webpack_require__(441);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MyFilterPipe = (function () {
    function MyFilterPipe() {
    }
    MyFilterPipe.prototype.transform = function (items, filter) {
        if (!items || !filter) {
            return items;
        }
        return items.filter(function (item) { return item.storeCategoryId.indexOf(filter['storeCategoryId']) !== -1; });
    };
    return MyFilterPipe;
}());
MyFilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Pipe"])({
        name: 'myfilter',
        pure: false
    })
], MyFilterPipe);

var DistributionArticlesPage = (function () {
    function DistributionArticlesPage(actionSheetCtrl, loadingCtrl, camera, transfer, file, filePath, navCtrl, toastCtrl, platform, navParams, alertCtrl, viewCtrl, loader, modalCtrl, filterPipe, _orderProvider, app, tab, http) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.camera = camera;
        this.transfer = transfer;
        this.file = file;
        this.filePath = filePath;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.loader = loader;
        this.modalCtrl = modalCtrl;
        this.filterPipe = filterPipe;
        this._orderProvider = _orderProvider;
        this.app = app;
        this.tab = tab;
        this.http = http;
        this.groups = [];
        this.records = {};
        this.records_more = {
            records: [],
            noArticle: []
        };
        this.checkMissings = 0;
        this.payload = [];
        this.filterlistings = { storeCategoryId: 0 };
        this.countDistr = [];
        this.groups_super = [];
        this.notes = {};
        this.filter_article = false;
        this.filter_missings = false;
        this.showSearch = false;
        this.params = {
            s: "",
            listing: "",
            group: "",
            ids: "",
            p: 1,
            expand: 'group.listings',
            storeId: ""
        };
        this.store = navParams.data;
    }
    DistributionArticlesPage.prototype.ionViewWillEnter = function () {
        console.log("DID LOAD");
        this.params.storeId = this.store.id;
        this.filterlistings.storeCategoryId = this.store.categoryId;
        this.article_page = 1;
        this.distribution_answer = 0;
        this.getDistribution();
        this.getGroups();
    };
    DistributionArticlesPage.prototype.getGroups = function () {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]();
        this.http.get(__WEBPACK_IMPORTED_MODULE_0__providers_globals__["a" /* Globals */].api + 'app/article/groups', { params: params }).subscribe(function (groups) {
            _this.groups_store = groups;
        });
    };
    DistributionArticlesPage.prototype.getDistribution = function () {
        var _this = this;
        var distributions_loader = this.loader.create({
            content: 'Loading articles'
        });
        distributions_loader.present().then(function () {
            var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
                .append('storeId', _this.store.id);
            _this.http.get(__WEBPACK_IMPORTED_MODULE_0__providers_globals__["a" /* Globals */].api + 'app/article/listingsForStore', { params: params }).subscribe(function (listings) {
                _this.listings_store = listings;
                _this.listings_store = _this.listings_store.map(function (item) { return item.listing; })
                    .filter(function (value, index, self) { return self.indexOf(value) === index; });
                _this.params.listing = _this.listings_store.join();
                _this._orderProvider.getLazyArticles({
                    expand: 'group,listings',
                    p: _this.article_page,
                    storeId: _this.store.id,
                    listing: _this.listings_store.join()
                })
                    .subscribe(function (articles) {
                    _this.distribution = articles;
                    _this.articles = articles;
                    _this.filterListings();
                    var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]().append('id', '0')
                        .append('storeId', _this.store.id);
                    _this.http.get(__WEBPACK_IMPORTED_MODULE_0__providers_globals__["a" /* Globals */].api + 'app/distribution/allArticlesLastRecords', { params: params })
                        .subscribe(function (records) {
                        _this.groups = [];
                        _this.groups_super = [];
                        _this.records = {};
                        _this.records_more = {
                            records: [],
                            noArticle: []
                        };
                        _this.countDistr = [];
                        var groups = { "0": { "name": "No groups", "articles": [], "id": "13" } };
                        for (var _i = 0, records_1 = records; _i < records_1.length; _i++) {
                            var record = records_1[_i];
                            if (!_this.records[record.article_id]) {
                                _this.records[record.article_id] = record.quantity;
                                _this.notes[record.article_id] = record.note;
                                _this.records_more.records[record.article_id] = record.quantity;
                                _this.records_more.noArticle[record.article_id] = false;
                            }
                        }
                        var missings_prepare = [];
                        for (var article_id in _this.records) {
                            if (_this.records[article_id] != '0') {
                                missings_prepare.push(article_id);
                            }
                        }
                        // this.filter_missings = missings_prepare.join();
                        // for (let distributionArticle in articles) {
                        //     var group_id = articles[distributionArticle].group ? articles[distributionArticle].group.id : 0;
                        //     var group_name = articles[distributionArticle].group ? articles[distributionArticle].group.name : '';
                        //
                        //     if (!groups[group_id]) {
                        //         this.group_names.push({name: group_name, id: group_id});
                        //         groups[group_id] = {};
                        //         groups[group_id] = articles[distributionArticle].group;
                        //         groups[group_id]['articles'] = [];
                        //         groups[group_id]['articles'].push(articles[distributionArticle]);
                        //     } else {
                        //         groups[group_id]['articles'].push(articles[distributionArticle]);
                        //     }
                        // }
                        //
                        // console.log(this.group_names);
                        // for (var key in groups) {
                        //     this.groups.push(groups[key]);
                        // }
                        // for (let bla5 in this.groups) {
                        //     for (let bla123 in this.groups[bla5].articles) {
                        //         let blabla = {
                        //             checker: true,
                        //             listings: []
                        //         };
                        //         for (let blasdf in this.groups[bla5].articles[bla123].listings) {
                        //             if (this.groups[bla5].articles[bla123].listings[blasdf].storeCategoryId == this.filterlistings.storeCategoryId) {
                        //                 blabla.listings.push(this.groups[bla5].articles[bla123].listings[blasdf]);
                        //             }
                        //         }
                        //         if (blabla.listings.length > 0) {
                        //             blabla.checker = true;
                        //         }
                        //         this.groups[bla5].articles[bla123].listings = blabla;
                        //     }
                        //     this.total_articles += this.groups[bla5].articles.length;
                        //
                        //     this.countDistr[this.groups[bla5].id] = {
                        //         records: [],
                        //         sum: 0
                        //     };
                        //     for (let bla2 in this.groups[bla5].articles) {
                        //         if (parseInt(this.records[this.groups[bla5].articles[bla2].article_id]) > 0) {
                        //             this.countDistr[this.groups[bla5].id].records.push(this.records[this.groups[bla5].articles[bla2].article_id]);
                        //         }
                        //     }
                        //     for (let bla3 in this.countDistr[this.groups[bla5].id].records) {
                        //         this.countDistr[this.groups[bla5].id].sum += this.countDistr[this.groups[bla5].id].records[bla3];
                        //     }
                        // }
                        //
                        // for (let bla7 in this.countDistr) {
                        //     this.total_distributions += this.countDistr[bla7].records.length;
                        //     this.total_distributions_number += parseInt(this.countDistr[bla7].sum);
                        // }
                        // this.groups = groups;
                        distributions_loader.dismiss();
                    }, function (error) {
                        if (error.status == 0) {
                            distributions_loader.dismiss();
                            _this.presentToast("No internet connection. Please press reload button", "enter");
                        }
                    });
                }, function (error) {
                    if (error.status == 0) {
                        distributions_loader.dismiss();
                        _this.presentToast("No internet connection. Please press reload button", "enter");
                    }
                });
            }, function (error) {
                if (error.status == 0) {
                    distributions_loader.dismiss();
                    _this.presentToast("No internet connection. Please press reload button", "enter");
                }
            });
        });
    };
    DistributionArticlesPage.prototype.missings = function () {
        if (this.checkMissings == 0) {
            this.checkMissings = 1;
            this.params.p = 1;
            var missings_prepare = [];
            for (var article_id in this.records) {
                if (this.records[article_id] != '0') {
                    missings_prepare.push(article_id);
                }
            }
            this.params.ids = missings_prepare.join();
            this.getArticles();
        }
        else {
            this.checkMissings = 0;
            this.params.p = 1;
            this.params.ids = "";
            this.getArticles();
        }
    }; // DONE
    DistributionArticlesPage.prototype.filterListings = function () {
        var _this = this;
        var some_articles = [];
        for (var article_index in this.articles) {
            var filtered_listings = void 0;
            filtered_listings = this.articles[article_index].listings.filter(function (listing) {
                return (listing.storeCategoryId == _this.filterlistings.storeCategoryId);
            });
            var checker = false;
            for (var listing_index in filtered_listings) {
                if (filtered_listings[listing_index].store_id != '0' && filtered_listings[listing_index].store_id != null) {
                    checker = true;
                    break;
                }
            }
            var somesome = [];
            if (checker == true) {
                for (var listing_index_2 in filtered_listings) {
                    if (filtered_listings[listing_index_2].store_id != '0' && filtered_listings[listing_index_2].store_id != null) {
                        somesome.push(filtered_listings[listing_index_2]);
                    }
                }
                filtered_listings = somesome;
            }
            else {
                for (var listing_index_2 in filtered_listings) {
                    somesome.push(filtered_listings[listing_index_2]);
                }
                filtered_listings = somesome;
            }
            if (filtered_listings.length > 0) {
                some_articles.push(this.articles[article_index]);
                some_articles[some_articles.length - 1]['listings'] = filtered_listings;
            }
        }
        this.articles = some_articles;
    }; // CHECK
    DistributionArticlesPage.prototype.getItems = function (ev) {
        this.filter_article = ev.target.value;
        this.params.p = 1;
        this.params.s = ev.target.value;
        this.getArticles();
    };
    DistributionArticlesPage.prototype.distributionFilter = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__distribution_filter_distribution_filter__["a" /* DistributionFilterPage */], {
            groups: this.groups_store,
            listings: this.listings_store
        });
        modal.onDidDismiss(function (data) {
            _this.params.p = 1;
            _this.params.group = data.groupFilter;
            if (data.listingFilter != "") {
                _this.params.listing = data.listingFilter;
            }
            _this.getArticles();
        });
        modal.present();
    };
    DistributionArticlesPage.prototype.saveDistribution = function () {
        var _this = this;
        var answers = [];
        var note;
        var distributions_loader = this.loader.create({
            content: 'Saving distribution'
        });
        distributions_loader.present().then(function () {
            for (var distributionArticle in _this.articles) {
                console.log("======");
                console.log(_this.records[_this.articles[distributionArticle].id].toString());
                if (_this.records[_this.articles[distributionArticle].id].toString()) {
                    console.log("YES QTY");
                    if (_this.notes[_this.articles[distributionArticle].id]) {
                        console.log(1);
                        answers.push({
                            'article_id': _this.articles[distributionArticle].id,
                            'store_id': _this.store.id,
                            'quantity': _this.records[_this.articles[distributionArticle].id],
                            'note': _this.notes[_this.articles[distributionArticle].id]
                        });
                    }
                    else {
                        console.log(2);
                        answers.push({
                            'article_id': _this.articles[distributionArticle].id,
                            'store_id': _this.store.id,
                            'quantity': _this.records[_this.articles[distributionArticle].id],
                            'note': null
                        });
                    }
                }
                else {
                    console.log("NO QTY");
                }
            }
            var post = {};
            post['distributions'] = answers;
            post['photos'] = _this.payload;
            console.log("POOOOOOOOS");
            console.log(answers);
            var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]().append('id', '0');
            distributions_loader.dismissAll();
            _this.http.post(__WEBPACK_IMPORTED_MODULE_0__providers_globals__["a" /* Globals */].api + 'app/distribution/register', post, { params: params }).subscribe(function (distribution) {
                _this.navCtrl.parent.select(0);
                // this.getDistribution();
            });
        });
    };
    DistributionArticlesPage.prototype.presentToast = function (text, requestCase) {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: text,
            showCloseButton: true,
            closeButtonText: "Reload",
            position: 'middle',
        });
        toast.onDidDismiss(function () {
            switch (requestCase) {
                case 'stores': {
                    // this.loadStores();
                    break;
                }
                case 'enter': {
                    _this.getDistribution();
                    _this.getGroups();
                }
            }
        });
        toast.present();
    };
    DistributionArticlesPage.prototype.addDistribution = function (article_id) {
        // TODO REMOVE THIS=====================
        if (this.records[article_id] == null || typeof this.records[article_id] == 'undefined') {
            this.records[article_id] = 0;
            this.records_more.records[article_id] = 0;
        }
        // TODO REMOVE THIS=====================
        this.records[article_id] = parseInt(this.records[article_id]) + 1;
        this.records_more.records[article_id] = parseInt(this.records_more.records[article_id]) + 1;
        this.records_more.noArticle[article_id] = false;
    };
    DistributionArticlesPage.prototype.clearDistribution = function (article_id) {
        this.records[article_id] = 0;
        this.records_more.records[article_id] = 0;
    };
    DistributionArticlesPage.prototype.getArticles = function (infinite) {
        var _this = this;
        // let distributions_loader = this.loader.create({
        //     content: 'Loading articles'
        // });
        // distributions_loader.present().then(() => {
        this._orderProvider.getLazyArticles(this.params)
            .subscribe(function (articles) {
            if (infinite) {
                for (var article_index in articles) {
                    console.log('infin');
                    _this.articles.push(articles[article_index]);
                }
            }
            else {
                console.log('not infint');
                _this.articles = articles;
            }
            _this.filterListings();
            // distributions_loader.dismiss();
        });
        // });
    };
    DistributionArticlesPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.params.p = parseInt(this.params.p) + 1;
        setTimeout(function () {
            _this.getArticles(true);
            infiniteScroll.complete();
        }, 100);
    };
    DistributionArticlesPage.prototype.discardFilter = function () {
        this.params.p = 1;
        this.params.group = "";
        this.params.listing = "";
        this.params.s = "";
        this.params.ids = "";
        this.checkMissings = 0;
        this.articles = [];
        this.getArticles();
    };
    // TODO show only with listing
    // TODO show listing based on storeid
    // TODO show all listing
    DistributionArticlesPage.prototype.addNote = function (article_id) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__distribution_note_distribution_note__["a" /* DistributionNotePage */], {
            article_id: article_id
        });
        modal.onDidDismiss(function (data) {
            console.log(data);
            if (data.note != false) {
                _this.notes[article_id] = data.note;
            }
        });
        modal.present();
    };
    DistributionArticlesPage.prototype.scrollToTop = function () {
        // Scrolls to the top, ie 0px to top.
        this.content.scrollToTop();
    };
    DistributionArticlesPage.prototype.showSearch2 = function () {
        if (this.showSearch == false) {
            this.showSearch = true;
        }
        else {
            this.showSearch = false;
        }
    };
    return DistributionArticlesPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* Content */])
], DistributionArticlesPage.prototype, "content", void 0);
DistributionArticlesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'page-distribution-articles',template:/*ion-inline-start:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/distribution-articles/distribution-articles.html"*/'<style>\n    .table-article {\n        width: 90%;\n        margin-left: 7%;\n    }\n\n    .table-article td {\n        padding: 6px;\n    }\n</style>\n<ion-header>\n\n    <ion-navbar style="background-color: #0866c6" hideBackButton="true">\n        <ion-buttons right>\n            <button ion-button (click)="showSearch2()"><ion-icon style="color:#fff" name="search"></ion-icon></button>\n            <button ion-button="" (click)="saveDistribution()">Save</button>\n        </ion-buttons>\n    </ion-navbar>\n\n    <div *ngIf="showSearch == true" style="width: 95%; display: block">\n        <ion-searchbar (ionInput)="getItems($event)" item-right></ion-searchbar>\n    </div>\n\n\n</ion-header>\n<ion-content>\n\n\n    <div style="width: 80%; display: block">\n        <ion-searchbar (ionInput)="getItems($event)" item-right></ion-searchbar>\n    </div>\n    <div style="position: absolute; display: block;margin-left: 81%;margin-top: -42px;" (click)="distributionFilter()">\n        <ion-icon style="font-size: 30px" color="newcolor" name="funnel"></ion-icon>\n    </div>\n    <div style="position: absolute; display: block;margin-left: 91%;margin-top: -42px;" (click)="discardFilter()">\n        <ion-icon style="font-size: 30px" color="danger" name="close"></ion-icon>\n    </div>\n    <br />\n    <div>\n\n        <div style="width: 10%; display: inline">\n                <div class="kpis3" (click)="missings()">{{checkMissings == 1 ? "All" : "Missing"}}</div>\n        </div>\n\n\n    </div>\n    <br />\n\n    <!--<div>-->\n        <!--<progress-bar [progress]="total_distributions*100/total_articles" [total_distribution_number]="total_distributions_number" [total_article]="total_articles" [total_distribution]="total_distributions" style="width: 10%; display: inline"></progress-bar>-->\n    <!--</div>-->\n    <!--<br/><br/><br/>-->\n\n    <!--<ion-list>-->\n                <!--<div class="group-item" *ngIf="group.articles.length > 0">-->\n                        <!--{{group.name}} <span style="float: right">{{countDistr[group.id].records.length}}/{{group.articles.length}} ({{countDistr[group.id].records.length*100/group.articles.length | number : \'1.2-2\'}}%)</span>-->\n                    <!--</div>-->\n        <ion-list>\n          <!--<span *ngFor="let article of group.articles">-->\n            <ion-item-sliding #item *ngFor="let article of articles">\n                <button ion-item *ngIf="records_more.records[article.id]>0 && records_more.noArticle[article.id] == false"\n                                          (click)="addDistribution(article.id)" class="yes-article-item">\n\n                        <b style="font-size: 16px; text-transform: uppercase; color:#fff">{{article.product}}</b>\n                    <!--<b *ngIf="records[article.id] == 0" style="color: #fff; font-size: 12px;float: right;margin: 12px 12% 0 0;">(0% share)</b>-->\n\n\n                                    <!--<b *ngIf="records[article.id] > 0"-->\n                                       <!--style="color: #fff; font-size: 12px;float: right;margin: 12px 12% 0 0;">({{records[article.id] * 100 / countDistr[group.id].sum | number: \'1.2-2\'}}% share)</b>-->\n                        <div class="{{records[article.id]>0?\'yes-counter-block\':\'no-counter-block\'}}">\n                                <div style="margin-top: 6px;"></div>\n                                <span style="margin: 5px 0 0 0">{{records[article.id]}}</span>\n                            </div>\n                        <div *ngIf="records[article.id]==null" class="no-counter-block">\n                                <div style="margin-top: 6px;"></div>\n                                <span style="margin: 5px 0 0 0">{{records[article.id]}}</span>\n                            </div>\n                        <br/>\n                    <span style="font-size: 12px; color: #fff">Internal #: {{article.suppArtNr}},\n                    <span style="font-size: 12px; color: #fff">Wholesaler #: {{article.wholesaler_id}},\n                      <span style="font-size: 12px; color: #fff" *ngFor="let l of article.listings" >({{l.listing}}), </span>\n                    </span></span> <br />\n                        <span style="font-size: 12px; color: #fff">Note: {{notes[article.id]}}</span>\n                    <!--<span style="font-size: 12px; color: #fff">Wholesaler: {{article.wholesaler_id}}</span><br />-->\n\n                    </button>\n\n                <button ion-item *ngIf="records[article.id]==0" (click)="addDistribution(article.id)" class="no-article-item">\n\n        <b style="font-size: 16px">{{article.product}}</b>\n                        <!--<b *ngIf="records[article.id] == 0" style="font-size: 12px;float: right;margin: 12px 12% 0 0;">(0% share)</b>-->\n\n                                    <!--<b *ngIf="records[article.id] > 0"-->\n                                       <!--style="font-size: 12px;float: right;margin: 4px 40px 0 0;">({{records[article.id] * 100 / countDistr[group.id].sum | number: \'1.2-2\'}}% share)</b>-->\n                        <div class="{{records[article.id]>0?\'yes-counter-block\':\'no-counter-block\'}}">\n                                <div style="margin-top: 6px;"></div>\n                                <span style="margin: 5px 0 0 0">{{records[article.id]}}</span>\n                            </div>\n                        <div *ngIf="records[article.id]==null" class="no-counter-block">\n                                <div style="margin-top: 6px;"></div>\n                                <span style="margin: 5px 0 0 0">{{records[article.id]}}</span>\n                            </div>\n                        <br/>\n                    <span style="font-size: 12px; color: grey">Internal #: {{article.suppArtNr}},\n                        <span style="font-size: 12px; color: grey">Wholesaler #: {{article.wholesaler_id}},\n                      <span style="font-size: 12px; color: grey" *ngFor="let l of article.listings" >({{l.listing}})</span>\n                        </span> <br /></span>\n                    <span style="font-size: 12px; color: grey">Note: {{notes[article.id]}}</span>\n                </button>\n\n                <button ion-item *ngIf="records[article.id]==null" (click)="addDistribution(article.id)" class="no-article-item">\n\n        <b style="font-size: 16px">{{article.product}}</b>\n                        <!--<b *ngIf="records[article.id] == 0" style="font-size: 12px;float: right;margin: 12px 12% 0 0;">(0% share)</b>-->\n\n                                    <!--<b *ngIf="records[article.id] > 0"-->\n                                       <!--style="font-size: 12px;float: right;margin: 4px 40px 0 0;">({{records[article.id] * 100 / countDistr[group.id].sum | number: \'1.2-2\'}}% share)</b>-->\n                        <div class="{{records[article.id]>0?\'yes-counter-block\':\'no-counter-block\'}}">\n                                <div style="margin-top: 6px;"></div>\n                                <span style="margin: 5px 0 0 0">{{records[article.id]}}</span>\n                            </div>\n                        <div *ngIf="records[article.id]==null" class="no-counter-block">\n                                <div style="margin-top: 6px;"></div>\n                                <span style="margin: 5px 0 0 0">{{records[article.id]}}</span>\n                            </div>\n                        <br/>\n\n                    <span style="font-size: 12px; color: grey">Internal #: {{article.suppArtNr}},\n                        <span style="font-size: 12px; color: grey">Article #: {{article.wholesaler_id}},\n                    <span style="font-size: 12px; color: grey" *ngFor="let l of article.listings" >\n                        ({{l.listing}})</span>\n                        </span> </span><br />\n                    <span style="font-size: 12px; color: grey">Note: {{notes[article.id]}}</span>\n        </button>\n                <ion-item-options side="right">\n        <button ion-button (click)="clearDistribution(article.id)" color="danger">Clear</button>\n                    <button ion-button (click)="addNote(article.id)" color="primary">Note</button>\n        </ion-item-options>\n\n\n            </ion-item-sliding>\n\n          <!--</span>-->\n        </ion-list>\n        <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n                <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more articles...">\n                </ion-infinite-scroll-content>\n            </ion-infinite-scroll>\n        <!--<ion-list>-->\n        <!--<span *ngFor="let article of group.articles">-->\n        <!--<ion-item-sliding #item *ngIf="article.listings.checker == true">-->\n\n        <!--<button ion-item *ngIf="records_more.records[article.article_id]>0 && records_more.noArticle[article.article_id] == false" (click)="addDistribution(article.article_id)" class="yes-article-item">-->\n\n        <!--<b style="font-size: 16px">{{article.product}}</b>-->\n        <!--<b *ngIf="records[article.article_id] == 0" style="font-size: 12px;float: right;margin: 4px 40px 0 0;">(0% share)</b>-->\n\n        <!--<b *ngIf="records[article.article_id] > 0" style="font-size: 12px;float: right;margin: 4px 40px 0 0;">({{records[article.article_id] * 100 / countDistr[group.id].sum | number: \'1.2-2\'}}% share)</b>-->\n        <!--<div class="{{records[article.article_id]>0?\'yes-counter-block\':\'no-counter-block\'}}">-->\n        <!--<div style="margin-top: 6px;"></div>-->\n        <!--<span style="margin: 5px 0 0 0">{{records[article.article_id]}}</span>-->\n        <!--</div>-->\n        <!--<div *ngIf="records[article.article_id]==null" class="no-counter-block">-->\n        <!--<div style="margin-top: 6px;"></div>-->\n        <!--<span style="margin: 5px 0 0 0">{{records[article.article_id]}}</span>-->\n        <!--</div>-->\n        <!--<br />-->\n        <!--Article #: {{article.suppArtNr}},-->\n        <!--&lt;!&ndash;&ndash;&gt;-->\n        <!--<span *ngFor="let l of article.listings" >({{l.listing}})</span>-->\n        <!--</button>-->\n\n        <!--<button ion-item *ngIf="records[article.article_id]==0" (click)="addDistribution(article.article_id)" class="no-article-item">-->\n\n        <!--<b style="font-size: 16px">{{article.product}}</b>-->\n        <!--<b *ngIf="records[article.article_id] == 0" style="font-size: 12px;float: right;margin: 12px 55px 0 0;">(0% share)</b>-->\n\n        <!--<b *ngIf="records[article.article_id] > 0" style="font-size: 12px;float: right;margin: 12px 55px 0 0;">({{records[article.article_id] * 100 / countDistr[group.id].sum | number: \'1.2-2\'}}% share)</b>-->\n        <!--<div class="{{records[article.article_id]>0?\'yes-counter-block\':\'no-counter-block\'}}">-->\n        <!--<div style="margin-top: 6px;"></div>-->\n        <!--<span style="margin: 5px 0 0 0">{{records[article.article_id]}}</span>-->\n        <!--</div>-->\n        <!--<div *ngIf="records[article.article_id]==null" class="no-counter-block">-->\n        <!--<div style="margin-top: 6px;"></div>-->\n        <!--<span style="margin: 5px 0 0 0">{{records[article.article_id]}}</span>-->\n        <!--</div>-->\n        <!--<br />-->\n        <!--Article #: {{article.suppArtNr}}, <span *ngFor="let l of article.listings" >({{l.listing}})</span>-->\n        <!--</button>-->\n\n        <!--<button ion-item *ngIf="records[article.article_id]==null" (click)="addDistribution(article.article_id)" class="no-article-item">-->\n\n        <!--<b style="font-size: 16px">{{article.article.product}}</b>-->\n        <!--<b *ngIf="records[article.article_id] == 0" style="font-size: 12px;float: right;margin: 12px 55px 0 0;">(0% share)</b>-->\n\n        <!--<b *ngIf="records[article.article_id] > 0" style="font-size: 12px;float: right;margin: 12px 55px 0 0;">({{records[article.article_id] * 100 / countDistr[group.id].sum | number: \'1.2-2\'}}% share)</b>-->\n        <!--<div class="{{records[article.article_id]>0?\'yes-counter-block\':\'no-counter-block\'}}">-->\n        <!--<div style="margin-top: 6px;"></div>-->\n        <!--<span style="margin: 5px 0 0 0">{{records[article.article_id]}}</span>-->\n        <!--</div>-->\n        <!--<div *ngIf="records[article.article_id]==null" class="no-counter-block">-->\n        <!--<div style="margin-top: 6px;"></div>-->\n        <!--<span style="margin: 5px 0 0 0">{{records[article.article_id]}}</span>-->\n        <!--</div>-->\n        <!--<br />-->\n        <!--Article #: {{article.suppArtNr}}, <span *ngFor="let l of article.listings" >({{l.listing}})</span>-->\n        <!--</button>-->\n\n\n        <!--<ion-item-options side="right">-->\n        <!--<button ion-button (click)="clearDistribution(article.article_id)" color="danger">Clear</button>-->\n        <!--</ion-item-options>-->\n        <!--</ion-item-sliding>-->\n        <!--</span>-->\n\n        <!--</ion-list>-->\n\n\n    <!--</ion-list>-->\n\n    <ion-fab right bottom>\n        <button ion-fab mini (click)="scrollToTop()">\n            <ion-icon name="arrow-round-up"></ion-icon>\n        </button>\n    </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/distribution-articles/distribution-articles.html"*/,
        providers: [MyFilterPipe]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_transfer__["a" /* Transfer */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_path__["a" /* FilePath */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["v" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["r" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["q" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["w" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* ModalController */],
        MyFilterPipe,
        __WEBPACK_IMPORTED_MODULE_9__providers_order_order__["a" /* OrderProvider */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["u" /* Tabs */],
        __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
], DistributionArticlesPage);

//# sourceMappingURL=distribution-articles.js.map

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DistributionFilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DistributionFilterPage = (function () {
    function DistributionFilterPage(navCtrl, viewCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.groupFilter = "";
        this.listingFilter = "";
        this.groups = this.navParams.data.groups;
        this.listings = this.navParams.data.listings;
    }
    DistributionFilterPage.prototype.back = function () {
        this.viewCtrl.dismiss({
            listingFilter: this.listingFilter,
            groupFilter: this.groupFilter
        });
    };
    DistributionFilterPage.prototype.apply = function () {
        this.viewCtrl.dismiss({
            listingFilter: this.listingFilter,
            groupFilter: this.groupFilter
        });
    };
    return DistributionFilterPage;
}());
DistributionFilterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-distribution-filter',template:/*ion-inline-start:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/distribution-filter/distribution-filter.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="back()">\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Distribution Filter</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="apply()">\n        Apply\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <!--<div style="background-color: #f4f4f4; padding-left: 17px; padding-top: 2.5%; padding-bottom: 2.5%; font-weight: bold; border-bottom: 1px solid #A9A9A9">-->\n    <!--Articles-->\n  <!--</div>-->\n  <!--<ion-item>-->\n    <!--<ion-select [(ngModel)]="articleFilter">-->\n      <!--<ion-option value="0">All articles</ion-option>-->\n      <!--<ion-option value="1">Missing articles</ion-option>-->\n    <!--</ion-select>-->\n  <!--</ion-item>-->\n\n  <!--<div style="background-color: #f4f4f4; padding-left: 17px; padding-top: 2.5%; padding-bottom: 2.5%; font-weight: bold; border-bottom: 1px solid #A9A9A9">-->\n    <!--Listings-->\n  <!--</div>-->\n  <!--<ion-item>-->\n    <!--<ion-select [(ngModel)]="listingFilter">-->\n      <!--<ion-option value="0">All articles</ion-option>-->\n      <!--<ion-option value="1">Store Articles</ion-option>-->\n    <!--</ion-select>-->\n  <!--</ion-item>-->\n\n  <div style="background-color: #f4f4f4; padding-left: 17px; padding-top: 2.5%; padding-bottom: 2.5%; font-weight: bold; border-bottom: 1px solid #A9A9A9">\n    Groups\n  </div>\n  <ion-item>\n    <ion-select [(ngModel)]="groupFilter">\n        <!--<ion-option value="0">All Groups</ion-option>-->\n      <ion-option *ngFor="let group of groups" value="{{group.id}}">{{group.name}}</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <div style="background-color: #f4f4f4; padding-left: 17px; padding-top: 2.5%; padding-bottom: 2.5%; font-weight: bold; border-bottom: 1px solid #A9A9A9">\n    Listings\n  </div>\n  <ion-item>\n    <ion-select [(ngModel)]="listingFilter">\n      <ion-option value="all">All articles</ion-option>\n      <ion-option *ngFor="let listing of listings" value="{{listing}}">{{listing}}</ion-option>\n    </ion-select>\n  </ion-item>\n</ion-content>'/*ion-inline-end:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/distribution-filter/distribution-filter.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */]])
], DistributionFilterPage);

//# sourceMappingURL=distribution-filter.js.map

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DistributionNotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DistributionNotePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DistributionNotePage = (function () {
    function DistributionNotePage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    DistributionNotePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DistributionNotePage');
    };
    DistributionNotePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss({ note: this.note });
    };
    DistributionNotePage.prototype.saveNote = function () {
        this.viewCtrl.dismiss({ note: this.note });
    };
    return DistributionNotePage;
}());
DistributionNotePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-distribution-note',template:/*ion-inline-start:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/distribution-note/distribution-note.html"*/'<ion-content class="main-view">\n    <div class="overlay" (click)="dismiss()"></div>\n    <div class="modal_content">\n        <h4 style="text-align: center">Add New Note</h4><br/>\n        <ion-textarea [(ngModel)]="note" rows="5" style="border: 1px solid grey" placeholder="add note..."></ion-textarea>\n\n\n\n        <br/>\n        <button style="width: 45%; margin-left: 2%; margin-right: 2%" round color="main" ion-button (click)="dismiss()">\n            Cancel\n        </button>\n        <button style="width: 45%; margin-left: 2%; margin-right: 2%" round color="main" ion-button (click)="saveNote()">\n            Create\n        </button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/distribution-note/distribution-note.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */]])
], DistributionNotePage);

//# sourceMappingURL=distribution-note.js.map

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarModePopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CalendarModePopoverPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CalendarModePopoverPage = (function () {
    function CalendarModePopoverPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.modes = ['day', 'week', 'month'];
    }
    CalendarModePopoverPage.prototype.onModeSelected = function (mode) {
        this.viewCtrl.dismiss(mode);
    };
    return CalendarModePopoverPage;
}());
CalendarModePopoverPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-calendar-mode-popover',template:/*ion-inline-start:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/calendar-mode-popover/calendar-mode-popover.html"*/'<ion-list>\n    <button ion-item style="text-align: center" *ngFor="let mode of modes" (click)="onModeSelected(mode)">\n      {{ mode }}\n    </button>  \n</ion-list>'/*ion-inline-end:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/calendar-mode-popover/calendar-mode-popover.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */]])
], CalendarModePopoverPage);

//# sourceMappingURL=calendar-mode-popover.js.map

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_details_store_details__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the VisitEditModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var VisitEditModalPage = (function () {
    function VisitEditModalPage(viewCtrl, navCtrl, navParams, alertCtrl) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.visitTypes = [];
        this.dateTimePickerOptions = {
            timeFormat: 'H:ii',
            dateFormat: 'd MM yy',
            dateWheels: '|D M d|'
        };
        this.visit = navParams.data.visit;
        //this.visit.start = this.visit.startDate.toISOString();
        //this.visit.end = this.visit.endDate.toISOString();
        this.visitTypes = navParams.data.visitTypes;
        this.store = navParams.data.store;
        console.log(this.store);
    }
    VisitEditModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    VisitEditModalPage.prototype.goToStoreDetails = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__store_details_store_details__["a" /* StoreDetailsPage */], { store: this.store });
    };
    VisitEditModalPage.prototype.save = function () {
        this.viewCtrl.dismiss({ reason: 'update', editedVisit: this.visit });
    };
    VisitEditModalPage.prototype.delete = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Confirm',
            message: "Are you sure you want to delete this visit?",
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Yes',
                    handler: function (data) {
                        _this.viewCtrl.dismiss({ reason: 'delete' });
                    }
                }
            ]
        });
        prompt.present();
    };
    return VisitEditModalPage;
}());
VisitEditModalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-visit-edit-modal',template:/*ion-inline-start:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/visit-edit-modal/visit-edit-modal.html"*/'<ion-header>\n\n    <ion-navbar>\n        <div style="padding: 0 10px">\n            <span text-uppercase (click)="dismiss()">Close</span>\n            <span text-uppercase float-right (click)="save()">Save</span>\n        </div>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <form>\n        <ion-list>\n            <ion-list-header>\n                {{visit.title}}\n            </ion-list-header>\n            <button ion-item (click)="goToStoreDetails()">\n                Go to actions <ion-icon float-right name="ios-arrow-forward"></ion-icon>\n            </button>\n            <ion-item>\n                <ion-label>Visit Type</ion-label>\n                <ion-select [(ngModel)]="visit.visit_type_id" name="visitType">\n                    <ion-option *ngFor="let visitType of visitTypes" [value]="visitType.id">{{visitType.name}}</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>Note</ion-label>\n                <ion-textarea [(ngModel)]="visit.note" name="note"></ion-textarea>\n            </ion-item>\n            <ion-row>\n                <ion-item col-3>\n                    <ion-label>Start</ion-label>\n                </ion-item>\n                <ion-item col-4 no-padding text-center>\n                    <mbsc-calendar text-right [(ngModel)]="visit.start" [options]="{ display: \'center\', weekCounter: \'year\', firstDay: 1}" name="startDate"></mbsc-calendar>\n                </ion-item>\n                <ion-item col-3 no-padding text-center>\n                    <ion-input text-right [(ngModel)]="visit.start" mbsc-time [mbsc-options]="dateTimePickerOptions" name="startTime"></ion-input>\n                </ion-item>\n                <ion-item col-2 no-padding text-center>\n                    <ion-icon name="locate" style="font-size:1.8em"></ion-icon>\n                </ion-item>\n            </ion-row>\n            <ion-row>\n                <ion-item col-3>\n                    <ion-label>End</ion-label>\n                </ion-item>\n                <ion-item col-4 no-padding text-center>\n                    <mbsc-calendar text-right [(ngModel)]="visit.end" [options]="{ display: \'center\', weekCounter: \'year\', firstDay: 1 }" name="endDate"></mbsc-calendar>\n                </ion-item>\n                <ion-item col-3 no-padding text-center>\n                    <ion-input text-right [(ngModel)]="visit.end" mbsc-time [mbsc-options]="dateTimePickerOptions" name="endTime"></ion-input>\n                </ion-item>\n                <ion-item col-2 no-padding text-center>\n                    <ion-icon name="locate" style="font-size:1.8em"></ion-icon>\n                </ion-item>\n            </ion-row>\n            <ion-item>\n                <ion-label>Completed</ion-label>\n                <ion-toggle [(ngModel)]="visit.status" name="status"></ion-toggle>\n            </ion-item>\n            <ion-item>\n                <ion-label>Booked</ion-label>\n                <ion-toggle [(ngModel)]="visit.booked" name="booked"></ion-toggle>\n            </ion-item>\n        </ion-list>\n        <div padding>\n            <button type="button" (click)="delete()" ion-button block color="danger">Delete</button>\n        </div>\n    </form>\n</ion-content>'/*ion-inline-end:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/visit-edit-modal/visit-edit-modal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], VisitEditModalPage);

//# sourceMappingURL=visit-edit-modal.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(478);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mobiscroll_angular__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_request_interceptor_service__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_distribution_third_distribution_third__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_distribution_second_distribution_second__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_dashboard_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_call_number__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__(792);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_moment__ = __webpack_require__(797);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ion_datepicker__ = __webpack_require__(799);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_signaturepad__ = __webpack_require__(804);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_signaturepad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_angular2_signaturepad__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ionic_gallery_modal__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ionic2_calendar__ = __webpack_require__(805);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ng2_charts__ = __webpack_require__(816);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_login_login__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_home_home__ = __webpack_require__(863);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_visit_visit__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_visit_stores_visit_stores__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_form_form__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_camera__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_file__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_file_path__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_store_details_store_details__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_store_details_actions_store_details_actions__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_store_details_orders_store_details_orders__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_store_details_history_store_details_history__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_order_formation_order_formation__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_order_cart_order_cart__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_order_send_order_send__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_order_history_order_history__ = __webpack_require__(864);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_order_formation_add_order_order_formation_add_order__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_order_calculator_order_calculator__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_order_cart_edit_order_cart_edit__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_order_history_details_order_history_details__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_order_history_item_details_order_history_item_details__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_store_details_contact_add_store_details_contact_add__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_store_filter_store_filter__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_distibution_photo_crop_distibution_photo_crop__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_distribution_answer_detail_distribution_answer_detail__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_distribution_filter_distribution_filter__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_distribution_filter_2_distribution_filter_2__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_calendar_mode_popover_calendar_mode_popover__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_visit_edit_modal_visit_edit_modal__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__providers_common_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__providers_visit_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_distribution_note_distribution_note__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__components_progress_bar_progress_bar__ = __webpack_require__(865);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__providers_order_order__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__providers_api_api__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_distribution_distribution__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pages_distribution_photo_add_distribution_photo_add__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__ionic_native_transfer__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__ionic_native_keyboard__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__pages_store_details_contacts_store_details_contacts__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__providers_contact_contact__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__pages_store_details_contact_detail_store_details_contact_detail__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64_ngx_img_cropper__ = __webpack_require__(866);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65_angular_cropperjs__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65_angular_cropperjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_65_angular_cropperjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__components_progress_bar_2_progress_bar_2__ = __webpack_require__(874);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__pages_dashboard_first_dashboard_first__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__pipes__ = __webpack_require__(875);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__components_normal_progress_bar_normal_progress_bar__ = __webpack_require__(877);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__pages_plan_visit_plan_visit__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__providers_authentication_service__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__pages_calendar_calendar__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__pages_distribution_articles_distribution_articles__ = __webpack_require__(439);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















// PAGES

































// PROVIDERS





















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_64_ngx_img_cropper__["a" /* ImageCropperComponent */],
            __WEBPACK_IMPORTED_MODULE_57__pages_distribution_distribution__["b" /* MyFilterPipe */],
            __WEBPACK_IMPORTED_MODULE_24__pages_visit_visit__["a" /* VisitPage */],
            __WEBPACK_IMPORTED_MODULE_58__pages_distribution_photo_add_distribution_photo_add__["a" /* DistributionPhotoAddPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_form_form__["a" /* FormPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_61__pages_store_details_contacts_store_details_contacts__["a" /* StoreDetailsContactsPage */],
            __WEBPACK_IMPORTED_MODULE_57__pages_distribution_distribution__["a" /* DistributionPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_visit_stores_visit_stores__["a" /* VisitStoresPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_72__pages_calendar_calendar__["a" /* CalendarPage */],
            __WEBPACK_IMPORTED_MODULE_68__pipes__["c" /* StoreFilterPipe */],
            __WEBPACK_IMPORTED_MODULE_68__pipes__["b" /* NumerallyPipe */],
            __WEBPACK_IMPORTED_MODULE_68__pipes__["a" /* FilterFnPipe */],
            __WEBPACK_IMPORTED_MODULE_30__pages_store_details_store_details__["a" /* StoreDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_store_details_actions_store_details_actions__["a" /* StoreDetailsActionsPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_store_details_orders_store_details_orders__["a" /* StoreDetailsOrdersPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_store_details_history_store_details_history__["a" /* StoreDetailsHistoryPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_order_formation_order_formation__["a" /* OrderFormationPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_order_cart_order_cart__["a" /* OrderCartPage */],
            __WEBPACK_IMPORTED_MODULE_38__pages_order_formation_add_order_order_formation_add_order__["a" /* OrderFormationAddOrderPage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_order_send_order_send__["a" /* OrderSendPage */],
            __WEBPACK_IMPORTED_MODULE_39__pages_order_calculator_order_calculator__["a" /* OrderCalculatorPage */],
            __WEBPACK_IMPORTED_MODULE_40__pages_order_cart_edit_order_cart_edit__["a" /* OrderCartEditPage */],
            __WEBPACK_IMPORTED_MODULE_37__pages_order_history_order_history__["a" /* OrderHistoryPage */],
            __WEBPACK_IMPORTED_MODULE_41__pages_order_history_details_order_history_details__["a" /* OrderHistoryDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_42__pages_order_history_item_details_order_history_item_details__["a" /* OrderHistoryItemDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_49__pages_calendar_mode_popover_calendar_mode_popover__["a" /* CalendarModePopoverPage */],
            __WEBPACK_IMPORTED_MODULE_50__pages_visit_edit_modal_visit_edit_modal__["a" /* VisitEditModalPage */],
            __WEBPACK_IMPORTED_MODULE_43__pages_store_details_contact_add_store_details_contact_add__["a" /* StoreDetailsContactAddPage */],
            __WEBPACK_IMPORTED_MODULE_63__pages_store_details_contact_detail_store_details_contact_detail__["a" /* StoreDetailsContactDetailPage */],
            __WEBPACK_IMPORTED_MODULE_44__pages_store_filter_store_filter__["a" /* StoreFilterPage */],
            __WEBPACK_IMPORTED_MODULE_70__pages_plan_visit_plan_visit__["a" /* PlanVisitPage */],
            __WEBPACK_IMPORTED_MODULE_45__pages_distibution_photo_crop_distibution_photo_crop__["a" /* DistibutionPhotoCropPage */],
            __WEBPACK_IMPORTED_MODULE_46__pages_distribution_answer_detail_distribution_answer_detail__["a" /* DistributionAnswerDetailPage */],
            __WEBPACK_IMPORTED_MODULE_47__pages_distribution_filter_distribution_filter__["a" /* DistributionFilterPage */],
            __WEBPACK_IMPORTED_MODULE_73__pages_distribution_articles_distribution_articles__["a" /* DistributionArticlesPage */],
            __WEBPACK_IMPORTED_MODULE_54__components_progress_bar_progress_bar__["a" /* ProgressBarComponent */],
            __WEBPACK_IMPORTED_MODULE_66__components_progress_bar_2_progress_bar_2__["a" /* ProgressBar_2Component */],
            __WEBPACK_IMPORTED_MODULE_67__pages_dashboard_first_dashboard_first__["a" /* DashboardFirstPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_distribution_second_distribution_second__["a" /* DistributionSecondPage */],
            __WEBPACK_IMPORTED_MODULE_3__pages_distribution_third_distribution_third__["a" /* DistributionThirdPage */],
            __WEBPACK_IMPORTED_MODULE_54__components_progress_bar_progress_bar__["a" /* ProgressBarComponent */],
            __WEBPACK_IMPORTED_MODULE_53__pages_distribution_note_distribution_note__["a" /* DistributionNotePage */],
            __WEBPACK_IMPORTED_MODULE_48__pages_distribution_filter_2_distribution_filter_2__["a" /* DistributionFilter_2Page */],
            __WEBPACK_IMPORTED_MODULE_69__components_normal_progress_bar_normal_progress_bar__["a" /* NormalProgressBarComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__mobiscroll_angular__["a" /* MbscModule */],
            __WEBPACK_IMPORTED_MODULE_20_ionic2_calendar__["a" /* NgCalendarModule */],
            __WEBPACK_IMPORTED_MODULE_65_angular_cropperjs__["AngularCropperjsModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_18_angular2_signaturepad__["SignaturePadModule"],
            __WEBPACK_IMPORTED_MODULE_16_angular2_moment__["MomentModule"],
            __WEBPACK_IMPORTED_MODULE_19_ionic_gallery_modal__["b" /* GalleryModalModule */],
            __WEBPACK_IMPORTED_MODULE_17_ion_datepicker__["a" /* DatePickerModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["c" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_21_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["i" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */], { mode: 'md', tabsPlacement: 'bottom' })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["g" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_58__pages_distribution_photo_add_distribution_photo_add__["a" /* DistributionPhotoAddPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_visit_visit__["a" /* VisitPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_form_form__["a" /* FormPage */],
            __WEBPACK_IMPORTED_MODULE_61__pages_store_details_contacts_store_details_contacts__["a" /* StoreDetailsContactsPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_visit_stores_visit_stores__["a" /* VisitStoresPage */],
            __WEBPACK_IMPORTED_MODULE_57__pages_distribution_distribution__["a" /* DistributionPage */],
            __WEBPACK_IMPORTED_MODULE_72__pages_calendar_calendar__["a" /* CalendarPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_store_details_store_details__["a" /* StoreDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_store_details_actions_store_details_actions__["a" /* StoreDetailsActionsPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_store_details_orders_store_details_orders__["a" /* StoreDetailsOrdersPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_store_details_history_store_details_history__["a" /* StoreDetailsHistoryPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_order_formation_order_formation__["a" /* OrderFormationPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_order_cart_order_cart__["a" /* OrderCartPage */],
            __WEBPACK_IMPORTED_MODULE_38__pages_order_formation_add_order_order_formation_add_order__["a" /* OrderFormationAddOrderPage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_order_send_order_send__["a" /* OrderSendPage */],
            __WEBPACK_IMPORTED_MODULE_39__pages_order_calculator_order_calculator__["a" /* OrderCalculatorPage */],
            __WEBPACK_IMPORTED_MODULE_40__pages_order_cart_edit_order_cart_edit__["a" /* OrderCartEditPage */],
            __WEBPACK_IMPORTED_MODULE_37__pages_order_history_order_history__["a" /* OrderHistoryPage */],
            __WEBPACK_IMPORTED_MODULE_41__pages_order_history_details_order_history_details__["a" /* OrderHistoryDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_42__pages_order_history_item_details_order_history_item_details__["a" /* OrderHistoryItemDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_49__pages_calendar_mode_popover_calendar_mode_popover__["a" /* CalendarModePopoverPage */],
            __WEBPACK_IMPORTED_MODULE_50__pages_visit_edit_modal_visit_edit_modal__["a" /* VisitEditModalPage */],
            __WEBPACK_IMPORTED_MODULE_43__pages_store_details_contact_add_store_details_contact_add__["a" /* StoreDetailsContactAddPage */],
            __WEBPACK_IMPORTED_MODULE_63__pages_store_details_contact_detail_store_details_contact_detail__["a" /* StoreDetailsContactDetailPage */],
            __WEBPACK_IMPORTED_MODULE_44__pages_store_filter_store_filter__["a" /* StoreFilterPage */],
            __WEBPACK_IMPORTED_MODULE_45__pages_distibution_photo_crop_distibution_photo_crop__["a" /* DistibutionPhotoCropPage */],
            __WEBPACK_IMPORTED_MODULE_46__pages_distribution_answer_detail_distribution_answer_detail__["a" /* DistributionAnswerDetailPage */],
            __WEBPACK_IMPORTED_MODULE_47__pages_distribution_filter_distribution_filter__["a" /* DistributionFilterPage */],
            __WEBPACK_IMPORTED_MODULE_67__pages_dashboard_first_dashboard_first__["a" /* DashboardFirstPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_distribution_second_distribution_second__["a" /* DistributionSecondPage */],
            __WEBPACK_IMPORTED_MODULE_3__pages_distribution_third_distribution_third__["a" /* DistributionThirdPage */],
            __WEBPACK_IMPORTED_MODULE_73__pages_distribution_articles_distribution_articles__["a" /* DistributionArticlesPage */],
            __WEBPACK_IMPORTED_MODULE_53__pages_distribution_note_distribution_note__["a" /* DistributionNotePage */],
            __WEBPACK_IMPORTED_MODULE_48__pages_distribution_filter_2_distribution_filter_2__["a" /* DistributionFilter_2Page */],
            __WEBPACK_IMPORTED_MODULE_70__pages_plan_visit_plan_visit__["a" /* PlanVisitPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_27__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_59__ionic_native_transfer__["a" /* Transfer */],
            __WEBPACK_IMPORTED_MODULE_60__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_28__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_29__ionic_native_file_path__["a" /* FilePath */],
            { provide: __WEBPACK_IMPORTED_MODULE_8__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["h" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_71__providers_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_55__providers_order_order__["a" /* OrderProvider */],
            __WEBPACK_IMPORTED_MODULE_56__providers_api_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_51__providers_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_52__providers_visit_service__["a" /* VisitService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_dashboard_service__["a" /* DashboardService */],
            __WEBPACK_IMPORTED_MODULE_62__providers_contact_contact__["a" /* ContactProvider */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                useClass: __WEBPACK_IMPORTED_MODULE_1__providers_request_interceptor_service__["a" /* RequestInterceptorService */],
                multi: true,
            }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestInterceptorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RequestInterceptorService = (function () {
    function RequestInterceptorService(authService) {
        this.authService = authService;
    }
    RequestInterceptorService.prototype.addToken = function (req, token) {
        var newParams = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]({ fromString: req.params.toString() });
        newParams = newParams.append('auth_token', token);
        newParams = newParams.append('api', '1');
        newParams = newParams.append('response_type', 'application/json');
        return req.clone({ params: newParams });
    };
    RequestInterceptorService.prototype.intercept = function (req, next) {
        var _this = this;
        return this.authService.getToken().flatMap(function (token) {
            return next.handle(_this.addToken(req, _this.authService.token));
        });
    };
    return RequestInterceptorService;
}());
RequestInterceptorService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]])
], RequestInterceptorService);

//# sourceMappingURL=request.interceptor.service.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_models_visit_type__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_models_sales_period__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_models_region__ = __webpack_require__(788);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__globals__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CommonService = (function () {
    function CommonService(http) {
        this.http = http;
    }
    CommonService.prototype.fetchVisitTypes = function (params) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__globals__["a" /* Globals */].api + 'visitType/apiList', { params: params }).map(function (res) { return __WEBPACK_IMPORTED_MODULE_0__app_models_visit_type__["a" /* VisitType */].fromJSONArray(res); });
    };
    CommonService.prototype.fetchSalesPeriods = function (params) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__globals__["a" /* Globals */].api + 'salesPeriod/apiList', { params: params }).map(function (res) { return __WEBPACK_IMPORTED_MODULE_2__app_models_sales_period__["a" /* SalesPeriod */].fromJSONArray(res); });
    };
    CommonService.prototype.fetchRegions = function (params) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__globals__["a" /* Globals */].api + 'region/apiList', { params: params }).map(function (res) { return __WEBPACK_IMPORTED_MODULE_4__app_models_region__["a" /* Region */].fromJSONArray(res); });
    };
    return CommonService;
}());
CommonService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
], CommonService);

//# sourceMappingURL=common.service.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactProvider = (function () {
    function ContactProvider(_api) {
        this._api = _api;
    }
    /**
     * @desc:
     * @request_method: GET
     * @params:
     */
    ContactProvider.prototype.deleteContact = function (params) {
        return this._api.get('storeContact/delete', params);
    };
    /**
     * @desc:
     * @request_method: POST
     * @params:
     */
    ContactProvider.prototype.createContact = function (payload, store) {
        return this._api.post('storeContact/create?storeId=' + store.id, payload);
    };
    /**
     * @desc:
     * @request_method: POST
     * @params:
     */
    ContactProvider.prototype.updateContact = function (payload, contact) {
        return this._api.post('storeContact/update?id=' + contact.id, payload);
    };
    ContactProvider.prototype.getTags = function () {
        return this._api.get('site/tags', {});
    };
    ContactProvider.prototype.getCategories = function () {
        return this._api.get('site/storeCategories', {});
    };
    ContactProvider.prototype.getStoreVisits = function () {
        return this._api.get('store/storeVisits', {});
    };
    return ContactProvider;
}());
ContactProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* Api */]])
], ContactProvider);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderProvider = (function () {
    function OrderProvider(_api) {
        this._api = _api;
    }
    /**
     * @desc:
     * @request_method: GET
     * @params:
     */
    OrderProvider.prototype.getArticleGroups = function (params) {
        return this._api.get('site/articleGroups', params);
    };
    /**
     * @desc:
     * @request_method: GET
     * @params: expand;
     */
    OrderProvider.prototype.getArticles = function (params) {
        return this._api.get('article', params);
    };
    /**
     * @desc:
     * @request_method: GET
     * @params: expand;
     */
    OrderProvider.prototype.getLazyArticles = function (params) {
        return this._api.get('article/lazyList', params);
    };
    /**
     * @desc:
     * @request_method: GET
     * @params: indexBy;
     */
    OrderProvider.prototype.getOrderTypes = function (params) {
        return this._api.get('site/orderTypes', params);
    };
    /**
     * @desc:
     * @request_method: GET
     * @params: store_id;
     */
    OrderProvider.prototype.getListings = function (params) {
        return this._api.get('order/getListings', params);
    };
    /**
     * @desc:
     * @request_method: GET
     * @params: store_id;
     */
    OrderProvider.prototype.getPricing = function (params) {
        return this._api.get('order/getPricing', params);
    };
    /**
     * @desc:
     * @request_method: POST
     * @payload: ;
     */
    OrderProvider.prototype.sendOrder = function (payload, store) {
        return this._api.post('order/makeOrder?storeId=' + store.id, payload);
    };
    /**
     * @desc:
     * @request_method: GET
     * @payload: ;
     */
    OrderProvider.prototype.checkDuplicateOrder = function (params) {
        return this._api.get('order/checkDuplicateOrder', params);
    };
    /**
     * @desc:
     * @request_method: GET
     * @params:
     */
    OrderProvider.prototype.getOrderHistory = function (params) {
        return this._api.get('order/list', params);
    };
    return OrderProvider;
}());
OrderProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* Api */]])
], OrderProvider);

//# sourceMappingURL=order.js.map

/***/ }),

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Visit; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__visit_type__ = __webpack_require__(327);


var Visit = (function () {
    function Visit(id, storeId, title, note, visit_type_id, start, duration, status, booked) {
        this.id = id;
        this.storeId = storeId;
        this.title = title;
        this.note = note;
        this.visit_type_id = +visit_type_id;
        this.start = __WEBPACK_IMPORTED_MODULE_0_moment__(start).toDate();
        this.end = __WEBPACK_IMPORTED_MODULE_0_moment__(start).add(duration, 'minutes').toDate();
        this.status = !!+status;
        this.booked = !!+booked;
    }
    Visit.fromJSONArray = function (array) {
        var _this = this;
        return array.map(function (o) { return _this.fromJSONObject(o); });
    };
    Visit.fromJSONObject = function (o) {
        var visit = new Visit(o.id, o.store_id, o.title, o.note, o.visit_type_id, o.start, o.duration, o.status, o.booked);
        if (o.visitType) {
            visit.visitType = __WEBPACK_IMPORTED_MODULE_1__visit_type__["a" /* VisitType */].fromJSONObject(o.visitType);
        }
        if (o.store) {
            visit.store = o.store;
        }
        return visit;
    };
    return Visit;
}());

//# sourceMappingURL=visit.js.map

/***/ }),

/***/ 753:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 208,
	"./af.js": 208,
	"./ar": 209,
	"./ar-dz": 210,
	"./ar-dz.js": 210,
	"./ar-kw": 211,
	"./ar-kw.js": 211,
	"./ar-ly": 212,
	"./ar-ly.js": 212,
	"./ar-ma": 213,
	"./ar-ma.js": 213,
	"./ar-sa": 214,
	"./ar-sa.js": 214,
	"./ar-tn": 215,
	"./ar-tn.js": 215,
	"./ar.js": 209,
	"./az": 216,
	"./az.js": 216,
	"./be": 217,
	"./be.js": 217,
	"./bg": 218,
	"./bg.js": 218,
	"./bm": 219,
	"./bm.js": 219,
	"./bn": 220,
	"./bn.js": 220,
	"./bo": 221,
	"./bo.js": 221,
	"./br": 222,
	"./br.js": 222,
	"./bs": 223,
	"./bs.js": 223,
	"./ca": 224,
	"./ca.js": 224,
	"./cs": 225,
	"./cs.js": 225,
	"./cv": 226,
	"./cv.js": 226,
	"./cy": 227,
	"./cy.js": 227,
	"./da": 228,
	"./da.js": 228,
	"./de": 229,
	"./de-at": 230,
	"./de-at.js": 230,
	"./de-ch": 231,
	"./de-ch.js": 231,
	"./de.js": 229,
	"./dv": 232,
	"./dv.js": 232,
	"./el": 233,
	"./el.js": 233,
	"./en-au": 234,
	"./en-au.js": 234,
	"./en-ca": 235,
	"./en-ca.js": 235,
	"./en-gb": 236,
	"./en-gb.js": 236,
	"./en-ie": 237,
	"./en-ie.js": 237,
	"./en-nz": 238,
	"./en-nz.js": 238,
	"./eo": 239,
	"./eo.js": 239,
	"./es": 240,
	"./es-do": 241,
	"./es-do.js": 241,
	"./es-us": 242,
	"./es-us.js": 242,
	"./es.js": 240,
	"./et": 243,
	"./et.js": 243,
	"./eu": 244,
	"./eu.js": 244,
	"./fa": 245,
	"./fa.js": 245,
	"./fi": 246,
	"./fi.js": 246,
	"./fo": 247,
	"./fo.js": 247,
	"./fr": 248,
	"./fr-ca": 249,
	"./fr-ca.js": 249,
	"./fr-ch": 250,
	"./fr-ch.js": 250,
	"./fr.js": 248,
	"./fy": 251,
	"./fy.js": 251,
	"./gd": 252,
	"./gd.js": 252,
	"./gl": 253,
	"./gl.js": 253,
	"./gom-latn": 254,
	"./gom-latn.js": 254,
	"./gu": 255,
	"./gu.js": 255,
	"./he": 256,
	"./he.js": 256,
	"./hi": 257,
	"./hi.js": 257,
	"./hr": 258,
	"./hr.js": 258,
	"./hu": 259,
	"./hu.js": 259,
	"./hy-am": 260,
	"./hy-am.js": 260,
	"./id": 261,
	"./id.js": 261,
	"./is": 262,
	"./is.js": 262,
	"./it": 263,
	"./it.js": 263,
	"./ja": 264,
	"./ja.js": 264,
	"./jv": 265,
	"./jv.js": 265,
	"./ka": 266,
	"./ka.js": 266,
	"./kk": 267,
	"./kk.js": 267,
	"./km": 268,
	"./km.js": 268,
	"./kn": 269,
	"./kn.js": 269,
	"./ko": 270,
	"./ko.js": 270,
	"./ky": 271,
	"./ky.js": 271,
	"./lb": 272,
	"./lb.js": 272,
	"./lo": 273,
	"./lo.js": 273,
	"./lt": 274,
	"./lt.js": 274,
	"./lv": 275,
	"./lv.js": 275,
	"./me": 276,
	"./me.js": 276,
	"./mi": 277,
	"./mi.js": 277,
	"./mk": 278,
	"./mk.js": 278,
	"./ml": 279,
	"./ml.js": 279,
	"./mr": 280,
	"./mr.js": 280,
	"./ms": 281,
	"./ms-my": 282,
	"./ms-my.js": 282,
	"./ms.js": 281,
	"./mt": 283,
	"./mt.js": 283,
	"./my": 284,
	"./my.js": 284,
	"./nb": 285,
	"./nb.js": 285,
	"./ne": 286,
	"./ne.js": 286,
	"./nl": 287,
	"./nl-be": 288,
	"./nl-be.js": 288,
	"./nl.js": 287,
	"./nn": 289,
	"./nn.js": 289,
	"./pa-in": 290,
	"./pa-in.js": 290,
	"./pl": 291,
	"./pl.js": 291,
	"./pt": 292,
	"./pt-br": 293,
	"./pt-br.js": 293,
	"./pt.js": 292,
	"./ro": 294,
	"./ro.js": 294,
	"./ru": 295,
	"./ru.js": 295,
	"./sd": 296,
	"./sd.js": 296,
	"./se": 297,
	"./se.js": 297,
	"./si": 298,
	"./si.js": 298,
	"./sk": 299,
	"./sk.js": 299,
	"./sl": 300,
	"./sl.js": 300,
	"./sq": 301,
	"./sq.js": 301,
	"./sr": 302,
	"./sr-cyrl": 303,
	"./sr-cyrl.js": 303,
	"./sr.js": 302,
	"./ss": 304,
	"./ss.js": 304,
	"./sv": 305,
	"./sv.js": 305,
	"./sw": 306,
	"./sw.js": 306,
	"./ta": 307,
	"./ta.js": 307,
	"./te": 308,
	"./te.js": 308,
	"./tet": 309,
	"./tet.js": 309,
	"./th": 310,
	"./th.js": 310,
	"./tl-ph": 311,
	"./tl-ph.js": 311,
	"./tlh": 312,
	"./tlh.js": 312,
	"./tr": 313,
	"./tr.js": 313,
	"./tzl": 314,
	"./tzl.js": 314,
	"./tzm": 315,
	"./tzm-latn": 316,
	"./tzm-latn.js": 316,
	"./tzm.js": 315,
	"./uk": 317,
	"./uk.js": 317,
	"./ur": 318,
	"./ur.js": 318,
	"./uz": 319,
	"./uz-latn": 320,
	"./uz-latn.js": 320,
	"./uz.js": 319,
	"./vi": 321,
	"./vi.js": 321,
	"./x-pseudo": 322,
	"./x-pseudo.js": 322,
	"./yo": 323,
	"./yo.js": 323,
	"./zh-cn": 324,
	"./zh-cn.js": 324,
	"./zh-hk": 325,
	"./zh-hk.js": 325,
	"./zh-tw": 326,
	"./zh-tw.js": 326
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 753;

/***/ }),

/***/ 787:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalesPeriod; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);

var SalesPeriod = (function () {
    function SalesPeriod(id, name, startDate, endDate) {
        this.id = id;
        this.name = name;
        this.startDate = __WEBPACK_IMPORTED_MODULE_0_moment__(startDate).toDate();
        this.endDate = __WEBPACK_IMPORTED_MODULE_0_moment__(endDate).toDate();
    }
    SalesPeriod.fromJSONArray = function (array) {
        var _this = this;
        return array.map(function (o) { return _this.fromJSONObject(o); });
    };
    SalesPeriod.fromJSONObject = function (o) {
        return new SalesPeriod(o.id, o.name, o.start_date, o.end_date);
    };
    return SalesPeriod;
}());

//# sourceMappingURL=sales-period.js.map

/***/ }),

/***/ 788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Region; });
var Region = (function () {
    function Region(id, name, salesManagerId) {
        this.id = id;
        this.name = name;
        this.salesManagerId = salesManagerId;
    }
    Region.fromJSONObject = function (o) {
        var region = new Region(o.id, o.name, o.sales_manager_id);
        if (o.manager) {
            region.manager = o.manager;
        }
        return region;
    };
    Region.fromJSONArray = function (array) {
        var _this = this;
        return array.map(function (o) { return _this.fromJSONObject(o); });
    };
    return Region;
}());

//# sourceMappingURL=region.js.map

/***/ }),

/***/ 792:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_authentication_service__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_dashboard_first_dashboard_first__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_login__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_calendar_calendar__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, keyboard, authenticationService) {
        this.authenticationService = authenticationService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            keyboard.hideKeyboardAccessoryBar(false);
        });
    }
    MyApp.prototype.openCalendar = function () {
        this.menu.close();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_calendar_calendar__["a" /* CalendarPage */]);
    };
    MyApp.prototype.openDashboard = function () {
        this.menu.close();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_1__pages_dashboard_first_dashboard_first__["a" /* DashboardFirstPage */]);
    };
    MyApp.prototype.logout = function () {
        this.menu.close();
        this.authenticationService.logout();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_login_login__["a" /* LoginPage */]);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["o" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["o" /* Nav */])
], MyApp.prototype, "nav", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* Menu */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* Menu */])
], MyApp.prototype, "menu", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({template:/*ion-inline-start:"/Users/eesah/Documents/projects/KeysaleApp/src/app/app.html"*/'<ion-menu [content]="mycontent">\n    <ion-header>\n        <ion-toolbar color="primary">\n            <ion-title>KeySale</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content>\n        <ion-list>\n            <button ion-item (click)="openCalendar()">\n                <ion-icon name="calendar" item-start></ion-icon>\n                Calendar\n            </button>\n            <button ion-item (click)="openDashboard()">\n                <ion-icon name="speedometer" item-start></ion-icon>\n                Dashboard\n            </button>\n            <button ion-item (click)="logout()">\n                <ion-icon name="log-out" item-start></ion-icon>\n                Logout\n            </button>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n\n<ion-nav #mycontent [root]="rootPage"></ion-nav>'/*ion-inline-end:"/Users/eesah/Documents/projects/KeysaleApp/src/app/app.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["r" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__["a" /* Keyboard */],
        __WEBPACK_IMPORTED_MODULE_0__providers_authentication_service__["a" /* AuthenticationService */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 793:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartOptions; });
var ChartOptions = {
    distribution: {
        options: {
            tooltips: { enabled: false },
            legend: {
                display: false
            },
            responsive: false
        },
        colors: [{
                backgroundColor: ['rgba(255, 138, 101, 1)', 'rgba(255, 138, 101, 0.4)'],
                hoverBackgroundColor: ['rgba(255, 138, 101, 1)', 'rgba(255, 138, 101, 0.4)'],
                // backgroundColor: [primaryColor, primaryColor, secondaryColor],
                // hoverBackgroundColor: [primaryColor, primaryColor, secondaryColor],
                borderColor: ['#ffffff', '#ffffff'],
                hoverBorderColor: ['#ffffff', '#ffffff'],
                borderWidth: 0
            },
            {
                backgroundColor: ['rgba(8, 102, 198, 1)', 'rgba(8, 102, 198, 0.4)'],
                hoverBackgroundColor: ['rgba(8, 102, 198, 1)', 'rgba(8, 102, 198, 0.4)'],
                // backgroundColor: [primaryColor, secondaryColor],
                // hoverBackgroundColor: [primaryColor, secondaryColor],
                borderColor: ['#ffffff', '#ffffff'],
                hoverBorderColor: ['#ffffff', '#ffffff'],
                borderWidth: 0
            }]
    }
};
//# sourceMappingURL=chart.options.js.map

/***/ }),

/***/ 794:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetType; });
var WidgetType;
(function (WidgetType) {
    WidgetType[WidgetType["DISTRIBUTION"] = 0] = "DISTRIBUTION";
})(WidgetType || (WidgetType = {}));
//# sourceMappingURL=widget-type.enum.js.map

/***/ }),

/***/ 809:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 863:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <p>\n    {{data}}\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 864:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderHistoryPage = (function () {
    function OrderHistoryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OrderHistoryPage.prototype.ionViewWillEnter = function () {
    };
    return OrderHistoryPage;
}());
OrderHistoryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-order-history',template:/*ion-inline-start:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/order-history/order-history.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title>order-history</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/order-history/order-history.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */]])
], OrderHistoryPage);

//# sourceMappingURL=order-history.js.map

/***/ }),

/***/ 865:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressBarComponent = (function () {
    function ProgressBarComponent() {
    }
    ProgressBarComponent.prototype.filterMissing = function () {
        console.log("blah");
    };
    return ProgressBarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('progress'),
    __metadata("design:type", Object)
], ProgressBarComponent.prototype, "progress", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('total_article'),
    __metadata("design:type", Object)
], ProgressBarComponent.prototype, "total_article", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('total_distribution'),
    __metadata("design:type", Object)
], ProgressBarComponent.prototype, "total_distribution", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('total_distribution_number'),
    __metadata("design:type", Object)
], ProgressBarComponent.prototype, "total_distribution_number", void 0);
ProgressBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'progress-bar',template:/*ion-inline-start:"/Users/eesah/Documents/projects/KeysaleApp/src/components/progress-bar/progress-bar.html"*/'<div class="progress-outer">\n  <div class="progress-inner" [style.width]="progress + \'%\'">\n    {{progress | number : \'1.2-2\'}}%\n  </div>\n</div>\n<div class="kpis">{{total_distribution}}/{{total_article}}</div>\n<div class="kpis2">Trend - {{total_distribution_number}}</div>\n<div class="kpis3">Missing</div>\n'/*ion-inline-end:"/Users/eesah/Documents/projects/KeysaleApp/src/components/progress-bar/progress-bar.html"*/
    }),
    __metadata("design:paramtypes", [])
], ProgressBarComponent);

//# sourceMappingURL=progress-bar.js.map

/***/ }),

/***/ 874:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBar_2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the ProgressBar_2Component component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var ProgressBar_2Component = (function () {
    function ProgressBar_2Component() {
    }
    return ProgressBar_2Component;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('progress'),
    __metadata("design:type", Object)
], ProgressBar_2Component.prototype, "progress", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('type'),
    __metadata("design:type", Object)
], ProgressBar_2Component.prototype, "type", void 0);
ProgressBar_2Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'progress-bar-2',template:/*ion-inline-start:"/Users/eesah/Documents/projects/KeysaleApp/src/components/progress-bar-2/progress-bar-2.html"*/'<div class="bla">{{type}}</div>\n\n<div class="progress-outer" style="float: left">\n    <div class="bla2">\n        {{progress | number : \'1.0-0\'}}%\n    </div>\n  <div class="progress-inner" [style.width]="progress + \'%\'">\n\n  </div>\n</div>\n'/*ion-inline-end:"/Users/eesah/Documents/projects/KeysaleApp/src/components/progress-bar-2/progress-bar-2.html"*/
    }),
    __metadata("design:paramtypes", [])
], ProgressBar_2Component);

//# sourceMappingURL=progress-bar-2.js.map

/***/ }),

/***/ 875:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return StoreFilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NumerallyPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterFnPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_numeral__ = __webpack_require__(876);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_numeral___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_numeral__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var StoreFilterPipe = (function () {
    function StoreFilterPipe() {
    }
    StoreFilterPipe.prototype.transform = function (items, filter, all_stores) {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be kept, false will be filtered out
        return all_stores.filter(function (item) { return item.customer.toLowerCase().indexOf(filter.toLowerCase()) > -1; }).slice(0, 20);
    };
    return StoreFilterPipe;
}());
StoreFilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'storeFilter',
        pure: false
    })
], StoreFilterPipe);

var NumerallyPipe = (function () {
    function NumerallyPipe() {
    }
    NumerallyPipe.prototype.transform = function (numberValue, format) {
        if (numberValue == Infinity || numberValue == -Infinity || isNaN(numberValue) || numberValue == null) {
            numberValue = 0;
        }
        return __WEBPACK_IMPORTED_MODULE_1_numeral__(numberValue).format(format);
    };
    return NumerallyPipe;
}());
NumerallyPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'numerally',
        pure: false
    })
], NumerallyPipe);

var FilterFnPipe = (function () {
    function FilterFnPipe() {
    }
    FilterFnPipe.prototype.transform = function (array, fn) {
        return array.filter(fn);
    };
    return FilterFnPipe;
}());
FilterFnPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'filterFn',
        pure: false
    })
], FilterFnPipe);

//# sourceMappingURL=pipes.js.map

/***/ }),

/***/ 877:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NormalProgressBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the NormalProgressBarComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var NormalProgressBarComponent = (function () {
    function NormalProgressBarComponent() {
    }
    return NormalProgressBarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('progress'),
    __metadata("design:type", Object)
], NormalProgressBarComponent.prototype, "progress", void 0);
NormalProgressBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'normal-progress-bar',template:/*ion-inline-start:"/Users/eesah/Documents/projects/KeysaleApp/src/components/normal-progress-bar/normal-progress-bar.html"*/'<div class="progress-outer">\n    <div class="progress-inner" [style.width]="progress + \'%\'"></div>\n    <div class="progress-number">{{progress}}%</div>\n</div>'/*ion-inline-end:"/Users/eesah/Documents/projects/KeysaleApp/src/components/normal-progress-bar/normal-progress-bar.html"*/
    }),
    __metadata("design:paramtypes", [])
], NormalProgressBarComponent);

//# sourceMappingURL=normal-progress-bar.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardService = (function () {
    function DashboardService(http) {
        this.http = http;
    }
    DashboardService.prototype.fetchDistributions = function (params) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* Globals */].api + 'dashboardApi/distribution', { params: params });
    };
    DashboardService.prototype.fetchDistribution = function (id, params) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* Globals */].api + 'dashboardApi/distribution/' + id, { params: params });
    };
    DashboardService.prototype.fetchDistributionReport = function (id, params) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* Globals */].api + 'dashboardApi/distributionReport/' + id, { params: params });
    };
    return DashboardService;
}());
DashboardService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
], DashboardService);

//# sourceMappingURL=dashboard.service.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreDetailsActionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_common_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__form_form__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__distribution_distribution__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_globals__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the ActionsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var StoreDetailsActionsPage = (function () {
    function StoreDetailsActionsPage(navCtrl, navParams, loader, app, modalCtrl, alertCtrl, http, commonService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loader = loader;
        this.app = app;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.commonService = commonService;
        this.group_actions = {};
        this.ungrouped_actions = [];
        this.groups = [];
        this.distributions = [];
        this.outcomes = [];
        this.store = this.navParams.data;
    }
    StoreDetailsActionsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.actions_loader = this.loader.create({
            content: 'Loading data'
        });
        this.actions_loader.present().then(function () {
            _this.commonService.fetchSalesPeriods().subscribe(function (salesPeriods) {
                _this.salesPeriods = salesPeriods;
                _this.setCurrentSalesPeriod();
                _this.downloadActions(_this.salesPeriod);
                _this.downloadDistributions(_this.salesPeriod);
            });
        });
    };
    StoreDetailsActionsPage.prototype.onSalesPeriodChanged = function () {
        this.downloadActions(this.salesPeriod);
        this.downloadDistributions(this.salesPeriod);
    };
    StoreDetailsActionsPage.prototype.showDistribution = function (distribution) {
        var _this = this;
        setTimeout(function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__distribution_distribution__["a" /* DistributionPage */], { distribution: distribution, store: _this.store });
        }, 200);
    };
    StoreDetailsActionsPage.prototype.showAction = function (action) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__form_form__["a" /* FormPage */], { action: action, store: this.store });
        modal.present();
    };
    StoreDetailsActionsPage.prototype.downloadDistributions = function (salesPeriodId) {
        var _this = this;
        if (salesPeriodId === void 0) { salesPeriodId = undefined; }
        // let actions_loader = this.loader.create({
        //     content: 'Loading distributions'
        // });
        var params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]()
            .set('salesPeriod', salesPeriodId)
            .set('storeId', this.store.id);
        // actions_loader.present().then(() => {
        this.http.get(__WEBPACK_IMPORTED_MODULE_7__providers_globals__["a" /* Globals */].api + 'app/distribution', { params: params }).subscribe(function (distributions) {
            _this.distributions = distributions;
            var params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]().append('storeId', _this.store.id);
            _this.http.get(__WEBPACK_IMPORTED_MODULE_7__providers_globals__["a" /* Globals */].api + 'app/distribution/listByOutcome', { params: params }).subscribe(function (distscore) {
                for (var key in distscore.outcomes) {
                    for (var bla in distscore.distributions) {
                        if (distscore.distributions[bla].id == key) {
                            _this.outcomes[key] = parseInt(distscore.outcomes[key].sold) / parseInt(distscore.outcomes[key].articles_count);
                        }
                    }
                }
            });
            _this.actions_loader.dismissAll();
        });
        // });
    };
    StoreDetailsActionsPage.prototype.downloadActions = function (salesPeriodId) {
        var _this = this;
        // let actions_loader = this.loader.create({
        //     content: 'Loading actions'
        // });
        // actions_loader.present().then(() => {
        var params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]().append('storeId', this.store.id);
        this.http.get(__WEBPACK_IMPORTED_MODULE_7__providers_globals__["a" /* Globals */].api + 'app/actions/groupList', { params: params }).subscribe(function (groups) {
            _this.groups = [];
            for (var _i = 0, groups_1 = groups; _i < groups_1.length; _i++) {
                var group = groups_1[_i];
                group.id = parseInt(group.id);
                group.show = false;
                _this.groups.push(group);
            }
            var params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]()
                .set('salesPeriod', salesPeriodId)
                .set('storeId', _this.store.id)
                .set('expand', 'formSettings');
            _this.http.get(__WEBPACK_IMPORTED_MODULE_7__providers_globals__["a" /* Globals */].api + 'app/actions', { params: params }).subscribe(function (actions) {
                _this.group_actions = {};
                _this.ungrouped_actions = [];
                for (var _i = 0, actions_1 = actions; _i < actions_1.length; _i++) {
                    var action = actions_1[_i];
                    if (!_this.group_actions[action.form_group_id]) {
                        _this.group_actions[action.form_group_id] = [];
                    }
                    if (!action.form_group_id)
                        _this.ungrouped_actions.push(action);
                    _this.group_actions[action.form_group_id].push(action);
                }
                // actions_loader.dismissAll();
            });
        });
        // });
    };
    StoreDetailsActionsPage.prototype.setCurrentSalesPeriod = function () {
        var nowMoment = __WEBPACK_IMPORTED_MODULE_5_moment__();
        var currentSalesPeriod = this.salesPeriods.find(function (s) {
            return nowMoment.isBetween(s.startDate, s.endDate, 'day', '[]');
        });
        if (currentSalesPeriod) {
            this.salesPeriod = currentSalesPeriod.id;
        }
    };
    StoreDetailsActionsPage.prototype.back = function () {
        this.app.navPop();
    };
    StoreDetailsActionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ActionsPage');
    };
    return StoreDetailsActionsPage;
}());
StoreDetailsActionsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'page-store-details-actions',template:/*ion-inline-start:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/store-details-actions/store-details-actions.html"*/'<!--\n  Generated template for the ActionsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="primary">\n        <ion-buttons left>\n            <button ion-button icon-only (click)="back()">\n                <ion-icon name="arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title text-center>{{store.customer}}</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-select [(ngModel)]="salesPeriod" style="width: 100%;max-width: 100% !important;" placeholder="Select sales period" (ionChange)="onSalesPeriodChanged()">\n        <ion-option *ngFor="let salesPeriod of salesPeriods" [value]="salesPeriod.id">\n            {{salesPeriod.name}} w.{{salesPeriod.startDate | amDateFormat: \'W\'}}-{{salesPeriod.endDate | amDateFormat : \'W\'}}\n        </ion-option>\n    </ion-select>\n    <div class="section-title">\n        Action\n    </div>\n    <div style="padding-left: 20px; padding-top: 1px">\n        <ion-list *ngFor="let group of groups" class="accordion-group">\n            <ion-list-header (click)="group.show =! group.show" class="accordion-group-title" [ngClass]="{\'open\': group.show}">\n                {{group.name}}\n                <ion-icon item-end color="primary" name="{{group.show ? \'ios-remove-circle\' : \'ios-add-circle\'}}"></ion-icon>\n            </ion-list-header>\n            <ion-item [hidden]="!group.show" *ngFor="let action of group_actions[group.id]" class="action-item" (click)="showAction(action)">\n                <ion-label style="color:grey">{{action.name}}</ion-label>\n                <ion-icon name="ios-arrow-forward" style="color: #d9dadd" item-end></ion-icon>\n            </ion-item>\n            <ion-item [hidden]="!group.show" *ngIf="!group_actions[group.id]" style="text-align: left;color: grey">\n                Empty\n            </ion-item>\n        </ion-list>\n    </div>\n    <ion-list style="padding-left: 20px; padding-top: 1px">\n        <ion-item *ngFor="let action of ungrouped_actions" (click)="showAction(action)" class="accordion-group-title">\n            {{action.name}}\n            <ion-icon name="ios-arrow-forward" style="color: #d9dadd" item-end></ion-icon>\n        </ion-item>\n    </ion-list>\n    <div class="section-title">\n        Distribution\n    </div>\n    <div style="padding-left: 20px; padding-top: 1px">\n        <ion-list *ngFor="let distribution of distributions" style="padding: 0;margin: 0" class="accordion-group-title">\n            <button ion-item (click)="showDistribution(distribution)" style="border-bottom: 1px solid #d9dadd" class="accordion-group-title">\n                {{distribution.title}}\n                <span item-end>{{outcomes[distribution.id]*100 | number: \'1.2-2\'}}%</span>\n                <ion-icon name="ios-arrow-forward" style="color: #d9dadd" item-end></ion-icon>\n            </button>\n\n        </ion-list>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/eesah/Documents/projects/KeysaleApp/src/pages/store-details-actions/store-details-actions.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["q" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_1__providers_common_service__["a" /* CommonService */]])
], StoreDetailsActionsPage);

//# sourceMappingURL=store-details-actions.js.map

/***/ })

},[473]);
//# sourceMappingURL=main.js.map