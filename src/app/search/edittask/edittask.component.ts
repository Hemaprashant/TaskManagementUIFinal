import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../shared/hero.service';
import { MatDialogRef } from '@angular/material/dialog';
import {TaskType} from '../../shared/Models/task-type.enum'
import {Status} from '../../shared/Models/status.enum'

@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.css']
})
export class EdittaskComponent implements OnInit {

  constructor(public service:HeroService,public dialogRef: MatDialogRef<EdittaskComponent>) { }

  
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
}
