import { Component, OnInit ,Inject} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HeroService } from 'src/app/shared/hero.service';
import { Tasks } from '../tasks';
import { TableDataService } from 'src/app/shared/table-data.service';
@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  constructor(public service:HeroService,public dialogRef: MatDialogRef<ConfirmComponent>,private tableDataService:TableDataService) { }

  ngOnInit(): void {
  }
   onClose() {
    this.dialogRef.close(false);
  }
  onDelete(conformation:any,task:Tasks){
    if(conformation=="true")
    {
    console.log(conformation+'    '+task)
      
      this.service.deleteTask(task.id);
      this.tableDataService.setProperty()
      
    }
  }
}
