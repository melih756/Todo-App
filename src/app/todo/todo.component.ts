import { IMAGE_LOADER } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Model } from './model';
import { TodoItem } from './todoitem';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {


  displayAll:boolean=true;
  inputText: string;

  constructor(){

  }

  ngOnInit(){
    
  }

  urls=[
    'assets/breakfast.jpg',
    'assets/sports.jpg',
    'assets/shopping.jpg'
  ];

  
  model = new Model();

  getName(): any{
    return this.model.name;
  }


 getItems(){
    if(this.displayAll){
      return this.model.items
    }
    return this.model.items.filter(item=>!item.action);
 }

 getImages(){
  if(this.model.id==this.model.id){
    return 'assets/breakfast.jpg'
  }
  return 'null';
 }

 addItem() {
  if(this.inputText!="") {
    this.model.items.push({
      description: this.inputText, action: false,
      images:"null",id:"null"
    });
    this.inputText = "";
       } 
       else {
          alert("bilgi giriniz");
       }
 }

  displayCount(){
    return this.model.items.filter(i=>i.action).length;
  }

  falseCount(){
    return this.model.items.filter(i=>!i.action).length;
  }
  
  getBtnClasses() {
    return   {
      'disabled': this.inputText.length==0,
      'btn-secondary': this.inputText.length==0,
      'btn-primary': this.inputText.length>0
    }

  }

} 


