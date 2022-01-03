import { Component, OnInit} from '@angular/core';
import {SimpleService} from './simple.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: [ './user.component.css' ]
})
export class userComponent implements OnInit {
  data:any[]=[];
  p:number=1;
 constructor(public simpleService:SimpleService){}

 ngOnInit(){
  this.data=this.simpleService.onGet();
 }

}
