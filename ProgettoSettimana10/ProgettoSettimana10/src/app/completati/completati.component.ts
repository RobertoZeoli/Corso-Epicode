import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.interface';
import { ToDosService } from '../to-dos.service';


@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss']
})
export class CompletatiComponent implements OnInit {

list:Todo[] = [];

  constructor(private todoSrv:ToDosService) {
    this.todoSrv.getTodos().then(lista => this.list = lista.filter(task => task.completed));
    console.log(this.list);
   }

  ngOnInit(): void {

  }

}
