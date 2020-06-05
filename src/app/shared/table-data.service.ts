import { Injectable } from '@angular/core';
import { HeroService } from './hero.service';
import { MatTableDataSource } from '@angular/material/table';

@Injectable({
  providedIn: 'root'
})
export class TableDataService {

  constructor(private service:HeroService) { }

  dataSource:any;
  

  getProperty()
  {
    console.log("In get ")
    return this.dataSource;
  }
  setProperty()
  {
    this.service.getTask().subscribe(
      response=>{
      console.log("In set");
      error=>error;
      this.dataSource=new MatTableDataSource(response);
      });

    
  }
}
