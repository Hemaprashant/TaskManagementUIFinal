import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from "./material/material.module";
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { TasklistComponent } from './search/tasklist/tasklist.component';
import { AddtaskComponent } from './search/addtask/addtask.component';
import { HeroService } from './shared/hero.service';
import { TaskService } from './shared/task.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TasklistComponent,
    AddtaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [HeroService,TaskService],
  bootstrap: [TasklistComponent],
  entryComponents:[AddtaskComponent]
})
export class AppModule { }
