import { Employee } from './Employee.model';
import { Component, OnInit } from '@angular/core';
import employees from './data/employees.json';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  title : string = "Employee Management System";
  employees : Employee[] = employees;
  filteredEmployees : Employee[] = employees;
  showAvatar : boolean = false;
  message : string = '';
  private _designationFilter : string = '';

  //Setter
  set designationFilter(value: string){
    this._designationFilter = value;
    this.filterByDesignation();
  }

  //Getter
  get designationFilter(){
    return this._designationFilter;
  }

  constructor() { }

  ngOnInit(): void {
  }

  toggleAvatar() {
    this.showAvatar = !this.showAvatar;
  }

  filterByDesignation() {
    this.filteredEmployees = this.employees.filter(emp => emp.designation.includes(this.designationFilter));
  }

  onMessageRecived(value: string) {
    this.message = value;
  }
}
