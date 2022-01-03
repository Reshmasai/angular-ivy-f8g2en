import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { allComponent } from './all.component';
import { completedComponent } from './completed.component';
import {RouterModule} from '@angular/router';
import { activeComponent } from './active.component';
import { editComponent } from './edit.component';
import { userComponent } from './user.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule,
    RouterModule.forRoot([
      {path:'',component:allComponent},
      {path:'completed',component:completedComponent},
      {path:'active',component:activeComponent},
      {path:'edit',component:editComponent},
      {path:'user',component:userComponent}
      
      ]) ],
  declarations: [ AppComponent, HelloComponent,allComponent,completedComponent,activeComponent,editComponent,userComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
