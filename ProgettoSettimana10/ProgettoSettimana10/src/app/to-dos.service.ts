import { Injectable } from '@angular/core';
import { Todo } from './models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class ToDosService {

  list:Todo [] = [];
  completed:Todo [] = [];

  constructor() { }

// metodi soltanto dichiarati nel service ma non importati nei components

  //chiarire questa funzione
  getTodos():Promise<Todo[]>{
    return new Promise((resolve)=>{
      setTimeout(()=>{resolve(this.list);
      },2000)
    })
  }


  addListItem(newItem: Todo): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.list.push(newItem);
        resolve();
      }, 2000);
    });
  }
/*
  removeTodoById(id: number): Promise<Todo> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = this.todos.findIndex((todo) => todo.id === id);
        if (index !== -1) {
          const todo = this.todos.splice(index, 1)[0];
          resolve(todo);
        } else {
          reject(new Error("Todo not found"));
        }
      }, 2000);
    });
  }
*/

  getCompletedTodos(): Todo[] {
    return this.completed;
  }

  addToCompleted(newItem: Todo): void {
    this.completed.push(newItem);
  }

  moveToCompleted(id: number): void {
    setTimeout(() => {
      const index = this.list.findIndex((newItem) => newItem.id === id);
      if (index !== -1) {
        const todo = this.list.splice(index, 1)[0];
        this.completed.push(todo);
      }
    }, 2000);
  }

  }

