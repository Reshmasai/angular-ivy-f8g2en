import { Component, OnInit} from '@angular/core';
import {SimpleService} from './simple.service';
@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: [ './all.component.css' ]
})
export class activeComponent implements OnInit {
  values:any[]=[];
  
 constructor(public simpleService:SimpleService){}

 ngOnInit(){
  
   this.values=this.simpleService.onget();
   
  }
}
