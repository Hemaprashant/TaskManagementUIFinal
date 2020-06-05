import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../shared/hero.service';
import { MatDialogRef } from '@angular/material/dialog';
import {TaskType} from '../../shared/Models/task-type.enum';
import {Status} from '../../shared/Models/status.enum';
import { TaskService } from '../../shared/task.service';
import { Tasks } from '../tasks';
import { TableDataService } from 'src/app/shared/table-data.service';

@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.css']
})
export class EdittaskComponent implements OnInit {

  constructor(public service:HeroService,public dialogRef: MatDialogRef<EdittaskComponent>,public notification:TaskService,private tableDataService:TableDataService) { }

  tasks:any;
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
  onSubmit(task :Tasks){
    console.log(task);
    this.service.updateTask(task)
      .subscribe(result=>{
        this.tableDataService.setProperty();

      }
      );
    this.notification.success('Updated Successfully');
    this.onClose();
  }
   onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }

  
}
