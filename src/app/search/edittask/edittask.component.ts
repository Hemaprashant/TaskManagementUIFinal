import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../shared/hero.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.css']
})
export class EdittaskComponent implements OnInit {

  constructor(public service:HeroService,public dialogRef: MatDialogRef<EdittaskComponent>) { }

  ngOnInit(): void {
  }
  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }
   onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }
}
