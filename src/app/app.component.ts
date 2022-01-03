import { Component} from '@angular/core';
import {SimpleService} from './simple.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  task="";
  values:any[]=[];
  mydata:any[]=[];
  display="";
  user={
    name:'',
    number:0,
    email:0,
    password:''
  };
  
  constructor(public simpleService:SimpleService,private router:Router){}
  onEnter(){
    
     this.simpleService.data(this.task);
    (<HTMLInputElement>document.getElementById('task')).value="";
    this.router.navigateByUrl('');
  }
  onSubmit(f:NgForm){
    console.log(f.value)
    this.simpleService.onAdd(f.value);
  }
  openit() {
    document.getElementById("myForm").style.display = "block";
  }
   closeit() {
    document.getElementById("myForm").style.display = "none";
  }
  open() {
    document.getElementById("Form").style.display = "block";
  }
   close() {
    document.getElementById("Form").style.display = "none";
  }
 valid(){
  this.mydata=this.simpleService.onGet();
  var mailobject=(<HTMLInputElement>document.getElementById("mail")).value;
  var pswdobject=(<HTMLInputElement>document.getElementById("pswd")).value;
  var findobject=this.mydata.find(x=>x.email===mailobject);
  var find=this.mydata.find(x=>x.password===pswdobject);
  if(findobject && find ){
    document.getElementById("myForm").style.display = "none";
    (<HTMLInputElement>document.getElementById('mail')).value="";
    (<HTMLInputElement>document.getElementById('pswd')).value="";
  }
  else
  this.display="invalid details";
 }
}

