import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { catchError, of} from 'rxjs';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.scss']
})
export class RegistrazioneComponent implements OnInit {

  error!:string;

  constructor(private authSrv:AuthService, private router:Router) {  }

  ngOnInit(): void {
  }

  registra(form:NgForm){
    console.log(form.value);
    this.authSrv.signUp(form.value).pipe(catchError(error =>{
      console.error(error);
      this.error = error;
      form.reset();
      return of(null);

    })).subscribe(response=>{
      if(response){
        this.router.navigate(["/login"]);
      }
    })
  }

}
