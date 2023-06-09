import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'forms';

  @ViewChild('contenitoreForm', {static:true})contenitoreForm!:NgForm

  user:any = {
    name:'',
    alterEgo:'',
    power:'',
    enemy:'',
    planet:'',
    weakness:''
  }

  ngOnInit(): void{
    this.contenitoreForm.statusChanges?.subscribe(stato=>{console.log(`Stato del form:${stato}`);
  })
  }

  submitForm(){
    console.log(`Form inviato: ${this.contenitoreForm}`);

    this.user.name = this.contenitoreForm.value.name;
    this.user.alterEgo = this.contenitoreForm.value.alterEgo;
    this.user.power = this.contenitoreForm.value.power;
    this.user.enemy = this.contenitoreForm.value.enemy;
    this.user.planet = this.contenitoreForm.value.planet;
    this.user.weakness = this.contenitoreForm.value.weakness;

    this.contenitoreForm.reset();
  }
}

