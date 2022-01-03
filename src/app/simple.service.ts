import { Injectable } from "@angular/core";

@Injectable({
  providedIn:'root'
})
export class SimpleService{
  mydata:any[]=[];
  com:any[]=[];

  user=[
    {
   id:1,
   name:"Ram",
   number:9897867676,
   email:"ram@gmail.com",
   password:"ab"
    },
    {
     id:2,
     name:"Raj",
     number:6879809456,
     email:"raj@gmail.com",
     password:"bc"
    },
    {
     id:3,
     name:"geetha",
     number:8765768786,
     email:"geetha@gmail.com",
     password:"cd"
    },
  ]
  
constructor(){}

data(value:any){
 this.mydata.push(value);
}
onget(){
  return this.mydata;
}
comp(value:any){
this.com.push(value);
}
oncomp(){
  return this.com;
}
onAdd(datum:any){
  this.user.push(datum);
  console.log(this.user)
}
onGet(){
  return this.user;
}


}