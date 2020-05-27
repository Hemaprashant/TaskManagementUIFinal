import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    taskDescription: new FormControl('', Validators.required),
    taskType: new FormControl(''),
    CreatedDate: new FormControl(''),
    duedate: new FormControl(''),
    Status: new FormControl(''),
    isPermanent: new FormControl(false)
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      taskDescription: '',
      taskType: '',
      CreatedDate: '',
      duedate: '',
      Status: '',
      isPermanent: false
    });
  }
}
