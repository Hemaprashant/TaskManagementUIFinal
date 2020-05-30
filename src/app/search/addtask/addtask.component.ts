import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../shared/hero.service';
import { MatDialogRef } from '@angular/material/dialog';
import {TaskType} from '../../shared/Models/task-type.enum';
import {Status} from '../../shared/Models/status.enum';
import { TaskService } from '../../shared/task.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})

export class AddtaskComponent implements OnInit {

  constructor(public service:HeroService,public dialogRef: MatDialogRef<AddtaskComponent>,public notification:TaskService) { }
  
  
  private  taskTypes = TaskType;
  public taskTypeOptions = [];
  private  statusTypes = Status;
  public statusOptions = [];
  ngOnInit(): void {
    this.taskTypeOptions = Object.keys(this.taskTypes);
    this.statusOptions = Object.keys(this.statusTypes);
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

   onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }

  onSubmit(){
    this.notification.success(':: Added Successfully');
    this.onClose();
  }

}
