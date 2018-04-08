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
var DepartmentDetailComponent = /** @class */ (function () {
    function DepartmentDetailComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    // ngOnInit(){
    //     this.departmentId=this.route.snapshot.params['id'];
    // }
    DepartmentDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("inside the department detail method");
        this.route.params.subscribe(function (params) {
            var id = parseInt(params['id']);
            _this.departmentId = id;
        });
    };
    DepartmentDetailComponent.prototype.goprevious = function () {
        var previousId = this.departmentId - 1;
        this.router.navigate(['/departments', previousId]);
    };
    DepartmentDetailComponent.prototype.gonext = function () {
        var nextId = this.departmentId + 1;
        this.router.navigate(['/departments', nextId]);
    };
    DepartmentDetailComponent.prototype.back = function () {
        var selectedId = this.departmentId ? this.departmentId : null;
        this.router.navigate(['/departments', { "id": selectedId }]);
        this.router.navigate(['../', { id: selectedId }], { relativeTo: this.route });
    };
    DepartmentDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-detail',
            template: "<h1>Department Details</h1>\n            <h3>you selected department with id={{departmentId}}</h3>\n            <a (click)=\"goprevious()\">Previous</a>\n            <a (click)=\"gonext()\">Next</a>\n            <a (click)=\"back()\">Back</a>\n\n            "
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router])
    ], DepartmentDetailComponent);
    return DepartmentDetailComponent;
}());
exports.DepartmentDetailComponent = DepartmentDetailComponent;
//# sourceMappingURL=department-detail.component.js.map