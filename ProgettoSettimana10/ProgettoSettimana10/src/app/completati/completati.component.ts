import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.interface';
import { ToDosComponent } from '../to-dos/to-dos.component';


@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss']
})
export class CompletatiComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {

  }

}
