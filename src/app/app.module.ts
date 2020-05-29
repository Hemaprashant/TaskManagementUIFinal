import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from "./material/material.module";
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule }    from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { TasklistComponent } from './search/tasklist/tasklist.component';
import { AddtaskComponent } from './search/addtask/addtask.component';
import {EdittaskComponent} from './search/edittask/edittask.component';
import { HeroService } from './shared/hero.service';
import { TaskService } from './shared/task.service';
import {Tasks} from './search/tasks';
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TasklistComponent,
    AddtaskComponent,
    EdittaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HeroService,TaskService],
  bootstrap: [SearchComponent,TasklistComponent],
  entryComponents:[AddtaskComponent,EdittaskComponent]
})
export class AppModule { }
