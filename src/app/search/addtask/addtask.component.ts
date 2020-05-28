import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../shared/hero.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  constructor(public service:HeroService) { }

  ngOnInit(): void {
  }

}
