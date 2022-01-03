import { Component, OnInit} from '@angular/core';
import {SimpleService} from './simple.service';
@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: [ './all.component.css' ]
})
export class allComponent implements OnInit  {
  values:any[]=[];
  isit:boolean;
  Isit:boolean=false;
  Is:boolean=true;
  editMode = false;
  constructor(public simpleService:SimpleService){}
 ngOnInit(){
  this.values=this.simpleService.onget();
  this.isit=true;
 }
 Todo(val:any):void{
   this.Isit=true;
  this.simpleService.comp(val);
  let index=this.values.indexOf(val);
  this.values.splice(index,1);
}
fn(del:any){
  let ind=this.values.indexOf(del);
  this.values.splice(ind,1);
}
onUpdate(edit:any){
  this.values[edit]=this.values[edit];
}

}
