import { Injectable } from '@angular/core';
import { Todo } from './models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class ToDosService {

  list:Todo [] = [];

  constructor() { }

  /*addItemList(title:string):void{
    this.list.push({
      id:this.list.length +1, title, completed:false
    })*/
  }

