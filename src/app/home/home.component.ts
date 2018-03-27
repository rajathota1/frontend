import { Component, OnInit } from '@angular/core';

import { EmpService } from '../emp.service'
import { Employee } from '../employee'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //isdelete = false;
  constructor(
    public empService:EmpService
  ) { }

  ngOnInit() {
    this.getEmployees();
  }
  
  employees:Employee;
 
  getEmployees(){
    this.empService.getEmployees()
        .subscribe(employees=>{
          this.employees = employees;
        })
  }

  deleteEmployee(employees){
    employees.forEach(element => {
      if(element.isdelete){
        this.empService.deleteEmployee(element._id)
        .subscribe(()=>{
          this.getEmployees()
        });
      }
    });
    
  }

  delete(emp){
    if(emp){
      emp.isdelete = true;
    }
  }
  
  removeIsDeleteKey(employees){
    employees.forEach(element => {
      if(element.isdelete){
       element.isdelete = false;
      }
    });
  }
 

}
