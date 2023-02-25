import { HttpClient } from '@angular/common/http';
import { publishFacade } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})

export class EmployeesService {

  //baseApiUrl: string = 'https://www.xiphiasprojects.com/api';
  baseApiUrl: string = 'https://localhost:7056';

  constructor(private http: HttpClient) { }

  getallemployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseApiUrl + '/api/MainUser');
  }
  addEmployee(addEmployeeRequest: Employee): Observable<Employee> {
    addEmployeeRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Employee>(this.baseApiUrl + '/api/MainUser', addEmployeeRequest);
  }
  getEmployee(id: string): Observable<Employee> {
    return this.http.get<Employee>(this.baseApiUrl + '/api/MainUser/' + id);
  }  
  updateEmployee(id:string,updateEmployeeRequest:Employee):Observable<Employee>{
    return this.http.put<Employee>(this.baseApiUrl + '/api/MainUser/'+ id,updateEmployeeRequest);
  }
  deleteEmployee(id:string):Observable<Employee>{
   return this.http.delete<Employee>(this.baseApiUrl+'/api/MainUser/'+id)
  }
}

