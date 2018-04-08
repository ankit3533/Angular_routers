"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DepartmentListComponent = /** @class */ (function () {
    function DepartmentListComponent() {
        this.departments = [
            { "id": 1, "name": "Angular" },
            { "id": 2, "name": "Node" },
            { "id": 3, "name": "Mongo DB" },
            { "id": 4, "name": "Ruby" },
            { "id": 5, "name": "BootStrap" },
        ];
    }
    DepartmentListComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>Department</h1>\n            <ul class=\"items\">\n            <li *ngFor=\"let department of departments\">\n            <span class=\"badge\">{{department.id}}</span>{{department.name}}\n            </li>\n            </ul>\n\n            "
        })
    ], DepartmentListComponent);
    return DepartmentListComponent;
}());
exports.DepartmentListComponent = DepartmentListComponent;
//# sourceMappingURL=department-list.component.1.js.map