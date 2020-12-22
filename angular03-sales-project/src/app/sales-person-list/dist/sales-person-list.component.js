"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SalesPersonListComponent = void 0;
var core_1 = require("@angular/core");
var sales_person_1 = require("./sales-person");
var SalesPersonListComponent = /** @class */ (function () {
    function SalesPersonListComponent() {
        //create an array of objects
        this.salesPersonList = [
            new sales_person_1.SalesPerson("İbrahim", "Yüce", "ibrahim.yuce@luv2code.com", 50000),
            new sales_person_1.SalesPerson("John", "Doe", "john.doe@luv2code.com", 40000),
            new sales_person_1.SalesPerson("Martin", "Freeman", "mfreeman@luv2code.com", 90000),
            new sales_person_1.SalesPerson("Mai", "Troung", "mai@luv2code.com", 60000)
        ];
    }
    SalesPersonListComponent.prototype.ngOnInit = function () {
    };
    SalesPersonListComponent = __decorate([
        core_1.Component({
            selector: 'app-sales-person-list',
            templateUrl: './sales-person-list.component.html',
            styleUrls: ['./sales-person-list.component.css']
        })
    ], SalesPersonListComponent);
    return SalesPersonListComponent;
}());
exports.SalesPersonListComponent = SalesPersonListComponent;
