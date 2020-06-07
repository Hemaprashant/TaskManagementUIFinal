import { Component, OnInit, ViewChild} from '@angular/core';
import { HeroService } from '../../shared/hero.service';
import { TableDataService } from 'src/app/shared/table-data.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Tasks} from '../tasks';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-archieve',
  templateUrl: './archieve.component.html',
  styleUrls: ['./archieve.component.css']
})
export class ArchieveComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private heroService: HeroService,private tableDataService:TableDataService,public dialogRef: MatDialogRef<ArchieveComponent>) { }
  displayedColumns: string[] = ['taskDescription', 'taskType', 'createdDate','dueDate', 'status'];
  ELEMENT_DATA: Tasks[] ;
  dataSource:any;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onClose() {
    this.dialogRef.close();
  }
  ngOnInit(): void {
    this.heroService.getArchieveTask().subscribe(
      response=>{
        tasks =>tasks;
        error=>error;
        this.tableDataService.setProperty();
        this.dataSource= new MatTableDataSource(response);
        this.dataSource.paginator = this.paginator;

      });
  }

}
