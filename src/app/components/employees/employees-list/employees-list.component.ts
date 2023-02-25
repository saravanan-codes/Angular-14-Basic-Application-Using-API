import { Component } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent {

  employeespro: Employee[] = [];
  
  constructor(private employeesService: EmployeesService) {

  }

  ngOnInit(): void {
    this.employeesService.getallemployees()
      .subscribe({
        next: (employees) => {
         //  console.log(employees);
         this.employeespro = employees;
        },
        error: (response) => {
          console.log(response);
        }
      })

  }



  // {}
  // ngOnInit(): void{

  // }


}
