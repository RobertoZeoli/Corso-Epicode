import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, throwError } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tap, catchError } from 'rxjs/operators';
import { Auth } from './auth.interface';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper = new JwtHelperService();
  baseUrl = environment.baseURL;
  authSubject = new BehaviorSubject<null | Auth>(null)
  utente!: Auth;
  user$ = this.authSubject.asObservable();
  timeOutLogOut: any;

  constructor(private http:HttpClient, private router:Router) { }

  signUp(
    data:{
      email:string;
      nome:string;
      cognome:string;
      password:string;
    }){
      return this.http.post(`${this.baseUrl}register`, data).pipe(catchError((err)=>this.errors(err)))
  }

  private errors(err:any){
    switch (err.error) {
      case 'Email already exists':
        return throwError('Email già presente');
      case 'Email format is invalid':
        return throwError('Format email non valido');
      case 'Incorrect password':
        return throwError('Password errata');
      case 'Password is too short':
        return throwError('Password errata');
      case 'Cannot find user':
        return throwError('Utente inesistente');
      default:
        return throwError('Errore nella chiamata');
    }
  }

}
