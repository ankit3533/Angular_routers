import { Component, OnInit } from '@angular/core';
import{ActivatedRoute,Router} from '@angular/router';
import { Params } from '@angular/router/src/shared';
@Component({
  selector: 'my-detail',
  template: `<h1>Department Details</h1>
            <h3>you selected department with id={{departmentId}}</h3>
            <a (click)="goprevious()">Previous</a>
            <a (click)="gonext()">Next</a>
            <a (click)="back()">Back</a>

            `
})
export class DepartmentDetailComponent implements OnInit{ 
public departmentId;
        constructor(private route:ActivatedRoute,private router:Router){}
    // ngOnInit(){
        
    //     this.departmentId=this.route.snapshot.params['id'];
    // }
    ngOnInit(){
        console.log("inside the department detail method");
        this.route.params.subscribe((params:Params)=>{
            let id=parseInt(params['id']);
            this.departmentId=id;
        })
    }

    goprevious(){
        let previousId = this.departmentId-1;
        this.router.navigate(['/departments',previousId]);
        
    }
    gonext(){
        let nextId = this.departmentId+1;
        this.router.navigate(['/departments',nextId]);
    }
    back(){
        let selectedId=this.departmentId?this.departmentId:null;
        this.router.navigate(['/departments',{"id":selectedId}]);
        this.router.navigate(['../',{id:selectedId}],{relativeTo:this.route});
    }
}
