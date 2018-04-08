import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { relative } from 'path';
@Component({
    selector: 'my-list',
    template: `<h1>Department</h1>
            <ul class="items">
            <li *ngFor="let department of departments" >
            <button class="btn btn-primary" (click)="onSelect(department)">{{department.id}}</button>
            <span [class.selected]="isSelected(department)" class="badge">{{department.id}}</span>{{department.name}}
            </li>
            </ul>

            `
})
export class DepartmentListComponent implements OnInit {
    constructor(private _router: Router, private route: ActivatedRoute) { }
    public selectedDepartment;
    departments = [
        { "id": 1, "name": "Angular" },
        { "id": 2, "name": "Node" },
        { "id": 3, "name": "Mongo DB" },
        { "id": 4, "name": "Ruby" },
        { "id": 5, "name": "BootStrap" },
    ];

    onSelect(department) {
        console.log("came to onSelect method");
        this._router.navigate(['/departments', department.id]);
        this._router.navigate([department.id],{relativeTo:this.route});
    }

    ngOnInit() {
        console.log("inside the department detail method");
        this.route.params.subscribe((params: Params) => {
            let id = parseInt(params['id']);
            this.selectedDepartment = id;
        })
    }

    isSelected(department) {
        return department.id === this.selectedDepartment;
    }
}
