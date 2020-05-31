import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import {Tasks} from '../search/tasks';
import {TaskType} from './Models/task-type.enum'
import {Status} from './Models/status.enum'
import { error } from 'protractor';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private http: HttpClient) { }
  
  form: FormGroup = new FormGroup({
    id:new FormControl(''),
    userId:new FormControl(''),
    taskDescription: new FormControl('', Validators.required),
    taskType: new FormControl(''),
    createdDate: new FormControl(''),
    dueDate: new FormControl(''),
    status: new FormControl('')
    
  });

  initializeFormGroup() {
    this.form.setValue({
      id:'',
      userId:'guest',
      taskDescription: '',
      taskType: TaskType,
      dueDate: '',
      createdDate:'',
      status: Status
      
    });
  }

  populateForm(hero) {
    this.form.setValue(hero);
  }

  getTask(): Observable<Tasks[]> {
    return this.http.get<Tasks[]>('https://localhost:44363/api/task').pipe(
      tap(data => console.log('Data Fetched:' + JSON.stringify(data))));
    }
    addTask(task: Tasks): Observable<any> {
      console.log(task);
      const options = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.post('https://localhost:44363/api/task', task, { headers: options });
      }
      updateTask(task: Tasks): Observable<any> {
        const options = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.put<any>('https://localhost:44363/api/task', task, { headers: options }).pipe(
          tap(_ => console.log({task})))
      }
      deleteTask(_Id: string) {
        const url = `https://localhost:44363/api/task/${_Id}`;
        const options = new HttpHeaders({ 'Content-Type': 'application/json' });
        console.log(url);
        return this.http.delete(url,{ headers: options });
        }   
}
