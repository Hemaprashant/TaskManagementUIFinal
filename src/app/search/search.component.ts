import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HeroService } from './../shared/hero.service';
import { TableDataService } from 'src/app/shared/table-data.service';
import {ArchieveComponent} from './archieve/archieve.component';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private heroService: HeroService,private dialog: MatDialog,private tableDataService:TableDataService) { }


  onArchieve(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "95%";
    this.dialog.open(ArchieveComponent,dialogConfig);
  }
  ngOnInit(): void {
    
  }

}
