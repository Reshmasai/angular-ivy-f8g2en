import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { allComponent } from './all.component';
import { completedComponent } from './completed.component';
import {RouterModule} from '@angular/router';
import { activeComponent } from './active.component';

import { userComponent } from './user.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule,
    RouterModule.forRoot([
      {path:'',component:allComponent},
      {path:'completed',component:completedComponent},
      {path:'active',component:activeComponent},
      {path:'user',component:userComponent}
      
      ]) ],
  declarations: [ AppComponent, allComponent,completedComponent,activeComponent,userComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
