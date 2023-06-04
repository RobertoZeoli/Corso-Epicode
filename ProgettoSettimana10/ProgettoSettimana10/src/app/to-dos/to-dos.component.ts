import { Component, OnInit } from '@angular/core';
import { ToDosService } from '../to-dos.service';
import { Todo } from '../models/todo.interface';


@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.scss']
})
export class ToDosComponent implements OnInit {

  list:string [] = [];
  newItem:string = '';
  completedItems:any[] =[];

  constructor() {}


  addItemList(){
    if(this.newItem !== ''){
      this.list.push(this.newItem)
      this.newItem = ''
    }else{
      alert('Inserire nuovo elemento nella lista!!!')
    }
  };


  removeItemList(index:number){
    this.list.splice(index,1)
  }


  completeItem(newItem:string){
    this.completedItems.push(newItem)
  }

  ngOnInit(): void {
  }

}
