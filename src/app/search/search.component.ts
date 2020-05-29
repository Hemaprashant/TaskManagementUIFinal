import { Component, OnInit ,ViewChild} from '@angular/core';
import {TaskType} from '../shared/Models/task-type.enum'
import {Status} from '../shared/Models/status.enum'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }


  private  taskTypes = TaskType;
  public taskTypeOptions = [];
  private  statusTypes = Status;
  public statusOptions = [];
  ngOnInit(): void {
    this.taskTypeOptions = Object.keys(this.taskTypes);
    this.statusOptions = Object.keys(this.statusTypes);
  }

}
