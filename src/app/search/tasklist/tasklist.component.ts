import { Component, OnInit ,ViewChild, OnChanges} from '@angular/core';
import { HeroService } from '../../shared/hero.service';
import {MatPaginator} from '@angular/material/paginator';
/*import {MatSort} from '@angular/material/sort';*/
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import {AddtaskComponent} from './../addtask/addtask.component';
import {EdittaskComponent} from './../edittask/edittask.component';
import {MatTableDataSource} from '@angular/material/table';
import {Tasks} from '../tasks'
import { error } from 'protractor';


export interface PeriodicElement {
  taskDescription: string;
  taskType: string;
  createdDate: Date;
  dueDate: Date;
  status: string;
}


 var date=new Date(10/2/2020);

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
  displayedColumns: string[] = ['taskDescription', 'taskType', 'createdDate','dueDate', 'status','actions'];
  dataSource:any;
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

  

  ngOnInit(): void {
    this.heroService.getTask().subscribe(
      response=>{
        tasks =>tasks;
        error=>error;
        this.dataSource= new MatTableDataSource(response);
        this.dataSource.paginator = this.paginator;

      });

  }
  
}
