import { Component, OnInit ,ViewChild} from '@angular/core';
import { HeroService } from '../../shared/hero.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import {AddtaskComponent} from './../addtask/addtask.component';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  taskDescription: string;
  taskType: string;
  createdDate: number;
  dueDate: number;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {taskDescription: 'Prashant', taskType: 'Personal', createdDate:5/5/2020,dueDate: 10/5/2020 ,status: 'New'},
  {taskDescription: 'swathi', taskType: 'Personal', createdDate:5/5/2020,dueDate: 10/5/2020 ,status: 'New'},
  {taskDescription: 'swarnesh', taskType: 'Personal', createdDate:5/5/2020,dueDate: 10/5/2020 ,status: 'New'},
  {taskDescription: 'Prashant', taskType: 'Personal', createdDate:5/5/2020,dueDate: 10/5/2020 ,status: 'New'},
  {taskDescription: 'Rohith', taskType: 'Personal', createdDate:5/5/2020,dueDate: 10/5/2020 ,status: 'New'},
  {taskDescription: 'Vamsi', taskType: 'Personal', createdDate:5/5/2020,dueDate: 10/5/2020 ,status: 'New'},
  {taskDescription: 'varun', taskType: 'Personal', createdDate:5/5/2020,dueDate: 10/5/2020 ,status: 'New'},
  {taskDescription: 'vijay', taskType: 'Personal', createdDate:5/5/2020,dueDate: 10/5/2020 ,status: 'New'},
  {taskDescription: 'swarnesh', taskType: 'Personal', createdDate:5/5/2020,dueDate: 10/5/2020 ,status: 'New'},
  {taskDescription: 'Rohith', taskType: 'Personal', createdDate:5/5/2020,dueDate: 10/5/2020 ,status: 'New'},
  {taskDescription: 'Prashant', taskType: 'Personal', createdDate:5/5/2020,dueDate: 10/5/2020 ,status: 'New'},
  {taskDescription: 'swathi', taskType: 'Personal', createdDate:5/5/2020,dueDate: 10/5/2020 ,status: 'New'}
];

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
  displayedColumns: string[] = ['taskDescription', 'taskType', 'createdDate','dueDate', 'status','actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  /*tasks: tassks[];*/
  errorMessage: string;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private heroService: HeroService,private dialog: MatDialog) { }
  openCreate() {
    this.heroService.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(AddtaskComponent,dialogConfig);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /*getTask() {
      this.heroService.getTask().subscribe(
      tasks => this.tasks = tasks,
      error => this.errorMessage = <any>error);
  } */

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    /*this.getTask(); */
  }

}
