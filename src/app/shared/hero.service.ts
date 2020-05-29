import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import {Tasks} from '../search/tasks';
import {TaskType} from './Models/task-type.enum'
import {Status} from './Models/status.enum'


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private http: HttpClient) { }
  
  form: FormGroup = new FormGroup({
    taskDescription: new FormControl('', Validators.required),
    taskType: new FormControl(''),
    createdDate: new FormControl(''),
    dueDate: new FormControl(''),
    status: new FormControl('')
    
  });

  initializeFormGroup() {
    this.form.setValue({
      taskDescription: '',
      taskType: TaskType.Personal,
      dueDate: '',
      createdDate:'',
      status: Status.New
      
    });
  }

  populateForm(hero) {
    this.form.setValue(hero);
  }

  getTask(): Observable<Tasks[]> {
    return this.http.get<Tasks[]>('http://demo1268607.mockable.io/tasks').pipe(
      tap(data => console.log('Data Fetched:' + JSON.stringify(data))));
    }
}
