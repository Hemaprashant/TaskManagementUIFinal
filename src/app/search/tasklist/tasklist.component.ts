import { Component, OnInit ,ViewChild, OnChanges, DoCheck} from '@angular/core';
import { HeroService } from '../../shared/hero.service';
import {TaskService} from '../../shared/task.service';
import {DialogService} from '../../shared/dialog.service';
import {MatPaginator} from '@angular/material/paginator';
/*import {MatSort} from '@angular/material/sort';*/
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import {AddtaskComponent} from './../addtask/addtask.component';
import {EdittaskComponent} from './../edittask/edittask.component';
import {MatTableDataSource} from '@angular/material/table';
import {Tasks} from '../tasks'
import { error } from 'protractor';
import { MatDialogRef } from '@angular/material/dialog';
import {TaskType} from './../../shared/Models/task-type.enum'
import {Status} from './../../shared/Models/status.enum'
import { TableDataService } from 'src/app/shared/table-data.service';
import { filter } from 'rxjs/operators';
import { Sort } from '@angular/material/sort';


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
export class TasklistComponent implements OnInit,DoCheck {
  displayedColumns: string[] = ['taskDescription', 'taskType', 'createdDate','dueDate', 'status','actions'];
  ELEMENT_DATA: Tasks[] ;
  dataSource:any;
  /*tasks: tassks[];*/
  private  taskTypes = TaskType;
  public taskTypeOptions = [];
  private  statusTypes = Status;
  public statusOptions = [];
  public filterdTasks:Tasks[];
  public tasks:any;
  public sortedData:any;

  errorMessage: string;
  /*@ViewChild(MatSort) sort: MatSort;*/
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(public heroService: HeroService,private dialog: MatDialog,private dialogService:DialogService,public notification:TaskService,private tableDataService:TableDataService) { }
  
  

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

  onSearch(query:any)
  {
    console.log(query);
    var tasks=this.tableDataService.getProperty();
    this.filterdTasks=tasks.data;
    console.log(this.filterdTasks);
    if(query.status!="" && query.status!=null)
    {
      this.filterdTasks=this.filterdTasks.filter(q=>q.status==query.status)
      console.log(this.filterdTasks);
    }
    if(query.taskType!="" && query.taskType!=null)
    {
      this.filterdTasks=this.filterdTasks.filter(q=>q.taskType==query.taskType)
      console.log(this.filterdTasks);
    }
    if(query.dueDate!="" && query.dueDate!=null)
    {
      this.filterdTasks=this.filterdTasks.filter(q=> new Date(q.dueDate).toDateString()==new Date(query.dueDate).toDateString())
      console.log(new Date(query.dueDate).toDateString())
      console.log(this.filterdTasks);
    }
    this.tableDataService.setSearchProperty(this.filterdTasks);
    
  }
  onClear()
  {
    this.heroService.searchForm.reset();
    this.heroService.initializeFormGroup();
    this.tableDataService.setProperty();
  }
  onDelete(id:string){
    this.dialogService.openConfirmDialog()
    .afterClosed().subscribe(res =>{
      if(res){
        this.heroService.deleteTask(id).subscribe(
          result=>{
            this.tableDataService.setProperty();
          }
        );
        this.notification.warn('! Deleted successfully');
        this.tableDataService.setProperty();
      /*this.dataSource=this.tableDataService.getProperty();*/
      console.log(res);
      }
      
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getTask() {
      this.heroService.getTask().subscribe(

      tasks => this.dataSource = new  MatTableDataSource(tasks.map(q=>{q.dueDate=new Date(q.dueDate).toDateString()})),
      error => console.log(error));
      t=>console.log("In here\n"+this.dataSource.data)
  } 

  ngOnInit(): void {
    this.taskTypeOptions = Object.keys(this.taskTypes);
    this.statusOptions = Object.keys(this.statusTypes);
    this.heroService.getTask().subscribe(
      response=>{
        tasks =>tasks;
        error=>error;
        this.tableDataService.setProperty();
        this.dataSource= new MatTableDataSource(response);
        this.dataSource.paginator = this.paginator;
        this.tasks=response;
      });
      this.heroService.initializeSearchFormGroup();

    
  }
  ngDoCheck()
  {
    
    this.dataSource=this.tableDataService.getProperty();
    
  }
  
}
