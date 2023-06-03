import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.interface';
import { ToDosService } from '../to-dos.service';


@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.scss']
})
export class ToDosComponent implements OnInit {

  list:string [] = [];
  newItem:string = '';

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

  ngOnInit(): void {
  }

}
