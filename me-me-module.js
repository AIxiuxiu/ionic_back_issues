(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["me-me-module"],{

/***/ "./src/app/me/me.module.ts":
/*!*********************************!*\
  !*** ./src/app/me/me.module.ts ***!
  \*********************************/
/*! exports provided: MePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MePageModule", function() { return MePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _me_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./me.page */ "./src/app/me/me.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _me_page__WEBPACK_IMPORTED_MODULE_5__["MePage"]
    }
];
var MePageModule = /** @class */ (function () {
    function MePageModule() {
    }
    MePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_me_page__WEBPACK_IMPORTED_MODULE_5__["MePage"]]
        })
    ], MePageModule);
    return MePageModule;
}());



/***/ }),

/***/ "./src/app/me/me.page.html":
/*!*********************************!*\
  !*** ./src/app/me/me.page.html ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"primary\" text=\"&nbsp;&nbsp;&nbsp;&nbsp;\"></ion-back-button>\n    </ion-buttons>\n    <!-- <ion-icon name=\"arrow-back\" slot=\"start\" size=\"large\" (click)=\"back()\"></ion-icon> -->\n    <ion-title>me</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/me/me.page.scss":
/*!*********************************!*\
  !*** ./src/app/me/me.page.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lL21lLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/me/me.page.ts":
/*!*******************************!*\
  !*** ./src/app/me/me.page.ts ***!
  \*******************************/
/*! exports provided: MePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MePage", function() { return MePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MePage = /** @class */ (function () {
    function MePage(navCtrl, router) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.disabled = true;
    }
    MePage.prototype.ngOnInit = function () {
    };
    MePage.prototype.ngAfterViewInit = function () {
        this.disabled = false;
    };
    MePage.prototype.back = function () {
        // this.navCtrl.goBack();
        this.router.navigateByUrl('/home');
    };
    MePage.prototype.ngOnDestroy = function () {
        console.error('OnDestroy');
    };
    MePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-me',
            template: __webpack_require__(/*! ./me.page.html */ "./src/app/me/me.page.html"),
            styles: [__webpack_require__(/*! ./me.page.scss */ "./src/app/me/me.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MePage);
    return MePage;
}());



/***/ })

}]);
//# sourceMappingURL=me-me-module.js.map