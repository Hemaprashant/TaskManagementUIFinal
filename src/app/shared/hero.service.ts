import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import {Tasks} from '../search/tasks';


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
      taskType: '',
      dueDate: '',
      createdDate:'',
      status: ''
      
    });
  }

  populateForm(task:Tasks) {
    this.form.setValue(task);
  }
}
