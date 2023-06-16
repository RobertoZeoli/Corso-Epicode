import { Component, OnInit } from '@angular/core';
import { ToDosService } from '../to-dos.service';
import { Todo } from '../models/todo.interface';


@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.scss']
})
export class ToDosComponent implements OnInit {

  list:Todo [] = [];
  newItem:string = '';
  completedItems:any[] =[];

  constructor(private todoSrv:ToDosService) {
    this.todoSrv.getTodos().then(lista => this.list = lista.filter(task => !task.completed))
  }



  async addItemList(){
    if(this.newItem !== ''){
     const nuovo = await this.todoSrv.addListItem({title:this.newItem,completed:false});
      this.list.push(nuovo)
    }else{
      alert('Inserire nuovo elemento nella lista!!!')
    }
  };


  removeItemList(index:number){
    this.list.splice(index,1)
  }


  async completeItem(item: Todo|any,index:number){
    await this.todoSrv.completaItem({completed:true},item.id);
    this.list.splice(index,1);
  }

  ngOnInit(): void {
  }

}
