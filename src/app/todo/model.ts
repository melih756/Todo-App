import { OnInit } from "@angular/core";
import { TodoItem } from "./todoitem";


export class Model {
    name:string;
    items:TodoItem[];
    id:string;
    

    constructor(){
        this.name='Melih';
        this.items= [
            {description:"kahvaltı",action:true,images:"assets/breakfast.jpg",id:""},
            {description:"spor",action:true,images:"assets/sports.jpg",id:""},
            {description:"alışveriş",action:false,images:"assets/shopping.jpg",id:""}
            
        ];
    
    }

   
}


