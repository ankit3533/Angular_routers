"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var DepartmentListComponent = /** @class */ (function () {
    function DepartmentListComponent(_router, route) {
        this._router = _router;
        this.route = route;
        this.departments = [
            { "id": 1, "name": "Angular" },
            { "id": 2, "name": "Node" },
            { "id": 3, "name": "Mongo DB" },
            { "id": 4, "name": "Ruby" },
            { "id": 5, "name": "BootStrap" },
        ];
    }
    DepartmentListComponent.prototype.onSelect = function (department) {
        console.log("came to onSelect method");
        this._router.navigate(['/departments', department.id]);
        this._router.navigate([department.id], { relativeTo: this.route });
    };
    DepartmentListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("inside the department detail method");
        this.route.params.subscribe(function (params) {
            var id = parseInt(params['id']);
            _this.selectedDepartment = id;
        });
    };
    DepartmentListComponent.prototype.isSelected = function (department) {
        return department.id === this.selectedDepartment;
    };
    DepartmentListComponent = __decorate([
        core_1.Component({
            selector: 'my-list',
            template: "<h1>Department</h1>\n            <ul class=\"items\">\n            <li *ngFor=\"let department of departments\" >\n            <button class=\"btn btn-primary\" (click)=\"onSelect(department)\">{{department.id}}</button>\n            <span [class.selected]=\"isSelected(department)\" class=\"badge\">{{department.id}}</span>{{department.name}}\n            </li>\n            </ul>\n\n            "
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute])
    ], DepartmentListComponent);
    return DepartmentListComponent;
}());
exports.DepartmentListComponent = DepartmentListComponent;
//# sourceMappingURL=department-list.component.js.map