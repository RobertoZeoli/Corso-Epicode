import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.interface';
import { ToDosComponent } from '../to-dos/to-dos.component';


@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss']
})
export class CompletatiComponent implements OnInit {

//qui avevo in mente di lavorare sempre con lo stesso array del to-dos component, ma non sono riuscito ad importarlo su questo altro componente.

  constructor() { }

  ngOnInit(): void {

  }

}
