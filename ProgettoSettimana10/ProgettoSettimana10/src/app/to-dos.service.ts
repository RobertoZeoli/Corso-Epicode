import { Injectable } from '@angular/core';
import { Todo } from './models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class ToDosService {

  list:Todo [] = [];


  constructor() { }

// metodi soltanto dichiarati nel service ma non importati nei components

  //chiarire questa funzione
  getTodos():Promise<Todo[]>{
    return new Promise((resolve)=>{
      setTimeout(()=>{resolve(this.list);
      },2000)
    })
  }


  addListItem(newItem: Todo): Promise<Todo> {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.list.push(newItem);
        console.log(this.list);
        resolve(newItem);
      }, 2000);
    });
  }

  completaItem(task:Partial<Todo>,id:number):Promise<Todo>{
    return new Promise((resolve)=>{
      setTimeout(()=>{
        this.list.map((todo)=>{
          todo.id == id ? {...todo, ...task}:todo;
        });
        const aggiornato = this.list.find((todo)=> todo.id == id);
        resolve(aggiornato!);
      })
    })
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


  }

