import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';

const routes: Routes = [
{
 path:'',
 component : EmployeesListComponent
},
{
  path:'employee',
  component:EmployeesListComponent
},
{
  path:'employee/add',
  component:AddEmployeeComponent
},
{
  path:'employee/edit/:id',
  component:EditEmployeeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
