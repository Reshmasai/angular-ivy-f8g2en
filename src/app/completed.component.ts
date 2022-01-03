import { Component, OnInit} from '@angular/core';
import {SimpleService} from './simple.service';
@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: [ './all.component.css' ]
})
export class completedComponent implements OnInit {
  values:any;
  isit:boolean;
 constructor(public simpleService:SimpleService){}

 ngOnInit(){
   this.isit=true;
   this.values=this.simpleService.oncomp()
 }

}
