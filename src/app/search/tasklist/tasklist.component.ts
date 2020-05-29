import { Component, OnInit ,ViewChild} from '@angular/core';
import { HeroService } from '../../shared/hero.service';
import {MatPaginator} from '@angular/material/paginator';
/*import {MatSort} from '@angular/material/sort';*/
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import {AddtaskComponent} from './../addtask/addtask.component';
import {EdittaskComponent} from './../edittask/edittask.component';
import {MatTableDataSource} from '@angular/material/table';


export interface PeriodicElement {
  taskDescription: string;
  taskType: string;
  createdDate: Date;
  dueDate: Date;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {taskDescription: 'Prashant', taskType: 'Personal', createdDate:new Date('5/4/2020'),dueDate:new Date('10/5/2020') ,status: 'New'},
  {taskDescription: 'swathi', taskType: 'Shopping', createdDate:new Date('5/4/2020'),dueDate:new Date('10/5/2020') ,status: 'New'},
  {taskDescription: 'swarnesh', taskType: 'Work', createdDate:new Date('12/5/2020'),dueDate:new Date('10/5/2020') ,status: 'New'},
  {taskDescription: 'Prashant', taskType: 'shopping', createdDate:new Date('5/5/2020'),dueDate:new Date('10/5/2020') ,status: 'New'},
  {taskDescription: 'Rohith', taskType: 'Personal', createdDate:new Date('1/5/2020'),dueDate:new Date('10/5/2020') ,status: 'New'},
  {taskDescription: 'Vamsi', taskType: 'Personal', createdDate:new Date('5/5/2020'),dueDate:new Date('10/5/2020') ,status: 'New'},
  {taskDescription: 'varun', taskType: 'Others', createdDate:new Date('6/5/2020'),dueDate:new Date('10/5/2020') ,status: 'New'},
  {taskDescription: 'vijay', taskType: 'Personal', createdDate:new Date('10/5/2020'),dueDate:new Date('10/5/2020') ,status: 'New'},
  {taskDescription: 'swarnesh', taskType: 'Others', createdDate:new Date('4/5/2020'),dueDate:new Date('10/5/2020') ,status: 'New'},
  {taskDescription: 'Rohith', taskType: 'Personal', createdDate:new Date('25/5/2020'),dueDate:new Date('10/5/2020') ,status: 'New'},
  {taskDescription: 'Prashant', taskType: 'Personal', createdDate:new Date('25/5/2020'),dueDate:new Date('10/5/2020') ,status: 'New'},
  {taskDescription: 'swathi', taskType: 'Personal', createdDate:new Date('5/5/2020'),dueDate:new Date('10/5/2020') ,status: 'New'}
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
  /*@ViewChild(MatSort) sort: MatSort;*/
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private heroService: HeroService,private dialog: MatDialog) { }
  onCreate() {
    this.heroService.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(AddtaskComponent,dialogConfig);
  }
  onEdit(row){
    this.heroService.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(EdittaskComponent,dialogConfig);
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
